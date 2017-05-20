var express = require('express');
var router = express.Router();

var auth = require('../auth/authService');
var aq = require('../queries/actionQueries');

router
.get('/id/:id', auth.ensure, function (req, res, next) {
	aq.getById(req.params.id)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/leader/:leader', auth.ensure, function (req, res, next) {
	aq.getByLeader(req.params.leader)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/all', auth.ensure, function(req, res, next){
	aq.getAll()
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.post('/new', auth.ensure, function (req, res, next) {
	aq.addNew(
		req.body.name,
		req.body.type,
		req.user._id, //leader
		req.body.startTime,
		req.body.location,
		req.body.station,
		req.body.description,
		req.body.participants)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})


module.exports = router;