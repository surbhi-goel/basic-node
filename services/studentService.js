const registerModel = require('../models/register');

const getStudentData = async function(reqBody) {
    console.log("getStudentData ", reqBody);
    return await registerModel.aggregate([
        {
            $lookup : {
                from : "logindetails",
                localField : "_id",
                foreignField : "user_id",
                as : "creds"
            }
        }
    ]);
}

const getStudentDataByRollNo = async function(reqParams) {
    console.log("getStudentDataByID ", reqParams);
    const rollno = parseInt(reqParams.rollno);
    return await registerModel.aggregate([
        {
            $match : {
                rollno: rollno
            }
        },
        {
            $lookup : {
                from : "logindetails",
                localField : "_id",
                foreignField : "user_id",
                as : "creds"
            }
        }
    ]);
}

const deleteStudentByRollNo = async function(reqParams) {
    console.log("getStudentDataByID ", reqParams);
    return await registerModel.deleteMany(reqParams);
}

module.exports.getStudentData = getStudentData;
module.exports.getStudentDataByRollNo = getStudentDataByRollNo;
module.exports.deleteStudentByRollNo = deleteStudentByRollNo;