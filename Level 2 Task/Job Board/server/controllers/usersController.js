const jwt = require('jsonwebtoken');
const User = require('../models/user');

const createToken = (_id) => {
    return jwt.sign({ _id }, "6925Fi91408yint0220im06othy", { expiresIn: '1d' });
}

const signup = async (req, res) => {
    const { firstname, lastname, email, phone, username, password, industry, jobTitle, experience, educationLevel, pjt, city, state, country } = req.body;

    try {
        const user = await User.signup(firstname, lastname, email, phone, username, password, industry, jobTitle, experience, educationLevel, pjt, city, state, country);

        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    signup,
    login
}