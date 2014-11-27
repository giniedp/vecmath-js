(function(window){
  'use strict';

  /**
   * Describes a vector with two components.
   *
   * @class Vec2
   * @constructor
   * @param {Number} x
   * @param {Number} y
   */
  var Vec2 = function(x, y){
    this.x = x;
    this.y = y;
  };

  window.Vec2 = Vec2;

  Vec2.prototype = {

    /**
     * Initializes the components of this vector with given values.
     * @chainable
     * @method init
     * @param {Number} x value for X component
     * @param {Number} y value for Y component
     * @return {Vec2} this vector for chaining
     */
    init: function(x, y){
      /**
       * @attribute x
       * @type {Number}
       */
      this.x = x;
      /**
       * @attribute y
       * @type {Number}
       */
      this.y = y;
      return this;
    },

    /**
     * Initializes the components of this vector by taking the components from the given vector.
     * @chainable
     * @method initFrom
     * @param {Vec2} other The vector to read from
     * @return {Vec2}
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      return this;
    },

    /**
     * Initializes the components of this vector by taking values from the given array in successive order.
     * @chainable
     * @method initFromBuffer
     * @param {Array} buffer The array to read from
     * @param {Number} [offset=0] The zero based index at which start reading the values
     * @return {Vec2}
     */
    initFromBuffer: function(buffer, offset){
      offset = offset || 0;
      this.x = buffer[offset];
      this.y = buffer[offset + 1];
      return this;
    },

    /**
     * Creates a copy of this vector
     * @method clone
     * @return {Vec2} The cloned vector
     */
    clone: function(){
      return new Vec2(this.x, this.y);
    },

    /**
     * Copies the components successively into the given array.
     * @chainable
     * @method copy
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {Number} [offset=0] Zero based index where to start writing in the array
     * @return {Array|Float32Array}
     */
    copyTo: function(buffer, offset){
      offset = offset || 0;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
      return buffer;
    },

    /**
     * Returns an array filled with the values of the components of this vector
     * @method dump
     * @return {Array}
     */
    dump: function(){
      return [this.x, this.y];
    },

    /**
     * Checks for component wise equality with given vector
     * @method equals
     * @param {Vec2} other The vector to compare with
     * @return {Boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y));
    },

    /**
     * Calculates the length of this vector
     * @method length
     * @return {Number} The length.
     */
    length: function(){
      var x = this.x;
      var y = this.y;
      return Math.sqrt(x * x + y * y);
    },

    /**
     * Calculates the squared length of this vector
     * @method lengthSquared
     * @return {Number} The squared length.
     */
    lengthSquared: function(){
      var x = this.x;
      var y = this.y;
      return x * x + y * y;
    },

    /**
     * Calculates the distance to the given vector
     * @method distance
     * @param {Vec2} other The distant vector
     * @return {Number} The distance between the vectors.
     */
    distance: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      return Math.sqrt(x * x + y * y);
    },

    /**
     * Calculates the squared distance to the given vector
     * @method distanceSquared
     * @param {Vec2} other The distant vector
     * @return {Number} The squared distance between the vectors.
     */
    distanceSquared: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      return x * x + y * y;
    },

    /**
     * Calculates the dot product with the given vector
     * @method dot
     * @param {Vec2} other
     * @return {Number} The dot product.
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y;
    },

    /**
     * Calculates the cross product with another vector.
     * @chainable
     * @method selfCross
     * @param {Vec2} other The second vector.
     * @return {Vec2} A new vector.
     */
    selfCross: function(other){
      var x = this.y * other.z - this.z * other.y;
      var y = this.z * other.x - this.x * other.z;
      this.x = x;
      this.y = y;
      return this;
    },

    /**
     * Normalizes this vector. Applies the result to this vector.
     * @chainable
     * @method selfNormalize
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfNormalize: function(){
      var x = this.x;
      var y = this.y;
      var d = 1.0 / Math.sqrt(x * x + y * y);
      this.x *= d;
      this.y *= d;
      return this;
    },

    /**
     * Inverts this vector.
     * @chainable
     * @method selfInvert
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfInvert: function(){
      this.x = 1.0 / this.x;
      this.y = 1.0 / this.y;
      return this;
    },

    /**
     * Negates the components of this vector.
     * @chainable
     * @method selfNegate
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      return this;
    },

    /**
     * Adds the given vector to `this`.
     * @chainable
     * @method selfAdd
     * @param {Vec2} other The vector to add
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      return this;
    },

    /**
     * Adds the given scalar to `this`
     * @chainable
     * @method selfAddScalar
     * @param {Number} scalar The scalar to add.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfAddScalar: function(scalar){
      this.x += scalar;
      this.y += scalar;
      return this;
    },

    /**
     * Subtracts the given from this vector from `this`.
     * @chainable
     * @method selfSubtract
     * @param {Vec2} other The vector to subtract.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      return this;
    },

    /**
     * Subtracts the given scalar from `this`.
     * @return {Vec2} Reference to `this` for chaining.
     * @method selfSubtractScalar
     * @param {Vec2} scalar The scalar to subtract.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfSubtractScalar: function(scalar){
      this.x -= scalar;
      this.y -= scalar;
      return this;
    },

    /**
     * Multiplies `this` with the given vector.
     * @chainable
     * @method selfMultiply
     * @param {Vec2} other The vector to multiply.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfMultiply: function(other){
      this.x *= other.x;
      this.y *= other.y;
      return this;
    },

    /**
     * Multiplies `this` with the given scalar.
     * @chainable
     * @method selfMultiplyScalar
     * @param {Number} scalar The scalar to multiply.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfMultiplyScalar: function(scalar){
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },

    /**
     * Divides `this` by the given vector.
     * @chainable
     * @method selfDivide
     * @param {Vec2} other The vector to divide with.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfDivide: function(other){
      this.x /= other.x;
      this.y /= other.y;
      return this;
    },

    /**
     * Divides `this` by the given scalar.
     * @method selfDivideScalar
     * @param {Number} scalar The scalar to divide with.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfDivideScalar: function(scalar){
      scalar = 1 / scalar;
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },

    /**
     * Multiplies `this` with the first vector and adds the second after.
     * @chainable
     * @method selfMultiplyAdd
     * @param {Vec2} mul The vector to multiply.
     * @param {Vec2} add The vector to add on top of the multiplication.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfMultiplyAdd: function(mul, add){
      this.x = this.x * mul.x + add.x;
      this.y = this.y * mul.y + add.y;
      return this;
    },

    /**
     * Multiplies `this` with the first vector and adds the second scalar after.
     * @chainable
     * @method selfMultiplyScalarAdd
     * @param {Number} mul The scalar to multiply.
     * @param {Vec2} add The vector to add on top of the multiplication.
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfMultiplyScalarAdd: function(mul, add){
      this.x = this.x * mul + add.x;
      this.y = this.y * mul + add.y;
      return this;
    },

    /**
     * Transforms `this` with the given matrix.
     * @chainable
     * @method selfTransformMat4
     * @param {Mat4} mat
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfTransformMat4: function(mat){
      var x = this.x;
      var y = this.y;
      var d = mat.data;
      this.x = x * d[0] + y * d[4] + d[12];
      this.y = x * d[1] + y * d[5] + d[13];
      return this;
    },

    /**
     * Transforms `this` with the given matrix.
     * @chainable
     * @method selfTransformMat3
     * @param {Mat3} mat
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfTransformMat3: function(mat){
      var x = this.x;
      var y = this.y;
      var d = mat.data;
      this.x = x * d[0] + y * d[3];
      this.y = x * d[1] + y * d[4];
      return this;
    },

    /**
     * Transforms `this` with the given matrix.
     * @chainable
     * @method selfTransformMat2
     * @param {Mat3} mat
     * @return {Vec2} Reference to `this` for chaining.
     */
    selfTransformMat2: function(mat){
      var x = this.x;
      var y = this.y;
      var d = mat.data;
      this.x = x * d[0] + y * d[2];
      this.y = x * d[1] + y * d[3];
      return this;
    }
  };


  /**
   * Creates a new vector. The method should be called with three or no arguments. If less than three arguments are given
   * then some components of the resulting vector are going to be `undefined`.
   * @static
   * @method create
   * @param {Number} [x] The x component
   * @param {Number} [y] The y component
   * @param {Number} [z] The z component
   * @return {Vec2} A new vector.
   */
  Vec2.create = function(x, y){
    if (x != null){
      return new Vec2(x, y);
    }
    return new Vec2(0, 0);
  };

  /**
   * Creates a new vector with all components set to 0.
   * @static
   * @method zero
   * @return {Vec2} A new vector.
   */
  Vec2.zero = function(){
    return new Vec2(0, 0);
  };

  /**
   * Creates a new vector with all components set to 1.
   * @static
   * @method one
   * @return {Vec2} A new vector.
   */
  Vec2.one = function(){
    return new Vec2(1, 1);
  };

  /**
   * Normalizes the given vector.
   * @static
   * @method normalize
   * @param {Vec2} vec The vector to normalize.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.normalize = function(vec, out){
    var x = vec.x;
    var y = vec.y;
    var d = 1.0 / Math.sqrt(x * x + y * y);
    out = out || new Vec2();
    out.x = x * d;
    out.y = y * d;
    return out;
  };

  /**
   * Inverts the given vector.
   * @static
   * @method invert
   * @param {Vec2} vec The vector to invert.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.invert = function(vec, out){
    out = out || new Vec2();
    out.x = 1.0 / vec.x;
    out.y = 1.0 / vec.y;
    return out;
  };

  /**
   * Negates this vector.
   * @static
   * @method negate
   * @param {Vec2} vec The vector to negate.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.negate = function(vec, out){
    out = out || new Vec2();
    out.x = -vec.x;
    out.y = -vec.y;
    return out;
  };

  /**
   * Adds two vectors.
   * @static
   * @method add
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} out The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.add = function(vecA, vecB, out){
    out = out || new Vec2();
    out.x = vecA.x + vecB.x;
    out.y = vecA.y + vecB.y;
    return out;
  };

  /**
   * Adds a scalar to each component of a vector.
   * @static
   * @method addScalar
   * @param {Vec2} vec The first vector.
   * @param {Vec2} scalar The scalar to add.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.addScalar = function(vec, scalar, out){
    out = out || new Vec2();
    out.x = vec.x + scalar;
    out.y = vec.y + scalar;
    return out;
  };

  /**
   * Subtracts the second vector from the first.
   * @static
   * @method subtract
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.subtract = function(vecA, vecB, out){
    out = out || new Vec2();
    out.x = vecA.x - vecB.x;
    out.y = vecA.y - vecB.y;
    return out;
  };

  /**
   * Subtracts a scalar from each component of a vector.
   * @static
   * @method subtractScalar
   * @param {Vec2} vec The first vector.
   * @param {Vec2} scalar The scalar to add.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.subtractScalar = function(vec, scalar, out){
    out = out || new Vec2();
    out.x = vec.x - scalar;
    out.y = vec.y - scalar;
    return out;
  };

  /**
   * Multiplies two vectors.
   * @static
   * @method multiply
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.multiply = function(vecA, vecB, out){
    out = out || new Vec2();
    out.x = vecA.x * vecB.x;
    out.y = vecA.y * vecB.y;
    return out;
  };

  /**
   * Multiplies a scalar to each component of a vector.
   * @static
   * @method multiplyScalar
   * @param {Vec2} vec The first vector.
   * @param {Vec2} scalar The scalar to add.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.multiplyScalar = function(vec, scalar, out){
    out = out || new Vec2();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    return out;
  };

  /**
   * Divides the components of the first vector by the components of the second vector.
   * @static
   * @method divide
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.divide = function(vecA, vecB, out){
    out = out || new Vec2();
    out.x = vecA.x / vecB.x;
    out.y = vecA.y / vecB.y;
    return out;
  };

  /**
   * Divides the components of the first vector by the scalar.
   * @static
   * @method divideScalar
   * @param {Vec2} vec The first vector.
   * @param {Number} scalar The scalar to use for division.
   * @param {Vec2} out The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.divideScalar = function(vec, scalar, out){
    scalar = 1 / scalar;
    out = out || new Vec2();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    return out;
  };

  /**
   * Multiplies two vectors and adds the third vector.
   * @static
   * @method multiplyAdd
   * @param {Vec2} vecA The vector to multiply.
   * @param {Vec2} vecB The vector to multiply.
   * @param {Vec2} add The vector to add on top of the multiplication.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.multiplyAdd = function(vecA, vecB, add, out){
    out = out || new Vec2();
    out.x = vecA.x * vecB.x + add.x;
    out.y = vecA.y * vecB.y + add.y;
    return out;
  };

  /**
   * Multiplies a vector with a scalar and adds another vector.
   * @static
   * @method multiplyAdd
   * @param {Vec2} vecA The vector to multiply.
   * @param {Number} mul The scalar to multiply.
   * @param {Vec2} add The vector to add on top of the multiplication.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.multiplyScalarAdd = function(vecA, mul, add, out){
    out = out || new Vec2();
    out.x = vecA.x * mul + add.x;
    out.y = vecA.y * mul + add.y;
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector by using the given min and max vectors.
   * @static
   * @method clamp
   * @param {Vec2} a The vector to clamp.
   * @param {Vec2} min Vector with the minimum component values.
   * @param {Vec2} max Vector with the maximum component values.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.clamp = function(a, min, max, out){
    var x = a.x;
    var y = a.y;
    var minX = min.x;
    var minY = min.y;
    var maxX = max.x;
    var maxY = max.y;
    out = out || new Vec2();
    out.x = x < minX ? minX : (x > maxX ? maxX : x);
    out.y = y < minY ? minY : (y > maxY ? maxY : y);
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector by using the given min and max scalars.
   * @static
   * @method clampScalar
   * @param {Vec2} a The vector to clamp.
   * @param {Number} min The minimum scalar value.
   * @param {Number} max The maximum scalar value.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.clampScalar = function(a, min, max, out){
    var x = a.x;
    var y = a.y;
    out = out || new Vec2();
    out.x = x < min ? min : (x > max ? max : x);
    out.y = y < min ? min : (y > max ? max : y);
    return out;
  };

  /**
   * Performs a component wise min operation on the the given vectors.
   * @static
   * @method min
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.min = function(a, b, out){
    var aX = a.x;
    var aY = a.y;
    var bX = b.x;
    var bY = b.y;
    out = out || new Vec2();
    out.x = aX < bX ? aX: bX;
    out.y = aY < bY ? aY: bY;
    return out;
  };

  /**
   * Performs a component wise min operation on the the given vector and a scalar value.
   * @static
   * @method minScalar
   * @param {Vec2} a The vector.
   * @param {Number} scalar The scalar.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.minScalar = function(a, scalar, out){
    var x = a.x;
    var y = a.y;
    out = out || new Vec2();
    out.x = x < scalar ? x : scalar;
    out.y = y < scalar ? y : scalar;
    return out;
  };

  /**
   * Performs a component wise max operation on the the given vectors.
   * @static
   * @method max
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.max = function(a, b, out){
    var aX = a.x;
    var aY = a.y;
    var bX = b.x;
    var bY = b.y;
    out = out || new Vec2();
    out.x = aX > bX ? aX: bX;
    out.y = aY > bY ? aY: bY;
    return out;
  };

  /**
   * Performs a component wise max operation on the the given vector and a scalar value.
   * @static
   * @method maxScalar
   * @param {Vec2} a The vector.
   * @param {Number} scalar The scalar.
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.maxScalar = function(a, scalar, out){
    var x = a.x;
    var y = a.y;
    out = out || new Vec2();
    out.x = x > scalar ? x : scalar;
    out.y = y > scalar ? y : scalar;
    return out;
  };

  /**
   * Performs a component wise linear interpolation between the given two vectors.
   * @static
   * @method lerp
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.lerp = function(a, b, t, out){
    var x = a.x;
    var y = a.y;
    out = out || new Vec2();
    out.x = x + (b.x - x) * t;
    out.y = y + (b.y - y) * t;
    return out;
  };

  /**
   * Performs a component wise barycentric interpolation of the given vectors.
   * @static
   * @method barycentric
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Vec2} c The third vector.
   * @param {Number} t1 The first interpolation value. Assumed to be in range [0:1].
   * @param {Number} t2 The second interpolation value. Assumed to be in range [0:1].
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.barycentric = function(a, b, c, t1, t2, out){
    var x = a.x;
    var y = a.y;
    out = out || new Vec2();
    out.x = x + t1 * (b.x - x) + t2 * (c.x - x);
    out.y = y + t1 * (b.y - y) + t2 * (c.y - y);
    return out;
  };

  /**
   * Performs a component wise smooth interpolation between the given two vectors.
   * @static
   * @method smooth
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec2} [out] The vector to write to.
   * @return {Vec2} The given `out` parameter or a new vector.
   */
  Vec2.smooth = function(a, b, t, out){
    t = ((t > 1) ? 1 : ((t < 0) ? 0 : t));
    t = t * t * (3 - 2 * t);
    var x = a.x;
    var y = a.y;
    out = out || new Vec2();
    out.x = x + (b.x - x) * t;
    out.y = y + (b.y - y) * t;
    return out;
  };

  /**
   * Tries to converts the given data to a vector
   * @static
   * @method convert
   * @param {Vec2|Vec3|Vec4|Quat|Array|number} data
   * @return {Vec2}
   */
  Vec2.convert = function(data){
    if (Array.isArray(data)){
      return new Vec2(
        data[0] || 0,
        data[1] || 0
      );
    }
    if (typeof data === 'number') {
      return new Vec2(data, data);
    }
    return new Vec2(
      data.x || 0,
      data.y || 0
    );
  };
}(window));

