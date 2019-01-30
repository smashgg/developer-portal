---
id: stream-queue
title: Stream Queue
---

In this example we will get a stream queue for a specific tournament, including:

- Information about each stream
- Information about the sets for each stream

## Example Request

```graphQL
query StreamQueues($tourneyId:Int!){
  streamQueue(tournamentId:$tourneyId){
    stream{
      streamSource
      streamName
    }
    sets{
      id
    }
  }
}
```

Variables

```json
{
  "tourneyId": 136691
}
```

## Example Response

In the response, the sets are ordered top-to-bottom as first-to-last in the queue.
You can request other fields on sets, and there are also
 some other sets on stream that you can request.
Check the schema for what's available!

```json
{
  "data": {
    "streamQueue": [
      {
        "stream": {
          "streamSource": "TWITCH",
          "streamName": "furtiveraccoon"
        },
        "sets": [
          {
            "id": "18274019",
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
            "id": "18274021",
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
            "id": "18274002",
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
            "id": "18274004",
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
            "id": "18274020",
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
            "id": "18273983",
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
            "id": "18273986",
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
  },
  "actionRecords": []
}
```
