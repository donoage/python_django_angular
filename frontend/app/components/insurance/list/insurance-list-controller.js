require("angular-material");

function InsuranceListController(InsuranceService, $scope, $route) {
  var that = this;

  /* Stored Insurance objects. */
  that.Insurances = [];
  /**
   * Initialize the Insurance list controller.
   */
  that.init = function () {
    return InsuranceService.getInsurances().then(function (Insurances) {
      that.Insurances = Insurances;
    });
  };

  that.save = function (param) {
    InsuranceService.createInsurance(param).then(
      function (response) {
        console.log(response);
        $route.reload();
        $scope.$broadcast("success", "Succesfully added");
      },
      function (error) {
        console.log(error);
        $route.reload();
        $scope.$broadcast("fail", "Failed to add");
      }
    );
  };

  that.delete = function (param) {
    InsuranceService.deleteInsurance(param).then(
      function (response) {
        console.log(response);
        $route.reload();
        $scope.$broadcast("success", "Succesfully deleted");
      },
      function (error) {
        console.log(error);
        $route.reload();
        $scope.$broadcast("fail", "Failed to delete");
      }
    );
  };

  that.update = function (param) {
    InsuranceService.updateInsurance(param).then(
      function (response) {
        console.log(response);
        $route.reload();
        $scope.$broadcast("success", "Succesfully updated");
      },
      function (error) {
        console.log(error);
        $route.reload();
        $scope.$broadcast("fail", "Failed to update");
      }
    );
  };
}

angular.module("Insurance", ["ngMaterial", "ui.router"])
  .controller("InsuranceListController", [
    "InsuranceService", "$scope", "$route",
    InsuranceListController
  ]);
