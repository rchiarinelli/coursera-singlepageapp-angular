(function () {
'use strict';

angular.module('Module3MenuSearchApp', [])
.controller('Module3MenuSearchController', Module3MenuSearchController)
.service('Module3MenuSearchService', Module3MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItemsList)
.directive('foundItem',FoundItems);


function FoundItemsList() {
  var ddo = {
    templateUrl: 'foundItemsList.html'
  };

  return ddo;
}

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItem.html'
  };

  return ddo;
}



Module3MenuSearchController.$inject = ['Module3MenuSearchService','$element'];
function Module3MenuSearchController(Module3MenuSearchService,$element) {
  var menu = this;

  menu.searchTerm = "";

  menu.foundItems = new Array();

  menu.search = function(){

    if (menu.searchTerm.length==0){
      menu.foundItems = new Array();
      showNotFoundMessage();
      return;
    }

    var promise = Module3MenuSearchService.searchMenuItem(menu.searchTerm);

    console.log("Searching.");

    console.log("SearchTerm :" + menu.searchTerm);

    promise.then(function (response) {
      console.log(response.data);

      if (response.data
        && response.data.menu_items
        && response.data.menu_items.length > 0){

          var foundItems = new Array();

          for(var i = 0; i < response.data.menu_items.length;i++){
            if (response.data.menu_items[i].description.toLowerCase().indexOf(menu.searchTerm.toLowerCase())!=-1){

              foundItems.push(response.data.menu_items[i]);
            }
          }

          menu.foundItems = foundItems;

          if (foundItems.length==0){
            showNotFoundMessage();
          } else {
            hideNotFoundMessage();
          }

          console.log(foundItems);
      } else {
        showNotFoundMessage();
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  function showNotFoundMessage(){
    var errorElement = $element.find("div.error");

    errorElement.slideDown(900);
  }

  function hideNotFoundMessage(){
    var errorElement = $element.find("div.error");

    errorElement.slideUp(900);
  }


  menu.removeItem = function(index){
    console.log(index);
    if (menu.foundItems.length > 0){
      menu.foundItems.splice(index,1);
    }
  }


}


Module3MenuSearchService.$inject = ['$http', 'ApiBasePath']
function Module3MenuSearchService($http, ApiBasePath) {
  var service = this;



  service.searchMenuItem = function(searchTerm){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };

}

})();
