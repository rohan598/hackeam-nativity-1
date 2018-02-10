var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var user = require('../models/user');
var society = require('../models/society');

router.post('/user', function (req, res, next) {

    user.user.findOne({email: req.body.email},function(error,user){
      if(error){
        console.log('here');
        return res.status(500).json({
          title: 'An error occured',
          error: error
        });
      }if(!user){
              console.log('here1');
        return res.status(401).json({
          title: 'Login failed',
          error:{message:'Invalid email'}
        });
      }
        if(!bcrypt.compareSync(req.body.password,user.password)){
                console.log('here2');
          return res.status(401).json({
            title: 'Login failed',
            error:{message:'Invalid password'}
        });
      }
            console.log('here3');
      var token = new jwt.sign({user: user},'secret',{expiresIn:7200});
      res.status(200).json({
        message: 'successfully logged in',
        token: token,
        userId: user._id
      });
    });
  });

  router.post('/society', function (req, res, next) {

      society.findOne({email: req.body.email},function(error,society){
        if(error){
          return res.status(500).json({
            title: 'An error occured',
            error: error
          });
        }if(!user){
          return res.status(401).json({
            title: 'Login failed',
            error:{message:'Invalid email'}
          });
        }
          if(!bcrypt.compareSync(req.body.password,society.password)){
            return res.status(401).json({
              title: 'Login failed',
              error:{message:'Invalid password'}
          });
        }
        var token = new jwt.sign({society: society},'secret',{expiresIn:7200});
        res.status(200).json({
          message: 'successfully logged in',
          token: token,
          societyId: society._id,
        });
      });
    });

module.exports = router;
