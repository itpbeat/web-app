const express = require('express'); // include the express library

const app = express();

// start the server:
app.listen(8080);
app.use('/', express.static('src/client/')); // set a static file directory
