//Import/Require needed packages
const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');

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

app.use(cors());
app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    })
);

//Listen to port
const port = process.env.PORT || 4000;
app.listen(port, () => {
   console.log(`Now listening to port ${ port }`);
});