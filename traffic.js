exports.lights = function(originalString) {
  var twoStrings = originalString.split(". ");

  for (var i = 0; i < twoStrings.length; i++) {
    var firstString = [];
    var secondString = [];
    firstString.push(twoStrings[0]);
    secondString.push(twoStrings[1]);
  }
  console.log(firstString);
  return secondString;
};

exports.colourMap = function(secondString) {

  var backToOneString = secondString.join('');
  var colourVar = backToOneString.replace('On my way in ', '').replace(/ were/g, '').replace('.', '').split(', ');


  var colourArrays = [];
  colourVar.forEach(function(seperateStrings) {
    colourArrays.push(seperateStrings.split(" "));
  })
  var colourLights = [];
  for (var i = 0; i < colourArrays.length; i++) {
    var colours = {
      colour: colourArrays[i][1],
      number: Number(colourArrays[i][0]),
    }
    colourLights.push(colours)
  };

  return colourLights;
};

exports.totalTrafficLights = function(firstString) {

  var backToString = firstString.join('');
  var totalTL = Number(backToString.replace("There are", "").replace(" traffic lights on my way to work", ""));
  console.log(totalTL);
  return totalTL;

};

exports.trafficLightCalculator = function(totalTrafficLights, colourLights) {
for (var i=0; i<colourLights.length; i++) {
var notOrange = colourLights[0].number + colourLights[1].number;
}
var orangeLights = totalTrafficLights - notOrange;
console.log(orangeLights);

return (orangeLights);
};
