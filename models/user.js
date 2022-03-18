const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginDetails = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "registerdetails",//name of register-table
        unique: true
    }, 
    emailId: {
        type: String,
    },
    password: {
        type: String,
    },
},
{
    timestamps: true,
});


const loginSchema = mongoose.model('logindetails', loginDetails);
//'tablename'
module.exports = loginSchema;