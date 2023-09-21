let body = $response.body
body=JSON.parse(body)
body['user']['is_premium']=true
body=JSON.stringify(body)
$done({body})
