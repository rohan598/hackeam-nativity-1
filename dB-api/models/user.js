const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = require('./profile-link');

const UserSchema = new Schema({
  username:String,
  email:String,
  password:String,
  imgsrc:String,
  profile:[ProfileSchema]
});

// const user = mongoose.model('user',UserSchema);

module.exports =
{
  user:mongoose.model('user',UserSchema),
  userSchema:UserSchema
};
