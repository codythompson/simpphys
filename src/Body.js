const _ = require('lodash');

const Vector = require('./Vector');
const Motion = require('./Motion');

/**
 * @class Body
 * represents a physics body
 */
class Body {
  /**
   * @constructor
   * @param {object} [args={}]
   * @param {number} [args.mass=1] - the mass of the body
   * @param {Vector} [args.pos=new Vector()] - the position of the body
   * @param {Shape} [shape=null]
   */
  constructor(args={}) {
    args = _.defaults(args, {
      mass: 1,
      pos: new Vector(),
      shape: null
    });

    _.extend(this, {
      mass: args.mass,
      pos: args.pos,
      lastPos: new Vector(args.pos.x, args.pos.y),
      shape: args.shape,
      motion: new Motion()
    });

    console.log(args.pos.x);
  }
}

module.exports = Body;