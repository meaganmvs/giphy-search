'use strict';

/**
 * GIPY Search App
 * Created By Meagan Sievers
 */
angular
  .module('giphySearchApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .directive('search', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl'
        };
});
