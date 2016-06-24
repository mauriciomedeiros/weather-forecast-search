(function () {
   'use strict';

   angular.module('weatherApp').factory('OpenWeatherMap', OpenWeatherMap);

   OpenWeatherMap.$inject = ['$http', '$q'];

   function OpenWeatherMap($http, $q){
      var _key =  'd9b3f2487274a5b08a149d1a9772a48f';
      var _searchWeatherByCity = function(city){
         var defer = $q.defer();
         var params = {
            q: city,
            units: 'metric',
            APPID: _key
         }
         $http.get('http://api.openweathermap.org/data/2.5/weather', {params}).then(
            function success(response){
               defer.resolve(response);
            },
            function error(err){
               defer.reject(erro);
            }
         );
         return defer.promise;
      }

      return{
         searchWeatherByCity: _searchWeatherByCity
      };
   }
})();
