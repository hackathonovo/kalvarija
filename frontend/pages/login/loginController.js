hgss.controller('loginController', ['$scope', '$state', 'authService', function($scope, $state, authService) {
    $scope.login = function() {
        authService.login($scope.phone).then(function(response) {
            $state.go("app");
        }).catch(function (err) {
            console.log(err)
            //dodat neki notificationService, toastr ili tako nešto
        });
    };
}]);
