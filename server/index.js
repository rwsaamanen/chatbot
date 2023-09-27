const cookieSession = require('cookie-session');
const session = require('express-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const app = express();

console.log('Hello World');

app.use(session({
    name: "session",
    secret: 'key1',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3001",
    methotds: "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    credentials: true,
}));

app.use('/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000')
});
