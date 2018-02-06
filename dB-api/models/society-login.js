const mongoose = require('mongoose');
const user = require("./user-login");
const contact = require('./contact-details');
const Schema = mongoose.Schema;

const SocietySchema = new Schema({
  name:String,
  email:String,
  logo:String,
  description:String,
  member: [user.userSchema],
  contact: [contact.contactSchema]
  // member:[UserSchema]
});

const society = mongoose.model('society',SocietySchema);

module.exports = society;
