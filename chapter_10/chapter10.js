// Create a new object
function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

// Set a field in an object
function setFieldByName(cart, name, field, value) {
  const item = cart[name];
  const newItem = objectSet(item, field, value);
  const newCart = objectSet(cart, name, newItem);

  return newCart;
}

const cart = objectSet({}, "thing", {});
console.log(setFieldByName(cart, "thing", "price", "0.99"));
console.log(setFieldByName(cart, "thing", "quantity", 1));
console.log(setFieldByName(cart, "thing", "shipping", "Express"));
console.log(setFieldByName(cart, "thing", "tax", "0.0495"));