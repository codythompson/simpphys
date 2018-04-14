const should = require('chai').should();

const AARect = require('../src/AARect');

describe('AARect', function () {
  describe('constructor', function () {
    it ('should set .x and .y', function () {
      let rect = new AARect(-10, 22, 5, 602.234);
      rect.x.should.equal(-10);
      rect.y.should.equal(22);
    });
    it ('should set .w and .h', function () {
      let rect = new AARect(-10, 22, 5, 602.234);
      rect.w.should.equal(5);
      rect.h.should.equal(602.234);
    });
    it ('should not accept negative numbers for w and h', function () {
      (function(){ new AARect(1, 2, -1, 0);}).should.throw();
      (function(){ new AARect(3, 4, 0, -10);}).should.throw();
      (function(){ new AARect(5, 6, -9, -1234);}).should.throw();
    });
    it ('should require four numbers', function () {
      (function(){ new AARect(10);}).should.throw();
      (function(){ new AARect();}).should.throw();
    });
  });

  describe('.left', function () {
    it ('should return the correct left', function () {
      let rect = new AARect(-10, 22, 5, 602.234);
      rect.left.should.be.closeTo(-12.5, 0.00001);
    });
  });

  describe('.right', function () {
    it ('should return the correct right', function () {
      let rect = new AARect(-10, 22, 5, 602.234);
      rect.right.should.be.closeTo(-7.5, 0.00001);
    });
  });

  describe('.bottom', function () {
    it ('should return the correct bottom', function () {
      let rect = new AARect(-10, 22, 5, 602.234);
      rect.bottom.should.be.closeTo(-279.117, 0.00001);
    });
  });

  describe('.top', function () {
    it ('should return the correct top', function () {
      let rect = new AARect(-10, 22, 5, 602.234);
      rect.top.should.be.closeTo(323.117, 0.00001);
    });
  });

  describe('contains', function () {
    let rect = new AARect(-10, 22, 5, 602.234);

    it ('should return false for points above and to the left', function () {
      rect.contains(-12.51, 323.1171).should.equal(false);
      rect.contains(-100, 400).should.equal(false);
    });
    it ('should return false for points above', function () {
      rect.contains(-11, 323.1171).should.equal(false);
      rect.contains(-9, 400).should.equal(false);
    });
    it ('should return false for points above and to the right', function () {
      rect.contains(-7.49, 323.1171).should.equal(false);
      rect.contains(100, 400).should.equal(false);
    });
    it ('should return false for points to the left', function () {
      rect.contains(-12.51, 21).should.equal(false);
      rect.contains(-100, 23).should.equal(false);
    });
    it ('should return false for points to the right', function () {
      rect.contains(-7.49, 21).should.equal(false);
      rect.contains(100, 23).should.equal(false);
    });
    it ('should return false for points below and to the left', function () {
      rect.contains(-12.51, -279.1171).should.equal(false);
      rect.contains(-100, -400).should.equal(false);
    });
    it ('should return false for points below', function () {
      rect.contains(-11, -279.1171).should.equal(false);
      rect.contains(-9, -400).should.equal(false);
    });
    it ('should return false for points below and to the right', function () {
      rect.contains(-7.49, -279.1171).should.equal(false);
      rect.contains(100, -400).should.equal(false);
    });

    it ('should return true for points it contains near the border above and to the left', function () {
      rect.contains(-12.49, 323.1169).should.equal(true);
    });
    it ('should return true for points it contains near the border above', function () {
      rect.contains(-11, 323.1169).should.equal(true);
    });
    it ('should return true for points it contains near the border above and to the right', function () {
      rect.contains(-7.51, 323.1169).should.equal(true);
    });
    it ('should return true for points it contains near the border to the left', function () {
      rect.contains(-12.49, 21).should.equal(true);
    });
    it ('should return true for points it contains', function () {
      rect.contains(-9, 23).should.equal(true);
    });
    it ('should return true for points it contains near the border to the right', function () {
      rect.contains(-7.51, 21).should.equal(true);
    });
    it ('should return true for points it contains near the border below and to the left', function () {
      rect.contains(-12.49, -279.1169).should.equal(true);
    });
    it ('should return true for points it contains near the border below', function () {
      rect.contains(-11, -279.1169).should.equal(true);
    });
    it ('should return true for points it contains near the border below and to the right', function () {
      rect.contains(-7.51, -279.1169).should.equal(true);
    });
  });
});