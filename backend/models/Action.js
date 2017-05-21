var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ActionSchema = new Schema({
    type: String,
    name: String,
	leader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    startTime: String, //početak akcije (kad se nalaze na baznoj stanici)
    location: String, //lokacija bazne stanice
    station: String, //okrug kojemu pripada akcija
    description: String,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    confirmedParticipants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    case: {
        nameOfInjuredPerson: String,
        nameOfAction: String,
        reason: String
    },
    alertLocation: String, //mjesto dojave
    alertTime: Date, //vrijeme dojave
    finishedAt: Date, //kraj akcije
    finished: {
        type: Boolean,
        default: false
    },
},{ timestamps: true });

module.exports = mongoose.model('Action', ActionSchema);
