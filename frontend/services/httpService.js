hgss.service('httpService', ['$http', function($http) {
    return {

    	getUserById : function(id){ return $http.get('/api/auth/user/id/'+ id )},
    	getUserByPhone : function(phone){ return $http.get('/api/auth/user/phone/'+ phone )},
    	getUsersByStation : function(id){ return $http.get('/api/auth/user/station/'+ id )},
    	// user objekt { firstName, lastName, phone, type, skills, station }
    	createNewUser : function(user){ return $http.post('/api/auth/user/new', user )},


    	getActionById : function(id){ return $http.get('/api/auth/action/id/'+ id )},
    	getActionByLeader : function(id){ return $http.get('/api/auth/action/leader/'+ id )},
    	// action objekt { leader,startTime,baseStation,description,groups }
    	createNewAction : function(action){ return $http.post('/api/auth/action/new', action )},
    }
}])