const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const ProfileSchema = require('./profile-link');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username:String,
  email:{type:String,unique:true},
  password:String,
  avatar: String,
  profile:[ProfileSchema],
  events:[{type: Schema.Types.ObjectId}]
});

UserSchema.plugin(mongooseUniqueValidator);
module.exports =
{
  user:mongoose.model('user',UserSchema),
  userSchema:UserSchema
};
