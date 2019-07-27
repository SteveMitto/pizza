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

  $(".pizza-types1,.pizza-types2,.pizza-types3").hide();

  $("#pizza1-btn").click(function() {
    $(".pizza-types1").toggle("slow");
    $('html, body').animate({
      scrollTop: $(".pizza-types1").offset().top
    }, 2000);

  })

  $("#pizza2-btn").click(function() {
    $(".pizza-types2").toggle("slow");
    $('html, body').animate({
      scrollTop: $(".pizza-types2").offset().top
    }, 1000);
  })

  $("#pizza3-btn").click(function() {
    $(".pizza-types3").toggle("slow");
    $('html, body').animate({
      scrollTop: $(".pizza-types3").offset().top
    }, 1000);
  })

})
