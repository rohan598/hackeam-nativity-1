var express = require('express');
var router = express.Router();
var society = require('../models/society');
var bcrypt = require('bcryptjs');
var event = require('../models/event');

let newEvent = {};
let newEventId;
router.post('/create', function (req, res, next) {
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


router.post('/', function (req, res, next) {
    var newSociety = new society({
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
  router.get('/myeventssociety', function (req, res, next) {

      event.find({_id:req.params.id}).exec((err, data)=>{
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

module.exports = {
    'router' : router,
    'eventData' : newEvent,
    'id':newEventId
};
