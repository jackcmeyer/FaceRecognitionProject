var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    studentName: String,
    studentHomeTown: String,
    studentMajor: String,
    studentGraduatingClass: String,
    studentPicture: String,
    studentClass: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

mongoose.model('Student', StudentSchema);
