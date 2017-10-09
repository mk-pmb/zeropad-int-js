/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = function zeroPadInt(num, digits, base) {
  var sign = (num < 0 ? '-' : '');
  num = Math.abs(+num).toString(Math.abs(base || 10));
  if (num.length < digits) {
    num = (0).toFixed(digits + 2) + num;
    num = num.substr(num.length - digits, digits);
  }
  if (base > 10) { num = num.toUpperCase(); }
  // for LOWercase letters, use negative base (beLOW 0, e.g. -10).
  return (sign + num);
};

EX.unicode = {
  minusSign: '\u2212',
};

function orEmptyStr(x) { return (x || (x === '')); }

EX.findSign = (function () {
  var d = { neg: EX.unicode.minusSign, pos: '+' };
  return function (x, opt) {
    var y = (x || (1 / x)), z = (y < 0 ? 'neg' : 'pos'),
      s = ((x === 0) && opt[z + '0']);
    if (orEmptyStr(s)) { return s; }
    s = opt[z];
    if (orEmptyStr(s)) { return s; }
    return d[z];
  };
}());

EX.signed = function (x, opt) {
  opt = (opt || 0);
  if (opt === +opt) { opt = { digits: opt }; }
  return (EX.findSign(x, opt) + EX(Math.abs(x), opt.digits, opt.base));
};


function hexu4(c) { return '\\u' + EX(c.charCodeAt(0), 4, 16); }

EX.uHHHH = function bsl_u_4hex(s) {
  s = String(s);
  if (s.length === 1) { return hexu4(s); }
  return s.replace(/\S|\s/g, hexu4);
};

function hexU8(c) { return '\\U' + EX(c.codePointAt(0), 8, 16); }

EX.bsUH8 = function bsl_U_8hex(s) {
  s = String(s);
  if (s.length === 1) { return hexU8(s); }
  return s.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\S|\s/g, hexU8);
};





module.exports = EX;
