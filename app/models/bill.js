var mongoose = require('mongoose');


module.exports = mongoose.model ('Bill', {
  bill: {type: Number, required: true },
  // used: {type: Number, required: true },
  // rate: {type: Number, required: true },
  // bdate: {type: String},
  // hsize: {type: Number, required: true },
  // city: {type: String, required: true },
  // zip: {type: Number, required: true },
  // coords: {lat: Number, long: Number },
  // tstamp: {type: Date, default: Date.now },
  done : Boolean
});