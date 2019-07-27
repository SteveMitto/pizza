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

const pizzaPrices = {
  large: 1200,
  medium: 1000,
  small: 850,
}

var pizzaTypes = ["Margherita", "Chicken Tika", "Hawian"]

var finalPrice = [];
$(document).ready(function() {
  console.log("i am ready")

// Cart Functions
$(".cart").hide();
$(".cart .close").click(function(){
  $(".cart").fadeOut(500);
  $("body").css('overflow','visible')
  $(".shopping-cart").show(500)
})


$(".shopping-cart").click(function(){
  $(".cart").fadeIn(500);
  $("body").css('overflow','hidden')
  $(".shopping-cart").hide()
})

//
  $(".pizza-types1,.pizza-types2,.pizza-types3").hide();

  $("#pizza1-btn").click(function() {
    $(".pizza-types1").toggle("slow");
    $('html, body').animate({
      scrollTop: $(".pizza-types1").offset().top
    }, 1000);

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

  //form validation
  $(".pizza-types1 .target-l").submit(function() {
    event.preventDefault();


    if ($("#crust").prop("checked") == false) {
      alert("Select a crust type")
    } else if ($("#quantity").val() == "") {
      alert("Select amount of Large pizzas");
    } else {
      var pizza = pizzaTypes[0];
      var cheeseTop = $("#cheese");
      var peperoniTop = $("#peperoni");
      var hamTop = $("#ham")
      //Toppings Selected

      if (cheeseTop.prop("checked") == true) {
        toppingsIn.selected.push(cheeseTop.val())
      }
      if (peperoniTop.prop("checked") == true) {
        toppingsIn.selected.push(peperoniTop.val())
      }
      if (hamTop.prop("checked") == true) {
        toppingsIn.selected.push(hamTop.val())
      }
      var crust = $("input[name=crust]:checked").val();
      var quantity = parseInt($("#quantity").val());
      var price = (pizzaPrices.large) * quantity + (toppingsIn.selected.length * 100);
      var order1 = new Order(pizza, crust, price, toppingsIn)
      // console.log(order1.toppings.selected.forEach((x)=> x));
      console.log(order1.toppings.selected.length);

      console.log(order1.type[0]);
      $(".cart1").append(
        "<tr>" +
        "<th scope='row'>1</th>" +
        "<td>" + order1.type + "</td>" +
        "<td>" + order1.crust + "</td>" +
        "<td>" + order1.toppings.selected.forEach(function(toping) {
          return +"<p>" + toping + "</p>"
        }) +

        "</td>" +
        "<td> Large </td>" +
        "<td>" + order1.price + "</td>" +
        "</tr>"
      )
      finalPrice.push(price);
      console.log(finalPrice)
      $(".btn-l").delay(500).addClass("btn-success").text("Added + ✔️ ");

    }
  })

  //----------------------Pizza Type 1 Medium --------------------//

  $(".pizza-types1 .target-m").submit(function() {
    event.preventDefault();



    if ($("#quantity").val() == "") {
      alert("Select amount of Medium pizzas");
    } else {
      var pizza = pizzaTypes[0];
      var cheeseTop = $("#cheese");
      var peperoniTop = $("#peperoni");
      var hamTop = $("#ham")
      //Toppings Selected

      if (cheeseTop.prop("checked") == true) {
        toppingsIn.selected.push(cheeseTop.val())
      }
      if (peperoniTop.prop("checked") == true) {
        toppingsIn.selected.push(peperoniTop.val())
      }
      if (hamTop.prop("checked") == true) {
        toppingsIn.selected.push(hamTop.val())
      }
      if ($("#crust").prop("checked") !== true) {
        var crust = "stuffed"
      } else {
        var crust = $("input[name=crust]:checked").val();
      }
      var quantity = parseInt($("#quantity").val());
      var price = (pizzaPrices.large) * quantity + (toppingsIn.selected.length * 100);
      var order2 = new Order(pizza, crust, price, toppingsIn)
      // console.log(order1.toppings.selected.forEach((x)=> x));
      console.log(order2.toppings.selected.length);

      console.log(order2.type[0]);
      $(".cart1").append(
        "<tr>" +
        "<th scope='row'>1</th>" +
        "<td>" + order2.type + "</td>" +
        "<td>" + order2.crust + "</td>" +
        "<td>" + order2.toppings.selected.forEach(function(toping) {
          return +"<p>" + toping + "</p>"
        }) +

        "</td>" +
        "<td> Medium </td>" +
        "<td>" + order2.price + "</td>" +
        "</tr>"
      )
      finalPrice.push(price);
      console.log(finalPrice)
      $(".btn-m").delay(500).addClass("btn-success").text("Added + ✔️ ");

    }
  })

  $(".pizza-types1 .target-s").submit(function() {
    event.preventDefault();



    if ($(".target-s #quantity").val() == "") {
      alert("Select amount of Small pizzas");
    } else {
      var pizza = pizzaTypes[0];
      var cheeseTop = $("#cheese");
      var peperoniTop = $("#peperoni");
      var hamTop = $("#ham")
      //Toppings Selected

      if (cheeseTop.prop("checked") == true) {
        toppingsIn.selected.push(cheeseTop.val())
      }
      if (peperoniTop.prop("checked") == true) {
        toppingsIn.selected.push(peperoniTop.val())
      }
      if (hamTop.prop("checked") == true) {
        toppingsIn.selected.push(hamTop.val())
      }
      if ($("#crust").prop("checked") !== true) {
        var crust = "stuffed"
      } else {
        var crust = $("input[name=crust]:checked").val();
      }
      var quantity = parseInt($("#quantity").val());
      var price = (pizzaPrices.large) * quantity + (toppingsIn.selected.length * 100);
      var order3 = new Order(pizza, crust, price, toppingsIn)
      // console.log(order1.toppings.selected.forEach((x)=> x));

      $(".cart1").append(
        "<tr>" +
        "<th scope='row'>1</th>" +
        "<td>" + order3.type + "</td>" +
        "<td>" + order3.crust + "</td>" +
        "<td>" + order3.toppings.selected.forEach(function(toping) {
          return +"<p>" + toping + "</p>"
        }) +

        "</td>" +
        "<td> Small </td>" +
        "<td>" + order3.price + "</td>" +
        "</tr>"
      )
      finalPrice.push(price);
      console.log(finalPrice)
      $(".btn-s").delay(500).addClass("btn-success").text("Added + ✔️ ");

    }
  })
  var lastPrice;
  finalPrice.forEach((price) => lastPrice += price);
  console.log(lastPrice);

})
