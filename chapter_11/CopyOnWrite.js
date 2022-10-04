// Apply the Replace Body with Callback Refactoring pattern
// to the `arraySet` function from chapter 6 using the new
// function `withArrayCopy`
function arraySet(array, idx, value) {
  let copy = array.slice();
  copy[idx] = value;
  return copy;
}

function withArrayCopy() {

}

// Apply the Replace Body with Callback Refactoring pattern
// to the following "Copy On Write" functions
function push(array, elem) {
  let copy = array.slice();
  copy.push(elem);
  return copy;
}

function dropLast(array) {
  let copy = array.slice();
  copy.pop();
  return copy;
}

function dropFirst(array) {
  let copy = array.slice();
  copy.shift();
  return copy;
}