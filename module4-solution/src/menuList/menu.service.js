(function () {
'use strict';

angular.module('RestaurantMenuApp')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiBasePath']
function MenuService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function(){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };



}

})();
