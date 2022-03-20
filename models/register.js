const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment')
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

autoIncrement.initialize(mongoose.connection);
registerDetails.plugin(uniqueValidator, {
    message: 'already exists.',
});

registerDetails.plugin(autoIncrement.plugin, {
    model: 'registerdetails',
    field: 'rollno',
    startAt: 1001
})

const registerSchema = mongoose.model('registerdetails', registerDetails);
//'tablename'
module.exports = registerSchema;