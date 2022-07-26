const router = require("express").Router();
const passport = require("passport");
const newUser = require("../models/usersModel");


router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login with Your Gitam Mail Only!"
    })
})

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
        })
    }
})

router.get("/google/home", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "/auth/login/failed",
}))

router.get("/newUser/:email", (req, res) => {
    const userEmail = req.params.email;
    console.log("userEmail", userEmail);
    newUser.find({ email: userEmail }, (err, docs) => {

        if (docs.length == 0) {
            res.json({
                registered: false
            })

        } else {
            res.json({
                registered: true
            })
        }
    })
})

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.post("/newUser/save", (req, res) => {
    console.log(req.body);
    newUser.create({
        email: req.body.email,
        registration: req.body.registration,
        year: req.body.year,
    })
    
    .then(response => {
        res.json({
            success: true,
        })
    })
    .catch(err => {
        res.json({
            success: false,
        })
    })
    
})

module.exports = router;