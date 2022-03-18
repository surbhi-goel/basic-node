const express = require('express')
const router = express.Router();

const registerController = require('../controller/registerController');
const studentController = require('../controller/studentController');

router.post('/student/register', registerController.register);
router.get('/get-student-data/:rollno', studentController.getStudentDataByRollNo);

module.exports = router;