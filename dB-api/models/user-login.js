const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = require('./profile-link');

const UserSchema = new Schema({
  name:String,
  email:String,
  profile:[ProfileSchema],
  imgsrc:String
});

// const user = mongoose.model('user',UserSchema);

module.exports =
{
  user:mongoose.model('user',UserSchema),
  userSchema:UserSchema
};
