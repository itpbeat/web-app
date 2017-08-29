const express = require('express'); // include the express library
const path = require('path');

const app = express();

// start the server:
app.listen(process.env.PORT ||8080);
console.log('running at port 8080');
app.use('/', express.static('public/')); // set a static file directory

function loggedIn(req, res, next) {
    next();
}

app.get('*', loggedIn, function (req, res) {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'))
});
