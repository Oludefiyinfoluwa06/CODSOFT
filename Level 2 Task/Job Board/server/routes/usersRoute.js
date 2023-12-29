const { signup, login, getUserProfile } = require('../controllers/usersController');

const router = require('express').Router();

router.post('/user/signup', signup);
router.post('/user/login', login);
router.get('/user/:email', getUserProfile);

module.exports = router;