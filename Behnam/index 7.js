"use strict"

const items = [
    {
        title: "Airpod",
        id: 1,
        price: 139.99,
        quantity: 6,
        isEnable: true,
    },
    {
        title: "Iphone 14 pro max",
        id: 2,
        price: 1299,
        quantity: 2,
        isEnable: true,
    },
    {
        title: "MSI Laptop",
        id: 3,
        price: 2599,
        quantity: 4,
        isEnable: true,
    },
    {
        title: "Samsung Galaxy A73",
        id: 4,
        price: 348,
        quantity: 12,
        isEnable: true,
    },
    {
        title: "Sony Playstation 5",
        id: 5,
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

function insertNewItem(title, price, quantity, isEnable, id = items.length + 1) {
    items.push({
        title,
        id,
        price,
        quantity,
        isEnable
    });
    console.log(`${title} has been successfully added`);
}

// insertNewItem("Gaming Mouse",200,5,false);

function sell(itemId) {
    for (const item of items) {
        if (itemId === item.id && item.quantity > 0) {
            item.quantity--;
            soldItems.push(item);
            return "Your Purchase Was Successful";
        }
    }
    return "Product was not found";
}

// console.log(sell(3));

function showAvailableItems() {
    items.forEach((item) => {
        if (item.quantity > 0) {
            console.log(`${item.title}`);
        }
    })
}

// showAvailableItems();

function disableEnable(itemId, desiredStatus) {
    for (const item of items) {
        if (itemId === item.id) {
            item.isEnable = desiredStatus;
            return "Done";
        }
    }
    return "Product Was Not Found";
}

// console.log(disableEnable(3,false));

function quantityChanger(itemId, newQuantity) {
    for (const item of items) {
        if (itemId === item.id) {
            item.quantity = newQuantity;
            return "Done";
        }
    }
    return "Product Was Not Found";
}

// console.log(quantityChanger(3,26));

function editTitle(itemId, newItemTitle) {
    for (const item of items) {
        if (itemId === item.id) {
            item.title = newItemTitle;
            return "Done";
        }
    }
    return "Product Was Not Found";
}

// console.log(editTitle(3,"A73"));

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