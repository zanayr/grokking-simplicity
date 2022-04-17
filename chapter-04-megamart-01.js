let shoppingCart = [];
let shoppingCartTotal = 0;

function setCartTotalDOM() {
  return;
}

function calcTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }

  return total;
}

function calcTax(amount) {
  return amount * 0.10;
}

function addItem(cart, name, price) {
  let newCart = cart.slice();
  newCart.push({ name, price });

  return newCart;
}

function addItemToCart(name, price) {
  shoppingCart = addItem(shoppingCart, name, price);
  calcCartTotal();
}

function updateShippingButtons() {
  let buyButtons = getBuyButtonsDOM();

  for (let i = 0; i < buyButtons.length(); i++) {
    let button = buyButtons[i];
    let item = button.item;

    if (item.price + shoppingCartTotal >= 20) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingButton();
    }
  }
}

function calcCartTotal() {
  shoppingCartTotal = calcTotal(shoppingCart);
  setCartTotalDOM();
  updateShippingButtons();
  updateTaxDOM();
}

function updateTaxDOM() {
  setTaxDOM(calcTax(shoppingCartTotal));
}