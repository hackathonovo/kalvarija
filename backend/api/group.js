var express = require('express');
var router = express.Router();

var auth = require('../auth/authService');
var gq = require('../queries/groupQueries');

router
.get('/id/:id', auth.ensure, function (req, res, next) {
	gq.getGroupById(req.params.id)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/name/:name', auth.ensure, function (req, res, next) {
	gq.getGroupByName(req.params.name)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/all', auth.ensure, function(req, res, next){
	gq.getAllGroups()
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.post('/new', auth.ensure, function (req, res, next) {
	gq.addNewGroup(
		req.body.name,
		req.body.participants)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})


module.exports = router;