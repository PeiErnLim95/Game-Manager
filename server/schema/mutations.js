//Import the object type from GraphQL
const { GraphQLObjectType, GraphQLString,
        GraphQLID, GraphQLNonNull } = require('graphql');

//Import the database model
const Game = require('../model/game');
const User = require('../model/user');

//Import the types
const {GameType, UserType} = require('./types');

//Create mutations (Add/Delete/Update data)
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString)},
                email: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let newUser = new User({
                    name: args.name,
                    password: args.password,
                    email: args.email
                });
                newUser.save((error) => {
                    if (error){
                        console.log(`Error Occur: ${error}`);
                    }
                })
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                password: { type: GraphQLNonNull(GraphQLString)},
                email: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                User.findByIdAndUpdate(args.id, {$set: {password: args.password,  email: args.email}}, (error) => {
                    if (error){
                        console.log(`Error Occur: ${error}`);
                    }
                })
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args){
                User.findByIdAndDelete(args.id, (error) => {
                    if (error){
                        console.log(`Error Occur: ${error}`);
                    }
                })
            }
        },
        addGame: {
            type: GameType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                genre: { type: GraphQLNonNull(GraphQLString)},
                platform: { type: GraphQLNonNull(GraphQLString)},
                date: { type: GraphQLNonNull(GraphQLString)},
                userId: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let newGame = new Game({
                    title: args.title,
                    genre: args.genre,
                    platform: args.platform,
                    date: args.date,
                    userId: args.userId
                });
                newGame.save((error) => {
                    if (error){
                        console.log(`Error Occur: ${error}`);
                    }
                })
            }
        },
        editGame: {
            type: GameType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                title: { type: GraphQLNonNull(GraphQLString) },
                genre: { type: GraphQLNonNull(GraphQLString)},
                platform: { type: GraphQLNonNull(GraphQLString)},
                date: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                Game.findByIdAndUpdate(args.id,
                    {$set: {title: args.title, genre: args.genre,
                            platform: args.platform, date: args.date }},
                    (error) => {
                    if (error){
                        console.log(`Error Occur: ${error}`);
                    }
                })
            }
        },
        deleteGame: {
            type: GameType,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)},
            },
            resolve(parent, args) {
                Game.findByIdAndDelete(args.id, (error) => {
                    if (error) {
                        console.log(`Error Occur: ${error}`);
                    }
                })
            }
        }
    }
});

module.exports = Mutation;