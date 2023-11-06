const convertToCelsius = function(tempInFahrenheit) {
  let tempCel = (tempInFahrenheit - 32) / 1.8;
  
  if(tempCel > 0){
      return parseFloat(tempCel.toFixed(1));
    } else {
      return parseFloat(tempCel.toFixed(1));
    }
};

const convertToFahrenheit = function(tempInCelsius) {
    let tempFah = (tempInCelsius * 1.8) + 32;

    if(tempFah > 0){
      return parseFloat(tempFah.toFixed(1));
    } else {
      return parseFloat(tempFah.toFixed(1));
    }
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
