---
id: update-phase-seeding
title: Update Phase Seeding
---

In this example, we will update the seeding for a phase in one of our events.
To do this, you will need an auth token belonging to an admin in your tournament!

**NOTE: You will need an API [auth token](/docs/authentication)
belonging to a user who has admin permissions for your tournament.**

## Step 1: Obtaining the current seeding via API

To obtain the current phase seeding via API, use a request like this one:

```graphql
query GetPhaseSeeds($phaseId: ID!) {
  phase(id: $phaseId) {
    id
    numSeeds
    seeds(query: { page: 1, perPage: 60 }) {
      nodes {
        id
        seedNum
        entrant {
          id
          participants {
            id
            gamerTag
          }
        }
      }
    }
  }
}
```

Variables

```graphql
{
  "phaseId": 519453
}
```

Obviously, you have the freedom to request fields you want here and omit fields you don't want.
For example, you can add rankings data for a player.
At bare minimum, you will need `id` and `seedNum` for each Seed in the phase.
Once you query for this data, you can write it to a .csv and follow the below steps
or store/manipulate it in some other application of your choosing.

## Step 1 Alternative: Obtaining the current seeding via phase export

To obtain the current phase seeding via phase export, go to the Bracket Setup page in tournament admin.
Then, for the phase you want to update seeding for, click the export button to download a .csv of its current seeding.

![export button](https://imgur.com/plcr1y4.png)

## Step 2: Manipulating the Seeding

Once you have the current seeding in a format to your liking, you can get started on editing it.
In this example, we'll be editing it in Google Sheets using the data from the .csv Phase Seeding Export download.
I've highlighted the columns which we'll need later when we post the updated seeding using a GQL mutation.

![google sheet](https://imgur.com/p9IlAMb.png)

Here, you would move seeds around to your liking.
Your workflow is up to you!
In my case, I decided to make my workflow:

1. Add a column to my sheet for 'power'
2. Assign a rough 1-10 'power' to each entrant in this column (1 = worst, 10 = best)
3. Order my seeds by this power in a descending order
4. Make any finer adjustments in those 'power levels' as needed
5. Copy and paste these into a separate sheet with just the info I need for updating (seedId and seedNum)

Here's what my sheet looked like after my 'step 3':

![sheet after step 3](https://imgur.com/cE4271y.png)

Here's what my second sheet looked like after my 'step 5':

![sheet after step 5](https://imgur.com/YUZEkKC.png)

## Step 3: Updating the Seeding via API

Now that we have our phase seeds finalized in a sheet, we'll update them via API!
We can see what the current phase seeding looks like in the tournament admin UI
(I just entered/seeded these entrants in alphabetical order initially):

![current seeding](https://imgur.com/Pz2E5Sa.png)

For our example, we've written a Python script to:

1. Read the seeds off our sheet into an array (⚠️ Your sheet's share settings need to be
   _'Anyone with the link'_ )
2. Post them using a GQL mutation request

```python
import csv
import urllib.request as urllib2
from graphqlclient import GraphQLClient
import codecs

## Make sure to run `pip install graphqlclient`
phaseId = 123456
sheetsKey = 'YOUR_SHEETS_KEY'
authToken = 'YOUR_AUTH_TOKEN'

apiVersion = 'alpha'

# Make sure your sheet share link settings are 'anyone with the link'
url = 'https://docs.google.com/spreadsheets/d/' + sheetsKey + '/export?format=csv'
ftpstream = urllib2.urlopen(url)
cr = csv.reader(codecs.iterdecode(ftpstream, 'utf-8'))

seedMapping = []
for index, row in enumerate(cr):
    if index == 0: # skip the header row
        continue
    seedId = row[2] # check your columns!
    seedNum = row[0] # check your columns!
    seedMapping.append({
        "seedId": seedId,
        "seedNum": seedNum,
    })

numSeeds = len(seedMapping)

print("Importing " + str(numSeeds) + " seeds to phase " + str(phaseId) + "...")

client = GraphQLClient('https://api.start.gg/gql/' + apiVersion)
client.inject_token('Bearer ' + authToken)

result = client.execute('''
mutation UpdatePhaseSeeding ($phaseId: ID!, $seedMapping: [UpdatePhaseSeedInfo]!) {
  updatePhaseSeeding (phaseId: $phaseId, seedMapping: $seedMapping) {
    id
  }
}
''',
{
    "phaseId": phaseId,
    "seedMapping": seedMapping,
})

resData = json.loads(result)

if 'errors' in resData:
    print('Error:')
    print(resData['errors'])
else:
    print('Success!')
```

The output of this script will look something like this:

![script terminal](https://imgur.com/Yk3zW4r.png)

After running the script successfully, we can check again in the admin UI to see
the updated phase seeding:

![updated seeding](https://imgur.com/RApajkN.png)

And we're done!

## Step 4: Resolving Constraints and Schedule Conflicts (Optional)

If you're running a tournament with several events, you may want to resolve custom
constraints (players requesting certain pools, or avoiding early matchups between
certain players).
In this case, you will want to follow the steps to
[Resolve Schedule Conflicts](/docs/examples/resolve-conflicts).
