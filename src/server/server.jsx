const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express'); // include the express library
const passport = require('passport');
const path = require('path');
require('./config/passport');

const app = express();

// start the server:
app.listen(8080);
app.use('/', express.static('src/client/')); // set a static file directory

mongoose.connect('mongodb://localhost:27017/beat-itp');
mongoose.connection.on('error', () => {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
mongoose.connection.on('open', () => {
  console.log('MongoDB Connection success.');
  // process.exit(1);
});

// add body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'keyboard cat'}));

// add routes
app.use(passport.initialize());
app.use(passport.session());

var userRoutes = require('./controllers/userController.jsx');

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
      if(req.url.localeCompare('/login')){
        console.log('redirecting');
        res.redirect('/login');
      } else {
        console.log('asked for login');
        next();
      }
    }
}

app.use('/users', userRoutes);
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.status(200);
    res.json({ authenticated: true });
    res.end();

  });

app.get('/logout', function(req, res){
  console.log('logout');
  req.logout();
  res.redirect('/');
});

app.get('*', loggedIn, function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
});
