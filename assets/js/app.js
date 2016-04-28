angular.module('app', ['ui.router'])

// annotating dependencies (useful when minifying)
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			template: 'assets/views/main.html'
		})
		.state('add', {
			url: '/new',
			template: 'assets/views/new.html'
		})
}]);