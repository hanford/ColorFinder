angular.module('controller', [])

.controller('ColorController', function($scope) {
	$scope.colorCode = '#'
	$scope.colorObj = {};
	$scope.colorArray = [];

	$scope.lightenColor = function(colorCode) {
		var color = Color(colorCode);
		for (var i = 0; i < 5; i++) {
			$scope.lighten(color);
		}
	}

	$scope.darkenColor = function(colorCode) {
		var color = Color(colorCode);
		for (var i = 0; i < 5; i++) {
			$scope.darken(color);
		}
	}

	$scope.lighten = function (color) {
		var toHex = color.lighten(0.2).hexString();
		if (toHex != "#FFFFFF"){
		$scope.colorCode = toHex;
		var newCol = {'color': toHex};
		$scope.colorArray.push(newCol)
		}
	    // $('<div class="bg">' + lighter.hexString() + '</div>')
	    // .css("background-color", lighter.hexString())
	    // .appendTo('.box');
	  // }
	}

	$scope.darken = function (color) {
		var toHex = color.darken(0.2).hexString();
		if (toHex != "#000000"){
		var newCol = {'color': toHex};
		$scope.colorArray.push(newCol)
		}
	    // $('<div class="bg">' + darker.hexString() + '</div>')
	    // .css("background-color", darker.hexString())
	    // .appendTo('.box');
	  // }
	}
})