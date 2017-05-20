hgss.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('app', {
                url: '/',
                abstract: true,
                templateUrl: 'pages/layout/layout.html',
                controller: 'layoutController'     
            })
            .state('app.users', {
                url: '',
                templateUrl: 'pages/users/users.html',
                controller: 'usersController',
            })
    }
]);
