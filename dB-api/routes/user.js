const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');

router.post('/', function (req, res, next) {
    const newUser = new user.user({
      name:req.body.username,
      email:req.body.email,
      password:bcrypt.hashSync(req.body.password,10),
      avatar:req.body.avatar,
      profile:req.body.profile
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

// router.use('/',function(req,res,next){
//   jwt.verify(req.query.token,'secret',function(err,decoded){
//     if(err){
//       return res.status(401).json({
//         title: 'Not Authenticated',
//         error: err
//       });
//     }
//     next();
//   });
// });

router.get('/', function (req, res, next) {
    user.user.findById(req.params.id,function(error,user){
          if(error){
            return res.status(500).json({
              title: 'An error occured',
              error: error
            });
          }else{
                res.status(200).json({
                message:'User successfully found in db',
                obj: user
              });
            }
        });
  });




module.exports = router;

//
// jwt.verify(req.query.token,'secret',function(err,decoded){
//   if(err){
//     return res.status(401).json({
//       title: 'Not Authenticated',
//       error: err
//     });
//   }
