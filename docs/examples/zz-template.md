---
id: example-id
title: Example Title
---

Hello, world

## Example 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>

<TabItem value="graphql">

```graphql
Hello, world
```

</TabItem>

<TabItem value="json">

```json
(Goodbye, moon)
```

</TabItem>
</Tabs>
