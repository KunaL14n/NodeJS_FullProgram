function checkOut(val){
    let message ;
    let checkNum = 10;
    if (val > checkNum){
        message = (val + ' was larger than ' + checkNum);
    } else {
        message = (val + ' was smaller than ' + checkNum);
    }
    return message;
}

let counter = 3;
console.log(checkOut(counter));
counter++;
counter+=8;
console.log(checkOut(counter));
