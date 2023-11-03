const sumAll = function(num, numtwo) {
    let sum = 0;
    for (let index = 0; index <= numtwo; index++){
        if(num <= numtwo){
            sum += index;
        };
    };
    return sum;
};
// Do not edit below this line
module.exports = sumAll;

