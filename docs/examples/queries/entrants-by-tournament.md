---
id: entrants-by-tournament
title: Entrants within a Tournament
---

## Disimbiguation

It can be very easy to conflate the entities of User, Player, Participant, Entrant, and Team when querying data. A useful clarification is that a User, Player, and GlobalTeam exist in the **global context** of start.gg -- these are entities that are up-to-date on what settings a user currently has applied to their profile.

A Participant, Entrant, or Team are **point-in-time** entities created when a User registers for Tournament or Event. This means that if a player updates their `gamerTag` after a tournament has completed, the tournament's `Entrant` and `Participant` will still show the prior gamerTag **and** prefix at the **time of the event (or the time of event registration)**. 

However, if you look at the `Player` entity, it will show the **currently set** gamerTag of a User. `User`, you may note, does not have a field for `gamerTag` or for `prefix`, as those only exist in the context of a *Player*, not a generic user of Start.GG. 

When querying data about a person, such as gender pronouns, use the Tournament's `Participant` object to grab a given `User` entity to retrieve a person's set gender pronouns.

### Prefix 

Participants in a Tournament can edit their Prefix for a given Tournament without necessarily updating their global prefix. However, they also can update their global prefix without updating it for past or upcoming tournaments. They are set as a **point in time** reference, for the exact tournament context the participant has registered. 

In this case, since the user explicitly has set what prefix they want to go with for that tournament, it may be preferable to look at the Participant entity rather than the Player entity. 

This can be confusing and requires some operator considerations on what data they want for a given field about a person. It can be helpful to look at some examples of user registration to see places where this data could conflict. 

## Example 1: Get Tournament Entrants by Game (with Seed)

This example gets all registrants for a given game within a tournament (and also displays the seed, for the fun of it). This queries by Video Game -- not by Event, meaning that it returns users from each event of a given game, segmented by that game. If you wanted them not segmented by game, you could go from Partipants of a Tournament and filter down by the Event (rather than Event-first). This does return back Singles & Doubles -- 5 from each event type (selected somewhat haphazardly by an unspoken sort by seed)

In the case that a game has Teams, this query will return Team Names. For Doubles, where a team name is not picked, it will be the player gamerTags with a `/` between them. This is set upon **tournament registration** -- if a player changes their gamerTag after registration, those changes may not be reflected in the Team Name. This is a useful query for a quick and dirty list of team names but loses some often-key information (such as prefix). 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>

<TabItem value="graphql">

```graphql
query EntrantsByVideogameInTournament($tourneySlug: String, $videogameId: [ID]!) {
  tournament(slug: $tourneySlug) {
    id
    name
    events(filter: {videogameId: $videogameId}) {
      id
      name
      entrants(query:{perPage:20, page: 1}) {
        nodes {
          id,
          name,
          seeds {
            seedNum
          }
        }
      }
    }
  }
},
{
  "tourneySlug": "genesis-x",
  "videogameId": [
    1
  ]
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "tournament": {
      "id": 517161,
      "name": "GENESIS X",
      "events": [
        {
          "id": 985241,
          "name": "Melee Singles",
          "entrants": {
            "nodes": [
              {
                "id": 15479332,
                "name": "Notorious",
                "seeds": [
                  {
                    "seedNum": 1513
                  }
                ]
              },
              {
                "id": 15477792,
                "name": "Smuggles",
                "seeds": [
                  {
                    "seedNum": 1512
                  }
                ]
              },
              {
                "id": 15476221,
                "name": "Pick",
                "seeds": [
                  {
                    "seedNum": 1511
                  }
                ]
              },
              {
                "id": 15476220,
                "name": "Studebacher Hoch",
                "seeds": [
                  {
                    "seedNum": 1510
                  }
                ]
              },
              {
                "id": 15475015,
                "name": "EV | mvlvchi",
                "seeds": [
                  {
                    "seedNum": 1509
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 985245,
          "name": "Melee Doubles",
          "entrants": {
            "nodes": [
              {
                "id": 15479676,
                "name": "Komodo / Ober",
                "seeds": [
                  {
                    "seedNum": 277
                  }
                ]
              },
              {
                "id": 15479266,
                "name": "Infinity / FlowerFairy",
                "seeds": [
                  {
                    "seedNum": 276
                  }
                ]
              },
              {
                "id": 15472351,
                "name": "shodan / gamebooker",
                "seeds": [
                  {
                    "seedNum": 275
                  }
                ]
              },
              {
                "id": 15469315,
                "name": "Advanced Placement / naxy",
                "seeds": [
                  {
                    "seedNum": 274
                  }
                ]
              },
              {
                "id": 15468152,
                "name": "cilantro / rissotto",
                "seeds": [
                  {
                    "seedNum": 273
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "extensions": {
    "queryComplexity": 13
  }
}
```

</TabItem>
</Tabs>

## Example 2: Gender Pronouns for Users in a Tournament

Let's say you want to show gender pronouns for users who have registered for a tournament. Pronouns are set on the User entity, not the Player or Participant layer; they are restricted to the concept of User and considered a universal data point rather than time-contextual.

Not all users choose to share their pronouns on start.gg and sometimes players forget to update that field. Before showing the field on something like a stream, it is a good practice to ask players to confirm that the field is correct.


<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>

<TabItem value="graphql">

