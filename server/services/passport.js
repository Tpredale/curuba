const config = require('../../config');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const LocalStrategy = require('passport-local');



const localLogin = new LocalStrategy({ usernameField: 'email' }, function(email, password, done){
  User.findOne({ email: email }, function(err, user){
    if(err){ return done(err); }
    if(!user) {return done(null, false);}
    user.comparePassword(password, function(err, isMatch){
      if(err) {return done(err); }
      if(!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
})

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
passport.use(localLogin);