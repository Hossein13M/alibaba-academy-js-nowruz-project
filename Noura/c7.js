//We have a warehouse system which we stock some products in it. We desire to get each product's count, price, and name. We may sell a product, which results in decreasing the product's count. We also need to enable/disable items from the warehouse.

let items = [
    {
        name: "item1",
        price: 34,
        count: 10,
        enabled: true
    },
    {
        name: "item2",
        price: 81,
        count: 5,
        enabled: true
    },
    {
        name: "item3",
        price: 11,
        count: 0,
        enabled: false
    },
    {
        name: "item4",
        price: 60,
        count: 17,
        enabled: true
    }
]

//#1 - Write a function to get the count of all the items in the warehouse combined. (item1 count + item2 count + ...).

function totalCount() {
    let sum = 0
    for (const item of items) {
        sum += items.count
    }
    return sum
}

//#2 - Declare a function to create a new item with the given count.

function createNewItem(name, price, count, enabled) {
    items.push({
        name, price, count, enabled
    });
}

//#3 - We need to have a function for selling the items.

function sell(name) {
    for (const item of items) {
        if (items.name === name) {
            if (items.count === 0) {
                return "Sorry! We can't sell you this product :("
            }
            else {
                soldItems.push(item)
                items.count = items.count - 1;
                return "Done!"
            }
        }
    }
}

//#4 - Write down a function to give a list of all the items that they are available (their count is above 0).

function availableItemsList() {
    let availableItems = []
    for (let i = 0; i < items.length, i++) {
        if (items[i].count > 0) {
            availableItems.push(items[i])
        }
    }
    return availableItems
}



//#5 Write down a function to disable/enable an item from the warehouse.

function enabledDisabled(name) {
    for (const item of items) {
        if (items.name === name) {
            items.enabled ? items.enabled = false : items.enabled = true;
            return items
        }
    }
}

//#6 - Write down a function to change the count of an item from the warehouse.

function newCount(name, newCount) {
    for (const item of items) {
        if (items.name === name) {
            item.count = newCount;
            return items
        }
    }
}

//#7 - We need to have a function to edit the item from the warehouse for example their name.

function editName(name, newName) {
    for (const items of items) {
        if (items.name === name) {
            items.name = newName;
            return items
        }
    }
}

//#8 - Declare a function to calculate price of all the items that have been sold. (For this you need to store the items that have been sold in an array or something)

function soldItemsPrice() {
    let sum = 0;
    for (const item of soldItems) {
        sum += items.price;
    }
    return sum;
}

//#9 - We need to check the warehouse's value by calculating the price of all the available items.

function warehouseValue() {
    let sum = 0;
    for (const item of items){
        sum += item.price;
    }
    return sum;
}