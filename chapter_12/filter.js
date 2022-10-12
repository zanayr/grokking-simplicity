function filter(array, f) {
  const newArray = [];
  forEach(array, element => {
    if (f(element)) newArray.push(element);
  });
  return newArray;
}

function selectBestCustomers(customers) {
  return filter(customers, customer => customer.purchases.length >= 3);
}