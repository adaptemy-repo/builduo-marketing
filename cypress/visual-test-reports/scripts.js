window.differences = window.differences || []
var app = window.angular.module('visualApp', [])

app.directive('imgLoad', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      var fn = $parse(attrs.imgLoad)
      elem.on('load', function (event) {
        scope.$apply(function () {
          fn(scope, { $event: event })
        })
      })
    }
  }
}])

app.controller('visualCtrl', function ($scope) {
  $scope.images = window.differences
  $scope.time = Date.now()
  $scope.setImageDimensions = function ($event, image) {
    image.displayWidth = Math.floor($event.target.width / 3)
  }
})
