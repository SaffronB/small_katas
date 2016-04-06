var assert = require("assert");
var traffic = require("../traffic.js")

describe("For the Traffic Ligt Dash", function() {

  it("I need to shorten the strings and put them into seperate arrays", function() {
    var result = traffic.lights('There are 9 traffic lights on my way to work. On my way in 3 were red, 2 were green.');
    assert.deepEqual(result, [ 'On my way in 3 were red, 2 were green.' ]);

  });

  it("I need to create a colour map using the second string", function() {
    var result = traffic.colourMap([ 'On my way in 3 were red, 2 were green.' ]);
    assert.deepEqual(result, [ { colour: 'red', number: 3 }, { colour: 'green', number: 2 } ]);

  });

  it("I need to display the total number of traffic lights using the first string", function() {
    var result = traffic.totalTrafficLights([ 'There are 9 traffic lights on my way to work' ]);
    assert.equal(result, 9);

  });

  it("I need to create a function that finds the remaining lights that are orange", function() {
    var result = traffic.trafficLightCalculator(9, [ { colour: 'red', number: 3 }, { colour: 'green', number: 2 } ]);
    assert.equal(result, 4);

  });



});
