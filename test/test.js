import assert from "assert";
import {min, moyenne} from "../js/app.js";

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("min", function(){
    it("should return 1", function () {
        assert.equal(min([1,5,3,8,2]), 1);
    })
    it("should return -5", function () {
        assert.equal(min([1,8,-3,-5,7,7]), -5);
    })
    it("should return 2", function () {
        assert.equal(min([2,2,2,2,2,6,2]), 2);
    })
})

describe("moyenne", function(){
    it("should return 12", function() {
        assert.equal(moyenne([12,14,8,9,15,18,9]), 12)
    })
})