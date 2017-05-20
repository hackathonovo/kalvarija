module.exports = function(io){
	io.users = {};
	var connected = io.sockets.connected;
	var defaultStatus = ["online", "busy", "away", "offline"];

	io.emitToUser = function(userId, msg, data){
		if(io.users[userId])
		{
			for(var s of io.users[userId].sockets){
				if(connected[s]){
					connected[s].emit(msg, data);
				}
			}
		}
	}

	io.emitToUsers = function(users, msg, data){
		for(var p of users){
			io.emitToUser(p, msg, data);
		}
	}

	io.on('connection', function(socket){

			var userId = socket.request.user._id;
			
			if(io.users[userId]){
				// delete users[userId];
				io.users[userId].sockets.push(socket.client.id);
			}
			else{
				io.users[userId] = {
					sockets: [socket.client.id],
					info: {
						_id: userId,
						firstName: socket.request.user.firstName,
						secondName: socket.request.user.secondName,
						//koristiti status sa logouta
						onlineStatus: "online"
					}
				}
				io.emitToUsers(socket.request.user.partnerships, "online status", io.users[userId].info);
			}

			console.log("user connected", userId, "on socket", socket.client.id);
			// console.log("number of clients:", io.engine.clientsCount);
			
			socket.on('disconnect', function(reason){
				// console.log(reason);
				io.users[userId].sockets.splice(io.users[userId].sockets[socket.client.id], 1);
				console.log('user disconnected', userId, "on socket", socket.client.id);

				setTimeout(function(){
					if(io.users[userId] && !io.users[userId].sockets.length){
						io.emitToUsers(socket.request.user.partnerships, "online status", io.users[userId].info);
						delete io.users[userId];
						console.log("user disconnected", userId);

						//spremit u bazu zadnji online status i datetime
					}
				}, 3000)

			});

	});

}