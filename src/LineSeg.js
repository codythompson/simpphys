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
};

module.exports = LineSeg;