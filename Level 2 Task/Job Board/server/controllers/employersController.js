const jwt = require("jsonwebtoken");
const Employer = require("../models/employer");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });
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

        const companyName = employer.companyName;

        const token = createToken(employerId);
        return res.status(200).json({ employerId, email, companyName, token });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

const getEmployerProfile = async (req, res) => {
    const employerId = req.params;

    try {
        const employer = await Employer.findById({ employerId });

        if (!employer) {
            res.status(401).json({ error: "Employer not found" });
        }

        res.status(200).json({
            companyName: employer.companyName,
            email: employer.email,
        });
    } catch (error) {
        res.status(401).json({ error: err });
    }
}

module.exports = {
    signup,
    login,
    getEmployerProfile
}