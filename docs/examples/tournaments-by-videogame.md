---
id: tournaments-by-videogame
title: Tournaments by Videogame
---

In this example, we will query for upcoming tournaments filtered to particular videogames and in ascending order for their start date/time.
In others words, "Give me the next *x* upcoming tournaments for *Videogame(s)*."
The first example will be for a single videogame,
and the second example will be for an array of videogames.

For now, you can view the mapping of videogame IDs to their names <a href="https://docs.google.com/spreadsheets/d/1Iq-gueeLYeoVbf1oxVzh5942rX9RG8E6Wxn-yhSbvbQ/edit?usp=sharing" target="_blank">in this sheet here.</a>

## Example #1 Request (single videogame)

```
query TournamentsByVideogame($perPage: Int, $videogameId: Int) {
  tournaments(query: {
    perPage: $perPage
    page: 1
    sortBy: "startAt asc"
    filter: {
      past: false
      videogameIds: [
        $videogameId
      ]
    }
  }) {
    nodes {
      id
      name
      slug
    }
  }
}
```

Query Variables

```json
{
  "perPage": 3,
  "videogameId": 287
}
```

## Example #1 Response

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 107492,
          "name": "Mile High Fight Night 1 at Mile High Spirits, Denver",
          "slug": "tournament/mile-high-fight-night-1-at-mile-high-spirits-denver"
        },
        {
          "id": 112600,
          "name": "TNT #57 - SC6, DBFZ, SFV",
          "slug": "tournament/tnt-57-sc6-dbfz-sfv"
        },
        {
          "id": 113248,
          "name": "SUPER Dropkick Tuesdays, 11-20-18",
          "slug": "tournament/super-dropkick-tuesdays-11-20-18"
        }
      ]
    }
  },
  "actionRecords": []
}
```

## Example #2 Request (array of videogames)

```
query TournamentsByVideogames($perPage: Int, $videogameIds: [Int]) {
  tournaments(query: {
    perPage: $perPage
    page: 1
    sortBy: "startAt asc"
    filter: {
      upcoming: true
      videogameIds: $videogameIds
    }
  }) {
    nodes {
      id
      name
      slug
    }
  }
}
```

Query Variables

```json
{
  "perPage": 3,
  "videogameIds": [15, 24]
}
```

## Example #2 Response

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 112724,
          "name": "No Pause Weekly 11/19/18",
          "slug": "tournament/no-pause-weekly-11-19-18"
        },
        {
          "id": 103670,
          "name": "FEAST OF FIGHTING - Brawlhalla 1v1 Thanksgiving Tourney!",
          "slug": "tournament/feast-of-fighting-brawlhalla-1v1-thanksgiving-tourney"
        },
        {
          "id": 110747,
          "name": "BrawlhallaMEC Nasr Esports Community Cup Qualifiers",
          "slug": "tournament/brawlhallamec-nasr-esports-community-cup-qualifiers"
        }
      ]
    }
  },
  "actionRecords": []
}
```