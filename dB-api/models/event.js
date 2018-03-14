const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = require('./profile-link');
const SpeakerSchema = new Schema({
  avatar: String,
  name: String,
  designation:String,
  description:String,
  profile:[ProfileSchema]
});

const SponsorSchema = new Schema({
  logo: String,
  link: String
});

const EventSchema = new Schema({
  name:String,
  from:String,
  to:String,
  venue: String,
  decription: String
});

 const MainEventSchema = new Schema({
   name:String,
   from:String,
   to:String,
   background: String,
   description:String,
   hashtags:String,
  events: [EventSchema],
   register:String,
   profile:[ProfileSchema],
   speakers:[SpeakerSchema],
   sponsors:[SponsorSchema],
   phone1:String,
   phone2:String,
   address:String,
   id: {type: Schema.Types.ObjectId,ref:'societies'}
 });

 const mainevent = mongoose.model('mainevent',MainEventSchema);

 module.exports = mainevent;
