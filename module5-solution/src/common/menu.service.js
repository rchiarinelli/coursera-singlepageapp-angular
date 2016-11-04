(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  var subscriber = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getItemByShortName = function (shortName) {
    var menuItemName = shortName + ".json";
    return $http.get(ApiPath + '/menu_items/' + menuItemName).then(function (response) {
      return response.data;
    });
  };

  service.addSubscriber = function(subsInfo){
    var resp = false;
    if (subscriber == null
      || subscriber.email == subsInfo.email) {
      subscriber = subsInfo;
      resp = true;
      console.log("New Subscriber added.");
    }
    return resp;
  };

  service.getSubscriber = function(){
    return subscriber;
  };


}



})();
