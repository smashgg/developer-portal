---
id: resolve-conflicts
title: Resolve Schedule Conflicts
---

In this example, we will invoke smash.gg's algorithm for resolving schedule conflicts
 (and other user-defined constraints) using an API request.
This is a separate step from updating phase seeds, which is explained in the
 [Update Phase Seeding doc](/docs/examples/update-phase-seeding).

In this example, I will be using a test tournament where:

- My tournament has two events (RL Singles, and Demolition Derby)
- My tournament has two waves: Wave A from 12pm-2pm, and Wave B from 2pm-4pm
- Each event has 4 pools
- So both events have Pools A1, A2, B1, and B2
- Manyy people have registered for the tournament, and several are in both events

In this scenario, it is likely that I will have both schedule conflicts
 and custom contraints to solve for.
We'll start by defining the custom contraints.

 ## Step 1: Creating custom constraints in smash.gg

I recommend reading this [help center article](https://help.smash.gg/seeding/conflicts)
 for a more thorough explanation of creating constraints for your tournament.
In short, these are custom-defined constraints to:

- Avoid a specific matchup from happening early (like when two players are from the same region)
- Try to accommodate a schedule request ("I can't make it for Wave A pools but I can play in Wave B!")

**Schedule constraints** will look something like "[Boomer] can play in [Wave B] for the [Demolition Derby]
 event and cannot play in the other waves for that event"

**Player constraints** will look something like "[Tex] should not play against
 [Sultan] early in the [RL Singles] event"

**Schedule conflicts** are automatically determined.
These are simply instances where a player is scheduled to play in multiple pools
 (like one pool in one event, and a second pool in another event) at the same time.

Once you've defined your schedule constraints and your player constraints,
 you're ready to execute our algorithm for solving them.
My list of constraints looks like this:

![list of constraints](https://imgur.com/pQLJAUE.png)

## Step 2: Executing smash.gg's Algorithm to Resolve Constraints & Conflicts

Our algorithm will attempt to solve as many of the schedule conflicts, schedule constraints,
 and player constraints as possible.
Our example is very simple, but for a tournament like 
 [Genesis 6](https://blog.smash.gg/b3a75c936dcb) this saves
 countless hours of time!

**NOTE: You will need an API auth token belonging to a user who has admin permissions for your tournament.**

My simple Python script for my example looks like this:
```Python
from graphqlclient import GraphQLClient
import json

## Make sure to run `pip install graphqlclient`
tournamentId = YOUR_TOURNAMENT_ID

# These options define the top seeds I can lock for an event.
# In this case, I locked the top 8 seeds for one of my events!
options = {
    "lockedSeeds": [
        {
            "eventId": 311776,
            "numSeeds": 8
        }
    ],
}


authToken = 'YOUR_AUTH_TOKEN'

apiVersion = 'alpha'

print("Resolve conflicts in tournament " + str(tournamentId) + "...")

client = GraphQLClient('https://api.smash.gg/gql/' + apiVersion)
client.inject_token('Bearer ' + authToken)

result = client.execute('''
mutation ResolveScheduleConflicts ($tournamentId: Int!, $options: ResolveConflictsOptions!) {
  resolveScheduleConflicts (tournamentId: $tournamentId, options: $options) {
    id
  }
}
''',
{
    "tournamentId": tournamentId,
    "options": options,
})

resData = json.loads(result)

if 'errors' in resData:
    print('Error:')
    print(resData['errors'])
else:
    print('Success!')

```

After executing this, you can check the results of the conflicts on smash.gg!

In my example, I checked that:

- Boomer was in Wave B for Demolition Derby
- Stinger was in Wave A for RL Singles
- Tex was not playing Sultan early in RL Singles
- Armstrong was not playing Marley early in RL Singles

These were all true, and all schedule conflicts were solved!
For smaller sets of constraints like this example, this is ideally what you will see:
 every constraint is solved, and every schedule conflicted is avoided.
For larger events, there many not be a possible way to avoid 100% of them,
 so make sure you look on your Conflicts page in tournament admin to check.