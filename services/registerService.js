const registerModel = require('../models/register');
const userModel = require('../models/user');

const ObjectId = require('mongodb').ObjectID;

const register = async function(reqBody) {
    const users = {
        firstname : reqBody.firstname,
        lastname : reqBody.lastname,
        rollno : reqBody.rollno
    };
    const registerData = await registerModel.create(users);
    const loginData = {
        user_id : ObjectId(registerData.id),
        emailId : reqBody.emailId,
        password : reqBody.password
    };
    await userModel.create(loginData);
}

module.exports.register = register;