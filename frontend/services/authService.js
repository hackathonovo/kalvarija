hgss.service('authService', ["$http", "userService", function($http, userService) {
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
        return $http.post('api/auth/authenticate', {phone: phone}).then(function(result) {
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
}]);
