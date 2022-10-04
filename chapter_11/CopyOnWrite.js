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

// Now it's your turn. Write a new fucntion `withObjectCopy`
// and use it to re-implement these two object copy-on-write
// funtions
function withObjectCopy() {
  
}

function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function objectDelete(object, key) {
  const copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

// Call functions
console.log(objectSet({}, "foo", "bar").foo === "bar");
console.log(objectDelete({ apple: 1, orange: 2 }, "apple").apple === undefined);