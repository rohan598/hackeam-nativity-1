/////// Packages
const express = require('express');
const router = express.Router();

/////// Models
const user = require('../models/user');
const society = require('../models/society');
const event = require('../models/event');

//   // router.get('/myeventssociety', function (req, res, next) {
//   //
//   //     event.find({id:req.params.id}).exec((err, data)=>{
//   //           if(err){
//   //             return res.status(500).json({
//   //               title: 'An error occured',
//   //               error: err
//   //             });
//   //           }else{
//   //               console.log('Events successfully found in db');
//   //                 res.status(200).json({
//   //                 message:'User successfully found in db',
//   //                 obj: data
//   //               });
//   //             }
//   //         });
//   //   });

  router.get('/', function (req, res, next) {
      res.render('index');
  });
  module.exports = router;
