var mongoose = require('mongoose');


var ClassSchema = new mongoose.Schema({
    username: {type: String, lowercase: true},
    classname: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

mongoose.model('Class', ClassSchema);
