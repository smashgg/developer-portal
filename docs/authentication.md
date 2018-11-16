---
id: authentication
title: Authentication
---
In order to access smash.gg’s API, you must use an authentication token. These tokens can be created from the [developer settings tab on your account settings page.](https://smash.gg/admin/profile/developer) The token must be sent in any API request to our servers by setting the Authorization header as follows: (replace \[token\] with your own)

```
Authorization: Bearer [token]
```