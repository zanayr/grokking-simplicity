// Replace Body with a Callback Pattern Solution
function wrapLogging(fn) {
  return (arg) => {
    try {
      fn(arg);
    } catch(error) {
      console.error(`{ level: error, message: ${error} }`);
    }
  }
}

const saveUserDataWithLogging = wrapLogging(saveUserData);
const fetchProductWithLogging = wrapLogging(fetchProduct);

saveUserDataWithLogging(user);
fetchProductWithLogging(productId);

// It's Your Turn p. 285
// Write a function that transforms the function you pass it into a function that
// catches and ignores all errors
// If there is an error, just return `null`
// Maket it work on functions of at least three (3) arguments

// HINT: You normally ignore errors by wrapping code in a try/catch block and doing
//       nothing in the catch

function wrapIgnoreErrors(fn) {
  return (...args) => {
    try {
      fn(...args);
    } catch(_) {
      // console.error(`{ level: error, message: ${error} }`);
      return null;
    }
  }
}

console.log(!!wrapIgnoreErrors((a, b, c) => {
  console.log(a, b, c);
  throw `Error!`;
})(1, 2, 3));

// It's Your Turn p. 286
// Write a function called `makeAdder` that makes a function to add a number to
// another number

function makeAdder(n) {
  return x => n + x;
}

console.log(makeAdder(1)(1) === 2);