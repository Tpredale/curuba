const jwt = require('jwt-simple');
const config = require('../../config');
const User = require('../models/user');

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function(req, res, next){
  //give user a token
  res.send({ token: tokenForUser(req.user)});
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(422).send({error: 'You must enter an email and a password'});
  }
  //check if user with email already exists
  User.findOne({email: email}, function(err, existingUser){
    if(err) {return next(err);}
  //if user does exist return an error
    if(existingUser) {
      return res.status(422).send({error: 'Email is already in use'});
    }
    //if a user does Not exist create and save user record
    const user = new User ({
      email: email,
      password: password
    });

    user.save(function(err){
      if(err) {return next(err);}
      res.json({token: tokenForUser(user)});
    });

  });
}