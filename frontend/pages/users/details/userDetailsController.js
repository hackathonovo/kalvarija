hgss.controller("userDetailsController", ["$scope", "$state", "httpService", "$stateParams", function ($scope, $state, httpService, $stateParams) {
    $scope.back = function() {
        $state.go('app.users');
    }

    var userId = $stateParams.id;

    httpService.getUserById(userId).then(function(response) {
        $scope.user = response.data;
        console.log(response.data);
                console.log($stateParams.id);

    })

}]);
