---
id: attendees-by-sponsor
title: Attendees by Sponsor/Org
---

In this example, we will query for the attendees of a tournament with a particular sponsor tag. In this case, we've chosen Genesis 5 as the tournament and Cloud 9 as the sponsor/org.

## Example Request
```
query PrefixSearchAttendees($tourneySlug:String!, $sponsor: String!) {
  tournament(slug: $tourneySlug) {
    id
    name
    participants(query: {
      filter: {
        search: {
          fieldsToSearch: ["prefix"],
          searchString: $sponsor
        }
      }
    }) {
      nodes {
        id
        gamerTag
      }
    }
  }
}
```

Request Variables
```
{
  "tourneySlug": "genesis-5",
  "sponsor": "c9"
}
```

## Example Response
```
{
  "data": {
    "tournament": {
      "id": 13299,
      "name": "Genesis 5",
      "participants": {
        "nodes": [
          {
            "id": 1295057,
            "gamerTag": "Tafokints"
          },
          {
            "id": 1280331,
            "gamerTag": "Mang0"
          },
          {
            "id": 1298170,
            "gamerTag": "Ally"
          }
        ]
      }
    }
  },
  "actionRecords": []
}