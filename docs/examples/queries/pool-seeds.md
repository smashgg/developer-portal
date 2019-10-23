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
query PoolSeeds($phaseGroupId: ID!, $page: Int!, $perPage: Int!) {
  phaseGroup(id: $phaseGroupId) {
    id
    seeds(query: {
      page: $page
      perPage: $perPage
    }){
      pageInfo {
        total
      }
      nodes {
        entrant {
        id
        name
        }
      }
    }
  }
},
{
  "phaseGroupId": 398727,
  "page": 1,
  "perPage": 5
}
```

<!--Response-->

```json
{
  "data": {
    "phaseGroup": {
      "id": 398727,
      "seeds": {
        "pageInfo": {
          "total": 19
        },
        "nodes": [
          {
            "entrant": {
              "id": 902669,
              "name": "FullStream"
            }
          },
          {
            "entrant": {
              "id": 905609,
              "name": "FP | Jorane"
            }
          },
          {
            "entrant": {
              "id": 1248107,
              "name": "ERG | Lord Bagel"
            }
          },
          {
            "entrant": {
              "id": 902688,
              "name": "ICE | TheBestAdamCarra"
            }
          },
          {
            "entrant": {
              "id": 1248525,
              "name": "Tandori"
            }
          }
        ]
      }
    }
  },
  "extensions": {
    "queryComplexity": 6
  },
  "actionRecords": [],
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
