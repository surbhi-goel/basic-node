const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));