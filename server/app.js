//Import/Require needed packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./graphqlSchema/schema');
const { ApolloServer } = require('apollo-server-express');

//Create Express App
const app = express();

//Connect to MongoDB databases
const db = "mongodb+srv://admin:admin@gms-do5tc.mongodb.net/GameManager?retryWrites=true";
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
        .then(() => {
            console.log('Database Connected');
        })
        .catch((error) => {
            console.log(`Error connect database: ${error}`);
        });

//Allow cross-origin resource sharing
app.use(cors());

//Create Apollo Server
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

//Listen to port
const port = process.env.PORT || 4000;
app.listen(port, () => {
   console.log(`Now listening to port ${ port }`);
});