hgss.controller("usersController", ["$scope", "$state", function ($scope, $state) {
    $scope.addNewUser = function() {
        $state.go('app.add-user');
    }
}]);