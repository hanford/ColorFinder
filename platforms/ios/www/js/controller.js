angular.module('controller', [])

.controller('ColorController', function($scope) {
	$scope.colorCode = '#'
	$scope.colorArray = [];
	$scope.toggleClear = true;

	$scope.lightenColor = function(colorCode) {
		var color = Color(colorCode);
		for (var i = 0; i < 15; i++) {
			$scope.lighten(color);
		}
	}

	$scope.darkenColor = function(colorCode) {
		var color = Color(colorCode);
		for (var i = 0; i < 10; i++) {
			$scope.darken(color);
		}
	}

	$scope.lighten = function (color) {
		var toHex = color.lighten(0.2).hexString();
		$scope.toggleClear = false;
		if (toHex != "#FFFFFF"){
			var newCol = {'color': toHex, 'rgb': color.values.rgb};
			$scope.colorArray.push(newCol)
		}
	}

	$scope.darken = function (color) {
		var toHex = color.darken(0.2).hexString();
		$scope.toggleClear = false;
		if (toHex != "#000000"){
			var newCol = {'color': toHex, 'rgb': color.values.rgb};
			$scope.colorArray.push(newCol)
		}
	}

	$scope.clearPalette = function() {
		$scope.colorArray = [];
		$scope.toggleClear = true;
		console.log(colorArray)
	}
})