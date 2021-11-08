const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  image: String,
  status: String,
  rate: Number,
  encashTickets: Number,
  visited: Number,
});

module.exports = mongoose.model('Event', eventSchema);
