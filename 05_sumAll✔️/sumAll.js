const sumAll = function(num, numtwo) {
    let sum = 0;
    for(let index = 0; index <= num || index <= numtwo; index++) {
        if(num < 0 || numtwo < 0 || (typeof num !== "number" || typeof numtwo !== "number")){
            sum = "ERROR";
        } else if (num <= numtwo || num >= numtwo){
            sum += index;
        }
    }
    return sum;
};

console.log(sumAll(123,1))

// Do not edit below this line
module.exports = sumAll;
