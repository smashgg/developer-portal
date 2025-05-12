---
id: rate-limits
title: Rate Limits
---

In order to prevent malicious attacks (or unintended for-loops),
we have a rate-limiting system.

1. You may not average more than **80 requests per 60 seconds**.
2. You are limited to a **maximum of 1000 objects per request** (this includes nested objects).

If you exceed these, your request will be rejected.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="json1"
values={[
{ label: 'Exceeding the rate limit', value: 'json1', },
{ label: 'Exceeding the complexity limit', value: 'json2', },
]
}>
<TabItem value="json1">

```json
{
  "success": false,
  "message": "Rate limit exceeded - api-token"
}
```

</TabItem>

<TabItem value="json2">

```json
{
  "success": false,
  "fields": null,
  "message": "Query complexity too high. A maximum of 1000 objects may be returned by each request. (actual: 1235)"
}
```

</TabItem>
</Tabs>
