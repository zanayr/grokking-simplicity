// deno-lint-ignore-file no-var no-unused-vars camelcase no-inner-declarations
var shopping_cart = []; // action: global

// CALCULATIONS
function add_element_last(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

function calc_tax(amount) {
  return amount * 0.10;
}

function make_cart_item(name, price) {
  return {
    name: name,
    price: price
  };
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function gets_free_shipping_with_item(cart, item) {
  var new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}

// ACTIONS
function set_free_shipping_icon(button, is_shown) {
  if (is_shown)
  button.show_free_shipping_icon();
  else
  button.hide_free_shipping_icon();
}

function update_shipping_icons(cart) {
  var buy_buttons = get_but_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var has_free_shipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, has_free_shipping);
  }
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}