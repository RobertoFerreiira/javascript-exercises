const fibonacci = function(fibo, numIndex) {
     num = parseInt(numIndex)

     for(let index = 4; index < numIndex; index++) {
         for(let second = 5; second < numIndex; second++) {
             fibo.push(fibo[index] + fibo[second]);
             index++
         }
     }
     if(num === 0){
           return 0;
     } else if(num > 0){
           return fibo[num-1]
     } else {
           return "OOPS"
     }
   
 };
 console.log(fibonacci([1, 1, 2, 3, 5, 8], "1"))

 //Do not edit below this line
module.exports = fibonacci;
