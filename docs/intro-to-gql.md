---
id: intro-to-gql
title: Intro to GraphQL
---
## What is GraphQL?

GraphQL is a query language that comes with many benefits for an API. For those unfamiliar, we recommend visiting the GraphQL website <a href="https://graphql.org/" target="_blank">here.</a> The GraphQL website also includes <a href="https://graphql.org/code/" target="_blank">useful references for various languages and frameworks.</a>

## Making calls to a GraphQL API

Unlike our old REST API, our GraphQL API has a single endpoint:

```
https://api.smash.gg/gql/alpha
```

Our recommended way to test out requests is using our [API explorer.](/explorer) You can also use cURL or any other method of making HTTP requests. Calls should be made via a POST request with a JSON payload containing the body of your query in the **query** parameter.