'use strict';

/*____Function for server_______*/

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

// must direct to index.html
app.use(express.static('./'));

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}


app.get('/github/*', proxyGitHub);
