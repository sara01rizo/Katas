// Solution V1
function getTotalPrice(groceries) {
  return Number(
    groceries
      .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
      .toFixed(2)
  );
}

console.log(getTotalPrice([{ product: 'Milch', quantity: 1, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: 'Milch', quantity: 1, price: 1.5 },
    { product: 'Butter', quantity: 1, price: 2.5 },
  ])
);
console.log(getTotalPrice([{ product: 'Milch', quantity: 3, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: 'Milch', quantity: 1, price: 1.5 },
    { product: 'Eier', quantity: 12, price: 0.1 },
    { product: 'Brot', quantity: 2, price: 1.6 },
    { product: 'Käse', quantity: 1, price: 4.5 },
  ])
);
console.log(
  getTotalPrice([
    { product: 'Saft', quantity: 1, price: 0.1 },
    { product: 'Bier', quantity: 1, price: 0.2 },
  ])
);
