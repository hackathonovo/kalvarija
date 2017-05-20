hgss.service('userService', [ function(){
	var currentUser = null;

	return {
	    getUser : function(){
	        return currentUser;
	    },
	    getProperty: function(prop){
	    	return currentUser[prop];
	    },
	    setUser : function(user){
	    	currentUser = user;
	    },
	    setProperty: function(key, value){
	    	currentUser[key] = value;
	    },
	    setProperties : function(obj){
	        _.forOwn(obj, function(value, key){
	        	currentUser[key] = value;
	        });
	    }
	}
}]);
	