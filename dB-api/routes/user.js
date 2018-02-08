var express = require('express');
var router = express.Router();
var user = require('../models/user');
var bcrypt = require('bcryptjs');
router.post('/', function (req, res, next) {
    var newUser = new user({
      name:req.body.username,
      email:req.body.email,
      password:bcrypt.hashsync(req.body.password,10)
    });
    newUser.save((error,result)=>{
      if(error){
        return res.status(500).json({
          title: 'An error occured',
          error: error
        });
      }else{
        res.status(201).json({
          message:'User successfully saved to db',
          obj: result
        });
      }
    });
});

module.exports = router;
