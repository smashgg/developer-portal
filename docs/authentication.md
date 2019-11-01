---
id: authentication
title: Authentication
---

## Generating a Token

In order to access smash.gg’s API, you must use an authentication token.
These tokens can be created from the <a href="https://smash.gg/admin/profile/developer" target="_blank">
Developer Settings</a> page in your account settings.
**If you do not have permission to create tokens, please join our [Discord server](https://developer.smash.gg/docs/join-discord) AND fill out [this form](https://forms.gle/UBEG8HeaMLegcDCVA). We'll give you access within 4-5 business days.**

First, click "Create new token"

![image](https://imgur.com/Xx4LNIN.png)

Next, enter a description for your token. Please be _descriptive_ with this!

![image2](https://imgur.com/b2russ6.png)

Click 'Save' to finish creating the token.

![image3](https://imgur.com/nEycaZA.png)

⚠ **Copy it down immediately- you will not be able to view it again!** ⚠

## Using the Token

The token must be sent in any API request to our servers by setting the Authorization header as follows: (replace \[token\] with your token)

```
Authorization: Bearer [token]
```

You will also need a token for making requests in the [API Explorer](/explorer)

![image4](https://imgur.com/WZjuFCE.png)
