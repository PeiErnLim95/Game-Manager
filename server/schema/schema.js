//Import required packages and files
const { GraphQLSchema } = require('graphql');
const Query = require('./queries');
const Mutation = require('./mutations');

//Create the GraphQL Schema
const schema = new GraphQLSchema({
   query: Query,
   mutation: Mutation
});

module.exports = schema;