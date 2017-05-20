var express = require('express');
var router = express.Router();

var auth = require('../auth/authService');

router
.get('', auth.ensure, function (req, res) {
	res.ok("yes");
})


module.exports = router;