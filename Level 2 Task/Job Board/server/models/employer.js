const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const employerSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

employerSchema.statics.signup = async function (companyName, email, password) {
    if (!companyName || !email || !password) {
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
        throw Error("Email exists already");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ companyName, email, password: hash });
    return user;
}

employerSchema.statics.login = async function (email, password) {
    if (!email || !password) {
       throw Error("Input fields cannot be empty");
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error("Email does not exist");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect Password");
    }

    return user;
}

const Employer = mongoose.model('Employer', employerSchema);
module.exports = Employer;