(function () {
   'use strict';

   angular
   .module('weatherApp')
   .config(routerConfig);

   routerConfig.$inject = ['$routeProvider'];

   function routerConfig($routeProvider) {
      $routeProvider.when("/weatherApp", {
         templateUrl: "view/weather/index.html",
         controller: "WeatherController",
         controllerAs: 'vm'
      });

      $routeProvider.otherwise({
         redirectTo: "/weatherApp"
      });
   }
})();
