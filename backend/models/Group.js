var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var GroupSchema = new Schema({
    name: String,
    participants: Array
},{ timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);
