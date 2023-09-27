const passport = require('passport');


const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '759047100207-53t8ro6g2v8jbe5rk3bnsgu89q1kigru.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});