hgss.controller("groupsController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {
    $scope.addNewGroup = function() {
        $state.go('app.add-group');
    }

    httpService.getAllGroups().then(function(response) {
        $scope.groups = (response.data);
        console.log(response.data);
    })

    $scope.isCardView;

    $scope.setCardView = function(value) {
        $scope.isCardView = value;
    }

    $scope.searchGroups = "";
}]);
