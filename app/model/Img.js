var mongoose = require('mongoose');

var ImgSchema = new mongoose.Schema({
    img: {data: Buffer, contentType: String}
});

mongoose.model('Img', ImgSchema);
