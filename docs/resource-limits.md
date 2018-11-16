---
id: resource-limits
title: Resource Limits
---

## Resource Limits

In order to prevent against malicious attacks (or unintended for-loops), we have a rate limiting system. This prevents anyone from making more than **1 request per second**.

In addition to this, each individual API call is limited to returning **500** objects. This includes nested objects as well.
