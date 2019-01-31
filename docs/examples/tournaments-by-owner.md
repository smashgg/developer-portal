---
id: tournaments-by-owner
title: Tournaments by Owner
---

In this example, we will query for upcoming tournaments filtered to particular owner (a user).
Please note that this query will not retrieve all tournaments the user was an admin for.
It will only return tournaments which that user created.

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```graphql
query TournamentsByowner($perPage: Int, $ownerId: Int) {
    tournaments(query: {
      perPage: $perPage
      filter: {
        ownerId: $ownerId
      }
    }) {
    nodes {
      id
      name
      slug
    }
  }
},
{
  "ownerId": 161429,
  "perPage": 4
}
```

<!--Response-->

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 91696,
          "name": "Viking Shield 14 - OCE - Rocket League",
          "slug": "tournament/viking-shield-14-oce-rocket-league"
        },
        {
          "id": 90597,
          "name": "Viking Shield 13 - OCE - Rocket League",
          "slug": "tournament/viking-shield-13-oce-rocket-league"
        },
        {
          "id": 87892,
          "name": "Viking Shield 12 - OCE - Rocket League",
          "slug": "tournament/viking-shield-12-oce-rocket-league-1"
        },
        {
          "id": 87600,
          "name": "Viking Shield 11 - OCE - Rocket League",
          "slug": "tournament/viking-shield-11-oce-rocket-league"
        }
      ]
    }
  },
  "actionRecords": []
}
```

<!--END_DOCUSAURUS_CODE_TABS-->