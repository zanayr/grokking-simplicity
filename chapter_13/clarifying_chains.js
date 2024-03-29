function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    f(element);
  }
}

function filter(array, f) {
  const newArray = [];
  forEach(array, function(element) {
    if (f(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

function map(array, f) {
  const newArray = [];
  forEach(array, function(element) {
    f(element);
  });
  return newArray;
}

function reduce(array, init, f) {
  const accum = init;
  forEach(array, function(element) {
    accum = f(accum, element);
  });
  return accum;
}

function maxKey(array, init, f) {
  return reduce(array, init, function(biggestSoFar, element) {
    if (f(biggestSoFar) > f(element)) {
      return biggestSoFar;
    } else {
      return element;
    }
  });
}

// Name the callbacks
function isGoodCustomer(customer) {
  return customer.purchases.length >= 3;
}

function getPurchaseTotal(purchase) {
  return purchase.total;
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, getPurchaseTotal);
}

function biggestPurchasesBestCustomers(customers) {
  const bestCustomers = filter(customers, isGoodCustomer);
  const biggestPurchases = map(bestCustomers, getBiggestPurchase);
  return biggestPurchases;
}