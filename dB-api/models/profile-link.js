const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  github:String,
  linkedin:String,
  facebook:String,
  googleplus:String,
  twitter:String,
  instagram:String
});

module.exports = ProfileSchema;
