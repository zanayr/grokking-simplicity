function map(array, f) {
  const newArray = [];
  forEach(array, element => newArray.push(f(element)));
  return newArray;
}

function emailsForCustomers(customers, goods, bests) {
  return map(customers, customer => emailForCustomer(customer, goods, bests));
}

function customerFullNames(customers) {
  return map(customers, customer => `${customer.firstName} ${customer.lastName}`);
}

function biggestPurchasePerCustomer(customers) {
  return map(customers, customer => biggestPurchase(customer));
}

function customerCities(customers) {
  return map(customers, customer => customer.address.city);
}