var express = require('express');
var router = express.Router();
var society = require('../models/society');
var bcrypt = require('bcryptjs');
var event = require('../models/event');

const newEvent;

router.post('/create', function (req, res, next) {
    newEvent = new event({
      name:req.body.eventName,
      from:req.body.from,
      to:req.body.to,
      background: req.body.description,
      description:req.body.background,
      hashtags:req.body.hashtags,
      events:req.body.events,
      register:req.body.register,
      profile:req.body.links,
      speakers:req.body.speakers,
      sponsors:req.body.sponsors
    });
    newEvent.save((error,result)=>{
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

module.exports = {
    'router' : router,
    'eventData' : newEvent
};
