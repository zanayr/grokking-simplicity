// deno-lint-ignore-file no-var no-unused-vars camelcase no-inner-declarations no-prototype-builtins no-redeclare
var shopping_cart = []; // action: global

// CALCULATIONS
function array_set(array, index, value) {
  var copy = array.slice();
  copy[index] = value;
  return copy;
}

function add_element_last(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function calc_total(cart) {
  var total = 0;
  var names = Object.keys(cart);
  for (var i = 0; i < names.length; i++) {
    var item = cart[names[i]];
    total += item.price;
  }
  return total;
}

function calc_tax(amount) {
  return amount * 0.10;
}

function cart_tax(cart) {
  return calc_tax(calc_total(cart));
}

function make_cart_item(name, price) {
  return {
    name: name,
    price: price
  };
}

function add_item(cart, item) {
  return object_set(cart, item.name, item);
}

function remove_items(array, idx, count) {
  var copy = array.slice();
  copy.splice(idx, count);
  return copy;
}

function index_of_item(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name)
      return i;
  }
  return null;
}

function remove_item_by_name(cart, name) {
  return object_delete(cart, name);
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function gets_free_shipping_with_item(cart, item) {
  var new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}

function set_price(item, new_price) {
  var item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}

function set_price_by_name(cart, name, price) {
  if(is_in_cart(cart, name)) {
    var item = cart[name];
    var copy = set_price(item, price);
    return object_set(cart, name, copy);
  } else {
    var item = make_cart_item(name, price);
    return object_set(cart, name, item);
  }
}

function is_in_cart(cart, name) {
  return cart.hasOwnProperty(name);
}

function free_tie_clip(cart) {
  var has_tie = is_in_cart(cart, "tie");
  var has_tie_clip = is_in_cart(cart, "tie clip");
  if (has_tie && !has_tie_clip) {
    var tie_clip = make_cart_item("tie clip", 0);
    return add_item(cart, tie_clip);
  }
  return cart;
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

function black_friday_promotion_safe(cart) {
  var cart_copy = deep_copy(cart);
  black_friday_promotion(cart_copy);
  return deep_copy(cart_copy);
}

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  shopping_cart = black_friday_promotion_safe(shopping_cart);
}

function delete_handler(name) {
  shopping_cart = remove_item_by_name(shopping_cart, name);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(shopping_cart);
}