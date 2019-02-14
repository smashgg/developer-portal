---
id: rate-limits
title: Rate Limits
---

In order to prevent malicious attacks (or unintended for-loops), we have a rate-limiting system.
The default values are listed below; if you need increased limits for your application, then please
 [contact us](/help)!

1) You may not average more than **80 requests per 60 seconds**.
2) You are limited to a **maximum of 1000 objects per request** (this includes nested objects).

If you exceed these, your request will be rejected.

<!--DOCUSAURUS_CODE_TABS-->

<!--Exceeding the rate limit-->

```json
{
  "success": false,
  "message": "Rate limit exceeded - api-token"
}
```

<!--Exceeding the complexity limit-->

```json
{
  "success": false,
  "fields": null,
  "message": "Query complexity too high. A maximum of 1000 objects may be returned by each request. (actual: 1235)"
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
