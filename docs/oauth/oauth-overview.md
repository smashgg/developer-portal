---
id: oauth-overview
title: OAuth Overview
---

## What is OAuth?

The OAuth 2.0 flow enables developers to create applications that utilize personal data from start.gg.
This allows for far more powerful integrations than using a public access token- users can access
and modify their own personal data.

Currently start.gg only supports the authorization code grant flow and refresh token.

I would recommend becoming familiar with the various OAuth concepts such as `resource owner`,
`authorization server`, and `client` before moving on.
There are many resources available on the web for learning these, and <a href="https://dzone.com/articles/oauth-20-beginners-guide" target="_blank">this blog post</a> gives a good overview for beginners.

<a href="https://tools.ietf.org/html/rfc6749" target="_blank">Click here</a> for the official OAuth 2.0 specification

## How do I use OAuth?

The first step is to create an OAuth application via the <a href="https://start.gg/admin/profile/developer/applications" target="_blank">start.gg developer portal</a>

### Authorization code flow

The authorization code grant flow is a quick 5 step process:

1. Client redirects resource owner to start.gg authorization url.
2. Resource owner signs in with start.gg
3. Resource owner approves token usage and scopes.
4. start.gg sends an **authorization code** to application's `redirect_uri`.
5. Application server sends this code to start.gg's token url in exchange for an **access token**.



Example authorization url:

```
https://start.gg/oauth/authorize?response_type=code&client_id=0&scope=user.identity%20user.email&redirect_uri=http%3A%2F%2Fexampleurl.com%2Foauth
```

There is a tool in your application's settings that will generate this url for you. The required
query params for this url are:

`response_type`: Must be `code`

`client_id`: The ID of your application, can be found in the application settings page.

`scope`: A list of [scopes](/docs/oauth/scopes) separated by URL encoded space characters (%20)

`redirect_uri`: This is where the resource owner gets redirected to during step 4 above.
The authorization code is included as the query parameter `code`

\
\
Example redirect url:

```
http://exampleurl.com/oauth?code=dsbf6h12sd8mdfwEzF
```

This endpoint is responsible for sending a POST request to start.gg's token url:
`api.start.gg/oauth/access_token`

The following parameters must be sent with a `application/json` Content Type header:

`grant_type`: must be `authorization_code`.

`client_secret`: The secret for application, can be found in the application settings page.

`code`: The code that was sent as a query parameter during the redirect.

`scope`: List of scopes separated by a space.

`client_id`: The same client id from before.

`redirect_uri`: The same redirect uri from before.

\
\
Example access token response:

```
{
	"access_token": "4eeFpL20Adsbf6h12sd8mdfwEzF",
	"token_type": "Bearer",
	"expires_in": 604800,
	"refresh_token": "d8md12s4eeAdsbf6fwEzF0hFpL2"
}
```

This access token allows you to make API calls from your application on behalf of this user,
restricted to the scopes that were approved.

### Refresh token

This access token will expire in `expires_in` seconds, so you can use the `refresh_token` to
obtain a new access token before the user's access expires.

To refresh a token, send a POST request to start.gg's refresh token url:
`api.start.gg/oauth/refresh`

The following parameters must be sent with a `application/json` Content Type header:

`grant_type`: must be `refresh_token`.

`refresh_token`: The refresh token that was given previously.

`scope`: The same scopes as before.

`client_id`: The same client id from before.

`client_secret`: The same client secret from before.

`redirect_uri`: The same redirect uri from before.
