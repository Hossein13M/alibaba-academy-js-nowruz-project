const warehouse = Warehouse([]);

function Product(id, name, price, count, sell = [], enable = true) {
  enable = isProductStockEmpty(count) ? false : enable;
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
  if (isProductDataValid({ id: productId }) !== true) return isProductDataValid({ id: productId })
  let indexOfProduct = findProduct(productId)
  if (indexOfProduct !== undefined) return JSON.stringify(warehouse[indexOfProduct]);
  return `product ${productId} is not available!`;
}

function addNewProduct(product) {
  if (isProductDataValid({ ...product }, "create") !== true) return isProductDataValid({ ...product }, "create")
  warehouse.push(product);
  return product.name + " is added!";
}

function sellProduct(productId, count = 1) {
  if (isProductDataValid({ id: productId, count }) !== true) return isProductDataValid({ id: productId, count })
  let indexOfProduct = findProduct(productId)
  if (indexOfProduct !== undefined) {
    let product = warehouse[indexOfProduct]
    if (product.enable && isInRange(product.count, count)) {
      warehouse[indexOfProduct].count -= count;
      warehouse[indexOfProduct].sell.push({ count, price: product.price });
      warehouse[indexOfProduct].enable = isProductStockEmpty(product.count) ? false : product.enable;
      return `${count} ${product.name} sold!`;
    }
  }
  return `product ${productId} is not available or enough!`;
}

function availableProduct() {
  return JSON.stringify(warehouse
    .map((product) => {
      return product.count > 0 && product;
    })
    .filter((product) => product));
}

function changeProductMode(productId, enable) {
  if (isProductDataValid({ id: productId, enable }) !== true) return isProductDataValid({ id: productId, enable })
  let indexOfProduct = findProduct(productId)
  if (indexOfProduct !== undefined) {
    let product = warehouse[indexOfProduct]
    enable !== undefined
      ? (warehouse[indexOfProduct].enable = !product.enable)
      : (warehouse[indexOfProduct].enable = enable);
    return `${product.name} ${warehouse[indexOfProduct].enable ? "enabled" : "disabled"}!`;
  }
  return `product ${productId} is not available!`;
}

function changeProductCount(productId, count) {
  if (isProductDataValid({ id: productId, count }) !== true) return isProductDataValid({ id: productId, count })
  let indexOfProduct = findProduct(productId)
  if (indexOfProduct !== undefined) {
    warehouse[indexOfProduct].count = count;
    return `count of ${warehouse[indexOfProduct].name} changed to ${count}!`;
  }
  return `product ${productId} is not available!`;
}

function findProduct(productId) {
  if (isProductDataValid({ id: productId }) !== true) return isProductDataValid({ id: productId })
  for (const productIndex in warehouse) {
    if (warehouse[productIndex].id === productId) {
      return productIndex;
    }
  }
}

function editProduct(productId, newParams) {
  if (isProductDataValid({ ...newParams }, "edit") !== true) return isProductDataValid({ ...newParams }, "edit")
  console.warn("warning: this function can change or delete important data!");
  let { name, price, count, sell, enable } = newParams;
  let indexOfProduct = findProduct(productId)
  if (indexOfProduct !== undefined) {
    if (name !== undefined) warehouse[indexOfProduct].name = name;
    if (price !== undefined) warehouse[indexOfProduct].price = price;
    if (count !== undefined) warehouse[indexOfProduct].count = count;
    if (sell !== undefined) warehouse[indexOfProduct].sell = sell;
    if (enable !== undefined) warehouse[indexOfProduct].enable = enable;
    return `product ${productId} changed!`;
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
  if (isProductDataValid({ id: productId }) !== true) return isProductDataValid({ id: productId })
  let total = 0;
  const detailofSoldProduct = [];
  let indexOfProduct = findProduct(productId)
  if (indexOfProduct !== undefined) {
    for (const soldData of warehouse[indexOfProduct].sell) {
      detailofSoldProduct.push({ price: soldData.price, count: soldData.count })
      total += soldData.price * soldData.count;
    }
    return JSON.stringify({ total, detailofSoldProduct });
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
  return typeof value === trueType
}

function isInRange(value, min = Infinity, max = Infinity) {
  return value >= min && value <= max;
}

function isProductStockEmpty(count) {
  if (count === 0) return true;
  return false;
}

function isProductDataValid({ ...params }, mode) {
  let { id, name, price, count, enable } = params
  if (mode === "create" && checkRequiredDataExists(id, name, price, count) !== true) return checkRequiredDataExists(id, name, price, count)
  if (id !== undefined && isIdValid(id, mode) !== true) return isIdValid(id, mode)
  if (name !== undefined && !isTypeValid(name, "string")) return "name should be a string!";
  if (price !== undefined && isCountOrPriceValid(price) !== true) return isCountOrPriceValid(price)
  if (count !== undefined && isCountOrPriceValid(count) !== true) return isCountOrPriceValid(count)
  if (enable !== undefined && !isTypeValid(enable, "boolean")) return "enable should be a boolean!";
  return true;
}

function isIdValid(id, mode) {
  if (!isTypeValid(id, "number")) return "id should be a number!";
  if (mode === "create" && findProduct(id)) return "id should be unique!";
  if (mode === "edit") return "you can't change id!";
  return true
}

function isCountOrPriceValid(count) {
  if (!isTypeValid(count, "number")) return "count and price must be number!";
  if (!isInRange(count, 0)) return "count or price is out of range!";
  return true
}

function checkRequiredDataExists(id, name, price, count) {
  if (id === undefined || name === undefined || price === undefined || count === undefined) return "some data missed!"
  return true
}

// test case
console.log(addNewProduct(Product(1)));
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
console.log(`price of product5 that have been sold: ${calcSoldProductValue(5)}`);
console.log(`price of product5 that have been sold: ${calcSoldProductValue(2)}`);
console.log(`warehouse's value: ${calcValueOfWarehouse()}`);
console.log(warehouse);
