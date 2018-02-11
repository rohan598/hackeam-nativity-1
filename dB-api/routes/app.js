

var express = require('express');
var router = express.Router();
var society = require('../models/society');
var bcrypt = require('bcryptjs');
var event = require('../models/event');

router.get('/upcomingevents', function (req, res, next) {

    event.find({}).exec((err, data)=>{
          if(err){
            return res.status(500).json({
              title: 'An error occured',
              error: err
            });
          }else{
              console.log('Events successfully found in db');
                res.status(200).json({
                message:'User successfully found in db',
                obj: data
              });
            }
        });
  });

  // router.get('/myeventssociety', function (req, res, next) {
  //
  //     event.find({id:req.params.id}).exec((err, data)=>{
  //           if(err){
  //             return res.status(500).json({
  //               title: 'An error occured',
  //               error: err
  //             });
  //           }else{
  //               console.log('Events successfully found in db');
  //                 res.status(200).json({
  //                 message:'User successfully found in db',
  //                 obj: data
  //               });
  //             }
  //         });
  //   });
  router.get('/', function (req, res, next) {
      res.render('index');
  });
  module.exports = router;
