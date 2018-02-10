const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = require('./profile-link');

const ContactSchema = new Schema({
  address: String,
  telephone:[String]
});
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

 // const DayEventSchema = new Schema({
 //   date: String,
 //   events: [EventSchema]
 // });
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
   // contacts:[ContactSchema],
   society: {type: Schema.Types.ObjectId}
 });

 const mainevent = mongoose.model('mainevent',MainEventSchema);

 module.exports = mainevent;
