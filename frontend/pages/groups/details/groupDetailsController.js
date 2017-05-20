hgss.controller("groupDetailsController", ["$scope", "$state", "httpService", "$stateParams", function ($scope, $state, httpService, $stateParams) {
    $scope.back = function() {
        $state.go('app.groups');
    }

    var groupId = $stateParams.id;

    httpService.getGroupById(groupId).then(function(response) {
        $scope.group = response.data;
        console.log(response.data);
		console.log($stateParams.id);

    })

}]);
