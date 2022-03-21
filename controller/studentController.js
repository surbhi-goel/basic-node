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

const getStudentSpecificDataByRollNo = async function(req, res) {
    try{
        const result = await studentService.getStudentSpecificDataByRollNo(req.params);
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

const UpdateStudentByRollNo = async function(req, res) {
    try{
        const result = await studentService.UpdateStudentByRollNo(req.params, req.body);
        return res.status(200).json({ "status": 200, "data": result });
    }
    catch (e){
        console.log(e);
    }
}

const ReplaceStudentByRollNo = async function(req, res) {
    try{
        const result = await studentService.ReplaceStudentByRollNo(req.params, req.body);
        return res.status(200).json({ "status": 200, "data": result });
    }
    catch (e){
        console.log(e);
    }
}

module.exports.getStudentData = getStudentData;
module.exports.getStudentDataByRollNo = getStudentDataByRollNo;
module.exports.getStudentSpecificDataByRollNo = getStudentSpecificDataByRollNo;
module.exports.deleteStudentByRollNo = deleteStudentByRollNo;
module.exports.UpdateStudentByRollNo = UpdateStudentByRollNo;
module.exports.ReplaceStudentByRollNo = ReplaceStudentByRollNo;