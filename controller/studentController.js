const studentService = require('../services/studentService');

const getStudentData = async function(req, res) {
    try{
        const result = await studentService.getStudentData();
        return res.status(200).json({ "status": 200, "data": result });
    }
    catch (e){
        console.log(e);
    }
}

const getStudentDataByRollNo = async function(req, res) {
    try{
        const result = await studentService.getStudentDataByRollNo(req.params);
        return res.status(200).json({ "status": 200, "data": result });
    }
    catch (e){
        console.log(e);
    }
}

const deleteStudentByRollNo = async function(req, res) {
    try{
        const result = await studentService.deleteStudentByRollNo(req.params);
        return res.status(200).json({ "status": 200, "data": result });
    }
    catch (e){
        console.log(e);
    }
}

module.exports.getStudentData = getStudentData;
module.exports.getStudentDataByRollNo = getStudentDataByRollNo;
module.exports.deleteStudentByRollNo = deleteStudentByRollNo;