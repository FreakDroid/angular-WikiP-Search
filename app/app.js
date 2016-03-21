(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('wikiSearch', ['ngRoute','blockUI']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise( {
                              redirectTo: '/',
                              templateUrl: 'home/home.html',
                              controller: 'homeController',
                              controllerAs: 'vm'
                            });
  }]);
})();
