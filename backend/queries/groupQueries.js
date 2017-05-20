var Group = require('../models/Group');
var uq = require('../queries/userQueries');

var groupFields = [
	"name",
	"participants"
]

var populateParticipants = [
	{path: "participants", select: uq.userFields}
]

var addNewGroup = function(name, participants){
	
	if(participants===undefined){ participants = []}
	
	var group = new Group({
		name: name,
		participants : participants
	});

	return group.save();
}

var getAllGroups = function(){
	return Group.find()
}

var getGroupById = function(id){
	return Group.findById(id)
			.select(groupFields)
			.lean()
}

var getGroupByName = function(name){
	return Group.find({ name: name })
			.select(groupFields)
			.populate(populateParticipants)
			.lean()
}

module.exports = {
	getGroupById,
	getAllGroups,
	getGroupByName,
	addNewGroup
}