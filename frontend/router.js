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
    }
]);
