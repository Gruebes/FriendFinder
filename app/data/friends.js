var faker = require('faker');

var fakeFriends = []

for (var i = 0; i < 50; i++) {

    fakeFriend = {
        name: faker.name.findName(),
        photo: faker.image.avatar(),
        scores: []
    };
    for (var a = 0; a < 10; a++) {
        fakeFriend.scores.push(Math.floor(Math.random() * 5) + 1);
    }
    fakeFriends.push(fakeFriend)
}

module.exports = fakeFriends;