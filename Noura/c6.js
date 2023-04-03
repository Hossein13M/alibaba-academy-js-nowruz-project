//Write down a function that gets a number from the user and then print a pyramid consisting of "*" based on the user's input number. 


function pyramid(n, row=0, str=''){

    if(row === n){
        return;
    }

    if(str.length === (n * 2) - 1){
        console.log(str);
        pyramid(n, row+1)
        return;
    }

    const midpoint = Math.floor(((n * 2) -1) / 2)

    let add;

    if(midpoint - row <= str.length && midpoint + row >= str.length){
        add = '*'
    }else{
        add = ' '
    }

    pyramid(n, row, str + add)
}

pyramid(4)