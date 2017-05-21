hgss.controller("createGroupController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {

	$scope.hohh = {};
    $scope.group = {};

	$scope.checkUser = function(uid){
	        console.log(uid, $scope.group.participants);
	        if(_.includes($scope.group.participants, uid)){
	            _.pull($scope.group.participants, uid);
	        }else{
	            if($scope.group.participants){
	                $scope.group.participants.push(uid);
	            }
	            else{
	                $scope.group.participants = [uid];
	            }
	        }
	    }

	httpService.getAllUsers().then(function(res) {
		$scope.users = res.data;
	});

	$scope.save = function()
	{
		httpService.addNewGroup($scope.group).then(function(res) {
			console.log(res.data);
			$state.go("app.groups")
		});
	}

	$scope.back = function()
	{
		$state.go("app.groups");
	}
}]);