(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.provider('ShoppingListService', ShoppingListServiceProvider);


ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var list = this;

  list.availableItems = ShoppingListService.getAvailableItems();
  list.bougthItems = ShoppingListService.getBougthItems();


  list.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };

  list.checkOff = function(itemIndex){
    //Get item
    var item = ShoppingListService.getAvailableItemByIndex(itemIndex);

    //Add item
    ShoppingListService.addToBougth(item);

    //Remove item
    ShoppingListService.removeItem(itemIndex);
  }

  list.toBuyMessage = function(){
    var msg = "";
    if (list.availableItems.length==0){
      msg = "Everything is bought!"
    }
    return msg;
  }

  list.bougthItemsMessage = function(){
    var msg = "";
    if (list.bougthItems.length==0){
      msg = "Nothing bought yet."
    }
    return msg;
  }


}

function ShoppingListService(maxItems) {
  var service = this;

  var items = [
    {
      "quantity":10,
      "name":"cookies"
    },
    {
      "quantity":5,
      "name":"sodas"
    },
    {
      "quantity":3,
      "name":"Muffins"
    }
  ];

  var bougthItems = [];

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getAvailableItemByIndex = function(itemIndex){
    return items[itemIndex];
  }

  service.addToBougth = function(item){
      bougthItems.push(item);
  }


  service.getAvailableItems = function () {
    console.log(JSON.stringify(items));
    return items;
  };

  service.getBougthItems = function(){
    return bougthItems;
  };
}


function ShoppingListServiceProvider() {
  var provider = this;

  provider.defaults = {
    maxItems: 10
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);

    return shoppingList;
  };
}

})();
