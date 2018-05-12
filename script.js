console.log("loaded!")
var stores = new Array();
var storeLoc = -1; //this tracks the store's location in the array
var itemLoc = -1; //this tracks the item's location within the store's list
var listPriceTotal = 0;

function addNewItem(){
  var newItem = document.getElementById("newItem").value;
  var newItemPrice = document.getElementById("newItemPrice").value;
  itemLoc++;
  stores[itemLoc] = new ItemList(newItem, newItemPrice, itemLoc);
  var toNumber = Number(stores[itemLoc].itemPrice);

  var node = document.createElement("li");
  var textNode = document.createTextNode(stores[itemLoc].itemName + " - $" + stores[itemLoc].itemPrice);
  node.appendChild(textNode);
  document.getElementById("listItems").appendChild(node);

  listPriceTotal += toNumber;

  replaceTotal(listPriceTotal);

  clearFields();

  return itemLoc;
}

function replaceTotal(total){
  var parent = document.getElementById("priceTotalBox");
  var child = document.getElementById("priceTotal");
  var replacement = document.createElement("p");
  var node = document.createTextNode("$" + total);

  replacement.setAttribute("id", "priceTotal");

  replacement.appendChild(node);
  parent.replaceChild(replacement, child);
}

function ItemList(item, price, location){
  this.itemName = item;
  this.itemPrice = price;
  this.arrLoc = location;
}

function clearFields() {
     document.getElementById("newItem").value = "";
     document.getElementById("newItemPrice").value = "";
}
