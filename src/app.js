const express = require("express");
const app = express();

//rotas
const index = require("./routes/index");
const professoras = require("./routes/professorasRoute");

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Acept"
    )
    next()
})

app.use("/", index);
app.use("/professoras", professoras);

module.exports = app;