//Import the database model
const Game = require('../model/game');
const User = require('../model/user');

const resolver = {
    Query: {
        users: () => {
            return User.find({})
                .catch((error) => {
                    console.log(`Error Occur: ${ error }`);
                })
        },
        user: (root, { name }) => {
            return User.findOne({ name: name })
                .catch((error) => {
                console.log(`Error Occur: ${ error }`);
            })
        },
        games: () => {
            return Game.find({})
                .catch((error) => {
                console.log(`Error Occur: ${ error }`);
            })
        },
        game: (root, { id }) => {
            return Game.findById(id)
                .catch((error) => {
                    console.log(`Error Occur: ${ error }`);
                })
        }
    },
    Mutation: {
        addUser: (root, { name, password, email }) => {
            let newUser = new User({
                name: name,
                password: password,
                email: email
            });
            return newUser.save().catch((error) => {
                console.log(`Error Occur: ${error}`);
            })
        },
        editUser: (root, { id, password, email }) => {
            return User.findByIdAndUpdate(id, {$set: {password: password,  email: email}})
                .catch((error) => {
                    console.log(`Error Occur: ${error}`);
                });
        },
        deleteUser: (root, { id }) => {
            return User.findByIdAndDelete(id).catch((error) => {
                console.log(`Error Occur: ${error}`);
            })
        },
        addGame: (root, { title, genre, platform, date, userId }) => {
            let newGame = new Game({
                title: title,
                genre: genre,
                platform: platform,
                date: date,
                userId: userId
            });
            return newGame.save().catch((error) => {
                console.log(`Error Occur: ${ error }`);
            });
        },
        editGame: (root, { id, title, genre, platform, date }) => {
            return Game.findByIdAndUpdate(id, {$set: {title: title, genre: genre, platform: platform, date: date}})
                .catch((error) => {
                    console.log(`Error Occur: ${error}`);
                });
        },
        deleteGame: (root, { id }) => {
            return Game.findByIdAndDelete(id).catch((error) => {
                console.log(`Error Occur: ${error}`);
            })
        }
    }
};

module.exports = resolver;