---
id: set-entrants
title: Set Entrants
---

```
query SetEntrants($id: String!) {
  set(id: $id) {
    id
    slots {
      id
      entrant {
        id
        name
        participants {
          id
          gamerTag
          connectedAccounts
        }
      }
    }
  }
}
```
