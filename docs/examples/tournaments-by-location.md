---
id: tournaments-by-location
title: Tournaments by Location
---

In these examples, we will query for tournaments in a given location!

## Example Request #1 (by country)

```
query TournamentsByCountry($cCode: String!) {
    tournaments(query: {
    filter: {
      countryCode: $cCode
    }
  }) {
    nodes {
      id
      name
    }
  }
}
```
(Request Variables!) 

```
{
  "cCode": "JP"
}
```

## Response

```
???
```

## Example Request #2 (by State)
```
query TournamentsByState($state: String!) {
    tournaments(query: {
    filter: {
      addrState: $state
    }
  }) {
    nodes {
      id
      name
    }
  }
}
```

Request Variables
```
{
  "state": "CT"
}
```

## Response
```
???
```