const Vector = require('./Vector');

class Motion {
  constructor () {
    this.accel = new Vector();
    this.vel = new Vector();
  }

  step () {
    this.vel.x += this.accel.x;
    this.vel.y += this.accel.y;
  }
};

module.exports = Motion;
