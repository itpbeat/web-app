const express = require('express'); // include the express library

const app = express();

// start the server:
app.listen(8080);
console.log('running at port 8080');
app.use('/', express.static('public/')); // set a static file directory
