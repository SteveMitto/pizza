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

var pizzaTypes = ["Margherita", "Chicken PeriPeri", "Hawian"]

var finalPrice = [];
$(document).ready(function() {
  console.log("i am ready")

$(".shopping-cart").hide()
var pizzaAmount = 0;
$(".items-added small").text(pizzaAmount)
// Cart Functions
$(".cart").hide();
$(".cart .close").click(function(){
  $(".cart").fadeOut(500);
  // $("body").css('overflow','visible')
  $(".shopping-cart").show(500)
})


$(".shopping-cart").click(function(){
  $(".cart").fadeIn(500);
  // $("body").css('overflow','hidden')
  $(".shopping-cart").hide()
})

//
  $(".pizza-types1,.pizza-types2,.pizza-types3").hide();

  $("#pizza1-btn").click(function() {
    $(".pizza-types1").slideToggle("slow");
    $('html, body').animate({
      scrollTop: $(".pizza-types1").offset().top
    }, 1000);

  })

  $("#pizza2-btn").click(function() {
    $(".pizza-types2").slideToggle("slow");
    $('html, body').animate({
      scrollTop: $(".pizza-types2").offset().top
    }, 1000);
  })

  $("#pizza3-btn").click(function() {
    $(".pizza-types3").slideToggle("slow");
    $('html, body').animate({
      scrollTop: $(".pizza-types3").offset().top
    }, 1000);
  })

  //form validation
//----------------------Pizza Type 1 Large --------------------//

  $(".pizza-types1 .target-l").submit(function() {
    event.preventDefault();



    if ($("#quantity").val() == "") {
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
      pizzaAmount += quantity;
      $(".items-added small").text(pizzaAmount)
      var topin="";
      var price = (pizzaPrices.large) * quantity + (toppingsIn.selected.length * 100);
      var order1 = new Order(pizza, crust, price, toppingsIn)
      // console.log(order1.toppings.selected.forEach((x)=> x));
      console.log(order1.toppings.selected.length);
      if (order1.toppings.selected.length == 3) {
        var topin ="cheese, Peoeroni, ham"
      }else if (order1.toppings.selected.length == 2) {
        var topin = " "+order1.toppings.selected[0]+","+order1.toppings.selected[1];
      }else if(order1.toppings.selected == 1){
        var topin = order1.toppings.selected[0]
      }else{
          var topin="";
      }
      console.log(order1.type[0]);
      $(".cart1").append(
        "<tr>" +
        "<th scope='row'>1</th>" +
        "<td>" + order1.type + "</td>" +
        "<td>" + order1.crust + "</td>" +
        "<td>" + topin  +"</td>" +
        "<td> Large </td>" +
        "<td>" + order1.price + "</td>" +
        "</tr>"
      )
      finalPrice.push(price);
      console.log(finalPrice)
      $(".btn-l").delay(500).addClass("btn-success").text("Added + ✔️ ");
      $(".shopping-cart").show(500)
    }
  })

  //----------------------Pizza Type 1 Medium --------------------//

  $("form.target-m").submit(function() {
    event.preventDefault();

    if ($(".amount").val() == "") {
      alert("Select amount of Medium pizzas");
    } else {
      var quantity= (parseInt($(".amount").val()))
      var pizza = pizzaTypes[0];
      var cheeseTop = $("#cheese-m");
      var peperoniTop = $("#peperoni-m");
      var hamTop = $("#ham-m")
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
      if ($("#crust-m").prop("checked") !== true) {
        var crust = "stuffed"
      } else {
        var crust = $("input[name=crust-m]:checked").val();
      }
      console.log(quantity);
      pizzaAmount += quantity;
      $(".items-added small").text(pizzaAmount)
      var price = (pizzaPrices.medium) * quantity + (toppingsIn.selected.length * 100);
      var order2 = new Order(pizza, crust, price, toppingsIn)
      // console.log(order1.toppings.selected.forEach((x)=> x));
      var topinM="";
    console.log(order2.toppings.selected.length);
      if (order2.toppings.selected.length == 3) {
         topinM ="cheese, Peoeroni, ham"
      }else if (order2.toppings.selected.length == 2) {
         topinM = " "+order2.toppings.selected[0]+","+order2.toppings.selected[1];
      }else if(order2.toppings.selected == 1){
         topinM = order2.toppings.selected[0]
      }else{
           topinM="";
      }

      console.log(order2.type[0]);
      $(".cart1").append(
        "<tr>" +
        "<th scope='row'>1</th>" +
        "<td>" + order2.type + "</td>" +
        "<td>" + order2.crust + "</td>" +
        "<td>" + topinM +"</td>" +
        "<td> Medium </td>" +
        "<td>" + order2.price + "</td>" +
        "</tr>"
      )
      finalPrice.push(price);
      console.log(finalPrice)
      $(".btn-m").delay(500).addClass("btn-success").text("Added + ✔️ ");
        $(".shopping-cart").show(500)
    }
  })

//----------------------Pizza Type 1 Small --------------------//
  $(".target-s").submit(function() {
    event.preventDefault();
    if ($(".amt").val() == "") {
      alert("Select amount of Small pizzas");
    } else {
      var quantity = parseInt($(".amt").val());
      console.log(quantity)
      pizzaAmount += quantity;
      var pizza = pizzaTypes[0];
      var cheeseTop = $("#cheese-s");
      var peperoniTop = $("#peperoni-s");
      var hamTop = $("#ham-s")
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
      if ($("#crust-s").prop("checked") !== true) {
        var crust = "stuffed"
      } else {
        var crust = $("input[name=crust-s]:checked").val();
      }
      $(".items-added small").text(pizzaAmount)
      var price = (pizzaPrices.small) * quantity + (toppingsIn.selected.length * 100);
      var order3 = new Order(pizza, crust, price, toppingsIn)
      // console.log(order1.toppings.selected.forEach((x)=> x));
      var topinS="";
    console.log(order3.toppings.selected.length);
      if (order3.toppings.selected.length == 3) {
         topinS ="cheese, Peoeroni, ham"
      }else if (order3.toppings.selected.length == 2) {
         topinS = " "+order3.toppings.selected[0]+","+order3.toppings.selected[1];
      }else if(order3.toppings.selected == 1){
         topinS = order3.toppings.selected[0]
      }else{

           topinS="";
         }
      $(".cart1").append(
        "<tr>" +
        "<th scope='row'>1</th>" +
        "<td>" + order3.type + "</td>" +
        "<td>" + order3.crust + "</td>" +
        "<td>" + topinS+"</td>" +
        "<td> Small </td>" +
        "<td>" + order3.price + "</td>" +
        "</tr>"
      )
      finalPrice.push(price);
      console.log(finalPrice)
      $(".btn-s").delay(500).addClass("btn-success").text("Added + ✔️ ");
        $(".shopping-cart").show(500)
    }

  })

  //----------------------Pizza Type 2 Large --------------------//
    $(".pizza-types2 .target-L").submit(function() {
      event.preventDefault();


      // if ($("#crust").prop("checked") == false) {
      //   alert("Select a crust type")
    if ($(".quantity-L").val() == "") {
        alert("Select amount of Large pizzas");
      } else {
        var pizza = pizzaTypes[1];
        var cheeseTop = $("#cheese-L");
        var peperoniTop = $("#peperoni-L");
        var hamTop = $("#ham-L")
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
        var quantity = parseInt($(".quantity-L").val());
        pizzaAmount += quantity;
        $(".items-added small").text(pizzaAmount)
        var topin="";
        var price = (pizzaPrices.large) * quantity + (toppingsIn.selected.length * 100);
        var order1 = new Order(pizza, crust, price, toppingsIn)
        // console.log(order1.toppings.selected.forEach((x)=> x));
        console.log(order1.toppings.selected.length);
        if (order1.toppings.selected.length == 3) {
          var topin ="cheese, Peoeroni, ham"
        }else if (order1.toppings.selected.length == 2) {
          var topin = " "+order1.toppings.selected[0]+","+order1.toppings.selected[1];
        }else if(order1.toppings.selected == 1){
          var topin = order1.toppings.selected[0]
        }else{
            var topin="";
        }
        console.log(order1.type[0]);
        $(".cart1").append(
          "<tr>" +
          "<th scope='row'>1</th>" +
          "<td>" + order1.type + "</td>" +
          "<td>" + order1.crust + "</td>" +
          "<td>" + topin  +"</td>" +
          "<td> Large </td>" +
          "<td>" + order1.price + "</td>" +
          "</tr>"
        )
        finalPrice.push(price);
        console.log(finalPrice)
        $(".btn-L").delay(500).addClass("btn-success").text("Added + ✔️ ");
        $(".shopping-cart").show(500)
      }
    })

    //----------------------Pizza Type 2 Medium --------------------//

    $(".pizza-types2 .target-M").submit(function() {
      event.preventDefault();

      if ($(".amount2").val() == "") {
        alert("Select amount of Medium pizzas");
      } else {
        var quantity= (parseInt($(".amount2").val()))
        var pizza = pizzaTypes[1];
        var cheeseTop = $("#cheese-M");
        var peperoniTop = $("#peperoni-M");
        var hamTop = $("#ham-M")
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
        if ($("#crust-m").prop("checked") !== true) {
          var crust = "stuffed"
        } else {
          var crust = $("input[name=crust-m]:checked").val();
        }
        console.log(quantity);
        pizzaAmount += quantity;
        $(".items-added small").text(pizzaAmount)
        var price = (pizzaPrices.medium) * quantity + (toppingsIn.selected.length * 100);
        var order2 = new Order(pizza, crust, price, toppingsIn)
        // console.log(order1.toppings.selected.forEach((x)=> x));
        var topinM="";
      console.log(order2.toppings.selected.length);
        if (order2.toppings.selected.length == 3) {
           topinM ="cheese, Peoeroni, ham"
        }else if (order2.toppings.selected.length == 2) {
           topinM = " "+order2.toppings.selected[0]+","+order2.toppings.selected[1];
        }else if(order2.toppings.selected == 1){
           topinM = order2.toppings.selected[0]
        }else{
             topinM="";
        }

        console.log(order2.type[0]);
        $(".cart1").append(
          "<tr>" +
          "<th scope='row'>1</th>" +
          "<td>" + order2.type + "</td>" +
          "<td>" + order2.crust + "</td>" +
          "<td>" + topinM +"</td>" +
          "<td> Medium </td>" +
          "<td>" + order2.price + "</td>" +
          "</tr>"
        )
        finalPrice.push(price);
        console.log(finalPrice)
        $(".btn-M").delay(500).addClass("btn-success").text("Added + ✔️ ");
          $(".shopping-cart").show(500)
      }
    })

  //----------------------Pizza Type 2 Small --------------------//
    $(".pizza-types2 .target-S").submit(function() {
      event.preventDefault();
      if ($(".amt2").val() == "") {
        alert("Select amount of Small pizzas");
      } else {
        var quantity = parseInt($(".amt2").val());
        console.log(quantity)
        pizzaAmount += quantity;
        var pizza = pizzaTypes[1];
        var cheeseTop = $("#cheese-s");
        var peperoniTop = $("#peperoni-s");
        var hamTop = $("#ham-s")
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
        if ($("#crust-s").prop("checked") !== true) {
          var crust = "stuffed"
        } else {
          var crust = $("input[name=crust-s]:checked").val();
        }
        $(".items-added small").text(pizzaAmount)
        var price = (pizzaPrices.small) * quantity + (toppingsIn.selected.length * 100);
        var order3 = new Order(pizza, crust, price, toppingsIn)
        // console.log(order1.toppings.selected.forEach((x)=> x));
        var topinS="";
      console.log(order3.toppings.selected.length);
        if (order3.toppings.selected.length == 3) {
           topinS ="cheese, Peoeroni, ham"
        }else if (order3.toppings.selected.length == 2) {
           topinS = " "+order3.toppings.selected[0]+","+order3.toppings.selected[1];
        }else if(order3.toppings.selected == 1){
           topinS = order3.toppings.selected[0]
        }else{

             topinS="";
           }
        $(".cart1").append(
          "<tr>" +
          "<th scope='row'>1</th>" +
          "<td>" + order3.type + "</td>" +
          "<td>" + order3.crust + "</td>" +
          "<td>" + topinS+"</td>" +
          "<td> Small </td>" +
          "<td>" + order3.price + "</td>" +
          "</tr>"
        )
        finalPrice.push(price);
        console.log(finalPrice)
        $(".btn-S").delay(500).addClass("btn-success").text("Added + ✔️ ");
          $(".shopping-cart").show(500)
      }

    })


      //----------------------Pizza Type 3 Large --------------------//
        $(".pizza-types3 .target-La").submit(function() {
          event.preventDefault();

//
          if ($("#crust-la").prop("checked") == false) {
            alert("Select a crust type")
        }else if ($(".quantity-La").val() == "") {
            alert("Select amount of Large pizzas");
          } else {
            var pizza = pizzaTypes[2];
            var cheeseTop = $("#cheese-La");
            var peperoniTop = $("#peperoni-La");
            var hamTop = $("#ham-La")
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
            var crust = $("input[name=crust-La]:checked").val();
            var quantity = parseInt($(".quantity-La").val());
            pizzaAmount += quantity;
            $(".items-added small").text(pizzaAmount)
            var topin="";
            var price = (pizzaPrices.large) * quantity + (toppingsIn.selected.length * 100);
            var order1 = new Order(pizza, crust, price, toppingsIn)
            // console.log(order1.toppings.selected.forEach((x)=> x));
            console.log(order1.toppings.selected.length);
            if (order1.toppings.selected.length == 3) {
              var topin ="cheese, Peoeroni, ham"
            }else if (order1.toppings.selected.length == 2) {
              var topin = " "+order1.toppings.selected[0]+","+order1.toppings.selected[1];
            }else if(order1.toppings.selected == 1){
              var topin = order1.toppings.selected[0]
            }else{
                var topin="";
            }

            $(".cart1").append(
              "<tr>" +
              "<th scope='row'>1</th>" +
              "<td>" + order1.type + "</td>" +
              "<td>" + order1.crust + "</td>" +
              "<td>" + topin  +"</td>" +
              "<td> Large </td>" +
              "<td>" + order1.price + "</td>" +
              "</tr>"
            )
            finalPrice.push(price);
            console.log(finalPrice)
            $(".btn-L").delay(500).addClass("btn-success").text("Added + ✔️ ");
            $(".shopping-cart").show(500)
          }
        })

        //----------------------Pizza Type 3 Medium --------------------//

        $(".pizza-types3 .target-Me").submit(function() {
          event.preventDefault();

          if ($(".amount3").val() == "") {
            alert("Select amount of Medium pizzas");
          } else {
            var quantity= (parseInt($(".amount3").val()))
            var pizza = pizzaTypes[2];
            var cheeseTop = $("#cheese-Me");
            var peperoniTop = $("#peperoni-Me");
            var hamTop = $("#ham-Me")
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
            if ($("#crust-Me").prop("checked") !== true) {
              var crust = "stuffed"
            } else {
              var crust = $("input[name=crust-Me]:checked").val();
            }
            console.log(quantity);
            pizzaAmount += quantity;
            $(".items-added small").text(pizzaAmount)
            var price = (pizzaPrices.medium) * quantity + (toppingsIn.selected.length * 100);
            var order2 = new Order(pizza, crust, price, toppingsIn)
            // console.log(order1.toppings.selected.forEach((x)=> x));
            var topinM="";
          console.log(order2.toppings.selected.length);
            if (order2.toppings.selected.length == 3) {
               topinM ="cheese, Peoeroni, ham"
            }else if (order2.toppings.selected.length == 2) {
               topinM = " "+order2.toppings.selected[0]+","+order2.toppings.selected[1];
            }else if(order2.toppings.selected == 1){
               topinM = order2.toppings.selected[0]
            }else{
                 topinM="";
            }
            $(".cart1").append(
              "<tr>" +
              "<th scope='row'>1</th>" +
              "<td>" + order2.type + "</td>" +
              "<td>" + order2.crust + "</td>" +
              "<td>" + topinM +"</td>" +
              "<td> Medium </td>" +
              "<td>" + order2.price + "</td>" +
              "</tr>"
            )
            finalPrice.push(price);
            console.log(finalPrice)
            $(".btn-Me").delay(500).addClass("btn-success").text("Added + ✔️ ");
              $(".shopping-cart").show(500)
          }
        })

      //----------------------Pizza Type 3 Small --------------------//
        $(".pizza-types3 .target-Sm").submit(function() {
          event.preventDefault();
          if ($(".amt3").val() == "") {
            alert("Select amount of Small pizzas");
          } else {
            var quantity = parseInt($(".amt3").val());
            console.log(quantity)
            pizzaAmount += quantity;
            var pizza = pizzaTypes[2];
            var cheeseTop = $("#cheese-Sm");
            var peperoniTop = $("#peperoni-Sm");
            var hamTop = $("#ham-Sm")
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
            if ($("#crust-Sm").prop("checked") !== true) {
              var crust = "stuffed"
            } else {
              var crust = $("input[name=crust-Sm]:checked").val();
            }
            $(".items-added small").text(pizzaAmount)
            var price = (pizzaPrices.small) * quantity + (toppingsIn.selected.length * 100);
            var order3 = new Order(pizza, crust, price, toppingsIn)
            // console.log(order1.toppings.selected.forEach((x)=> x));
            var topinS="";
          console.log(order3.toppings.selected.length);
            if (order3.toppings.selected.length == 3) {
               topinS ="cheese, Peoeroni, ham"
            }else if (order3.toppings.selected.length == 2) {
               topinS = " "+order3.toppings.selected[0]+","+order3.toppings.selected[1];
            }else if(order3.toppings.selected == 1){
               topinS = order3.toppings.selected[0]
            }else{

                 topinS="";
               }
            $(".cart1").append(
              "<tr>" +
              "<th scope='row'>1</th>" +
              "<td>" + order3.type + "</td>" +
              "<td>" + order3.crust + "</td>" +
              "<td>" + topinS+"</td>" +
              "<td> Small </td>" +
              "<td>" + order3.price + "</td>" +
              "</tr>"
            )
            finalPrice.push(price);
            console.log(finalPrice)
            $(".btn-Sm").delay(500).addClass("btn-success").text("Added + ✔️ ");
              $(".shopping-cart").show(500)
          }

        })

$("#delivery").click(function(){
  var location = prompt("Enter your Location");
   if(location == ""){
     $("#delivery").hide()
   }else{
     alert("Thank you. Pizzas will be delivered to "+ location +"delivery Is Free")
     $("#delivery").hide()
   }

})
$("#checkout").click(function(){
  alert("Thank you")
   location.reload();
})
$(".targetEmail").submit(function(){
  event.preventDefault();
  alert("Thank you "+ $("#names").val()+". Email sent")
  
})

  // var lastPrice =0;
  // finalPrice.forEach((price) => lastPrice += price);
//   for(i = 0; i< finalPrice.length; i++){
//     lastPrice += finalPrice[i]
// }
// console.log("Total "+lastPrice)
})
