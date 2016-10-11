(function(){
  'use strict';

  angular.module('RestaurantMenuApp')
    .controller('MenuItemDetailController',MenuItemDetailController);

  MenuItemDetailController.$inject = ['$stateParams','items'];
  function MenuItemDetailController($stateParams,items){
    console.log('$stateparams',$stateParams);
    console.log('$items',items);
    var menuItemDetail = this;

    if (items
      && items.data
      && items.data.menu_items){
      var menuItem = items.data.menu_items[$stateParams.menuItemId];
      console.log('item detail',menuItem);

      menuItemDetail.detail = menuItem;

    }
  }

})();
