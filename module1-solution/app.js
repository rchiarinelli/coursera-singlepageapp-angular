(function (){
  'use strict';
  angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$injector = ['$scope'];

  function LunchCheckController($scope){

    var LunchStatus = {
      OK : "Enjoy!",
      FAIL: "Too Much!",
      NONE: ""
    };
    //Controller members
    $scope.dishesCommaList = "";
    $scope.status = LunchStatus.NONE;

    //Function to be called clicking at the button
    $scope.verifyFoodAmount = function() {
      var dishesArray = new Array();
      $scope.status = LunchStatus.NONE;

      var splitedVal = $scope.dishesCommaList.split(",");

      for(var i=0;i<splitedVal.length;i++){
        if (splitedVal[i].trim()!="") {
          dishesArray.push(splitedVal[i].trim());
        }
      }

      if (dishesArray.length > 0 && dishesArray.length <= 3){
        $scope.status = LunchStatus.OK;
      } else if (dishesArray.length > 3){
        $scope.status = LunchStatus.FAIL;
      }
    };

    //Function get message
    $scope.displayMessage = function(){
        var message = $scope.status;
        return message;
    }
  }
})();
