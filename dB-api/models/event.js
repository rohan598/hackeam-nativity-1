const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name:String,
  // date: Date,
  // time: String,
  duration: {
    from:Date,
    to:Date
  },
  venue: String,
  decription: String,
  logo: String,
  background: String,
  quote: String,
  topics: [String]
});

 const DayEventSchema = new Schema({
   date: String,
   events: [EventSchema]
 });
 const MainEventSchema = new Schema({
   name:String,
   duration:{
     from:Date,
     to:Date
   },
   description:String,
   days:[DayEventSchema],
   society: {type: Schema.Types.ObjectId}
 });

 const mainevent = mongoose.model('mainevent',MainEventSchema);

 module.exports = mainevent;
