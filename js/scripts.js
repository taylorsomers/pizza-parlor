// Business Logic:

function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaOrder.prototype.price = function(price) {
  if (this.size === "extra-large") {
    price+= 6;
  } else if (this.size === "large") {
    price += 4;
  } else if (this.size === "medium") {
    price += 2;
  } else if (this.size === "small") {
    price += 1;
  }
  let toppingTotal = (this.toppings).length;
  price += toppingTotal;
  return price;
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  $("button#submit-details").click(function(event) {
    event.preventDefault();
    let inputtedSize = $("select#size").val();
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      let topping = $(this).val();
      (toppings).push(topping);
    });
    let pizzaOrder = new PizzaOrder(inputtedSize, toppings);
    let orderPrice = pizzaOrder.price(3);
    $("#price-insert").html("$" + orderPrice);
    // alert(orderPrice);
  });
});

// End UI Logic