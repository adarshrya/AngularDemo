angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  var ItemsState = {
    name: 'items',
    templateUrl: 'app/items.html',
    url: '/items',
    controller: 'Item.Controller'
  };

  var DefaultState = {
    name: 'home',
    url: '/',
    component: 'app'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  };

  $stateProvider.state(ItemsState);
  $stateProvider.state(aboutState);
  $stateProvider.state(DefaultState);
}
