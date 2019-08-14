---
id: sending-requests
title: Sending Requests to a GraphQL API
sidebar_label: Sending Requests
---

Unlike our old REST API, our GraphQL API has a single endpoint:

```html
https://api.smash.gg/gql/alpha
```

You can use cURL or any other method of making HTTP requests.
These requests may be made using `GET` or `POST`,
but it is **highly recommended** that you use `POST` (as it is less error-prone and is easier to maintain).

The POST body can have the type `application/json` and should be in the following form:

```json
{
  "query": "...",
  "operationName": "...",
  "variables": { "myVariable": "someValue", ... }
}
```

`operationName` and `variables` are optional,
and `operationName` is only used when multiple queries are present.

The `query` parameter should be filled with a GraphQL query as shown in the examples.
For more information on HTTP requests, please refer to the 
<a href="https://graphql.github.io/learn/serving-over-http/" target="_blank">official GraphQL documentation 
on requests over HTTP</a>.
