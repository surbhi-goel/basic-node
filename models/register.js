const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerDetails = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    rollno: {
        type: String,
    }
},
{
    timestamps: true,
});

const registerSchema = mongoose.model('registerdetails', registerDetails);
//'tablename'
module.exports = registerSchema;