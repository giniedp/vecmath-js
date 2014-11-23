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