(function(window){
  'use strict';

  /**
   * Describes a vector with three components.
   *
   * @class Vec3
   * @constructor
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   */
  var Vec3 = function(x, y, z){
    /**
     * @attribute x
     * @type {Number}
     */
    this.x = x;
    /**
     * @attribute y
     * @type {Number}
     */
    this.y = y;
    /**
     * @attribute z
     * @type {Number}
     */
    this.z = z;
  };

  window.Vec3 = Vec3;

  Vec3.prototype = {

    /**
     * Initializes the components of this vector with given values.
     * @chainable
     * @method init
     * @param {Number} x value for X component
     * @param {Number} y value for Y component
     * @param {Number} z value for Z component
     * @return {Vec3} this vector for chaining
     */
    init: function(x, y, z){
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    },

    /**
     * Initializes the components of this vector by taking the components from the given vector.
     * @chainable
     * @method initFrom
     * @param {Vec3} other The vector to read from
     * @return {Vec3}
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      this.z = other.z;
      return this;
    },

    /**
     * Initializes the components of this vector by taking values from the given array in successive order.
     * @chainable
     * @method initFromBuffer
     * @param {Array} buffer The array to read from
     * @param {Number} [offset=0] The zero based index at which start reading the values
     * @return {Vec3}
     */
    initFromBuffer: function(buffer, offset){
      offset = offset || 0;
      this.x = buffer[offset];
      this.y = buffer[offset + 1];
      this.z = buffer[offset + 2];
      return this;
    },

    /**
     * Creates a copy of this vector
     * @method clone
     * @return {Vec3} The cloned vector
     */
    clone: function(){
      return new Vec3(this.x, this.y, this.z);
    },

    /**
     * Copies the components successively into the given array.
     * @chainable
     * @method copy
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {Number} [offset=0] Zero based index where to start writing in the array
     * @return {Array|Float32Array}
     */
    copyTo: function(buffer, offset){
      offset = offset || 0;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
      buffer[offset + 2] = this.z;
      return buffer;
    },

    /**
     * Returns an array filled with the values of the components of this vector
     * @method dump
     * @return {Array}
     */
    dump: function(){
      return [this.x, this.y, this.z];
    },

    /**
     * Checks for component wise equality with given vector
     * @method equals
     * @param {Vec3} other The vector to compare with
     * @return {Boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y) && (this.z === other.z));
    },

    /**
     * Calculates the length of this vector
     * @method length
     * @return {Number} The length.
     */
    length: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      return Math.sqrt(x * x + y * y + z * z);
    },

    /**
     * Calculates the squared length of this vector
     * @method lengthSquared
     * @return {Number} The squared length.
     */
    lengthSquared: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      return x * x + y * y + z * z;
    },

    /**
     * Calculates the distance to the given vector
     * @method distance
     * @param {Vec3} other The distant vector
     * @return {Number} The distance between the vectors.
     */
    distance: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      var z = this.z - other.z;
      return Math.sqrt(x * x + y * y + z * z);
    },

    /**
     * Calculates the squared distance to the given vector
     * @method distanceSquared
     * @param {Vec3} other The distant vector
     * @return {Number} The squared distance between the vectors.
     */
    distanceSquared: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      var z = this.z - other.z;
      return x * x + y * y + z * z;
    },

    /**
     * Calculates the dot product with the given vector
     * @method dot
     * @param {Vec3} other
     * @return {Number} The dot product.
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y + this.z * other.z;
    },

    /**
     * Calculates the cross product with another vector.
     * @chainable
     * @method selfCross
     * @param {Vec3} other The second vector.
     * @return {Vec3} A new vector.
     */
    selfCross: function(other){
      var x = this.y * other.z - this.z * other.y;
      var y = this.z * other.x - this.x * other.z;
      var z = this.x * other.y - this.y * other.x;
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    },

    /**
     * Normalizes this vector. Applies the result to this vector.
     * @chainable
     * @method selfNormalize
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfNormalize: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var d = 1.0 / Math.sqrt(x * x + y * y + z * z);
      this.x *= d;
      this.y *= d;
      this.z *= d;
      return this;
    },

    /**
     * Inverts this vector.
     * @chainable
     * @method selfInvert
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfInvert: function(){
      this.x = 1.0 / this.x;
      this.y = 1.0 / this.y;
      this.z = 1.0 / this.z;
      return this;
    },

    /**
     * Negates the components of this vector.
     * @chainable
     * @method selfNegate
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    },

    /**
     * Adds the given vector to `this`.
     * @chainable
     * @method selfAdd
     * @param {Vec3} other The vector to add
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
      return this;
    },

    /**
     * Adds the given scalar to `this`
     * @chainable
     * @method selfAddScalar
     * @param {Number} scalar The scalar to add.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfAddScalar: function(scalar){
      this.x += scalar;
      this.y += scalar;
      this.z += scalar;
      return this;
    },

    /**
     * Subtracts the given from this vector from `this`.
     * @chainable
     * @method selfSubtract
     * @param {Vec3} other The vector to subtract.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
      return this;
    },

    /**
     * Subtracts the given scalar from `this`.
     * @return {Vec3} Reference to `this` for chaining.
     * @method selfSubtractScalar
     * @param {Vec3} scalar The scalar to subtract.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfSubtractScalar: function(scalar){
      this.x -= scalar;
      this.y -= scalar;
      this.z -= scalar;
      return this;
    },

    /**
     * Multiplies `this` with the given vector.
     * @chainable
     * @method selfMultiply
     * @param {Vec3} other The vector to multiply.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfMultiply: function(other){
      this.x *= other.x;
      this.y *= other.y;
      this.z *= other.z;
      return this;
    },

    /**
     * Multiplies `this` with the given scalar.
     * @chainable
     * @method selfMultiplyScalar
     * @param {Number} scalar The scalar to multiply.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfMultiplyScalar: function(scalar){
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    },

    /**
     * Divides `this` by the given vector.
     * @chainable
     * @method selfDivide
     * @param {Vec3} other The vector to divide with.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfDivide: function(other){
      this.x /= other.x;
      this.y /= other.y;
      this.z /= other.z;
      return this;
    },

    /**
     * Divides `this` by the given scalar.
     * @method selfDivideScalar
     * @param {Number} scalar The scalar to divide with.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfDivideScalar: function(scalar){
      scalar = 1 / scalar;
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    },

    /**
     * Multiplies `this` with the first vector and adds the second after.
     * @chainable
     * @method selfMultiplyAdd
     * @param {Vec3} mul The vector to multiply.
     * @param {Vec3} add The vector to add on top of the multiplication.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfMultiplyAdd: function(mul, add){
      this.x = this.x * mul.x + add.x;
      this.y = this.y * mul.y + add.y;
      this.z = this.z * mul.z + add.z;
      return this;
    },

    /**
     * Multiplies `this` with the first vector and adds the second scalar after.
     * @chainable
     * @method selfMultiplyScalarAdd
     * @param {Number} mul The scalar to multiply.
     * @param {Vec3} add The vector to add on top of the multiplication.
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfMultiplyScalarAdd: function(mul, add){
      this.x = this.x * mul + add.x;
      this.y = this.y * mul + add.y;
      this.z = this.z * mul + add.z;
      return this;
    },

    /**
     * Transforms `this` with the given quaternion.
     * @chainable
     * @method selfTransformQuat
     * @param {Quat} quat
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfTransformQuat: function(quat){
      var x = quat.x;
      var y = quat.y;
      var z = quat.z;
      var w = quat.w;

      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var wx2 = w * x2;
      var wy2 = w * y2;
      var wz2 = w * z2;

      var xx2 = x * x2;
      var xy2 = x * y2;
      var xz2 = x * z2;

      var yy2 = y * y2;
      var yz2 = y * z2;
      var zz2 = y * z2;

      var vx = this.x;
      var vy = this.y;
      var vz = this.z;

      this.x = vx * (1 - yy2 - zz2) + vy * (xy2 - wz2) + vz * (xz2 + wy2);
      this.y = vx * (xy2 + wz2) + vy * (1 - xx2 - zz2) + vz * (yz2 - wx2);
      this.z = vx * (xz2 - wy2) + vy * (yz2 + wx2) + vz * (1 - xx2 - yy2);
      return this;
    },

    /**
     * Transforms `this` with the given matrix.
     * @chainable
     * @method selfTransformMat4
     * @param {Mat4} mat
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfTransformMat4: function(mat){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = 1;
      var d = mat.data;
      this.x = x * d[0] + y * d[4] + z * d[8]  + w * d[12];
      this.y = x * d[1] + y * d[5] + z * d[9]  + w * d[13];
      this.z = x * d[2] + y * d[6] + z * d[10] + w * d[14];
      return this;
    },

    /**
     * Transforms `this` with the given matrix.
     * @chainable
     * @method selfTransformMat3
     * @param {Mat3} mat
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfTransformMat3: function(mat){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var d = mat.data;
      this.x = x * d[0] + y * d[3] + z * d[6];
      this.y = x * d[1] + y * d[4] + z * d[7];
      this.z = x * d[2] + y * d[5] + z * d[8];
      return this;
    },

    /**
     * Transforms `this` with the given matrix. The `z` component of `this` keeps untouched.
     * @chainable
     * @method selfTransformMat2
     * @param {Mat3} mat
     * @return {Vec3} Reference to `this` for chaining.
     */
    selfTransformMat2: function(mat){
      var x = this.x;
      var y = this.y;
      var d = mat.data;
      this.x = x * d[0] + y * d[2];
      this.y = x * d[1] + y * d[3];
      return this;
    }
  };


  /**
   * Creates a new vector. The method should be called with three or no arguments. If less than three arguments are given
   * then some components of the resulting vector are going to be `undefined`.
   * @static
   * @method create
   * @param {Number} [x] The x component
   * @param {Number} [y] The y component
   * @param {Number} [z] The z component
   * @return {Vec3} A new vector.
   */
  Vec3.create = function(x, y, z){
    if (x != null){
      return new Vec3(x, y, z);
    }
    return new Vec3(0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 0.
   * @static
   * @method zero
   * @return {Vec3} A new vector.
   */
  Vec3.zero = function(){
    return new Vec3(0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 1.
   * @static
   * @method one
   * @return {Vec3} A new vector.
   */
  Vec3.one = function(){
    return new Vec3(1, 1, 1);
  };

  /**
   * Normalizes the given vector.
   * @static
   * @method normalize
   * @param {Vec3} vec The vector to normalize.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.normalize = function(vec, out){
    var x = vec.x;
    var y = vec.y;
    var z = vec.z;
    var d = 1.0 / Math.sqrt(x * x + y * y + z * z);
    out = out || new Vec3();
    out.x = x * d;
    out.y = y * d;
    out.z = z * d;
    return out;
  };

  /**
   * Calculates the cross product between two vectors.
   * @static
   * @method cross
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` argument or a new vector.
   */
  Vec3.cross = function(vecA, vecB, out){
    var x = vecA.y * vecB.z - vecA.z * vecB.y;
    var y = vecA.z * vecB.x - vecA.x * vecB.z;
    var z = vecA.x * vecB.y - vecA.y * vecB.x;
    out = out || new Vec3();
    out.x = x;
    out.y = y;
    out.z = z;
    return out;
  };

  /**
   * Inverts the given vector.
   * @static
   * @method invert
   * @param {Vec3} vec The vector to invert.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.invert = function(vec, out){
    out = out || new Vec3();
    out.x = 1.0 / vec.x;
    out.y = 1.0 / vec.y;
    out.z = 1.0 / vec.z;
    return out;
  };

  /**
   * Negates this vector.
   * @static
   * @method negate
   * @param {Vec3} vec The vector to negate.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.negate = function(vec, out){
    out = out || new Vec3();
    out.x = -vec.x;
    out.y = -vec.y;
    out.z = -vec.z;
    return out;
  };

  /**
   * Adds two vectors.
   * @static
   * @method add
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} out The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.add = function(vecA, vecB, out){
    out = out || new Vec3();
    out.x = vecA.x + vecB.x;
    out.y = vecA.y + vecB.y;
    out.z = vecA.z + vecB.z;
    return out;
  };

  /**
   * Adds a scalar to each component of a vector.
   * @static
   * @method addScalar
   * @param {Vec3} vec The first vector.
   * @param {Vec3} scalar The scalar to add.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.addScalar = function(vec, scalar, out){
    out = out || new Vec3();
    out.x = vec.x + scalar;
    out.y = vec.y + scalar;
    out.z = vec.z + scalar;
    return out;
  };

  /**
   * Subtracts the second vector from the first.
   * @static
   * @method subtract
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.subtract = function(vecA, vecB, out){
    out = out || new Vec3();
    out.x = vecA.x - vecB.x;
    out.y = vecA.y - vecB.y;
    out.z = vecA.z - vecB.z;
    return out;
  };

  /**
   * Subtracts a scalar from each component of a vector.
   * @static
   * @method subtractScalar
   * @param {Vec3} vec The first vector.
   * @param {Vec3} scalar The scalar to add.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.subtractScalar = function(vec, scalar, out){
    out = out || new Vec3();
    out.x = vec.x - scalar;
    out.y = vec.y - scalar;
    out.z = vec.z - scalar;
    return out;
  };

  /**
   * Multiplies two vectors.
   * @static
   * @method multiply
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.multiply = function(vecA, vecB, out){
    out = out || new Vec3();
    out.x = vecA.x * vecB.x;
    out.y = vecA.y * vecB.y;
    out.z = vecA.z * vecB.z;
    return out;
  };

  /**
   * Multiplies a scalar to each component of a vector.
   * @static
   * @method multiplyScalar
   * @param {Vec3} vec The first vector.
   * @param {Vec3} scalar The scalar to add.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.multiplyScalar = function(vec, scalar, out){
    out = out || new Vec3();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    out.z = vec.z * scalar;
    return out;
  };

  /**
   * Divides the components of the first vector by the components of the second vector.
   * @static
   * @method divide
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.divide = function(vecA, vecB, out){
    out = out || new Vec3();
    out.x = vecA.x / vecB.x;
    out.y = vecA.y / vecB.y;
    out.z = vecA.z / vecB.z;
    return out;
  };

  /**
   * Divides the components of the first vector by the scalar.
   * @static
   * @method divideScalar
   * @param {Vec3} vec The first vector.
   * @param {Number} scalar The scalar to use for division.
   * @param {Vec3} out The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.divideScalar = function(vec, scalar, out){
    scalar = 1 / scalar;
    out = out || new Vec3();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    out.z = vec.z * scalar;
    return out;
  };

  /**
   * Multiplies two vectors and adds the third vector.
   * @static
   * @method multiplyAdd
   * @param {Vec3} vecA The vector to multiply.
   * @param {Vec3} vecB The vector to multiply.
   * @param {Vec3} add The vector to add on top of the multiplication.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.multiplyAdd = function(vecA, vecB, add, out){
    out = out || new Vec3();
    out.x = vecA.x * vecB.x + add.x;
    out.y = vecA.y * vecB.y + add.y;
    out.z = vecA.z * vecB.z + add.z;
    return out;
  };

  /**
   * Multiplies a vector with a scalar and adds another vector.
   * @static
   * @method multiplyAdd
   * @param {Vec3} vecA The vector to multiply.
   * @param {Number} mul The scalar to multiply.
   * @param {Vec3} add The vector to add on top of the multiplication.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.multiplyScalarAdd = function(vecA, mul, add, out){
    out = out || new Vec3();
    out.x = vecA.x * mul + add.x;
    out.y = vecA.y * mul + add.y;
    out.z = vecA.z * mul + add.z;
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector by using the given min and max vectors.
   * @static
   * @method clamp
   * @param {Vec3} a The vector to clamp.
   * @param {Vec3} min Vector with the minimum component values.
   * @param {Vec3} max Vector with the maximum component values.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.clamp = function(a, min, max, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var minX = min.x;
    var minY = min.y;
    var minZ = min.z;
    var maxX = max.x;
    var maxY = max.y;
    var maxZ = max.z;
    out = out || new Vec3();
    out.x = x < minX ? minX : (x > maxX ? maxX : x);
    out.y = y < minY ? minY : (y > maxY ? maxY : y);
    out.z = z < minZ ? minZ : (z > maxZ ? maxZ : z);
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector by using the given min and max scalars.
   * @static
   * @method clampScalar
   * @param {Vec3} a The vector to clamp.
   * @param {Number} min The minimum scalar value.
   * @param {Number} max The maximum scalar value.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.clampScalar = function(a, min, max, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    out = out || new Vec3();
    out.x = x < min ? min : (x > max ? max : x);
    out.y = y < min ? min : (y > max ? max : y);
    out.z = z < min ? min : (z > max ? max : z);
    return out;
  };

  /**
   * Performs a component wise min operation on the the given vectors.
   * @static
   * @method min
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.min = function(a, b, out){
    var aX = a.x;
    var aY = a.y;
    var aZ = a.z;
    var bX = b.x;
    var bY = b.y;
    var bZ = b.z;
    out = out || new Vec3();
    out.x = aX < bX ? aX: bX;
    out.y = aY < bY ? aY: bY;
    out.z = aZ < bZ ? aZ: bZ;
    return out;
  };

  /**
   * Performs a component wise min operation on the the given vector and a scalar value.
   * @static
   * @method minScalar
   * @param {Vec3} a The vector.
   * @param {Number} scalar The scalar.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.minScalar = function(a, scalar, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    out = out || new Vec3();
    out.x = x < scalar ? x : scalar;
    out.y = y < scalar ? y : scalar;
    out.z = z < scalar ? z : scalar;
    return out;
  };

  /**
   * Performs a component wise max operation on the the given vectors.
   * @static
   * @method max
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.max = function(a, b, out){
    var aX = a.x;
    var aY = a.y;
    var aZ = a.z;
    var bX = b.x;
    var bY = b.y;
    var bZ = b.z;
    out = out || new Vec3();
    out.x = aX > bX ? aX: bX;
    out.y = aY > bY ? aY: bY;
    out.z = aZ > bZ ? aZ: bZ;
    return out;
  };

  /**
   * Performs a component wise max operation on the the given vector and a scalar value.
   * @static
   * @method maxScalar
   * @param {Vec3} a The vector.
   * @param {Number} scalar The scalar.
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.maxScalar = function(a, scalar, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    out = out || new Vec3();
    out.x = x > scalar ? x : scalar;
    out.y = y > scalar ? y : scalar;
    out.z = z > scalar ? z : scalar;
    return out;
  };

  /**
   * Performs a component wise linear interpolation between the given two vectors.
   * @static
   * @method lerp
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.lerp = function(a, b, t, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    out = out || new Vec3();
    out.x = x + (b.x - x) * t;
    out.y = y + (b.y - y) * t;
    out.z = z + (b.z - z) * t;
    return out;
  };

  /**
   * Performs a component wise barycentric interpolation of the given vectors.
   * @static
   * @method barycentric
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Vec3} c The third vector.
   * @param {Number} t1 The first interpolation value. Assumed to be in range [0:1].
   * @param {Number} t2 The second interpolation value. Assumed to be in range [0:1].
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.barycentric = function(a, b, c, t1, t2, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    out = out || new Vec3();
    out.x = x + t1 * (b.x - x) + t2 * (c.x - x);
    out.y = y + t1 * (b.y - y) + t2 * (c.y - y);
    out.z = z + t1 * (b.z - z) + t2 * (c.z - z);
    return out;
  };

  /**
   * Performs a component wise smooth interpolation between the given two vectors.
   * @static
   * @method smooth
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec3} [out] The vector to write to.
   * @return {Vec3} The given `out` parameter or a new vector.
   */
  Vec3.smooth = function(a, b, t, out){
    t = ((t > 1) ? 1 : ((t < 0) ? 0 : t));
    t = t * t * (3 - 2 * t);
    var x = a.x;
    var y = a.y;
    var z = a.z;
    out = out || new Vec3();
    out.x = x + (b.x - x) * t;
    out.y = y + (b.y - y) * t;
    out.z = z + (b.z - z) * t;
    return out;
  };

  /**
   * Tries to converts the given data to a vector
   * @static
   * @method convert
   * @param {Vec2|Vec3|Vec4|Quat|Array|number} data
   * @return {Vec3}
   */
  Vec3.convert = function(data){
    if (Array.isArray(data)){
      return new Vec3(
        data[0] || 0,
        data[1] || 0,
        data[2] || 0
      );
    }
    if (typeof data === 'number') {
      return new Vec3(data, data, data);
    }
    return new Vec3(
      data.x || 0,
      data.y || 0,
      data.z || 0
    );
  };
}(window));

(function(window){
  'use strict';

  /**
   * Describes a vector with four components.
   *
   * @class Vec4
   * @constructor
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   * @param {Number} w
   */
  var Vec4 = function(x, y, z, w){
    /**
     * @attribute x
     * @type {Number}
     */
    this.x = x;
    /**
     * @attribute y
     * @type {Number}
     */
    this.y = y;
    /**
     * @attribute z
     * @type {Number}
     */
    this.z = z;
    /**
     * @attribute w
     * @type {Number}
     */
    this.w = w;
  };

  window.Vec4 = Vec4;

  Vec4.prototype = {

    /**
     * Initializes the components of this vector with given values.
     * @chainable
     * @method init
     * @param {Number} x value for X component
     * @param {Number} y value for Y component
     * @param {Number} z value for Z component
     * @param {Number} w value for W component
     * @return {Vec4} this vector for chaining
     */
    init: function(x, y, z, w){
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    },

    /**
     * Initializes the components of this vector by taking the components from the given vector.
     * @chainable
     * @method initFrom
     * @param {Vec4} other The vector to read from
     * @return {Vec4}
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      this.z = other.z;
      this.w = other.w;
      return this;
    },

    /**
     * Initializes the components of this vector by taking values from the given array in successive order.
     * @chainable
     * @method initFromBuffer
     * @param {Array} buffer The array to read from
     * @param {Number} [offset=0] The zero based index at which start reading the values
     * @return {Vec4}
     */
    initFromBuffer: function(buffer, offset){
      offset = offset || 0;
      this.x = buffer[offset];
      this.y = buffer[offset + 1];
      this.z = buffer[offset + 2];
      this.w = buffer[offset + 3];
      return this;
    },

    /**
     * Creates a copy of this vector
     * @method clone
     * @return {Vec4} The cloned vector
     */
    clone: function(){
      return new Vec4(this.x, this.y, this.z, this.w);
    },

    /**
     * Copies the components successively into the given array.
     * @chainable
     * @method copy
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {Number} [offset=0] Zero based index where to start writing in the array
     * @return {Array|Float32Array}
     */
    copyTo: function(buffer, offset){
      offset = offset || 0;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
      buffer[offset + 2] = this.z;
      buffer[offset + 3] = this.w;
      return buffer;
    },

    /**
     * Returns an array filled with the values of the components of this vector
     * @method dump
     * @return {Array}
     */
    dump: function(){
      return [this.x, this.y, this.z, this.w];
    },

    /**
     * Checks for component wise equality with given vector
     * @method equals
     * @param {Vec4} other The vector to compare with
     * @return {Boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y) && (this.z === other.z) && (this.w === other.w));
    },

    /**
     * Calculates the length of this vector
     * @method length
     * @return {Number} The length.
     */
    length: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      return Math.sqrt(x * x + y * y + z * z + w * w);
    },

    /**
     * Calculates the squared length of this vector
     * @method lengthSquared
     * @return {Number} The squared length.
     */
    lengthSquared: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      return x * x + y * y + z * z + w * w;
    },

    /**
     * Calculates the distance to the given vector
     * @method distance
     * @param {Vec4} other The distant vector
     * @return {Number} The distance between the vectors.
     */
    distance: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      var z = this.z - other.z;
      var w = this.w - other.w;
      return Math.sqrt(x * x + y * y + z * z + w * w);
    },

    /**
     * Calculates the squared distance to the given vector
     * @method distanceSquared
     * @param {Vec4} other The distant vector
     * @return {Number} The squared distance between the vectors.
     */
    distanceSquared: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      var z = this.z - other.z;
      var w = this.w - other.w;
      return x * x + y * y + z * z + w * w;
    },

    /**
     * Calculates the dot product with the given vector
     * @method dot
     * @param {Vec4} other
     * @return {Number} The dot product.
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
    },

    /**
     * Normalizes this vector. Applies the result to this vector.
     * @chainable
     * @method selfNormalize
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfNormalize: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      var d = 1.0 / Math.sqrt(x * x + y * y + z * z + w * w);
      this.x *= d;
      this.y *= d;
      this.z *= d;
      this.w *= d;
      return this;
    },

    /**
     * Inverts this vector.
     * @chainable
     * @method selfInvert
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfInvert: function(){
      this.x = 1.0 / this.x;
      this.y = 1.0 / this.y;
      this.z = 1.0 / this.z;
      this.w = 1.0 / this.w;
      return this;
    },

    /**
     * Negates the components of this vector.
     * @chainable
     * @method selfNegate
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    },

    /**
     * Adds the given vector to `this`.
     * @chainable
     * @method selfAdd
     * @param {Vec4} other The vector to add
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
      this.w += other.w;
      return this;
    },

    /**
     * Adds the given scalar to `this`
     * @chainable
     * @method selfAddScalar
     * @param {Number} scalar The scalar to add.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfAddScalar: function(scalar){
      this.x += scalar;
      this.y += scalar;
      this.z += scalar;
      this.w += scalar;
      return this;
    },

    /**
     * Subtracts the given from this vector from `this`.
     * @chainable
     * @method selfSubtract
     * @param {Vec4} other The vector to subtract.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
      this.w -= other.w;
      return this;
    },

    /**
     * Subtracts the given scalar from `this`.
     * @return {Vec4} Reference to `this` for chaining.
     * @method selfSubtractScalar
     * @param {Vec4} scalar The scalar to subtract.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfSubtractScalar: function(scalar){
      this.x -= scalar;
      this.y -= scalar;
      this.z -= scalar;
      this.w -= scalar;
      return this;
    },

    /**
     * Multiplies `this` with the given vector.
     * @chainable
     * @method selfMultiply
     * @param {Vec4} other The vector to multiply.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfMultiply: function(other){
      this.x *= other.x;
      this.y *= other.y;
      this.z *= other.z;
      this.w *= other.w;
      return this;
    },

    /**
     * Multiplies `this` with the given scalar.
     * @chainable
     * @method selfMultiplyScalar
     * @param {Number} scalar The scalar to multiply.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfMultiplyScalar: function(scalar){
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      this.w *= scalar;
      return this;
    },

    /**
     * Divides `this` by the given vector.
     * @chainable
     * @method selfDivide
     * @param {Vec4} other The vector to divide with.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfDivide: function(other){
      this.x /= other.x;
      this.y /= other.y;
      this.z /= other.z;
      this.w /= other.w;
      return this;
    },

    /**
     * Divides `this` by the given scalar.
     * @method selfDivideScalar
     * @param {Number} scalar The scalar to divide with.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfDivideScalar: function(scalar){
      scalar = 1.0 / scalar;
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      this.w *= scalar;
      return this;
    },

    /**
     * Multiplies `this` with the first vector and adds the second after.
     * @chainable
     * @method selfMultiplyAdd
     * @param {Vec4} mul The vector to multiply.
     * @param {Vec4} add The vector to add on top of the multiplication.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfMultiplyAdd: function(mul, add){
      this.x = this.x * mul.x + add.x;
      this.y = this.y * mul.y + add.y;
      this.z = this.z * mul.z + add.z;
      this.w = this.w * mul.w + add.w;
      return this;
    },

    /**
     * Multiplies `this` with the first vector and adds the second scalar after.
     * @chainable
     * @method selfMultiplyScalarAdd
     * @param {Number} mul The scalar to multiply.
     * @param {Vec4} add The vector to add on top of the multiplication.
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfMultiplyScalarAdd: function(mul, add){
      this.x = this.x * mul + add.x;
      this.y = this.y * mul + add.y;
      this.z = this.z * mul + add.z;
      this.w = this.w * mul + add.w;
      return this;
    },

    /**
     * Transforms `this` with the given quaternion. The `w` component of `this` keeps untouched.
     * @chainable
     * @method selfTransformQuat
     * @param {Quat} quat
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfTransformQuat: function(quat){
      var x = quat.x;
      var y = quat.y;
      var z = quat.z;
      var w = quat.w;

      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var wx2 = w * x2;
      var wy2 = w * y2;
      var wz2 = w * z2;

      var xx2 = x * x2;
      var xy2 = x * y2;
      var xz2 = x * z2;

      var yy2 = y * y2;
      var yz2 = y * z2;
      var zz2 = y * z2;

      var vx = this.x;
      var vy = this.y;
      var vz = this.z;

      this.x = vx * (1 - yy2 - zz2) + vy * (xy2 - wz2) + vz * (xz2 + wy2);
      this.y = vx * (xy2 + wz2) + vy * (1 - xx2 - zz2) + vz * (yz2 - wx2);
      this.z = vx * (xz2 - wy2) + vy * (yz2 + wx2) + vz * (1 - xx2 - yy2);
      return this;
    },

    /**
     * Transforms `this` with the given matrix.
     * @chainable
     * @method selfTransformMat4
     * @param {Mat4} mat
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfTransformMat4: function(mat){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      var d = mat.data;
      this.x = x * d[0] + y * d[4] + z * d[8]  + w * d[12];
      this.y = x * d[1] + y * d[5] + z * d[9]  + w * d[13];
      this.z = x * d[2] + y * d[6] + z * d[10] + w * d[14];
      this.w = x * d[3] + y * d[7] + z * d[11] + w * d[15];
      return this;
    },

    /**
     * Transforms `this` with the given matrix. The `w` component of `this` keeps untouched.
     * @chainable
     * @method selfTransformMat3
     * @param {Mat3} mat
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfTransformMat3: function(mat){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var d = mat.data;
      this.x = x * d[0] + y * d[3] + z * d[6];
      this.y = x * d[1] + y * d[4] + z * d[7];
      this.z = x * d[2] + y * d[5] + z * d[8];
      this.w = 1;
      return this;
    },

    /**
     * Transforms `this` with the given matrix. The `z` and `w` components of `this` keep untouched.
     * @chainable
     * @method selfTransformMat2
     * @param {Mat3} mat
     * @return {Vec4} Reference to `this` for chaining.
     */
    selfTransformMat2: function(mat){
      var x = this.x;
      var y = this.y;
      var d = mat.data;
      this.x = x * d[0] + y * d[2];
      this.y = x * d[1] + y * d[3];
      return this;
    }
  };


  /**
   * Creates a new vector. The method should be called with four or no arguments. If less than four arguments are given
   * then some components of the resulting vector are going to be `undefined`.
   * @static
   * @method create
   * @param {Number} [x] The x component
   * @param {Number} [y] The y component
   * @param {Number} [z] The z component
   * @param {Number} [w] The w component
   * @return {Vec4} A new vector.
   */
  Vec4.create = function(x, y, z, w){
    if (x != null){
      return new Vec4(x, y, z, w);
    }
    return new Vec4(0, 0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 0.
   * @static
   * @method zero
   * @return {Vec4} A new vector.
   */
  Vec4.zero = function(){
    return new Vec4(0, 0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 1.
   * @static
   * @method one
   * @return {Vec4} A new vector.
   */
  Vec4.one = function(){
    return new Vec4(1, 1, 1, 1);
  };

  /**
   * Normalizes the given vector.
   * @static
   * @method normalize
   * @param {Vec4} vec The vector to normalize.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.normalize = function(vec, out){
    var x = vec.x;
    var y = vec.y;
    var z = vec.z;
    var w = vec.w;
    var d = 1.0 / Math.sqrt(x * x + y * y + z * z + w * w);
    out = out || new Vec4();
    out.x = x * d;
    out.y = y * d;
    out.z = z * d;
    out.w = w * d;
    return out;
  };

  /**
   * Inverts the given vector.
   * @static
   * @method invert
   * @param {Vec4} vec The vector to invert.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.invert = function(vec, out){
    out = out || new Vec4();
    out.x = 1.0 / vec.x;
    out.y = 1.0 / vec.y;
    out.z = 1.0 / vec.z;
    out.w = 1.0 / vec.w;
    return out;
  };

  /**
   * Negates this vector.
   * @static
   * @method negate
   * @param {Vec4} vec The vector to negate.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.negate = function(vec, out){
    out = out || new Vec4();
    out.x = -vec.x;
    out.y = -vec.y;
    out.z = -vec.z;
    out.w = -vec.w;
    return out;
  };

  /**
   * Adds two vectors.
   * @static
   * @method add
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} out The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.add = function(vecA, vecB, out){
    out = out || new Vec4();
    out.x = vecA.x + vecB.x;
    out.y = vecA.y + vecB.y;
    out.z = vecA.z + vecB.z;
    out.w = vecA.w + vecB.w;
    return out;
  };

  /**
   * Adds a scalar to each component of a vector.
   * @static
   * @method addScalar
   * @param {Vec4} vec The first vector.
   * @param {Vec4} scalar The scalar to add.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.addScalar = function(vec, scalar, out){
    out = out || new Vec4();
    out.x = vec.x + scalar;
    out.y = vec.y + scalar;
    out.z = vec.z + scalar;
    out.w = vec.w + scalar;
    return out;
  };

  /**
   * Subtracts the second vector from the first.
   * @static
   * @method subtract
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.subtract = function(vecA, vecB, out){
    out = out || new Vec4();
    out.x = vecA.x - vecB.x;
    out.y = vecA.y - vecB.y;
    out.z = vecA.z - vecB.z;
    out.w = vecA.w - vecB.w;
    return out;
  };

  /**
   * Subtracts a scalar from each component of a vector.
   * @static
   * @method subtractScalar
   * @param {Vec4} vec The first vector.
   * @param {Vec4} scalar The scalar to add.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.subtractScalar = function(vec, scalar, out){
    out = out || new Vec4();
    out.x = vec.x - scalar;
    out.y = vec.y - scalar;
    out.z = vec.z - scalar;
    out.w = vec.w - scalar;
    return out;
  };

  /**
   * Multiplies two vectors.
   * @static
   * @method multiply
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.multiply = function(vecA, vecB, out){
    out = out || new Vec4();
    out.x = vecA.x * vecB.x;
    out.y = vecA.y * vecB.y;
    out.z = vecA.z * vecB.z;
    out.w = vecA.w * vecB.w;
    return out;
  };

  /**
   * Multiplies a scalar to each component of a vector.
   * @static
   * @method multiplyScalar
   * @param {Vec4} vec The first vector.
   * @param {Vec4} scalar The scalar to add.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.multiplyScalar = function(vec, scalar, out){
    out = out || new Vec4();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    out.z = vec.z * scalar;
    out.w = vec.w * scalar;
    return out;
  };

  /**
   * Divides the components of the first vector by the components of the second vector.
   * @static
   * @method divide
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.divide = function(vecA, vecB, out){
    out = out || new Vec4();
    out.x = vecA.x / vecB.x;
    out.y = vecA.y / vecB.y;
    out.z = vecA.z / vecB.z;
    out.w = vecA.w / vecB.w;
    return out;
  };

  /**
   * Divides the components of the first vector by the scalar.
   * @static
   * @method divideScalar
   * @param {Vec4} vec The first vector.
   * @param {Number} scalar The scalar to use for division.
   * @param {Vec4} out The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.divideScalar = function(vec, scalar, out){
    scalar = 1.0 / scalar;
    out = out || new Vec4();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    out.z = vec.z * scalar;
    out.w = vec.w * scalar;
    return out;
  };

  /**
   * Multiplies two vectors and adds the third vector.
   * @static
   * @method multiplyAdd
   * @param {Vec4} vecA The vector to multiply.
   * @param {Vec4} vecB The vector to multiply.
   * @param {Vec4} add The vector to add on top of the multiplication.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.multiplyAdd = function(vecA, vecB, add, out){
    out = out || new Vec4();
    out.x = vecA.x * vecB.x + add.x;
    out.y = vecA.y * vecB.y + add.y;
    out.z = vecA.z * vecB.z + add.z;
    out.w = vecA.w * vecB.w + add.w;
    return out;
  };

  /**
   * Multiplies a vector with a scalar and adds another vector.
   * @static
   * @method multiplyAdd
   * @param {Vec4} vecA The vector to multiply.
   * @param {Number} mul The scalar to multiply.
   * @param {Vec4} add The vector to add on top of the multiplication.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.multiplyScalarAdd = function(vecA, mul, add, out){
    out = out || new Vec4();
    out.x = vecA.x * mul + add.x;
    out.y = vecA.y * mul + add.y;
    out.z = vecA.z * mul + add.z;
    out.w = vecA.w * mul + add.w;
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector by using the given min and max vectors.
   * @static
   * @method clamp
   * @param {Vec4} a The vector to clamp.
   * @param {Vec4} min Vector with the minimum component values.
   * @param {Vec4} max Vector with the maximum component values.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.clamp = function(a, min, max, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var w = a.w;
    var minX = min.x;
    var minY = min.y;
    var minZ = min.z;
    var minW = min.w;
    var maxX = max.x;
    var maxY = max.y;
    var maxZ = max.z;
    var maxW = max.w;
    out = out || new Vec4();
    out.x = x < minX ? minX : (x > maxX ? maxX : x);
    out.y = y < minY ? minY : (y > maxY ? maxY : y);
    out.z = z < minZ ? minZ : (z > maxZ ? maxZ : z);
    out.w = w < minW ? minW : (w > maxW ? maxW : w);
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector by using the given min and max scalars.
   * @static
   * @method clampScalar
   * @param {Vec4} a The vector to clamp.
   * @param {Number} min The minimum scalar value.
   * @param {Number} max The maximum scalar value.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.clampScalar = function(a, min, max, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var w = a.w;
    out = out || new Vec4();
    out.x = x < min ? min : (x > max ? max : x);
    out.y = y < min ? min : (y > max ? max : y);
    out.z = z < min ? min : (z > max ? max : z);
    out.w = w < min ? min : (w > max ? max : w);
    return out;
  };

  /**
   * Performs a component wise min operation on the the given vectors.
   * @static
   * @method min
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.min = function(a, b, out){
    var aX = a.x;
    var aY = a.y;
    var aZ = a.z;
    var aW = a.w;
    var bX = b.x;
    var bY = b.y;
    var bZ = b.z;
    var bW = b.w;
    out = out || new Vec4();
    out.x = aX < bX ? aX: bX;
    out.y = aY < bY ? aY: bY;
    out.z = aZ < bZ ? aZ: bZ;
    out.w = aW < bW ? aW: bW;
    return out;
  };

  /**
   * Performs a component wise min operation on the the given vector and a scalar value.
   * @static
   * @method minScalar
   * @param {Vec4} a The vector.
   * @param {Number} scalar The scalar.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.minScalar = function(a, scalar, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var w = a.w;
    out = out || new Vec4();
    out.x = x < scalar ? x : scalar;
    out.y = y < scalar ? y : scalar;
    out.z = z < scalar ? z : scalar;
    out.w = w < scalar ? w : scalar;
    return out;
  };

  /**
   * Performs a component wise max operation on the the given vectors.
   * @static
   * @method max
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.max = function(a, b, out){
    var aX = a.x;
    var aY = a.y;
    var aZ = a.z;
    var aW = a.w;
    var bX = b.x;
    var bY = b.y;
    var bZ = b.z;
    var bW = b.w;
    out = out || new Vec4();
    out.x = aX > bX ? aX: bX;
    out.y = aY > bY ? aY: bY;
    out.z = aZ > bZ ? aZ: bZ;
    out.w = aW > bW ? aW: bW;
    return out;
  };

  /**
   * Performs a component wise max operation on the the given vector and a scalar value.
   * @static
   * @method maxScalar
   * @param {Vec4} a The vector.
   * @param {Number} scalar The scalar.
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.maxScalar = function(a, scalar, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var w = a.w;
    out = out || new Vec4();
    out.x = x > scalar ? x : scalar;
    out.y = y > scalar ? y : scalar;
    out.z = z > scalar ? z : scalar;
    out.w = w > scalar ? w : scalar;
    return out;
  };

  /**
   * Performs a component wise linear interpolation between the given two vectors.
   * @static
   * @method lerp
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.lerp = function(a, b, t, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var w = a.w;
    out = out || new Vec4();
    out.x = x + (b.x - x) * t;
    out.y = y + (b.y - y) * t;
    out.z = z + (b.z - z) * t;
    out.w = w + (b.w - w) * t;
    return out;
  };

  /**
   * Performs a component wise barycentric interpolation of the given vectors.
   * @static
   * @method barycentric
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Vec4} c The third vector.
   * @param {Number} t1 The first interpolation value. Assumed to be in range [0:1].
   * @param {Number} t2 The second interpolation value. Assumed to be in range [0:1].
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.barycentric = function(a, b, c, t1, t2, out){
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var w = a.w;
    out = out || new Vec4();
    out.x = x + t1 * (b.x - x) + t2 * (c.x - x);
    out.y = y + t1 * (b.y - y) + t2 * (c.y - y);
    out.z = z + t1 * (b.z - z) + t2 * (c.z - z);
    out.w = w + t1 * (b.w - w) + t2 * (c.w - w);
    return out;
  };

  /**
   * Performs a component wise smooth interpolation between the given two vectors.
   * @static
   * @method smooth
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec4} [out] The vector to write to.
   * @return {Vec4} The given `out` parameter or a new vector.
   */
  Vec4.smooth = function(a, b, t, out){
    t = ((t > 1) ? 1 : ((t < 0) ? 0 : t));
    t = t * t * (3 - 2 * t);
    var x = a.x;
    var y = a.y;
    var z = a.z;
    var w = a.w;
    out = out || new Vec4();
    out.x = x + (b.x - x) * t;
    out.y = y + (b.y - y) * t;
    out.z = z + (b.z - z) * t;
    out.w = w + (b.w - w) * t;
    return out;
  };

  /**
   * Tries to converts the given data to a vector
   * @static
   * @method convert
   * @param {Vec2|Vec3|Vec4|Quat|Array|number} data
   * @return {Vec4}
   */
  Vec4.convert = function(data){
    if (Array.isArray(data)){
      return new Vec4(
        data[0] || 0,
        data[1] || 0,
        data[2] || 0,
        data[3] || 0
      );
    }
    if (typeof data === 'number') {
      return new Vec4(data, data, data, data);
    }
    return new Vec4(
      data.x || 0,
      data.y || 0,
      data.z || 0,
      data.w || 0
    );
  };
}(window));

(function(window){
  'use strict';

  /**
   * Describes a quaternion.
   * @class Quat
   * @constructor
   * @param {number} x value for X component
   * @param {number} y value for Y component
   * @param {number} z value for Z component
   * @param {number} w value for W component
   */
  var Quat = function(x, y, z, w){
    /**
     * @attribute x
     * @type {Number}
     */
    this.x = x;
    /**
     * @attribute y
     * @type {Number}
     */
    this.y = y;
    /**
     * @attribute z
     * @type {Number}
     */
    this.z = z;
    /**
     * @attribute w
     * @type {Number}
     */
    this.w = w;
  };

  window.Quat = Quat;

  Quat.prototype = {
    /**
     * Initializes components of the quaternion with given values.
     * @method init
     * @param {number} x value for X component
     * @param {number} y value for Y component
     * @param {number} z value for Z component
     * @param {number} w value for W component
     * @return {Quat} Reference to `this` for chaining.
     */
    init: function(x, y, z, w){
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    },

    /**
     * Initializes the quaternion with `x`, `y` and `z` components set to `0` and `w` component set to `1`.
     * @method initIdentity
     * @return {Quat} Reference to `this` for chaining.
     */
    initIdentity: function(){
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 1;
      return this;
    },

    /**
     * Initializes the quaternion with all components set to `0`.
     * @method initZero
     * @return {Quat} Reference to `this` for chaining.
     */
    initZero: function(){
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 0;
      return this;
    },

    /**
     * Initializes the components of this quaternion by taking the components from the given quaternion or vector.
     * @method initFrom
     * @param {Quat|Vec4} other
     * @return {Quat} Reference to `this` for chaining.
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      this.z = other.z;
      this.w = other.w;
      return this;
    },

    /**
     * Initializes the components of this quaternion by taking values from the given array in successive order.
     * @chainable
     * @method initFromBuffer
     * @param {Array} buffer The array to read from
     * @param {Number} [offset=0] The zero based index at which start reading the values
     * @return {Quat} Reference to `this` for chaining.
     */
    initFromBuffer: function(buffer, offset){
      offset = offset || 0;
      this.x = buffer[offset];
      this.y = buffer[offset + 1];
      this.z = buffer[offset + 2];
      this.w = buffer[offset + 3];
      return this;
    },

    /**
     * Initializes the quaternion from axis and an angle.
     * @method initAxisAngle
     * @param {Vec3} axis The axis as vector
     * @param {number} angle The angle in degrees
     * @return {Quat} Reference to `this` for chaining.
     */
    initAxisAngle: function(axis, angle){
      var halfAngle = angle * 0.5;
      var scale = Math.sin(halfAngle);
      this.x = axis.x * scale;
      this.y = axis.y * scale;
      this.z = axis.z * scale;
      this.w = Math.cos(halfAngle);
      return this;
    },

    /**
     * Initializes the quaternion from yaw pitch and roll angles.
     * @method initYawPitchRoll
     * @param {number} yaw The yaw angle in radians
     * @param {number} pitch The pitch angle in radians
     * @param {number} roll The roll angle in radians
     * @return {Quat} Reference to `this` for chaining.
     */
    initYawPitchRoll: function(yaw, pitch, roll){
      var xHalf = pitch * 0.5;
      var xSin = Math.sin(xHalf);
      var xCos = Math.cos(xHalf);

      var yHalf = yaw * 0.5;
      var ySin = Math.sin(yHalf);
      var yCos = Math.cos(yHalf);

      var zHalf = roll * 0.5;
      var zSin = Math.sin(zHalf);
      var zCos = Math.cos(zHalf);

      this.x = yCos * xSin * zCos + ySin * xCos * zSin;
      this.y = ySin * xCos * zCos - yCos * xSin * zSin;
      this.z = yCos * xCos * zSin - ySin * xSin * zCos;
      this.w = yCos * xCos * zCos + ySin * xSin * zSin;
      return this;
    },

    /**
     * Creates a copy of this quaternion
     * @method clone
     * @return {Quat} The cloned quaternion
     */
    clone: function(){
      return new Quat(this.x, this.y, this.z, this.w);
    },

    /**
     * Copies the components successively into the given array.
     * @chainable
     * @method copy
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {Number} [offset=0] Zero based index where to start writing in the array
     * @return {Array|Float32Array}
     */
    copyTo: function(buffer, offset){
      offset = offset || 0;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
      buffer[offset + 2] = this.z;
      buffer[offset + 3] = this.w;
    },

    /**
     * Returns an array filled with the values of the components of this quaternion
     * @method dump
     * @return {Array}
     */
    dump: function(){
      return [this.x, this.y, this.z, this.w];
    },

    /**
     * Checks for component wise equality with given quaternion
     * @method equals
     * @param {Quat|Vec4} other The quaternion to compare with
     * @return {Boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y) && (this.z === other.z) && (this.w === other.w));
    },

    /**
     * Calculates the length of this quaternion
     * @method length
     * @return {Number} The length.
     */
    length: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      return Math.sqrt(x * x + y * y + z * z + w * w);
    },

    /**
     * Calculates the squared length of this quaternion
     * @method lengthSquared
     * @return {Number} The squared length.
     */
    lengthSquared: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      return x * x + y * y + z * z + w * w;
    },

    /**
     * Calculates the dot product with the given quaternion
     * @method dot
     * @param {Quat} other
     * @return {Number} The dot product.
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
    },

    /**
     * Negates the components of `this`
     * @method selfNegate
     * @return {Quat} Reference to `this` for chaining.
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    },

    /**
     * Negates the `x`, `y` and `z` components of `this`
     * @method selfConjugate
     * @return {Quat} Reference to `this` for chaining.
     */
    selfConjugate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    },

    /**
     * Normalizes `this` so that `length` should be `1`
     * @method selfNormalize
     * @return {Quat} Reference to `this` for chaining.
     */
    selfNormalize: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      var d = 1.0 / Math.sqrt(x * x + y * y + z * z + w * w);
      this.x = x * d;
      this.y = y * d;
      this.z = z * d;
      this.w = w * d;
      return this;
    },

    /**
     * Inverts `this` so that multiplication with the original would return the identity quaternion.
     * @method selfInvert
     * @return {Quat} Reference to `this` for chaining.
     */
    selfInvert: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      var d = 1.0 / Math.sqrt(x * x + y * y + z * z + w * w);
      this.x = -x * d;
      this.y = -y * d;
      this.z = -z * d;
      this.w =  w * d;
      return this;
    },

    /**
     * Performs a component wise addition with `other`
     * @method selfAdd
     * @param {Quat|Vec4} other
     * @return {Quat} Reference to `this` for chaining.
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
      this.w += other.w;
      return this;
    },

    /**
     * Performs a component wise subtraction with `other`
     * @method selfSubtract
     * @param {Quat|Vec4} other
     * @return {Quat} Reference to `this` for chaining.
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
      this.w -= other.w;
      return this;
    },

    /**
     * Performs a quaternion multiplication with `other`
     * @method selfMultiply
     * @param {Quat|Vec4} other
     * @return {Quat} Reference to `this` for chaining.
     */
    selfMultiply: function(other){
      var x1 = this.x;
      var y1 = this.y;
      var z1 = this.z;
      var w1 = this.w;

      var x2 = other.x;
      var y2 = other.y;
      var z2 = other.z;
      var w2 = other.w;

      this.x = x1 * w2 + x2 * w1 + y1 * z2 - z1 * y2;
      this.y = y1 * w2 + y2 * w1 + z1 * x2 - x1 * z2;
      this.z = z1 * w2 + z2 * w1 + x1 * y2 - y1 * x2;
      this.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
      return this;
    },

    /**
     * Performs a quaternion concatenation with `other`
     * @method selfConcat
     * @param {Quat} other
     * @return {Quat} Reference to `this` for chaining.
     */
    selfConcat: function(other){
      var x1 = other.x;
      var y1 = other.y;
      var z1 = other.z;
      var w1 = other.w;

      var x2 = this.x;
      var y2 = this.y;
      var z2 = this.z;
      var w2 = this.w;

      this.x = x1 * w2 + x2 * w1 + y1 * z2 - z1 * y2;
      this.y = y1 * w2 + y2 * w1 + z1 * x2 - x1 * z2;
      this.z = z1 * w2 + z2 * w1 + x1 * y2 - y1 * x2;
      this.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
      return this;
    },

    /**
     * Performs a division with `other`
     * @method selfDivide
     * @param {Quat} other
     * @return {Quat} Reference to `this` for chaining.
     */
    selfDivide: function(other){
      var x1 = this.x;
      var y1 = this.y;
      var z1 = this.z;
      var w1 = this.w;

      var x2 = other.x;
      var y2 = other.y;
      var z2 = other.z;
      var w2 = other.w;

      // invert
      var s = 1.0 / (x2 * x2 + y2 * y2 + z2 * z2 + w2 * w2);
      x2 = -x2 * s;
      y2 = -y2 * s;
      z2 = -z2 * s;
      w2 = w2 * s;
      // multiply
      this.x = x1 * w2 + x2 * w1 + y1 * z2 - z1 * y2;
      this.y = y1 * w2 + y2 * w1 + z1 * x2 - x1 * z2;
      this.z = z1 * w2 + z2 * w1 + x1 * y2 - y1 * x2;
      this.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
      return this;
    },

    /**
     * Rotates the given point or vector with `this`
     * @method transform
     * @param vec
     * @return {Vec3|Vec4}
     */
    transform: function(vec){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;

      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var wx2 = w * x2;
      var wy2 = w * y2;
      var wz2 = w * z2;

      var xx2 = x * x2;
      var xy2 = x * y2;
      var xz2 = x * z2;

      var yy2 = y * y2;
      var yz2 = y * z2;
      var zz2 = y * z2;

      var vx = vec.x;
      var vy = vec.y;
      var vz = vec.z;

      vec.x = vx * (1 - yy2 - zz2) + vy * (xy2 - wz2) + vz * (xz2 + wy2);
      vec.y = vx * (xy2 + wz2) + vy * (1 - xx2 - zz2) + vz * (yz2 - wx2);
      vec.z = vx * (xz2 - wy2) + vy * (yz2 + wx2) + vz * (1 - xx2 - yy2);
      return vec;
    }
  };

  /**
   * Creates a new quaternion. The method should be called with four or no arguments. If less than four arguments are given
   * then some components of the resulting quaternion are going to be `undefined`.
   * @static
   * @method create
   * @param {Number} [x] The x component
   * @param {Number} [y] The y component
   * @param {Number} [z] The z component
   * @param {Number} [w] The w component
   * @return {Quat}
   */
  Quat.create = function(x, y, z, w){
    if (x !== undefined){
      return new Quat(x, y, z, w);
    }
    return new Quat(0, 0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 0.
   * @static
   * @method zero
   * @return {Quat} A new quaternion
   */
  Quat.zero = function(){
    return new Quat(0, 0, 0, 0);
  };

  /**
   * Creates a new vector with `x`, `y` and `z` components set to `0` and `w` component set to `1`.
   * @static
   * @method identity
   * @return {Quat} A new quaternion
   */
  Quat.identity = function(){
    return new Quat(0, 0, 0, 1);
  };

  /**
   * Creates a new quaternion from given axis vector and an angle
   * @static
   * @method fromAxisAngle
   * @param {Vec3} axis The axis vector
   * @param {number} angle The angle in degree
   * @return {Quat} A new quaternion
   */
  Quat.fromAxisAngle = function(axis, angle){
    return Quat.identity().initAxisAngle(axis, angle);
  };

  /**
   * Creates a new quaternion from given `yaw` `pitch` and `roll` angles
   * @static
   * @method fromYawPitchRoll
   * @param {number} yaw The yaw angle in radians
   * @param {number} pitch The pitch angle in radians
   * @param {number} roll The roll angle in radians
   * @return {Quat}
   */
  Quat.fromYawPitchRoll = function(yaw, pitch, roll){
    return Quat.identity().initYawPitchRoll(yaw, pitch, roll);
  };

  /**
   * Negates the given quaternion.
   * @static
   * @method negate
   * @param {Quat} quat The quaternion to negate.
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.negate = function(quat, out){
    out = out || new Quat();
    out.x = -quat.x;
    out.y = -quat.y;
    out.z = -quat.z;
    out.w = -quat.w;
    return out;
  };

  /**
   * Conjugates the given quaternion.
   * @static
   * @method conjugate
   * @param {Quat} quat The quaternion to conjugate.
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.conjugate = function(quat, out){
    out = out || new Quat();
    out.x = -quat.x;
    out.y = -quat.y;
    out.z = -quat.z;
    out.w =  quat.w;
    return out;
  };

  /**
   * Normalizes the given quaternion
   * @static
   * @method normalize
   * @param {Quat} quat The quaternion to normalize.
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.normalize = function(quat, out){
    var x = quat.x;
    var y = quat.y;
    var z = quat.z;
    var w = quat.w;
    var d = 1.0 / Math.sqrt(x * x + y * y + z * z + w * w);
    out = out || new Quat();
    out.x = x * d;
    out.y = y * d;
    out.z = z * d;
    out.w = w * d;
    return out;
  };

  /**
   * Inverts the given quaternion
   * @static
   * @method invert
   * @param {Quat} quat The quaternion to invert.
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.invert = function(quat, out){
    var x = quat.x;
    var y = quat.y;
    var z = quat.z;
    var w = quat.w;
    var d = 1.0 / Math.sqrt(x * x + y * y + z * z + w * w);
    out = out || new Quat();
    out.x = -x * d;
    out.y = -y * d;
    out.z = -z * d;
    out.w =  w * d;
    return out;
  };

  /**
   * Adds two quaternions
   * @static
   * @method add
   * @param {Quat} quatA The first quaternion
   * @param {Quat} quatB The second quaternion
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.add = function(quatA, quatB, out){
    out = out || new Quat();
    out.x = quatA.x + quatB.x;
    out.y = quatA.y + quatB.y;
    out.z = quatA.z + quatB.z;
    out.w = quatA.w + quatB.w;
    return out;
  };

  /**
   * Subtracts the second quaternion from the first.
   * @static
   * @method subtract
   * @param {Quat} quatA The first quaternion
   * @param {Quat} quatB The second quaternion
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.subtract = function(quatA, quatB, out){
    out = out || new Quat();
    out.x = quatA.x - quatB.x;
    out.y = quatA.y - quatB.y;
    out.z = quatA.z - quatB.z;
    out.w = quatA.w - quatB.w;
    return out;
  };

  /**
   * Multiplies two quaternions
   * @static
   * @method multiply
   * @param {Quat} quatA The first quaternion
   * @param {Quat} quatB The second quaternion
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.multiply = function(quatA, quatB, out){
    var x1 = quatA.x;
    var y1 = quatA.y;
    var z1 = quatA.z;
    var w1 = quatA.w;

    var x2 = quatB.x;
    var y2 = quatB.y;
    var z2 = quatB.z;
    var w2 = quatB.w;

    out = out || new Quat();
    out.x = x1 * w2 + x2 * w1 + y1 * z2 - z1 * y2;
    out.y = y1 * w2 + y2 * w1 + z1 * x2 - x1 * z2;
    out.z = z1 * w2 + z2 * w1 + x1 * y2 - y1 * x2;
    out.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
    return out;
  };


  /**
   * Concatenates two quaternions
   * @static
   * @method concat
   * @param {Quat} quatA The first quaternion
   * @param {Quat} quatB The second quaternion
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.concat = function(quatA, quatB, out){
    var x1 = quatB.x;
    var y1 = quatB.y;
    var z1 = quatB.z;
    var w1 = quatB.w;

    var x2 = quatA.x;
    var y2 = quatA.y;
    var z2 = quatA.z;
    var w2 = quatA.w;

    out = out || new Quat();
    out.x = x1 * w2 + x2 * w1 + y1 * z2 - z1 * y2;
    out.y = y1 * w2 + y2 * w1 + z1 * x2 - x1 * z2;
    out.z = z1 * w2 + z2 * w1 + x1 * y2 - y1 * x2;
    out.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
    return out;
  };

  /**
   * Divides the first quaternion by the second
   * @static
   * @method divide
   * @param {Quat} quatA The first quaternion
   * @param {Quat} quatB The second quaternion
   * @param {Quat} [out] The quaternion to write to.
   * @return {Quat} The given `out` parameter or a new quaternion.
   */
  Quat.divide = function(quatA, quatB, out){
    var x1 = quatA.x;
    var y1 = quatA.y;
    var z1 = quatA.z;
    var w1 = quatA.w;

    var x2 = quatB.x;
    var y2 = quatB.y;
    var z2 = quatB.z;
    var w2 = quatB.w;

    // invert
    var s = 1.0 / (x2 * x2 + y2 * y2 + z2 * z2 + w2 * w2);
    x2 = -x2 * s;
    y2 = -y2 * s;
    z2 = -z2 * s;
    w2 = w2 * s;

    // multiply
    out = out || new Quat();
    out.x = x1 * w2 + x2 * w1 + y1 * z2 - z1 * y2;
    out.y = y1 * w2 + y2 * w1 + z1 * x2 - x1 * z2;
    out.z = z1 * w2 + z2 * w1 + x1 * y2 - y1 * x2;
    out.w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
    return out;
  };

  /**
   * Tries to convert the given `data` into a quaternion
   * @static
   * @method create
   * @param {Array|Quat|Vec4} data
   * @return {Quat} The created quaternion.
   */
  Quat.convert = function(data){
    if (Array.isArray(data)){
      return new Quat(
        data[0] || 0,
        data[1] || 0,
        data[2] || 0,
        data[3] || 0
      );
    }
    if (typeof data === 'number') {
      return new Quat(data, data, data, data);
    }
    return new Quat(
      data.x || 0,
      data.y || 0,
      data.z || 0,
      data.w || 0
    );
  };

  /**
   * Rotates a point or vector with given quaternion
   * @static
   * @method transform
   * @param {Quat} q The rotation quaternion
   * @param {Vec3|Vec4} v The point or vector to rotate
   * @param {Vec3|Vec4} [out] The vector to write to
   * @return {Vec3|Vec4} The given `out` parameter or a new vector.
   */
  Quat.transform = function(q, v, out){
    var x = q.x;
    var y = q.y;
    var z = q.z;
    var w = q.w;

    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;

    var wx2 = w * x2;
    var wy2 = w * y2;
    var wz2 = w * z2;

    var xx2 = x * x2;
    var xy2 = x * y2;
    var xz2 = x * z2;

    var yy2 = y * y2;
    var yz2 = y * z2;
    var zz2 = y * z2;

    var vx = v.x;
    var vy = v.y;
    var vz = v.z;

    out = out || new window.Vec3();
    out.x = vx * (1 - yy2 - zz2) + vy * (xy2 - wz2) + vz * (xz2 + wy2);
    out.y = vx * (xy2 + wz2) + vy * (1 - xx2 - zz2) + vz * (yz2 - wx2);
    out.z = vx * (xz2 - wy2) + vy * (yz2 + wx2) + vz * (1 - xx2 - yy2);

    if (out.w == null){
      out.w = 1;
    }

    return out;
  };

}(window));

