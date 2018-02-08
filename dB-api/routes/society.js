var express = require('express');
var router = express.Router();
var society = require('../models/society');
var bcrypt = require('bcryptjs');
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

module.exports = router;
