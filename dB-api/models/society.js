const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const user = require("./user");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  phone1:String,
  phone2:String,
  address: String
});

const SocietySchema = new Schema({
  name:String,
  email:{type:String,unique:true},
  password:String,
  description:String,
  logo:String,
  contact: [ContactSchema],
  // users: [{type: Schema.Types.ObjectId}],
  websites:[{type: Schema.Types.ObjectId,ref:'mainevents'}]
});

const society = mongoose.model('society',SocietySchema);

SocietySchema.plugin(mongooseUniqueValidator);
module.exports = society;
