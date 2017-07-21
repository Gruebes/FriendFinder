let friends = require('../data/friends.js');

module.exports = function(app) {
    // Gets api data for api display
    app.get('/api/friends', function(req, res) {
        res.json(friends)
    })

    app.post('/api/friends', function(req, res) {
        let userName = req.body.name;
        let userScores = req.body.scores;
        let currentLow = 100;
        let match = {};

        friends.forEach(function(friend) {
            let newDifference = matchCheck(userScores, friend.scores)
            if (newDifference < currentLow) {
                currentLow = newDifference;
                match = {
                    name: friend.name,
                    photo: friend.photo
                }
            }

        }, this);

        console.log('------------------------------------');
        console.log(match.name);
        console.log('------------------------------------');
        res.status(200).send(match);
        friends.push(req.body);
    })
};

function matchCheck(userArray, friendArray) {
    let redArray = [];
    let newDifference = 0;

    for (var i = 0; i < userArray.length; i++) {
        redArray.push(Math.abs(userArray[i] = friendArray[i]))
    }

    newDifference = redArray.reduce(function(a, b) {
        return a + b;
    })

    return newDifference;

}