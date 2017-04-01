function InsuranceService($resource) {
  /**
   * @name InsuranceService
   *
   * @description
   * A service providing Insurance data.
   */

  var that = this;

  /**
   * A resource for retrieving Insurance data.
   */
  that.InsuranceResource = $resource(_urlPrefixes.API + "insurances/:insurance_id/");

  /**
   * A convenience method for retrieving Insurance objects.
   * Retrieval is done via a GET request to the ../Insurances/ endpoint.
   * @param {object} params - the query string object used for a GET request to ../Insurances/ endpoint
   * @returns {object} $promise - a promise containing Insurance-related data
   */
  that.getInsurances = function (params) {
    return that.InsuranceResource.query(params).$promise;
  };

  that.createInsurance = function (params) {
    return that.InsuranceResource.save(params).$promise;
  };

  that.deleteInsurance = function (id) {
    var resource = $resource(_urlPrefixes.API + "insurances/:insurance_id/", {insurance_id: id});
    return resource.delete().$promise;
  };

  that.updateInsurance = function (params) {
    var resource = $resource(_urlPrefixes.API + "insurances/:insurance_id/", {insurance_id: params.id});
    return resource.update(params).$promise;
  };
}

angular.module("Insurance")
  .service("InsuranceService", ["$resource", InsuranceService]);
