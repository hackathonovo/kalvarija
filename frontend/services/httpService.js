hgss.service('httpService', ['$http', function($http) {
    return {

        getAllUsers : function(){ return $http.get('/api/user/all' ) },
    	getUserById : function(id){ return $http.get('/api/user/id/'+ id )},
    	getUserByPhone : function(phone){ return $http.get('/api/user/phone/'+ phone )},
        // user objekt { firstName, lastName, phone, type, skills, station }
    	createNewUser : function(user){ return $http.post('/api/user/new', user )},

        getUsersByGroup : function(group, station){ return $http.get('/api/user', { params: { group : group, station: station } } )},

    	getActionById : function(id){ return $http.get('/api/action/id/'+ id )},
    	getActionByLeader : function(id){ return $http.get('/api/action/leader/'+ id )},
    	// action objekt { startTime, location, description, participants }
    	createNewAction : function(action){ return $http.post('/api/action/new', action )},
    }
}])