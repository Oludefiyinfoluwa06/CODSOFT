const router = require('express').Router();
const { signup, login } = require("../controllers/employersController");


router.post('/employer/employer-signup', signup);
router.post('/employer/employer-login', login);

module.exports = router;
