var HQ9Plus;

(function () {
  HQ9Plus = function HQ9Plus(code) {
    if (!(this instanceof HQ9Plus)) {
      return new HQ9Plus(code);
    }

    this._code = code || '';
  };

  HQ9Plus.analyze = function (code) {
    var i, len, ch;
    var result = [];

    for (i = 0, len = code.length; i < len; i++) {
      ch = code[i];

      switch (ch) {
        case 'H':
        case 'Q':
        case '9':
        case '+':
          result.push(ch);
          break;
      }
    }

    return result;
  };

  HQ9Plus.prototype.analyze = function (code) {
    if (typeof code === 'undefined') {
      code = this._code || '';
    }

    return HQ9Plus.analyze(code);
  };

  HQ9Plus._h = function () {
    return 'Hello, World!\n';
  };

  HQ9Plus._q = function (code) {
    return code;
  };

  var bottle = function (n) {
    if (n === 0) {
      return 'No more bottles of beer';
    } else {
      return n + ' bottle' + (n > 1 ? 's' : '') + ' of beer';
    }
  };

  HQ9Plus._9 = function () {
    var i;
    var result = '';

    for (i = 99; i >= 0; i--) {
      result += bottle(i) + ' on the wall, ' + bottle(i) + '.\n';
      result += i > 0 ? 'Take one down and pass it around' : 'Go to the store and buy some more';
      result += ', ' + bottle(i === 0 ? 99 : i - 1) + ' on the wall.\n\n';
    }

    return result;
  };

  HQ9Plus._plus = function (accumulator) {
    return accumulator + 1;
  };

  HQ9Plus.execute = function (code) {
    var i, len, ch;
    var tokens;
    var result = '';
    var accumulator = 0;

    tokens = HQ9Plus.analyze(code);

    for (i = 0, len = tokens.length; i < len; i++) {
      ch = tokens[i];

      switch (ch) {
        case 'H':
          result += HQ9Plus._h();
          break;

        case 'Q':
          result += HQ9Plus._q(code);
          break;

        case '9':
          result += HQ9Plus._9();
          break;

        case '+':
          accumulator = HQ9Plus._plus(accumulator);
          break;
      }
    }

    return result;
  };

  HQ9Plus.prototype.execute = function (code) {
    if (typeof code === 'undefined') {
      code = this._code || '';
    }

    return HQ9Plus.execute(code);
  };
}).call(this);