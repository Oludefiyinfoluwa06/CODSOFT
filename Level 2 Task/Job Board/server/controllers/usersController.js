const bcrypt = require('bcrypt');
const User = require('../models/user');

const signup = async (req, res) => {
    const { firstname, lastname, email, username, password, industry, jobTitle, experience, pjt, city, state, country } = req.body;
    const checkEmail = await User.findOne({ email: email });

    if (checkEmail) {
        res.json("emailExists");
    } else {
    bcrypt.genSalt(10)
        .then(salt => {
            return bcrypt.hash(password, salt);
        })
        .then(hash => {
            const user = new User({ firstname, lastname, email, username, password: hash, industry, jobTitle, experience, pjt, city, state, country,
            });

            return user.save();
        })
        .then(result => {
            res.json("User signed up successfully");
        })
        .catch(err => {
            console.log("Error signing up user: ", err);
            res.status(500).json("Error signing up user");
        });
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                res.json('success');
            } else {
                res.json('wrongPassword');
            }
        } else {
            res.json('failed');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }

}

module.exports = {
    signup,
    login
}