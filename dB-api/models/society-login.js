const mongoose = require('mongoose');
const user = require("./user-login");

const Schema = mongoose.Schema;

const SocietySchema = new Schema({
  name:String,
  email:String,
  logo:String,
  description:String,
  member: user.userSchema
  // member:[UserSchema]
});

const society = mongoose.model('society',SocietySchema);

module.exports = society;
