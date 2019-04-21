//Import needed packages
const mongoose = require('mongoose');

//Create Schema
const Schema = mongoose.Schema;

//Create new instance of schema and define types in schema
const gameSchema = new Schema({
   title: {
       type: String,
       required: true
   },
   genre: {
       type: String,
       required: true
   },
   platform: {
       type: String,
       required: true
   },
   date: {
       type: String,
       required: true
   },
    userId: {
       type: String,
        required: true
    }
});

//Create model using schema
const Game = mongoose.model("Game", gameSchema);

//Export for external usage
module.exports = Game;