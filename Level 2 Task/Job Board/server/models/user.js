const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    industry: String,
    jobTitle: String,
    experience: String,
    educationLevel: String,
    pjt: String,
    city: String,
    state: String,
    country: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;