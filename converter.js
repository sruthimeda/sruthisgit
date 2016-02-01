(function(){
	var app= angular.module("converter",[]);
app.controller("convController",function($scope){
	$scope.click = function(){
		$scope.b = $scope.a*2.2046
	}




});
}
	)();