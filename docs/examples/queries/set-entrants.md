---
id: set-entrants
title: Set Entrants
---

In this example, we will query for the entrants in the grand finals set of Take The Shot 3,
a 3v3 Rocket League event.
In a teams event, an entrant has multiple participants,
so we will get the available fields for each of those, too!

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```graphql
query SetEntrants($setId: String!) {
  set(id: $setId) {
    id
    slots {
      id
      entrant {
        id
        name
        participants {
          id
          gamerTag
          connectedAccounts
        }
      }
    }
  }
},
{
  "setId": "7851789"
}
```

<!--Response-->

```json
{
  "data": {
    "set": {
      "id": "7851789",
      "slots": [
        {
          "id": "7851789-0",
          "entrant": {
            "id": 550559,
            "name": "Iris",
            "participants": [
              {
                "id": 647544,
                "gamerTag": "Torment",
                "connectedAccounts": {
                  "steam": {
                    "value": "76561198097285289",
                    "steamName": "Torment"
                  }
                }
              },
              {
                "id": 648101,
                "gamerTag": "Lachinio",
                "connectedAccounts": {
                  "steam": {
                    "value": "76561197995926727",
                    "steamName": "Lachinio"
                  }
                }
              },
              {
                "id": 648919,
                "gamerTag": "SquishyMuffinz",
                "connectedAccounts": {
                  "steam": {
                    "value": "76561198286759507",
                    "steamName": "Squishy"
                  }
                }
              }
            ]
          }
        },
        {
          "id": "7851789-1",
          "entrant": {
            "id": 549815,
            "name": "NRG",
            "participants": [
              {
                "id": 648118,
                "gamerTag": "Jacob",
                "connectedAccounts": {
                  "steam": {
                    "value": "76561198043445470",
                    "steamName": "Jacob"
                  }
                }
              },
              {
                "id": 648119,
                "gamerTag": "GarrettG",
                "connectedAccounts": {
                  "steam": {
                    "value": "76561198136523266",
                    "steamName": "NRG GarrettG"
                  }
                }
              },
              {
                "id": 648135,
                "gamerTag": "Fireburner",
                "connectedAccounts": {
                  "steam": {
                    "value": "76561198070392546",
                    "steamName": "Fireburner"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  },
  "actionRecords": []
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
