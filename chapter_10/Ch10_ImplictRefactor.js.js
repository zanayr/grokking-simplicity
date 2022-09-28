// Create a new object
function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function getFieldTranslation(field) {
  if (translations.prototype.hasOwnProperty.call(field)) return translations[field];
  return field;
}

 // JavaScript does not have a type system, so we have to "add" our own
const validItemFields = ["price", "quantity", "shipping", "tax"];

// Translation tables are possible if we require a field name change later on
const translations = { "quantity": "number" };

// Set a field in an object
function setFieldByName(cart, name, field, value) {
  // Validate the field
  if (!validItemFields.includes(field)) throw `Not a valid item field: '${field}'.`;
  return objectSet(cart, name, objectSet(cart[name], getFieldTranslation(field), value));
}

const validIncrementFields = ["size", "quantity"];
function incrementFieldByName(cart, name, field) {
  // Validate the field
  if (!validIncrementFields.includes(field)) throw `This field cannot be incremented: '${field}'.`;
  
  const item = cart[name];
  
  // Get field translation, if it exists
  field = getFieldTranslation(field);
  return objectSet(cart, name, objectSet(item, field, item[field] + 1));
}

const cart = objectSet({}, "thing", {});
console.dir(setFieldByName(cart, "thing", "price", "0.99"));
console.dir(setFieldByName(cart, "thing", "quantity", 1));
console.dir(setFieldByName(cart, "thing", "shipping", "Express"));
console.dir(setFieldByName(cart, "thing", "tax", "0.0495"));

console.dir(incrementFieldByName(cart, "thing", "quantity"))