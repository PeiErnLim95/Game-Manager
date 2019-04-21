//Import the object type from GraphQL
const { GraphQLObjectType, GraphQLString, GraphQLID,
    GraphQLList} = require('graphql');

//Import the database model
const Game = require('../model/game');
const User = require('../model/user');

const GameType = new GraphQLObjectType({
   name: 'Game',
   fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        platform: { type: GraphQLString },
        date: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        games: {
            type: GraphQLList(GameType),
            resolve(parent, args){
                return Game.find({ userId: parent.id })
            }
        }
    })
});

module.exports = {GameType, UserType};