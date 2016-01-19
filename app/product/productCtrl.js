angular.module('app').controller('productCtrl', function($scope) {
	$scope.test= "ho";

	var fib = function(n) {
		if(n == 1) return 1;
		if(n == 0) return 1;
		var i = fib(n-1) + fib(n-2);
		console.log(n, i);
	};
	$scope.test = fib(100);
});