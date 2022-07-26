
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/home",
    scope: ["profile", "email"],
},
    function (accessToken, refreshToken, profile, done) {
        if (profile._json.hd === "gitam.in") {
            done(null, profile);
        } else {
            done(null);
        }

    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
})