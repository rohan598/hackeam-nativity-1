/////// Packages
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

/////// Models
const user = require('../models/user');
const society = require('../models/society');
const event = require('../models/event');

const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');

// let newEvent = {};
// let newEventId;


/////// Society
router.post('/society', function (req, res, next) {
    const newSociety = new society({
      name:req.body.username,
      email:req.body.email,
      password:bcrypt.hashSync(req.body.password,10),
      description:req.body.description
    });
    newSociety.save((error,result)=>{
      if(error){
        return res.status(500).json({
          title: 'An error occured',
          error: error
        });
      }else{
        res.status(201).json({
          message:'Society successfully saved to db',
          obj: result
        });
      }
    });
});

/////// User
router.post('/user', function (req, res, next) {
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


// module.exports = {
//     'router' : router,
//     'eventData' : newEvent,
//     'id':newEventId
// };

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




module.exports = router;

//
// jwt.verify(req.query.token,'secret',function(err,decoded){
//   if(err){
//     return res.status(401).json({
//       title: 'Not Authenticated',
//       error: err
//     });
//   }
