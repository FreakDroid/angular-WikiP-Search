(function(){
  'use strict';

  angular.module("wikiSearch").constant( "page" , 'http://en.wikipedia.org/?curid=')
  .controller('homeController', HomeController);

  HomeController.$inject = [ "$timeout", 'wikiFactory', 'page', "blockUI"];

  //Creando la funcion no anonima para mi controller
  function HomeController($timeout, wikiFactory, page, blockUI) {

    var vm = this;
    vm.results = [];

    vm.searchMe = searchMe;

    function searchMe() {
      blockUI.start();
      vm.results = [];
      wikiFactory.getWikiArticle(vm.fieldToSearch).success(function(data) {
        angular.forEach(data.query.pages, function(v,k)  {
            vm.results.push( {title: v.title, body: v.extract, page: page + v.pageid });
        })
        blockUI.stop();
      });
    }
  }
})();
