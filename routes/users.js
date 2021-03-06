var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');
var jwt = require('jsonwebtoken');

router.post('/', function (req,res,next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });
  user.save(function (err, result) {
    if(err) {
     return res.status(500).json({
        title: 'Error',
        error: err
      })
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    })
  })
});

router.post('/login', function (req,res,next) {
  User.findOne({email: req.body.email}, function (err, user) {
    if(err) {
      return res.status(401).json({
        title: 'Error',
        error: err
      })
    }
    if(!user) {
      return res.status(401).json({
        title: 'No user',
        error: {message: 'No user'}
      })
    }
    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(500).json({
        title: 'Login failed',
        error: {message: 'Login failed'}
      })
    }
  var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200})
    res.status(200).json({
      message: 'Successful login',
      token: token,
      userId: user._id
    })
  })
})


module.exports = router;