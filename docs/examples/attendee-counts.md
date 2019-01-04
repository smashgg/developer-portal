---
id: attendee-counts
title: Attendee Counts
---

In this example, we will query for the number of attendees (participants) in a tournament.
Optionally, we can include an array of eventIds to specify a count for a particular subset of events
 in that tournament.

## Example #1 Request
```GraphQL
query AttendeeCount($tourneySlug:String!){
  tournament(slug:$tourneySlug){
    name
    participants(query:{}){
      pageInfo{
        total
      }
    }
  }
}
```

Request Variables
```GraphQl
{
  "tourneySlug":"shine-2018"
}
```

## Example #1 Response
```GraphQL
{
  "data": {
    "tournament": {
      "name": "Shine 2018",
      "participants": {
        "pageInfo": {
          "total": 1764
        }
      }
    }
  },
  "actionRecords": []
}
```

## Example #2 Request (specifying event(s))

```GraphQL
query AttendeeCount($tourneySlug:String!, $eventIds:[Int]){
  tournament(slug:$tourneySlug){
    name
    participants(query:{
      filter:{
        eventIds:$eventIds
      }
    }){
      pageInfo{
        total
      }
    }
  }
}
```

Request Variables
```GraphQL
{
  "tourneySlug":"shine-2018",
  "eventIds":[78790]
}
```

## Example #2 Response
```GraphQL
{
  "data": {
    "tournament": {
      "name": "Shine 2018",
      "participants": {
        "pageInfo": {
          "total": 904
        }
      }
    }
  },
  "actionRecords": []
}
```
