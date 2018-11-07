---
id: event-standings
title: Event Standings
---

```
query EventStandings($id: Int) {
  event(id: $id) {
    id
    name
    standings(query: {
      perPage: 10,
      page: 1
    }) {
      pageInfo {
        page
        totalPages
      }
      nodes {
        id
        standing
        entrant {
          id
          name
        }
      }
    }
  }
}
```
