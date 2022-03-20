const express = require('express')
const router = express.Router();

const registerController = require('../controller/registerController');
const studentController = require('../controller/studentController');

router.post('/student/register', registerController.register);
router.get('/get-student-data/', studentController.getStudentData);
router.get('/get-student-data/:rollno', studentController.getStudentDataByRollNo);
router.get('/get-student-specific-data/:rollno', studentController.getStudentSpecificDataByRollNo);
router.delete('/delete-student/:rollno', studentController.deleteStudentByRollNo);

module.exports = router;