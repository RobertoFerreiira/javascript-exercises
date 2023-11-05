const removeFromArray = function(arr, num, numtwo, numthree, numfour) {
    let arr2 = [];
    arr.forEach((item) => {
        if(item !== num && item !== numtwo && item !== numthree && item !== numfour){
            arr2.push(item)
        }
    })
    return arr2;
};
module.exports = removeFromArray;
