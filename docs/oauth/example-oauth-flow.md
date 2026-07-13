---
id: example-oauth-flow
title: Example OAuth Flow
---

## What is OAuth?

For more info on the OAuth flow, please visit [the OAuth overview page](/docs/oauth/oauth-overview).

## How do I implement the OAuth flow?

There are many ways to implement the OAuth flow into your application, but here is an example of an express app that uses the authorization code flow:

```
  const scopes = 'user.identity';
  const REDIRECT_URI = 'https://myexampleapp.com/oauth'
  const CLIENT_SECRET;
  const CLIENT_ID;

  express.get('/oauth_redirect', function (req, res) {
    res.redirect(`http://api.start.gg/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scopes}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`)
  });
```

The above code snippet will redirect to the application's configured redirect_uri endpoint with a `code` query parameter. This code parameter must then be sent back to the final oauth access endpoint (https://api.start.gg/oauth/access_token) along with the other client parameters.

In this example, the redirect_uri is myexampleapp.com/oauth:


```
express.get('/oauth', function (req, res) {
  const { query: { code } } = req;

	if (!code) {
		res.send({ 'error': 'OAuth login failed. Please restart flow. Error: missing code' });
		return;
	}

	const data = {
		'client_id': CLIENT_ID,
		'client_secret': CLIENT_SECRET,
		'grant_type': 'authorization_code',
		'code': code,
		'redirect_uri': REDIRECT_URI,
		'scope': scopes
	};

	const headers = {
		'Content-Type': 'application/json',
	};

	fetch('https://api.start.gg/oauth/access_token', { 
		method: 'POST',
		body: JSON.stringify(data),
		headers: headers
	}).then(res => res.json()).then(json => {

		console.log(json.access_token);
		console.log(json.refresh_token);
		console.log(json.expires_in);

		res.send(`
			<script>
				window.close();
			</script>
		`);
	}).catch(e => {
		console.log(e);
		res.send('Error completing oauth login.')
	});
});
```

Example response data:

```
{
  token_type: 'Bearer',
  expires_in: 604800,
  access_token: 'abc123',
  refresh_token: 'abc123def456'
}

```
