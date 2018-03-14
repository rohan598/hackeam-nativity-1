/////// Packages
const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
/////// Models
const user = require('../models/user');
const society = require('../models/society');
const event = require('../models/event');
const mongoose = require('mongoose');
//
// let newEvent = {};
// let newEventId;


  router.get('/society/:id', function (req, res, next) {
      console.log(req.params.id);
      console.log(mongoose.mongo.BSONPure.ObjectID.fromHexString(req.params.id));
      society.findById(mongoose.mongo.BSONPure.ObjectID.fromHexString(req.params.id),(err, data)=>{
            if(err){
              console.log(req);
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
    /////// Event
    router.post('/society/:id/event', function (req, res, next) {
        newEvent = new event({
          name:req.body.eventName,
          from:req.body.from,
          to:req.body.to,
          background: req.body.background,
          description:req.body.description,
          hashtags:req.body.hashtags,
          events:req.body.events,
          register:req.body.register,
          profile:req.body.links,
          speakers:req.body.speakers,
          sponsors:req.body.sponsors,
          phone1:req.body.phone1,
          phone2:req.body.phone2,
          address:req.body.address,
          id:req.body.id
        });
        newEvent.save((error,result)=>{
          if(error){
            return res.status(500).json({
              title: 'An error occured',
              error: error
            });
          }else{
            newEventId = result._id;
            res.status(201).json({
              message:'User successfully saved to db',
              obj: result
            });
          }
        });
    });

router.get('/user/:id', function (req, res, next) {
    user.user.findById(mongoose.mongo.BSONPure.ObjectID.fromHexString(req.params.id),function(error,user){
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
    module.exports = router;
