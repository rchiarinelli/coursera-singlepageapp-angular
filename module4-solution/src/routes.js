(function () {
'use strict';

angular.module('RestaurantMenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuList/templates/home.template.html',
      controller: 'HomeMenuListController as menuList',
      resolve: {
        items: ['MenuService', function (MenuService) {
          return MenuService.getMenuItems();
        }]
      }
    })
    // Item detail
    .state('home.menuItemDetail',{
      controller: 'MenuItemDetailController as menuItemDetail',
      templateUrl: 'src/menuList/templates/menuitem.template.html',
      params:{
        menuItemId:null
      }
    });

}

})();
