---
id: scopes
title: OAuth Scopes
---

## What is a scope?

A scope is what tells a token what resources it has access to. The scopes that are requested by a
third party application are determined by the developer, and the resource owner must approve them at
the time of authentication.

## What scopes do I have access to?

Please keep in mind that we are still actively developing new scopes to be available here.

| user.identity | Allows use of `currentUser` query |
|-|-|
| user.email | Allows use of `email` field in `currentUser` query |

Coming soon: tournament scopes :)
