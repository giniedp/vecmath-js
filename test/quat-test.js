(function () {
  'use strict';

  var Quat = window.Quat;
  var Vec3 = window.Vec3;

  var q = window.QUnit;
  var test = q.test;
  var equal = q.equal;
  var module = q.module;

  var componentEqual = function (a, b) {
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

  module('Quat#Member', {
    setup: function(){
      this.q1 = Quat.identity();
      this.q2 = Quat.identity();
    }
  });

  test('constructor', function () {
    componentEqual(new Quat(1, 2, 3, 4), [1, 2, 3, 4]);
  });

  test('init', function () {
    componentEqual(this.q1.init(1, 2, 3, 4), [1, 2, 3, 4]);
  });

  test('initIdentity', function () {
    componentEqual(this.q1.initIdentity(), [0, 0, 0, 1]);
  });

  test('initFrom', function () {
    componentEqual(this.q1.initFrom(new Quat(1, 2, 3, 4)), [1, 2, 3, 4]);
  });

  test('initFromBuffer', function () {
    componentEqual(this.q1.initFromBuffer([0, 1, 2, 3, 4, 5], 1), [1, 2, 3, 4]);
    componentEqual(this.q1.initFromBuffer([0, 1, 2, 3, 4, 5]), [0, 1, 2, 3]);
  });

  test('initAxisAngle', function () {
    var q1 = this.q1.initAxisAngle(Vec3.create(1, 0, 0), Math.PI);
    equal(q1.x, Math.sin(Math.PI * 0.5));
    equal(q1.y, 0);
    equal(q1.z, 0);
    equal(q1.w, Math.cos(Math.PI * 0.5));

    q1 = q1.initAxisAngle(Vec3.create(0, 1, 0), Math.PI);
    equal(q1.x, 0);
    equal(q1.y, Math.sin(Math.PI * 0.5));
    equal(q1.z, 0);
    equal(q1.w, Math.cos(Math.PI * 0.5));

    q1 = q1.initAxisAngle(Vec3.create(0, 0, 1), Math.PI);
    equal(q1.x, 0);
    equal(q1.y, 0);
    equal(q1.z, Math.sin(Math.PI * 0.5));
    equal(q1.w, Math.cos(Math.PI * 0.5));
  });

  test('initYawPitchRoll', function () {
    var PI = Math.PI;
    var HALFPI = Math.PI * 0.5;
    var q1 = this.q1.initYawPitchRoll(PI, 0, 0);
    equal(q1.x, 0);
    equal(q1.y, Math.sin(HALFPI));
    equal(q1.z, 0);
    equal(q1.w, Math.cos(HALFPI));

    q1 = q1.initYawPitchRoll(0, PI, 0);
    equal(q1.x, Math.sin(HALFPI));
    equal(q1.y, 0);
    equal(q1.z, 0);
    equal(q1.w, Math.cos(HALFPI));

    q1 = q1.initYawPitchRoll(0, 0, PI);
    equal(q1.x, 0);
    equal(q1.y, 0);
    equal(q1.z, Math.sin(HALFPI));
    equal(q1.w, Math.cos(HALFPI));
  });

  test('clone', function () {
    this.q1.init(1, 2, 3, 4);
    componentEqual(this.q1.clone(), [1, 2, 3, 4]);
  });

  test('copy', function () {
    var buffer = [6, 4, 3, 2, 1, 0];
    this.q1.init(1, 2, 3, 4).copy(buffer, 1);
    equal(buffer[0], 6);
    equal(buffer[1], 1);
    equal(buffer[2], 2);
    equal(buffer[3], 3);
    equal(buffer[4], 4);
    equal(buffer[5], 0);
  });

  test('equals', function () {
    var q1 = this.q1;
    var q2 = this.q2;
    equal(q1.init(0, 0, 0, 0).equals(q2.init(0, 0, 0, 0)), true);
    equal(q1.init(1, 1, 1, 1).equals(q2.init(1, 1, 1, 1)), true);
    equal(q1.init(0, 1, 1, 1).equals(q2.init(1, 1, 1, 1)), false);
    equal(q1.init(1, 0, 1, 1).equals(q2.init(1, 1, 1, 1)), false);
    equal(q1.init(1, 1, 0, 1).equals(q2.init(1, 1, 1, 1)), false);
    equal(q1.init(1, 1, 1, 0).equals(q2.init(1, 1, 1, 1)), false);
  });

  test('length', function () {
    var q1 = this.q1;
    equal(q1.init(2, 0, 0, 0).length(), 2, 'length of X');
    equal(q1.init(0, 2, 0, 0).length(), 2, 'length of Y');
    equal(q1.init(0, 0, 2, 0).length(), 2, 'length of Z');
    equal(q1.init(0, 0, 0, 2).length(), 2, 'length of W');
    equal(q1.init(2, 2, 2, 2).length(), 4, 'length of all');
  });

  test('lengthSquared', function () {
    var q1 = this.q1;
    equal(q1.init(2, 0, 0, 0).lengthSquared(), 4, 'length of X');
    equal(q1.init(0, 2, 0, 0).lengthSquared(), 4, 'length of Y');
    equal(q1.init(0, 0, 2, 0).lengthSquared(), 4, 'length of Z');
    equal(q1.init(0, 0, 0, 2).lengthSquared(), 4, 'length of W');
    equal(q1.init(2, 2, 2, 2).lengthSquared(), 16, 'length of all');
  });

  test('dot', function () {
    equal(this.q1.init(1, 2, 3, 4).dot(this.q2.init(5, 6, 7, 8)), 70);
  });

  test('selfNegate', function () {
    componentEqual(this.q1.init(1, 2, 3, 4).selfNegate(), [-1, -2, -3, -4]);
  });

  test('selfConjugate', function () {
    componentEqual(this.q1.init(1, 2, 3, 4).selfConjugate(), [-1, -2, -3, 4]);
  });

  test('selfNormalize', function () {
    componentEqual(this.q1.init(2, 0, 0, 0).selfNormalize(), [1, 0, 0, 0]);
    componentEqual(this.q1.init(0, 3, 0, 0).selfNormalize(), [0, 1, 0, 0]);
    componentEqual(this.q1.init(0, 0, 4, 0).selfNormalize(), [0, 0, 1, 0]);
    componentEqual(this.q1.init(0, 0, 0, 5).selfNormalize(), [0, 0, 0, 1]);
    componentEqual(this.q1.init(2, 2, 2, 2).selfNormalize(), [0.5, 0.5, 0.5, 0.5]);
  });

  test('selfInvert', function () {
    componentEqual(this.q1.init(2, 0, 0, 0).selfInvert(), [-1, 0, 0, 0]);
    componentEqual(this.q1.init(0, 3, 0, 0).selfInvert(), [0, -1, 0, 0]);
    componentEqual(this.q1.init(0, 0, 4, 0).selfInvert(), [0, 0, -1, 0]);
    componentEqual(this.q1.init(0, 0, 0, 5).selfInvert(), [0, 0, 0, 1]);
    componentEqual(this.q1.init(2, 2, 2, 2).selfInvert(), [-0.5, -0.5, -0.5, 0.5]);
  });


  test('selfAdd', function () {
    var q1 = this.q1.init(1, 2, 3, 4);
    var q2 = this.q2.init(1, 2, 3, 4);
    q1.selfAdd(q2);
    componentEqual(q1, [2, 4, 6, 8]);
    componentEqual(q2, [1, 2, 3, 4]);
  });

  test('selfSubtract', function () {
    var q1 = this.q1.init(1, 2, 3, 4);
    var q2 = this.q2.init(1, 2, 3, 4);
    q1.selfSubtract(q2);
    componentEqual(q1, [0, 0, 0, 0]);
    componentEqual(q2, [1, 2, 3, 4]);
  });

  test('selfMultiply', function () {
    var q1 = Quat.create(4, 3, 2, 1);
    var q2 = Quat.create(1, 2, 3, 4);
    componentEqual(q1.selfMultiply(q2), [22, 4, 16, -12]);
  });

  test('selfConcat', function () {
    var q1 = Quat.create(4, 3, 2, 1);
    var q2 = Quat.create(1, 2, 3, 4);
    componentEqual(q1.selfConcat(q2), [12, 24, 6, -12]);
  });

  test('selfDivide', function () {
    var q1 = Quat.create(1, 2, 3, 4);
    var q2 = Quat.create(1, 2, 3, 4);
    q1.selfDivide(q2);
    componentEqual(q1, [0, 0, 0, 1]);
    componentEqual(q2, [1, 2, 3, 4]);
  });

  module('Quat#Static', {
    setup: function(){
      this.q1 = Quat.identity();
      this.q2 = Quat.identity();
    }
  });

  test('init', function () {
    componentEqual(Quat.create(1, 2, 3, 4), [1, 2, 3, 4]);
    componentEqual(Quat.create(), [0, 0, 0, 0]);
  });

  test('zero', function () {
    componentEqual(Quat.zero(), [0, 0, 0, 0]);
  });

  test('identity', function () {
    componentEqual(Quat.identity(), [0, 0, 0, 1]);
  });

  test('fromAxisAngle', function () {
    var q1 = Quat.fromAxisAngle(Vec3.create(1, 0, 0), Math.PI);
    equal(q1.x, Math.sin(Math.PI * 0.5));
    equal(q1.y, 0);
    equal(q1.z, 0);
    equal(q1.w, Math.cos(Math.PI * 0.5));

    q1 = Quat.fromAxisAngle(Vec3.create(0, 1, 0), Math.PI);
    equal(q1.x, 0);
    equal(q1.y, Math.sin(Math.PI * 0.5));
    equal(q1.z, 0);
    equal(q1.w, Math.cos(Math.PI * 0.5));

    q1 = Quat.fromAxisAngle(Vec3.create(0, 0, 1), Math.PI);
    equal(q1.x, 0);
    equal(q1.y, 0);
    equal(q1.z, Math.sin(Math.PI * 0.5));
    equal(q1.w, Math.cos(Math.PI * 0.5));
  });

  test('fromYawPitchRoll', function () {
    var PI = Math.PI;
    var HALFPI = Math.PI * 0.5;
    var q1 = Quat.fromYawPitchRoll(PI, 0, 0);
    equal(q1.x, 0);
    equal(q1.y, Math.sin(HALFPI));
    equal(q1.z, 0);
    equal(q1.w, Math.cos(HALFPI));

    q1 = Quat.fromYawPitchRoll(0, PI, 0);
    equal(q1.x, Math.sin(HALFPI));
    equal(q1.y, 0);
    equal(q1.z, 0);
    equal(q1.w, Math.cos(HALFPI));

    q1 = Quat.fromYawPitchRoll(0, 0, PI);
    equal(q1.x, 0);
    equal(q1.y, 0);
    equal(q1.z, Math.sin(HALFPI));
    equal(q1.w, Math.cos(HALFPI));
  });


  test('negate', function () {
    componentEqual(Quat.negate(Quat.create(1, 2, 3, 4)), [-1, -2, -3, -4]);
  });

  test('conjugate', function () {
    componentEqual(Quat.conjugate(Quat.create(1, 2, 3, 4)), [-1, -2, -3, 4]);
  });

  test('normalize', function () {
    componentEqual(Quat.normalize(Quat.create(2, 0, 0, 0)), [1, 0, 0, 0]);
    componentEqual(Quat.normalize(Quat.create(0, 3, 0, 0)), [0, 1, 0, 0]);
    componentEqual(Quat.normalize(Quat.create(0, 0, 4, 0)), [0, 0, 1, 0]);
    componentEqual(Quat.normalize(Quat.create(0, 0, 0, 5)), [0, 0, 0, 1]);
    componentEqual(Quat.normalize(Quat.create(2, 2, 2, 2)), [0.5, 0.5, 0.5, 0.5]);
  });

  test('invert', function () {
    componentEqual(Quat.invert(Quat.create(2, 0, 0, 0)), [-1, 0, 0, 0]);
    componentEqual(Quat.invert(Quat.create(0, 3, 0, 0)), [0, -1, 0, 0]);
    componentEqual(Quat.invert(Quat.create(0, 0, 4, 0)), [0, 0, -1, 0]);
    componentEqual(Quat.invert(Quat.create(0, 0, 0, 5)), [0, 0, 0, 1]);
    componentEqual(Quat.invert(Quat.create(2, 2, 2, 2)), [-0.5, -0.5, -0.5, 0.5]);
  });

  test('add', function () {
    var q1 = Quat.create(1, 2, 3, 4);
    var q2 = Quat.create(1, 2, 3, 4);
    var q3 = Quat.add(q1, q2);
    componentEqual(q1, [1, 2, 3, 4]);
    componentEqual(q2, [1, 2, 3, 4]);
    componentEqual(q3, [2, 4, 6, 8]);
  });

  test('subtract', function () {
    var q1 = Quat.create(1, 2, 3, 4);
    var q2 = Quat.create(1, 2, 3, 4);
    var q3 = Quat.subtract(q1, q2);
    componentEqual(q1, [1, 2, 3, 4]);
    componentEqual(q2, [1, 2, 3, 4]);
    componentEqual(q3, [0, 0, 0, 0]);
  });

  test('selfMultiply', function () {
    var q1 = Quat.create(4, 3, 2, 1);
    var q2 = Quat.create(1, 2, 3, 4);
    componentEqual(Quat.multiply(q1, q2), [22, 4, 16, -12]);
  });

  test('selfConcat', function () {
    var q1 = Quat.create(4, 3, 2, 1);
    var q2 = Quat.create(1, 2, 3, 4);
    componentEqual(Quat.concat(q1, q2), [12, 24, 6, -12]);
  });

  test('divide', function () {
    var q1 = Quat.create(1, 2, 3, 4);
    var q2 = Quat.create(1, 2, 3, 4);
    var q3 = Quat.divide(q1, q2);

    componentEqual(q1, [1, 2, 3, 4]);
    componentEqual(q2, [1, 2, 3, 4]);
    componentEqual(q3, [0, 0, 0, 1]);
  });
}());