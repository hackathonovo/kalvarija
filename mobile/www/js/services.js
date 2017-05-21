angular.module('starter.services', [])
.service('userService', [ function(){
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
}])

.service('variablesService', ["$http", function($http){

  var stations = [ "Bjelovar", "Čakovec", "Delnice", "Dubrovnik", "Gospić", "Karlovac", "Koprivnica", "Krapina", "Makarska", "Novska", "Ogulin", "Orahovica", "Orebić", "Osijek", "Požega", "Pula", "Rijeka", "Samobor", "Šibenik", "Slavonski", "Split", "Varaždin", "Vinkovci", "Zadar" ];
  var actionTypes = ["Potraga", "Spašavanje"];

  return {
      getStations : function(){ return stations; },
      getActionTypes : function(){ return actionTypes; },
  }

}])

.service('authService', ["$http", "userService", function($http, userService) {
    var LOCAL_TOKEN_KEY = 'hgss';
    var isAuthenticated = false;
    var authToken;
    //var socket;

    function loadUserCredentials() {
        var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
        if (token) {
            useCredentials(token);
        }   
    }

    function storeUserCredentials(token) {
        window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
        useCredentials(token);
    }

    function useCredentials(token) {
        isAuthenticated = true;
        authToken = token;
        //socket = io.connect("", getSocketConfig(token));

        var currentUser = parseJwt(token);
        userService.setUser(currentUser);

        $http.defaults.headers.common.Authorization = authToken;
    }

    // function getSocketConfig(token) {
    //     return {
    //         forceNew: true,
    //         transportOptions: {
    //             polling: {
    //                 extraHeaders: {
    //                     authorization: token,
    //                 }
    //             }
    //         }
    //     };
    // }

    function destroyUserCredentials() {
        authToken = undefined;
        isAuthenticated = false;
        $http.defaults.headers.common.Authorization = undefined;
        window.localStorage.removeItem(LOCAL_TOKEN_KEY);
        userService.setUser({});
    }

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };

    var login = function(phone) {
        return $http.post('http://hgss.ivanmedic.com/api/auth/authenticate', {phone: phone}).then(function(result) {
            storeUserCredentials(result.data.token);
            return result;
        });
    };

    var logout = function() {
        destroyUserCredentials();
        //socket.disconnect();
    };

    loadUserCredentials();

    return {
        login: login,
        logout: logout,
        //socket: function(){ return socket; },
        isAuthenticated: function() { return isAuthenticated; },
    };
}])


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
