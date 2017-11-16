const express = require("express")
const app = express()

const models = require("./models")

app.set("view engine", "pug")
app.set("views", __dirname+"/views")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(process.env.PORT || 5000, function() {
    console.log("listen for http://localhost:"+(process.env.PORT || 5000))
})