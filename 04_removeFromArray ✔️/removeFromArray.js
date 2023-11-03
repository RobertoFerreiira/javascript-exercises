const removeFromArray = function(arr, num) {
    let arr2 = [];
    arr.forEach((item) => {
        if(item !== num){
            arr2.push(item)
        }
    })
    return arr2;
};
console.log(removeFromArray([1,2,3,4], 3))
// Do not edit below this line
module.exports = removeFromArray;
