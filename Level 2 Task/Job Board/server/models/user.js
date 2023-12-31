const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    educationLevel: String,
    pjt: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});

userSchema.statics.signup = async function (firstname, lastname, email, phone, username, password, industry, jobTitle, experience, educationLevel, pjt, city, state, country) {
    if (!email || !password || !firstname || !lastname || !username || !industry || !jobTitle || !experience || !pjt || !city || !state || !country) {
        throw Error("Input fields cannot be empty");
    }

    if (!validator.isEmail(email)) {
        throw Error("Please, enter a valid email");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough, it should contain uppercase and lowercase letters, numbers and special characters");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ firstname, lastname, email, phone, username, password: hash, industry, jobTitle, experience, educationLevel, pjt, city, state, country });

    return user;
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("Input fields cannot be empty");
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect password");
    }

    return user;
}

const User = mongoose.model('User', userSchema);
module.exports = User;