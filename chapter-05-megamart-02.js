let shoppingCart = [];


// Actions
function addItemToCart(name, price) {
  let item = makeCartItem(name, price);
  shoppingCart = addItem(shoppingCart, item); // Action: reading a global
  
  let total = calcTotal(shoppingCart); // Action: reading a global
  setCartTotalDOM(total); // Action: DOM manipulation
  updateShippingButtons(shoppingCart); // Action: DOM manipulation
  updateTaxDOM(total); // Action: DOM manipulation
}
function updateShippingButtons(cart) {
  let buttons = getBuyButtonsDOM(); // Action: DOM manipulation

  for (let i = 0; i < buttons.length(); i++) {
    let button = buttons[i];
    let item = button.item;
    let newCart = addItem(cart, button.item);

    if (getsFreeShipping(newCart)) {
      button.showFreeShippingIcon(); // Action: DOM manipulation
    } else {
      button.hideFreeShippingButton(); // Action: DOM manipulation
    }
  }
}
function updateTaxDOM(total) {
  setTaxDOM(calcTax(total)); // Action: DOM manipulation
}
function setCartTotalDOM(total) {
  // Dummy function that does nothing
  console.log(`Setting cart total: ${total}`);
}
function setTaxDOM(total) {
  // Dummy function that does nothing
  console.log(`Setting tax total: ${total}`);
}


// Calculations
function addElementLast(array, element) {
  let newArray = array.slice();
  newArray.push(element);

  return element;
}
function addItem(cart, item) {
  return addElementLast(cart, item);
}
function makeCartItem(name, price) {
  return { name, price };
}
function calcTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }

  return total;
}
function getsFreeShipping(cart) {
  return calcTotal(cart) >= 20;
}
function calcTax(amount) {
  return amount * 0.10;
}