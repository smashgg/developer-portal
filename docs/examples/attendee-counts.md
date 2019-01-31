---
id: attendee-counts
title: Attendee Counts
---

In this example, we will query for the number of attendees (participants) in a tournament.
Optionally, we can include an array of eventIds to specify a count for a particular subset of events
 in that tournament.

## Example #1

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

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
},
{
  "tourneySlug":"shine-2018"
}
```

<!--Response-->

```json
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
<!--END_DOCUSAURUS_CODE_TABS-->

## Example #2 (specifying event(s))

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

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
},
{
  "tourneySlug":"shine-2018",
  "eventIds":[78790]
}
```
<!--Response-->

```json
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

<!--END_DOCUSAURUS_CODE_TABS-->
