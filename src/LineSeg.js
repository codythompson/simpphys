const _ = require('lodash');

class LineSeg {
  constructor(x1, y1, x2, y2) {
    if (arguments.length !== 4) {
      throw '[simpphys][LineSeg][constructor] 4 arguments expected';
    }
    if (typeof x1 !== 'number') {
      throw '[simpphys][LineSeg][constructor] x1 must be a number';
    }
    if (typeof y1 !== 'number') {
      throw '[simpphys][LineSeg][constructor] y1 must be a number';
    }
    if (typeof x2 !== 'number') {
      throw '[simpphys][LineSeg][constructor] x2 must be a number';
    }
    if (typeof y2 !== 'number') {
      throw '[simpphys][LineSeg][constructor] y2 must be a number';
    }

    _.extend(this, {x1, y1, x2, y2});
  }

  get slope () {
    return (this.y2 - this.y1) / ( this.x2 - this.x1);
  }

  get yIntercept () {
    return this.y1 - (this.slope*this.x1);
  }

  get left () {
    return Math.min(this.x1, this.x2);
  }

  get right () {
    return Math.max(this.x1, this.x2);
  }

  get bottom () {
    return Math.min(this.y1, this.y2);
  }

  get top () {
    return Math.max(this.y1, this.y2);
  }

  yAtX (x) {
    return (this.slope*x) + this.yIntercept;
  }

  isAboveLine (x, y, inclusive=false) {
    let lineY = this.yAtX(x);
    if (inclusive) {
      return y >= lineY;
    } else {
      return y > lineY;
    }
  }

  isAboveSegment (x, y, inclusiveY=false) {
    return x >= this.left && x < this.right && this.isAboveLine(x, y, inclusiveY);
  }
};

module.exports = LineSeg;