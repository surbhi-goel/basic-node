const registerModel = require('../models/register');

const getStudentData = async function(reqBody) {
    console.log("getStudentData ", reqBody);
    return await registerModel.find();
}

const getStudentDataByRollNo = async function(reqParams) {
    console.log("getStudentDataByID ", reqParams);
    return await registerModel.find(reqParams);
}

const deleteStudentByRollNo = async function(reqParams) {
    console.log("getStudentDataByID ", reqParams);
    return await registerModel.deleteMany(reqParams);
}

module.exports.getStudentData = getStudentData;
module.exports.getStudentDataByRollNo = getStudentDataByRollNo;
module.exports.deleteStudentByRollNo = deleteStudentByRollNo;