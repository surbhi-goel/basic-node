const express = require('express')
const router = express.Router();

const registerController = require('../controller/registerController');
const studentController = require('../controller/studentController');

router.post('/student/register', registerController.register);
router.post('/student/multi-register', registerController.multiRegister);
router.get('/get-student-data/', studentController.getStudentData);
router.get('/get-student-data/:rollno', studentController.getStudentDataByRollNo);
router.get('/get-student-specific-data/:rollno', studentController.getStudentSpecificDataByRollNo);
router.delete('/delete-student/:rollno', studentController.deleteStudentByRollNo);
router.patch('/update-student/:rollno', studentController.UpdateStudentByRollNo);

// if not found, create another one
router.put('/replace-student/:rollno', studentController.ReplaceStudentByRollNo);

module.exports = router;