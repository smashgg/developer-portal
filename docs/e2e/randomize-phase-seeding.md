---
id: randomize-phase-seeding
title: Randomize Phase Seeding
---

In this example, we will randomize (or 'shuffle') the phase seeding for a phase in an event.
This is useful for tournament organizers who want to have a 'random seeding' event.

**NOTE: You will need an API [auth token](/docs/authentication)
 belonging to a user who has admin permissions for your tournament.**

The 3 basic steps for this are:

1) Acquire current `seedMapping` via GQL query
2) Shuffle that seeding to create a new `seedMapping`
3) Post that new `seedMapping` via GQL mutation

In my example here, I use one Python script to perform all three of these actions.

```Python
from graphqlclient import GraphQLClient
import json
import random

## Make sure to run `pip install graphqlclient`
phaseId = YOUR_PHASE_ID
authToken = 'YOUR_AUTH_TOKEN'
apiVersion = 'alpha'

client = GraphQLClient('https://api.smash.gg/gql/' + apiVersion)
client.inject_token('Bearer ' + authToken)

## Obtain Current Seeding
getSeedsResult = client.execute('''
query getCurrentSeeds($phaseId:Int!){
  phase(id:$phaseId){
    seeds(query:{
      perPage: 100
    }){
      nodes{
        id
        seedNum
      }
    }
  }
}
''',
{
  "phaseId":phaseId
})

resData = json.loads(getSeedsResult)

if 'errors' in resData:
    print('Error:')
    print(resData['errors'])
if not resData['data']['phase']:
	print('Phase not found')

## Shuffle Current Seeding
else:
	print('Current seeding acquired...')
	seedMapping = []
	for key, value in enumerate(resData['data']['phase']['seeds']['nodes']):
		seedId = value['id']
		seedNum = value['seedNum']
		seedMapping.append({
			"seedId": seedId,
			"seedNum": seedNum,
		})

	## Put the new seeding here
	newSeedMapping = []

	## Collect the seedIds here and then shuffle them
	seedIds = []
	for key, value in enumerate(seedMapping):
		seedIds.append(value['seedId'])
	random.shuffle(seedIds)

	## Build the new seeding map with the shuffled seedIds
	for key, value in enumerate(seedMapping):
		seedNum = key + 1
		newSeedMapping.append({
			"seedId": seedIds[key],
			"seedNum": seedNum
		})

	numSeeds = len(seedMapping)
	print("Randomizing " + str(numSeeds) + " seeds in phase " + str(phaseId) + "...")

	## Post the shuffled seeding via GQL Mutation
	seedingUpdateResult = client.execute('''
	mutation UpdatePhaseSeeding ($phaseId: Int!, $seedMapping: [UpdatePhaseSeedInfo]!) {
	updatePhaseSeeding (phaseId: $phaseId, seedMapping: $seedMapping) {
		id
	}
	}
	''',
	{
		"phaseId": phaseId,
		"seedMapping": newSeedMapping,
	})

	resData = json.loads(seedingUpdateResult)

	if 'errors' in resData:
		print('Error:')
		print(resData['errors'])
	else:
		print('Success!')
```

## Checking the seeding on smash.gg

Here was my seeding before running my script:

![beforeSeeding](https://imgur.com/gesQAmG.png)

As expected, my seeding afterwards is completely different!

![afterSeeding](https://imgur.com/msSmwmE.png)