```graphql
query PlayersWithPronouns($tourneySlug: String) {
  tournament(slug: $tourneySlug) {
    id
    name
    participants(query: {perPage: 5, page: 1}) {
      nodes {
        prefix
        id
        gamerTag
        prefix
        user {
          slug
          genderPronoun
        }
      }
    }
  }
},
{
  "tourneySlug": "smash-camp-new-lands-2024"
}

```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "tournament": {
      "id": 610441,
      "name": "Smash Camp: New Lands 2024",
      "participants": {
        "nodes": [
          {
            "prefix": "",
            "id": 13985523,
            "gamerTag": "Bbatts",
            "user": {
              "slug": "user/20718ad1",
              "genderPronoun": "He/Him"
            }
          },
          {
            "prefix": "NOOT SPIF",
            "id": 13985518,
            "gamerTag": "Salt",
            "user": {
              "slug": "user/ebb6c120",
              "genderPronoun": "She/Her"
            }
          },
          {
            "prefix": "eggdog",
            "id": 13985521,
            "gamerTag": "Spark",
            "user": {
              "slug": "user/a9334987",
              "genderPronoun": "he/him"
            }
          },
          {
            "prefix": "Level1",
            "id": 13985519,
            "gamerTag": "FatGoku",
            "user": {
              "slug": "user/138825ed",
              "genderPronoun": null
            }
          },
          {
            "prefix": "69%",
            "id": 13985520,
            "gamerTag": "Fiction",
            "user": {
              "slug": "user/94b7911b",
              "genderPronoun": null
            }
          }
        ]
      }
    }
  },
  "extensions": {
    "queryComplexity": 6
  }
}
```

</TabItem>
</Tabs>

## Example 3: Conflicting Information

If you want to see an example where information can conflict, try running a query akin to this on a past tournament that you know a player might have a different tag now than they did back then.

Here's an example of that, with an extemely verbose way of showing a user's details across many different fields. Some fields are null, meaning the user has not filled them in yet, or that they were not filled in at the time a user registered for a given tournament, or they unset that value. 

Don't use this query in production. It's more than you need and not optimized. It's here to show you how conflicting data can occur and different sources of truth to consider!

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>

<TabItem value="graphql">

```graphql
query PlayersWithConflictingStuff($tourneySlug: String, $perPage: Int, $page: Int) {
  tournament(slug: $tourneySlug) {
    id
    name
    participants(query: {perPage: $perPage, page: $page}) {
      nodes {
        prefix
        id
        gamerTag
        player {
          id
          prefix
          gamerTag
        }
        entrants {
          event {
            name
          }
          name
          participants {
            prefix
            gamerTag
          }
        }
        user {
          slug
          genderPronoun
        }
      }
    }
  }
},
{
  "tourneySlug": "genesis-7",
  "perPage": 3,
  "page": 1
}

```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "tournament": {
      "id": 147701,
      "name": "Genesis 7",
      "participants": {
        "nodes": [
          {
            "prefix": "",
            "id": 4045010,
            "gamerTag": "Rinku",
            "player": {
              "id": 516510,
              "prefix": "TG | DGS",
              "gamerTag": "Rinku"
            },
            "entrants": [
              {
                "event": {
                  "name": "Ultimate Singles"
                },
                "name": "Rinku",
                "participants": [
                  {
                    "prefix": "",
                    "gamerTag": "Rinku"
                  }
                ]
              },
              {
                "event": {
                  "name": "Ultimate Doubles"
                },
                "name": "Eeveecario / Rinku",
                "participants": [
                  {
                    "prefix": "",
                    "gamerTag": "Rinku"
                  },
                  {
                    "prefix": null,
                    "gamerTag": "Eeveecario"
                  }
                ]
              }
            ],
            "user": {
              "slug": "user/d5316c84",
              "genderPronoun": null
            }
          },
          {
            "prefix": "CLG",
            "id": 3254189,
            "gamerTag": "VoiD",
            "player": {
              "id": 23277,
              "prefix": "",
              "gamerTag": "VoiD"
            },
            "entrants": [
              {
                "event": {
                  "name": "Ultimate Singles"
                },
                "name": "CLG | VoiD",
                "participants": [
                  {
                    "prefix": "CLG",
                    "gamerTag": "VoiD"
                  }
                ]
              },
              {
                "event": {
                  "name": "Ultimate Doubles"
                },
                "name": "VoiD / NAKAT",
                "participants": [
                  {
                    "prefix": "Mazer",
                    "gamerTag": "NAKAT"
                  },
                  {
                    "prefix": "CLG",
                    "gamerTag": "VoiD"
                  }
                ]
              }
            ],
            "user": {
              "slug": "user/6d7c4f3a",
              "genderPronoun": null
            }
          },
          {
            "prefix": null,
            "id": 4135415,
            "gamerTag": "Juicebox",
            "player": {
              "id": 6304,
              "prefix": null,
              "gamerTag": "Juicebox"
            },
            "entrants": [
              {
                "event": {
                  "name": "Melee Singles"
                },
                "name": "Juicebox",
                "participants": [
                  {
                    "prefix": null,
                    "gamerTag": "Juicebox"
                  }
                ]
              }
            ],
            "user": {
              "slug": "user/750e1ccc",
              "genderPronoun": null
            }
          }
        ]
      }
    }
  },
  "extensions": {
    "queryComplexity": 24
  }
}
```

</TabItem>
</Tabs>
