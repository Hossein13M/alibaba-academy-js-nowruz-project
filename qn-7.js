// number one
const products = [
  { name: "Product 1", count: 10, price: 100 },
  { name: "Product 2", count: 5, price: 50 },
  { name: "Product 3", count: 20, price: 200 },
  { name: "Product 5", count: 0, price: 50 },

];

function getTotalItemCount() {
  let totalCount = 0;
  products.forEach((product) => {
    totalCount += product.count;
  });
  console.log(totalCount);
}
getTotalItemCount();

//   number two
function createNewItem(name, count, price) {
  const newItem = { name, count, price };
  products.forEach(item => {
  if(item.name !== newItem.name){
  products.push(newItem);

  }else{
    console.log("the product already exist.");
  }
});
 
  console.log("you added "+newItem.name +" sucsesfully" );
}

createNewItem("Product 4", 15, 150);
//   number three
function getAvailableItems() {
  console.log(products.filter((product) => product.count > 0)); 
}

getAvailableItems();
//   number four
function enableItem(name) {
  const item = products.find((product) => product.name === name);
  if (item) {
    item.count = 1;
    return item;
  }
}

function disableItem(name) {
  const item = products.find((product) => product.name === name);
  if (item) {
    item.count = 0;
    return item;
  }
}

console.log(enableItem("Product 2"));
console.log(disableItem("Product 3"));

//   number five

function changeItemCount(name, newCount) {
  const item = products.find((product) => product.name === name);
  if (item) {
    item.count = newCount;
    return item;
  }
}

console.log(changeItemCount("Product 2", 8));

//   number six

function editItem(name, newName, newCount, newPrice) {
  const item = products.find((product) => product.name === name);
  if (item) {
    item.name = newName;
    item.count = newCount;
    item.price = newPrice;
    return item;
  }
}

console.log(editItem("Product 2", "New Product 2", 8, 80));

//   number seven

const soldItems = [
  { name: "Product 1", count: 2 },
  { name: "Product 2", count: 3 },
];

function calculateSoldItemsPrice(soldItems) {
  let sum = 0;
  soldItems.forEach((soldItem) => {
    const item = products.find((product) => product.name === soldItem.name);
    if (item) {
      sum += item.price * soldItem.count;
    }
  });
  console.log(sum); ;
}

 calculateSoldItemsPrice(soldItems);

//   number eight
function calculateWarehouseValue() {
  let totalValue = 0;
  products.forEach((product) => {
    if (product.count > 0) {
      totalValue += product.count * product.price;
    }
  });
  return totalValue;
}

const warehouseValue = calculateWarehouseValue();
console.log(warehouseValue);
