---
id: attendee-counts
title: Attendee Counts
---

In this example, we will query for the number of attendees (participants) in a tournament.
Optionally, we can include an array of eventIds to specify a count for a particular subset of events
in that tournament.

## Example #1

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
query AttendeeCount($tourneySlug: String!) {
  tournament(slug: $tourneySlug) {
  	id
    name
    participants(query: {}) {
      pageInfo {
        total
      }
    }
  }
},
{
  "tourneySlug":"shine-2018"
}
```

</TabItem>

<TabItem value="json">

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

</TabItem>
</Tabs>

## Example #2 (specifying event(s))

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>
<TabItem value="graphql">

```graphql
query AttendeeCount($tourneySlug: String!, $eventIds: [ID]) {
  tournament(slug: $tourneySlug) {
  	id
    name
    participants(query: {
      filter: {
        eventIds:$eventIds
      }
    }) {
      pageInfo {
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

</TabItem>

<TabItem value="json">

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

</TabItem>
</Tabs>
