/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var equal = require('assert').deepStrictEqual;


(function readmeDemo() {
  //#u
  var zpad = require('zeropad-int'), opts;

  equal(zpad(0,   5),  '00000');
  equal(zpad(-0,  5),  '00000');
  equal(zpad(42,  5),  '00042');
  equal(zpad(-42, 5), '-00042');

  equal(zpad(42,  5,  16),  '0002A');
  equal(zpad(-42, 5,  16), '-0002A');
  equal(zpad(42,  5, -16),  '0002a');
  equal(zpad(-42, 5, -16), '-0002a');

  equal(zpad.signed(0,   4), '+0000');
  equal(zpad.signed(-0,  4), '−0000');
  equal(zpad.signed(42,  4), '+0042');
  equal(zpad.signed(-42, 4), '−0042');

  opts = { digits: 5, neg: '_', pos: '^', neg0: '.', pos0: '°' };
  equal(zpad.signed(0,   opts), '°00000');
  equal(zpad.signed(-0,  opts), '.00000');
  equal(zpad.signed(42,  opts), '^00042');
  equal(zpad.signed(-42, opts), '_00042');

  opts.base = 16;
  equal(zpad.signed(42,  opts), '^0002A');
  equal(zpad.signed(-42, opts), '_0002A');
  opts.base = -16;
  equal(zpad.signed(42,  opts), '^0002a');
  equal(zpad.signed(-42, opts), '_0002a');

  equal(zpad.uHHHH('−'), '\\u2212');
  equal(zpad.uHHHH('🎩'), '\\uD83C\\uDFA9');
  equal(zpad.bsUH8('−'), '\\U00002212');
  equal(zpad.bsUH8('🎩'), '\\U0001F3A9');
  //#r
}());









console.log("+OK usage test passed.");    //= "+OK usage test passed."
