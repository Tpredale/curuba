const config = require('../../config');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  //payload is user id and timestamp we defined in authentication controller
  User.findById(payload.sub, function(err, user){
    if(err) { return done(err, false); }
    if(user){
      done(null, user);
    }else{
      done(null, false);
    }
  });
});

passport.use(jwtLogin);