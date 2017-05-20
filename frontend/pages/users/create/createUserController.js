hgss.controller("createUserController", ["$scope", "$state", "userService", "httpService", "variablesService", function ($scope, $state, userService, httpService, variablesService) {

	$scope.save = function()
	{
		httpService.createNewUser($scope.user).then(function(res) {
			console.log(res.data);
			$state.go("app.users")
		});
	}
	$scope.user = {};
	$scope.user.station = userService.getProperty("station");
	$scope.stations = variablesService.getStations();

	$scope.back = function()
	{
		$state.go("app.users");
	}
}]);