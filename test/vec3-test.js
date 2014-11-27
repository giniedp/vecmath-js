(function () {
  'use strict';

  var Vec3 = window.Vec3;

  var q = window.QUnit;
  var test = q.test;
  var equal = q.equal;
  var module = q.module;

  var assertComponents = function (a, b) {
    if (Array.isArray(b)){
      equal(a.x, b[0], 'X component.');
      equal(a.y, b[1], 'Y component.');
      equal(a.z, b[2], 'Z component.');
    } else {
      equal(a.x, b.x, 'X component.');
      equal(a.y, b.y, 'Y component.');
      equal(a.z, b.z, 'Z component.');
    }
  };

  module('Vec3#Member', {
    setup: function(){
      this.vec = Vec3.zero();
      this.vec2 = Vec3.zero();
    }
  });

  test('constructor', function () {
    assertComponents(new Vec3(1, 2, 3), [1, 2, 3]);
  });

  test('init', function () {
    assertComponents(this.vec.init(1, 2, 3), [1, 2, 3]);
  });

  test('initFrom', function () {
    assertComponents(this.vec.initFrom(new Vec3(1, 2, 3)), [1, 2, 3]);
  });

  test('initFromBuffer', function () {
    assertComponents(this.vec.initFromBuffer([0, 1, 2, 3, 4, 5], 1), [1, 2, 3]);
    assertComponents(this.vec.initFromBuffer([0, 1, 2, 3, 4, 5]), [0, 1, 2, 3]);
  });

  test('clone', function () {
    this.vec.init(1, 2, 3);
    assertComponents(this.vec.clone(), [1, 2, 3]);
  });

  test('copyTo', function () {
    var buffer = [6, 4, 3, 2, 1, 0];
    this.vec.init(1, 2, 3).copyTo(buffer, 1);
    equal(buffer[0], 6);
    equal(buffer[1], 1);
    equal(buffer[2], 2);
    equal(buffer[3], 3);
    equal(buffer[4], 1);
    equal(buffer[5], 0);
  });

  test('equals', function () {
    equal(this.vec.init(0, 0, 0).equals(this.vec2.init(0, 0, 0)), true);
    equal(this.vec.init(1, 1, 1).equals(this.vec2.init(1, 1, 1)), true);
    equal(this.vec.init(0, 1, 1).equals(this.vec2.init(1, 1, 1)), false);
    equal(this.vec.init(1, 0, 1).equals(this.vec2.init(1, 1, 1)), false);
    equal(this.vec.init(1, 1, 0).equals(this.vec2.init(1, 1, 1)), false);
  });

  test('length', function () {
    var v = Vec3.zero();
    equal(v.init(2, 0, 0).length(), 2, 'length of X');
    equal(v.init(0, 2, 0).length(), 2, 'length of Y');
    equal(v.init(0, 0, 2).length(), 2, 'length of Z');
    equal(v.init(2, 2, 2).length(), Math.sqrt(12), 'length of all');
  });

  test('lengthSquared', function () {
    var v = Vec3.zero();
    equal(v.init(2, 0, 0).lengthSquared(), 4, 'length of X');
    equal(v.init(0, 2, 0).lengthSquared(), 4, 'length of Y');
    equal(v.init(0, 0, 2).lengthSquared(), 4, 'length of Z');
    equal(v.init(2, 2, 2).lengthSquared(), 12, 'length of all');
  });

  test('distance', function () {
    var v = Vec3.zero();
    var v2 = Vec3.zero();
    equal(v.init(0, 0, 0).distance(v2.init(0, 0, 0)), 0, 'distance of all 0 is 0');
    equal(v.init(1, 0, 0).distance(v2.init(9, 0, 0)), 8, 'distance on X');
    equal(v.init(0, 2, 0).distance(v2.init(0, 8, 0)), 6, 'distance on Y');
    equal(v.init(0, 0, 3).distance(v2.init(0, 0, 7)), 4, 'distance on Z');
  });

  test('distanceSquared', function () {
    var v = Vec3.zero();
    var v2 = Vec3.zero();
    equal(v.init(0, 0, 0).distanceSquared(v2.init(0, 0, 0)), 0, 'distance of all 0 is 0');
    equal(v.init(1, 0, 0).distanceSquared(v2.init(9, 0, 0)), 64, 'distance on X');
    equal(v.init(0, 2, 0).distanceSquared(v2.init(0, 8, 0)), 36, 'distance on Y');
    equal(v.init(0, 0, 3).distanceSquared(v2.init(0, 0, 7)), 16, 'distance on Z');
  });

  test('dot', function () {
    equal(this.vec.init(1, 2, 3).dot(this.vec2.init(5, 6, 7)), 38);
  });

  test('selfNormalize', function () {
    assertComponents(this.vec.init(2, 0, 0).selfNormalize(), [1, 0, 0]);
    assertComponents(this.vec.init(0, 3, 0).selfNormalize(), [0, 1, 0]);
    assertComponents(this.vec.init(0, 0, 4).selfNormalize(), [0, 0, 1]);
  });

  test('selfInvert', function () {
    assertComponents(this.vec.init(1, 2, 4).selfInvert(), [1, 1/2, 1/4]);
  });

  test('selfNegate', function () {
    assertComponents(this.vec.init(1, 2, 3).selfNegate(), [-1, -2, -3]);
  });

  test('selfCross', function () {
    var a = Vec3.create(1, 0, 0);
    var b = Vec3.create(0, 1, 0);
    a.selfCross(b);
    assertComponents(a, [0, 0, 1]);
    assertComponents(b, [0, 1, 0]);
  });

  test('selfAdd', function () {
    this.vec.init(1, 2, 3);
    this.vec2.init(1, 2, 3);
    this.vec.selfAdd(this.vec2);
    assertComponents(this.vec, [2, 4, 6]);
    assertComponents(this.vec2, [1, 2, 3]);
  });

  test('selfAddScalar', function () {
    this.vec.init(1, 2, 3);
    this.vec.selfAddScalar(1);
    assertComponents(this.vec, [2, 3, 4]);
  });

  test('selfSubtract', function () {
    this.vec.init(1, 2, 3);
    this.vec2.init(1, 2, 3);
    this.vec.selfSubtract(this.vec2);
    assertComponents(this.vec, [0, 0, 0]);
    assertComponents(this.vec2, [1, 2, 3]);
  });

  test('selfSubtractScalar', function () {
    this.vec.init(1, 2, 3);
    this.vec.selfSubtractScalar(1);
    assertComponents(this.vec, [0, 1, 2]);
  });

  test('selfMultiply', function () {
    this.vec.init(1, 2, 3);
    this.vec2.init(1, 2, 3);
    this.vec.selfMultiply(this.vec2);
    assertComponents(this.vec, [1, 4, 9]);
    assertComponents(this.vec2, [1, 2, 3]);
  });

  test('selfMultiplyScalar', function () {
    this.vec.init(1, 2, 3);
    this.vec.selfMultiplyScalar(2);
    assertComponents(this.vec, [2, 4, 6]);
  });

  test('selfMultiplyAdd', function () {
    var a = Vec3.create(1, 2, 3);
    var b = Vec3.create(2, 2, 2);
    var c = Vec3.create(1, 1, 1);
    a.selfMultiplyAdd(b, c);

    assertComponents(a, [3, 5, 7]);
    assertComponents(b, [2, 2, 2]);
    assertComponents(c, [1, 1, 1]);
  });

  test('selfMultiplyScalarAdd', function () {
    var a = Vec3.create(1, 2, 3);
    var b = 2;
    var c = Vec3.create(1, 1, 1);
    a.selfMultiplyScalarAdd(b, c);

    assertComponents(a, [3, 5, 7]);
    assertComponents(b, 2);
    assertComponents(c, [1, 1, 1]);
  });

  test('selfDivide', function () {
    this.vec.init(1, 2, 3);
    this.vec2.init(1, 2, 3);
    this.vec.selfDivide(this.vec2);
    assertComponents(this.vec, [1, 1, 1]);
    assertComponents(this.vec2, [1, 2, 3]);
  });

  test('selfDivideScalar', function () {
    this.vec.init(1, 2, 3);
    this.vec.selfDivideScalar(2);
    assertComponents(this.vec, [0.5, 1, 1.5, 2]);
  });

  module('Vec3#Static', {
    setup: function(){
      this.vec = Vec3.zero();
      this.vec2 = Vec3.zero();
    }
  });

  test('init', function () {
    assertComponents(Vec3.create(1, 2, 3), [1, 2, 3]);
  });

  test('zero', function () {
    assertComponents(Vec3.zero(), [0, 0, 0]);
  });

  test('one', function () {
    assertComponents(Vec3.one(), [1, 1, 1]);
  });




  test('normalize', function () {
    [new Vec3(), undefined].forEach(function(out){
      assertComponents(Vec3.normalize(Vec3.create(2, 0, 0), out), [1, 0, 0]);
      assertComponents(Vec3.normalize(Vec3.create(0, 3, 0), out), [0, 1, 0]);
      assertComponents(Vec3.normalize(Vec3.create(0, 0, 4), out), [0, 0, 1]);
    });
  });

  test('invert', function () {
    [new Vec3(), undefined].forEach(function(out){
      assertComponents(Vec3.invert(Vec3.create(1, 2, 4), out), [1, 1/2, 1/4]);
    });
  });

  test('negate', function () {
    [new Vec3(), undefined].forEach(function(out){
      assertComponents(Vec3.negate(Vec3.create(1, 2, 3), out), [-1, -2, -3]);
    });
  });

  test('cross', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 0, 0);
      var b = Vec3.create(0, 1, 0);
      var c = Vec3.cross(a, b, out);
      assertComponents(a, [1, 0, 0]);
      assertComponents(b, [0, 1, 0]);
      assertComponents(c, [0, 0, 1]);
    });
  });

  test('add', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = Vec3.create(1, 2, 3);
      var c = Vec3.add(a, b, out);

      assertComponents(a, [1, 2, 3]);
      assertComponents(b, [1, 2, 3]);
      assertComponents(c, [2, 4, 6]);
    });
  });

  test('addScalar', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = 2;
      var c = Vec3.addScalar(a, b, out);

      assertComponents(a, [1, 2, 3]);
      assertComponents(b, 2);
      assertComponents(c, [3, 4, 5]);
    });
  });

  test('subtract', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = Vec3.create(1, 2, 3);
      var c = Vec3.subtract(a, b, out);

      assertComponents(a, [1, 2, 3]);
      assertComponents(b, [1, 2, 3]);
      assertComponents(c, [0, 0, 0]);
    });
  });

  test('subtractScalar', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = 1;
      var c = Vec3.subtractScalar(a, b, out);

      assertComponents(a, [1, 2, 3]);
      assertComponents(b, 1);
      assertComponents(c, [0, 1, 2]);
    });
  });

  test('multiply', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = Vec3.create(1, 2, 3);
      var c = Vec3.multiply(a, b, out);

      assertComponents(a, [1, 2, 3]);
      assertComponents(b, [1, 2, 3]);
      assertComponents(c, [1, 4, 9]);
    });
  });

  test('multiplyScalar', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var c = Vec3.multiplyScalar(a, 2, out);
      assertComponents(a, [1, 2, 3]);
      assertComponents(c, [2, 4, 6]);
    });
  });

  test('multiplyAdd', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = Vec3.create(2, 2, 2);
      var c = Vec3.create(1, 1, 1);
      var d = Vec3.multiplyAdd(a, b, c, out);

      assertComponents(a, [1, 2, 3]);
      assertComponents(b, [2, 2, 2]);
      assertComponents(c, [1, 1, 1]);
      assertComponents(d, [3, 5, 7]);
    });
  });

  test('multiplyScalarAdd', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = 2;
      var c = Vec3.create(1, 1, 1);
      var d = Vec3.multiplyScalarAdd(a, b, c, out);

      assertComponents(a, [1, 2, 3]);
      assertComponents(b, 2);
      assertComponents(c, [1, 1, 1]);
      assertComponents(d, [3, 5, 7]);
    });
  });

  test('divide', function () {
    [new Vec3(), undefined].forEach(function(out){
      var a = Vec3.create(1, 2, 3);
      var b = Vec3.create(1, 2, 3);
      var c = Vec3.divide(a, b, out);
      assertComponents(a, [1, 2, 3]);
      assertComponents(b, [1, 2, 3]);
      assertComponents(c, [1, 1, 1]);
    });
  });

  test('divideScalar', function () {
    var a = Vec3.create(1, 2, 3);
    var b = Vec3.divideScalar(a, 2);
    assertComponents(a, [1, 2, 3]);
    assertComponents(b, [0.5, 1, 1.5]);
  });

  test('clamp', function () {
    var min = Vec3.zero();
    var max = Vec3.create(2, 2, 2);
    assertComponents(Vec3.clamp(Vec3.create(-1, -1, -1), min, max), [0, 0, 0]);
    assertComponents(Vec3.clamp(Vec3.create(3, 3, 3), min, max), [2, 2, 2]);
    assertComponents(Vec3.clamp(Vec3.create(1, 1, 1), min, max), [1, 1, 1]);
  });

  test('clampScalar', function () {
    var min = 0;
    var max = 2;
    assertComponents(Vec3.clampScalar(Vec3.create(-1, -1, -1), min, max), [0, 0, 0]);
    assertComponents(Vec3.clampScalar(Vec3.create(3, 3, 3), min, max), [2, 2, 2]);
    assertComponents(Vec3.clampScalar(Vec3.create(1, 1, 1), min, max), [1, 1, 1]);
  });

  test('min', function () {
    var one = Vec3.create(1, 1, 1);
    var two = Vec3.create(2, 2, 2);
    var tre = Vec3.create(3, 3, 3);
    assertComponents(Vec3.min(one, two), [1, 1, 1]);
    assertComponents(Vec3.min(tre, two), [2, 2, 2]);
  });

  test('minScalar', function () {
    var one = Vec3.create(1, 1, 1);
    var tre = Vec3.create(3, 3, 3);
    assertComponents(Vec3.minScalar(one, 2), [1, 1, 1]);
    assertComponents(Vec3.minScalar(tre, 2), [2, 2, 2]);
  });

  test('max', function () {
    var one = Vec3.create(1, 1, 1);
    var two = Vec3.create(2, 2, 2);
    var tre = Vec3.create(3, 3, 3);
    assertComponents(Vec3.max(one, two), [2, 2, 2]);
    assertComponents(Vec3.max(tre, two), [3, 3, 3]);
  });

  test('maxScalar', function () {
    var one = Vec3.create(1, 1, 1, 1);
    var tre = Vec3.create(3, 3, 3, 3);
    assertComponents(Vec3.maxScalar(one, 2), [2, 2, 2]);
    assertComponents(Vec3.maxScalar(tre, 2), [3, 3, 3]);
  });

  test('lerp', function () {
    assertComponents(Vec3.lerp(Vec3.zero(), Vec3.one(), 0), [0, 0, 0]);
    assertComponents(Vec3.lerp(Vec3.zero(), Vec3.one(), 0.5), [0.5, 0.5, 0.5]);
    assertComponents(Vec3.lerp(Vec3.zero(), Vec3.one(), 1), [1, 1, 1]);
  });

  test('smooth', function () {
    assertComponents(Vec3.smooth(Vec3.zero(), Vec3.one(), -1), [0, 0, 0]);
    assertComponents(Vec3.smooth(Vec3.zero(), Vec3.one(), 0), [0, 0, 0]);
    assertComponents(Vec3.smooth(Vec3.zero(), Vec3.one(), 0.5), [0.5, 0.5, 0.5]);
    assertComponents(Vec3.smooth(Vec3.zero(), Vec3.one(), 1), [1, 1, 1]);
    assertComponents(Vec3.smooth(Vec3.zero(), Vec3.one(), 2), [1, 1, 1]);
  });

  test('barycentric', function () {
    var a = Vec3.create(1, 1, 1);
    var b = Vec3.create(2, 2, 2);
    var c = Vec3.create(4, 4, 4);
    assertComponents(Vec3.barycentric(a, b, c, 0, 0), [1, 1, 1]);
    assertComponents(Vec3.barycentric(a, b, c, 1, 0), [2, 2, 2]);
    assertComponents(Vec3.barycentric(a, b, c, 0, 1), [4, 4, 4]);
    assertComponents(Vec3.barycentric(a, b, c, 1, 1), [5, 5, 5]);
  });

  test('convert', function () {
    assertComponents(Vec3.convert([]), [0, 0, 0]);
    assertComponents(Vec3.convert({}), [0, 0, 0]);
    assertComponents(Vec3.convert([1, 2, 3]), [1, 2, 3]);
    assertComponents(Vec3.convert(1), [1, 1, 1]);
    assertComponents(Vec3.convert({
      x: 1,
      y: 2,
      z: 3,
      w: 4
    }), [1, 2, 3]);
  });
}());
