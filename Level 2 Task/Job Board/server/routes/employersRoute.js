const router = require('express').Router();
const { signup, login, getEmployerProfile } = require("../controllers/employersController");


router.post('/employer/employer-signup', signup);
router.post('/employer/employer-login', login);
router.get('/employer/:id', getEmployerProfile);

module.exports = router;
