  //? Challenge 1
  for (let i = 2; i < 100; i++) {
    let isPrime = true
    for(let j = 0; j < i; j++) {
      if(i % j === 0) {
        isPrime = false
        break;
      }
    }
    if(isPrime) {
      console.log(i);
    }
  }

  




  
    