require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require('./passport');
const authRoute = require("./routes/auth")

const app = express();

app.use(cookieSession({
    name:'session',
    keys:['cyberwolve'],
    maxAge:24*60*60*100,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:'http://localhost:3000',
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use("/auth", authRoute);

app.listen(3001, () => {
    console.log("server is up and running on port 3001");
})