---
id: count-entrants-by-event
title: Count Entrants by Event
---

In this example, we will count the number of entrants in an event.
\Please note that we are counting the number of **entrants** in an event.
For a teams event, as in the example below, an entrant is a completed team.
Using `entrantSizeMin`, you can determine whether it is a singles event (`entrantSizeMin` = 1)
or a teams event (`entrantSizeMin` > 1).
You can also use that number to count the total number of players who competed in a teams event
(with some variance due to substitute players).

## Example #1 Request (3v3 Teams Event)

```graphql
query EventStandings($eventId: Int) {
  event(id:$eventId) {
    id
    name
    numEntrants
    entrantSizeMin
  }
}
```

Request Variables
```
{
  "eventId": 29368
}
```

## Example #1 Response

```json
{
  "data": {
    "event": {
      "id": 29368,
      "name": "Rocket League 3v3",
      "numEntrants": 73
    }
  },
  "actionRecords": []
}
```

## Example #2 Request (1v1 Event)

```graphql
query EventStandings($eventId: Int) {
  event(id:$eventId) {
    id
    name
    numEntrants
    entrantSizeMin
  }
}
```

Request Variables

```json
{
  "eventId": 78790
}
```

## Example #2 Response

```json
{
  "data": {
    "event": {
      "id": 78790,
      "name": "Melee Singles",
      "numEntrants": 904,
      "entrantSizeMin": 1
    }
  },
  "actionRecords": []
}
```