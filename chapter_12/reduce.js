// Reduce function here
function reduce(array, init, f) {
  const accum = init;
  forEach(array, element => {
    accum = f(accum, element);
  });
  return accum;
}

function countAllPurchases(customers) {
  return reduce(customers, 0, (total, customer) => total + customer.purchases.length);
}