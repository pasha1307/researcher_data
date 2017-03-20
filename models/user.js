var mongoose = require('mongoose');
var express = require('express');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;
var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required:true},
  email: {type:String, required: true, unique: true},
  password: {type: String, required: true },
  scholars: [{type: Schema.Types.ObjectId, ref: 'Scholar'}]
});
schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);