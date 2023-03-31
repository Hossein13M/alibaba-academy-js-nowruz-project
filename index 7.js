"use strict"

const items = [
    {
        title: "Airpod",
        price: 139.99,
        quantity: 6,
        isEnable: true,
    },
    {
        title: "Iphone 14 pro max",
        price: 1299,
        quantity: 2,
        isEnable: true,
    },
    {
        title: "MSI Laptop",
        price: 2599,
        quantity: 4,
        isEnable: true,
    },
    {
        title: "Samsung Galaxy A73",
        price: 348,
        quantity: 12,
        isEnable: true,
    },
    {
        title: "Sony Playstation 5",
        price: 499.99,
        quantity: 1,
        isEnable: true,
    }
];

const soldItems = [];

function quantityOfEachItem() {
    items.forEach((item) => {
        console.log(`${item.title} : ${item.quantity}`);
    });
}

// quantityOfEachItem();

function insertNewItem(title, price, quantity, isEnable) {
    items.push({
        title,
        price,
        quantity,
        isEnable
    });
    console.log(`${title} has been successfully added`);
}

// insertNewItem("Gaming Mouse",200,5,false);

function sell(itemTitle) {
    for (const item of items) {
        if (itemTitle.toLowerCase() === item.title.toLowerCase() && item.quantity > 0) {
            item.quantity--;
            soldItems.push(item);
            return "Your Purchase Was Successful";
        }
    }
    return "Product was not found";
}

// console.log(sell("samsung galaxy a73"));

function showAvailableItems() {
    items.forEach((item) => {
        if (item.quantity > 0) {
            console.log(`${item.title}`);
        }
    })
}

// showAvailableItems();

function disableEnable(itemTitle, desiredStatus) {
    for (const item of items) {
        if (itemTitle.toLowerCase() === item.title.toLowerCase()) {
            item.isEnable = desiredStatus;
            return "Done";
        }
    }
    return "Product Was Not Found";
}

// console.log(disableEnable("samsung galaxy a73",false));

function quantityChanger(itemTitle, newQuantity) {
    for (const item of items) {
        if (itemTitle.toLowerCase() === item.title.toLowerCase()) {
            item.quantity = newQuantity;
            return "Done";
        }
    }
    return "Product Was Not Found";
}

// console.log(quantityChanger("samsung galaxy a73",26));

function editTitle(itemTitle, newItemTitle) {
    for (const item of items) {
        if (itemTitle.toLowerCase() === item.title.toLowerCase()) {
            item.title = newItemTitle;
            return "Done";
        }
    }
    return "Product Was Not Found";
}

// console.log(editTitle("samsung galaxy a73","A73"));

function sumOfAllSoldItems() {
    let sum = 0;
    for (const item of soldItems) {
        sum += item.price;
    }
    return `${sum}$`
}

// console.log(sumOfAllSoldItems());

function warehouseValue() {
    let sum = 0;
    for (const item of items) {
        sum += item.price;
    }
    return `${sum}$`
}

// console.log(warehouseValue());