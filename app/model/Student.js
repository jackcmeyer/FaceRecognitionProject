var mongoose = require('mongoose');


var StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    picUrl: String
});

mongoose.model('Student', StudentSchema);
