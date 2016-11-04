(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(menuService,ApiPath) {

  var $ctrl = this;
  $ctrl.myInfo = null;
  $ctrl.myInfo =  menuService.getSubscriber();
  $ctrl.basePath = ApiPath;

  $ctrl.hasMyInfo = function() {
    return $ctrl.myInfo == null ? false : true;
  };

}


})();
