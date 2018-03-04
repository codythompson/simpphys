/**
 * @class Vector
 * 
 * Represents a two dimensional vector OR point in space
 */
class Vector {
  /**
   * @param {number|Array|Float32Array} [xOrArray] - the x value of the vector OR an Array containing x and y 
   * @param {number} [y] - they y value of the vector (ignored if an array is passed for the first param)
   */
  constructor(x, y) {
    let array;
    if (x instanceof Float32Array) {
      array = x;
    } else if (Array.isArray(x)) {
      array = new Float32Array(x);
    } else if (arguments.length === 2) {
      array = new Float32Array([x,y]);
    } else if (arguments.length === 1) {
      array = new Float32Array([x, x]);
    } else {
      array = new Float32Array([0, 0]);
    }

    this.private = { array };
  }

  /*****************************************************************************
   * getters and setters
   *****************************************************************************/

  /**
   * @prop {Float32Array} array - the array containing the x an y value of the vector
   */
  get array () {
    return this.private.array;
  }
  set array (val) {
    this.private.array = val;
  }

  /**
   * @prop {number} x - the x value of the vector
  */
  get x () {
    return this.private.array[0];
  }
  set x (val) {
    this.private.array[0] = val;
  }

  /**
   * @prop {number} y - the y value of the vector
  */
  get y () {
    return this.private.array[1];
  }
  set y (val) {
    this.private.array[1] = val;
  }

  /*****************************************************************************
   * extending methods
   *****************************************************************************/

   /**
    * @method toValue
    * @returns {Float32Array}
    */
  toValue () {
    return this.private.array;
  }

  /**
   * @method toString
   * @returns {string}
   */
  toString () {
    return `(${this.x},${this.y})`;
  }
}

module.exports = Vector;