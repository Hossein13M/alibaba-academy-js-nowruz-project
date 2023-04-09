function Product(itemName, count, price, isEnable=true) {
    return({
        "id" : products.length + 1,
        "name" : itemName,
        "count" : count,
        "price" : price,
        "isEnable" : isEnable
    })
}


// 1
function getAllCounts() {
    const res = [];
    for(let item of products){
        console.log(`${item.name} : ${item.count}`);
        res.push(`${item.name} : ${item.count}`);
    }
    return res;
}

// 2
function newItem(name,count, newItem=0){
    const item = Product(name, count, newItem)
    products.push(item)
    return item;
}

// 3
function sell(itemName, id=-1){
    for(let item of products){
        if (item.name === itemName || item.id === id){
            if (item.count) {
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
    const res = []
    for(let item of products){
        if (item.count === 0 ){
            continue;
        }
        res.push(item)
    }
    return res;
}

// 5
function toggleStatus(itemName, id=-1) {
    for(let item of products){
        if(item.name === itemName || item.id === id){
            item.isEnable = !item.isEnable ;
            return item;
        }
    }
}

// 6
function newCount(itemName, newCount, id=-1){
    for(let item of products){
        if(item.name === itemName || item.id === id){
            item.count = newCount;
            return item;
        }
    }
}

// 7
function editItemName(itemName, newItemName, id=-1) {
    for(let item of products){
        if(item.name === itemName || item.id === id){
            item.name = newItemName;
            return item;
        }
    }
}

// 8
function calculateEarnedMoney() {
    let sum = 0;
    for(let item of soldItems){
        sum = sum + item.price;
    }
    return sum;
}

// 9
function getWarehouseValue(){
    let sum = 0;
    for(let item of products){
        sum = sum + item.price;
    }
    return sum;
}

const products = []
const soldItems = []
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
