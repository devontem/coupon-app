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

.controller('MainController', function($scope, $location, Coupon){

	$scope.getCoupons = function(){
		Coupon.getApiCoupons().then(function(data){
			$scope.couponApi = data;
		});

		Coupon.getUserCoupons().then(function(data){
			$scope.userCoupons = data;
			console.log(data);
		})
	}

	$scope.getCoupons();

	$scope.createCoupon = function(data){
		Coupon.createCoupon(data).then(function(data){
			$scope.form = {};
			$location.path('/');
			$scope.getCoupons();
		})
	}

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
		});
	}

	var createCoupon = function(data){
		return $http.post('/api/coupons', data).then(function(){

		})
	}

	return {
		getUserCoupons: getUserCoupons,
		getApiCoupons: getApiCoupons,
		createCoupon: createCoupon
	}
});