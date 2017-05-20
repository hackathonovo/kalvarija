var auth = require('./authService');

module.exports = function(io){
	io.use(function(socket, next){
	  auth.ensure(socket.request, {}, next);
	})
}