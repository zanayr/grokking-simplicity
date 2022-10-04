// Apply the Replace Body with Callback Refactoring pattern
// to the `arraySet` function from chapter 6 using the new
// function `withArrayCopy`
function arraySet(array, idx, value) {
  return withArrayCopy(array, copy => copy[idx] = value );
}

function withArrayCopy(array, fn) {
  const copy = array.slice();
  fn(copy);
  return copy;
}

// Apply the Replace Body with Callback Refactoring pattern
// to the following "Copy On Write" functions
function push(array, elem) {
  return withArrayCopy(array, copy => copy.push(elem));
}

function dropLast(array) {
  return withArrayCopy(array, copy => copy.pop());
}

function dropFirst(array) {
  return withArrayCopy(array, copy => copy.shift());
}

// Call functions
console.log(arraySet([1, 2, 3], 1, 4)[1] === 4);
console.log(push([1, 2, 3], 4)[3] === 4);
console.log(dropLast([1, 2, 3])[1] === 2);
console.log(dropFirst([1, 2, 3])[0] === 2);

// It's Your Turn p. 275
// Write a new fucntion `withObjectCopy`
// and use it to re-implement these two object copy-on-write
// funtions
function withObjectCopy(object, fn) {
  const copy = Object.assign({}, object);
  fn(copy);
  return copy;
}

function objectSet(object, key, value) {
  return withObjectCopy(object, copy => copy[key] = value );
}

function objectDelete(object, key) {
  return withObjectCopy(object, copy => delete copy[key])
}

// Call functions
console.log(objectSet({}, "foo", "bar").foo === "bar");
console.log(objectDelete({ apple: 1, orange: 2 }, "apple").apple === undefined);

// It's Your Turn p. 276
// Write a new `tryCatch` function that allows to have two
// dynamic bodys, in both the `try` block and `catch` block
try {
  sendEmail();
} catch(error) {
  logToSnapErrors(error);
}

function tryCatch() {}

// It's Your Turn p. 277
// Refactor an if statement with the Replace Body with
// Callback Refactoring pattern
const cart = { shoes: 2 };

if ([1, 2, 3].length() === 0) {
  console.log("Array is empty");
}

if (hasItem(cart, "shoes")) {
  setPriceByName(cart, "shoes", 0);
}

function when() {}

// It's Your Turn p. 278
// Add an else statement to your `when` function and
// rename it to `IF`
function IF() {}