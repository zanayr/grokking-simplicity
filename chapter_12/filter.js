function selectBestCustomers(customers) {
  const newArray = [];
  forEach(customers, customer => {
    if (customer.purchases.length >= 3) newArray.push(customer);
  });
  return newArray;
}