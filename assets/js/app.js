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

	// $scope.coupons = [1,2,3,4,5];
	Coupon.getApiCoupons().then(function(data){
		$scope.coupons = data;
		console.log(data)
	})
	$scope.form = {};

})

.factory('Coupon', function($http){

	var getUserCoupons = function(){
		return $http.get('/api/coupons').then(function(data){
			return data.data;
		});
	}

	var getApiCoupons = function(){
		return $http.get('/api/couponapi').then(function(data){
			return data.data
		})
	}

	return {
		getUserCoupons: getUserCoupons,
		getApiCoupons: getApiCoupons
	}
});