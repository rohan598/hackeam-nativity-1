const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  address: String,
  // address:{
  //   country:String,
  //   state:String,
  //   pincode:String,
  //   city:String,
  //   street:String,
  //   country: String
  // },
  telephone:[String]
});

module.exports = {
  contact: mongoose.model('contact',ContactSchema),
  contactSchema:ContactSchema
};
