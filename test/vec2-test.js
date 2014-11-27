(function () {
  'use strict';

  var Vec2 = window.Vec2;

  var q = window.QUnit;
  var test = q.test;
  var equal = q.equal;
  var module = q.module;

  var assertComponents = function (a, b) {
    if (Array.isArray(b)){
      equal(a.x, b[0], 'X component.');
      equal(a.y, b[1], 'Y component.');
    } else {
      equal(a.x, b.x, 'X component.');
      equal(a.y, b.y, 'Y component.');
    }
  };

  module('Vec2#Member', {
    setup: function(){
      this.vec = Vec2.zero();
      this.vec2 = Vec2.zero();
    }
  });

  test('constructor', function () {
    assertComponents(new Vec2(1, 2), [1, 2]);
  });

  test('init', function () {
    assertComponents(this.vec.init(1, 2), [1, 2]);
  });

  test('initFrom', function () {
    assertComponents(this.vec.initFrom(new Vec2(1, 2)), [1, 2]);
  });

  test('initFromBuffer', function () {
    assertComponents(this.vec.initFromBuffer([0, 1, 2, 3, 4, 5], 1), [1, 2]);
    assertComponents(this.vec.initFromBuffer([0, 1, 2, 3, 4, 5]), [0, 1]);
  });

  test('clone', function () {
    this.vec.init(1, 2);
    assertComponents(this.vec.clone(), [1, 2]);
  });

  test('copyTo', function () {
    var buffer = [6, 4, 3, 2, 1, 0];
    this.vec.init(1, 2).copyTo(buffer, 1);
    equal(buffer[0], 6);
    equal(buffer[1], 1);
    equal(buffer[2], 2);
    equal(buffer[3], 2);
    equal(buffer[4], 1);
    equal(buffer[5], 0);
  });

  test('equals', function () {
    equal(this.vec.init(0, 0).equals(this.vec2.init(0, 0)), true);
    equal(this.vec.init(1, 1).equals(this.vec2.init(1, 1)), true);
    equal(this.vec.init(0, 1).equals(this.vec2.init(1, 1)), false);
    equal(this.vec.init(1, 0).equals(this.vec2.init(1, 1)), false);
  });

  test('length', function () {
    var v = Vec2.zero();
    equal(v.init(2, 0).length(), 2, 'length of X');
    equal(v.init(0, 2).length(), 2, 'length of Y');
    equal(v.init(2, 2).length(), Math.sqrt(8), 'length of all');
  });

  test('lengthSquared', function () {
    var v = Vec2.zero();
    equal(v.init(2, 0).lengthSquared(), 4, 'length of X');
    equal(v.init(0, 2).lengthSquared(), 4, 'length of Y');
    equal(v.init(2, 2).lengthSquared(), 8, 'length of all');
  });

  test('distance', function () {
    var v = Vec2.zero();
    var v2 = Vec2.zero();
    equal(v.init(0, 0).distance(v2.init(0, 0)), 0, 'distance of all 0 is 0');
    equal(v.init(1, 0).distance(v2.init(9, 0)), 8, 'distance on X');
    equal(v.init(0, 2).distance(v2.init(0, 8)), 6, 'distance on Y');
  });

  test('distanceSquared', function () {
    var v = Vec2.zero();
    var v2 = Vec2.zero();
    equal(v.init(0, 0).distanceSquared(v2.init(0, 0)), 0, 'distance of all 0 is 0');
    equal(v.init(1, 0).distanceSquared(v2.init(9, 0)), 64, 'distance on X');
    equal(v.init(0, 2).distanceSquared(v2.init(0, 8)), 36, 'distance on Y');
  });

  test('dot', function () {
    equal(this.vec.init(1, 2).dot(this.vec2.init(5, 6)), 17);
  });

  test('selfNormalize', function () {
    assertComponents(this.vec.init(2, 0).selfNormalize(), [1, 0]);
    assertComponents(this.vec.init(0, 3).selfNormalize(), [0, 1]);
  });

  test('selfInvert', function () {
    assertComponents(this.vec.init(1, 2).selfInvert(), [1, 1/2]);
  });

  test('selfNegate', function () {
    assertComponents(this.vec.init(1, 2).selfNegate(), [-1, -2]);
  });

  test('selfAdd', function () {
    this.vec.init(1, 2);
    this.vec2.init(1, 2);
    this.vec.selfAdd(this.vec2);
    assertComponents(this.vec, [2, 4]);
    assertComponents(this.vec2, [1, 2]);
  });

  test('selfAddScalar', function () {
    this.vec.init(1, 2);
    this.vec.selfAddScalar(1);
    assertComponents(this.vec, [2, 3]);
  });

  test('selfSubtract', function () {
    this.vec.init(1, 2);
    this.vec2.init(1, 2);
    this.vec.selfSubtract(this.vec2);
    assertComponents(this.vec, [0, 0]);
    assertComponents(this.vec2, [1, 2]);
  });

  test('selfSubtractScalar', function () {
    this.vec.init(1, 2);
    this.vec.selfSubtractScalar(1);
    assertComponents(this.vec, [0, 1]);
  });

  test('selfMultiply', function () {
    this.vec.init(1, 2);
    this.vec2.init(1, 2);
    this.vec.selfMultiply(this.vec2);
    assertComponents(this.vec, [1, 4]);
    assertComponents(this.vec2, [1, 2]);
  });

  test('selfMultiplyScalar', function () {
    this.vec.init(1, 2);
    this.vec.selfMultiplyScalar(2);
    assertComponents(this.vec, [2, 4]);
  });

  test('selfMultiplyAdd', function () {
    var a = Vec2.create(1, 2);
    var b = Vec2.create(2, 2);
    var c = Vec2.create(1, 1);
    a.selfMultiplyAdd(b, c);

    assertComponents(a, [3, 5]);
    assertComponents(b, [2, 2]);
    assertComponents(c, [1, 1]);
  });

  test('selfMultiplyScalarAdd', function () {
    var a = Vec2.create(1, 2);
    var b = 2;
    var c = Vec2.create(1, 1);
    a.selfMultiplyScalarAdd(b, c);

    assertComponents(a, [3, 5]);
    assertComponents(b, 2);
    assertComponents(c, [1, 1]);
  });

  test('selfDivide', function () {
    this.vec.init(1, 2);
    this.vec2.init(1, 2);
    this.vec.selfDivide(this.vec2);
    assertComponents(this.vec, [1, 1]);
    assertComponents(this.vec2, [1, 2]);
  });

  test('selfDivideScalar', function () {
    this.vec.init(1, 2);
    this.vec.selfDivideScalar(2);
    assertComponents(this.vec, [0.5, 1]);
  });

  module('Vec2#Static', {
    setup: function(){
      this.vec = Vec2.zero();
      this.vec2 = Vec2.zero();
    }
  });

  test('init', function () {
    assertComponents(Vec2.create(1, 2), [1, 2]);
  });

  test('zero', function () {
    assertComponents(Vec2.zero(), [0, 0]);
  });

  test('one', function () {
    assertComponents(Vec2.one(), [1, 1]);
  });




  test('normalize', function () {
    [new Vec2(), undefined].forEach(function(out){
      assertComponents(Vec2.normalize(Vec2.create(2, 0), out), [1, 0]);
      assertComponents(Vec2.normalize(Vec2.create(0, 3), out), [0, 1]);
    });
  });

  test('invert', function () {
    [new Vec2(), undefined].forEach(function(out){
      assertComponents(Vec2.invert(Vec2.create(1, 2), out), [1, 1/2]);
    });
  });

  test('negate', function () {
    [new Vec2(), undefined].forEach(function(out){
      assertComponents(Vec2.negate(Vec2.create(1, 2), out), [-1, -2]);
    });
  });

  test('add', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = Vec2.create(1, 2);
      var c = Vec2.add(a, b, out);

      assertComponents(a, [1, 2]);
      assertComponents(b, [1, 2]);
      assertComponents(c, [2, 4]);
    });
  });

  test('addScalar', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = 2;
      var c = Vec2.addScalar(a, b, out);

      assertComponents(a, [1, 2]);
      assertComponents(b, 2);
      assertComponents(c, [3, 4]);
    });
  });

  test('subtract', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = Vec2.create(1, 2);
      var c = Vec2.subtract(a, b, out);

      assertComponents(a, [1, 2]);
      assertComponents(b, [1, 2]);
      assertComponents(c, [0, 0]);
    });
  });

  test('subtractScalar', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = 1;
      var c = Vec2.subtractScalar(a, b, out);

      assertComponents(a, [1, 2]);
      assertComponents(b, 1);
      assertComponents(c, [0, 1]);
    });
  });

  test('multiply', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = Vec2.create(1, 2);
      var c = Vec2.multiply(a, b, out);

      assertComponents(a, [1, 2]);
      assertComponents(b, [1, 2]);
      assertComponents(c, [1, 4]);
    });
  });

  test('multiplyScalar', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var c = Vec2.multiplyScalar(a, 2, out);
      assertComponents(a, [1, 2]);
      assertComponents(c, [2, 4]);
    });
  });

  test('multiplyAdd', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = Vec2.create(2, 2);
      var c = Vec2.create(1, 1);
      var d = Vec2.multiplyAdd(a, b, c, out);

      assertComponents(a, [1, 2]);
      assertComponents(b, [2, 2]);
      assertComponents(c, [1, 1]);
      assertComponents(d, [3, 5]);
    });
  });

  test('multiplyScalarAdd', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = 2;
      var c = Vec2.create(1, 1);
      var d = Vec2.multiplyScalarAdd(a, b, c, out);

      assertComponents(a, [1, 2]);
      assertComponents(b, 2);
      assertComponents(c, [1, 1]);
      assertComponents(d, [3, 5]);
    });
  });

  test('divide', function () {
    [new Vec2(), undefined].forEach(function(out){
      var a = Vec2.create(1, 2);
      var b = Vec2.create(1, 2);
      var c = Vec2.divide(a, b, out);
      assertComponents(a, [1, 2]);
      assertComponents(b, [1, 2]);
      assertComponents(c, [1, 1]);
    });
  });

  test('divideScalar', function () {
    var a = Vec2.create(1, 2);
    var b = Vec2.divideScalar(a, 2);
    assertComponents(a, [1, 2]);
    assertComponents(b, [0.5, 1]);
  });

  test('clamp', function () {
    var min = Vec2.zero();
    var max = Vec2.create(2, 2);
    assertComponents(Vec2.clamp(Vec2.create(-1, -1), min, max), [0, 0]);
    assertComponents(Vec2.clamp(Vec2.create(3, 3), min, max), [2, 2]);
    assertComponents(Vec2.clamp(Vec2.create(1, 1), min, max), [1, 1]);
  });

  test('clampScalar', function () {
    var min = 0;
    var max = 2;
    assertComponents(Vec2.clampScalar(Vec2.create(-1, -1), min, max), [0, 0]);
    assertComponents(Vec2.clampScalar(Vec2.create(3, 3), min, max), [2, 2]);
    assertComponents(Vec2.clampScalar(Vec2.create(1, 1), min, max), [1, 1]);
  });

  test('min', function () {
    var one = Vec2.create(1, 1);
    var two = Vec2.create(2, 2);
    var tre = Vec2.create(3, 3);
    assertComponents(Vec2.min(one, two), [1, 1]);
    assertComponents(Vec2.min(tre, two), [2, 2]);
  });

  test('minScalar', function () {
    var one = Vec2.create(1, 1);
    var tre = Vec2.create(3, 3);
    assertComponents(Vec2.minScalar(one, 2), [1, 1]);
    assertComponents(Vec2.minScalar(tre, 2), [2, 2]);
  });

  test('max', function () {
    var one = Vec2.create(1, 1);
    var two = Vec2.create(2, 2);
    var tre = Vec2.create(3, 3);
    assertComponents(Vec2.max(one, two), [2, 2]);
    assertComponents(Vec2.max(tre, two), [3, 3]);
  });

  test('maxScalar', function () {
    var one = Vec2.create(1, 1, 1, 1);
    var tre = Vec2.create(3, 3, 3, 3);
    assertComponents(Vec2.maxScalar(one, 2), [2, 2]);
    assertComponents(Vec2.maxScalar(tre, 2), [3, 3]);
  });

  test('lerp', function () {
    assertComponents(Vec2.lerp(Vec2.zero(), Vec2.one(), 0), [0, 0]);
    assertComponents(Vec2.lerp(Vec2.zero(), Vec2.one(), 0.5), [0.5, 0.5]);
    assertComponents(Vec2.lerp(Vec2.zero(), Vec2.one(), 1), [1, 1]);
  });

  test('smooth', function () {
    assertComponents(Vec2.smooth(Vec2.zero(), Vec2.one(), -1), [0, 0]);
    assertComponents(Vec2.smooth(Vec2.zero(), Vec2.one(), 0), [0, 0]);
    assertComponents(Vec2.smooth(Vec2.zero(), Vec2.one(), 0.5), [0.5, 0.5]);
    assertComponents(Vec2.smooth(Vec2.zero(), Vec2.one(), 1), [1, 1]);
    assertComponents(Vec2.smooth(Vec2.zero(), Vec2.one(), 2), [1, 1]);
  });

  test('barycentric', function () {
    var a = Vec2.create(1, 1);
    var b = Vec2.create(2, 2);
    var c = Vec2.create(4, 4, 4);
    assertComponents(Vec2.barycentric(a, b, c, 0, 0), [1, 1]);
    assertComponents(Vec2.barycentric(a, b, c, 1, 0), [2, 2]);
    assertComponents(Vec2.barycentric(a, b, c, 0, 1), [4, 4]);
    assertComponents(Vec2.barycentric(a, b, c, 1, 1), [5, 5]);
  });

  test('convert', function () {
    assertComponents(Vec2.convert([]), [0, 0]);
    assertComponents(Vec2.convert({}), [0, 0]);
    assertComponents(Vec2.convert([1, 2]), [1, 2]);
    assertComponents(Vec2.convert(1), [1, 1]);
    assertComponents(Vec2.convert({
      x: 1,
      y: 2,
      z: 3,
      w: 4
    }), [1, 2]);
  });
}());
