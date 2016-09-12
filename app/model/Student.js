var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    studentName: String,
    studentHomeTown: String,
    studentMajor: String,
    studentGraduatingClass: String,
    studentPicture: String
});

mongoose.model('Student', StudentSchema);
