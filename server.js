//Dependencies 
//-------------------------------------
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

//External File Routes 
//-------------------------------------
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");

//Express and Heroku port settings
//-------------------------------------
var app = express();
var PORT = process.env.PORT || 8080;

