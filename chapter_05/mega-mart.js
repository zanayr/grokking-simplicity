// deno-lint-ignore-file no-var no-unused-vars camelcase no-inner-declarations
var shopping_cart = []; // global variables for the cart and total
var shopping_cart_total = 0;

function calc_tax(amount) {
  return amount * 0.10;
}

function add_item(cart, name, price) { // pass in global as explicit input
  var new_cart = cart.slice(); // copy on write
  new_cart.push({ // add a record to cart array
    name: name,        // to add items to the cart
    price: price
  });
  return new_cart;
}

function add_item_to_cart(name, price) {
  shopping_cart = add_item(name, price);

  var total = calc_total(shopping_cart); // inlined `calc_cart_total`
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20; // replace duplicated code, with existing function
}

function update_shipping_icons(cart) {
  var buy_buttons = get_but_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item.name, item.price); // pass `cart`
    if (gets_free_shipping(new_cart))
      button.show_free_shipping_icon();
    else
      button.hide_free_shipping_icon();
  }
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}