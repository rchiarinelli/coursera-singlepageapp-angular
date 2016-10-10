(function () {
'use strict';

angular.module('RestaurantMenuApp')
.controller('HomeMenuListController', HomeMenuListController);


HomeMenuListController.$inject = ['MenuService', 'items'];
function HomeMenuListController(MenuService,items) {
  var menuList = this;
  menuList.items
    = items.data && items.data.menu_items ? items.data.menu_items : null;

  menuList.$onInit = function(){
    console.log("Starting controller ",this);
  };

}

})();
