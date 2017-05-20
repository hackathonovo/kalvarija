hgss.service('httpService', ['$http', function($http) {
    return {

    	getUserById : function(id){ return $http.get('/api/auth/user/id/'+ id )},
    	getUserByPhone : function(phone){ return $http.get('/api/auth/user/phone/'+ phone )},
    	getUsersByStation : function(station){ return $http.get('/api/user/station/'+ station )},
        // user objekt { firstName, lastName, phone, type, skills, station }
    	createNewUser : function(user){ return $http.post('/api/user/new', user )},


    	getActionById : function(id){ return $http.get('/api/action/id/'+ id )},
    	getActionByLeader : function(id){ return $http.get('/api/action/leader/'+ id )},
    	// action objekt { leader,startTime,baseStation,description,groups }
    	createNewAction : function(action){ return $http.post('/api/action/new', action )},
    }
}])