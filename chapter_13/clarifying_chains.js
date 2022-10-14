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

function biggestPurchasesBestCustomers(customers) {
  const bestCustomers = filter(customers, function(customer) {
    return customer.purchases.length > 3;
  });

  const biggestPurchases = map(bestCustomers, function(customer) {
    return reduce(customer.purchases, {total: 0}, function(biggestSoFar, purchase) {
      if (biggestSoFar.total > purchase.total) {
        return biggestSoFar;
      } else {
        return purchase;
      }
    });
  });
  return biggestPurchases;
}