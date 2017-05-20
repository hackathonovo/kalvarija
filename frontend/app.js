var dependencies = ['ui.router'];

var hgss = angular
    .module('hgss', dependencies)
    .run(hgssRun)

hgssRun.$inject = ["$rootScope", "$state", "authService"];
function hgssRun($rootScope, $state, authService) {

    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
        if (!authService.isAuthenticated() && next.name !== 'login') {
	        event.preventDefault();
	        $state.go('login');	
        }
    });

};
