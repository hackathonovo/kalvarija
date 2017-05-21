hgss.service('httpService', ['$http', function($http) {
    return {

        getAllUsers : function(){ return $http.get('/api/user/all' ) },
    	getUserById : function(id){ return $http.get('/api/user/id/'+ id )},
    	getUserByPhone : function(phone){ return $http.get('/api/user/phone/'+ phone )},
        // user objekt { firstName, lastName, phone, type, skills, station }
    	createNewUser : function(user){ return $http.post('/api/user/new', user )},
        editUser: function(id) {return $http.put('/api/user/edit/id/' + id)},

        getUsersByGroup : function(group, station){ return $http.get('/api/user', { params: { group : group, station: station } } )},

        getAllActions : function(){ return $http.get('/api/action/all') },
    	getActionById : function(id){ return $http.get('/api/action/id/'+ id )},
    	getActionByLeader : function(id){ return $http.get('/api/action/leader/'+ id )},
    	// action objekt { startTime, location, description, participants }
    	createNewAction : function(action){ return $http.post('/api/action/new', action )},

        getGroupById: function(id){ return $http.get('/api/group/id/' + id)},
        getAllGroups: function(){ return $http.get('/api/group/all') },
        getGroupByName: function(name){ return $http.get('/api/group/name/'+ name )},
        addNewGroup: function(group){ return $http.post('/api/group/new', group )},
        editGroup: function(id) {return $http.post('/api/group/edit/id/' + id)}
    }
}])