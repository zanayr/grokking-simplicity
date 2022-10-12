function emailsForCustomers(customers, goods, bests) {
  const emails = [];
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const email = emailsForCustomers(customer, goods, bests);
    emails.push(email);
  }
  return emails;
}

function customerFullNames(customers) {
  const fullNames = [];
  for (let i = 0; i < fullNames.length; i++) {
    const cust = customers[i];
    const name = `${cust.firstName} ${cust.lastName}`;
    fullNames.push(name);
  }
  return fullNames;
}

function biggestPurchasePerCustomer(customers) {
  const purchases = [];
  for(let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const purchase = biggestPurchase(customer);
    purchases.push(purchase);
  }
  return purchases;
}

function customerCities(customers) {
  const cities = [];
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const city = customer.address.city;
    cities.push(city);
  }
  return cities;
}