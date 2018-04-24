//Dependencies 
//-------------------------------------
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

//External File Routes 
//-------------------------------------
var htmlRoutes = require("./app/routing/apiRoutes.js");
var apiRoutes = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");

