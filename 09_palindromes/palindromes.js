const palindromes = function (string) {
    let reverseStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return reverseStr.split('').reverse().join('') == reverseStr;
}
    
// Do not edit below this line
module.exports = palindromes;
