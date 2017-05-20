var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ActionSchema = new Schema({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'ActionType' },
	leader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    startTime: Date, //početak akcije (kad se nalaze na baznoj stanici)
    endTime: Date, //kraj akcije
    location: String, //lokacija bazne stanice
    station: String, //okrug kojemu pripada akcija
	description: String,
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
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
