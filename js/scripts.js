// Business Logic:

function PizzaOrder(size) {
  this.size = size;
}

PizzaOrder.prototype.selectSize = function(inputtedSize) {
  if (inputtedSize === large) {
    this.size = large;
  } else {
    this.size = small;
  }
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  let pizzaOrder = new PizzaOrder(small);
});

// End UI Logic