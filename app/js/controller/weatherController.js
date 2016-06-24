(function () {
   'use strict';

   angular.module('weatherApp').controller('WeatherController', WeatherController);

   WeatherController.$inject = ['OpenWeatherMap'];

   function WeatherController(OpenWeatherMap){
      var vm = this;

      vm.saerch = function(name){
         OpenWeatherMap.searchWeatherByCity(name).then(
            function success(response){
               vm.forecast = angular.copy(response.data);
               vm.data = new Date(vm.forecast.dt * 1000);
            }
         );
      }
   };
})();
