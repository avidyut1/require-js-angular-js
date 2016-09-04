define(['angular', 'app'], function (ng, app){
	function HomeCtrl($scope){
		$scope.name = 'superman';
	}
	HomeCtrl.$inject = ['$scope'];
	app.controller('homeCtrl', HomeCtrl);
});