/* Libs */
require("angular/angular");
require("angular-route/angular-route");
require("angular-resource/angular-resource");
require("angular-material/angular-material");
require("angular-ui-router");

/* Globals */
_ = require("lodash");
_urlPrefixes = {
  API: "api/v1/",
  TEMPLATES: "static/app/",
  SLASH: "/"
};
/* Components */
require("./components/home/home");
require("./components/insurance/insurance");
require("./components/ui/ui");

/* App Dependencies */
angular.module("myApp", [
  "Home",
  "Insurance",
  "UI",
  "ngResource",
  "ngRoute"
]);

/* Config Vars */
var routesConfig = require("./routes");

/* App Config */
angular.module("myApp").config(routesConfig);
angular.module("myApp").config(function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $resourceProvider.defaults.actions.update = {
    method: "PUT"
  };
});
