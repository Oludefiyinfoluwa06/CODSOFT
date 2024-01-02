const jwt = require('jsonwebtoken');
const User = require('../models/user');

const createToken = (_id) => {
    return jwt.sign({ _id }, "6925Fi91408yint0220im06othy", { expiresIn: '1d' });
}

const signup = async (req, res) => {
    const { firstname, lastname, email, phone, username, password, industry, jobTitle, experience, educationLevel, pjt, city, state, country } = req.body;

    try {
        const user = await User.signup(firstname, lastname, email, phone, username, password, industry, jobTitle, experience, educationLevel, pjt, city, state, country);

        res.status(200).json({ msg: "Successfully signed up" });
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

const getUserProfile = async (req, res) => {
    const email = req.params;

    if (!email) {
        res.status(401).json({ error: "email is required" });
    }

    try {
        const user = await User.findOne(email);

        if (!user) {
            res.status(401).json({ error: "user not found" });
        }

        res.json({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone, 
            username: user.username,
            industry: user.industry, 
            jobTitle: user.jobTitle, 
            experience: user.experience, 
            educationLevel: user.educationLevel, 
            pjt: user.pjt, 
            city: user.city, 
            state: user.state, 
            country: user.country
        });
    } catch (err) {
        res.status(401).json({ error: err });
    }
}

module.exports = {
    signup,
    login,
    getUserProfile
}