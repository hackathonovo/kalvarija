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
            .state('login', {
                url: '/login',
                templateUrl: 'pages/login/login.html',
                controller: 'loginController' 
            })
            .state('app.users', {
                url: '',
                templateUrl: 'pages/users/users.html',
                controller: 'usersController',
            })
            .state('app.details-user', {
                url: 'detalji/:id',
                templateUrl: 'pages/users/details/userDetails.html',
                controller: 'userDetailsController',
            })
            .state('app.add-user', {
                url: '/dodaj-clana',
                templateUrl: 'pages/users/create/createUser.html',
                controller: 'createUserController'
            })
            .state('app.actions', {
                url: '/akcije-spasavanja',
                templateUrl: 'pages/actions/actions.html',
                controller: 'actionsController'
            })
            .state('app.add-action', {
                url: '/dodaj-akciju',
                templateUrl: 'pages/actions/create/createAction.html',
                controller: 'createActionController' 
            })
    }
]);
