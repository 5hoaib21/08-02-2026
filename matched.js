const products = [
  { id: 1, name: "xiaomi phone ", price: 19001 },
  { id: 2, name: "xiaomi laptop 2", price: 19002 },
  { id: 3, name: "xiaomi phone 3", price: 19003 },
  { id: 4, name: "xiaomi laptop 4", price: 19004 },
  { id: 5, name: "xiaomi Phone 5", price: 19005 },
  { id: 6, name: "xiaomi laptop 6", price: 19006 },
  { id: 7, name: "M1 chip not a cheap lapTOp", price: 19006 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "laptop");
console.log(result);
