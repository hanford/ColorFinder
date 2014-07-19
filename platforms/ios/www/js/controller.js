angular.module('controller', [])

.controller('ColorController', function($scope) {
	$scope.colorCode = '#FF1231';

	$scope.lightenColor = function() {
		// for (var i = 0; i < 5; i++) {
			$scope.lighten();
		// }
	}

	$scope.darkenColor = function() {
		// for (var i = 0; i < 5; i++) {
			$scope.darken();
		// }
	}

	$scope.lighten = function () {
		var c = $scope.colorCode;
		var color = Color(c);
		var toHex = color.lighten(0.2).hexString();
	  console.log(toHex)
	  $scope.colorCode = toHex;
	  // if (lighter.hexString() != "#FFFFFF"){
	    // $('<div class="bg">' + lighter.hexString() + '</div>')
	    // .css("background-color", lighter.hexString())
	    // .appendTo('.box');
	  // }
	}

	$scope.darken = function () {
		var c = $scope.colorCode;
		var color = Color(c);
		var toHex = color.darken(0.2).hexString();
	  console.log(toHex)
	  $scope.colorCode = toHex;
	  // if (darker.hexString() != "#000000"){
	    // $('<div class="bg">' + darker.hexString() + '</div>')
	    // .css("background-color", darker.hexString())
	    // .appendTo('.box');
	  // }
	}
})