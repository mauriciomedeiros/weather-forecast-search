(function () {
   'use strict';

   angular.module('weatherApp').controller('WeatherController', WeatherController);

   WeatherController.$inject = [];

   function WeatherController(){
      var vm = this;
      vm.app = 'Teste';
   };
})();
