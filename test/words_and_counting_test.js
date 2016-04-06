var assert = require("assert");
var words_and_counting = require("../words_and_counting.js");
var exampleSentence = "I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park."

describe("For the words and counting kata", function() {

  it("I need to create a function that finds all the numbers in a sentence ", function() {
    var result = words_and_counting.numbers(exampleSentence);
    assert.deepEqual(result, [3, 7, 50]);

  });

  it("I need to create function that can find all words shorter than 3 in a sentence", function() {
    var result = words_and_counting.shorter(exampleSentence, 3);
    assert.deepEqual(result, ['I', 'saw', 'and', 'in', 'the']);

  });

  it("I need to create function that can find all the numbers in a sentence bigger than 15", function() {
    var result = words_and_counting.larger([3, 7, 50], 15);
    assert.equal(result, 50);

  });


  it("I need to create function that can count all the words in a sentence", function() {
    var result = words_and_counting.words(exampleSentence);
    assert.deepEqual(result, 17);

  });

  it("I need to create function that can count all numbers in a sentence", function() {
    var result = words_and_counting.numberCount([3, 7, 50]);
    assert.deepEqual(result, 3);

  });

    });
