(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(menuService) {
  var $ctrl = this;
  $ctrl.firstName = "";
  $ctrl.lastName = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.favoriteDish = "";
  $ctrl.validDish = true;
  $ctrl.dataSaved = false;

  //sigup function
  $ctrl.signUp = function(){


    //Get the favoriteDish short_name and check against the valid list MenuService

    // john.doe / abcd123

    //https://rchiarinelli-course5.herokuapp.com/menu_items/A4.json
    var promise = menuService.getItemByShortName($ctrl.favoriteDish);
    promise.then(function (response) {
      $ctrl.selectedItem = response;
      $ctrl.validDish = true;
      $ctrl.dataSaved = menuService.addSubscriber($ctrl);

    })
    .catch(function (error) {
      console.error(error);
      $ctrl.validDish = false;
    });
  };

  $ctrl.isDishValid = function(){
    return !$ctrl.validDish;
  };
}


})();
