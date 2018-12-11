---
id: recent-sets-by-player
title: Recent Sets by Player(s)
sidebar_label: Sets by Player
---
In this example, we will query for recent sets involving a specific player
 (optionally including a specific opponent player).
In future iterations, we will add support for filtering sets based on certain values
 (like whether a set is a DQ/bye or not, whether the participants were verified or not, etc.)
 and pagination for these results.

Please note that currently, results will only include sets where the queried participant (attendee) was verified.
You can read a deeper explanation of this topic in our
 <a href="https://help.smash.gg/attendee-management/attendee-confirmation/attendee-confirmation-requests-overview"
 target="_blank">help center articles on attendee confirmation</a>.

## Example #1 Request (not Specifying Opponent)

```GraphQL
query setsByPlayer($playerId: Int!) {
  player(id: $playerId) {
    id
    gamerTag
    recentSets{
      id
      phaseGroupId
      event{
        name
        tournament{
          name
        }
      }
      displayScore
    }
  }
}
```

Request Variables

```json
{
  "playerId": 148649
}
```

## Request #1 Response

```json
{
  "data": {
    "player": {
      "id": 148649,
      "gamerTag": "NyChrisG",
      "recentSets": [
        {
          "id": "17280095",
          "phaseGroupId": 785189,
          "event": {
            "name": "Capcom Pro Tour Premier Event - Street Fighter V: Arcade Edition",
            "tournament": {
              "name": "Red Bull Conquest LCQ & Finals, CPT NA Regional Finals"
            }
          },
          "displayScore": "EG | NyChrisG 2 - SBK | Exceed 0"
        },
        {
          "id": "17280092",
          "phaseGroupId": 785189,
          "event": {
            "name": "Capcom Pro Tour Premier Event - Street Fighter V: Arcade Edition",
            "tournament": {
              "name": "Red Bull Conquest LCQ & Finals, CPT NA Regional Finals"
            }
          },
          "displayScore": "DQ"
        },
        {
          "id": "17280056",
          "phaseGroupId": 785189,
          "event": {
            "name": "Capcom Pro Tour Premier Event - Street Fighter V: Arcade Edition",
            "tournament": {
              "name": "Red Bull Conquest LCQ & Finals, CPT NA Regional Finals"
            }
          },
          "displayScore": "EG | NyChrisG 2 - Darkchild 1"
        },
        {
          "id": "17176361",
          "phaseGroupId": 762037,
          "event": {
            "name": "Street Fighter III: 3rd Strike",
            "tournament": {
              "name": "Youmacon Battle Opera 2018"
            }
          },
          "displayScore": "EG | NyChrisG 3 - Hispanic Jap 0"
        },
        {
          "id": "17176360",
          "phaseGroupId": 762037,
          "event": {
            "name": "Street Fighter III: 3rd Strike",
            "tournament": {
              "name": "Youmacon Battle Opera 2018"
            }
          },
          "displayScore": "EG | NyChrisG 3 - Vencabot 1"
        },
        {
          "id": "17176355",
          "phaseGroupId": 762037,
          "event": {
            "name": "Street Fighter III: 3rd Strike",
            "tournament": {
              "name": "Youmacon Battle Opera 2018"
            }
          },
          "displayScore": "EG | NyChrisG 2 - PGN | Roadie 0"
        },
        {
          "id": "17170805",
          "phaseGroupId": 782679,
          "event": {
            "name": "Ultimate Marvel vs Capcom 3",
            "tournament": {
              "name": "Youmacon Battle Opera 2018"
            }
          },
          "displayScore": "EG | NyChrisG 3 - Livinlegend26 0"
        },
        {
          "id": "17170801",
          "phaseGroupId": 782679,
          "event": {
            "name": "Ultimate Marvel vs Capcom 3",
            "tournament": {
              "name": "Youmacon Battle Opera 2018"
            }
          },
          "displayScore": "DQ"
        },
        {
          "id": "17164119",
          "phaseGroupId": 761378,
          "event": {
            "name": "Ultimate Marvel vs Capcom 3",
            "tournament": {
              "name": "Youmacon Battle Opera 2018"
            }
          },
          "displayScore": "EG | NyChrisG 3 - USASportsTeam 0"
        },
        {
          "id": "17170797",
          "phaseGroupId": 782679,
          "event": {
            "name": "Ultimate Marvel vs Capcom 3",
            "tournament": {
              "name": "Youmacon Battle Opera 2018"
            }
          },
          "displayScore": "Bye"
        }
      ]
    }
  },
  "actionRecords": []
}
```

## Example #2 Request (Specifying Opponent Player)

```GraphQL
query setsByPlayer($playerId: Int!, $oppPlayerId: Int!) {
  player(id: $playerId) {
    id
    gamerTag
    recentSets(opponentId: $oppPlayerId){
      id
      phaseGroupId
      event{
        name
        tournament{
          name
        }
      }
      displayScore
    }
  }
}
```

Request Variables

```json
{
  "playerId": 1016,
  "oppPlayerId": 1017
}
```

## Example #2 Response

```json
{
  "data": {
    "player": {
      "id": 1016,
      "gamerTag": "Fiction",
      "recentSets": [
        {
          "id": "17492247",
          "phaseGroupId": 834991,
          "event": {
            "name": "Melee Singles",
            "tournament": {
              "name": "Wombo Combo: 10 Year Anniversary"
            }
          },
          "displayScore": "Tempo | S2J 1 - Fiction 3"
        },
        {
          "id": "17436737",
          "phaseGroupId": 804537,
          "event": {
            "name": "Melee Singles",
            "tournament": {
              "name": "Fight For SoCal"
            }
          },
          "displayScore": "Tempo | S2J 3 - Fiction 1"
        },
        {
          "id": "17436736",
          "phaseGroupId": 804537,
          "event": {
            "name": "Melee Singles",
            "tournament": {
              "name": "Fight For SoCal"
            }
          },
          "displayScore": "Fiction 0 - Tempo | S2J 3"
        },
        {
          "id": "17436735",
          "phaseGroupId": 804537,
          "event": {
            "name": "Melee Singles",
            "tournament": {
              "name": "Fight For SoCal"
            }
          },
          "displayScore": "Tempo | S2J 2 - Fiction 3"
        },
        {
          "id": "12388457",
          "phaseGroupId": 520172,
          "event": {
            "name": "Melee Singles",
            "tournament": {
              "name": "The Mango"
            }
          },
          "displayScore": "Fiction 3 - Tempo | S2J 2"
        },
        {
          "id": "3115059",
          "phaseGroupId": 15833,
          "event": {
            "name": "Melee Singles",
            "tournament": {
              "name": "Genesis 3"
            }
          },
          "displayScore": "S2J 3 - Fiction 1"
        }
      ]
    }
  },
  "actionRecords": []
}
```
