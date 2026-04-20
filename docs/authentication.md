---
id: authentication
title: Authentication
---

## Generating a Token

In order to access start.gg’s API, you must use an authentication token.
These tokens can be created from the <a href="https://start.gg/admin/profile/developer" target="_blank">
Developer Settings</a> page in your account settings.

First, click "Create new token"

![image](https://i.postimg.cc/kGMWW1BB/Xx4LNIN.png)

Next, enter a description for your token. Please be _descriptive_ with this!

![image2](https://i.postimg.cc/d0m7nRM5/b2russ6.png)

Click 'Save' to finish creating the token.

![image3](https://i.postimg.cc/76H5RCDR/n-Eyca-ZA.png)

⚠ **Copy it down immediately- you will not be able to view it again! All tokens expire expire after 1 year.** ⚠

## Using the Token

The token must be sent in any API request to our servers by setting the Authorization header as follows: (replace \[token\] with your token)

```
Authorization: Bearer [token]
```

You will also need a token for making requests in the [API Explorer](/explorer)

![image4](https://i.postimg.cc/Qt8FzBsm/W8T7Mo-L.png)
