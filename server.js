//Dependencies 
//-------------------------------------
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

//Routes 
//-------------------------------------
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

//Express and Heroku port settings
//-------------------------------------
var app = express();
var PORT = process.env.PORT || 8080;

var friendsData = require("./app/data/friends.js");

//set up express app for data parsing
//-------------------------------------

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "app/public")));

//Start the server to listen
//------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})

