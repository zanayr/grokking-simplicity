// deno-lint-ignore-file no-var no-unused-vars camelcase no-inner-declarations
var shopping_cart = []; // global variables for the cart and total
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart.push({ // add a record to cart array
    name: name,        // to add items to the cart
    price: price
  });
  calc_cart_total(); // update total because cart just changed
}

function updaste_shipping_icons() {
  var buy_buttons = get_but_buttons_dom(); // get all buy buttons on the page
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (item.price + shopping_cart_total >= 20) // determine if they get free shipping
      button.show_free_shipping_icon(); // show icon
    else
      button.hide_free_shipping_icon(); // hide icon
  }
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.10);
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i]; // sum all the item prices
    shopping_cart_total += item.price;
  }
  set_cart_total_dom(); // update DOM to refelect new total
  updaste_shipping_icons(); // update icons
  update_tax_dom(); // update tax
}