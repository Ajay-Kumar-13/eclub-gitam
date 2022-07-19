const router = require("express").Router();
const passport = require("passport");

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error:true,
        message:"Login with Your Gitam Mail Only!"
    })
})

router.get("/login/success", (req, res) => {
    if(req.user)
    {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
        })
    }
})

router.get("/google/home", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect:"/auth/login/failed",
}))

router.get("/google", passport.authenticate("google", ["profile", "email"]));

module.exports = router;