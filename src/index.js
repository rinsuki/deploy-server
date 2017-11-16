const express = require("express")
const app = express()

app.set("view engine", "pug")
app.set("views", __dirname+"/views")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(process.env.PORT || 3000, function() {
    console.log("listen for http://localhost:"+(process.env.PORT || 3000))
})