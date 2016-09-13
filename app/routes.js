var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
var User = mongoose.model('User');
var Student = mongoose.model('Student');
var Class = mongoose.model('Class');
var jwt = require('express-jwt');

var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

// return homepage for angular front end
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
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

router.post('/api/addstudent', function (req, res, next) {
    if(!req.body.studentName || !req.body.studentHomeTown || !req.body.studentMajor || !req.body.studentGraduatingClass || !req.body.studentPicture)
        return res.status(400).json({message: 'Please fill out all fields'});

    var student = new Student();
    student.studentName = req.body.studentName;
    student.studentHomeTown = req.body.studentHomeTown;
    student.studentMajor = req.body.studentMajor;
    student.studentGraduatingClass = req.body.studentGraduatingClass;
    student.studentPicture = req.body.studentPicture;

    // Student.getAllStudents();

    student.save(function(err) {
        if(err) {
            return next(err);
        }

        return res.status(201).json({message: 'student created'});
    });
});

router.post('/api/getstudent', function (req, res, next) {

});

router.post('/api/getAllStudents', function(req, res, next) {

});

router.post('/api/updatestudent', function (req, res, next) {

});

router.post('/api/removestudent', function (req, res, next) {

});

module.exports = router;
