// Business Logic:

function PizzaOrder(size) {
  this.size = size;
}

PizzaOrder.prototype.changeSize = function(inputtedSize) {
  if (inputtedSize == large) {
    this.size = large;
  } else {
    this.size = small;
  }
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  $("button#submit-details").click(function(event) {
    event.preventDefault();
    let inputtedSize = $("select#size").val();
    let pizzaOrder = new PizzaOrder(inputtedSize);
    alert(pizzaOrder.size);
    // alert(inputtedSize);
  });
});

// End UI Logic