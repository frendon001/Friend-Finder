// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
      var friend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body["scores[]"]
      };
      // console.log(friend.scores);
      // console.log(friendsData[0]);
      var match = findMatch(friend.scores, friendsData);
      friendsData.push(friend);
      res.json(match);

  });

};


function findMatch(userScores, friends){
  var match = [];
  var bestMatchScore = 1000;
  var matchScore;


  for (var i = 0; i < friends.length; i++) {
    matchScore = 0;

    for (var j = 0; j < userScores.length; j++) {

      matchScore += Math.abs(parseInt(userScores[j],10)-parseInt(friends[i].scores[j],10));
    }
    if (matchScore <= bestMatchScore) {
      bestMatchScore = matchScore;
      match = friends[i];
    }
  }

  return match;

};
