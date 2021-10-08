const express = require("express")
const connect = require("./configs/db")
const cors = require("cors")
const passport = require("passport")
const cookieSession = require("cookie-session")
const app = express()
app.use(cors())

const User = require("./models/user.model")

// passport OAuth starts
app.use(
  cookieSession({
    name: "linkedIn-demo",
    keys: ["key1", "key2"],
  })
)

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.sendStatus(401)
  }
}

app.use(express.json())

app.use(passport.initialize())
//app.use(passport.session())

app.get("/failed", (req, res) => res.send("you failed to log in!"))
app.get("/", (req, res) => res.send("logged out"))

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
)

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  async function (req, res) {
    // Successful authentication, redirect home.

    const user = await User.find({ email: req.user._json.email }).lean().exec()
    if (user.length > 0) {
      res.redirect(`http://localhost:3000/profile/${req.user._json.email}`)
    } else {
      res.redirect(`http://localhost:3000/create-user/${req.user._json.email}`)
    }
  }
)

app.get("/logout", (req, res) => {
  req.session = null
  req.logout()
  res.redirect("/")
})
// passport OAuth ends

const start = async () => {
  await connect()

  app.listen(1234, (err, res) => {
    console.log("listening on port 1234")
  })
}

module.exports = start
