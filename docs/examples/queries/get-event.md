---
id: get-event
title: Get Event
---

In this example, we will query the Smash Ultimate Singles event at Genesis 9.
An **Event ID** is necessary if you want to get information specific to a tournament event.
To do so, we make use of a string of characters called **slug**, easily obtainable from
the URL of the tournament event page in [start.gg](https://www.start.gg/).

Go to the tournament page and select the event:

![image](https://imgur.com/a/8jhfgxs)

Now that you selected it, you can find the slug inside of the URL of the page:

![image](https://imgur.com/a/pzHl9OK)

A slug is made of two parts: the tournament name and the event name.
The format is this: `tournament/<tournament_name>/event/<event_name>`.
In this case, the slug we're going to use is `tournament/genesis-9-1/event/ultimate-singles`.

Now that we have the slug, we can use it as a variable in the following query:

## Example

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
query getEventId($slug: String) {
  event(slug: $slug) {
    id
    name
  }
},
{
  "slug": "tournament/genesis-9-1/event/ultimate-singles"
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "event": {
      "id": 769488,
      "name": "Ultimate Singles"
    }
  },
  "extensions": {
    "cacheControl": {
      "version": 1,
      "hints": [
        {
          "path": [
            "event"
          ],
          "maxAge": 60,
          "scope": "PRIVATE"
        }
      ]
    },
    "queryComplexity": 1
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>

If you go in the *Response* tab, you will find two useful pieces of information under event:

- _id_ is the Event ID of the tournament event
- _name_ is the name of the tournament event

Now that you have the Event ID, you can use it for many more queries.
For example you can search for [Event Standings](/docs/examples/queries/event-standings) or [Event Entrants](/docs/examples/queries/event-entrants).

**Don't forget to explore schema, and test queries, in the [API Explorer](/explorer)!**

