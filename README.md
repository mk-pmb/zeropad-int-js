﻿
<!--#echo json="package.json" key="name" underline="=" -->
zeropad-int
===========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Add zeroes in front of integers, optionally with custom base, custom signs and
negative zero.
<!--/#echo -->


Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="36" -->
```javascript
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
```
<!--/include-->


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
