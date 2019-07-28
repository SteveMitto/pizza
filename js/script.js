function Order(type, crust, price, toppings) {
  this.type = type;
  this.crust = crust;
  this.price = price;
  this.toppings = toppings;
}

var toppingsIn ={name:"toppings" ,selected:[]}

var pizzaTypes =["Peperoni","Chicken Tika","Hawian"]

$(document).ready(function() {
  console.log("i am ready")
  $(".pizza-types").hide();
  $(".pizza-1-txt .btn-warning").click(function() {
    $(".pizza-types").slideToggle();
  })
  $(".size1").click(function() {
    $(".size1").hide();
    $(".pizza-types .card1 .target-l").slideDown(5000).append(
      "<div id='target1'>" +
      // "  <form class='target-l'>" +
      "<h6>Toppings</h6>" +
      "<label for='cheese'>Cheese</label>" +
      "<input type='checkbox' name='topping' value='cheese' id='cheese'>" +
      "<label for='peperoni'>Peperoni</label>" +
      "<input type='checkbox' name='topping' value='peperoni' id='peperoni'>" +
      "<label for='ham'>Ham</label>" +
      "<input type='checkbox' name='topping' value='ham' id='ham'>" +
      "<h6>Crust Type</h6>" +
      "<label for='crust'>Crispy</label>" +
      "<input type='radio' name='crust' value='crispy' id='crust'>" +
      "<label for='crust'>Stuffed</label>" +
      "<input type='radio' name='crust' value='stuffed' id='crust'>" +
      "<label for='crust'>Gluten-free</label>" +
      "<input type='radio' name='crust' value='gluten-free' id='crust'><br>" +
      "<label for='quantity'>Quantinty</label>" +
      "<input type='number' class='form-control' name=' value='cheese' id='quantity'><br>" +
      "<button class='btn btn-primary' type='submit'>Add To Cart</button>" +
      // "</form>" +
      "</div>"
    )

  })
  $(".size2").click(function() {
    $(".size2").hide();
    $(".pizza-types .card2").slideDown(5000).append(
      "<div id='target1'>" +
      "  <form class='target-m'>" +
      "<h6>Toppings</h6>" +
      "<label for='cheese'>Cheese</label>" +
      "<input type='checkbox' name='' value='cheese' id='cheese'>" +
      "<label for='peperoni'>Peperoni</label>" +
      "<input type='checkbox' name='' value='peperoni' id='peperoni'>" +
      "<label for='ham'>Ham</label>" +
      "<input type='checkbox' name=' value='cheese' id='ham'>" +
      "<h6>Crust Type</h6>" +
      "<label for='crispy'>Crispy</label>" +
      "<input type='checkbox' name='' value='cheese' id='crispy'>" +
      "<label for='peperoni'>Stuffed</label>" +
      "<input type='checkbox' name='' value='peperoni' id='peperoni'>" +
      "<label for='ham'>Gluten-free</label>" +
      "<input type='checkbox' name='' value='cheese' id='ham'><br>" +
      "<label for='ham'>Quantinty</label>" +
      "<input type='number' class='form-control' name=' value='cheese' id='ham'><br>" +
      "<button class='btn btn-primary'>Add To Cart</button>" +
      "</form>" +
      "</div>"
    )
  })
  $(".size3").click(function() {
    $(".size3").hide();
    $(".pizza-types .card3").slideDown(5000).append(
      "<div id='target1'>" +
      "<form class='target-s'>" +
      "<h6>Toppings</h6>" +
      "<label for='cheese'>Cheese</label>" +
      "<input type='checkbox' name='' value='cheese' id='cheese'>" +
      "<label for='peperoni'>Peperoni</label>" +
      "<input type='checkbox' name='' value='peperoni' id='peperoni'>" +
      "<label for='ham'>Ham</label>" +
      "<input type='checkbox' name='' value='cheese' id='ham'>" +
      "<h6>Crust Type</h6>" +
      "<label for='crispy'>Crispy</label>" +
      "<input type='checkbox' name='' value='cheese' id='crispy'>" +
      "<label for='peperoni'>Stuffed</label>" +
      "<input type='checkbox' name='' value='peperoni' id='peperoni'>" +
      "<label for='ham'>Gluten-free</label>" +
      "<input type='checkbox' name='' value='cheese' id='ham'><br>" +
      "<label for='ham'>Quantinty</label>" +
      "<input type='number' class='form-control' name=' value='cheese' id='ham'><br>" +
      "<button class='btn btn-primary'>Add To Cart <i class='fas fa-shopping-cart'></i></button>" +
      "</form>" +
      "</div>"
    )
  })

  $(".target-l").submit(function() {
    event.preventDefault();
    const pizzaType = "American";
    var toppingsLarge1 = $("#cheese").val();
    var toppingsLarge2 = $("#peperoni").val();
    var toppingsLarge3 = $("#ham").val();
    var crust = $("input[name='crust']:checked").val();
    var quantintyLarge = $("#quantity").val();
    var allToppings = []
    var price = 2000;
    //find checked inputs
    if ($("#cheese").prop("checked") == true) {
      toppingsIn.selected.push($("#cheese").val())
      //check for peperoni
      if ($("#peperoni").prop("checked") == true) {
        toppingsIn.selected.push($("#peperoni").val())

        if ($("#ham").prop("checked") == true) {
          toppingsIn.selected.push($("#ham").val())
          toppingsIn.selected.pop()
        }
      }
    } else if ($("#peperoni").prop("checked") == true) {
      toppingsIn.selected.push($("#peperoni").val())

      if ($("#ham").prop("checked") == true) {
        toppingsIn.selected.push($("#ham").val())
        toppingsIn.selected.pop()
      }
     else if ($("#ham").prop("checked") == true) {
      toppingsIn.selected.push($("#ham").val())
      //check for peperoni
      if ($("#cheese").prop("checked") == true) {
        toppingsIn.selected.push($("#cheese").val())

      }

    }
  }  if ($("#ham").prop("checked") == true) {
    toppingsIn.selected.push($("#ham").val())
  }


  // order1.toppings.push(order1)
    // allToppings.push(toppingsLarge1,toppingsLarge2,toppingsLarge3)
    var order1 = new Order(pizzaType, crust, price);
    console.log(toppingsIn.selected)
    })

    // alert(order1.toppings);
  })
