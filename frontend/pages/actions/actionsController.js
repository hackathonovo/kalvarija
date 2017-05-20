hgss.controller("actionsController", ["$scope", "$state", function ($scope, $state) {
    $scope.createAction = function() {
        $state.go('app.add-action');
    }
}]);