//require pathfor location and friends
//-------------------------------------
const friends = require ("../data/friends");
const path = require ("path");

var api = function (app) {

app.get("/api/friends", function (req, res) {
    res.json(friends);
})

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var matches;
    var matchesArr = [];

    friends.each (friend => {
        let matchScore = 0;

        for (var i = 0; i < friend.scores.length; i++) {
            matchScore += Math.abs(parseINT(friend.scores[i]) - parseInt(newFriend.scores[i]));
        }; 
        matchesArr.unshift({
            name: friend.name,
            score: matchScore,
            photo: friend.photo
        });
    })

    let matchedFriend = matchesArr.reduce( (carry, next) => {
        if(carry.score < next.score)
            return carry;
        else
            return next;
    })
console.log (matchedFriend)
console.log (newFriend)

friends.unshift(newFriend)
res.json(matchedFriend)
})
}
module.exports = api;




