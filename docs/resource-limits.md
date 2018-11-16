---
id: resource-limits
title: Resource Limits
---

## Resource Limits

In order to prevent against malicious attacks (or unintended for-loops), we have a rate limiting system. 

1) You may not make more than **1 request per second**.
2) Each individual request is limited to returning **500** objects (this includes nested objects).

If you exceed these, your request will be rejected.

**Exceeding 1 request per second**

```
{
  "success": false,
  "fields": null,
  "message": "Slow down there partner!"
}
```