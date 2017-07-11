var express = require('express');
var Router = express.Router();
const User = require('../models/user.jsx');

var userRoutes = express.Router();

userRoutes.route('/signup').post(createUser);
userRoutes.route('/').get(getUsers);

function createUser(req,res) {
  const name = req.body.name;
  const password = req.body.password;
  //
  let user = new User({
    name: name,
    password: password
  });
  //
  user.save(function(err, user){
    if (err) {
      res.status(422).json({error: saveErr});
    } else {
      res.send('Successfully saved')
    }
  })
  // console.log("inside create User");

  // res.send("success");

}

function saveUser(res, user) {
  user.save((saveErr) => {
    if(saveErr) {
      res.status(500).json({error: saveErr});
      return;
    }
    res.json(user);
  });
}

function getUsers(req,res) {
  User.find(function(err,users) {
    if(err) {
      res.send(err);
    } else {
      res.json(users);
    }
  })
}

module.exports = userRoutes;
