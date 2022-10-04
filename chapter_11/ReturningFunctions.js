// Replace Body with a Callback Pattern Solution
function withLogging(fn) {
  try {
    fn();
  } catch(error) {
    logToSnapErrors(error);
  }
}

withLogging(() => saveUserData(user));
withLogging(() => fetchProduct(productId));