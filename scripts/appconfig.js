define(['require', 'angular', 'app'], function (require, ng, app){
	app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$provide', function ($stateProvider, $urlRouterProvider, $controllerProvider, $provide) {
		// app.controller = ng.bind(this, $controllerProvider.register); 
		// app.factory = ng.bind(this, $provide.factory);
		// app.service = ng.bind(this, $provide.service);
		// app.constant = ng.bind(this, $provide.constant);
		// app.value = ng.bind(this, $provide.value);
		// app.directive = ng.bind(this, $compileProvider.directive);
		// app.filter = ng.bind(this, $filterProvider.register);
		app.controller = $controllerProvider.register;
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('home',{
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'homeCtrl',
			resolve: {
				loadCtrl: ['$q', function($q){
					var defer = $q.defer();
					require(['homeCtrl'], function (){
						defer.resolve();
					});
					return defer.promise;
				}]
			}
		});
	}]);
});