var mongoose = require('mongoose');

var Group = mongoose.Schema;
var GroupSchema = new Schema({
	leader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }]
},{ timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);