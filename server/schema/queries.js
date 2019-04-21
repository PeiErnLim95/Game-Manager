//Import the object type from GraphQL
const { GraphQLObjectType, GraphQLString, GraphQLID,
    GraphQLList } = require('graphql');

//Import the database model
const Game = require('../model/game');
const User = require('../model/user');

//Import the types
const {GameType, UserType} = require('./types');

//Create the query (Get Data From Database)
const Query = new GraphQLObjectType({
   name: 'RootQuery',
   fields: {
       game: {
            type: GameType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                return Game.findById(args.id);
            }
       },
       games: {
           type: GraphQLList(GameType),
           resolve(parent, args) {
               return Game.find({});
           }
       },
       user: {
           type: UserType,
           args: { id: { type: GraphQLID }},
           resolve(parent, args){
               return User.findById(args.id);
           }
       },
       users: {
           type: GraphQLList(UserType),
           resolve(parent, args) {
               return User.find({});
           }
       },
       getGamesByGenre: {
           type: GraphQLList(GameType),
           args: { genre: { type: GraphQLString } },
           resolve(parent, args){
               return Game.find({ genre: args.genre });
           }
       },
       getGamesByPlatform: {
           type: GraphQLList(GameType),
           args: { platform: { type: GraphQLString } },
           resolve(parent, args){
               return Game.find({ platform: args.platform });
           }
       }
   }
});

module.exports = Query;