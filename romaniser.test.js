var test = require('tape'); // this says that we want to use tape. can be used for access to any module.
var romaniser = require('./romaniser.js'); // this links to our file and knows to get our romaniser function.

test('Tape runs okay', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end(); // this tells tape we've finished
});

test('Romaniser return type', function(t) {
  var actual = typeof romaniser(1);
  var expected = 'string';
  t.equal(actual, expected, 'Romaniser should return a string');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(1);
  var expected = 'I';
  t.equal(actual, expected, '1 should output I');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(2);
  var expected = 'II';
  t.equal(actual, expected, '2 should output II');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(3);
  var expected = 'III';
  t.equal(actual, expected, '3 should output III');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(4);
  var expected = 'IV';
  t.equal(actual, expected, '4 should output IV');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(5);
  var expected = 'V';
  t.equal(actual, expected, '5 should output V');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(6);
  var expected = 'VI';
  t.equal(actual, expected, '6 should output VI');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(9);
  var expected = 'IX';
  t.equal(actual, expected, '9 should output IX');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(10);
  var expected = 'X';
  t.equal(actual, expected, '10 should output X');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(20);
  var expected = 'XX';
  t.equal(actual, expected, '20 should output XX');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(40);
  var expected = 'XL';
  t.equal(actual, expected, '40 should output XL');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(50);
  var expected = 'L';
  t.equal(actual, expected, '50 should output L');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(93);
  var expected = 'XCIII';
  t.equal(actual, expected, '93 should output XCIII');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(102);
  var expected = 'CII';
  t.equal(actual, expected, '102 should output CII');
  t.end();
});

test('Romaniser return value', function(t) {
  var actual = romaniser(902);
  var expected = 'CMII';
  t.equal(actual, expected, '902 should output CMII');
  t.end();
});

test('Romaniser with huge values', function(t) {
  var actual = romaniser(50000);
  var expected = "Sorry, the Romans couldn't count that high";
  t.equal(actual, expected, 'Large inputs should output an error');
  t.end();
});

test('Romaniser with huge values', function(t) {
  var actual = romaniser(-50);
  var expected = "Sorry, the Romans couldn't count that low";
  t.equal(actual, expected, 'Small inputs should output an error');
  t.end();
});
