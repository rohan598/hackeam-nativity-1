const mongoose = require('mongoose');
const ProfileSchema = require('./profile-link');

const Schema = mongoose.Schema;

const SpeakerSchema = new Schema({
  imgsrc: String,
  name: String,
  designation:String,
  description:String,
  profile:[ProfileSchema]
});

const speaker = mongoose.model('speaker',SpeakerSchema);

module.exports = speaker;
