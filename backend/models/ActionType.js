var mongoose = require('mongoose');

var ActionType = mongoose.Schema;
var ActionTypeSchema = new Schema({
	name: String,
	skills: [{
		count: Number,
		skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }
	}]
},{ timestamps: true });

module.exports = mongoose.model('ActionType', ActionTypeSchema);