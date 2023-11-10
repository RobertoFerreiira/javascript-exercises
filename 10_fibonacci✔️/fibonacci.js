const fibonacci = function(fibo, numIndex) {
     arr = fibo
     num = parseInt(numIndex)
     for(let index = 4; index < numIndex; index++) {
         for(let second = 5; second < numIndex; second++) {
            arr.push(arr[index] + arr[second])
            index++;
         } 
     }
     if(num === 0){
      return 0; }
     if(num < 0){
      return "OOPS"}
      return arr[num-1]
   
 };
 console.log(fibonacci([1, 1, 2, 3, 5, 8], 4))

 //Do not edit below this line
module.exports = fibonacci;
