$(document).ready(function() {
  console.log("i am ready")
  $(".pizza-types").hide();
  $(".pizza-1-txt .btn-warning").click(function() {
    $(".pizza-types").slideToggle();
  })
  $(".size1").click(function() {
    $(".size1").hide();
    $(".pizza-types .card1").slideDown(5000).append(
      "<div id='target1'>" +
      "  <form class='target-l'>" +
      "<h6>Toppings</h6>" +
      "<label for='cheese'>Cheese</label>" +
      "<input type='checkbox' name=' value='cheese' id='cheese'>" +
      "<label for='peperoni'>Peperoni</label>" +
      "<input type='checkbox' name=' value='peperoni' id='peperoni'>" +
      "<label for='ham'>Ham</label>" +
      "<input type='checkbox' name=' value='cheese' id='ham'>" +
      "<h6>Crust Type</h6>" +
      "<label for='crispy'>Crispy</label>" +
      "<input type='checkbox' name=' value='cheese' id='crispy'>" +
      "<label for='peperoni'>Stuffed</label>" +
      "<input type='checkbox' name=' value='peperoni' id='peperoni'>" +
      "<label for='ham'>Gluten-free</label>" +
      "<input type='checkbox' name=' value='cheese' id='ham'><br>" +
      "<label for='ham'>Quantinty</label>" +
      "<input type='number' class='form-control' name=' value='cheese' id='ham'><br>" +
      "<button class='btn btn-primary'>Add To Cart</button>" +
      "</form>" +
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
        "<input type='checkbox' name=' value='cheese' id='cheese'>" +
        "<label for='peperoni'>Peperoni</label>" +
        "<input type='checkbox' name=' value='peperoni' id='peperoni'>" +
        "<label for='ham'>Ham</label>" +
        "<input type='checkbox' name=' value='cheese' id='ham'>" +
        "<h6>Crust Type</h6>" +
        "<label for='crispy'>Crispy</label>" +
        "<input type='checkbox' name=' value='cheese' id='crispy'>" +
        "<label for='peperoni'>Stuffed</label>" +
        "<input type='checkbox' name=' value='peperoni' id='peperoni'>" +
        "<label for='ham'>Gluten-free</label>" +
        "<input type='checkbox' name=' value='cheese' id='ham'><br>" +
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
        "<input type='checkbox' name=' value='cheese' id='cheese'>" +
        "<label for='peperoni'>Peperoni</label>" +
        "<input type='checkbox' name=' value='peperoni' id='peperoni'>" +
        "<label for='ham'>Ham</label>" +
        "<input type='checkbox' name=' value='cheese' id='ham'>" +
        "<h6>Crust Type</h6>" +
        "<label for='crispy'>Crispy</label>" +
        "<input type='checkbox' name=' value='cheese' id='crispy'>" +
        "<label for='peperoni'>Stuffed</label>" +
        "<input type='checkbox' name=' value='peperoni' id='peperoni'>" +
        "<label for='ham'>Gluten-free</label>" +
        "<input type='checkbox' name=' value='cheese' id='ham'><br>" +
        "<label for='ham'>Quantinty</label>" +
        "<input type='number' class='form-control' name=' value='cheese' id='ham'><br>" +
        "<button class='btn btn-primary'>Add To Cart <i class='fas fa-shopping-cart'></i></button>" +
        "</form>" +
        "</div>"
      )
  })
})
