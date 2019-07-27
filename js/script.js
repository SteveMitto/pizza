function Order(type, crust, price, toppings) {
  this.type = type;
  this.crust = crust;
  this.price = price;
  this.toppings = toppings;
}

var toppingsIn = {
  name: "toppings",
  selected: []
}

var pizzaTypes = ["Peperoni", "Chicken Tika", "Hawian"]

$(document).ready(function() {
  console.log("i am ready")

})
