(function () {
'use strict';

angular.module('RestaurantMenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menuList/templates/home.template.html'
    })
    .state('menu', {
      url: '/menu',
      templateUrl: 'src/menuList/templates/master-menulist.template.html',
      controller: 'MasterMenuListController as menuList',
      resolve: {
        items: ['MenuService', function (MenuService) {
          return MenuService.getMenuItems();
        }]
      }
    })
    .state('menuDetail',{
      url:'/menuDetail/{menuItemId}',
      templateUrl: 'src/menuList/templates/menuitem.template.html',
      controller: 'MenuItemDetailController as menuItemDetail',
      resolve: {
            items: ['$stateParams', 'MenuService',
                  function ($stateParams, MenuService) {
                    return MenuService.getMenuItems();
                  }]
          }
    });

}

})();
