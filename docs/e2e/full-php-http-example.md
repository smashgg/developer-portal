---
id: full-php-http-example
title: Full example of HTTP Query using PHP
---

In this example we will make an HTTP Query with PHP to execute an Tournament Query.

**NOTE: You will need an API [auth token](/docs/authentication)**


```php
<?php

    $url = 'https://api.smash.gg/gql/alpha';
    $smashggAuthToken = 'YourAuthenticationTokenHere';

    $myPostdata = json_encode(
        array(
            'query' => 'query TournamentQuery($slug: String, $page: Int!, $perPage: Int!) {
                            tournament(slug: $slug) {
                                events {
                                    name
                                    id
                                    standings(query: { page: $page, perPage: $perPage }) {
                                        nodes {
                                            standing
                                            entrant {
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }',
            'operationName' => 'TournamentQuery',
            'variables' => '{
                                "slug": "Super-Swiss-Royale-NA-East",
                                "page": 1,
                                "perPage": 5
                            }'
        )
    );
    
    $myOpts = array(
       'http' => array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/json'.PHP_EOL.
                         'authorization: Bearer '.$smashggAuthToken.PHP_EOL,
            'content' => $myPostdata
        )    
    );
    
    $myContext  = stream_context_create($myOpts);

    $myResponse = file_get_contents($url, false, $myContext);

    print_r($myResponse);

?>
```
