require("angular-material");

function UIController() {
  var that = this;
  that.foo = "ui!";
  console.log(that);
}

angular
  .module("UI", ["ngMaterial"])
  .controller("UIController", function ($scope, $mdToast) {
    var last = {
      bottom: true,
      top: false,
      left: false,
      right: true
    };

    $scope.toastPosition = angular.extend({}, last);

    $scope.getToastPosition = function () {
      sanitizePosition();

      return Object.keys($scope.toastPosition)
        .filter(function (pos) {
          return $scope.toastPosition[pos];
        })
        .join(" ");
    };

    function sanitizePosition() {
      var current = $scope.toastPosition;

      if (current.bottom && last.top) current.top = false;
      if (current.top && last.bottom) current.bottom = false;
      if (current.right && last.left) current.left = false;
      if (current.left && last.right) current.right = false;

      last = angular.extend({}, current);
    }

    $scope.showSimpleToast = function (text) {
      var pinTo = $scope.getToastPosition();

      $mdToast.show(
        $mdToast.simple()
          .textContent(text)
          .position(pinTo)
          .hideDelay(3000)
      );
    };

    $scope.$on("success", function (event, text) {
      $scope.showSimpleToast(text);
    });

    $scope.$on("fail", function (event, text) {
      $scope.showSimpleToast(text);
    });
  });
