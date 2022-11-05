const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require("dotenv").config()


const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    // SECRET_KEY,
    BASE_URL
} = process.env

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${BASE_URL}/api/auth/google/callback`,
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));