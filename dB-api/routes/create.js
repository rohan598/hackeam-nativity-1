// var express = require('express');
// var router = express.Router();
// var event = require('../models/event');
// var jwt = require('jsonwebtoken');
//
// router.post('/', function (req, res, next) {
//     var newEvent = new event({
//       name:req.body.eventName,
//       from:req.body.from,
//       to:req.body.to,
//       background: req.body.description,
//       description:req.body.background,
//       hashtags:req.body.hashtags,
//       register:req.body.register,
//       profile:req.body.links,
//       speakers:req.body.speakers,
//       sponsors:req.body.sponsors
//     });
//     newEvent.save((error,result)=>{
//       if(error){
//         return res.status(500).json({
//           title: 'An error occured',
//           error: error
//         });
//       }else{
//         res.status(201).json({
//           message:'User successfully saved to db',
//           obj: result
//         });
//       }
//     });
// });
