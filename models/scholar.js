var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  name: {type: String, required: true},
  position: {type:String, required: true},
  place: {type:String, required: true},
  contact: {type:String, required: true},
  detail: {type:String, required: true},
  misc: {type:String, required: true},
  country: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'Scholar'}
});

module.exports = mongoose.model('Scholar', schema);