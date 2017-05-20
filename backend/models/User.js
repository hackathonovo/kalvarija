var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
	firstName: String,
	lastName: String,
    isAdmin: Boolean,
    type: String,
    skills: Array,
    station: Number,
    job: String,
    availability: {
        startTime: Number,
        endTime: Number,
        current: Boolean
    },
	phone: { 
		type: String,
        unique: true,
        required: true,
	},
    location: String

},{ timestamps: true });

module.exports = mongoose.model('User', UserSchema);
