const warehouse = Warehouse([]);

function Product(id, name, price, count, sell = [], enable = true) {
  if (count === 0) enable = false;
  return {
    id,
    name,
    count,
    price,
    enable,
    sell,
  };
}

function Warehouse(products = []) {
  return products;
}

function warehouseStock() {
  let productsCount = 0;
  for (const product of warehouse) {
    productsCount += product.count;
  }
  return productsCount;
}

function productStock(productId) {
  if (!isTypeValid(productId, "number")) return "id should be a number!";
  for (const product of warehouse) {
    if (product.id === productId) {
      return product;
    }
  }
  return `product ${productId} is not available!`;
}

function addNewProduct(product) {
  if (findProduct(product.id)) return "id should be unique!";
  warehouse.push(product);
  return product.name + " is added!";
}

function sellProduct(productId, count = 1) {
  if (!isTypeValid(productId, "number")) return "id should be a number!";
  if (!isTypeValid(count, "number")) return "count must be number!";
  if (!isInRange(count, 0)) return "count is out of range!";
  for (const product of warehouse) {
    if (product.id === productId && product.enable && product.count >= count) {
      product.count -= count;
      product.sell.push({ count, price: product.price });
      if (product.count === 0) product.enable = false;
      return `${count} ${product.name} sold!`;
    }
  }
  return `product ${productId} is not available or enough!`;
}

function availableProduct() {
  return warehouse
    .map((product) => {
      return product.count > 0 && product;
    })
    .filter((product) => product);
}

function changeProductMode(productId, enable) {
  if (!isTypeValid(productId, "number")) return "id should be a number!";
  if (typeof enable !== "undefined" && !isTypeValid(enable, "boolean"))
    return "enable should be boolean";
  for (const product of warehouse) {
    if (product.id === productId) {
      enable !== undefined
        ? (product.enable = enable)
        : (product.enable = !product.enable);
      return `${product.name} ${product.enable ? "enabled" : "disabled"}!`;
    }
  }
  return `product ${productId} is not available!`;
}

function changeProductCount(productId, count) {
  if (!isTypeValid(productId, "number")) return "id should be a number!";
  if (!isTypeValid(count, "number")) return "count must be number!";
  if (!isInRange(count, 0)) return "count is out of range!";
  for (const product of warehouse) {
    if (product.id === productId) {
      product.count = count;
      return `count of ${product.name} changed to ${count}!`;
    }
  }
  return `product ${productId} is not available!`;
}

function findProduct(productId) {
  if (!isTypeValid(productId, "number")) return "id should be a number!";
  for (const product of warehouse) {
    if (product.id === productId) {
      return true;
    }
  }
  return false;
}

function editProduct(productId, newParams) {
  if (!isTypeValid(productId, "number")) return "id should be a number!";
  console.warn("warning: this function can change or delete important data!");
  let { id, name, price, count, sell, enable } = newParams;
  if (id) return "you can't change id";
  for (const product of warehouse) {
    if (product.id === productId) {
      if (name) product.name = name;
      if (price) product.price = price;
      if (count) product.count = count;
      if (sell) product.sell = sell;
      if (enable) product.enable = enable;
      return `product ${productId} changed!`;
    }
  }
  return `product ${productId} is not available!`;
}

function calcSoldProductsOfWarehouseValue() {
  let total = 0;
  for (const product of warehouse) {
    for (const soldData of product.sell) {
      total += soldData.price * soldData.count;
    }
  }
  return total;
}

function calcSoldProductValue(productId) {
  if (!isTypeValid(productId, "number")) return "id should be a number!";
  let total = 0;
  for (const product of warehouse) {
    if (product.id === productId) {
      for (const soldData of product.sell) {
        total += soldData.price * soldData.count;
      }
      return total;
    }
  }
  return `product ${productId} is not available!`;
}

function calcValueOfWarehouse() {
  let total = 0;
  for (const product of warehouse) {
    total += product.price * product.count;
  }
  return total;
}

function isTypeValid(value, trueType) {
  if (typeof value === trueType) return true;
  return false;
}
function isInRange(value, min = Infinity, max = Infinity) {
  return value >= min && value <= max;
}

// test case
console.log(addNewProduct(Product(1, "product1", 100, 100)));
console.log(addNewProduct(Product(1, "product1", 100, 100)));
console.log(addNewProduct(Product(2, "product2", 10, 5, [], false)));
console.log(addNewProduct(Product(3, "product3", 110, 10)));
console.log(addNewProduct(Product(4, "product4", 120, 10)));
console.log(addNewProduct(Product(5, "product5", 150, 1)));
console.log(addNewProduct(Product(7, "product7", 150, 0)));
console.log(`count of all the items in the warehouse combined: ${warehouseStock()}`);
console.log(addNewProduct(Product(6, "product6", 100, 100)));
console.log(`product 2: ${productStock(2)}`);
console.log(`requesting 5 item of product 2: ${sellProduct(2, 5)}`);
console.log(`product 5: ${productStock(5)}`);
console.log(`requesting 5 item of product 5:  ${sellProduct(5, 5)}`);
console.log(`requesting 1 item of product 5: ${sellProduct(5, 1)}`);
console.log(`requesting 1 item of product 5: ${sellProduct(5, 1)}`);
console.log(`requesting 5 item of product 1: ${sellProduct(1, 5)}`);
console.log(editProduct(1, { price: 30 }));
console.log(`requesting 10 item of product 1: ${sellProduct(1, 10)}`);
console.log(changeProductMode(4, false));
console.log(changeProductMode(4, true));
console.log(changeProductMode(4, "true"));
console.log(changeProductMode(4));
console.log(`available products: ${availableProduct()}`);
console.log(changeProductCount(8, 10));
console.log(changeProductCount(3, 10));
console.log(editProduct(3, { name: "product-3", price: 20, count: 5 }));
console.log(editProduct(3, { id: 10, name: "product-10" }));
console.log(`price of all the items that have been sold: ${calcSoldProductsOfWarehouseValue()}`);
console.log(`price of product1 that have been sold: ${calcSoldProductValue(1)}`);
console.log(`warehouse's value: ${calcValueOfWarehouse()}`);
console.log(warehouse);
