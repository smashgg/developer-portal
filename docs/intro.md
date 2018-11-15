---
id: intro
title: smash.gg API Overview
sidebar_label: Overview
---

Having trouble? Join our [discord](https://discord.gg/pTSwKj) to get help directly from smash.gg engineers and community members!

## What is GraphQL?

GraphQL is a query language that comes with many benefits for an API. For those unfamiliar, we recommend reading up [here.](https://graphql.org/)

## Making calls to a GraphQL API

Unlike our old REST API, our GraphQL API has a single endpoint:

```
https://api.smash.gg/gql/alpha
```

Our recommended way to test out requests is using our [API explorer.](https://developer.smash.gg/explorer) However, it is still possible to use cURL or any other method of making HTTP requests. Calls should be made via a POST request with a JSON payload containing the body of your query in the **query** parameter.

## Authentication

In order to access smash.gg’s API, you must use an authentication token. These tokens can be created from the [developer settings tab on your account settings page.](https://smash.gg/admin/profile/developer) The token must be sent in any API request to our servers by setting the Authorization header as follows: (replace \[token\] with your own)

```
Authorization: Bearer [token]
```

## Resource Limits

In order to prevent against malicious attacks (or unintended for-loops), we have a rate limiting system. This prevents anyone from making more than **1 request per second**.

In addition to this, each individual API call is limited to returning **500** objects. This includes nested objects as well.
