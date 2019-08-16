var express = require("express");
const mongoose = require('mongoose');
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencodded({
    extended: false
}));


app.use(router);

var db = process.env.MONGODB_URI || "mongod://localhost/mongoHeadLines";

mongoose.connect(db, function(error){
    if (error){
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful")
    }
})

app.listen(PORT, function(){
    console.log("Listening on port:" + PORT)
});