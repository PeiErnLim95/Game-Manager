//Import needed packages
const mongoose = require('mongoose');

//Create Schema
const Schema = mongoose.Schema;

//Create new instance of schema and define types in schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

//Create model using schema
const User = mongoose.model("User", userSchema);

//Export for external usage
module.exports = User;