const express = require('express');
const router = express.Router();
const { RegisterUser, authUser } = require('../controller/userController');
router.post('/register', RegisterUser);

router.post('login', authUser);

module.exports = router;
