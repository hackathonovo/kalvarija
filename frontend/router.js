hgss.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'pages/layout/layout.html',
                controller: 'layoutController'     
            })
            .state('login', {
                url: '/login',
                templateUrl: 'pages/login/login.html',
                controller: 'loginController' 
            })
    }
]);
