const { gql } = require('apollo-server');

const typeDefs = gql`
    type Game{
        id: ID
        title: String
        genre: String
        platform: String
        date: String
        userId: String
    }
    
    type User{
        id: ID
        name: String
        password: String
        email: String
    }
    
    type Query{
        game(id: ID): Game
        games: [Game]
        user(name: String): User
        users: [User]
        getGamesByGenre(genre: String): Game
        getGamesByPlatform(platform: String): Game
        currentUser: User
    }
    
    type Mutation{
        addUser(name: String, password: String, email: String): User
        editUser(id: ID, password: String, email: String): User
        deleteUser(id: ID): User
        addGame(title: String, genre: String, platform: String, date: String): Game
        editGame(id: ID, title: String, genre: String, platform: String, date: String): Game
        deleteGame(id: ID): Game
    }
`;

module.exports = typeDefs;