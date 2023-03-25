function Product(itemName, count, price, isEnable=true) {
    return({
        "name" : itemName,
        "count" : count,
        "price" : price,
        "isEnable" : isEnable
    })
}


// 1
function getAllCounts() {
    var res = [];
    for(var item of products){
        console.log(`${item.name} : ${item.count}`);
        res.push(`${item.name} : ${item.count}`);
    }
    return res;
}

// 2
function newItem(name,count){
    var item = Product(name, count, 0)
    products.push(item)
    return item;
}

// 3
function sell(itemName){
    for(var item of products){
        if (item.name == itemName){
            if (item.count == 0) {
                return "can't sell a product with 0 count"
            }else{
                soldItems.push(item)
                item.count = item.count - 1 ;
                return item;
            }
        }
    }
}

// 4
function getAvailableFunctions() {
    var res = []
    for(var item of products){
        if (item.count == 0 ){
            continue;
        }
        res.push(item)
    }
    return res;
}

// 5
function toggleStatus(itemName) {
    for(var item of products){
        if(item.name == itemName){
            (item.isEnable) ? item.isEnable = false : item.isEnable = true ;
            return item;
        }
    }
}

// 6
function newCount(itemName, newCount){
    for(var item of products){
        if(item.name == itemName){
            item.count = newCount;
            return item;
        }
    }
}

// 7
function editItemName(itemName, newItemName) {
    for(var item of products){
        if(item.name == itemName){
            item.name = newItemName;
            return item;
        }
    }
}

// 8
function calculateEarnedMoney() {
    var sum = 0;
    for(var item of soldItems){
        sum = sum + item.price;
    }
    return sum;
}

// 9
function getWarehouseValue(){
    var sum = 0;
    for(var item of products){
        sum = sum + item.price;
    }
    return sum;
}

let products = []
let soldItems = []
products.push(Product("item 1", 12, 4_000))
getAllCounts()
console.log("---------------------------")
newItem("secondFunctionTest", 12);
newItem("zeroCountItem", 0);
getAllCounts()
console.log("---------------------------")
sell("item 1")
getAllCounts()
console.log("---------------------------")
console.log(getAvailableFunctions())
console.log("---------------------------")
toggleStatus("item 1")
console.log(getAvailableFunctions())
toggleStatus("item 1")
console.log(getAvailableFunctions())
console.log("---------------------------")
console.log(calculateEarnedMoney())
console.log("---------------------------")
console.log(getWarehouseValue())