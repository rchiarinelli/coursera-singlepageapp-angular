(function(){
'use strict';

angular.module('RestaurantMenuApp')
  .component('menuList',{
    templateUrl: 'src/menuList/templates/menulist.template.html',
    bindings:{
      items: '<'
    }
  });

})();
