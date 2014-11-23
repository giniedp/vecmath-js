(function () {
  'use strict';

  var Vec4 = window.Vec4;

  var q = window.QUnit;
  var test = q.test;
  var equal = q.equal;
  var module = q.module;

  var assertComponents = function (a, b) {
    if (Array.isArray(b)){
      equal(a.x, b[0], 'X component.');
      equal(a.y, b[1], 'Y component.');
      equal(a.z, b[2], 'Z component.');
      equal(a.w, b[3], 'W component.');
    } else {
      equal(a.x, b.x, 'X component.');
      equal(a.y, b.y, 'Y component.');
      equal(a.z, b.z, 'Z component.');
      equal(a.w, b.w, 'W component.');
    }
  };

  module('Vec4#Member', {
    setup: function(){
      this.vec = Vec4.zero();
      this.vec2 = Vec4.zero();
    }
  });

  test('constructor', function () {
    assertComponents(new Vec4(1, 2, 3, 4), [1, 2, 3, 4]);
  });

  test('init', function () {
    assertComponents(this.vec.init(1, 2, 3, 4), [1, 2, 3, 4]);
  });

  test('initFrom', function () {
    assertComponents(this.vec.initFrom(new Vec4(1, 2, 3, 4)), [1, 2, 3, 4]);
  });

  test('initFromBuffer', function () {
    assertComponents(this.vec.initFromBuffer([0, 1, 2, 3, 4, 5], 1), [1, 2, 3, 4]);
    assertComponents(this.vec.initFromBuffer([0, 1, 2, 3, 4, 5]), [0, 1, 2, 3]);
  });

  test('clone', function () {
    this.vec.init(1, 2, 3, 4);
    assertComponents(this.vec.clone(), [1, 2, 3, 4]);
  });

  test('copy', function () {
    var buffer = [6, 4, 3, 2, 1, 0];
    this.vec.init(1, 2, 3, 4).copy(buffer, 1);
    equal(buffer[0], 6);
    equal(buffer[1], 1);
    equal(buffer[2], 2);
    equal(buffer[3], 3);
    equal(buffer[4], 4);
    equal(buffer[5], 0);
  });

  test('equals', function () {
    equal(this.vec.init(0, 0, 0, 0).equals(this.vec2.init(0, 0, 0, 0)), true);
    equal(this.vec.init(1, 1, 1, 1).equals(this.vec2.init(1, 1, 1, 1)), true);
    equal(this.vec.init(0, 1, 1, 1).equals(this.vec2.init(1, 1, 1, 1)), false);
    equal(this.vec.init(1, 0, 1, 1).equals(this.vec2.init(1, 1, 1, 1)), false);
    equal(this.vec.init(1, 1, 0, 1).equals(this.vec2.init(1, 1, 1, 1)), false);
    equal(this.vec.init(1, 1, 1, 0).equals(this.vec2.init(1, 1, 1, 1)), false);
  });

  test('length', function () {
    var v = Vec4.zero();
    equal(v.init(2, 0, 0, 0).length(), 2, 'length of X');
    equal(v.init(0, 2, 0, 0).length(), 2, 'length of Y');
    equal(v.init(0, 0, 2, 0).length(), 2, 'length of Z');
    equal(v.init(0, 0, 0, 2).length(), 2, 'length of W');
    equal(v.init(2, 2, 2, 2).length(), 4, 'length of all');
  });

  test('lengthSquared', function () {
    var v = Vec4.zero();
    equal(v.init(2, 0, 0, 0).lengthSquared(), 4, 'length of X');
    equal(v.init(0, 2, 0, 0).lengthSquared(), 4, 'length of Y');
    equal(v.init(0, 0, 2, 0).lengthSquared(), 4, 'length of Z');
    equal(v.init(0, 0, 0, 2).lengthSquared(), 4, 'length of W');
    equal(v.init(2, 2, 2, 2).lengthSquared(), 16, 'length of all');
  });

  test('distance', function () {
    var v = Vec4.zero();
    var v2 = Vec4.zero();
    equal(v.init(0, 0, 0, 0).distance(v2.init(0, 0, 0, 0)), 0, 'distance of all 0 is 0');
    equal(v.init(1, 0, 0, 0).distance(v2.init(9, 0, 0, 0)), 8, 'distance on X');
    equal(v.init(0, 2, 0, 0).distance(v2.init(0, 8, 0, 0)), 6, 'distance on Y');
    equal(v.init(0, 0, 3, 0).distance(v2.init(0, 0, 7, 0)), 4, 'distance on Z');
    equal(v.init(0, 0, 0, 4).distance(v2.init(0, 0, 0, 6)), 2, 'distance on W');
  });

  test('distanceSquared', function () {
    var v = Vec4.zero();
    var v2 = Vec4.zero();
    equal(v.init(0, 0, 0, 0).distanceSquared(v2.init(0, 0, 0, 0)), 0, 'distance of all 0 is 0');
    equal(v.init(1, 0, 0, 0).distanceSquared(v2.init(9, 0, 0, 0)), 64, 'distance on X');
    equal(v.init(0, 2, 0, 0).distanceSquared(v2.init(0, 8, 0, 0)), 36, 'distance on Y');
    equal(v.init(0, 0, 3, 0).distanceSquared(v2.init(0, 0, 7, 0)), 16, 'distance on Z');
    equal(v.init(0, 0, 0, 4).distanceSquared(v2.init(0, 0, 0, 6)), 4, 'distance on W');
  });

  test('dot', function () {
    equal(this.vec.init(1, 2, 3, 4).dot(this.vec2.init(5, 6, 7, 8)), 70);
  });

  test('selfNormalize', function () {
    assertComponents(this.vec.init(2, 0, 0, 0).selfNormalize(), [1, 0, 0, 0]);
    assertComponents(this.vec.init(0, 3, 0, 0).selfNormalize(), [0, 1, 0, 0]);
    assertComponents(this.vec.init(0, 0, 4, 0).selfNormalize(), [0, 0, 1, 0]);
    assertComponents(this.vec.init(0, 0, 0, 5).selfNormalize(), [0, 0, 0, 1]);
    assertComponents(this.vec.init(2, 2, 2, 2).selfNormalize(), [0.5, 0.5, 0.5, 0.5]);
  });

  test('selfInvert', function () {
    assertComponents(this.vec.init(1, 2, 4, 8).selfInvert(), [1, 1/2, 1/4, 1/8]);
  });

  test('selfNegate', function () {
    assertComponents(this.vec.init(1, 2, 3, 4).selfNegate(), [-1, -2, -3, -4]);
  });

  test('selfAdd', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec2.init(1, 2, 3, 4);
    this.vec.selfAdd(this.vec2);
    assertComponents(this.vec, [2, 4, 6, 8]);
    assertComponents(this.vec2, [1, 2, 3, 4]);
  });

  test('selfAddScalar', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec.selfAddScalar(1);
    assertComponents(this.vec, [2, 3, 4, 5]);
  });

  test('selfSubtract', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec2.init(1, 2, 3, 4);
    this.vec.selfSubtract(this.vec2);
    assertComponents(this.vec, [0, 0, 0, 0]);
    assertComponents(this.vec2, [1, 2, 3, 4]);
  });

  test('selfSubtractScalar', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec.selfSubtractScalar(1);
    assertComponents(this.vec, [0, 1, 2, 3]);
  });

  test('selfMultiply', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec2.init(1, 2, 3, 4);
    this.vec.selfMultiply(this.vec2);
    assertComponents(this.vec, [1, 4, 9, 16]);
    assertComponents(this.vec2, [1, 2, 3, 4]);
  });

  test('selfMultiplyScalar', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec.selfMultiplyScalar(2);
    assertComponents(this.vec, [2, 4, 6, 8]);
  });

  test('selfMultiplyAdd', function () {
    var a = Vec4.create(1, 2, 3, 4);
    var b = Vec4.create(2, 2, 2, 2);
    var c = Vec4.create(1, 1, 1, 1);
    a.selfMultiplyAdd(b, c);

    assertComponents(a, [3, 5, 7, 9]);
    assertComponents(b, [2, 2, 2, 2]);
    assertComponents(c, [1, 1, 1, 1]);
  });

  test('selfMultiplyScalarAdd', function () {
    var a = Vec4.create(1, 2, 3, 4);
    var b = 2;
    var c = Vec4.create(1, 1, 1, 1);
    a.selfMultiplyScalarAdd(b, c);

    assertComponents(a, [3, 5, 7, 9]);
    assertComponents(b, 2);
    assertComponents(c, [1, 1, 1, 1]);
  });

  test('selfDivide', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec2.init(1, 2, 3, 4);
    this.vec.selfDivide(this.vec2);
    assertComponents(this.vec, [1, 1, 1, 1]);
    assertComponents(this.vec2, [1, 2, 3, 4]);
  });

  test('selfDivideScalar', function () {
    this.vec.init(1, 2, 3, 4);
    this.vec.selfDivideScalar(2);
    assertComponents(this.vec, [0.5, 1, 1.5, 2]);
  });

  module('Vec4#Static', {
    setup: function(){
      this.vec = Vec4.zero();
      this.vec2 = Vec4.zero();
    }
  });

  test('init', function () {
    assertComponents(Vec4.create(1, 2, 3, 4), [1, 2, 3, 4]);
  });

  test('zero', function () {
    assertComponents(Vec4.zero(), [0, 0, 0, 0]);
  });

  test('one', function () {
    assertComponents(Vec4.one(), [1, 1, 1, 1]);
  });




  test('normalize', function () {
    [new Vec4(), undefined].forEach(function(out){
      assertComponents(Vec4.normalize(Vec4.create(2, 0, 0, 0), out), [1, 0, 0, 0]);
      assertComponents(Vec4.normalize(Vec4.create(0, 3, 0, 0), out), [0, 1, 0, 0]);
      assertComponents(Vec4.normalize(Vec4.create(0, 0, 4, 0), out), [0, 0, 1, 0]);
      assertComponents(Vec4.normalize(Vec4.create(0, 0, 0, 5), out), [0, 0, 0, 1]);
      assertComponents(Vec4.normalize(Vec4.create(2, 2, 2, 2), out), [0.5, 0.5, 0.5, 0.5]);
    });
  });

  test('invert', function () {
    [new Vec4(), undefined].forEach(function(out){
      assertComponents(Vec4.invert(Vec4.create(1, 2, 4, 8), out), [1, 1/2, 1/4, 1/8]);
    });
  });

  test('negate', function () {
    [new Vec4(), undefined].forEach(function(out){
      assertComponents(Vec4.negate(Vec4.create(1, 2, 3, 4), out), [-1, -2, -3, -4]);
    });
  });

  test('add', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = Vec4.create(1, 2, 3, 4);
      var c = Vec4.add(a, b, out);

      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, [1, 2, 3, 4]);
      assertComponents(c, [2, 4, 6, 8]);
    });
  });

  test('addScalar', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = 2;
      var c = Vec4.addScalar(a, b, out);

      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, 2);
      assertComponents(c, [3, 4, 5, 6]);
    });
  });

  test('subtract', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = Vec4.create(1, 2, 3, 4);
      var c = Vec4.subtract(a, b, out);

      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, [1, 2, 3, 4]);
      assertComponents(c, [0, 0, 0, 0]);
    });
  });

  test('subtractScalar', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = 1;
      var c = Vec4.subtractScalar(a, b, out);

      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, 1);
      assertComponents(c, [0, 1, 2, 3]);
    });
  });

  test('multiply', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = Vec4.create(1, 2, 3, 4);
      var c = Vec4.multiply(a, b, out);

      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, [1, 2, 3, 4]);
      assertComponents(c, [1, 4, 9, 16]);
    });
  });

  test('multiplyScalar', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var c = Vec4.multiplyScalar(a, 2, out);
      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(c, [2, 4, 6, 8]);
    });
  });

  test('multiplyAdd', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = Vec4.create(2, 2, 2, 2);
      var c = Vec4.create(1, 1, 1, 1);
      var d = Vec4.multiplyAdd(a, b, c, out);

      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, [2, 2, 2, 2]);
      assertComponents(c, [1, 1, 1, 1]);
      assertComponents(d, [3, 5, 7, 9]);
    });
  });

  test('multiplyScalarAdd', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = 2;
      var c = Vec4.create(1, 1, 1, 1);
      var d = Vec4.multiplyScalarAdd(a, b, c, out);

      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, 2);
      assertComponents(c, [1, 1, 1, 1]);
      assertComponents(d, [3, 5, 7, 9]);
    });
  });

  test('divide', function () {
    [new Vec4(), undefined].forEach(function(out){
      var a = Vec4.create(1, 2, 3, 4);
      var b = Vec4.create(1, 2, 3, 4);
      var c = Vec4.divide(a, b, out);
      assertComponents(a, [1, 2, 3, 4]);
      assertComponents(b, [1, 2, 3, 4]);
      assertComponents(c, [1, 1, 1, 1]);
    });
  });

  test('divideScalar', function () {
    var a = Vec4.create(1, 2, 3, 4);
    var b = Vec4.divideScalar(a, 2);
    assertComponents(a, [1, 2, 3, 4]);
    assertComponents(b, [0.5, 1, 1.5, 2]);
  });

  test('clamp', function () {
    var min = Vec4.zero();
    var max = Vec4.create(2, 2, 2, 2);
    assertComponents(Vec4.clamp(Vec4.create(-1, -1, -1, -1), min, max), [0, 0, 0, 0]);
    assertComponents(Vec4.clamp(Vec4.create(3, 3, 3, 3), min, max), [2, 2, 2, 2]);
    assertComponents(Vec4.clamp(Vec4.create(1, 1, 1, 1), min, max), [1, 1, 1, 1]);
  });

  test('clampScalar', function () {
    var min = 0;
    var max = 2;
    assertComponents(Vec4.clampScalar(Vec4.create(-1, -1, -1, -1), min, max), [0, 0, 0, 0]);
    assertComponents(Vec4.clampScalar(Vec4.create(3, 3, 3, 3), min, max), [2, 2, 2, 2]);
    assertComponents(Vec4.clampScalar(Vec4.create(1, 1, 1, 1), min, max), [1, 1, 1, 1]);
  });

  test('min', function () {
    var one = Vec4.create(1, 1, 1, 1);
    var two = Vec4.create(2, 2, 2, 2);
    var tre = Vec4.create(3, 3, 3, 3);
    assertComponents(Vec4.min(one, two), [1, 1, 1, 1]);
    assertComponents(Vec4.min(tre, two), [2, 2, 2, 2]);
  });

  test('minScalar', function () {
    var one = Vec4.create(1, 1, 1, 1);
    var tre = Vec4.create(3, 3, 3, 3);
    assertComponents(Vec4.minScalar(one, 2), [1, 1, 1, 1]);
    assertComponents(Vec4.minScalar(tre, 2), [2, 2, 2, 2]);
  });

  test('max', function () {
    var one = Vec4.create(1, 1, 1, 1);
    var two = Vec4.create(2, 2, 2, 2);
    var tre = Vec4.create(3, 3, 3, 3);
    assertComponents(Vec4.max(one, two), [2, 2, 2, 2]);
    assertComponents(Vec4.max(tre, two), [3, 3, 3, 3]);
  });

  test('maxScalar', function () {
    var one = Vec4.create(1, 1, 1, 1);
    var tre = Vec4.create(3, 3, 3, 3);
    assertComponents(Vec4.maxScalar(one, 2), [2, 2, 2, 2]);
    assertComponents(Vec4.maxScalar(tre, 2), [3, 3, 3, 3]);
  });

  test('lerp', function () {
    assertComponents(Vec4.lerp(Vec4.zero(), Vec4.one(), 0), [0, 0, 0, 0]);
    assertComponents(Vec4.lerp(Vec4.zero(), Vec4.one(), 0.5), [0.5, 0.5, 0.5, 0.5]);
    assertComponents(Vec4.lerp(Vec4.zero(), Vec4.one(), 1), [1, 1, 1, 1]);
  });

  test('smooth', function () {
    assertComponents(Vec4.smooth(Vec4.zero(), Vec4.one(), -1), [0, 0, 0, 0]);
    assertComponents(Vec4.smooth(Vec4.zero(), Vec4.one(), 0), [0, 0, 0, 0]);
    assertComponents(Vec4.smooth(Vec4.zero(), Vec4.one(), 0.5), [0.5, 0.5, 0.5, 0.5]);
    assertComponents(Vec4.smooth(Vec4.zero(), Vec4.one(), 1), [1, 1, 1, 1]);
    assertComponents(Vec4.smooth(Vec4.zero(), Vec4.one(), 2), [1, 1, 1, 1]);
  });

  test('barycentric', function () {
    var a = Vec4.create(1, 1, 1, 1);
    var b = Vec4.create(2, 2, 2, 2);
    var c = Vec4.create(4, 4, 4, 4);
    assertComponents(Vec4.barycentric(a, b, c, 0, 0), [1, 1, 1, 1]);
    assertComponents(Vec4.barycentric(a, b, c, 1, 0), [2, 2, 2, 2]);
    assertComponents(Vec4.barycentric(a, b, c, 0, 1), [4, 4, 4, 4]);
    assertComponents(Vec4.barycentric(a, b, c, 1, 1), [5, 5, 5, 5]);
  });

  test('convert', function () {
    assertComponents(Vec4.convert([]), [0, 0, 0, 0]);
    assertComponents(Vec4.convert({}), [0, 0, 0, 0]);
    assertComponents(Vec4.convert([1, 2, 3, 4]), [1, 2, 3, 4]);
    assertComponents(Vec4.convert(1), [1, 1, 1, 1]);
    assertComponents(Vec4.convert({
      x: 1,
      y: 2,
      z: 3,
      w: 4
    }), [1, 2, 3, 4]);
  });
}());
