(function () {
   'use strict';

   angular.module('weatherApp').controller('WeatherController', WeatherController);

   WeatherController.$inject = [];

   function WeatherController(){
      var vm = this;

      vm.saerch = function(weather){
         console.log(weather);
      }
   };
})();
