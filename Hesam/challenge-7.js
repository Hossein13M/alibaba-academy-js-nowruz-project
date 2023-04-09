let products = [
    {name: "item1", count: 20, price: 50, enabled: true},
    {name: "item2", count: 15, price: 25, enabled: true},
    {name: "item3", count: 25, price: 70, enabled: false},
    {name: "item4", count: 0, price: 15, enabled: true}
  ]
  
  
  //* 1
  function sumCount() {
    let sum = 0
    for( let i = 0; i < products.length; i++) {
      sum += products[i].count
    }
    return sum
  }
  console.log(sumCount());
  
  //* 2
  function addItem(name, count, price, enabled, productsArr) {
    if(productsArr.some((productName) => productName.name === name)) {
      console.log(`the ${name} is already exited`);
      return
    }
    let newItem = {
      name: name,
      count: count,
      price: price,
      enabled: enabled
    }
    productsArr.push(newItem)
    return newItem
  }
  const result1 = addItem('item5', 75, 54, true, products)
  console.log(products);
  
  //* 3
  function sellItems(name, count) {
    for( let i = 0; i < products.length; i++) {
      if(products[i].name === name){
        if(products[i].count >= count) {
            products[i].count -= count
            console.log(`${count} from ${name} sold`); 
            return
        } else {
          return `there are not enough ${name}`
        }
      }
    }
    console.log(`${name} is not found`);
  }
  const result = sellItems("item4", 11)
  console.log(result);
  
  //* 4
  function availableListItems() {
    let availableItems = []
    for( let i = 0; i < products.length; i++) {
      if(products[i].count > 0 && products[i].enabled) {
          availableItems.push(products[i])
      }
    }
    return availableItems;
  }
  console.log(availableListItems());
  
  //* 5
  
  
  
  //* 6
  function editCount(name, editCount) {
    for( let i = 0; i < products.length; i++) {
      if(products[i].name === name) {
        products[i].count = editCount
      }
    }
    return editCount
  }
  console.log(editCount("item4", 44));
  
  //* 7 
  function editName(name, newName) {
    for(let i = 0; i < products.length; i++) {
      if(products[i].name === name) {
        products[i].name = newName
        return 'name updated'
      }
    }
    return 'user not found'
  }
  console.log(editName("item3", "ali"));
  console.log(products);
  
  
  //* 8
  function calculatePriceOfSoldItems(soldItem) {
    let totalPrice = 0
    for(let i = 0; i < soldItem.length; i++) {
      const item = products.find((product) => product.name === soldItem[i].name)
      if(item) {
        totalPrice += item.price * soldItem[i].count
      }
    }
    return totalPrice;
  }
  
  const soldItem = [
    {name: "item1", count: 3},
    {name: "item3", count: 2},
  ]
  
  console.log(calculatePriceOfSoldItems(soldItem));
  
  //* 9
  function allItemsprice() {
    let totalPrice = 0
    for(let i = 0; i < products.length; i++) {
      if(products[i].count > 0) {
        totalPrice += products[i].price * products[i].count
      } else {
        console.log('item isnt available');
      }
    }
    return totalPrice;
  }
  console.log(allItemsprice());
  