(function(){
  'use strict';

  /**
   *
   * @global
   * @constructor Vec2
   * @param {number} x
   * @param {number} y
   */
  var Vec2 = window.Vec2 = function(x, y){
    this.x = x;
    this.y = y;
  };

  Vec2.prototype = {

    /**
     * Initializes components of the vector with given values.
     * @instance
     * @memberof Vec2
     * @param {number} [x] value for X component
     * @param {number} [y] value for Y component
     * @returns {Vec2} this vector for chaining
     */
    init: function(x, y){
      this.x = x;
      this.y = y;
      return this;
    },

    /**
     * Initializes this vector to the values of the given vector
     * @instance
     * @memberof Vec2
     * @param other
     * @returns {Vec2}
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      return this;
    },

    /**
     * @instance
     * @memberof Vec2
     * @param buffer
     * @param offset
     * @returns {Vec2}
     */
    initFromBuffer: function(buffer, offset){
      offset = offset || 0;
      this.x = buffer[offset];
      this.y = buffer[offset + 1];
      return this;
    },

    /**
     * Creates a clone of this vector
     * @instance
     * @memberof Vec2
     * @returns {Vec2} the clone vector
     */
    clone: function(){
      return new Vec2(this.x, this.y);
    },

    /**
     * Copies the components successively into the given array.
     * @instance
     * @memberof Vec2
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {number} [offset] Zero based index where to start writing in the array
     */
    copy: function(buffer, offset){
      offset = +offset;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
    },

    /**
     * Checks for component wise equality with given vector
     * @instance
     * @memberof Vec2
     * @param {Vec2} other The vector to test with
     * @returns {boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y));
    },

    /**
     * Calculates the length of this vector
     * @instance
     * @memberof Vec2
     * @returns {number} The length.
     */
    length: function(){
      var x = this.x;
      var y = this.y;
      return Math.sqrt(x * x + y * y);
    },

    /**
     * Calculates the squared length of this vector
     * @instance
     * @memberof Vec2
     * @returns {number} The squared length.
     */
    lengthSquared: function(){
      var x = this.x;
      var y = this.y;
      return x * x + y * y;
    },

    /**
     * Calculates the distance to the given vector
     * @instance
     * @memberof Vec2
     * @param {Vec2} other The distant vector
     * @returns {number} The distance.
     */
    distance: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      return Math.sqrt(x * x + y * y);
    },

    /**
     * Calculates the squared distance to the given vector
     * @instance
     * @memberof Vec2
     * @param {Vec2} other The distant vector
     * @returns {number} The distance.
     */
    distanceSquared: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      return x * x + y * y;
    },

    /**
     * Calculates the dot product with the given vector
     * @instance
     * @memberof Vec2
     * @param {Vec2} other
     * @returns {number} The dot product.
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y;
    },

    /**
     * Normalizes this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @returns {Vec2} This vector for chaining.
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
     * @instance
     * @memberof Vec2
     * @returns {Vec2} This vector for chainint
     */
    selfInvert: function(){
      this.x = 1.0 / this.x;
      this.y = 1.0 / this.y;
      return this;
    },

    /**
     * Negates this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @returns {Vec2} This vector for chaining.
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      return this;
    },

    /**
     * Calculates the sum of this and the other vector. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {Vec2} other The vector to add
     * @returns {Vec2} This vector for chaining.
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      return this;
    },

    /**
     * Calculates the sum of this vector and the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {number} scalar The scalar to add.
     * @returns {Vec2} This vector for chaining.
     */
    selfAddScalar: function(scalar){
      this.x += scalar;
      this.y += scalar;
      return this;
    },

    /**
     * Subtracts the given from this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {Vec2} other The vector to subtract.
     * @returns {Vec2} This vector for chaining.
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      return this;
    },

    /**
     * Subtracts the given scalar from this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {Vec2} scalar The scalar to subtract.
     * @returns {Vec2} This vector for chaining.
     */
    selfSubtractScalar: function(scalar){
      this.x -= scalar;
      this.y -= scalar;
      return this;
    },

    /**
     * Multiplies this and the other vector. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {Vec2} other The vector to multiply.
     * @returns {Vec2} This vector for chaining.
     */
    selfMultiply: function(other){
      this.x *= other.x;
      this.y *= other.y;
      return this;
    },

    /**
     * Multiplies this vector and the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {number} scalar The scalar to multiply.
     * @returns {Vec2} This vector for chaining.
     */
    selfMultiplyScalar: function(scalar){
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },

    /**
     * Divides this by the given vector. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {Vec2} other The vector to divide with.
     * @returns {Vec2} This vector for chaining
     */
    selfDivide: function(other){
      this.x /= other.x;
      this.y /= other.y;
      return this;
    },

    /**
     * Divides this vector by the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {number} scalar The scalar to divide with.
     * @returns {Vec2} This vector for chaining
     */
    selfDivideScalar: function(scalar){
      this.x /= scalar;
      this.y /= scalar;
      return this;
    },

    /**
     * Performs a multiplication followed by a sum operation. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {Vec2} mul The vector to multiply.
     * @param {Vec2} add The vector to add on top of the multiplication.
     * @returns {Vec2} This vector for chaining
     */
    selfMultiplyAdd: function(mul, add){
      this.x = this.x * mul.x + add.x;
      this.y = this.y * mul.y + add.y;
      return this;
    },

    /**
     * Performs a multiplication followed by a sum operation. Applies the result to this vector.
     * @instance
     * @memberof Vec2
     * @param {number} mul The scalar to multiply.
     * @param {Vec4} add The vector to add on top of the multiplication.
     * @returns {Vec2} This vector for chaining
     */
    selfMultiplyScalarAdd: function(mul, add){
      this.x = this.x * mul + add.x;
      this.y = this.y * mul + add.y;
      return this;
    }
  };

  /**
   * Creates a new vector with all components set to the specified values.
   * @static
   * @memberof Vec2
   * @param {number} [x] The x component
   * @param {number} [y] The y component
   * @returns {Vec2} A new vector.
   */
  Vec2.create = function(x, y){
    if (x !== undefined){
      return new Vec2(x, y);
    }
    return new Vec2(0, 0);
  };

  /**
   * Creates a new vector with all components set to 0.
   * @static
   * @memberof Vec2
   * @returns {Vec2} A new vector.
   */
  Vec2.zero = function(){
    return new Vec2(0, 0);
  };

  /**
   * Creates a new vector with all components set to 1.
   * @static
   * @memberof Vec2
   * @returns {Vec2} A new vector.
   */
  Vec2.one = function(){
    return new Vec2(1, 1);
  };


  /**
   * Normalizes the given vector.
   * @static
   * @memberof Vec2
   * @param {Vec2} vec The vector to normalize.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
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
   * @memberof Vec2
   * @param {Vec2} vec The vector to invert.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
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
   * @memberof Vec2
   * @param {Vec2} vec The vector to negate.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
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
   * @memberof Vec2
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
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
   * @memberof Vec2
   * @param {Vec2} vec The first vector.
   * @param {Vec2} scalar The scalar to add.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
   */
  Vec2.addScalar = function(vec, scalar, out){
    out = out || new Vec2();
    out.x = vec.x + scalar;
    out.y = vec.y + scalar;
    return out;
  };

  /**
   * Subtracts two vectors.
   * @static
   * @memberof Vec2
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
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
   * @memberof Vec2
   * @param {Vec2} vec The first vector.
   * @param {Vec2} scalar The scalar to add.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
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
   * @memberof Vec2
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
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
   * @memberof Vec2
   * @param {Vec2} vec The first vector.
   * @param {Vec2} scalar The scalar to add.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
   */
  Vec2.multiplyScalar = function(vec, scalar, out){
    out = out || new Vec2();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    return out;
  };

  /**
   * Divides two vectors.
   * @static
   * @memberof Vec2
   * @param {Vec2} vecA The first vector.
   * @param {Vec2} vecB The second vector.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
   */
  Vec2.divide = function(vecA, vecB, out){
    out = out || new Vec2();
    out.x = vecA.x / vecB.x;
    out.y = vecA.y / vecB.y;
    return out;
  };

  /**
   * Divides each component of the vector by given scalar.
   * @static
   * @memberof Vec2
   * @param {Vec2} vec The first vector.
   * @param {Vec2} scalar The scalar to add.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
   */
  Vec2.divideScalar = function(vec, scalar, out){
    out = out || new Vec2();
    out.x = vec.x / scalar;
    out.y = vec.y / scalar;
    return out;
  };

  /**
   * Performs a multiplication followed by a sum operation.
   * @static
   * @memberof Vec2
   * @param {Vec2} vecA The vector to multiply.
   * @param {Vec2} vecB The vector to multiply.
   * @param {Vec2} add The vector to add on top of the multiplication.
   * @param {Vec2} out The vector to write to.
   * @returns {Vec2} The given out vector.
   */
  Vec2.multiplyAdd = function(vecA, vecB, add, out){
    out = out || new Vec2();
    out.x = vecA.x * vecB.x + add.x;
    out.y = vecA.y * vecB.y + add.y;
    return out;
  };

  /**
   * @static
   * @memberof Vec2
   * @param vecA
   * @param mul
   * @param add
   * @param out
   * @returns {Vec2}
   */
  Vec2.multiplyScalarAdd = function(vecA, mul, add, out){
    out = out || new Vec2();
    out.x = vecA.x * mul + add.x;
    out.y = vecA.y * mul + add.y;
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector based on the min and max vectors.
   * @static
   * @memberof Vec2
   * @param {Vec2} a The vector to clamp.
   * @param {Vec2} min Vector with the minimum component values.
   * @param {Vec2} max Vector with the maximum component values.
   * @param {Vec2} out The vector to write to.
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
   * Performs a component wise clamp operation on the the given vector based on the min and max scalars.
   * @static
   * @memberof Vec2
   * @param {Vec2} a The vector to clamp.
   * @param {number} min The minimum scalar value.
   * @param {number} max The maximum scalar value.
   * @param {Vec2} out The vector to write to.
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
   * @memberof Vec2
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Vec2} out The vector to write to.
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
   * Performs a component wise min operation on the the given vector and scalar value.
   * @static
   * @memberof Vec2
   * @param {Vec2} a The vector.
   * @param {number} scalar The scalar.
   * @param {Vec2} out The vector to write to.
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
   * @memberof Vec2
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Vec2} out The vector to write to.
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
   * Performs a component wise max operation on the the given vector and scalar value.
   * @static
   * @memberof Vec2
   * @param {Vec2} a The vector.
   * @param {number} scalar The scalar.
   * @param {Vec2} out The vector to write to.
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
   * @memberof Vec2
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec2} out The vector to write to.
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
   * @memberof Vec2
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Vec2} c The third vector.
   * @param {Number} t1 The first interpolation value. Assumed to be in range [0:1].
   * @param {Number} t2 The second interpolation value. Assumed to be in range [0:1].
   * @param {Vec2} out The vector to write to.
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
   * @memberof Vec2
   * @param {Vec2} a The first vector.
   * @param {Vec2} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec2} out The vector to write to.
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
   * Converts the given data to a vector
   * @static
   * @memberof Vec2
   * @param {Vec2|Vec2|Vec2|Quat|Array|number} data
   * @returns {Vec2}
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
}());