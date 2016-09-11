var mongoose = require('mongoose');


var ClassSchema = new mongoose.Schema({
    username: {type: String, lowercase: true},
    classname: String,
    students: []
});

mongoose.model('Class', ClassSchema);
