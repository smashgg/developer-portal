---
id: pool-seeds
title: Pool Seeds
---

```
query PoolSeeds($id: Int) {
  phaseGroup(id: $id) {
    id
    seeds {
      id
      entrant {
        id
        name
      }
    }
  }
}
```
