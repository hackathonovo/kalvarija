hgss.controller("createUserController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {

	$scope.save = function()
	{
		httpService.createNewUser($scope.user).then(function(res) {
			console.log(res.data);
			$state.go("app.users")
		});
	}

	$scope.back = function()
	{
		$state.go("app.users");
	}
}]);