hgss.service('httpService', ['$http', function($http) {
    return {

    	getUserById : function(id){ return $http.get('/api/auth/user/id/'+ id )},
    	getUserByPhone : function(phone){ return $http.get('/api/auth/user/phone/'+ phone )},
    	// user objekt { firstName, lastName, phone, type, skills, station }
    	createNewUser : function(user){ return $http.get('/api/auth/user/id/'+ id, user )},

    }
}])