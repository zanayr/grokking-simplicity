// Create a new object
function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

// Code Smell
// Implice argument in the function's name and duplicated code
function setPriceByName(cart, name, price) {
  const item = cart[name];
  const newItem = objectSet(item, 'price', price);
  const newCart = objectSet(cart, name, newItem);

  return newCart;
}

function setQuantityByName(cart, name, price) {
  const item = cart[name];
  const newItem = objectSet(item, 'quantity', price);
  const newCart = objectSet(cart, name, newItem);

  return newCart;
}

function setShippingByName(cart, name, price) {
  const item = cart[name];
  const newItem = objectSet(item, 'shipping', price);
  const newCart = objectSet(cart, name, newItem);

  return newCart;
}

function setTaxByName(cart, name, price) {
  const item = cart[name];
  const newItem = objectSet(item, 'tax', price);
  const newCart = objectSet(cart, name, newItem);

  return newCart;
}

const cart = objectSet({}, "thing", {});
console.log(setPriceByName(cart, "thing", "0.99"));
console.log(setQuantityByName(cart, "thing", 1));
console.log(setShippingByName(cart, "thing", "Express"));
console.log(setTaxByName(cart, "thing", "0.0495"));