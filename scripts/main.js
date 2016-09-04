require.config({
	paths: {
		'jquery' : '../bower_components/jquery/dist/jquery.min',
		'angular' : '../bower_components/angular/angular.min',
		'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angular-ui-router': {
			'deps': ['angular']
		},
		'jquery': {
			'exports': '$'
		}
	},
	callback: function (){
		require(['init']);
	}
});
