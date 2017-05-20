hgss.controller("usersController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {
    $scope.addNewUser = function() {
        $state.go('app.add-user');
    }

    httpService.getAllUsers().then(function(res){
    	console.log(res);
    })


}]);
