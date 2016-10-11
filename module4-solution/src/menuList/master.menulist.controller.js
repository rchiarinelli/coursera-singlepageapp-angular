(function () {
'use strict';

angular.module('RestaurantMenuApp')
.controller('MasterMenuListController', MasterMenuListController);


MasterMenuListController.$inject = ['MenuService', 'items'];
function MasterMenuListController(MenuService,items) {
  var menuList = this;
  menuList.items
    = items.data && items.data.menu_items ? items.data.menu_items : null;

  menuList.$onInit = function(){
    console.log("Starting controller ",this);
  };

}

})();
