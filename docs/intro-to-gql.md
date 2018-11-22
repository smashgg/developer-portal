---
id: intro-to-gql
title: Intro to GraphQL
---

## What is GraphQL?

GraphQL is a query language that comes with many benefits for an API.
For those unfamiliar, we recommend visiting the GraphQL website <a href="https://graphql.org/" target="_blank">here.</a>
The GraphQL website also includes <a href="https://graphql.org/code/" target="_blank">useful references for various languages and frameworks.</a>

## Testing in GraphQL

Our recommended way to test out requests is using our [API explorer.](/explorer).
For a guide on using GraphQL we recommend <a href="https://graphql.org/learn/" target="_blank">the official documentation.</a>

There are multiple example requests made by the community,
these can be found under the `examples` section.


## Making calls to a GraphQL API

Unlike our old REST API, our GraphQL API has a single endpoint:

```
https://api.smash.gg/gql/alpha
```

You can also use cURL or any other method of making HTTP requests.
These calls can be made over both `GET` and `POST`.
It is **highly** recommended you use `POST` as it is less error prone and easier to maintain.

The POST body can have the type `application/json` and should be in the following form:

```json
{
  "query": "...",
  "operationName": "...",
  "variables": { "myVariable": "someValue", ... }
}
```

`operationName` and `variables` are optional
and `operationName` is only used when multiple querys are present.

The `query` parameter should be filled with a GraphQL query as shown in the examples.
For more information please check out the 
<a href="https://graphql.github.io/learn/serving-over-http/" target="_blank">official documentation</a> on requests over HTTP