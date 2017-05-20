hgss.controller("layoutController", ["$scope", "$state", "authService", function ($scope, $state, authService) {
    $scope.logout = function() {
        authService.logout();
        $state.go('login');
    }
}]);