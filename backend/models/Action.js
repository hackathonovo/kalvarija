var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ActionSchema = new Schema({
    type: String,
	leader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    startTime: Date, //početak akcije (kad se nalaze na baznoj stanici)
    endTime: Date, //kraj akcije
    location: String, //lokacija bazne stanice
    station: String, //okrug kojemu pripada akcija
	description: String,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }],
    case: {
        nameOfInjuredPerson: String,
        nameOfAction: String,
        reason: String
    },
    alertLocation: String, //mjesto dojave
    alertTime: Date, //vrijeme dojave
    duration: Number //trajanje akcije u satima
},{ timestamps: true });

module.exports = mongoose.model('Action', ActionSchema);
