const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SponsorSchema = new Schema({
  imgsrc: String,
  weblink: String
});

const sponsor = mongoose.model('sponsor',SponsorSchema);

module.exports = sponsor;
