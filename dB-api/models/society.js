const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const user = require("./user");
const contact = require('./contact-details');

const Schema = mongoose.Schema;

const SocietySchema = new Schema({
  societyname:String,
  email:{type:String,unique:true},
  password:String,
  description:String,
  logo:String,
  contact: [contact.contactSchema],
  users: [{type: Schema.Types.ObjectId}],
  websites:[{type: Schema.Types.ObjectId}]
});

const society = mongoose.model('society',SocietySchema);

SocietySchema.plugin(mongooseUniqueValidator);
module.exports = society;
