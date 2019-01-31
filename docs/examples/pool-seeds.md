---
id: pool-seeds
title: Pool Seeds
---

In this example, we will query for the seeding of a phase group (a pool)
in the Rivals of Aether Singles event at Genesis 5.
We'll include the name, and the seed id, of each entrant. 

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```graphql
query PoolSeeds($phaseGroupId: Int) {
  phaseGroup(id: $phaseGroupId) {
    seeds {
      id
      entrant {
        name
      }
    }
  }
},
{
  "phaseGroupId": "398727"
}
```

<!--Response-->

```json
{
  "data": {
    "phaseGroup": {
      "seeds": [
        {
          "id": 5637009,
          "entrant": {
            "name": "FullStream"
          }
        },
        {
          "id": 6369388,
          "entrant": {
            "name": "ERG | Lord Bagel"
          }
        },
        {
          "id": 5640356,
          "entrant": {
            "name": "FP | Jorane"
          }
        },
        {
          "id": 6427487,
          "entrant": {
            "name": "ICE | TheBestAdamCarra"
          }
        },
        {
          "id": 6369837,
          "entrant": {
            "name": "Tandori"
          }
        },
        {
          "id": 6311614,
          "entrant": {
            "name": "PhD | Cheesedog"
          }
        },
        {
          "id": 5638050,
          "entrant": {
            "name": "SSS HEAT | P-Cakes`"
          }
        },
        {
          "id": 6359891,
          "entrant": {
            "name": "[MB] | Youngblood"
          }
        },
        {
          "id": 6373129,
          "entrant": {
            "name": "Accel"
          }
        },
        {
          "id": 6428184,
          "entrant": {
            "name": "D'artagnan"
          }
        },
        {
          "id": 6347532,
          "entrant": {
            "name": "GShark"
          }
        },
        {
          "id": 6440792,
          "entrant": {
            "name": "Churro"
          }
        },
        {
          "id": 6423657,
          "entrant": {
            "name": "Sweet Lou"
          }
        },
        {
          "id": 5636974,
          "entrant": {
            "name": "Dcmaster"
          }
        },
        {
          "id": 6406094,
          "entrant": {
            "name": "MTEB"
          }
        },
        {
          "id": 5655698,
          "entrant": {
            "name": "NoMo"
          }
        },
        {
          "id": 6432213,
          "entrant": {
            "name": "Splish"
          }
        },
        {
          "id": 5661739,
          "entrant": {
            "name": "Vontre"
          }
        },
        {
          "id": 5975546,
          "entrant": {
            "name": "TipC"
          }
        }
      ]
    }
  },
  "actionRecords": []
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
