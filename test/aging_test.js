var aging = require ("../aging.js")
var assert = require ("assert")

describe("For the aging kata ,", function() {

  it("I should write a function that can tell me who is the oldest", function() {

    var result = aging.wisdomCalculator('Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27');

    assert.equal(result,'Oya');
  })

})
