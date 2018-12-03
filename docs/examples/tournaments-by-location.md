---
id: tournaments-by-location
title: Tournaments by Location
---

In these examples, we will query for tournaments in a given location!

## Example #1 Request (by Country)

```graphql
query TournamentsByCountry($cCode: String!, $perPage: Int) {
  tournaments(query: {
    perPage: $perPage
    filter: {
      countryCode: $cCode
    }
  }) {
    nodes {
      id
      name
      countryCode
    }
  }
}
```

Request Variables

```json
{
  "cCode": "JP",
  "perPage": 4
}
```

## Example #1 Response

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 90338,
          "name": "冬劇　KVO - The Winter Battle -",
          "countryCode": "JP"
        },
        {
          "id": 36965,
          "name": "MasterHand 40",
          "countryCode": "JP"
        },
        {
          "id": 105256,
          "name": "Battlegateway 〜Sunshine〜",
          "countryCode": "JP"
        },
        {
          "id": 106646,
          "name": "ポッ拳カントートーナメント5/Kanto5",
          "countryCode": "JP"
        }
      ]
    }
  },
  "actionRecords": []
}
```

## Example #2 Request (by State)

```graphql
query TournamentsByState($perPage: Int, $state: String!) {
  tournaments(query: {
    perPage: $perPage
    filter: {
      addrState: $state
    }
  }) {
    nodes {
      id
      name
      addrState
    }
  }
}
```

Request Variables

```json
{
  "perPage": 4,
  "state": "CT"
}
```

## Example #2 Response

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 111195,
          "name": "Ultimate Cataclysm",
          "addrState": "CT"
        },
        {
          "id": 63814,
          "name": "EXILE 166 + SHATTERED 138",
          "addrState": "CT"
        },
        {
          "id": 76263,
          "name": "WINTERBOU",
          "addrState": "CT"
        },
        {
          "id": 63813,
          "name": "EXILE 165 + SHATTERED 137",
          "addrState": "CT"
        }
      ]
    }
  },
  "actionRecords": []
}
```

## Example #3 Request (by coordinates + radius distance)

```graphql
query SocalTournaments($perPage: Int, $coordinates: String!, $radius: String!) {
  tournaments(query: {
    perPage: $perPage
    filter: {
      location: {
        distanceFrom: $coordinates,
        distance: $radius
      }
    }
  }) {
    nodes {
      id
      name
      city
    }
  }
}
```

Request variables

```json
{
  "perPage": 4,
  "coordinates": "33.7454725,-117.86765300000002",
  "radius": "50mi"
}
```

## Example #3 Response

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 102670,
          "name": "Anime Ascension 2019",
          "city": "Irvine"
        },
        {
          "id": 109582,
          "name": "LAG: HOMESTAY | FINAL SHOWDOWN @ REDONDO BEACH",
          "city": "Redondo Beach"
        },
        {
          "id": 102764,
          "name": "SoCal Chronicles",
          "city": "La Mirada"
        },
        {
          "id": 107552,
          "name": "Saturday at Don's: A Jazzy Circuit Auto-Qualifier",
          "city": "Carson"
        }
      ]
    }
  },
  "actionRecords": []
}
```