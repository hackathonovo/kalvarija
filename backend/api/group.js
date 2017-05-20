var express = require('express');
var router = express.Router();

var auth = require('../auth/authService');
var aq = require('../queries/groupQueries');

router
.get('/id/:id', auth.ensure, function (req, res, next) {
	aq.getGroupById(req.params.id)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/name/:name', auth.ensure, function (req, res, next) {
	aq.getGroupByName(req.params.name)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/all', auth.ensure, function(req, res, next){
	aq.getAllGroups()
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.post('/new', auth.ensure, function (req, res, next) {
	aq.addNewGroup(
		req.body.name,
		req.body.participants)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})


module.exports = router;