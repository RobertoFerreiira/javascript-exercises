const add = function(a, b) {
    return a + b;
} 

const subtract = function(a, b) {
    return a - b;
};

const sum = function(sum) {
  let sumNum = 0;
  for (let index = 0; index < sum.length; index++) {
      sumNum += sum[index];
  }
  return sumNum;
};

const multiply = function(nums) {
    let sumNum = 1;
    for (let index = 0; index < nums.length; index++) {
        sumNum *= nums[index];
    }
    return sumNum;
}

const power = (a, b) => Math.pow(a, b);

const factorial = function(num) {
    let result = 1;
    for (index = 1; index <= num; index++) {
        result *= index;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