/**
 * Some content here
 */
(function(window){
  'use strict';

  // column major matrix layout

  // translation matrix
  // 1 0 0 x
  // 0 1 0 y
  // 0 0 1 z
  // 0 0 0 1

  // index layout
  // 0 4 8  12
  // 1 5 9  13
  // 2 6 10 14
  // 3 7 11 15

  /* missing function
   Decompose
   CreateReflection
   CreateShadow
   CreateBillboard
   CreateConstrainedBillboard
   */

  var Vec3 = window.Vec3;
  var Float32Array = window.Float32Array;

  /**
   * Describes a 4x4 matrix.
   * @class Mat4
   * @constructor
   * @main Mat4
   * @param {Float32Array} [data] The data array that holds all matrix values. Assumed to have a length of 16.
   */
  var Mat4 = function(data){
    /**
     * @attribute data
     * @type {Float32Array}
     */
    this.data = data || new Float32Array(16);
    /**
     * @attribute right
     * @type {Float32Array}
     * @description This is a subarray of the `data` attribute
     */
    this.right = this.data.subarray(0, 3);
    /**
     * @attribute up
     * @type {Float32Array}
     * @description This is a subarray of the `data` attribute
     */
    this.up = this.data.subarray(4, 7);
    /**
     * @attribute backward
     * @type {Float32Array}
     * @description This is a subarray of the `data` attribute
     */
    this.backward = this.data.subarray(8, 11);
    /**
     * @attribute translation
     * @type {Float32Array}
     * @description This is a subarray of the `data` attribute
     */
    this.translation = this.data.subarray(12, 15);
  };

  window.Mat4 = Mat4;

  Mat4.prototype = {

    /**
     * Initializes the matrix with the given values in given order. The values are applied in column major order
     * @method init
     * @chainable
     * @param {Number} m0
     * @param {Number} m1
     * @param {Number} m2
     * @param {Number} m3
     * @param {Number} m4
     * @param {Number} m5
     * @param {Number} m6
     * @param {Number} m7
     * @param {Number} m8
     * @param {Number} m9
     * @param {Number} m10
     * @param {Number} m11
     * @param {Number} m12
     * @param {Number} m13
     * @param {Number} m14
     * @param {Number} m15
     * @return {Mat4} Reference to `this` for chaining.
     * @example
     *
     *     mat.init(
     *       0, 0, 0, 0,
     *       0, 0, 0, 0,
     *       0, 0, 0, 0,
     *       x, y, z, 0)
     */
    init: function(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15){
      var d = this.data;
      d[0] = m0;
      d[1] = m1;
      d[2] = m2;
      d[3] = m3;
      d[4] = m4;
      d[5] = m5;
      d[6] = m6;
      d[7] = m7;
      d[8] = m8;
      d[9] = m9;
      d[10] = m10;
      d[11] = m11;
      d[12] = m12;
      d[13] = m13;
      d[14] = m14;
      d[15] = m15;
      return this;
    },

    /**
     * Initializes the matrix with the given values. The values are read in row major order.
     * @method initRowMajor
     * @chainable
     * @param {Number} m0
     * @param {Number} m4
     * @param {Number} m8
     * @param {Number} m12
     * @param {Number} m1
     * @param {Number} m5
     * @param {Number} m9
     * @param {Number} m13
     * @param {Number} m2
     * @param {Number} m6
     * @param {Number} m10
     * @param {Number} m14
     * @param {Number} m3
     * @param {Number} m7
     * @param {Number} m11
     * @param {Number} m15
     * @return {Mat4} Reference to `this` for chaining.
     */
    initRowMajor: function(m0, m4, m8, m12, m1, m5, m9, m13, m2, m6, m10, m14,m3, m7, m11, m15){
      var d = this.data;
      d[0] = m0;
      d[1] = m1;
      d[2] = m2;
      d[3] = m3;
      d[4] = m4;
      d[5] = m5;
      d[6] = m6;
      d[7] = m7;
      d[8] = m8;
      d[9] = m9;
      d[10] = m10;
      d[11] = m11;
      d[12] = m12;
      d[13] = m13;
      d[14] = m14;
      d[15] = m15;
      return this;
    },

    /**
     * Initializes all components of this matrix with the given number.
     * @method initWith
     * @chainable
     * @param {Number} number The number to set all matrix components to.
     * @return {Mat4} Reference to `this` for chaining.
     */
    initWith: function(number) {
      var d = this.data;
      d[0] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = number;
      return this;
    },

    /**
     * Initializes the components of this matrix to the identity.
     * @method initIdentity
     * @chainable
     * @return {Mat4} Reference to `this` for chaining.
     */
    initIdentity: function(){
      var d = this.data;
      d[0] = d[5] = d[10] = d[15] = 1;
      d[1] = d[2] = d[3] = d[4] = d[6] = d[7] = d[8] = d[9] = d[11] = d[12] = d[13] = d[14] = 0;
      return this;
    },

    /**
     * Initializes this matrix from another matrix.
     * @method initFrom
     * @chainable
     * @param {Mat4} other
     * @return {Mat4} Reference to `this` for chaining.
     */
    initFrom: function(other){
      var a = this.data;
      var b = other.data;
      a[0] = b[0];
      a[1] = b[1];
      a[2] = b[2];
      a[3] = b[3];
      a[4] = b[4];
      a[5] = b[5];
      a[6] = b[6];
      a[7] = b[7];
      a[8] = b[8];
      a[9] = b[9];
      a[10]= b[10];
      a[11]= b[11];
      a[12]= b[12];
      a[13]= b[13];
      a[14]= b[14];
      a[15]= b[15];
      return this;
    },

    /**
     * Reads a buffer starting at given offset and initializes the elements of this matrix.
     * The given buffer must have at least 16 elements starting at given offset.
     * The elements are expected to be in column major layout.
     * @method initFromBuffer
     * @chainable
     * @param {Array|Float32Array} buffer
     * @param {Number} [offset]
     * @return {Mat4} Reference to `this` for chaining.
     */
    initFromBuffer: function(buffer, offset){
      offset = offset || 0;
      var a = this.data;
      a[0] = buffer[offset];
      a[1] = buffer[offset + 1];
      a[2] = buffer[offset + 2];
      a[3] = buffer[offset + 3];
      a[4] = buffer[offset + 4];
      a[5] = buffer[offset + 5];
      a[6] = buffer[offset + 6];
      a[7] = buffer[offset + 7];
      a[8] = buffer[offset + 8];
      a[9] = buffer[offset + 9];
      a[10]= buffer[offset + 10];
      a[11]= buffer[offset + 11];
      a[12]= buffer[offset + 12];
      a[13]= buffer[offset + 13];
      a[14]= buffer[offset + 14];
      a[15]= buffer[offset + 15];
      return this;
    },

    /**
     * Initializes this matrix from given quaternion.
     * @method initFromQuaternion
     * @chainable
     * @param {Quat} q The quaternion
     * @return {Mat4} Reference to `this` for chaining.
     */
    initFromQuaternion: function (q) {
      var x = q.x;
      var y = q.y;
      var z = q.z;
      var w = q.w;
      var xx = x * x;
      var yy = y * y;
      var zz = z * z;
      var xy = x * y;
      var zw = z * w;
      var zx = z * x;
      var yw = y * w;
      var yz = y * z;
      var xw = x * w;
      return this.initRowMajor(
        1 - 2 * (yy + zz),     2 * (xy - zw),     2 * (zx + yw), 0,
            2 * (xy + zw), 1 - 2 * (zz + xx),     2 * (yz - xw), 0,
            2 * (zx - yw),     2 * (yz + xw), 1 - 2 * (yy + xx), 0,
            0,                 0,                 0,             1
      );
    },

    /**
     * Initializes this matrix to a rotation matrix defined by given axis vector and angle.
     * @method initAxisAngle
     * @chainable
     * @param {Vec3} axis The axis vector. This is expected to be normalized.
     * @param {Number} angle The angle in radians.
     * @return {Mat4} Reference to `this` for chaining.
     */
    initAxisAngle: function(axis, angle){
      // create quaternion
      var halfAngle = angle * 0.5;
      var scale = Math.sin(halfAngle);
      var x = axis.x * scale;
      var y = axis.y * scale;
      var z = axis.z * scale;
      var w = Math.cos(halfAngle);

      // matrix from quaternion
      var xx = x * x;
      var yy = y * y;
      var zz = z * z;
      var xy = x * y;
      var zw = z * w;
      var zx = z * x;
      var yw = y * w;
      var yz = y * z;
      var xw = x * w;

      return this.initRowMajor(
        1 - 2 * (yy + zz),     2 * (xy - zw),     2 * (zx + yw), 0,
            2 * (xy + zw), 1 - 2 * (zz + xx),     2 * (yz - xw), 0,
            2 * (zx - yw),     2 * (yz + xw), 1 - 2 * (yy + xx), 0,
        0,                 0,                     0,             1
      );
    },

    /**
     * Initializes this matrix to a rotation matrix defined by given yaw pitch and roll values.
     * @method initYawPitchRoll
     * @chainable
     * @param {Number} yaw Angle in radians around the Y axis
     * @param {Number} pitch Angle in radians around the X axis
     * @param {Number} roll Angle in radians around the Z axis
     * @return {Mat4} Reference to `this` for chaining.
     */
    initYawPitchRoll: function (yaw, pitch, roll) {
      // create quaternion
      var zHalf = roll * 0.5;
      var zSin = Math.sin(zHalf);
      var zCos = Math.cos(zHalf);

      var xHalf = pitch * 0.5;
      var xSin = Math.sin(xHalf);
      var xCos = Math.cos(xHalf);

      var yHalf = yaw * 0.5;
      var ySin = Math.sin(yHalf);
      var yCos = Math.cos(yHalf);

      var x = yCos * xSin * zCos + ySin * xCos * zSin;
      var y = ySin * xCos * zCos - yCos * xSin * zSin;
      var z = yCos * xCos * zSin - ySin * xSin * zCos;
      var w = yCos * xCos * zCos + ySin * xSin * zSin;
      // matrix from quaternion
      var xx = x * x;
      var yy = y * y;
      var zz = z * z;
      var xy = x * y;
      var zw = z * w;
      var zx = z * x;
      var yw = y * w;
      var yz = y * z;
      var xw = x * w;

      return this.initRowMajor(
        1 - 2 * (yy + zz),     2 * (xy - zw),     2 * (zx + yw), 0,
            2 * (xy + zw), 1 - 2 * (zz + xx),     2 * (yz - xw), 0,
            2 * (zx - yw),     2 * (yz + xw), 1 - 2 * (yy + xx), 0,
            0,                 0,                 0,             1
      );
    },

    /**
     * Initializes this matrix with a rotation around the X axis.
     * @method initRotationX
     * @chainable
     * @param {Number} rad The angle in radians.
     * @return {Mat4} Reference to `this` for chaining.
     */
    initRotationX: function (rad) {
      var cos = Math.cos(rad);
      var sin = Math.sin(rad);
      return this.initRowMajor(
        1,     0,     0,     0,
        0,     cos,   -sin,  0,
        0,     sin,   cos,   0,
        0,     0,     0,     1
      );
    },

    /**
     * Initializes this matrix with a rotation around the Y axis.
     * @method initRotationY
     * @chainable
     * @param rad The angle in radians.
     * @return {Mat4} Reference to `this` for chaining.
     */
    initRotationY: function (rad) {
      var cos = Math.cos(rad);
      var sin = Math.sin(rad);

      return this.initRowMajor(
        cos,   0,   sin,  0,
        0,     1,   0,    0,
        -sin,  0,   cos,  0,
        0,     0,   0,    1
      );
    },

    /**
     * Initializes this matrix with a rotation around the Z axis.
     * @method initRotationZ
     * @chainable
     * @param rad The angle in radians.
     * @return {Mat4} Reference to `this` for chaining.
     */
    initRotationZ: function (rad) {
      var cos = Math.cos(rad);
      var sin = Math.sin(rad);
      return this.initRowMajor(
        cos,  -sin, 0,  0,
        sin,   cos, 0,  0,
        0,     0,   1,  0,
        0,     0,   0,  1
      );
    },


    /**
     * Initializes a translation matrix.
     * @method initTranslation
     * @chainable
     * @param {Number} x Translation along the x-axis
     * @param {Number} y Translation along the y-axis
     * @param {Number} z Translation along the z-axis
     * @return {Mat4} Reference to `this` for chaining.
     */
    initTranslation: function (x, y, z) {
      return this.initRowMajor(
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
      );
    },

    /**
     * Initializes a scale matrix.
     * @method initScale
     * @chainable
     * @param {Number} x Scale along x-axis
     * @param {Number} y Scale along y-axis
     * @param {Number} z Scale along z-axis
     * @return {Mat4} Reference to `this` for chaining.
     */
    initScale: function (x, y, z) {
      return this.initRowMajor(
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
      );
    },

    /**
     * Initializes a rotation matrix by using a position and a lookat point.
     * @method initLookAt
     * @chainable
     * @param {Vec3|Vec4} pos The position where the viewer stands
     * @param {Vec3|Vec4} lookAt The position where the viewer is looking to
     * @param {Vec3|Vec4} up The up vector of the viewer
     * @return {Mat4} Reference to `this` for chaining.
     */
    initLookAt: function (pos, lookAt, up) {
      // back = position - lookAt
      var backX = pos.x - lookAt.x;
      var backY = pos.y - lookAt.y;
      var backZ = pos.z - lookAt.z;

      // right = cross(up, back)
      var rightX = up.y * backZ - up.z * backY;
      var rightY = up.z * backX - up.x * backZ;
      var rightZ = up.x * backY - up.y * backX;

      // back = normalize(back)
      var d = 1.0 / Math.sqrt(backX * backX + backY * backY + backZ * backZ);
      backX *= d;
      backY *= d;
      backZ *= d;

      // right = normalize(right)
      d = 1.0 / Math.sqrt(rightX * rightX + rightY * rightY + rightZ * rightZ);
      rightX *= d;
      rightY *= d;
      rightZ *= d;

      // up = cross(back, right)
      var upX = backY * rightZ - backZ * rightY;
      var upY = backZ * rightX - backX * rightZ;
      var upZ = backX * rightY - backY * rightX;

      return this.initRowMajor(
        rightX, upX, backX, pos.x,
        rightY, upY, backY, pos.y,
        rightZ, upZ, backZ, pos.z,
        0,      0,   0,     1
      );
    },

    /**
     * Initializes a matrix from a position point and a forward and up vectors
     * @method initWorld
     * @chainable
     * @param {Vec3|Vec4} position The translation part
     * @param {Vec3|Vec4} forward The facing direction
     * @param {Vec3|Vec4} up The up vector
     * @return {Mat4} Reference to `this` for chaining.
     */
    initWorld: function (position, forward, up) {
      // backward = negate(normalize(forward))
      var x = forward.x;
      var y = forward.y;
      var z = forward.z;
      var d = 1.0 / Math.sqrt(x * x + y * y + z * z);

      var backX = -x * d;
      var backY = -y * d;
      var backZ = -z * d;

      // right = normalize(cross(up, back))
      x = up.y * backZ - up.z * backY;
      y = up.z * backX - up.x * backZ;
      z = up.x * backY - up.y * backX;
      d = 1.0 / Math.sqrt(x * x + y * y + z * z);

      var rightX = x * d;
      var rightY = y * d;
      var rightZ = z * d;

      // up = cross(back, right)
      x = backY * rightZ - backZ * rightY;
      y = backZ * rightX - backX * rightZ;
      z = backX * rightY - backY * rightX;

      return this.initRowMajor(
        rightX, x, backX, position.x,
        rightY, y, backY, position.y,
        rightZ, z, backZ, position.z,
        0,      0, 0,     1
      );
    },

    /**
     * Initializes a perspective matrix with given field of view angle
     * @method initPerspectiveFieldOfView
     * @chainable
     * @param {Number} fov The field of view angle in radians
     * @param {Number} aspect The aspect ratio
     * @param {Number} near The near plane distance
     * @param {Number} far The far plane distance
     * @return {Mat4} Reference to `this` for chaining.
     */
    initPerspectiveFieldOfView: function (fov, aspect, near, far) {
      var s = 1.0 / Math.tan(fov * 0.5);

      return this.initRowMajor(
        s / aspect,               0,                         0,                               0,
        0,                        s,                         0,                               0,
        0,                        0,                         -(far + near) / (far - near),    -(2 * far * near) / (far - near),
        0,                        0,                         -1,                              0
      );
    },

    /**
     * Initializes a perspective matrix
     * @method initPerspective
     * @chainable
     * @param {Number} width
     * @param {Number} height
     * @param {Number} near The near plane distance
     * @param {Number} far The far plane distance
     * @return {Mat4} Reference to `this` for chaining.
     */
    initPerspective: function(width, height, near, far){
      return this.initRowMajor(
        near / width,             0,                         0,                               0,
        0,                        near / height,             0,                               0,
        0,                        0,                         -(far + near) / (far - near),    -(2 * far * near) / (far - near),
        0,                        0,                         -1,                              0
      );
    },

    /**
     * Initializes a perspective matrix
     * @method initPerspectiveOffCenter
     * @chainable
     * @param {Number} left
     * @param {Number} right
     * @param {Number} bottom
     * @param {Number} top
     * @param {Number} near The near plane distance
     * @param {Number} far The far plane distance
     * @return {Mat4} Reference to `this` for chaining.
     */
    initPerspectiveOffCenter: function(left, right, bottom, top, near, far){
      return this.initRowMajor(
        2 * near / (right - left),0,                         (right + left) / (right - left), 0,
        0,                        2 * near / (top - bottom), (top + bottom) / (top - bottom), 0,
        0,                        0,                         -(far + near) / (far - near),    -(2 * far * near) / (far - near),
        0,                        0,                         -1,                              0
      );
    },

    /**
     * Initializes an orthographic matrix
     * @method initOrthographic
     * @chainable
     * @param width
     * @param height
     * @param {Number} near The near plane distance
     * @param {Number} far The far plane distance
     * @return {Mat4} Reference to `this` for chaining.
     */
    initOrthographic: function(width, height, near, far){
      return this.initRowMajor(
        1 / width,          0,                  0,                0,
        0,                  1 / height,         0,                0,
        0,                  0,                  -2 / (far - near), -(far + near) / (far - near),
        0,                  0,                  0,                1
      );
    },

    /**
     * Initializes an orthographic matrix
     * @method initOrthographicOffCenter
     * @chainable
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param {Number} near The near plane distance
     * @param {Number} far The far plane distance
     * @return {Mat4} Reference to `this` for chaining.
     */
    initOrthographicOffCenter: function(left, right, bottom, top, near, far){
      return this.initRowMajor(
        2 / (right - left), 0,                  0,                -(right + left) / (right - left),
        0,                  2 / (top - bottom), 0,                -(top + bottom) / (top - bottom),
        0,                  0,                  -2 / (far - near),-(far + near) / (far - near),
        0,                  0,                  0,                1
      );
    },


    /**
     * Creates a copy of this matrix
     * @method clone
     * @return {Mat4} The cloned matrix.
     */
    clone: function(){
      var d = this.data;
      return new Mat4().init(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]);
    },

    /**
     * Copies the components successively into the given array.
     * @chainable
     * @method copy
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {Number} [offset=0] Zero based index where to start writing in the array
     * @return {Array|Float32Array}
     */
    copyTo: function(buffer, offset){
      offset = offset || 0;
      var d = this.data;
      buffer[offset] = d[0];
      buffer[offset +  1] = d[ 1];
      buffer[offset +  2] = d[ 2];
      buffer[offset +  3] = d[ 3];
      buffer[offset +  4] = d[ 4];
      buffer[offset +  5] = d[ 5];
      buffer[offset +  6] = d[ 6];
      buffer[offset +  7] = d[ 7];
      buffer[offset +  8] = d[ 8];
      buffer[offset +  9] = d[ 9];
      buffer[offset + 10] = d[10];
      buffer[offset + 11] = d[11];
      buffer[offset + 12] = d[12];
      buffer[offset + 13] = d[13];
      buffer[offset + 14] = d[14];
      buffer[offset + 15] = d[15];
      return buffer;
    },

    /**
     * Returns an array filled with the values of the components of this vector
     * @method dump
     * @return {Array}
     */
    dump: function(){
      var result = [];
      this.copyTo(result);
      return result;
    },

    /**
     * Checks for component wise equality with given matrix
     * @method equals
     * @param {Mat4} other The matrix to compare with
     * @return {Boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      var a = this.data;
      var b = other.data;
      return a[0] === b[0] &&
        a[1] === b[1] &&
        a[2] === b[2] &&
        a[3] === b[3] &&
        a[4] === b[4] &&
        a[5] === b[5] &&
        a[6] === b[6] &&
        a[7] === b[7] &&
        a[8] === b[8] &&
        a[9] === b[9] &&
        a[10] === b[10] &&
        a[11] === b[11] &&
        a[12] === b[12] &&
        a[13] === b[13] &&
        a[14] === b[14] &&
        a[15] === b[15];
    },

    /**
     * Gets the forward vector
     * @method getForward
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getForward: function(out){
      return (out || new Vec3()).init(
        -this.backward[0],
        -this.backward[1],
        -this.backward[2]
      );
    },

    /**
     * Gets the backward vector
     * @method getBackward
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getBackward: function(out){
      return (out || new Vec3()).init(
        this.backward[0],
        this.backward[1],
        this.backward[2]
      );
    },

    /**
     * Gets the right vector
     * @method getRight
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getRight: function(out){
      return (out || new Vec3()).init(
        this.right[0],
        this.right[1],
        this.right[2]
      );
    },

    /**
     * Gets the left vector
     * @method getLeft
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getLeft: function(out){
      return (out || new Vec3()).init(
        -this.right[0],
        -this.right[1],
        -this.right[2]
      );
    },

    /**
     * Gets the up vector
     * @method getUp
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getUp: function(out){
      return (out || new Vec3()).init(
        this.up[0],
        this.up[1],
        this.up[2]);
    },

    /**
     * Gets the down vector
     * @method getDown
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getDown: function(out){
      return (out || new Vec3()).init(
        -this.up[0],
        -this.up[1],
        -this.up[2]
      );
    },

    /**
     * Gets the translation part as vector
     * @method getTranslation
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getTranslation: function(out){
      return (out || new Vec3()).init(
        this.translation[0],
        this.translation[1],
        this.translation[2]
      );
    },

    /**
     * Gets the scale part as vector
     * @method getScale
     * @param {Vec3|Vec4} [out] The vector to write to
     * @return {Vec3|Vec4} the given `out` parameter or a new vector
     */
    getScale: function(out){
      return (out || new Vec3()).init(
        this.data[0],
        this.data[5],
        this.data[10]
      );
    },

    /**
     * Writes the values of the forward vector into an array
     * @method copyForward
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyForward: function(buffer){
      buffer[0] = -this.backward[0];
      buffer[1] = -this.backward[1];
      buffer[2] = -this.backward[2];
      return buffer;
    },

    /**
     * Writes the values of the backward vector into an array
     * @method copyBackward
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyBackward: function(buffer){
      buffer[0] = this.backward[0];
      buffer[1] = this.backward[1];
      buffer[2] = this.backward[2];
      return buffer;
    },

    /**
     * Writes the values of the right vector into an array
     * @method copyRight
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyRight: function(buffer){
      buffer[0] = this.right[0];
      buffer[1] = this.right[1];
      buffer[2] = this.right[2];
      return buffer;
    },

    /**
     * Writes the values of the left vector into an array
     * @method copyLeft
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyLeft: function(buffer){
      buffer[0] = -this.right[0];
      buffer[1] = -this.right[1];
      buffer[2] = -this.right[2];
      return buffer;
    },

    /**
     * Writes the values of the up vector into an array
     * @method copyUp
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyUp: function(buffer){
      buffer[0] = this.up[0];
      buffer[1] = this.up[1];
      buffer[2] = this.up[2];
      return buffer;
    },

    /**
     * Writes the values of the down vector into an array
     * @method copyDown
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyDown: function(buffer){
      buffer[0] = -this.up[0];
      buffer[1] = -this.up[1];
      buffer[2] = -this.up[2];
      return buffer;
    },

    /**
     * Writes the values of the translation part into an array
     * @method copyTranslation
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyTranslation: function(buffer){
      buffer[0] = this.translation[0];
      buffer[1] = this.translation[1];
      buffer[2] = this.translation[2];
      return buffer;
    },

    /**
     * Writes the values of the scale vector into an array
     * @method copyScale
     * @param {Array|Float32Array} buffer The array to write to
     * @return {Array|Float32Array} the given `buffer` parameter
     */
    copyScale: function(buffer){
      buffer[0] = this.data[0];
      buffer[1] = this.data[5];
      buffer[2] = this.data[10];
      return buffer;
    },

    /**
     * Sets the forward vector
     * @method setForward
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setForward: function(vec){
      this.backward[0] = -vec.x;
      this.backward[1] = -vec.y;
      this.backward[2] = -vec.z;
      return this;
    },

    /**
     * Sets the backward vector
     * @method setBackward
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setBackward: function(vec){
      this.backward[0] = vec.x;
      this.backward[1] = vec.y;
      this.backward[2] = vec.z;
      return this;
    },

    /**
     * Sets the right vector
     * @method setRight
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setRight: function(vec){
      this.right[0] = vec.x;
      this.right[1] = vec.y;
      this.right[2] = vec.z;
      return this;
    },

    /**
     * Sets the left vector
     * @method setLeft
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setLeft: function(vec){
      this.right[0] = -vec.x;
      this.right[1] = -vec.y;
      this.right[2] = -vec.z;
      return this;
    },

    /**
     * Sets the up vector
     * @method setUp
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setUp: function(vec){
      this.up[0] = vec.x;
      this.up[1] = vec.y;
      this.up[2] = vec.z;
      return this;
    },

    /**
     * Sets the down vector
     * @method setDown
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setDown: function(vec){
      this.up[0] = -vec.x;
      this.up[1] = -vec.y;
      this.up[2] = -vec.z;
      return this;
    },

    /**
     * Sets the translation part
     * @method setTranslation
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setTranslation: function(vec){
      this.translation[0] = vec.x;
      this.translation[1] = vec.y;
      this.translation[2] = vec.z;
      return this;
    },

    /**
     * Sets the scale part
     * @method setScale
     * @chainable
     * @param {Vec3|Vec4} vec The vector to take values from
     * @return {Mat4} Reference to `this` for chaining.
     */
    setScale: function(vec){
      this.data[0] = vec.x;
      this.data[5] = vec.y;
      this.data[10] = vec.z;
      return this;
    },

    /**
     * Calculates the determinant of this matrix
     * @method determinant
     * @return {Number}
     */
    determinant: function(){
      var a = this.data;

      var a11 = a[0];
      var a12 = a[4];
      var a13 = a[8];
      var a14 = a[12];

      var a21 = a[1];
      var a22 = a[5];
      var a23 = a[9];
      var a24 = a[13];

      var a31 = a[2];
      var a32 = a[6];
      var a33 = a[10];
      var a34 = a[14];

      var a41 = a[3];
      var a42 = a[7];
      var a43 = a[11];
      var a44 = a[15];

      // 2x2 determinants
      var d1 = a33 * a44 - a43 * a34;
      var d2 = a23 * a44 - a43 * a24;
      var d3 = a23 * a34 - a33 * a24;
      var d4 = a13 * a44 - a43 * a14;
      var d5 = a13 * a34 - a33 * a14;
      var d6 = a13 * a24 - a23 * a14;

      // 3x3 determinants
      var det1 = a22 * d1 - a32 * d2 + a42 * d3;
      var det2 = a12 * d1 - a32 * d4 + a42 * d5;
      var det3 = a12 * d2 - a22 * d4 + a42 * d6;
      var det4 = a12 * d3 - a22 * d5 + a32 * d6;

      return (a11 * det1 - a21 * det2 + a31 * det3 - a41 * det4);
    },

    /**
     * Transposes this matrix
     * @method selfTranspose
     * @chainable
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfTranspose: function () {
      var d = this.data;
      var t = d[1];
      d[1] = d[4];
      d[4] = t;

      t = d[2];
      d[2] = d[8];
      d[8] = t;

      t = d[3];
      d[3] = d[12];
      d[12] = t;

      t = d[6];
      d[6] = d[9];
      d[9] = t;

      t = d[7];
      d[7] = d[13];
      d[13] = t;

      t = d[11];
      d[11] = d[14];
      d[14] = t;
      return this;
    },

    /**
     * Inverts this matrix
     * @method selfInvert
     * @chainable
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfInvert: function(){
      var a = this.data;
      var b = this.data;

      var a11 = a[0];
      var a12 = a[4];
      var a13 = a[8];
      var a14 = a[12];

      var a21 = a[1];
      var a22 = a[5];
      var a23 = a[9];
      var a24 = a[13];

      var a31 = a[2];
      var a32 = a[6];
      var a33 = a[10];
      var a34 = a[14];

      var a41 = a[3];
      var a42 = a[7];
      var a43 = a[11];
      var a44 = a[15];

      // 2x2 determinants
      var d1 = a33 * a44 - a43 * a34;
      var d2 = a23 * a44 - a43 * a24;
      var d3 = a23 * a34 - a33 * a24;
      var d4 = a13 * a44 - a43 * a14;
      var d5 = a13 * a34 - a33 * a14;
      var d6 = a13 * a24 - a23 * a14;

      // 3x3 determinants
      var det1 = a22 * d1 - a32 * d2 + a42 * d3;
      var det2 = a12 * d1 - a32 * d4 + a42 * d5;
      var det3 = a12 * d2 - a22 * d4 + a42 * d6;
      var det4 = a12 * d3 - a22 * d5 + a32 * d6;

      var detInv = 1 / (a11 * det1 - a21 * det2 + a31 * det3 - a41 * det4);

      b[0] = det1 * detInv;
      b[4] = -det2 * detInv;
      b[8] = det3 * detInv;
      b[12] = -det4 * detInv;
      b[1] = -(a21 * d1 - a31 * d2 + a41 * d3) * detInv;
      b[5] = (a11 * d1 - a31 * d4 + a41 * d5) * detInv;
      b[9] = -(a11 * d2 - a21 * d4 + a41 * d6) * detInv;
      b[13] = (a11 * d3 - a21 * d5 + a31 * d6) * detInv;

      var v1 = a32 * a44 - a42 * a34;
      var v2 = a22 * a44 - a42 * a24;
      var v3 = a22 * a34 - a32 * a24;
      var v4 = a12 * a44 - a42 * a14;
      var v5 = a12 * a34 - a32 * a14;
      var v6 = a12 * a24 - a22 * a14;
      b[2] = (a21 * v1 - a31 * v2 + a41 * v3) * detInv;
      b[6] = -(a11 * v1 - a31 * v4 + a41 * v5) * detInv;
      b[10] = (a11 * v2 - a21 * v4 + a41 * v6) * detInv;
      b[14] = -(a11 * v3 - a21 * v5 + a31 * v6) * detInv;

      v1 = a32 * a43 - a42 * a33;
      v2 = a22 * a43 - a42 * a23;
      v3 = a22 * a33 - a32 * a23;
      v4 = a12 * a43 - a42 * a13;
      v5 = a12 * a33 - a32 * a13;
      v6 = a12 * a23 - a22 * a13;
      b[3] = -(a21 * v1 - a31 * v2 + a41 * v3) * detInv;
      b[7] = (a11 * v1 - a31 * v4 + a41 * v5) * detInv;
      b[11] = -(a11 * v2 - a21 * v4 + a41 * v6) * detInv;
      b[15] = (a11 * v3 - a21 * v5 + a31 * v6) * detInv;
      return this;
    },

    /**
     * Negates all components of this matrix
     * @method selfNegate
     * @chainable
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfNegate: function(){
      var d = this.data;
      d[ 0] = -d[ 0];
      d[ 1] = -d[ 1];
      d[ 2] = -d[ 2];
      d[ 3] = -d[ 3];
      d[ 4] = -d[ 4];
      d[ 5] = -d[ 5];
      d[ 6] = -d[ 6];
      d[ 7] = -d[ 7];
      d[ 8] = -d[ 8];
      d[ 9] = -d[ 9];
      d[10] = -d[10];
      d[11] = -d[11];
      d[12] = -d[12];
      d[13] = -d[13];
      d[14] = -d[14];
      d[15] = -d[15];
      return this;
    },

    /**
     * Adds the given matrix to `this`
     * @method selfAdd
     * @chainable
     * @param {Mat4} other The matrix to add
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfAdd: function(other){
      var a = this.data;
      var b = other.data;
      a[ 0] += b[ 0];
      a[ 1] += b[ 1];
      a[ 2] += b[ 2];
      a[ 3] += b[ 3];
      a[ 4] += b[ 4];
      a[ 5] += b[ 5];
      a[ 6] += b[ 6];
      a[ 7] += b[ 7];
      a[ 8] += b[ 8];
      a[ 9] += b[ 9];
      a[10] += b[10];
      a[11] += b[11];
      a[12] += b[12];
      a[13] += b[13];
      a[14] += b[14];
      a[15] += b[15];
      return this;
    },


    /**
     * Adds the given scalar to each component of `this`
     * @method selfAddScalar
     * @chainable
     * @param {Number} scalar The scalar to add
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfAddScalar: function(scalar){
      var a = this.data;
      a[ 0] += scalar;
      a[ 1] += scalar;
      a[ 2] += scalar;
      a[ 3] += scalar;
      a[ 4] += scalar;
      a[ 5] += scalar;
      a[ 6] += scalar;
      a[ 7] += scalar;
      a[ 8] += scalar;
      a[ 9] += scalar;
      a[10] += scalar;
      a[11] += scalar;
      a[12] += scalar;
      a[13] += scalar;
      a[14] += scalar;
      a[15] += scalar;
      return this;
    },

    /**
     * Subtracts the given matrix from `this`
     * @method selfSubtract
     * @chainable
     * @param {Mat4} other The matrix to subtract
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfSubtract: function(other){
      var a = this.data;
      var b = other.data;
      a[ 0] -= b[ 0];
      a[ 1] -= b[ 1];
      a[ 2] -= b[ 2];
      a[ 3] -= b[ 3];
      a[ 4] -= b[ 4];
      a[ 5] -= b[ 5];
      a[ 6] -= b[ 6];
      a[ 7] -= b[ 7];
      a[ 8] -= b[ 8];
      a[ 9] -= b[ 9];
      a[10] -= b[10];
      a[11] -= b[11];
      a[12] -= b[12];
      a[13] -= b[13];
      a[14] -= b[14];
      a[15] -= b[15];
      return this;
    },



    /**
     * Subtracts the given scalar from each component of `this`
     * @method selfSubtractScalar
     * @chainable
     * @param {Number} scalar The scalar to subtract
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfSubtractScalar: function(scalar){
      var a = this.data;
      a[ 0] -= scalar;
      a[ 1] -= scalar;
      a[ 2] -= scalar;
      a[ 3] -= scalar;
      a[ 4] -= scalar;
      a[ 5] -= scalar;
      a[ 6] -= scalar;
      a[ 7] -= scalar;
      a[ 8] -= scalar;
      a[ 9] -= scalar;
      a[10] -= scalar;
      a[11] -= scalar;
      a[12] -= scalar;
      a[13] -= scalar;
      a[14] -= scalar;
      a[15] -= scalar;
      return this;
    },


    /**
     * Multiplies the given matrix with this
     * @method selfMultiply
     * @chainable
     * @param {Mat4} other The matrix to multiply
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfMultiply: function(other){
      var a = other.data;
      var b = this.data;
      var c = this.data;

      var a_0 = a[ 0];
      var a_1 = a[ 1];
      var a_2 = a[ 2];
      var a_3 = a[ 3];
      var a_4 = a[ 4];
      var a_5 = a[ 5];
      var a_6 = a[ 6];
      var a_7 = a[ 7];
      var a_8 = a[ 8];
      var a_9 = a[ 9];
      var a10 = a[10];
      var a11 = a[11];
      var a12 = a[12];
      var a13 = a[13];
      var a14 = a[14];
      var a15 = a[15];

      var b_0 = b[ 0];
      var b_1 = b[ 1];
      var b_2 = b[ 2];
      var b_3 = b[ 3];
      var b_4 = b[ 4];
      var b_5 = b[ 5];
      var b_6 = b[ 6];
      var b_7 = b[ 7];
      var b_8 = b[ 8];
      var b_9 = b[ 9];
      var b10 = b[10];
      var b11 = b[11];
      var b12 = b[12];
      var b13 = b[13];
      var b14 = b[14];
      var b15 = b[15];

      c[ 0] = b_0 * a_0 + b_1 * a_4 + b_2 * a_8 + b_3 * a12;
      c[ 1] = b_0 * a_1 + b_1 * a_5 + b_2 * a_9 + b_3 * a13;
      c[ 2] = b_0 * a_2 + b_1 * a_6 + b_2 * a10 + b_3 * a14;
      c[ 3] = b_0 * a_3 + b_1 * a_7 + b_2 * a11 + b_3 * a15;
      c[ 4] = b_4 * a_0 + b_5 * a_4 + b_6 * a_8 + b_7 * a12;
      c[ 5] = b_4 * a_1 + b_5 * a_5 + b_6 * a_9 + b_7 * a13;
      c[ 6] = b_4 * a_2 + b_5 * a_6 + b_6 * a10 + b_7 * a14;
      c[ 7] = b_4 * a_3 + b_5 * a_7 + b_6 * a11 + b_7 * a15;
      c[ 8] = b_8 * a_0 + b_9 * a_4 + b10 * a_8 + b11 * a12;
      c[ 9] = b_8 * a_1 + b_9 * a_5 + b10 * a_9 + b11 * a13;
      c[10] = b_8 * a_2 + b_9 * a_6 + b10 * a10 + b11 * a14;
      c[11] = b_8 * a_3 + b_9 * a_7 + b10 * a11 + b11 * a15;
      c[12] = b12 * a_0 + b13 * a_4 + b14 * a_8 + b15 * a12;
      c[13] = b12 * a_1 + b13 * a_5 + b14 * a_9 + b15 * a13;
      c[14] = b12 * a_2 + b13 * a_6 + b14 * a10 + b15 * a14;
      c[15] = b12 * a_3 + b13 * a_7 + b14 * a11 + b15 * a15;
      return this;
    },


    /**
     * Concatenates the given matrix to this
     * @method selfConcat
     * @chainable
     * @param {Mat4} other The matrix to concatenate
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfConcat: function(other){
      var a = this.data;
      var b = other.data;
      var c = this.data;

      var a_0 = a[ 0];
      var a_1 = a[ 1];
      var a_2 = a[ 2];
      var a_3 = a[ 3];
      var a_4 = a[ 4];
      var a_5 = a[ 5];
      var a_6 = a[ 6];
      var a_7 = a[ 7];
      var a_8 = a[ 8];
      var a_9 = a[ 9];
      var a10 = a[10];
      var a11 = a[11];
      var a12 = a[12];
      var a13 = a[13];
      var a14 = a[14];
      var a15 = a[15];

      var b_0 = b[ 0];
      var b_1 = b[ 1];
      var b_2 = b[ 2];
      var b_3 = b[ 3];
      var b_4 = b[ 4];
      var b_5 = b[ 5];
      var b_6 = b[ 6];
      var b_7 = b[ 7];
      var b_8 = b[ 8];
      var b_9 = b[ 9];
      var b10 = b[10];
      var b11 = b[11];
      var b12 = b[12];
      var b13 = b[13];
      var b14 = b[14];
      var b15 = b[15];

      c[ 0] = b_0 * a_0 + b_1 * a_4 + b_2 * a_8 + b_3 * a12;
      c[ 1] = b_0 * a_1 + b_1 * a_5 + b_2 * a_9 + b_3 * a13;
      c[ 2] = b_0 * a_2 + b_1 * a_6 + b_2 * a10 + b_3 * a14;
      c[ 3] = b_0 * a_3 + b_1 * a_7 + b_2 * a11 + b_3 * a15;
      c[ 4] = b_4 * a_0 + b_5 * a_4 + b_6 * a_8 + b_7 * a12;
      c[ 5] = b_4 * a_1 + b_5 * a_5 + b_6 * a_9 + b_7 * a13;
      c[ 6] = b_4 * a_2 + b_5 * a_6 + b_6 * a10 + b_7 * a14;
      c[ 7] = b_4 * a_3 + b_5 * a_7 + b_6 * a11 + b_7 * a15;
      c[ 8] = b_8 * a_0 + b_9 * a_4 + b10 * a_8 + b11 * a12;
      c[ 9] = b_8 * a_1 + b_9 * a_5 + b10 * a_9 + b11 * a13;
      c[10] = b_8 * a_2 + b_9 * a_6 + b10 * a10 + b11 * a14;
      c[11] = b_8 * a_3 + b_9 * a_7 + b10 * a11 + b11 * a15;
      c[12] = b12 * a_0 + b13 * a_4 + b14 * a_8 + b15 * a12;
      c[13] = b12 * a_1 + b13 * a_5 + b14 * a_9 + b15 * a13;
      c[14] = b12 * a_2 + b13 * a_6 + b14 * a10 + b15 * a14;
      c[15] = b12 * a_3 + b13 * a_7 + b14 * a11 + b15 * a15;
      return this;
    },


    /**
     * Multiplies each component of `this` with given scalar
     * @method selfMultiplyScalar
     * @chainable
     * @param {Number} scalar The scalar to multiply
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfMultiplyScalar: function(scalar){
      var a = this.data;
      a[ 0] *= scalar;
      a[ 1] *= scalar;
      a[ 2] *= scalar;
      a[ 3] *= scalar;
      a[ 4] *= scalar;
      a[ 5] *= scalar;
      a[ 6] *= scalar;
      a[ 7] *= scalar;
      a[ 8] *= scalar;
      a[ 9] *= scalar;
      a[10] *= scalar;
      a[11] *= scalar;
      a[12] *= scalar;
      a[13] *= scalar;
      a[14] *= scalar;
      a[15] *= scalar;
      return this;
    },


    /**
     * Divides each matching component pair
     * @method selfDivide
     * @chainable
     * @param {Mat4} other The matrix by which to divide
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfDivide: function(other){
      var a = this.data;
      var b = other.data;
      a[ 0] /= b[ 0];
      a[ 1] /= b[ 1];
      a[ 2] /= b[ 2];
      a[ 3] /= b[ 3];
      a[ 4] /= b[ 4];
      a[ 5] /= b[ 5];
      a[ 6] /= b[ 6];
      a[ 7] /= b[ 7];
      a[ 8] /= b[ 8];
      a[ 9] /= b[ 9];
      a[10] /= b[10];
      a[11] /= b[11];
      a[12] /= b[12];
      a[13] /= b[13];
      a[14] /= b[14];
      a[15] /= b[15];
      return this;
    },

    /**
     * Divides each component of `this` by given scalar
     * @method selfDivideScalar
     * @chainable
     * @param {Number} scalar The scalar by which to divide
     * @return {Mat4} Reference to `this` for chaining.
     */
    selfDivideScalar: function(scalar){
      scalar = 1.0 / scalar;
      var a = this.data;
      a[ 0] *= scalar;
      a[ 1] *= scalar;
      a[ 2] *= scalar;
      a[ 3] *= scalar;
      a[ 4] *= scalar;
      a[ 5] *= scalar;
      a[ 6] *= scalar;
      a[ 7] *= scalar;
      a[ 8] *= scalar;
      a[ 9] *= scalar;
      a[10] *= scalar;
      a[11] *= scalar;
      a[12] *= scalar;
      a[13] *= scalar;
      a[14] *= scalar;
      a[15] *= scalar;
      return this;
    },

    /**
     * Transform the given vector with this matrix.
     * @method transform
     * @param {Vec2|Vec3|Vec4} vec
     * @return {Vec2|Vec3|Vec4} the given vector
     */
    transform: function(vec){
      var x = vec.x || 0;
      var y = vec.y || 0;
      var z = vec.z || 0;
      var w = vec.w != null ? vec.w : 1;
      var d = this.data;
      vec.x = x * d[0] + y * d[4] + z * d[8]  + w * d[12];
      vec.y = x * d[1] + y * d[5] + z * d[9]  + w * d[13];
      if (vec.z != null){
        vec.z = x * d[2] + y * d[6] + z * d[10] + w * d[14];
        if (vec.w != null) {
          vec.w = x * d[3] + y * d[7] + z * d[11] + w * d[15];
        }
      }
      return vec;
    },


    /**
     * Rotates and scales the given vector with this matrix.
     * @method transformNormal
     * @param {Vec2|Vec3|Vec4} vec
     * @return {Vec2|Vec3|Vec4} the given vector
     */
    transformNormal: function(vec){
      var x = vec.x || 0;
      var y = vec.y || 0;
      var z = vec.z || 0;
      var d = this.data;
      vec.x = x * d[0] + y * d[4] + z * d[8];
      vec.y = x * d[1] + y * d[5] + z * d[9];
      if (vec.z != null) {
        vec.z = x * d[2] + y * d[6] + z * d[10];
      }
      return vec;
    },

    /**
     * Transforms the given buffer with `this` matrix.
     * @method transformV2Buffer
     * @param {Array|Float32Array} buffer
     * @param {Number} [offset=0]
     * @param {Number} [stride=2]
     * @param {Number} [count=buffer.length]
     */
    transformV2Buffer: function(buffer, offset, stride, count){
      var x, y, d = this.data;
      offset = offset || 0;
      stride = stride === undefined ? 2 : stride;
      count = count === undefined ? buffer.length / stride : count;

      while(count > 0){
        x = buffer[offset];
        y = buffer[offset + 1];
        buffer[offset]     = x * d[0] + y * d[4] + d[8]  + d[12];
        buffer[offset + 1] = x * d[1] + y * d[5] + d[9]  + d[13];
        offset += stride;
      }
    },

    /**
     * Transforms the given buffer with `this` matrix.
     * @method transformV3Buffer
     * @param {Array|Float32Array} buffer
     * @param {Number} [offset=0]
     * @param {Number} [stride=3]
     * @param {Number} [count=buffer.length]
     */
    transformV3Buffer: function(buffer, offset, stride, count){
      var x, y, z, d = this.data;
      offset = offset || 0;
      stride = stride === undefined ? 3 : stride;
      count = count === undefined ? buffer.length / stride : count;

      while(count > 0){
        x = buffer[offset];
        y = buffer[offset + 1];
        z = buffer[offset + 2];
        buffer[offset    ] = x * d[0] + y * d[4] + z * d[8]  + d[12];
        buffer[offset + 1] = x * d[1] + y * d[5] + z * d[9]  + d[13];
        buffer[offset + 2] = x * d[2] + y * d[6] + z * d[10] + d[14];
        offset += stride;
      }
    },

    /**
     * Transforms the given buffer with `this` matrix.
     * @method transformV4Buffer
     * @param {Array|Float32Array} buffer
     * @param {Number} [offset=0]
     * @param {Number} [stride=4]
     * @param {Number} [count=buffer.length]
     */
    transformV4Buffer: function(buffer, offset, stride, count){
      var x, y, z, w, d = this.data;
      offset = offset || 0;
      stride = stride === undefined ? 4 : stride;
      count = count === undefined ? buffer.length / stride : count;

      while(count > 0){
        x = buffer[offset];
        y = buffer[offset + 1];
        z = buffer[offset + 2];
        w = buffer[offset + 3];
        buffer[offset    ] = x * d[0] + y * d[4] + z * d[8]  + w * d[12];
        buffer[offset + 1] = x * d[1] + y * d[5] + z * d[9]  + w * d[13];
        buffer[offset + 2] = x * d[2] + y * d[6] + z * d[10] + w * d[14];
        buffer[offset + 3] = x * d[3] + y * d[7] + z * d[11] + w * d[15];
        offset += stride;
      }
    },

    /**
     * Transforms the given buffer with the rotation and scale part of `this` matrix.
     * @method transformNormalBuffer
     * @param {Array|Float32Array} buffer
     * @param {Number} [offset=0]
     * @param {Number} [stride=3]
     * @param {Number} [count=buffer.length]
     */
    transformNormalBuffer: function(buffer, offset, stride, count){
      var x, y, z, d = this.data;
      offset = offset || 0;
      stride = stride === undefined ? 3 : stride;
      count = count === undefined ? buffer.length / stride : count;

      while(count > 0){
        x = buffer[offset];
        y = buffer[offset + 1];
        z = buffer[offset + 2];
        buffer[offset    ] = x * d[0] + y * d[4] + z * d[8];
        buffer[offset + 1] = x * d[1] + y * d[5] + z * d[9];
        buffer[offset + 2] = x * d[2] + y * d[6] + z * d[10];
        offset += stride;
      }
    }
  };

  /**
   * Transpose the given matrix
   * @static
   * @method transpose
   * @param {Mat4} mat The matrix to transpose
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.transpose = function (mat, out) {
    var d = mat.data;
    return (out || new Mat4()).init(
      d[0], d[4], d[8], d[12],
      d[1], d[5], d[9], d[13],
      d[2], d[6], d[10], d[14],
      d[3], d[7], d[11], d[15]
    );
  };

  /**
   * Invert the given matrix
   * @static
   * @method invert
   * @param {Mat4} mat The matrix to transpose
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.invert = function (mat, out) {
    out = out || new Mat4();
    var a = mat.data;
    var b = out.data;

    var a11 = a[0];
    var a12 = a[4];
    var a13 = a[8];
    var a14 = a[12];

    var a21 = a[1];
    var a22 = a[5];
    var a23 = a[9];
    var a24 = a[13];

    var a31 = a[2];
    var a32 = a[6];
    var a33 = a[10];
    var a34 = a[14];

    var a41 = a[3];
    var a42 = a[7];
    var a43 = a[11];
    var a44 = a[15];

    // 2x2 determinants
    var d1 = a33 * a44 - a43 * a34;
    var d2 = a23 * a44 - a43 * a24;
    var d3 = a23 * a34 - a33 * a24;
    var d4 = a13 * a44 - a43 * a14;
    var d5 = a13 * a34 - a33 * a14;
    var d6 = a13 * a24 - a23 * a14;

    // 3x3 determinants
    var det1 = a22 * d1 - a32 * d2 + a42 * d3;
    var det2 = a12 * d1 - a32 * d4 + a42 * d5;
    var det3 = a12 * d2 - a22 * d4 + a42 * d6;
    var det4 = a12 * d3 - a22 * d5 + a32 * d6;

    var detInv = 1 / (a11 * det1 - a21 * det2 + a31 * det3 - a41 * det4);

    b[0] = det1 * detInv;
    b[4] = -det2 * detInv;
    b[8] = det3 * detInv;
    b[12] = -det4 * detInv;
    b[1] = -(a21 * d1 - a31 * d2 + a41 * d3) * detInv;
    b[5] = (a11 * d1 - a31 * d4 + a41 * d5) * detInv;
    b[9] = -(a11 * d2 - a21 * d4 + a41 * d6) * detInv;
    b[13] = (a11 * d3 - a21 * d5 + a31 * d6) * detInv;

    var v1 = a32 * a44 - a42 * a34;
    var v2 = a22 * a44 - a42 * a24;
    var v3 = a22 * a34 - a32 * a24;
    var v4 = a12 * a44 - a42 * a14;
    var v5 = a12 * a34 - a32 * a14;
    var v6 = a12 * a24 - a22 * a14;
    b[2] = (a21 * v1 - a31 * v2 + a41 * v3) * detInv;
    b[6] = -(a11 * v1 - a31 * v4 + a41 * v5) * detInv;
    b[10] = (a11 * v2 - a21 * v4 + a41 * v6) * detInv;
    b[14] = -(a11 * v3 - a21 * v5 + a31 * v6) * detInv;

    v1 = a32 * a43 - a42 * a33;
    v2 = a22 * a43 - a42 * a23;
    v3 = a22 * a33 - a32 * a23;
    v4 = a12 * a43 - a42 * a13;
    v5 = a12 * a33 - a32 * a13;
    v6 = a12 * a23 - a22 * a13;
    b[3] = -(a21 * v1 - a31 * v2 + a41 * v3) * detInv;
    b[7] = (a11 * v1 - a31 * v4 + a41 * v5) * detInv;
    b[11] = -(a11 * v2 - a21 * v4 + a41 * v6) * detInv;
    b[15] = (a11 * v3 - a21 * v5 + a31 * v6) * detInv;

    return out;
  };


  /**
   * Negate the components of the given matrix
   * @static
   * @method negate
   * @param {Mat4} mat The matrix to transpose
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.negate = function(mat, out){
    out = out || new Mat4();
    var d = mat.data;
    var o = out.data;
    o[ 0] = -d[ 0];
    o[ 1] = -d[ 1];
    o[ 2] = -d[ 2];
    o[ 3] = -d[ 3];
    o[ 4] = -d[ 4];
    o[ 5] = -d[ 5];
    o[ 6] = -d[ 6];
    o[ 7] = -d[ 7];
    o[ 8] = -d[ 8];
    o[ 9] = -d[ 9];
    o[10] = -d[10];
    o[11] = -d[11];
    o[12] = -d[12];
    o[13] = -d[13];
    o[14] = -d[14];
    o[15] = -d[15];
    return out;
  };


  /**
   * Adds a matrix to another
   * @static
   * @method add
   * @param {Mat4} matA The first matrix
   * @param {Mat4} matB The second matrix
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.add = function(matA, matB, out){
    out = out || new Mat4();
    var a = matA.data;
    var b =  matB.data;
    var c = out.data;
    c[ 0] = a[ 0] + b[ 0];
    c[ 1] = a[ 1] + b[ 1];
    c[ 2] = a[ 2] + b[ 2];
    c[ 3] = a[ 3] + b[ 3];
    c[ 4] = a[ 4] + b[ 4];
    c[ 5] = a[ 5] + b[ 5];
    c[ 6] = a[ 6] + b[ 6];
    c[ 7] = a[ 7] + b[ 7];
    c[ 8] = a[ 8] + b[ 8];
    c[ 9] = a[ 9] + b[ 9];
    c[10] = a[10] + b[10];
    c[11] = a[11] + b[11];
    c[12] = a[12] + b[12];
    c[13] = a[13] + b[13];
    c[14] = a[14] + b[14];
    c[15] = a[15] + b[15];
    return out;
  };


  /**
   * Adds a scalar to each component of a matrix
   * @static
   * @method addScalar
   * @param {Mat4} mat The matrix
   * @param {Number} scalar The scalar to add
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.addScalar = function(mat, scalar, out){
    out = out || new Mat4();
    var a = mat.data;
    var c = out.data;
    c[ 0] = a[ 0] + scalar;
    c[ 1] = a[ 1] + scalar;
    c[ 2] = a[ 2] + scalar;
    c[ 3] = a[ 3] + scalar;
    c[ 4] = a[ 4] + scalar;
    c[ 5] = a[ 5] + scalar;
    c[ 6] = a[ 6] + scalar;
    c[ 7] = a[ 7] + scalar;
    c[ 8] = a[ 8] + scalar;
    c[ 9] = a[ 9] + scalar;
    c[10] = a[10] + scalar;
    c[11] = a[11] + scalar;
    c[12] = a[12] + scalar;
    c[13] = a[13] + scalar;
    c[14] = a[14] + scalar;
    c[15] = a[15] + scalar;
    return out;
  };


  /**
   * Subtracts the second matrix from the first
   * @static
   * @method subtract
   * @param {Mat4} matA The first matrix
   * @param {Mat4} matB The second matrix
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.subtract = function(matA, matB, out){
    out = out || new Mat4();
    var a = matA.data;
    var b = matB.data;
    var c = out.data;
    c[ 0] = a[ 0] - b[ 0];
    c[ 1] = a[ 1] - b[ 1];
    c[ 2] = a[ 2] - b[ 2];
    c[ 3] = a[ 3] - b[ 3];
    c[ 4] = a[ 4] - b[ 4];
    c[ 5] = a[ 5] - b[ 5];
    c[ 6] = a[ 6] - b[ 6];
    c[ 7] = a[ 7] - b[ 7];
    c[ 8] = a[ 8] - b[ 8];
    c[ 9] = a[ 9] - b[ 9];
    c[10] = a[10] - b[10];
    c[11] = a[11] - b[11];
    c[12] = a[12] - b[12];
    c[13] = a[13] - b[13];
    c[14] = a[14] - b[14];
    c[15] = a[15] - b[15];
    return out;
  };


  /**
   * Subtracts a scalar from each somponent of a matrix
   * @static
   * @method subtractScalar
   * @param {Mat4} mat The matrix to subtract from
   * @param {Number} scalar The scalar to subtract
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.subtractScalar = function(mat, scalar, out){
    out = out || new Mat4();
    var a = mat.data;
    var c = out.data;
    c[ 0] = a[ 0] - scalar;
    c[ 1] = a[ 1] - scalar;
    c[ 2] = a[ 2] - scalar;
    c[ 3] = a[ 3] - scalar;
    c[ 4] = a[ 4] - scalar;
    c[ 5] = a[ 5] - scalar;
    c[ 6] = a[ 6] - scalar;
    c[ 7] = a[ 7] - scalar;
    c[ 8] = a[ 8] - scalar;
    c[ 9] = a[ 9] - scalar;
    c[10] = a[10] - scalar;
    c[11] = a[11] - scalar;
    c[12] = a[12] - scalar;
    c[13] = a[13] - scalar;
    c[14] = a[14] - scalar;
    c[15] = a[15] - scalar;
    return out;
  };


  /**
   * Multiplies a matrix by another matrix
   * @static
   * @method multiply
   * @param {Mat4} matA The first matrix
   * @param {Mat4} matB The second matrix
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.multiply = function(matA, matB, out){
    out = out || new Mat4();
    var a = matB.data;
    var b = matA.data;
    var c = out.data;

    var a_0 = a[ 0];
    var a_1 = a[ 1];
    var a_2 = a[ 2];
    var a_3 = a[ 3];
    var a_4 = a[ 4];
    var a_5 = a[ 5];
    var a_6 = a[ 6];
    var a_7 = a[ 7];
    var a_8 = a[ 8];
    var a_9 = a[ 9];
    var a10 = a[10];
    var a11 = a[11];
    var a12 = a[12];
    var a13 = a[13];
    var a14 = a[14];
    var a15 = a[15];

    var b_0 = b[ 0];
    var b_1 = b[ 1];
    var b_2 = b[ 2];
    var b_3 = b[ 3];
    var b_4 = b[ 4];
    var b_5 = b[ 5];
    var b_6 = b[ 6];
    var b_7 = b[ 7];
    var b_8 = b[ 8];
    var b_9 = b[ 9];
    var b10 = b[10];
    var b11 = b[11];
    var b12 = b[12];
    var b13 = b[13];
    var b14 = b[14];
    var b15 = b[15];

    c[ 0] = b_0 * a_0 + b_1 * a_4 + b_2 * a_8 + b_3 * a12;
    c[ 1] = b_0 * a_1 + b_1 * a_5 + b_2 * a_9 + b_3 * a13;
    c[ 2] = b_0 * a_2 + b_1 * a_6 + b_2 * a10 + b_3 * a14;
    c[ 3] = b_0 * a_3 + b_1 * a_7 + b_2 * a11 + b_3 * a15;
    c[ 4] = b_4 * a_0 + b_5 * a_4 + b_6 * a_8 + b_7 * a12;
    c[ 5] = b_4 * a_1 + b_5 * a_5 + b_6 * a_9 + b_7 * a13;
    c[ 6] = b_4 * a_2 + b_5 * a_6 + b_6 * a10 + b_7 * a14;
    c[ 7] = b_4 * a_3 + b_5 * a_7 + b_6 * a11 + b_7 * a15;
    c[ 8] = b_8 * a_0 + b_9 * a_4 + b10 * a_8 + b11 * a12;
    c[ 9] = b_8 * a_1 + b_9 * a_5 + b10 * a_9 + b11 * a13;
    c[10] = b_8 * a_2 + b_9 * a_6 + b10 * a10 + b11 * a14;
    c[11] = b_8 * a_3 + b_9 * a_7 + b10 * a11 + b11 * a15;
    c[12] = b12 * a_0 + b13 * a_4 + b14 * a_8 + b15 * a12;
    c[13] = b12 * a_1 + b13 * a_5 + b14 * a_9 + b15 * a13;
    c[14] = b12 * a_2 + b13 * a_6 + b14 * a10 + b15 * a14;
    c[15] = b12 * a_3 + b13 * a_7 + b14 * a11 + b15 * a15;
    return out;
  };


  /**
   * Multiplies a matrix by another matrix
   * @static
   * @method concat
   * @param {Mat4} matA The first matrix
   * @param {Mat4} matB The second matrix
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.concat = function(matA, matB, out){
    out = out || new Mat4();
    var a = matA.data;
    var b = matB.data;
    var c = out.data;

    var a_0 = a[ 0];
    var a_1 = a[ 1];
    var a_2 = a[ 2];
    var a_3 = a[ 3];
    var a_4 = a[ 4];
    var a_5 = a[ 5];
    var a_6 = a[ 6];
    var a_7 = a[ 7];
    var a_8 = a[ 8];
    var a_9 = a[ 9];
    var a10 = a[10];
    var a11 = a[11];
    var a12 = a[12];
    var a13 = a[13];
    var a14 = a[14];
    var a15 = a[15];

    var b_0 = b[ 0];
    var b_1 = b[ 1];
    var b_2 = b[ 2];
    var b_3 = b[ 3];
    var b_4 = b[ 4];
    var b_5 = b[ 5];
    var b_6 = b[ 6];
    var b_7 = b[ 7];
    var b_8 = b[ 8];
    var b_9 = b[ 9];
    var b10 = b[10];
    var b11 = b[11];
    var b12 = b[12];
    var b13 = b[13];
    var b14 = b[14];
    var b15 = b[15];

    c[ 0] = b_0 * a_0 + b_1 * a_4 + b_2 * a_8 + b_3 * a12;
    c[ 1] = b_0 * a_1 + b_1 * a_5 + b_2 * a_9 + b_3 * a13;
    c[ 2] = b_0 * a_2 + b_1 * a_6 + b_2 * a10 + b_3 * a14;
    c[ 3] = b_0 * a_3 + b_1 * a_7 + b_2 * a11 + b_3 * a15;
    c[ 4] = b_4 * a_0 + b_5 * a_4 + b_6 * a_8 + b_7 * a12;
    c[ 5] = b_4 * a_1 + b_5 * a_5 + b_6 * a_9 + b_7 * a13;
    c[ 6] = b_4 * a_2 + b_5 * a_6 + b_6 * a10 + b_7 * a14;
    c[ 7] = b_4 * a_3 + b_5 * a_7 + b_6 * a11 + b_7 * a15;
    c[ 8] = b_8 * a_0 + b_9 * a_4 + b10 * a_8 + b11 * a12;
    c[ 9] = b_8 * a_1 + b_9 * a_5 + b10 * a_9 + b11 * a13;
    c[10] = b_8 * a_2 + b_9 * a_6 + b10 * a10 + b11 * a14;
    c[11] = b_8 * a_3 + b_9 * a_7 + b10 * a11 + b11 * a15;
    c[12] = b12 * a_0 + b13 * a_4 + b14 * a_8 + b15 * a12;
    c[13] = b12 * a_1 + b13 * a_5 + b14 * a_9 + b15 * a13;
    c[14] = b12 * a_2 + b13 * a_6 + b14 * a10 + b15 * a14;
    c[15] = b12 * a_3 + b13 * a_7 + b14 * a11 + b15 * a15;
    return this;
  };

  /**
   * Multiplies a chain of matrices
   * @static
   * @method concatChain
   * @return {Mat4} The result of the multiplication
   */
  Mat4.concatChain = function(){
    var i, result = arguments[0].clone();
    for (i = 1; i < arguments.length; i += 1){
      Mat4.concat(arguments[i], result, result);
    }
    return result;
  };

  /**
   * Multiplies a chain of matrices
   * @static
   * @method multiplyChain
   * @return {Mat4} The result of the multiplication
   */
  Mat4.multiplyChain = function(){
    var i, result = arguments[0].clone();
    for (i = 1; i < arguments.length; i += 1){
      Mat4.multiply(arguments[i], result, result);
    }
    return result;
  };

  /**
   * Multiplies a matrix with a scalar value
   * @static
   * @method multiplyScalar
   * @param {Mat4} matA The matrix
   * @param {Number} scalar The scalar to multiply
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.multiplyScalar = function(matA, scalar, out){
    out = out || new Mat4();
    var a = matA.data;
    var c = out.data;
    c[ 0] = a[ 0] * scalar;
    c[ 1] = a[ 1] * scalar;
    c[ 2] = a[ 2] * scalar;
    c[ 3] = a[ 3] * scalar;
    c[ 4] = a[ 4] * scalar;
    c[ 5] = a[ 5] * scalar;
    c[ 6] = a[ 6] * scalar;
    c[ 7] = a[ 7] * scalar;
    c[ 8] = a[ 8] * scalar;
    c[ 9] = a[ 9] * scalar;
    c[10] = a[10] * scalar;
    c[11] = a[11] * scalar;
    c[12] = a[12] * scalar;
    c[13] = a[13] * scalar;
    c[14] = a[14] * scalar;
    c[15] = a[15] * scalar;
    return out;
  };


  /**
   * Divides the components of the first matrix by the components of the second matrix
   * @static
   * @method divide
   * @param {Mat4} matA The first matrix
   * @param {Mat4} matB The second matrix
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.divide = function(matA, matB, out){
    out = out || new Mat4();
    var a = matA.data;
    var b = matB.data;
    var c = out.data;
    c[ 0] = a[ 0] / b[ 0];
    c[ 1] = a[ 1] / b[ 1];
    c[ 2] = a[ 2] / b[ 2];
    c[ 3] = a[ 3] / b[ 3];
    c[ 4] = a[ 4] / b[ 4];
    c[ 5] = a[ 5] / b[ 5];
    c[ 6] = a[ 6] / b[ 6];
    c[ 7] = a[ 7] / b[ 7];
    c[ 8] = a[ 8] / b[ 8];
    c[ 9] = a[ 9] / b[ 9];
    c[10] = a[10] / b[10];
    c[11] = a[11] / b[11];
    c[12] = a[12] / b[12];
    c[13] = a[13] / b[13];
    c[14] = a[14] / b[14];
    c[15] = a[15] / b[15];
    return out;
  };

  /**
   * Divides the components of a matrix by a scalar
   * @static
   * @method divideScalar
   * @param {Mat4} matA The matrix
   * @param {Number} scalar The scalar by which to divide
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.divideScalar = function(matA, scalar, out){
    out = out || new Mat4();
    var a = matA.data;
    var c = out.data;
    scalar = 1 / scalar;
    c[ 0] = a[ 0] * scalar;
    c[ 1] = a[ 1] * scalar;
    c[ 2] = a[ 2] * scalar;
    c[ 3] = a[ 3] * scalar;
    c[ 4] = a[ 4] * scalar;
    c[ 5] = a[ 5] * scalar;
    c[ 6] = a[ 6] * scalar;
    c[ 7] = a[ 7] * scalar;
    c[ 8] = a[ 8] * scalar;
    c[ 9] = a[ 9] * scalar;
    c[10] = a[10] * scalar;
    c[11] = a[11] * scalar;
    c[12] = a[12] * scalar;
    c[13] = a[13] * scalar;
    c[14] = a[14] * scalar;
    c[15] = a[15] * scalar;
    return out;
  };

  /**
   * Performs a linear interpolation between two matrices
   * @static
   * @method lerp
   * @param {Mat4} matA The first matrix
   * @param {Mat4} matB The second matrix
   * @param {Number} t The interpolation value. This is assumed to be in [0:1] range
   * @param {Mat4} [out] The matrix to write to
   * @return {Mat4} The given `out` parameter or a new matrix
   */
  Mat4.lerp = function (matA, matB, t, out) {
    out = out || new Mat4();
    var a = matA.data;
    var b = matB.data;
    var c = out.data;
    c[ 0] = a[ 0] + (b[ 0] - a[ 0]) * t;
    c[ 1] = a[ 1] + (b[ 1] - a[ 1]) * t;
    c[ 2] = a[ 2] + (b[ 2] - a[ 2]) * t;
    c[ 3] = a[ 3] + (b[ 3] - a[ 3]) * t;
    c[ 4] = a[ 4] + (b[ 4] - a[ 4]) * t;
    c[ 5] = a[ 5] + (b[ 5] - a[ 5]) * t;
    c[ 6] = a[ 6] + (b[ 6] - a[ 6]) * t;
    c[ 7] = a[ 7] + (b[ 7] - a[ 7]) * t;
    c[ 8] = a[ 8] + (b[ 8] - a[ 8]) * t;
    c[ 9] = a[ 9] + (b[ 9] - a[ 9]) * t;
    c[10] = a[10] + (b[10] - a[10]) * t;
    c[11] = a[11] + (b[11] - a[11]) * t;
    c[12] = a[12] + (b[12] - a[12]) * t;
    c[13] = a[13] + (b[13] - a[13]) * t;
    c[14] = a[14] + (b[14] - a[14]) * t;
    c[15] = a[15] + (b[15] - a[15]) * t;
    return out;
  };

  /**
   * Creates a new matrix with all components set to 0
   * @static
   * @method zero
   * @return {Mat4} a new matrix
   */
  Mat4.zero = function(){
    return new Mat4();
  };

  /**
   * Creates a new matrix that is initialized to identity
   * @static
   * @method identity
   * @return {Mat4} a new matrix
   */
  Mat4.identity = function(){
    var out = new Mat4();
    var d = out.data;
    d[0] = d[5] = d[10] = d[15] = 1;
    return out;
  };

  /**
   * Creates a new matrix. This method should be called with 16 or 0 arguments. If less than 16 but more than 0 arguments
   * are given some components are going to be undefined. The arguments are expected to be in column major order.
   * @static
   * @method create
   * @param [m0]
   * @param [m1]
   * @param [m2]
   * @param [m3]
   * @param [m4]
   * @param [m5]
   * @param [m6]
   * @param [m7]
   * @param [m8]
   * @param [m9]
   * @param [m10]
   * @param [m11]
   * @param [m12]
   * @param [m13]
   * @param [m14]
   * @param [m15]
   * @return {Mat4} a new matrix
   */
  Mat4.create = function(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15){
    var out = new Mat4();
    var d = out.data;
    if (m0 !== undefined){
      d[0] = m0;
      d[1] = m1;
      d[2] = m2;
      d[3] = m3;
      d[4] = m4;
      d[5] = m5;
      d[6] = m6;
      d[7] = m7;
      d[8] = m8;
      d[9] = m9;
      d[10] = m10;
      d[11] = m11;
      d[12] = m12;
      d[13] = m13;
      d[14] = m14;
      d[15] = m15;
    }
    return out;
  };

  /**
   * Creates a new matrix. The arguments are expected to be in row major order.
   * @static
   * @method createRowMajor
   * @param m0
   * @param m4
   * @param m8
   * @param m12
   * @param m1
   * @param m5
   * @param m9
   * @param m13
   * @param m2
   * @param m6
   * @param m10
   * @param m14
   * @param m3
   * @param m7
   * @param m11
   * @param m15
   * @return {Mat4} a new matrix
   */
  Mat4.createRowMajor = function(m0, m4, m8, m12, m1, m5, m9, m13, m2, m6, m10, m14,m3, m7, m11, m15){
    var out = new Mat4();
    var d = out.data;
    d[0] = m0;
    d[1] = m1;
    d[2] = m2;
    d[3] = m3;
    d[4] = m4;
    d[5] = m5;
    d[6] = m6;
    d[7] = m7;
    d[8] = m8;
    d[9] = m9;
    d[10] = m10;
    d[11] = m11;
    d[12] = m12;
    d[13] = m13;
    d[14] = m14;
    d[15] = m15;
    return out;
  };

  /**
   * @static
   * @method createScale
   * @param x
   * @param y
   * @param z
   * @return {Mat4} a new matrix
   */
  Mat4.createScale = function(x, y, z){
    return new Mat4().initScale(x, y, z);
  };

  /**
   * @static
   * @method createTranslation
   * @param x
   * @param y
   * @param z
   * @return {Mat4} a new matrix
   */
  Mat4.createTranslation = function(x, y, z){
    return new Mat4().initTranslation(x, y, z);
  };

  /**
   * @static
   * @method createLookAt
   * @param pos
   * @param lookAt
   * @param up
   * @return {Mat4} a new matrix
   */
  Mat4.createLookAt = function(pos, lookAt, up){
    return new Mat4().initLookAt(pos, lookAt, up);
  };

  /**
   * @static
   * @method createWorld
   * @param position
   * @param forward
   * @param up
   * @return {Mat4} a new matrix
   */
  Mat4.createWorld = function(position, forward, up){
    return new Mat4().initWorld(position, forward, up);
  };

  /**
   * @static
   * @method createPerspectiveFieldOfView
   * @param fov
   * @param aspec
   * @param near
   * @param far
   * @return {Mat4} a new matrix
   */
  Mat4.createPerspectiveFieldOfView = function(fov, aspec, near, far){
    return new Mat4().initPerspectiveFieldOfView(fov, aspec, near, far);
  };

  /**
   * @static
   * @method createPerspective
   * @param width
   * @param height
   * @param near
   * @param far
   * @return {Mat4} a new matrix
   */
  Mat4.createPerspective = function(width, height, near, far){
    return new Mat4().initPerspective(width, height, near, far);
  };

  /**
   * @static
   * @method createPerspectiveOffCenter
   * @param left
   * @param right
   * @param bottom
   * @param top
   * @param near
   * @param far
   * @return {Mat4} a new matrix
   */
  Mat4.createPerspectiveOffCenter = function(left, right, bottom, top, near, far){
    return new Mat4().initPerspectiveOffCenter(left, right, bottom, top, near, far);
  };

  /**
   * @static
   * @method createOrthographic
   * @param width
   * @param height
   * @param near
   * @param far
   * @return {Mat4} a new matrix
   */
  Mat4.createOrthographic = function(width, height, near, far){
    return new Mat4().initOrthographic(width, height, near, far);
  };

  /**
   * @static
   * @method createOrthographicOffCenter
   * @param left
   * @param right
   * @param bottom
   * @param top
   * @param near
   * @param far
   * @return {Mat4} a new matrix
   */
  Mat4.createOrthographicOffCenter = function(left, right, bottom, top, near, far){
    return new Mat4().initOrthographicOffCenter(left, right, bottom, top, near, far);
  };

  /**
   * @static
   * @method createRotationX
   * @param rad
   * @return {Mat4} a new matrix
   */
  Mat4.createRotationX = function(rad){
    return new Mat4().initRotationX(rad);
  };

  /**
   * @static
   * @method createRotationY
   * @param rad
   * @return {Mat4} a new matrix
   */
  Mat4.createRotationY = function(rad){
    return new Mat4().initRotationY(rad);
  };

  /**
   * @static
   * @method createRotationZ
   * @param rad
   * @return {Mat4} a new matrix
   */
  Mat4.createRotationZ = function(rad){
    return new Mat4().initRotationZ(rad);
  };

  /**
   * @static
   * @method createAxisAngle
   * @param axis
   * @param angle
   * @return {Mat4} a new matrix
   */
  Mat4.createAxisAngle = function(axis, angle){
    return new Mat4().initAxisAngle(axis, angle);
  };

  /**
   * @static
   * @method createYawPitchRoll
   * @param yaw
   * @param pitch
   * @param roll
   * @return {Mat4} a new matrix
   */
  Mat4.createYawPitchRoll = function(yaw, pitch, roll){
    return new Mat4().initYawPitchRoll(yaw, pitch, roll);
  };

  /**
   * @static
   * @method prettyString
   * @param mat
   * @returns {string}
   */
  Mat4.prettyString = function(mat){
    var m = mat.data;
    return [
      [m[0].toFixed(3), m[4].toFixed(3), m[8].toFixed(3), m[12].toFixed(3)].join(', '),
      [m[1].toFixed(3), m[5].toFixed(3), m[9].toFixed(3), m[13].toFixed(3)].join(', '),
      [m[2].toFixed(3), m[6].toFixed(3), m[10].toFixed(3), m[14].toFixed(3)].join(', '),
      [m[3].toFixed(3), m[7].toFixed(3), m[11].toFixed(3), m[15].toFixed(3)].join(', ')
    ].join('\n');
  };

}(window));
