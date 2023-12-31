const jwt = require("jsonwebtoken");
const Employer = require("../models/employer");

const createToken = (_id) => {
    return jwt.sign({ _id }, "6925Fi91408yint0220im06othy", { expiresIn: '1d' });
}

const signup = async (req, res) => {
    const { companyName, email, password } = req.body;

    try {
        const employer = await Employer.signup(companyName, email, password);
        return res.status(200).json({ msg: "Successfully signed up", employer });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const employer = await Employer.login(email, password);
        const employerId = employer._id;

        const token = createToken(employerId);
        return res.status(200).json({ employerId, email, token });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

module.exports = {
    signup,
    login,
}