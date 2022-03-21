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

const getStudentSpecificDataByRollNo = async function(reqParams) {
    console.log("getStudentSpecificDataByRollNo ", reqParams);
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
        },
        {
            $unwind: "$creds" // to move outside of array
        },
        {
           $project: {
                firstname : 1,
                lastname : 1,
                rollno : 1,
                emailId : '$creds.emailId',
                password : '$creds.password'
            }
        }
    ]);
}

const deleteStudentByRollNo = async function(reqParams) {
    console.log("getStudentDataByID ", reqParams);
    return await registerModel.deleteMany(reqParams);
}

const UpdateStudentByRollNo = async function(reqParams, reqBody) {
    const rollno = parseInt(reqParams.rollno);
    await registerModel.updateOne(
        {
            'rollno': rollno
        }, {
           $set : reqBody 
        }
    );
    return await getStudentSpecificDataByRollNo(reqParams);
}

const ReplaceStudentByRollNo = async function(reqParams, reqBody) {
    const rollno = parseInt(reqParams.rollno);
    await registerModel.replaceOne(
        {
            'rollno': rollno
        },{
            ...reqBody,
            'rollno': rollno
        },
        {
            upsert : true // sets to true - if no match found, create one
        }
    );
    return await getStudentSpecificDataByRollNo(reqParams);
}

module.exports.getStudentData = getStudentData;
module.exports.getStudentDataByRollNo = getStudentDataByRollNo;
module.exports.getStudentSpecificDataByRollNo = getStudentSpecificDataByRollNo;
module.exports.deleteStudentByRollNo = deleteStudentByRollNo;
module.exports.UpdateStudentByRollNo = UpdateStudentByRollNo;
module.exports.ReplaceStudentByRollNo = ReplaceStudentByRollNo;