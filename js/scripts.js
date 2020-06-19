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
  if ((this.toppings).includes("red-sauce")) {
    price += 1;
  }
  if ((this.toppings).includes("white-sauce")) {
    price += 1;
  }
  if ((this.toppings).includes("bleu")) {
    price += 2;
  }
  if ((this.toppings).includes("blue-stilton")) {
    price += 5;
  }
  if ((this.toppings).includes("cheddar-goblin")) {
    price += 1;
  }
  if ((this.toppings).includes("mozarella")) {
    price += 1;
  }
  if ((this.toppings).includes("anchovies")) {
    price += 1;
  }
  if ((this.toppings).includes("artichoke")) {
    price += 1;
  }
  if ((this.toppings).includes("bacon")) {
    price += 2;
  }
  if ((this.toppings).includes("italian-sausage")) {
    price += 2;
  }
  if ((this.toppings).includes("pepperoni")) {
    price += 2;
  }
  if ((this.toppings).includes("spinach")) {
    price += 1;
  }
  if ((this.toppings).includes("sun-dried-tomatoes")) {
    price += 1;
  }
  if ((this.toppings).includes("truffles")) {
    price += 5;
  }
  // let toppingTotal = (this.toppings).length;
  // price += toppingTotal;
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