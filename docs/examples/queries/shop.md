---
id: shop
title: Shop Info, Goals, and Order Messages
sidebar_label: "Shop Info"
---

In this example, we will query for a shop, its shop levels, and order messages by the shop slug.
In this case, we've chosen the Summit of Time Compendium as the shop.

## Example

<!--DOCUSAURUS_CODE_TABS-->

<!--Request-->

```graphql
query Shop ($slug: String) {
  shop (slug: $slug) {
    id
    name
    slug
    messages(query: {
        page:1
        perPage:5
    }) {
      nodes {
        total
        message
        gamertag
        name
      }
    }
    levels(query: {
        page:1
        perPage:5
    }) {
      nodes {
        name
        goalAmount
        currAmount
        description
      }
    }
  }
}
{
  "slug": "shop/compendium-47"
}
```

<!--Response-->

```json
{
  "data": {
    "shop": {
      "id": 2832,
      "name": "Compendium",
      "slug": "shop/compendium-47",
      "messages": {
        "nodes": [
          {
            "total": 121.5,
            "message": "Do work Rye.",
            "gamertag": "Manager Matt",
            "name": null
          },
          {
            "total": 147,
            "message": "👊🏼🐻💜",
            "gamertag": "Bear",
            "name": "Bassem Dahdouh"
          },
          {
            "total": 28,
            "message": "i need to see my  G Dr Gross in this summit",
            "gamertag": "DjOn6",
            "name": "Newton Perez"
          },
          {
            "total": 225,
            "message": "Lets go Waz!!",
            "gamertag": null,
            "name": null
          },
          {
            "total": 50.5,
            "message": "Always supporting. Btw Lets Go Dr-Gross, #Onyxgaming #XtVen",
            "gamertag": "TheSnake13",
            "name": "Steven Santana"
          }
        ]
      },
      "levels": {
        "nodes": [
          {
            "name": "Prize Pool",
            "goalAmount": null,
            "currAmount": 17839.24,
            "description": "With Summit already putting in $10k, how much can we raise it? Help grow one of the biggest prize pools in Mortal Kombat 11."
          },
          {
            "name": "Mystery Game Event",
            "goalAmount": 1500,
            "currAmount": 426.15,
            "description": "8 players. 3 games. Single Elim. Different mystery game each round. $750 prize for first. Expect dumb stuff."
          },
          {
            "name": "Random v Random",
            "goalAmount": 1000,
            "currAmount": 326.92,
            "description": "Random characters. One round. First to three. The players will compete in a single elimination bracket in MK11 and 1st place will take home $500!"
          },
          {
            "name": "Commentator Bracket",
            "goalAmount": 1000,
            "currAmount": 1000,
            "description": "You know what they say: those that can't play, cast. Some can play though. We'll find out."
          },
          {
            "name": "Rock, Paper, Scissors Summit of Time Championship",
            "goalAmount": 1000,
            "currAmount": 1000,
            "description": "Potentially the most important bracket of the event... The 16 players compete in a best of 3, single elimination RPS bracket for $500. It's not luck it's skill. Always go rock. Unless they go rock. Then go paper."
          }
        ]
      }
    }
  },
  "actionRecords": [],
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
