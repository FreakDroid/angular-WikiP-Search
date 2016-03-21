(function(){
  'use strict';

  angular.module("wikiSearch").constant('api', {
    'endpoint' : 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=',
    'cb' : '&callback=JSON_CALLBACK'
  }).factory('wikiFactory', wikiFactory);

  function wikiFactory($http, api) {
    //Patron Modular.
      return {
      getWikiArticle: function(title) {
        return $http.jsonp(api.endpoint + title + api.cb)
              .success(function(data) {
               return  data;
          });
      },
    };
  }
})();
