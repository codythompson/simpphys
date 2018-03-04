const should = require('chai').should();

const Vector = require('../src/Vector');
const Body = require('../src/Body');

/*
 * TODO: add coverage for shape
 */

describe('class Body', function () {
  describe('constructor()', function () {
    it ('should default to expected defaults', function () {
      let bod = new Body();
      bod.mass.should.equal(1);
      bod.pos.x.should.equal(0);
      bod.pos.y.should.equal(0);
      bod.lastPos.x.should.equal(0);
      bod.lastPos.y.should.equal(0);
    });
    it ('should accept a mass through the args object', function () {
      let bod  = new Body({
        mass: 0.5
      });
      bod.mass.should.equal(0.5);
      bod.pos.x.should.equal(0);
      bod.pos.y.should.equal(0);
      bod.lastPos.x.should.equal(0);
      bod.lastPos.y.should.equal(0);
    });
    it ('should accept a position through the args object', function () {
      let bod  = new Body({
        pos: new Vector(-3, 5)
      });
      bod.mass.should.equal(1);
      bod.pos.x.should.equal(-3);
      bod.pos.y.should.equal(5);
      bod.lastPos.x.should.equal(-3);
      bod.lastPos.y.should.equal(5);
    });
    
    it ('should create a motion field', function () {
      let bod  = new Body({
        pos: new Vector(-3, 5)
      });
      should.exist(bod.motion);
    });
  });
});