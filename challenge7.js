const warehouse = {
    products: [
        { id: 1, name: "Shoes", count: 10, price: 120, enabled: true },
        { id: 2, name: "Socks", count: 5, price: 15, enabled: true },
        { id: 3, name: "Jeans", count: 0, price: 320, enabled: false },
        { id: 4, name: "Coat", count: 36, price: 456, enabled: false },
        { id: 5, name: "Cap", count: 25, price: 64, enabled: true },
    ],
    soldProducts: [],
};
function showAllProducts(products) {
    for (const item of products) {
        console.log(item);
    }
}
function getTotalCount() {
    console.log(`The total count in warehouse is ${ warehouse.products.reduce(
        (totalCount, product) => totalCount + product.count,0)
    }`);
}
function getNextProductId() {
    return warehouse.products.length + 1;
}
function createNewItem(name, count, price, enabled) {
    const id = getNextProductId();
    const newItem = { id, name, count, price, enabled };
    warehouse.products.push(newItem);
    console.log("New item created!");
    showAllProducts(warehouse.products);
}
function sellItem(productId, quantity) {
    const product = warehouse.products.find(
        (product) => product.id === productId
    );
    if (product && product.count >= quantity) {
        product.count -= quantity;
        warehouse.soldProducts.push({
            id: productId,
            quantity,
            price: product.price,
        });
        console.log(
            `Sold ${quantity} ${product.name} .totalCost is : ${quantity * product.price}$.`
        );
        showAllProducts(warehouse.products);
    } else {
        console.log(
            `Unable to sell ${quantity} of ${
                product ? product.name : "unknown product"
            } (not enough stock).`
        );
    }
}
function listAvailableProducts() {
    const availableProducts = warehouse.products.filter(
        (product) => product.count > 0
    );
    if (availableProducts.length > 0) {
        showAllProducts(availableProducts);
    } else {
        console.log("There are no available products.");
    }
}
function toggleProductEnabled(productId, isEnabled) {
    const product = warehouse.products.find(
        (product) => product.id === productId
    );
    if (product) {
        product.enabled = isEnabled;
        console.log(
            `The item "${product.name}" is now ${
                isEnabled ? "enabled" : "disabled"
            }.`
        );
        showAllProducts(warehouse.products);
    } else {
        console.log("Product not found.");
    }
}
function changeProductCount(productId, newCount) {
    const product = warehouse.products.find(
        (product) => product.id === productId
    );
    if (product) {
        product.count = newCount;
        console.log(
            `The count of "${product.name}" has been changed to ${newCount}.`
        );
        showAllProducts(warehouse.products);
    } else {
        console.log("Product not found.");
    }
}
function editProduct(productId, newName, newCount, newPrice, isEnabled) {
    const productIndex = warehouse.products.findIndex(
        (product) => product.id === productId
    );
    if (productIndex !== -1) {
        const product = warehouse.products[productIndex];
        product.name = newName !== undefined ? newName : product.name;
        product.count = newCount !== undefined ? newCount : product.count;
        product.price = newPrice !== undefined ? newPrice : product.price;
        product.enabled = isEnabled !== undefined ? isEnabled : product.enabled;
        console.log(`Product with id ${productId} has been updated:`);
        console.log(product);
    } else {
        console.log(`Product with id ${productId} not found.`);
    }
}
function calculateSoldItemsPrice() {
    sellItem(2,2)
    let totalPrice = 0;
    for (const soldItem of warehouse.soldProducts) {
        totalPrice += soldItem.quantity * soldItem.price;
    }
    console.log(`The total price of sold items is ${totalPrice}.`);
}
function calculateWarehouseValue() {
    let totalValue = 0;
    for (const availableItem of warehouse.products) {
        if (availableItem.count > 0) {
            totalValue += availableItem.count * availableItem.price;
        }
    }
    console.log(
        `The total value of available items in the warehouse is ${totalValue}$.`
    );
}


// showAllProducts(warehouse.products);
// getTotalCount();
// createNewItem('T-shirt',45,69,false);
// sellItem(5,24);
// sellItem(5,26);
// listAvailableProducts();
// toggleProductEnabled(1,false)
// changeProductCount(2,6)
// changeProductCount(8,12)
// editProduct(1,'shoes ',18,undefined ,false)
// calculateSoldItemsPrice()    
calculateWarehouseValue();