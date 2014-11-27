(function () {
  'use strict';

  var Mat4 = window.Mat4;
  var Quat = window.Quat;
  var Vec4 = window.Vec4;
  var Vec3 = window.Vec3;

  var q = window.QUnit;
  var test = q.test;
  var equal = q.equal;
  var notEqual = q.notEqual;
  var module = q.module;

  var assertComponents = function (a, b) {
    var i;
    for (i = 0; i < a.length; i += 1){
      equal(a[i], b[i], i + ' component.');
    }
  };

  var withinError = function(a, b, msg){
    var within = (a - b) < 0.00001;
    equal(within, true, msg);
  };
  var withinRound = function(a, b, decimals){
    var i;
    for (i = 0; i < a.length; i += 1){
      equal(a[i].toFixed(decimals), b[i].toFixed(decimals), i + ' component.');
    }
  };

  module('Mat4#Member', {
    setup: function(){
      this.m1 = Mat4.identity();
      this.m2 = Mat4.identity();
    }
  });

  test('constructor', function () {
    assertComponents(new Mat4().data,
      [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ]);
  });

  test('init', function () {
    assertComponents(
      this.m1.init(
        1 ,  2,  3,  4,
        5 ,  6,  7,  8,
        9 , 10, 11, 12,
        13, 14, 15, 16
      ).data,
      [
        1 ,  2,  3,  4,
        5 ,  6,  7,  8,
        9 , 10, 11, 12,
        13, 14, 15, 16
      ]);
  });

  test('initRowMajor', function () {
    assertComponents(
      this.m1.initRowMajor(
        1 ,  2,  3,  4,
        5 ,  6,  7,  8,
        9 , 10, 11, 12,
        13, 14, 15, 16
      ).data,
      [
        1,  5,  9, 13,
        2,  6, 10, 14,
        3,  7, 11, 15,
        4,  8, 12, 16
      ]);
  });

  test('initWith', function () {
    assertComponents(
      this.m1.initWith(1).data,
      [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ]);
  });

  test('initIdentity', function () {
    assertComponents(
      this.m1.initIdentity().data,
      [
        1 ,  0,  0,  0,
        0 ,  1,  0,  0,
        0 ,  0,  1,  0,
        0 ,  0,  0,  1
      ]);
  });

  test('initFrom', function () {
    var m1 = Mat4.create(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    assertComponents(
      Mat4.create().initFrom(m1).data,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  test('initFromBuffer', function () {
    var buffer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    assertComponents(
      this.m1.initFromBuffer(buffer).data,
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

    assertComponents(
      this.m1.initFromBuffer(buffer, 2).data,
      [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
  });

  test('initFromQuaternion', function(){
    var axis = new Vec3(1, 2, 3);
    var angle = Math.PI;
    var quat = Quat.fromAxisAngle(axis, angle);
    this.m1.initAxisAngle(axis, angle);
    this.m2.initFromQuaternion(quat);
    assertComponents(this.m1.data, this.m2.data);
  });

  test('initAxisAngle', function(){
    var axis = new Vec3(1, 2, 3);
    var angle = Math.PI;
    var quat = Quat.fromAxisAngle(axis, angle);
    this.m1.initAxisAngle(axis, angle);
    this.m2.initFromQuaternion(quat);
    assertComponents(this.m1.data, this.m2.data);
  });

  test('initFromYawPitchRoll', function(){
    var quat = Quat.fromYawPitchRoll(Math.PI, 2 * Math.PI, 3 * Math.PI);
    this.m1.initYawPitchRoll(Math.PI, 2 * Math.PI, 3 * Math.PI);
    this.m2.initFromQuaternion(quat);
    assertComponents(this.m1.data, this.m2.data);
  });

  test('initRotationX', function(){
    this.m1.initRotationX(Math.PI);
    var vec = this.m1.transformNormal(new Vec3(1, 1, 1));
    withinError(vec.x, 1, 'x');
    withinError(vec.y, -1, 'y');
    withinError(vec.z, -1, 'z');
  });

  test('initRotationY', function(){
    this.m1.initRotationY(Math.PI);
    var vec = this.m1.transformNormal(new Vec3(1, 1, 1));
    withinError(vec.x, -1, 'x');
    withinError(vec.y, 1, 'y');
    withinError(vec.z, -1, 'z');
  });

  test('initRotationZ', function(){
    this.m1.initRotationZ(Math.PI);
    var vec = this.m1.transformNormal(new Vec3(1, 1, 1));
    withinError(vec.x, -1, 'x');
    withinError(vec.y, -1, 'y');
    withinError(vec.z, 1, 'z');
  });

  test('initScale', function(){
    assertComponents(
      this.m1.initScale(1, 2, 3).data,
      [
        1, 0, 0, 0,
        0, 2, 0, 0,
        0, 0, 3, 0,
        0, 0, 0, 1]);
  });

  test('initTranslation', function(){
    assertComponents(
      this.m1.initTranslation(1, 2, 3).data,
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        1, 2, 3, 1]);
  });

  test('initLookAt', function(){
    assertComponents(
      this.m1.initLookAt(Vec3.create(0, 0, 0), Vec3.create(0, 0, -10), Vec3.create(0, 1, 0)).data,
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1]);
  });

  test('initWorld', function(){
    assertComponents(
      this.m1.initWorld(Vec3.create(1, 2, 3), Vec3.create(0, 0, -10), Vec3.create(0, 1, 0)).data,
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        1, 2, 3, 1]);
  });

  test('initPerspectiveFieldOfView', function(){

  });

  test('initPerspective', function(){

  });

  test('initPerspectiveOffCenter', function(){

  });

  test('initOrthographic', function(){

  });

  test('initOrthographicOffCenter', function(){

  });

  test('clone', function(){
    var m1 = Mat4.create(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    var m2 = m1.clone();
    m1.initIdentity();

    assertComponents(m1.data, Mat4.identity().data);
    assertComponents(m2.data, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  test('copyTo', function(){
    var m1 = Mat4.create(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    var buffer = new Float32Array(18);
    m1.copyTo(buffer);

    assertComponents(buffer, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 0]);

    m1.copyTo(buffer, 2);
    assertComponents(buffer, [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  test('equals', function(){
    var i, j, m1, m2;
    for (i = 0; i < 16; i += 1){
      m1 = Mat4.zero();
      m2 = Mat4.zero();
      m2.data[i] = 1;
      q.ok(!m1.equals(m2));
    }
    m1 = Mat4.zero();
    m2 = Mat4.zero();
    q.ok(m1.equals(m2));
  });

  test('get*', function(){
    var m1 = Mat4.createRowMajor(
       1, 2, 3, 4,
       5, 6, 7, 8,
       9,10,11,12,
      13,14,15,16
    );

    q.ok(m1.getForward(Vec3.create()).equals(new Vec3(-3, -7, -11)), 'getForward');
    q.ok(m1.getBackward(Vec3.create()).equals(new Vec3(3, 7, 11)), 'getBackward');
    q.ok(m1.getRight(Vec3.create()).equals(new Vec3(1, 5, 9)), 'getRight');
    q.ok(m1.getLeft(Vec3.create()).equals(new Vec3(-1, -5, -9)), 'getLeft');
    q.ok(m1.getUp(Vec3.create()).equals(new Vec3(2, 6, 10)), 'getUp');
    q.ok(m1.getDown(Vec3.create()).equals(new Vec3(-2, -6, -10)), 'getDown');
    q.ok(m1.getScale(Vec3.create()).equals(new Vec3(1, 6, 11)), 'getScale');
    q.ok(m1.getTranslation(Vec3.create()).equals(new Vec3(4, 8, 12)), 'getTranslation');
  });

  test('copy*', function(){
    var m1 = Mat4.createRowMajor(
       1, 2, 3, 4,
       5, 6, 7, 8,
       9,10,11,12,
      13,14,15,16
    );
    var buffer = [0, 0, 0];
    q.deepEqual(m1.copyForward(buffer), [-3, -7, -11], 'getForward');
    q.deepEqual(m1.copyBackward(buffer), [3, 7, 11], 'getBackward');
    q.deepEqual(m1.copyRight(buffer), [1, 5, 9], 'getRight');
    q.deepEqual(m1.copyLeft(buffer), [-1, -5, -9], 'getLeft');
    q.deepEqual(m1.copyUp(buffer), [2, 6, 10], 'getUp');
    q.deepEqual(m1.copyDown(buffer), [-2, -6, -10], 'getDown');
    q.deepEqual(m1.copyScale(buffer), [1, 6, 11], 'getScale');
    q.deepEqual(m1.copyTranslation(buffer), [4, 8, 12], 'getTranslation');
  });

  test('set*', function(){
    var vec;

    vec = Mat4.zero().setForward(Vec3.create(1, 2, 3)).getForward(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setForward');

    vec = Mat4.zero().setBackward(Vec3.create(1, 2, 3)).getBackward(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setBackward');

    vec = Mat4.zero().setLeft(Vec3.create(1, 2, 3)).getLeft(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setLeft');

    vec = Mat4.zero().setRight(Vec3.create(1, 2, 3)).getRight(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setRight');

    vec = Mat4.zero().setUp(Vec3.create(1, 2, 3)).getUp(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setUp');

    vec = Mat4.zero().setDown(Vec3.create(1, 2, 3)).getDown(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setDown');

    vec = Mat4.zero().setScale(Vec3.create(1, 2, 3)).getScale(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setScale');

    vec = Mat4.zero().setTranslation(Vec3.create(1, 2, 3)).getTranslation(Vec3.zero());
    q.ok(vec.equals(new Vec3(1, 2, 3)), 'setTranslation');
  });

  test('determinant', function(){
    var m1 = Mat4.createRowMajor(
      1.0, 5.0, 0.0, 1.0,
      3.0, 1.0, 8.0, 2.0,
      4.0, 0.0, 1.0, 3.0,
      1.0, 9.0, 2.0, 1.0
    );
    q.ok(m1.determinant(), -16);
  });

  test('selfTranspose', function(){
    var m1 = Mat4.createRowMajor(
      1, 2, 3, 4,
      5, 6, 7, 8,
      9,10,11,12,
      13,14,15,16
    ).selfTranspose();
    assertComponents(m1.data, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  test('selfInvert', function(){
    var m1 = Mat4.createRowMajor(
      1.000, 2.000, 4.000, 9.000,
      8.000, 1.000, 5.000, 3.000,
      1.000, 4.000, 7.000, 6.000,
      4.000, 9.000, 5.000, 7.000
    ).selfInvert().selfTranspose();
    withinRound(m1.data, [
      0.010,  0.120, -0.118,  0.037,
     -0.082, -0.059, -0.012,  0.141,
     -0.104,  0.027,  0.247, -0.090,
      0.175, -0.012, -0.094,  0.004
    ], 3);
  });

  test('selfNegate', function(){
    var m1 = Mat4.create(
      1, 2, 3, 4,
      5, 6, 7, 8,
      9,10,11,12,
      13,14,15,16
    ).selfNegate();
    assertComponents(m1.data, [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16]);
  });

  test('selfAdd', function(){
    var m1 = Mat4.create(
      1, 2, 3, 4,
      5, 6, 7, 8,
      9,10,11,12,
      13,14,15,16
    ).selfAdd(Mat4.create(
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 1
    ));
    assertComponents(m1.data, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
  });

  test('selfAddScalar', function(){
    var m1 = Mat4.create(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9,10,11,12,
        13,14,15,16
      ).selfAddScalar(1);
    assertComponents(m1.data, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
  });

  test('selfSubtract', function(){
    var m1 = Mat4.create(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9,10,11,12,
        13,14,15,16
      ).selfSubtract(Mat4.create(
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ));
    assertComponents(m1.data, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  test('selfSubtractScalar', function(){
    var m1 = Mat4.create(
      1, 2, 3, 4,
      5, 6, 7, 8,
      9,10,11,12,
      13,14,15,16
    ).selfSubtractScalar(1);
    assertComponents(m1.data, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  test('selfMultiply', function(){
    // C = BxA
    var m1 = Mat4.createRowMajor(
      1, 2, 3, 4,
      5, 6, 7, 8,
      9,10,11,12,
      13,14,15,16
    );
    var m2 = Mat4.createRowMajor(
      0, 1, 2, 3,
      4, 5, 6, 7,
      8, 9,10,11,
      12,13,14,15
    );
    m1.selfMultiply(m2).selfTranspose();
    assertComponents(m1.data, [62, 68, 74, 80, 174, 196, 218, 240, 286, 324, 362, 400, 398, 452, 506, 560]);
  });

  test('selfConcat', function(){
    // C = AxB
    var m1 = Mat4.createRowMajor(
      1, 2, 3, 4,
      5, 6, 7, 8,
      9,10,11,12,
      13,14,15,16
    );
    var m2 = Mat4.createRowMajor(
      0, 1, 2, 3,
      4, 5, 6, 7,
      8, 9,10,11,
      12,13,14,15
    );
    m1.selfConcat(m2).selfTranspose();
    assertComponents(m1.data, [80, 90, 100, 110, 176, 202, 228, 254, 272, 314, 356, 398, 368, 426, 484, 542]);
  });

  test('selfMultiplyScalar', function(){
    var m1 = Mat4.create(
      1, 2, 3, 4,
      5, 6, 7, 8,
      9,10,11,12,
      13,14,15,16
    ).selfMultiplyScalar(2);
    assertComponents(m1.data, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32]);
  });

  test('selfDivide', function(){
    var m1 = Mat4.create(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9,10,11,12,
        13,14,15,16
      ).selfDivide(Mat4.create(
        2, 2, 2, 2,
        2, 2, 2, 2,
        2, 2, 2, 2,
        2, 2, 2, 2
      ));
    assertComponents(m1.data, [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8]);
  });

  test('selfDivideScalar', function(){
    var m1 = Mat4.create(
        1, 2, 3, 4,
        5, 6, 7, 8,
        9,10,11,12,
        13,14,15,16
      ).selfDivideScalar(2);
    assertComponents(m1.data, [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8]);
  });

  test('transformNormal', function(){
    var vec = new Mat4().initAxisAngle(Vec3.create(1, 0, 0), Math.PI).transformNormal(Vec3.create(1, 1, 1));
    withinError(vec.x, 1, 'X');
    withinError(vec.y, -1, 'Y');
    withinError(vec.z, -1, 'Z');
  });
}());
