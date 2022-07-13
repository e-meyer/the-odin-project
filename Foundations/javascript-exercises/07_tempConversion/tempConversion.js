const ftoc = function(fahrenheitTemperature) {

  let finalTemperature = (fahrenheitTemperature - 32) * (5/9); 

  return Number(finalTemperature.toFixed(1));                 // function in number was used because sometimes it would be returned as a string

};

const ctof = function(celciusTemperature) {
  
  let finalTemperature = (celciusTemperature * (9/5)) +32;    // function in number was used because sometimes it would be returned as a string

  return Number(finalTemperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
