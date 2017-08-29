'use strict';

/*____Function for server_______*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../'));

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});
