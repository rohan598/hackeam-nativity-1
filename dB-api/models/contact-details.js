const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  address:{
    buildingNumber:String,
    streetName:String,
    neighbourhood:String,
    city:String,
    zipCode:String
  },
  email:String,
  telephone:[String],
  description:String
});

const contact = mongoose.model('contact',ContactSchema);

module.exports = contact;
