var mongoose = require('mongoose');

var Skill = mongoose.Schema;
var SkillSchema = new Schema({
	name: String
},{ timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);