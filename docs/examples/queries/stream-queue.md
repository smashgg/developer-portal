---
id: stream-queue
title: Stream Queue
---

In this example we will get a stream queue on a given tournament, including:

- Information about each stream
- Information about the sets for each stream

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```graphQL
query StreamQueueOnTournament($tourneySlug: String!) {
  tournament(slug: $tourneySlug) {
    id
    streamQueue {
      stream {
        streamSource
        streamName
      }
      sets {
        id
      }
    }
  }
},
{
  "tourneySlug": "tournament/20190128-oh-really-stream-queues"
}
```

You can request other fields on sets, and there are also
 some other fields on stream that you can request.
Check the schema for what's available!

<!--Response-->

```json
{
  "data": {
    "tournament": {
      "streamQueue": [
        {
          "stream": {
            "streamSource": "TWITCH",
            "streamName": "furtiveraccoon"
          },
          "sets": [
            {
              "slots": [
                {
                  "entrant": {
                    "name": "Buzz"
                  }
                },
                {
                  "entrant": {
                    "name": "Middy"
                  }
                }
              ]
            },
            {
              "slots": [
                {
                  "entrant": {
                    "name": "Bandit"
                  }
                },
                {
                  "entrant": {
                    "name": "Outlaw"
                  }
                }
              ]
            },
            {
              "slots": [
                {
                  "entrant": {
                    "name": "Maverick"
                  }
                },
                {
                  "entrant": {
                    "name": "Samara"
                  }
                }
              ]
            },
            {
              "slots": [
                {
                  "entrant": {
                    "name": "Junker"
                  }
                },
                {
                  "entrant": {
                    "name": "Slider"
                  }
                }
              ]
            }
          ]
        },
        {
          "stream": {
            "streamSource": "TWITCH",
            "streamName": "smashgg"
          },
          "sets": [
            {
              "slots": [
                {
                  "entrant": {
                    "name": "Dude"
                  }
                },
                {
                  "entrant": {
                    "name": "Sticks"
                  }
                }
              ]
            },
            {
              "slots": [
                {
                  "entrant": {
                    "name": "Goose"
                  }
                },
                {
                  "entrant": {
                    "name": "Swabbie"
                  }
                }
              ]
            },
            {
              "slots": [
                {
                  "entrant": {
                    "name": "Marley"
                  }
                },
                {
                  "entrant": {
                    "name": "Scout"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "actionRecords": []
}
```

In the response, the sets are ordered top-to-bottom as first-to-last in the queue.

<!--END_DOCUSAURUS_CODE_TABS-->
