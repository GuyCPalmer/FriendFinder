//Dependencies 
//-------------------------------------
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

//Express and Heroku port settings
//-------------------------------------
var app = express();
var PORT = process.env.PORT || 8081;

var friendsData = require("./app/data/friends.js");

//set up express app for data parsing
//-------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./app/public/"));

//Routes 
//-------------------------------------
const htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
const apiRoutes = require("./app/routing/apiRoutes.js")(app);

//Start the server to listen
//------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

