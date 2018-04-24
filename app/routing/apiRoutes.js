//Dependencies 
//-------------------------------------
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

var friends = require("./app/data/friends.js");
var app = express();
var apiRouter = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

apiRouter.options("/api/friends"), function(req, res) {
    var newFriend = req.body;
    var totalDif = 0;
    var totalDifArray = [];
    var match = 0;

        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.score[i] = parseInt(newFriend.scores[i]);
        }
            friends.push(newFriend);

        for (var i = 0; i < friends.length - 1; i++) {
            for (var j = 0; j , newFriend.scores.length; j++){
                totalDif += Math.abs(newFriend.scores[j] - friends[i].scores[j])
                }
                    totalDifArray.push(totalDif);
                    console.log(totalDifArray);
        }
        match = (totalDiffArr.indexOf(math.min.apply(Math, totalDifArr)));
        bestMatch = friends[match];
        res.json(bestMatch);
};

apiRouter.get("/api/friends", function(req, res){
    res.json(friends);
});

module.export = apiRouter;