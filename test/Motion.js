const should = require('chai').should();

const Motion = require('../src/Motion.js');

describe ('class Motion', function () {
  describe('constructor', function () {
    it ('should default to 0,0 accel and 0,0 vel', function () {
      let motion = new Motion();
      motion.accel.x.should.equal(0);
      motion.accel.y.should.equal(0);
      motion.vel.x.should.equal(0);
      motion.vel.y.should.equal(0);
    });
  });

  describe('step', function () {
    it ('should increment the velocity by the acceleration when accel is negative', function () {
      let motion = new Motion();
      motion.accel.x = -25.67;
      motion.accel.y = -0.56;
      motion.vel.x = 12.37;
      motion.vel.y = -12.44;
      motion.step();
      motion.accel.x.should.be.closeTo(-25.67, 0.0001);
      motion.accel.y.should.be.closeTo(-0.56, 0.0001);
      motion.vel.x.should.be.closeTo(-13.3, 0.0001);
      motion.vel.y.should.be.closeTo(-13.0, 0.0001);
    });
    it ('should increment the velocity by the acceleration when accel is positive', function () {
      let motion = new Motion();
      motion.accel.x = 25.67;
      motion.accel.y = 0.56;
      motion.vel.x = 12.37;
      motion.vel.y = -12.44;
      motion.step();
      motion.accel.x.should.be.closeTo(25.67, 0.0001);
      motion.accel.y.should.be.closeTo(0.56, 0.0001);
      motion.vel.x.should.be.closeTo(38.04, 0.0001);
      motion.vel.y.should.be.closeTo(-11.88, 0.0001);
    });
    it ('should not change the velocity when the acceleration is 0', function () {
      let motion = new Motion();
      motion.accel.x = 0.0;
      motion.accel.y = 0.56;
      motion.vel.x = 12.37;
      motion.vel.y = -12.44;
      motion.step();
      motion.accel.x.should.closeTo(0.0, 0.0001);
      motion.accel.y.should.closeTo(0.56, 0.0001);
      motion.vel.x.should.be.closeTo(12.37, 0.0001);
      motion.vel.y.should.be.closeTo(-11.88, 0.0001);
    });
  });
});