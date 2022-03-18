const express = require('express')
const router = express.Router();

const registerController = require('../controller/registerController');

router.post('/student/register', registerController.register);

module.exports = router;