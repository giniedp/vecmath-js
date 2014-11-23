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