function routesConfig($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/home/home.html",
      label: "Home",
      controller: "UIController"
    })
    .when("/insurance", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/insurance/insurance.html",
      label: "Insurance"
    })
    .otherwise({
      templateUrl: _urlPrefixes.TEMPLATES + "404.html"
    });
}

routesConfig.$inject = ["$routeProvider"];

module.exports = routesConfig;
