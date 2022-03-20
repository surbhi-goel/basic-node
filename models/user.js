const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const loginDetails = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "registerdetails",//name of register-table
        unique: true
    }, 
    emailId: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
},
{
    timestamps: true,
});

loginDetails.plugin(uniqueValidator, {
    message: 'already exists.',
});


const loginSchema = mongoose.model('logindetails', loginDetails);
//'tablename'
module.exports = loginSchema;