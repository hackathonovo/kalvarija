module.exports = function(app, io){

app.use(function(req, res, next){ 

	res.io = io;
	
	res.ok = function(data){
		res.status(200).json(data);
	}

	res.created = function(data){
		res.status(201).json(data);
	}

	res.noAuth = function(){
		res.status(401).json();
	}

	res.error = function(err){
		console.log(err);
		res.status(400).json(err);
	}

	res.notFound = function(){
		res.sendStatus(404);
	}

	next();
})

}