var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ActionSchema = new Schema({
	leader: ObjectId,
    startTime: Date, //početak akcije (kad se nalaze na baznoj stanici)
    endTime: Date, //kraj akcije
    baseStation: String, //lokacija bazne stanice
	description: String,
    additionalNotes: String,
    groups: Array,
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
