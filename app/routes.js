var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
var User = mongoose.model('User');
var Student = mongoose.model('Student');
var Class = mongoose.model('Class');
var jwt = require('express-jwt');
var cv = require('../node-opencv/lib/opencv');

// var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

// return homepage for angular front end
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.param('class', function(req, res, next, id) {
    var query = Class.findById(id);

    query.exec(function (err, Class){
        if (err) {
            return next(err);
        }
        if (!Class) {
            return next(new Error('Class does not exist'));
        }
        req.class = Class;
        return next();
    });
});

router.post('/api/register', function(req, res, next){
    console.log(req);
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }
    var user = new User();
    user.username = req.body.username;
    user.setPassword(req.body.password);
    user.save(function (err){
        if(err){
            return next(err);
        }
        console.log('In register');
        return res.json({token: user.generateJWT()});
    });
});

router.post('/api/login', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    passport.authenticate('local', function(err, user, info){
        if(err){ return next(err); }

        if(user){
            return res.json({token: user.generateJWT()});
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});

router.post('/api/addclass', function(req, res, next) {
    if(!req.body.username || !req.body.classname) {
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    var addclass = new Class();
    addclass.username = req.body.username;
    addclass.classname = req.body.classname;

    addclass.save(function(err) {
        if(err) {
            return next(err);
        }

        return res.status(200).json({message: 'success'});
    });
});

router.get('/api/getclasses', function(req, res, next) {
    if(!req.query.username) {
        return res.status(400).json({message: 'Please fill out all fields'});
    }

    Class.find({username: req.query.username}, function(err, results) {
        if(err) {
            return res.status(401).json({message: err});
        }

        return res.json(results);
    });
});

router.post('/api/addstudent/:class', function (req, res, next) {
    if(!req.body.studentName || !req.body.studentHomeTown || !req.body.studentMajor || !req.body.studentGraduatingClass || !req.body.studentPicture)
        return res.status(400).json({message: 'Please fill out all fields'});

    var student = new Student();
    student.studentName = req.body.studentName;
    student.studentHomeTown = req.body.studentHomeTown;
    student.studentMajor = req.body.studentMajor;
    student.studentGraduatingClass = req.body.studentGraduatingClass;
    student.studentPicture = req.body.studentPicture;
    student.studentClass = req.class;

    student.save(function(err) {
        if(err) {
            return next(err);
        }
        req.class.students.push(student);
        req.class.save(function(err) {
            if(err) {
                return next(err);
            }
            return res.status(201).json(student);
        });
    });
});

router.post('/api/getstudent/:student_id', function (req, res, next) {

});

router.post('/api/compareimage', function(req, res, next) {
    console.log("I'M A FUCKING GEE");
});

router.get('/api/getClass/:class', function(req, res) {
    if(!req.class)
        return res.status(400).json({message: 'Class does not exist'});

    req.class.populate('students', function(err, Class) {
        if (err) {
            return next(err);
        }
        console.log(Class);
        res.json(Class);
    });
});

router.post('/api/circlefaces', function (req, res, next) {
    cv.readImage("/home/tuffant21/Desktop/download.jpg", function(err, im){
        im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
            for (var i=0;i<faces.length; i++) {
                var x = faces[i];
                im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
            }

            im.putText("People Present: ", 20, 120, 'FONT_HERSHEY_PLAIN', [246,255,79], 0.50, 2);
            for(var i = 0; i < req.body.names.length; i++) {
                im.putText(req.body.names[i], 20, 140 + (20 * i), 'FONT_HERSHEY_PLAIN', [246,255,79], 0.50, 2);
            }

            im.save('/home/tuffant21/Desktop/out.jpg');
            console.log("Done");
        });
    })
});

// router.post('/api/getAllStudents', function(req, res, next) {
//
// });
//
// router.post('/api/updatestudent', function (req, res, next) {
//
// });
//
// router.post('/api/removestudent', function (req, res, next) {
//
// });

module.exports = router;
