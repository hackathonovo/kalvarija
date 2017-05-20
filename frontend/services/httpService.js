hgss.service('httpService', ['$http', function($http) {
    return {

    	getUserById : function(id){ return $http.get('/api/user/id/'+ id )},
    	getUserByPhone : function(phone){ return $http.get('/api/user/phone/'+ phone )},
        // user objekt { firstName, lastName, phone, type, skills, station }
    	createNewUser : function(user){ return $http.post('/api/user/new', user )},

        getUsersByGroup : function(station, station){ return $http.get('/api/users', { params: { group : user, station: station } } )},

    	getActionById : function(id){ return $http.get('/api/action/id/'+ id )},
    	getActionByLeader : function(id){ return $http.get('/api/action/leader/'+ id )},
    	// action objekt { startTime, location, description, participants }
    	createNewAction : function(action){ return $http.post('/api/action/new', action )},
    }
}])