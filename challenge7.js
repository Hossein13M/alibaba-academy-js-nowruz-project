const warehouse = {
    products: [
        {id: 1, name: 'Shoes', count: 10, price: 120, enabled: true},
        {id: 2, name: 'Socks', count: 5, price: 15, enabled: true},
        {id: 3, name: 'Jeans', count: 0, price: 320, enabled: false},
    ],
    soldProduct : []
};
function showAllProducts(products){
    for (const item of products) {
        console.log(item);
    }
}
// - Write a function to get the count of all the items in the warehouse combined. (item1 count + item2 count + ...).
function getTotalCount() {
    let totalCount = 0;
    for (let i = 0; i < warehouse.products.length; i++) {
        totalCount += warehouse.products[i].count;
    }
    return totalCount;
}

// --------Declare a function to create a new item with the given count.
function createNewItem(name,count,price,enabled){
    const id = warehouse.products.length + 1
    const newItem = {
        id ,
        name ,
        count,
        price,
        enabled,
    }
    warehouse.products.push(newItem);
    console.log('newItem created !');
    // showAllProducts();
}
// ----We need to have a function for selling the items.
function sellItem (productId,quantity) {
    const index = warehouse.products.findIndex((item) => item.id === productId)
    const product = {...warehouse.products[index]}
    if (product.count >= quantity ) {
        product.count -= quantity;
        warehouse.soldProduct.push({id:productId,quantity:quantity,price:warehouse.products[index].price});
        console.log(warehouse.soldProduct);
        const AllItem = [...warehouse.products]
        AllItem[index] = product;
        console.log(`the Item sell is :${product.name} and the quantity saled is : ${quantity}`);
        showAllProducts(AllItem);
    }
    else{
        console.log('Unfortunately, the number of your selection is more than the products in stock');
    }
}

// ------- Write down a function to give a list of all the items that they are available (their count is above 0)
function listOfAvailable(){
    const availableProduct = []
    for (let i = 0; i < warehouse.products.length; i++) {
        if (warehouse.products[i].count > 0) {
            availableProduct.push(warehouse.products[i]);
        }        
    }
    if (availableProduct.length > 0) {
        showAllProducts(availableProduct);
    }else{
        console.log('there is not any product available');
    }
}

// ---------- Write down a function to disable/enable an item from the warehouse.

function enableProduct(productId) {
    for (let i = 0; i < warehouse.products.length; i++) {
        if (warehouse.products[i].id === productId) {
            warehouse.products[i].enabled = true;
            console.log('The Item is now available');
        }
    }
    showAllProducts(warehouse.products);
    return false;
}
function disableProduct(productId) {
    for (let i = 0; i < warehouse.products.length; i++) {
        if (warehouse.products[i].id === productId) {
            warehouse.products[i].enabled = false;
            console.log('The Item is now Un');
        }
    }
    showAllProducts(warehouse.products);
    return false;
}

// ------- - Write down a function to change the count of an item from the warehouse.

 
function changeProductCount(productId,newCount) {
    const productIndex = warehouse.products.findIndex((product) => product.id ===productId);
    if (productIndex === -1) {
        console.log('product not found 404');
        return;
    }
     const product =  warehouse.products[productIndex]
     product.count = newCount;
     console.log('product count changed ');
     showAllProducts(warehouse.products);
}

// - We need to have a function to edit the item from the warehouse for example their name.

function editProduct(productId,newName) {
    const productIndex = warehouse.products.findIndex((product) => product.id ===productId);
    if (productIndex === -1) {
        console.log('product not found 404');
        return;
    }
     const product =  warehouse.products[productIndex]
     product.name = newName;
     console.log('product name changed ');
     showAllProducts(warehouse.products);
}

// Declare a function to calculate price of all the items that have been sold.
//  (For this you need to store the items that have been sold in an array or something)

function caclPriceOfSoldItem(){
    let totalPrice = 0;
    warehouse.soldProduct.forEach((product) => totalPrice += (product.price * product.quantity))
    console.log('totalPrice is' , totalPrice);
    return totalPrice;
}

// We need to check the warehouse's value by calculating the price of all the available items. 
function availableProductValue(){
    let availableProduct = []
    let cost = 0 ;
    for (let i = 0; i < warehouse.products.length; i++) {
        if (warehouse.products[i].enabled) {
            availableProduct.push(warehouse.products[i]);
        }
    }
    for (let i = 0; i < availableProduct.length; i++) {
        cost += availableProduct[i].price
    }
    console.log(cost);
}
// availableProductValue();
// sellItem(1,2)
// createNewItem('Socks2',60,125,true)
// console.log(getTotalCount());
// disableProduct(3)
// listOfAvailable();
// changeProductCount(2,85)
// editProduct(2,'mmd')
// caclPriceOfSoldItem()