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