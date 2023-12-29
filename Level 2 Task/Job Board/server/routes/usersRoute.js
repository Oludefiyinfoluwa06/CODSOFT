const { signup, login } = require('../controllers/usersController');

const router = require('express').Router();

router.post('/user/signup', signup);
router.post('/user/login', login);

module.exports = router;