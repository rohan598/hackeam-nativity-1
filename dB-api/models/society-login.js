const mongoose = require('mongoose');
const user = require("./user-login");
const contact = require('./contact-details');
const Schema = mongoose.Schema;

const SocietySchema = new Schema({
  name:String,
  email:String,
  password:String,
  description:String,
  logo:String,
  member: [user.userSchema],
  contact: [contact.contactSchema],
  // member:[UserSchema]
  websites:[String]
});

const society = mongoose.model('society',SocietySchema);

module.exports = society;
