const _ = require('lodash');

class AARect {
  constructor (x, y, w, h) {
    if (arguments.length !== 4) {
      throw '[simpphys][AARect] constructor expects 4 args: x,y,w,h';
    }
    if (typeof x !== 'number') {
      throw '[simpphys][AARect] x must be a number';
    }
    if (typeof y !== 'number') {
      throw '[simpphys][AARect] y must be a number';
    }
    if (typeof w !== 'number' || w < 0) {
      throw '[simpphys][AARect] w must be a positive number';
    }
    if (typeof h !== 'number' || h < 0) {
      throw '[simpphys][AARect] h must be a positive number';
    }

    // add all args as fields
    _.extend(this, { x, y, w, h });
  }

  get left () {
    return this.x - (this.w/2);
  }
  get right () {
    return this.x + (this.w/2);
  }
  get bottom () {
    return this.y - (this.h/2);
  }
  get top () {
    return this.y + (this.h/2);
  }

  contains(x, y) {
    return x >= this.left && x < this.right
      && y >= this.bottom && y < this.top;
  }
};

module.exports = AARect