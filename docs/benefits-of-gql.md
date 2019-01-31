---
id: benefits-of-gql
title: Benefits of GraphQL
---

GraphQL is awesome for the smash.gg public API. Why?
**Because you can get exactly what you need without a bunch of extraneous data.** 

Let's suppose you have an application where you aggregate the results of important tournaments.
EVO 2018 just wrapped up, and you want your application to display the name of each event in EVO 2018,
along with the placement + gamertag of the top 3 finishers in each event. 

If you were retrieving this data using a REST API, then you can imagine how much data you're going to be handling in your application to filter to what you need.
It would probably involve multiple requests, and the responses would probably contain several unnecessary fields for each event,
far more than three standings, and some extra information about each entrant that you didn't need.

With GraphQL, however, the response is going to be **EXACTLY WHAT YOU ASKED FOR**.
If you want the name of each event, and the placement + names of the top 3 finishers, from EVO 2018, then all you need to do is ask.

## Example Request

```graphql
query TournamentQuery($slug: String, $page: Int!, $perPage: Int!) {
        tournament(slug: $slug){
            events {
              name
              standings(query: {
                page: $page
                perPage: $perPage
              }){
                nodes{
                  standing
                  entrant{
                    name
                  }
                }
              }
            }
        }
    }
```

Request variables! *Adjust to taste- want 4 or 5 standings instead of 3? Just change the value.*

```json
{
  "slug": "evo2018",
  "page": 1,
  "perPage": 3
}
```

## Example Response

LOOK AT IT! IT'S WHAT YOU ASKED FOR! 1.8 KB of exactly what you wanted.
**Nothing more, and nothing less.**
See why this is awesome? Add and subtract fields as you see fit for your application's uses.
It will reduce the number of requests - and the size of the responses - that your application will be handling.
That, in turn, will translate into **time savings** and **data savings** for your end users.
For comparison, retrieving the top 3 standings in our *old* API for just Melee Singles alone at EVO 2018 <a href="https://api.smash.gg/tournament/evo-2018/event/evo-2018-1/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=1&per_page=3" target="_blank">involved a 21.1 KB response</a>!

```json
{
  "data": {
    "tournament": {
      "events": [
        {
          "name": "DRAGON BALL FighterZ",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "Echo Fox | SonicFox"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "CAG | GO1"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "CAG | Fenritti"
                }
              }
            ]
          }
        },
        {
          "name": "Street Fighter V: Arcade Edition",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "Mousesports | Problem-X"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "Echo Fox | Tokido"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "CYG BST | | Fuudo"
                }
              }
            ]
          }
        },
        {
          "name": "TEKKEN 7",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "Fursan | LowHigh"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "UYU | qudans"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "ITS | | Lil Majin"
                }
              }
            ]
          }
        },
        {
          "name": "Super Smash Bros. for Wii U",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "Lima"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "CaptainZack"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "DNG | Nietono"
                }
              }
            ]
          }
        },
        {
          "name": "Super Smash Bros. Melee",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "TSM | Leffen"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "[A] | Armada"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "PG | Plup"
                }
              }
            ]
          }
        },
        {
          "name": "BlazBlue: Cross Tag Battle",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "heiho"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "PAG|HELLA | Fame96"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "GRPT|BE | DORA_BANG"
                }
              }
            ]
          }
        },
        {
          "name": "Guilty Gear Xrd REV2",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "OMITO"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "SURUGAYA | Machabo"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "WongNation | LostSoul"
                }
              }
            ]
          }
        },
        {
          "name": "Injustice 2",
          "standings": {
            "nodes": [
              {
                "standing": 1,
                "entrant": {
                  "name": "Noble | Rewind"
                }
              },
              {
                "standing": 2,
                "entrant": {
                  "name": "Noble | Tweedy"
                }
              },
              {
                "standing": 3,
                "entrant": {
                  "name": "Echo Fox | SonicFox"
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