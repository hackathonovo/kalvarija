hgss.controller("usersController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {
    $scope.addNewUser = function() {
        $state.go('app.add-user');
    }

    httpService.getAllUsers().then(function(response) {
        $scope.users = response.data;
        console.log(response.data);
    })

    $scope.isCardView;

    $scope.setCardView = function(value) {
        $scope.isCardView = value;
    }

    $scope.searchQuery = "";
}]);
