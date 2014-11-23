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
(function(){
  'use strict';

  /**
   *
   * @global
   * @constructor Vec3
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  var Vec3 = window.Vec3 = function(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  };

  Vec3.prototype = {

    /**
     * Initializes components of the vector with given values.
     * @instance
     * @memberof Vec3
     * @param {number} [x] value for X component
     * @param {number} [y] value for Y component
     * @param {number} [z] value for Z component
     * @returns {Vec3} this vector for chaining
     */
    init: function(x, y, z){
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    },

    /**
     * Initializes this vector to the values of the given vector
     * @instance
     * @memberof Vec3
     * @param other
     * @returns {Vec3}
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      this.z = other.z;
      return this;
    },

    /**
     * @instance
     * @memberof Vec3
     * @param buffer
     * @param offset
     * @returns {Vec3}
     */
    initFromBuffer: function(buffer, offset){
      offset = offset || 0;
      this.x = buffer[offset];
      this.y = buffer[offset + 1];
      this.z = buffer[offset + 2];
      return this;
    },

    /**
     * Creates a clone of this vector
     * @instance
     * @memberof Vec3
     * @returns {Vec3} the clone vector
     */
    clone: function(){
      return new Vec3(this.x, this.y, this.z);
    },

    /**
     * Copies the components successively into the given array.
     * @instance
     * @memberof Vec3
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {number} [offset] Zero based index where to start writing in the array
     */
    copy: function(buffer, offset){
      offset = +offset;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
      buffer[offset + 2] = this.z;
    },

    /**
     * Checks for component wise equality with given vector
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The vector to test with
     * @returns {boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y) && (this.z === other.z));
    },

    /**
     * Calculates the length of this vector
     * @instance
     * @memberof Vec3
     * @returns {number} The length.
     */
    length: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      return Math.sqrt(x * x + y * y + z * z);
    },

    /**
     * Calculates the squared length of this vector
     * @instance
     * @memberof Vec3
     * @returns {number} The squared length.
     */
    lengthSquared: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      return x * x + y * y + z * z;
    },

    /**
     * Calculates the distance to the given vector
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The distant vector
     * @returns {number} The distance.
     */
    distance: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      var z = this.z - other.z;
      return Math.sqrt(x * x + y * y + z * z);
    },

    /**
     * Calculates the squared distance to the given vector
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The distant vector
     * @returns {number} The distance.
     */
    distanceSquared: function(other){
      var x = this.x - other.x;
      var y = this.y - other.y;
      var z = this.z - other.z;
      return x * x + y * y + z * z;
    },

    /**
     * Calculates the dot product with the given vector
     * @instance
     * @memberof Vec3
     * @param {Vec3} other
     * @returns {number} The dot product.
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y + this.z * other.z;
    },

    /**
     * Normalizes this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @returns {Vec3} This vector for chaining.
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
     * @instance
     * @memberof Vec3
     * @returns {Vec3} This vector for chainint
     */
    selfInvert: function(){
      this.x = 1.0 / this.x;
      this.y = 1.0 / this.y;
      this.z = 1.0 / this.z;
      return this;
    },

    /**
     * Negates this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @returns {Vec3} This vector for chaining.
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    },

    /**
     * Calculates the cross product. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The second vector.
     * @returns {Vec3} A new vector.
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
     * Calculates the sum of this and the other vector. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The vector to add
     * @returns {Vec3} This vector for chaining.
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
      return this;
    },

    /**
     * Calculates the sum of this vector and the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {number} scalar The scalar to add.
     * @returns {Vec3} This vector for chaining.
     */
    selfAddScalar: function(scalar){
      this.x += scalar;
      this.y += scalar;
      this.z += scalar;
      return this;
    },

    /**
     * Subtracts the given from this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The vector to subtract.
     * @returns {Vec3} This vector for chaining.
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
      return this;
    },

    /**
     * Subtracts the given scalar from this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {Vec3} scalar The scalar to subtract.
     * @returns {Vec3} This vector for chaining.
     */
    selfSubtractScalar: function(scalar){
      this.x -= scalar;
      this.y -= scalar;
      this.z -= scalar;
      return this;
    },

    /**
     * Multiplies this and the other vector. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The vector to multiply.
     * @returns {Vec3} This vector for chaining.
     */
    selfMultiply: function(other){
      this.x *= other.x;
      this.y *= other.y;
      this.z *= other.z;
      return this;
    },

    /**
     * Multiplies this vector and the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {number} scalar The scalar to multiply.
     * @returns {Vec3} This vector for chaining.
     */
    selfMultiplyScalar: function(scalar){
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    },

    /**
     * Divides this by the given vector. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {Vec3} other The vector to divide with.
     * @returns {Vec3} This vector for chaining
     */
    selfDivide: function(other){
      this.x /= other.x;
      this.y /= other.y;
      this.z /= other.z;
      return this;
    },

    /**
     * Divides this vector by the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {number} scalar The scalar to divide with.
     * @returns {Vec3} This vector for chaining
     */
    selfDivideScalar: function(scalar){
      this.x /= scalar;
      this.y /= scalar;
      this.z /= scalar;
      return this;
    },

    /**
     * Performs a multiplication followed by a sum operation. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {Vec3} mul The vector to multiply.
     * @param {Vec3} add The vector to add on top of the multiplication.
     * @returns {Vec3} This vector for chaining
     */
    selfMultiplyAdd: function(mul, add){
      this.x = this.x * mul.x + add.x;
      this.y = this.y * mul.y + add.y;
      this.z = this.z * mul.z + add.z;
      return this;
    },

    /**
     * Performs a multiplication followed by a sum operation. Applies the result to this vector.
     * @instance
     * @memberof Vec3
     * @param {number} mul The scalar to multiply.
     * @param {Vec4} add The vector to add on top of the multiplication.
     * @returns {Vec3} This vector for chaining
     */
    selfMultiplyScalarAdd: function(mul, add){
      this.x = this.x * mul + add.x;
      this.y = this.y * mul + add.y;
      this.z = this.z * mul + add.z;
      return this;
    }
  };

  /**
   * Creates a new vector with all components set to the specified values.
   * @static
   * @memberof Vec3
   * @param {number} [x] The x component
   * @param {number} [y] The y component
   * @param {number} [z] The z component
   * @returns {Vec3} A new vector.
   */
  Vec3.create = function(x, y, z){
    if (x !== undefined){
      return new Vec3(x, y, z);
    }
    return new Vec3(0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 0.
   * @static
   * @memberof Vec3
   * @returns {Vec3} A new vector.
   */
  Vec3.zero = function(){
    return new Vec3(0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 1.
   * @static
   * @memberof Vec3
   * @returns {Vec3} A new vector.
   */
  Vec3.one = function(){
    return new Vec3(1, 1, 1);
  };

  /**
   * Normalizes the given vector.
   * @static
   * @memberof Vec3
   * @param {Vec3} vec The vector to normalize.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
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
   * Inverts the given vector.
   * @static
   * @memberof Vec3
   * @param {Vec3} vec The vector to invert.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
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
   * @memberof Vec3
   * @param {Vec3} vec The vector to negate.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
   */
  Vec3.negate = function(vec, out){
    out = out || new Vec3();
    out.x = -vec.x;
    out.y = -vec.y;
    out.z = -vec.z;
    return out;
  };

  /**
   * Calculates the cross product. Applies the result to this vector.
   * @instance
   * @memberof Vec3
   * @param {Vec3} vecA The vector to negate.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
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
   * Adds two vectors.
   * @static
   * @memberof Vec3
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
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
   * @memberof Vec3
   * @param {Vec3} vec The first vector.
   * @param {Vec3} scalar The scalar to add.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
   */
  Vec3.addScalar = function(vec, scalar, out){
    out = out || new Vec3();
    out.x = vec.x + scalar;
    out.y = vec.y + scalar;
    out.z = vec.z + scalar;
    return out;
  };

  /**
   * Subtracts two vectors.
   * @static
   * @memberof Vec3
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
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
   * @memberof Vec3
   * @param {Vec3} vec The first vector.
   * @param {Vec3} scalar The scalar to add.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
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
   * @memberof Vec3
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
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
   * @memberof Vec3
   * @param {Vec3} vec The first vector.
   * @param {Vec3} scalar The scalar to add.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
   */
  Vec3.multiplyScalar = function(vec, scalar, out){
    out = out || new Vec3();
    out.x = vec.x * scalar;
    out.y = vec.y * scalar;
    out.z = vec.z * scalar;
    return out;
  };

  /**
   * Divides two vectors.
   * @static
   * @memberof Vec3
   * @param {Vec3} vecA The first vector.
   * @param {Vec3} vecB The second vector.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
   */
  Vec3.divide = function(vecA, vecB, out){
    out = out || new Vec3();
    out.x = vecA.x / vecB.x;
    out.y = vecA.y / vecB.y;
    out.z = vecA.z / vecB.z;
    return out;
  };

  /**
   * Divides each component of the vector by given scalar.
   * @static
   * @memberof Vec3
   * @param {Vec3} vec The first vector.
   * @param {Vec3} scalar The scalar to add.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
   */
  Vec3.divideScalar = function(vec, scalar, out){
    out = out || new Vec3();
    out.x = vec.x / scalar;
    out.y = vec.y / scalar;
    out.z = vec.z / scalar;
    return out;
  };

  /**
   * Performs a multiplication followed by a sum operation.
   * @static
   * @memberof Vec3
   * @param {Vec3} vecA The vector to multiply.
   * @param {Vec3} vecB The vector to multiply.
   * @param {Vec3} add The vector to add on top of the multiplication.
   * @param {Vec3} out The vector to write to.
   * @returns {Vec3} The given out vector.
   */
  Vec3.multiplyAdd = function(vecA, vecB, add, out){
    out = out || new Vec3();
    out.x = vecA.x * vecB.x + add.x;
    out.y = vecA.y * vecB.y + add.y;
    out.z = vecA.z * vecB.z + add.z;
    return out;
  };

  /**
   * @static
   * @memberof Vec3
   * @param vecA
   * @param mul
   * @param add
   * @param out
   * @returns {Vec3}
   */
  Vec3.multiplyScalarAdd = function(vecA, mul, add, out){
    out = out || new Vec3();
    out.x = vecA.x * mul + add.x;
    out.y = vecA.y * mul + add.y;
    out.z = vecA.z * mul + add.z;
    return out;
  };

  /**
   * Performs a component wise clamp operation on the the given vector based on the min and max vectors.
   * @static
   * @memberof Vec3
   * @param {Vec3} a The vector to clamp.
   * @param {Vec3} min Vector with the minimum component values.
   * @param {Vec3} max Vector with the maximum component values.
   * @param {Vec3} out The vector to write to.
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
   * Performs a component wise clamp operation on the the given vector based on the min and max scalars.
   * @static
   * @memberof Vec3
   * @param {Vec3} a The vector to clamp.
   * @param {number} min The minimum scalar value.
   * @param {number} max The maximum scalar value.
   * @param {Vec3} out The vector to write to.
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
   * @memberof Vec3
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Vec3} out The vector to write to.
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
   * Performs a component wise min operation on the the given vector and scalar value.
   * @static
   * @memberof Vec3
   * @param {Vec3} a The vector.
   * @param {number} scalar The scalar.
   * @param {Vec3} out The vector to write to.
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
   * @memberof Vec3
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Vec3} out The vector to write to.
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
   * Performs a component wise max operation on the the given vector and scalar value.
   * @static
   * @memberof Vec3
   * @param {Vec3} a The vector.
   * @param {number} scalar The scalar.
   * @param {Vec3} out The vector to write to.
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
   * @memberof Vec3
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec3} out The vector to write to.
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
   * @memberof Vec3
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Vec3} c The third vector.
   * @param {Number} t1 The first interpolation value. Assumed to be in range [0:1].
   * @param {Number} t2 The second interpolation value. Assumed to be in range [0:1].
   * @param {Vec3} out The vector to write to.
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
   * @memberof Vec3
   * @param {Vec3} a The first vector.
   * @param {Vec3} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec3} out The vector to write to.
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
   * Converts the given data to a vector
   * @static
   * @memberof Vec3
   * @param {Vec2|Vec3|Vec3|Quat|Array|number} data
   * @returns {Vec3}
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
}());
(function(){
  'use strict';

  /**
   *
   * @global
   * @constructor Vec4
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} w
   */
  var Vec4 = window.Vec4 = function(x, y, z, w){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  };

  Vec4.prototype = {

    /**
     * Initializes components of the vector with given values.
     * @instance
     * @memberof Vec4
     * @param {number} [x] value for X component
     * @param {number} [y] value for Y component
     * @param {number} [z] value for Z component
     * @param {number} [w] value for W component
     * @returns {Vec4} this vector for chaining
     */
    init: function(x, y, z, w){
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    },

    /**
     * Initializes this vector to the values of the given vector
     * @instance
     * @memberof Vec4
     * @param other
     * @returns {Vec4}
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      this.z = other.z;
      this.w = other.w;
      return this;
    },

    /**
     * @instance
     * @memberof Vec4
     * @param buffer
     * @param offset
     * @returns {Vec4}
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
     * Creates a clone of this vector
     * @instance
     * @memberof Vec4
     * @returns {Vec4} the clone vector
     */
    clone: function(){
      return new Vec4(this.x, this.y, this.z, this.w);
    },

    /**
     * Copies the components successively into the given array.
     * @instance
     * @memberof Vec4
     * @param {Array|Float32Array} buffer The array to copy into
     * @param {number} [offset] Zero based index where to start writing in the array
     */
    copy: function(buffer, offset){
      offset = +offset;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
      buffer[offset + 2] = this.z;
      buffer[offset + 3] = this.w;
    },

    /**
     * Checks for component wise equality with given vector
     * @instance
     * @memberof Vec4
     * @param {Vec4} other The vector to test with
     * @returns {boolean} true if components are equal, false otherwise
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y) && (this.z === other.z) && (this.w === other.w));
    },

    /**
     * Calculates the length of this vector
     * @instance
     * @memberof Vec4
     * @returns {number} The length.
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
     * @instance
     * @memberof Vec4
     * @returns {number} The squared length.
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
     * @instance
     * @memberof Vec4
     * @param {Vec4} other The distant vector
     * @returns {number} The distance.
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
     * @instance
     * @memberof Vec4
     * @param {Vec4} other The distant vector
     * @returns {number} The distance.
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
     * @instance
     * @memberof Vec4
     * @param {Vec4} other
     * @returns {number} The dot product.
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
    },

    /**
     * Normalizes this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @returns {Vec4} This vector for chaining.
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
     * @instance
     * @memberof Vec4
     * @returns {Vec4} This vector for chainint
     */
    selfInvert: function(){
      this.x = 1.0 / this.x;
      this.y = 1.0 / this.y;
      this.z = 1.0 / this.z;
      this.w = 1.0 / this.w;
      return this;
    },

    /**
     * Negates this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @returns {Vec4} This vector for chaining.
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    },

    /**
     * Calculates the sum of this and the other vector. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {Vec4} other The vector to add
     * @returns {Vec4} This vector for chaining.
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
      this.w += other.w;
      return this;
    },

    /**
     * Calculates the sum of this vector and the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {number} scalar The scalar to add.
     * @returns {Vec4} This vector for chaining.
     */
    selfAddScalar: function(scalar){
      this.x += scalar;
      this.y += scalar;
      this.z += scalar;
      this.w += scalar;
      return this;
    },

    /**
     * Subtracts the given from this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {Vec4} other The vector to subtract.
     * @returns {Vec4} This vector for chaining.
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
      this.w -= other.w;
      return this;
    },

    /**
     * Subtracts the given scalar from this vector. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {Vec4} scalar The scalar to subtract.
     * @returns {Vec4} This vector for chaining.
     */
    selfSubtractScalar: function(scalar){
      this.x -= scalar;
      this.y -= scalar;
      this.z -= scalar;
      this.w -= scalar;
      return this;
    },

    /**
     * Multiplies this and the other vector. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {Vec4} other The vector to multiply.
     * @returns {Vec4} This vector for chaining.
     */
    selfMultiply: function(other){
      this.x *= other.x;
      this.y *= other.y;
      this.z *= other.z;
      this.w *= other.w;
      return this;
    },

    /**
     * Multiplies this vector and the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {number} scalar The scalar to multiply.
     * @returns {Vec4} This vector for chaining.
     */
    selfMultiplyScalar: function(scalar){
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      this.w *= scalar;
      return this;
    },

    /**
     * Divides this by the given vector. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {Vec4} other The vector to divide with.
     * @returns {Vec4} This vector for chaining
     */
    selfDivide: function(other){
      this.x /= other.x;
      this.y /= other.y;
      this.z /= other.z;
      this.w /= other.w;
      return this;
    },

    /**
     * Divides this vector by the given scalar. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {number} scalar The scalar to divide with.
     * @returns {Vec4} This vector for chaining
     */
    selfDivideScalar: function(scalar){
      this.x /= scalar;
      this.y /= scalar;
      this.z /= scalar;
      this.w /= scalar;
      return this;
    },

    /**
     * Performs a multiplication followed by a sum operation. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {Vec4} mul The vector to multiply.
     * @param {Vec4} add The vector to add on top of the multiplication.
     * @returns {Vec4} This vector for chaining
     */
    selfMultiplyAdd: function(mul, add){
      this.x = this.x * mul.x + add.x;
      this.y = this.y * mul.y + add.y;
      this.z = this.z * mul.z + add.z;
      this.w = this.w * mul.w + add.w;
      return this;
    },

    /**
     * Performs a multiplication followed by a sum operation. Applies the result to this vector.
     * @instance
     * @memberof Vec4
     * @param {number} mul The scalar to multiply.
     * @param {Vec4} add The vector to add on top of the multiplication.
     * @returns {Vec4} This vector for chaining
     */
    selfMultiplyScalarAdd: function(mul, add){
      this.x = this.x * mul + add.x;
      this.y = this.y * mul + add.y;
      this.z = this.z * mul + add.z;
      this.w = this.w * mul + add.w;
      return this;
    }
  };

  /**
   * Creates a new vector with all components set to the specified values.
   * @static
   * @memberof Vec4
   * @param {number} [x] The x component
   * @param {number} [y] The y component
   * @param {number} [z] The z component
   * @param {number} [w] The w component
   * @returns {Vec4} A new vector.
   */
  Vec4.create = function(x, y, z, w){
    if (x !== undefined){
      return new Vec4(x, y, z, w);
    }
    return new Vec4(0, 0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 0.
   * @static
   * @memberof Vec4
   * @returns {Vec4} A new vector.
   */
  Vec4.zero = function(){
    return new Vec4(0, 0, 0, 0);
  };

  /**
   * Creates a new vector with all components set to 1.
   * @static
   * @memberof Vec4
   * @returns {Vec4} A new vector.
   */
  Vec4.one = function(){
    return new Vec4(1, 1, 1, 1);
  };


  /**
   * Normalizes the given vector.
   * @static
   * @memberof Vec4
   * @param {Vec4} vec The vector to normalize.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @memberof Vec4
   * @param {Vec4} vec The vector to invert.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @memberof Vec4
   * @param {Vec4} vec The vector to negate.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @memberof Vec4
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @memberof Vec4
   * @param {Vec4} vec The first vector.
   * @param {Vec4} scalar The scalar to add.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * Subtracts two vectors.
   * @static
   * @memberof Vec4
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @memberof Vec4
   * @param {Vec4} vec The first vector.
   * @param {Vec4} scalar The scalar to add.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @memberof Vec4
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @memberof Vec4
   * @param {Vec4} vec The first vector.
   * @param {Vec4} scalar The scalar to add.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * Divides two vectors.
   * @static
   * @memberof Vec4
   * @param {Vec4} vecA The first vector.
   * @param {Vec4} vecB The second vector.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * Divides each component of the vector by given scalar.
   * @static
   * @memberof Vec4
   * @param {Vec4} vec The first vector.
   * @param {Vec4} scalar The scalar to add.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
   */
  Vec4.divideScalar = function(vec, scalar, out){
    out = out || new Vec4();
    out.x = vec.x / scalar;
    out.y = vec.y / scalar;
    out.z = vec.z / scalar;
    out.w = vec.w / scalar;
    return out;
  };

  /**
   * Performs a multiplication followed by a sum operation.
   * @static
   * @memberof Vec4
   * @param {Vec4} vecA The vector to multiply.
   * @param {Vec4} vecB The vector to multiply.
   * @param {Vec4} add The vector to add on top of the multiplication.
   * @param {Vec4} out The vector to write to.
   * @returns {Vec4} The given out vector.
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
   * @static
   * @memberof Vec4
   * @param vecA
   * @param mul
   * @param add
   * @param out
   * @returns {Vec4}
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
   * Performs a component wise clamp operation on the the given vector based on the min and max vectors.
   * @static
   * @memberof Vec4
   * @param {Vec4} a The vector to clamp.
   * @param {Vec4} min Vector with the minimum component values.
   * @param {Vec4} max Vector with the maximum component values.
   * @param {Vec4} out The vector to write to.
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
   * Performs a component wise clamp operation on the the given vector based on the min and max scalars.
   * @static
   * @memberof Vec4
   * @param {Vec4} a The vector to clamp.
   * @param {number} min The minimum scalar value.
   * @param {number} max The maximum scalar value.
   * @param {Vec4} out The vector to write to.
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
   * @memberof Vec4
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Vec4} out The vector to write to.
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
   * Performs a component wise min operation on the the given vector and scalar value.
   * @static
   * @memberof Vec4
   * @param {Vec4} a The vector.
   * @param {number} scalar The scalar.
   * @param {Vec4} out The vector to write to.
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
   * @memberof Vec4
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Vec4} out The vector to write to.
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
   * Performs a component wise max operation on the the given vector and scalar value.
   * @static
   * @memberof Vec4
   * @param {Vec4} a The vector.
   * @param {number} scalar The scalar.
   * @param {Vec4} out The vector to write to.
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
   * @memberof Vec4
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec4} out The vector to write to.
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
   * @memberof Vec4
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Vec4} c The third vector.
   * @param {Number} t1 The first interpolation value. Assumed to be in range [0:1].
   * @param {Number} t2 The second interpolation value. Assumed to be in range [0:1].
   * @param {Vec4} out The vector to write to.
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
   * @memberof Vec4
   * @param {Vec4} a The first vector.
   * @param {Vec4} b The second vector.
   * @param {Number} t The interpolation value. Assumed to be in range [0:1].
   * @param {Vec4} out The vector to write to.
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
   * Converts the given data to a vector
   * @static
   * @memberof Vec4
   * @param {Vec2|Vec3|Vec4|Quat|Array|number} data
   * @returns {Vec4}
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
}());
(function(){
  'use strict';

  /**
   * Creates a new quaternion object
   * @global
   * @constructor Quat
   * @param {number} x value for X component
   * @param {number} y value for Y component
   * @param {number} z value for Z component
   * @param {number} w value for W component
   */
  var Quat = window.Quat = function(x, y, z, w){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  };

  Quat.prototype = {
    /**
     * Initializes components of the quaternion with given values.
     * @instance
     * @memberof Quat
     * @param {number} x value for X component
     * @param {number} y value for Y component
     * @param {number} z value for Z component
     * @param {number} w value for W component
     * @returns {Quat} This quaternion for chaining.
     */
    init: function(x, y, z, w){
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    },

    /**
     * Initializes the quaternion to the identity.
     * @instance
     * @memberof Quat
     * @returns {Quat} This quaternion to allow chaining
     */
    initIdentity: function(){
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 1;
      return this;
    },

    /**
     * Initializes the quaternion to zero.
     * @instance
     * @memberof Quat
     * @returns {Quat} This quaternion to allow chaining
     */
    initZero: function(){
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 0;
      return this;
    },

    /**
     * Copies the components from given quaternion
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {Quat}
     */
    initFrom: function(other){
      this.x = other.x;
      this.y = other.y;
      this.z = other.z;
      this.w = other.w;
      return this;
    },

    /**
     * @instance
     * @memberof Quat
     * @param buffer
     * @param offset
     * @returns {Quat}
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
     * @param {Vec3} axis
     * @param {number} angle
     * @returns {Quat} This quaternion to allow chaining
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
     * @instance
     * @memberof Quat
     * @param {number} yaw
     * @param {number} pitch
     * @param {number} roll
     * @returns {Quat} This quaternion to allow chaining
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
     * @instance
     * @memberof Quat
     * @returns {Quat} a new quaternion
     */
    clone: function(){
      return new Quat(this.x, this.y, this.z, this.w);
    },

    /**
     * @instance
     * @memberof Quat
     * @param {Array|Float32Array} buffer
     * @param {number} offset
     */
    copy: function(buffer, offset){
      offset = offset || 0;
      buffer[offset] = this.x;
      buffer[offset + 1] = this.y;
      buffer[offset + 2] = this.z;
      buffer[offset + 3] = this.w;
    },

    /**
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {boolean}
     */
    equals: function(other){
      return ((this.x === other.x) && (this.y === other.y) && (this.z === other.z) && (this.w === other.w));
    },

    /**
     * @instance
     * @memberof Quat
     * @returns {number}
     */
    length: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      return Math.sqrt(x * x + y * y + z * z + w * w);
    },

    /**
     * @instance
     * @memberof Quat
     * @returns {number}
     */
    lengthSquared: function(){
      var x = this.x;
      var y = this.y;
      var z = this.z;
      var w = this.w;
      return x * x + y * y + z * z + w * w;
    },

    /**
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {number}
     */
    dot: function(other){
      return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
    },

    /**
     * @instance
     * @memberof Quat
     * @returns {Quat}
     */
    selfNegate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    },

    /**
     * @instance
     * @memberof Quat
     * @returns {Quat}
     */
    selfConjugate: function(){
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    },

    /**
     * @instance
     * @memberof Quat
     * @returns {Quat}
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
     * @instance
     * @memberof Quat
     * @returns {Quat}
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
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {Quat}
     */
    selfAdd: function(other){
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
      this.w += other.w;
      return this;
    },

    /**
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {Quat}
     */
    selfSubtract: function(other){
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
      this.w -= other.w;
      return this;
    },

    /**
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {Quat}
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
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {Quat}
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
     * @instance
     * @memberof Quat
     * @param {Quat} other
     * @returns {Quat}
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

      return vec.init(
        vx * (1 - yy2 - zz2) + vy * (xy2 - wz2) + vz * (xz2 + wy2),
        vx * (xy2 + wz2) + vy * (1 - xx2 - zz2) + vz * (yz2 - wx2),
        vx * (xz2 - wy2) + vy * (yz2 + wx2) + vz * (1 - xx2 - yy2)
      );
    }
  };

  /**
   * @static
   * @memberof Quat
   * @returns {Quat}
   */
  Quat.create = function(x, y, z, w){
    if (x !== undefined){
      return new Quat(x, y, z, w);
    }
    return new Quat(0, 0, 0, 0);
  };

  /**
   * @static
   * @memberof Quat
   * @returns {Quat}
   */
  Quat.zero = function(){
    return new Quat(0, 0, 0, 0);
  };

  /**
   * @static
   * @memberof Quat
   * @returns {Quat}
   */
  Quat.identity = function(){
    return new Quat(0, 0, 0, 1);
  };

  /**
   * @static
   * @memberof Quat
   * @param {Vec3} axis
   * @param {number} angle
   * @returns {Quat}
   */
  Quat.fromAxisAngle = function(axis, angle){
    return Quat.identity().initAxisAngle(axis, angle);
  };

  /**
   * @static
   * @memberof Quat
   * @param {number} yaw
   * @param {number} pitch
   * @param {number} roll
   * @returns {Quat}
   */
  Quat.fromYawPitchRoll = function(yaw, pitch, roll){
    return Quat.identity().initYawPitchRoll(yaw, pitch, roll);
  };

  /**
   * Negates this quaternion. Applies the result to the given out quaternion.
   * @static
   * @memberof Quat
   * @param {Quat} quat
   * @param {Quat} out The quaternion to write to.
   * @returns {Quat} The given out quaternion.
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
   * @static
   * @memberof Quat
   * @param {Quat} quat
   * @param {Quat} out
   * @returns {Quat}
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
   * @static
   * @memberof Quat
   * @param {Quat} quat
   * @param {Quat} out
   * @returns {Quat}
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
   * @static
   * @memberof Quat
   * @param {Quat} quat
   * @param {Quat} out
   * @returns {Quat}
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
   * @static
   * @memberof Quat
   * @param {Quat} quatA
   * @param {Quat} quatB
   * @param {Quat} out
   * @returns {Quat}
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
   * @static
   * @memberof Quat
   * @param {Quat} quatA
   * @param {Quat} quatB
   * @param {Quat} out
   * @returns {Quat}
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
   * @static
   * @memberof Quat
   * @param {Quat} quatA
   * @param {Quat} quatB
   * @param {Quat} out
   * @returns {Quat}
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
   * @static
   * @memberof Quat
   * @param {Quat} quatA
   * @param {Quat} quatB
   * @param {Quat} out
   * @returns {Quat}
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
   * @static
   * @memberof Quat
   * @param {Quat} quatA
   * @param {Quat} quatB
   * @param {Quat} out
   * @returns {Quat}
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

    if (out.q !== undefined){
      out.w = 1;
    }

    return out;
  };
}());
(function(){
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
  var Vec4 = window.Vec4;

  /**
   * Creates a new Mat4 object
   * @global
   * @constructor Mat4
   */
  var Mat4 = window.Mat4 = function(data){
    this.data = data || new window.Float32Array(16);
    this.right = this.data.subarray(0, 3);
    this.up = this.data.subarray(4, 7);
    this.backward = this.data.subarray(8, 11);
    this.translation = this.data.subarray(12, 15);
  };

  Mat4.prototype = {

    /**
     * Initializes the elements of this matrix. The given elements are expected in column major order.
     * @instance
     * @memberof Mat4
     * @param {number} m0
     * @param {number} m1
     * @param {number} m2
     * @param {number} m3
     * @param {number} m4
     * @param {number} m5
     * @param {number} m6
     * @param {number} m7
     * @param {number} m8
     * @param {number} m9
     * @param {number} m10
     * @param {number} m11
     * @param {number} m12
     * @param {number} m13
     * @param {number} m14
     * @param {number} m15
     * @returns {Mat4} This matrix to for chaining.
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
     * Initializes the elements of this matrix. The given elements are expected in row major order.
     * @instance
     * @memberof Mat4
     * @param {number} m0
     * @param {number} m4
     * @param {number} m8
     * @param {number} m12
     * @param {number} m1
     * @param {number} m5
     * @param {number} m9
     * @param {number} m13
     * @param {number} m2
     * @param {number} m6
     * @param {number} m10
     * @param {number} m14
     * @param {number} m3
     * @param {number} m7
     * @param {number} m11
     * @param {number} m15
     * @returns {Mat4} This matrix for chaining.
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
     * Initializes all components of this matrix to the given number.
     * @instance
     * @memberof Mat4
     * @param {number} number
     * @returns {Mat4} This matrix for chaining.
     */
    initAll: function(number){
      var d = this.data;
      d[0] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = number;
      return this;
    },

    /**
     * Initializes the elements of this matrix to the identity.
     * @instance
     * @memberof Mat4
     * @returns {Mat4} This matrix for chaining.
     */
    initIdentity: function(){
      var d = this.data;
      d[0] = d[5] = d[10] = d[15] = 1;
      d[1] = d[2] = d[3] = d[4] = d[6] = d[7] = d[8] = d[9] = d[11] = d[12] = d[13] = d[14] = 0;
      return this;
    },

    /**
     * Initializes this matrix from another matrix.
     * @param {Mat4} other
     * @returns {Mat4} This matrix for chaining.
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
     * @param {Array|Float32Array} buffer
     * @param {number} [offset]
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param {Quat} q
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param {Vec3} axis The axis vector. This is expected to be normalized.
     * @param {number} angle The angle in radians.
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param {number} yaw Angle in radians around the Y axis
     * @param {number} pitch Angle in radians around the X axis
     * @param {number} roll Angle in radians around the Z axis
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param {number} rad The angle in radians.
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param rad The angle in radians.
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param rad The angle in radians.
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param pos
     * @param lookAt
     * @param up
     * @returns {Mat4} This matrix for chaining.
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
     *
     * @instance
     * @memberof Mat4
     * @param position
     * @param forward
     * @param up
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param fov
     * @param aspect
     * @param near
     * @param far
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param width
     * @param height
     * @param near
     * @param far
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @param width
     * @param height
     * @param near
     * @param far
     * @returns {Mat4} This matrix for chaining.
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
     *
     * @instance
     * @memberof Mat4
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     * @returns {Mat4} This matrix for chaining.
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
     * @instance
     * @memberof Mat4
     * @returns {Mat4} The clone matrix.
     */
    clone: function(){
      var d = this.data;
      return new Mat4().init(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]);
    },

    /**
     * @instance
     * @memberof Mat4
     * @param buffer
     * @param [offset]
     */
    copy: function(buffer, offset){
      offset = offset || 0;
      var i, d = this.data;
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
    },

    /**
     * @instance
     * @memberof Mat4
     * @param other
     * @returns {boolean}
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
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getForward: function(out){
      return (out || new Vec3()).init(
        -this.backward[0],
        -this.backward[1],
        -this.backward[2]
      );
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getBackward: function(out){
      return (out || new Vec3()).init(
        this.backward[0],
        this.backward[1],
        this.backward[2]
      );
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getRight: function(out){
      return (out || new Vec3()).init(
        this.right[0],
        this.right[1],
        this.right[2]
      );
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getLeft: function(out){
      return (out || new Vec3()).init(
        -this.right[0],
        -this.right[1],
        -this.right[2]
      );
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getUp: function(out){
      return (out || new Vec3()).init(
        this.up[0],
        this.up[1],
        this.up[2]);
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getDown: function(out){
      return (out || new Vec3()).init(
        -this.up[0],
        -this.up[1],
        -this.up[2]
      );
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getTranslation: function(out){
      return (out || new Vec3()).init(
        this.translation[0],
        this.translation[1],
        this.translation[2]
      );
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {Vec3}
     */
    getScale: function(out){
      return (out || new Vec3()).init(
        this.data[0],
        this.data[5],
        this.data[10]
      );
    },

    copyForward: function(buffer){
      buffer[0] = -this.backward[0];
      buffer[1] = -this.backward[1];
      buffer[2] = -this.backward[2];
      return buffer;
    },

    copyBackward: function(buffer){
      buffer[0] = this.backward[0];
      buffer[1] = this.backward[1];
      buffer[2] = this.backward[2];
      return buffer;
    },

    copyRight: function(buffer){
      buffer[0] = this.right[0];
      buffer[1] = this.right[1];
      buffer[2] = this.right[2];
      return buffer;
    },

    copyLeft: function(buffer){
      buffer[0] = -this.right[0];
      buffer[1] = -this.right[1];
      buffer[2] = -this.right[2];
      return buffer;
    },

    copyUp: function(buffer){
      buffer[0] = this.up[0];
      buffer[1] = this.up[1];
      buffer[2] = this.up[2];
      return buffer;
    },

    copyDown: function(buffer){
      buffer[0] = -this.up[0];
      buffer[1] = -this.up[1];
      buffer[2] = -this.up[2];
      return buffer;
    },

    copyTranslation: function(buffer){
      buffer[0] = this.translation[0];
      buffer[1] = this.translation[1];
      buffer[2] = this.translation[2];
      return buffer;
    },

    copyScale: function(buffer){
      buffer[0] = this.data[0];
      buffer[1] = this.data[5];
      buffer[2] = this.data[10];
      return buffer;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setForward: function(vec){
      this.backward[0] = -vec.x;
      this.backward[1] = -vec.y;
      this.backward[2] = -vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setBackward: function(vec){
      this.backward[0] = vec.x;
      this.backward[1] = vec.y;
      this.backward[2] = vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setRight: function(vec){
      this.right[0] = vec.x;
      this.right[1] = vec.y;
      this.right[2] = vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setLeft: function(vec){
      this.right[0] = -vec.x;
      this.right[1] = -vec.y;
      this.right[2] = -vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setUp: function(vec){
      this.up[0] = vec.x;
      this.up[1] = vec.y;
      this.up[2] = vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setDown: function(vec){
      this.up[0] = -vec.x;
      this.up[1] = -vec.y;
      this.up[2] = -vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setTranslation: function(vec){
      this.translation[0] = vec.x;
      this.translation[1] = vec.y;
      this.translation[2] = vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @param vec
     * @returns {Mat4}
     */
    setScale: function(vec){
      this.data[0] = vec.x;
      this.data[5] = vec.y;
      this.data[10] = vec.z;
      return this;
    },

    /**
     * @instance
     * @memberof Mat4
     * @returns {number}
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
     * @instance
     * @memberof Mat4
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {Mat4} other
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {number} scalar
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {Mat4} other
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {number} scalar
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {Mat4} other
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {Mat4} other
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {number} scalar
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {Mat4} other
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {number} scalar
     * @returns {Mat4}
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
     * @instance
     * @memberof Mat4
     * @param {Vec2|Vec3|Vec4} vec
     * @returns {Vec4}
     */
    transform: function(vec){
      var x = vec.x || 0;
      var y = vec.y || 0;
      var z = vec.z || 0;
      var w = vec.w !== undefined ? vec.w : 1;
      var d = this.data;
      return vec.init(
        x * d[0] + y * d[4] + z * d[8]  + w * d[12],
        x * d[1] + y * d[5] + z * d[9]  + w * d[13],
        x * d[2] + y * d[6] + z * d[10] + w * d[14],
        x * d[3] + y * d[7] + z * d[11] + w * d[15]
      );
    },


    /**
     * Rotates and scales the given vector with this matrix.
     * @instance
     * @memberof Mat4
     * @param {Vec2|Vec3|Vec4} vec
     * @returns {Vec3}
     */
    transformNormal: function(vec){
      var x = vec.x || 0;
      var y = vec.y || 0;
      var z = vec.z || 0;
      var d = this.data;
      return vec.init(
        x * d[0] + y * d[4] + z * d[8],
        x * d[1] + y * d[5] + z * d[9],
        x * d[2] + y * d[6] + z * d[10]
      );
    },

    /**
     * @instance
     * @memberof Mat4
     * @param {Array|Float32Array} buffer
     * @param {number} [offset]
     * @param {number} [stride]
     * @param {number} [count]
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
     * @instance
     * @memberof Mat4
     * @param {Array|Float32Array} buffer
     * @param {number} [offset]
     * @param {number} [stride]
     * @param {number} [count]
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
     * @instance
     * @memberof Mat4
     * @param {Array|Float32Array} buffer
     * @param {number} [offset]
     * @param {number} [stride]
     * @param {number} [count]
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
     * @instance
     * @memberof Mat4
     * @param {Array|Float32Array} buffer
     * @param {number} [offset]
     * @param {number} [stride]
     * @param {number} [count]
     */
    transformNormalBuffer: function(buffer, offset, stride, count){
      var x, y, z, d = this.data;
      offset = offset || 0;
      stride = stride === undefined ? 2 : stride;
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
   * @static
   * @memberof Mat4
   * @param {Mat4} mat
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} mat
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} mat
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {Mat4} matB
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} mat
   * @param {number} scalar
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {Mat4} matB
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} mat
   * @param {number} scalar
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {Mat4} matB
   * @param {Mat4} out
   * @returns {Mat4}
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
   *
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {Mat4} matB
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {number} scalar
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {Mat4} matB
   * @param {Mat4} out
   * @returns {Mat4}
   */
  Mat4.divide = function(matA, matB, out){
    out = out || new Mat4();
    var a = matA.data;
    var b = matB.data;
    var c = out.data;
    c[ 0] = a[ 0] * b[ 0];
    c[ 1] = a[ 1] * b[ 1];
    c[ 2] = a[ 2] * b[ 2];
    c[ 3] = a[ 3] * b[ 3];
    c[ 4] = a[ 4] * b[ 4];
    c[ 5] = a[ 5] * b[ 5];
    c[ 6] = a[ 6] * b[ 6];
    c[ 7] = a[ 7] * b[ 7];
    c[ 8] = a[ 8] * b[ 8];
    c[ 9] = a[ 9] * b[ 9];
    c[10] = a[10] * b[10];
    c[11] = a[11] * b[11];
    c[12] = a[12] * b[12];
    c[13] = a[13] * b[13];
    c[14] = a[14] * b[14];
    c[15] = a[15] * b[15];
    return out;
  };

  /**
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {number} scalar
   * @param {Mat4} out
   * @returns {Mat4}
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
   * @static
   * @memberof Mat4
   * @param {Mat4} matA
   * @param {Mat4} matB
   * @param {number} t
   * @param {Mat4} out
   * @returns {Mat4}
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
   *
   * @static
   * @memberof Mat4
   * @returns {Mat4}
   */
  Mat4.zero = function(){
    return new Mat4();
  };

  /**
   * @static
   * @memberof Mat4
   * @returns {Mat4}
   */
  Mat4.identity = function(){
    var out = new Mat4();
    var d = out.data;
    d[0] = d[5] = d[10] = d[15] = 1;
    return out;
  };

  /**
   *
   * @static
   * @memberof Mat4
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
   * @returns {Mat4}
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
   *
   * @static
   * @memberof Mat4
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
   * @returns {Mat4}
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

  Mat4.createScale = function(x, y, z){
    return new Mat4().initScale(x, y, z);
  };

  Mat4.createTranlsation = function(x, y, z){
    return new Mat4().initTranslation(x, y, z);
  };

  Mat4.createLookAt = function(pos, lookAt, up){
    return new Mat4().initLookAt(pos, lookAt, up);
  };

  Mat4.createWorld = function(position, forward, up){
    return new Mat4().initWorld(position, forward, up);
  };

  Mat4.createPerspectiveFieldOfView = function(fov, aspec, near, far){
    return new Mat4().initPerspectiveFieldOfView(fov, aspec, near, far);
  };

  Mat4.createPerspective = function(width, height, near, far){
    return new Mat4().initPerspective(width, height, near, far);
  };

  Mat4.createPerspectiveOffCenter = function(left, right, bottom, top, near, far){
    return new Mat4().initPerspectiveOffCenter(left, right, bottom, top, near, far);
  };

  Mat4.createOrthographic = function(width, height, near, far){
    return new Mat4().initOrthographic(width, height, near, far);
  };

  Mat4.createOrthographicOffCenter = function(left, right, bottom, top, near, far){
    return new Mat4().initOrthographicOffCenter(left, right, bottom, top, near, far);
  };

  Mat4.prettyString = function(mat){
    var m = mat.data;
    return [
      [m[0].toFixed(3), m[4].toFixed(3), m[8].toFixed(3), m[12].toFixed(3)].join(', '),
      [m[1].toFixed(3), m[5].toFixed(3), m[9].toFixed(3), m[13].toFixed(3)].join(', '),
      [m[2].toFixed(3), m[6].toFixed(3), m[10].toFixed(3), m[14].toFixed(3)].join(', '),
      [m[3].toFixed(3), m[7].toFixed(3), m[11].toFixed(3), m[15].toFixed(3)].join(', ')
    ].join('\n');
  };
}());