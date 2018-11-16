---
id: resource-limits
title: Resource Limits
---

## Resource Limits

In order to prevent against malicious attacks (or unintended for-loops), we have a rate limiting system. This prevents anyone from making more than **1 request per second**.

Additionally, each individual API call is limited to returning **500** objects (this includes nested objects).
