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
    participants: Array,
    case: {
        nameOfInjuredPerson: String,
        nameOfAction: String,
        reason: String
    },
    alertLocation: String, //mjesto dojave
    alertTime: Date, //vrijeme dojave
    finishedAt: Date, //kraj akcije
},{ timestamps: true });

module.exports = mongoose.model('Action', ActionSchema);
