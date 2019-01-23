---
id: resolve-conflicts
title: Resolve Schedule Conflicts
---

In this example, we will invoke smash.gg's algorithm for resolving schedule conflicts
 (and other user-defined constraints) using an API request.
This is a separate step from updating phase seeds, which is explained in the
 [Update Phase Seeding doc](/docs/examples/update-phase-seeding).

In this example, I will be using a test tournament where:

- My tournament has two events
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

**Schedule constraints** will look something like "[Player] can play in [this wave/these waves] and cannot
 play in [this other wave/these other waves]"

**Player constraints** will look something like "[Player] should not play [other Player] early"

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

My simple Python script for my example looks like this:
```Python
from graphqlclient import GraphQLClient

## Make sure to run `pip install graphqlclient`
tournamentId = YOUR_TOURNAMENT_ID
options = {
	"lockedSeeds": [
		{
			eventId: ,
			numSeeds: 8
		}
	]
}

authToken = 'YOUR_AUTH_TOKEN'

apiVersion = 'alpha'

print("Resolve conflicts in tournament " + tournamentId + "...")

client = GraphQLClient('https://api.smash.gg/gql/' + apiVersion)
client.inject_token('Bearer ' + authToken)

result = client.execute('''
mutation ResolveScheduleConflicts ($tournamentId: Int!, $options: [ResolveConflictsOptions]!) {
  resolveScheduleConflicts (tournamentId: $tournamentId, options: $options) {
    id
  }
}
''',
{
	"tournamentId": tournamentId,
	"options": options,
})

print('Success!')
```