const should = require('chai').should();

const Vector = require('../src/Vector.js');

describe('class Vector', function () {
  describe ('constructor()', function () {
    it ('should default to 0,0', function () {
      let vec = new Vector();
      vec.x.should.equal(0);
      vec.y.should.equal(0);
    });
    it ('should accept a single value', function () {
      let vec = new Vector(22);
      vec.x.should.equal(22);
      vec.y.should.equal(22);
    });
    it ('should accept two values', function () {
      let vec = new Vector(43, -22);
      vec.x.should.equal(43);
      vec.y.should.equal(-22);
    });
  });
  describe ('.array', function () {
    it ('should return a Float32Array', function () {
      let vec = new Vector();
      let arr = vec.array;
      arr.should.be.instanceOf(Float32Array);
    });
    it ('should return an array of length 2', function () {
      let vec = new Vector();
      let arr = vec.array;
      arr.length.should.be(2);
    });
    it ('should return an array containing x an y', function () {
      let vec = new Vector(234, -1);
      let arr = vec.array;
      arr[0].should.equal(234);
      arr[1].should.equal(-1);
    });
    it ('should set x and y', function () {
      let vec = new Vector(-84, -125);
      let arr = new Float32Array([4, 2]);
      vec.array = arr;
      vec.x.should.equal(4);
      vec.y.should.equal(2);
    });
  });
  describe ('.x', function () {
    it ('should return a number', function () {
      let vec = new Vector();
      vec.x.should.be.a('number');
    });
    it ('should return x', function () {
      let vec = new Vector(234, 6);
      vec.x.should.equal(234);
    });
    it ('should set x', function () {
      let vec = new Vector(234, 6);
      vec.x = -79;
      vec.x.should.equal(-79);
    });
  });
  describe ('.y', function () {
    it ('should return a number', function () {
      let vec = new Vector();
      vec.y.should.be.a('number');
    });
    it ('should return y', function () {
      let vec = new Vector(234, 6);
      vec.y.should.equal(6);
    });
    it ('should set y', function () {
      let vec = new Vector(234, 6);
      vec.y = -79;
      vec.y.should.equal(-79);
    });
  });
  describe ('toValue()', function () {
    it ('should return a Float32Array', function () {
      let vec = new Vector();
      vec.toValue().should.be.instanceOf(Float32Array);
    });
    it ('should return an array of length 2', function () {
      let vec = new Vector();
      vec.toValue().length.should.be(2);
    });
    it ('should return an array containing x an y', function () {
      let vec = new Vector(254, 3);
      let arr = vec.toValue();
      arr[0].should.equal(254);
      arr[1].should.equal(3);
    });
  });
  describe ('toString()', function () {
    it ('should return a string', function () {
      let vec = new Vector();
      vec.toString().should.be.a('string');
    });
    it ('should return a string representation of the vector', function () {
      let vec = new Vector(254, 3);
      vec.toString().should.equal('(254,3)')
    });
  });
});