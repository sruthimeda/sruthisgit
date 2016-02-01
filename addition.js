(function(){
	var app=angular.module("addition",[]);
	app.addition("addcontroller",function($scope){
		$scope.data=0;
		$scope.click=functn(){
			$scope.data=$scope.data+1;
		}
	})

})