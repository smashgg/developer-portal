---
id: authentication
title: Authentication
---
In order to access smash.gg’s API, you must use an authentication token. These tokens can be created from the <a href="https://smash.gg/admin/profile/developer" target="_blank">developer settings tab on your account settings page.</a> 

![image](https://imgur.com/Xx4LNIN.png)

If you do not have permission to create tokens, please contact us in our <a href="https://discord.gg/smashgg" target="_blank">Discord server!</a>

Please be descriptive when naming your tokens. Once you create a token, you **must copy it down immediately- you will not be able to view it again!**

![image2](https://imgur.com/X9B3bv2.png)


The token must be sent in any API request to our servers by setting the Authorization header as follows: (replace \[token\] with your own)

```
Authorization: Bearer [token]
```