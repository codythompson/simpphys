const should = require('chai').should();

const LineSeg = require('../src/LineSeg');

describe ('LineSeg', function() {
  describe('constructor', function () {
    it ('should set x1, y1, x2, y2', function () {
      let line = new LineSeg(-2, -1, 0, 1);
      line.x1.should.equal(-2);
      line.y1.should.equal(-1);
      line.x2.should.equal(0);
      line.y2.should.equal(1);
    });
    it ('should require four numbers', function () {
      (()=>new LineSeg(0, 2, 3, 'a')).should.throw();
      (()=>new LineSeg(0, 2, 3)).should.throw();
      (()=>new LineSeg()).should.throw();
    });
  });

  describe('.slope', function () {
    it ('should return the correct slope', function () {
      let line = new LineSeg(-2, -1, 0, 0);
      line.slope.should.equal(2);
      line = new LineSeg(1/3, 0, 0, 0);
      line.slope.should.be.closeTo(-1/3, 0.00001);
    });
  });

  describe ('.yIntercept', function () {
    it ('should return the correct y intercept', function () {
      let line = new LineSeg(-2, -1, 1, 1);
      // y = mx + b
      // slope = (1-(-2))/(1-(-1)) = 3/2
      // b = -1 - (3/2)(-2)
      // b = 2
      line.yIntercept.should.be.closeTo(2, 0.00001);
    });
  });

  describe ('isAboveLine', function () {
    let posLine = new LineSeg(-2, -1, 1, 1);
    let negLine = new LineSeg(-2, 1, 1, 0);
    it ('should return true when above', function () {
      posLine.isAbove(3, 6.5).should.equal(true);
      posLine.isAbove(-4, 20).should.equal(true);
      negLine.isAbove(1, 0).should.equal(true);
      negLine.isAbove(2, -6).should.equal(true);
    });
    it ('should return false when below', function () {
      posLine.isAboveLine(3, 6.49).should.equal(false);
      posLine.isAboveLine(-4, -5).should.equal(false);
      negLine.isAboveLine(1, -0.01).should.equal(false);
      negLine.isAboveLine(2, -6).should.equal(false);
    });
  });

  describe ('isAboveSegment', function () {
    let posLine = new LineSeg(-2, -1, 1, 1);
    let negLine = new LineSeg(-2, 1, 1, 0);
    it ('should return true when above', function () {
      posLine.isAboveSegment(-2, -1).should.equal(true);
      posLine.isAboveSegment(0.5, 2.75).should.equal(true);
      posLine.isAboveSegment(-1, 2).should.equal(true);
      negLine.isAboveSegment(-2, 1).should.equal(true);
      negLine.isAboveSegment(0.5, 1.5).should.equal(true);
      negLine.isAboveSegment(0, 6).should.equal(true);
    });
    it ('should return false when below', function () {
      posLine.isAboveSegment(0.5, 2.749).should.equal(false);
      posLine.isAboveSegment(-1, -5).should.equal(false);
      negLine.isAboveSegment(0.5, 1.49).should.equal(false);
      negLine.isAboveSegment(0, 2).should.equal(false);
      posLine.isAboveSegment(3, 6.49).should.equal(false);
      posLine.isAboveSegment(-4, -5).should.equal(false);
      negLine.isAboveSegment(1, -0.01).should.equal(false);
      negLine.isAboveSegment(2, -6).should.equal(false);
    });
    it ('should return false when to the left or right', function () {
      posLine.isAboveSegment(-2.01, 3).should.equal(false);
      posLine.isAboveSegment(-6, 5).should.equal(false);
      posLine.isAboveSegment(1, 1).should.equal(false);
      posLine.isAboveSegment(6, 20).should.equal(false);
      negLine.isAboveSegment(-2.01, 1).should.equal(false);
      negLine.isAboveSegment(-6, 100).should.equal(false);
      negLine.isAboveSegment(1, 0).should.equal(false);
      negLine.isAboveSegment(6, 20).should.equal(false);
    });
  });
});