var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var GroupSchema = new Schema({
    name: String,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},{ timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);
