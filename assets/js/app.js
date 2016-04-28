angular.module('app', ['ui.router'])

// annotating dependencies (useful when minifying)
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'assets/views/main.html',
			controller: 'MainController'
		})
		.state('add', {
			url: '/new',
			templateUrl: 'assets/views/new.html',
			controller: 'MainController'
		})
}])

.controller('MainController', function($scope, Coupon){

	$scope.coupons = [1,2,3,4,5];
	$scope.form = {};

})

.factory('Coupon', function($scope){

});