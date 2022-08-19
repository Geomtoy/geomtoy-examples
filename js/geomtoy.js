class Maths {
  constructor() {
    throw new Error("[G]`Maths` can not used as a constructor.");
  }

  static sin(n) {
    return Math.sin(n);
  }

  static cos(n) {
    return Math.cos(n);
  }

  static sec(n) {
    return 1 / Maths.cos(n);
  }

  static csc(n) {
    return 1 / Maths.sin(n);
  }

  static tan(n) {
    return Math.tan(n);
  }

  static cot(n) {
    return 1 / Maths.tan(n);
  }

  static asin(n) {
    return Math.asin(n);
  }

  static acos(n) {
    return Math.acos(n);
  }

  static asec(n) {
    return Math.acos(1 / n);
  }

  static acsc(n) {
    return Math.asin(1 / n);
  }

  static atan(n) {
    return Math.atan(n);
  }

  static acot(n) {
    return Math.atan(1 / n);
  }

  static sinh(n) {
    return Math.sinh(n);
  }

  static cosh(n) {
    return Math.cosh(n);
  }

  static sech(n) {
    return 1 / Math.cosh(n);
  }

  static csch(n) {
    return 1 / Math.sinh(n);
  }

  static tanh(n) {
    return Math.tanh(n);
  }

  static coth(n) {
    return 1 / Math.tanh(n);
  }

  static asinh(n) {
    return Math.asinh(n);
  }

  static acosh(n) {
    return Math.acosh(n);
  }

  static asech(n) {
    return Math.acosh(1 / n);
  }

  static acsch(n) {
    return Math.asinh(1 / n);
  }

  static atanh(n) {
    return Math.atanh(n);
  }

  static acoth(n) {
    return Math.atanh(1 / n);
  }

  static atan2(y, x) {
    return Math.atan2(y, x);
  }

  static abs(n) {
    return Math.abs(n);
  }

  static sqrt(n) {
    return Math.sqrt(n);
  }

  static cbrt(n) {
    return Math.cbrt(n);
  }

  static exp(n) {
    return Math.exp(n);
  }

  static pow(b, n) {
    return Math.pow(b, n);
  }

  static hypot(...values) {
    return Math.hypot(...values);
  }

  static log(n, b) {
    return b === undefined ? Math.log(n) : Math.log(n) / Math.log(b);
  }

  static log10(n) {
    return Math.log10(n);
  }

  static log2(n) {
    return Math.log2(n);
  }

  static log1p(n) {
    return Math.log1p(n);
  }

  static expm1(n) {
    return Math.expm1(n);
  }

  static ceil(n) {
    return Math.ceil(n);
  }

  static floor(n) {
    return Math.floor(n);
  }

  static round(n) {
    return Math.round(n);
  }

  static trunc(n) {
    return Math.trunc(n);
  }

  static random() {
    return Math.random();
  }

  static max(...values) {
    return Math.max(...values);
  }

  static min(...values) {
    return Math.min(...values);
  }

  static sign(n, epsilon) {
    if (epsilon === undefined) return Math.sign(n);
    return (n < 0 ? -1 : 1) * Number(Math.abs(n) > epsilon);
  }

  static fround(n) {
    return Math.fround(n);
  }

  static imul(a, b) {
    return Math.imul(a, b);
  }

  static clz32(n) {
    return Math.clz32(n);
  }

  static gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) [a, b] = [b, a];

    while (true) {
      if (b === 0) return a;
      a %= b;
      if (a === 0) return b;
      b %= a;
    }
  }

  static lcm(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    return a * b / Maths.gcd(a, b);
  }

  static sum(...values) {
    return values.reduce((acc, v) => acc + v, 0);
  }

  static avg(...values) {
    return Maths.sum(...values) / values.length;
  }

  static lerp(u, v, t) {
    return (1 - t) * u + t * v;
  }

  static clamp(n, l, u) {
    if (l > u) [l, u] = [u, l];
    return n < l ? l : n > u ? u : n;
  }

  static between(n, l, u, lowerOpen, upperOpen, epsilon) {
    if (l > u) [l, u] = [u, l];
    if (Number.isNaN(n)) return false;
    return (lowerOpen ? Maths.greaterThan(n, l, epsilon) : !Maths.lessThan(n, l, epsilon)) && (upperOpen ? Maths.lessThan(n, u, epsilon) : !Maths.greaterThan(n, u, epsilon));
  }

  static equalTo(a, b, epsilon) {
    if (Math.abs(a) === Infinity || Math.abs(b) === Infinity) return a === b;
    if (Number.isNaN(a) || Number.isNaN(b)) return false;
    if (Math.abs(a - b) <= epsilon) return true;
    return Math.abs(a - b) <= (Math.abs(a) < Math.abs(b) ? Math.abs(b) : Math.abs(a)) * epsilon;
  }

  static greaterThan(a, b, epsilon) {
    if (Math.abs(a) === Infinity || Math.abs(b) === Infinity) return a > b;
    if (Number.isNaN(a) || Number.isNaN(b)) return false;
    if (Math.abs(a - b) <= epsilon) return false;
    return a - b > (Math.abs(a) < Math.abs(b) ? Math.abs(b) : Math.abs(a)) * epsilon;
  }

  static lessThan(a, b, epsilon) {
    if (Math.abs(a) === Infinity || Math.abs(b) === Infinity) return a < b;
    if (Number.isNaN(a) || Number.isNaN(b)) return false;
    if (Math.abs(b - a) <= epsilon) return false;
    return b - a > (Math.abs(a) < Math.abs(b) ? Math.abs(b) : Math.abs(a)) * epsilon;
  }

  static compare(a, b, epsilon) {
    if (Math.abs(a) === Infinity || Math.abs(b) === Infinity) return a < b ? -1 : a > b ? 1 : 0;
    if (Number.isNaN(a) || Number.isNaN(b)) return NaN;
    let d = a - b,
        r = Math.abs(a) < Math.abs(b) ? Math.abs(b) : Math.abs(a);
    return Math.abs(d) <= epsilon ? 0 : d > r * epsilon ? 1 : -d > r * epsilon ? -1 : 0;
  }

}

Maths.E = Math.E;
Maths.LN10 = Math.LN10;
Maths.LN2 = Math.LN2;
Maths.LOG10E = Math.LOG10E;
Maths.LOG2E = Math.LOG2E;
Maths.PI = Math.PI;
Maths.SQRT1_2 = Math.SQRT1_2;
Maths.SQRT2 = Math.SQRT2;

class Type {
  constructor() {
    throw new Error("[G]`Type` can not used as a constructor.");
  }

  static isString(v) {
    return Object.prototype.toString.call(v) === "[object String]";
  }

  static isBoolean(v) {
    return Object.prototype.toString.call(v) === "[object Boolean]";
  }

  static isNumber(v) {
    return Object.prototype.toString.call(v) === "[object Number]";
  }

  static isArray(v) {
    return Array.isArray(v);
  }

  static isPlainObject(v) {
    if (Object.prototype.toString.call(v) !== "[object Object]") return false;
    const proto = Object.getPrototypeOf(v);
    return proto === Object.getPrototypeOf({}) || proto === null;
  }

  static isFunction(v) {
    const t = Object.prototype.toString.call(v);
    return t === "[object Function]" || t === "[object AsyncFunction]" || t === "[object GeneratorFunction]";
  }

  static isInteger(v) {
    return Number.isInteger(v);
  }

  static isNaN(v) {
    return Number.isNaN(v);
  }

  static isInfinity(v) {
    return v === Infinity || v === -Infinity;
  }

  static isRealNumber(v) {
    return Number.isFinite(v);
  }

  static isExtendedRealNumber(v) {
    return Type.isNumber(v) && !Type.isNaN(v);
  }

  static isPositiveNumber(v) {
    return Type.isRealNumber(v) && v > 0;
  }

  static isNegativeNumber(v) {
    return Type.isRealNumber(v) && v < 0;
  }

  static isNonNegativeNumber(v) {
    return Type.isRealNumber(v) && !(v < 0);
  }

  static isNonPositiveNumber(v) {
    return Type.isRealNumber(v) && !(v > 0);
  }

  static isNonZeroNumber(v) {
    return Type.isRealNumber(v) && v !== 0;
  }

}

class Angle {
  constructor() {
    throw new Error("[G]`Angle` can not used as a constructor.");
  }

  static is(v) {
    return Type.isRealNumber(v);
  }

  static simplify(a) {
    const t = a % (2 * Maths.PI);
    return t < -Number.EPSILON ? t + 2 * Maths.PI : Maths.abs(t) < Number.EPSILON ? 0 : t;
  }

  static simplify2(a) {
    const t = a % (2 * Maths.PI);
    return t > Maths.PI ? t - 2 * Maths.PI : t <= -Maths.PI ? t + 2 * Maths.PI : t;
  }

  static convert(a) {
    const t = Angle.simplify(a);
    return t >= Maths.PI ? t - Maths.PI : t;
  }

  static convert2(a) {
    const t = Angle.simplify2(a);
    return t > Maths.PI / 2 ? t - Maths.PI : t <= -Maths.PI / 2 ? t + Maths.PI : t;
  }

  static degreeToRadian(a) {
    return a * Angle.DEG2RAD;
  }

  static radianToDegree(a) {
    return a * Angle.RAD2DEG;
  }

  static middle(s, e, positive) {
    s = Angle.simplify(s);
    e = Angle.simplify(e);
    if (!positive) [s, e] = [e, s];

    if (s > e) {
      const da = Maths.PI * 2 - (s - e);
      return Angle.simplify(s + da / 2);
    } else {
      const da = e - s;
      return Angle.simplify(s + da / 2);
    }
  }

  static equalTo(a, b, epsilon) {
    if (epsilon === undefined) return Angle.simplify(a) === Angle.simplify(b);
    return Maths.equalTo(Angle.simplify(a), Angle.simplify(b), epsilon);
  }

  static between(a, s, e, positive, startOpen, endOpen, epsilon) {
    a = Angle.simplify(a);
    s = Angle.simplify(s);
    e = Angle.simplify(e);
    if (!positive) [s, e] = [e, s];

    if (epsilon === undefined) {
      if (s > e) {
        return (startOpen ? a > s : a >= s) || (endOpen ? a < e : a <= e);
      } else {
        return (startOpen ? a > s : a >= s) && (endOpen ? a < e : a <= e);
      }
    }

    if (s > e) {
      return (startOpen ? Maths.greaterThan(a, s, epsilon) : !Maths.lessThan(a, s, epsilon)) || (endOpen ? Maths.lessThan(a, e, epsilon) : !Maths.greaterThan(a, e, epsilon));
    } else {
      return Maths.between(a, s, e, startOpen, endOpen, epsilon);
    }
  }

}

Angle.DEG2RAD = Maths.PI / 180;
Angle.RAD2DEG = 180 / Maths.PI;

class Box {
  constructor() {
    throw new Error("[G]`Box` can not used as a constructor.");
  }

  static is(v) {
    return Type.isArray(v) && v.length === 4 && v.every(elem => Type.isRealNumber(elem)) && v[2] >= 0 && v[3] >= 0;
  }

  static isZero(v) {
    return Type.isArray(v) && v.length === 4 && v.every(elem => Type.isRealNumber(elem)) && (v[2] === 0 || v[3] === 0);
  }

  static isNoneZero(v) {
    return Type.isArray(v) && v.length === 4 && v.every(elem => Type.isRealNumber(elem)) && v[2] > 0 && v[3] > 0;
  }

  static isEqualTo(b1, b2, epsilon) {
    if (epsilon === undefined) return b1[0] === b2[0] && b1[1] === b2[1] && b1[2] === b2[2] && b1[3] === b2[3];
    return Maths.equalTo(b1[0], b2[0], epsilon) && Maths.equalTo(b1[1], b2[1], epsilon) && Maths.equalTo(b1[2], b2[2], epsilon) && Maths.equalTo(b1[3], b2[3], epsilon);
  }

  static x(b, x) {
    if (x !== undefined) b[0] = x;
    return b[0];
  }

  static y(b, y) {
    if (y !== undefined) b[1] = y;
    return b[1];
  }

  static width(b, w) {
    if (w !== undefined) b[2] = w;
    return b[2];
  }

  static height(b, h) {
    if (h !== undefined) b[3] = h;
    return b[3];
  }

  static minX(b) {
    return b[0];
  }

  static minY(b) {
    return b[1];
  }

  static maxX(b) {
    return b[0] + b[2];
  }

  static maxY(b) {
    return b[1] + b[3];
  }

  static nn(b) {
    return [b[0], b[1]];
  }

  static mn(b) {
    return [b[0] + b[2], b[1]];
  }

  static mm(b) {
    return [b[0] + b[2], b[1] + b[3]];
  }

  static nm(b) {
    return [b[0], b[1] + b[3]];
  }

  static from(c1, c2) {
    const [x1, y1] = c1;
    const [x2, y2] = c2;
    const [minX, maxX] = [Maths.min(x1, x2), Maths.max(x1, x2)];
    const [minY, maxY] = [Maths.min(y1, y2), Maths.max(y1, y2)];
    return [minX, minY, maxX - minX, maxY - minY];
  }

  static coordinatesInside(c, b, epsilon) {
    if (Box.isZero(b)) return false;
    const [minX, maxX, minY, maxY] = [Box.minX(b), Box.maxX(b), Box.minY(b), Box.maxY(b)];
    const [x, y] = c;

    if (epsilon === undefined) {
      return x > minX && x < maxX && y > minY && y < maxY;
    }

    return Maths.between(x, minX, maxX, true, true, epsilon) && Maths.between(y, minY, maxY, true, true, epsilon);
  }

  static coordinatesOutside(c, b, epsilon) {
    if (Box.isZero(b)) return false;
    const [minX, maxX, minY, maxY] = [Box.minX(b), Box.maxX(b), Box.minY(b), Box.maxY(b)];
    const [x, y] = c;

    if (epsilon === undefined) {
      return x < minX || x > maxX || y < minY || y > maxY;
    }

    return Maths.lessThan(x, minX, epsilon) || Maths.greaterThan(x, maxX, epsilon) || Maths.lessThan(y, minY, epsilon) || Maths.greaterThan(y, maxY, epsilon);
  }

  static coordinatesOn(c, b, epsilon) {
    if (Box.isZero(b)) return false;
    return !Box.coordinatesInside(c, b, epsilon) && !Box.coordinatesOutside(c, b, epsilon);
  }

  static extend(b1, b2) {
    const minX = Maths.min(Box.minX(b1), Box.minX(b2));
    const minY = Maths.min(Box.minY(b1), Box.minY(b2));
    const maxX = Maths.max(Box.maxX(b1), Box.maxX(b2));
    const maxY = Maths.max(Box.maxY(b1), Box.maxY(b2));
    return [minX, minY, maxX - minX, maxY - minY];
  }

  static collide(b1, b2, epsilon) {
    if (Box.isZero(b1) || Box.isZero(b2)) return false;
    const [nx1, ny1, mx1, my1] = [b1[0], b1[1], b1[0] + b1[2], b1[1] + b1[3]];
    const [nx2, ny2, mx2, my2] = [b2[0], b2[1], b2[0] + b2[2], b2[1] + b2[3]];

    if (epsilon === undefined) {
      if (nx1 <= mx2 && mx1 >= nx2 && ny1 <= my2 && my1 >= ny2) return true;
      return false;
    } else {
      if (!Maths.greaterThan(nx1, mx2, epsilon) && !Maths.lessThan(mx1, nx2, epsilon) && !Maths.greaterThan(ny1, my2, epsilon) && !Maths.lessThan(my1, ny2, epsilon)) return true;
      return false;
    }
  }

}

class Coordinates {
  constructor() {
    throw new Error("[G]`Coordinates` can not used as a constructor.");
  }

  static is(v) {
    return Type.isArray(v) && v.length === 2 && v.every(elem => Type.isRealNumber(elem));
  }

  static isEqualTo(c1, c2, epsilon) {
    if (epsilon === undefined) return c1[0] === c2[0] && c1[1] === c2[1];
    return Maths.equalTo(c1[0], c2[0], epsilon) && Maths.equalTo(c1[1], c2[1], epsilon);
  }

  static x(c, x) {
    if (x !== undefined) c[0] = x;
    return c[0];
  }

  static y(c, y) {
    if (y !== undefined) c[1] = y;
    return c[1];
  }

}

class Length {
  constructor() {
    throw new Error("[G]`Length` can not used as a constructor.");
  }

  static is(v) {
    return Type.isRealNumber(v) && v >= 0;
  }

  static isZero(l) {
    return l === 0;
  }

  static isNonZero(l) {
    return Type.isRealNumber(l) && l > 0;
  }

}

class Size {
  constructor() {
    throw new Error("[G]`Size` can not used as a constructor.");
  }

  static is(v) {
    return Type.isArray(v) && v.length === 2 && v.every(elem => Type.isRealNumber(elem)) && v[0] >= 0 && v[1] >= 0;
  }

  static isZero(v) {
    return Type.isArray(v) && v.length === 2 && v.every(elem => Type.isRealNumber(elem)) && (v[0] === 0 || v[1] === 0);
  }

  static isNonZero(v) {
    return Type.isArray(v) && v.length === 2 && v.every(elem => Type.isRealNumber(elem)) && v[0] > 0 && v[1] > 0;
  }

  static isEqualTo(s1, s2, epsilon) {
    if (epsilon === undefined) return s1[0] === s2[0] && s1[1] === s2[1];
    return Maths.equalTo(s1[0], s2[0], epsilon) && Maths.equalTo(s1[1], s2[1], epsilon);
  }

  static width(s, w) {
    if (w !== undefined) s[0] = w;
    return s[0];
  }

  static height(s, h) {
    if (h !== undefined) s[1] = h;
    return s[1];
  }

}

class Assert {
  constructor() {
    throw new Error("[G]`Assert` can not used as a constructor.");
  }

  static condition(condition, msg) {
    if (!condition) {
      throw new TypeError(`${msg}`);
    }
  }

  static isInteger(v, p) {
    if (!Type.isInteger(v)) {
      throw new TypeError(`[G]The \`${p}\` should be an integer.`);
    }
  }

  static isRealNumber(v, p) {
    if (!Type.isRealNumber(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a real number(numbers excluding ±\`Infinity\` and \`NaN\`).`);
    }
  }

  static isExtendedRealNumber(v, p) {
    if (!Type.isExtendedRealNumber(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a extended real number(numbers excluding \`NaN\` but including ±\`Infinity\`).`);
    }
  }

  static isPositiveNumber(v, p) {
    if (!Type.isPositiveNumber(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a positive real number.`);
    }
  }

  static isNegativeNumber(v, p) {
    if (!Type.isNegativeNumber(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a negative real number.`);
    }
  }

  static isNonNegativeNumber(v, p) {
    if (!Type.isNonNegativeNumber(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a non-negative real number.`);
    }
  }

  static isNonPositiveNumber(v, p) {
    if (!Type.isNonPositiveNumber(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a non-positive real number.`);
    }
  }

  static isNonZeroNumber(v, p) {
    if (!Type.isNonZeroNumber(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a non-zero real number.`);
    }
  }

  static comparison(v, p, t, n) {
    if (t === "gt" && !(v > n)) {
      throw new TypeError(`[G]The \`${p}\` should be greater than ${n}.`);
    }

    if (t === "lt" && !(v < n)) {
      throw new TypeError(`[G]The \`${p}\` should be less than ${n}.`);
    }

    if (t === "eq" && !(v === n)) {
      throw new TypeError(`[G]The \`${p}\` should be equal to ${n}.`);
    }

    if (t === "ge" && !(v >= n)) {
      throw new TypeError(`[G]The \`${p}\` should be greater than or equal to ${n}.`);
    }

    if (t === "le" && !(v <= n)) {
      throw new TypeError(`[G]The \`${p}\` should be less than or equal to ${n}.`);
    }

    if (t === "ne" && !(v !== n)) {
      throw new TypeError(`[G]The \`${p}\` should not be equal to ${n}.`);
    }
  }

  static isAngle(v, p) {
    if (!Angle.is(v)) {
      throw new TypeError(`[G]The \`${p}\` should be an angle representing as a real number but got \`${v}\`.`);
    }
  }

  static isLength(v, p) {
    if (!Length.is(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a length representing as a non-negative real number but got \`${v}\`.`);
    }
  }

  static isNonZeroLength(v, p) {
    if (!Length.isNonZero(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a non-zero length representing as a positive real number but got \`${v}\`.`);
    }
  }

  static isCoordinates(v, p) {
    if (!Coordinates.is(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a coordinates like \`[real number, real number]\` but got ${v}$.`);
    }
  }

  static isSize(v, p) {
    if (!Size.is(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a size like \`[non-negative real number, non-negative real number]\` but got \`${v}\`.`);
    }
  }

  static isNonZeroSize(v, p) {
    if (!Size.isNonZero(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a non-zero size like \`[positive real number, positive real number]\` but got \`${v}\`.`);
    }
  }

  static isBox(v, p) {
    if (!Box.is(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a box like  \`[real number, real number, non-negative real number, non-negative real number]\` but got \`${v}\`.`);
    }
  }

  static isNonZeroBox(v, p) {
    if (!Box.isNoneZero(v)) {
      throw new TypeError(`[G]The \`${p}\` should be a non-zero box like  \`[real number, real number, positive real number, positive real number]\` but got \`${v}\`.`);
    }
  }

}

class Utility {
  constructor() {
    throw new Error("[G]`Utility` can not used as a constructor.");
  }

  static isEqualTo(value, otherValue) {
    if (Object.is(value, otherValue)) return true;
    if (Type.isPlainObject(value) || Type.isArray(value)) return Utility.compareDeep(value, otherValue);
    return false;
  }

  static compareDeep(object1, object2) {
    function compareDeepInner(object1, object2) {
      if (Type.isPlainObject(object1) !== Type.isPlainObject(object2)) return false;
      if (Type.isArray(object1) !== Type.isArray(object2)) return false;

      if (Type.isPlainObject(object1) || Type.isArray(object1)) {
        if (Object.keys(object1).length !== Object.keys(object2).length) return false;
        return Object.keys(object1).every(key => compareDeepInner(object1[key], object2[key]));
      } else {
        return Object.is(object1, object2);
      }
    }

    return compareDeepInner(object1, object2);
  }

  static assignDeep(target, source) {
    function assignDeepInner(target, source) {
      Object.keys(target).concat(Object.keys(source)).forEach(key => {
        if (Type.isPlainObject(target[key])) {
          if (Type.isPlainObject(source[key])) {
            assignDeepInner(target[key], source[key]);
          }
        } else if (Type.isArray(target[key])) {
          if (Type.isArray(source[key])) {
            assignDeepInner(target[key], source[key]);
          }
        } else {
          if (source[key] !== undefined) target[key] = source[key];
        }
      });
    }

    assignDeepInner(target, source);
  }

  static cloneDeep(target) {
    function cloneDeepInner(target) {
      let ret = null;

      if (Type.isPlainObject(target)) {
        ret = {};
      } else if (Type.isArray(target)) {
        ret = [];
      }

      Object.keys(target).forEach(key => {
        if (Type.isPlainObject(target[key])) {
          ret[key] = cloneDeepInner(target[key]);
        } else if (Type.isArray(target[key])) {
          ret[key] = cloneDeepInner(target[key]);
        } else {
          ret[key] = target[key];
        }
      });
      return ret;
    }

    return cloneDeepInner(target);
  }

  static range(start, stop, step = 1) {
    [start, stop] = start > stop ? [stop, start] : [start, stop];
    return Array.from({
      length: Maths.ceil((stop - start) / step)
    }, (_, i) => start + i * step);
  }

  static head(arr) {
    let l = arr.length;
    if (!l) return undefined;
    return arr[0];
  }

  static tail(arr) {
    let l = arr.length;
    if (!l) return [];
    return Array.prototype.slice.call(arr, 1, l);
  }

  static initial(arr) {
    let l = arr.length;
    if (!l) return [];
    return Array.prototype.slice.call(arr, 0, l - 1);
  }

  static last(arr) {
    let l = arr.length;
    if (!l) return undefined;
    return arr[l - 1];
  }

  static nth(arr, n) {
    let l = arr.length;
    if (!l) return undefined;
    n += n < 0 ? l : 0;
    return n < 0 || n >= l ? undefined : arr[n];
  }

  static sortWith(arr, comparator) {
    return arr.sort(comparator);
  }

  static sortBy(arr, mappers) {
    const mapperLength = mappers.length;
    return arr.sort((a, b) => {
      for (let i = 0; i < mapperLength; i++) {
        const ma = mappers[i](a);
        const mb = mappers[i](b);
        if (ma === mb) continue;
        if (ma < mb) return -1;
        if (ma > mb) return 1;
      }

      return 0;
    });
  }

  static uniqWith(arr, comparator) {
    const uniques = [];
    arr.forEach(elem => {
      if (uniques.findIndex(u => comparator(elem, u)) === -1) {
        uniques.push(elem);
      }
    });
    return uniques;
  }

  static uniqBy(arr, mapper) {
    const uniques = [];
    const mappedUniques = [];
    arr.forEach(elem => {
      const mapped = mapper(elem);

      if (!mappedUniques.includes(mapped)) {
        uniques.push(elem);
        mappedUniques.push(mapped);
      }
    });
    return uniques;
  }

  static lowerFirstChar(s) {
    return s.charAt(0).toLowerCase() + s.slice(1);
  }

  static upperFirstChar(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  static now() {
    return Date.now();
  }

  static uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = Maths.random() * 16 | 0;
      const v = c === "x" ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }

}

class Matrix2 {
  constructor() {
    throw new Error("[G]`Matrix2` can not used as a constructor.");
  }

  static determinant(m) {
    const [m00, m01, m10, m11] = m;
    return m00 * m11 - m01 * m10;
  }

  static dotVector2(m, v) {
    const [m00, m01, m10, m11] = m;
    const [v0, v1] = v;
    return [m00 * v0 + m01 * v1, m10 * v0 + m11 * v1];
  }

  static scalarMultiply(m, s) {
    const [m00, m01, m10, m11] = m;
    return [m00 * s, m01 * s, m10 * s, m11 * s];
  }

  static adjoint(m) {
    const [m00, m01, m10, m11] = m;
    return [m11, -m01, -m10, m00];
  }

  static invert(m) {
    const det = Matrix2.determinant(m);
    return det === 0 ? undefined : Matrix2.scalarMultiply(Matrix2.adjoint(m), 1 / det);
  }

}

class Vector2 {
  constructor() {
    throw new Error("[G]`Vector2` can not used as a constructor.");
  }

  static from(u, v) {
    return Vector2.subtract(v, u);
  }

  static from2(a, m) {
    return [m * Maths.cos(a), m * Maths.sin(a)];
  }

  static isZero(v) {
    return v[0] === 0 && v[1] === 0;
  }

  static angle(v) {
    return Maths.atan2(v[1], v[0]);
  }

  static angleTo(u, v) {
    if (Vector2.isZero(u) || Vector2.isZero(v)) return NaN;
    return (Vector2.cross(u, v) >= 0 ? 1 : -1) * Maths.acos(Vector2.dot(u, v) / (Vector2.magnitude(u) * Vector2.magnitude(v)));
  }

  static magnitude(v) {
    return Maths.hypot(v[0], v[1]);
  }

  static squaredMagnitude(v) {
    return v[0] ** 2 + v[1] ** 2;
  }

  static add(u, v) {
    const [ux, uy] = u;
    const [vx, vy] = v;
    return [ux + vx, uy + vy];
  }

  static subtract(u, v) {
    const [ux, uy] = u;
    const [vx, vy] = v;
    return [ux - vx, uy - vy];
  }

  static scalarMultiply(v, s) {
    return [v[0] * s, v[1] * s];
  }

  static dot(u, v) {
    const [ux, uy] = u;
    const [vx, vy] = v;
    return ux * vx + uy * vy;
  }

  static cross(u, v) {
    const [ux, uy] = u;
    const [vx, vy] = v;
    return ux * vy - vx * uy;
  }

  static project(u, v) {
    const [ux, uy] = u;
    const [vx, vy] = v;
    if (Vector2.isZero(v)) return [NaN, NaN];
    return Vector2.scalarMultiply([vx, vy], Vector2.dot([ux, uy], [vx, vy]) / Vector2.dot([vx, vy], [vx, vy]));
  }

  static lerp(u, v, t) {
    return Vector2.add(Vector2.scalarMultiply(u, 1 - t), Vector2.scalarMultiply(v, t));
  }

  static normalize(v) {
    if (Vector2.isZero(v)) return [0, 0];
    const magnitude = Vector2.magnitude(v);
    return [v[0] / magnitude, v[1] / magnitude];
  }

  static negative(v) {
    return [-v[0], -v[1]];
  }

  static rotate(v, a) {
    const m = [Maths.cos(a), -Maths.sin(a), Maths.sin(a), Maths.cos(a)];
    return Matrix2.dotVector2(m, v);
  }

  static skew(v, ax, ay) {
    const m = [1, Maths.tan(ax), Maths.tan(ay), 1];
    return Matrix2.dotVector2(m, v);
  }

  static scale(v, sx, sy) {
    const m = [sx, 0, 0, sy];
    return Matrix2.dotVector2(m, v);
  }

}

class Complex {
  static is(v) {
    return Type.isArray(v) && v.length === 2 && v.every(elem => Type.isExtendedRealNumber(elem));
  }

  static isEqualTo(c1, c2, epsilon) {
    if (epsilon === undefined) return c1[0] === c2[0] && c1[1] === c2[1];
    return Maths.equalTo(c1[0], c2[0], epsilon) && Maths.equalTo(c1[1], c2[1], epsilon);
  }

  static i() {
    return [0, 1];
  }

  static one() {
    return [1, 0];
  }

  static zero() {
    return [0, 0];
  }

  static real(c, real) {
    if (real !== undefined) c[0] = real;
    return c[0];
  }

  static imag(c, imag) {
    if (imag !== undefined) c[1] = imag;
    return c[1];
  }

  static modulus(c) {
    return Vector2.magnitude(c);
  }

  static squaredModulus(c) {
    return Vector2.squaredMagnitude(c);
  }

  static argument(c) {
    return Vector2.angle(c);
  }

  static from(a, m) {
    return Vector2.from2(a, m);
  }

  static add(c1, c2) {
    return Vector2.add(c1, c2);
  }

  static subtract(c1, c2) {
    return Complex.add(c1, Complex.negative(c2));
  }

  static multiply(c1, c2) {
    const [re1, im1] = c1;
    const [re2, im2] = c2;
    return [re1 * re2 - im1 * im2, re1 * im2 + im1 * re2];
  }

  static divide(c1, c2) {
    const [re1, im1] = c1;
    const [re2, im2] = c2;
    if (re2 === 0 && im2 === 0) return [Infinity, Infinity];
    const s = Complex.squaredModulus(c2);
    return [(re1 * re2 + im1 * im2) / s, (-re1 * im2 + im1 * re2) / s];
  }

  static negative(c) {
    return Vector2.negative(c);
  }

  static reciprocal(c) {
    const [re, im] = c;
    if (re === 0 && im === 0) return [Infinity, Infinity];
    const s = Complex.squaredModulus(c);
    return [re / s, -im / s];
  }

  static conjugate(c) {
    return [c[0], -c[1]];
  }

  static scalarMultiply(c, s) {
    return Vector2.scalarMultiply(c, s);
  }

  static log(c) {
    const [re, im] = c;
    if (re === 0 && im === 0) return [-Infinity, -Infinity];
    return [Maths.log(Complex.modulus(c)), Complex.argument(c)];
  }

  static sqrt(c) {
    const [re, im] = c;
    if (re === 0 && im === 0) return [0, 0];
    const m = Complex.modulus(c);
    const [x, y] = [m + re, m - re];
    return [Maths.sqrt(x / 2), (im < 0 ? -1 : 1) * Maths.sqrt(y / 2)];
  }

  static exp(c) {
    const [re, im] = c;
    return [Maths.exp(re) * Maths.cos(im), Maths.exp(re) * Maths.sin(im)];
  }

  static pow(c, n) {
    return Complex.exp(Complex.multiply(Complex.log(c), n));
  }

  static sin(c) {
    const [re, im] = c;
    return [Maths.sin(re) * Maths.cosh(im), Maths.cos(re) * Maths.sinh(im)];
  }

  static cos(c) {
    const [re, im] = c;
    return [Maths.cos(re) * Maths.cosh(im), -Maths.sin(re) * Maths.sinh(im)];
  }

  static tan(c) {
    const [re, im] = c;
    const d = Maths.cos(2 * re) + Maths.cosh(2 * im);
    return [Maths.sin(2 * re) / d, Maths.sinh(2 * im) / d];
  }

  static asin(c) {
    let s = Complex.sqrt(Complex.subtract(Complex.one(), Complex.multiply(c, c)));
    s = Complex.add(Complex.multiply(c, Complex.i()), s);
    return Complex.multiply(Complex.negative(Complex.i()), Complex.log(s));
  }

  static acos(c) {
    let s = Complex.sqrt(Complex.subtract(Complex.one(), Complex.multiply(c, c)));
    s = Complex.add(c, Complex.multiply(Complex.i(), s));
    return Complex.multiply(Complex.negative(Complex.i()), Complex.log(s));
  }

  static atan(c) {
    let s = Complex.log(Complex.divide(Complex.subtract(Complex.i(), c), Complex.add(Complex.i(), c)));
    return Complex.multiply(s, [0, -0.5]);
  }

  static sinh(c) {
    const [re, im] = c;
    return [Maths.sinh(re) * Maths.cos(im), Maths.cosh(re) * Maths.sin(im)];
  }

  static cosh(c) {
    const [re, im] = c;
    return [Maths.cosh(re) * Maths.cos(im), Maths.sinh(re) * Maths.sin(im)];
  }

  static tanh(c) {
    const [re, im] = c;
    const d = Maths.cosh(2 * re) + Maths.cos(2 * im);
    return [Maths.sinh(2 * re) / d, Maths.sin(2 * im) / d];
  }

  static asinh(c) {
    let s = Complex.sqrt(Complex.add(Complex.multiply(c, c), Complex.one()));
    return Complex.log(Complex.add(c, s));
  }

  static acosh(c) {
    let s = Complex.multiply(Complex.sqrt(Complex.add(c, Complex.one())), Complex.sqrt(Complex.subtract(c, Complex.one())));
    return Complex.log(Complex.add(c, s));
  }

  static atanh(c) {
    let s = Complex.log(Complex.divide(Complex.add(Complex.one(), c), Complex.subtract(Complex.one(), c)));
    return Complex.multiply(s, [0.5, 0]);
  }

}

class EllipticIntegral {
  static completeEllipticIntegralOfFirstKind(ksq) {
    return EllipticIntegral._rf(0, 1 - ksq, 1);
  }

  static completeEllipticIntegralOfSecondKind(ksq) {
    return EllipticIntegral._rf(0, 1 - ksq, 1) - 1 / 3 * ksq * EllipticIntegral._rd(0, 1 - ksq, 1);
  }

  static incompleteEllipticIntegralOfFirstKind(angle, ksq) {
    return Maths.sin(angle) * EllipticIntegral._rf(Maths.pow(Maths.cos(angle), 2), 1 - ksq * Maths.pow(Maths.sin(angle), 2), 1);
  }

  static incompleteEllipticIntegralOfSecondKind(angle, ksq) {
    return Maths.sin(angle) * EllipticIntegral._rf(Maths.pow(Maths.cos(angle), 2), 1 - ksq * Maths.pow(Maths.sin(angle), 2), 1) - 1 / 3 * ksq * Maths.pow(Maths.sin(angle), 3) * EllipticIntegral._rd(Maths.pow(Maths.cos(angle), 2), 1 - ksq * Maths.pow(Maths.sin(angle), 2), 1);
  }

  static _rf(x, y, z) {
    let result = 0;
    let A = 0;
    let lambda = 0;
    let dx = 0;
    let dy = 0;
    let dz = 0;
    const MinError = 1e-7;

    do {
      lambda = Maths.sqrt(x * y) + Maths.sqrt(y * z) + Maths.sqrt(z * x);
      x = (x + lambda) / 4;
      y = (y + lambda) / 4;
      z = (z + lambda) / 4;
      A = (x + y + z) / 3;
      dx = 1 - x / A;
      dy = 1 - y / A;
      dz = 1 - z / A;
    } while (Maths.max(Maths.abs(dx), Maths.abs(dy), Maths.abs(dz)) > MinError);

    let E2 = 0;
    let E3 = 0;
    E2 = dx * dy + dy * dz + dz * dx;
    E3 = dy * dx * dz;
    result = 1 - 1 / 10 * E2 + 1 / 14 * E3 + 1 / 24 * Maths.pow(E2, 2) - 3 / 44 * E2 * E3 - 5 / 208 * Maths.pow(E2, 3) + 3 / 104 * Maths.pow(E3, 2) + 1 / 16 * Maths.pow(E2, 2) * E3;
    result *= 1 / Maths.sqrt(A);
    return result;
  }

  static _rd(x, y, z) {
    let sum = 0;
    let fac = 0;
    let lambda = 0;
    let dx = 0;
    let dy = 0;
    let dz = 0;
    let A = 0;
    const MinError = 1e-7;
    sum = 0;
    fac = 1;

    do {
      lambda = Maths.sqrt(x * y) + Maths.sqrt(y * z) + Maths.sqrt(z * x);
      sum += fac / (Maths.sqrt(z) * (z + lambda));
      fac /= 4;
      x = (x + lambda) / 4;
      y = (y + lambda) / 4;
      z = (z + lambda) / 4;
      A = (x + y + 3 * z) / 5;
      dx = 1 - x / A;
      dy = 1 - y / A;
      dz = 1 - z / A;
    } while (Maths.max(Maths.abs(dx), Maths.abs(dy), Maths.abs(dz)) > MinError);

    let E2 = 0;
    let E3 = 0;
    let E4 = 0;
    let E5 = 0;
    let result = 0;
    E2 = dx * dy + dy * dz + 3 * Maths.pow(dz, 2) + 2 * dz * dx + dx * dz + 2 * dy * dz;
    E3 = Maths.pow(dz, 3) + dx * Maths.pow(dz, 2) + 3 * dx * dy * dz + 2 * dy * Maths.pow(dz, 2) + dy * Maths.pow(dz, 2) + 2 * dx * Maths.pow(dz, 2);
    E4 = dy * Maths.pow(dz, 3) + dx * Maths.pow(dz, 3) + dx * dy * Maths.pow(dz, 2) + 2 * dx * dy * Maths.pow(dz, 2);
    E5 = dx * dy * Maths.pow(dz, 3);
    result = 1 - 3 / 14 * E2 + 1 / 6 * E3 + 9 / 88 * Maths.pow(E2, 2) - 3 / 22 * E4 - 9 / 52 * E2 * E3 + 3 / 26 * E5 - 1 / 16 * Maths.pow(E2, 3) + 3 / 40 * Maths.pow(E3, 2) + 3 / 20 * E2 * E4 + 45 / 272 * Maths.pow(E2, 2) * E3 - 9 / 68 * (E3 * E4 + E2 * E5);
    result = 3.0 * sum + fac * result / (A * Maths.sqrt(A));
    return result;
  }

}

class Matrix3 {
  constructor() {
    throw new Error("[G]`Matrix3` can not used as a constructor.");
  }

  static determinant(m) {
    const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;
    return m00 * Matrix2.determinant([m11, m12, m21, m22]) - m01 * Matrix2.determinant([m10, m12, m20, m22]) + m02 * Matrix2.determinant([m10, m11, m20, m21]);
  }

  static dotMatrix3(a, b) {
    const [a00, a01, a02, a10, a11, a12, a20, a21, a22] = a;
    const [b00, b01, b02, b10, b11, b12, b20, b21, b22] = b;
    return [a00 * b00 + a01 * b10 + a02 * b20, a00 * b01 + a01 * b11 + a02 * b21, a00 * b02 + a01 * b12 + a02 * b22, a10 * b00 + a11 * b10 + a12 * b20, a10 * b01 + a11 * b11 + a12 * b21, a10 * b02 + a11 * b12 + a12 * b22, a20 * b00 + a21 * b10 + a22 * b20, a20 * b01 + a21 * b11 + a22 * b21, a20 * b02 + a21 * b12 + a22 * b22];
  }

  static dotVector3(m, v) {
    const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;
    const [v0, v1, v2] = v;
    return [m00 * v0 + m01 * v1 + m02 * v2, m10 * v0 + m11 * v1 + m12 * v2, m20 * v0 + m21 * v1 + m22 * v2];
  }

  static scalarMultiply(m, s) {
    const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;
    return [m00 * s, m01 * s, m02 * s, m10 * s, m11 * s, m12 * s, m20 * s, m21 * s, m22 * s];
  }

  static adjoint(m) {
    const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;
    return [m11 * m22 - m12 * m21, m02 * m21 - m01 * m22, m01 * m12 - m02 * m11, m12 * m20 - m10 * m22, m00 * m22 - m02 * m20, m10 * m02 - m00 * m12, m10 * m21 - m11 * m20, m01 * m20 - m00 * m21, m00 * m11 - m10 * m01];
  }

  static invert(m) {
    const det = Matrix3.determinant(m);
    return det === 0 ? undefined : Matrix3.scalarMultiply(Matrix3.adjoint(m), 1 / det);
  }

}

class Matrix4 {
  constructor() {
    throw new Error("[G]`Matrix4` can not used as a constructor.");
  }

  static determinant(m) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m;
    return m00 * Matrix3.determinant([m11, m12, m13, m21, m22, m23, m31, m32, m33]) - m01 * Matrix3.determinant([m10, m12, m13, m20, m22, m23, m30, m32, m33]) + m02 * Matrix3.determinant([m10, m11, m13, m20, m21, m23, m30, m31, m33]) - m03 * Matrix3.determinant([m10, m11, m12, m20, m21, m22, m30, m31, m32]);
  }

  static dotVector4(m, v) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m;
    const [v0, v1, v2, v3] = v;
    return [m00 * v0 + m01 * v1 + m02 * v2 + m03 * v3, m10 * v0 + m11 * v1 + m12 * v2 + m13 * v3, m20 * v0 + m21 * v1 + m22 * v2 + m23 * v3, m30 * v0 + m31 * v1 + m32 * v2 + m33 * v3];
  }

  static scalarMultiply(m, s) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m;
    return [m00 * s, m01 * s, m02 * s, m03 * s, m10 * s, m11 * s, m12 * s, m13 * s, m20 * s, m21 * s, m22 * s, m23 * s, m30 * s, m31 * s, m32 * s, m33 * s];
  }

}

function startGuess(p) {
  let n = Polynomial.degree(p);
  let r = Maths.log(Maths.abs(Polynomial.coef(p, 0)));
  let min = Maths.exp((r - Maths.log(Maths.abs(Polynomial.coef(p, n)))) / n);
  let u;

  for (let i = 1; i < n; i++) if (Polynomial.coef(p, n - i) !== 0) {
    u = Maths.exp((r - Maths.log(Maths.abs(Polynomial.coef(p, n - i)))) / (n - i));
    if (u < min) min = u;
  }

  return 0.5 * min;
}

function changeDirection(dz, m) {
  let z = [0.6, 0.8];
  z = Complex.multiply(dz, z);
  z = Complex.multiply(z, [m, 0]);
  return z;
}

function upperBound(poly, z) {
  let e;
  let n = Polynomial.degree(poly);

  if (Complex.imag(z) !== 0) {
    let p = -2 * Complex.real(z);
    let q = Complex.squaredModulus(z);
    let u = Maths.sqrt(q);
    let s = 0;
    let r = Polynomial.coef(poly, n);
    e = Maths.abs(r) * (3.5 / 4.5);
    let t;

    for (let i = 1; i < n; i++) {
      t = Polynomial.coef(poly, n - i) - p * r - q * s;
      s = r;
      r = t;
      e = u * e + Maths.abs(t);
    }

    t = Polynomial.coef(poly, 0) + Complex.real(z) * r - q * s;
    e = u * e + Maths.abs(t);
    e = (4.5 * e - 3.5 * (Maths.abs(t) + Maths.abs(r) * u) + Maths.abs(Complex.real(z)) * Maths.abs(r)) * 0.5 * Maths.pow(2, -53 + 1);
  } else {
    let t = Polynomial.coef(poly, n);
    e = Maths.abs(t) * 0.5;

    for (let i = 0; i < n; i++) {
      t = t * Complex.real(z) + Polynomial.coef(poly, n - i);
      e = Maths.abs(Complex.real(z)) * e + Maths.abs(t);
    }

    e = (2 * e - Maths.abs(t)) * Maths.pow(2, -53 + 1);
  }

  return e;
}

function tryShortenSteps(p, z0, dz, f) {
  let wdz = dz;
  let n = Polynomial.degree(p);
  let zBest = Complex.subtract(z0, dz);
  let fBest = f;

  for (let i = 1; i <= n; i++) {
    wdz = Complex.multiply(wdz, [0.5, 0]);
    let wz = Complex.subtract(z0, wdz);
    let fwz = Polynomial.evaluate(p, wz);
    let wf = Complex.modulus(fwz);

    if (wf >= fBest) {
      break;
    }

    fBest = wf;
    zBest = wz;

    if (i == 2) {
      wdz = changeDirection(wdz, 0.5);
      zBest = Complex.subtract(z0, wdz);
      fwz = Polynomial.evaluate(p, zBest);
      wf = Complex.modulus(fwz);
      break;
    }
  }

  return zBest;
}

function quadratic(p, res) {
  if (Polynomial.degree(p) == 2) {
    const [a, b, c] = p;

    if (b === 0) {
      const dis = -c / a;

      if (dis < 0) {
        res[1] = [0, Maths.sqrt(-dis)];
        res[2] = [0, -Complex.imag(res[1])];
      } else {
        res[1] = [Maths.sqrt(dis), 0];
        res[2] = [-Complex.real(res[1]), 0];
      }
    } else {
      const dis = 1 - 4 * a * c / b ** 2;

      if (dis < 0) {
        res[1] = [-b / (2 * a), b * Maths.sqrt(-dis) / (2 * a)];
        res[2] = Complex.conjugate(res[1]);
      } else {
        res[1] = [(-1 - Maths.sqrt(dis)) * b / (2 * a), 0];
        res[2] = [c / (a * Complex.real(res[1])), 0];
      }
    }
  } else if (Polynomial.degree(p) == 1) {
    const [a, b] = p;
    res[1] = [-b / a, 0];
  }
}

function newtonConverging(fz0, fz1, z0, z, f, ff) {
  const fwz = Complex.subtract(fz0, fz1);
  const wz = Complex.subtract(z0, z);
  const f2 = Complex.modulus(Complex.divide(fwz, wz));
  const u = Complex.modulus(fz1);
  return f2 / u > u / f / 2 || ff != f ? false : true;
}

function solve(p, solutions) {
  let z0 = Complex.zero();
  let fz0;
  let z = Complex.zero();
  let dz;
  let fz1;
  let fz;
  let u;
  let r;
  let r0;
  let f;
  let f0;
  let f1;
  let ff;
  let eps;
  let n;
  let iterCnt;
  let stage1;
  p = [...p];

  while (Polynomial.coef(p, 0) === 0) {
    solutions[Polynomial.degree(p)] = Complex.zero();
    p = Polynomial.deflate(p, 0);
  }

  while (Polynomial.degree(p) > 2) {
    n = Polynomial.degree(p);
    u = startGuess(p);
    let p1 = Polynomial.derivative(p);
    z0 = Complex.zero();
    ff = f0 = Maths.abs(Polynomial.coef(p, 0));
    fz0 = [Polynomial.coef(p, 1), 0];
    if (Complex.isEqualTo(fz0, Complex.zero()) === true) z = [1, 0];else z = Complex.divide(Complex.negative([Polynomial.coef(p, 0), 0]), [Polynomial.coef(p, 1), 0]);
    z = Complex.multiply(Complex.divide(z, [Complex.modulus(z), 0]), [u, 0]);
    dz = z;
    fz = Polynomial.evaluate(p, z);
    f = Complex.modulus(fz);
    r0 = 5 * u;
    eps = 2 * n * f0 * Maths.pow(2, -53);

    for (iterCnt = 0; Complex.isEqualTo(Complex.add(z, dz), z) == false && f > eps && iterCnt < 50; iterCnt++) {
      fz1 = Polynomial.evaluate(p1, z);
      f1 = Complex.modulus(fz1);

      if (f1 === 0) {
        dz = changeDirection(dz, 5.0);
        z = Complex.subtract(z0, dz);
        fz = Polynomial.evaluate(p, z);
        f = Complex.modulus(fz);
        continue;
      } else {
        dz = Complex.divide(fz, fz1);
        stage1 = !newtonConverging(fz0, fz1, z0, z, f, ff);
        r = Complex.modulus(dz);

        if (r > r0) {
          dz = changeDirection(dz, r0 / r);
          r = Complex.modulus(dz);
        }

        r0 = 5 * r;
      }

      z0 = z;
      f0 = f;
      fz0 = fz1;
      let domain_error = true;

      for (; domain_error === true;) {
        domain_error = false;
        z = Complex.subtract(z0, dz);
        fz = Polynomial.evaluate(p, z);
        ff = f = Complex.modulus(fz);

        if (stage1 == true) {
          if (f > f0) {
            z = tryShortenSteps(p, z0, dz, f);
            fz = Polynomial.evaluate(p, z);
            f = Complex.modulus(fz);
          } else {
            for (var m = 2; m <= n; m++) {
              var wz, fwz, fw;
              wz = Complex.subtract(z0, Complex.multiply([m, 0], dz));
              fwz = Polynomial.evaluate(p, wz);
              fw = Complex.modulus(fwz);

              if (fw >= f) {
                break;
              }

              z = wz;
              f = fw;
              fz = fwz;
            }
          }
        } else {
          eps = upperBound(p, z);
        }

        if (r < Complex.modulus(z) * Maths.pow(2, -26) && f >= f0) {
          z = z0;
          dz = changeDirection(dz, 0.5);
          if (Complex.isEqualTo(Complex.add(z, dz), z) == false) domain_error = true;
        }
      }
    }

    if (Maths.abs(Complex.real(z)) >= Maths.abs(Complex.imag(z))) {
      z0 = [Complex.real(z), 0];
    } else {
      z0 = [0, Complex.imag(z)];
    }

    fz = Polynomial.evaluate(p, z0);

    if (Complex.modulus(fz) <= f) {
      z = z0;
      f = Complex.modulus(fz);
    }

    if (iterCnt >= 50) {
      console.warn("[G]Exceed limit of iteration steps.");
    }

    if (Complex.imag(z) == 0) {
      solutions[n] = z;
      p = Polynomial.deflate(p, Complex.real(z));
    } else {
      solutions[n] = z;
      solutions[n - 1] = Complex.conjugate(z);
      p = Polynomial.deflate(p, z);
    }
  }

  if (Polynomial.degree(p) > 0) {
    quadratic(p, solutions);
  }
}

class Polynomial {
  constructor() {
    throw new Error("[G]`Polynomial` can not used as a constructor.");
  }

  static is(v) {
    return Type.isArray(v) && v.length > 0 && v.every(elem => Type.isRealNumber(elem));
  }

  static _standardize(p) {
    while (p[0] === 0) p.shift();

    if (p.length === 0) p[0] = 0;
    return p;
  }

  static zero() {
    return [0];
  }

  static isZero(p) {
    return p.length === 1 && p[0] === 0;
  }

  static isConstant(p) {
    return p.length === 1;
  }

  static coef(p, degree, value) {
    let index = p.length - 1 - degree;

    if (index < 0 || degree < 0) {
      console.warn("[G]Getting or setting coefficient failed, `NaN` will be returned.");
      return NaN;
    }

    if (value !== undefined) p[index] = value;
    return p[index];
  }

  static degree(p) {
    return p.length - 1;
  }

  static standardize(p) {
    return Polynomial._standardize([...p]);
  }

  static from(roots) {
    let pc = [[1, 0]];
    const complexRoots = Utility.sortBy(roots.filter(r => Complex.is(r) && Complex.imag(r) !== 0), [Complex.real, Complex.imag]);

    while (complexRoots.length > 0) {
      const [a, b] = complexRoots;

      if (b === undefined || !Utility.isEqualTo(a, Complex.conjugate(b))) {
        throw new Error("[G]The complex roots of a polynomial should be conjugate pairs.");
      }

      complexRoots.shift();
      complexRoots.shift();
    }

    roots.forEach((root, i) => {
      const cRoot = Complex.is(root) ? root : [root, 0];
      pc.forEach((c, j) => {
        pc[j] = Complex.add(Complex.scalarMultiply(Complex.multiply(c, cRoot), -1), j < i ? pc[j + 1] : [0, 0]);
      });
      pc.unshift([1, 0]);
    });
    return Array.from(pc, x => Complex.real(x));
  }

  static add(p1, p2) {
    const d1 = Polynomial.degree(p1);
    const d2 = Polynomial.degree(p2);
    const dm = Maths.max(d1, d2);
    const s = new Array(dm + 1).fill(0);

    for (let i = 0; i <= d1; i++) {
      s[dm - d1 + i] += p1[i];
    }

    for (let j = 0; j <= d2; j++) {
      s[dm - d2 + j] += p2[j];
    }

    return Polynomial._standardize(s);
  }

  static subtract(p1, p2) {
    const d1 = Polynomial.degree(p1);
    const d2 = Polynomial.degree(p2);
    const dm = Maths.max(d1, d2);
    const d = new Array(dm + 1).fill(0);

    for (let i = 0; i <= d1; i++) {
      d[dm - d1 + i] += p1[i];
    }

    for (let j = 0; j <= d2; j++) {
      d[dm - d2 + j] -= p2[j];
    }

    return Polynomial._standardize(d);
  }

  static multiply(p1, p2) {
    const d1 = Polynomial.degree(p1);
    const d2 = Polynomial.degree(p2);
    const p = new Array(d1 + d2 + 1).fill(0);

    for (let i = 0; i <= d1; i++) {
      for (let j = 0; j <= d2; j++) {
        p[i + j] += p1[i] * p2[j];
      }
    }

    return Polynomial._standardize(p);
  }

  static divide(p1, p2) {
    if (Polynomial.isZero(p2)) {
      throw new Error("[G]Tried to divide by zero polynomial.");
    }

    const d1 = Polynomial.degree(p1);
    const d2 = Polynomial.degree(p2);
    const q = [];
    const r = [...p1];
    const dd = d1 - d2;

    for (let i = 0; i <= dd; i++) {
      q[i] = r[i] / p2[0];

      for (let j = 0; j <= d2; j++) {
        r[i + j] -= q[i] * p2[j];
      }
    }

    return [Polynomial._standardize(q), Polynomial._standardize(r.slice(dd))];
  }

  static pow(p, n) {
    let r = [1];
    if (n === 0) return r;

    for (let i = n; i > 0; i >>= 1) {
      if (i & 1) r = Polynomial.multiply(r, p);
      p = Polynomial.multiply(p, p);
    }

    return r;
  }

  static compose(p1, p2) {
    return p1.reduce((acc, c) => {
      acc = Polynomial.multiply(acc, p2);

      if (acc.length === 0) {
        if (c !== 0) acc.push(c);
      } else {
        acc[acc.length - 1] += c;
      }

      return acc;
    }, []);
  }

  static deflate(p, root) {
    if (Polynomial.isConstant(p)) throw new Error("[G]Constant polynomial can not be deflated.");
    p = [...p];
    const d = Polynomial.degree(p);

    if (Complex.is(root)) {
      if (!Complex.isEqualTo(root, Complex.zero())) {
        const r = -2 * Complex.real(root);
        const u = Complex.squaredModulus(root);
        p[1] -= r * p[0];

        for (let i = 2; i < d - 1; i++) {
          p[i] = p[i] - r * p[i - 1] - u * p[i - 2];
        }

        p.length--;
      }
    } else {
      if (root !== 0) {
        let s = 0;

        for (let i = 0; i < d; i++) {
          p[i] = s = s * root + p[i];
        }
      }
    }

    p.length--;
    return p;
  }

  static scalarMultiply(p, s) {
    return Polynomial._standardize(p.map(c => c * s));
  }

  static monic(p) {
    if (Polynomial.isZero(p)) return Polynomial.zero();
    return p.map(coef => coef / p[0]);
  }

  static evaluate(p, number) {
    if (Complex.is(number)) {
      return p.reduce((acc, c) => Complex.add(Complex.multiply(acc, number), [c, 0]), Complex.zero());
    }

    return p.reduce((acc, c) => acc * number + c, 0);
  }

  static derivative(p, n = 1) {
    if (n === 0) return [...p];
    const d = Polynomial.degree(p);
    if (d < n) return Polynomial.zero();

    if (n === 1) {
      p = p.slice(0, -1);
      return p.map((c, i) => (d - i) * c);
    }

    return Polynomial.derivative(Polynomial.derivative(p, n - 1));
  }

  static antiderivative(p, n = 1) {
    if (n === 0) return [...p];
    const d = Polynomial.degree(p);

    if (n === 1) {
      p = [...p, 0];
      return p.map((c, i) => c / (d - i + 1));
    }

    return Polynomial.antiderivative(Polynomial.antiderivative(p, n - 1));
  }

  static legendre(n) {
    function tailLegendre(n, cn = 2, polyNm1 = [1, 0], polyNm2 = [1]) {
      if (n === 0) return polyNm2;
      if (n === 1) return polyNm1;
      const polyN = Polynomial.scalarMultiply(Polynomial.add(Polynomial.scalarMultiply(polyNm1.concat(0), 2 * cn - 1), Polynomial.scalarMultiply(polyNm2, -(cn - 1))), 1 / cn);
      return tailLegendre(n - 1, cn + 1, polyN, polyNm1);
    }

    return tailLegendre(n);
  }

  static rootsMultiplicity(roots, epsilon) {
    const multipleReal = [];
    const multipleComplex = [];
    const rsCopy = [...roots];

    main: while (rsCopy.length) {
      const elem = rsCopy.shift();

      if (Complex.is(elem)) {
        for (let i = 0, l = multipleComplex.length; i < l; i++) {
          if (Maths.equalTo(Complex.real(multipleComplex[i][0]), Complex.real(elem), epsilon) && Maths.equalTo(Complex.imag(multipleComplex[i][0]), Complex.imag(elem), epsilon)) {
            multipleComplex[i].push(elem);
            continue main;
          }
        }

        multipleComplex.push([elem]);
      } else {
        for (let i = 0, l = multipleReal.length; i < l; i++) {
          if (Maths.equalTo(multipleReal[i][0], elem, epsilon)) {
            multipleReal[i].push(elem);
            continue main;
          }
        }

        multipleReal.push([elem]);
      }
    }

    return [...multipleReal.map(mr => {
      return {
        root: Maths.avg(...mr),
        multiplicity: mr.length
      };
    }), ...multipleComplex.map(mc => {
      const reals = mc.map(c => Complex.real(c));
      const imags = mc.map(c => Complex.imag(c));
      return {
        root: [Maths.avg(...reals), Maths.avg(...imags)],
        multiplicity: mc.length
      };
    })];
  }

  static roots(p) {
    if (Polynomial.isConstant(p)) {
      console.warn("[G]Constant or zero polynomial does not have discrete roots.");
      return [];
    }

    const d = Polynomial.degree(p);
    const solutions = [];
    solve(p, solutions);
    const roots = [];

    for (let i = 1; i <= d; i++) {
      if (Complex.imag(solutions[i]) === 0) roots.push(Complex.real(solutions[i]));else roots.push(solutions[i]);
    }

    return Utility.sortBy(roots, [Complex.is, r => r]);
  }

}

class TransformationMatrix {
  constructor() {
    throw new Error("[G]`TransformationMatrix` can not used as a constructor.");
  }

  static identity() {
    return [1, 0, 0, 1, 0, 0];
  }

  static isIdentity(m) {
    return Utility.isEqualTo(m, TransformationMatrix.identity());
  }

  static span(m) {
    const [a, b, c, d] = m;

    if (Vector2.isZero([a, b]) && Vector2.isZero([c, d])) {
      return 0;
    }

    if (Maths.equalTo(Vector2.cross([a, b], [c, d]), 0, Number.EPSILON)) {
      return 1;
    }

    return 2;
  }

  static multiply(m1, m2) {
    const [a1, b1, c1, d1, e1, f1] = m1;
    const [a2, b2, c2, d2, e2, f2] = m2;
    const [a, c, e, b, d, f] = Matrix3.dotMatrix3([a1, c1, e1, b1, d1, f1, 0, 0, 1], [a2, c2, e2, b2, d2, f2, 0, 0, 1]);
    return [a, b, c, d, e, f];
  }

  static determinant(m) {
    const [a, b, c, d] = m;
    return Matrix2.determinant([a, c, b, d]);
  }

  static invert(m) {
    let [a, b, c, d, e, f] = m;
    const inverse = Matrix3.invert([a, c, e, b, d, f, 0, 0, 1]);
    if (inverse === undefined) throw new Error(`[G]\`TransformationMatrix:[a: ${a}, b: ${b}, c: ${c}, d: ${d}, e: ${e}, f: ${f}] is NOT invertible.`);
    [a, c, e, b, d, f] = inverse;
    return [a, b, c, d, e, f];
  }

  static isInvertible(m) {
    return TransformationMatrix.determinant(m) !== 0;
  }

  static transformCoordinates(m, coordinates) {
    const [a, b, c, d, e, f] = m;
    const [x, y] = coordinates;
    const [xp, yp] = Matrix3.dotVector3([a, c, e, b, d, f, 0, 0, 1], [x, y, 1]);
    return [xp, yp];
  }

  static antitransformCoordinates(m, coordinates) {
    return TransformationMatrix.transformCoordinates(TransformationMatrix.invert(m), coordinates);
  }

  static decomposeQr(m) {
    const [a, b, c, d, tx, ty] = m;
    const det = TransformationMatrix.determinant(m);
    let r = 0;
    let sx = 1;
    let sy = 1;
    let kx = 0;
    let ky = 0;

    if (a !== 0 || b !== 0) {
      const p = Maths.hypot(a, b);
      r = b > 0 ? Maths.acos(a / p) : -Maths.acos(a / p);
      sx = p;
      sy = det / p;
      kx = Maths.atan((a * c + b * d) / p ** 2);
    } else if (c !== 0 || d !== 0) {
      const q = Maths.hypot(c, d);
      r = Maths.PI / 2 - (d > 0 ? Maths.acos(-c / q) : -Maths.acos(c / q));
      sx = det / q;
      sy = q;
      ky = Maths.atan((a * c + b * d) / q ** 2);
    } else {
      sx = 0;
      sy = 0;
    }

    return {
      translate: [tx, ty],
      rotate: r,
      scale: [sx, sy],
      skew: [kx, ky]
    };
  }

  static decomposeSvd(m) {
    const [a, b, c, d, tx, ty] = m;
    const e = (a + d) / 2;
    const f = (a - d) / 2;
    const g = (b + c) / 2;
    const h = (b - c) / 2;
    const q = Maths.sqrt(e ** 2 + h ** 2);
    const r = Maths.sqrt(f ** 2 + g ** 2);
    const sx = q + r;
    const sy = q - r;
    const a1 = Maths.atan2(g, f);
    const a2 = Maths.atan2(h, e);
    const r1 = (a2 + a1) / 2;
    const r2 = (a2 - a1) / 2;
    return {
      translate: [tx, ty],
      rotate1: r1,
      scale: [sx, sy],
      rotate2: r2
    };
  }

  static translate(tx, ty) {
    return [1, 0, 0, 1, tx, ty];
  }

  static rotate(r) {
    return [Maths.cos(r), Maths.sin(r), -Maths.sin(r), Maths.cos(r), 0, 0];
  }

  static scale(sx, sy) {
    return [sx, 0, 0, sy, 0, 0];
  }

  static skew(kx, ky) {
    return [1, Maths.tan(kx), Maths.tan(ky), 1, 0, 0];
  }

  static lineReflect(a, b, c) {
    const den = a ** 2 + b ** 2;
    return [(b ** 2 - a ** 2) / den, -(2 * a * b) / den, -(2 * a * b) / den, -(b ** 2 - a ** 2) / den, -(2 * a * c) / den, -(2 * b * c) / den];
  }

  static pointReflect(x, y) {
    return [-1, 0, 0, -1, 2 * x, 2 * y];
  }

}

const SCHEDULER_FLUSH_TIMEOUT = 1000;
const DEFAULT_OPTIONS = {
  epsilon: 2 ** -32,
  curveEpsilon: 2 ** -16,
  graphics: {
    point: {
      size: 6,
      appearance: "circle"
    },
    arrow: {
      width: 5,
      length: 10,
      foldback: 0,
      noFoldback: true
    },
    lineArrow: true,
    vectorArrow: true,
    rayArrow: true,
    polygonSegmentArrow: true,
    pathSegmentArrow: true
  }
};
const optioner = {
  options: Utility.cloneDeep(DEFAULT_OPTIONS),

  getOptions() {
    return Utility.cloneDeep(this.options);
  },

  setOptions(options) {
    Utility.assignDeep(this.options, options);
    this.applyOptionsRules();
  },

  applyOptionsRules() {
    if (this.options.epsilon > 2 ** -16) this.options.epsilon = 2 ** -16;
    if (this.options.epsilon < 2 ** -52) this.options.epsilon = 2 ** -52;
  }

};
const scheduler = {
  callbackMarkMap: new Map(),

  mark(callback, context) {
    if (!this.callbackMarkMap.has(callback)) this.callbackMarkMap.set(callback, new WeakSet());
    const contexts = this.callbackMarkMap.get(callback);
    contexts.add(context);
  },

  isMarked(callback, context) {
    if (!this.callbackMarkMap.has(callback)) return false;
    const contexts = this.callbackMarkMap.get(callback);
    return contexts.has(context);
  },

  clearMark() {
    this.callbackMarkMap.clear();
  },

  internalQueue: [],
  externalQueue: [],
  flushed: false,

  flushQueue() {
    this.flushed = true;
    Promise.resolve().then(() => {
      const timeOrigin = Utility.now();

      while (this.internalQueue.length !== 0) {
        this.internalQueue.shift()();

        if (Utility.now() - timeOrigin > SCHEDULER_FLUSH_TIMEOUT) {
          console.error("[G]Geomtoy stopped the event handling for there could be some mistakes in your code like circular event triggering causing an infinite recursion. Please check your code.");
          break;
        }
      }

      this.clearMark();

      while (this.externalQueue.length !== 0) {
        this.externalQueue.shift()();
      }

      this.flushed = false;
    });
  },

  queue(objectSchedule) {
    this.internalQueue.push(objectSchedule);
    if (!this.flushed) this.flushQueue();
  },

  nextTick(todo) {
    if (this.externalQueue.includes(todo)) return;
    this.externalQueue.push(todo);
    if (!this.flushed) this.flushQueue();
  }

};
const getOptions = optioner.getOptions.bind(optioner);
const setOptions = optioner.setOptions.bind(optioner);
const nextTick = scheduler.nextTick.bind(scheduler);
var geomtoy = {
  getOptions,
  setOptions,
  nextTick
};

var GeometryGraphicsCommandType = {
  MoveTo: "moveTo",
  LineTo: "lineTo",
  BezierTo: "bezierTo",
  QuadraticBezierTo: "quadraticBezierTo",
  ArcTo: "arcTo",
  Close: "close"
};
var PathCommandType = {
  MoveTo: "M",
  LineTo: "L",
  BezierTo: "C",
  QuadraticBezierTo: "Q",
  ArcTo: "A"
};
let RelationshipPredicate;

(function (RelationshipPredicate) {
  RelationshipPredicate["Equal"] = "equal";
  RelationshipPredicate["Separate"] = "separate";
  RelationshipPredicate["Contain"] = "contain";
  RelationshipPredicate["ContainedBy"] = "containedBy";
  RelationshipPredicate["Intersect"] = "intersect";
  RelationshipPredicate["Strike"] = "strike";
  RelationshipPredicate["Contact"] = "contact";
  RelationshipPredicate["Cross"] = "cross";
  RelationshipPredicate["Touch"] = "touch";
  RelationshipPredicate["Block"] = "block";
  RelationshipPredicate["BlockedBy"] = "blockedBy";
  RelationshipPredicate["Connect"] = "connect";
  RelationshipPredicate["Coincide"] = "coincide";
})(RelationshipPredicate || (RelationshipPredicate = {}));

class BaseObject {
  constructor() {
    this._uuid = Utility.uuid();
    this._data = {};
  }

  get name() {
    return this.constructor.name;
  }

  get uuid() {
    return this._uuid;
  }

  data(key, value) {
    if (value === undefined) return this._data[key];
    this._data[key] = value;
    return this;
  }

}

class EventObject {
  constructor(target) {
    this.timestamp = Date.now();
    this.target = void 0;
    this.event = void 0;
    this.indexOrKey = void 0;
    this.uuid = void 0;
    this.original = void 0;
    this.target = target;
  }

  static empty(target) {
    return new EventObject(target);
  }

  static simple(target, eventName) {
    const ret = new EventObject(target);
    ret.event = eventName;
    return ret;
  }

  static collection(target, eventName, indexOrKey, uuid) {
    const ret = new EventObject(target);
    ret.event = eventName;
    ret.indexOrKey = indexOrKey;
    ret.uuid = uuid;
    return ret;
  }

  static composedAny(target, eventPattern, originalEventObject) {
    const ret = new EventObject(target);
    ret.event = eventPattern;
    ret.original = originalEventObject;
    return ret;
  }

  static composedAll(target, eventPattern, originalEventObjects) {
    const ret = new EventObject(target);
    ret.event = eventPattern;
    ret.original = originalEventObjects;
    return ret;
  }

}

function isSameEventObject(eventObject1, eventObject2) {
  if (eventObject1.target !== eventObject2.target) return false;
  if (eventObject1.event !== eventObject2.event) return false;
  if (eventObject1.indexOrKey !== eventObject2.indexOrKey) return false;
  if (eventObject1.uuid !== eventObject2.uuid) return false;
  if (eventObject1.original !== eventObject2.original) return false;
  return true;
}

class EventCache {
  constructor() {
    this.objects = [];
  }

  add(eventObject) {
    this.objects.push(eventObject);
  }

  has(eventObject) {
    return this.objects.findIndex(e => isSameEventObject(e, eventObject)) !== -1;
  }

  filter(event) {
    return this.objects.filter(e => e.event === event);
  }

  clear() {
    this.objects = [];
  }

  forEach(callback) {
    for (let i = 0; i < this.objects.length; i++) {
      callback(this.objects[i], i);
    }
  }

}

class EventHandler {
  constructor(eventPattern, callback, context, relatedTargets, priority, hasRecursiveEffect) {
    this.eventPattern = eventPattern;
    this.callback = callback;
    this.context = context;
    this.relatedTargets = relatedTargets;
    this.priority = priority;
    this.hasRecursiveEffect = hasRecursiveEffect;
  }

}

const CACHE_KEY = "_cache_";
const STATE_KEY = "_state_";
const STATE_IDENTIFIER = "_stateId_";
function cached(target, propertyKey, descriptor) {
  const method = descriptor.value;

  descriptor.value = function () {
    if (this[CACHE_KEY] === undefined) this[CACHE_KEY] = {};

    if (propertyKey in this[CACHE_KEY]) {
      return this[CACHE_KEY][propertyKey];
    }

    return this[CACHE_KEY][propertyKey] = method.call(this);
  };
}
function stated(target, propertyKey, descriptor) {
  const method = descriptor.value;

  descriptor.value = function () {
    if (this[CACHE_KEY] === undefined) {
      this[CACHE_KEY] = {
        [STATE_KEY]: undefined
      };
    }

    if (this[STATE_IDENTIFIER] !== this[CACHE_KEY][STATE_KEY]) {
      Object.keys(this[CACHE_KEY]).forEach(key => delete this[CACHE_KEY][key]);
      this[CACHE_KEY][STATE_KEY] = this[STATE_IDENTIFIER];
    }

    if (propertyKey in this[CACHE_KEY]) {
      return this[CACHE_KEY][propertyKey];
    }

    return this[CACHE_KEY][propertyKey] = method.call(this);
  };
}
function statedWithBoolean(...defaultValues) {
  return function (target, propertyKey, descriptor) {
    const method = descriptor.value;

    descriptor.value = function () {
      if (this[CACHE_KEY] === undefined) {
        this[CACHE_KEY] = {
          [STATE_KEY]: undefined
        };
      }

      if (this[STATE_IDENTIFIER] !== this[CACHE_KEY][STATE_KEY]) {
        Object.keys(this[CACHE_KEY]).forEach(key => delete this[CACHE_KEY][key]);
        this[CACHE_KEY][STATE_KEY] = this[STATE_IDENTIFIER];
      }

      if (this[CACHE_KEY][propertyKey] === undefined) this[CACHE_KEY][propertyKey] = {};
      const valueKey = [...new Array(defaultValues.length).keys()].reduce((acc, index) => {
        var _arguments$index2;

        acc.push((_arguments$index2 = arguments[index]) != null ? _arguments$index2 : defaultValues[index]);
        return acc;
      }, []).join("-");

      if (valueKey in this[CACHE_KEY][propertyKey]) {
        return this[CACHE_KEY][propertyKey][valueKey];
      }

      return this[CACHE_KEY][propertyKey][valueKey] = method.call(this, arguments);
    };
  };
}

const eventsSplitterReg = /\s+/;
const eventPatternAnyReg = /^(\w+\|){1,}\w+$/i;
const eventPatternAnySplitter = "|";
const eventNameForAny = "any";
const eventPatternAllReg = /^(\w+\&){1,}\w+$/i;
const eventPatternAllSplitter = "&";
const eventNameForAll = "all";
const onEventHandlerDefaultPriority = 1;
const bindEventHandlerDefaultPriority = 1000;
class EventTarget extends BaseObject {
  constructor(...args) {
    super(...args);
    this._muted = false;
    this._eventMap = [];
    this._eventCache = new EventCache();
    this._eventScheduled = false;
    this[STATE_IDENTIFIER] = Utility.now();
  }

  get muted() {
    return this._muted;
  }

  mute() {
    this._muted = true;
  }

  unmute() {
    this._muted = false;
  }

  _addHandler(eventPattern, callback, context, relatedTargets, priority, hasRecursiveEffect) {
    const hs = this._eventMap;
    const handler = new EventHandler(eventPattern, callback, context, relatedTargets, priority, hasRecursiveEffect);
    hs.push(handler);
    hs.sort((a, b) => b.priority - a.priority);
  }

  _removeHandler(eventPattern, callback, context) {
    const hs = this._eventMap;
    const index = hs.findIndex(h => h.eventPattern === eventPattern && h.callback === callback && h.context === context);
    if (index != -1) hs.splice(index, 1);
  }

  _hasHandler(eventPattern, callback, context) {
    const hs = this._eventMap;
    return hs.findIndex(h => h.eventPattern === eventPattern && h.callback === callback && h.context === context) != -1;
  }

  _hasEvent(eventName) {
    if (eventName === eventNameForAll) return true;
    if (eventName === eventNameForAny) return true;
    return Object.values(this.events).includes(eventName);
  }

  _getEventObjectsFromCache(eventPattern) {
    if (eventPatternAnyReg.test(eventPattern)) {
      let origin = undefined;
      return eventPattern.split(eventPatternAnySplitter).some(n => {
        const objects = this._eventCache.filter(n);

        if (objects.length > 0) {
          origin = Utility.head(objects);
          return true;
        }

        return false;
      }) ? [EventObject.composedAny(this, eventPattern, origin)] : null;
    }

    if (eventPatternAllReg.test(eventPattern)) {
      let origins = [];
      return eventPattern.split(eventPatternAllSplitter).every(n => {
        const objects = this._eventCache.filter(n);

        if (objects.length > 0) {
          origins.push(Utility.head(objects));
          return true;
        }

        return false;
      }) ? [EventObject.composedAll(this, eventPattern, origins)] : null;
    }

    const objects = this._eventCache.filter(eventPattern);

    return objects.length > 0 ? objects : null;
  }

  _parseEvents(events) {
    const patterns = events.trim().split(eventsSplitterReg);
    return patterns.filter(p => {
      if (eventPatternAnyReg.test(p)) {
        return p.split(eventPatternAnySplitter).some(n => {
          return !this._hasEvent(n) ? (console.warn(`[G]There is no event named \`${n}\` in \`${this.name}\` which is contained in \`${p}\`, so it will be ignored.`), true) : false;
        }) ? false : true;
      }

      if (eventPatternAllReg.test(p)) {
        return p.split(eventPatternAllSplitter).some(n => {
          return !this._hasEvent(n) ? (console.warn(`[G]There is no event named \`${n}\` in \`${this.name}\` which is contained in \`${p}\`, so it will be ignored.`), true) : false;
        }) ? false : true;
      }

      return !this._hasEvent(p) ? (console.warn(`[G]There is no event named \`${p}\` in \`${this.name}\` , so it will be ignored.`), false) : true;
    });
  }

  on(events, callback, {
    priority = onEventHandlerDefaultPriority,
    hasRecursiveEffect = false
  } = {}) {
    Assert.isRealNumber(priority, "priority");

    this._parseEvents(events).forEach(p => {
      if (this._hasHandler(p, callback, this)) return console.warn(`[G]An event handler with the same event pattern \`${p}\`, callback and context \`${this}\` already exists in \`${this}\`, so it will be ignored.`);

      this._addHandler(p, callback, this, undefined, priority, hasRecursiveEffect);
    });

    return this;
  }

  off(events, callback) {
    this._parseEvents(events).forEach(p => {
      this._removeHandler(p, callback, this);
    });

    return this;
  }

  clear(events) {
    if (events === undefined) {
      this._eventMap = [];
      return this;
    }

    const hs = this._eventMap;

    this._parseEvents(events).forEach(p => {
      const index = hs.findIndex(h => h.eventPattern === p);
      if (index != -1) hs.splice(index, 1);
    });

    return this;
  }

  _translateAny() {
    return Object.values(this.events).join(eventPatternAnySplitter);
  }

  _translateAll() {
    return Object.values(this.events).join(eventPatternAllSplitter);
  }

  _schedule() {
    this._eventScheduled = true;
    scheduler.queue(() => {
      const handlingCopy = [...this._eventMap];
      handlingCopy.forEach(h => {
        const pattern = h.eventPattern === eventNameForAny ? this._translateAny() : h.eventPattern === eventNameForAll ? this._translateAll() : h.eventPattern;

        let result = this._getEventObjectsFromCache(pattern);

        if (result !== null) {
          if (scheduler.isMarked(h.callback, h.context) && h.hasRecursiveEffect) return;
          result.forEach(eo => {
            if (h.relatedTargets !== undefined) {
              h.callback.call(h.context, h.relatedTargets.map(target => target === this ? eo : EventObject.empty(target)));
            } else {
              h.callback.call(h.context, eo);
            }
          });
          scheduler.mark(h.callback, h.context);
        }
      });

      this._eventCache.clear();

      this._eventScheduled = false;
    });
  }

  trigger_(eventObject) {
    if (this._muted) return this;
    this[STATE_IDENTIFIER] = eventObject.timestamp;

    if (!this._eventCache.has(eventObject)) {
      this._eventCache.add(eventObject);
    }

    if (!this._eventScheduled) this._schedule();
    return this;
  }

  _parsePairs(pairs) {
    const ret = {
      targets: [],
      pairs: []
    };
    pairs.forEach(pair => {
      if (pair[0] instanceof EventTarget && Type.isString(pair[1])) {
        ret.targets.push(pair[0]);
        ret.pairs.push(pair);
      } else {
        console.warn(`[G]The \`eventTargetEventsPair\` contains a pair: \`${pair}\` which is not valid, so it will be ignored.`);
      }
    });
    return ret;
  }

  bind(eventTargetEventsPairs, callback, {
    immediately = true,
    priority = bindEventHandlerDefaultPriority,
    hasRecursiveEffect = false
  } = {}) {
    Assert.isRealNumber(priority, "priority");
    let immediatelyCalled = false;

    const {
      targets,
      pairs
    } = this._parsePairs(eventTargetEventsPairs);

    pairs.forEach(te => {
      const [target, events] = te;

      target._parseEvents(events).forEach(p => {
        if (target._hasHandler(p, callback, this)) {
          return console.warn(`[G]An event handler with the same event pattern \`${p}\`, callback and context \`${this}\` already exists in \`${target}\`, so it will be ignored.`);
        }

        target._addHandler(p, callback, this, targets, priority, hasRecursiveEffect);

        if (immediately && !immediatelyCalled) {
          callback.call(this, targets.map(target => EventObject.empty(target)));
          immediatelyCalled = true;
        }
      });
    });
    return this;
  }

  unbind(eventTargetEventsPairs, callback) {
    const {
      pairs
    } = this._parsePairs(eventTargetEventsPairs);

    pairs.forEach(te => {
      const [target, events] = te;

      target._parseEvents(events).forEach(p => {
        target._removeHandler(p, callback, this);
      });
    });
    return this;
  }

}

class Shape extends EventTarget {}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

var _class$R;
let Geometry = (_class$R = class Geometry extends Shape {
  isValid() {
    var _this$dimensionallyDe, _this$dimensionallyDe2;

    return this.initialized_() && ((_this$dimensionallyDe = !((_this$dimensionallyDe2 = this.dimensionallyDegenerate) != null && _this$dimensionallyDe2.call(this))) != null ? _this$dimensionallyDe : true);
  }

}, (_applyDecoratedDescriptor(_class$R.prototype, "isValid", [stated], Object.getOwnPropertyDescriptor(_class$R.prototype, "isValid"), _class$R.prototype)), _class$R);

const ARC_ENDPOINT_FULL_APPROX = Maths.PI / 1800;
function endpointParameterizationTransform({
  point1X: x1,
  point1Y: y1,
  point2X: x2,
  point2Y: y2,
  radiusX: rx,
  radiusY: ry,
  largeArc: la,
  positive: pos,
  rotation: phi
}, transformationMatrix) {
  const {
    centerX: cx,
    centerY: cy
  } = endpointToCenterParameterization({
    point1X: x1,
    point1Y: y1,
    point2X: x2,
    point2Y: y2,
    radiusX: rx,
    radiusY: ry,
    largeArc: la,
    positive: pos,
    rotation: phi
  });
  let m = TransformationMatrix.identity();
  m = TransformationMatrix.multiply(m, TransformationMatrix.translate(cx, cy));
  m = TransformationMatrix.multiply(m, TransformationMatrix.rotate(phi));
  m = TransformationMatrix.multiply(m, TransformationMatrix.scale(rx, ry));
  m = TransformationMatrix.multiply(transformationMatrix, m);
  const {
    rotate1,
    scale: [sx, sy]
  } = TransformationMatrix.decomposeSvd(m);
  const nRx = Maths.abs(sx);
  const nRy = Maths.abs(sy);
  const nPhi = rotate1;
  const nPos = TransformationMatrix.determinant(transformationMatrix) < 0 ? !pos : pos;
  const [nX1, nY1] = TransformationMatrix.transformCoordinates(transformationMatrix, [x1, y1]);
  const [nX2, nY2] = TransformationMatrix.transformCoordinates(transformationMatrix, [x2, y2]);
  return {
    point1X: nX1,
    point1Y: nY1,
    point2X: nX2,
    point2Y: nY2,
    radiusX: nRx,
    radiusY: nRy,
    largeArc: la,
    positive: nPos,
    rotation: nPhi
  };
}
function centerToEndpointParameterization({
  centerX: cx,
  centerY: cy,
  radiusX: rx,
  radiusY: ry,
  startAngle: sa,
  endAngle: ea,
  positive: pos,
  rotation: phi
}) {
  if (pos && ea - sa >= 2 * Maths.PI || !pos && sa - ea >= 2 * Maths.PI) {
    ea = pos ? sa - ARC_ENDPOINT_FULL_APPROX : sa + ARC_ENDPOINT_FULL_APPROX;
  }

  ea = Angle.simplify(ea);
  sa = Angle.simplify(sa);
  const deltaTheta = pos ? ea > sa ? ea - sa : 2 * Maths.PI - (sa - ea) : sa > ea ? sa - ea : 2 * Maths.PI - (ea - sa);
  const [x1, y1] = Vector2.add(Vector2.rotate(Vector2.scale([rx, ry], Maths.cos(sa), Maths.sin(sa)), phi), [cx, cy]);
  const [x2, y2] = Vector2.add(Vector2.rotate(Vector2.scale([rx, ry], Maths.cos(ea), Maths.sin(ea)), phi), [cx, cy]);
  const la = deltaTheta > Maths.PI ? true : false;
  return {
    point1X: x1,
    point1Y: y1,
    point2X: x2,
    point2Y: y2,
    radiusX: rx,
    radiusY: ry,
    largeArc: la,
    positive: pos,
    rotation: phi
  };
}
function correctRadii(x1, y1, x2, y2, rx, ry, phi) {
  const [x1P, y1P] = Vector2.rotate(Vector2.scalarMultiply([x1 - x2, y1 - y2], 0.5), -phi);
  const lambda = x1P ** 2 / rx ** 2 + y1P ** 2 / ry ** 2;

  if (Maths.greaterThan(lambda, 1, Number.EPSILON)) {
    const s = Maths.sqrt(lambda);
    rx = s * rx, ry = s * ry;
  }

  return [Maths.abs(rx), Maths.abs(ry)];
}
function flexCorrectRadii(x1, y1, x2, y2, rx, ry, phi) {
  const [x1P, y1P] = Vector2.rotate(Vector2.scalarMultiply([x1 - x2, y1 - y2], 0.5), -phi);
  const [minRx, minRy] = [Maths.abs(x1P), Maths.abs(y1P)];
  const lambdaX = minRx ** 2 / rx ** 2;
  const lambdaY = minRy ** 2 / ry ** 2;
  const lambda = lambdaX + lambdaY;
  const lxGt1 = Maths.greaterThan(lambdaX, 1, Number.EPSILON);
  const lyGt1 = Maths.greaterThan(lambdaY, 1, Number.EPSILON);
  const lGt1 = Maths.greaterThan(lambda, 1, Number.EPSILON);

  if (lxGt1 && !lyGt1) {
    const s = Maths.sqrt(1 - lambdaY);
    rx = minRx / s;
  } else if (!lxGt1 && lyGt1) {
    const s = Maths.sqrt(1 - lambdaX);
    ry = minRy / s;
  } else if (lGt1) {
    const s = Maths.sqrt(lambda);
    rx = s * rx, ry = s * ry;
  } else ;

  return [Maths.abs(rx), Maths.abs(ry)];
}
function endpointToCenterParameterization({
  point1X: x1,
  point1Y: y1,
  point2X: x2,
  point2Y: y2,
  radiusX: rx,
  radiusY: ry,
  largeArc: la,
  positive: pos,
  rotation: phi
}) {
  const [x1P, y1P] = Vector2.rotate(Vector2.scalarMultiply([x1 - x2, y1 - y2], 0.5), -phi);
  const sign = la !== pos ? 1 : -1;
  const num = rx ** 2 * ry ** 2 - rx ** 2 * y1P ** 2 - ry ** 2 * x1P ** 2;
  const den = rx ** 2 * y1P ** 2 + ry ** 2 * x1P ** 2;
  const frac = Maths.abs(num / den);
  const [cxP, cyP] = Vector2.scalarMultiply([rx * y1P / ry, -ry * x1P / rx], sign * Maths.sqrt(frac));
  const [cx, cy] = Vector2.add(Vector2.rotate([cxP, cyP], phi), Vector2.scalarMultiply([x1 + x2, y1 + y2], 0.5));
  const sa = Angle.simplify(Vector2.angle([(x1P - cxP) / rx, (y1P - cyP) / ry]));
  const ea = Angle.simplify(Vector2.angle([(-x1P - cxP) / rx, (-y1P - cyP) / ry]));
  return {
    centerX: cx,
    centerY: cy,
    radiusX: rx,
    radiusY: ry,
    startAngle: sa,
    endAngle: ea,
    positive: pos,
    rotation: phi
  };
}

function article(name, adj) {
  const vowels = ["A", "E", "I", "O", "U"];
  const a = adj !== undefined ? vowels.includes(adj[0].toUpperCase()) ? `an ${adj}` : `a ${adj}` : vowels.includes(name[0].toUpperCase()) ? "an" : "a";
  return `${a} \`${name}\``;
}

const alwaysAvailableInstanceMethods = ["dimensionallyDegenerate", "isValid", "toString", "toArray", "toObject", "copyFrom", "getGraphics", "appendVertex", "prependVertex", "appendCommand", "prependCommand"];

function geometryInvalidText(geometryInstance) {
  const name = geometryInstance.name;
  const uuid = geometryInstance.uuid;
  const formingCondition = geometryInstance.constructor.formingCondition;
  return `
        \nPlease check whether the essential properties of the \`${name}\`(${uuid}) have been initialized, and meet the forming conditions. \
        ${formingCondition ? `\nThe forming conditions of ${article(name)} are: ${formingCondition}` : ""} \
        \nWhen \`${article(name)}\`(inherited from \`Geometry\`) is invalid, all of its instance methods cannot be accessed except the following: \
        \`${alwaysAvailableInstanceMethods.join("`, `")}\`, nor can it be passed as an argument to other instance or static methods\`.
    `;
}

function validGeometry(constructor) {
  Object.getOwnPropertyNames(constructor.prototype).forEach(memberName => {
    const name = constructor.name;
    const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, memberName);

    if (Type.isFunction(descriptor.value) && memberName !== "constructor" && !alwaysAvailableInstanceMethods.includes(memberName) && !memberName.startsWith("_") && !memberName.endsWith("_")) {
      const method = descriptor.value;

      descriptor.value = function () {
        if (!this.isValid()) {
          throw new Error(`[G]Calling \`${memberName}\` of ${article(name, "invalid")}: \
                        \n${this}. \
                        \n${geometryInvalidText(this)}`);
        }

        return method.call(this, ...arguments);
      };

      Object.defineProperty(constructor.prototype, memberName, descriptor);
    }
  });
}
function validGeometryArguments(target, propertyKey, descriptor) {
  const method = descriptor.value;

  descriptor.value = function () {
    for (const arg of arguments) {
      if (arg instanceof Geometry && !arg.isValid()) {
        throw new Error(`[G]Calling \`${propertyKey}\` of \`${this.name}\` with ${article(arg.name, "invalid")}: \
                    \n${arg}. \
                    \n${geometryInvalidText(arg)}`);
      }
    }

    return method.call(this, ...arguments);
  };
}

class GeometryGraphics {
  constructor() {
    this.commands = [];
    this.fillRule = "nonzero";
    this._currentXY = [0, 0];
    this._startXY = [0, 0];
  }

  moveTo(x, y) {
    this.commands.push({
      type: GeometryGraphicsCommandType.MoveTo,
      x,
      y
    });
    this._currentXY = [x, y];
    this._startXY = [x, y];
    return this;
  }

  lineTo(x, y) {
    this.commands.push({
      type: GeometryGraphicsCommandType.LineTo,
      x,
      y
    });
    this._currentXY = [x, y];
    return this;
  }

  bezierTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, x, y) {
    this.commands.push({
      type: GeometryGraphicsCommandType.BezierTo,
      controlPoint1X,
      controlPoint1Y,
      controlPoint2X,
      controlPoint2Y,
      x,
      y
    });
    this._currentXY = [x, y];
    return this;
  }

  quadraticBezierTo(controlPointX, controlPointY, x, y) {
    this.commands.push({
      type: GeometryGraphicsCommandType.QuadraticBezierTo,
      controlPointX,
      controlPointY,
      x,
      y
    });
    this._currentXY = [x, y];
    return this;
  }

  centerArcTo(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, positive = true) {
    const {
      point1X,
      point1Y,
      point2X,
      point2Y,
      largeArc
    } = centerToEndpointParameterization({
      centerX,
      centerY,
      radiusX,
      radiusY,
      startAngle,
      endAngle,
      rotation,
      positive
    });

    if (this.commands.length === 0) {
      this.moveTo(point1X, point1Y);
    } else {
      this.lineTo(point1X, point1Y);
    }

    this.commands.push({
      type: GeometryGraphicsCommandType.ArcTo,
      centerX,
      centerY,
      radiusX,
      radiusY,
      startAngle,
      endAngle,
      rotation,
      positive,
      x: point2X,
      y: point2Y,
      largeArc
    });
    this._currentXY = [point2X, point2Y];
    return this;
  }

  endpointArcTo(radiusX, radiusY, rotation, largeArc, positive, x, y) {
    const [point1X, point1Y] = this._currentXY;
    const [point2X, point2Y] = [x, y];
    const {
      centerX,
      centerY,
      startAngle,
      endAngle
    } = endpointToCenterParameterization({
      point1X,
      point1Y,
      point2X,
      point2Y,
      radiusX,
      radiusY,
      largeArc,
      positive,
      rotation
    });
    this.commands.push({
      type: GeometryGraphicsCommandType.ArcTo,
      centerX,
      centerY,
      radiusX,
      radiusY,
      startAngle,
      endAngle,
      rotation,
      positive,
      x: point2X,
      y: point2Y,
      largeArc
    });
    this._currentXY = [point2X, point2Y];
    return this;
  }

  close() {
    this.commands.push({
      type: GeometryGraphicsCommandType.Close
    });
    this._currentXY = this._startXY;
    return this;
  }

  append(g) {
    this.commands = [...this.commands, ...g.commands];
  }

  prepend(g) {
    this.commands = [...g.commands, ...this.commands];
  }

  clear() {
    this.commands = [];
  }

}

class ArrowGraphics {
  constructor(coordinates, angle) {
    this.coordinates = coordinates;
    this.angle = angle;
  }

  getGraphics(viewport) {
    const scale = viewport.density * viewport.zoom;
    const {
      foldback,
      width,
      length,
      noFoldback
    } = optioner.options.graphics.arrow;
    const lengthCoord = Vector2.add(this.coordinates, Vector2.from2(this.angle, -length / scale));
    const wingCoord1 = Vector2.add(lengthCoord, Vector2.from2(this.angle + Maths.PI / 2, width / scale));
    const wingCoord2 = Vector2.add(lengthCoord, Vector2.from2(this.angle - Maths.PI / 2, width / scale));
    const g = new GeometryGraphics();

    if (noFoldback) {
      g.moveTo(...this.coordinates);
      g.lineTo(...wingCoord1);
      g.moveTo(...this.coordinates);
      g.lineTo(...wingCoord2);
    } else {
      const foldbackCoord = Vector2.add(this.coordinates, Vector2.from2(this.angle, -length * (foldback + 1) / scale));
      g.moveTo(...this.coordinates);
      g.lineTo(...wingCoord1);
      g.lineTo(...foldbackCoord);
      g.lineTo(...wingCoord2);
      g.close();
    }

    return g;
  }

}

function getCoordinates(input, parameterName) {
  if (Type.isArray(input)) {
    return Assert.isCoordinates(input, parameterName), input;
  }

  return input.coordinates;
}

var _class$Q;

let Line = validGeometry(_class$Q = class Line extends Geometry {
  constructor(a0, a1, a2) {
    super();
    this._x = NaN;
    this._y = NaN;
    this._slope = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        x: a0,
        y: a1,
        slope: a2
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        coordinates: a0,
        slope: a1
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        point: a0,
        slope: a1
      });
    }
  }

  get events() {
    return {
      xChanged: "x",
      yChanged: "y",
      slopeChanged: "slope",
      angleChanged: "angle"
    };
  }

  _setX(value) {
    if (!Utility.isEqualTo(this._x, value)) this.trigger_(EventObject.simple(this, this.events.xChanged));
    this._x = value;
  }

  _setY(value) {
    if (!Utility.isEqualTo(this._y, value)) this.trigger_(EventObject.simple(this, this.events.yChanged));
    this._y = value;
  }

  _setSlope(value) {
    if (!Utility.isEqualTo(this._slope, value)) {
      this.trigger_(EventObject.simple(this, this.events.slopeChanged));
      this.trigger_(EventObject.simple(this, this.events.angleChanged));
    }

    this._slope = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    Assert.isRealNumber(value, "x");

    this._setX(value);
  }

  get y() {
    return this._y;
  }

  set y(value) {
    Assert.isRealNumber(value, "y");

    this._setY(value);
  }

  get coordinates() {
    return [this._x, this._y];
  }

  set coordinates(value) {
    Assert.isCoordinates(value, "coordinates");

    this._setX(Coordinates.x(value));

    this._setY(Coordinates.y(value));
  }

  get point() {
    return new Point(this._x, this._y);
  }

  set point(value) {
    this._setX(value.x);

    this._setY(value.y);
  }

  get slope() {
    return this._slope;
  }

  set slope(value) {
    Assert.isExtendedRealNumber(value, "slope");
    const s = Maths.abs(value) >= Maths.tan(Maths.PI / 2) ? Infinity : value;

    this._setSlope(s);
  }

  get angle() {
    return Maths.atan(this.slope);
  }

  set angle(value) {
    Assert.isRealNumber(value, "angle");
    const a = Angle.convert2(value);
    const s = a === Maths.PI / 2 ? Infinity : Maths.tan(value);

    this._setSlope(s);
  }

  get yIntercept() {
    const {
      x,
      y,
      slope
    } = this;
    return slope === Infinity ? Infinity : -x * slope + y;
  }

  get xIntercept() {
    const {
      x,
      y,
      slope
    } = this;
    return slope === 0 ? Infinity : -y / slope + x;
  }

  initialized_() {
    return !Number.isNaN(this._x) && !Number.isNaN(this._y) && !Number.isNaN(this._slope);
  }

  static yAxis() {
    return new Line(0, 0, Infinity);
  }

  static xAxis() {
    return new Line(0, 0, 0);
  }

  static yEqualPositiveX() {
    return new Line(0, 0, 1);
  }

  static yEqualNegativeX() {
    return new Line(0, 0, -1);
  }

  static fromTwoPoints(point1, point2, usePoint1 = true) {
    const [x1, y1] = getCoordinates(point1, "point1");
    const [x2, y2] = getCoordinates(point2, "point2");
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo([x1, y1], [x2, y2], epsilon)) {
      console.warn("[G]The points `point1` and `point2` are the same, they can NOT determine a `Line`.");
      return null;
    }

    if (Maths.equalTo(x1, x2, epsilon)) return usePoint1 ? new Line(x1, y1, Infinity) : new Line(x2, y2, Infinity);
    if (Maths.equalTo(y1, y2, epsilon)) return usePoint1 ? new Line(x1, y1, 0) : new Line(x2, y2, 0);
    const slope = (y2 - y1) / (x2 - x1);
    return usePoint1 ? new Line(x1, y1, slope) : new Line(x2, y2, slope);
  }

  static fromPointAndAngle(point, angle) {
    const c = getCoordinates(point, "point");
    const l = new Line();
    l.coordinates = c;
    l.angle = angle;
    return l;
  }

  static fromIntercepts(yIntercept, xIntercept, useYInterceptionPoint = true) {
    const xInt = Maths.abs(xIntercept);
    const yInt = Maths.abs(yIntercept);

    if (xInt === Infinity && yInt === Infinity) {
      console.warn("[G]When the `xIntercept` and `yIntercept` are both `Infinity`, a `Line` can NOT be determined.");
      return null;
    }

    if (xInt === Infinity) return new Line(0, yIntercept, 0);
    if (yInt === Infinity) return new Line(xIntercept, 0, Infinity);
    return Line.fromTwoPoints([0, yIntercept], [xIntercept, 0], useYInterceptionPoint);
  }

  static fromImplicitFunctionCoefs(coefs) {
    const [a, b, c] = coefs;

    if (a === 0 && b === 0) {
      console.warn("[G]The coefs `a` and `b` can not be both equal to 0.");
    }

    if (b === 0) {
      return new Line([-c / a, 0], Infinity);
    }

    const slope = -a / b;
    return new Line([0, -c / b], slope);
  }

  move(deltaX, deltaY) {
    if (deltaX === 0 && deltaY === 0) return this;
    this.coordinates = Vector2.add(this.coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    if (distance === 0) return this;
    this.coordinates = Vector2.add(this.coordinates, Vector2.from2(angle, distance));
    return this;
  }

  getImplicitFunctionCoefs() {
    const {
      x,
      y,
      slope
    } = this;
    if (slope === Infinity) return [-1, 0, x];
    if (slope === 0) return [0, -1, y];
    return [slope, -1, y - slope * x];
  }

  isPointOn(point) {
    const [x, y] = getCoordinates(point, "point");
    const [a, b, c] = this.getImplicitFunctionCoefs();
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(a * x + b * y + c, 0, epsilon);
  }

  isParallelToXAxis() {
    return this.slope === Infinity;
  }

  isParallelToYAxis() {
    return this.slope === 0;
  }

  getXWhereYEqualTo(y) {
    return this.slope === Infinity ? this.x : this.slope === 0 ? NaN : (y - this.y) / this.slope + this.x;
  }

  getYWhereXEqualTo(x) {
    return this.slope === 0 ? this.y : this.slope === Infinity ? NaN : (x - this.x) * this.slope + this.y;
  }

  getPointWhereYEqualTo(y) {
    const x = this.getXWhereYEqualTo(y);
    if (Type.isNaN(x)) return null;
    return new Point(x, y);
  }

  getPointWhereXEqualTo(x) {
    const y = this.getYWhereXEqualTo(x);
    if (Type.isNaN(y)) return null;
    return new Point(x, y);
  }

  isParallelToLine(line) {
    if (this === line) return true;
    if (this.slope === line.slope) return true;
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(this.slope, line.slope, epsilon);
  }

  isCoincidentWith(line) {
    if (this === line) return true;
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(this.slope, line.slope, epsilon) && Maths.equalTo(this.yIntercept, line.yIntercept, epsilon);
  }

  isPerpendicularToLine(line) {
    const epsilon = optioner.options.epsilon;
    if (this.slope === Infinity || Maths.equalTo(line.slope, 0, epsilon)) return true;
    if (line.slope === Infinity || Maths.equalTo(this.slope, 0, epsilon)) return true;
    return Maths.equalTo(this.slope * line.slope, -1, epsilon);
  }

  getIntersectionPointWithLine(line) {
    if (this.isParallelToLine(line)) return null;
    const [a1, b1, c1] = this.getImplicitFunctionCoefs();
    const [a2, b2, c2] = line.getImplicitFunctionCoefs();
    const m = a1 * b2 - a2 * b1;
    const x = (c2 * b1 - c1 * b2) / m;
    const y = (c1 * a2 - c2 * a1) / m;
    return new Point(x, y);
  }

  isIntersectedWithCircle(circle) {
    let epsilon = optioner.options.epsilon;
    return Maths.lessThan(circle.centerPoint.getSquaredDistanceBetweenLine(this), circle.radius ** 2, epsilon);
  }

  getIntersectionPointsWithCircle(circle) {
    if (!this.isIntersectedWithCircle(circle)) return null;
    let p0 = circle.centerPoint,
        r = circle.radius,
        p1 = this.getClosestPointFrom(p0),
        sd = p0.getSquaredDistanceBetweenPoint(p1),
        d1i = Maths.sqrt(r ** 2 - sd),
        a = this.angle,
        ip1 = p1.moveAlongAngle(a, d1i),
        ip2 = p1.moveAlongAngle(a + Maths.PI, d1i);
    return [ip1, ip2];
  }

  isTangentToCircle(circle) {
    let epsilon = optioner.options.epsilon;
    return Maths.equalTo(circle.centerPoint.getSquaredDistanceBetweenLine(this), circle.radius ** 2, epsilon);
  }

  getTangencyPointToCircle(circle) {
    if (!this.isTangentToCircle(circle)) return null;
    return this.getClosestPointFrom(circle.centerPoint);
  }

  isSeparatedFromCircle(circle) {
    let epsilon = optioner.options.epsilon;
    return Maths.greaterThan(circle.centerPoint.getSquaredDistanceBetweenLine(this), circle.radius ** 2, epsilon);
  }

  isParallelToLineSegment(lineSegment) {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = lineSegment;
    const [a, b] = this.getImplicitFunctionCoefs();
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(a * x1 + b * y1, a * x2 + b * y2, epsilon);
  }

  isPerpendicularToLineSegment(lineSegment) {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = lineSegment;
    const [a, b] = this.getImplicitFunctionCoefs();
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(b * x1 - a * y1, b * x2 - a * y2, epsilon);
  }

  isCollinearWithLineSegment(lineSegment) {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = lineSegment;
    const [a, b, c] = this.getImplicitFunctionCoefs();
    const epsilon = optioner.options.epsilon;
    const s1 = Maths.sign(a * x1 + b * y1 + c, epsilon);
    const s2 = Maths.sign(a * x2 + b * y2 + c, epsilon);
    return s1 === 0 && s2 === 0;
  }

  isSeparatedFromLineSegment(lineSegment) {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = lineSegment;
    const [a, b, c] = this.getImplicitFunctionCoefs();
    const epsilon = optioner.options.epsilon;
    const s1 = Maths.sign(a * x1 + b * y1 + c, epsilon);
    const s2 = Maths.sign(a * x2 + b * y2 + c, epsilon);
    return s1 * s2 === 1;
  }

  isIntersectedWithLineSegment(lineSegment) {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = lineSegment;
    const [a, b, c] = this.getImplicitFunctionCoefs();
    const epsilon = optioner.options.epsilon;
    const s1 = Maths.sign(a * x1 + b * y1 + c, epsilon);
    const s2 = Maths.sign(a * x2 + b * y2 + c, epsilon);
    return s1 === 0 !== (s2 === 0) || s1 * s2 === -1;
  }

  getPerpendicularLineFromPoint(point) {
    const k1 = this.slope;
    const [x, y] = getCoordinates(point, "point");
    const k2 = k1 === Infinity ? 0 : k1 === 0 ? Infinity : -1 / k1;
    return new Line(x, y, k2);
  }

  getParallelLineFromPoint(point) {
    const [x, y] = getCoordinates(point, "point");
    return new Line(x, y, this.slope);
  }

  getClosestPointFrom(point) {
    const [a, b, c] = this.getImplicitFunctionCoefs();
    const [x, y] = getCoordinates(point, "point");
    const d = -(a * x + b * y + c) / (a ** 2 + b ** 2);
    return new Point(d * a + x, d * b + y);
  }

  getDistanceToParallelLine(line) {
    if (!this.isParallelToLine(line)) return NaN;
    const [a1, b1, c1] = this.getImplicitFunctionCoefs();
    const [a2, b2, c2] = line.getImplicitFunctionCoefs();
    return Maths.abs(c1 - c2) / Maths.hypot(a1, b1);
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const gbb = viewport.globalViewBox;
    const [a, b, c] = this.getImplicitFunctionCoefs();
    const cs = [];
    const [minX, minY, maxX, maxY] = [Box.minX(gbb), Box.minY(gbb), Box.maxX(gbb), Box.maxY(gbb)];
    const d1 = a * minX + b * minY + c;
    const d2 = a * maxX + b * minY + c;
    const d3 = a * maxX + b * maxY + c;
    const d4 = a * minX + b * maxY + c;
    const lerp1 = d1 / (d1 - d2);
    const lerp2 = d2 / (d2 - d3);
    const lerp3 = d3 / (d3 - d4);
    const lerp4 = d4 / (d4 - d1);
    if (lerp1 >= 0 && lerp1 < 1) cs.push([Maths.lerp(minX, maxX, lerp1), minY]);
    if (lerp2 >= 0 && lerp2 < 1) cs.push([maxX, Maths.lerp(minY, maxY, lerp2)]);
    if (lerp3 >= 0 && lerp3 < 1) cs.push([Maths.lerp(maxX, minX, lerp3), maxY]);
    if (lerp4 >= 0 && lerp4 < 1) cs.push([minX, Maths.lerp(maxY, minY, lerp4)]);
    if (cs.length !== 2) return g;
    const [c1, c2] = cs;
    const a1 = Vector2.angle(Vector2.from(c2, c1));
    const a2 = Vector2.angle(Vector2.from(c1, c2));
    g.moveTo(...c1);
    g.lineTo(...c2);

    if (optioner.options.graphics.lineArrow) {
      const arrowGraphics1 = new ArrowGraphics(c1, a1).getGraphics(viewport);
      const arrowGraphics2 = new ArrowGraphics(c2, a2).getGraphics(viewport);
      g.append(arrowGraphics1);
      g.append(arrowGraphics2);
    }

    return g;
  }

  apply(transformation) {
    const nc = transformation.transformCoordinates(this.coordinates);
    const [a, b, c, d] = transformation.matrix;
    const [nax, nay] = Matrix2.dotVector2([a, c, b, d], [Maths.cos(this.angle), Maths.sin(this.angle)]);
    const ns = nay / nax;
    return new Line(nc, ns);
  }

  clone() {
    return new Line(this.x, this.y, this.slope);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Line();

    this._setX(shape._x);

    this._setY(shape._y);

    this._setSlope(shape._slope);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tx: ${this.x}`, `\ty: ${this.y}`, `\tslope: ${this.slope}`, `}`].join("\n");
  }

  toArray() {
    return [this.x, this.y, this.slope];
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      slope: this.slope
    };
  }

}) || _class$Q;

var _class$P;

let Ray = validGeometry(_class$P = class Ray extends Geometry {
  constructor(a0, a1, a2) {
    super();
    this._x = NaN;
    this._y = NaN;
    this._angle = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        x: a0,
        y: a1,
        angle: a2
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        coordinates: a0,
        angle: a1
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        point: a0,
        angle: a1
      });
    }
  }

  get events() {
    return {
      xChanged: "x",
      yChanged: "y",
      angleChanged: "angle"
    };
  }

  _setX(value) {
    if (!Utility.isEqualTo(this._x, value)) this.trigger_(EventObject.simple(this, this.events.xChanged));
    this._x = value;
  }

  _setY(value) {
    if (!Utility.isEqualTo(this._y, value)) this.trigger_(EventObject.simple(this, this.events.yChanged));
    this._y = value;
  }

  _setAngle(value) {
    if (!Utility.isEqualTo(this._angle, value)) this.trigger_(EventObject.simple(this, this.events.angleChanged));
    this._angle = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    Assert.isRealNumber(value, "x");

    this._setX(value);
  }

  get y() {
    return this._y;
  }

  set y(value) {
    Assert.isRealNumber(value, "y");

    this._setY(value);
  }

  get coordinates() {
    return [this._x, this._y];
  }

  set coordinates(value) {
    Assert.isCoordinates(value, "coordinates");

    this._setX(Coordinates.x(value));

    this._setY(Coordinates.y(value));
  }

  get point() {
    return new Point(this._x, this._y);
  }

  set point(value) {
    this._setX(value.x);

    this._setY(value.y);
  }

  get angle() {
    return this._angle;
  }

  set angle(value) {
    Assert.isRealNumber(value, "angle");

    this._setAngle(value);
  }

  initialized_() {
    return !Number.isNaN(this._x) && !Number.isNaN(this._y) && !Number.isNaN(this._angle);
  }

  isPointOn(point) {
    const epsilon = optioner.options.epsilon;
    const c = getCoordinates(point, "point");
    const vr = Vector2.from2(this.angle, 1);
    const v = Vector2.from(this.coordinates, c);
    const dp = Vector2.dot(vr, v);
    const cp = Vector2.cross(vr, v);
    return !Maths.lessThan(dp, 0, epsilon) && Maths.equalTo(cp, 0, epsilon);
  }

  move(deltaX, deltaY) {
    this.coordinates = Vector2.add(this.coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.coordinates = Vector2.add(this.coordinates, Vector2.from2(angle, distance));
    return this;
  }

  static fromTwoPoints(point1, point2) {
    const c1 = getCoordinates(point1, "point1");
    const c2 = getCoordinates(point2, "point2");
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(c1, c2, epsilon)) {
      console.warn("[G]The points `point1` and `point2` are the same, they can NOT determine a `Ray`.");
      return null;
    }

    const angle = Vector2.angle(Vector2.from(c1, c2));
    return new Ray(c1, angle);
  }

  static getAngleNSectionRaysFromTwoRays(n, ray1, ray2) {
    Assert.condition(Type.isInteger(n) && n > 2, `[G]Got invalid \`n\`:\`${n}\`, which should be an integer and greater than 2.`);
    const {
      coordinates: c1
    } = ray1;
    const {
      coordinates: c2
    } = ray2;
    const epsilon = optioner.options.epsilon;

    if (!Coordinates.isEqualTo(c1, c2, epsilon)) {
      console.warn("[G]The endpoints of the two rays do not coincide. `null` will be returned.");
      return null;
    }

    let a1 = ray1.angle,
        a2 = ray2.angle,
        c = ray1.coordinates,
        d = (a2 - a1) / n,
        ret = [];
    Utility.range(1, n).forEach(index => {
      ret.push(new Ray(c, a1 + d * index));
    });
    return ret;
  }

  getAngleToRay(ray) {
    return Angle.simplify2(this.angle - ray.angle);
  }

  apply(transformation) {
    const nc = transformation.transformCoordinates(this.coordinates);
    const [a, b, c, d] = transformation.matrix;
    const [nax, nay] = Matrix2.dotVector2([a, c, b, d], [Maths.cos(this.angle), Maths.sin(this.angle)]);
    return new Ray(nc, Maths.atan2(nay, nax));
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const gbb = viewport.globalViewBox;
    const epsilon = optioner.options.epsilon;
    const [dx, dy] = Vector2.from2(this.angle, 1);
    const [x, y] = this.coordinates;
    const [minX, minY, maxX, maxY] = [Box.minX(gbb), Box.minY(gbb), Box.maxX(gbb), Box.maxY(gbb)];
    if (dx === 0 && (minX === x || maxX === x)) return g;
    if (dy === 0 && (minY === y || maxY === y)) return g;
    const tMinX = (minX - x) / dx;
    const tMaxX = (maxX - x) / dx;
    const tMinY = (minY - y) / dy;
    const tMaxY = (maxY - y) / dy;
    let tMin = Maths.max(Maths.min(tMinX, tMaxX), Maths.min(tMinY, tMaxY));
    const tMax = Maths.min(Maths.max(tMinX, tMaxX), Maths.max(tMinY, tMaxY));
    tMin = Maths.max(tMin, 0);

    if (!Maths.greaterThan(tMax, tMin, epsilon)) {
      return g;
    }

    const c1 = [x + tMin * dx, y + tMin * dy];
    const c2 = [x + tMax * dx, y + tMax * dy];
    g.moveTo(...c1);
    g.lineTo(...c2);

    if (optioner.options.graphics.rayArrow) {
      const arrowGraphics = new ArrowGraphics(c2, this.angle).getGraphics(viewport);
      g.append(arrowGraphics);
    }

    return g;
  }

  toLine() {
    const {
      coordinates: c,
      angle: a
    } = this;
    return Line.fromPointAndAngle(c, a);
  }

  clone() {
    return new Ray(this.x, this.y, this.angle);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Ray();

    this._setX(shape._x);

    this._setY(shape._y);

    this._setAngle(shape._angle);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tx: ${this.x}`, `\ty: ${this.y}`, `\tangle: ${this.angle}`, `}`].join("\n");
  }

  toArray() {
    return [this.x, this.y, this.angle];
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      angle: this.angle
    };
  }

}) || _class$P;

class PointGraphics {
  constructor(coordinates, type) {
    this.coordinates = coordinates;
    this.type = type;
  }

  getGraphics(viewport) {
    const scale = viewport.density * viewport.zoom;
    const pointSize = optioner.options.graphics.point.size / scale;
    const g = new GeometryGraphics();

    switch (this.type) {
      case "circle":
        {
          g.centerArcTo(...this.coordinates, pointSize, pointSize, 0, 0, 2 * Maths.PI);
          g.close();
          break;
        }

      case "cross":
        {
          const adjustSize = Maths.sqrt(Maths.PI * pointSize ** 2) / 2;
          g.moveTo(...Vector2.add(this.coordinates, [-adjustSize, -adjustSize]));
          g.lineTo(...Vector2.add(this.coordinates, [adjustSize, adjustSize]));
          g.moveTo(...Vector2.add(this.coordinates, [-adjustSize, adjustSize]));
          g.lineTo(...Vector2.add(this.coordinates, [adjustSize, -adjustSize]));
          break;
        }

      case "plus":
        {
          g.moveTo(...Vector2.add(this.coordinates, [0, -pointSize]));
          g.lineTo(...Vector2.add(this.coordinates, [0, pointSize]));
          g.moveTo(...Vector2.add(this.coordinates, [-pointSize, 0]));
          g.lineTo(...Vector2.add(this.coordinates, [pointSize, 0]));
          break;
        }

      case "square":
        {
          const adjustSize = Maths.sqrt(Maths.PI * pointSize ** 2) / 2;
          g.moveTo(...Vector2.add(this.coordinates, [-adjustSize, -adjustSize]));
          g.lineTo(...Vector2.add(this.coordinates, [-adjustSize, adjustSize]));
          g.lineTo(...Vector2.add(this.coordinates, [adjustSize, adjustSize]));
          g.lineTo(...Vector2.add(this.coordinates, [adjustSize, -adjustSize]));
          g.close();
          break;
        }

      case "diamond":
        {
          g.moveTo(...Vector2.add(this.coordinates, [0, -pointSize]));
          g.lineTo(...Vector2.add(this.coordinates, [-pointSize, 0]));
          g.lineTo(...Vector2.add(this.coordinates, [0, pointSize]));
          g.lineTo(...Vector2.add(this.coordinates, [pointSize, 0]));
          g.close();
          break;
        }

      default:
        {
          throw new Error("[G]Invalid point appearance.");
        }
    }

    return g;
  }

}

var _class$O;

let Point = validGeometry(_class$O = class Point extends Geometry {
  constructor(a0, a1, a2) {
    super();
    this._x = NaN;
    this._y = NaN;
    this.appearance = optioner.options.graphics.point.appearance;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        x: a0,
        y: a1,
        appearance: a2 != null ? a2 : this.appearance
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        coordinates: a0,
        appearance: a1 != null ? a1 : this.appearance
      });
    }
  }

  get events() {
    return {
      xChanged: "x",
      yChanged: "y"
    };
  }

  _setX(value) {
    if (!Utility.isEqualTo(this._x, value)) this.trigger_(EventObject.simple(this, this.events.xChanged));
    this._x = value;
  }

  _setY(value) {
    if (!Utility.isEqualTo(this._y, value)) this.trigger_(EventObject.simple(this, this.events.yChanged));
    this._y = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    Assert.isRealNumber(value, "x");

    this._setX(value);
  }

  get y() {
    return this._y;
  }

  set y(value) {
    Assert.isRealNumber(value, "y");

    this._setY(value);
  }

  get coordinates() {
    return [this._x, this._y];
  }

  set coordinates(value) {
    Assert.isCoordinates(value, "coordinates");

    this._setX(Coordinates.x(value));

    this._setY(Coordinates.y(value));
  }

  initialized_() {
    return !Number.isNaN(this._x) && !Number.isNaN(this._y);
  }

  move(deltaX, deltaY) {
    this.coordinates = Vector2.add(this.coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.coordinates = Vector2.add(this.coordinates, Vector2.from2(angle, distance));
    return this;
  }

  static origin() {
    return new Point(0, 0);
  }

  static random(box) {
    const x = Box.x(box) + Maths.random() * Box.width(box);
    const y = Box.y(box) + Maths.random() * Box.height(box);
    return new Point(x, y);
  }

  equalTo(point) {
    const c = getCoordinates(point, "point");
    return Coordinates.isEqualTo(this.coordinates, c, optioner.options.epsilon);
  }

  static isThreePointsCollinear(point1, point2, point3) {
    const c1 = getCoordinates(point1, "point1");
    const c2 = getCoordinates(point2, "point2");
    const c3 = getCoordinates(point3, "point3");
    const v1 = Vector2.from(c1, c2);
    const v2 = Vector2.from(c1, c3);
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(Vector2.cross(v1, v2), 0, epsilon);
  }

  static isFourPointsCollinear(point1, point2, point3, point4) {
    const c1 = getCoordinates(point1, "point1");
    const c2 = getCoordinates(point2, "point2");
    const c3 = getCoordinates(point3, "point3");
    const c4 = getCoordinates(point4, "point4");
    const v1 = Vector2.from(c1, c2);
    const v2 = Vector2.from(c1, c3);
    const v3 = Vector2.from(c1, c4);
    const epsilon = optioner.options.epsilon;
    const cp1 = Vector2.cross(v1, v2);
    const cp2 = Vector2.cross(v1, v3);
    const cp3 = Vector2.cross(v2, v3);
    return Maths.equalTo(cp1, 0, epsilon) && Maths.equalTo(cp2, 0, epsilon) && Maths.equalTo(cp3, 0, epsilon);
  }

  static getAngleNEquallyDividingRaysFromThreePoints(n, vertex, leg1, leg2) {
    if (!Type.isInteger(n) || n < 2) {
      throw new Error(`[G]\`n\` should be an integer and not less than 2, but we got \`${n}\`.`);
    }

    const [c0, c1, c2] = [vertex.coordinates, leg1.coordinates, leg2.coordinates];
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(c0, c1, epsilon) || Coordinates.isEqualTo(c0, c2, epsilon) || Coordinates.isEqualTo(c1, c2, epsilon)) {
      console.warn("[G]The points `vertex`, `leg1`, `leg2` are the same, there is no angle formed by them.");
      return null;
    }

    const a1 = Vector2.angle(Vector2.from(c0, c1));
    const a2 = Vector2.angle(Vector2.from(c0, c1));
    const d = (a2 - a1) / n;
    return Utility.range(1, n).map(i => new Ray(vertex.coordinates, a1 + d * i));
  }

  static isFourPointsConcyclic(point1, point2, point3, point4) {}

  static fromVector(vector) {
    return new Point(vector.point2Coordinates);
  }

  getDistanceBetweenPoint(point) {
    return Vector2.magnitude(Vector2.from(this.coordinates, point.coordinates));
  }

  getSquaredDistanceBetweenPoint(point) {
    return Vector2.squaredMagnitude(Vector2.from(this.coordinates, point.coordinates));
  }

  getDistanceBetweenLine(line) {
    return Maths.abs(this.getSignedDistanceBetweenLine(line));
  }

  getSignedDistanceBetweenLine(line) {
    const [a, b, c] = line.getImplicitFunctionCoefs();
    const {
      x,
      y
    } = this;
    return (a * x + b * y + c) / Maths.hypot(a, b);
  }

  getSquaredDistanceBetweenLine(line) {
    const [a, b, c] = line.getImplicitFunctionCoefs();
    const {
      x,
      y
    } = this;
    return (a * x + b * y + c) ** 2 / (a ** 2 + b ** 2);
  }

  getDistanceBetweenLineSegment(lineSegment) {
    return Maths.abs(this.getSignedDistanceBetweenLineSegment(lineSegment));
  }

  getSignedDistanceBetweenLineSegment(lineSegment) {
    const c = this.coordinates;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = lineSegment;
    const v12 = Vector2.from(c1, c2);
    const v10 = Vector2.from(c1, c);
    return Vector2.cross(v12, v10) / Vector2.magnitude(Vector2.from(c1, c2));
  }

  getSquaredDistanceBetweenLineSegment(lineSegment) {
    const c = this.coordinates;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = lineSegment;
    const v12 = Vector2.from(c1, c2);
    const v10 = Vector2.from(c1, c);
    return Vector2.cross(v12, v10) ** 2 / Vector2.squaredMagnitude(Vector2.from(c1, c2));
  }

  isBetweenPoints(point1, point2, allowEqual = true) {
    const c0 = this.coordinates;
    const c1 = getCoordinates(point1, "point1");
    const c2 = getCoordinates(point2, "point2");
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(c1, c2, epsilon)) {
      console.warn("[G]`point1` and `point2` are the same. `false` will be returned");
      return false;
    }

    const v12 = Vector2.from(c1, c2);
    const v10 = Vector2.from(c1, c0);
    const cp = Vector2.cross(v10, v12);
    const dp = Vector2.dot(v10, v12);
    const sm = Vector2.squaredMagnitude(v12);

    if (allowEqual) {
      return Maths.equalTo(cp, 0, epsilon) && !Maths.lessThan(dp, 0, epsilon) && !Maths.greaterThan(dp, sm, epsilon);
    }

    return Maths.equalTo(cp, 0, epsilon) && Maths.greaterThan(dp, 0, epsilon) && Maths.lessThan(dp, sm, epsilon);
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    g.append(new PointGraphics(this.coordinates, this.appearance).getGraphics(viewport));
    return g;
  }

  apply(transformation) {
    const nc = transformation.transformCoordinates(this.coordinates);
    return new Point(nc);
  }

  clone() {
    return new Point(this._x, this._y);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Point();

    this._setX(shape._x);

    this._setY(shape._y);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tx: ${this.x}`, `\ty: ${this.y}`, `}`].join("\n");
  }

  toArray() {
    return [this.x, this.y];
  }

  toObject() {
    return {
      x: this.x,
      y: this.y
    };
  }

}) || _class$O;

var _class$N, _class2$6, _class3;

let LineSegment = validGeometry(_class$N = (_class2$6 = (_class3 = class LineSegment extends Geometry {
  constructor(a0, a1, a2, a3) {
    super();
    this._point1X = NaN;
    this._point1Y = NaN;
    this._point2X = NaN;
    this._point2Y = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        point1X: a0,
        point1Y: a1,
        point2X: a2,
        point2Y: a3
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        point1Coordinates: a0,
        point2Coordinates: a1
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        point1: a0,
        point2: a1
      });
    }
  }

  get events() {
    return {
      point1XChanged: "point1X",
      point1YChanged: "point1Y",
      point2XChanged: "point2X",
      point2YChanged: "point2Y",
      angleChanged: "angle"
    };
  }

  _setPoint1X(value) {
    if (!Utility.isEqualTo(this._point1X, value)) {
      this.trigger_(EventObject.simple(this, this.events.point1XChanged));
      this.trigger_(EventObject.simple(this, this.events.angleChanged));
    }

    this._point1X = value;
  }

  _setPoint1Y(value) {
    if (!Utility.isEqualTo(this._point1Y, value)) {
      this.trigger_(EventObject.simple(this, this.events.point1YChanged));
      this.trigger_(EventObject.simple(this, this.events.angleChanged));
    }

    this._point1Y = value;
  }

  _setPoint2X(value) {
    if (!Utility.isEqualTo(this._point2X, value)) {
      this.trigger_(EventObject.simple(this, this.events.point2XChanged));
      this.trigger_(EventObject.simple(this, this.events.angleChanged));
    }

    this._point2X = value;
  }

  _setPoint2Y(value) {
    if (!Utility.isEqualTo(this._point2Y, value)) {
      this.trigger_(EventObject.simple(this, this.events.point2YChanged));
      this.trigger_(EventObject.simple(this, this.events.angleChanged));
    }

    this._point2Y = value;
  }

  get point1X() {
    return this._point1X;
  }

  set point1X(value) {
    Assert.isRealNumber(value, "point1X");

    this._setPoint1X(value);
  }

  get point1Y() {
    return this._point1Y;
  }

  set point1Y(value) {
    Assert.isRealNumber(value, "point1Y");

    this._setPoint1Y(value);
  }

  get point1Coordinates() {
    return [this._point1X, this._point1Y];
  }

  set point1Coordinates(value) {
    Assert.isCoordinates(value, "point1Coordinates");

    this._setPoint1X(Coordinates.x(value));

    this._setPoint1Y(Coordinates.y(value));
  }

  get point1() {
    return new Point(this._point1X, this._point1Y);
  }

  set point1(value) {
    this._setPoint1X(value.x);

    this._setPoint1Y(value.y);
  }

  get point2X() {
    return this._point2X;
  }

  set point2X(value) {
    Assert.isRealNumber(value, "point2X");

    this._setPoint2X(value);
  }

  get point2Y() {
    return this._point2Y;
  }

  set point2Y(value) {
    Assert.isRealNumber(value, "point2Y");

    this._setPoint2Y(value);
  }

  get point2Coordinates() {
    return [this._point2X, this._point2Y];
  }

  set point2Coordinates(value) {
    Assert.isCoordinates(value, "point2Coordinates");

    this._setPoint2X(Coordinates.x(value));

    this._setPoint2Y(Coordinates.y(value));
  }

  get point2() {
    return new Point(this._point2X, this._point2Y);
  }

  set point2(value) {
    this._setPoint2X(value.x);

    this._setPoint2Y(value.y);
  }

  get angle() {
    return Vector2.angle(Vector2.from(this.point1Coordinates, this.point2Coordinates));
  }

  set angle(value) {
    Assert.isRealNumber(value, "angle");
    const nc2 = Vector2.add(this.point1Coordinates, Vector2.from2(value, this.getLength()));

    this._setPoint2X(Coordinates.x(nc2));

    this._setPoint2Y(Coordinates.y(nc2));
  }

  initialized_() {
    return !Number.isNaN(this._point1X) && !Number.isNaN(this._point1Y) && !Number.isNaN(this._point2X) && !Number.isNaN(this._point2Y);
  }

  dimensionallyDegenerate() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    return Coordinates.isEqualTo(c1, c2, optioner.options.epsilon);
  }

  move(deltaX, deltaY) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, [deltaX, deltaY]);
    this.point2Coordinates = Vector2.add(this.point2Coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, Vector2.from2(angle, distance));
    this.point2Coordinates = Vector2.add(this.point2Coordinates, Vector2.from2(angle, distance));
    return this;
  }

  static fromPointAndAngleAndLength(point, angle, length) {
    if (Maths.equalTo(length, 0, optioner.options.epsilon)) return null;
    const c1 = getCoordinates(point, "point");
    const c2 = Vector2.add(c1, Vector2.from2(angle, length));
    return new LineSegment(c1, c2);
  }

  isPointOn(point) {
    const c = getCoordinates(point, "point");
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const v12 = Vector2.from(c1, c2);
    const v10 = Vector2.from(c1, c);
    const cp = Vector2.cross(v10, v12);
    const dp = Vector2.dot(v10, v12);
    const sm = Vector2.squaredMagnitude(v12);
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(cp, 0, epsilon) && !Maths.lessThan(dp, 0, epsilon) && !Maths.greaterThan(dp, sm, epsilon);
  }

  reverse() {
    [this.point1Coordinates, this.point2Coordinates] = [this.point2Coordinates, this.point1Coordinates];
  }

  getLength() {
    return Vector2.magnitude(Vector2.from(this.point1Coordinates, this.point2Coordinates));
  }

  getPolynomial() {
    const {
      point1Coordinates: [x0, y0],
      point2Coordinates: [x1, y1]
    } = this;
    const m = [-1, 1, 1, 0];
    const polyX = Matrix2.dotVector2(m, [x0, x1]);
    const polyY = Matrix2.dotVector2(m, [y0, y1]);
    return [polyX, polyY];
  }

  getParametricEquation() {
    const [polyX, polyY] = this.getPolynomial();
    return function (t) {
      const x = Polynomial.evaluate(polyX, t);
      const y = Polynomial.evaluate(polyY, t);
      return [x, y];
    };
  }

  getImplicitFunctionCoefs() {
    const {
      point1Coordinates: [x0, y0],
      point2Coordinates: [x1, y1]
    } = this;
    const a = y1 - y0;
    const b = x0 - x1;
    const c = x0 * (y0 - y1) + y0 * (x1 - x0);
    return [a, b, c];
  }

  getClosestPointFrom(point) {
    const [x, y] = getCoordinates(point, "point");
    const [polyX, polyY] = this.getPolynomial();
    let polyXM = Polynomial.add(polyX, [-x]);
    let polyYM = Polynomial.add(polyY, [-y]);
    polyXM = Polynomial.multiply(polyXM, polyXM);
    polyYM = Polynomial.multiply(polyYM, polyYM);
    const polySquaredDistance = Polynomial.add(polyXM, polyYM);
    const polyD1 = Polynomial.derivative(polySquaredDistance);
    const ts = Polynomial.roots(polyD1).filter(r => Type.isNumber(r) && r > 0 && r < 1);
    ts.push(0, 1);
    let minT = Infinity;
    let minSd = Infinity;
    ts.forEach(t => {
      const sd = Polynomial.evaluate(polySquaredDistance, t);

      if (sd < minSd) {
        minSd = sd;
        minT = t;
      }
    });
    return new Point(Polynomial.evaluate(polyX, minT), Polynomial.evaluate(polyY, minT));
  }

  getMiddlePoint() {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = this;
    return new Point((x1 + x2) / 2, (y1 + y2) / 2);
  }

  getPerpendicularlyBisectingLine() {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = this;
    return new Line(this.getMiddlePoint(), (x1 - x2) / (y1 - y2));
  }

  isPerpendicularToLineSegment(lineSegment) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const {
      point1Coordinates: c3,
      point2Coordinates: c4
    } = lineSegment;
    const v12 = Vector2.from(c1, c2);
    const v34 = Vector2.from(c3, c4);
    const dp = Vector2.dot(v12, v34);
    return Maths.equalTo(dp, 0, optioner.options.epsilon);
  }

  isParallelToLineSegment(lineSegment) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const {
      point1Coordinates: c3,
      point2Coordinates: c4
    } = lineSegment;
    const v12 = Vector2.from(c1, c2);
    const v34 = Vector2.from(c3, c4);
    const cp = Vector2.cross(v12, v34);
    return Maths.equalTo(cp, 0, optioner.options.epsilon);
  }

  isCollinearWithLineSegment(lineSegment) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const {
      point1Coordinates: c3,
      point2Coordinates: c4
    } = lineSegment;
    const v12 = Vector2.from(c1, c2);
    const v34 = Vector2.from(c3, c4);
    const v32 = Vector2.from(c3, c2);
    const cp1 = Vector2.cross(v12, v34);
    const cp2 = Vector2.cross(v32, v34);
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(cp1, 0, epsilon) && Maths.equalTo(cp2, 0, epsilon);
  }

  splitAtTimes(times) {
    Assert.condition(times.every(t => t > 0 && t < 1), "[G]The `times` should all be a number between 0(not including) and 1(not including).");
    const ret = [];
    times = Utility.sortBy(Utility.uniqWith(times, (a, b) => Maths.equalTo(a, b, optioner.options.epsilon)), [n => n]);
    [0, ...times, 1].forEach((_, index, arr) => {
      if (index !== arr.length - 1) {
        ret.push(this.portionOfExtend(arr[index], arr[index + 1]));
      }
    });
    return ret;
  }

  splitAtTime(t) {
    Assert.condition(Maths.between(t, 0, 1, true, true, optioner.options.epsilon), "[G]The `t` should be a number between 0(not including) and 1(not including).");
    return [this.portionOfExtend(0, t), this.portionOfExtend(t, 1)];
  }

  portionOf(t1, t2) {
    const epsilon = optioner.options.epsilon;
    Assert.condition(Maths.between(t1, 0, 1, false, false, epsilon), "[G]The `t1` should be a number between 0(including) and 1(including).");
    Assert.condition(Maths.between(t2, 0, 1, false, false, epsilon), "[G]The `t2` should be a number between 0(including) and 1(including).");
    Assert.condition(!Maths.equalTo(t1, t2, epsilon), "[G]The `t1` and `t2` should not be equal.");
    return this.portionOfExtend(t1, t2);
  }

  portionOfExtend(t1, t2) {
    Assert.isRealNumber(t1, "t1");
    Assert.isRealNumber(t2, "t2");
    Assert.condition(!Maths.equalTo(t1, t2, optioner.options.epsilon), "[G]The `t1` and `t2` should not be equal.");
    if (t1 > t2) [t1, t2] = [t2, t1];
    const [polyX, polyY] = this.getPolynomial();
    const xs = [Polynomial.evaluate(polyX, t1), Polynomial.evaluate(polyX, t2)];
    const ys = [Polynomial.evaluate(polyY, t1), Polynomial.evaluate(polyY, t2)];
    return new LineSegment(xs[0], ys[0], xs[1], ys[1]);
  }

  getBoundingBox() {
    return Box.from(this.point1Coordinates, this.point2Coordinates);
  }

  getTangentVectorAtTime(t, normalized = false) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    const c = this.getParametricEquation()(t);
    const tv = [Polynomial.evaluate(polyXD, t), Polynomial.evaluate(polyYD, t)];
    return normalized ? new Vector(c, Vector2.normalize(tv)) : new Vector(c, tv);
  }

  getNormalUnitVectorAtTime(t, normalized = false) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    const tv = [Polynomial.evaluate(polyXD, t), Polynomial.evaluate(polyYD, t)];
    const c = this.getParametricEquation()(t);
    const nv = Vector2.rotate(tv, Maths.PI / 2);
    return normalized ? new Vector(c, Vector2.normalize(nv)) : new Vector(c, nv);
  }

  getCurvatureAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    return 0;
  }

  getOsculatingCircleAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    return null;
  }

  getPointAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [x, y] = this.getParametricEquation()(t);
    return new Point(x, y);
  }

  getPointAtTimeExtend(t) {
    Assert.isExtendedRealNumber(t, "t");
    const [x, y] = this.getParametricEquation()(t);
    return new Point(x, y);
  }

  getTimeOfPoint(point) {
    const t = this.getTimeOfPointExtend(point);
    if (Maths.between(t, 0, 1, false, false, optioner.options.epsilon)) return Maths.clamp(t, 0, 1);
    return NaN;
  }

  getTimeOfPointExtend(point) {
    const [x, y] = getCoordinates(point, "point");
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const [a, b, c] = this.getImplicitFunctionCoefs();
    if (!Maths.equalTo(a * x + b * y + c, 0, optioner.options.epsilon)) return NaN;
    const v10 = Vector2.from(c1, [x, y]);
    const v12 = Vector2.from(c1, c2);
    const sign = Vector2.dot(v10, v12) < 0 ? -1 : 1;
    return sign * Vector2.magnitude(v10) / Vector2.magnitude(v12);
  }

  toLine() {
    return Line.fromTwoPoints(this.point1Coordinates, this.point2Coordinates);
  }

  toVector() {
    return Vector.fromTwoPoints(this.point1Coordinates, this.point2Coordinates);
  }

  toPath(closed = false) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const path = new Path();
    path.appendCommand(Path.moveTo(c1));
    path.appendCommand(Path.lineTo(c2));
    path.closed = closed;
    return path;
  }

  apply(transformation) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const nc1 = transformation.transformCoordinates(c1);
    const nc2 = transformation.transformCoordinates(c2);
    return new LineSegment(nc1, nc2);
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    g.moveTo(...c1);
    g.lineTo(...c2);
    return g;
  }

  clone() {
    return new LineSegment(this.point1X, this.point1Y, this.point2X, this.point2Y);
  }

  copyFrom(shape) {
    if (shape === null) shape = new LineSegment();

    this._setPoint1X(shape._point1X);

    this._setPoint1Y(shape._point1Y);

    this._setPoint2X(shape._point2X);

    this._setPoint2Y(shape._point2Y);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tpoint1X: ${this.point1X},`, `\tpoint1Y: ${this.point1Y},`, `\tpoint2X: ${this.point2X},`, `\tpoint2Y: ${this.point2Y}`, `}`].join("\n");
  }

  toArray() {
    return [this.point1X, this.point1Y, this.point2X, this.point2Y];
  }

  toObject() {
    return {
      point1X: this.point1X,
      point1Y: this.point1Y,
      point2X: this.point2X,
      point2Y: this.point2Y
    };
  }

}, _class3.formingCondition = "The two endpoints of a `LineSegment` should be distinct, or the length of a `LineSegment` should greater than 0.", _class3), (_applyDecoratedDescriptor(_class2$6.prototype, "dimensionallyDegenerate", [stated], Object.getOwnPropertyDescriptor(_class2$6.prototype, "dimensionallyDegenerate"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "getPolynomial", [stated], Object.getOwnPropertyDescriptor(_class2$6.prototype, "getPolynomial"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "getParametricEquation", [stated], Object.getOwnPropertyDescriptor(_class2$6.prototype, "getParametricEquation"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "getImplicitFunctionCoefs", [stated], Object.getOwnPropertyDescriptor(_class2$6.prototype, "getImplicitFunctionCoefs"), _class2$6.prototype), _applyDecoratedDescriptor(_class2$6.prototype, "getBoundingBox", [stated], Object.getOwnPropertyDescriptor(_class2$6.prototype, "getBoundingBox"), _class2$6.prototype)), _class2$6)) || _class$N;

var _class$M;

let Vector = validGeometry(_class$M = class Vector extends Geometry {
  constructor(a0, a1, a2, a3) {
    super();
    this._x = NaN;
    this._y = NaN;
    this._point1X = 0;
    this._point1Y = 0;

    if (Type.isNumber(a0)) {
      if (Type.isNumber(a2)) {
        Object.assign(this, {
          point1X: a0,
          point1Y: a1,
          x: a2,
          y: a3
        });
      } else {
        Object.assign(this, {
          x: a0,
          y: a1
        });
      }
    }

    if (Type.isArray(a0)) {
      if (Type.isArray(a1)) {
        Object.assign(this, {
          point1Coordinates: a0,
          coordinates: a1
        });
      } else {
        Object.assign(this, {
          coordinates: a0
        });
      }
    }

    if (a0 instanceof Point) {
      if (a1 instanceof Point) {
        Object.assign(this, {
          point1: a0,
          point: a1
        });
      } else {
        Object.assign(this, {
          point: a0
        });
      }
    }
  }

  get events() {
    return {
      xChanged: "x",
      yChanged: "y",
      point1XChanged: "point1X",
      point1YChanged: "point1Y",
      point2XChanged: "point2X",
      point2YChanged: "point2Y"
    };
  }

  _setX(value) {
    if (!Utility.isEqualTo(this._x, value)) {
      this.trigger_(EventObject.simple(this, this.events.xChanged));
      this.trigger_(EventObject.simple(this, this.events.point2XChanged));
    }

    this._x = value;
  }

  _setY(value) {
    if (!Utility.isEqualTo(this._y, value)) {
      this.trigger_(EventObject.simple(this, this.events.yChanged));
      this.trigger_(EventObject.simple(this, this.events.point2YChanged));
    }

    this._y = value;
  }

  _setPoint1X(value) {
    if (!Utility.isEqualTo(this._point1X, value)) this.trigger_(EventObject.simple(this, this.events.point1XChanged));
    this._point1X = value;
  }

  _setPoint1Y(value) {
    if (!Utility.isEqualTo(this._point1Y, value)) this.trigger_(EventObject.simple(this, this.events.point1YChanged));
    this._point1Y = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    Assert.isRealNumber(value, "x");

    this._setX(value);
  }

  get y() {
    return this._y;
  }

  set y(value) {
    Assert.isRealNumber(value, "y");

    this._setY(value);
  }

  get coordinates() {
    return [this._x, this._y];
  }

  set coordinates(value) {
    Assert.isCoordinates(value, "coordinates");

    this._setX(Coordinates.x(value));

    this._setY(Coordinates.y(value));
  }

  get point() {
    return new Point(this._x, this._y);
  }

  set point(value) {
    this._setX(value.x);

    this._setY(value.y);
  }

  get point1X() {
    return this._point1X;
  }

  set point1X(value) {
    Assert.isRealNumber(value, "point1X");

    this._setPoint1X(value);
  }

  get point1Y() {
    return this._point1Y;
  }

  set point1Y(value) {
    Assert.isRealNumber(value, "point1Y");

    this._setPoint1Y(value);
  }

  get point1Coordinates() {
    return [this._point1X, this._point1Y];
  }

  set point1Coordinates(value) {
    Assert.isCoordinates(value, "point1Coordinates");

    this._setPoint1X(Coordinates.x(value));

    this._setPoint1Y(Coordinates.y(value));
  }

  get point1() {
    return new Point(this._point1X, this._point1Y);
  }

  set point1(value) {
    this._setPoint1X(value.x);

    this._setPoint1Y(value.y);
  }

  get point2X() {
    return Coordinates.x(this.point1Coordinates) + Coordinates.x(this.coordinates);
  }

  set point2X(value) {
    Assert.isRealNumber(value, "point2X");

    this._setX(value - Coordinates.x(this.point1Coordinates));
  }

  get point2Y() {
    return Coordinates.y(this.point1Coordinates) + Coordinates.y(this.coordinates);
  }

  set point2Y(value) {
    Assert.isRealNumber(value, "point2Y");

    this._setX(value - Coordinates.y(this.point1Coordinates));
  }

  get point2Coordinates() {
    return Vector2.add(this.point1Coordinates, this.coordinates);
  }

  set point2Coordinates(value) {
    Assert.isCoordinates(value, "point2Coordinates");
    const c = Vector2.from(this.point1Coordinates, value);

    this._setX(Coordinates.x(c));

    this._setY(Coordinates.y(c));
  }

  get point2() {
    return new Point(Vector2.add(this.point1Coordinates, this.coordinates));
  }

  set point2(value) {
    const c = Vector2.from(this.point1Coordinates, value.coordinates);

    this._setX(Coordinates.x(c));

    this._setY(Coordinates.y(c));
  }

  get angle() {
    return Angle.simplify2(Vector2.angle(this.coordinates));
  }

  get magnitude() {
    return Vector2.magnitude(this.coordinates);
  }

  initialized_() {
    return !Number.isNaN(this._x) && !Number.isNaN(this._y);
  }

  move(deltaX, deltaY) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, Vector2.from2(angle, distance));
    return this;
  }

  static zero() {
    return new Vector(0, 0);
  }

  static fromAngleAndMagnitude(angle, magnitude) {
    return new Vector(Vector2.from2(angle, magnitude));
  }

  static fromTwoPoints(point1, point2) {
    const c1 = getCoordinates(point1, "point1");
    const c2 = getCoordinates(point2, "point2");
    return new Vector(c1, Vector2.from(c1, c2));
  }

  getAngleToVector(vector) {
    return Angle.simplify2(this.angle - vector.angle);
  }

  standardize() {
    return this.clone().standardizeSelf();
  }

  standardizeSelf() {
    this.point1Coordinates = [0, 0];
  }

  getProportionOfPoint(point) {
    const c = getCoordinates(point, "point");
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const epsilon = optioner.options.epsilon;
    const l = this.toLine();
    if (l === null || l.isPointOn(c)) return NaN;
    if (Coordinates.isEqualTo(c, c1, epsilon)) return 0;
    if (Coordinates.isEqualTo(c, c2, epsilon)) return Infinity;
    const v10 = Vector2.from(c1, c);
    const v02 = Vector2.from(c, c2);
    const sign = Vector2.dot(v10, v02) < 0 ? -1 : 1;
    return sign * Vector2.magnitude(v10) / Vector2.magnitude(v02);
  }

  getPointAtProportion(lambda) {
    if (lambda === -1) return null;
    if (Maths.abs(lambda) === Infinity) return this.point2.clone();
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const c = Vector2.scalarMultiply(Vector2.add(c1, Vector2.scalarMultiply(c2, lambda)), 1 / (1 + lambda));
    return new Point(c);
  }

  toPoint() {
    return new Point(this.coordinates);
  }

  toLine() {
    const epsilon = optioner.options.epsilon;
    if (Coordinates.isEqualTo(this.coordinates, [0, 0], epsilon)) return null;
    return Line.fromTwoPoints(this.point1Coordinates, this.point2Coordinates);
  }

  toRay() {
    const epsilon = optioner.options.epsilon;
    if (Coordinates.isEqualTo(this.coordinates, [0, 0], epsilon)) return null;
    return new Ray(this.point1Coordinates, this.angle);
  }

  toLineSegment() {
    const epsilon = optioner.options.epsilon;
    if (Coordinates.isEqualTo(this.coordinates, [0, 0], epsilon)) return null;
    return new LineSegment(this.point1Coordinates, this.point2Coordinates);
  }

  dotProduct(vector) {
    return Vector2.dot(this.coordinates, vector.coordinates);
  }

  crossProduct(vector) {
    return Vector2.cross(this.coordinates, vector.coordinates);
  }

  normalize() {
    return new Vector(this.point1Coordinates, Vector2.normalize(this.coordinates));
  }

  add(vector) {
    return new Vector(this.point1Coordinates, Vector2.add(this.coordinates, vector.coordinates));
  }

  subtract(vector) {
    return new Vector(this.point1Coordinates, Vector2.subtract(this.coordinates, vector.coordinates));
  }

  scalarMultiply(scalar) {
    return new Vector(this.point1Coordinates, Vector2.scalarMultiply(this.coordinates, scalar));
  }

  negative() {
    return new Vector(this.point1Coordinates, Vector2.negative(this.coordinates));
  }

  rotate(angle) {
    return new Vector(this.point1Coordinates, Vector2.rotate(this.coordinates, angle));
  }

  apply(transformation) {
    const nc = transformation.transformCoordinates(this.coordinates);
    const nc1 = transformation.transformCoordinates(this.point1Coordinates);
    return new Vector(nc1, nc);
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    g.moveTo(...c1);
    g.lineTo(...c2);
    const arrowGraphics = new ArrowGraphics(c2, this.angle).getGraphics(viewport);
    g.append(arrowGraphics);
    return g;
  }

  clone() {
    return new Vector(this.point1X, this.point1Y, this.point2X, this.point2Y);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Vector();

    this._setX(shape._x);

    this._setY(shape._y);

    this._setPoint1X(shape._point1X);

    this._setPoint1Y(shape._point1Y);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tx: ${this.x}`, `\ty: ${this.y}`, `\tpoint1X: ${this.point1X}`, `\tpoint1Y: ${this.point1Y}`, `}`].join("\n");
  }

  toArray() {
    return [this.x, this.y, this.point1X, this.point1Y];
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      point1X: this.point1X,
      point1Y: this.point1Y
    };
  }

}) || _class$M;

var _class$L;
const INVERSION_DEFAULT_POWER = 10000;
let Inversion = (_class$L = class Inversion extends EventTarget {
  constructor(a0, a1, a2) {
    super();
    this._centerX = 0;
    this._centerY = 0;
    this._power = INVERSION_DEFAULT_POWER;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        centerX: a0,
        centerY: a1,
        power: a2 != null ? a2 : this._power
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        centerCoordinates: a0,
        power: a1 != null ? a1 : this._power
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        centerPoint: a0,
        power: a1 != null ? a1 : this._power
      });
    }
  }

  get events() {
    return {
      centerXChanged: "centerX",
      centerYChanged: "centerY",
      powerChanged: "power"
    };
  }

  _setCenterX(value) {
    if (!Utility.isEqualTo(this._centerX, value)) this.trigger_(EventObject.simple(this, this.events.centerXChanged));
    this._centerX = value;
  }

  _setCenterY(value) {
    if (!Utility.isEqualTo(this._centerY, value)) this.trigger_(EventObject.simple(this, this.events.centerYChanged));
    this._centerY = value;
  }

  _setPower(value) {
    if (!Utility.isEqualTo(this._power, value)) this.trigger_(EventObject.simple(this, this.events.powerChanged));
    this._power = value;
  }

  get centerX() {
    return this._centerX;
  }

  set centerX(value) {
    Assert.isRealNumber(value, "centerX");

    this._setCenterX(value);
  }

  get centerY() {
    return this._centerY;
  }

  set centerY(value) {
    Assert.isRealNumber(value, "centerY");

    this._setCenterY(value);
  }

  get centerCoordinates() {
    return [this._centerX, this._centerY];
  }

  set centerCoordinates(value) {
    Assert.isCoordinates(value, "centerCoordinates");

    this._setCenterX(Coordinates.x(value));

    this._setCenterY(Coordinates.y(value));
  }

  get centerPoint() {
    return new Point(this._centerX, this._centerY);
  }

  set centerPoint(value) {
    this._setCenterX(value.x);

    this._setCenterY(value.y);
  }

  get power() {
    return this._power;
  }

  set power(value) {
    Assert.isPositiveNumber(value, "power");

    this._setPower(value);
  }

  isPointSelfInverse(point) {
    const c0 = getCoordinates(point, "point");
    const sd = Vector2.squaredMagnitude(Vector2.from(this.centerCoordinates, c0));
    return Maths.equalTo(sd, this.power, optioner.options.epsilon);
  }

  isLineSelfInverse(line) {
    return line.isPointOn(this.centerCoordinates);
  }

  isCircleSelfInverse(circle) {
    const inversionBasisCircle = new Circle(this.centerCoordinates, Maths.sqrt(this.power));
    const {
      centerCoordinates: cc0,
      radius: r0
    } = inversionBasisCircle;
    const {
      centerCoordinates: cci,
      radius: ri
    } = circle;
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(cc0, cci, epsilon) && Maths.equalTo(r0, ri, epsilon)) {
      return true;
    }

    return circle.isOrthogonalToCircle(inversionBasisCircle);
  }

  invertPoint(point) {
    const cc = this.centerCoordinates;
    const c1 = getCoordinates(point, "point");
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(cc, c1, epsilon)) {
      console.warn("[G]The `point` is same as the inversion center, `null` will be returned.");
      return null;
    }

    const power = this.power;
    const v1 = Vector2.from(cc, c1);
    const d = Vector2.magnitude(v1);
    const id = power / d;
    const angle = Vector2.angle(v1);
    const v2 = Vector2.from2(angle, id);
    const c2 = Vector2.add(cc, v2);
    return new Point(c2);
  }

  invertLine(line) {
    if (line.isPointOn(this.centerCoordinates)) return line.clone();
    const cc = this.centerCoordinates;
    const power = this.power;
    const c1 = line.getClosestPointFrom(cc).coordinates;
    const v1 = Vector2.from(cc, c1);
    const d = Vector2.magnitude(v1);
    const angle = Vector2.angle(v1);
    const id = power / d;
    const radius = id / 2;
    const v2 = Vector2.from2(angle, radius);
    const c2 = Vector2.add(cc, v2);
    return new Circle(c2, radius);
  }

  invertCircle(circle) {
    const cc = this.centerCoordinates;
    const power = this.power;
    const c1 = circle.centerCoordinates;
    const radius = circle.radius;
    const v1 = Vector2.from(cc, c1);
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(cc, c1, epsilon)) {
      return new Circle(c1, power / radius);
    }

    if (circle.isPointOn(this.centerCoordinates)) {
      const id = power / (2 * radius);
      const l = Line.fromTwoPoints(cc, c1);
      const angle = Vector2.angle(v1);
      const v2 = Vector2.from2(angle, id);
      const c2 = Vector2.add(cc, v2);
      return l.getPerpendicularLineFromPoint(c2);
    } else {
      const d = Vector2.magnitude(v1);
      const i = Maths.abs(d - radius);
      const j = d + radius;
      const ii = power / i;
      const ij = power / j;

      if (circle.isPointInside(cc)) {
        const angle = Vector2.angle(v1);
        const r = (ii + ij) / 2;
        const v2 = Vector2.from2(angle, r - ii);
        const c2 = Vector2.add(cc, v2);
        return new Circle(c2, r);
      } else {
        const angle = Vector2.angle(v1);
        const r = (ii - ij) / 2;
        const v2 = Vector2.from2(angle, r + ij);
        const c2 = Vector2.add(cc, v2);
        return new Circle(c2, r);
      }
    }
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tcenterCoordinates: {`, `\t\tx: ${this._centerX}`, `\t\ty: ${this._centerY}`, `\t}`, `\tpower: ${this.power}`, `}`].join("\n");
  }

  toArray() {
    return [];
  }

  toObject() {
    return {};
  }

}, (_applyDecoratedDescriptor(_class$L.prototype, "isPointSelfInverse", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$L.prototype, "isPointSelfInverse"), _class$L.prototype), _applyDecoratedDescriptor(_class$L.prototype, "isLineSelfInverse", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$L.prototype, "isLineSelfInverse"), _class$L.prototype), _applyDecoratedDescriptor(_class$L.prototype, "isCircleSelfInverse", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$L.prototype, "isCircleSelfInverse"), _class$L.prototype), _applyDecoratedDescriptor(_class$L.prototype, "invertPoint", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$L.prototype, "invertPoint"), _class$L.prototype), _applyDecoratedDescriptor(_class$L.prototype, "invertLine", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$L.prototype, "invertLine"), _class$L.prototype), _applyDecoratedDescriptor(_class$L.prototype, "invertCircle", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$L.prototype, "invertCircle"), _class$L.prototype)), _class$L);

var _class$K;
const REGULAR_POLYGON_MIN_SIDE_COUNT = 3;

let RegularPolygon = validGeometry(_class$K = class RegularPolygon extends Geometry {
  constructor(a0, a1, a2, a3, a4) {
    super();
    this._centerX = NaN;
    this._centerY = NaN;
    this._radius = NaN;
    this._sideCount = NaN;
    this._rotation = 0;
    this._windingDirection = 1;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        centerX: a0,
        centerY: a1,
        radius: a2,
        sideCount: a3,
        rotation: a4 != null ? a4 : 0
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        centerCoordinates: a0,
        radius: a1,
        sideCount: a2,
        rotation: a3 != null ? a3 : 0
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        centerPoint: a0,
        radius: a1,
        sideCount: a2,
        rotation: a3 != null ? a3 : 0
      });
    }
  }

  get events() {
    return {
      centerXChanged: "centerX",
      centerYChanged: "centerY",
      radiusChanged: "radius",
      sideCountChanged: "sideCount",
      rotationChanged: "rotation"
    };
  }

  _setCenterX(value) {
    if (!Utility.isEqualTo(this._centerX, value)) this.trigger_(EventObject.simple(this, this.events.centerXChanged));
    this._centerX = value;
  }

  _setCenterY(value) {
    if (!Utility.isEqualTo(this._centerY, value)) this.trigger_(EventObject.simple(this, this.events.centerYChanged));
    this._centerY = value;
  }

  _setRadius(value) {
    if (!Utility.isEqualTo(this._radius, value)) this.trigger_(EventObject.simple(this, this.events.radiusChanged));
    this._radius = value;
  }

  _setSideCount(value) {
    if (!Utility.isEqualTo(this._sideCount, value)) this.trigger_(EventObject.simple(this, this.events.sideCountChanged));
    this._sideCount = value;
  }

  _setRotation(value) {
    if (!Utility.isEqualTo(this._rotation, value)) this.trigger_(EventObject.simple(this, this.events.rotationChanged));
    this._rotation = value;
  }

  get centerX() {
    return this._centerX;
  }

  set centerX(value) {
    Assert.isRealNumber(value, "centerX");

    this._setCenterX(value);
  }

  get centerY() {
    return this._centerY;
  }

  set centerY(value) {
    Assert.isRealNumber(value, "centerY");

    this._setCenterY(value);
  }

  get centerCoordinates() {
    return [this._centerX, this._centerY];
  }

  set centerCoordinates(value) {
    Assert.isCoordinates(value, "centerCoordinates");

    this._setCenterX(Coordinates.x(value));

    this._setCenterY(Coordinates.y(value));
  }

  get centerPoint() {
    return new Point(this._centerX, this._centerY);
  }

  set centerPoint(value) {
    this._setCenterX(value.x);

    this._setCenterY(value.y);
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    Assert.isPositiveNumber(value, "radius");

    this._setRadius(value);
  }

  get sideCount() {
    return this._sideCount;
  }

  set sideCount(value) {
    Assert.isInteger(value, "sideCount");
    Assert.comparison(value, "sideCount", "ge", REGULAR_POLYGON_MIN_SIDE_COUNT);

    this._setSideCount(value);
  }

  get rotation() {
    return this._rotation;
  }

  set rotation(value) {
    Assert.isRealNumber(value, "rotation");

    this._setRotation(value);
  }

  get apothem() {
    return this.radius * Maths.cos(Maths.PI / this.sideCount);
  }

  get sideLength() {
    return 2 * this.radius * Maths.sin(Maths.PI / this.sideCount);
  }

  get centralAngle() {
    return 2 * Maths.PI / this.sideCount;
  }

  get interiorAngle() {
    return Maths.PI - 2 * Maths.PI / this.sideCount;
  }

  get sumOfInteriorAngle() {
    return Maths.PI * (this.sideCount - 2);
  }

  get exteriorAngle() {
    return 2 * Maths.PI / this.sideCount;
  }

  get diagonalCount() {
    let n = this.sideCount;
    return n * (n - 3) / 2;
  }

  initialized_() {
    return !Number.isNaN(this._centerX) && !Number.isNaN(this._centerY) && !Number.isNaN(this._radius) && !Number.isNaN(this._sideCount);
  }

  getWindingDirection() {
    return this._windingDirection;
  }

  setWindingDirection(direction) {
    this._windingDirection = direction;
  }

  getLength() {
    throw new Error("Method not implemented.");
  }

  isPointOn(point) {
    throw new Error("Method not implemented.");
  }

  isPointOutside(point) {
    throw new Error("Method not implemented.");
  }

  isPointInside(point) {
    throw new Error("Method not implemented.");
  }

  move(deltaX, deltaY) {
    this.centerCoordinates = Vector2.add(this.centerCoordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.centerCoordinates = Vector2.add(this.centerCoordinates, Vector2.from2(angle, distance));
    return this;
  }

  static fromApothemEtc(apothem, centerCoordinates, sideCount, rotation = 0) {
    let r = apothem / Maths.cos(Maths.PI / sideCount);
    return new RegularPolygon(centerCoordinates, r, sideCount, rotation);
  }

  static fromSideLengthEtc(sideLength, centerCoordinates, sideCount, rotation = 0) {
    let r = sideLength / Maths.sin(Maths.PI / sideCount) / 2;
    return new RegularPolygon(centerCoordinates, r, sideCount, rotation);
  }

  getVertices() {
    return Utility.range(0, this.sideCount).map(index => {
      return new Point(Vector2.add(this.centerCoordinates, Vector2.from2(2 * Maths.PI / this.sideCount * index + this.rotation, this.radius)));
    });
  }

  getSideLineSegments() {
    const ps = this.getVertices();
    return Utility.range(0, this.sideCount).forEach(index => {
      new LineSegment(Utility.nth(ps, index - this.sideCount), Utility.nth(ps, index - this.sideCount + 1));
    });
  }

  getCircumscribedCircle() {
    return new Circle(this.centerCoordinates, this.radius);
  }

  getInscribedCircle() {
    return new Circle(this.centerCoordinates, this.apothem);
  }

  getPerimeter() {
    return this.sideCount * this.sideLength;
  }

  getArea() {
    let p = this.getPerimeter();
    return p * this.apothem / 2;
  }

  toPath() {
    const [head, ...tail] = this.getVertices();
    const path = new Path();
    path.appendCommand(Path.moveTo(head.coordinates));
    tail.forEach(p => {
      path.appendCommand(Path.lineTo(p.coordinates));
    });
    path.closed = true;
    return path;
  }

  apply(transformation) {
    const {
      centerCoordinates: cc,
      radius: r
    } = this;
    const {
      skew: [kx, ky],
      scale: [sx, sy],
      rotate
    } = transformation.decomposeQr();
    const epsilon = optioner.options.epsilon;

    if (Maths.equalTo(kx, 0, epsilon) && Maths.equalTo(ky, 0, epsilon) && Maths.equalTo(sx, sy, epsilon)) {
      const ncc = transformation.transformCoordinates(cc);
      const nr = r * sx;
      const nrt = rotate;
      return new RegularPolygon(ncc, nr, this.sideCount, nrt);
    }

    return this.toPath().apply(transformation);
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const [head, ...tail] = this.getVertices();
    g.moveTo(...head.coordinates);
    tail.forEach(p => {
      g.lineTo(...p.coordinates);
    });
    g.close();
    return g;
  }

  clone() {
    return new RegularPolygon(this.centerX, this.centerY, this.radius, this.sideCount, this.rotation);
  }

  copyFrom(shape) {
    if (shape === null) shape = new RegularPolygon();

    this._setCenterX(shape._centerX);

    this._setCenterY(shape._centerY);

    this._setRadius(shape._radius);

    this._setSideCount(shape._sideCount);

    this._setRotation(shape._rotation);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tcenterX: ${this.centerX}`, `\tcenterY: ${this.centerY}`, `\tradius: ${this.radius}`, `\tsideCount: ${this.sideCount}`, `\trotation: ${this.rotation}`, `}`].join("\n");
  }

  toArray() {
    return [this.centerX, this.centerY, this.radius, this.sideCount, this.rotation];
  }

  toObject() {
    return {
      centerX: this.centerX,
      centerY: this.centerY,
      radius: this.radius,
      sideCount: this.sideCount,
      rotation: this.rotation
    };
  }

}) || _class$K;

var _class$J;

let Circle = validGeometry(_class$J = class Circle extends Geometry {
  constructor(a0, a1, a2) {
    super();
    this._centerX = NaN;
    this._centerY = NaN;
    this._radius = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        centerX: a0,
        centerY: a1,
        radius: a2
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        centerCoordinates: a0,
        radius: a1
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        centerPoint: a0,
        radius: a1
      });
    }
  }

  get events() {
    return {
      centerXChanged: "centerX",
      centerYChanged: "centerY",
      radiusChanged: "radius"
    };
  }

  _setCenterX(value) {
    if (!Utility.isEqualTo(this._centerX, value)) this.trigger_(EventObject.simple(this, this.events.centerXChanged));
    this._centerX = value;
  }

  _setCenterY(value) {
    if (!Utility.isEqualTo(this._centerY, value)) this.trigger_(EventObject.simple(this, this.events.centerYChanged));
    this._centerY = value;
  }

  _setRadius(value) {
    if (!Utility.isEqualTo(this._radius, value)) this.trigger_(EventObject.simple(this, this.events.radiusChanged));
    this._radius = value;
  }

  get centerX() {
    return this._centerX;
  }

  set centerX(value) {
    Assert.isRealNumber(value, "centerX");

    this._setCenterX(value);
  }

  get centerY() {
    return this._centerY;
  }

  set centerY(value) {
    Assert.isRealNumber(value, "centerY");

    this._setCenterY(value);
  }

  get centerCoordinates() {
    return [this._centerX, this._centerY];
  }

  set centerCoordinates(value) {
    Assert.isCoordinates(value, "centerCoordinates");

    this._setCenterX(Coordinates.x(value));

    this._setCenterY(Coordinates.y(value));
  }

  get centerPoint() {
    return new Point(this._centerX, this._centerY);
  }

  set centerPoint(value) {
    this._setCenterX(value.x);

    this._setCenterY(value.y);
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    Assert.isPositiveNumber(value, "radius");

    this._setRadius(value);
  }

  initialized_() {
    return !Number.isNaN(this._centerX) && !Number.isNaN(this._centerY) && !Number.isNaN(this._radius);
  }

  move(deltaX, deltaY) {
    this.centerCoordinates = Vector2.add(this.centerCoordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.centerCoordinates = Vector2.add(this.centerCoordinates, Vector2.from2(angle, distance));
    return this;
  }

  static fromTwoPoints(centerPoint, radiusControlPoint) {
    const cc = getCoordinates(centerPoint, "centerPoint");
    const cr = getCoordinates(radiusControlPoint, "radiusControlPoint");
    const r = Vector2.magnitude(Vector2.from(cc, cr));
    if (Maths.equalTo(r, 0, optioner.options.epsilon)) return null;
    return new Circle(cc, r);
  }

  getLength() {
    return 2 * Maths.PI * this.radius;
  }

  getArea() {
    return Maths.PI * this.radius ** 2;
  }

  getParametricEquation() {
    const {
      centerCoordinates: cc,
      radius: r
    } = this;
    return function (angle) {
      return Vector2.add(cc, Vector2.from2(angle, r));
    };
  }

  getWindingDirection() {
    return 1;
  }

  getPointAtAngle(angle) {
    return new Point(this.getParametricEquation()(angle));
  }

  getAngleOfPoint(point) {
    const {
      centerCoordinates: cc
    } = this;
    const c = getCoordinates(point, "point");
    if (this.isPointOn(c)) return Angle.simplify(Vector2.angle(Vector2.from(cc, c)));
    return NaN;
  }

  getImplicitFunctionCoefs() {
    const {
      centerX: cx,
      centerY: cy,
      radius: r
    } = this;
    const a = 1;
    const b = -2 * cx;
    const c = 0;
    const d = -2 * cy;
    const e = 1;
    const f = cx ** 2 + cy ** 2 - r ** 2;
    return [a, b, c, d, e, f];
  }

  getArcBetweenAngle(startAngle, endAngle, positive = true) {
    const epsilon = optioner.options.epsilon;
    const sa = Angle.simplify(startAngle);
    const ea = Angle.simplify(endAngle);

    if (Maths.equalTo(sa, ea, epsilon)) {
      console.warn("[G]The start angle and end angle are the same, `null` will be returned.");
      return null;
    }

    return Arc.fromCenterPointAndStartEndAnglesEtc(this.centerCoordinates, this.radius, this.radius, sa, ea, positive);
  }

  isPointOn(point) {
    const c = getCoordinates(point, "point");
    const sd = Vector2.squaredMagnitude(Vector2.from(this.centerCoordinates, c));
    const sr = this.radius ** 2;
    return Maths.equalTo(sd, sr, optioner.options.epsilon);
  }

  isPointOutside(point) {
    const c = getCoordinates(point, "point");
    const sd = Vector2.squaredMagnitude(Vector2.from(this.centerCoordinates, c));
    const sr = this.radius ** 2;
    return Maths.greaterThan(sd, sr, optioner.options.epsilon);
  }

  isPointInside(point) {
    const c = getCoordinates(point, "point");
    const sd = Vector2.squaredMagnitude(Vector2.from(this.centerCoordinates, c));
    const sr = this.radius ** 2;
    return Maths.lessThan(sd, sr, optioner.options.epsilon);
  }

  getTangentVectorAtAngle(angle, normalized = false) {
    const r = this.radius;
    const dx = -r * Maths.sin(angle);
    const dy = r * Maths.cos(angle);
    const tv = [dx, dy];
    const c = this.getParametricEquation()(angle);
    return normalized ? new Vector(c, Vector2.normalize(tv)) : new Vector(c, tv);
  }

  getNormalVectorAtAngle(angle, normalized = false) {
    const c = this.getParametricEquation()(angle);
    const nv = Vector2.from(c, this.centerCoordinates);
    return normalized ? new Vector(c, Vector2.normalize(nv)) : new Vector(c, nv);
  }

  getTangentLinesFromPointOutside(point) {
    if (!this.isPointOutside(point)) return [];
    const ci = getCoordinates(point, "point");
    const cc = this.centerCoordinates;
    const vi = Vector2.from(cc, ci);
    const d = Vector2.magnitude(vi);
    const ia = Maths.acos(this.radius / d);
    const angles = [-ia, ia];
    let ret = angles.map(a => {
      const vt = Vector2.scalarMultiply(Vector2.rotate(vi, a), this.radius / d);
      const c = Vector2.add(cc, vt);
      return [Line.fromTwoPoints(ci, c), new Point(c)];
    });
    return ret;
  }

  isOrthogonalToCircle(circle) {
    const {
      centerCoordinates: cc1,
      radius: r1
    } = this;
    const {
      centerCoordinates: cc2,
      radius: r2
    } = circle;
    const sd = Vector2.squaredMagnitude(Vector2.from(cc1, cc2));
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(r1 ** 2 + r2 ** 2, sd, epsilon);
  }

  static getCommonTangentLinesOfTwoCircles(circle1, circle2) {
    const data = [];
    const epsilon = optioner.options.epsilon;
    const {
      centerCoordinates: cc1,
      radius: r1
    } = circle1;
    const {
      centerCoordinates: cc2,
      radius: r2
    } = circle2;
    const v = Vector2.from(cc1, cc2);
    const angle1 = Vector2.angle(v);
    const angle2 = angle1 + Maths.PI;
    const d = Vector2.magnitude(v);
    const sr = r1 + r2;
    const dr = Maths.abs(r1 - r2);

    if (Maths.equalTo(d, 0, epsilon) && Maths.equalTo(dr, 0, epsilon)) {
      return data;
    }

    const drCosine = dr / d;

    if (Maths.equalTo(drCosine, 1, epsilon)) {
      const a = r1 > r2 ? angle1 : angle2;
      const c = r1 > r2 ? circle1 : circle2;
      const p = c.getPointAtAngle(a);
      data.push([c.getTangentVectorAtAngle(a).toLine(), [p, p]]);
    } else if (Maths.lessThan(drCosine, 1, epsilon)) {
      const da = Maths.acos(drCosine);
      const a = r1 > r2 ? angle1 : angle2;
      const p1p = circle1.getPointAtAngle(a + da);
      const p2p = circle2.getPointAtAngle(a + da);
      const p1m = circle1.getPointAtAngle(a - da);
      const p2m = circle2.getPointAtAngle(a - da);
      data.push([Line.fromTwoPoints(p1p, p2p), [p1p, p2p]]);
      data.push([Line.fromTwoPoints(p1m, p2m), [p1m, p2m]]);
    } else ;

    const srCosine = sr / d;

    if (Maths.equalTo(srCosine, 1, epsilon)) {
      const p = circle1.getPointAtAngle(angle1);
      data.push([circle1.getTangentVectorAtAngle(angle1).toLine(), [p, p]]);
    } else if (Maths.lessThan(srCosine, 1, epsilon)) {
      const da = Maths.acos(srCosine);
      const p1p = circle1.getPointAtAngle(angle1 + da);
      const p2p = circle2.getPointAtAngle(angle2 + da);
      const p1m = circle1.getPointAtAngle(angle1 - da);
      const p2m = circle2.getPointAtAngle(angle2 - da);
      data.push([Line.fromTwoPoints(p1p, p2p), [p1p, p2p]]);
      data.push([Line.fromTwoPoints(p1m, p2m), [p1m, p2m]]);
    } else ;

    return data;
  }

  static getCommonTangentCirclesOfTwoCirclesThroughPoint(circle1, circle2, point) {
    if (circle1.isPointOn(point) && circle2.isPointOn(point)) return [];
    const epsilon = optioner.options.epsilon;
    if (Maths.equalTo(circle1.radius, circle2.radius, epsilon) && Coordinates.isEqualTo(circle1.centerCoordinates, circle2.centerCoordinates, epsilon)) return [];
    const c = getCoordinates(point, "point");
    const inversion = new Inversion(c);
    const inverse1 = inversion.invertCircle(circle1);
    const inverse2 = inversion.invertCircle(circle2);
    const inverse1IsLine = inverse1 instanceof Line;
    const inverse2IsLine = inverse2 instanceof Line;

    if (!inverse1IsLine && !inverse2IsLine) {
      const data = Circle.getCommonTangentLinesOfTwoCircles(inverse1, inverse2);
      const ret = [];
      data.forEach(d => {
        const inv = inversion.invertLine(d[0]);

        if (inv instanceof Circle) {
          ret.push(inv);
        }
      });
      return ret;
    }

    if (inverse1IsLine && !inverse2IsLine || !inverse1IsLine && inverse2IsLine) {
      const circle = inverse1IsLine ? inverse2 : inverse1;
      const line = inverse1IsLine ? inverse1 : inverse2;
      const cc = circle.centerCoordinates;
      const cp = line.getClosestPointFrom(cc).coordinates;
      let angles;

      if (circle.isPointOn(cp)) {
        angles = [Vector2.angle(Vector2.from(cp, cc))];
      } else {
        angles = [Vector2.angle(Vector2.from(cp, cc)), Vector2.angle(Vector2.from(cc, cp))];
      }

      const ret = [];
      angles.forEach(a => {
        const l = circle.getTangentVectorAtAngle(a).toLine();
        const inv = inversion.invertLine(l);

        if (inv instanceof Circle) {
          ret.push(inv);
        }
      });
      return ret;
    }

    return [];
  }

  getInscribedRegularPolygon(sideCount, angle = 0) {
    return new RegularPolygon(this.radius, this.centerX, this.centerY, sideCount, angle);
  }

  getBoundingBox() {
    const {
      centerX: cx,
      centerY: cy,
      radius: r
    } = this;
    const w = r * 2;
    const h = r * 2;
    const x = cx - r;
    const y = cy - r;
    return [x, y, w, h];
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      centerCoordinates: cc,
      radius: r
    } = this;
    g.centerArcTo(...cc, r, r, 0, 0, 2 * Maths.PI);
    g.close();
    return g;
  }

  toPath() {
    const path = new Path();
    const {
      centerCoordinates: [cx, cy],
      radius: r
    } = this;
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2,
      radiusX: rx,
      radiusY: ry,
      largeArc,
      positive,
      rotation: phi
    } = centerToEndpointParameterization({
      centerX: cx,
      centerY: cy,
      radiusX: r,
      radiusY: r,
      startAngle: 0,
      endAngle: 2 * Maths.PI,
      positive: this.getWindingDirection() === 1,
      rotation: 0
    });
    path.appendCommand(Path.moveTo([x1, y1]));
    path.appendCommand(Path.arcTo(rx, ry, phi, largeArc, positive, [x2, y2]));
    path.closed = true;
    return path;
  }

  toPath2() {
    const kappa = 0.5519150244935106;
    const {
      centerX: cx,
      centerY: cy,
      radius: r
    } = this;
    const offset = r * kappa;
    const xs = cx - r;
    const ys = cy - r;
    const xe = cx + r;
    const ye = cy + r;
    const xm = cx;
    const ym = cy;
    const cp11 = [xs, ym - offset];
    const cp12 = [xm - offset, ys];
    const cp21 = [xm + offset, ys];
    const cp22 = [xe, ym - offset];
    const cp31 = [xe, ym + offset];
    const cp32 = [xm + offset, ye];
    const cp41 = [xm - offset, ye];
    const cp42 = [xs, ym + offset];
    const path = new Path();
    path.appendCommand(Path.moveTo([xs, ym]));
    path.appendCommand(Path.bezierTo(cp11, cp12, [xm, ys]));
    path.appendCommand(Path.bezierTo(cp21, cp22, [xe, ym]));
    path.appendCommand(Path.bezierTo(cp31, cp32, [xm, ye]));
    path.appendCommand(Path.bezierTo(cp41, cp42, [xs, ym]));
    path.closed = true;
    return path;
  }

  apply(transformation) {
    const {
      centerCoordinates: cc,
      radius: r
    } = this;
    const {
      skew: [kx, ky],
      scale: [sx, sy]
    } = transformation.decomposeQr();
    const epsilon = optioner.options.epsilon;

    if (Maths.equalTo(kx, 0, epsilon) && Maths.equalTo(ky, 0, epsilon) && Maths.equalTo(sx, sy, epsilon)) {
      const ncc = transformation.transformCoordinates(cc);
      const nr = r * sx;
      return new Circle(ncc, nr);
    } else {
      return this.toPath().apply(transformation);
    }
  }

  clone() {
    return new Circle(this.centerX, this.centerY, this.radius);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Circle();

    this._setCenterX(shape._centerX);

    this._setCenterY(shape._centerY);

    this._setRadius(shape._radius);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tcenterX: ${this.centerX}`, `\tcenterY: ${this.centerY}`, `\tradius: ${this.radius}`, `}`].join("\n");
  }

  toArray() {
    return [this.centerX, this.centerY, this.radius];
  }

  toObject() {
    return {
      centerX: this.centerX,
      centerY: this.centerY,
      radius: this.radius
    };
  }

}) || _class$J;

const t24 = [-0.0640568928626056, 0.0640568928626056, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.8200019859739029, 0.8200019859739029, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213];
const w24 = [0.1279381953467522, 0.1279381953467522, 0.1258374563468283, 0.1258374563468283, 0.1216704729278034, 0.1216704729278034, 0.1155056680537256, 0.1155056680537256, 0.1074442701159656, 0.1074442701159656, 0.0976186521041139, 0.0976186521041139, 0.0861901615319533, 0.0861901615319533, 0.0733464814110803, 0.0733464814110803, 0.0592985849154368, 0.0592985849154368, 0.0442774388174198, 0.0442774388174198, 0.0285313886289337, 0.0285313886289337, 0.0123412297999872, 0.0123412297999872];

function derivativeValue(t, polyXD, polyYD) {
  const x = Polynomial.evaluate(polyXD, t);
  const y = Polynomial.evaluate(polyYD, t);
  return Maths.hypot(x, y);
}

function bezierLength(polyXD, polyYD) {
  const h = 0.5;
  const l = t24.length;
  let sum = 0;

  for (let i = 0; i < l; i++) {
    const t = h * t24[i] + h;
    sum += w24[i] * derivativeValue(t, polyXD, polyYD);
  }

  return h * sum;
}

var _class$I, _class2$5;

let QuadraticBezier = validGeometry(_class$I = (_class2$5 = class QuadraticBezier extends Geometry {
  constructor(a0, a1, a2, a3, a4, a5) {
    super();
    this._point1X = NaN;
    this._point1Y = NaN;
    this._point2X = NaN;
    this._point2Y = NaN;
    this._controlPointX = NaN;
    this._controlPointY = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        point1X: a0,
        point1Y: a1,
        point2X: a2,
        point2Y: a3,
        controlPointX: a4,
        controlPointY: a5
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        point1Coordinates: a0,
        point2Coordinates: a1,
        controlPointCoordinates: a2
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        point1: a0,
        point2: a1,
        controlPoint: a2
      });
    }
  }

  get events() {
    return {
      point1XChanged: "point1X",
      point1YChanged: "point1Y",
      point2XChanged: "point2X",
      point2YChanged: "point2Y",
      controlPointXChanged: "controlPointX",
      controlPointYChanged: "controlPointY"
    };
  }

  _setPoint1X(value) {
    if (!Utility.isEqualTo(this._point1X, value)) this.trigger_(EventObject.simple(this, this.events.point1XChanged));
    this._point1X = value;
  }

  _setPoint1Y(value) {
    if (!Utility.isEqualTo(this._point1Y, value)) this.trigger_(EventObject.simple(this, this.events.point1YChanged));
    this._point1Y = value;
  }

  _setPoint2X(value) {
    if (!Utility.isEqualTo(this._point2X, value)) this.trigger_(EventObject.simple(this, this.events.point2XChanged));
    this._point2X = value;
  }

  _setPoint2Y(value) {
    if (!Utility.isEqualTo(this._point2Y, value)) this.trigger_(EventObject.simple(this, this.events.point2YChanged));
    this._point2Y = value;
  }

  _setControlPointX(value) {
    if (!Utility.isEqualTo(this._controlPointX, value)) this.trigger_(EventObject.simple(this, this.events.controlPointXChanged));
    this._controlPointX = value;
  }

  _setControlPointY(value) {
    if (!Utility.isEqualTo(this._controlPointY, value)) this.trigger_(EventObject.simple(this, this.events.controlPointYChanged));
    this._controlPointY = value;
  }

  get point1X() {
    return this._point1X;
  }

  set point1X(value) {
    Assert.isRealNumber(value, "point1X");

    this._setPoint1X(value);
  }

  get point1Y() {
    return this._point1Y;
  }

  set point1Y(value) {
    Assert.isRealNumber(value, "point1Y");

    this._setPoint1Y(value);
  }

  get point1Coordinates() {
    return [this._point1X, this._point1Y];
  }

  set point1Coordinates(value) {
    Assert.isCoordinates(value, "point1Coordinates");

    this._setPoint1X(Coordinates.x(value));

    this._setPoint1Y(Coordinates.y(value));
  }

  get point1() {
    return new Point(this._point1X, this._point1Y);
  }

  set point1(value) {
    this._setPoint1X(value.x);

    this._setPoint1Y(value.y);
  }

  get point2X() {
    return this._point2X;
  }

  set point2X(value) {
    Assert.isRealNumber(value, "point2X");

    this._setPoint2X(value);
  }

  get point2Y() {
    return this._point2Y;
  }

  set point2Y(value) {
    Assert.isRealNumber(value, "point2Y");

    this._setPoint2Y(value);
  }

  get point2Coordinates() {
    return [this._point2X, this._point2Y];
  }

  set point2Coordinates(value) {
    Assert.isCoordinates(value, "point2Coordinates");

    this._setPoint2X(Coordinates.x(value));

    this._setPoint2Y(Coordinates.y(value));
  }

  get point2() {
    return new Point(this._point2X, this._point2Y);
  }

  set point2(value) {
    this._setPoint2X(value.x);

    this._setPoint2Y(value.y);
  }

  get controlPointX() {
    return this._controlPointX;
  }

  set controlPointX(value) {
    Assert.isRealNumber(value, "controlPointX");

    this._setControlPointX(value);
  }

  get controlPointY() {
    return this._controlPointY;
  }

  set controlPointY(value) {
    Assert.isRealNumber(value, "controlPointY");

    this._setControlPointY(value);
  }

  get controlPointCoordinates() {
    return [this._controlPointX, this._controlPointY];
  }

  set controlPointCoordinates(value) {
    Assert.isCoordinates(value, "controlPointCoordinates");

    this._setControlPointX(Coordinates.x(value));

    this._setControlPointY(Coordinates.y(value));
  }

  get controlPoint() {
    return new Point(this._controlPointX, this._controlPointY);
  }

  set controlPoint(value) {
    this._setControlPointX(value.x);

    this._setControlPointY(value.y);
  }

  initialized_() {
    return !Number.isNaN(this._point1X) && !Number.isNaN(this._point1Y) && !Number.isNaN(this._point2X) && !Number.isNaN(this._point2Y) && !Number.isNaN(this._controlPointX) && !Number.isNaN(this._controlPointY);
  }

  extrema() {
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.standardize(Polynomial.derivative(polyX)), Polynomial.standardize(Polynomial.derivative(polyY))];
    const {
      epsilon,
      curveEpsilon
    } = optioner.options;
    let tRoots = [...(!Polynomial.isConstant(polyXD) ? Polynomial.roots(polyXD) : []), ...(!Polynomial.isConstant(polyYD) ? Polynomial.roots(polyYD) : [])].filter(Type.isNumber);
    tRoots = Utility.uniqWith(tRoots, (a, b) => Maths.equalTo(a, b, curveEpsilon));
    return tRoots.filter(t => {
      return Maths.between(t, 0, 1, false, false, epsilon);
    }).map(t => [new Point(this.getParametricEquation()(t)), t]);
  }

  dimensionallyDegenerate() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPointCoordinates: cpc,
      controlPoint: cp
    } = this;
    const epsilon = optioner.options.epsilon;
    return Coordinates.isEqualTo(c1, c2, epsilon) && Coordinates.isEqualTo(cpc, c2, epsilon);
  }

  nonDimensionallyDegenerate() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    const [[cx2], [cy2]] = this.getPolynomial();

    if (cx2 === 0 && cy2 === 0) {
      return new LineSegment(c1, c2);
    }

    return this;
  }

  move(deltaX, deltaY) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, [deltaX, deltaY]);
    this.point2Coordinates = Vector2.add(this.point2Coordinates, [deltaX, deltaY]);
    this.controlPointCoordinates = Vector2.add(this.controlPointCoordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, Vector2.from2(angle, distance));
    this.point2Coordinates = Vector2.add(this.point2Coordinates, Vector2.from2(angle, distance));
    this.controlPointCoordinates = Vector2.add(this.controlPointCoordinates, Vector2.from2(angle, distance));
    return this;
  }

  static fromThreePointsAndTime(point1, point2, point3, t) {
    Assert.condition(t > 0 && t < 1, "[G]The `t` should be a number between 0(not including) and 1(not including).");
    const c1 = getCoordinates(point1, "point1");
    const c2 = getCoordinates(point2, "point2");
    const c3 = getCoordinates(point3, "point3");
    const ct = Vector2.subtract(c2, Vector2.add(Vector2.scalarMultiply(c1, (1 - t) ** 2), Vector2.scalarMultiply(c3, t ** 2)));
    const cpc = Vector2.scalarMultiply(ct, 1 / (2 * (1 - t) * t));
    return new QuadraticBezier(c1, c3, cpc);
  }

  reverse() {
    [this.point1Coordinates, this.point2Coordinates] = [this.point2Coordinates, this.point1Coordinates];
  }

  isPointOn(point) {
    return !Number.isNaN(this.getTimeOfPoint(point));
  }

  getLength() {
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    return bezierLength(polyXD, polyYD);
  }

  getBoundingBox() {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const extrema = this.extrema().map(([p]) => p);
    extrema.concat([this.point1, this.point2]).forEach(point => {
      const {
        x,
        y
      } = point;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    });
    return [minX, minY, maxX - minX, maxY - minY];
  }

  getPolynomial() {
    const {
      point1Coordinates: [x0, y0],
      controlPointCoordinates: [x1, y1],
      point2Coordinates: [x2, y2]
    } = this;
    const m = [1, -2, 1, -2, 2, 0, 1, 0, 0];
    const polyX = Matrix3.dotVector3(m, [x0, x1, x2]);
    const polyY = Matrix3.dotVector3(m, [y0, y1, y2]);
    return [polyX, polyY];
  }

  getParametricEquation() {
    const [polyX, polyY] = this.getPolynomial();
    return function (t) {
      const x = Polynomial.evaluate(polyX, t);
      const y = Polynomial.evaluate(polyY, t);
      return [x, y];
    };
  }

  isDoubleLines() {
    const coefs = this.getImplicitFunctionCoefs();
    const curveEpsilon = optioner.options.curveEpsilon;
    if (coefs.length !== 6) return false;
    const [a, b, c, d, e, f] = coefs;
    const l = Maths.sqrt(a);
    const m = Maths.sqrt(c);
    const n = Maths.sqrt(f);
    return Maths.equalTo(b, 2 * l * m, curveEpsilon) && Maths.equalTo(d, 2 * l * n, curveEpsilon) && Maths.equalTo(e, 2 * m * n, curveEpsilon);
  }

  getImplicitFunctionCoefs() {
    const [[cx2, cx1, cx0], [cy2, cy1, cy0]] = this.getPolynomial();
    const [cx02, cy02] = [cx0 ** 2, cy0 ** 2];
    const [cx12, cy12] = [cx1 ** 2, cy1 ** 2];
    const [cx22, cy22] = [cx2 ** 2, cy2 ** 2];
    const epsilon = optioner.options.epsilon;

    if (Maths.equalTo(cx2, 0, epsilon) && Maths.equalTo(cy2, 0, epsilon)) {

      const a = cy1;
      const b = -cx1;
      const c = cx1 * cy0 - cx0 * cy1;
      return [a, b, c];
    }

    const a = cy22;
    const b = -2 * cx2 * cy2;
    const c = cx22;
    const d = -cx2 * cy12 + 2 * cx2 * cy0 * cy2 + cx1 * cy1 * cy2 - 2 * cx0 * cy22;
    const e = -2 * cx22 * cy0 + cx1 * cx2 * cy1 - cx12 * cy2 + 2 * cx0 * cx2 * cy2;
    const f = cx22 * cy02 - cx1 * cx2 * cy0 * cy1 + cx0 * cx2 * cy12 + cx12 * cy0 * cy2 - 2 * cx0 * cx2 * cy0 * cy2 - cx0 * cx1 * cy1 * cy2 + cx02 * cy22;
    return [a, b, c, d, e, f];
  }

  getClosestPointFrom(point) {
    const [x, y] = getCoordinates(point, "point");
    const [polyX, polyY] = this.getPolynomial();
    let polyXM = Polynomial.add(polyX, [-x]);
    let polyYM = Polynomial.add(polyY, [-y]);
    polyXM = Polynomial.multiply(polyXM, polyXM);
    polyYM = Polynomial.multiply(polyYM, polyYM);
    const polySquaredDistance = Polynomial.add(polyXM, polyYM);
    const polyD1 = Polynomial.derivative(polySquaredDistance);
    const ts = Polynomial.roots(polyD1).filter(r => Type.isNumber(r) && r > 0 && r < 1);
    ts.push(0, 1);
    let minT = NaN;
    let minSd = Infinity;
    ts.forEach(t => {
      const sd = Polynomial.evaluate(polySquaredDistance, t);

      if (sd < minSd) {
        minSd = sd;
        minT = t;
      }
    });
    return new Point(Polynomial.evaluate(polyX, minT), Polynomial.evaluate(polyY, minT));
  }

  getPointAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [x, y] = this.getParametricEquation()(t);
    return new Point(x, y);
  }

  getPointAtTimeExtend(t) {
    Assert.isRealNumber(t, "t");
    const [x, y] = this.getParametricEquation()(t);
    return new Point(x, y);
  }

  getTimeOfPoint(point) {
    const t = this.getTimeOfPointExtend(point);
    if (Maths.between(t, 0, 1, false, false, optioner.options.epsilon)) return Maths.clamp(t, 0, 1);
    return NaN;
  }

  getTimesOfPointExtend(point) {
    const [x, y] = getCoordinates(point, "point");
    const [polyX, polyY] = this.getPolynomial();
    const epsilon = optioner.options.epsilon;
    const curveEpsilon = optioner.options.curveEpsilon;
    const xPoly = Polynomial.standardize(Polynomial.add(polyX, [-x]));
    const yPoly = Polynomial.standardize(Polynomial.add(polyY, [-y]));
    let xRootsM = undefined;
    let yRootsM = undefined;

    if (Polynomial.isConstant(xPoly)) {
      if (!Maths.equalTo(Polynomial.coef(xPoly, 0), 0, epsilon)) return [];
    } else {
      xRootsM = Polynomial.rootsMultiplicity(Polynomial.roots(xPoly).filter(Type.isNumber), curveEpsilon);
      if (xRootsM.length === 0) return [];
    }

    if (Polynomial.isConstant(yPoly)) {
      if (!Maths.equalTo(Polynomial.coef(yPoly, 0), 0, epsilon)) return [];
    } else {
      yRootsM = Polynomial.rootsMultiplicity(Polynomial.roots(yPoly).filter(Type.isNumber), curveEpsilon);
      if (yRootsM.length === 0) return [];
    }

    if (xRootsM !== undefined && yRootsM === undefined) {
      return xRootsM.map(rm => rm.root);
    }

    if (xRootsM === undefined && yRootsM !== undefined) {
      return yRootsM.map(rm => rm.root);
    }

    if (xRootsM !== undefined && yRootsM !== undefined) {
      let ret = [];

      for (let xr of xRootsM) {
        for (let yr of yRootsM) {
          if (Maths.equalTo(xr.root, yr.root, curveEpsilon)) {
            ret.push(Maths.avg(xr.root, yr.root));
          }
        }
      }

      return ret;
    }

    return [];
  }

  getTimeOfPointExtend(point) {
    const times = this.getTimesOfPointExtend(point);
    if (times.length === 0) return NaN;
    const epsilon = optioner.options.epsilon;
    Utility.sortWith(times, (a, b) => {
      const d1 = Maths.between(a, 0, 1, false, false, epsilon);
      const d2 = Maths.between(b, 0, 1, false, false, epsilon);
      if (d1 && !d2) return -1;
      if (!d1 && d2) return 1;
      return a - b;
    });
    return times[0];
  }

  getTangentVectorAtTime(t, normalized = false) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    const c = this.getParametricEquation()(t);
    const tv = [Polynomial.evaluate(polyXD, t), Polynomial.evaluate(polyYD, t)];
    return normalized ? new Vector(c, Vector2.normalize(tv)) : new Vector(c, tv);
  }

  getNormalVectorAtTime(t, normalized = false) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    const c = this.getParametricEquation()(t);
    const tv = [Polynomial.evaluate(polyXD, t), Polynomial.evaluate(polyYD, t)];
    const nv = Maths.sign(this.getCurvatureAtTime(t)) < 0 ? Vector2.rotate(tv, -Maths.PI / 2) : Vector2.rotate(tv, Maths.PI / 2);
    return normalized ? new Vector(c, Vector2.normalize(nv)) : new Vector(c, nv);
  }

  getCurvatureAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD1, polyYD1] = [Polynomial.derivative(polyX, 1), Polynomial.derivative(polyY, 1)];
    const [polyXD2, polyYD2] = [Polynomial.derivative(polyX, 2), Polynomial.derivative(polyY, 2)];
    const d1x = Polynomial.evaluate(polyXD1, t);
    const d1y = Polynomial.evaluate(polyYD1, t);
    const d2x = Polynomial.evaluate(polyXD2, t);
    const d2y = Polynomial.evaluate(polyYD2, t);
    const num = Vector2.cross([d1x, d1y], [d2x, d2y]);
    const den = Maths.pow(d1x ** 2 + d1y ** 2, 3 / 2);
    if (num === 0 && den === 0) return Infinity;
    return num / den;
  }

  getOsculatingCircleAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const cvt = this.getCurvatureAtTime(t);
    if (cvt === Infinity) return null;
    if (cvt === 0) return null;
    const r = Maths.abs(1 / cvt);
    const c = this.getPointAtTime(t).moveAlongAngle(this.getNormalVectorAtTime(t).angle, r);
    return new Circle(c, r);
  }

  splitAtTimes(times) {
    Assert.condition(times.every(t => t > 0 && t < 1), "[G]The `times` should all be a number between 0(not including) and 1(not including).");
    const ret = [];
    const epsilon = optioner.options.epsilon;
    times = Utility.sortBy(Utility.uniqWith(times, (a, b) => Maths.equalTo(a, b, epsilon)), [n => n]);
    [0, ...times, 1].forEach((_, index, arr) => {
      if (index !== arr.length - 1) {
        ret.push(this.portionOfExtend(arr[index], arr[index + 1]));
      }
    });
    return ret;
  }

  splitAtTime(t) {
    Assert.condition(t > 0 && t < 1, "[G]The `t` should be a number between 0(not including) and 1(not including).");
    return [this.portionOfExtend(0, t), this.portionOfExtend(t, 1)];
  }

  portionOf(t1, t2) {
    const epsilon = optioner.options.epsilon;
    Assert.condition(t1 >= 0 && t1 <= 1, "[G]The `t1` should be a number between 0(including) and 1(including).");
    Assert.condition(t2 >= 0 && t2 <= 1, "[G]The `t2` should be a number between 0(including) and 1(including).");
    Assert.condition(!Maths.equalTo(t1, t2, epsilon), "[G]The `t1` and `t2` should not be equal.");
    return this.portionOfExtend(t1, t2);
  }

  portionOfExtend(t1, t2) {
    const epsilon = optioner.options.epsilon;
    Assert.isRealNumber(t1, "t1");
    Assert.isRealNumber(t2, "t2");
    Assert.condition(!Maths.equalTo(t1, t2, epsilon), "[G]The `t1` and `t2` should not be equal.");
    if (t1 > t2) [t1, t2] = [t2, t1];
    const {
      point1Coordinates: [x0, y0],
      controlPointCoordinates: [x1, y1],
      point2Coordinates: [x2, y2]
    } = this;
    const a = (t1 - 1) ** 2;
    const b = -2 * (t1 - 1) * t1;
    const c = t1 ** 2;
    const d = (t1 - 1) * (t2 - 1);
    const e = t1 + t2 - 2 * t1 * t2;
    const f = t1 * t2;
    const g = (t2 - 1) ** 2;
    const h = -2 * (t2 - 1) * t2;
    const i = t2 ** 2;
    const matrix = [a, b, c, d, e, f, g, h, i];
    const xs = Matrix3.dotVector3(matrix, [x0, x1, x2]);
    const ys = Matrix3.dotVector3(matrix, [y0, y1, y2]);
    return new QuadraticBezier(xs[0], ys[0], xs[2], ys[2], xs[1], ys[1]);
  }

  toPath(closed = false) {
    const path = new Path();
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPointCoordinates: cpc
    } = this;
    path.appendCommand(Path.moveTo(c1));
    path.appendCommand(Path.quadraticBezierTo(cpc, c2));
    path.closed = closed;
    return path;
  }

  apply(transformation) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPointCoordinates: cpc
    } = this;
    const nc1 = transformation.transformCoordinates(c1);
    const nc2 = transformation.transformCoordinates(c2);
    const ncpc = transformation.transformCoordinates(cpc);
    return new QuadraticBezier(nc1, nc2, ncpc);
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPointCoordinates: cpc
    } = this;
    g.moveTo(...c1);
    g.quadraticBezierTo(...cpc, ...c2);
    return g;
  }

  clone() {
    return new QuadraticBezier(this.point1X, this.point1Y, this.point2X, this.point2Y, this.controlPointX, this.controlPointY);
  }

  copyFrom(shape) {
    if (shape === null) shape = new QuadraticBezier();

    this._setPoint1X(shape._point1X);

    this._setPoint1Y(shape._point1Y);

    this._setPoint2X(shape._point2X);

    this._setPoint2Y(shape._point2Y);

    this._setControlPointX(shape._controlPointX);

    this._setControlPointY(shape._controlPointY);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tpoint1X: ${this.point1X}`, `\tpoint1Y: ${this.point1Y}`, `\tpoint2X: ${this.point2X}`, `\tpoint2Y: ${this.point2Y}`, `\tcontrolPointX: ${this.controlPointX}`, `\tcontrolPointY: ${this.controlPointY}`, `}`].join("\n");
  }

  toArray() {
    return [this.point1X, this.point1Y, this.point2X, this.point2Y, this.controlPointX, this.controlPointY];
  }

  toObject() {
    return {
      point1X: this.point1X,
      point1Y: this.point1Y,
      point2X: this.point2X,
      point2Y: this.point2Y,
      controlPointX: this.controlPointX,
      controlPointY: this.controlPointY
    };
  }

}, (_applyDecoratedDescriptor(_class2$5.prototype, "extrema", [stated], Object.getOwnPropertyDescriptor(_class2$5.prototype, "extrema"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "dimensionallyDegenerate", [stated], Object.getOwnPropertyDescriptor(_class2$5.prototype, "dimensionallyDegenerate"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "nonDimensionallyDegenerate", [stated], Object.getOwnPropertyDescriptor(_class2$5.prototype, "nonDimensionallyDegenerate"), _class2$5.prototype), _applyDecoratedDescriptor(_class2$5.prototype, "getBoundingBox", [stated], Object.getOwnPropertyDescriptor(_class2$5.prototype, "getBoundingBox"), _class2$5.prototype)), _class2$5)) || _class$I;

var _class$H, _class2$4;

let Bezier = validGeometry(_class$H = (_class2$4 = class Bezier extends Geometry {
  constructor(a0, a1, a2, a3, a4, a5, a6, a7) {
    super();
    this._point1X = NaN;
    this._point1Y = NaN;
    this._point2X = NaN;
    this._point2Y = NaN;
    this._controlPoint1X = NaN;
    this._controlPoint1Y = NaN;
    this._controlPoint2X = NaN;
    this._controlPoint2Y = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        point1X: a0,
        point1Y: a1,
        point2X: a2,
        point2Y: a3,
        controlPoint1X: a4,
        controlPoint1Y: a5,
        controlPoint2X: a6,
        controlPoint2Y: a7
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        point1Coordinates: a0,
        point2Coordinates: a1,
        controlPoint1Coordinates: a2,
        controlPoint2Coordinates: a3
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        point1: a0,
        point2: a1,
        controlPoint1: a2,
        controlPoint2: a3
      });
    }
  }

  get events() {
    return {
      point1XChanged: "point1X",
      point1YChanged: "point1Y",
      point2XChanged: "point2X",
      point2YChanged: "point2Y",
      controlPoint1XChanged: "controlPoint1X",
      controlPoint1YChanged: "controlPoint1Y",
      controlPoint2XChanged: "controlPoint2X",
      controlPoint2YChanged: "controlPoint2Y"
    };
  }

  _setPoint1X(value) {
    if (!Utility.isEqualTo(this._point1X, value)) this.trigger_(EventObject.simple(this, this.events.point1XChanged));
    this._point1X = value;
  }

  _setPoint1Y(value) {
    if (!Utility.isEqualTo(this._point1Y, value)) this.trigger_(EventObject.simple(this, this.events.point1YChanged));
    this._point1Y = value;
  }

  _setPoint2X(value) {
    if (!Utility.isEqualTo(this._point2X, value)) this.trigger_(EventObject.simple(this, this.events.point2XChanged));
    this._point2X = value;
  }

  _setPoint2Y(value) {
    if (!Utility.isEqualTo(this._point2Y, value)) this.trigger_(EventObject.simple(this, this.events.point2YChanged));
    this._point2Y = value;
  }

  _setControlPoint1X(value) {
    if (!Utility.isEqualTo(this._controlPoint1X, value)) this.trigger_(EventObject.simple(this, this.events.controlPoint1XChanged));
    this._controlPoint1X = value;
  }

  _setControlPoint1Y(value) {
    if (!Utility.isEqualTo(this._controlPoint1Y, value)) this.trigger_(EventObject.simple(this, this.events.controlPoint1YChanged));
    this._controlPoint1Y = value;
  }

  _setControlPoint2X(value) {
    if (!Utility.isEqualTo(this._controlPoint2X, value)) this.trigger_(EventObject.simple(this, this.events.controlPoint2XChanged));
    this._controlPoint2X = value;
  }

  _setControlPoint2Y(value) {
    if (!Utility.isEqualTo(this._controlPoint2Y, value)) this.trigger_(EventObject.simple(this, this.events.controlPoint2YChanged));
    this._controlPoint2Y = value;
  }

  get point1X() {
    return this._point1X;
  }

  set point1X(value) {
    Assert.isRealNumber(value, "point1X");

    this._setPoint1X(value);
  }

  get point1Y() {
    return this._point1Y;
  }

  set point1Y(value) {
    Assert.isRealNumber(value, "point1Y");

    this._setPoint1Y(value);
  }

  get point1Coordinates() {
    return [this._point1X, this._point1Y];
  }

  set point1Coordinates(value) {
    Assert.isCoordinates(value, "point1Coordinates");

    this._setPoint1X(Coordinates.x(value));

    this._setPoint1Y(Coordinates.y(value));
  }

  get point1() {
    return new Point(this._point1X, this._point1Y);
  }

  set point1(value) {
    this._setPoint1X(value.x);

    this._setPoint1Y(value.y);
  }

  get point2X() {
    return this._point2X;
  }

  set point2X(value) {
    Assert.isRealNumber(value, "point2X");

    this._setPoint2X(value);
  }

  get point2Y() {
    return this._point2Y;
  }

  set point2Y(value) {
    Assert.isRealNumber(value, "point2Y");

    this._setPoint2Y(value);
  }

  get point2Coordinates() {
    return [this._point2X, this._point2Y];
  }

  set point2Coordinates(value) {
    Assert.isCoordinates(value, "point2Coordinates");

    this._setPoint2X(Coordinates.x(value));

    this._setPoint2Y(Coordinates.y(value));
  }

  get point2() {
    return new Point(this._point2X, this._point2Y);
  }

  set point2(value) {
    this._setPoint2X(value.x);

    this._setPoint2Y(value.y);
  }

  get controlPoint1X() {
    return this._controlPoint1X;
  }

  set controlPoint1X(value) {
    Assert.isRealNumber(value, "controlPoint1X");

    this._setControlPoint1X(value);
  }

  get controlPoint1Y() {
    return this._controlPoint1Y;
  }

  set controlPoint1Y(value) {
    Assert.isRealNumber(value, "controlPoint1Y");

    this._setControlPoint1Y(value);
  }

  get controlPoint1Coordinates() {
    return [this._controlPoint1X, this._controlPoint1Y];
  }

  set controlPoint1Coordinates(value) {
    Assert.isCoordinates(value, "controlPoint1Coordinates");

    this._setControlPoint1X(Coordinates.x(value));

    this._setControlPoint1Y(Coordinates.y(value));
  }

  get controlPoint1() {
    return new Point(this._controlPoint1X, this._controlPoint1Y);
  }

  set controlPoint1(value) {
    this._setControlPoint1X(value.x);

    this._setControlPoint1Y(value.y);
  }

  get controlPoint2X() {
    return this._controlPoint2X;
  }

  set controlPoint2X(value) {
    Assert.isRealNumber(value, "controlPoint2X");

    this._setControlPoint2X(value);
  }

  get controlPoint2Y() {
    return this._controlPoint2Y;
  }

  set controlPoint2Y(value) {
    Assert.isRealNumber(value, "controlPoint2Y");

    this._setControlPoint2Y(value);
  }

  get controlPoint2Coordinates() {
    return [this._controlPoint2X, this._controlPoint2Y];
  }

  set controlPoint2Coordinates(value) {
    Assert.isCoordinates(value, "controlPoint2Coordinates");

    this._setControlPoint2X(Coordinates.x(value));

    this._setControlPoint2Y(Coordinates.y(value));
  }

  get controlPoint2() {
    return new Point(this._controlPoint2X, this._controlPoint2Y);
  }

  set controlPoint2(value) {
    this._setControlPoint2X(value.x);

    this._setControlPoint2Y(value.y);
  }

  initialized_() {
    return !Number.isNaN(this._point1X) && !Number.isNaN(this._point1Y) && !Number.isNaN(this._point2X) && !Number.isNaN(this._point2Y) && !Number.isNaN(this._controlPoint1X) && !Number.isNaN(this._controlPoint1Y) && !Number.isNaN(this._controlPoint2X) && !Number.isNaN(this._controlPoint2Y);
  }

  extrema() {
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.standardize(Polynomial.derivative(polyX)), Polynomial.standardize(Polynomial.derivative(polyY))];
    const {
      epsilon,
      curveEpsilon
    } = optioner.options;
    let tRoots = [...(!Polynomial.isConstant(polyXD) ? Polynomial.roots(polyXD) : []), ...(!Polynomial.isConstant(polyYD) ? Polynomial.roots(polyYD) : [])].filter(Type.isNumber);
    tRoots = Utility.uniqWith(tRoots, (a, b) => Maths.equalTo(a, b, curveEpsilon));
    return tRoots.filter(t => {
      return Maths.between(t, 0, 1, false, false, epsilon);
    }).map(t => [new Point(this.getParametricEquation()(t)), t]);
  }

  dimensionallyDegenerate() {
    if (!this.initialized_()) return true;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPoint1Coordinates: cpc1,
      controlPoint2Coordinates: cpc2
    } = this;
    const epsilon = optioner.options.epsilon;
    return Coordinates.isEqualTo(c1, c2, epsilon) && Coordinates.isEqualTo(cpc1, cpc2, epsilon) && Coordinates.isEqualTo(c1, cpc1, epsilon);
  }

  nonDimensionallyDegenerate() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPoint1Coordinates: cpc1
    } = this;
    const [[cx3, cx2], [cy3, cy2]] = this.getPolynomial();

    if (cx3 === 0 && cy3 === 0) {
      if (cx2 === 0 && cy2 === 0) {
        return new LineSegment(c1, c2);
      }

      const [x0, y0] = c1;
      const [x1, y1] = cpc1;
      const cpc = [(-x0 + 3 * x1) / 2, (-y0 + 3 * y1) / 2];
      return new QuadraticBezier(c1, c2, cpc);
    }

    return this;
  }

  move(deltaX, deltaY) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, [deltaX, deltaY]);
    this.point2Coordinates = Vector2.add(this.point2Coordinates, [deltaX, deltaY]);
    this.controlPoint1Coordinates = Vector2.add(this.controlPoint1Coordinates, [deltaX, deltaY]);
    this.controlPoint2Coordinates = Vector2.add(this.controlPoint2Coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, Vector2.from2(angle, distance));
    this.point2Coordinates = Vector2.add(this.point2Coordinates, Vector2.from2(angle, distance));
    this.controlPoint1Coordinates = Vector2.add(this.controlPoint1Coordinates, Vector2.from2(angle, distance));
    this.controlPoint2Coordinates = Vector2.add(this.controlPoint2Coordinates, Vector2.from2(angle, distance));
    return this;
  }

  static fromFourPointsAndTimes(point1, point2, point3, point4, ts) {
    Assert.condition(ts[0] > 0 && ts[0] < 1, "[G]The first `time` should be a number between 0(not including) and 1(not including).");
    Assert.condition(ts[1] > 0 && ts[1] < 1, "[G]The second `time` should be a number between 0(not including) and 1(not including).");
    const c1 = getCoordinates(point1, "point1");
    const c2 = getCoordinates(point2, "point2");
    const c3 = getCoordinates(point3, "point3");
    const c4 = getCoordinates(point4, "point4");
    const [t1, t2] = ts;
    const ct1 = Vector2.subtract(c2, Vector2.add(Vector2.scalarMultiply(c1, (1 - t1) ** 3), Vector2.scalarMultiply(c4, t1 ** 3)));
    const ct2 = Vector2.subtract(c3, Vector2.add(Vector2.scalarMultiply(c1, (1 - t2) ** 3), Vector2.scalarMultiply(c4, t2 ** 3)));
    const m = [3 * (1 - t1) ** 2 * t1, 3 * (1 - t1) * t1 ** 2, 3 * (1 - t2) ** 2 * t2, 3 * (1 - t2) * t2 ** 2];
    const im = Matrix2.invert(m);
    if (im === undefined) return null;
    const [cp1x, cp2x] = Matrix2.dotVector2(im, [Coordinates.x(ct1), Coordinates.x(ct2)]);
    const [cp1y, cp2y] = Matrix2.dotVector2(im, [Coordinates.y(ct1), Coordinates.y(ct2)]);
    return new Bezier(c1, c4, [cp1x, cp1y], [cp2x, cp2y]);
  }

  isPointOn(point) {
    return !Number.isNaN(this.getTimeOfPoint(point));
  }

  reverse() {
    [this.point1Coordinates, this.point2Coordinates] = [this.point2Coordinates, this.point1Coordinates];
    [this.controlPoint1Coordinates, this.controlPoint2Coordinates] = [this.controlPoint2Coordinates, this.controlPoint1Coordinates];
  }

  getLength() {
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    return bezierLength(polyXD, polyYD);
  }

  getPolynomial() {
    const {
      point1Coordinates: [x0, y0],
      controlPoint1Coordinates: [x1, y1],
      controlPoint2Coordinates: [x2, y2],
      point2Coordinates: [x3, y3]
    } = this;
    const m = [-1, 3, -3, 1, 3, -6, 3, 0, -3, 3, 0, 0, 1, 0, 0, 0];
    const polyX = Matrix4.dotVector4(m, [x0, x1, x2, x3]);
    const polyY = Matrix4.dotVector4(m, [y0, y1, y2, y3]);
    return [polyX, polyY];
  }

  getBoundingBox() {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const extrema = this.extrema().map(([p]) => p);
    extrema.concat([this.point1, this.point2]).forEach(point => {
      const {
        x,
        y
      } = point;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    });
    return [minX, minY, maxX - minX, maxY - minY];
  }

  isTripleLines() {
    const coefs = this.getImplicitFunctionCoefs();
    const curveEpsilon = optioner.options.curveEpsilon;
    if (coefs.length !== 10) return false;
    const [a, b, c, d, e, f, g, h, i, j] = coefs;
    const l = Maths.cbrt(a);
    const m = Maths.cbrt(d);
    const n = Maths.cbrt(j);
    return Maths.equalTo(b, 3 * l ** 2 * m, curveEpsilon) && Maths.equalTo(c, 3 * l * m ** 2, curveEpsilon) && Maths.equalTo(e, 3 * l ** 2 * n, curveEpsilon) && Maths.equalTo(f, 6 * l * m * n, curveEpsilon) && Maths.equalTo(g, 3 * m ** 2 * n, curveEpsilon) && Maths.equalTo(h, 3 * l * n ** 2, curveEpsilon) && Maths.equalTo(i, 3 * m * n ** 2, curveEpsilon);
  }

  getParametricEquation() {
    const [polyX, polyY] = this.getPolynomial();
    return function (t) {
      const x = Polynomial.evaluate(polyX, t);
      const y = Polynomial.evaluate(polyY, t);
      return [x, y];
    };
  }

  getImplicitFunctionCoefs() {
    const [[cx3, cx2, cx1, cx0], [cy3, cy2, cy1, cy0]] = this.getPolynomial();
    const [cx02, cx03, cy02, cy03] = [cx0 ** 2, cx0 ** 3, cy0 ** 2, cy0 ** 3];
    const [cx12, cx13, cy12, cy13] = [cx1 ** 2, cx1 ** 3, cy1 ** 2, cy1 ** 3];
    const [cx22, cx23, cy22, cy23] = [cx2 ** 2, cx2 ** 3, cy2 ** 2, cy2 ** 3];
    const [cx32, cx33, cy32, cy33] = [cx3 ** 2, cx3 ** 3, cy3 ** 2, cy3 ** 3];
    const epsilon = optioner.options.epsilon;

    if (Maths.equalTo(cx3, 0, epsilon) && Maths.equalTo(cy3, 0, epsilon)) {
      if (Maths.equalTo(cx2, 0, epsilon) && Maths.equalTo(cy2, 0, epsilon)) {

        const a = cy1;
        const b = -cx1;
        const c = cx1 * cy0 - cx0 * cy1;
        return [a, b, c];
      }

      const a = cy22;
      const b = -2 * cx2 * cy2;
      const c = cx22;
      const d = -cx2 * cy12 + 2 * cx2 * cy0 * cy2 + cx1 * cy1 * cy2 - 2 * cx0 * cy22;
      const e = -2 * cx22 * cy0 + cx1 * cx2 * cy1 - cx12 * cy2 + 2 * cx0 * cx2 * cy2;
      const f = cx22 * cy02 - cx1 * cx2 * cy0 * cy1 + cx0 * cx2 * cy12 + cx12 * cy0 * cy2 - 2 * cx0 * cx2 * cy0 * cy2 - cx0 * cx1 * cy1 * cy2 + cx02 * cy22;
      return [a, b, c, d, e, f];
    }

    const a = -cy33;
    const b = 3 * cx3 * cy32;
    const c = -3 * cx32 * cy3;
    const d = cx33;
    const e = -cx3 * cy23 + 3 * cx3 * cy1 * cy2 * cy3 + cx2 * cy22 * cy3 - 3 * cx3 * cy0 * cy32 - 2 * cx2 * cy1 * cy32 - cx1 * cy2 * cy32 + 3 * cx0 * cy33;
    const f = -3 * cx32 * cy1 * cy2 + 2 * cx2 * cx3 * cy22 + 6 * cx32 * cy0 * cy3 + cx2 * cx3 * cy1 * cy3 - 2 * cx22 * cy2 * cy3 - cx1 * cx3 * cy2 * cy3 + 3 * cx1 * cx2 * cy32 - 6 * cx0 * cx3 * cy32;
    const g = -3 * cx33 * cy0 + cx2 * cx32 * cy1 - cx22 * cx3 * cy2 + 2 * cx1 * cx32 * cy2 + cx23 * cy3 - 3 * cx1 * cx2 * cx3 * cy3 + 3 * cx0 * cx32 * cy3;
    const h = 3 * cx32 * cy0 * cy1 * cy2 - cx32 * cy13 + cx2 * cx3 * cy12 * cy2 - 2 * cx2 * cx3 * cy0 * cy22 - cx1 * cx3 * cy1 * cy22 + 2 * cx0 * cx3 * cy23 - 3 * cx32 * cy02 * cy3 - cx2 * cx3 * cy0 * cy1 * cy3 - cx22 * cy12 * cy3 + 2 * cx1 * cx3 * cy12 * cy3 + 2 * cx22 * cy0 * cy2 * cy3 + cx1 * cx3 * cy0 * cy2 * cy3 + cx1 * cx2 * cy1 * cy2 * cy3 - 6 * cx0 * cx3 * cy1 * cy2 * cy3 - 2 * cx0 * cx2 * cy22 * cy3 - 3 * cx1 * cx2 * cy0 * cy32 + 6 * cx0 * cx3 * cy0 * cy32 - cx12 * cy1 * cy32 + 4 * cx0 * cx2 * cy1 * cy32 + 2 * cx0 * cx1 * cy2 * cy32 - 3 * cx02 * cy33;
    const i = 3 * cx33 * cy02 - 2 * cx2 * cx32 * cy0 * cy1 + cx1 * cx32 * cy12 + 2 * cx22 * cx3 * cy0 * cy2 - 4 * cx1 * cx32 * cy0 * cy2 - cx1 * cx2 * cx3 * cy1 * cy2 + 3 * cx0 * cx32 * cy1 * cy2 + cx12 * cx3 * cy22 - 2 * cx0 * cx2 * cx3 * cy22 - 2 * cx23 * cy0 * cy3 + 6 * cx1 * cx2 * cx3 * cy0 * cy3 - 6 * cx0 * cx32 * cy0 * cy3 + cx1 * cx22 * cy1 * cy3 - 2 * cx12 * cx3 * cy1 * cy3 - cx0 * cx2 * cx3 * cy1 * cy3 - cx12 * cx2 * cy2 * cy3 + 2 * cx0 * cx22 * cy2 * cy3 + cx0 * cx1 * cx3 * cy2 * cy3 + cx13 * cy32 - 3 * cx0 * cx1 * cx2 * cy32 + 3 * cx02 * cx3 * cy32;
    const j = cx2 * cx32 * cy02 * cy1 - cx33 * cy03 - cx1 * cx32 * cy0 * cy12 + cx0 * cx32 * cy13 - cx22 * cx3 * cy02 * cy2 + 2 * cx1 * cx32 * cy02 * cy2 + cx1 * cx2 * cx3 * cy0 * cy1 * cy2 - 3 * cx0 * cx32 * cy0 * cy1 * cy2 - cx0 * cx2 * cx3 * cy12 * cy2 - cx12 * cx3 * cy0 * cy22 + 2 * cx0 * cx2 * cx3 * cy0 * cy22 + cx0 * cx1 * cx3 * cy1 * cy22 - cx02 * cx3 * cy23 + cx23 * cy02 * cy3 - 3 * cx1 * cx2 * cx3 * cy02 * cy3 + 3 * cx0 * cx32 * cy02 * cy3 - cx1 * cx22 * cy0 * cy1 * cy3 + 2 * cx12 * cx3 * cy0 * cy1 * cy3 + cx0 * cx2 * cx3 * cy0 * cy1 * cy3 + cx0 * cx22 * cy12 * cy3 - 2 * cx0 * cx1 * cx3 * cy12 * cy3 + cx12 * cx2 * cy0 * cy2 * cy3 - 2 * cx0 * cx22 * cy0 * cy2 * cy3 - cx0 * cx1 * cx3 * cy0 * cy2 * cy3 - cx0 * cx1 * cx2 * cy1 * cy2 * cy3 + 3 * cx02 * cx3 * cy1 * cy2 * cy3 + cx02 * cx2 * cy22 * cy3 - cx13 * cy0 * cy32 + 3 * cx0 * cx1 * cx2 * cy0 * cy32 - 3 * cx02 * cx3 * cy0 * cy32 + cx0 * cx12 * cy1 * cy32 - 2 * cx02 * cx2 * cy1 * cy32 - cx02 * cx1 * cy2 * cy32 + cx03 * cy33;
    return [a, b, c, d, e, f, g, h, i, j];
  }

  selfIntersection() {
    const [t1, t2] = this.selfIntersectionExtend();
    if (!t1 || !t2) return [];
    const epsilon = optioner.options.epsilon;

    if (Maths.between(t1, 0, 1, false, false, epsilon) && Maths.between(t2, 0, 1, false, false, epsilon)) {
      return [t1, t2];
    }

    return [];
  }

  selfIntersectionExtend() {
    const [[cx3, cx2, cx1, cx0], [cy3, cy2, cy1, cy0]] = this.getPolynomial();
    const poly = [1, (cx3 * cy1 - cx1 * cy3) / (cx3 * cy2 - cx2 * cy3), (cx3 ** 2 * cy1 ** 2 - cx2 * cx3 * cy1 * cy2 + cx1 * cx3 * cy2 ** 2 + cx2 ** 2 * cy1 * cy3 - 2 * cx1 * cx3 * cy1 * cy3 - cx1 * cx2 * cy2 * cy3 + cx1 ** 2 * cy3 ** 2) / (cx3 * cy2 - cx2 * cy3) ** 2];
    if (!Polynomial.is(poly)) return [];
    const epsilon = optioner.options.epsilon;
    const tRoots = Polynomial.roots(poly).filter(Type.isNumber);
    if (tRoots.length === 0) return [];
    if (Maths.equalTo(tRoots[0], tRoots[1], epsilon)) return [];
    return [tRoots[0], tRoots[1]];
  }

  getClosestPointFrom(point) {
    const [x, y] = getCoordinates(point, "point");
    const [polyX, polyY] = this.getPolynomial();
    let polyXM = Polynomial.add(polyX, [-x]);
    let polyYM = Polynomial.add(polyY, [-y]);
    polyXM = Polynomial.multiply(polyXM, polyXM);
    polyYM = Polynomial.multiply(polyYM, polyYM);
    const polySquaredDistance = Polynomial.add(polyXM, polyYM);
    const polyD1 = Polynomial.derivative(polySquaredDistance);
    const ts = Polynomial.roots(polyD1).filter(r => Type.isNumber(r) && r > 0 && r < 1);
    ts.push(0, 1);
    let minT = NaN;
    let minSd = Infinity;
    ts.forEach(t => {
      const sd = Polynomial.evaluate(polySquaredDistance, t);

      if (sd < minSd) {
        minSd = sd;
        minT = t;
      }
    });
    return new Point(Polynomial.evaluate(polyX, minT), Polynomial.evaluate(polyY, minT));
  }

  getPointAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [x, y] = this.getParametricEquation()(t);
    return new Point(x, y);
  }

  getPointAtTimeExtend(t) {
    Assert.isRealNumber(t, "t");
    const [x, y] = this.getParametricEquation()(t);
    return new Point(x, y);
  }

  getTimeOfPoint(point) {
    const t = this.getTimeOfPointExtend(point);
    if (Maths.between(t, 0, 1, false, false, optioner.options.epsilon)) return Maths.clamp(t, 0, 1);
    return NaN;
  }

  getTimesOfPointExtend(point) {
    const [x, y] = getCoordinates(point, "point");
    const [polyX, polyY] = this.getPolynomial();
    const epsilon = optioner.options.epsilon;
    const curveEpsilon = optioner.options.curveEpsilon;
    const xPoly = Polynomial.standardize(Polynomial.add(polyX, [-x]));
    const yPoly = Polynomial.standardize(Polynomial.add(polyY, [-y]));
    let xRootsM = undefined;
    let yRootsM = undefined;

    if (Polynomial.isConstant(xPoly)) {
      if (!Maths.equalTo(Polynomial.coef(xPoly, 0), 0, epsilon)) return [];
    } else {
      xRootsM = Polynomial.rootsMultiplicity(Polynomial.roots(xPoly).filter(Type.isNumber), curveEpsilon);
      if (xRootsM.length === 0) return [];
    }

    if (Polynomial.isConstant(yPoly)) {
      if (!Maths.equalTo(Polynomial.coef(yPoly, 0), 0, epsilon)) return [];
    } else {
      yRootsM = Polynomial.rootsMultiplicity(Polynomial.roots(yPoly).filter(Type.isNumber), curveEpsilon);
      if (yRootsM.length === 0) return [];
    }

    if (xRootsM !== undefined && yRootsM === undefined) {
      return xRootsM.map(rm => rm.root);
    }

    if (xRootsM === undefined && yRootsM !== undefined) {
      return yRootsM.map(rm => rm.root);
    }

    if (xRootsM !== undefined && yRootsM !== undefined) {
      let ret = [];

      for (let xr of xRootsM) {
        for (let yr of yRootsM) {
          if (Maths.equalTo(xr.root, yr.root, curveEpsilon)) {
            ret.push(Maths.avg(xr.root, yr.root));
          }
        }
      }

      return ret;
    }

    return [];
  }

  getTimeOfPointExtend(point) {
    const times = this.getTimesOfPointExtend(point);
    if (times.length === 0) return NaN;
    const epsilon = optioner.options.epsilon;
    Utility.sortWith(times, (a, b) => {
      const d1 = Maths.between(a, 0, 1, false, false, epsilon);
      const d2 = Maths.between(b, 0, 1, false, false, epsilon);
      if (d1 && !d2) return -1;
      if (!d1 && d2) return 1;
      return a - b;
    });
    return times[0];
  }

  getTangentVectorAtTime(t, normalized = false) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    const c = this.getParametricEquation()(t);
    const tv = [Polynomial.evaluate(polyXD, t), Polynomial.evaluate(polyYD, t)];
    return normalized ? new Vector(c, Vector2.normalize(tv)) : new Vector(c, tv);
  }

  getNormalVectorAtTime(t, normalized = false) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD, polyYD] = [Polynomial.derivative(polyX), Polynomial.derivative(polyY)];
    const tv = [Polynomial.evaluate(polyXD, t), Polynomial.evaluate(polyYD, t)];
    const c = this.getParametricEquation()(t);
    const cvt = this.getCurvatureAtTime(t);
    const sign = Maths.sign(cvt);
    const nv = Object.is(sign, -1) || Object.is(sign, -0) ? Vector2.rotate(tv, -Maths.PI / 2) : Vector2.rotate(tv, Maths.PI / 2);
    return normalized ? new Vector(c, Vector2.normalize(nv)) : new Vector(c, nv);
  }

  getCurvatureAtTime(t) {
    Assert.condition(t >= 0 && t <= 1, "[G]The `t` must be between 0(including) and 1(including).");
    const [polyX, polyY] = this.getPolynomial();
    const [polyXD1, polyYD1] = [Polynomial.derivative(polyX, 1), Polynomial.derivative(polyY, 1)];
    const [polyXD2, polyYD2] = [Polynomial.derivative(polyX, 2), Polynomial.derivative(polyY, 2)];
    const d1x = Polynomial.evaluate(polyXD1, t);
    const d1y = Polynomial.evaluate(polyYD1, t);
    const d2x = Polynomial.evaluate(polyXD2, t);
    const d2y = Polynomial.evaluate(polyYD2, t);
    const num = Vector2.cross([d1x, d1y], [d2x, d2y]);
    const den = Maths.pow(d1x ** 2 + d1y ** 2, 3 / 2);
    if (num === 0 && den === 0) return Infinity;
    return num / den;
  }

  getOsculatingCircleAtTime(t) {
    const cvt = this.getCurvatureAtTime(t);
    const p = this.getPointAtTime(t);
    if (cvt === Infinity || cvt === -Infinity) return null;
    if (cvt === 0) return null;
    const r = Maths.abs(1 / cvt);
    const angle = this.getNormalVectorAtTime(t).angle;
    p.moveAlongAngle(angle, r);
    return new Circle(p, r);
  }

  splitAtTimes(times) {
    Assert.condition(times.every(t => t > 0 && t < 1), "[G]The `times` should all be a number between 0(not including) and 1(not including).");
    const ret = [];
    const epsilon = optioner.options.epsilon;
    times = Utility.sortBy(Utility.uniqWith(times, (a, b) => Maths.equalTo(a, b, epsilon)), [n => n]);
    [0, ...times, 1].forEach((_, index, arr) => {
      if (index !== arr.length - 1) {
        ret.push(this.portionOfExtend(arr[index], arr[index + 1]));
      }
    });
    return ret;
  }

  splitAtTime(t) {
    Assert.condition(t > 0 && t < 1, "[G]The `t` should be a number between 0(not including) and 1(not including).");
    return [this.portionOfExtend(0, t), this.portionOfExtend(t, 1)];
  }

  portionOf(t1, t2) {
    const epsilon = optioner.options.epsilon;
    Assert.condition(t1 >= 0 && t2 <= 1, "[G]The `t1` should be a number between 0(including) and 1(including).");
    Assert.condition(t2 >= 0 && t2 <= 1, "[G]The `t2` should be a number between 0(including) and 1(including).");
    Assert.condition(!Maths.equalTo(t1, t2, epsilon), "[G]The `t1` and `t2` should not be equal.");
    return this.portionOfExtend(t1, t2);
  }

  portionOfExtend(t1, t2) {
    const epsilon = optioner.options.epsilon;
    Assert.isRealNumber(t1, "t1");
    Assert.isRealNumber(t2, "t2");
    Assert.condition(!Maths.equalTo(t1, t2, epsilon), "[G]The `t1` and `t2` should not be equal.");
    if (t1 > t2) [t1, t2] = [t2, t1];
    const {
      point1Coordinates: [x0, y0],
      controlPoint1Coordinates: [x1, y1],
      controlPoint2Coordinates: [x2, y2],
      point2Coordinates: [x3, y3]
    } = this;
    const a = -((t1 - 1) ** 3);
    const b = 3 * (t1 - 1) ** 2 * t1;
    const c = -3 * (t1 - 1) * t1 ** 2;
    const d = t1 ** 3;
    const e = -(t2 - 1) * (t1 - 1) ** 2;
    const f = (t1 - 1) * (-2 * t1 - t2 + 3 * t1 * t2);
    const g = t1 * (t1 + 2 * t2 - 3 * t1 * t2);
    const h = t1 ** 2 * t2;
    const i = -(t1 - 1) * (t2 - 1) ** 2;
    const j = (t2 - 1) * (-2 * t2 - t1 + 3 * t1 * t2);
    const k = t2 * (t2 + 2 * t1 - 3 * t1 * t2);
    const l = t1 * t2 ** 2;
    const m = -((t2 - 1) ** 3);
    const n = 3 * (t2 - 1) ** 2 * t2;
    const o = -3 * (t2 - 1) * t2 ** 2;
    const p = t2 ** 3;
    const matrix = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];
    const xs = Matrix4.dotVector4(matrix, [x0, x1, x2, x3]);
    const ys = Matrix4.dotVector4(matrix, [y0, y1, y2, y3]);
    return new Bezier(xs[0], ys[0], xs[3], ys[3], xs[1], ys[1], xs[2], ys[2]);
  }

  toPath(closed = false) {
    const path = new Path();
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPoint1Coordinates: cpc1,
      controlPoint2Coordinates: cpc2
    } = this;
    path.appendCommand(Path.moveTo(c1));
    path.appendCommand(Path.bezierTo(cpc1, cpc2, c2));
    path.closed = closed;
    return path;
  }

  apply(transformation) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPoint1Coordinates: cpc1,
      controlPoint2Coordinates: cpc2
    } = this;
    const nc1 = transformation.transformCoordinates(c1);
    const nc2 = transformation.transformCoordinates(c2);
    const ncpc1 = transformation.transformCoordinates(cpc1);
    const ncpc2 = transformation.transformCoordinates(cpc2);
    return new Bezier(nc1, nc2, ncpc1, ncpc2);
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      controlPoint1Coordinates: cpc1,
      controlPoint2Coordinates: cpc2
    } = this;
    g.moveTo(...c1);
    g.bezierTo(...cpc1, ...cpc2, ...c2);
    return g;
  }

  clone() {
    return new Bezier(this.point1X, this.point1Y, this.point2X, this.point2Y, this.controlPoint1X, this.controlPoint1Y, this.controlPoint2X, this.controlPoint2Y);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Bezier();

    this._setPoint1X(shape._point1X);

    this._setPoint1Y(shape._point1Y);

    this._setPoint2X(shape._point2X);

    this._setPoint2Y(shape._point2Y);

    this._setControlPoint1X(shape._controlPoint1X);

    this._setControlPoint1Y(shape._controlPoint1Y);

    this._setControlPoint2X(shape._controlPoint2X);

    this._setControlPoint2Y(shape._controlPoint2Y);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tpoint1X: ${this.point1X},`, `\tpoint1Y: ${this.point1Y},`, `\tpoint2X: ${this.point2X},`, `\tpoint2Y: ${this.point2Y},`, `\tcontrolPoint1X: ${this.controlPoint1X},`, `\tcontrolPoint1Y: ${this.controlPoint1Y},`, `\tcontrolPoint2X: ${this.controlPoint2X},`, `\tcontrolPoint2Y: ${this.controlPoint2Y}`, `}`].join("\n");
  }

  toArray() {
    return [this.point1X, this.point1Y, this.point2X, this.point2Y, this.controlPoint1X, this.controlPoint1Y, this.controlPoint2X, this.controlPoint2Y];
  }

  toObject() {
    return {
      point1X: this.point1X,
      point1Y: this.point1Y,
      point2X: this.point2X,
      point2Y: this.point2Y,
      controlPoint1X: this.controlPoint1X,
      controlPoint1Y: this.controlPoint1Y,
      controlPoint2X: this.controlPoint2X,
      controlPoint2Y: this.controlPoint2Y
    };
  }

}, (_applyDecoratedDescriptor(_class2$4.prototype, "extrema", [stated], Object.getOwnPropertyDescriptor(_class2$4.prototype, "extrema"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "dimensionallyDegenerate", [stated], Object.getOwnPropertyDescriptor(_class2$4.prototype, "dimensionallyDegenerate"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "nonDimensionallyDegenerate", [stated], Object.getOwnPropertyDescriptor(_class2$4.prototype, "nonDimensionallyDegenerate"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "getPolynomial", [stated], Object.getOwnPropertyDescriptor(_class2$4.prototype, "getPolynomial"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "getBoundingBox", [stated], Object.getOwnPropertyDescriptor(_class2$4.prototype, "getBoundingBox"), _class2$4.prototype)), _class2$4)) || _class$H;

function next(i, l, closed) {
  if (i === l - 1) return closed ? 0 : -1;
  return i + 1;
}
function prev(i, l, closed) {
  if (i === 0) return closed ? l - 1 : -1;
  return i - 1;
}

function bezierPathIntegral(x0, y0, x1, y1, x2, y2, x3, y3) {
  return (x3 * (-y0 - 3 * y1 - 6 * y2) - 3 * x2 * (y0 + y1 - 2 * y3) + 3 * x1 * (-2 * y0 + y2 + y3) + x0 * (6 * y1 + 3 * y2 + y3)) / 20;
}
function quadraticBezierPathIntegral(x0, y0, x1, y1, x2, y2) {
  return (x2 * (-y0 - 2 * y1) + 2 * x1 * (y2 - y0) + x0 * (2 * y1 + y2)) / 6;
}
function lineSegmentPathIntegral(x0, y0, x1, y1) {
  return (x0 * y1 - x1 * y0) / 2;
}
function arcPathIntegral(cx, cy, rx, ry, phi, positive, sa, ea) {
  const cosPhi = Maths.cos(phi);
  const sinPhi = Maths.sin(phi);
  sa = Angle.simplify(sa);
  ea = Angle.simplify(ea);
  if (positive && ea < sa) ea += 2 * Maths.PI;
  if (!positive && sa < ea) sa += 2 * Maths.PI;
  return ((ea - sa) * rx * ry * (cosPhi ** 2 + sinPhi ** 2) + rx * (cosPhi * cy - cx * sinPhi) * (Maths.cos(sa) - Maths.cos(ea)) - ry * (cosPhi * cx + cy * sinPhi) * (Maths.sin(sa) - Maths.sin(ea))) / 2;
}

function superPreprocess(superMethodName) {
  return function (target, propertyKey, descriptor) {
    const method = descriptor.value;

    descriptor.value = function () {
      const superClass = Object.getPrototypeOf(Object.getPrototypeOf(this));
      const superMethod = superClass[superMethodName];

      if (superMethod && Type.isFunction(superMethod)) {
        const ret = superMethod.call(this, propertyKey);
        if (ret !== this) return ret;
      }

      return method.call(this);
    };
  };
}

class BaseRelationship {
  constructor() {
    this.degeneration = {
      relationship: this,
      inverse: false
    };
  }

  handleDegeneration(p) {
    if (this.degeneration.relationship === null) {
      return BaseRelationship._nullRelationship[p]();
    }

    if (this.degeneration.relationship !== this) {
      var _relationship, _relationship2;

      const {
        relationship,
        inverse
      } = this.degeneration;
      const inversePredicates = {
        equal: "equal",
        separate: "separate",
        contain: inverse ? "containedBy" : "contain",
        containedBy: inverse ? "contain" : "containedBy",
        intersect: "intersect",
        strike: "strike",
        contact: "contact",
        cross: "cross",
        touch: "touch",
        block: inverse ? "blockedBy" : "block",
        blockedBy: inverse ? "block" : "blockedBy",
        connect: "connect",
        coincide: " coincide"
      };
      return (_relationship = (_relationship2 = relationship[inversePredicates[p]]) == null ? void 0 : _relationship2.call(relationship)) != null ? _relationship : BaseRelationship._nullRelationship[p]();
    }

    return this;
  }

  uniqCoordinates_(coordinatesArray) {
    return Utility.uniqWith(coordinatesArray, (a, b) => Coordinates.isEqualTo(a, b, optioner.options.epsilon));
  }

  relate(predicates) {
    if (predicates !== undefined) {
      predicates = Utility.uniqBy(predicates, p => p);
    } else {
      predicates = Object.values(RelationshipPredicate);
    }

    const result = {};
    predicates.forEach(p => {
      if (this[p] !== undefined) {
        result[p] = this[p]();
      }
    });
    return result;
  }

}
BaseRelationship._nullRelationship = {
  equal: () => undefined,
  separate: () => undefined,
  contain: () => undefined,
  containedBy: () => undefined,
  intersect: () => [],
  strike: () => [],
  contact: () => [],
  cross: () => [],
  touch: () => [],
  block: () => [],
  blockedBy: () => [],
  connect: () => [],
  coincide: () => []
};

var _dec$r, _dec2$o, _dec3$o, _dec4$o, _dec5$o, _dec6$o, _class$G;
let LineLineSegment = (_dec$r = superPreprocess("handleDegeneration"), _dec2$o = superPreprocess("handleDegeneration"), _dec3$o = superPreprocess("handleDegeneration"), _dec4$o = superPreprocess("handleDegeneration"), _dec5$o = superPreprocess("handleDegeneration"), _dec6$o = superPreprocess("handleDegeneration"), (_class$G = class LineLineSegment extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }
  }

  onSameTrajectory() {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = this.geometry2;
    const [a, b, c] = this.geometry1.getImplicitFunctionCoefs();
    const d1 = a * x1 + b * y1 + c;
    const d2 = a * x2 + b * y2 + c;
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(d1, 0, epsilon) && Maths.equalTo(d2, 0, epsilon);
  }

  intersection() {
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2
    } = this.geometry2;
    const [a, b, c] = this.geometry1.getImplicitFunctionCoefs();
    const d1 = a * x1 + b * y1 + c;
    const d2 = a * x2 + b * y2 + c;
    const epsilon = optioner.options.epsilon;
    const s1 = Maths.sign(d1, epsilon);
    const s2 = Maths.sign(d2, epsilon);
    if (Maths.equalTo(d1 - d2, 0, epsilon)) return [];
    const intersection = [];

    if (s1 === 0 !== (s2 === 0) || s1 * s2 === -1) {
      const t = d1 / (d1 - d2);
      intersection.push({
        c: Vector2.lerp([x1, y1], [x2, y2], t),
        t2: t
      });
    }

    return intersection;
  }

  separate() {
    if (this.onSameTrajectory()) return false;
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => !Maths.equalTo(i.t2, 0, epsilon) && !Maths.equalTo(i.t2, 1, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)).map(i => new Point(i.c));
  }

  coincide() {
    if (this.onSameTrajectory()) return [this.geometry2.clone()];
    return [];
  }

}, (_applyDecoratedDescriptor(_class$G.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$G.prototype, "onSameTrajectory"), _class$G.prototype), _applyDecoratedDescriptor(_class$G.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$G.prototype, "intersection"), _class$G.prototype), _applyDecoratedDescriptor(_class$G.prototype, "separate", [_dec$r], Object.getOwnPropertyDescriptor(_class$G.prototype, "separate"), _class$G.prototype), _applyDecoratedDescriptor(_class$G.prototype, "intersect", [_dec2$o], Object.getOwnPropertyDescriptor(_class$G.prototype, "intersect"), _class$G.prototype), _applyDecoratedDescriptor(_class$G.prototype, "strike", [_dec3$o], Object.getOwnPropertyDescriptor(_class$G.prototype, "strike"), _class$G.prototype), _applyDecoratedDescriptor(_class$G.prototype, "cross", [_dec4$o], Object.getOwnPropertyDescriptor(_class$G.prototype, "cross"), _class$G.prototype), _applyDecoratedDescriptor(_class$G.prototype, "block", [_dec5$o], Object.getOwnPropertyDescriptor(_class$G.prototype, "block"), _class$G.prototype), _applyDecoratedDescriptor(_class$G.prototype, "coincide", [_dec6$o], Object.getOwnPropertyDescriptor(_class$G.prototype, "coincide"), _class$G.prototype)), _class$G));

var _dec$q, _dec2$n, _dec3$n, _dec4$n, _dec5$n, _dec6$n, _dec7$n, _class$F;
let LineQuadraticBezier = (_dec$q = superPreprocess("handleDegeneration"), _dec2$n = superPreprocess("handleDegeneration"), _dec3$n = superPreprocess("handleDegeneration"), _dec4$n = superPreprocess("handleDegeneration"), _dec5$n = superPreprocess("handleDegeneration"), _dec6$n = superPreprocess("handleDegeneration"), _dec7$n = superPreprocess("handleDegeneration"), (_class$F = class LineQuadraticBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = this.geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
    }

    const ndg2 = this.geometry2.nonDimensionallyDegenerate();

    if (ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineLineSegment(geometry1, ndg2);
      return this;
    }
  }

  intersection() {
    const [a, b, c] = this.geometry1.getImplicitFunctionCoefs();
    const [polyX, polyY] = this.geometry2.getPolynomial();
    const tPoly = Polynomial.add(Polynomial.add(Polynomial.scalarMultiply(polyX, a), Polynomial.scalarMultiply(polyY, b)), [c]);
    const tRoots = Polynomial.roots(tPoly).filter(Type.isNumber);
    const curveEpsilon = optioner.options.curveEpsilon;
    const epsilon = optioner.options.epsilon;
    const tRootsM = Polynomial.rootsMultiplicity(tRoots, curveEpsilon);
    const intersection = [];

    for (let i = 0, l = tRootsM.length; i < l; i++) {
      const t2 = tRootsM[i].root;

      if (Maths.between(t2, 0, 1, false, false, epsilon)) {
        const x = Polynomial.evaluate(polyX, t2);
        const y = Polynomial.evaluate(polyY, t2);
        intersection.push({
          c: [x, y],
          t2,
          m: tRootsM[i].multiplicity
        });
      }
    }

    return intersection;
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$F.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$F.prototype, "intersection"), _class$F.prototype), _applyDecoratedDescriptor(_class$F.prototype, "separate", [_dec$q], Object.getOwnPropertyDescriptor(_class$F.prototype, "separate"), _class$F.prototype), _applyDecoratedDescriptor(_class$F.prototype, "intersect", [_dec2$n], Object.getOwnPropertyDescriptor(_class$F.prototype, "intersect"), _class$F.prototype), _applyDecoratedDescriptor(_class$F.prototype, "strike", [_dec3$n], Object.getOwnPropertyDescriptor(_class$F.prototype, "strike"), _class$F.prototype), _applyDecoratedDescriptor(_class$F.prototype, "contact", [_dec4$n], Object.getOwnPropertyDescriptor(_class$F.prototype, "contact"), _class$F.prototype), _applyDecoratedDescriptor(_class$F.prototype, "cross", [_dec5$n], Object.getOwnPropertyDescriptor(_class$F.prototype, "cross"), _class$F.prototype), _applyDecoratedDescriptor(_class$F.prototype, "touch", [_dec6$n], Object.getOwnPropertyDescriptor(_class$F.prototype, "touch"), _class$F.prototype), _applyDecoratedDescriptor(_class$F.prototype, "block", [_dec7$n], Object.getOwnPropertyDescriptor(_class$F.prototype, "block"), _class$F.prototype)), _class$F));

var _dec$p, _dec2$m, _dec3$m, _dec4$m, _dec5$m, _dec6$m, _dec7$m, _class$E;
let LineBezier = (_dec$p = superPreprocess("handleDegeneration"), _dec2$m = superPreprocess("handleDegeneration"), _dec3$m = superPreprocess("handleDegeneration"), _dec4$m = superPreprocess("handleDegeneration"), _dec5$m = superPreprocess("handleDegeneration"), _dec6$m = superPreprocess("handleDegeneration"), _dec7$m = superPreprocess("handleDegeneration"), (_class$E = class LineBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineLineSegment(geometry1, ndg2);
    }

    if (ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new LineQuadraticBezier(geometry1, ndg2);
    }
  }

  intersection() {
    const [a, b, c] = this.geometry1.getImplicitFunctionCoefs();
    const [polyX, polyY] = this.geometry2.getPolynomial();
    const poly = Polynomial.add(Polynomial.add(Polynomial.scalarMultiply(polyX, a), Polynomial.scalarMultiply(polyY, b)), [c]);
    const tRoots = Polynomial.roots(poly).filter(Type.isNumber);
    const curveEpsilon = optioner.options.curveEpsilon;
    const tRootsM = Polynomial.rootsMultiplicity(tRoots, curveEpsilon);
    const intersection = [];

    for (let i = 0, l = tRootsM.length; i < l; i++) {
      const t2 = tRootsM[i].root;

      if (Maths.between(t2, 0, 1, false, false, curveEpsilon)) {
        const x = Polynomial.evaluate(polyX, t2);
        const y = Polynomial.evaluate(polyY, t2);
        intersection.push({
          c: [x, y],
          t2,
          m: tRootsM[i].multiplicity
        });
      }
    }

    return intersection;
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 == 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 == 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 == 1 && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 == 0 && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$E.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$E.prototype, "intersection"), _class$E.prototype), _applyDecoratedDescriptor(_class$E.prototype, "separate", [_dec$p], Object.getOwnPropertyDescriptor(_class$E.prototype, "separate"), _class$E.prototype), _applyDecoratedDescriptor(_class$E.prototype, "intersect", [_dec2$m], Object.getOwnPropertyDescriptor(_class$E.prototype, "intersect"), _class$E.prototype), _applyDecoratedDescriptor(_class$E.prototype, "strike", [_dec3$m], Object.getOwnPropertyDescriptor(_class$E.prototype, "strike"), _class$E.prototype), _applyDecoratedDescriptor(_class$E.prototype, "contact", [_dec4$m], Object.getOwnPropertyDescriptor(_class$E.prototype, "contact"), _class$E.prototype), _applyDecoratedDescriptor(_class$E.prototype, "cross", [_dec5$m], Object.getOwnPropertyDescriptor(_class$E.prototype, "cross"), _class$E.prototype), _applyDecoratedDescriptor(_class$E.prototype, "touch", [_dec6$m], Object.getOwnPropertyDescriptor(_class$E.prototype, "touch"), _class$E.prototype), _applyDecoratedDescriptor(_class$E.prototype, "block", [_dec7$m], Object.getOwnPropertyDescriptor(_class$E.prototype, "block"), _class$E.prototype)), _class$E));

var _class$D;
let LineEllipse = (_class$D = class LineEllipse extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
  }

  intersection() {
    const {
      radiusX: rx,
      radiusY: ry,
      centerX: cx,
      centerY: cy,
      rotation: phi
    } = this.geometry2;
    const [a, b, c] = this.geometry1.getImplicitFunctionCoefs();
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const [px1, px2, px3] = [rx * cosPhi, -ry * sinPhi, cx];
    const [py1, py2, py3] = [rx * sinPhi, ry * cosPhi, cy];
    let tPoly = [c + a * (-px1 + px3) + b * (-py1 + py3), 2 * (a * px2 + b * py2), c + a * (px1 + px3) + b * (py1 + py3)];
    if (tPoly[0] === 0) tPoly[0] = Number.EPSILON;
    tPoly = Polynomial.monic(tPoly);
    tPoly = tPoly.map(coef => Maths.abs(coef) < Number.EPSILON ? Number.EPSILON : coef);
    const curveEpsilon = optioner.options.curveEpsilon;
    const intersection = [];
    let tRoots = Polynomial.roots(tPoly);
    const cosAndSins = tRoots.filter(Type.isNumber).map(t => {
      const cosTheta = (1 - t ** 2) / (1 + t ** 2);
      const sinTheta = 2 * t / (1 + t ** 2);
      return [cosTheta, sinTheta];
    });
    const cosAndSinsM = Polynomial.rootsMultiplicity(cosAndSins, curveEpsilon);

    for (let i = 0, l = cosAndSinsM.length; i < l; i++) {
      const [cosTheta, sinTheta] = cosAndSinsM[i].root;
      const x = px1 * cosTheta + px2 * sinTheta + px3;
      const y = py1 * cosTheta + py2 * sinTheta + py3;
      const a = Angle.simplify(Maths.atan2(sinTheta, cosTheta));
      intersection.push({
        c: [x, y],
        a2: a,
        m: cosAndSinsM[i].multiplicity
      });
    }

    return intersection;
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  touch() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$D.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$D.prototype, "intersection"), _class$D.prototype)), _class$D);

var _dec$o, _dec2$l, _dec3$l, _dec4$l, _dec5$l, _dec6$l, _dec7$l, _class$C;
let LineArc = (_dec$o = superPreprocess("handleDegeneration"), _dec2$l = superPreprocess("handleDegeneration"), _dec3$l = superPreprocess("handleDegeneration"), _dec4$l = superPreprocess("handleDegeneration"), _dec5$l = superPreprocess("handleDegeneration"), _dec6$l = superPreprocess("handleDegeneration"), _dec7$l = superPreprocess("handleDegeneration"), (_class$C = class LineArc extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.supRelationship = new LineEllipse(geometry1, geometry2.toEllipse());
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    const [sa, ea] = this.geometry2.getStartEndAngles();
    const positive = this.geometry2.positive;
    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.filter(i => Angle.between(i.a2, sa, ea, positive, false, false, epsilon));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && !Angle.equalTo(i.a2, sa, epsilon) && !Angle.equalTo(i.a2, ea, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 == 0 && !Angle.equalTo(i.a2, sa, epsilon) && !Angle.equalTo(i.a2, ea, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$C.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$C.prototype, "intersection"), _class$C.prototype), _applyDecoratedDescriptor(_class$C.prototype, "separate", [_dec$o], Object.getOwnPropertyDescriptor(_class$C.prototype, "separate"), _class$C.prototype), _applyDecoratedDescriptor(_class$C.prototype, "intersect", [_dec2$l], Object.getOwnPropertyDescriptor(_class$C.prototype, "intersect"), _class$C.prototype), _applyDecoratedDescriptor(_class$C.prototype, "strike", [_dec3$l], Object.getOwnPropertyDescriptor(_class$C.prototype, "strike"), _class$C.prototype), _applyDecoratedDescriptor(_class$C.prototype, "contact", [_dec4$l], Object.getOwnPropertyDescriptor(_class$C.prototype, "contact"), _class$C.prototype), _applyDecoratedDescriptor(_class$C.prototype, "cross", [_dec5$l], Object.getOwnPropertyDescriptor(_class$C.prototype, "cross"), _class$C.prototype), _applyDecoratedDescriptor(_class$C.prototype, "touch", [_dec6$l], Object.getOwnPropertyDescriptor(_class$C.prototype, "touch"), _class$C.prototype), _applyDecoratedDescriptor(_class$C.prototype, "block", [_dec7$l], Object.getOwnPropertyDescriptor(_class$C.prototype, "block"), _class$C.prototype)), _class$C));

var _dec$n, _dec2$k, _dec3$k, _dec4$k, _dec5$k, _dec6$k, _dec7$k, _dec8$j, _class$B;
let RayLineSegment = (_dec$n = superPreprocess("handleDegeneration"), _dec2$k = superPreprocess("handleDegeneration"), _dec3$k = superPreprocess("handleDegeneration"), _dec4$k = superPreprocess("handleDegeneration"), _dec5$k = superPreprocess("handleDegeneration"), _dec6$k = superPreprocess("handleDegeneration"), _dec7$k = superPreprocess("handleDegeneration"), _dec8$j = superPreprocess("handleDegeneration"), (_class$B = class RayLineSegment extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.supRelationship = new LineLineSegment(geometry1.toLine(), geometry2);
  }

  onSameTrajectory() {
    var _this$supRelationship, _this$supRelationship2;

    return (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.onSameTrajectory()) != null ? _this$supRelationship : false;
  }

  intersection() {
    var _this$supRelationship3, _this$supRelationship4;

    const intersection = (_this$supRelationship3 = (_this$supRelationship4 = this.supRelationship) == null ? void 0 : _this$supRelationship4.intersection()) != null ? _this$supRelationship3 : [];
    return intersection.filter(i => this.geometry1.isPointOn(i.c));
  }

  perspective() {
    if (!this.onSameTrajectory()) throw new Error("[G]Call `onSameTrajectory` first.");
    const c1 = this.geometry1.coordinates;
    const {
      point1Coordinates: c2i,
      point2Coordinates: c2t
    } = this.geometry2;
    const t1 = this.geometry2.getTimeOfPointExtend(c1);
    return {
      c1,
      c2i,
      c2t,
      t1
    };
  }

  separate() {
    if (!this.onSameTrajectory()) {
      return this.intersection().length === 0;
    }

    const {
      t1
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return !Maths.between(t1, 0, 1, false, false, epsilon);
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => !Maths.equalTo(i.t2, 0, epsilon) && !Maths.equalTo(i.t2, 1, epsilon) && !Coordinates.isEqualTo(i.c, this.geometry1.coordinates, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, this.geometry1.coordinates, epsilon)).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && Coordinates.isEqualTo(i.c, this.geometry1.coordinates, epsilon)).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    const {
      c2i,
      c2t,
      t1
    } = this.perspective();
    const c2iOn = this.geometry1.isPointOn(c2i);
    const c2tOn = this.geometry1.isPointOn(c2t);
    const epsilon = optioner.options.epsilon;
    const coincide = [];
    const ei = Maths.equalTo(t1, 0, epsilon);
    const et = Maths.equalTo(t1, 1, epsilon);

    if (c2iOn && c2tOn) {
      coincide.push(this.geometry2.clone());
    }

    if (c2iOn && !c2tOn) {
      if (ei) {
        coincide.push(new Point(c2i));
      } else {
        coincide.push(this.geometry2.portionOf(0, t1));
      }
    }

    if (!c2iOn && c2tOn) {
      if (et) {
        coincide.push(new Point(c2t));
      } else {
        coincide.push(this.geometry2.portionOf(t1, 1));
      }
    }

    return coincide;
  }

}, (_applyDecoratedDescriptor(_class$B.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$B.prototype, "onSameTrajectory"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$B.prototype, "intersection"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "perspective", [cached], Object.getOwnPropertyDescriptor(_class$B.prototype, "perspective"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "separate", [_dec$n], Object.getOwnPropertyDescriptor(_class$B.prototype, "separate"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "intersect", [_dec2$k], Object.getOwnPropertyDescriptor(_class$B.prototype, "intersect"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "strike", [_dec3$k], Object.getOwnPropertyDescriptor(_class$B.prototype, "strike"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "cross", [_dec4$k], Object.getOwnPropertyDescriptor(_class$B.prototype, "cross"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "block", [_dec5$k], Object.getOwnPropertyDescriptor(_class$B.prototype, "block"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "blockedBy", [_dec6$k], Object.getOwnPropertyDescriptor(_class$B.prototype, "blockedBy"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "connect", [_dec7$k], Object.getOwnPropertyDescriptor(_class$B.prototype, "connect"), _class$B.prototype), _applyDecoratedDescriptor(_class$B.prototype, "coincide", [_dec8$j], Object.getOwnPropertyDescriptor(_class$B.prototype, "coincide"), _class$B.prototype)), _class$B));

var _dec$m, _dec2$j, _dec3$j, _dec4$j, _dec5$j, _dec6$j, _dec7$j, _dec8$i, _class$A;
let RayQuadraticBezier = (_dec$m = superPreprocess("handleDegeneration"), _dec2$j = superPreprocess("handleDegeneration"), _dec3$j = superPreprocess("handleDegeneration"), _dec4$j = superPreprocess("handleDegeneration"), _dec5$j = superPreprocess("handleDegeneration"), _dec6$j = superPreprocess("handleDegeneration"), _dec7$j = superPreprocess("handleDegeneration"), _dec8$i = superPreprocess("handleDegeneration"), (_class$A = class RayQuadraticBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new RayLineSegment(geometry1, ndg2);
    }

    this.supRelationship = new LineQuadraticBezier(geometry1.toLine(), geometry2);
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.filter(i => this.geometry1.isPointOn(i.c));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t2, 0, 1, true, true, epsilon) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t2, 0, 1, true, true, epsilon) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, coordinates, epsilon) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, coordinates, epsilon) && (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$A.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$A.prototype, "intersection"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "separate", [_dec$m], Object.getOwnPropertyDescriptor(_class$A.prototype, "separate"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "intersect", [_dec2$j], Object.getOwnPropertyDescriptor(_class$A.prototype, "intersect"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "strike", [_dec3$j], Object.getOwnPropertyDescriptor(_class$A.prototype, "strike"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "contact", [_dec4$j], Object.getOwnPropertyDescriptor(_class$A.prototype, "contact"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "cross", [_dec5$j], Object.getOwnPropertyDescriptor(_class$A.prototype, "cross"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "touch", [_dec6$j], Object.getOwnPropertyDescriptor(_class$A.prototype, "touch"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "block", [_dec7$j], Object.getOwnPropertyDescriptor(_class$A.prototype, "block"), _class$A.prototype), _applyDecoratedDescriptor(_class$A.prototype, "blockedBy", [_dec8$i], Object.getOwnPropertyDescriptor(_class$A.prototype, "blockedBy"), _class$A.prototype)), _class$A));

var _dec$l, _dec2$i, _dec3$i, _dec4$i, _dec5$i, _dec6$i, _dec7$i, _class$z;
let RayBezier = (_dec$l = superPreprocess("handleDegeneration"), _dec2$i = superPreprocess("handleDegeneration"), _dec3$i = superPreprocess("handleDegeneration"), _dec4$i = superPreprocess("handleDegeneration"), _dec5$i = superPreprocess("handleDegeneration"), _dec6$i = superPreprocess("handleDegeneration"), _dec7$i = superPreprocess("handleDegeneration"), (_class$z = class RayBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new RayQuadraticBezier(geometry1, ndg2);
    }

    if (ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new RayLineSegment(geometry1, ndg2);
    }

    this.supRelationship = new LineBezier(geometry1.toLine(), geometry2);
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.filter(i => this.geometry1.isPointOn(i.c));
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t2, 0, 1, true, true, epsilon) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t2, 0, 1, true, true, epsilon) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, coordinates, epsilon) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, coordinates, epsilon) && (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$z.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$z.prototype, "intersection"), _class$z.prototype), _applyDecoratedDescriptor(_class$z.prototype, "intersect", [_dec$l], Object.getOwnPropertyDescriptor(_class$z.prototype, "intersect"), _class$z.prototype), _applyDecoratedDescriptor(_class$z.prototype, "strike", [_dec2$i], Object.getOwnPropertyDescriptor(_class$z.prototype, "strike"), _class$z.prototype), _applyDecoratedDescriptor(_class$z.prototype, "contact", [_dec3$i], Object.getOwnPropertyDescriptor(_class$z.prototype, "contact"), _class$z.prototype), _applyDecoratedDescriptor(_class$z.prototype, "cross", [_dec4$i], Object.getOwnPropertyDescriptor(_class$z.prototype, "cross"), _class$z.prototype), _applyDecoratedDescriptor(_class$z.prototype, "touch", [_dec5$i], Object.getOwnPropertyDescriptor(_class$z.prototype, "touch"), _class$z.prototype), _applyDecoratedDescriptor(_class$z.prototype, "block", [_dec6$i], Object.getOwnPropertyDescriptor(_class$z.prototype, "block"), _class$z.prototype), _applyDecoratedDescriptor(_class$z.prototype, "blockedBy", [_dec7$i], Object.getOwnPropertyDescriptor(_class$z.prototype, "blockedBy"), _class$z.prototype)), _class$z));

var _dec$k, _dec2$h, _dec3$h, _dec4$h, _dec5$h, _dec6$h, _dec7$h, _dec8$h, _dec9$d, _class$y;
let RayArc = (_dec$k = superPreprocess("handleDegeneration"), _dec2$h = superPreprocess("handleDegeneration"), _dec3$h = superPreprocess("handleDegeneration"), _dec4$h = superPreprocess("handleDegeneration"), _dec5$h = superPreprocess("handleDegeneration"), _dec6$h = superPreprocess("handleDegeneration"), _dec7$h = superPreprocess("handleDegeneration"), _dec8$h = superPreprocess("handleDegeneration"), _dec9$d = superPreprocess("handleDegeneration"), (_class$y = class RayArc extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.supRelationship = new LineEllipse(geometry1.toLine(), geometry2.toEllipse());
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    const [sa, ea] = this.geometry2.getStartEndAngles();
    const positive = this.geometry2.positive;
    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.filter(i => this.geometry1.isPointOn(i.c) && Angle.between(i.a2, sa, ea, positive, false, false, epsilon));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => i.m % 2 === 1 && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon)) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => i.m % 2 === 0 && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon)) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => !Coordinates.isEqualTo(i.c, coordinates, epsilon) && (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, coordinates, epsilon) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, coordinates, epsilon) && (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$y.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$y.prototype, "intersection"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "separate", [_dec$k], Object.getOwnPropertyDescriptor(_class$y.prototype, "separate"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "intersect", [_dec2$h], Object.getOwnPropertyDescriptor(_class$y.prototype, "intersect"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "strike", [_dec3$h], Object.getOwnPropertyDescriptor(_class$y.prototype, "strike"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "contact", [_dec4$h], Object.getOwnPropertyDescriptor(_class$y.prototype, "contact"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "cross", [_dec5$h], Object.getOwnPropertyDescriptor(_class$y.prototype, "cross"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "touch", [_dec6$h], Object.getOwnPropertyDescriptor(_class$y.prototype, "touch"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "block", [_dec7$h], Object.getOwnPropertyDescriptor(_class$y.prototype, "block"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "blockedBy", [_dec8$h], Object.getOwnPropertyDescriptor(_class$y.prototype, "blockedBy"), _class$y.prototype), _applyDecoratedDescriptor(_class$y.prototype, "connect", [_dec9$d], Object.getOwnPropertyDescriptor(_class$y.prototype, "connect"), _class$y.prototype)), _class$y));

class FillRuleHelper {
  _lineCollideBox(line, box) {
    const epsilon = optioner.options.epsilon;
    const [a, b, c] = line.getImplicitFunctionCoefs();
    const minX = Box.minX(box);
    const maxX = Box.maxX(box);
    const minY = Box.minY(box);
    const maxY = Box.maxY(box);
    const sign1 = Maths.sign(a * minX + b * minY + c, epsilon);
    const sign2 = Maths.sign(a * maxX + b * minY + c, epsilon);
    const sign3 = Maths.sign(a * minX + b * maxY + c, epsilon);
    const sign4 = Maths.sign(a * maxX + b * maxY + c, epsilon);

    if (sign1 === 1 && sign2 === 1 && sign3 === 1 && sign4 === 1 || sign1 === -1 && sign2 === -1 && sign3 === -1 && sign4 === -1) {
      return false;
    }

    return true;
  }

  _rayCollideBox(ray, box) {
    const epsilon = optioner.options.epsilon;
    const [dx, dy] = Vector2.from2(ray.angle, 1);
    const [x, y] = ray.coordinates;
    const minX = Box.minX(box);
    const maxX = Box.maxX(box);
    const minY = Box.minY(box);
    const maxY = Box.maxY(box);
    if (dx === 0 && (minX === x || maxX === x)) return true;
    if (dy === 0 && (minY === y || maxY === y)) return true;
    const tMinX = (minX - x) / dx;
    const tMaxX = (maxX - x) / dx;
    const tMinY = (minY - y) / dy;
    const tMaxY = (maxY - y) / dy;
    const tMin = Maths.max(Maths.min(tMinX, tMaxX), Maths.min(tMinY, tMaxY));
    const tMax = Maths.min(Maths.max(tMinX, tMaxX), Maths.max(tMinY, tMaxY));
    return !Maths.lessThan(tMax, Maths.max(tMin, 0), epsilon);
  }

  windingNumberOfPoint(point, angle, segments, preventOn = true) {
    const epsilon = optioner.options.epsilon;
    const coordinates = getCoordinates(point, "point");
    const ray = new Ray(coordinates, angle);
    const rv = Vector2.from2(angle, 1);
    let wn = 0;

    for (let i = 0, l = segments.length; i < l; i++) {
      const seg = segments[i];
      if (!this._rayCollideBox(ray, seg.getBoundingBox())) continue;
      const intersection = seg instanceof LineSegment ? new RayLineSegment(ray, seg).intersection() : seg instanceof Bezier ? new RayBezier(ray, seg).intersection() : seg instanceof QuadraticBezier ? new RayQuadraticBezier(ray, seg).intersection() : new RayArc(ray, seg).intersection();

      for (const inter of intersection) {
        const {
          t2 = NaN,
          a2 = NaN,
          m = NaN,
          c
        } = inter;

        if (Coordinates.isEqualTo(c, coordinates)) {
          if (preventOn) return undefined;
          continue;
        }

        if (m % 2 === 0) continue;
        let v = seg instanceof Arc ? seg.getTangentVectorAtAngle(a2).coordinates : seg.getTangentVectorAtTime(t2).coordinates;
        let cp = Vector2.cross(rv, v);

        if (cp === 0) {
          seg instanceof Arc ? seg.getTangentVectorAtAngle(a2 + (seg.positive ? epsilon : -epsilon)).coordinates : seg.getTangentVectorAtTime(t2 + epsilon).coordinates;
          cp = Vector2.cross(rv, v);
        }

        const positiveWinding = cp > 0;

        if (seg instanceof Arc) {
          const [sa, ea] = seg.getStartEndAngles();
          if (Angle.equalTo(a2, sa, epsilon) || Angle.equalTo(a2, ea, epsilon)) wn += positiveWinding ? 0.5 : -0.5;else wn += positiveWinding ? 1 : -1;
        } else {
          if (Maths.equalTo(t2, 0, epsilon) || Maths.equalTo(t2, 1, epsilon)) wn += positiveWinding ? 0.5 : -0.5;else wn += positiveWinding ? 1 : -1;
        }
      }
    }

    return wn;
  }

  crossingNumberOfPoint(point, angle, segments, preventOn = true) {
    const epsilon = optioner.options.epsilon;
    const coordinates = getCoordinates(point, "point");
    const ray = new Ray(coordinates, angle);
    let cn = 0;

    for (let i = 0, l = segments.length; i < l; i++) {
      const seg = segments[i];
      if (!this._rayCollideBox(ray, seg.getBoundingBox())) continue;
      const intersection = seg instanceof LineSegment ? new RayLineSegment(ray, seg).intersection() : seg instanceof Bezier ? new RayBezier(ray, seg).intersection() : seg instanceof QuadraticBezier ? new RayQuadraticBezier(ray, seg).intersection() : new RayArc(ray, seg).intersection();

      for (const inter of intersection) {
        const {
          t2 = NaN,
          a2 = NaN,
          m = NaN,
          c
        } = inter;

        if (Coordinates.isEqualTo(c, coordinates)) {
          if (preventOn) return undefined;
          continue;
        }

        if (m % 2 === 0) continue;

        if (seg instanceof Arc) {
          const [sa, ea] = seg.getStartEndAngles();
          if (Angle.equalTo(a2, sa, epsilon) || Angle.equalTo(a2, ea, epsilon)) cn += 0.5;else cn += 1;
        } else {
          if (Maths.equalTo(t2, 0, epsilon) || Maths.equalTo(t2, 1, epsilon)) cn += 0.5;else cn += 1;
        }
      }
    }

    return cn;
  }

  _rayAngleAndCoordinates(segment) {
    let angle, point;

    if (segment instanceof LineSegment || segment instanceof Bezier || segment instanceof QuadraticBezier) {
      const mt = 0.5;
      angle = segment.getTangentVectorAtTime(mt).angle;
      point = segment.getPointAtTime(mt).coordinates;
    } else {
      const [sa, ea] = segment.getStartEndAngles();
      const positive = segment.positive;
      const ma = Angle.middle(sa, ea, positive);
      angle = segment.getTangentVectorAtAngle(ma).angle;
      point = segment.getPointAtAngle(ma).coordinates;
    }

    return [angle, point];
  }

  windingNumbersOfSegment(segment, segments) {
    const epsilon = optioner.options.epsilon;

    const [angle, coordinates] = this._rayAngleAndCoordinates(segment);

    const pra = angle + Maths.PI / 2;
    const line = Line.fromPointAndAngle(coordinates, pra);
    const prv = Vector2.from2(pra, 1);
    const wn = {
      positive: 0,
      negative: 0
    };

    for (let i = 0, l = segments.length; i < l; i++) {
      var _segments$i;

      const seg = ((_segments$i = segments[i]) == null ? void 0 : _segments$i.segment) || segments[i];
      if (!this._lineCollideBox(line, seg.getBoundingBox())) continue;
      const intersection = seg instanceof LineSegment ? new LineLineSegment(line, seg).intersection() : seg instanceof Bezier ? new LineBezier(line, seg).intersection() : seg instanceof QuadraticBezier ? new LineQuadraticBezier(line, seg).intersection() : new LineArc(line, seg).intersection();

      for (const inter of intersection) {
        const {
          t2 = NaN,
          a2 = NaN,
          m = NaN,
          c
        } = inter;
        if (Coordinates.isEqualTo(coordinates, c, epsilon)) continue;
        if (m % 2 === 0) continue;
        const onWhichRay = Vector2.dot(prv, Vector2.from(coordinates, c)) > 0 ? "positive" : "negative";
        let v = seg instanceof Arc ? seg.getTangentVectorAtAngle(a2).coordinates : seg.getTangentVectorAtTime(t2).coordinates;
        let cp = Vector2.cross(prv, v);

        if (cp === 0) {
          seg instanceof Arc ? seg.getTangentVectorAtAngle(a2 + (seg.positive ? epsilon : -epsilon)).coordinates : seg.getTangentVectorAtTime(t2 + epsilon).coordinates;
          cp = Vector2.cross(prv, v);
        }

        const positiveWinding = cp > 0;

        if (seg instanceof Arc) {
          const [sa, ea] = seg.getStartEndAngles();
          if (Angle.equalTo(a2, sa, epsilon) || Angle.equalTo(a2, ea, epsilon)) wn[onWhichRay] += positiveWinding ? 0.5 : -0.5;else wn[onWhichRay] += positiveWinding ? 1 : -1;
        } else {
          if (Maths.equalTo(t2, 0, epsilon) || Maths.equalTo(t2, 1, epsilon)) wn[onWhichRay] += positiveWinding ? 0.5 : -0.5;else wn[onWhichRay] += positiveWinding ? 1 : -1;
        }
      }
    }

    return wn;
  }

  crossingNumbersOfSegment(segment, segments) {
    const epsilon = optioner.options.epsilon;

    const [angle, coordinates] = this._rayAngleAndCoordinates(segment);

    const pra = angle + Maths.PI / 2;
    const line = Line.fromPointAndAngle(coordinates, pra);
    const prv = Vector2.from2(pra, 1);
    const cn = {
      positive: 0,
      negative: 0
    };

    for (let i = 0, l = segments.length; i < l; i++) {
      var _segments$i2;

      const seg = ((_segments$i2 = segments[i]) == null ? void 0 : _segments$i2.segment) || segments[i];
      if (!this._lineCollideBox(line, seg.getBoundingBox())) continue;
      const intersection = seg instanceof LineSegment ? new LineLineSegment(line, seg).intersection() : seg instanceof Bezier ? new LineBezier(line, seg).intersection() : seg instanceof QuadraticBezier ? new LineQuadraticBezier(line, seg).intersection() : new LineArc(line, seg).intersection();

      for (const inter of intersection) {
        const {
          t2 = NaN,
          a2 = NaN,
          m = NaN,
          c
        } = inter;
        if (Coordinates.isEqualTo(coordinates, c, epsilon)) continue;
        if (m % 2 === 0) continue;
        const onWhichRay = Vector2.dot(prv, Vector2.from(coordinates, c)) > 0 ? "positive" : "negative";

        if (seg instanceof Arc) {
          const [sa, ea] = seg.getStartEndAngles();
          if (Angle.equalTo(a2, sa, epsilon) || Angle.equalTo(a2, ea, epsilon)) cn[onWhichRay] += 0.5;else cn[onWhichRay] += 1;
        } else {
          if (Maths.equalTo(t2, 0, epsilon) || Maths.equalTo(t2, 1, epsilon)) cn[onWhichRay] += 0.5;else cn[onWhichRay] += 1;
        }
      }
    }

    return cn;
  }

}

var _dec$j, _class$x, _class2$3;
const PATH_MIN_COMMAND_COUNT = 2;
let Path = (_dec$j = statedWithBoolean(false, false), validGeometry(_class$x = (_class2$3 = class Path extends Geometry {
  constructor(a0, a1) {
    super();
    this._commands = [];
    this._closed = true;
    this._fillRule = "nonzero";

    if (Type.isArray(a0)) {
      Object.assign(this, {
        commands: a0,
        closed: a1 != null ? a1 : true
      });
    }

    if (Type.isBoolean(a0)) {
      Object.assign(this, {
        closed: a0 != null ? a0 : true
      });
    }
  }

  get events() {
    return {
      commandsReset: "reset",
      commandAdded: "cmdAdd",
      commandRemoved: "cmdRemove",
      commandChanged: "cmdChange",
      closedChanged: "closedChange",
      fillRuleChanged: "fillRuleChange"
    };
  }

  _setCommands(value) {
    const commands = value;
    let firstMoveToIndex = commands.findIndex(cmd => cmd.type === PathCommandType.MoveTo);
    let temp = null;

    for (let i = 0, l = commands.length; i < l; i++) {
      const cmd = commands[i];

      if (i < firstMoveToIndex) {
        if (temp === null) {
          commands[i] = { ...Path.moveTo([cmd.x, cmd.y])
          };
          temp = cmd;
        } else {
          commands[i] = this._reverseCommand(temp, cmd.x, cmd.y);
          temp = cmd;
        }
      }

      if (i === firstMoveToIndex) {
        if (temp !== null) {
          commands[i] = this._reverseCommand(temp, cmd.x, cmd.y);
        }
      }

      if (i > firstMoveToIndex) {
        if (firstMoveToIndex === -1) {
          commands[i] = { ...Path.moveTo([cmd.x, cmd.y])
          };
        } else {
          if (cmd.type === PathCommandType.MoveTo) {
            commands[i] = { ...Path.lineTo([cmd.x, cmd.y])
            };
          }
        }
      }

      if (commands[i].type === PathCommandType.ArcTo) {
        commands[i] = this._correctAndSetRadii(commands[i], commands[i - 1]);
      }
    }

    if (!Utility.isEqualTo(this._commands, value)) this.trigger_(EventObject.simple(this, this.events.commandsReset));
    this._commands = value.map(cmd => {
      return { ...cmd,
        uuid: Utility.uuid()
      };
    });
  }

  _setClosed(value) {
    if (!Utility.isEqualTo(this._closed, value)) this.trigger_(EventObject.simple(this, this.events.closedChanged));
    this._closed = value;
  }

  _setFillRule(value) {
    if (!Utility.isEqualTo(this._fillRule, value)) this.trigger_(EventObject.simple(this, this.events.fillRuleChanged));
    this._fillRule = value;
  }

  get commands() {
    return this._commands.map(cmd => ({ ...cmd
    }));
  }

  set commands(value) {
    Assert.condition(Type.isArray(value) && value.every(cmd => this._isPathCommand(cmd)), "[G]The `commands` should be an array of `PathCommand`.");

    this._setCommands(value);
  }

  get closed() {
    return this._closed;
  }

  set closed(value) {
    this._setClosed(value);
  }

  get fillRule() {
    return this._fillRule;
  }

  set fillRule(value) {
    this._setFillRule(value);
  }

  get commandCount() {
    return this._commands.length;
  }

  initialized_() {
    return this._commands.length >= PATH_MIN_COMMAND_COUNT;
  }

  dimensionallyDegenerate() {
    if (!this.initialized_()) return true;
    const epsilon = optioner.options.epsilon;
    const commands = this._commands;
    const {
      x: x0,
      y: y0
    } = commands[0];

    for (let i = 1, l = this._commands.length; i < l; i++) {
      const {
        x: xi,
        y: yi
      } = commands[i];

      if (!Coordinates.isEqualTo([x0, y0], [xi, yi], epsilon)) {
        return false;
      }
    }

    return true;
  }

  static fromBezierThroughPointsSmoothly(points, closed = false) {}

  static fromQuadraticBezierThroughPointsSmoothly(points, closed = false) {}

  static moveTo(point) {
    const [x, y] = getCoordinates(point, "point");
    const ret = {
      type: PathCommandType.MoveTo,
      x,
      y
    };
    return ret;
  }

  static lineTo(point) {
    const [x, y] = getCoordinates(point, "point");
    const ret = {
      type: PathCommandType.LineTo,
      x,
      y
    };
    return ret;
  }

  static bezierTo(controlPoint1, controlPoint2, point) {
    const [controlPoint1X, controlPoint1Y] = getCoordinates(controlPoint1, "controlPoint1");
    const [controlPoint2X, controlPoint2Y] = getCoordinates(controlPoint2, "controlPoint2");
    const [x, y] = getCoordinates(point, "point");
    const ret = {
      type: PathCommandType.BezierTo,
      x,
      y,
      controlPoint1X,
      controlPoint1Y,
      controlPoint2X,
      controlPoint2Y
    };
    return ret;
  }

  static quadraticBezierTo(controlPoint, point) {
    const [controlPointX, controlPointY] = getCoordinates(controlPoint, "controlPoint");
    const [x, y] = getCoordinates(point, "point");
    const ret = {
      type: PathCommandType.QuadraticBezierTo,
      x,
      y,
      controlPointX,
      controlPointY
    };
    return ret;
  }

  static arcTo(radiusX, radiusY, rotation, largeArc, positive, point) {
    Assert.isPositiveNumber(radiusX, "radiusX");
    Assert.isPositiveNumber(radiusY, "radiusY");
    Assert.isRealNumber(rotation, "rotation");
    const [x, y] = getCoordinates(point, "point");
    const ret = {
      type: PathCommandType.ArcTo,
      x,
      y,
      radiusX,
      radiusY,
      rotation,
      largeArc,
      positive
    };
    return ret;
  }

  move(deltaX, deltaY) {
    Assert.isRealNumber(deltaX, "deltaX");
    Assert.isRealNumber(deltaY, "deltaY");
    if (deltaX === 0 && deltaY === 0) return this;

    this._commands.forEach((cmd, i) => {
      switch (cmd.type) {
        case PathCommandType.MoveTo:
          {
            [cmd.x, cmd.y] = Vector2.add([cmd.x, cmd.y], [deltaX, deltaY]);
            break;
          }

        case PathCommandType.LineTo:
          {
            [cmd.x, cmd.y] = Vector2.add([cmd.x, cmd.y], [deltaX, deltaY]);
            break;
          }

        case PathCommandType.BezierTo:
          {
            [cmd.controlPoint1X, cmd.controlPoint1Y] = Vector2.add([cmd.controlPoint1X, cmd.controlPoint1Y], [deltaX, deltaY]);
            [cmd.controlPoint2X, cmd.controlPoint2Y] = Vector2.add([cmd.controlPoint2X, cmd.controlPoint2Y], [deltaX, deltaY]);
            [cmd.x, cmd.y] = Vector2.add([cmd.x, cmd.y], [deltaX, deltaY]);
            break;
          }

        case PathCommandType.QuadraticBezierTo:
          {
            [cmd.controlPointX, cmd.controlPointY] = Vector2.add([cmd.controlPointX, cmd.controlPointY], [deltaX, deltaY]);
            [cmd.x, cmd.y] = Vector2.add([cmd.x, cmd.y], [deltaX, deltaY]);
            break;
          }

        case PathCommandType.ArcTo:
          {
            [cmd.x, cmd.y] = Vector2.add([cmd.x, cmd.y], [deltaX, deltaY]);
            break;
          }
      }

      this.trigger_(EventObject.collection(this, this.events.commandChanged, i, cmd.uuid));
    });

    return this;
  }

  moveAlongAngle(angle, distance) {
    Assert.isRealNumber(angle, "angle");
    Assert.isRealNumber(distance, "distance");
    if (distance === 0) return this;
    const c = [0, 0];
    const [dx, dy] = Vector2.add(c, Vector2.from2(angle, distance));
    return this.move(dx, dy);
  }

  _isPathCommand(v) {
    if (!Type.isPlainObject(v)) return false;
    if (!v.type) return false;

    switch (v.type) {
      case PathCommandType.MoveTo:
        {
          if (!Type.isRealNumber(v.x)) return false;
          if (!Type.isRealNumber(v.y)) return false;
          return true;
        }

      case PathCommandType.LineTo:
        {
          if (!Type.isRealNumber(v.x)) return false;
          if (!Type.isRealNumber(v.y)) return false;
          return true;
        }

      case PathCommandType.BezierTo:
        {
          if (!Type.isRealNumber(v.x)) return false;
          if (!Type.isRealNumber(v.y)) return false;
          if (!Type.isRealNumber(v.controlPoint1X)) return false;
          if (!Type.isRealNumber(v.controlPoint1Y)) return false;
          if (!Type.isRealNumber(v.controlPoint2X)) return false;
          if (!Type.isRealNumber(v.controlPoint2Y)) return false;
          return true;
        }

      case PathCommandType.QuadraticBezierTo:
        {
          if (!Type.isRealNumber(v.x)) return false;
          if (!Type.isRealNumber(v.y)) return false;
          if (!Type.isRealNumber(v.controlPointX)) return false;
          if (!Type.isRealNumber(v.controlPointY)) return false;
          return true;
        }

      case PathCommandType.ArcTo:
        {
          if (!Type.isRealNumber(v.x)) return false;
          if (!Type.isRealNumber(v.y)) return false;
          if (!Type.isPositiveNumber(v.radiusX)) return false;
          if (!Type.isPositiveNumber(v.radiusY)) return false;
          if (!Type.isRealNumber(v.rotation)) return false;
          if (!Type.isBoolean(v.largeArc)) return false;
          if (!Type.isBoolean(v.positive)) return false;
          return true;
        }

      default:
        {
          return false;
        }
    }
  }

  _assertIsPathCommand(value, p) {
    Assert.condition(this._isPathCommand(value), `[G]The \`${p}\` should be a \`PathCommand\`.`);
  }

  _indexAt(indexOrUuid) {
    return Type.isString(indexOrUuid) ? this._commands.findIndex(cmd => cmd.uuid === indexOrUuid) : this._commands[indexOrUuid] !== undefined ? indexOrUuid : -1;
  }

  getUuids() {
    return this._commands.map(vtx => vtx.uuid);
  }

  getIndexOfUuid(uuid) {
    return this._commands.findIndex(cmd => cmd.uuid === uuid);
  }

  getUuidOfIndex(index) {
    var _this$_commands$index, _this$_commands$index2;

    return (_this$_commands$index = (_this$_commands$index2 = this._commands[index]) == null ? void 0 : _this$_commands$index2.uuid) != null ? _this$_commands$index : "";
  }

  getSegment(indexOrUuid) {
    const index = this._indexAt(indexOrUuid);

    if (index === -1) return null;
    const cmd1 = this._commands[index];

    const cmd2 = this._commands[next(index, this.commandCount, true)];

    const type = cmd2.type;

    switch (type) {
      case PathCommandType.MoveTo:
        {
          return new LineSegment(cmd1.x, cmd1.y, cmd2.x, cmd2.y);
        }

      case PathCommandType.LineTo:
        {
          return new LineSegment(cmd1.x, cmd1.y, cmd2.x, cmd2.y);
        }

      case PathCommandType.BezierTo:
        {
          return new Bezier(cmd1.x, cmd1.y, cmd2.x, cmd2.y, cmd2.controlPoint1X, cmd2.controlPoint1Y, cmd2.controlPoint2X, cmd2.controlPoint2Y);
        }

      case PathCommandType.QuadraticBezierTo:
        {
          return new QuadraticBezier(cmd1.x, cmd1.y, cmd2.x, cmd2.y, cmd2.controlPointX, cmd2.controlPointY);
        }

      case PathCommandType.ArcTo:
        {
          return new Arc(cmd1.x, cmd1.y, cmd2.x, cmd2.y, cmd2.radiusX, cmd2.radiusY, cmd2.largeArc, cmd2.positive, cmd2.rotation);
        }

      default:
        {
          throw new Error("[G]This should never happen.");
        }
    }
  }

  getSegments(excludeDimensionallyDegenerate = false, assumeClosed = false) {
    const l = this.commandCount;
    const cl = assumeClosed ? l : this.closed ? l : l - 1;
    const ret = [];

    for (let i = 0; i < cl; i++) {
      const segment = this.getSegment(i);

      if (excludeDimensionallyDegenerate) {
        if (!segment.dimensionallyDegenerate()) {
          ret.push(segment);
        }
      } else {
        ret.push(segment);
      }
    }

    return ret;
  }

  getPrevSegment(indexOrUuid, allowed = false) {
    let index = this._indexAt(indexOrUuid);

    if (index === -1) return [null, -1];
    index = prev(index, this.commandCount, true);
    let seg = this.getSegment(index);

    if (allowed) {
      while (seg.dimensionallyDegenerate()) {
        index = prev(index, this.commandCount, true);
        seg = this.getSegment(index);
      }
    }

    return [seg, index];
  }

  getNextSegment(indexOrUuid, allowed = false) {
    let index = this._indexAt(indexOrUuid);

    if (index === -1) return [null, -1];
    index = next(index, this.commandCount, true);
    let seg = this.getSegment(index);

    if (allowed) {
      while (seg.dimensionallyDegenerate()) {
        index = next(index, this.commandCount, true);
        seg = this.getSegment(index);
      }
    }

    return [seg, index];
  }

  isPointOn(point) {
    const c = getCoordinates(point, "point");
    const l = this.commandCount;
    const cl = this.closed ? l : l - 1;

    for (let i = 0; i < cl; i++) {
      if (this.getSegment(i).isPointOn(c)) return true;
    }

    return false;
  }

  isPointInside(point) {
    const c = getCoordinates(point, "point");
    const helper = new FillRuleHelper();

    if (this.fillRule === "nonzero") {
      const wn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (wn === undefined) return false;
      return wn === 0 ? false : true;
    } else {
      const cn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (cn === undefined) return false;
      return cn % 2 === 0 ? false : true;
    }
  }

  isPointOutside(point) {
    const c = getCoordinates(point, "point");
    const helper = new FillRuleHelper();

    if (this.fillRule === "nonzero") {
      const wn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (wn === undefined) return false;
      return wn === 0 ? true : false;
    } else {
      const cn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (cn === undefined) return false;
      return cn % 2 === 0 ? true : false;
    }
  }

  _reverseCommand(command, x, y) {
    switch (command.type) {
      case PathCommandType.MoveTo:
        {
          return { ...command,
            x,
            y
          };
        }

      case PathCommandType.LineTo:
        {
          return { ...command,
            x,
            y
          };
        }

      case PathCommandType.QuadraticBezierTo:
        {
          return { ...command,
            x,
            y
          };
        }

      case PathCommandType.BezierTo:
        {
          const {
            controlPoint1X,
            controlPoint1Y,
            controlPoint2X,
            controlPoint2Y
          } = command;
          return { ...command,
            controlPoint1X: controlPoint2X,
            controlPoint1Y: controlPoint2Y,
            controlPoint2X: controlPoint1X,
            controlPoint2Y: controlPoint1Y,
            x,
            y
          };
        }

      case PathCommandType.ArcTo:
        {
          const {
            positive
          } = command;
          return { ...command,
            positive: !positive,
            x,
            y
          };
        }
    }
  }

  _correctAndSetRadii(command, prevCommand) {
    const {
      x: x1,
      y: y1
    } = prevCommand;
    const {
      x: x2,
      y: y2,
      radiusX,
      radiusY,
      rotation
    } = command;
    let [rx, ry] = correctRadii(x1, y1, x2, y2, radiusX, radiusY, rotation);
    return { ...command,
      radiusX: rx,
      radiusY: ry
    };
  }

  getPrevVertex(indexOrUuid) {
    let index = this._indexAt(indexOrUuid);

    if (index === -1) return null;
    index = prev(index, this.commandCount, true);
    return this.getCommand(index);
  }

  getNextVertex(indexOrUuid) {
    let index = this._indexAt(indexOrUuid);

    if (index === -1) return null;
    index = next(index, this.commandCount, true);
    return this.getCommand(index);
  }

  getCommand(indexOrUuid) {
    const index = this._indexAt(indexOrUuid);

    if (index === -1) return null;
    const {
      uuid,
      ...rest
    } = this._commands[index];
    return rest;
  }

  _handleNextArcTo(index) {
    var _this$_commands;

    if (((_this$_commands = this._commands[index + 1]) == null ? void 0 : _this$_commands.type) === PathCommandType.ArcTo) {
      let cmd = this._commands[index + 1];
      cmd = this._correctAndSetRadii(cmd, this._commands[index]);

      if (!Utility.isEqualTo(this._commands[index + 1], cmd)) {
        this.trigger_(EventObject.collection(this, this.events.commandChanged, index + 1, cmd.uuid));
        this._commands[index + 1] = cmd;
      }
    }
  }

  setCommand(indexOrUuid, command) {
    this._assertIsPathCommand(command, "command");

    const index = this._indexAt(indexOrUuid);

    if (index === -1) return false;
    const uuid = this._commands[index].uuid;
    let cmd = { ...command,
      uuid
    };

    if (index === 0 && cmd.type !== PathCommandType.MoveTo) {
      cmd = { ...Path.moveTo([cmd.x, cmd.y]),
        uuid
      };
    }

    if (index !== 0 && cmd.type === PathCommandType.MoveTo) {
      cmd = { ...Path.lineTo([cmd.x, cmd.y]),
        uuid
      };
    }

    if (cmd.type === PathCommandType.ArcTo) {
      cmd = this._correctAndSetRadii(cmd, this._commands[index - 1]);
    }

    if (!Utility.isEqualTo(this._commands[index], cmd)) {
      this.trigger_(EventObject.collection(this, this.events.commandChanged, index, uuid));
      this._commands[index] = cmd;
    }

    this._handleNextArcTo(index);

    return true;
  }

  insertCommand(indexOrUuid, command) {
    this._assertIsPathCommand(command, "command");

    const index = this._indexAt(indexOrUuid);

    if (index === -1) return false;
    const uuid = Utility.uuid();
    if (index === 0) return this.prependCommand(command);
    if (index === this._commands.length - 1) return this.appendCommand(command);
    let cmd = { ...command,
      uuid
    };

    if (cmd.type === PathCommandType.MoveTo) {
      cmd = { ...Path.lineTo([cmd.x, cmd.y]),
        uuid
      };
    }

    if (cmd.type === PathCommandType.ArcTo) {
      cmd = this._correctAndSetRadii(cmd, this._commands[index - 1]);
    }

    this.trigger_(EventObject.collection(this, this.events.commandAdded, index, uuid));

    this._commands.splice(index, 0, cmd);

    this._handleNextArcTo(index);

    return [index, uuid];
  }

  removeCommand(indexOrUuid) {
    const index = this._indexAt(indexOrUuid);

    if (index === -1) return false;
    const uuid = this.commands[index].uuid;

    if (index === 0 && this.commands[1] !== undefined) {
      const {
        x: x1,
        y: y1,
        uuid: uuid1
      } = this._commands[1];
      const cmd1 = { ...Path.moveTo([x1, y1]),
        uuid: uuid1
      };
      this.trigger_(EventObject.collection(this, this.events.commandChanged, 1, uuid1));
      this._commands[1] = cmd1;
    }

    this.trigger_(EventObject.collection(this, this.events.commandRemoved, index, uuid));

    this._commands.splice(index, 1);

    this._handleNextArcTo(index);

    return true;
  }

  appendCommand(command) {
    this._assertIsPathCommand(command, "command");

    const index = this.commandCount;
    const uuid = Utility.uuid();
    let cmd = { ...command,
      uuid
    };

    if (this._commands.length === 0) {
      cmd = { ...Path.moveTo([cmd.x, cmd.y]),
        uuid
      };
    } else {
      if (cmd.type === PathCommandType.MoveTo) {
        cmd = { ...Path.lineTo([cmd.x, cmd.y]),
          uuid
        };
      }

      if (cmd.type === PathCommandType.ArcTo) {
        cmd = this._correctAndSetRadii(cmd, this._commands[index - 1]);
      }
    }

    this.trigger_(EventObject.collection(this, this.events.commandAdded, index, uuid));

    this._commands.push(cmd);

    return [index, uuid];
  }

  prependCommand(command) {
    this._assertIsPathCommand(command, "command");

    const index = 0;
    const uuid = Utility.uuid();
    let cmd = { ...command,
      uuid
    };

    if (this._commands.length === 0) {
      cmd = { ...Path.moveTo([cmd.x, cmd.y]),
        uuid
      };
    } else {
      if (command.type !== PathCommandType.MoveTo) {
        const {
          x: x0,
          y: y0,
          uuid: uuid0
        } = this._commands[0];
        cmd = { ...Path.moveTo([cmd.x, cmd.y]),
          uuid
        };
        const cmd0 = { ...this._reverseCommand(command, x0, y0),
          uuid: uuid0
        };
        this.trigger_(EventObject.collection(this, this.events.commandChanged, 1, uuid0));
        this._commands[0] = cmd0;
      }
    }

    this.trigger_(EventObject.collection(this, this.events.commandAdded, index, uuid));

    this._commands.unshift(cmd);

    return [index, uuid];
  }

  clean() {
    const copyPath = this.clone();
    let i = 0;

    while (i < copyPath.commandCount - 1) {
      if (copyPath.getSegment(i).dimensionallyDegenerate()) {
        copyPath.removeCommand(i);
        continue;
      }

      i++;
    }

    return copyPath;
  }

  _getSimpleArea() {
    const l = this.commandCount;
    const commands = this._commands;
    let a = 0;

    for (let i = 0; i < l; i++) {
      const currCmd = commands[i];
      const nextCmd = commands[next(i, l, true)];

      switch (nextCmd.type) {
        case PathCommandType.MoveTo:
          {
            const {
              x: x0,
              y: y0
            } = currCmd;
            const {
              x: x1,
              y: y1
            } = nextCmd;
            a += lineSegmentPathIntegral(x0, y0, x1, y1);
            break;
          }

        case PathCommandType.LineTo:
          {
            const {
              x: x0,
              y: y0
            } = currCmd;
            const {
              x: x1,
              y: y1
            } = nextCmd;
            a += lineSegmentPathIntegral(x0, y0, x1, y1);
            break;
          }

        case PathCommandType.BezierTo:
          {
            const {
              x: x0,
              y: y0
            } = currCmd;
            const {
              x: x3,
              y: y3,
              controlPoint1X: x1,
              controlPoint1Y: y1,
              controlPoint2X: x2,
              controlPoint2Y: y2
            } = nextCmd;
            a += bezierPathIntegral(x0, y0, x1, y1, x2, y2, x3, y3);
            break;
          }

        case PathCommandType.QuadraticBezierTo:
          {
            const {
              x: x0,
              y: y0
            } = currCmd;
            const {
              x: x2,
              y: y2,
              controlPointX: x1,
              controlPointY: y1
            } = nextCmd;
            a += quadraticBezierPathIntegral(x0, y0, x1, y1, x2, y2);
            break;
          }

        case PathCommandType.ArcTo:
          {
            const {
              x: x0,
              y: y0
            } = currCmd;
            let {
              x: x1,
              y: y1,
              radiusX,
              radiusY,
              rotation,
              largeArc,
              positive
            } = nextCmd;
            const acp = endpointToCenterParameterization({
              point1X: x0,
              point1Y: y0,
              point2X: x1,
              point2Y: y1,
              radiusX,
              radiusY,
              largeArc,
              positive,
              rotation
            });
            a += arcPathIntegral(acp.centerX, acp.centerY, acp.radiusX, acp.radiusY, acp.rotation, acp.positive, acp.startAngle, acp.endAngle);
            break;
          }

        default:
          {
            throw new Error("[G]This should never happen.");
          }
      }
    }

    return a;
  }

  apply(transformation) {
    const path = new Path();
    path.closed = this.closed;

    this._commands.forEach((cmd, index) => {
      switch (cmd.type) {
        case PathCommandType.MoveTo:
          {
            const [nx, ny] = transformation.transformCoordinates([cmd.x, cmd.y]);
            path.appendCommand(Path.moveTo([nx, ny]));
            break;
          }

        case PathCommandType.LineTo:
          {
            const [nx, ny] = transformation.transformCoordinates([cmd.x, cmd.y]);
            path.appendCommand(Path.lineTo([nx, ny]));
            break;
          }

        case PathCommandType.BezierTo:
          {
            const [nx, ny] = transformation.transformCoordinates([cmd.x, cmd.y]);
            const [nc1x, nc1y] = transformation.transformCoordinates([cmd.x, cmd.y]);
            const [nc2x, nc2y] = transformation.transformCoordinates([cmd.x, cmd.y]);
            path.appendCommand(Path.bezierTo([nc1x, nc1y], [nc2x, nc2y], [nx, ny]));
            break;
          }

        case PathCommandType.QuadraticBezierTo:
          {
            const [nx, ny] = transformation.transformCoordinates([cmd.x, cmd.y]);
            const [ncx, ncy] = transformation.transformCoordinates([cmd.x, cmd.y]);
            path.appendCommand(Path.quadraticBezierTo([ncx, ncy], [nx, ny]));
            break;
          }

        case PathCommandType.ArcTo:
          {
            const {
              x: x1,
              y: y1
            } = this._commands[index - 1];
            const {
              x: x2,
              y: y2,
              radiusX: rx,
              radiusY: ry,
              rotation: phi,
              largeArc,
              positive
            } = cmd;
            const {
              point2X: nx2,
              point2Y: ny2,
              radiusX: nrx,
              radiusY: nry,
              largeArc: nla,
              positive: np,
              rotation: nr
            } = endpointParameterizationTransform({
              point1X: x1,
              point1Y: y1,
              point2X: x2,
              point2Y: y2,
              radiusX: rx,
              radiusY: ry,
              largeArc: largeArc,
              positive: positive,
              rotation: phi
            }, transformation.matrix);
            path.appendCommand(Path.arcTo(nrx, nry, nr, nla, np, [nx2, ny2]));
            break;
          }

        default:
          {
            throw new Error("[G]This should never happen.");
          }
      }
    });

    return path;
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    g.fillRule = this.fillRule;

    this._commands.forEach(cmd => {
      if (cmd.type === PathCommandType.MoveTo) {
        g.moveTo(cmd.x, cmd.y);
      }

      if (cmd.type === PathCommandType.LineTo) {
        g.lineTo(cmd.x, cmd.y);
      }

      if (cmd.type === PathCommandType.BezierTo) {
        g.bezierTo(cmd.controlPoint1X, cmd.controlPoint1Y, cmd.controlPoint2X, cmd.controlPoint2Y, cmd.x, cmd.y);
      }

      if (cmd.type === PathCommandType.QuadraticBezierTo) {
        g.quadraticBezierTo(cmd.controlPointX, cmd.controlPointY, cmd.x, cmd.y);
      }

      if (cmd.type === PathCommandType.ArcTo) {
        g.endpointArcTo(cmd.radiusX, cmd.radiusY, cmd.rotation, cmd.largeArc, cmd.positive, cmd.x, cmd.y);
      }
    });

    if (this.closed) g.close();

    if (optioner.options.graphics.pathSegmentArrow) {
      this.getSegments().forEach(segment => {
        let vector;

        if (segment instanceof Arc) {
          const [sa, ea] = segment.getStartEndAngles();
          const positive = segment.positive;
          vector = segment.getTangentVectorAtAngle(Angle.middle(sa, ea, positive));
        } else {
          vector = segment.getTangentVectorAtTime(0.5);
        }

        g.append(new ArrowGraphics(vector.point1Coordinates, vector.angle).getGraphics(viewport));
      });
    }

    return g;
  }

  clone() {
    return new Path(this.commands);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Path();

    this._setCommands(shape.commands);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tcommands: ${JSON.stringify(this.commands)}`, `\t}`, `}`].join("\n");
  }

  toArray() {
    throw new Error("Method not implemented.");
  }

  toObject() {
    throw new Error("Method not implemented.");
  }

}, (_applyDecoratedDescriptor(_class2$3.prototype, "getSegments", [_dec$j], Object.getOwnPropertyDescriptor(_class2$3.prototype, "getSegments"), _class2$3.prototype)), _class2$3)) || _class$x);

var _class$w;
let Transformation = (_class$w = class Transformation extends EventTarget {
  constructor(matrix) {
    super();
    this._matrix = TransformationMatrix.identity();

    if (matrix !== undefined) {
      this.matrix = matrix;
    }
  }

  get events() {
    return {
      matrixChanged: "matrix"
    };
  }

  _setMatrix(value) {
    if (!Utility.isEqualTo(this._matrix, value)) this.trigger_(EventObject.simple(this, this.events.matrixChanged));
    Object.assign(this._matrix, value);
  }

  get matrix() {
    return [...this._matrix];
  }

  set matrix(value) {
    const [a, b, c, d, e, f] = value;
    Assert.isRealNumber(a, "a");
    Assert.isRealNumber(b, "b");
    Assert.isRealNumber(c, "c");
    Assert.isRealNumber(d, "d");
    Assert.isRealNumber(e, "e");
    Assert.isRealNumber(f, "f");

    this._setMatrix(value);
  }

  _withPrePostTranslation(m, x, y) {
    return TransformationMatrix.multiply(TransformationMatrix.multiply(TransformationMatrix.translate(x, y), m), TransformationMatrix.translate(-x, -y));
  }

  _postMultiply(m) {
    return TransformationMatrix.multiply(this._matrix, m);
  }

  _preMultiply(m) {
    return TransformationMatrix.multiply(m, this._matrix);
  }

  reset() {
    this._setMatrix(TransformationMatrix.identity());

    return this;
  }

  invert() {
    this._setMatrix(TransformationMatrix.invert(this._matrix));

    return this;
  }

  setTranslate(offsetX, offsetY) {
    Assert.isRealNumber(offsetX, "offsetX");
    Assert.isRealNumber(offsetY, "offsetY");

    this._setMatrix(TransformationMatrix.translate(offsetX, offsetY));
  }

  addTranslate(offsetX, offsetY, preOrPost = "post") {
    Assert.isRealNumber(offsetX, "offsetX");
    Assert.isRealNumber(offsetY, "offsetY");
    const m = TransformationMatrix.translate(offsetX, offsetY);

    this._setMatrix(preOrPost === "post" ? this._postMultiply(m) : this._preMultiply(m));

    return this;
  }

  setRotate(angle, originPoint) {
    Assert.isRealNumber(angle, "angle");
    const [x, y] = originPoint == undefined ? [0, 0] : getCoordinates(originPoint, "originPoint");
    let m = TransformationMatrix.rotate(angle);
    if (x !== 0 || y !== 0) m = this._withPrePostTranslation(m, x, y);

    this._setMatrix(m);

    return this;
  }

  addRotate(angle, a1, a2) {
    Assert.isRealNumber(angle, "angle");
    const preOrPost = (Type.isString(a1) ? a1 : a2) || "post";
    const [x, y] = Type.isArray(a1) && getCoordinates(a1, "originPoint") || [0, 0];
    let m = TransformationMatrix.rotate(angle);
    if (x !== 0 || y !== 0) m = this._withPrePostTranslation(m, x, y);

    this._setMatrix(preOrPost === "post" ? this._postMultiply(m) : this._preMultiply(m));

    return this;
  }

  setScale(factorX, factorY, originPoint) {
    Assert.isRealNumber(factorX, "factorX");
    Assert.isRealNumber(factorY, "factorY");
    const [x, y] = originPoint == undefined ? [0, 0] : getCoordinates(originPoint, "originPoint");
    let m = TransformationMatrix.scale(factorX, factorY);
    if (x !== 0 || y !== 0) m = this._withPrePostTranslation(m, x, y);

    this._setMatrix(m);

    return this;
  }

  addScale(factorX, factorY, a2, a3) {
    Assert.isRealNumber(factorX, "factorX");
    Assert.isRealNumber(factorY, "factorY");
    const preOrPost = (Type.isString(a2) ? a2 : a3) || "post";
    const [x, y] = Type.isArray(a2) && getCoordinates(a2, "originPoint") || [0, 0];
    let m = TransformationMatrix.scale(factorX, factorY);
    if (x !== 0 || y !== 0) m = this._withPrePostTranslation(m, x, y);

    this._setMatrix(preOrPost === "post" ? this._postMultiply(m) : this._preMultiply(m));

    return this;
  }

  setSkew(angleX, angleY, originPoint) {
    Assert.isRealNumber(angleX, "angleX");
    Assert.isRealNumber(angleY, "angleY");
    const [x, y] = originPoint == undefined ? [0, 0] : getCoordinates(originPoint, "originPoint");
    let m = TransformationMatrix.skew(angleX, angleY);
    if (x !== 0 || y !== 0) m = this._withPrePostTranslation(m, x, y);

    this._setMatrix(m);

    return this;
  }

  addSkew(angleX, angleY, a2, a3) {
    Assert.isRealNumber(angleX, "angleX");
    Assert.isRealNumber(angleY, "angleY");
    const preOrPost = (Type.isString(a2) ? a2 : a3) || "post";
    const [x, y] = Type.isArray(a2) && getCoordinates(a2, "originPoint") || [0, 0];
    let m = TransformationMatrix.skew(angleX, angleY);
    if (x !== 0 || y !== 0) m = this._withPrePostTranslation(m, x, y);

    this._setMatrix(preOrPost === "post" ? this._postMultiply(m) : this._preMultiply(m));

    return this;
  }

  setLineReflect(line) {
    const [a, b, c] = line.getImplicitFunctionCoefs();

    this._setMatrix(TransformationMatrix.lineReflect(a, b, c));

    return this;
  }

  addLineReflect(line, preOrPost = "post") {
    const [a, b, c] = line.getImplicitFunctionCoefs();
    const m = TransformationMatrix.lineReflect(a, b, c);

    this._setMatrix(preOrPost === "post" ? this._postMultiply(m) : this._preMultiply(m));

    return this;
  }

  setPointReflect(point) {
    const [x, y] = getCoordinates(point, "point");

    this._setMatrix(TransformationMatrix.pointReflect(x, y));

    return this;
  }

  addPointReflect(point, preOrPost = "post") {
    const [x, y] = getCoordinates(point, "point");
    const m = TransformationMatrix.pointReflect(x, y);

    this._setMatrix(preOrPost === "post" ? this._postMultiply(m) : this._preMultiply(m));

    return this;
  }

  setMatrix(a, b, c, d, e, f) {
    Assert.isRealNumber(a, "a");
    Assert.isRealNumber(b, "b");
    Assert.isRealNumber(c, "c");
    Assert.isRealNumber(d, "d");
    Assert.isRealNumber(e, "e");
    Assert.isRealNumber(f, "f");

    this._setMatrix([a, b, c, d, e, f]);

    return this;
  }

  addMatrix(a, b, c, d, e, f, preOrPost = "post") {
    Assert.isRealNumber(a, "a");
    Assert.isRealNumber(b, "b");
    Assert.isRealNumber(c, "c");
    Assert.isRealNumber(d, "d");
    Assert.isRealNumber(e, "e");
    Assert.isRealNumber(f, "f");
    const m = [a, b, c, d, e, f];

    this._setMatrix(preOrPost === "post" ? this._postMultiply(m) : this._preMultiply(m));

    return this;
  }

  transformCoordinates(coordinates) {
    return TransformationMatrix.transformCoordinates(this._matrix, coordinates);
  }

  antitransformCoordinates(coordinates) {
    return TransformationMatrix.antitransformCoordinates(this._matrix, coordinates);
  }

  decomposeQr() {
    return TransformationMatrix.decomposeQr(this._matrix);
  }

  decomposeSvd() {
    return TransformationMatrix.decomposeSvd(this._matrix);
  }

  span() {
    return TransformationMatrix.span(this._matrix);
  }

  clone() {
    return new Transformation(this._matrix);
  }

  copyFrom(transformation) {
    if (transformation === null) transformation = new Transformation();

    this._setMatrix(transformation._matrix);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tmatrix: [${this._matrix.join(" , ")}]`, `}`].join("\n");
  }

  toArray() {
    return [this.matrix];
  }

  toObject() {
    return {
      matrix: this.matrix
    };
  }

}, (_applyDecoratedDescriptor(_class$w.prototype, "setRotate", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "setRotate"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "addRotate", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "addRotate"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "setScale", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "setScale"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "addScale", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "addScale"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "setSkew", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "setSkew"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "addSkew", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "addSkew"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "setLineReflect", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "setLineReflect"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "addLineReflect", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "addLineReflect"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "setPointReflect", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "setPointReflect"), _class$w.prototype), _applyDecoratedDescriptor(_class$w.prototype, "addPointReflect", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class$w.prototype, "addPointReflect"), _class$w.prototype)), _class$w);

var _class$v;

let Ellipse = validGeometry(_class$v = class Ellipse extends Geometry {
  constructor(a0, a1, a2, a3, a4) {
    super();
    this._centerX = NaN;
    this._centerY = NaN;
    this._radiusX = NaN;
    this._radiusY = NaN;
    this._rotation = 0;
    this._windingDirection = 1;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        centerX: a0,
        centerY: a1,
        radiusX: a2,
        radiusY: a3,
        rotation: a4 != null ? a4 : 0
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        centerCoordinates: a0,
        radiusX: a1,
        radiusY: a2,
        rotation: a3 != null ? a3 : 0
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        centerPoint: a0,
        radiusX: a1,
        radiusY: a2,
        rotation: a3 != null ? a3 : 0
      });
    }
  }

  get events() {
    return {
      centerXChanged: "centerX",
      centerYChanged: "centerY",
      radiusXChanged: "radiusX",
      radiusYChanged: "radiusY",
      rotationChanged: "rotation"
    };
  }

  _setCenterX(value) {
    if (!Utility.isEqualTo(this._centerX, value)) this.trigger_(EventObject.simple(this, this.events.centerXChanged));
    this._centerX = value;
  }

  _setCenterY(value) {
    if (!Utility.isEqualTo(this._centerY, value)) this.trigger_(EventObject.simple(this, this.events.centerYChanged));
    this._centerY = value;
  }

  _setRadiusX(value) {
    if (!Utility.isEqualTo(this._radiusX, value)) this.trigger_(EventObject.simple(this, this.events.radiusXChanged));
    this._radiusX = value;
  }

  _setRadiusY(value) {
    if (!Utility.isEqualTo(this._radiusY, value)) this.trigger_(EventObject.simple(this, this.events.radiusYChanged));
    this._radiusY = value;
  }

  _setRotation(value) {
    if (!Utility.isEqualTo(this._rotation, value)) this.trigger_(EventObject.simple(this, this.events.rotationChanged));
    this._rotation = value;
  }

  get centerX() {
    return this._centerX;
  }

  set centerX(value) {
    Assert.isRealNumber(value, "centerX");

    this._setCenterX(value);
  }

  get centerY() {
    return this._centerY;
  }

  set centerY(value) {
    Assert.isRealNumber(value, "centerY");

    this._setCenterY(value);
  }

  get centerCoordinates() {
    return [this._centerX, this._centerY];
  }

  set centerCoordinates(value) {
    Assert.isCoordinates(value, "centerCoordinates");

    this._setCenterX(Coordinates.x(value));

    this._setCenterY(Coordinates.y(value));
  }

  get centerPoint() {
    return new Point(this._centerX, this._centerY);
  }

  set centerPoint(value) {
    this._setCenterX(value.x);

    this._setCenterY(value.y);
  }

  get radiusX() {
    return this._radiusX;
  }

  set radiusX(value) {
    Assert.isPositiveNumber(value, "radiusX");

    this._setRadiusX(value);
  }

  get radiusY() {
    return this._radiusY;
  }

  set radiusY(value) {
    Assert.isPositiveNumber(value, "radiusY");

    this._setRadiusY(value);
  }

  get rotation() {
    return this._rotation;
  }

  set rotation(value) {
    Assert.isRealNumber(value, "rotation");

    this._setRotation(value);
  }

  initialized_() {
    return !Number.isNaN(this._centerX) && !Number.isNaN(this._centerY) && !Number.isNaN(this._radiusX) && !Number.isNaN(this._radiusY);
  }

  getLength() {
    const {
      radiusX: rx,
      radiusY: ry
    } = this;
    const a = Maths.max(rx, ry);
    const b = Maths.min(rx, ry);
    const esq = 1 - b ** 2 / a ** 2;
    return 4 * a * EllipticIntegral.completeEllipticIntegralOfSecondKind(esq);
  }

  getArea() {
    const {
      radiusX: rx,
      radiusY: ry
    } = this;
    return Maths.PI * rx * ry;
  }

  getEccentricity() {
    const {
      radiusX: rx,
      radiusY: ry
    } = this;
    const a = Maths.max(rx, ry);
    const b = Maths.min(rx, ry);
    return Maths.sqrt(1 - b ** 2 / a ** 2);
  }

  getFoci() {
    const {
      radiusX: rx,
      radiusY: ry,
      centerCoordinates: cc,
      rotation: phi
    } = this;

    if (rx === ry) {
      return [new Point(cc), new Point(cc)];
    }

    let f1;
    let f2;

    if (rx > ry) {
      const a = rx;
      const b = ry;
      const c = Maths.sqrt(a ** 2 - b ** 2);
      [f1, f2] = [Vector2.subtract(cc, Vector2.rotate([c, 0], phi)), Vector2.add(cc, Vector2.rotate([c, 0], phi))];
    } else {
      const a = ry;
      const b = rx;
      const c = Maths.sqrt(b ** 2 - a ** 2);
      [f1, f2] = [Vector2.subtract(cc, Vector2.rotate([0, c], phi)), Vector2.add(cc, Vector2.rotate([0, c], phi))];
    }

    return [new Point(f1), new Point(f2)];
  }

  getXAxisVertices() {
    const {
      radiusX: rx,
      centerCoordinates: cc,
      rotation: phi
    } = this;
    const [v1, v2] = [Vector2.subtract(cc, Vector2.rotate([rx, 0], phi)), Vector2.add(cc, Vector2.rotate([rx, 0], phi))];
    return [new Point(v1), new Point(v2)];
  }

  getYAxisVertices() {
    const {
      radiusY: ry,
      centerCoordinates: cc,
      rotation: phi
    } = this;
    const [v1, v2] = [Vector2.subtract(cc, Vector2.rotate([0, ry], phi)), Vector2.add(cc, Vector2.rotate([0, ry], phi))];
    return [new Point(v1), new Point(v2)];
  }

  getDirectrices() {
    const {
      radiusX: rx,
      radiusY: ry,
      centerCoordinates: cc,
      rotation: phi
    } = this;

    if (rx === ry) {
      return [null, null];
    }

    let lc;
    let uc;
    let angle;

    if (rx > ry) {
      const a = rx;
      const b = ry;
      const c = Maths.sqrt(a ** 2 - b ** 2);
      lc = [-(a ** 2) / c, 0];
      uc = [a ** 2 / c, 0];
      angle = Vector2.angle(Vector2.rotate([0, 1], phi));
    } else {
      const a = ry;
      const b = rx;
      const c = Maths.sqrt(b ** 2 - a ** 2);
      lc = [0, -(a ** 2) / c];
      uc = [0, a ** 2 / c];
      angle = Vector2.angle(Vector2.rotate([1, 0], phi));
    }

    const ll = Line.fromPointAndAngle(lc, angle);
    const ul = Line.fromPointAndAngle(uc, angle);
    return [ll, ul];
  }

  static fromTwoFociAndDistanceSum(focus1, focus2, distanceSum) {
    Assert.isPositiveNumber(distanceSum, "distanceSum");
    const c1 = getCoordinates(focus1, "focus1");
    const c2 = getCoordinates(focus2, "focus2");
    const epsilon = optioner.options.epsilon;
    const v = Vector2.from(c1, c2);
    const c = Vector2.magnitude(v) / 2;
    const a = distanceSum / 2;

    if (Maths.lessThan(a, c, epsilon)) {
      console.warn("[G]The `distanceSum` should greater than the distance between two foci.");
      return null;
    }

    const b = Maths.sqrt(a ** 2 - c ** 2);
    const cc = Vector2.add(c1, Vector2.scalarMultiply(v, 0.5));
    const angle = Vector2.angle(v);
    return new Ellipse(cc, a, b, angle);
  }

  static fromTwoFociAndPointOn(focus1, focus2, point) {
    const c1 = getCoordinates(focus1, "focus1");
    const c2 = getCoordinates(focus2, "focus2");
    const c0 = getCoordinates(point, "point");
    const ds = Vector2.magnitude(Vector2.from(c0, c1)) + Vector2.magnitude(Vector2.from(c0, c2));
    return Ellipse.fromTwoFociAndDistanceSum(c1, c2, ds);
  }

  static fromTwoFociAndEccentricity(focus1, focus2, eccentricity) {
    if (!(eccentricity > 0 && eccentricity < 1)) {
      console.warn("[G]The `eccentricity` should be a number between 0(not including) and 1(not including).");
      return null;
    }

    const c1 = getCoordinates(focus1, "focus1");
    const c2 = getCoordinates(focus2, "focus2");
    const v = Vector2.from(c1, c2);
    const c = Vector2.magnitude(v) / 2;
    const a = c / eccentricity;
    const b = Maths.sqrt(a ** 2 - c ** 2);
    const cc = Vector2.add(c1, Vector2.scalarMultiply(v, 0.5));
    const angle = Vector2.angle(v);
    return new Ellipse(cc, a, b, angle);
  }

  static fromCenterPointAndTwoConjugateDiametersEndPoints(centerPoint, endpoint1, endpoint2) {
    const cc = getCoordinates(centerPoint, "centerPoint");
    const c1 = getCoordinates(endpoint1, "endpoint1");
    const c2 = getCoordinates(endpoint2, "endpoint2");
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(cc, c1, epsilon) || Coordinates.isEqualTo(cc, c2, epsilon) || Coordinates.isEqualTo(c1, c2, epsilon)) {
      console.warn("[G]The `centerPoint`, `endpoint1` and `endpoint2` can not be the same to each other, `null` will be returned");
      return null;
    }

    const v01 = Vector2.from(cc, c1);
    const v02 = Vector2.from(cc, c2);

    if (Maths.equalTo(Vector2.cross(v01, v02), 0, epsilon)) {
      console.warn("[G]The `centerPoint`, `endpoint1` and `endpoint2` can not be collinear, `null` will be returned");
      return null;
    }

    const vh = Vector2.subtract(Vector2.rotate(v01, Maths.PI / 2), v02);
    const vk = Vector2.scalarMultiply(vh, 0.5);
    const m1 = Vector2.magnitude(vk);
    const m2 = Vector2.magnitude(Vector2.add(v02, vk));
    const a = m1 + m2;
    const b = m1 - m2;
    const u = Vector2.normalize(vk);
    const vb = Vector2.scalarMultiply(u, b);
    const angle = Vector2.angle(Vector2.add(v02, vb));
    return new Ellipse(cc, Maths.abs(a), Maths.abs(b), angle);
  }

  isPointOn(point) {
    const [x, y] = getCoordinates(point, "point");
    const {
      centerX: cx,
      centerY: cy,
      radiusX: rx,
      radiusY: ry,
      rotation: phi
    } = this;
    const curveEpsilon = optioner.options.curveEpsilon;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const dx = x - cx;
    const dy = y - cx;
    const f = (dx * cosPhi + dy * sinPhi) ** 2 / rx ** 2 + (dx * sinPhi - dy * cosPhi) ** 2 / ry ** 2;
    return Maths.equalTo(f, 1, curveEpsilon);
  }

  isPointOutside(point) {
    const [x, y] = getCoordinates(point, "point");
    const {
      centerX: cx,
      centerY: cy,
      radiusX: rx,
      radiusY: ry,
      rotation: phi
    } = this;
    const curveEpsilon = optioner.options.curveEpsilon;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const dx = x - cx;
    const dy = y - cx;
    const f = (dx * cosPhi + dy * sinPhi) ** 2 / rx ** 2 + (dx * sinPhi - dy * cosPhi) ** 2 / ry ** 2;
    return Maths.greaterThan(f, 1, curveEpsilon);
  }

  isPointInside(point) {
    const [x, y] = getCoordinates(point, "point");
    const {
      centerX: cx,
      centerY: cy,
      radiusX: rx,
      radiusY: ry,
      rotation: phi
    } = this;
    const curveEpsilon = optioner.options.curveEpsilon;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const dx = x - cx;
    const dy = y - cx;
    const f = (dx * cosPhi + dy * sinPhi) ** 2 / rx ** 2 + (dx * sinPhi - dy * cosPhi) ** 2 / ry ** 2;
    return Maths.lessThan(f, 1, curveEpsilon);
  }

  move(deltaX, deltaY) {
    this.centerCoordinates = Vector2.add(this.centerCoordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.centerCoordinates = Vector2.add(this.centerCoordinates, Vector2.from2(angle, distance));
    return this;
  }

  getWindingDirection() {
    return this._windingDirection;
  }

  setWindingDirection(direction) {
    this._windingDirection = direction;
  }

  getArcBetweenAngle(startAngle, endAngle, positive = true) {
    const epsilon = optioner.options.epsilon;
    const sa = Angle.simplify(startAngle);
    const ea = Angle.simplify(endAngle);

    if (Maths.equalTo(sa, ea, epsilon)) {
      console.warn("[G]The start angle and end angle are the same, `null` will be returned.");
      return null;
    }

    return Arc.fromCenterPointAndStartEndAnglesEtc(this.centerCoordinates, this.radiusX, this.radiusY, sa, ea, positive, this.rotation);
  }

  static findTangentLineOfTwoEllipse(ellipse1, ellipse2) {}

  static findTangentLineOfEllipseAndParabola() {}

  getParametricEquation() {
    const {
      centerX: cx,
      centerY: cy,
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    return function (a) {
      const x = rx * Maths.cos(a) * cosPhi - ry * Maths.sin(a) * sinPhi + cx;
      const y = rx * Maths.cos(a) * sinPhi + ry * Maths.sin(a) * cosPhi + cy;
      return [x, y];
    };
  }

  getPointAtAngle(angle) {
    Assert.isRealNumber(angle, "angle");
    const [x, y] = this.getParametricEquation()(angle);
    return new Point(x, y);
  }

  getAngleOfPoint(point) {
    const [x, y] = getCoordinates(point, "point");
    const {
      centerX: cx,
      centerY: cy,
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const cosTheta = (cosPhi * (x - cx) + sinPhi * (y - cy)) / rx;
    const sinTheta = (cosPhi * (y - cy) - sinPhi * (x - cx)) / ry;
    const curveEpsilon = optioner.options.curveEpsilon;

    if (Maths.equalTo(sinTheta ** 2 + cosTheta ** 2, 1, curveEpsilon)) {
      return Angle.simplify(Maths.atan2(sinTheta, cosTheta));
    }

    return NaN;
  }

  getBoundingBox() {
    const {
      centerX: cx,
      centerY: cy,
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const hw = Maths.hypot(rx * cosPhi, ry * sinPhi);
    const hh = Maths.hypot(rx * sinPhi, ry * cosPhi);
    const w = hw * 2;
    const h = hh * 2;
    const x = cx - hw;
    const y = cy - hh;
    return [x, y, w, h];
  }

  getTangentVectorAtAngle(a, normalized = false) {
    a = Angle.simplify(a);
    const {
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const pxD = -rx * Maths.sin(a) * cosPhi - ry * Maths.cos(a) * sinPhi;
    const pyD = -rx * Maths.sin(a) * sinPhi + ry * Maths.cos(a) * cosPhi;
    const tv = [pxD, pyD];
    const c = this.getParametricEquation()(a);
    return normalized ? new Vector(c, Vector2.normalize(tv)) : new Vector(c, tv);
  }

  getNormalVectorAtAngle(a, normalized = false) {
    a = Angle.simplify(a);
    const {
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const pxD = -rx * Maths.sin(a) * cosPhi - ry * Maths.cos(a) * sinPhi;
    const pyD = -rx * Maths.sin(a) * sinPhi + ry * Maths.cos(a) * cosPhi;
    const tv = [pxD, pyD];
    const c = this.getParametricEquation()(a);
    const cvt = this.getCurvatureAtAngle(a);
    const sign = Maths.sign(cvt);
    const nv = Object.is(sign, -1) || Object.is(sign, -0) ? Vector2.rotate(tv, -Maths.PI / 2) : Vector2.rotate(tv, Maths.PI / 2);
    return normalized ? new Vector(c, Vector2.normalize(nv)) : new Vector(c, nv);
  }

  getCurvatureAtAngle(a) {
    a = Angle.simplify(a);
    const {
      centerX: cx,
      centerY: cy,
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const pxD1 = -rx * Maths.sin(a) * cosPhi - ry * Maths.cos(a) * sinPhi;
    const pyD1 = -rx * Maths.sin(a) * sinPhi + ry * Maths.cos(a) * cosPhi;
    const pxD2 = -rx * Maths.cos(a) * cosPhi + ry * Maths.sin(a) * sinPhi;
    const pyD2 = -rx * Maths.cos(a) * sinPhi - ry * Maths.sin(a) * cosPhi;
    const num = pxD1 * pyD2 - pyD1 * pxD2;
    const den = Maths.pow(pxD1 ** 2 + pxD2 ** 2, 3 / 2);
    return num / den;
  }

  getOsculatingCircleAtAngle(a) {
    const cvt = this.getCurvatureAtAngle(a);
    const p = this.getPointAtAngle(a);
    if (cvt === Infinity || cvt === -Infinity) return null;
    if (cvt === 0) return null;
    const r = Maths.abs(1 / cvt);
    const angle = this.getNormalVectorAtAngle(a).angle;
    const pc = p.moveAlongAngle(angle, r);
    return new Circle(pc, r);
  }

  getImplicitFunctionCoefs() {
    const {
      centerX: cx,
      centerY: cy,
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const sin2Phi = Maths.sin(2 * phi);
    const cos2Phi = Maths.cos(2 * phi);
    const cx2 = cx ** 2;
    const cy2 = cy ** 2;
    const rx2 = rx ** 2;
    const ry2 = ry ** 2;
    const a = (1 + cos2Phi) / (2 * rx2) + (1 - cos2Phi) / (2 * ry2);
    const b = sin2Phi / rx2 - sin2Phi / ry2;
    const c = (1 - cos2Phi) / (2 * rx2) + (1 + cos2Phi) / (2 * ry2);
    const d = (sin2Phi * cy - (1 - cos2Phi) * cx) / ry2 - (sin2Phi * cy + (1 + cos2Phi) * cx) / rx2;
    const e = (sin2Phi * cx - (1 + cos2Phi) * cy) / ry2 - (sin2Phi * cx + (1 - cos2Phi) * cy) / rx2;
    const f = -1 + ((1 + cos2Phi) * cx2 + 2 * sin2Phi * cx * cy + (1 - cos2Phi) * cy2) / (2 * rx2) + ((1 - cos2Phi) * cx2 - 2 * sin2Phi * cx * cy + (1 + cos2Phi) * cy2) / (2 * ry2);
    return [a, b, c, d, e, f];
  }

  apply(transformation) {
    if (transformation.span() !== 2) return null;
    const {
      centerX,
      centerY,
      radiusX,
      radiusY,
      rotation
    } = this;
    const te = new Transformation().addTranslate(centerX, centerY).addRotate(rotation).addScale(radiusX, radiusY);
    const t = transformation.clone().addMatrix(...te.matrix);
    const {
      translate: [tx, ty],
      rotate1,
      scale: [sx, sy]
    } = t.decomposeSvd();
    return new Ellipse(tx, ty, Maths.abs(sx), Maths.abs(sy), rotate1);
  }

  toPath2() {
    const {
      centerX: cx,
      centerY: cy,
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const path = new Path();
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2,
      radiusX,
      radiusY,
      largeArc,
      positive,
      rotation
    } = centerToEndpointParameterization({
      centerX: cx,
      centerY: cy,
      radiusX: rx,
      radiusY: ry,
      rotation: phi,
      startAngle: 0,
      endAngle: 2 * Maths.PI,
      positive: this.getWindingDirection() === 1
    });
    path.appendCommand(Path.moveTo([x1, y1]));
    path.appendCommand(Path.arcTo(radiusX, radiusY, rotation, largeArc, positive, [x2, y2]));
    path.closed = true;
    return path;
  }

  toPath() {
    const kappa = 0.5522848;
    const {
      centerX: cx,
      centerY: cy,
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const ox = rx * kappa;
    const oy = ry * kappa;
    const xs = cx - rx;
    const ys = cy - ry;
    const xe = cx + rx;
    const ye = cy + ry;
    const xm = cx;
    const ym = cy;
    const cp11 = Vector2.rotate([xs, ym - oy], phi);
    const cp12 = Vector2.rotate([xm - ox, ys], phi);
    const cp21 = Vector2.rotate([xm + ox, ys], phi);
    const cp22 = Vector2.rotate([xe, ym - oy], phi);
    const cp31 = Vector2.rotate([xe, ym + oy], phi);
    const cp32 = Vector2.rotate([xm + ox, ye], phi);
    const cp41 = Vector2.rotate([xm - ox, ye], phi);
    const cp42 = Vector2.rotate([xs, ym + oy], phi);
    const path = new Path();
    path.appendCommand(Path.moveTo(Vector2.rotate([xs, ym], phi)));
    path.appendCommand(Path.bezierTo(cp11, cp12, Vector2.rotate([xm, ys], phi)));
    path.appendCommand(Path.bezierTo(cp21, cp22, Vector2.rotate([xe, ym], phi)));
    path.appendCommand(Path.bezierTo(cp31, cp32, Vector2.rotate([xm, ye], phi)));
    path.appendCommand(Path.bezierTo(cp41, cp42, Vector2.rotate([xs, ym], phi)));
    path.closed = true;
    return path;
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      centerX,
      centerY,
      radiusX,
      radiusY,
      rotation
    } = this;
    g.centerArcTo(centerX, centerY, radiusX, radiusY, rotation, 0, 2 * Maths.PI);
    return g;
  }

  clone() {
    return new Ellipse(this.centerX, this.centerY, this.radiusX, this.radiusY, this.rotation);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Ellipse();

    this._setCenterX(shape._centerX);

    this._setCenterY(shape._centerY);

    this._setRadiusX(shape._radiusX);

    this._setRadiusY(shape._radiusY);

    this._setRotation(shape._rotation);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tcenterX: ${this.centerX}`, `\tcenterY: ${this.centerY}`, `\tradiusX: ${this.radiusX}`, `\tradiusY: ${this.radiusY}`, `\trotation: ${this.rotation}`, `}`].join("\n");
  }

  toArray() {
    return [this.centerX, this.centerY, this.radiusX, this.radiusY, this.rotation];
  }

  toObject() {
    return {
      centerX: this.centerX,
      centerY: this.centerY,
      radiusX: this.radiusX,
      radiusY: this.radiusY,
      rotation: this.rotation
    };
  }

}) || _class$v;

function _rf(x, y, z) {
  let result = 0;
  let A = 0;
  let lambda = 0;
  let dx = 0;
  let dy = 0;
  let dz = 0;
  const minError = 1e-10;

  do {
    lambda = Maths.sqrt(x * y) + Maths.sqrt(y * z) + Maths.sqrt(z * x);
    x = (x + lambda) / 4;
    y = (y + lambda) / 4;
    z = (z + lambda) / 4;
    A = (x + y + z) / 3;
    dx = 1 - x / A;
    dy = 1 - y / A;
    dz = 1 - z / A;
  } while (Maths.max(Maths.abs(dx), Maths.abs(dy), Maths.abs(dz)) > minError);

  let E2 = 0;
  let E3 = 0;
  E2 = dx * dy + dy * dz + dz * dx;
  E3 = dy * dx * dz;
  result = 1 - 1 / 10 * E2 + 1 / 14 * E3 + 1 / 24 * Maths.pow(E2, 2) - 3 / 44 * E2 * E3 - 5 / 208 * Maths.pow(E2, 3) + 3 / 104 * Maths.pow(E3, 2) + 1 / 16 * Maths.pow(E2, 2) * E3;
  result *= 1 / Maths.sqrt(A);
  return result;
}

function _rd(x, y, z) {
  let sum = 0;
  let fac = 0;
  let lambda = 0;
  let dx = 0;
  let dy = 0;
  let dz = 0;
  let A = 0;
  const minError = 1e-10;
  sum = 0;
  fac = 1;

  do {
    lambda = Maths.sqrt(x * y) + Maths.sqrt(y * z) + Maths.sqrt(z * x);
    sum += fac / (Maths.sqrt(z) * (z + lambda));
    fac /= 4;
    x = (x + lambda) / 4;
    y = (y + lambda) / 4;
    z = (z + lambda) / 4;
    A = (x + y + 3 * z) / 5;
    dx = 1 - x / A;
    dy = 1 - y / A;
    dz = 1 - z / A;
  } while (Maths.max(Maths.abs(dx), Maths.abs(dy), Maths.abs(dz)) > minError);

  let E2 = 0;
  let E3 = 0;
  let E4 = 0;
  let E5 = 0;
  let result = 0;
  E2 = dx * dy + dy * dz + 3 * Maths.pow(dz, 2) + 2 * dz * dx + dx * dz + 2 * dy * dz;
  E3 = Maths.pow(dz, 3) + dx * Maths.pow(dz, 2) + 3 * dx * dy * dz + 2 * dy * Maths.pow(dz, 2) + dy * Maths.pow(dz, 2) + 2 * dx * Maths.pow(dz, 2);
  E4 = dy * Maths.pow(dz, 3) + dx * Maths.pow(dz, 3) + dx * dy * Maths.pow(dz, 2) + 2 * dx * dy * Maths.pow(dz, 2);
  E5 = dx * dy * Maths.pow(dz, 3);
  result = 1 - 3 / 14 * E2 + 1 / 6 * E3 + 9 / 88 * Maths.pow(E2, 2) - 3 / 22 * E4 - 9 / 52 * E2 * E3 + 3 / 26 * E5 - 1 / 16 * Maths.pow(E2, 3) + 3 / 40 * Maths.pow(E3, 2) + 3 / 20 * E2 * E4 + 45 / 272 * Maths.pow(E2, 2) * E3 - 9 / 68 * (E3 * E4 + E2 * E5);
  result = 3.0 * sum + fac * result / (A * Maths.sqrt(A));
  return result;
}

function completeEllipticIntegralOfSecondKind(ksq) {
  return _rf(0, 1 - ksq, 1) - 1 / 3 * ksq * _rd(0, 1 - ksq, 1);
}

function incompleteEllipticIntegralOfSecondKind(angle, ksq) {
  return Maths.sin(angle) * _rf(Maths.pow(Maths.cos(angle), 2), 1 - ksq * Maths.pow(Maths.sin(angle), 2), 1) - 1 / 3 * ksq * Maths.pow(Maths.sin(angle), 3) * _rd(Maths.pow(Maths.cos(angle), 2), 1 - ksq * Maths.pow(Maths.sin(angle), 2), 1);
}

var _class$u, _class2$2;

let Arc = validGeometry(_class$u = (_class2$2 = class Arc extends Geometry {
  constructor(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
    super();
    this._point1X = NaN;
    this._point1Y = NaN;
    this._point2X = NaN;
    this._point2Y = NaN;
    this._radiusX = NaN;
    this._radiusY = NaN;
    this._largeArc = true;
    this._positive = true;
    this._rotation = 0;
    this._inputRadiusX = NaN;
    this._inputRadiusY = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        point1X: a0,
        point1Y: a1,
        point2X: a2,
        point2Y: a3,
        rotation: a8 != null ? a8 : 0,
        radiusX: a4,
        radiusY: a5,
        largeArc: a6,
        positive: a7
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        point1Coordinates: a0,
        point2Coordinates: a1,
        rotation: a6 != null ? a6 : 0,
        radiusX: a2,
        radiusY: a3,
        largeArc: a4,
        positive: a5
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        point1: a0,
        point2: a1,
        rotation: a6 != null ? a6 : 0,
        radiusX: a2,
        radiusY: a3,
        largeArc: a4,
        positive: a5
      });
    }
  }

  get events() {
    return {
      point1XChanged: "point1X",
      point1YChanged: "point1Y",
      point2XChanged: "point2X",
      point2YChanged: "point2Y",
      radiusXChanged: "radiusX",
      radiusYChanged: "radiusY",
      largeArcChanged: "largeArc",
      positiveChanged: "positive",
      rotationChanged: "rotation"
    };
  }

  _setPoint1X(value) {
    if (Utility.isEqualTo(this._point1X, value)) return;
    this._point1X = value;
    this.trigger_(EventObject.simple(this, this.events.point1XChanged));

    this._correctAndSetRadii();
  }

  _setPoint1Y(value) {
    if (Utility.isEqualTo(this._point1Y, value)) return;
    this._point1Y = value;
    this.trigger_(EventObject.simple(this, this.events.point1YChanged));

    this._correctAndSetRadii();
  }

  _setPoint2X(value) {
    if (Utility.isEqualTo(this._point2X, value)) return;
    this._point2X = value;
    this.trigger_(EventObject.simple(this, this.events.point2XChanged));

    this._correctAndSetRadii();
  }

  _setPoint2Y(value) {
    if (Utility.isEqualTo(this._point2Y, value)) return;
    this._point2Y = value;
    this.trigger_(EventObject.simple(this, this.events.point2YChanged));

    this._correctAndSetRadii();
  }

  _setRadiusX(value) {
    if (Utility.isEqualTo(this._inputRadiusX, value)) return;
    this._inputRadiusX = value;
    this.trigger_(EventObject.simple(this, this.events.radiusXChanged));

    this._correctAndSetRadii();
  }

  _setRadiusY(value) {
    if (Utility.isEqualTo(this._inputRadiusY, value)) return;
    this._inputRadiusY = value;
    this.trigger_(EventObject.simple(this, this.events.radiusYChanged));

    this._correctAndSetRadii();
  }

  _setLargeArc(value) {
    if (Utility.isEqualTo(this._largeArc, value)) return;
    this._largeArc = value;
    this.trigger_(EventObject.simple(this, this.events.largeArcChanged));
  }

  _setPositive(value) {
    if (Utility.isEqualTo(this._positive, value)) return;
    this._positive = value;
    this.trigger_(EventObject.simple(this, this.events.positiveChanged));
  }

  _setRotation(value) {
    if (Utility.isEqualTo(this._rotation, value)) return;
    this._rotation = value;
    this.trigger_(EventObject.simple(this, this.events.rotationChanged));

    this._correctAndSetRadii();
  }

  _correctAndSetRadii() {
    const {
      _point1X,
      _point1Y,
      _point2X,
      _point2Y,
      _inputRadiusX,
      _inputRadiusY,
      _rotation
    } = this;
    const correctPrecondition = !Number.isNaN(_point1X) && !Number.isNaN(_point1Y) && !Number.isNaN(_point2X) && !Number.isNaN(_point1Y) && !Number.isNaN(_point2Y) && !Number.isNaN(_inputRadiusX) && !Number.isNaN(_inputRadiusY);

    if (correctPrecondition) {
      let [rx, ry] = flexCorrectRadii(_point1X, _point1Y, _point2X, _point2Y, _inputRadiusX, _inputRadiusY, _rotation);

      if (!Utility.isEqualTo(this._radiusX, rx)) {
        this._radiusX = rx;
        this.trigger_(EventObject.simple(this, this.events.radiusXChanged));
      }

      if (!Utility.isEqualTo(this._radiusY, ry)) {
        this._radiusY = ry;
        this.trigger_(EventObject.simple(this, this.events.radiusYChanged));
      }
    }
  }

  get point1X() {
    return this._point1X;
  }

  set point1X(value) {
    Assert.isRealNumber(value, "point1X");

    this._setPoint1X(value);
  }

  get point1Y() {
    return this._point1Y;
  }

  set point1Y(value) {
    Assert.isRealNumber(value, "point1Y");

    this._setPoint1Y(value);
  }

  get point1Coordinates() {
    return [this._point1X, this._point1Y];
  }

  set point1Coordinates(value) {
    Assert.isCoordinates(value, "point1Coordinates");

    this._setPoint1X(Coordinates.x(value));

    this._setPoint1Y(Coordinates.y(value));
  }

  get point1() {
    return new Point(this._point1X, this._point1Y);
  }

  set point1(value) {
    this._setPoint1X(value.x);

    this._setPoint1Y(value.y);
  }

  get point2X() {
    return this._point2X;
  }

  set point2X(value) {
    Assert.isRealNumber(value, "point2X");

    this._setPoint2X(value);
  }

  get point2Y() {
    return this._point2Y;
  }

  set point2Y(value) {
    Assert.isRealNumber(value, "point2Y");

    this._setPoint2Y(value);
  }

  get point2Coordinates() {
    return [this._point2X, this._point2Y];
  }

  set point2Coordinates(value) {
    Assert.isCoordinates(value, "point2Coordinates");

    this._setPoint2X(Coordinates.x(value));

    this._setPoint2Y(Coordinates.y(value));
  }

  get point2() {
    return new Point(this._point2X, this._point2Y);
  }

  set point2(value) {
    this._setPoint2X(value.x);

    this._setPoint2Y(value.y);
  }

  get radiusX() {
    return this._radiusX;
  }

  set radiusX(value) {
    Assert.isPositiveNumber(value, "radiusX");

    this._setRadiusX(value);
  }

  get radiusY() {
    return this._radiusY;
  }

  set radiusY(value) {
    Assert.isPositiveNumber(value, "radiusY");

    this._setRadiusY(value);
  }

  get largeArc() {
    return this._largeArc;
  }

  set largeArc(value) {
    this._setLargeArc(value);
  }

  get positive() {
    return this._positive;
  }

  set positive(value) {
    this._setPositive(value);
  }

  get rotation() {
    return this._rotation;
  }

  set rotation(value) {
    Assert.isRealNumber(value, "rotation");

    this._setRotation(value);
  }

  initialized_() {
    return !Number.isNaN(this._point1X) && !Number.isNaN(this._point1Y) && !Number.isNaN(this._point2X) && !Number.isNaN(this._point2Y) && !Number.isNaN(this._radiusX) && !Number.isNaN(this._radiusY);
  }

  dimensionallyDegenerate() {
    if (!this.initialized_()) return true;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this;
    return Coordinates.isEqualTo(c1, c2, optioner.options.epsilon);
  }

  static fromCenterPointAndStartEndAnglesEtc(centerPoint, radiusX, radiusY, startAngle, endAngle, positive, rotation = 0) {
    Assert.isPositiveNumber(radiusX, "radiusX");
    Assert.isPositiveNumber(radiusY, "radiusY");
    Assert.isRealNumber(startAngle, "startAngle");
    Assert.isRealNumber(endAngle, "endAngle");
    Assert.isRealNumber(rotation, "rotation");
    const [cx, cy] = getCoordinates(centerPoint, "centerPoint");
    const ep = centerToEndpointParameterization({
      centerX: cx,
      centerY: cy,
      radiusX,
      radiusY,
      rotation,
      startAngle,
      endAngle,
      positive
    });
    return new Arc(ep.point1X, ep.point1Y, ep.point2X, ep.point2Y, ep.radiusX, ep.radiusY, ep.largeArc, ep.positive, ep.rotation);
  }

  static fromThreePointsCircular(point1, point2, radiusControlPoint) {
    const [x1, y1] = getCoordinates(point1, "point1");
    const [x2, y2] = getCoordinates(point2, "point2");
    const [x3, y3] = getCoordinates(radiusControlPoint, "radiusControlPoint");

    if (Point.isThreePointsCollinear([x1, y1], [x2, y2], [x3, y3])) {
      return null;
    }

    const a = 2 * (x2 - x1);
    const b = 2 * (y2 - y1);
    const c = x2 ** 2 + y2 ** 2 - x1 ** 2 - y1 ** 2;
    const d = 2 * (x3 - x2);
    const e = 2 * (y3 - y2);
    const f = x3 ** 2 + y3 ** 2 - x2 ** 2 - y2 ** 2;
    const cx = (b * f - e * c) / (b * d - e * a);
    const cy = (d * c - a * f) / (b * d - e * a);
    const r = Maths.sqrt((cx - x1) ** 2 + (cy - y1) ** 2);
    const v12 = Vector2.from([x1, y1], [x2, y2]);
    const v13 = Vector2.from([x1, y1], [x3, y3]);
    const positive = Vector2.cross(v12, v13) < 0;
    const cm = [(x1 + x2) / 2, (y1 + y2) / 2];
    const br = Vector2.magnitude(Vector2.from([x1, y1], [x2, y2])) / 2;
    const d3 = Vector2.magnitude(Vector2.from([x3, y3], cm));
    const largeArc = d3 > br;
    return new Arc(x1, y1, x2, y2, r, r, largeArc, positive, 0);
  }

  extrema() {
    const [sa, ea] = this.getStartEndAngles();
    const {
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    let atanX = Maths.atan(-ry * sinPhi / (rx * cosPhi));
    const xRoots = [Angle.simplify(atanX), Angle.simplify(atanX + Maths.PI)];
    let atanY = Maths.atan(ry * cosPhi / (rx * sinPhi));
    const yRoots = [Angle.simplify(atanY), Angle.simplify(atanY + Maths.PI)];
    const epsilon = optioner.options.epsilon;
    const fn = this.getParametricEquation();
    const aRoots = Utility.uniqWith([...xRoots, ...yRoots], (a, b) => Maths.equalTo(a, b, epsilon));
    return aRoots.filter(a => {
      return Angle.between(a, sa, ea, this.positive, false, false, epsilon);
    }).map(a => [new Point(fn(a)), a]);
  }

  move(deltaX, deltaY) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, [deltaX, deltaY]);
    this.point2Coordinates = Vector2.add(this.point2Coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, Vector2.from2(angle, distance));
    this.point2Coordinates = Vector2.add(this.point2Coordinates, Vector2.from2(angle, distance));
    return this;
  }

  _centerParameterization() {
    const {
      point1X,
      point1Y,
      point2X,
      point2Y,
      radiusX,
      radiusY,
      largeArc,
      positive,
      rotation
    } = this;
    return endpointToCenterParameterization({
      point1X,
      point1Y,
      point2X,
      point2Y,
      radiusX,
      radiusY,
      largeArc,
      positive,
      rotation
    });
  }

  getCenterPoint() {
    const {
      centerX,
      centerY
    } = this._centerParameterization();

    return new Point(centerX, centerY);
  }

  getStartEndAngles() {
    const {
      startAngle,
      endAngle
    } = this._centerParameterization();

    return [startAngle, endAngle];
  }

  getParametricEquation() {
    return this.toEllipse().getParametricEquation();
  }

  getImplicitFunctionCoefs() {
    return this.toEllipse().getImplicitFunctionCoefs();
  }

  toEllipse() {
    const {
      centerX: cx,
      centerY: cy
    } = this._centerParameterization();

    const {
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const ellipse = new Ellipse(cx, cy, rx, ry, phi);
    return ellipse;
  }

  isCircularArc() {
    return Maths.equalTo(this.radiusX, this.radiusY, optioner.options.epsilon);
  }

  toCircle() {
    if (!this.isCircularArc()) {
      console.warn("[G]The arc is not a is circular arc, and it can not change to a circle.");
      return null;
    }

    const {
      centerX: cx,
      centerY: cy
    } = this._centerParameterization();

    return new Circle(cx, cy, this.radiusX);
  }

  reverse() {
    this.positive = !this.positive;
    const [ox1, oy1] = [this._point1X, this._point1Y];
    const [ox2, oy2] = [this._point2X, this._point2Y];
    [this._point1X, this.point1Y] = [ox2, oy2];
    [this._point2X, this.point2Y] = [ox1, oy1];
    this.trigger_(EventObject.simple(this, this.events.point1XChanged));
    this.trigger_(EventObject.simple(this, this.events.point1YChanged));
    this.trigger_(EventObject.simple(this, this.events.point2XChanged));
    this.trigger_(EventObject.simple(this, this.events.point2YChanged));
  }

  isPointOn(point) {
    return !Number.isNaN(this.getAngleOfPoint(point));
  }

  getAngleOfPoint(point) {
    const a = this.toEllipse().getAngleOfPoint(point);
    const [sa, ea] = this.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return Angle.between(a, sa, ea, this.positive, false, false, epsilon) ? a : NaN;
  }

  _assertBetweenStartAndEndAngles(value, p) {
    const [sa, ea] = this.getStartEndAngles();
    Assert.condition(Angle.between(value, sa, ea, this.positive, false, false), `[G]The \`${p}\` must be ${this.positive ? "positively" : "negatively"} between ${sa}(including) and ${ea}(including).`);
  }

  getPointAtAngle(angle) {
    this._assertBetweenStartAndEndAngles(angle, "angle");

    return this.toEllipse().getPointAtAngle(angle);
  }

  getBoundingBox() {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const extrema = this.extrema().map(([p]) => p);
    extrema.concat([this.point1, this.point2]).forEach(point => {
      const {
        x,
        y
      } = point;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    });
    return [minX, minY, maxX - minX, maxY - minY];
  }

  getTangentVectorAtAngle(angle, normalized = false) {
    this._assertBetweenStartAndEndAngles(angle, "angle");

    const tv = this.toEllipse().getTangentVectorAtAngle(angle, normalized);

    if (this.positive) {
      return tv;
    } else {
      return tv.negative();
    }
  }

  getNormalVectorAtAngle(angle, normalized = false) {
    this._assertBetweenStartAndEndAngles(angle, "angle");

    const nv = this.toEllipse().getNormalVectorAtAngle(angle, normalized);

    if (this.positive) {
      return nv;
    } else {
      return nv.negative();
    }
  }

  getCurvatureAtAngle(angle) {
    this._assertBetweenStartAndEndAngles(angle, "angle");

    const c = this.toEllipse().getCurvatureAtAngle(angle);
    return this.positive ? c : -c;
  }

  splitAtAngles(angles) {
    const [sa, ea] = this.getStartEndAngles();
    Assert.condition(angles.every(angle => Angle.between(angle, sa, ea, this.positive, false, false)), `[G]The \`angles\` must be all ${this.positive ? "positively" : "negatively"}  between ${sa}(including) and ${ea}(including).`);
    const ret = [];
    const epsilon = optioner.options.epsilon;
    angles = Utility.sortBy(Utility.uniqWith(angles.map(a => Angle.simplify(a)), (a, b) => Maths.equalTo(a, b, epsilon)), [n => {
      if (this.positive) {
        if (sa > ea) return n < sa ? n + Maths.PI * 2 : n;
        return n;
      } else {
        if (ea > sa) return n < ea ? -(n + Maths.PI * 2) : -n;
        return -n;
      }
    }]);
    const cc = this.getCenterPoint().coordinates;
    [sa, ...angles, ea].forEach((_, index, arr) => {
      if (index !== arr.length - 1) {
        ret.push(Arc.fromCenterPointAndStartEndAnglesEtc(cc, this.radiusX, this.radiusY, arr[index], arr[index + 1], this.positive, this.rotation));
      }
    });
    return ret;
  }

  splitAtAngle(angle) {
    this._assertBetweenStartAndEndAngles(angle, "angle");

    const [sa, ea] = this.getStartEndAngles();
    const cc = this.getCenterPoint().coordinates;
    return [Arc.fromCenterPointAndStartEndAnglesEtc(cc, this.radiusX, this.radiusY, sa, angle, this.positive, this.rotation), Arc.fromCenterPointAndStartEndAnglesEtc(cc, this.radiusX, this.radiusY, angle, ea, this.positive, this.rotation)];
  }

  getClosestPointFrom(point) {
    const [x, y] = getCoordinates(point, "point");
    const [cx, cy] = this.getCenterPoint().coordinates;
    const [sa, ea] = this.getStartEndAngles();
    const {
      rotation: phi,
      radiusX: rx,
      radiusY: ry
    } = this;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const cosPhi2 = cosPhi ** 2;
    const sinPhi2 = sinPhi ** 2;
    const rx2 = rx ** 2;
    const ry2 = ry ** 2;
    const fn = this.getParametricEquation();

    if (cx === x && cy === y && rx2 === ry2) {
      return new Point(fn(sa));
    }

    let tPoly = [ry * (sinPhi * (cx - x) - cosPhi * (cy - y)), 2 * (cosPhi2 * (rx2 - ry2) + cosPhi * rx * (-cx + x) + sinPhi2 * (rx2 - ry2) + sinPhi * rx * (-cy + y)), 0, 2 * (cosPhi2 * (-rx2 + ry2) + cosPhi * rx * (-cx + x) + sinPhi2 * (-rx2 + ry2) + sinPhi * rx * (-cy + y)), ry * (cosPhi * (cy - y) - sinPhi * (cx - x))];
    tPoly = Polynomial.monic(tPoly);
    const roots = Polynomial.roots(tPoly).filter(Type.isNumber);
    const epsilon = optioner.options.epsilon;
    const as = roots.map(r => Angle.simplify(Maths.atan(r) * 2)).filter(a => Angle.between(a, sa, ea, this.positive, true, true, epsilon));
    as.push(sa, ea);
    let minA = NaN;
    let minSd = Infinity;
    as.forEach(a => {
      const [px, py] = fn(a);
      const sd = (px - x) ** 2 + (py - y) ** 2;

      if (sd < minSd) {
        minSd = sd;
        minA = a;
      }
    });
    return new Point(fn(minA));
  }

  getLength() {
    let [sa, ea] = this.getStartEndAngles();
    const {
      radiusX: rx,
      radiusY: ry,
      positive
    } = this;
    const shouldTranspose = rx > ry ? true : false;
    const ksq = shouldTranspose ? 1 - ry ** 2 / rx ** 2 : 1 - rx ** 2 / ry ** 2;
    const integralScalar = shouldTranspose ? rx : ry;
    if (!positive) [sa, ea] = [ea, sa];
    const sh = heldIntegrals(sa);
    const eh = heldIntegrals(ea);
    const oneCompleteIntegral = integralScalar * completeEllipticIntegralOfSecondKind(ksq);
    const completeCount = sa > ea ? 4 + eh[0] - sh[0] : eh[0] - sh[0];
    const complete = completeCount !== 0 ? completeCount * oneCompleteIntegral : 0;
    const incomplete = calcIncomplete(eh[1]) - calcIncomplete(sh[1]);
    return complete + incomplete;

    function calcIncomplete(angle) {
      const sign = Maths.sign(angle);
      const value = Maths.abs(angle);

      if (shouldTranspose) {
        return sign * (oneCompleteIntegral - integralScalar * incompleteEllipticIntegralOfSecondKind(Maths.PI / 2 - value, ksq));
      } else {
        return sign * integralScalar * incompleteEllipticIntegralOfSecondKind(value, ksq);
      }
    }

    function heldIntegrals(angle) {
      const h1Pi = Maths.PI * 0.5;
      const h2Pi = Maths.PI;
      const h3Pi = Maths.PI * 1.5;
      const h4Pi = Maths.PI * 2;
      let held = [0, 0];
      if (angle >= 0 && angle < h1Pi) held = [0, angle];
      if (angle >= h1Pi && angle < h2Pi) held = [2, -(h2Pi - angle)];
      if (angle >= h2Pi && angle < h3Pi) held = [2, angle - h2Pi];
      if (angle >= h3Pi && angle < h4Pi) held = [4, -(h4Pi - angle)];
      return held;
    }
  }

  toPath(closed = false) {
    const path = new Path();
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      radiusX,
      radiusY,
      rotation,
      largeArc,
      positive
    } = this;
    path.appendCommand(Path.moveTo(c1));
    path.appendCommand(Path.arcTo(radiusX, radiusY, rotation, largeArc, positive, c2));
    path.closed = closed;
    return path;
  }

  apply(transformation) {
    if (transformation.span() !== 2) return null;
    const {
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2,
      radiusX: rx,
      radiusY: ry,
      rotation: phi,
      largeArc: la,
      positive: p
    } = this;
    const ep = endpointParameterizationTransform({
      point1X: x1,
      point1Y: y1,
      point2X: x2,
      point2Y: y2,
      radiusX: rx,
      radiusY: ry,
      largeArc: la,
      positive: p,
      rotation: phi
    }, transformation.matrix);
    return new Arc(ep.point1X, ep.point1Y, ep.point2X, ep.point2Y, ep.radiusX, ep.radiusY, ep.largeArc, ep.positive, ep.rotation);
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      radiusX: rx,
      radiusY: ry,
      rotation: rotation,
      largeArc: largeArc,
      positive: positive
    } = this;
    g.moveTo(...c1);
    g.endpointArcTo(rx, ry, rotation, largeArc, positive, ...c2);
    return g;
  }

  clone() {
    return new Arc(this.point1X, this.point1Y, this.point2X, this.point2Y, this.radiusX, this.radiusY, this.largeArc, this.positive, this.rotation);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Arc();
    this._inputRadiusX = NaN;
    this._inputRadiusY = NaN;

    this._setPoint1X(shape._point1X);

    this._setPoint1Y(shape._point1Y);

    this._setPoint2X(shape._point2X);

    this._setPoint2Y(shape._point2Y);

    this._setRotation(shape._rotation);

    this._setRadiusX(shape._radiusX);

    this._setRadiusY(shape._radiusY);

    this._setLargeArc(shape._largeArc);

    this._setPositive(shape._positive);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tpoint1X: ${this.point1X}`, `\tpoint1Y: ${this.point1Y}`, `\tpoint2X: ${this.point2X}`, `\tpoint2Y: ${this.point2Y}`, `\tradiusX: ${this.radiusX}`, `\tradiusY: ${this.radiusY}`, `\tlargeArc: ${this.largeArc}`, `\tpositive: ${this.positive}`, `\trotation: ${this.rotation}`, `}`].join("\n");
  }

  toArray() {
    return [this.point1X, this.point1Y, this.point2X, this.point2Y, this.radiusX, this.radiusY, this.largeArc, this.positive, this.rotation];
  }

  toObject() {
    return {
      point1X: this.point1X,
      point1Y: this.point1Y,
      point2X: this.point2X,
      point2Y: this.point2Y,
      radiusX: this.radiusX,
      radiusY: this.radiusY,
      largeArc: this.largeArc,
      positive: this.positive,
      rotation: this.rotation
    };
  }

}, (_applyDecoratedDescriptor(_class2$2.prototype, "dimensionallyDegenerate", [stated], Object.getOwnPropertyDescriptor(_class2$2.prototype, "dimensionallyDegenerate"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "extrema", [stated], Object.getOwnPropertyDescriptor(_class2$2.prototype, "extrema"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "_centerParameterization", [stated], Object.getOwnPropertyDescriptor(_class2$2.prototype, "_centerParameterization"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "getStartEndAngles", [stated], Object.getOwnPropertyDescriptor(_class2$2.prototype, "getStartEndAngles"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "toEllipse", [stated], Object.getOwnPropertyDescriptor(_class2$2.prototype, "toEllipse"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "getBoundingBox", [stated], Object.getOwnPropertyDescriptor(_class2$2.prototype, "getBoundingBox"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "getClosestPointFrom", [validGeometryArguments], Object.getOwnPropertyDescriptor(_class2$2.prototype, "getClosestPointFrom"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "getLength", [stated], Object.getOwnPropertyDescriptor(_class2$2.prototype, "getLength"), _class2$2.prototype)), _class2$2)) || _class$u;

var _dec$i, _dec2$g, _dec3$g, _dec4$g, _dec5$g, _dec6$g, _dec7$g, _dec8$g, _dec9$c, _class$t;
let LineSegmentLineSegment = (_dec$i = superPreprocess("handleDegeneration"), _dec2$g = superPreprocess("handleDegeneration"), _dec3$g = superPreprocess("handleDegeneration"), _dec4$g = superPreprocess("handleDegeneration"), _dec5$g = superPreprocess("handleDegeneration"), _dec6$g = superPreprocess("handleDegeneration"), _dec7$g = superPreprocess("handleDegeneration"), _dec8$g = superPreprocess("handleDegeneration"), _dec9$c = superPreprocess("handleDegeneration"), (_class$t = class LineSegmentLineSegment extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }
  }

  onSameTrajectory() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this.geometry1;
    const {
      point1Coordinates: c3,
      point2Coordinates: c4
    } = this.geometry2;
    const epsilon = optioner.options.epsilon;
    const v12 = Vector2.from(c1, c2);
    const v34 = Vector2.from(c3, c4);
    const v13 = Vector2.from(c1, c3);
    const cp1 = Vector2.cross(v12, v34);
    const cp2 = Vector2.cross(v13, v12);
    return Maths.equalTo(cp1, 0, epsilon) && Maths.equalTo(cp2, 0, epsilon);
  }

  intersection() {
    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    const {
      point1Coordinates: c1,
      point2Coordinates: c2
    } = this.geometry1;
    const {
      point1Coordinates: c3,
      point2Coordinates: c4
    } = this.geometry2;
    const epsilon = optioner.options.epsilon;
    const v12 = Vector2.from(c1, c2);
    const v34 = Vector2.from(c3, c4);
    const v13 = Vector2.from(c1, c3);
    const cp1 = Vector2.cross(v12, v34);
    const cp2 = Vector2.cross(v13, v12);
    const cp3 = Vector2.cross(v13, v34);
    const intersection = [];

    if (!Maths.equalTo(cp1, 0, epsilon)) {
      const t1 = cp3 / cp1;
      const t2 = cp2 / cp1;

      if (Maths.between(t1, 0, 1, false, false, epsilon) && Maths.between(t2, 0, 1, false, false, epsilon)) {
        const [x, y] = Vector2.add(c1, Vector2.scalarMultiply(v12, t1));
        intersection.push({
          c: [x, y],
          t1,
          t2
        });
      }
    }

    return intersection;
  }

  perspective() {
    if (!this.onSameTrajectory()) throw new Error("[G]Call `onSameTrajectory` first.");
    const {
      point1Coordinates: c1i,
      point2Coordinates: c1t
    } = this.geometry1;
    const {
      point1Coordinates: c2i,
      point2Coordinates: c2t
    } = this.geometry2;
    const t2i = this.geometry1.getTimeOfPointExtend(c2i);
    const t2t = this.geometry1.getTimeOfPointExtend(c2t);
    const dt = t2i > t2t;
    return {
      c1i,
      c1t,
      c2i: dt ? c2t : c2i,
      c2t: dt ? c2i : c2t,
      t2i: dt ? t2t : t2i,
      t2t: dt ? t2i : t2t
    };
  }

  equal() {
    if (!this.onSameTrajectory()) return false;
    const {
      t2i,
      t2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(t2i, 0, epsilon) && Maths.equalTo(t2t, 1, epsilon);
  }

  separate() {
    if (!this.onSameTrajectory()) {
      return this.intersection().length === 0;
    }

    const {
      t2i,
      t2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return Maths.greaterThan(t2i, 1, epsilon) || Maths.lessThan(t2t, 0, epsilon);
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    const {
      t2i,
      t2t,
      c1i,
      c1t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    const coincide = [];
    const iet = Maths.equalTo(t2i, 1, epsilon);
    const tei = Maths.equalTo(t2t, 0, epsilon);
    if (iet) coincide.push(new Point(c1t));
    if (tei) coincide.push(new Point(c1i));
    if (iet || tei) return coincide;
    const ili = Maths.lessThan(t2i, 0, epsilon);
    const ibw = Maths.between(t2i, 0, 1, false, true, epsilon);
    const tgt = Maths.greaterThan(t2t, 1, epsilon);
    const tbw = Maths.between(t2t, 0, 1, true, false, epsilon);
    if (ili && tbw) coincide.push(this.geometry1.portionOf(0, t2t));
    if (tgt && ibw) coincide.push(this.geometry1.portionOf(t2i, 1));
    if (tgt && ili) coincide.push(this.geometry1.clone());
    if (ibw && tbw) coincide.push(this.geometry2.clone());
    return coincide;
  }

}, (_applyDecoratedDescriptor(_class$t.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$t.prototype, "onSameTrajectory"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$t.prototype, "intersection"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "equal", [_dec$i], Object.getOwnPropertyDescriptor(_class$t.prototype, "equal"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "separate", [_dec2$g], Object.getOwnPropertyDescriptor(_class$t.prototype, "separate"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "intersect", [_dec3$g], Object.getOwnPropertyDescriptor(_class$t.prototype, "intersect"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "strike", [_dec4$g], Object.getOwnPropertyDescriptor(_class$t.prototype, "strike"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "cross", [_dec5$g], Object.getOwnPropertyDescriptor(_class$t.prototype, "cross"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "block", [_dec6$g], Object.getOwnPropertyDescriptor(_class$t.prototype, "block"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "blockedBy", [_dec7$g], Object.getOwnPropertyDescriptor(_class$t.prototype, "blockedBy"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "connect", [_dec8$g], Object.getOwnPropertyDescriptor(_class$t.prototype, "connect"), _class$t.prototype), _applyDecoratedDescriptor(_class$t.prototype, "coincide", [_dec9$c], Object.getOwnPropertyDescriptor(_class$t.prototype, "coincide"), _class$t.prototype)), _class$t));

class IntersectionDescriptor {
  constructor(...args) {
    this.aIn = void 0;
    this.aOut = void 0;
    this.bIn = void 0;
    this.bOut = void 0;
    this.intersectAtEnd = false;

    if (args.length === 2) {
      this.aIn = args[0];
      this.aOut = args[0];
      this.bIn = args[1];
      this.bOut = args[1];
      this.intersectAtEnd = false;
    } else {
      this.aIn = args[0];
      this.aOut = args[1];
      this.bIn = args[2];
      this.bOut = args[3];
      this.intersectAtEnd = true;
    }
  }

  indexAndParams() {
    if (this.intersectAtEnd) {
      return [this.aIn, this.aOut, this.bIn, this.bOut];
    }

    return [this.aIn, this.bIn];
  }

  equalTo(other, epsilon) {
    if (this.intersectAtEnd) {
      return other.aIn[0] === this.aIn[0] && other.aOut[0] === this.aOut[0] && other.bIn[0] === this.bIn[0] && other.bOut[0] === this.bOut[0];
    }

    return other.aIn[0] === this.aIn[0] && Maths.equalTo(other.aIn[1], this.aIn[1], epsilon) && other.bIn[0] === this.bIn[0] && Maths.equalTo(other.bIn[1], this.bIn[1], epsilon);
  }

  matchWith(other, epsilon) {
    if (this.intersectAtEnd) {
      return other.aIn[0] === this.aIn[0] && other.aOut[0] === this.aOut[0] && other.bIn[0] === this.bIn[0] && other.bOut[0] === this.bOut[0] || other.aIn[0] === this.bIn[0] && other.aOut[0] === this.bOut[0] && other.bIn[0] === this.aIn[0] && other.bOut[0] === this.aOut[0];
    }

    return other.aIn[0] === this.aIn[0] && Maths.equalTo(other.aIn[1], this.aIn[1], epsilon) && other.bIn[0] === this.bIn[0] && Maths.equalTo(other.bIn[1], this.bIn[1], epsilon) || other.aIn[0] === this.bIn[0] && Maths.equalTo(other.aIn[1], this.bIn[1], epsilon) && other.bIn[0] === this.aIn[0] && Maths.equalTo(other.bIn[1], this.aIn[1], epsilon);
  }

}

var _dec$h, _class$s, _class2$1;
const POLYGON_MIN_VERTEX_COUNT = 2;
let Polygon = (_dec$h = statedWithBoolean(false, false), validGeometry(_class$s = (_class2$1 = class Polygon extends Geometry {
  constructor(a0, a1) {
    super();
    this._vertices = [];
    this._closed = true;
    this._fillRule = "nonzero";

    if (Type.isArray(a0)) {
      Object.assign(this, {
        vertices: a0,
        closed: a1 != null ? a1 : true
      });
    }

    if (Type.isBoolean(a0)) {
      Object.assign(this, {
        closed: a0 != null ? a0 : true
      });
    }
  }

  get events() {
    return {
      verticesReset: "reset",
      vertexAdded: "vtxAdd",
      vertexRemoved: "vtxRemove",
      vertexChanged: "vtxChange",
      closedChanged: "closedChange",
      fillRuleChanged: "fillRuleChange"
    };
  }

  _setVertices(value) {
    if (!Utility.isEqualTo(this._vertices, value)) this.trigger_(EventObject.simple(this, this.events.verticesReset));
    this._vertices = value.map(vtx => ({ ...vtx,
      uuid: Utility.uuid()
    }));
  }

  _setClosed(value) {
    if (!Utility.isEqualTo(this._closed, value)) this.trigger_(EventObject.simple(this, this.events.closedChanged));
    this._closed = value;
  }

  _setFillRule(value) {
    if (!Utility.isEqualTo(this._fillRule, value)) this.trigger_(EventObject.simple(this, this.events.fillRuleChanged));
    this._fillRule = value;
  }

  get vertices() {
    return this._vertices.map(vtx => ({ ...vtx
    }));
  }

  set vertices(value) {
    Assert.condition(Type.isArray(value) && value.every(vtx => this._isPolygonVertex(vtx)), "[G]The `vertices` should be an array of `PolygonVertex`.");

    this._setVertices(value);
  }

  get closed() {
    return this._closed;
  }

  set closed(value) {
    this._setClosed(value);
  }

  get fillRule() {
    return this._fillRule;
  }

  set fillRule(value) {
    this._setFillRule(value);
  }

  get vertexCount() {
    return this._vertices.length;
  }

  initialized_() {
    return this._vertices.length >= POLYGON_MIN_VERTEX_COUNT;
  }

  dimensionallyDegenerate() {
    if (!this.initialized_()) return true;
    const epsilon = optioner.options.epsilon;
    const vertices = this._vertices;
    const {
      x: x0,
      y: y0
    } = vertices[0];

    for (let i = 1, l = this._vertices.length; i < l; i++) {
      const {
        x: xi,
        y: yi
      } = vertices[i];

      if (!Coordinates.isEqualTo([x0, y0], [xi, yi], epsilon)) {
        return false;
      }
    }

    return true;
  }

  static fromPoints(points) {
    return new Polygon(points.map(p => Polygon.vertex(p)));
  }

  static convexHullFromPoints(points) {
    if (points.length < POLYGON_MIN_VERTEX_COUNT) return null;
    if (points.length === POLYGON_MIN_VERTEX_COUNT) return new Polygon([Polygon.vertex(points[0]), Polygon.vertex(points[1])], true);
    const pointsCopy = [...points.map(p => getCoordinates(p, "points"))];
    Utility.sortBy(pointsCopy, [Coordinates.x, Coordinates.y]);
    const lower = [];

    for (let i = 0; i < pointsCopy.length; i++) {
      while (lower.length >= 2) {
        const v1 = Vector2.from(pointsCopy[i], lower[lower.length - 2]);
        const v2 = Vector2.from(pointsCopy[i], lower[lower.length - 1]);
        if (Vector2.cross(v1, v2) > 0) break;
        lower.pop();
      }

      lower.push(pointsCopy[i]);
    }

    const upper = [];

    for (let i = pointsCopy.length - 1; i >= 0; i--) {
      while (upper.length >= 2) {
        const v1 = Vector2.from(pointsCopy[i], upper[upper.length - 2]);
        const v2 = Vector2.from(pointsCopy[i], upper[upper.length - 1]);
        if (Vector2.cross(v1, v2) > 0) break;
        upper.pop();
      }

      upper.push(pointsCopy[i]);
    }

    upper.pop();
    lower.pop();
    return new Polygon([...lower, ...upper].map(p => Polygon.vertex(p)), true);
  }

  static vertex(point) {
    const [x, y] = getCoordinates(point, "point");
    const ret = {
      x,
      y
    };
    return ret;
  }

  move(deltaX, deltaY) {
    Assert.isRealNumber(deltaX, "deltaX");
    Assert.isRealNumber(deltaY, "deltaY");
    if (deltaX === 0 && deltaY === 0) return this;

    this._vertices.forEach((vtx, i) => {
      [vtx.x, vtx.y] = Vector2.add([vtx.x, vtx.y], [deltaX, deltaY]);
      this.trigger_(EventObject.collection(this, this.events.vertexChanged, i, vtx.uuid));
    });

    return this;
  }

  moveAlongAngle(angle, distance) {
    Assert.isRealNumber(angle, "angle");
    Assert.isRealNumber(distance, "distance");
    if (distance === 0) return this;
    const c = [0, 0];
    const [dx, dy] = Vector2.add(c, Vector2.from2(angle, distance));
    return this.move(dx, dy);
  }

  _isPolygonVertex(v) {
    if (!Type.isPlainObject(v)) return false;
    if (Object.keys(v).length !== 2) return false;
    if (!Type.isRealNumber(v.x)) return false;
    if (!Type.isRealNumber(v.y)) return false;
    return true;
  }

  _assertIsPolygonVertex(value, p) {
    Assert.condition(this._isPolygonVertex(value), `[G]The \`${p}\` should be a \`PolygonVertex\`.`);
  }

  _parseIndexOrUuid(indexOrUuid) {
    let ret = [-1, ""];

    if (Type.isString(indexOrUuid)) {
      const index = this.getIndexOfUuid(indexOrUuid);
      if (index !== -1) ret = [index, indexOrUuid];
    } else {
      const uuid = this.getUuidOfIndex(indexOrUuid);
      if (uuid !== "") ret = [indexOrUuid, uuid];
    }

    return ret;
  }

  getUuids() {
    return this._vertices.map(vtx => vtx.uuid);
  }

  getIndexOfUuid(uuid) {
    return this._vertices.findIndex(vtx => vtx.uuid === uuid);
  }

  getUuidOfIndex(index) {
    var _this$_vertices$index, _this$_vertices$index2;

    return (_this$_vertices$index = (_this$_vertices$index2 = this._vertices[index]) == null ? void 0 : _this$_vertices$index2.uuid) != null ? _this$_vertices$index : "";
  }

  getSegment(indexOrUuid) {
    const [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return null;
    const nextIndex = next(index, this.vertexCount, this.closed);
    if (nextIndex === -1) return null;
    const {
      x: x1,
      y: y1
    } = this._vertices[index];
    const {
      x: x2,
      y: y2
    } = this._vertices[nextIndex];
    return new LineSegment(x1, y1, x2, y2);
  }

  getSegmentClosed(indexOrUuid) {
    const [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return null;
    const {
      x: x1,
      y: y1
    } = this._vertices[index];

    const {
      x: x2,
      y: y2
    } = this._vertices[next(index, this.vertexCount, true)];

    return new LineSegment(x1, y1, x2, y2);
  }

  getSegments(excludeNotAllowed = false, assumeClosed = false) {
    const l = this.vertexCount;
    const cl = assumeClosed ? l : this.closed ? l : l - 1;
    const ret = [];

    for (let i = 0; i < cl; i++) {
      const segment = this.getSegment(i);

      if (excludeNotAllowed) {
        if (!segment.dimensionallyDegenerate()) {
          ret.push(segment);
        }
      } else {
        ret.push(segment);
      }
    }

    return ret;
  }

  getPrevSegment(indexOrUuid, excludeNotAllowed = false, assumeClosed = false) {
    let [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return [null, -1];
    const closed = assumeClosed || this.closed;
    index = prev(index, this.vertexCount, closed);
    let seg = this.getSegment(index);

    if (excludeNotAllowed) {
      while (seg.dimensionallyDegenerate()) {
        index = prev(index, this.vertexCount, closed);
        seg = this.getSegment(index);
      }
    }

    return [seg, index];
  }

  getPrevSegmentClosed() {}

  getNextSegment(indexOrUuid, excludeNotAllowed = false, assumeClosed = false) {
    let [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return [null, -1];
    const closed = assumeClosed || this.closed;
    index = next(index, this.vertexCount, closed);
    let seg = this.getSegment(index);

    if (excludeNotAllowed) {
      while (seg.dimensionallyDegenerate()) {
        index = next(index, this.vertexCount, closed);
        seg = this.getSegment(index);
      }
    }

    return [seg, index];
  }

  isSegmentsCollinear() {
    const l = this.vertexCount;
    const epsilon = optioner.options.epsilon;
    if (this.vertexCount === POLYGON_MIN_VERTEX_COUNT) return true;
    const vertices = this._vertices;
    const {
      x: x0,
      y: y0
    } = vertices[0];
    const {
      x: x1,
      y: y1
    } = vertices[1];
    const v = Vector2.from([x0, y0], [x1, y1]);

    for (let i = 2; i < l; i++) {
      const {
        x,
        y
      } = vertices[i];
      if (Maths.equalTo(Vector2.cross(Vector2.from([x0, y0], [x, y]), v), 0, epsilon)) return false;
    }

    return true;
  }

  getPrevVertex(indexOrUuid) {
    let [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return null;
    index = prev(index, this.vertexCount, true);
    return this.getVertex(index);
  }

  getNextVertex(indexOrUuid) {
    let [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return null;
    index = next(index, this.vertexCount, true);
    return this.getVertex(index);
  }

  getVertex(indexOrUuid) {
    const [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return null;
    return { ...this._vertices[index]
    };
  }

  setVertex(indexOrUuid, vertex) {
    this._assertIsPolygonVertex(vertex, "vertex");

    const [index, uuid] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return false;
    const oldVtx = this._vertices[index];
    const newVtx = { ...vertex,
      uuid: oldVtx.uuid
    };

    if (!Utility.isEqualTo(oldVtx, newVtx)) {
      this.trigger_(EventObject.collection(this, this.events.vertexChanged, index, uuid));
      this._vertices[index] = newVtx;
    }

    return true;
  }

  insertVertex(indexOrUuid, vertex) {
    this._assertIsPolygonVertex(vertex, "vertex");

    const [index] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return false;
    const uuid = Utility.uuid();
    const vtx = { ...vertex,
      uuid
    };
    this.trigger_(EventObject.collection(this, this.events.vertexAdded, index + 1, uuid));

    this._vertices.splice(index, 0, vtx);

    return [index + 1, uuid];
  }

  removeVertex(indexOrUuid) {
    const [index, uuid] = this._parseIndexOrUuid(indexOrUuid);

    if (index === -1) return false;
    this.trigger_(EventObject.collection(this, this.events.vertexRemoved, index, uuid));

    this._vertices.splice(index, 1);

    return true;
  }

  appendVertex(vertex) {
    this._assertIsPolygonVertex(vertex, "vertex");

    const uuid = Utility.uuid();
    const vtx = { ...vertex,
      uuid
    };
    const index = this.vertexCount;
    this.trigger_(EventObject.collection(this, this.events.vertexAdded, index, uuid));

    this._vertices.push(vtx);

    return [index, uuid];
  }

  prependVertex(vertex) {
    this._assertIsPolygonVertex(vertex, "vertex");

    const uuid = Utility.uuid();
    const vtx = { ...vertex,
      uuid
    };
    const index = 0;
    this.trigger_(EventObject.collection(this, this.events.vertexAdded, index, uuid));

    this._vertices.unshift(vtx);

    return [index, uuid];
  }

  isVerticesConcyclic() {}

  isPointOn(point) {
    const c = getCoordinates(point, "point");
    const l = this.vertexCount;
    const cl = this.closed ? l : l - 1;

    for (let i = 0; i < cl; i++) {
      if (this.getSegment(i).isPointOn(c)) return true;
    }

    return false;
  }

  isPointInside(point) {
    const c = getCoordinates(point, "point");
    const helper = new FillRuleHelper();

    if (this.fillRule === "nonzero") {
      const wn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (wn === undefined) return false;
      return wn === 0 ? false : true;
    } else {
      const cn = helper.crossingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (cn === undefined) return false;
      return cn % 2 === 0 ? false : true;
    }
  }

  isPointOutside(point) {
    const c = getCoordinates(point, "point");
    const helper = new FillRuleHelper();

    if (this.fillRule === "nonzero") {
      const wn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (wn === undefined) return false;
      return wn === 0 ? true : false;
    } else {
      const cn = helper.crossingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (cn === undefined) return false;
      return cn % 2 === 0 ? true : false;
    }
  }

  getLength() {
    return this.getSegments().reduce((acc, seg) => acc += seg.getLength(), 0);
  }

  isConvex() {
    const l = this.vertexCount;
    const epsilon = optioner.options.epsilon;
    if (this.vertexCount === POLYGON_MIN_VERTEX_COUNT) return false;
    let startWindingDirection;
    let angleSum = 0;

    for (let i = 0; i < l; i++) {
      const {
        x: x1,
        y: y1
      } = this._vertices[i];
      const {
        x: x2,
        y: y2
      } = this._vertices[i === l - 1 ? 0 : i + 1];
      const {
        x: x3,
        y: y3
      } = this._vertices[i === l - 2 ? 1 : i + 2];
      const v1 = Vector2.from([x1, y1], [x2, y2]);
      const v2 = Vector2.from([x2, y2], [x3, y3]);
      const angle = Vector2.angleTo(v1, v2);
      if (Number.isNaN(angle)) continue;
      if (Maths.equalTo(Maths.abs(angle), Maths.PI, epsilon)) return false;

      if (startWindingDirection === undefined) {
        startWindingDirection = angle > 0 ? 1 : angle < 0 ? -1 : undefined;
      }

      const currWindingDirection = angle > 0 ? 1 : angle < 0 ? -1 : undefined;
      if (currWindingDirection !== startWindingDirection) return false;
      angleSum += angle;
    }

    return Maths.equalTo(Maths.abs(angleSum), 2 * Maths.PI, epsilon);
  }

  _selfIntersections() {
    const ret = [];
    const epsilon = optioner.options.epsilon;
    const ignoreList = [];

    for (let i = 0, m = this.vertexCount - 1; i < m; i++) {
      const segI = this.getSegment(i);

      for (let j = i + 1, n = this.vertexCount; j < n; j++) {
        if (j === i + 1) continue;
        const segJ = this.getSegment(j);
        const intersection = new LineSegmentLineSegment(segI, segJ).intersection();
        intersection.forEach(inter => {
          const t1Is0 = Maths.equalTo(inter.t1, 0, epsilon);
          const t1Is1 = Maths.equalTo(inter.t1, 1, epsilon);
          const t2Is0 = Maths.equalTo(inter.t2, 0, epsilon);
          const t2Is1 = Maths.equalTo(inter.t2, 1, epsilon);

          if (!t1Is0 && !t1Is1 && !t2Is0 && !t2Is1) {
            ret.push({
              coordinates: inter.c,
              descriptor: new IntersectionDescriptor([i, inter.t1], [j, inter.t2])
            });
            return;
          }

          const [aInIndex, aInParam] = t1Is0 ? [this.getPrevSegment(i, true)[1], 1] : [i, inter.t1];
          const [aOutIndex, aOutParam] = t1Is1 ? [this.getNextSegment(i, true)[1], 0] : [i, inter.t1];
          const [bInIndex, bInParam] = t2Is0 ? [this.getPrevSegment(j, true)[1], 1] : [j, inter.t2];
          const [bOutIndex, bOutParam] = t2Is1 ? [this.getNextSegment(j, true)[1], 0] : [j, inter.t2];
          const desc = new IntersectionDescriptor([aInIndex, aInParam], [aOutIndex, aOutParam], [bInIndex, bInParam], [bOutIndex, bOutParam]);
          if (ignoreList.findIndex(ignore => ignore.matchWith(desc, epsilon))) return;
          ignoreList.push(desc);
          ret.push({
            coordinates: inter.c,
            descriptor: desc
          });
        });
      }
    }

    return ret;
  }

  selfIntersections() {
    return this._selfIntersections().map(inter => new Point(inter.coordinates));
  }

  clean() {
    const copyPoly = this.clone();
    let i = 0;

    while (i < copyPoly.vertexCount - 1) {
      if (copyPoly.getSegment(i).dimensionallyDegenerate()) {
        copyPoly.removeVertex(i);
        continue;
      }

      i++;
    }

    return copyPoly;
  }

  _getSimpleArea() {
    const l = this.vertexCount;
    const vertices = this._vertices;
    let a = 0;

    for (let i = 0; i < l; i++) {
      const {
        x: x0,
        y: y0
      } = vertices[i];
      const {
        x: x1,
        y: y1
      } = vertices[next(i, l, true)];
      a += lineSegmentPathIntegral(x0, y0, x1, y1);
    }

    return a;
  }

  getWindingDirection() {
    return Maths.sign(this._getSimpleArea());
  }

  reverse() {
    const copy = [...this._vertices].map(vtxWu => {
      const {
        uuid,
        ...vtx
      } = vtxWu;
      return vtx;
    });
    copy.reverse();
    this.vertices = copy;
  }

  getCentroidPoint() {
    const l = this.vertexCount;
    let sumX = 0;
    let sumY = 0;

    for (let i = 0; i < l; i++) {
      const {
        x,
        y
      } = this._vertices[i];
      sumX += x;
      sumY += y;
    }

    return new Point(sumX / l, sumY / l);
  }

  getWeightedCentroidPoint() {
    const l = this.vertexCount;
    let a = 0;
    let sumX = 0;
    let sumY = 0;

    for (let i = 0; i < l; i++) {
      const {
        x: x1,
        y: y1
      } = this._vertices[i];
      const {
        x: x2,
        y: y2
      } = this._vertices[i === 1 - 1 ? 0 : i + 1];
      const cp = Vector2.cross([x1, y1], [x2, y2]);
      a += cp;
      sumX += (x1 + x2) * cp;
      sumY += (y1 + y2) * cp;
    }

    return new Point(sumX / a / 3, sumY / a / 3);
  }

  getBoundingBox() {
    let bbox = [Infinity, Infinity, -Infinity, -Infinity];
    this.getSegments().forEach(seg => {
      bbox = Box.extend(bbox, seg.getBoundingBox());
    });
    return bbox;
  }

  apply(transformation) {
    const retPoly = this.clone();
    const l = retPoly.vertexCount;

    for (let i = 0; i < l; i++) {
      const {
        x,
        y
      } = retPoly._vertices[i];
      const [tx, ty] = transformation.transformCoordinates([x, y]);
      retPoly._vertices[i].x = tx;
      retPoly._vertices[i].y = ty;
    }

    return retPoly;
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    g.fillRule = this.fillRule;
    const [head, ...tail] = this._vertices;
    g.moveTo(head.x, head.y);
    tail.forEach(vtx => g.lineTo(vtx.x, vtx.y));
    if (this.closed) g.close();

    if (optioner.options.graphics.polygonSegmentArrow) {
      this.getSegments().forEach(segment => {
        const vector = segment.getTangentVectorAtTime(0.5, true);
        g.append(new ArrowGraphics(vector.point1Coordinates, vector.angle).getGraphics(viewport));
      });
    }

    return g;
  }

  clone() {
    return new Polygon(this.vertices, this.closed);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Polygon();

    this._setVertices(shape.vertices);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tclosed: ${this.closed},`, `\tvertices: [`, `${this.vertices.map(v => `\t\t{x: ${v.x}, y: ${v.y}}`).join(",\n")}`, `\t]`, `}`].join("\n");
  }

  toArray() {
    throw new Error("Method not implemented.");
  }

  toObject() {
    throw new Error("Method not implemented.");
  }

}, (_applyDecoratedDescriptor(_class2$1.prototype, "getSegments", [_dec$h], Object.getOwnPropertyDescriptor(_class2$1.prototype, "getSegments"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "selfIntersections", [stated], Object.getOwnPropertyDescriptor(_class2$1.prototype, "selfIntersections"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "getWindingDirection", [stated], Object.getOwnPropertyDescriptor(_class2$1.prototype, "getWindingDirection"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "getCentroidPoint", [stated], Object.getOwnPropertyDescriptor(_class2$1.prototype, "getCentroidPoint"), _class2$1.prototype)), _class2$1)) || _class$s);

var _class$r;

let Rectangle = validGeometry(_class$r = class Rectangle extends Geometry {
  constructor(a0, a1, a2, a3, a4) {
    super();
    this._originX = NaN;
    this._originY = NaN;
    this._width = NaN;
    this._height = NaN;
    this._rotation = 0;

    if (Type.isNumber(a0)) {
      if (Type.isNumber(a2)) {
        Object.assign(this, {
          originX: a0,
          originY: a1,
          width: a2,
          height: a3,
          rotation: a4 != null ? a4 : 0
        });
      } else {
        Object.assign(this, {
          originX: a0,
          originY: a1,
          size: a2,
          rotation: a3 != null ? a3 : 0
        });
      }
    }

    if (Type.isArray(a0)) {
      if (Type.isNumber(a1)) {
        Object.assign(this, {
          originCoordinates: a0,
          width: a1,
          height: a2,
          rotation: a3 != null ? a3 : 0
        });
      } else {
        Object.assign(this, {
          originCoordinates: a0,
          size: a1,
          rotation: a2 != null ? a2 : 0
        });
      }
    }

    if (a0 instanceof Point) {
      if (Type.isNumber(a1)) {
        Object.assign(this, {
          originPoint: a0,
          width: a1,
          height: a2,
          rotation: a3 != null ? a3 : 0
        });
      } else {
        Object.assign(this, {
          originPoint: a0,
          size: a1,
          rotation: a2 != null ? a2 : 0
        });
      }
    }
  }

  get events() {
    return {
      originXChanged: "originX",
      originYChanged: "originY",
      widthChanged: "width",
      heightChanged: "height",
      rotationChanged: "rotation"
    };
  }

  _setOriginX(value) {
    if (!Utility.isEqualTo(this._originX, value)) this.trigger_(EventObject.simple(this, this.events.originXChanged));
    this._originX = value;
  }

  _setOriginY(value) {
    if (!Utility.isEqualTo(this._originY, value)) this.trigger_(EventObject.simple(this, this.events.originYChanged));
    this._originY = value;
  }

  _setWidth(value) {
    if (!Utility.isEqualTo(this._width, value)) this.trigger_(EventObject.simple(this, this.events.widthChanged));
    this._width = value;
  }

  _setHeight(value) {
    if (!Utility.isEqualTo(this._height, value)) this.trigger_(EventObject.simple(this, this.events.heightChanged));
    this._height = value;
  }

  _setRotation(value) {
    if (!Utility.isEqualTo(this._rotation, value)) this.trigger_(EventObject.simple(this, this.events.rotationChanged));
    this._rotation = value;
  }

  get originX() {
    return this._originX;
  }

  set originX(value) {
    Assert.isRealNumber(value, "originX");

    this._setOriginX(value);
  }

  get originY() {
    return this._originY;
  }

  set originY(value) {
    Assert.isRealNumber(value, "originY");

    this._setOriginY(value);
  }

  get originCoordinates() {
    return [this._originX, this._originY];
  }

  set originCoordinates(value) {
    Assert.isCoordinates(value, "originCoordinates");

    this._setOriginX(Coordinates.x(value));

    this._setOriginY(Coordinates.y(value));
  }

  get originPoint() {
    return new Point(this._originX, this._originY);
  }

  set originPoint(value) {
    this._setOriginX(value.x);

    this._setOriginY(value.y);
  }

  get width() {
    return this._width;
  }

  set width(value) {
    Assert.isPositiveNumber(value, "width");

    this._setWidth(value);
  }

  get height() {
    return this._height;
  }

  set height(value) {
    Assert.isPositiveNumber(value, "height");

    this._setHeight(value);
  }

  get size() {
    return [this._width, this._height];
  }

  set size(value) {
    Assert.isSize(value, "size");

    this._setWidth(Size.width(value));

    this._setHeight(Size.height(value));
  }

  get rotation() {
    return this._rotation;
  }

  set rotation(value) {
    Assert.isRealNumber(value, "rotation");

    this._setRotation(value);
  }

  initialized_() {
    return !Number.isNaN(this._originX) && !Number.isNaN(this._originY) && !Number.isNaN(this._width) && !Number.isNaN(this._height);
  }

  static fromTwoPointsAndRotation(point1, point2, rotation = 0) {
    const c1 = point1.coordinates;
    const c2 = point2.coordinates;
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(c1, c2, epsilon)) {
      console.warn("[G]Diagonal endpoints `point1` and `point2` of a rectangle can NOT be the same. `null` will be returned");
      return null;
    }

    const box = Box.from(c1, c2);
    return new Rectangle(Box.x(box), Box.y(box), Box.width(box), Box.height(box), rotation);
  }

  getLength() {
    throw new Error("Method not implemented.");
  }

  getArea() {
    throw new Error("Method not implemented.");
  }

  getWindingDirection() {
    throw new Error("Method not implemented.");
  }

  isPointOn(point) {
    throw new Error("Method not implemented.");
  }

  isPointOutside(point) {
    throw new Error("Method not implemented.");
  }

  isPointInside(point) {
    throw new Error("Method not implemented.");
  }

  getVertices() {
    const {
      originX: x,
      originY: y,
      width: w,
      height: h,
      rotation
    } = this;
    const b = [x, y, w, h];
    const t = new Transformation();
    t.setRotate(rotation, this.getCenterPoint());
    const nn = t.transformCoordinates(Box.nn(b));
    const mn = t.transformCoordinates(Box.mn(b));
    const mm = t.transformCoordinates(Box.mm(b));
    const nm = t.transformCoordinates(Box.nm(b));
    return [new Point(nn), new Point(mn), new Point(mm), new Point(nm)];
  }

  getCenterPoint() {
    const c = Vector2.add(this.originCoordinates, [Size.width(this.size) / 2, Size.height(this.size) / 2]);
    return new Point(c);
  }

  normalize() {}

  getBoundingBox() {
    throw new Error();
  }

  move(deltaX, deltaY) {
    this.originCoordinates = Vector2.add(this.originCoordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.originCoordinates = Vector2.add(this.originCoordinates, Vector2.from2(angle, distance));
    return this;
  }

  inflate(size) {
    return this.clone().inflateSelf(size);
  }

  inflateSelf(size) {
    let {
      originX: x,
      originY: y,
      width: w,
      height: h
    } = this,
        [sw, sh] = size,
        nx = x - sw,
        ny = y - sh,
        nw = w + sw * 2,
        nh = h + sw * 2;

    if (nw <= 0 || nh <= 0) {
      return this;
    }

    this.originX = nx;
    this.originY = ny;
    this.width = nw;
    this.height = nh;
    return this;
  }

  toPolygon() {
    const polygon = new Polygon();
    const [p1, p2, p3, p4] = this.getVertices();
    polygon.appendVertex(Polygon.vertex(p1));
    polygon.appendVertex(Polygon.vertex(p2));
    polygon.appendVertex(Polygon.vertex(p3));
    polygon.appendVertex(Polygon.vertex(p4));
    polygon.closed = true;
    return polygon;
  }

  toPath() {
    const path = new Path();
    const [p1, p2, p3, p4] = this.getVertices();
    path.appendCommand(Path.moveTo(p1));
    path.appendCommand(Path.lineTo(p2));
    path.appendCommand(Path.lineTo(p3));
    path.appendCommand(Path.lineTo(p4));
    path.closed = true;
    return path;
  }

  apply(transformation) {
    const {
      originCoordinates: oc,
      width: w,
      height: h,
      rotation
    } = this;
    const rectangleTransformation = new Transformation();
    rectangleTransformation.setRotate(rotation, this.getCenterPoint());
    const t = transformation.clone().addMatrix(...rectangleTransformation.matrix);
    const {
      skew: [kx, ky],
      scale: [sx, sy],
      rotate
    } = t.decomposeQr();
    const epsilon = optioner.options.epsilon;

    if (Maths.equalTo(kx, 0, epsilon) && Maths.equalTo(ky, 0, epsilon)) {
      const newOrigin = t.transformCoordinates(oc);
      const newWidth = w * sx;
      const newHeight = h * sy;
      const newRotation = rotate;
      return new Rectangle(newOrigin, newWidth, newHeight, newRotation);
    } else {
      return this.toPath().apply(transformation);
    }
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const [p1, p2, p3, p4] = this.getVertices();
    g.moveTo(...p1.coordinates);
    g.lineTo(...p2.coordinates);
    g.lineTo(...p3.coordinates);
    g.lineTo(...p4.coordinates);
    g.close();
    return g;
  }

  clone() {
    return new Rectangle(this.originX, this.originY, this.width, this.height, this.rotation);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Rectangle();

    this._setOriginX(shape._originX);

    this._setOriginY(shape._originY);

    this._setWidth(shape._width);

    this._setHeight(shape._height);

    this._setRotation(shape._rotation);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\toriginX: ${this.originX}`, `\toriginY: ${this.originY}`, `\twidth: ${this.width}`, `\theight: ${this.height}`, `\trotation: ${this.rotation}`, `}`].join("\n");
  }

  toArray() {
    return [this.originX, this.originY, this.width, this.height, this.rotation];
  }

  toObject() {
    return {
      originX: this.originX,
      originY: this.originY,
      width: this.width,
      height: this.height,
      rotation: this.rotation
    };
  }

}) || _class$r;

class Cartesian {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toPolar() {
    let {
      x,
      y
    } = this,
        r = Maths.hypot(x, y),
        theta = Maths.atan2(y, x);
    return new Polar(r, theta);
  }

  toBarycentric(c1, c2, c3) {
    let {
      x,
      y
    } = this,
        a1 = Vector2.cross(Vector2.from(c2, c3), Vector2.from(c2, [x, y])),
        a2 = Vector2.cross(Vector2.from(c3, c1), Vector2.from(c3, [x, y])),
        a3 = Vector2.cross(Vector2.from(c1, c2), Vector2.from(c1, [x, y]));
    return new Barycentric(a1, a2, a3);
  }

  toTrilinear(c1, c2, c3) {
    let {
      lambda1,
      lambda2,
      lambda3
    } = this.toBarycentric(c1, c2, c3),
        l1 = Vector2.magnitude(Vector2.from(c2, c3)),
        l2 = Vector2.magnitude(Vector2.from(c3, c1)),
        l3 = Vector2.magnitude(Vector2.from(c1, c2));
    lambda1 /= l1;
    lambda2 /= l2;
    lambda3 /= l3;
    return new Trilinear(lambda1, lambda2, lambda3);
  }

  valueOf() {
    return [this.x, this.y];
  }

}

class Polar {
  constructor(r, theta) {
    this.r = r;
    this.theta = theta;
  }

  toCartesian() {
    let {
      r,
      theta
    } = this,
        x = r * Maths.cos(theta),
        y = r * Maths.sin(theta);
    return new Cartesian(x, y);
  }

  valueOf() {
    return [this.r, this.theta];
  }

}

class Barycentric {
  constructor(lambda1, lambda2, lambda3) {
    this.lambda1 = lambda1;
    this.lambda2 = lambda2;
    this.lambda3 = lambda3;
    this.simplify();
  }

  simplify() {
    let {
      lambda1,
      lambda2,
      lambda3
    } = this;

    if (!Maths.equalTo(lambda1 + lambda2 + lambda3, 1, Number.EPSILON)) {
      let sum = lambda1 + lambda2 + lambda3;
      this.lambda1 /= sum;
      this.lambda2 /= sum;
      this.lambda3 /= sum;
    }
  }

  toCartesian(c1, c2, c3) {
    let {
      lambda1,
      lambda2,
      lambda3
    } = this,
        [x, y] = Vector2.add(Vector2.add(Vector2.scalarMultiply(c1, lambda1), Vector2.scalarMultiply(c2, lambda2)), Vector2.scalarMultiply(c3, lambda3));
    return new Cartesian(x, y);
  }

  valueOf() {
    return [this.lambda1, this.lambda2, this.lambda3];
  }

}

class Trilinear {
  constructor(lambda1, lambda2, lambda3) {
    this.lambda1 = lambda1;
    this.lambda2 = lambda2;
    this.lambda3 = lambda3;
    this.simplify();
  }

  simplify() {
    let {
      lambda1,
      lambda2,
      lambda3
    } = this;

    if (!Maths.equalTo(lambda1 + lambda2 + lambda3, 1, Number.EPSILON)) {
      let sum = lambda1 + lambda2 + lambda3;
      this.lambda1 /= sum;
      this.lambda2 /= sum;
      this.lambda3 /= sum;
    }
  }

  toCartesian(c1, c2, c3) {
    let {
      lambda1,
      lambda2,
      lambda3
    } = this,
        l1 = Vector2.magnitude(Vector2.from(c2, c3)),
        l2 = Vector2.magnitude(Vector2.from(c3, c1)),
        l3 = Vector2.magnitude(Vector2.from(c1, c2));
    lambda1 *= l1;
    lambda2 *= l2;
    lambda3 *= l3;
    return new Barycentric(lambda1, lambda2, lambda3).toCartesian(c1, c2, c3);
  }

  valueOf() {
    return [this.lambda1, this.lambda2, this.lambda3];
  }

}

var _class$q, _class2;

validGeometry(_class$q = (_class2 = class Triangle extends Geometry {
  constructor(a0, a1, a2, a3, a4, a5) {
    super();
    this._point1X = NaN;
    this._point1Y = NaN;
    this._point2X = NaN;
    this._point2Y = NaN;
    this._point3X = NaN;
    this._point3Y = NaN;

    if (Type.isNumber(a0)) {
      Object.assign(this, {
        point1X: a0,
        point1Y: a1,
        point2X: a2,
        point2Y: a3,
        point3X: a4,
        point3Y: a5
      });
    }

    if (Type.isArray(a0)) {
      Object.assign(this, {
        point1Coordinates: a0,
        point2Coordinates: a1,
        point3Coordinates: a2
      });
    }

    if (a0 instanceof Point) {
      Object.assign(this, {
        point1: a0,
        point2: a1,
        point3: a2
      });
    }
  }

  get events() {
    return {
      point1XChanged: "point1X",
      point1YChanged: "point1Y",
      point2XChanged: "point2X",
      point2YChanged: "point2Y",
      point3XChanged: "point3X",
      point3YChanged: "point3Y"
    };
  }

  _setPoint1X(value) {
    if (!Utility.isEqualTo(this._point1X, value)) this.trigger_(EventObject.simple(this, this.events.point1XChanged));
    this._point1X = value;
  }

  _setPoint1Y(value) {
    if (!Utility.isEqualTo(this._point1Y, value)) this.trigger_(EventObject.simple(this, this.events.point1YChanged));
    this._point1Y = value;
  }

  _setPoint2X(value) {
    if (!Utility.isEqualTo(this._point2X, value)) this.trigger_(EventObject.simple(this, this.events.point2XChanged));
    this._point2X = value;
  }

  _setPoint2Y(value) {
    if (!Utility.isEqualTo(this._point2Y, value)) this.trigger_(EventObject.simple(this, this.events.point2YChanged));
    this._point2Y = value;
  }

  _setPoint3X(value) {
    if (!Utility.isEqualTo(this._point3X, value)) this.trigger_(EventObject.simple(this, this.events.point3XChanged));
    this._point3X = value;
  }

  _setPoint3Y(value) {
    if (!Utility.isEqualTo(this._point3Y, value)) this.trigger_(EventObject.simple(this, this.events.point3YChanged));
    this._point3Y = value;
  }

  get point1X() {
    return this._point1X;
  }

  set point1X(value) {
    Assert.isRealNumber(value, "point1X");

    this._setPoint1X(value);
  }

  get point1Y() {
    return this._point1Y;
  }

  set point1Y(value) {
    Assert.isRealNumber(value, "point1Y");

    this._setPoint1Y(value);
  }

  get point1Coordinates() {
    return [this._point1X, this._point1Y];
  }

  set point1Coordinates(value) {
    Assert.isCoordinates(value, "point1Coordinates");

    this._setPoint1X(Coordinates.x(value));

    this._setPoint1Y(Coordinates.y(value));
  }

  get point1() {
    return new Point(this._point1X, this._point1Y);
  }

  set point1(value) {
    this._setPoint1X(value.x);

    this._setPoint1Y(value.y);
  }

  get point2X() {
    return this._point2X;
  }

  set point2X(value) {
    Assert.isRealNumber(value, "point2X");

    this._setPoint2X(value);
  }

  get point2Y() {
    return this._point2Y;
  }

  set point2Y(value) {
    Assert.isRealNumber(value, "point2Y");

    this._setPoint2Y(value);
  }

  get point2Coordinates() {
    return [this._point2X, this._point2Y];
  }

  set point2Coordinates(value) {
    Assert.isCoordinates(value, "point2Coordinates");

    this._setPoint2X(Coordinates.x(value));

    this._setPoint2Y(Coordinates.y(value));
  }

  get point2() {
    return new Point(this._point2X, this._point2Y);
  }

  set point2(value) {
    this._setPoint2X(value.x);

    this._setPoint2Y(value.y);
  }

  get point3X() {
    return this._point3X;
  }

  set point3X(value) {
    Assert.isRealNumber(value, "point3X");

    this._setPoint3X(value);
  }

  get point3Y() {
    return this._point3Y;
  }

  set point3Y(value) {
    Assert.isRealNumber(value, "point3Y");

    this._setPoint3Y(value);
  }

  get point3Coordinates() {
    return [this._point3X, this._point3Y];
  }

  set point3Coordinates(value) {
    Assert.isCoordinates(value, "point3Coordinates");

    this._setPoint3X(Coordinates.x(value));

    this._setPoint3Y(Coordinates.y(value));
  }

  get point3() {
    return new Point(this._point3X, this._point3Y);
  }

  set point3(value) {
    this._setPoint3X(value.x);

    this._setPoint3Y(value.y);
  }

  get side1Length() {
    return Vector2.magnitude(Vector2.from(this.point2Coordinates, this.point3Coordinates));
  }

  get side2Length() {
    return Vector2.magnitude(Vector2.from(this.point3Coordinates, this.point1Coordinates));
  }

  get side3Length() {
    return Vector2.magnitude(Vector2.from(this.point1Coordinates, this.point2Coordinates));
  }

  get angle1() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    return Maths.abs(Vector2.angleTo(Vector2.from(c1, c2), Vector2.from(c1, c3)));
  }

  get angle2() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    return Maths.abs(Vector2.angleTo(Vector2.from(c2, c3), Vector2.from(c2, c1)));
  }

  get angle3() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    return Maths.abs(Vector2.angleTo(Vector2.from(c3, c1), Vector2.from(c3, c2)));
  }

  dimensionallyDegenerate() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    const epsilon = optioner.options.epsilon;

    if (Coordinates.isEqualTo(c1, c2, epsilon) && Coordinates.isEqualTo(c3, c2, epsilon)) {
      return true;
    }

    return !Maths.greaterThan(Vector2.magnitude(Vector2.from(c1, c2)) + Vector2.magnitude(Vector2.from(c2, c3)), Vector2.magnitude(Vector2.from(c3, c1)), epsilon);
  }

  initialized_() {
    return Number.isNaN(this._point1X) && Number.isNaN(this._point1Y) && Number.isNaN(this._point2X) && Number.isNaN(this._point2Y) && Number.isNaN(this._point3X) && Number.isNaN(this._point3Y);
  }

  getLength() {
    throw new Error("Method not implemented.");
  }

  getWindingDirection() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    const cp = Vector2.cross(Vector2.from(c1, c2), Vector2.from(c1, c3));
    return cp >= 0 ? 1 : -1;
  }

  static equilateralTriangleFromLineSegment(lineSegment, positive = true) {
    const c1 = lineSegment.point1Coordinates;
    const c2 = lineSegment.point2Coordinates;
    const v3 = Vector2.rotate(Vector2.from(c1, c2), positive ? Maths.PI / 3 : -Maths.PI / 3);
    const c3 = Vector2.add(c1, v3);
    return new Triangle(c1, c2, c3);
  }

  static fromThreeIntersectedLines(lines) {}

  move(deltaX, deltaY) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, [deltaX, deltaY]);
    this.point2Coordinates = Vector2.add(this.point2Coordinates, [deltaX, deltaY]);
    this.point3Coordinates = Vector2.add(this.point3Coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.point1Coordinates = Vector2.add(this.point1Coordinates, Vector2.from2(angle, distance));
    this.point2Coordinates = Vector2.add(this.point2Coordinates, Vector2.from2(angle, distance));
    this.point3Coordinates = Vector2.add(this.point3Coordinates, Vector2.from2(angle, distance));
    return this;
  }

  getSideLineSegments() {
    return [new LineSegment(this.point2Coordinates, this.point3Coordinates), new LineSegment(this.point3Coordinates, this.point1Coordinates), new LineSegment(this.point1Coordinates, this.point2Coordinates)];
  }

  getAltitudeLineSegments() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    const c1p = Vector2.add(c2, Vector2.project(Vector2.from(c2, c1), Vector2.from(c2, c3)));
    const c2p = Vector2.add(c3, Vector2.project(Vector2.from(c3, c2), Vector2.from(c3, c1)));
    const c3p = Vector2.add(c1, Vector2.project(Vector2.from(c1, c3), Vector2.from(c1, c2)));
    return [new LineSegment(c1, c1p), new LineSegment(c2, c2p), new LineSegment(c3, c3p)];
  }

  getMedianLineSegments() {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    const c1p = Vector2.add(Vector2.scalarMultiply(c2, 1 / 2), Vector2.scalarMultiply(c3, 1 / 2));
    const c2p = Vector2.add(Vector2.scalarMultiply(c3, 1 / 2), Vector2.scalarMultiply(c1, 1 / 2));
    const c3p = Vector2.add(Vector2.scalarMultiply(c1, 1 / 2), Vector2.scalarMultiply(c2, 1 / 2));
    return [new LineSegment(c1, c1p), new LineSegment(c2, c2p), new LineSegment(c3, c3p)];
  }

  getSymmedianLineSegments() {
    const ls = [this.side1Length, this.side2Length, this.side3Length];
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    return Utility.range(0, 3).map(i => {
      const c0 = cs[i];
      const c1 = cs[(i + 1) % 3];
      const c2 = cs[(i + 2) % 3];
      const ls1 = ls[(i + 1) % 3];
      const ls2 = ls[(i + 2) % 3];
      const ratio = ls2 ** 2 / (ls1 ** 2 + ls2 ** 2);
      const c0p = Vector2.add(c1, Vector2.scalarMultiply(Vector2.from(c1, c2), ratio));
      return new LineSegment(c0, c0p);
    });
  }

  getAngleBisectingLineSegments() {
    const ls = [this.side1Length, this.side2Length, this.side3Length];
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    return Utility.range(0, 3).map(i => {
      const c0 = cs[i];
      const c1 = cs[(i + 1) % 3];
      const c2 = cs[(i + 2) % 3];
      const ls1 = ls[(i + 1) % 3];
      const ls2 = ls[(i + 2) % 3];
      const ratio = ls2 / (ls1 + ls2);
      const c0p = Vector2.add(c1, Vector2.scalarMultiply(Vector2.from(c1, c2), ratio));
      return new LineSegment(c0, c0p);
    });
  }

  getPerpendicularlyBisectingLineSegments() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    return Utility.range(0, 3).map(i => {
      const c0 = cs[i];
      const c1 = cs[(i + 1) % 3];
      const c2 = cs[(i + 2) % 3];
      const v0 = Vector2.from(c1, c2);
      const v1 = Vector2.from(c1, c0);
      const v2 = Vector2.from(c2, c0);
      const d0 = Vector2.dot(v0, v0);
      const d1 = Vector2.dot(v1, v0);
      const d2 = Vector2.dot(v2, Vector2.negative(v0));
      const m0 = Vector2.add(Vector2.scalarMultiply(c1, 1 / 2), Vector2.scalarMultiply(c2, 1 / 2));
      let m0p;

      if (d1 >= d0 / 2) {
        const scalar = Vector2.squaredMagnitude(v0) / 2 / d1;
        m0p = Vector2.add(c1, Vector2.scalarMultiply(v1, scalar));
      } else {
        const scalar = Vector2.squaredMagnitude(v0) / 2 / d2;
        m0p = Vector2.add(cs[(i + 2) % 3], Vector2.scalarMultiply(v2, scalar));
      }

      return new LineSegment(m0, m0p);
    });
  }

  isCongruentWithTriangle(triangle) {
    const [al1, al2, al3] = [this.side1Length, this.side2Length, this.side3Length].sort((a, b) => a - b);
    const [bl1, bl2, bl3] = [triangle.side1Length, triangle.side2Length, triangle.side3Length].sort((a, b) => a - b);
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(al1, bl1, epsilon) && Maths.equalTo(al2, bl2, epsilon) && Maths.equalTo(al3, bl3, epsilon);
  }

  isSimilarWithTriangle(triangle) {
    const [aa1, aa2, aa3] = [this.angle1, this.angle2, this.angle3].sort((a, b) => a - b);
    const [ba1, ba2, ba3] = [triangle.angle1, triangle.angle2, triangle.angle3].sort((a, b) => a - b);
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(aa1, ba1, epsilon) && Maths.equalTo(aa2, ba2, epsilon) && Maths.equalTo(aa3, ba3, epsilon);
  }

  getSimilarityRatioWithTriangle(triangle) {
    if (!this.isSimilarWithTriangle(triangle)) return NaN;
    return this.getPerimeter() / triangle.getPerimeter();
  }

  isAcuteTriangle() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length].sort((a, b) => a - b);
    const epsilon = optioner.options.epsilon;
    return Maths.greaterThan(a ** 2 + b ** 2, c ** 2, epsilon);
  }

  isRightTriangle() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length].sort((a, b) => a - b);
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(a ** 2 + b ** 2, c ** 2, epsilon);
  }

  isObtuseTriangle() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length].sort((a, b) => a - b);
    const epsilon = optioner.options.epsilon;
    return Maths.lessThan(a ** 2 + b ** 2, c ** 2, epsilon);
  }

  isScaleneTriangle() {
    const epsilon = optioner.options.epsilon;
    return !Maths.equalTo(this.side1Length, this.side2Length, epsilon) && !Maths.equalTo(this.side1Length, this.side3Length, epsilon);
  }

  isIsoscelesTriangle() {
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(this.side1Length, this.side2Length, epsilon) || Maths.equalTo(this.side1Length, this.side3Length, epsilon) || Maths.equalTo(this.side2Length, this.side3Length, epsilon);
  }

  isEquilateralTriangle() {
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(this.side1Length, this.side2Length, epsilon) && Maths.equalTo(this.side1Length, this.side3Length, epsilon);
  }

  getPerimeter() {
    return this.side1Length + this.side2Length + this.side3Length;
  }

  getArea() {
    const [x1, y1] = this.point1Coordinates;
    const [x2, y2] = this.point2Coordinates;
    const [x3, y3] = this.point3Coordinates;
    let a = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
    a = a / 2;
    return Maths.abs(a);
  }

  getPointAtTrilinear(trilinear) {
    const t = new Trilinear(trilinear[0], trilinear[1], trilinear[2]);
    const c = t.toCartesian(this.point1Coordinates, this.point2Coordinates, this.point3Coordinates);
    return new Point(c.valueOf());
  }

  getTrilinearOfPoint(point) {
    const c = new Cartesian(...point.coordinates);
    const t = c.toTrilinear(this.point1Coordinates, this.point2Coordinates, this.point3Coordinates);
    return t.valueOf();
  }

  isPointOnSideLines(point) {
    const t = this.getTrilinearOfPoint(point);
    const epsilon = optioner.options.epsilon;
    return Maths.sign(t[0], epsilon) * Maths.sign(t[1], epsilon) * Maths.sign(t[2], epsilon) === 0;
  }

  isPointOn(point) {
    return true;
  }

  isPointInside(point) {
    const t = this.getTrilinearOfPoint(point);
    const epsilon = optioner.options.epsilon;
    return Maths.sign(t[0], epsilon) * Maths.sign(t[1], epsilon) * Maths.sign(t[2], epsilon) === 1;
  }

  isPointOutside(point) {
    const t = this.getTrilinearOfPoint(point);
    const epsilon = optioner.options.epsilon;
    return Maths.sign(t[0], epsilon) * Maths.sign(t[1], epsilon) * Maths.sign(t[2], epsilon) === -1;
  }

  getIsogonalConjugatePointOfPoint(point) {
    if (this.isPointOn(point)) return null;
    const t = this.getTrilinearOfPoint(point);
    const tp = [1 / t[0], 1 / t[1], 1 / t[2]];
    return this.getPointAtTrilinear(tp);
  }

  getIsotomicConjugatePointOfPoint(point) {
    if (this.isPointOn(point)) return null;
    const t = this.getTrilinearOfPoint(point);
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const tp = [1 / (a ** 2 * t[0]), 1 / (b ** 2 * t[1]), 1 / (c ** 2 * t[2])];
    return this.getPointAtTrilinear(tp);
  }

  getCentroidPoint() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const t = [b * c, c * a, a * b];
    return this.getPointAtTrilinear(t);
  }

  getMedialTriangle() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t1 = new Trilinear(0, c * a, a * b);
    const t2 = new Trilinear(b * c, 0, a * b);
    const t3 = new Trilinear(b * c, c * a, 0);
    const cc1 = t1.toCartesian(...cs);
    const cc2 = t2.toCartesian(...cs);
    const cc3 = t3.toCartesian(...cs);
    return new Triangle(cc1.valueOf(), cc2.valueOf(), cc3.valueOf());
  }

  getAntimedialTriangle() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t1 = new Trilinear(-b * c, c * a, a * b);
    const t2 = new Trilinear(b * c, -c * a, a * b);
    const t3 = new Trilinear(b * c, c * a, -a * b);
    const cc1 = t1.toCartesian(...cs);
    const cc2 = t2.toCartesian(...cs);
    const cc3 = t3.toCartesian(...cs);
    return new Triangle(cc1.valueOf(), cc2.valueOf(), cc3.valueOf());
  }

  getOrthocenterPoint() {
    const [aa, bb, cc] = [this.angle1, this.angle2, this.angle3];
    const t = [Maths.sec(aa), Maths.sec(bb), Maths.sec(cc)];
    return this.getPointAtTrilinear(t);
  }

  getPolarCircle() {
    if (!this.isObtuseTriangle()) return null;
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const area = this.getArea();
    const r = Maths.sqrt((a * b * c) ** 2 / (4 * area ** 2) - (a ** 2 + b ** 2 + c ** 2) / 2);
    return new Circle(this._getOrthocenterCoordinates(), r);
  }

  getOrthicTriangle() {
    if (this.isRightTriangle()) return null;
    const [a1, a2, a3] = [this.angle1, this.angle2, this.angle3];
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t1 = new Trilinear(0, Maths.sec(a2), Maths.sec(a3));
    const t2 = new Trilinear(Maths.sec(a1), 0, Maths.sec(a3));
    const t3 = new Trilinear(Maths.sec(a1), Maths.sec(a2), 0);
    const cc1 = t1.toCartesian(...cs);
    const cc2 = t2.toCartesian(...cs);
    const cc3 = t3.toCartesian(...cs);
    return new Triangle(cc1.valueOf(), cc2.valueOf(), cc3.valueOf());
  }

  getIncenterPointAlt() {
    const t = [1, 1, 1];
    return this.getPointAtTrilinear(t);
  }

  getCircumcenterPointAlt() {
    const [aa, bb, cc] = [this.angle1, this.angle2, this.angle3];
    const t = [Maths.cos(aa), Maths.cos(bb), Maths.cos(cc)];
    return this.getPointAtTrilinear(t);
  }

  getEscenterPointsAlt() {
    const t1 = [-1, 1, 1];
    const t2 = [1, -1, 1];
    const t3 = [1, 1, -1];
    return [this.getPointAtTrilinear(t1), this.getPointAtTrilinear(t2), this.getPointAtTrilinear(t3)];
  }

  getNinePointCenterPoint() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t = new Trilinear(Maths.cos(this.angle2 - this.angle3), Maths.cos(this.angle3 - this.angle1), Maths.cos(this.angle1 - this.angle2));
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getNinePointCircle() {
    const p = this.getNinePointCenterPoint();
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const area = this.getArea();
    const r = a * b * c / (8 * area);
    return new Circle(p.coordinates, r);
  }

  getNagelPoint() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const d1 = (-a + b + c) / a;
    const d2 = (a - b + c) / b;
    const d3 = (a + b - c) / c;
    const t = new Trilinear(d1, d2, d3);
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getGergonnePoint() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const d1 = b * c / (-a + b + c);
    const d2 = a * c / (a - b + c);
    const d3 = a * b / (a + b - c);
    const t = new Trilinear(d1, d2, d3);
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getGergonneTriangle() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const [a1, a2, a3] = [this.angle1, this.angle2, this.angle3];
    const d1 = a1 / 2;
    const d2 = a2 / 2;
    const d3 = a3 / 2;
    const t1 = new Trilinear(0, Maths.sec(d2) ** 2, Maths.sec(d3) ** 2);
    const t2 = new Trilinear(Maths.sec(d1) ** 2, 0, Maths.sec(d3) ** 2);
    const t3 = new Trilinear(Maths.sec(d1) ** 2, Maths.sec(d2) ** 2, 0);
    const cc1 = t1.toCartesian(...cs);
    const cc2 = t2.toCartesian(...cs);
    const cc3 = t3.toCartesian(...cs);
    return new Triangle(cc1.valueOf(), cc2.valueOf(), cc3.valueOf());
  }

  getLemoinePoint() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const t = new Trilinear(a, b, c);
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getLemoineLine() {
    return new Line(0, 0, 0);
  }

  getFeuerbachPoint() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t = new Trilinear(1 - Maths.cos(this.angle2 - this.angle3), 1 - Maths.cos(this.angle3 - this.angle1), 1 - Maths.cos(this.angle1 - this.angle2));
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getFeuerbachTriangle() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const [a1, a2, a3] = [this.angle1, this.angle2, this.angle3];
    const d1 = (a2 - a3) / 2;
    const d2 = (a3 - a1) / 2;
    const d3 = (a1 - a2) / 2;
    const t1 = new Trilinear(-1 * Maths.sin(d1) ** 2, Maths.cos(d2) ** 2, Maths.cos(d3) ** 2);
    const t2 = new Trilinear(Maths.cos(d1) ** 2, -1 * Maths.sin(d2) ** 2, Maths.cos(d3) ** 2);
    const t3 = new Trilinear(Maths.cos(d1) ** 2, Maths.cos(d2) ** 2, -1 * Maths.sin(d3) ** 2);
    const cc1 = t1.toCartesian(...cs);
    const cc2 = t2.toCartesian(...cs);
    const cc3 = t3.toCartesian(...cs);
    return new Triangle(cc1.valueOf(), cc2.valueOf(), cc3.valueOf());
  }

  getFirstFermatPoint() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t = new Trilinear(Maths.csc(this.angle1 + Maths.PI / 3), Maths.csc(this.angle2 + Maths.PI / 3), Maths.csc(this.angle3 + Maths.PI / 3));
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getSecondFermatPoint() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t = new Trilinear(Maths.csc(this.angle1 - Maths.PI / 3), Maths.csc(this.angle2 - Maths.PI / 3), Maths.csc(this.angle3 - Maths.PI / 3));
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getFirstIsodynamicPoint() {
    if (this.isEquilateralTriangle()) return null;
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t = new Trilinear(Maths.sin(this.angle1 + Maths.PI / 3), Maths.sin(this.angle2 + Maths.PI / 3), Maths.sin(this.angle3 + Maths.PI / 3));
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getSecondIsodynamicPoint() {
    if (this.isEquilateralTriangle()) return null;
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const t = new Trilinear(Maths.sin(this.angle1 - Maths.PI / 3), Maths.sin(this.angle2 - Maths.PI / 3), Maths.sin(this.angle3 - Maths.PI / 3));
    const cc = t.toCartesian(...cs);
    return new Point(cc.valueOf());
  }

  getEulerPoints() {
    const [hx, hy] = this._getOrthocenterCoordinates();

    const [x1, y1] = this.point1Coordinates;
    const [x2, y2] = this.point2Coordinates;
    const [x3, y3] = this.point3Coordinates;
    const e1 = [(hx + x1) / 2, (hy + y1) / 2];
    const e2 = [(hx + x2) / 2, (hy + y2) / 2];
    const e3 = [(hx + x3) / 2, (hy + y3) / 2];
    return [new Point(e1), new Point(e2), new Point(e3)];
  }

  getEulerTriangle() {}

  getEulerLine() {
    if (this.isEquilateralTriangle()) return null;

    const c1 = this._getCircumcenterCoordinates();

    const c2 = this._getOrthocenterCoordinates();

    return Line.fromTwoPoints(c1, c2);
  }

  getTangentialTriangle() {
    const cs = [this.point1Coordinates, this.point2Coordinates, this.point3Coordinates];
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const t1 = new Trilinear(-a, b, c);
    const t2 = new Trilinear(a, -b, c);
    const t3 = new Trilinear(a, b, -c);
    const cc1 = t1.toCartesian(...cs);
    const cc2 = t2.toCartesian(...cs);
    const cc3 = t3.toCartesian(...cs);
    return new Triangle(cc1.valueOf(), cc2.valueOf(), cc3.valueOf());
  }

  getIntouchTriangle() {}

  getExtouchTriangle() {}

  getIncentralTriangle() {}

  _getOrthocenterCoordinates() {
    const [x1, y1] = this.point1Coordinates;
    const [x2, y2] = this.point2Coordinates;
    const [x3, y3] = this.point3Coordinates;
    const a1 = x1 - x2;
    const a2 = x2 - x3;
    const a3 = x3 - x1;
    const b1 = y1 - y2;
    const b2 = y2 - y3;
    const b3 = y3 - y1;
    const d = x1 * b2 + x2 * b3 + x3 * b1;
    const x = (b1 * b2 * b3 - (x1 * x2 * b1 + x2 * x3 * b2 + x3 * x1 * b3)) / d;
    const y = (-a1 * a2 * a3 + (y1 * y2 * a1 + y2 * y3 * a2 + y3 * y1 * a3)) / d;
    return [x, y];
  }

  _getIncenterCoordinates() {
    const [x1, y1] = this.point1Coordinates;
    const [x2, y2] = this.point2Coordinates;
    const [x3, y3] = this.point3Coordinates;
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const d = a + b + c;
    const x = (a * x1 + b * x2 + c * x3) / d;
    const y = (a * y1 + b * y2 + c * y3) / d;
    return [x, y];
  }

  getIncenterPoint() {
    return new Point(this._getIncenterCoordinates());
  }

  getInscribedCircle() {
    const s = this.getArea();
    const d = this.getPerimeter();
    const r = 2 * s / d;
    return new Circle(this._getIncenterCoordinates(), r);
  }

  _getCircumcenterCoordinates() {
    const [x1, y1] = this.point1Coordinates;
    const [x2, y2] = this.point2Coordinates;
    const [x3, y3] = this.point3Coordinates;
    const a1 = 2 * (x2 - x1);
    const b1 = 2 * (y2 - y1);
    const c1 = x2 ** 2 + y2 ** 2 - (x1 ** 2 + y1 ** 2);
    const a2 = 2 * (x3 - x2);
    const b2 = 2 * (y3 - y2);
    const c2 = x3 ** 2 + y3 ** 2 - (x2 ** 2 + y2 ** 2);
    const d = a1 * b2 - a2 * b1;
    const x = (c1 * b2 - c2 * b1) / d;
    const y = (c2 * a1 - c1 * a2) / d;
    return [x, y];
  }

  getCircumcenterPoint() {
    return new Point(this._getCircumcenterCoordinates());
  }

  getCircumscribedCircle() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const area = this.getArea();
    const r = a * b * c / (4 * area);
    return new Circle(this._getCircumcenterCoordinates(), r);
  }

  _getEscenterCoordinates() {
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const [x1, y1] = this.point1Coordinates;
    const [x2, y2] = this.point2Coordinates;
    const [x3, y3] = this.point3Coordinates;
    const ead = -a + b + c;
    const ea = [(-a * x1 + b * x2 + c * x3) / ead, (-a * y1 + b * y2 + c * y3) / ead];
    const ebd = a - b + c;
    const eb = [(a * x1 - b * x2 + c * x3) / ebd, (a * y1 - b * y2 + c * y3) / ebd];
    const ecd = a + b - c;
    const ec = [(a * x1 + b * x2 - c * x3) / ecd, (a * y1 + b * y2 - c * y3) / ecd];
    return [ea, eb, ec];
  }

  getEscenterPoints() {
    const [ea, eb, ec] = this._getEscenterCoordinates();

    return [new Point(ea), new Point(eb), new Point(ec)];
  }

  getEscribedCircleRadii() {
    const s = this.getArea();
    const p = this.getPerimeter() / 2;
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    return [s / (p - a), s / (p - b), s / (p - c)];
  }

  getEscribedCircles() {
    const [ea, eb, ec] = this._getEscenterCoordinates();

    const area = this.getArea();
    const [a, b, c] = [this.side1Length, this.side2Length, this.side3Length];
    const ead = -a + b + c;
    const ebd = a - b + c;
    const ecd = a + b - c;
    const ra = 2 * area / ead;
    const rb = 2 * area / ebd;
    const rc = 2 * area / ecd;
    return [new Circle(ea, ra), new Circle(eb, rb), new Circle(ec, rc)];
  }

  toPolygon() {
    const polygon = new Polygon();
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    polygon.appendVertex(Polygon.vertex(c1));
    polygon.appendVertex(Polygon.vertex(c2));
    polygon.appendVertex(Polygon.vertex(c3));
    polygon.closed = true;
    return polygon;
  }

  toPath() {
    const path = new Path();
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    path.appendCommand(Path.moveTo(c1));
    path.appendCommand(Path.lineTo(c2));
    path.appendCommand(Path.lineTo(c3));
    path.closed = true;
    return path;
  }

  apply(transformation) {
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    const nc1 = transformation.transformCoordinates(c1);
    const nc2 = transformation.transformCoordinates(c2);
    const nc3 = transformation.transformCoordinates(c3);
    return new Triangle(nc1, nc2, nc3);
  }

  getGraphics() {
    const g = new GeometryGraphics();
    if (!this.initialized_()) return g;
    const {
      point1Coordinates: c1,
      point2Coordinates: c2,
      point3Coordinates: c3
    } = this;
    g.moveTo(...c1);
    g.lineTo(...c2);
    g.lineTo(...c3);
    g.close();
    return g;
  }

  clone() {
    return new Triangle(this._point1X, this._point1Y, this._point2X, this._point2Y, this._point3X, this._point3Y);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Triangle();

    this._setPoint1X(shape._point1X);

    this._setPoint1Y(shape._point1Y);

    this._setPoint2X(shape._point2X);

    this._setPoint2Y(shape._point2Y);

    this._setPoint3X(shape._point3X);

    this._setPoint3Y(shape._point3Y);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tpoint1X: ${this.point1X}`, `\tpoint1Y: ${this.point1Y}`, `\tpoint2X: ${this.point2X}`, `\tpoint2Y: ${this.point2Y}`, `\tpoint3X: ${this.point3X}`, `\tpoint3Y: ${this.point3Y}`, `}`].join("\n");
  }

  toArray() {
    return [this.point1X, this.point1Y, this.point2X, this.point2Y, this.point3X, this.point3Y];
  }

  toObject() {
    return {
      point1X: this.point1X,
      point1Y: this.point1Y,
      point2X: this.point2X,
      point2Y: this.point2Y,
      point3X: this.point3X,
      point3Y: this.point3Y
    };
  }

}, _class2.formingCondition = "The three vertices of a `Triangle` should not be collinear, or the sum of the length of any two sides is greater than the third side.", _class2)) || _class$q;

var _dec$g, _class$p;
let Compound = (_dec$g = statedWithBoolean(false, false), (_class$p = class Compound extends Shape {
  constructor(items) {
    super();
    this._fillRule = "nonzero";
    this._items = [];

    if (Type.isArray(items)) {
      Object.assign(this, {
        items
      });
    }
  }

  get events() {
    return {
      itemsReset: "reset",
      itemAdded: "itemAdd",
      itemRemoved: "itemRemove",
      itemChanged: "itemChange",
      fillRuleChanged: "fillRuleChange"
    };
  }

  _setItems(value) {
    if (!Utility.isEqualTo(this._items, value)) this.trigger_(EventObject.simple(this, this.events.itemsReset));
    this._items = [...value];

    this._items.forEach(item => item.fillRule = this.fillRule);
  }

  _setFillRule(value) {
    if (!Utility.isEqualTo(this._fillRule, value)) this.trigger_(EventObject.simple(this, this.events.fillRuleChanged));
    this._fillRule = value;
  }

  get items() {
    return [...this._items];
  }

  set items(value) {
    Assert.condition(Type.isArray(value) && value.every(item => item instanceof Path || item instanceof Polygon), "[G]The `items` should be an array of `Path` or `Polygon`.");

    this._setItems(value);
  }

  get fillRule() {
    return this._fillRule;
  }

  set fillRule(value) {
    this._setFillRule(value);
  }

  get itemCount() {
    return this._items.length;
  }

  initialized_() {
    return true;
  }

  move(deltaX, deltaY) {
    Assert.isRealNumber(deltaX, "deltaX");
    Assert.isRealNumber(deltaY, "deltaY");
    if (deltaX === 0 && deltaY === 0) return this;

    this._items.forEach(item => item.move(deltaX, deltaY));

    return this;
  }

  moveAlongAngle(angle, distance) {
    Assert.isRealNumber(angle, "angle");
    Assert.isRealNumber(distance, "distance");
    if (distance === 0) return this;

    this._items.forEach(item => item.moveAlongAngle(angle, distance));

    return this;
  }

  getSegment(indexOrUuid) {}

  getSegments(excludeNotAllowed = false, assumeClosed = false) {
    return this._items.reduce((acc, item) => {
      acc.push(...item.getSegments(excludeNotAllowed, assumeClosed));
      return acc;
    }, []);
  }

  _isCompoundItem(v) {
    return v instanceof Polygon || v instanceof Path;
  }

  _assertIsCompoundItem(value, p) {
    Assert.condition(this._isCompoundItem(value), `[G]The \`${p}\` should be a \`Path\` or \`Polygon\`.`);
  }

  getItem(index) {
    var _this$_items$index;

    return (_this$_items$index = this._items[index]) != null ? _this$_items$index : null;
  }

  setItem(index, item) {
    var _this$_items$index2;

    this._assertIsCompoundItem(item, "item");

    const oldItem = (_this$_items$index2 = this._items[index]) != null ? _this$_items$index2 : null;

    if (!Utility.isEqualTo(item, oldItem)) {
      this.trigger_(EventObject.collection(this, this.events.itemChanged, index, ""));
      this._items[index] = item;
    }

    return true;
  }

  insertItem(index, item) {
    this._assertIsCompoundItem(item, "item");

    if (this._items[index] === undefined) return false;
    this.trigger_(EventObject.collection(this, this.events.itemAdded, index + 1, ""));

    this._items.splice(index, 0, item);

    return index + 1;
  }

  removeItem(index) {
    if (this._items[index] === undefined) return false;
    this.trigger_(EventObject.collection(this, this.events.itemRemoved, index, ""));

    this._items.splice(index, 1);

    return true;
  }

  appendItem(item) {
    this._assertIsCompoundItem(item, "item");

    const index = this.itemCount;
    this.trigger_(EventObject.collection(this, this.events.itemAdded, index, ""));

    this._items.push(item);

    return index;
  }

  prependItem(item) {
    this._assertIsCompoundItem(item, "item");

    const index = 0;
    this.trigger_(EventObject.collection(this, this.events.itemAdded, index, ""));

    this._items.unshift(item);

    return index;
  }

  isPointOn(point) {
    const c = getCoordinates(point, "point");
    return this._items.some(item => item.isPointOn(c));
  }

  isPointInside(point) {
    const c = getCoordinates(point, "point");
    const helper = new FillRuleHelper();

    if (this.fillRule === "nonzero") {
      const wn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (wn === undefined) return false;
      return wn === 0 ? false : true;
    } else {
      const cn = helper.crossingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (cn === undefined) return false;
      return cn % 2 === 0 ? false : true;
    }
  }

  isPointOutside(point) {
    const c = getCoordinates(point, "point");
    const helper = new FillRuleHelper();

    if (this.fillRule === "nonzero") {
      const wn = helper.windingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (wn === undefined) return false;
      return wn === 0 ? true : false;
    } else {
      const cn = helper.crossingNumberOfPoint(c, 0, this.getSegments(true, true));
      if (cn === undefined) return false;
      return cn % 2 === 0 ? true : false;
    }
  }

  apply(transformation) {
    const retCompound = new Compound();
    retCompound._fillRule = this._fillRule;

    this._items.forEach(item => {
      retCompound.appendItem(item.apply(transformation));
    });

    return retCompound;
  }

  getGraphics(viewport) {
    const g = new GeometryGraphics();
    g.fillRule = this.fillRule;

    this._items.forEach(item => {
      g.append(item.getGraphics(viewport));
    });

    return g;
  }

  clone() {
    return new Compound(this._items);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Compound();

    this._setItems(shape.items);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\titems: [`, `${this.items.map(v => `\t\t${v.name}`).join(",\n")}`, `\t]`, `}`].join("\n");
  }

  toArray() {
    throw this.items;
  }

  toObject() {
    throw new Error("Method not implemented.");
  }

}, (_applyDecoratedDescriptor(_class$p.prototype, "getSegments", [_dec$g], Object.getOwnPropertyDescriptor(_class$p.prototype, "getSegments"), _class$p.prototype)), _class$p));

class ImageGraphics {
  constructor() {
    this.command = void 0;
  }

  image(constantSize, x, y, width, height, sourceX, sourceY, sourceWidth, sourceHeight, imageSource) {
    this.command = {
      constantSize,
      x,
      y,
      width,
      height,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      imageSource
    };
  }

}

class Image extends Shape {
  constructor(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
    super();
    this.constantSize = false;
    this._x = NaN;
    this._y = NaN;
    this._width = NaN;
    this._height = NaN;
    this._sourceX = NaN;
    this._sourceY = NaN;
    this._sourceWidth = NaN;
    this._sourceHeight = NaN;
    this._imageSource = "";

    if (Type.isNumber(a0)) {
      if (Type.isNumber(a2)) {
        if (Type.isString(a4)) {
          Object.assign(this, {
            x: a0,
            y: a1,
            width: a2,
            height: a3,
            imageSource: a4
          });
        }

        if (Type.isNumber(a4)) {
          Object.assign(this, {
            x: a0,
            y: a1,
            width: a2,
            height: a3,
            sourceX: a4,
            sourceY: a5,
            sourceWidth: a6,
            sourceHeight: a7,
            imageSource: a8
          });
        }
      }

      if (Type.isArray(a2)) {
        if (Type.isString(a3)) {
          Object.assign(this, {
            x: a0,
            y: a1,
            size: a2,
            imageSource: a3
          });
        }

        if (Type.isNumber(a3)) {
          Object.assign(this, {
            x: a0,
            y: a1,
            size: a2,
            sourceX: a3,
            sourceY: a4,
            sourceSize: a5,
            imageSource: a6
          });
        }
      }
    }

    if (Type.isArray(a0)) {
      if (Type.isNumber(a1)) {
        if (Type.isString(a3)) {
          Object.assign(this, {
            coordinates: a0,
            width: a1,
            height: a2,
            imageSource: a3
          });
        }

        if (Type.isArray(a3)) {
          Object.assign(this, {
            coordinates: a0,
            width: a1,
            height: a2,
            sourceCoordinates: a3,
            sourceWidth: a4,
            sourceHeight: a5,
            imageSource: a6
          });
        }
      }

      if (Type.isArray(a1)) {
        if (Type.isString(a2)) {
          Object.assign(this, {
            coordinates: a0,
            size: a1,
            imageSource: a2
          });
        }

        if (Type.isArray(a2)) {
          Object.assign(this, {
            coordinates: a0,
            size: a1,
            sourceCoordinates: a2,
            sourceSize: a3,
            imageSource: a4
          });
        }
      }
    }

    if (a0 instanceof Point) {
      if (Type.isNumber(a1)) {
        if (Type.isString(a3)) {
          Object.assign(this, {
            point: a0,
            width: a1,
            height: a2,
            imageSource: a3
          });
        }

        if (a3 instanceof Point) {
          Object.assign(this, {
            point: a0,
            width: a1,
            height: a2,
            sourcePoint: a3,
            sourceWidth: a4,
            sourceHeight: a5,
            imageSource: a6
          });
        }
      }

      if (Type.isArray(a1)) {
        if (Type.isString(a2)) {
          Object.assign(this, {
            point: a0,
            size: a1,
            imageSource: a2
          });
        }

        if (a2 instanceof Point) {
          Object.assign(this, {
            point: a0,
            size: a1,
            sourcePoint: a2,
            sourceSize: a3,
            imageSource: a4
          });
        }
      }
    }

    if (Type.isString(a0)) {
      Object.assign(this, {
        imageSource: a0
      });
    }
  }

  get events() {
    return {
      xChanged: "x",
      yChanged: "y",
      sourceXChanged: "sourceX",
      sourceYChanged: "sourceY",
      widthChanged: "width",
      heightChanged: "height",
      sourceWidthChanged: "sourceWidth",
      sourceHeightChanged: "sourceHeight",
      imageSourceChanged: "imageSource"
    };
  }

  _setX(value) {
    if (!Utility.isEqualTo(this._x, value)) this.trigger_(EventObject.simple(this, this.events.xChanged));
    this._x = value;
  }

  _setY(value) {
    if (!Utility.isEqualTo(this._y, value)) this.trigger_(EventObject.simple(this, this.events.yChanged));
    this._y = value;
  }

  _setWidth(value) {
    if (!Utility.isEqualTo(this._width, value)) this.trigger_(EventObject.simple(this, this.events.widthChanged));
    this._width = value;
  }

  _setHeight(value) {
    if (!Utility.isEqualTo(this._height, value)) this.trigger_(EventObject.simple(this, this.events.heightChanged));
    this._height = value;
  }

  _setSourceX(value) {
    if (!Utility.isEqualTo(this._sourceX, value)) this.trigger_(EventObject.simple(this, this.events.sourceXChanged));
    this._sourceX = value;
  }

  _setSourceY(value) {
    if (!Utility.isEqualTo(this._sourceY, value)) this.trigger_(EventObject.simple(this, this.events.sourceYChanged));
    this._sourceY = value;
  }

  _setSourceWidth(value) {
    if (!Utility.isEqualTo(this._sourceWidth, value)) this.trigger_(EventObject.simple(this, this.events.sourceWidthChanged));
    this._sourceWidth = value;
  }

  _setSourceHeight(value) {
    if (!Utility.isEqualTo(this._sourceHeight, value)) this.trigger_(EventObject.simple(this, this.events.sourceHeightChanged));
    this._sourceHeight = value;
  }

  _setImageSource(value) {
    if (!Utility.isEqualTo(this._imageSource, value)) this.trigger_(EventObject.simple(this, this.events.imageSourceChanged));
    this._imageSource = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    Assert.isRealNumber(value, "x");

    this._setX(value);
  }

  get y() {
    return this._y;
  }

  set y(value) {
    Assert.isRealNumber(value, "y");

    this._setY(value);
  }

  get coordinates() {
    return [this._x, this._y];
  }

  set coordinates(value) {
    Assert.isCoordinates(value, "coordinates");

    this._setX(Coordinates.x(value));

    this._setY(Coordinates.y(value));
  }

  get point() {
    return new Point(this._x, this._y);
  }

  set point(value) {
    this._setX(value.x);

    this._setY(value.y);
  }

  get width() {
    return this._width;
  }

  set width(value) {
    Assert.isNonZeroLength(value, "width");

    this._setWidth(value);
  }

  get height() {
    return this._height;
  }

  set height(value) {
    Assert.isNonZeroLength(value, "height");

    this._setHeight(value);
  }

  get size() {
    return [this._width, this._height];
  }

  set size(value) {
    Assert.isNonZeroSize(value, "size");

    this._setWidth(Size.width(value));

    this._setHeight(Size.height(value));
  }

  get sourceX() {
    return this._sourceX;
  }

  set sourceX(value) {
    Assert.isRealNumber(value, "sourceX");

    this._setSourceX(value);
  }

  get sourceY() {
    return this._sourceY;
  }

  set sourceY(value) {
    Assert.isRealNumber(value, "sourceY");

    this._setSourceY(value);
  }

  get sourceCoordinates() {
    return [this._sourceX, this._sourceY];
  }

  set sourceCoordinates(value) {
    Assert.isCoordinates(value, "sourceCoordinates");

    this._setSourceX(Coordinates.x(value));

    this._setSourceY(Coordinates.y(value));
  }

  get sourcePoint() {
    return new Point(this._sourceX, this._sourceY);
  }

  set sourcePoint(value) {
    this._setSourceX(value.x);

    this._setSourceY(value.y);
  }

  get sourceWidth() {
    return this._sourceWidth;
  }

  set sourceWidth(value) {
    Assert.isNonZeroLength(value, "sourceWidth");

    this._setSourceWidth(value);
  }

  get sourceHeight() {
    return this._sourceHeight;
  }

  set sourceHeight(value) {
    Assert.isNonZeroLength(value, "sourceHeight");

    this._setSourceHeight(value);
  }

  get sourceSize() {
    return [this._sourceWidth, this._sourceHeight];
  }

  set sourceSize(value) {
    Assert.isNonZeroSize(value, "sourceSize");

    this._setSourceWidth(Size.width(value));

    this._setSourceHeight(Size.height(value));
  }

  get imageSource() {
    return this._imageSource;
  }

  set imageSource(value) {
    this._setImageSource(value);
  }

  initialized_() {
    return !Number.isNaN(this._x) && !Number.isNaN(this._y) && !Number.isNaN(this._width) && !Number.isNaN(this._height);
  }

  move(deltaX, deltaY) {
    this.coordinates = Vector2.add(this.coordinates, [deltaX, deltaY]);
    return this;
  }

  moveAlongAngle(angle, distance) {
    this.coordinates = Vector2.add(this.coordinates, Vector2.from2(angle, distance));
    return this;
  }

  getGraphics() {
    const g = new ImageGraphics();
    if (!this.initialized_()) return g;
    const {
      constantSize,
      x,
      y,
      width,
      height,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      imageSource
    } = this;
    g.image(constantSize, x, y, width, height, sourceX, sourceY, sourceWidth, sourceHeight, imageSource);
    return g;
  }

  clone() {
    return new Image(this.x, this.y, this.width, this.height, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.imageSource);
  }

  copyFrom(shape) {
    if (shape === null) shape = new Image();

    this._setX(shape._x);

    this._setY(shape._y);

    this._setWidth(shape._width);

    this._setHeight(shape._height);

    this._setSourceX(shape._sourceX);

    this._setSourceY(shape._sourceY);

    this._setSourceWidth(shape._sourceWidth);

    this._setSourceHeight(shape._sourceHeight);

    this._setImageSource(shape._imageSource);

    return this;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tx: ${this.x}`, `\ty: ${this.y}`, `\twidth: ${this.width}`, `\theight: ${this.height}`, `\tsourceX: ${this.sourceX}`, `\tsourceY: ${this.sourceY}`, `\tsourceWidth: ${this.sourceWidth}`, `\tsourceHeight: ${this.sourceHeight}`, `\timageSource: ${this.imageSource}`, `}`].join("\n");
  }

  toArray() {
    return [this.x, this.y, this.width, this.height, this.sourceX, this.sourceY, this.sourceWidth, this._sourceHeight, this.imageSource];
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      sourceX: this.sourceX,
      sourceY: this.sourceY,
      sourceWidth: this.sourceWidth,
      sourceHeight: this.sourceHeight,
      imageSource: this.imageSource
    };
  }

}

class TextGraphics {
  constructor() {
    this.command = void 0;
  }

  text(constantSize, x, y, text, fontSize, fontFamily, fontBold, fontItalic) {
    this.command = {
      constantSize,
      x,
      y,
      text,
      fontSize,
      fontFamily,
      fontBold,
      fontItalic
    };
  }

}

var _class$o;

let Arbitrary = validGeometry(_class$o = class Arbitrary extends Geometry {
  constructor(geometry) {
    super();
    this._geometry = null;

    if (geometry !== undefined) {
      Object.assign(this, {
        geometry
      });
    }
  }

  get events() {
    return {
      geometryChanged: "geometry"
    };
  }

  get geometry() {
    return this._geometry;
  }

  set geometry(value) {
    this._setGeometry(value);
  }

  initialized_() {
    return this._geometry !== null;
  }

  dimensionallyDegenerate() {
    var _dimensionallyDegener, _dimensionallyDegener2, _ref;

    if (!this.initialized_()) return true;
    return (_dimensionallyDegener = (_dimensionallyDegener2 = (_ref = this._geometry).dimensionallyDegenerate) == null ? void 0 : _dimensionallyDegener2.call(_ref)) != null ? _dimensionallyDegener : false;
  }

  _setGeometry(value) {
    if (value instanceof Arbitrary) value = value._geometry;
    if (value !== this._geometry) this.trigger_(EventObject.simple(this, this.events.geometryChanged));
    this._geometry = value;
  }

  is(ctor) {
    return this._geometry instanceof ctor;
  }

  apply(transformation) {
    return this._geometry.apply(transformation);
  }

  move(deltaX, deltaY) {
    this._geometry.move(deltaX, deltaY);

    return this;
  }

  moveAlongAngle(angle, distance) {
    this._geometry.moveAlongAngle(angle, distance);

    return this;
  }

  clone() {
    return new Arbitrary(this._geometry);
  }

  copyFrom(geometry) {
    this._setGeometry(geometry);

    return this;
  }

  getGraphics(viewport) {
    if (!this.initialized_()) return new GeometryGraphics();
    return this._geometry.getGraphics(viewport);
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tgeometry: ${this.geometry}`, `}`].join("\n");
  }

  toArray() {
    return [];
  }

  toObject() {
    return {};
  }

}) || _class$o;

class SealedShapeObject extends EventTarget {
  constructor(shapes) {
    super();
    this._shapes = void 0;
    this._shapesProxy = void 0;
    this._shapes = { ...shapes
    };

    this._initProxy();
  }

  get events() {
    return {
      shapeChanged: "shapeChange"
    };
  }

  get shapes() {
    return this._shapesProxy;
  }

  _initProxy() {
    this._shapesProxy = new Proxy(this._shapes, {
      defineProperty: (target, prop, descriptor) => {
        if (Reflect.ownKeys(target).includes(prop)) {
          if (descriptor.get !== undefined || descriptor.set !== undefined) {
            console.warn(`[G]You could not define the property \`${prop.toString()}\` of \`shapes\` as an accessor.`);
            return true;
          }

          if (!Utility.isEqualTo(target[String(prop)], descriptor.value)) this.trigger_(EventObject.collection(this, this.events.shapeChanged, String(prop), ""));
          return Reflect.defineProperty(target, prop, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: descriptor.value
          });
        }

        console.warn(`[G]You could not add any new property to \`shapes\`.`);
        return true;
      },
      deleteProperty: (target, prop) => {
        if (Reflect.ownKeys(target).includes(prop)) {
          console.warn(`[G]You could not delete any property from \`shapes\`.`);
          return true;
        }

        return true;
      },
      setPrototypeOf: (target, prototype) => {
        console.warn(`[G]You could not set the prototype of \`shapes\`.`);
        return true;
      }
    });
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, `\tshapes: {`, Object.entries(this._shapes).map(([key, value]) => `\t${key}: ${value}`), `\t}`, `}`].join("\n");
  }

  toArray() {
    return Object.values(this._shapes).map(shape => shape.toArray());
  }

  toObject() {
    return { ...this.shapes
    };
  }

}

class ShapeArray extends EventTarget {
  constructor(shapes = []) {
    super();
    this._shapes = [];
    this._shapesProxy = void 0;
    Object.assign(this, {
      shapes
    });

    this._initProxy();
  }

  get events() {
    return {
      shapesReset: "reset",
      shapeChanged: "shapeChange",
      shapeAdded: "shapeAdd",
      shapeRemoved: "shapeRemove"
    };
  }

  _setShapes(value) {
    if (!Utility.isEqualTo(this._shapes, value)) this.trigger_(EventObject.simple(this, this.events.shapesReset));

    for (let p in this._shapes) delete this._shapes[p];

    for (let q in value) this._shapes[q] = value[q];
  }

  get shapes() {
    return this._shapesProxy;
  }

  set shapes(value) {
    this._setShapes(value);
  }

  _initProxy() {
    this._shapesProxy = new Proxy(this._shapes, {
      defineProperty: (target, prop, descriptor) => {
        if (Reflect.ownKeys(target).includes(prop)) {
          if (descriptor.get !== undefined || descriptor.set !== undefined) {
            console.warn(`[G]You could not define the property \`${prop.toString()}\` of \`shapes\` as an accessor.`);
            return true;
          }

          if (prop === "length") {
            let i = this._shapesProxy.length - 1;
            let newI = Number(descriptor.value) - 1;

            while (i > newI) {
              this.trigger_(EventObject.collection(this, this.events.shapeRemoved, i, ""));
              i--;
            }

            return Reflect.defineProperty(target, prop, descriptor);
          }

          if (!Utility.isEqualTo(target[Number(prop)], descriptor.value)) this.trigger_(EventObject.collection(this, this.events.shapeChanged, Number(prop), ""));
          return Reflect.defineProperty(target, prop, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: descriptor.value
          });
        }

        this.trigger_(EventObject.collection(this, this.events.shapeAdded, Number(prop), ""));
        return Reflect.defineProperty(target, prop, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: descriptor.value
        });
      },
      deleteProperty: (target, prop) => {
        if (Reflect.ownKeys(target).includes(prop)) {
          this.trigger_(EventObject.collection(this, this.events.shapeRemoved, Number(prop), ""));
          return Reflect.deleteProperty(target, prop);
        }

        return true;
      },
      preventExtensions: target => {
        console.warn(`[G]You could not prevent extensions of \`shapes\`.`);
        return true;
      },
      setPrototypeOf: (target, prototype) => {
        console.warn(`[G]You could not set the prototype of \`shapes\`.`);
        return true;
      }
    });
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, this._shapes.map((shape, index) => `\t${index}: ${shape}`), `}`].join("\n");
  }

  toArray() {
    return this._shapes.map(shape => shape.toArray());
  }

  toObject() {
    return this._shapes.reduce((acc, shape, index) => {
      acc[index] = shape.toObject();
      return acc;
    }, {});
  }

}

class DynamicEventTarget extends EventTarget {
  constructor(object) {
    super();
    this._object = void 0;
    this._object = { ...object
    };

    const excludeKeysFromBaseObject = this._getPublicPropertyNames(BaseObject.prototype);

    const excludeKeysFromEventTarget = this._getPublicPropertyNames(EventTarget.prototype);

    const excludeKeysFromThis = this._getPublicPropertyNames(Object.getPrototypeOf(this));

    const excludeKeys = [...excludeKeysFromBaseObject, ...excludeKeysFromEventTarget, ...excludeKeysFromThis];
    Object.getOwnPropertyNames(this._object).forEach(name => {
      if (name.startsWith("_") || name.endsWith("_")) {
        console.warn(`[G]The \`${name}\` key was found to start or end with \`_\` which is not allowed, so it will be ignored.`);
        delete this._object[name];
        return;
      }

      if (excludeKeys.includes(name)) {
        console.warn(`[G]The \`${name}\` key was found to override the keys of \`EventTarget\` which is not allowed, so it will be ignore.`);
        delete this._object[name];
        return;
      }

      Object.defineProperty(this, name, {
        get() {
          return this._object[name];
        },

        set(value) {
          if (!Utility.isEqualTo(this._object[name], value)) this.trigger_(EventObject.simple(this, this.events[`${name}Changed`]));
          this._object[name] = value;
        }

      });
    });
    return Object.seal(this);
  }

  _getPublicPropertyNames(object) {
    return Object.getOwnPropertyNames(object).filter(name => name !== "constructor" && !name.startsWith("_") && !name.endsWith("_"));
  }

  get events() {
    const events = {};
    Object.getOwnPropertyNames(this._object).forEach(name => {
      events[`${name}Changed`] = name;
    });
    return events;
  }

  toString() {
    return [`${this.name}(${this.uuid}){`, ...Object.getOwnPropertyNames(this._object).map(name => `\t${name}: ${this._object[name]}`), `}`].join("\n");
  }

  toArray() {
    return Object.values(this._object);
  }

  toObject() {
    return { ...this._object
    };
  }

}

const Dynamic = DynamicEventTarget;

var _class$n;
let CircleCircle = (_class$n = class CircleCircle extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
  }

  onSameTrajectory() {
    const {
      centerCoordinates: cc1,
      radius: r1
    } = this.geometry1;
    const {
      centerCoordinates: cc2,
      radius: r2
    } = this.geometry2;
    const epsilon = optioner.options.epsilon;
    return Coordinates.isEqualTo(cc1, cc2, epsilon) && Maths.equalTo(r1, r2, epsilon);
  }

  intersection() {
    if (this.onSameTrajectory()) return [];
    const {
      centerCoordinates: cc1,
      radius: r1
    } = this.geometry1;
    const {
      centerCoordinates: cc2,
      radius: r2
    } = this.geometry2;
    const v = Vector2.from(cc1, cc2);
    const sd = Vector2.squaredMagnitude(v);
    const ssr = (r1 + r2) ** 2;
    const sdr = (r1 - r2) ** 2;
    const epsilon = optioner.options.epsilon;
    const intersection = [];

    if (Maths.lessThan(sd, ssr, epsilon) && Maths.greaterThan(sd, sdr, epsilon)) {
      const angle = Maths.acos(r1 ** 2 + sd - r2 ** 2) / (2 * r1 * Maths.sqrt(sd));
      const baseAngle = Vector2.angle(v);
      intersection.push({
        c: this.geometry1.getPointAtAngle(baseAngle + angle).coordinates,
        m: 1
      }, {
        c: this.geometry1.getPointAtAngle(baseAngle - angle).coordinates,
        m: 1
      });
    }

    if (Maths.equalTo(sd, ssr, epsilon) || Maths.equalTo(sd, sdr, epsilon)) {
      intersection.push({
        c: this.geometry1.getPointAtAngle(Vector2.angle(v)).coordinates,
        m: 2
      });
    }

    return intersection;
  }

  equal() {
    return this.onSameTrajectory();
  }

  separate() {
    if (!this.geometry1.isPointOutside(this.geometry2.centerCoordinates)) return false;
    if (!this.geometry2.isPointOutside(this.geometry1.centerCoordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  contain() {
    if (!this.geometry1.isPointInside(this.geometry2.centerCoordinates)) return false;
    if (this.onSameTrajectory()) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  containedBy() {
    if (!this.geometry2.isPointInside(this.geometry1.centerCoordinates)) return false;
    if (this.onSameTrajectory()) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  touch() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    return [this.geometry1.clone()];
  }

}, (_applyDecoratedDescriptor(_class$n.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$n.prototype, "onSameTrajectory"), _class$n.prototype), _applyDecoratedDescriptor(_class$n.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$n.prototype, "intersection"), _class$n.prototype)), _class$n);

var _class$m;
let LineLine = (_class$m = class LineLine extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
  }

  onSameTrajectory() {
    const [a1, b1, c1] = this.geometry1.getImplicitFunctionCoefs();
    const [a2, b2, c2] = this.geometry2.getImplicitFunctionCoefs();
    const m = a1 * b2 - a2 * b1;
    const n = a1 * c2 - a2 * c1;
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(m, 0, epsilon) && Maths.equalTo(n, 0, epsilon);
  }

  intersection() {
    if (this.onSameTrajectory()) return [];
    const [a1, b1, c1] = this.geometry1.getImplicitFunctionCoefs();
    const [a2, b2, c2] = this.geometry2.getImplicitFunctionCoefs();
    const m = a1 * b2 - a2 * b1;
    const epsilon = optioner.options.epsilon;
    const intersection = [];

    if (!Maths.equalTo(m, 0, epsilon)) {
      const x = (c2 * b1 - c1 * b2) / m;
      const y = (c1 * a2 - c2 * a1) / m;
      intersection.push({
        c: [x, y]
      });
    }

    return intersection;
  }

  equal() {
    return this.onSameTrajectory();
  }

  separate() {
    if (this.onSameTrajectory()) return false;
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().map(i => new Point(i.c));
  }

  cross() {
    return this.intersection().map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    return [this.geometry1.clone()];
  }

}, (_applyDecoratedDescriptor(_class$m.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$m.prototype, "onSameTrajectory"), _class$m.prototype), _applyDecoratedDescriptor(_class$m.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$m.prototype, "intersection"), _class$m.prototype)), _class$m);

var _class$l;
let LineRay = (_class$l = class LineRay extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    this.supRelationship = new LineLine(geometry1, geometry2.toLine());
  }

  onSameTrajectory() {
    return this.supRelationship.onSameTrajectory();
  }

  intersection() {
    return this.supRelationship.intersection().filter(i => this.geometry2.isPointOn(i.c));
  }

  separate() {
    if (this.onSameTrajectory()) return false;
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => !Coordinates.isEqualTo(i.c, this.geometry2.coordinates, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, this.geometry2.coordinates, epsilon)).map(i => new Point(i.c));
  }

  coincide() {
    if (this.onSameTrajectory()) return [this.geometry2.clone()];
    return [];
  }

}, (_applyDecoratedDescriptor(_class$l.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$l.prototype, "onSameTrajectory"), _class$l.prototype), _applyDecoratedDescriptor(_class$l.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$l.prototype, "intersection"), _class$l.prototype)), _class$l);

var _dec$f, _dec2$f, _dec3$f, _dec4$f, _dec5$f, _dec6$f, _dec7$f, _dec8$f, _dec9$b, _class$k;
let LineSegmentQuadraticBezier = (_dec$f = superPreprocess("handleDegeneration"), _dec2$f = superPreprocess("handleDegeneration"), _dec3$f = superPreprocess("handleDegeneration"), _dec4$f = superPreprocess("handleDegeneration"), _dec5$f = superPreprocess("handleDegeneration"), _dec6$f = superPreprocess("handleDegeneration"), _dec7$f = superPreprocess("handleDegeneration"), _dec8$f = superPreprocess("handleDegeneration"), _dec9$b = superPreprocess("handleDegeneration"), (_class$k = class LineSegmentQuadraticBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentLineSegment(geometry1, ndg2);
    }

    this.supRelationship = new LineQuadraticBezier(geometry1.toLine(), geometry2);
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    const epsilon = optioner.options.epsilon;
    return intersection.map(i => {
      return { ...i,
        t1: this.geometry1.getTimeOfPointExtend(i.c)
      };
    }).filter(i => Maths.between(i.t1, 0, 1, false, false, epsilon));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon) && (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$k.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$k.prototype, "intersection"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "separate", [_dec$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "separate"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "intersect", [_dec2$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "intersect"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "strike", [_dec3$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "strike"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "contact", [_dec4$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "contact"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "cross", [_dec5$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "cross"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "touch", [_dec6$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "touch"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "block", [_dec7$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "block"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "blockedBy", [_dec8$f], Object.getOwnPropertyDescriptor(_class$k.prototype, "blockedBy"), _class$k.prototype), _applyDecoratedDescriptor(_class$k.prototype, "connect", [_dec9$b], Object.getOwnPropertyDescriptor(_class$k.prototype, "connect"), _class$k.prototype)), _class$k));

var _dec$e, _dec2$e, _dec3$e, _dec4$e, _dec5$e, _dec6$e, _dec7$e, _dec8$e, _dec9$a, _class$j;
let LineSegmentBezier = (_dec$e = superPreprocess("handleDegeneration"), _dec2$e = superPreprocess("handleDegeneration"), _dec3$e = superPreprocess("handleDegeneration"), _dec4$e = superPreprocess("handleDegeneration"), _dec5$e = superPreprocess("handleDegeneration"), _dec6$e = superPreprocess("handleDegeneration"), _dec7$e = superPreprocess("handleDegeneration"), _dec8$e = superPreprocess("handleDegeneration"), _dec9$a = superPreprocess("handleDegeneration"), (_class$j = class LineSegmentBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new LineSegmentQuadraticBezier(geometry1, ndg2);
      return this;
    }

    if (ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentLineSegment(geometry1, ndg2);
      return this;
    }

    this.supRelationship = new LineBezier(geometry1.toLine(), geometry2);
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    const epsilon = optioner.options.epsilon;
    return intersection.map(i => {
      return { ...i,
        t1: this.geometry1.getTimeOfPointExtend(i.c)
      };
    }).filter(i => Maths.between(i.t1, 0, 1, false, false, epsilon));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$j.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$j.prototype, "intersection"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "separate", [_dec$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "separate"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "intersect", [_dec2$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "intersect"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "strike", [_dec3$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "strike"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "contact", [_dec4$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "contact"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "cross", [_dec5$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "cross"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "touch", [_dec6$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "touch"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "block", [_dec7$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "block"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "blockedBy", [_dec8$e], Object.getOwnPropertyDescriptor(_class$j.prototype, "blockedBy"), _class$j.prototype), _applyDecoratedDescriptor(_class$j.prototype, "connect", [_dec9$a], Object.getOwnPropertyDescriptor(_class$j.prototype, "connect"), _class$j.prototype)), _class$j));

function compareImplicit(coefs1, coefs2, epsilon) {
  if (coefs1.length !== coefs2.length) return false;
  const maxCoef1 = Maths.max(...coefs1.map(Maths.abs));
  const maxCoef2 = Maths.max(...coefs2.map(Maths.abs));

  if (Maths.equalTo(maxCoef1, 0, epsilon)) {
    const scalar = epsilon / maxCoef1;
    coefs1 = coefs1.map(c => c * scalar);
  }

  if (Maths.equalTo(maxCoef2, 0, epsilon)) {
    const scalar = epsilon / maxCoef2;
    coefs2 = coefs2.map(c => c * scalar);
  }

  const i = coefs1.findIndex(c => !Maths.equalTo(c, 0, epsilon));
  if (coefs2[i] === 0) return false;
  coefs1 = coefs1.map(c => c / coefs1[i]);
  coefs2 = coefs2.map(c => c / coefs2[i]);

  for (let i = 0, l = coefs1.length; i < l; i++) {
    if (!Maths.equalTo(coefs1[i], coefs2[i], epsilon)) return false;
  }

  return true;
}

var _dec$d, _dec2$d, _dec3$d, _dec4$d, _dec5$d, _dec6$d, _dec7$d, _dec8$d, _dec9$9, _dec10$4, _dec11$3, _class$i;
let QuadraticBezierQuadraticBezier = (_dec$d = superPreprocess("handleDegeneration"), _dec2$d = superPreprocess("handleDegeneration"), _dec3$d = superPreprocess("handleDegeneration"), _dec4$d = superPreprocess("handleDegeneration"), _dec5$d = superPreprocess("handleDegeneration"), _dec6$d = superPreprocess("handleDegeneration"), _dec7$d = superPreprocess("handleDegeneration"), _dec8$d = superPreprocess("handleDegeneration"), _dec9$9 = superPreprocess("handleDegeneration"), _dec10$4 = superPreprocess("handleDegeneration"), _dec11$3 = superPreprocess("handleDegeneration"), (_class$i = class QuadraticBezierQuadraticBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg1 = geometry1.nonDimensionallyDegenerate();
    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg1 instanceof QuadraticBezier && ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentQuadraticBezier(ndg2, ndg1);
      this.degeneration.inverse = true;
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new LineSegmentQuadraticBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentLineSegment(ndg1, ndg2);
      return this;
    }
  }

  onSameTrajectory() {
    const curveEpsilon = optioner.options.curveEpsilon;
    const if1 = this.geometry1.getImplicitFunctionCoefs();
    const if2 = this.geometry2.getImplicitFunctionCoefs();
    return compareImplicit(if1, if2, curveEpsilon);
  }

  intersection() {
    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    if (this.onSameTrajectory()) return [];
    const [polyX1, polyY1] = this.geometry1.getPolynomial();
    const [polyX2, polyY2] = this.geometry2.getPolynomial();
    const [[x12, x11, x10], [y12, y11, y10]] = [polyX1, polyY1];
    const [[x22, x21, x20], [y22, y21, y20]] = [polyX2, polyY2];
    const a = x12 * y11 - x11 * y12;
    const b0 = x12 * y10 - x10 * y12 + x20 * y12 - x12 * y20;
    const b1 = x21 * y12 - x12 * y21;
    const b2 = x22 * y12 - x12 * y22;
    const c0 = b0;
    const c1 = b1;
    const c2 = b2;
    const d0 = x11 * y10 - x10 * y11 + x20 * y11 - x11 * y20;
    const d1 = x21 * y11 - x11 * y21;
    const d2 = x22 * y11 - x11 * y22;
    let tPoly = Polynomial.standardize([-b2 * c2, -b2 * c1 - b1 * c2, -b2 * c0 - b1 * c1 - b0 * c2 + a * d2, -b1 * c0 - b0 * c1 + a * d1, -b0 * c0 + a * d0]);
    const curveEpsilon = optioner.options.curveEpsilon;
    const epsilon = optioner.options.epsilon;
    const tRoots = Polynomial.roots(tPoly).map(r => {
      if (Complex.is(r)) {
        if (Maths.equalTo(Complex.imag(r), 0, curveEpsilon)) return Complex.real(r);
        return r;
      }

      return r;
    });
    const tRootsM = Polynomial.rootsMultiplicity(tRoots.filter(Type.isNumber), curveEpsilon);
    const intersection = [];
    const doubleLines1 = this.geometry1.isDoubleLines();

    if (doubleLines1) {
      tRootsM.forEach((rm, index) => {
        if (rm.multiplicity === 6) tRootsM[index].multiplicity = 3;
        if (rm.multiplicity === 4) tRootsM[index].multiplicity = 2;
        if (rm.multiplicity === 2) tRootsM[index].multiplicity = 1;
      });
    }

    for (let i = 0, l = tRootsM.length; i < l; i++) {
      const t2 = tRootsM[i].root;

      if (Maths.between(t2, 0, 1, false, false, epsilon)) {
        const x = Polynomial.evaluate(polyX2, t2);
        const y = Polynomial.evaluate(polyY2, t2);
        const t1 = this.geometry1.getTimeOfPoint([x, y]);

        if (!Number.isNaN(t1)) {
          intersection.push({
            c: [x, y],
            t1,
            t2,
            m: tRootsM[i].multiplicity
          });
        }
      }
    }

    return intersection;
  }

  perspective() {
    if (!this.onSameTrajectory()) throw new Error("[G]Please call `onSameTrajectory` first.");
    const {
      point1Coordinates: c1i,
      point2Coordinates: c1t
    } = this.geometry1;
    const {
      point1Coordinates: c2i,
      point2Coordinates: c2t
    } = this.geometry2;
    const t2i = this.geometry1.getTimeOfPointExtend(c2i);
    const t2t = this.geometry1.getTimeOfPointExtend(c2t);
    const dt = t2i > t2t;
    return {
      c1i,
      c1t,
      c2i: dt ? c2t : c2i,
      c2t: dt ? c2i : c2t,
      t2i: dt ? t2t : t2i,
      t2t: dt ? t2i : t2t
    };
  }

  equal() {
    if (!this.onSameTrajectory()) return false;
    const epsilon = optioner.options.epsilon;
    const {
      t2i,
      t2t
    } = this.perspective();
    return Maths.equalTo(t2i, 0, epsilon) && Maths.equalTo(t2t, 1, epsilon);
  }

  separate() {
    if (!this.onSameTrajectory()) {
      return this.intersection().length === 0;
    }

    const {
      t2i,
      t2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return Maths.greaterThan(t2i, 1, epsilon) || Maths.lessThan(t2t, 0, epsilon);
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    const {
      t2i,
      t2t,
      c1i,
      c1t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    const coincide = [];
    const iet = Maths.equalTo(t2i, 1, epsilon);
    const tei = Maths.equalTo(t2t, 0, epsilon);
    if (iet) coincide.push(new Point(c1t));
    if (tei) coincide.push(new Point(c1i));
    if (iet || tei) return coincide;
    const ili = Maths.lessThan(t2i, 0, epsilon);
    const ibw = Maths.between(t2i, 0, 1, false, true, epsilon);
    const tgt = Maths.greaterThan(t2t, 1, epsilon);
    const tbw = Maths.between(t2t, 0, 1, true, false, epsilon);
    if (ili && tbw) coincide.push(this.geometry1.portionOf(0, t2t));
    if (tgt && ibw) coincide.push(this.geometry1.portionOf(t2i, 1));
    if (tgt && ili) coincide.push(this.geometry1.clone());
    if (ibw && tbw) coincide.push(this.geometry2.clone());
    return coincide;
  }

}, (_applyDecoratedDescriptor(_class$i.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$i.prototype, "onSameTrajectory"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$i.prototype, "intersection"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "perspective", [cached], Object.getOwnPropertyDescriptor(_class$i.prototype, "perspective"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "equal", [_dec$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "equal"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "separate", [_dec2$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "separate"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "intersect", [_dec3$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "intersect"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "strike", [_dec4$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "strike"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "contact", [_dec5$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "contact"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "cross", [_dec6$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "cross"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "touch", [_dec7$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "touch"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "block", [_dec8$d], Object.getOwnPropertyDescriptor(_class$i.prototype, "block"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "blockedBy", [_dec9$9], Object.getOwnPropertyDescriptor(_class$i.prototype, "blockedBy"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "connect", [_dec10$4], Object.getOwnPropertyDescriptor(_class$i.prototype, "connect"), _class$i.prototype), _applyDecoratedDescriptor(_class$i.prototype, "coincide", [_dec11$3], Object.getOwnPropertyDescriptor(_class$i.prototype, "coincide"), _class$i.prototype)), _class$i));

var _dec$c, _dec2$c, _dec3$c, _dec4$c, _dec5$c, _dec6$c, _dec7$c, _dec8$c, _dec9$8, _class$h;
let QuadraticBezierBezier = (_dec$c = superPreprocess("handleDegeneration"), _dec2$c = superPreprocess("handleDegeneration"), _dec3$c = superPreprocess("handleDegeneration"), _dec4$c = superPreprocess("handleDegeneration"), _dec5$c = superPreprocess("handleDegeneration"), _dec6$c = superPreprocess("handleDegeneration"), _dec7$c = superPreprocess("handleDegeneration"), _dec8$c = superPreprocess("handleDegeneration"), _dec9$8 = superPreprocess("handleDegeneration"), (_class$h = class QuadraticBezierBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg1 = geometry1.nonDimensionallyDegenerate();
    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg1 instanceof QuadraticBezier && ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new QuadraticBezierQuadraticBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof QuadraticBezier && ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentQuadraticBezier(ndg2, ndg1);
      this.degeneration.inverse = true;
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof Bezier) {
      this.degeneration.relationship = new LineSegmentBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new LineSegmentQuadraticBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentLineSegment(ndg1, ndg2);
      return this;
    }
  }

  intersection() {
    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    const [polyX1, polyY1] = this.geometry1.getPolynomial();
    const [polyX2, polyY2] = this.geometry2.getPolynomial();
    const [[x12, x11, x10], [y12, y11, y10]] = [polyX1, polyY1];
    const [[x23, x22, x21, x20], [y23, y22, y21, y20]] = [polyX2, polyY2];
    const a = x23 * y22 - x22 * y23;
    const b = x23 * y21 - x21 * y23;
    const c0 = x10 * y23 - x23 * y10 + x23 * y20 - x20 * y23;
    const c1 = x11 * y23 - x23 * y11;
    const c2 = x12 * y23 - x23 * y12;
    const d = b;
    const e0 = x10 * y23 - x23 * y10 + x23 * y20 - x20 * y23 + x22 * y21 - x21 * y22;
    const e1 = c1;
    const e2 = c2;
    const f0 = x22 * y20 - x20 * y22 + x10 * y22 - x22 * y10;
    const f1 = x11 * y22 - x22 * y11;
    const f2 = x12 * y22 - x22 * y12;
    const g0 = c0;
    const g1 = c1;
    const g2 = c2;
    const h0 = f0;
    const h1 = f1;
    const h2 = f2;
    const i0 = x10 * y21 - x21 * y10 + x21 * y20 - x20 * y21;
    const i1 = x11 * y21 - x21 * y11;
    const i2 = x12 * y21 - x21 * y12;
    const tPoly = Polynomial.standardize([-c2 * e2 * g2, -c2 * e2 * g1 - c2 * e1 * g2 - c1 * e2 * g2, -c2 * e2 * g0 - c2 * e1 * g1 - c1 * e2 * g1 - c2 * e0 * g2 - c1 * e1 * g2 - c0 * e2 * g2 + b * f2 * g2 + c2 * d * h2 - a * f2 * h2 + a * e2 * i2, -c2 * e1 * g0 - c1 * e2 * g0 - c2 * e0 * g1 - c1 * e1 * g1 - c0 * e2 * g1 + b * f2 * g1 - c1 * e0 * g2 - c0 * e1 * g2 + b * f1 * g2 + c2 * d * h1 - a * f2 * h1 + c1 * d * h2 - a * f1 * h2 + a * e2 * i1 + a * e1 * i2, -c2 * e0 * g0 - c1 * e1 * g0 - c0 * e2 * g0 + b * f2 * g0 - c1 * e0 * g1 - c0 * e1 * g1 + b * f1 * g1 - c0 * e0 * g2 + b * f0 * g2 + c2 * d * h0 - a * f2 * h0 + c1 * d * h1 - a * f1 * h1 + c0 * d * h2 - a * f0 * h2 + a * e2 * i0 + a * e1 * i1 - b * d * i2 + a * e0 * i2, -c1 * e0 * g0 - c0 * e1 * g0 + b * f1 * g0 - c0 * e0 * g1 + b * f0 * g1 + c1 * d * h0 - a * f1 * h0 + c0 * d * h1 - a * f0 * h1 + a * e1 * i0 - b * d * i1 + a * e0 * i1, -c0 * e0 * g0 + b * f0 * g0 + c0 * d * h0 - a * f0 * h0 - b * d * i0 + a * e0 * i0]);
    const curveEpsilon = optioner.options.curveEpsilon;
    const epsilon = optioner.options.epsilon;
    const tRoots = Polynomial.roots(tPoly).map(r => {
      if (Complex.is(r)) {
        if (Maths.equalTo(Complex.imag(r), 0, curveEpsilon)) return Complex.real(r);
        return r;
      }

      return r;
    });
    const tRootsM = Polynomial.rootsMultiplicity(tRoots.filter(Type.isNumber), curveEpsilon);
    const intersection = [];
    const tripleLines2 = this.geometry2.isTripleLines();

    if (tripleLines2) {
      tRootsM.forEach((rm, index) => {
        if (rm.multiplicity === 9) tRootsM[index].multiplicity = 3;
        if (rm.multiplicity === 6) tRootsM[index].multiplicity = 2;
        if (rm.multiplicity === 3) tRootsM[index].multiplicity = 1;
      });
    }

    const tsi = this.geometry2.selfIntersectionExtend();

    if (tsi.length) {
      const csi = this.geometry2.getPointAtTimeExtend(tsi[0]).coordinates;
      tRootsM.forEach((rm, index) => {
        const c = this.geometry1.getPointAtTimeExtend(rm.root).coordinates;

        if (Coordinates.isEqualTo(csi, c, epsilon)) {
          if (rm.multiplicity === 2) {
            tRootsM[index].multiplicity = 1;
            const newRootM = { ...tRootsM[index]
            };
            tRootsM.push(newRootM);
          }

          if (rm.multiplicity === 3) {
            tRootsM[index].multiplicity = 1;
            const newRootM = { ...tRootsM[index],
              multiplicity: 2
            };
            tRootsM.push(newRootM);
          }
        }
      });
    }

    for (let i = 0, l = tRootsM.length; i < l; i++) {
      const t1 = tRootsM[i].root;

      if (Maths.between(t1, 0, 1, false, false, epsilon)) {
        const x = Polynomial.evaluate(polyX1, t1);
        const y = Polynomial.evaluate(polyY1, t1);
        const t2s = tripleLines2 ? this.geometry2.getTimesOfPointExtend([x, y]) : [this.geometry2.getTimeOfPointExtend([x, y])];
        t2s.forEach(t2 => {
          if (Maths.between(t2, 0, 1, false, false, epsilon)) {
            intersection.push({
              c: [x, y],
              t1,
              t2,
              m: tRootsM[i].multiplicity
            });
          }
        });
      }
    }

    return intersection;
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$h.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$h.prototype, "intersection"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "separate", [_dec$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "separate"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "intersect", [_dec2$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "intersect"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "strike", [_dec3$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "strike"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "contact", [_dec4$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "contact"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "cross", [_dec5$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "cross"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "touch", [_dec6$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "touch"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "block", [_dec7$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "block"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "blockedBy", [_dec8$c], Object.getOwnPropertyDescriptor(_class$h.prototype, "blockedBy"), _class$h.prototype), _applyDecoratedDescriptor(_class$h.prototype, "connect", [_dec9$8], Object.getOwnPropertyDescriptor(_class$h.prototype, "connect"), _class$h.prototype)), _class$h));

var _dec$b, _dec2$b, _dec3$b, _dec4$b, _dec5$b, _dec6$b, _dec7$b, _dec8$b, _dec9$7, _dec10$3, _dec11$2, _dec12$1, _class$g;
let BezierBezier = (_dec$b = superPreprocess("handleDegeneration"), _dec2$b = superPreprocess("handleDegeneration"), _dec3$b = superPreprocess("handleDegeneration"), _dec4$b = superPreprocess("handleDegeneration"), _dec5$b = superPreprocess("handleDegeneration"), _dec6$b = superPreprocess("handleDegeneration"), _dec7$b = superPreprocess("handleDegeneration"), _dec8$b = superPreprocess("handleDegeneration"), _dec9$7 = superPreprocess("handleDegeneration"), _dec10$3 = superPreprocess("handleDegeneration"), _dec11$2 = superPreprocess("handleDegeneration"), _dec12$1 = superPreprocess("handleDegeneration"), (_class$g = class BezierBezier extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg1 = geometry1.nonDimensionallyDegenerate();
    const ndg2 = geometry2.nonDimensionallyDegenerate();

    if (ndg1 instanceof Bezier && ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new QuadraticBezierBezier(ndg2, ndg1);
      this.degeneration.inverse = true;
      return this;
    }

    if (ndg1 instanceof Bezier && ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentBezier(ndg2, ndg1);
      this.degeneration.inverse = true;
      return this;
    }

    if (ndg1 instanceof QuadraticBezier && ndg2 instanceof Bezier) {
      this.degeneration.relationship = new QuadraticBezierBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof QuadraticBezier && ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new QuadraticBezierQuadraticBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof QuadraticBezier && ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentQuadraticBezier(ndg2, ndg1);
      this.degeneration.inverse = true;
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof Bezier) {
      this.degeneration.relationship = new LineSegmentBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof QuadraticBezier) {
      this.degeneration.relationship = new LineSegmentQuadraticBezier(ndg1, ndg2);
      return this;
    }

    if (ndg1 instanceof LineSegment && ndg2 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentLineSegment(ndg1, ndg2);
      return this;
    }
  }

  onSameTrajectory() {
    const curveEpsilon = optioner.options.curveEpsilon;
    const if1 = this.geometry1.getImplicitFunctionCoefs();
    const if2 = this.geometry2.getImplicitFunctionCoefs();
    return compareImplicit(if1, if2, curveEpsilon);
  }

  intersection() {
    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    if (this.onSameTrajectory()) return [];
    const [polyX1, polyY1] = this.geometry1.getPolynomial();
    const [polyX2, polyY2] = this.geometry2.getPolynomial();
    const [[x13, x12, x11, x10], [y13, y12, y11, y10]] = [polyX1, polyY1];
    const [[x23, x22, x21, x20], [y23, y22, y21, y20]] = [polyX2, polyY2];
    const a = x13 * y12 - x12 * y13;
    const b = x13 * y11 - x11 * y13;
    const c0 = x13 * y10 - x10 * y13 + x20 * y13 - x13 * y20;
    const c1 = x21 * y13 - x13 * y21;
    const c2 = x22 * y13 - x13 * y22;
    const c3 = x23 * y13 - x13 * y23;
    const d = b;
    const e0 = x13 * y10 - x10 * y13 + x20 * y13 - x13 * y20 + x12 * y11 - x11 * y12;
    const e1 = c1;
    const e2 = c2;
    const e3 = c3;
    const f0 = x12 * y10 - x10 * y12 + x20 * y12 - x12 * y20;
    const f1 = x21 * y12 - x12 * y21;
    const f2 = x22 * y12 - x12 * y22;
    const f3 = x23 * y12 - x12 * y23;
    const g0 = c0;
    const g1 = c1;
    const g2 = c2;
    const g3 = c3;
    const h0 = f0;
    const h1 = f1;
    const h2 = f2;
    const h3 = f3;
    const i0 = x11 * y10 - x10 * y11 + x20 * y11 - x11 * y20;
    const i1 = x21 * y11 - x11 * y21;
    const i2 = x22 * y11 - x11 * y22;
    const i3 = x23 * y11 - x11 * y23;
    const tPoly = Polynomial.standardize([-c3 * e3 * g3, -c3 * e3 * g2 - c3 * e2 * g3 - c2 * e3 * g3, -c3 * e3 * g1 - c3 * e2 * g2 - c2 * e3 * g2 - c3 * e1 * g3 - c2 * e2 * g3 - c1 * e3 * g3, -c3 * e3 * g0 - c3 * e2 * g1 - c2 * e3 * g1 - c3 * e1 * g2 - c2 * e2 * g2 - c1 * e3 * g2 - c3 * e0 * g3 - c2 * e1 * g3 - c1 * e2 * g3 - c0 * e3 * g3 + b * f3 * g3 + c3 * d * h3 - a * f3 * h3 + a * e3 * i3, -c3 * e2 * g0 - c2 * e3 * g0 - c3 * e1 * g1 - c2 * e2 * g1 - c1 * e3 * g1 - c3 * e0 * g2 - c2 * e1 * g2 - c1 * e2 * g2 - c0 * e3 * g2 + b * f3 * g2 - c2 * e0 * g3 - c1 * e1 * g3 - c0 * e2 * g3 + b * f2 * g3 + c3 * d * h2 - a * f3 * h2 + c2 * d * h3 - a * f2 * h3 + a * e3 * i2 + a * e2 * i3, -c3 * e1 * g0 - c2 * e2 * g0 - c1 * e3 * g0 - c3 * e0 * g1 - c2 * e1 * g1 - c1 * e2 * g1 - c0 * e3 * g1 + b * f3 * g1 - c2 * e0 * g2 - c1 * e1 * g2 - c0 * e2 * g2 + b * f2 * g2 - c1 * e0 * g3 - c0 * e1 * g3 + b * f1 * g3 + c3 * d * h1 - a * f3 * h1 + c2 * d * h2 - a * f2 * h2 + c1 * d * h3 - a * f1 * h3 + a * e3 * i1 + a * e2 * i2 + a * e1 * i3, -c3 * e0 * g0 - c2 * e1 * g0 - c1 * e2 * g0 - c0 * e3 * g0 + b * f3 * g0 - c2 * e0 * g1 - c1 * e1 * g1 - c0 * e2 * g1 + b * f2 * g1 - c1 * e0 * g2 - c0 * e1 * g2 + b * f1 * g2 - c0 * e0 * g3 + b * f0 * g3 + c3 * d * h0 - a * f3 * h0 + c2 * d * h1 - a * f2 * h1 + c1 * d * h2 - a * f1 * h2 + c0 * d * h3 - a * f0 * h3 + a * e3 * i0 + a * e2 * i1 + a * e1 * i2 - b * d * i3 + a * e0 * i3, -c2 * e0 * g0 - c1 * e1 * g0 - c0 * e2 * g0 + b * f2 * g0 - c1 * e0 * g1 - c0 * e1 * g1 + b * f1 * g1 - c0 * e0 * g2 + b * f0 * g2 + c2 * d * h0 - a * f2 * h0 + c1 * d * h1 - a * f1 * h1 + c0 * d * h2 - a * f0 * h2 + a * e2 * i0 + a * e1 * i1 - b * d * i2 + a * e0 * i2, -c1 * e0 * g0 - c0 * e1 * g0 + b * f1 * g0 - c0 * e0 * g1 + b * f0 * g1 + c1 * d * h0 - a * f1 * h0 + c0 * d * h1 - a * f0 * h1 + a * e1 * i0 - b * d * i1 + a * e0 * i1, -c0 * e0 * g0 + b * f0 * g0 + c0 * d * h0 - a * f0 * h0 - b * d * i0 + a * e0 * i0]);
    const curveEpsilon = optioner.options.curveEpsilon;
    const epsilon = optioner.options.epsilon;
    const tRoots = Polynomial.roots(tPoly).map(r => {
      if (Complex.is(r)) {
        if (Maths.equalTo(Complex.imag(r), 0, curveEpsilon)) return Complex.real(r);
        return r;
      }

      return r;
    });
    const tRootsM = Polynomial.rootsMultiplicity(tRoots.filter(Type.isNumber), curveEpsilon);
    const intersection = [];
    const tripleLines1 = this.geometry1.isTripleLines();

    if (tripleLines1) {
      tRootsM.forEach((rm, index) => {
        if (rm.multiplicity === 9) tRootsM[index].multiplicity = 3;
        if (rm.multiplicity === 6) tRootsM[index].multiplicity = 2;
        if (rm.multiplicity === 3) tRootsM[index].multiplicity = 1;
      });
    }

    const tsi = this.geometry1.selfIntersectionExtend();

    if (tsi.length) {
      const csi = this.geometry1.getPointAtTimeExtend(tsi[0]).coordinates;
      tRootsM.forEach((rm, index) => {
        const c = this.geometry2.getPointAtTimeExtend(rm.root).coordinates;

        if (Coordinates.isEqualTo(csi, c, epsilon)) {
          if (rm.multiplicity === 2) {
            tRootsM[index].multiplicity = 1;
            const newRootM = { ...tRootsM[index]
            };
            tRootsM.push(newRootM);
          }

          if (rm.multiplicity === 3) {
            tRootsM[index].multiplicity = 1;
            const newRootM = { ...tRootsM[index],
              multiplicity: 2
            };
            tRootsM.push(newRootM);
          }
        }
      });
    }

    for (let i = 0, l = tRootsM.length; i < l; i++) {
      const t2 = tRootsM[i].root;

      if (Maths.between(t2, 0, 1, false, false, epsilon)) {
        const x = Polynomial.evaluate(polyX2, t2);
        const y = Polynomial.evaluate(polyY2, t2);
        const t1s = tripleLines1 ? this.geometry1.getTimesOfPointExtend([x, y]) : [this.geometry1.getTimeOfPointExtend([x, y])];
        t1s.forEach(t1 => {
          if (Maths.between(t1, 0, 1, false, false, epsilon)) {
            intersection.push({
              c: [x, y],
              t1,
              t2,
              m: tRootsM[i].multiplicity
            });
          }
        });
      }
    }

    return intersection;
  }

  perspective() {
    if (!this.onSameTrajectory()) throw new Error("[G]Call `onSameTrajectory` first.");
    const {
      point1Coordinates: c1i,
      point2Coordinates: c1t
    } = this.geometry1;
    const {
      point1Coordinates: c2i,
      point2Coordinates: c2t
    } = this.geometry2;
    let t2i = this.geometry1.getTimeOfPointExtend(c2i);
    let t2t = this.geometry1.getTimeOfPointExtend(c2t);
    const tsi = this.geometry1.selfIntersectionExtend();
    const csi = tsi.length ? this.geometry1.getPointAtTimeExtend(tsi[0]).coordinates : undefined;
    const epsilon = optioner.options.epsilon;

    if (tsi.length) {
      const d1 = Maths.equalTo(t2i, tsi[0], epsilon);
      const d2 = Maths.equalTo(t2t, tsi[0], epsilon);

      if (d1 && !d2 || !d1 && d2) {
        let s = NaN;
        let r = NaN;
        if (d1) [s, r] = [t2i, t2t];
        if (d2) [s, r] = [t2t, t2i];

        if (Maths.between(r, tsi[0], tsi[1], false, false, epsilon)) {
          const midT1 = (tsi[0] + r) / 2;
          const midT2 = (tsi[1] + r) / 2;
          const midD1 = this.geometry2.isPointOn(this.geometry1.getPointAtTimeExtend(midT1));
          const midD2 = this.geometry2.isPointOn(this.geometry1.getPointAtTimeExtend(midT2));
          if (midD1) s = tsi[0];
          if (midD2) s = tsi[1];
        } else if (Maths.lessThan(r, tsi[0], epsilon)) {
          const midT = (tsi[0] + tsi[1]) / 2;
          const midD = this.geometry2.isPointOn(this.geometry1.getPointAtTimeExtend(midT));
          if (midD) s = tsi[1];else s = tsi[0];
        } else if (Maths.greaterThan(r, tsi[1], epsilon)) {
          const midT = (tsi[0] + tsi[1]) / 2;
          const midD = this.geometry2.isPointOn(this.geometry1.getPointAtTimeExtend(midT));
          if (midD) s = tsi[0];else s = tsi[1];
        }

        if (d1) [t2i, t2t] = [s, r];
        if (d2) [t2t, t2i] = [s, r];
      }

      if (d1 && d2) {
        t2i = tsi[0];
        t2t = tsi[1];
      }
    }

    const dt = t2i > t2t;
    return {
      c1i,
      c1t,
      c2i: dt ? c2t : c2i,
      c2t: dt ? c2i : c2t,
      t2i: dt ? t2t : t2i,
      t2t: dt ? t2i : t2t,
      csi,
      tsi,
      d1si1: tsi.length ? Maths.between(tsi[0], 0, 1, false, false, epsilon) : false,
      d1si2: tsi.length ? Maths.between(tsi[1], 0, 1, false, false, epsilon) : false,
      d2si1: tsi.length ? Maths.between(tsi[0], t2i, t2t, false, false, epsilon) : false,
      d2si2: tsi.length ? Maths.between(tsi[1], t2i, t2t, false, false, epsilon) : false
    };
  }

  equal() {
    if (!this.onSameTrajectory()) return false;
    const {
      t2i,
      t2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return Maths.equalTo(t2i, 0, epsilon) && Maths.equalTo(t2t, 1, epsilon);
  }

  separate() {
    if (!this.onSameTrajectory()) {
      return this.intersection().length === 0;
    }

    const epsilon = optioner.options.epsilon;
    const {
      tsi,
      d1si1,
      d1si2,
      d2si1,
      d2si2,
      t2i,
      t2t
    } = this.perspective();
    if (tsi.length && (d1si1 || d1si2) && (d2si1 || d2si2)) return false;
    return Maths.greaterThan(t2i, 1, epsilon) || Maths.lessThan(t2t, 0, epsilon);
  }

  intersect() {
    if (!this.onSameTrajectory()) {
      return this.intersection().map(i => new Point(i.c));
    }

    const {
      tsi,
      d1si1,
      d1si2,
      d2si1,
      d2si2,
      csi
    } = this.perspective();
    if (tsi.length && (d1si1 || d1si2) && (d2si1 || d2si2)) return [new Point(csi)];
    return [];
  }

  strike() {
    if (!this.onSameTrajectory()) {
      return this.intersection().filter(i => i.m % 2 == 1).map(i => new Point(i.c));
    }

    const {
      tsi,
      d1si1,
      d1si2,
      d2si1,
      d2si2,
      csi
    } = this.perspective();
    if (tsi.length && (d1si1 || d1si2) && (d2si1 || d2si2)) return [new Point(csi)];
    return [];
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;

    if (!this.onSameTrajectory()) {
      return this.intersection().filter(i => i.m % 2 == 1 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
    }

    const {
      tsi,
      d1si1,
      d1si2,
      d2si1,
      d2si2,
      t2i,
      t2t,
      csi
    } = this.perspective();

    if (tsi.length && (d1si1 || d1si2) && (d2si1 || d2si2)) {
      const notAtEnd1 = d1si1 && Maths.between(tsi[0], 0, 1, true, true, epsilon) || d1si2 && Maths.between(tsi[1], 0, 1, true, true, epsilon);
      const notAtEnd2 = d2si1 && Maths.between(tsi[0], t2i, t2t, true, true, epsilon) || d1si2 && Maths.between(tsi[1], t2i, t2t, true, true, epsilon);
      if (notAtEnd1 && notAtEnd2) return [new Point(csi)];
    }

    return [];
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon) && Maths.between(i.t2, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;

    if (!this.onSameTrajectory()) {
      return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
    }

    const {
      tsi,
      d1si1,
      d1si2,
      d2si1,
      d2si2,
      csi,
      t2i,
      t2t
    } = this.perspective();

    if (tsi.length) {
      if (d2si1 && !d2si2 && !d1si1 && d1si2) {
        if ((Maths.equalTo(tsi[0], t2i, epsilon) || Maths.equalTo(tsi[0], t2t, epsilon)) && !(Maths.equalTo(tsi[1], 0, epsilon) || Maths.equalTo(tsi[1], 1, epsilon))) {
          return [new Point(csi)];
        }
      }

      if (!d2si1 && d2si2 && d1si1 && !d1si2) {
        if ((Maths.equalTo(tsi[1], t2i, epsilon) || Maths.equalTo(tsi[1], t2t, epsilon)) && !(Maths.equalTo(tsi[0], 0, epsilon) || Maths.equalTo(tsi[0], 1, epsilon))) {
          return [new Point(csi)];
        }
      }
    }

    return [];
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;

    if (!this.onSameTrajectory()) {
      return this.intersection().filter(i => !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
    }

    const {
      tsi,
      d1si1,
      d1si2,
      d2si1,
      d2si2,
      csi,
      t2i,
      t2t
    } = this.perspective();

    if (tsi.length) {
      if (d1si1 && !d1si2 && !d2si1 && d2si2) {
        if ((Maths.equalTo(tsi[0], 0, epsilon) || Maths.equalTo(tsi[0], 1, epsilon)) && !(Maths.equalTo(tsi[1], t2i, epsilon) || Maths.equalTo(tsi[1], t2t, epsilon))) {
          return [new Point(csi)];
        }
      }

      if (!d1si1 && d1si2 && d2si1 && !d2si2) {
        if ((Maths.equalTo(tsi[1], 0, epsilon) || Maths.equalTo(tsi[1], 1, epsilon)) && !(Maths.equalTo(tsi[0], t2i, epsilon) || Maths.equalTo(tsi[0], t2t, epsilon))) {
          return [new Point(csi)];
        }
      }
    }

    return [];
  }

  connect() {
    const epsilon = optioner.options.epsilon;

    if (!this.onSameTrajectory()) {
      return this.intersection().filter(i => (Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon)) && (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
    }

    const {
      tsi,
      d1si1,
      d1si2,
      d2si1,
      d2si2,
      csi,
      t2i,
      t2t
    } = this.perspective();

    if (tsi.length) {
      if (d1si1 && !d1si2 && !d2si1 && d2si2) {
        if ((Maths.equalTo(tsi[0], 0, epsilon) || Maths.equalTo(tsi[0], 1, epsilon)) && (Maths.equalTo(tsi[1], t2i, epsilon) || Maths.equalTo(tsi[1], t2t, epsilon))) {
          return [new Point(csi)];
        }
      }

      if (!d1si1 && d1si2 && d2si1 && !d2si2) {
        if ((Maths.equalTo(tsi[1], 0, epsilon) || Maths.equalTo(tsi[1], 1, epsilon)) && (Maths.equalTo(tsi[0], t2i, epsilon) || Maths.equalTo(tsi[0], t2t, epsilon))) {
          return [new Point(csi)];
        }
      }
    }

    return [];
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    if (this.geometry1.isTripleLines()) return [];
    const {
      t2i,
      t2t,
      c1i,
      c1t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    const coincide = [];
    const iet = Maths.equalTo(t2i, 1, epsilon);
    const tei = Maths.equalTo(t2t, 0, epsilon);
    if (iet) coincide.push(new Point(c1t));
    if (tei) coincide.push(new Point(c1i));
    if (iet || tei) return coincide;
    const ili = Maths.lessThan(t2i, 0, epsilon);
    const ibw = Maths.between(t2i, 0, 1, false, true, epsilon);
    const tgt = Maths.greaterThan(t2t, 1, epsilon);
    const tbw = Maths.between(t2t, 0, 1, true, false, epsilon);
    if (ili && tbw) coincide.push(this.geometry1.portionOf(0, t2t));
    if (tgt && ibw) coincide.push(this.geometry1.portionOf(t2i, 1));
    if (tgt && ili) coincide.push(this.geometry1.clone());
    if (ibw && tbw) coincide.push(this.geometry2.clone());
    return coincide;
  }

}, (_applyDecoratedDescriptor(_class$g.prototype, "onSameTrajectory", [_dec$b, cached], Object.getOwnPropertyDescriptor(_class$g.prototype, "onSameTrajectory"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$g.prototype, "intersection"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "perspective", [cached], Object.getOwnPropertyDescriptor(_class$g.prototype, "perspective"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "equal", [_dec2$b], Object.getOwnPropertyDescriptor(_class$g.prototype, "equal"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "separate", [_dec3$b], Object.getOwnPropertyDescriptor(_class$g.prototype, "separate"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "intersect", [_dec4$b], Object.getOwnPropertyDescriptor(_class$g.prototype, "intersect"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "strike", [_dec5$b], Object.getOwnPropertyDescriptor(_class$g.prototype, "strike"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "contact", [_dec6$b], Object.getOwnPropertyDescriptor(_class$g.prototype, "contact"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "cross", [_dec7$b], Object.getOwnPropertyDescriptor(_class$g.prototype, "cross"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "touch", [_dec8$b], Object.getOwnPropertyDescriptor(_class$g.prototype, "touch"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "block", [_dec9$7], Object.getOwnPropertyDescriptor(_class$g.prototype, "block"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "blockedBy", [_dec10$3], Object.getOwnPropertyDescriptor(_class$g.prototype, "blockedBy"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "connect", [_dec11$2], Object.getOwnPropertyDescriptor(_class$g.prototype, "connect"), _class$g.prototype), _applyDecoratedDescriptor(_class$g.prototype, "coincide", [_dec12$1], Object.getOwnPropertyDescriptor(_class$g.prototype, "coincide"), _class$g.prototype)), _class$g));

var _class$f;
let EllipseEllipse = (_class$f = class EllipseEllipse extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
  }

  onSameTrajectory() {
    const epsilon = optioner.options.epsilon;
    const if1 = this.geometry1.getImplicitFunctionCoefs();
    const if2 = this.geometry2.getImplicitFunctionCoefs();
    return compareImplicit(if1, if2, epsilon);
  }

  intersection() {
    if (this.onSameTrajectory()) return [];
    const {
      radiusX: rx,
      radiusY: ry,
      centerX: cx,
      centerY: cy,
      rotation: phi
    } = this.geometry1;
    const [a, b, c, d, e, f] = this.geometry2.getImplicitFunctionCoefs();
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const [px1, px2, px3] = [rx * cosPhi, -ry * sinPhi, cx];
    const [py1, py2, py3] = [rx * sinPhi, ry * cosPhi, cy];
    const px12 = px1 ** 2;
    const px22 = px2 ** 2;
    const px32 = px3 ** 2;
    const py12 = py1 ** 2;
    const py22 = py2 ** 2;
    const py32 = py3 ** 2;
    let tPoly = [f - d * px1 + a * px12 + d * px3 - 2 * a * px1 * px3 + a * px32 - e * py1 + b * px1 * py1 - b * px3 * py1 + c * py12 + e * py3 - b * px1 * py3 + b * px3 * py3 - 2 * c * py1 * py3 + c * py32, 2 * d * px2 - 4 * a * px1 * px2 + 4 * a * px2 * px3 - 2 * b * px2 * py1 + 2 * e * py2 - 2 * b * px1 * py2 + 2 * b * px3 * py2 - 4 * c * py1 * py2 + 2 * b * px2 * py3 + 4 * c * py2 * py3, 2 * f - 2 * a * px12 + 4 * a * px22 + 2 * d * px3 + 2 * a * px32 - 2 * b * px1 * py1 - 2 * c * py12 + 4 * b * px2 * py2 + 4 * c * py22 + 2 * e * py3 + 2 * b * px3 * py3 + 2 * c * py32, 2 * d * px2 + 4 * a * px1 * px2 + 4 * a * px2 * px3 + 2 * b * px2 * py1 + 2 * e * py2 + 2 * b * px1 * py2 + 2 * b * px3 * py2 + 4 * c * py1 * py2 + 2 * b * px2 * py3 + 4 * c * py2 * py3, f + d * px1 + a * px12 + d * px3 + 2 * a * px1 * px3 + a * px32 + e * py1 + b * px1 * py1 + b * px3 * py1 + c * py12 + e * py3 + b * px1 * py3 + b * px3 * py3 + 2 * c * py1 * py3 + c * py32];
    let intersectionAtPhi = undefined;

    if (tPoly[0] === 0) {
      intersectionAtPhi = {
        multiplicity: 1,
        root: Maths.tan(Maths.PI / 2)
      };

      if (tPoly[1] === 0) {
        intersectionAtPhi.multiplicity++;
      }
    }

    tPoly = Polynomial.standardize(tPoly);
    const epsilon = optioner.options.epsilon;
    const curveEpsilon = optioner.options.curveEpsilon;
    const intersection = [];
    const tRoots = Polynomial.roots(tPoly).map(r => {
      if (Complex.is(r)) {
        const atan = Complex.atan(r);
        if (Maths.equalTo(Complex.imag(atan), 0, curveEpsilon)) return Maths.tan(Complex.real(atan));
        return r;
      }

      return r;
    });
    const tRootsM = Polynomial.rootsMultiplicity(tRoots.filter(Type.isNumber), epsilon);
    if (intersectionAtPhi !== undefined) tRootsM.push(intersectionAtPhi);
    const cosAndSins = tRootsM.map(rm => {
      const t = rm.root;
      const cosTheta = (1 - t ** 2) / (1 + t ** 2);
      const sinTheta = 2 * t / (1 + t ** 2);
      return {
        multiplicity: rm.multiplicity,
        root: [cosTheta, sinTheta]
      };
    });

    for (let i = 0, l = cosAndSins.length; i < l; i++) {
      const [cosTheta, sinTheta] = cosAndSins[i].root;
      const x = px1 * cosTheta + px2 * sinTheta + px3;
      const y = py1 * cosTheta + py2 * sinTheta + py3;
      const a1 = Angle.simplify(Maths.atan2(sinTheta, cosTheta));
      const a2 = this.geometry2.getAngleOfPoint([x, y]);
      intersection.push({
        c: [x, y],
        a1,
        a2,
        m: cosAndSins[i].multiplicity
      });
    }

    return intersection;
  }

  equal() {
    return this.onSameTrajectory();
  }

  separate() {
    if (!this.geometry1.isPointOutside(this.geometry2.centerCoordinates)) return false;
    if (!this.geometry2.isPointOutside(this.geometry1.centerCoordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  contain() {
    if (!this.geometry1.isPointInside(this.geometry2.centerCoordinates)) return false;
    if (this.onSameTrajectory()) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  containedBy() {
    if (!this.geometry2.isPointInside(this.geometry1.centerCoordinates)) return false;
    if (this.onSameTrajectory()) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  touch() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    return [this.geometry1.clone()];
  }

}, (_applyDecoratedDescriptor(_class$f.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$f.prototype, "onSameTrajectory"), _class$f.prototype), _applyDecoratedDescriptor(_class$f.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$f.prototype, "intersection"), _class$f.prototype)), _class$f);

var _dec$a, _dec2$a, _dec3$a, _dec4$a, _dec5$a, _dec6$a, _dec7$a, _dec8$a, _dec9$6, _dec10$2, _dec11$1, _class$e;
let ArcArc = (_dec$a = superPreprocess("handleDegeneration"), _dec2$a = superPreprocess("handleDegeneration"), _dec3$a = superPreprocess("handleDegeneration"), _dec4$a = superPreprocess("handleDegeneration"), _dec5$a = superPreprocess("handleDegeneration"), _dec6$a = superPreprocess("handleDegeneration"), _dec7$a = superPreprocess("handleDegeneration"), _dec8$a = superPreprocess("handleDegeneration"), _dec9$6 = superPreprocess("handleDegeneration"), _dec10$2 = superPreprocess("handleDegeneration"), _dec11$1 = superPreprocess("handleDegeneration"), (_class$e = class ArcArc extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.supRelationship = new EllipseEllipse(this.geometry1.toEllipse(), this.geometry2.toEllipse());
  }

  onSameTrajectory() {
    var _this$supRelationship, _this$supRelationship2;

    return (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.onSameTrajectory()) != null ? _this$supRelationship : false;
  }

  intersection() {
    var _this$supRelationship3, _this$supRelationship4;

    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    if (this.onSameTrajectory()) return [];
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship3 = (_this$supRelationship4 = this.supRelationship) == null ? void 0 : _this$supRelationship4.intersection()) != null ? _this$supRelationship3 : [];
    return intersection.filter(i => Angle.between(i.a1, a1i, a1t, true, false, false, epsilon) && Angle.between(i.a2, a2i, a2t, true, false, false, epsilon));
  }

  perspective() {
    const [a1i, a1t] = this.geometry1.getStartEndAngles();
    const [a2i, a2t] = this.geometry2.getStartEndAngles();
    const {
      point1Coordinates: c1i,
      point2Coordinates: c1t,
      positive: p1
    } = this.geometry1;
    const {
      point1Coordinates: c2i,
      point2Coordinates: c2t,
      positive: p2
    } = this.geometry2;
    return {
      c1i: p1 ? c1i : c1t,
      c1t: p1 ? c1t : c1i,
      c2i: p2 ? c2i : c2t,
      c2t: p2 ? c2t : c2i,
      a1i: p1 ? a1i : a1t,
      a1t: p1 ? a1t : a1i,
      a2i: p2 ? a2i : a2t,
      a2t: p2 ? a2t : a2i
    };
  }

  equal() {
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return this.onSameTrajectory() && Maths.equalTo(a1i, a2i, epsilon) && Maths.equalTo(a1t, a2t, epsilon);
  }

  separate() {
    if (!this.onSameTrajectory()) return this.intersection().length === 0;
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    const dt = a1i < a1t === a2i < a2t;

    if (dt) {
      return Maths.greaterThan(a2i, a1t, epsilon) || Maths.lessThan(a2t, a1i, epsilon);
    } else {
      return Maths.greaterThan(a2i, a1t, epsilon) && Maths.lessThan(a2t, a1i, epsilon);
    }
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Angle.between(i.a1, a1i, a1t, true, true, true, epsilon) && Angle.between(i.a2, a2i, a2t, true, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Angle.between(i.a1, a1i, a1t, true, true, true, epsilon) && Angle.between(i.a2, a2i, a2t, true, true, true, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Angle.equalTo(i.a2, a2i, epsilon) || Angle.equalTo(i.a2, a2t, epsilon)) && !(Angle.equalTo(i.a1, a1i, epsilon) || Angle.equalTo(i.a1, a1t, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Angle.equalTo(i.a1, a1i, epsilon) || Angle.equalTo(i.a1, a1t, epsilon)) && !(Angle.equalTo(i.a2, a2i, epsilon) || Angle.equalTo(i.a2, a2t, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const {
      a1i,
      a1t,
      a2i,
      a2t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Angle.equalTo(i.a1, a1i, epsilon) || Angle.equalTo(i.a1, a1t, epsilon)) && (Angle.equalTo(i.a2, a2i, epsilon) || Angle.equalTo(i.a2, a2t, epsilon))).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    const {
      a1i,
      a1t,
      a2i,
      a2t,
      c1i,
      c1t
    } = this.perspective();
    const epsilon = optioner.options.epsilon;
    const coincide = [];
    const iet = Angle.equalTo(a2i, a1t, epsilon);
    const tei = Angle.equalTo(a2t, a1i, epsilon);
    if (iet) coincide.push(new Point(c1t));
    if (tei) coincide.push(new Point(c1i));
    const dt = a1i < a1t === a2i < a2t;
    const ili = dt ? Maths.lessThan(a2i, a1i, epsilon) : Maths.greaterThan(a2i, a1t, epsilon);
    const ibw = Angle.between(a2i, a1i, a1t, true, false, true, epsilon);
    const tgt = dt ? Maths.greaterThan(a2t, a1t, epsilon) : Maths.lessThan(a2t, a1i, epsilon);
    const tbw = Angle.between(a2t, a1i, a1t, true, true, false, epsilon);
    const ellipse = this.geometry1.toEllipse();

    if (dt) {
      if (ili && tbw) coincide.push(ellipse.getArcBetweenAngle(a1i, a2t, true));
      if (tgt && ibw) coincide.push(ellipse.getArcBetweenAngle(a2i, a1t, true));
      if (tgt && ili) coincide.push(this.geometry1.clone());
      if (ibw && tbw) coincide.push(this.geometry2.clone());
    } else {
      if (ili && tbw) coincide.push(ellipse.getArcBetweenAngle(a1i, a2t, true));
      if (tgt && ibw) coincide.push(ellipse.getArcBetweenAngle(a2i, a1t, true));
      if (ibw && tbw) coincide.push(ellipse.getArcBetweenAngle(a1i, a2t), ellipse.getArcBetweenAngle(a2i, a1t));
    }

    return coincide;
  }

}, (_applyDecoratedDescriptor(_class$e.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "onSameTrajectory"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "intersection"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "perspective", [cached], Object.getOwnPropertyDescriptor(_class$e.prototype, "perspective"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "equal", [_dec$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "equal"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "separate", [_dec2$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "separate"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "intersect", [_dec3$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "intersect"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "strike", [_dec4$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "strike"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "contact", [_dec5$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "contact"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "cross", [_dec6$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "cross"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "touch", [_dec7$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "touch"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "block", [_dec8$a], Object.getOwnPropertyDescriptor(_class$e.prototype, "block"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "blockedBy", [_dec9$6], Object.getOwnPropertyDescriptor(_class$e.prototype, "blockedBy"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "connect", [_dec10$2], Object.getOwnPropertyDescriptor(_class$e.prototype, "connect"), _class$e.prototype), _applyDecoratedDescriptor(_class$e.prototype, "coincide", [_dec11$1], Object.getOwnPropertyDescriptor(_class$e.prototype, "coincide"), _class$e.prototype)), _class$e));

var _class$d;
let LineCircle = (_class$d = class LineCircle extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
  }

  intersection() {
    const {
      radius: r,
      centerCoordinates: cc
    } = this.geometry2;
    const pc = this.geometry1.getClosestPointFrom(cc).coordinates;
    const sd = Vector2.squaredMagnitude(Vector2.from(cc, pc));
    const r2 = r ** 2;
    const epsilon = optioner.options.epsilon;
    const intersection = [];

    if (Maths.equalTo(sd, r2, epsilon)) {
      intersection.push({
        c: pc,
        m: 2
      });
    }

    if (Maths.lessThan(sd, r2, epsilon)) {
      const di = Maths.sqrt(r ** 2 - sd);
      const angle = this.geometry1.angle;
      const v1 = Vector2.from2(angle, di);
      const v2 = Vector2.from2(angle - Maths.PI, di);
      intersection.push({
        c: Vector2.add(pc, v1),
        m: 1
      }, {
        c: Vector2.add(pc, v2),
        m: 1
      });
    }

    return intersection;
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  touch() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$d.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$d.prototype, "intersection"), _class$d.prototype)), _class$d);

var _dec$9, _dec2$9, _dec3$9, _dec4$9, _dec5$9, _dec6$9, _dec7$9, _dec8$9, _dec9$5, _class$c;
let LineSegmentArc = (_dec$9 = superPreprocess("handleDegeneration"), _dec2$9 = superPreprocess("handleDegeneration"), _dec3$9 = superPreprocess("handleDegeneration"), _dec4$9 = superPreprocess("handleDegeneration"), _dec5$9 = superPreprocess("handleDegeneration"), _dec6$9 = superPreprocess("handleDegeneration"), _dec7$9 = superPreprocess("handleDegeneration"), _dec8$9 = superPreprocess("handleDegeneration"), _dec9$5 = superPreprocess("handleDegeneration"), (_class$c = class LineSegmentArc extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.supRelationship = new LineEllipse(geometry1.toLine(), geometry2.toEllipse());
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const positive = this.geometry2.positive;
    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.map(i => {
      return { ...i,
        t1: this.geometry1.getTimeOfPointExtend(i.c)
      };
    }).filter(i => Maths.between(i.t1, 0, 1, false, false, epsilon) && Angle.between(i.a2, sa, ea, positive, false, false, epsilon));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    return this.intersection().filter(i => i.m % 2 === 1 && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    return this.intersection().filter(i => i.m % 2 === 0 && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    return this.intersection().filter(i => (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    const [sa, ea] = this.geometry2.getStartEndAngles();
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$c.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$c.prototype, "intersection"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "separate", [_dec$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "separate"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "intersect", [_dec2$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "intersect"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "strike", [_dec3$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "strike"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "contact", [_dec4$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "contact"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "cross", [_dec5$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "cross"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "touch", [_dec6$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "touch"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "block", [_dec7$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "block"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "blockedBy", [_dec8$9], Object.getOwnPropertyDescriptor(_class$c.prototype, "blockedBy"), _class$c.prototype), _applyDecoratedDescriptor(_class$c.prototype, "connect", [_dec9$5], Object.getOwnPropertyDescriptor(_class$c.prototype, "connect"), _class$c.prototype)), _class$c));

const TEST_RAY_OFFSET = 2 ** -22;
class EndpointIntersection {
  _segmentData(segment, inOrOut) {
    const param = inOrOut === "in" ? segment instanceof Arc ? segment.getStartEndAngles()[1] : 1 : segment instanceof Arc ? segment.getStartEndAngles()[0] : 0;
    let vec = (segment instanceof Arc ? segment.getTangentVectorAtAngle(param) : segment.getTangentVectorAtTime(param)).coordinates;
    if (inOrOut === "in") vec = Vector2.negative(vec);
    return {
      segment,
      inOrOut,
      isLinear: this._isLinear(segment),
      param,
      vec
    };
  }

  _isLinear(segment) {
    if (segment instanceof LineSegment) return true;

    if (segment instanceof Bezier || segment instanceof QuadraticBezier) {
      const ndg = segment.nonDimensionallyDegenerate();
      return ndg instanceof LineSegment;
    }

    return false;
  }

  _rayRotation(intersection, p1, p2, curvatureRotationResult) {
    if (curvatureRotationResult !== -2 && curvatureRotationResult !== 2) throw new Error("[G]In case, we are stupid.");
    const tangentAngle = Vector2.angle(p1.vec);
    const normalAngle = tangentAngle + Maths.sign(curvatureRotationResult) * Maths.PI / 2;
    const rayCoordinates = Vector2.add(intersection, Vector2.from2(normalAngle, TEST_RAY_OFFSET));
    const ray = new Ray(rayCoordinates, tangentAngle);
    if (p1.segment instanceof LineSegment) throw new Error("[G]Impossible.");
    if (p2.segment instanceof LineSegment) throw new Error("[G]Impossible.");

    if (p1.segment instanceof Bezier && p2.segment instanceof Bezier) {
      if (new BezierBezier(p1.segment, p2.segment).onSameTrajectory()) return 0;
    }

    if (p1.segment instanceof QuadraticBezier && p2.segment instanceof QuadraticBezier) {
      if (new QuadraticBezierQuadraticBezier(p1.segment, p2.segment).onSameTrajectory()) return 0;
    }

    if (p1.segment instanceof Arc && p2.segment instanceof Arc) {
      if (new ArcArc(p1.segment, p2.segment).onSameTrajectory()) return 0;
    }

    const inter1 = (p1.segment instanceof Bezier ? new RayBezier(ray, p1.segment) : p1.segment instanceof QuadraticBezier ? new RayQuadraticBezier(ray, p1.segment) : new RayArc(ray, p1.segment)).intersection().map(i => ({
      c: i.c,
      w: 1
    }));
    const inter2 = (p2.segment instanceof Bezier ? new RayBezier(ray, p2.segment) : p2.segment instanceof QuadraticBezier ? new RayQuadraticBezier(ray, p2.segment) : new RayArc(ray, p2.segment)).intersection().map(i => ({
      c: i.c,
      w: 2
    }));
    if (inter1.length === 0) throw new Error("[G]The segment is too tiny to intersect with.");
    if (inter2.length === 0) throw new Error("[G]The segment is too tiny to intersect with.");
    const inters = Utility.sortBy([...inter1, ...inter2], [i => Vector2.squaredMagnitude(Vector2.from(rayCoordinates, i.c))]);

    if (inters[0].w === 1) {
      return -(curvatureRotationResult / 2);
    } else {
      return curvatureRotationResult / 2;
    }
  }

  _vectorRotation(p1, p2) {
    const cp = Vector2.cross(p1.vec, p2.vec);
    const dp = Vector2.dot(p1.vec, p2.vec);
    return cp === 0 ? dp > 0 ? 0 : 1 : cp > 0 ? 1 : -1;
  }

  _curvatureRotation(p1, p2, vectorRotationResult) {
    if (vectorRotationResult !== 0) throw new Error("[G]In case, we are stupid.");
    let curvature1 = !p1.isLinear ? p1.segment instanceof Arc ? p1.segment.getCurvatureAtAngle(p1.param) : p1.segment.getCurvatureAtTime(p1.param) : 0;
    let curvature2 = !p2.isLinear ? p2.segment instanceof Arc ? p2.segment.getCurvatureAtAngle(p2.param) : p2.segment.getCurvatureAtTime(p2.param) : 0;
    if (p1.inOrOut === "in") curvature1 = -curvature1;
    if (p2.inOrOut === "in") curvature2 = -curvature2;
    const c1Sign = Maths.sign(curvature1);
    const c2Sign = Maths.sign(curvature2);

    if (c1Sign === 0 && c2Sign === 0) {
      return vectorRotationResult;
    }

    if (c1Sign === 0 && c2Sign > 0) {
      return 1;
    }

    if (c1Sign === 0 && c2Sign < 0) {
      return -1;
    }

    if (c1Sign > 0 && c2Sign === 0) {
      return -1;
    }

    if (c1Sign < 0 && c2Sign === 0) {
      return 1;
    }

    if (c1Sign > 0 && c2Sign > 0) {
      return 2;
    }

    if (c1Sign < 0 && c2Sign < 0) {
      return -2;
    }

    if (c1Sign < 0 && c2Sign > 0) {
      return 1;
    }

    if (c1Sign > 0 && c2Sign < 0) {
      return -1;
    }

    throw new Error("[G]Impossible.");
  }

  _rotation(intersection, p1, p2) {
    let p1ToP2 = this._vectorRotation(p1, p2);

    if (p1ToP2 !== 0) return p1ToP2;
    p1ToP2 = this._curvatureRotation(p1, p2, p1ToP2);
    if (p1ToP2 !== -2 && p1ToP2 !== 2) return p1ToP2;
    p1ToP2 = this._rayRotation(intersection, p1, p2, p1ToP2);
    return p1ToP2;
  }

  determine(intersection, aInSegment, aOutSegment, bInSegment, bOutSegment) {
    const aInData = this._segmentData(aInSegment, "in");

    const aOutData = this._segmentData(aOutSegment, "out");

    const bInData = this._segmentData(bInSegment, "in");

    const bOutData = this._segmentData(bOutSegment, "out");

    const aInToBIn = this._rotation(intersection, aInData, bInData);

    const aInToBOut = this._rotation(intersection, aInData, bOutData);

    const aOutToBIn = this._rotation(intersection, aOutData, bInData);

    const aOutToBOut = this._rotation(intersection, aOutData, bOutData);

    const aInToAOut = this._rotation(intersection, aInData, aOutData);

    const bIntoBOut = this._rotation(intersection, bInData, bOutData);

    if (aInToBIn === 0 || aInToBOut === 0 || aOutToBIn === 0 || aOutToBOut === 0) return "coincide";
    if (aInToAOut === 0 || bIntoBOut === 0) return "touch";
    return (aInToBIn === -bIntoBOut && aInToBOut === bIntoBOut) !== (aOutToBIn === -bIntoBOut && aOutToBOut === bIntoBOut) ? "cross" : "touch";
  }

}

var _dec$8, _dec2$8, _dec3$8, _dec4$8, _dec5$8, _dec6$8, _dec7$8, _dec8$8, _class$b;
let LinePolygon = (_dec$8 = superPreprocess("handleDegeneration"), _dec2$8 = superPreprocess("handleDegeneration"), _dec3$8 = superPreprocess("handleDegeneration"), _dec4$8 = superPreprocess("handleDegeneration"), _dec5$8 = superPreprocess("handleDegeneration"), _dec6$8 = superPreprocess("handleDegeneration"), _dec7$8 = superPreprocess("handleDegeneration"), _dec8$8 = superPreprocess("handleDegeneration"), (_class$b = class LinePolygon extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.segments2 = void 0;
    this.subRelationships = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.segments2 = geometry2.getSegments(true);
    this.segments2.forEach((seg, index) => {
      this.subRelationships.push({
        relationship: new LineLineSegment(geometry1, seg),
        index2: index
      });
    });
  }

  separate() {
    return this.subRelationships.every(sub => sub.relationship.separate());
  }

  intersect() {
    return this.uniqCoordinates_(this.subRelationships.reduce((acc, sub) => {
      acc.push(...sub.relationship.intersection().map(i => i.c));
      return acc;
    }, [])).map(c => new Point(c));
  }

  _mixPredicate() {
    const epsilon = optioner.options.epsilon;
    const angle = this.geometry1.angle;
    const ei = new EndpointIntersection();
    const commonStrike = [];
    const endpointStrike = [];
    const endpointContact = [];
    const commonCross = [];
    const endpointCross = [];
    const endpointTouch = [];
    this.subRelationships.forEach(sub => {
      sub.relationship.intersection().forEach(i => {
        const t2Is0 = Maths.equalTo(i.t2, 0, epsilon);
        const t2Is1 = Maths.equalTo(i.t2, 1, epsilon);

        if (!t2Is0 && !t2Is1) {
          commonStrike.push(i.c);
          commonCross.push(i.c);
          return;
        }

        let aIn;
        let aOut;
        let bIn;
        let bOut;
        const prev2 = this.segments2[prev(sub.index2, this.segments2.length, this.geometry2.closed)];
        const next2 = this.segments2[next(sub.index2, this.segments2.length, this.geometry2.closed)];
        const curr2 = this.segments2[sub.index2];
        const atEnd2 = t2Is0 && prev2 === undefined || t2Is1 && next2 === undefined;

        if (atEnd2) {
          commonStrike.push(i.c);
          return;
        }

        [aIn, aOut] = [new LineSegment(Vector2.add(i.c, Vector2.from2(angle, -1)), i.c), new LineSegment(i.c, Vector2.add(i.c, Vector2.from2(angle, 1)))];

        if (t2Is0) {
          [bIn, bOut] = [prev2, curr2];
        } else {
          [bIn, bOut] = [curr2, next2];
        }

        const det = ei.determine(i.c, aIn, aOut, bIn, bOut);

        if (det === "cross") {
          endpointStrike.push(i.c);
          endpointCross.push(i.c);
        }

        if (det === "touch") {
          endpointContact.push(i.c);
          endpointTouch.push(i.c);
        }
      });
    });
    return {
      strike: this.uniqCoordinates_([...commonStrike, ...endpointStrike]),
      contact: this.uniqCoordinates_(endpointContact),
      cross: this.uniqCoordinates_([...commonCross, ...endpointCross]),
      touch: this.uniqCoordinates_(endpointTouch)
    };
  }

  strike() {
    return this._mixPredicate().strike.map(c => new Point(c));
  }

  contact() {
    return this._mixPredicate().contact.map(c => new Point(c));
  }

  cross() {
    return this._mixPredicate().cross.map(c => new Point(c));
  }

  touch() {
    return this._mixPredicate().touch.map(c => new Point(c));
  }

  block() {
    if (this.geometry2.closed) return [];
    const epsilon = optioner.options.epsilon;
    const firstSub = this.subRelationships[0];
    const lastSub = this.subRelationships[this.subRelationships.length - 1];
    const firstBlock = firstSub.relationship.intersection().filter(i => Maths.equalTo(i.t2, 0, epsilon));
    const lastBlock = lastSub.relationship.intersection().filter(i => Maths.equalTo(i.t2, 1, epsilon));
    return [...firstBlock, ...lastBlock].map(i => new Point(i.c));
  }

  coincide() {
    return this.subRelationships.reduce((acc, sub) => {
      acc.push(...sub.relationship.coincide());
      return acc;
    }, []);
  }

}, (_applyDecoratedDescriptor(_class$b.prototype, "separate", [_dec$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "separate"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "intersect", [_dec2$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "intersect"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "strike", [_dec3$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "strike"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "contact", [_dec4$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "contact"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "cross", [_dec5$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "cross"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "touch", [_dec6$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "touch"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "block", [_dec7$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "block"), _class$b.prototype), _applyDecoratedDescriptor(_class$b.prototype, "coincide", [_dec8$8], Object.getOwnPropertyDescriptor(_class$b.prototype, "coincide"), _class$b.prototype)), _class$b));

var _class$a;
let RayRay = (_class$a = class RayRay extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    this.supRelationship = new LineLine(geometry1.toLine(), geometry2.toLine());
  }

  onSameTrajectory() {
    return this.supRelationship.onSameTrajectory();
  }

  intersection() {
    return this.supRelationship.intersection().filter(i => this.geometry1.isPointOn(i.c) && this.geometry2.isPointOn(i.c));
  }

  separate() {
    if (this.onSameTrajectory()) return false;
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    const c1 = this.geometry1.coordinates;
    const c2 = this.geometry2.coordinates;
    return this.intersection().filter(i => !Coordinates.isEqualTo(i.c, c1, epsilon) && !Coordinates.isEqualTo(i.c, c2, epsilon)).map(i => new Point(i.c));
  }

  block() {
    const epsilon = optioner.options.epsilon;
    const c1 = this.geometry1.coordinates;
    const c2 = this.geometry2.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, c2, epsilon) && !Coordinates.isEqualTo(i.c, c1, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    const c1 = this.geometry1.coordinates;
    const c2 = this.geometry2.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, c1, epsilon) && !Coordinates.isEqualTo(i.c, c2, epsilon)).map(i => new Point(i.c));
  }

  connect() {
    const epsilon = optioner.options.epsilon;
    const c1 = this.geometry1.coordinates;
    const c2 = this.geometry2.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, c1, epsilon) && Coordinates.isEqualTo(i.c, c2, epsilon)).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    const c1 = this.geometry1.coordinates;
    const c2 = this.geometry2.coordinates;
    const epsilon = optioner.options.epsilon;
    const coincide = [];
    const sameDirection = Vector2.dot(Vector2.from2(this.geometry1.angle, 1), Vector2.from2(this.geometry2.angle, 1)) > 0;
    const on = this.geometry1.isPointOn(c2);

    if (sameDirection) {
      if (on) {
        coincide.push(this.geometry2.clone());
      } else {
        coincide.push(this.geometry1.clone());
      }
    } else {
      if (on) {
        if (Coordinates.isEqualTo(c1, c2, epsilon)) {
          coincide.push(new Point(c1));
        } else {
          coincide.push(new LineSegment(c1, c2));
        }
      }
    }

    return coincide;
  }

}, (_applyDecoratedDescriptor(_class$a.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "onSameTrajectory"), _class$a.prototype), _applyDecoratedDescriptor(_class$a.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$a.prototype, "intersection"), _class$a.prototype)), _class$a);

var _class$9;
let RayCircle = (_class$9 = class RayCircle extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    this.supRelationship = new LineCircle(this.geometry1.toLine(), this.geometry2);
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.filter(i => this.geometry1.isPointOn(i.c));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  touch() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, this.geometry1.coordinates, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$9.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$9.prototype, "intersection"), _class$9.prototype)), _class$9);

var _class$8;
let RayEllipse = (_class$8 = class RayEllipse extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    this.supRelationship = new LineEllipse(this.geometry1.toLine(), this.geometry2);
  }

  intersection() {
    const intersection = this.supRelationship.intersection();
    return intersection.filter(i => this.geometry1.isPointOn(i.c));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  touch() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    return this.intersection().filter(i => Coordinates.isEqualTo(i.c, coordinates, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$8.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$8.prototype, "intersection"), _class$8.prototype)), _class$8);

var _dec$7, _dec2$7, _dec3$7, _dec4$7, _dec5$7, _dec6$7, _dec7$7, _dec8$7, _class$7;
let LineSegmentEllipse = (_dec$7 = superPreprocess("handleDegeneration"), _dec2$7 = superPreprocess("handleDegeneration"), _dec3$7 = superPreprocess("handleDegeneration"), _dec4$7 = superPreprocess("handleDegeneration"), _dec5$7 = superPreprocess("handleDegeneration"), _dec6$7 = superPreprocess("handleDegeneration"), _dec7$7 = superPreprocess("handleDegeneration"), _dec8$7 = superPreprocess("handleDegeneration"), (_class$7 = class LineSegmentEllipse extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();

    if (dg1) {
      this.degeneration.relationship = null;
      return this;
    }

    this.supRelationship = new LineEllipse(geometry1.toLine(), geometry2);
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.map(i => {
      return { ...i,
        t1: this.geometry1.getTimeOfPointExtend(i.c)
      };
    }).filter(i => Maths.between(i.t1, 0, 1, false, false, epsilon));
  }

  separate() {
    if (!this.geometry2.isPointOutside(this.geometry1.point1Coordinates)) return false;
    if (!this.geometry2.isPointOutside(this.geometry1.point2Coordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  containedBy() {
    if (!this.geometry2.isPointInside(this.geometry1.point1Coordinates)) return false;
    if (!this.geometry2.isPointInside(this.geometry1.point2Coordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t1, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$7.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$7.prototype, "intersection"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "separate", [_dec$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "separate"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "containedBy", [_dec2$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "containedBy"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "intersect", [_dec3$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "intersect"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "strike", [_dec4$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "strike"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "contact", [_dec5$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "contact"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "cross", [_dec6$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "cross"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "touch", [_dec7$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "touch"), _class$7.prototype), _applyDecoratedDescriptor(_class$7.prototype, "blockedBy", [_dec8$7], Object.getOwnPropertyDescriptor(_class$7.prototype, "blockedBy"), _class$7.prototype)), _class$7));

var _dec$6, _dec2$6, _dec3$6, _dec4$6, _dec5$6, _dec6$6, _dec7$6, _dec8$6, _dec9$4, _dec10$1, _class$6;
let RayPolygon = (_dec$6 = superPreprocess("handleDegeneration"), _dec2$6 = superPreprocess("handleDegeneration"), _dec3$6 = superPreprocess("handleDegeneration"), _dec4$6 = superPreprocess("handleDegeneration"), _dec5$6 = superPreprocess("handleDegeneration"), _dec6$6 = superPreprocess("handleDegeneration"), _dec7$6 = superPreprocess("handleDegeneration"), _dec8$6 = superPreprocess("handleDegeneration"), _dec9$4 = superPreprocess("handleDegeneration"), _dec10$1 = superPreprocess("handleDegeneration"), (_class$6 = class RayPolygon extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.segments2 = void 0;
    this.subRelationships = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.segments2 = geometry2.getSegments(true);
    this.segments2.forEach((seg, index) => {
      this.subRelationships.push({
        relationship: new RayLineSegment(geometry1, seg),
        index2: index
      });
    });
  }

  separate() {
    return this.subRelationships.every(sub => sub.relationship.separate());
  }

  intersect() {
    return this.uniqCoordinates_(this.subRelationships.reduce((acc, sub) => {
      acc.push(...sub.relationship.intersection().map(i => i.c));
      return acc;
    }, [])).map(c => new Point(c));
  }

  _mixPredicate() {
    const epsilon = optioner.options.epsilon;
    const angle = this.geometry1.angle;
    const coordinates = this.geometry1.coordinates;
    const ei = new EndpointIntersection();
    const commonStrike = [];
    const endpointStrike = [];
    const endpointContact = [];
    const commonCross = [];
    const endpointCross = [];
    const endpointTouch = [];
    this.subRelationships.forEach(sub => {
      sub.relationship.intersection().forEach(i => {
        const t2Is0 = Maths.equalTo(i.t2, 0, epsilon);
        const t2Is1 = Maths.equalTo(i.t2, 1, epsilon);
        const onRayEnd = Coordinates.isEqualTo(i.c, coordinates, epsilon);

        if (!t2Is0 && !t2Is1) {
          commonStrike.push(i.c);
          commonCross.push(i.c);
          return;
        }

        let aIn;
        let aOut;
        let bIn;
        let bOut;
        const prev2 = this.segments2[prev(sub.index2, this.segments2.length, this.geometry2.closed)];
        const next2 = this.segments2[next(sub.index2, this.segments2.length, this.geometry2.closed)];
        const curr2 = this.segments2[sub.index2];
        const atEnd2 = t2Is0 && prev2 === undefined || t2Is1 && next2 === undefined;

        if (atEnd2) {
          commonStrike.push(i.c);
          return;
        }

        let auxiliary1 = onRayEnd;
        [aIn, aOut] = [new LineSegment(Vector2.add(i.c, Vector2.from2(angle, -1)), i.c), new LineSegment(i.c, Vector2.add(i.c, Vector2.from2(angle, 1)))];

        if (t2Is0) {
          [bIn, bOut] = [prev2, curr2];
        } else {
          [bIn, bOut] = [curr2, next2];
        }

        const det = ei.determine(i.c, aIn, aOut, bIn, bOut);

        if (det === "cross") {
          endpointStrike.push(i.c);
          if (!auxiliary1) endpointCross.push(i.c);
        }

        if (det === "touch") {
          endpointContact.push(i.c);
          if (!auxiliary1) endpointTouch.push(i.c);
        }
      });
    });
    return {
      strike: this.uniqCoordinates_([...commonStrike, ...endpointStrike]),
      contact: this.uniqCoordinates_(endpointContact),
      cross: this.uniqCoordinates_([...commonCross, ...endpointCross]),
      touch: this.uniqCoordinates_(endpointTouch)
    };
  }

  strike() {
    return this._mixPredicate().strike.map(c => new Point(c));
  }

  contact() {
    return this._mixPredicate().contact.map(c => new Point(c));
  }

  cross() {
    return this._mixPredicate().cross.map(c => new Point(c));
  }

  touch() {
    return this._mixPredicate().touch.map(c => new Point(c));
  }

  block() {
    if (this.geometry2.closed) return [];
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    const firstSub = this.subRelationships[0];
    const lastSub = this.subRelationships[this.subRelationships.length - 1];
    const firstBlock = firstSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t2, 0, epsilon) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    const lastBlock = lastSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t2, 1, epsilon) && !Coordinates.isEqualTo(i.c, coordinates, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    return [...firstBlock, ...lastBlock].map(c => new Point(c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    const firstSub = this.subRelationships[0];
    const lastSub = this.subRelationships[this.subRelationships.length - 1];
    const firstBlockedBy = firstSub.relationship.intersection().reduce((acc, i) => {
      if (Coordinates.isEqualTo(i.c, coordinates, epsilon) && !Maths.equalTo(i.t2, 0, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    const lastBlockedBy = lastSub.relationship.intersection().reduce((acc, i) => {
      if (Coordinates.isEqualTo(i.c, coordinates, epsilon) && !Maths.equalTo(i.t2, 1, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    const otherBlockedBy = this.uniqCoordinates_(this.subRelationships.slice(1, this.subRelationships.length - 1).reduce((acc, sub) => {
      sub.relationship.intersection().forEach(i => {
        if (Coordinates.isEqualTo(i.c, coordinates, epsilon)) acc.push(i.c);
      });
      return acc;
    }, []));
    return [...firstBlockedBy, ...otherBlockedBy, ...lastBlockedBy].map(c => new Point(c));
  }

  connect() {
    if (this.geometry2.closed) return [];
    const epsilon = optioner.options.epsilon;
    const coordinates = this.geometry1.coordinates;
    const firstSub = this.subRelationships[0];
    const lastSub = this.subRelationships[this.subRelationships.length - 1];
    const firstConnect = firstSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t2, 0, epsilon) && Coordinates.isEqualTo(i.c, coordinates, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    const lastConnect = lastSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t2, 1, epsilon) && Coordinates.isEqualTo(i.c, coordinates, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    return [...firstConnect, ...lastConnect].map(c => new Point(c));
  }

  coincide() {
    return this.subRelationships.reduce((acc, sub) => {
      acc.push(...sub.relationship.coincide());
      return acc;
    }, []);
  }

}, (_applyDecoratedDescriptor(_class$6.prototype, "separate", [_dec$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "separate"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "intersect", [_dec2$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "intersect"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "strike", [_dec3$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "strike"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "contact", [_dec4$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "contact"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "cross", [_dec5$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "cross"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "touch", [_dec6$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "touch"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "block", [_dec7$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "block"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "blockedBy", [_dec8$6], Object.getOwnPropertyDescriptor(_class$6.prototype, "blockedBy"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "connect", [_dec9$4], Object.getOwnPropertyDescriptor(_class$6.prototype, "connect"), _class$6.prototype), _applyDecoratedDescriptor(_class$6.prototype, "coincide", [_dec10$1], Object.getOwnPropertyDescriptor(_class$6.prototype, "coincide"), _class$6.prototype)), _class$6));

var _dec$5, _dec2$5, _dec3$5, _dec4$5, _dec5$5, _dec6$5, _dec7$5, _dec8$5, _class$5;
let QuadraticBezierEllipse = (_dec$5 = superPreprocess("handleDegeneration"), _dec2$5 = superPreprocess("handleDegeneration"), _dec3$5 = superPreprocess("handleDegeneration"), _dec4$5 = superPreprocess("handleDegeneration"), _dec5$5 = superPreprocess("handleDegeneration"), _dec6$5 = superPreprocess("handleDegeneration"), _dec7$5 = superPreprocess("handleDegeneration"), _dec8$5 = superPreprocess("handleDegeneration"), (_class$5 = class QuadraticBezierEllipse extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();

    if (dg1) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg1 = geometry1.nonDimensionallyDegenerate();

    if (ndg1 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentEllipse(ndg1, geometry2);
      return this;
    }
  }

  intersection() {
    const [polyX, polyY] = this.geometry1.getPolynomial();
    const [[x2, x1, x0], [y2, y1, y0]] = [polyX, polyY];
    const {
      radiusX: rx,
      radiusY: ry,
      centerX: cx,
      centerY: cy,
      rotation: phi
    } = this.geometry2;
    const rx2 = rx ** 2;
    const ry2 = ry ** 2;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const cosPhi2 = cosPhi ** 2;
    const sinPhi2 = sinPhi ** 2;
    const t0 = -2 * sinPhi * cosPhi * (rx2 - ry2) * (cx - x0) * (cy - y0) + cosPhi2 * (ry2 * (cx - x0) ** 2 + rx2 * (cy - y0) ** 2) + sinPhi2 * (rx2 * (cx - x0) ** 2 + ry2 * (cy - y0) ** 2) - rx2 * ry2;
    const t1 = -2 * (-sinPhi * cosPhi * (rx2 - ry2) * ((cy - y0) * x1 + (cx - x0) * y1) + cosPhi2 * (ry2 * (cx - x0) * x1 + rx2 * (cy - y0) * y1) + sinPhi2 * (rx2 * (cx - x0) * x1 + ry2 * (cy - y0) * y1));
    const t2 = 2 * sinPhi * cosPhi * (rx2 - ry2) * ((cy - y0) * x2 - x1 * y1 + (cx - x0) * y2) + cosPhi2 * (ry2 * (x1 ** 2 - 2 * (cx - x0) * x2) + rx2 * (y1 ** 2 - 2 * (cy - y0) * y2)) + sinPhi2 * (rx2 * (x1 ** 2 - 2 * (cx - x0) * x2) + ry2 * (y1 ** 2 - 2 * (cy - y0) * y2));
    const t3 = 2 * (-sinPhi * cosPhi * (rx2 - ry2) * (x2 * y1 + x1 * y2) + cosPhi2 * (ry2 * x1 * x2 + rx2 * y1 * y2) + sinPhi2 * (rx2 * x1 * x2 + ry2 * y1 * y2));
    const t4 = -2 * sinPhi * cosPhi * (rx2 - ry2) * x2 * y2 + cosPhi2 * (ry2 * x2 ** 2 + rx2 * y2 ** 2) + sinPhi2 * (rx2 * x2 ** 2 + ry2 * y2 ** 2);
    const tPoly = [t4, t3, t2, t1, t0];
    const curveEpsilon = optioner.options.curveEpsilon;
    const epsilon = optioner.options.epsilon;
    let tRoots = Polynomial.rootsMultiplicity(Polynomial.roots(tPoly).filter(Type.isNumber), curveEpsilon);
    const intersection = [];

    for (let i = 0, l = tRoots.length; i < l; i++) {
      const t1 = tRoots[i].root;

      if (Maths.between(t1, 0, 1, false, false, epsilon)) {
        const x = Polynomial.evaluate(polyX, t1);
        const y = Polynomial.evaluate(polyY, t1);
        const a2 = this.geometry2.getAngleOfPoint([x, y]);

        if (!Number.isNaN(a2)) {
          intersection.push({
            c: [x, y],
            t1,
            a2,
            m: tRoots[i].multiplicity
          });
        }
      }
    }

    return intersection;
  }

  separate() {
    if (!this.geometry2.isPointOutside(this.geometry1.point1Coordinates)) return false;
    if (!this.geometry2.isPointOutside(this.geometry1.point2Coordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  containedBy() {
    if (!this.geometry2.isPointInside(this.geometry1.point1Coordinates)) return false;
    if (!this.geometry2.isPointInside(this.geometry1.point2Coordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t1, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$5.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$5.prototype, "intersection"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "separate", [_dec$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "separate"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "containedBy", [_dec2$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "containedBy"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "intersect", [_dec3$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "intersect"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "strike", [_dec4$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "strike"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "contact", [_dec5$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "contact"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "cross", [_dec6$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "cross"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "touch", [_dec7$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "touch"), _class$5.prototype), _applyDecoratedDescriptor(_class$5.prototype, "blockedBy", [_dec8$5], Object.getOwnPropertyDescriptor(_class$5.prototype, "blockedBy"), _class$5.prototype)), _class$5));

var _dec$4, _dec2$4, _dec3$4, _dec4$4, _dec5$4, _dec6$4, _dec7$4, _dec8$4, _class$4;
let BezierEllipse = (_dec$4 = superPreprocess("handleDegeneration"), _dec2$4 = superPreprocess("handleDegeneration"), _dec3$4 = superPreprocess("handleDegeneration"), _dec4$4 = superPreprocess("handleDegeneration"), _dec5$4 = superPreprocess("handleDegeneration"), _dec6$4 = superPreprocess("cross"), _dec7$4 = superPreprocess("cross"), _dec8$4 = superPreprocess("cross"), (_class$4 = class BezierEllipse extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();

    if (dg1) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg1 = geometry1.nonDimensionallyDegenerate();

    if (ndg1 instanceof QuadraticBezier) {
      this.degeneration.relationship = new QuadraticBezierEllipse(ndg1, geometry2);
      return this;
    }

    if (ndg1 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentEllipse(ndg1, geometry2);
      return this;
    }
  }

  intersection() {
    const [polyX, polyY] = this.geometry1.getPolynomial();
    const [[x3, x2, x1, x0], [y3, y2, y1, y0]] = [polyX, polyY];
    const {
      radiusX: rx,
      radiusY: ry,
      centerX: cx,
      centerY: cy,
      rotation: phi
    } = this.geometry2;
    const rx2 = rx ** 2;
    const ry2 = ry ** 2;
    const cosPhi = Maths.cos(phi);
    const sinPhi = Maths.sin(phi);
    const cosPhi2 = cosPhi ** 2;
    const sinPhi2 = sinPhi ** 2;
    const t0 = -2 * sinPhi * cosPhi * (rx2 - ry2) * (cx - x0) * (cy - y0) + cosPhi2 * (ry2 * (cx - x0) ** 2 + rx2 * (cy - y0) ** 2) + sinPhi2 * (rx2 * (cx - x0) ** 2 + ry2 * (cy - y0) ** 2) - rx2 * ry2;
    const t1 = -2 * (-sinPhi * cosPhi * (rx2 - ry2) * ((cy - y0) * x1 + (cx - x0) * y1) + cosPhi2 * (ry2 * (cx - x0) * x1 + rx2 * (cy - y0) * y1) + sinPhi2 * (rx2 * (cx - x0) * x1 + ry2 * (cy - y0) * y1));
    const t2 = 2 * sinPhi * cosPhi * (rx2 - ry2) * ((cy - y0) * x2 - x1 * y1 + (cx - x0) * y2) + cosPhi2 * (ry2 * (x1 ** 2 - 2 * (cx - x0) * x2) + rx2 * (y1 ** 2 - 2 * (cy - y0) * y2)) + sinPhi2 * (rx2 * (x1 ** 2 - 2 * (cx - x0) * x2) + ry2 * (y1 ** 2 - 2 * (cy - y0) * y2));
    const t3 = 2 * (sinPhi * cosPhi * (rx2 - ry2) * ((cy - y0) * x3 - x2 * y1 - x1 * y2 + (cx - x0) * y3) + cosPhi2 * (ry2 * (x1 * x2 - (cx - x0) * x3) + rx2 * (y1 * y2 - (cy - y0) * y3)) + sinPhi2 * (rx2 * (x1 * x2 - (cx - x0) * x3) + ry2 * (y1 * y2 - (cy - y0) * y3)));
    const t4 = -2 * sinPhi * cosPhi * (rx2 - ry2) * (x3 * y1 + x2 * y2 + x1 * y3) + cosPhi2 * (ry2 * (x2 ** 2 + 2 * x1 * x3) + rx2 * (y2 ** 2 + 2 * y1 * y3)) + sinPhi2 * (rx2 * (x2 ** 2 + 2 * x1 * x3) + ry2 * (y2 ** 2 + 2 * y1 * y3));
    const t5 = 2 * (-sinPhi * cosPhi * (rx2 - ry2) * (x3 * y2 + x2 * y3) + cosPhi2 * (ry2 * x2 * x3 + rx2 * y2 * y3) + sinPhi2 * (rx2 * x2 * x3 + ry2 * y2 * y3));
    const t6 = -2 * sinPhi * cosPhi * (rx2 - ry2) * x3 * y3 + cosPhi2 * (ry2 * x3 ** 2 + rx2 * y3 ** 2) + sinPhi2 * (rx2 * x3 ** 2 + ry2 * y3 ** 2);
    const tPoly = [t6, t5, t4, t3, t2, t1, t0];
    const curveEpsilon = optioner.options.curveEpsilon;
    const epsilon = optioner.options.epsilon;
    let tRoots = Polynomial.rootsMultiplicity(Polynomial.roots(tPoly).filter(Type.isNumber), curveEpsilon);
    const intersection = [];

    for (let i = 0, l = tRoots.length; i < l; i++) {
      const t1 = tRoots[i].root;

      if (Maths.between(t1, 0, 1, false, false, epsilon)) {
        const x = Polynomial.evaluate(polyX, t1);
        const y = Polynomial.evaluate(polyY, t1);
        const a2 = this.geometry2.getAngleOfPoint([x, y]);

        if (!Number.isNaN(a2)) {
          intersection.push({
            c: [x, y],
            t1,
            a2,
            m: tRoots[i].multiplicity
          });
        }
      }
    }

    return intersection;
  }

  separate() {
    return this.intersection().length === 0;
  }

  containedBy() {
    if (!this.geometry2.isPointInside(this.geometry1.point1Coordinates)) return false;
    if (!this.geometry2.isPointInside(this.geometry1.point2Coordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && Maths.between(i.t1, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && Maths.between(i.t1, 0, 1, true, true, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$4.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$4.prototype, "intersection"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "separate", [_dec$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "separate"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "containedBy", [_dec2$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "containedBy"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "intersect", [_dec3$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "intersect"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "strike", [_dec4$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "strike"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "contact", [_dec5$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "contact"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "cross", [_dec6$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "cross"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "touch", [_dec7$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "touch"), _class$4.prototype), _applyDecoratedDescriptor(_class$4.prototype, "blockedBy", [_dec8$4], Object.getOwnPropertyDescriptor(_class$4.prototype, "blockedBy"), _class$4.prototype)), _class$4));

var _dec$3, _dec2$3, _dec3$3, _dec4$3, _dec5$3, _dec6$3, _dec7$3, _dec8$3, _dec9$3, _class$3;
let ArcEllipse = (_dec$3 = superPreprocess("handleDegeneration"), _dec2$3 = superPreprocess("handleDegeneration"), _dec3$3 = superPreprocess("handleDegeneration"), _dec4$3 = superPreprocess("handleDegeneration"), _dec5$3 = superPreprocess("handleDegeneration"), _dec6$3 = superPreprocess("handleDegeneration"), _dec7$3 = superPreprocess("handleDegeneration"), _dec8$3 = superPreprocess("handleDegeneration"), _dec9$3 = superPreprocess("handleDegeneration"), (_class$3 = class ArcEllipse extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();

    if (dg1) {
      this.degeneration.relationship = null;
      return this;
    }

    this.supRelationship = new EllipseEllipse(geometry1.toEllipse(), geometry2);
  }

  onSameTrajectory() {
    var _this$supRelationship, _this$supRelationship2;

    return (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.onSameTrajectory()) != null ? _this$supRelationship : false;
  }

  intersection() {
    var _this$supRelationship3, _this$supRelationship4;

    const [sa, ea] = this.geometry1.getStartEndAngles();
    const positive = this.geometry1.positive;
    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship3 = (_this$supRelationship4 = this.supRelationship) == null ? void 0 : _this$supRelationship4.intersection()) != null ? _this$supRelationship3 : [];
    return intersection.filter(i => Angle.between(i.a1, sa, ea, positive, false, false, epsilon));
  }

  separate() {
    if (!this.geometry2.isPointOutside(this.geometry1.point1Coordinates)) return false;
    if (!this.geometry2.isPointOutside(this.geometry1.point2Coordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  containedBy() {
    if (!this.geometry2.isPointInside(this.geometry1.point1Coordinates)) return false;
    if (!this.geometry2.isPointInside(this.geometry1.point2Coordinates)) return false;
    if (this.intersection().length !== 0) return false;
    return true;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const [sa, ea] = this.geometry1.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && !Angle.equalTo(i.a1, sa, epsilon) && !Angle.equalTo(i.a1, ea, epsilon)).map(i => new Point(i.c));
  }

  touch() {
    const [sa, ea] = this.geometry1.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && !Angle.equalTo(i.a1, sa, epsilon) && !Angle.equalTo(i.a1, ea, epsilon)).map(i => new Point(i.c));
  }

  blockedBy() {
    const [sa, ea] = this.geometry1.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => Angle.equalTo(i.a1, sa, epsilon) || Angle.equalTo(i.a1, ea, epsilon)).map(i => new Point(i.c));
  }

  coincide() {
    if (!this.onSameTrajectory()) return [];
    return [this.geometry1.clone()];
  }

}, (_applyDecoratedDescriptor(_class$3.prototype, "onSameTrajectory", [cached], Object.getOwnPropertyDescriptor(_class$3.prototype, "onSameTrajectory"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$3.prototype, "intersection"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "separate", [_dec$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "separate"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "containedBy", [_dec2$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "containedBy"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "intersect", [_dec3$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "intersect"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "strike", [_dec4$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "strike"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "contact", [_dec5$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "contact"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "cross", [_dec6$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "cross"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "touch", [_dec7$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "touch"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "blockedBy", [_dec8$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "blockedBy"), _class$3.prototype), _applyDecoratedDescriptor(_class$3.prototype, "coincide", [_dec9$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "coincide"), _class$3.prototype)), _class$3));

var _dec$2, _dec2$2, _dec3$2, _dec4$2, _dec5$2, _dec6$2, _dec7$2, _dec8$2, _dec9$2, _class$2;
let QuadraticBezierArc = (_dec$2 = superPreprocess("handleDegeneration"), _dec2$2 = superPreprocess("handleDegeneration"), _dec3$2 = superPreprocess("handleDegeneration"), _dec4$2 = superPreprocess("handleDegeneration"), _dec5$2 = superPreprocess("handleDegeneration"), _dec6$2 = superPreprocess("handleDegeneration"), _dec7$2 = superPreprocess("handleDegeneration"), _dec8$2 = superPreprocess("handleDegeneration"), _dec9$2 = superPreprocess("handleDegeneration"), (_class$2 = class QuadraticBezierArc extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg1 = geometry1.nonDimensionallyDegenerate();

    if (ndg1 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentArc(ndg1, geometry2);
      return this;
    }

    this.supRelationship = new QuadraticBezierEllipse(geometry1, geometry2.toEllipse());
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const positive = this.geometry2.positive;
    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.filter(i => Angle.between(i.a2, sa, ea, positive, false, false, epsilon));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  touch() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  block() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$2.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$2.prototype, "intersection"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "separate", [_dec$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "separate"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "intersect", [_dec2$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "intersect"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "strike", [_dec3$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "strike"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "contact", [_dec4$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "contact"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "cross", [_dec5$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "cross"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "touch", [_dec6$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "touch"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "block", [_dec7$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "block"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "blockedBy", [_dec8$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "blockedBy"), _class$2.prototype), _applyDecoratedDescriptor(_class$2.prototype, "connect", [_dec9$2], Object.getOwnPropertyDescriptor(_class$2.prototype, "connect"), _class$2.prototype)), _class$2));

var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _class$1;
let BezierArc = (_dec$1 = superPreprocess("handleDegeneration"), _dec2$1 = superPreprocess("handleDegeneration"), _dec3$1 = superPreprocess("handleDegeneration"), _dec4$1 = superPreprocess("handleDegeneration"), _dec5$1 = superPreprocess("handleDegeneration"), _dec6$1 = superPreprocess("handleDegeneration"), _dec7$1 = superPreprocess("handleDegeneration"), _dec8$1 = superPreprocess("handleDegeneration"), _dec9$1 = superPreprocess("handleDegeneration"), (_class$1 = class BezierArc extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.supRelationship = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    const ndg1 = geometry1.nonDimensionallyDegenerate();

    if (ndg1 instanceof QuadraticBezier) {
      this.degeneration.relationship = new QuadraticBezierArc(ndg1, geometry2);
      return this;
    }

    if (ndg1 instanceof LineSegment) {
      this.degeneration.relationship = new LineSegmentArc(ndg1, geometry2);
      return this;
    }

    this.supRelationship = new BezierEllipse(geometry1, geometry2.toEllipse());
  }

  intersection() {
    var _this$supRelationship, _this$supRelationship2;

    if (!Box.collide(this.geometry1.getBoundingBox(), this.geometry2.getBoundingBox())) return [];
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const positive = this.geometry2.positive;
    const epsilon = optioner.options.epsilon;
    const intersection = (_this$supRelationship = (_this$supRelationship2 = this.supRelationship) == null ? void 0 : _this$supRelationship2.intersection()) != null ? _this$supRelationship : [];
    return intersection.filter(i => Angle.between(i.a2, sa, ea, positive, false, false, epsilon));
  }

  separate() {
    return this.intersection().length === 0;
  }

  intersect() {
    return this.intersection().map(i => new Point(i.c));
  }

  strike() {
    return this.intersection().filter(i => i.m % 2 === 1).map(i => new Point(i.c));
  }

  contact() {
    return this.intersection().filter(i => i.m % 2 === 0).map(i => new Point(i.c));
  }

  cross() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 1 && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  touch() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => i.m % 2 === 0 && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  block() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon)) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))).map(i => new Point(i.c));
  }

  blockedBy() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && !(Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

  connect() {
    const [sa, ea] = this.geometry2.getStartEndAngles();
    const epsilon = optioner.options.epsilon;
    return this.intersection().filter(i => (Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon)) && (Angle.equalTo(i.a2, sa, epsilon) || Angle.equalTo(i.a2, ea, epsilon))).map(i => new Point(i.c));
  }

}, (_applyDecoratedDescriptor(_class$1.prototype, "intersection", [cached], Object.getOwnPropertyDescriptor(_class$1.prototype, "intersection"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "separate", [_dec$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "separate"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "intersect", [_dec2$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "intersect"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "strike", [_dec3$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "strike"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "contact", [_dec4$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "contact"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "cross", [_dec5$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "cross"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "touch", [_dec6$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "touch"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "block", [_dec7$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "block"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "blockedBy", [_dec8$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "blockedBy"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "connect", [_dec9$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "connect"), _class$1.prototype)), _class$1));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class;
let PolygonPolygon = (_dec = superPreprocess("handleDegeneration"), _dec2 = superPreprocess("handleDegeneration"), _dec3 = superPreprocess("handleDegeneration"), _dec4 = superPreprocess("handleDegeneration"), _dec5 = superPreprocess("handleDegeneration"), _dec6 = superPreprocess("handleDegeneration"), _dec7 = superPreprocess("handleDegeneration"), _dec8 = superPreprocess("handleDegeneration"), _dec9 = superPreprocess("handleDegeneration"), _dec10 = superPreprocess("handleDegeneration"), _dec11 = superPreprocess("handleDegeneration"), _dec12 = superPreprocess("handleDegeneration"), (_class = class PolygonPolygon extends BaseRelationship {
  constructor(geometry1, geometry2) {
    super();
    this.vertexCoordinates1 = void 0;
    this.vertexCoordinates2 = void 0;
    this.segments1 = void 0;
    this.segments2 = void 0;
    this.subRelationships = void 0;
    this.geometry1 = geometry1;
    this.geometry2 = geometry2;
    const dg1 = geometry1.dimensionallyDegenerate();
    const dg2 = geometry2.dimensionallyDegenerate();

    if (dg1 || dg2) {
      this.degeneration.relationship = null;
      return this;
    }

    this.segments1 = this.geometry1.getSegments(true);
    this.segments2 = this.geometry2.getSegments(true);
    this.vertexCoordinates1 = this.geometry1.vertices.map(vtx => [vtx.x, vtx.y]);
    this.vertexCoordinates2 = this.geometry2.vertices.map(vtx => [vtx.x, vtx.y]);
    this.subRelationships = [];
    this.segments1.forEach((seg1, index1) => {
      this.segments2.forEach((seg2, index2) => {
        this.subRelationships.push({
          relationship: new LineSegmentLineSegment(seg1, seg2),
          index1,
          index2
        });
      });
    });
  }

  intersection() {
    return this.subRelationships.reduce((acc, sub) => {
      acc.push(...sub.relationship.intersection());
      return acc;
    }, []);
  }

  boundingBoxCollide() {
    const b1 = this.geometry1.getBoundingBox();
    const b2 = this.geometry2.getBoundingBox();
    const epsilon = optioner.options.epsilon;
    return Box.collide(b1, b2, epsilon);
  }

  separate() {
    if (!this.boundingBoxCollide()) return true;

    if (!this.geometry1.closed && !this.geometry1.closed) {
      if (this.subRelationships.some(sub => !sub.relationship.separate())) return false;
      return true;
    }

    if (!this.geometry1.closed && this.geometry2.closed) {
      if (!this.vertexCoordinates1.every(c => this.geometry2.isPointOutside(c))) return false;
      if (this.subRelationships.some(sub => !sub.relationship.separate())) return false;
      return true;
    }

    if (this.geometry1.closed && !this.geometry2.closed) {
      if (!this.vertexCoordinates2.every(c => this.geometry1.isPointOutside(c))) return false;
      if (this.subRelationships.some(sub => !sub.relationship.separate())) return false;
      return true;
    }

    if (this.geometry1.closed && this.geometry2.closed) {
      if (!this.vertexCoordinates1.every(c => this.geometry2.isPointOutside(c))) return false;
      if (!this.vertexCoordinates2.every(c => this.geometry1.isPointOutside(c))) return false;
      if (this.subRelationships.some(sub => !sub.relationship.separate())) return false;
      return true;
    }
  }

  contain() {
    if (!this.boundingBoxCollide()) return false;
    if (!this.geometry1.closed) return false;
    if (!this.vertexCoordinates2.every(c => this.geometry1.isPointInside(c))) return false;
    if (this.subRelationships.some(sub => sub.relationship.intersect().length !== 0)) return false;
    return true;
  }

  containedBy() {
    if (!this.boundingBoxCollide()) return false;
    if (!this.geometry2.closed) return false;
    if (!this.vertexCoordinates1.every(c => this.geometry2.isPointInside(c))) return false;
    if (this.subRelationships.some(sub => sub.relationship.intersect().length !== 0)) return false;
    return true;
  }

  intersect() {
    return this.uniqCoordinates_(this.subRelationships.reduce((acc, sub) => {
      acc.push(...sub.relationship.intersection().map(i => i.c));
      return acc;
    }, [])).map(c => new Point(c));
  }

  _mixPredicate() {
    const epsilon = optioner.options.epsilon;
    const ei = new EndpointIntersection();
    const commonStrike = [];
    const endpointStrike = [];
    const endpointContact = [];
    const commonCross = [];
    const endpointCross = [];
    const endpointTouch = [];
    this.subRelationships.forEach(sub => {
      sub.relationship.intersection().forEach(i => {
        const t1Is0 = Maths.equalTo(i.t1, 0, epsilon);
        const t1Is1 = Maths.equalTo(i.t1, 1, epsilon);
        const t2Is0 = Maths.equalTo(i.t2, 0, epsilon);
        const t2Is1 = Maths.equalTo(i.t2, 1, epsilon);

        if (!t1Is0 && !t1Is1 && !t2Is0 && !t2Is1) {
          commonStrike.push(i.c);
          commonCross.push(i.c);
          return;
        }

        let aIn;
        let aOut;
        let bIn;
        let bOut;
        const prev1 = this.segments1[prev(sub.index1, this.segments1.length, this.geometry1.closed)];
        const prev2 = this.segments2[prev(sub.index2, this.segments2.length, this.geometry2.closed)];
        const next1 = this.segments1[next(sub.index1, this.segments1.length, this.geometry1.closed)];
        const next2 = this.segments2[next(sub.index2, this.segments2.length, this.geometry2.closed)];
        const curr1 = this.segments1[sub.index1];
        const curr2 = this.segments2[sub.index2];
        let auxiliary1 = false;
        let auxiliary2 = false;
        const atEnd1 = t1Is0 && prev1 === undefined || t1Is1 && next1 === undefined;
        const atEnd2 = t2Is0 && prev2 === undefined || t2Is1 && next2 === undefined;

        if (t1Is0) {
          if (prev1 === undefined) {
            if (atEnd2) {
              commonStrike.push(i.c);
              return;
            }

            auxiliary1 = true;
            [aIn, aOut] = [curr1.portionOfExtend(-1, 0), curr1];
          } else {
            [aIn, aOut] = [prev1, curr1];
          }
        } else if (t1Is1) {
          if (next1 === undefined) {
            if (atEnd2) {
              commonStrike.push(i.c);
              return;
            }

            auxiliary1 = true;
            [aIn, aOut] = [curr1, curr1.portionOfExtend(1, 2)];
          } else {
            [aIn, aOut] = [curr1, next1];
          }
        } else {
          if (atEnd2) {
            commonStrike.push(i.c);
            return;
          }

          [aIn, aOut] = curr1.splitAtTime(i.t1);
        }

        if (t2Is0) {
          if (prev2 === undefined) {
            if (atEnd1) {
              commonStrike.push(i.c);
              return;
            }

            auxiliary2 = true;
            [bIn, bOut] = [curr2.portionOfExtend(-1, 0), curr2];
          } else {
            [bIn, bOut] = [prev2, curr2];
          }
        } else if (t2Is1) {
          if (next2 === undefined) {
            if (atEnd1) {
              commonStrike.push(i.c);
              return;
            }

            auxiliary2 = true;
            [bIn, bOut] = [curr2, curr2.portionOfExtend(1, 2)];
          } else {
            [bIn, bOut] = [curr2, next2];
          }
        } else {
          if (atEnd1) {
            commonStrike.push(i.c);
            return;
          }

          [bIn, bOut] = curr2.splitAtTime(i.t2);
        }

        const det = ei.determine(i.c, aIn, aOut, bIn, bOut);

        if (det === "cross") {
          endpointStrike.push(i.c);
          if (!auxiliary1 && !auxiliary2) endpointCross.push(i.c);
        }

        if (det === "touch") {
          endpointContact.push(i.c);
          if (!auxiliary1 && !auxiliary2) endpointTouch.push(i.c);
        }
      });
    });
    return {
      strike: this.uniqCoordinates_([...commonStrike, ...endpointStrike]),
      contact: this.uniqCoordinates_(endpointContact),
      cross: this.uniqCoordinates_([...commonCross, ...endpointCross]),
      touch: this.uniqCoordinates_(endpointTouch)
    };
  }

  strike() {
    return this._mixPredicate().strike.map(c => new Point(c));
  }

  contact() {
    return this._mixPredicate().contact.map(c => new Point(c));
  }

  cross() {
    return this._mixPredicate().cross.map(c => new Point(c));
  }

  touch() {
    return this._mixPredicate().touch.map(c => new Point(c));
  }

  block() {
    if (this.geometry2.closed) return [];
    const epsilon = optioner.options.epsilon;
    const firstSub = this.subRelationships[0];
    const lastSub = this.subRelationships[this.subRelationships.length - 1];
    const firstBlock = firstSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t2, 0, epsilon) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))) acc.push(i.c);
      return acc;
    }, []);
    const lastBlock = lastSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t2, 1, epsilon) && !(Maths.equalTo(i.t1, 0, epsilon) || Maths.equalTo(i.t1, 1, epsilon))) acc.push(i.c);
      return acc;
    }, []);
    return [...firstBlock, ...lastBlock].map(c => new Point(c));
  }

  blockedBy() {
    if (this.geometry1.closed) return [];
    const epsilon = optioner.options.epsilon;
    const firstSub = this.subRelationships[0];
    const lastSub = this.subRelationships[this.subRelationships.length - 1];
    const firstBlockedBy = firstSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t1, 0, epsilon) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))) acc.push(i.c);
      return acc;
    }, []);
    const lastBlockedBy = lastSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t1, 1, epsilon) && !(Maths.equalTo(i.t2, 0, epsilon) || Maths.equalTo(i.t2, 1, epsilon))) acc.push(i.c);
      return acc;
    }, []);
    return [...firstBlockedBy, ...lastBlockedBy].map(c => new Point(c));
  }

  connect() {
    if (this.geometry1.closed || this.geometry2.closed) return [];
    const epsilon = optioner.options.epsilon;
    const firstSub = this.subRelationships[0];
    const lastSub = this.subRelationships[this.subRelationships.length - 1];
    const firstConnect = firstSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t1, 0, epsilon) && Maths.equalTo(i.t2, 0, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    const lastConnect = lastSub.relationship.intersection().reduce((acc, i) => {
      if (Maths.equalTo(i.t1, 1, epsilon) && Maths.equalTo(i.t2, 1, epsilon)) acc.push(i.c);
      return acc;
    }, []);
    return [...firstConnect, ...lastConnect].map(c => new Point(c));
  }

  coincide() {
    return this.subRelationships.reduce((acc, sub) => {
      acc.push(...sub.relationship.coincide());
      return acc;
    }, []);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "boundingBoxCollide", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "boundingBoxCollide"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "separate", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "separate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "contain", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "contain"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "containedBy", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "containedBy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "intersect", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "intersect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_mixPredicate", [cached], Object.getOwnPropertyDescriptor(_class.prototype, "_mixPredicate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "strike", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "strike"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "contact", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "contact"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cross", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "cross"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "touch", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "touch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "block", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "block"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "blockedBy", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "blockedBy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "connect", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "connect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "coincide", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "coincide"), _class.prototype)), _class));

const relationships = {
  LineLine,
  LineRay,
  RayRay,
  CircleCircle,
  LineCircle,
  RayCircle,
  EllipseEllipse,
  LineEllipse,
  RayEllipse,
  LineLineSegment,
  LineQuadraticBezier,
  LineBezier,
  LineArc,
  LinePolygon,
  RayLineSegment,
  RayQuadraticBezier,
  RayBezier,
  RayArc,
  RayPolygon,
  LineSegmentEllipse,
  QuadraticBezierEllipse,
  BezierEllipse,
  ArcEllipse,
  LineSegmentLineSegment,
  LineSegmentQuadraticBezier,
  LineSegmentBezier,
  LineSegmentArc,
  QuadraticBezierQuadraticBezier,
  QuadraticBezierBezier,
  QuadraticBezierArc,
  BezierBezier,
  BezierArc,
  ArcArc,
  PolygonPolygon
};

class Relationship extends BaseObject {
  toString() {
    return `${this.name}(${this.uuid})`;
  }

  toArray() {
    return [];
  }

  toObject() {
    return {};
  }

}

Object.defineProperty(Relationship.prototype, "relate", {
  value: function (geometry1, geometry2, predicates) {
    const className = geometry1.name + geometry2.name;
    const rs = new relationships[className](geometry1, geometry2);
    return rs.relate(predicates);
  },
  configurable: true,
  enumerable: false,
  writable: true
});
Object.values(RelationshipPredicate).forEach(methodName => {
  Object.defineProperty(Relationship.prototype, methodName, {
    value: function (geometry1, geometry2) {
      const className = geometry1.name + geometry2.name;
      const rs = new relationships[className](geometry1, geometry2);
      return rs[methodName]();
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
});

class Chain {
  constructor(initElement) {
    this.elements = [];
    this.elements.push(initElement);
  }

  get headCoordinates() {
    return this.elements[0].segment.point1Coordinates;
  }

  get tailCoordinates() {
    return this.elements[this.elements.length - 1].segment.point2Coordinates;
  }

  reverse() {
    this.elements.forEach(element => element.reverse());
    this.elements.reverse();
  }

  addElement(element, atChainHead, atElementInit) {
    if (atChainHead === atElementInit) element.reverse();
    atChainHead ? this.elements.unshift(element) : this.elements.push(element);
  }

  isClosable() {
    const epsilon = optioner.options.epsilon;
    return Coordinates.isEqualTo(this.headCoordinates, this.tailCoordinates, epsilon);
  }

  concat(chain2, atChainHead1, atChainHead2) {
    const chain1 = this;
    const chain1Longer = chain1.elements.length > chain2.elements.length;

    if (atChainHead1) {
      if (atChainHead2) {
        if (chain1Longer) {
          chain2.reverse();
          this.elements = [...chain2.elements, ...chain1.elements];
        } else {
          chain1.reverse();
          this.elements = [...chain1.elements, ...chain2.elements];
        }
      } else {
        this.elements = [...chain2.elements, ...chain1.elements];
      }
    } else {
      if (atChainHead2) {
        this.elements = [...chain1.elements, ...chain2.elements];
      } else {
        if (chain1Longer) {
          chain2.reverse();
          this.elements = [...chain1.elements, ...chain2.elements];
        } else {
          chain1.reverse();
          this.elements = [...chain2.elements, ...chain1.elements];
        }
      }
    }
  }

}

class SegmentChainer {
  _segmentEqual(segmentA, segmentB) {
    if (segmentA instanceof LineSegment && segmentB instanceof LineSegment) {
      return new LineSegmentLineSegment(segmentA, segmentB).equal();
    }

    if (segmentA instanceof QuadraticBezier && segmentB instanceof QuadraticBezier) {
      return new QuadraticBezierQuadraticBezier(segmentA, segmentB).equal();
    }

    if (segmentA instanceof Bezier && segmentB instanceof Bezier) {
      return new BezierBezier(segmentA, segmentB).equal();
    }

    if (segmentA instanceof Arc && segmentB instanceof Arc) {
      return new ArcArc(segmentA, segmentB).equal();
    }

    return false;
  }

  _consoleOutChainVertex(chain) {
    let ret = "";
    chain.elements.forEach(element => {
      ret += `[${element.segment.point1Coordinates.toString()}][${element.segment.point2Coordinates.toString()}]---->\n`;
    });
    console.log(ret);
  }

  chain(description) {
    const openChains = [];
    const closedChains = [];
    const epsilon = optioner.options.epsilon;
    description = description.clone();
    Utility.sortBy(description.annotators, [sfa => Maths.min(sfa.segment.point1X, sfa.segment.point2X), sfa => Maths.min(sfa.segment.point1Y, sfa.segment.point2Y)]);
    description.annotators = Utility.uniqWith(description.annotators, (a, b) => this._segmentEqual(a.segment, b.segment));

    while (description.annotators.length > 0) {
      const element = description.annotators[0];
      const initCoordinates = element.segment.point1Coordinates;
      const termCoordinates = element.segment.point2Coordinates;
      const matches = [];

      for (let i = 0, l = openChains.length; i < l; i++) {
        const chain = openChains[i];
        const chainFill = chain.elements[0].thisFill;

        if (Coordinates.isEqualTo(chain.headCoordinates, initCoordinates, epsilon)) {
          if (chainFill.positive !== element.thisFill.negative || chainFill.negative !== element.thisFill.positive) continue;
          if (matches.push([i, true, true]) === 2) break;
        }

        if (Coordinates.isEqualTo(chain.headCoordinates, termCoordinates, epsilon)) {
          if (chainFill.positive !== element.thisFill.positive || chainFill.negative !== element.thisFill.negative) continue;
          if (matches.push([i, true, false]) === 2) break;
        }

        if (Coordinates.isEqualTo(chain.tailCoordinates, initCoordinates, epsilon)) {
          if (chainFill.positive !== element.thisFill.positive || chainFill.negative !== element.thisFill.negative) continue;
          if (matches.push([i, false, true]) === 2) break;
        }

        if (Coordinates.isEqualTo(chain.tailCoordinates, termCoordinates, epsilon)) {
          if (chainFill.positive !== element.thisFill.negative || chainFill.negative !== element.thisFill.positive) continue;
          if (matches.push([i, false, false]) === 2) break;
        }
      }

      if (matches.length === 0) {
        openChains.push(new Chain(description.annotators.shift()));
        continue;
      }

      if (matches.length === 1) {
        const [chainIndex, atChainHead, atElementInit] = matches[0];
        const chain = openChains[chainIndex];
        chain.addElement(description.annotators.shift(), atChainHead, atElementInit);

        if (chain.isClosable()) {
          closedChains.push(chain);
          openChains.splice(chainIndex, 1);
        }

        continue;
      }

      if (matches.length === 2) {
        const [chainIndex1, atChainHead1, atElementInit1] = matches[0];
        const [chainIndex2, atChainHead2, atElementInit2] = matches[1];
        const chain1 = openChains[chainIndex1];
        const chain2 = openChains[chainIndex2];

        if (chainIndex1 === chainIndex2) {
          chain1.addElement(description.annotators.shift(), atChainHead1, atElementInit1);

          if (chain1.isClosable()) {
            closedChains.push(chain1);
            openChains.splice(chainIndex1, 1);
          }

          continue;
        }

        const chain1Longer = chain1.elements.length > chain2.elements.length;

        if (atElementInit1 === atElementInit2) {
          if (chain1Longer) {
            chain1.addElement(description.annotators.shift(), atChainHead1, atElementInit1);

            if (chain1.isClosable()) {
              closedChains.push(chain1);
              openChains.splice(chainIndex1, 1);
            }
          } else {
            chain2.addElement(description.annotators.shift(), atChainHead2, atElementInit2);

            if (chain2.isClosable()) {
              closedChains.push(chain2);
              openChains.splice(chainIndex2, 1);
            }
          }

          continue;
        }

        chain1Longer ? chain1.addElement(description.annotators.shift(), atChainHead1, atElementInit1) : chain2.addElement(description.annotators.shift(), atChainHead2, atElementInit2);
        chain1.concat(chain2, atChainHead1, atChainHead2);
        openChains.splice(chainIndex2, 1);
      }
    }

    console.log(openChains, closedChains);
    const allElements = closedChains.reduce((acc, chain) => {
      acc.push(...chain.elements);
      return acc;
    }, []);
    const fillRuleHelper = new FillRuleHelper();
    closedChains.forEach(chain => {
      const testSegment = chain.elements[0].segment;
      const localWn = fillRuleHelper.windingNumbersOfSegment(testSegment, chain.elements);
      const globalWn = fillRuleHelper.windingNumbersOfSegment(testSegment, allElements);
      const localPositiveFill = localWn.positive !== 0;
      const localNegativeFill = localWn.negative !== 0;
      const globalPositiveFill = globalWn.positive !== 0;
      const globalNegativeFill = globalWn.negative !== 0;

      if (localPositiveFill === globalPositiveFill && localNegativeFill === globalNegativeFill) {
        if (!localPositiveFill) chain.reverse();
      } else {
        if (localPositiveFill) chain.reverse();
      }
    });
    return this._geometry(closedChains, description.fillRule);
  }

  _geometry(chains, fillRule) {
    const items = [];
    chains.forEach(chain => {
      let item;
      const itemToBePolygon = chain.elements.every(sfa => sfa.segment instanceof LineSegment);
      item = itemToBePolygon ? new Polygon(true) : new Path(true);
      item.fillRule = fillRule;

      if (itemToBePolygon) {
        const polygon = item;
        const l = chain.elements.length;
        chain.elements.forEach((sfa, index) => {
          if (index === 0) {
            polygon.appendVertex(Polygon.vertex(sfa.segment.point1Coordinates));
          }

          if (index === l - 1) {
            return;
          }

          polygon.appendVertex(Polygon.vertex(sfa.segment.point2Coordinates));
        });
      } else {
        const path = item;
        const l = chain.elements.length;
        chain.elements.forEach((sfa, index) => {
          if (index === 0) {
            path.appendCommand(Path.moveTo(sfa.segment.point1Coordinates));
          }

          if (index === l - 1 && sfa.segment instanceof LineSegment) {
            return;
          }

          if (sfa.segment instanceof LineSegment) {
            path.appendCommand(Path.lineTo(sfa.segment.point2Coordinates));
          }

          if (sfa.segment instanceof QuadraticBezier) {
            path.appendCommand(Path.quadraticBezierTo(sfa.segment.controlPointCoordinates, sfa.segment.point2Coordinates));
          }

          if (sfa.segment instanceof Bezier) {
            path.appendCommand(Path.bezierTo(sfa.segment.controlPoint1Coordinates, sfa.segment.controlPoint2Coordinates, sfa.segment.point2Coordinates));
          }

          if (sfa.segment instanceof Arc) {
            path.appendCommand(Path.arcTo(sfa.segment.radiusX, sfa.segment.radiusY, sfa.segment.rotation, sfa.segment.largeArc, sfa.segment.positive, sfa.segment.point2Coordinates));
          }
        });
      }

      items.push(item);
    });
    return new Compound(items);
  }

}

class SegmentFillAnnotator {
  constructor(segment, portionParams = []) {
    this.thisFill = {
      positive: false,
      negative: false
    };
    this.thatFill = {
      positive: false,
      negative: false
    };
    this.segment = segment;
    this.portionParams = portionParams;
  }

  reverse() {
    this.segment.reverse();
    [this.thisFill.positive, this.thisFill.negative] = [this.thisFill.negative, this.thisFill.positive];
    [this.thatFill.positive, this.thatFill.negative] = [this.thatFill.negative, this.thatFill.positive];
  }

  annotateThis(segments, fillRule) {
    this.thisFill = this.annotate(segments, fillRule);
    return this;
  }

  annotateThat(segments, fillRule) {
    this.thatFill = this.annotate(segments, fillRule);
    return this;
  }

  annotate(segments, fillRule) {
    if (this.portionParams.length > 0) {
      throw new Error(`[G]You need to portion \`segment\`.`);
    }

    const ret = {
      positive: false,
      negative: false
    };

    if (fillRule === "nonzero") {
      const {
        positive: positiveWn,
        negative: negativeWn
      } = SegmentFillAnnotator._helper.windingNumbersOfSegment(this.segment, segments);

      ret.positive = positiveWn !== 0;
      ret.negative = negativeWn !== 0;
    } else {
      const {
        positive: positiveCn,
        negative: negativeCn
      } = SegmentFillAnnotator._helper.crossingNumbersOfSegment(this.segment, segments);

      ret.positive = positiveCn % 2 !== 0;
      ret.negative = negativeCn % 2 !== 0;
    }

    return ret;
  }

}
SegmentFillAnnotator._helper = new FillRuleHelper();

class Description {
  constructor(fillRule, annotators = []) {
    this.fillRule = fillRule;
    this.annotators = annotators;
  }

  clone() {
    const ret = new Description(this.fillRule);
    ret.annotators = [...this.annotators];
    return ret;
  }

}

class SegmentPortioner {
  _prepareRelationship(segmentA, segmentB) {
    if (segmentA instanceof LineSegment) {
      if (segmentB instanceof LineSegment) return {
        inverse: false,
        relationship: new LineSegmentLineSegment(segmentA, segmentB)
      };
      if (segmentB instanceof QuadraticBezier) return {
        inverse: false,
        relationship: new LineSegmentQuadraticBezier(segmentA, segmentB)
      };
      if (segmentB instanceof Bezier) return {
        inverse: false,
        relationship: new LineSegmentBezier(segmentA, segmentB)
      };
      if (segmentB instanceof Arc) return {
        inverse: false,
        relationship: new LineSegmentArc(segmentA, segmentB)
      };
    }

    if (segmentA instanceof QuadraticBezier) {
      if (segmentB instanceof LineSegment) return {
        inverse: true,
        relationship: new LineSegmentQuadraticBezier(segmentB, segmentA)
      };
      if (segmentB instanceof QuadraticBezier) return {
        inverse: false,
        relationship: new QuadraticBezierQuadraticBezier(segmentA, segmentB)
      };
      if (segmentB instanceof Bezier) return {
        inverse: false,
        relationship: new QuadraticBezierBezier(segmentA, segmentB)
      };
      if (segmentB instanceof Arc) return {
        inverse: false,
        relationship: new QuadraticBezierArc(segmentA, segmentB)
      };
    }

    if (segmentA instanceof Bezier) {
      if (segmentB instanceof LineSegment) return {
        inverse: true,
        relationship: new LineSegmentBezier(segmentB, segmentA)
      };
      if (segmentB instanceof QuadraticBezier) return {
        inverse: true,
        relationship: new QuadraticBezierBezier(segmentB, segmentA)
      };
      if (segmentB instanceof Bezier) return {
        inverse: false,
        relationship: new BezierBezier(segmentA, segmentB)
      };
      if (segmentB instanceof Arc) return {
        inverse: false,
        relationship: new BezierArc(segmentA, segmentB)
      };
    }

    if (segmentA instanceof Arc) {
      if (segmentB instanceof LineSegment) return {
        inverse: true,
        relationship: new LineSegmentArc(segmentB, segmentA)
      };
      if (segmentB instanceof QuadraticBezier) return {
        inverse: true,
        relationship: new QuadraticBezierArc(segmentB, segmentA)
      };
      if (segmentB instanceof Bezier) return {
        inverse: true,
        relationship: new BezierArc(segmentB, segmentA)
      };
      if (segmentB instanceof Arc) return {
        inverse: false,
        relationship: new ArcArc(segmentA, segmentB)
      };
    }

    throw new Error("[G]Impossible.");
  }

  _nn(rs) {
    const epsilon = optioner.options.epsilon;
    const aParams = [];
    const bParams = [];
    const aSegment = rs.geometry1;
    const bSegment = rs.geometry2;

    if (rs.onSameTrajectory()) {
      const a1t = bSegment.getTimeOfPointExtend(aSegment.point1Coordinates);
      const a2t = bSegment.getTimeOfPointExtend(aSegment.point2Coordinates);
      const b1t = aSegment.getTimeOfPointExtend(bSegment.point1Coordinates);
      const b2t = aSegment.getTimeOfPointExtend(bSegment.point2Coordinates);
      if (Maths.between(a1t, 0, 1, true, true, epsilon)) bParams.push(a1t);
      if (Maths.between(a2t, 0, 1, true, true, epsilon)) bParams.push(a2t);
      if (Maths.between(b1t, 0, 1, true, true, epsilon)) aParams.push(b1t);
      if (Maths.between(b2t, 0, 1, true, true, epsilon)) aParams.push(b2t);
    } else {
      rs.intersection().forEach(i => {
        if (Maths.between(i.t1, 0, 1, true, true, epsilon)) aParams.push(i.t1);
        if (Maths.between(i.t2, 0, 1, true, true, epsilon)) bParams.push(i.t2);
      });
    }

    return {
      aParams,
      bParams
    };
  }

  _mn(rs, inverse) {
    const epsilon = optioner.options.epsilon;
    const aParams = [];
    const bParams = [];
    rs.intersection().forEach(i => {
      if (Maths.between(i.t1, 0, 1, true, true, epsilon)) inverse ? bParams.push(i.t1) : aParams.push(i.t1);
      if (Maths.between(i.t2, 0, 1, true, true, epsilon)) inverse ? aParams.push(i.t2) : bParams.push(i.t2);
    });
    return {
      aParams,
      bParams
    };
  }

  _ba(rs, inverse) {
    const epsilon = optioner.options.epsilon;
    const aParams = [];
    const bParams = [];
    const [sa, ea] = rs.geometry2.getStartEndAngles();
    const positive = rs.geometry2.positive;
    rs.intersection().forEach(i => {
      if (Maths.between(i.t1, 0, 1, true, true, epsilon)) inverse ? bParams.push(i.t1) : aParams.push(i.t1);
      if (Angle.between(i.a2, sa, ea, positive, true, true, epsilon)) inverse ? aParams.push(i.a2) : bParams.push(i.a2);
    });
    return {
      aParams,
      bParams
    };
  }

  _aa(rs) {
    const epsilon = optioner.options.epsilon;
    const aParams = [];
    const bParams = [];
    const aSegment = rs.geometry1;
    const [asa, aea] = rs.geometry1.getStartEndAngles();
    const aPositive = rs.geometry1.positive;
    const bSegment = rs.geometry2;
    const [bsa, bea] = rs.geometry2.getStartEndAngles();
    const bPositive = rs.geometry2.positive;

    if (rs.onSameTrajectory()) {
      const a1a = bSegment.getAngleOfPoint(aSegment.point1Coordinates);
      const a2a = bSegment.getAngleOfPoint(aSegment.point2Coordinates);
      const b1a = aSegment.getAngleOfPoint(bSegment.point1Coordinates);
      const b2a = aSegment.getAngleOfPoint(bSegment.point2Coordinates);
      if (Angle.between(a1a, bsa, bea, bPositive, true, true, epsilon)) bParams.push(a1a);
      if (Angle.between(a2a, bsa, bea, bPositive, true, true, epsilon)) bParams.push(a2a);
      if (Angle.between(b1a, asa, aea, aPositive, true, true, epsilon)) aParams.push(b1a);
      if (Angle.between(b2a, asa, aea, aPositive, true, true, epsilon)) aParams.push(b1a);
    } else {
      rs.intersection().forEach(i => {
        if (Angle.between(i.a1, asa, aea, aPositive, true, true, epsilon)) aParams.push(i.a1);
        if (Angle.between(i.a2, bsa, bea, bPositive, true, true, epsilon)) bParams.push(i.a2);
      });
    }

    return {
      aParams,
      bParams
    };
  }

  portion(segmentA, segmentB) {
    const {
      inverse,
      relationship: rs
    } = this._prepareRelationship(segmentA, segmentB);

    if (rs instanceof LineSegmentLineSegment || rs instanceof QuadraticBezierQuadraticBezier || rs instanceof BezierBezier) {
      return this._nn(rs);
    }

    if (rs instanceof LineSegmentQuadraticBezier || rs instanceof LineSegmentBezier || rs instanceof QuadraticBezierBezier) {
      return this._mn(rs, inverse);
    }

    if (rs instanceof LineSegmentArc || rs instanceof QuadraticBezierArc || rs instanceof BezierArc) {
      return this._ba(rs, inverse);
    }

    if (rs instanceof ArcArc) {
      return this._aa(rs);
    }

    throw new Error("[G]Impossible.");
  }

}

class SegmentProcessor {
  constructor() {
    this._portioner = new SegmentPortioner();
  }

  describe(advancedGeometry) {
    const epsilon = optioner.options.epsilon;
    const originalDesc = new Description(advancedGeometry.fillRule, advancedGeometry.getSegments(true, true).map(segment => new SegmentFillAnnotator(segment)));

    for (let i = 0, l = originalDesc.annotators.length; i < l; i++) {
      const sfa = originalDesc.annotators[i];

      if (sfa.segment instanceof Bezier) {
        const tsi = sfa.segment.selfIntersection();

        if (tsi.length !== 0) {
          const beziers = sfa.segment.splitAtTimes(tsi);
          const [head, ...tail] = beziers;
          sfa.segment = head;
          tail.forEach(bezier => originalDesc.annotators.push(new SegmentFillAnnotator(bezier)));
          continue;
        }

        if (sfa.segment.isTripleLines()) {
          const points = [sfa.segment.point1, ...sfa.segment.extrema().map(([p]) => p), sfa.segment.point2];
          const lineSegments = points.reduce((acc, _, index) => {
            if (points[index - 1] !== undefined) acc.push(new LineSegment(points[index - 1], points[index]));
            return acc;
          }, []);
          const [head, ...tail] = lineSegments;
          sfa.segment = head;
          tail.forEach(lineSegment => originalDesc.annotators.push(new SegmentFillAnnotator(lineSegment)));
          continue;
        }

        sfa.segment = sfa.segment.nonDimensionallyDegenerate();
      }

      if (sfa.segment instanceof QuadraticBezier) {
        if (sfa.segment.isDoubleLines()) {
          const points = [sfa.segment.point1, ...sfa.segment.extrema().map(([p]) => p), sfa.segment.point2];
          const lineSegments = points.reduce((acc, _, index) => {
            if (points[index - 1] !== undefined) acc.push(new LineSegment(points[index - 1], points[index]));
            return acc;
          }, []);
          const [head, ...tail] = lineSegments;
          sfa.segment = head;
          tail.forEach(lineSegment => originalDesc.annotators.push(new SegmentFillAnnotator(lineSegment)));
          continue;
        }

        sfa.segment = sfa.segment.nonDimensionallyDegenerate();
      }
    }

    console.time("params");

    for (let i = 0, m = originalDesc.annotators.length - 1; i < m; i++) {
      const a = originalDesc.annotators[i];

      for (let j = i + 1, n = originalDesc.annotators.length; j < n; j++) {
        const b = originalDesc.annotators[j];

        const {
          aParams,
          bParams
        } = this._portioner.portion(a.segment, b.segment);

        a.portionParams.push(...aParams);
        b.portionParams.push(...bParams);
      }
    }

    console.timeEnd("params");
    console.time("portion");
    const portionedDesc = new Description(originalDesc.fillRule);
    originalDesc.annotators.forEach(sfa => {
      if (sfa.portionParams.length !== 0) {
        const portionParams = Utility.uniqWith(sfa.portionParams, (a, b) => Maths.equalTo(a, b, epsilon));
        const portions = sfa.segment instanceof Arc ? sfa.segment.splitAtAngles(portionParams) : sfa.segment.splitAtTimes(portionParams);
        portions.map(portion => new SegmentFillAnnotator(portion)).forEach(pfa => {
          pfa.annotateThis(originalDesc.annotators, originalDesc.fillRule);
          portionedDesc.annotators.push(pfa);
        });
      } else {
        sfa.annotateThis(originalDesc.annotators, originalDesc.fillRule);
        portionedDesc.annotators.push(sfa);
      }
    });
    console.timeEnd("portion");
    return portionedDesc;
  }

  combine(descriptionA, descriptionB) {
    const epsilon = optioner.options.epsilon;

    for (let i = 0, m = descriptionA.annotators.length; i < m; i++) {
      const a = descriptionA.annotators[i];

      for (let j = 0, n = descriptionB.annotators.length; j < n; j++) {
        const b = descriptionB.annotators[j];

        const {
          aParams,
          bParams
        } = this._portioner.portion(a.segment, b.segment);

        a.portionParams.push(...aParams);
        b.portionParams.push(...bParams);
      }
    }

    const fillRule = descriptionA.fillRule;
    const combinedDesc = new Description(fillRule);
    descriptionA.annotators.forEach(sfa => {
      if (sfa.portionParams.length !== 0) {
        const portionParams = Utility.uniqWith(sfa.portionParams, (a, b) => Maths.equalTo(a, b, epsilon));
        const portions = sfa.segment instanceof Arc ? sfa.segment.splitAtAngles(portionParams) : sfa.segment.splitAtTimes(portionParams);
        portions.map(portion => {
          const ret = new SegmentFillAnnotator(portion);
          ret.thisFill = { ...sfa.thisFill
          };
          return ret;
        }).forEach(pfa => {
          pfa.annotateThat(descriptionB.annotators, descriptionB.fillRule);
          combinedDesc.annotators.push(pfa);
        });
      } else {
        const copy = new SegmentFillAnnotator(sfa.segment);
        copy.thisFill = { ...sfa.thisFill
        };
        copy.annotateThat(descriptionB.annotators, descriptionB.fillRule);
        combinedDesc.annotators.push(copy);
      }
    });
    descriptionB.annotators.forEach(sfa => {
      if (sfa.portionParams.length !== 0) {
        const portionParams = Utility.uniqWith(sfa.portionParams, (a, b) => Maths.equalTo(a, b, epsilon));
        const portions = sfa.segment instanceof Arc ? sfa.segment.splitAtAngles(portionParams) : sfa.segment.splitAtTimes(portionParams);
        portions.map(portion => {
          const ret = new SegmentFillAnnotator(portion);
          ret.thatFill = { ...sfa.thisFill
          };
          return ret;
        }).forEach(pfa => {
          pfa.annotateThis(descriptionA.annotators, descriptionA.fillRule);
          combinedDesc.annotators.push(pfa);
        });
      } else {
        const copy = new SegmentFillAnnotator(sfa.segment);
        copy.thatFill = { ...sfa.thisFill
        };
        copy.annotateThis(descriptionA.annotators, descriptionA.fillRule);
        combinedDesc.annotators.push(copy);
      }
    });
    return combinedDesc;
  }

}

class SegmentSelector {
  _select(description, selection) {
    const retDesc = new Description(description.fillRule);
    description.annotators.forEach(sfa => {
      let index = 0;
      index += sfa.thisFill.positive ? 8 : 0;
      index += sfa.thisFill.negative ? 4 : 0;
      index += sfa.thatFill.positive ? 2 : 0;
      index += sfa.thatFill.negative ? 1 : 0;

      if (selection[index] !== 0) {
        const copy = new SegmentFillAnnotator(sfa.segment);
        copy.thisFill.positive = selection[index] === 1;
        copy.thisFill.negative = selection[index] === -1;
        copy.thatFill.positive = false;
        copy.thatFill.negative = false;
        retDesc.annotators.push(copy);
      }
    });
    return retDesc;
  }

  selfUnion(description) {
    return this._select(description, [0, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
  }

  union(description) {
    return this._select(description, [0, -1, 1, 0, -1, -1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0]);
  }

  intersection(description) {
    return this._select(description, [0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 1, 1, 0, -1, 1, 0]);
  }

  difference(description) {
    return this._select(description, [0, 0, 0, 0, -1, 0, -1, 0, 1, 1, 0, 0, 0, 1, -1, 0]);
  }

  differenceRev(description) {
    return this._select(description, [0, -1, 1, 0, 0, 0, 1, 1, 0, -1, 0, -1, 0, 0, 0, 0]);
  }

  exclusion(description) {
    return this._select(description, [0, -1, 1, 0, -1, 0, 0, 1, 1, 0, 0, -1, 0, 1, -1, 0]);
  }

}

class BooleanOperation extends BaseObject {
  constructor(...args) {
    super(...args);
    this._processor = new SegmentProcessor();
    this._selector = new SegmentSelector();
    this._chainer = new SegmentChainer();
  }

  describe(advancedGeometry) {
    return this._processor.describe(advancedGeometry);
  }

  combine(descriptionA, descriptionB) {
    return this._processor.combine(descriptionA, descriptionB);
  }

  selectSelfUnion(description) {
    return this._selector.selfUnion(description);
  }

  selectUnion(description) {
    return this._selector.union(description);
  }

  selectIntersection(description) {
    return this._selector.intersection(description);
  }

  selectDifference(description) {
    return this._selector.difference(description);
  }

  selectDifferenceRev(description) {
    return this._selector.differenceRev(description);
  }

  selectExclusion(description) {
    return this._selector.exclusion(description);
  }

  chain(description) {
    return this._chainer.chain(description);
  }

  selfUnion(advancedGeometry) {
    const desc = this.describe(advancedGeometry);
    const selected = this.selectSelfUnion(desc);
    return this._chainer.chain(selected);
  }

  _operate(advancedGeometry1, advancedGeometry2, methodName) {
    const desc1 = this.describe(advancedGeometry1);
    const desc2 = this.describe(advancedGeometry2);
    const combined = this.combine(desc1, desc2);
    const selected = this[methodName].call(this, combined);
    return this._chainer.chain(selected);
  }

  union(advancedGeometry1, advancedGeometry2) {
    return this._operate(advancedGeometry1, advancedGeometry2, "selectUnion");
  }

  intersect(advancedGeometry1, advancedGeometry2) {
    return this._operate(advancedGeometry1, advancedGeometry2, "selectIntersection");
  }

  difference(advancedGeometry1, advancedGeometry2) {
    return this._operate(advancedGeometry1, advancedGeometry2, "selectDifference");
  }

  differenceRev(advancedGeometry1, advancedGeometry2) {
    return this._operate(advancedGeometry1, advancedGeometry2, "selectDifferenceRev");
  }

  exclusion(advancedGeometry1, advancedGeometry2) {
    return this._operate(advancedGeometry1, advancedGeometry2, "selectExclusion");
  }

  toString() {
    throw new Error("Method not implemented.");
  }

  toArray() {
    throw new Error("Method not implemented.");
  }

  toObject() {
    throw new Error("Method not implemented.");
  }

}

const DATA_KEY_RENDERER_INITIALIZED = "data-renderer-initialized";
class Renderer {
  constructor() {
    this.style_ = {};
    this.constantImage = false;
    this.view = void 0;
  }

  manageRendererInitialized_() {
    if (this.container.getAttribute(DATA_KEY_RENDERER_INITIALIZED) !== null) {
      throw new Error("[G]A renderer has been initialized on this element.");
    }

    this.container.setAttribute(DATA_KEY_RENDERER_INITIALIZED, "");
  }

  paintOrder(order) {
    this.style_.paintOrder = order;
  }

  noFill(noFill) {
    this.style_.noFill = noFill;
  }

  noStroke(noStroke) {
    this.style_.noStroke = noStroke;
  }

  fill(fill) {
    this.style_.fill = fill;
  }

  stroke(stroke) {
    this.style_.stroke = stroke;
  }

  strokeWidth(strokeWidth) {
    Assert.isPositiveNumber(strokeWidth, "strokeWidth");
    const scale = this.display.density * this.display.zoom;
    this.style_.strokeWidth = strokeWidth / scale;
  }

  strokeDash(strokeDash) {
    Assert.condition(strokeDash.every(n => Type.isRealNumber(n)), "[G]The `strokeDash` should be an array of real numbers.");
    const scale = this.display.density * this.display.zoom;
    this.style_.strokeDash = strokeDash.map(n => n / scale);
  }

  strokeDashOffset(strokeDashOffset) {
    Assert.isRealNumber(strokeDashOffset, "strokeDashOffset");
    const scale = this.display.density * this.display.zoom;
    this.style_.strokeDashOffset = strokeDashOffset / scale;
  }

  strokeLineJoin(strokeLineJoin) {
    this.style_.strokeLineJoin = strokeLineJoin;
  }

  strokeLineCap(strokeLineCap) {
    this.style_.strokeLineCap = strokeLineCap;
  }

  strokeMiterLimit(strokeMiterLimit) {
    this.style_.strokeMiterLimit = strokeMiterLimit;
  }

}

class TextMeasurer {
  static measure(style, baseline, text) {
    this._context.font = `${style.fontBold ? "bold" : ""} ${style.fontItalic ? "italic" : ""} ${style.fontSize}px ${style.fontFamily}`;
    this._context.textBaseline = baseline;

    const metrics = this._context.measureText(text);

    return [metrics.width, metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent];
  }

}
TextMeasurer._context = document.createElement("canvas").getContext("2d");

const INTERFACE_DEFAULTS = {
  showAxis: true,
  axisColor: "#666666",
  showLabel: true,
  labelFillColor: "#000000",
  labelStrokeColor: "#ffffff",
  showGrid: true,
  showPrimaryGridOnly: false,
  primaryGridColor: "#d0d0d0",
  secondaryGridColor: "#f0f0f0"
};
const INTERFACE_INTERNAL_DEFAULTS = {
  onlyGridPatternGridSize: 50,
  onlyGridPatternImageSize: 100,
  axisArrowLength: 6,
  axisArrowWidth: 4,
  labelXOffset: 12,
  labelYOffset: 6,
  labelFontSize: 12,
  exponentialNotationLower: -6,
  exponentialNotationUpper: 6
};
class Interface {
  constructor(renderer, interfaceSettings = {}) {
    this._renderer = void 0;
    this._xEt = false;
    this._xEb = false;
    this._yEl = false;
    this._yEr = false;
    this._tOx = NaN;
    this._tOy = NaN;
    this._ratio = NaN;
    this._gridSize = NaN;
    this._imageSize = NaN;
    this._tOxRem = NaN;
    this._tOyRem = NaN;
    this._svgImageElementDecodeSupported = true;
    this.showAxis = INTERFACE_DEFAULTS.showAxis;
    this.axisColor = INTERFACE_DEFAULTS.axisColor;
    this.showLabel = INTERFACE_DEFAULTS.showLabel;
    this.labelFillColor = INTERFACE_DEFAULTS.labelFillColor;
    this.labelStrokeColor = INTERFACE_DEFAULTS.labelStrokeColor;
    this.showGrid = INTERFACE_DEFAULTS.showGrid;
    this.showPrimaryGridOnly = INTERFACE_DEFAULTS.showPrimaryGridOnly;
    this.primaryGridColor = INTERFACE_DEFAULTS.primaryGridColor;
    this.secondaryGridColor = INTERFACE_DEFAULTS.secondaryGridColor;
    this._renderer = renderer;
    Object.assign(this, Utility.cloneDeep(interfaceSettings));
    this._svgImageElementDecodeSupported = "decode" in document.createElementNS("http://www.w3.org/2000/svg", "image");
  }

  get renderer() {
    return this._renderer;
  }

  _disassembleExponentialNotation(n) {
    const m = n.toExponential().match(/(?<coef>\d(.\d+)?)e(?<exp>[+-]\d+)/i);
    if (m === null) throw new Error("[G]The `zoom` is `NaN` or `Infinity`.");
    return [Number(m.groups["coef"]), Number(m.groups["exp"])];
  }

  _ratioOf(zoom) {
    const [coef] = this._disassembleExponentialNotation(zoom);

    return Number((coef >= 1 && coef < 2 ? coef / 1 : coef >= 2 && coef < 5 ? coef / 2 : coef >= 5 && coef < 10 ? coef / 5 : NaN).toFixed(2));
  }

  _adjustHexColorString(hexColor) {
    return hexColor.replace("#", "%23");
  }

  _exactValue(n, precision = 14) {
    return Number(n.toPrecision(precision));
  }

  _labelValue(n) {
    const {
      exponentialNotationUpper,
      exponentialNotationLower
    } = INTERFACE_INTERNAL_DEFAULTS;
    n = this._exactValue(n);

    let [, exp] = this._disassembleExponentialNotation(n);

    if (exp > exponentialNotationUpper || exp < exponentialNotationLower) {
      return n.toExponential().replace("+", "");
    }

    return n.toString();
  }

  _decodeImage(width, height, svgDataUrl) {
    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("width", `${width}`);
    image.setAttribute("height", `${height}`);
    let promise;

    if (!this._svgImageElementDecodeSupported) {
      promise = new Promise((resolve, reject) => {
        image.onload = function () {
          resolve();
        };

        image.onerror = function () {
          reject();
        };
      });
      image.setAttribute("href", svgDataUrl);
    } else {
      image.setAttribute("href", svgDataUrl);
      promise = image.decode();
    }

    return [promise, image];
  }

  prepare_() {
    const {
      globalTransformation,
      width,
      height,
      zoom
    } = this.renderer.display;
    const {
      onlyGridPatternGridSize,
      onlyGridPatternImageSize,
      labelXOffset,
      labelYOffset
    } = INTERFACE_INTERNAL_DEFAULTS;
    const [tOx, tOy] = TransformationMatrix.transformCoordinates(globalTransformation, [0, 0]);
    [this._tOx, this._tOy] = [tOx, tOy];
    this._xEt = tOy <= 0;
    this._xEb = tOy >= height - labelXOffset;
    this._yEl = tOx <= labelYOffset;
    this._yEr = tOx >= width;

    const ratio = this._ratioOf(zoom);

    this._ratio = ratio;

    const gridSize = this._exactValue(this._ratio * onlyGridPatternGridSize);

    const imageSize = this._exactValue(this._ratio * onlyGridPatternImageSize);

    this._gridSize = gridSize;
    this._imageSize = imageSize;
    const [tOxRem, tOyRem] = [tOx < 0 ? tOx % gridSize + gridSize : tOx % gridSize, tOy < 0 ? tOy % gridSize + gridSize : tOy % gridSize];
    [this._tOxRem, this._tOyRem] = [tOxRem, tOyRem];
  }

  labelImage_() {
    let {
      labelFillColor,
      labelStrokeColor
    } = this;
    labelFillColor = this._adjustHexColorString(labelFillColor);
    labelStrokeColor = this._adjustHexColorString(labelStrokeColor);
    const {
      labelFontSize,
      labelXOffset,
      labelYOffset
    } = INTERFACE_INTERNAL_DEFAULTS;
    const {
      _xEt: xEt,
      _xEb: xEb,
      _yEl: yEl,
      _yEr: yEr,
      _tOx: tOx,
      _tOy: tOy,
      _tOxRem: tOxRem,
      _tOyRem: tOyRem,
      _gridSize: gridSize
    } = this;
    const {
      density,
      zoom,
      width: w,
      height: h,
      xAxisPositiveOnRight: xPr,
      yAxisPositiveOnBottom: yPb
    } = this.renderer.display;
    const scale = density * zoom;
    const [startXPosition, startYPosition] = [tOxRem, tOyRem];
    const [startXValue, startYValue] = [this._exactValue(xPr ? (tOxRem - tOx) / scale : (tOx - tOxRem) / scale), this._exactValue(yPb ? (tOyRem - tOy) / scale : (tOy - tOyRem) / scale)];
    let xAxisLabels = "";
    let yAxisLabels = "";

    for (let i = 0; i < w; i += gridSize) {
      const [x, y] = xEt ? [startXPosition + i, labelXOffset] : xEb ? [startXPosition + i, h - labelXOffset] : [startXPosition + i, tOy + labelXOffset];
      const value = xPr ? this._labelValue(startXValue + this._exactValue(i / scale)) : this._labelValue(startXValue - this._exactValue(i / scale));
      if (value === "0") continue;
      xAxisLabels += `%3Ctext x='${x}' y='${y}' text-anchor='middle'%3E${value}%3C/text%3E`;
    }

    for (let i = 0; i < h; i += gridSize) {
      const [x, y] = yEl ? [labelYOffset, startYPosition + i] : yEr ? [w - labelYOffset, startYPosition + i] : [tOx - labelYOffset, startYPosition + i];
      const value = yPb ? this._labelValue(startYValue + this._exactValue(i / scale)) : this._labelValue(startYValue - this._exactValue(i / scale));
      if (value === "0") continue;
      yAxisLabels += yEl ? `%3Ctext x='${x}' y='${y}' text-anchor='start'%3E${value}%3C/text%3E` : `%3Ctext x='${x}' y='${y}' text-anchor='end'%3E${value}%3C/text%3E`;
    }

    let originLabel = "";

    if (!xEt && !xEb && !yEl && !yEr) {
      originLabel += `%3Ctext x='${tOx - labelYOffset}' y='${tOy + labelXOffset}' text-anchor='end'%3E0%3C/text%3E`;
    }

    const svgDataUrl = `data:image/svg+xml;charset=utf8,` + `%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' width='${w}' height='${h}'%3E` + `%3Cg fill='${labelFillColor}' dominant-baseline='middle' font-size='${labelFontSize}' font-family='sans-serif' stroke='${labelStrokeColor}' stroke-width='3' paint-order='stroke'%3E` + originLabel + xAxisLabels + yAxisLabels + `%3C/g%3E` + `%3C/svg%3E`;
    return this._decodeImage(w, h, svgDataUrl);
  }

  axisImage_() {
    let {
      axisColor
    } = this;
    axisColor = this._adjustHexColorString(axisColor);
    const {
      axisArrowLength,
      axisArrowWidth
    } = INTERFACE_INTERNAL_DEFAULTS;
    const {
      _tOx: tOx,
      _tOy: tOy
    } = this;
    const {
      width: w,
      height: h,
      xAxisPositiveOnRight: xPr,
      yAxisPositiveOnBottom: yPb
    } = this.renderer.display;
    let xAxisD = "";
    let yAxisD = "";
    let xArrowD = "";
    let yArrowD = "";
    xAxisD = `M0,${tOy}h${w}`;
    xArrowD = xPr ? `M${w - axisArrowLength},${tOy - axisArrowWidth}L${w},${tOy}L${w - axisArrowLength},${tOy + axisArrowWidth}` : `M${axisArrowLength},${tOy - axisArrowWidth}L0,${tOy}L${axisArrowLength},${tOy + axisArrowWidth}`;
    yAxisD = `M${tOx},0v${h}`;
    yArrowD = yPb ? `M${tOx - axisArrowWidth},${h - axisArrowLength}L${tOx},${h}L${tOx + axisArrowWidth},${h - axisArrowLength}` : `M${tOx - axisArrowWidth},${axisArrowLength}L${tOx},0L${tOx + axisArrowWidth},${axisArrowLength}`;
    const svgDataUrl = `data:image/svg+xml;charset=utf8,` + `%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' width='${w}' height='${h}'%3E` + `%3Cpath d='${xAxisD}' vector-effect='non-scaling-stroke' shape-rendering='crispEdges' stroke='${axisColor}' stroke-width='1'/%3E` + `%3Cpath d='${xArrowD}' stroke='${axisColor}' fill='none' stroke-width='1'/%3E` + `%3Cpath d='${yAxisD}' vector-effect='non-scaling-stroke' shape-rendering='crispEdges' stroke='${axisColor}' stroke-width='1'/%3E` + `%3Cpath d='${yArrowD}' stroke='${axisColor}' fill='none' stroke-width='1'/%3E` + `%3C/svg%3E`;
    return this._decodeImage(w, h, svgDataUrl);
  }

  gridPatternImage_() {
    let {
      showPrimaryGridOnly,
      primaryGridColor,
      secondaryGridColor
    } = this;
    primaryGridColor = this._adjustHexColorString(primaryGridColor);
    secondaryGridColor = this._adjustHexColorString(secondaryGridColor);
    const {
      onlyGridPatternImageSize,
      onlyGridPatternGridSize
    } = INTERFACE_INTERNAL_DEFAULTS;
    const {
      _tOxRem: tOxRem,
      _tOyRem: tOyRem,
      _ratio: ratio,
      _imageSize: imageSize
    } = this;
    const [viewBoxX, viewBoxY] = [tOxRem === 0 ? 0 : onlyGridPatternGridSize - tOxRem / ratio, tOyRem === 0 ? 0 : onlyGridPatternGridSize - tOyRem / ratio];
    const svgDataUrl = `data:image/svg+xml;charset=utf8,` + `%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBoxX} ${viewBoxY} ${onlyGridPatternImageSize} ${onlyGridPatternImageSize}' width='${imageSize}' height='${imageSize}'%3E` + (!showPrimaryGridOnly ? `%3Cpath d='M0,10h150M0,20h150M0,30h150M0,40h150M0,60h150M0,70h150M0,80h150M0,90h150M0,110h150M0,120h150M0,130h150M0,140h150M10,0v150M20,0v150M30,0v150M40,0v150M60,0v150M70,0v150M80,0v150M90,0v150M110,0v150M120,0v150M130,0v150M140,0v150'
                    vector-effect='non-scaling-stroke' shape-rendering='crispEdges'
                    id='secondaryGrid' stroke='${secondaryGridColor}' stroke-width='1'/%3E` : "") + `%3Cpath d='M0,0h150M0,50h150M0,100h150M0,0v150M50,0v150M100,0v150' 
                    vector-effect='non-scaling-stroke' shape-rendering='crispEdges' 
                    id='primaryGrid' stroke='${primaryGridColor}' stroke-width='1'/%3E` + `%3C/svg%3E`;
    return this._decodeImage(imageSize, imageSize, svgDataUrl);
  }

}

class CanvasInterface extends Interface {
  constructor(renderer, interfaceSettings) {
    super(renderer, interfaceSettings);
    this._interfaceBuffer = document.createElement("canvas").getContext("2d");
  }

  async create() {
    this.prepare_();
    this._interfaceBuffer.canvas.width = this.renderer.display.width;
    this._interfaceBuffer.canvas.height = this.renderer.display.height;
    await this._createGrid();
    await this._createAxis();
    await this._createLabel();
    return this._interfaceBuffer.canvas;
  }

  async _createLabel() {
    if (!this.showLabel) return;
    const [promise, img] = this.labelImage_();
    return promise.then(() => {
      this._interfaceBuffer.drawImage(img, 0, 0);
    });
  }

  async _createAxis() {
    if (!this.showAxis) return;
    const [promise, img] = this.axisImage_();
    return promise.then(() => {
      this._interfaceBuffer.drawImage(img, 0, 0);
    });
  }

  async _createGrid() {
    if (!this.showGrid) return;
    const [promise, img] = this.gridPatternImage_();
    return promise.then(() => {
      const pattern = this._interfaceBuffer.createPattern(img, "repeat");

      this._interfaceBuffer.fillStyle = pattern;

      this._interfaceBuffer.fillRect(0, 0, this.renderer.display.width, this.renderer.display.height);
    });
  }

}

const DEFAULT_CONTAINER_WIDTH = 300;
const DEFAULT_CONTAINER_HEIGHT = 150;
const DISPLAY_DEFAULTS = {
  density: 1,
  zoom: 1,
  origin: [0, 0],
  pan: [0, 0],
  xAxisPositiveOnRight: true,
  yAxisPositiveOnBottom: true
};
const DISPLAY_DEFAULT_RANGES = {
  minDensity: Maths.pow(10, -5),
  maxDensity: Maths.pow(10, 5),
  maxZoom: Maths.pow(10, 8),
  minZoom: Maths.pow(10, -8),
  maxOrigin: Maths.pow(2, 32),
  minOrigin: -Maths.pow(2, 32),
  maxPan: Maths.pow(2, 44),
  minPan: -Maths.pow(2, 44)
};
class Display {
  constructor(renderer, displaySettings = {}) {
    this._renderer = void 0;
    this._density = DISPLAY_DEFAULTS.density;
    this._zoom = DISPLAY_DEFAULTS.zoom;
    this._origin = DISPLAY_DEFAULTS.origin;
    this._pan = DISPLAY_DEFAULTS.pan;
    this._xAxisPositiveOnRight = DISPLAY_DEFAULTS.xAxisPositiveOnRight;
    this._yAxisPositiveOnBottom = DISPLAY_DEFAULTS.yAxisPositiveOnBottom;
    this._globalTransformation = TransformationMatrix.identity();
    this._globalViewBox = [NaN, NaN, NaN, NaN];
    this._renderer = renderer;
    Object.assign(this, Utility.cloneDeep(displaySettings));
  }

  get width() {
    return Number(this._renderer.container.getAttribute("width")) || DEFAULT_CONTAINER_WIDTH;
  }

  set width(value) {
    Assert.isPositiveNumber(value, "width");

    this._renderer.container.setAttribute("width", `${value}`);

    this._refresh();
  }

  get height() {
    return Number(this._renderer.container.getAttribute("height")) || DEFAULT_CONTAINER_HEIGHT;
  }

  set height(value) {
    Assert.isPositiveNumber(value, "height");

    this._renderer.container.setAttribute("height", `${value}`);

    this._refresh();
  }

  get density() {
    return this._density;
  }

  set density(value) {
    Assert.isPositiveNumber(value, "density");
    Assert.condition(/^1e[+-]\d+$/i.test(value.toExponential()), "[G]The `density` should be a power of 10.");
    value = Maths.clamp(value, DISPLAY_DEFAULT_RANGES.minDensity, DISPLAY_DEFAULT_RANGES.maxDensity);
    this._density = value;

    this._refresh();
  }

  get zoom() {
    return this._zoom;
  }

  set zoom(value) {
    Assert.isPositiveNumber(value, "zoom");
    value = Maths.clamp(value, DISPLAY_DEFAULT_RANGES.minZoom, DISPLAY_DEFAULT_RANGES.maxZoom);
    this._zoom = Number(value.toPrecision(2));

    this._refresh();
  }

  get origin() {
    return [...this._origin];
  }

  set origin(value) {
    Assert.isCoordinates(value, "origin");
    let [ox, oy] = value;
    ox = Maths.clamp(ox, DISPLAY_DEFAULT_RANGES.minOrigin, DISPLAY_DEFAULT_RANGES.maxOrigin);
    oy = Maths.clamp(oy, DISPLAY_DEFAULT_RANGES.minOrigin, DISPLAY_DEFAULT_RANGES.maxOrigin);
    this._origin = [ox, oy];

    this._refresh();
  }

  get pan() {
    return [...this._pan];
  }

  set pan(value) {
    Assert.isCoordinates(value, "pan");
    let [px, py] = value;
    px = Maths.clamp(px, DISPLAY_DEFAULT_RANGES.minPan, DISPLAY_DEFAULT_RANGES.maxPan);
    py = Maths.clamp(py, DISPLAY_DEFAULT_RANGES.minPan, DISPLAY_DEFAULT_RANGES.maxPan);
    this._pan = [px, py];

    this._refresh();
  }

  get xAxisPositiveOnRight() {
    return this._xAxisPositiveOnRight;
  }

  set xAxisPositiveOnRight(value) {
    this._xAxisPositiveOnRight = value;

    this._refresh();
  }

  get yAxisPositiveOnBottom() {
    return this._yAxisPositiveOnBottom;
  }

  set yAxisPositiveOnBottom(value) {
    this._yAxisPositiveOnBottom = value;

    this._refresh();
  }

  get globalTransformation() {
    return [...this._globalTransformation];
  }

  get globalViewBox() {
    return [...this._globalViewBox];
  }

  _refresh() {
    const {
      width,
      height,
      density,
      zoom,
      origin,
      pan,
      xAxisPositiveOnRight: xPr,
      yAxisPositiveOnBottom: yPb
    } = this;
    const scale = density * zoom;
    const [offsetX, offsetY] = [Coordinates.x(origin) + Coordinates.x(pan), Coordinates.y(origin) + Coordinates.y(pan)];
    let gt = TransformationMatrix.identity();
    gt = TransformationMatrix.multiply(gt, TransformationMatrix.translate(offsetX, offsetY));
    gt = TransformationMatrix.multiply(gt, TransformationMatrix.scale(xPr ? scale : -scale, yPb ? scale : -scale));
    this._globalTransformation = gt;
    const [x, y] = TransformationMatrix.antitransformCoordinates(gt, [xPr ? 0 : width, yPb ? 0 : height]);
    this._globalViewBox = [x, y, width / scale, height / scale];
  }

}

var ImageSourceStatus = {
  Successful: 0,
  Failed: 1,
  Loading: 2
};

class ImageSourceManager {
  constructor() {
    this._cache = {};
  }

  _isBlobUrl(url) {
    return url.substring(0, 8) === `blob:http`;
  }

  _isDataUrl(url) {
    return url.substring(0, 10) === `data:image/`;
  }

  successful(url) {
    var _this$_cache$url;

    return ((_this$_cache$url = this._cache[url]) == null ? void 0 : _this$_cache$url.status) === ImageSourceStatus.Successful;
  }

  failed(url) {
    var _this$_cache$url2;

    return ((_this$_cache$url2 = this._cache[url]) == null ? void 0 : _this$_cache$url2.status) === ImageSourceStatus.Failed;
  }

  notLoaded(url) {
    return this._cache[url] === undefined;
  }

  loading(url) {
    var _this$_cache$url3;

    return ((_this$_cache$url3 = this._cache[url]) == null ? void 0 : _this$_cache$url3.status) === ImageSourceStatus.Loading;
  }

  take(url) {
    return this._cache[url].image;
  }

  async load(url) {
    if (this.notLoaded(url)) {
      this._cache[url] = {
        image: null,
        status: ImageSourceStatus.Loading
      };
    }

    if (this.failed(url) || this.successful(url)) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      const image = document.createElementNS("http://www.w3.org/2000/svg", "image");

      if (!this._isBlobUrl(url) && !this._isDataUrl(url)) {
        image.setAttribute("crossorigin", "anonymous");
      }

      image.onload = () => {
        this._cache[url].image = image;
        this._cache[url].status = ImageSourceStatus.Successful;
        resolve();
      };

      image.onerror = () => {
        console.warn(`[G]Failed to request image from the url: ${url}.`);
        this._cache[url].status = ImageSourceStatus.Failed;
        reject();
      };

      image.setAttribute("href", url);
    });
  }

}

class CanvasImageSourceManager extends ImageSourceManager {
  constructor(...args) {
    super(...args);
    this._placeholderContainer = document.createElement("canvas");
  }

  placeholder(width, height, backgroundColor = "rgba(0, 0, 0, 0.3)", color = "rgba(0, 0, 0, 0.5)") {
    this._placeholderContainer.width = width;
    this._placeholderContainer.height = height;

    const context = this._placeholderContainer.getContext("2d");

    const size = (width < height ? width : height) / 3;
    const boxSize = size / 5;
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);
    context.fillStyle = color;
    context.transform(Maths.SQRT1_2, Maths.SQRT1_2, -Maths.SQRT1_2, Maths.SQRT1_2, width / 2, (height - size * Maths.SQRT2) / 2);
    const path = new Path2D(`
            M0,0V${boxSize * 5}H${boxSize * 5}V${boxSize * 2}H${boxSize * 4}V${boxSize * 4}H${boxSize}V${boxSize}H${boxSize * 5}V0Z
            M${boxSize * 2},${boxSize * 2}V${boxSize * 3}H${boxSize * 3}V${boxSize * 2}Z
        `);
    context.fill(path);
    return this._placeholderContainer;
  }

}

class CanvasRenderer extends Renderer {
  constructor(container, interfaceSettings = {}, displaySettings = {}) {
    super();
    this._surface = void 0;
    this._interfaceSurface = void 0;
    this._buffer = document.createElement("canvas").getContext("2d");
    this._bufferFlushScheduled = false;
    this._container = void 0;
    this._interface = void 0;
    this._display = void 0;
    this._imageSourceManager = void 0;

    if (container instanceof HTMLCanvasElement) {
      this._container = container;
      this.manageRendererInitialized_();
      this._interface = new CanvasInterface(this, interfaceSettings);
      this._display = new Display(this, displaySettings);
      this._imageSourceManager = new CanvasImageSourceManager();
      this.container.style["touch-action"] = "none";
      this.container.style["-webkit-tap-highlight-color"] = "transparent";
      this.container.style["-webkit-touch-callout"] = "none";
      this._surface = this.container.getContext("2d");
      this._interfaceSurface = this._surface;
      return this;
    }

    throw new Error("[G]Unable to initialize, the container` is not a `HTMLCanvasElement`.");
  }

  get container() {
    return this._container;
  }

  get interface() {
    return this._interface;
  }

  get display() {
    return this._display;
  }

  get imageSourceManager() {
    return this._imageSourceManager;
  }

  _setStyle() {
    var _this$style_$strokeDa;

    this.style_.fill && (this._buffer.fillStyle = this.style_.fill);
    this.style_.stroke && (this._buffer.strokeStyle = this.style_.stroke);
    this.style_.strokeWidth && (this._buffer.lineWidth = this.style_.strokeWidth);
    ((_this$style_$strokeDa = this.style_.strokeDash) == null ? void 0 : _this$style_$strokeDa.length) && this._buffer.setLineDash(this.style_.strokeDash);
    this.style_.strokeDashOffset && (this._buffer.lineDashOffset = this.style_.strokeDashOffset);
    this.style_.strokeLineJoin && (this._buffer.lineJoin = this.style_.strokeLineJoin);
    this.style_.strokeMiterLimit && (this._buffer.miterLimit = this.style_.strokeMiterLimit);
    this.style_.strokeLineCap && (this._buffer.lineCap = this.style_.strokeLineCap);
  }

  _drawImage(cmd, path, onTop) {
    const {
      imageSource,
      x,
      y,
      width,
      height,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight
    } = cmd;
    const [tx, ty] = TransformationMatrix.transformCoordinates(this.display.globalTransformation, [x, y]);
    const scale = this.display.density * this.display.zoom;
    const imageScale = this.constantImage ? this.display.density : this.display.density * this.display.zoom;
    const [imageWidth, imageHeight] = [width * imageScale, height * imageScale];
    const [atImageWidth, atImageHeight] = [imageWidth / scale, imageHeight / scale];
    const [offsetX, offsetY] = [this.display.xAxisPositiveOnRight ? 0 : imageWidth, this.display.yAxisPositiveOnBottom ? 0 : imageHeight];
    const obtained = this.imageSourceManager.successful(imageSource);
    const image = obtained ? this.imageSourceManager.take(imageSource) : this.imageSourceManager.placeholder(imageWidth, imageHeight);
    const b = [x, y, atImageWidth, atImageHeight];
    path.moveTo(...Box.nn(b));
    path.lineTo(...Box.mn(b));
    path.lineTo(...Box.mm(b));
    path.lineTo(...Box.nm(b));
    path.closePath();

    this._buffer.save();

    this._setStyle();

    if (onTop) {
      this._buffer.globalCompositeOperation = "source-over";

      this._buffer.resetTransform();

      if (obtained && !isNaN(sourceX) && !isNaN(sourceY) && !isNaN(sourceWidth) && !isNaN(sourceHeight)) {
        this._buffer.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, tx - offsetX, ty - offsetY, imageWidth, imageHeight);
      } else {
        this._buffer.drawImage(image, tx - offsetX, ty - offsetY, imageWidth, imageHeight);
      }

      this._buffer.setTransform(...this.display.globalTransformation);

      this.style_.noFill || this._buffer.fill(path);
      this.style_.noStroke || this._buffer.stroke(path);
    } else {
      this._buffer.globalCompositeOperation = "destination-over";
      this.style_.noFill || this._buffer.fill(path);
      this.style_.noStroke || this._buffer.stroke(path);

      this._buffer.resetTransform();

      if (obtained && !isNaN(sourceX) && !isNaN(sourceY) && !isNaN(sourceWidth) && !isNaN(sourceHeight)) {
        this._buffer.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, tx - offsetX, ty - offsetY, imageWidth, imageHeight);
      } else {
        this._buffer.drawImage(image, tx - offsetX, ty - offsetY, imageWidth, imageHeight);
      }
    }

    this._buffer.restore();
  }

  _drawText(cmd, path, onTop) {
    const {
      x,
      y,
      text,
      fontSize,
      fontFamily,
      fontBold,
      fontItalic
    } = cmd;
    const [tx, ty] = TransformationMatrix.transformCoordinates(this.display.globalTransformation, [x, y]);
    const scale = this.display.density * this.display.zoom;
    const [textWidth, textHeight] = TextMeasurer.measure({
      fontSize,
      fontFamily,
      fontBold,
      fontItalic
    }, "hanging", text);
    const [atTextWidth, atTextHeight] = [textWidth / scale, textHeight / scale];
    const [offsetX, offsetY] = [this.display.xAxisPositiveOnRight ? 0 : textWidth, this.display.yAxisPositiveOnBottom ? 0 : textHeight];

    this._buffer.save();

    this._buffer.textBaseline = "hanging";
    let fontStyle = "";
    fontBold && (fontStyle += "bold ");
    fontItalic && (fontStyle += "italic ");
    fontStyle += `${fontSize}px `;
    fontStyle += fontFamily;
    this._buffer.font = fontStyle;
    this._buffer.globalCompositeOperation = onTop ? "source-over" : "destination-over";

    this._buffer.resetTransform();

    this._setStyle();

    this.style_.noFill || this._buffer.fillText(text, tx - offsetX, ty - offsetY);
    this.style_.noStroke || this._buffer.strokeText(text, tx - offsetX, ty - offsetY);

    this._buffer.restore();

    const b = [x, y, atTextWidth, atTextHeight];
    path.moveTo(...Box.nn(b));
    path.lineTo(...Box.mn(b));
    path.lineTo(...Box.mm(b));
    path.lineTo(...Box.nm(b));
    path.closePath();
  }

  _drawGeometry(cmds, fillRule, path, onTop) {
    cmds.forEach(cmd => {
      if (cmd.type === "moveTo") path.moveTo(cmd.x, cmd.y);
      if (cmd.type === "lineTo") path.lineTo(cmd.x, cmd.y);
      if (cmd.type === "bezierTo") path.bezierCurveTo(cmd.controlPoint1X, cmd.controlPoint1Y, cmd.controlPoint2X, cmd.controlPoint2Y, cmd.x, cmd.y);
      if (cmd.type === "quadraticBezierTo") path.quadraticCurveTo(cmd.controlPointX, cmd.controlPointY, cmd.x, cmd.y);
      if (cmd.type === "arcTo") path.ellipse(cmd.centerX, cmd.centerY, cmd.radiusX, cmd.radiusY, cmd.rotation, cmd.startAngle, cmd.endAngle, !cmd.positive);
      if (cmd.type === "close") path.closePath();
    });

    this._buffer.save();

    this._setStyle();

    this._buffer.globalCompositeOperation = onTop ? "source-over" : "destination-over";

    if (this.style_.paintOrder === "fill" === onTop) {
      !this.style_.noFill && this._buffer.fill(path, fillRule);
      !this.style_.noStroke && this._buffer.stroke(path);
    } else {
      !this.style_.noStroke && this._buffer.stroke(path);
      !this.style_.noFill && this._buffer.fill(path, fillRule);
    }

    this._buffer.restore();
  }

  async _flushBuffer() {
    if (this._bufferFlushScheduled) return;
    this._bufferFlushScheduled = true;
    const createdInterface = await this._interface.create();
    Promise.resolve().then(() => {
      this._surface.clearRect(0, 0, this.container.width, this.container.height);

      this._interfaceSurface.drawImage(createdInterface, 0, 0);

      this._surface.drawImage(this._buffer.canvas, 0, 0);

      this._bufferFlushScheduled = false;
    });
  }

  _initBuffer() {
    if (!this._bufferFlushScheduled) {
      this._buffer.canvas.width = this.container.width;
      this._buffer.canvas.height = this.container.height;

      this._buffer.setTransform(...this.display.globalTransformation);
    }
  }

  draw(shape, onTop = false) {
    this._initBuffer();

    const path = new Path2D();
    const g = shape.getGraphics(this.display);

    if (g instanceof TextGraphics) {
      g.command && this._drawText(g.command, path, onTop);
    }

    if (g instanceof ImageGraphics) {
      g.command && this._drawImage(g.command, path, onTop);
    }

    if (g instanceof GeometryGraphics) {
      g.commands.length && this._drawGeometry(g.commands, g.fillRule, path, onTop);
    }

    this._flushBuffer();

    return path;
  }

  drawBatch(shapes, onTop = false) {
    return shapes.map(shape => this.draw(shape, onTop));
  }

}

const EXTRA_STROKE_WIDTH_FOR_TOUCH = 2;
class PointChecker {
  static isPointIn(x, y, path, style, hasTouchDevice) {
    if (path instanceof SVGPathElement) {
      path = new Path2D(path.getAttribute("d"));
    }

    let pointInStroke;
    let pointInFill;

    if (style.noStroke) {
      pointInStroke = false;
    } else {
      this._context.lineWidth = hasTouchDevice ? style.strokeWidth + EXTRA_STROKE_WIDTH_FOR_TOUCH : style.strokeWidth;
      pointInStroke = this._context.isPointInStroke(path, x, y);
    }

    if (style.noFill) {
      pointInFill = false;
    } else {
      pointInFill = this._context.isPointInPath(path, x, y);
    }

    return pointInStroke || pointInFill;
  }

}
PointChecker._context = document.createElement("canvas").getContext("2d");

const DEFAULT_STYLE = {
  paintOrder: "fill",
  noFill: false,
  noStroke: false,
  fill: "black",
  stroke: "black",
  strokeWidth: 1,
  strokeDash: [],
  strokeDashOffset: 0,
  strokeLineJoin: "miter",
  strokeLineCap: "butt",
  strokeMiterLimit: 10
};
const DEFAULT_INTERACTIVE_STYLE = {
  fill: "black",
  stroke: "black",
  strokeWidth: 1
};
class Stylable {
  constructor({
    style,
    hoverStyle,
    activeStyle
  } = {}) {
    this.style_ = Utility.cloneDeep(DEFAULT_STYLE);
    this.hoverStyle_ = { ...DEFAULT_INTERACTIVE_STYLE
    };
    this.activeStyle_ = { ...DEFAULT_INTERACTIVE_STYLE
    };
    style !== undefined && this.style(style);
    hoverStyle !== undefined && this.hoverStyle(hoverStyle);
    activeStyle !== undefined && this.activeStyle(activeStyle);
  }

  style(value) {
    if (value === undefined) {
      return Utility.cloneDeep(this.style_);
    }

    value = Utility.cloneDeep(value);

    if (value.strokeWidth !== undefined && !Type.isPositiveNumber(value.strokeWidth)) {
      console.warn("[G]The `strokeWidth` is set unsuccessfully. For it should be a positive number. If you wish to set it to 0, consider setting the `stroke` to `transparent`.");
      delete value.strokeWidth;
    }

    if (value.strokeMiterLimit !== undefined && !Type.isPositiveNumber(value.strokeMiterLimit)) {
      console.warn("[G]The `strokeMiterLimit` is set unsuccessfully. For it should be a positive number.");
      delete value.strokeMiterLimit;
    }

    if (value.strokeDashOffset !== undefined && !Type.isRealNumber(value.strokeDashOffset)) {
      console.warn("[G]The `strokeDashOffset` is set unsuccessfully. For it should be a real number.");
      delete value.strokeDashOffset;
    }

    if (value.strokeDash !== undefined && !value.strokeDash.every(n => Type.isRealNumber(n))) {
      console.warn("[G]The `strokeDash` is set unsuccessfully. For it should be an array of real number.");
      delete value.strokeDash;
    }

    Utility.assignDeep(this.style_, value);
  }

  hoverStyle(value) {
    if (value === undefined) {
      return { ...this.hoverStyle_
      };
    }

    value = { ...value
    };

    if (value.strokeWidth !== undefined && !Type.isPositiveNumber(value.strokeWidth)) {
      console.warn("[G]The `strokeWidth` is set unsuccessfully. For it should be a positive number. If you wish to set it to 0, consider setting the `stroke` to `transparent`.");
      delete value.strokeWidth;
    }

    Object.assign(this.hoverStyle_, value);
  }

  activeStyle(value) {
    if (value === undefined) {
      return { ...this.activeStyle_
      };
    }

    value = { ...value
    };

    if (value.strokeWidth !== undefined && !Type.isPositiveNumber(value.strokeWidth)) {
      console.warn("[G]The `strokeWidth` is set unsuccessfully. For it should be a positive number. If you wish to set it to 0, consider setting the `stroke` to `transparent`.");
      delete value.strokeWidth;
    }

    Object.assign(this.activeStyle_, value);
  }

}

class ViewElement extends Stylable {
  constructor(shape, {
    interactable = false,
    autoUpdateView = true,
    style,
    hoverStyle,
    activeStyle
  } = {}) {
    super({
      style,
      hoverStyle,
      activeStyle
    });
    this._interactable = void 0;
    this._autoUpdateView = void 0;
    this._uuid = Utility.uuid();

    this._autoUpdateFunction = function () {
      if (this.parent) this.parent.render();
    }.bind(this);

    this.parent = void 0;
    this.path = void 0;
    this.shape = shape;
    Object.assign(this, {
      interactable,
      autoUpdateView
    });
  }

  get uuid() {
    return this._uuid;
  }

  get interactable() {
    return this._interactable;
  }

  set interactable(value) {
    this._interactable = value;
    this.parent !== undefined && this.parent.refreshInteractables();
  }

  get autoUpdateView() {
    return this._autoUpdateView;
  }

  set autoUpdateView(value) {
    this._autoUpdateView = value;

    if (value) {
      this.shape.on("any", this._autoUpdateFunction);
    } else {
      this.shape.off("any", this._autoUpdateFunction);
    }
  }

  move(deltaX, deltaY) {
    this.shape.move(deltaX, deltaY);
  }

}

class ViewGroupElement extends Stylable {
  constructor(shapes, {
    interactable = false,
    autoUpdateView = true,
    style,
    hoverStyle,
    activeStyle
  } = {}) {
    super({
      style,
      hoverStyle,
      activeStyle
    });
    this._interactable = false;
    this._autoUpdateView = false;
    this._uuid = Utility.uuid();

    this._autoUpdateFunction = () => {
      if (this.parent) this.parent.render();
    };

    this.parent = void 0;
    this.paths = void 0;
    this.shapes = shapes;
    Object.assign(this, {
      interactable,
      autoUpdateView
    });
  }

  get uuid() {
    return this._uuid;
  }

  get interactable() {
    return this._interactable;
  }

  set interactable(value) {
    this._interactable = value;
    this.parent !== undefined && this.parent.refreshInteractables();
  }

  get autoUpdateView() {
    return this._autoUpdateView;
  }

  set autoUpdateView(value) {
    this._autoUpdateView = value;

    if (value) {
      this.shapes.forEach(shape => {
        shape.on("any", this._autoUpdateFunction);
      });
    } else {
      this.shapes.forEach(shape => {
        shape.off("any", this._autoUpdateFunction);
      });
    }
  }

  move(deltaX, deltaY) {
    this.shapes.forEach(shape => shape.move(deltaX, deltaY));
  }

}

var ViewEventType = {
  DragStart: "dragStart",
  Dragging: "dragging",
  DragEnd: "dragEnd",
  PanStart: "panStart",
  Panning: "panning",
  PanEnd: "panEnd",
  ZoomStart: "zoomStart",
  Zooming: "zooming",
  ZoomEnd: "zoomEnd",
  PointerEnter: "pointerEnter",
  PointerMove: "pointerMove",
  PointerDown: "pointerDown",
  PointerUp: "pointerUp",
  PointerLeave: "pointerLeave"
};

const VIEW_DEFAULTS = {
  hoverForemost: true,
  activeForemost: true,
  minZoom: 0.001,
  maxZoom: 1000,
  wheelZoomDeltaRate: 1.1,
  inverseWheelZoom: false,
  dragThrottleDistance: 10,
  maxTouchPointerCount: 2,
  resizeObserverDebouncingTime: 100
};
class View {
  constructor({
    hoverForemost = VIEW_DEFAULTS.hoverForemost,
    activeForemost = VIEW_DEFAULTS.activeForemost,
    dragThrottleDistance = VIEW_DEFAULTS.dragThrottleDistance,
    minZoom = VIEW_DEFAULTS.minZoom,
    maxZoom = VIEW_DEFAULTS.maxZoom,
    wheelZoomDeltaRate = VIEW_DEFAULTS.wheelZoomDeltaRate,
    inverseWheelZoom = VIEW_DEFAULTS.inverseWheelZoom
  }, renderer) {
    this._dragThrottleDistance = VIEW_DEFAULTS.dragThrottleDistance;
    this._minZoom = VIEW_DEFAULTS.minZoom;
    this._maxZoom = VIEW_DEFAULTS.maxZoom;
    this._wheelZoomDeltaRate = VIEW_DEFAULTS.wheelZoomDeltaRate;
    this._renderer = null;
    this._hasTouchDevice = void 0;
    this._touchPointers = [];
    this._hoverElement = null;
    this._activeElements = [];
    this._deactivatingElement = null;
    this._isDragging = false;
    this._isPanning = false;
    this._isZooming = false;
    this._preparingDragging = false;
    this._preparingPanning = false;
    this._preparingZooming = false;
    this._draggingOffset = [0, 0];
    this._panningOffset = [0, 0];
    this._zoomingDistance = 0;
    this._resizeObserver = null;
    this._resizeTimer = 0;
    this._elements = [];
    this._interactables = [];
    this._renderScheduled = false;
    this._rafTicking = false;
    this.hoverForemost = void 0;
    this.activeForemost = void 0;
    this.inverseWheelZoom = void 0;
    this._eventHandler = {};

    this._pointerDownHandler = function (e) {
      const isMouse = e.pointerType === "mouse";
      const isTouch = e.pointerType === "touch";
      const pointerOffset = [e.offsetX, e.offsetY];
      isTouch && this._addTouch(e.pointerId, pointerOffset);
      if (isMouse && e.buttons !== 1) return;

      if (isMouse) {
        const atOffset = TransformationMatrix.antitransformCoordinates(this.renderer.display.globalTransformation, pointerOffset);

        const foundIndex = this._interactables.findIndex(element => this._isPointInElement(element, ...atOffset));

        if (foundIndex !== -1) {
          this.cursor("pointer");

          if (!this._activeElements.includes(this._interactables[foundIndex])) {
            this._activeElements.push(this._interactables[foundIndex]);

            this.render();
          } else {
            this._deactivatingElement = this._interactables[foundIndex];
          }

          this._draggingOffset = atOffset;
          this._preparingDragging = true;
        } else {
          this.cursor("grab");
          this._preparingPanning = true;
          this._panningOffset = pointerOffset;
          this._activeElements.length > 0 && this.render();
          this._activeElements = [];
        }
      }

      if (isTouch) {
        if (this._touchPointers.length === 1) {
          const atOffset = TransformationMatrix.antitransformCoordinates(this.renderer.display.globalTransformation, pointerOffset);

          const foundIndex = this._interactables.findIndex(element => this._isPointInElement(element, ...atOffset));

          if (foundIndex !== -1) {
            this.cursor("pointer");

            if (!this._activeElements.includes(this._interactables[foundIndex])) {
              this._activeElements.push(this._interactables[foundIndex]);

              this.render();
            } else {
              this._deactivatingElement = this._interactables[foundIndex];
            }

            this._draggingOffset = atOffset;
            this._preparingDragging = true;
          } else {
            this.cursor("grab");
            this._activeElements.length > 0 && this.render();
            this._activeElements = [];
          }
        } else if (this._touchPointers.length === 2) {
          this.cursor("default");
          const [offset1, offset2] = [this._touchPointers[0].offset, this._touchPointers[1].offset];
          const distance = Maths.hypot(offset2[0] - offset1[0], offset2[1] - offset1[1]);
          const centerOffset = [(offset2[0] + offset1[0]) / 2, (offset2[1] + offset1[1]) / 2];
          this._zoomingDistance = distance;
          this._panningOffset = centerOffset;
          this._preparingDragging = false;
          this._isDragging = false;
          this._activeElements.length > 0 && this.render();
          this._activeElements = [];
          this._preparingPanning = true;
          this._preparingZooming = true;
        }
      }

      if (this._eventHandler[ViewEventType.PointerDown].length) {
        this._nextTick(() => this._eventHandler[ViewEventType.PointerDown].forEach(cb => cb()));
      }
    }.bind(this);

    this._pointerUpHandler = function (e) {
      const isMouse = e.pointerType === "mouse";
      const isTouch = e.pointerType === "touch";
      if (isTouch && !this._hasTouch(e.pointerId)) return;
      isTouch && this._removeTouch(e.pointerId);

      if (isMouse) {
        if (this._isDragging) {
          this.cursor("default");
          this._isDragging = false;
        } else if (this._preparingDragging) {
          this.cursor("default");
          this._preparingDragging = false;

          if (this._deactivatingElement !== null) {
            const index = this._activeElements.indexOf(this._deactivatingElement);

            index !== -1 && this._activeElements.splice(index, 1);
            this.render();
            this._deactivatingElement = null;
          }
        } else if (this._isPanning) {
          this.cursor("default");
          this._isPanning = false;
        } else if (this._preparingPanning) {
          this.cursor("default");
          this._preparingPanning = false;
        }
      }

      if (isTouch) {
        if (this._isDragging) {
          this.cursor("default");
          this._isDragging = false;
        } else if (this._preparingDragging) {
          this.cursor("default");
          this._preparingDragging = false;

          if (this._deactivatingElement !== null) {
            const index = this._activeElements.indexOf(this._deactivatingElement);

            index !== -1 && this._activeElements.splice(index, 1);
            this.render();
            this._deactivatingElement = null;
          }
        } else if (this._isPanning || this._preparingPanning || this._isZooming || this._preparingZooming) {
          this.cursor("default");
          this._isPanning = false;
          this._preparingPanning = false;
          this._isZooming = false;
          this._preparingZooming = false;

          this._clearTouch();
        }
      }
    }.bind(this);

    this._pointerLeaveHandler = this._pointerUpHandler;

    this._pointerMoveHandler = function (e) {
      const isMouse = e.pointerType === "mouse";
      const isTouch = e.pointerType === "touch";
      if (isTouch && !this._hasTouch(e.pointerId)) return;
      const pointerOffset = [e.offsetX, e.offsetY];
      isTouch && this._updateTouch(e.pointerId, pointerOffset);

      if (isMouse) {
        this._requestRAFTick(() => {
          const atOffset = TransformationMatrix.antitransformCoordinates(this.renderer.display.globalTransformation, pointerOffset);

          if (this._preparingDragging) {
            const scale = this.renderer.display.density * this.renderer.display.zoom;
            const dragDistance = Maths.hypot(atOffset[0] - this._draggingOffset[0], atOffset[1] - this._draggingOffset[1]) * scale;
            if (dragDistance < this.dragThrottleDistance) return;
          }

          if (this._preparingDragging || this._isDragging) {
            this.cursor("move");
            this._preparingDragging = false;
            this._isDragging = true;
            const [deltaX, deltaY] = [atOffset[0] - this._draggingOffset[0], atOffset[1] - this._draggingOffset[1]];
            this._draggingOffset = atOffset;

            this._activeElements.forEach(element => element.move(deltaX, deltaY));

            this.render();
          } else if (this._preparingPanning || this._isPanning) {
            this.cursor("grabbing");
            this._preparingPanning = false;
            this._isPanning = true;
            const [deltaX, deltaY] = [pointerOffset[0] - this._panningOffset[0], pointerOffset[1] - this._panningOffset[1]];
            this._panningOffset = pointerOffset;
            this.renderer.display.pan = [this.renderer.display.pan[0] + deltaX, this.renderer.display.pan[1] + deltaY];
            this.render();
          } else {
            const foundIndex = this._interactables.findIndex(element => this._isPointInElement(element, ...atOffset));

            if (foundIndex !== -1) {
              this.cursor("pointer");
              this._hoverElement = this._interactables[foundIndex];
              this.render();
            } else {
              if (this._hoverElement !== null) {
                this.cursor("default");
                this._hoverElement = null;
                this.render();
              }
            }
          }
        });
      }

      if (isTouch) {
        this._requestRAFTick(() => {
          const atOffset = TransformationMatrix.antitransformCoordinates(this.renderer.display.globalTransformation, pointerOffset);

          if (this._preparingDragging) {
            const scale = this.renderer.display.density * this.renderer.display.zoom;
            const dragDistance = Maths.hypot(atOffset[0] - this._draggingOffset[0], atOffset[1] - this._draggingOffset[1]) * scale;
            if (dragDistance < this.dragThrottleDistance) return;
          }

          if (this._preparingDragging || this._isDragging) {
            this.cursor("move");
            this._preparingDragging = false;
            this._isDragging = true;
            const [deltaX, deltaY] = [atOffset[0] - this._draggingOffset[0], atOffset[1] - this._draggingOffset[1]];
            this._draggingOffset = atOffset;

            this._activeElements.forEach(element => element.move(deltaX, deltaY));

            this.render();
          } else if (this._preparingZooming || this._isZooming || this._preparingPanning || this._isPanning) {
            this.cursor("default");
            this._preparingZooming = false;
            this._preparingPanning = false;
            this._isZooming = true;
            this._isPanning = true;
            const [offset1, offset2] = [this._touchPointers[0].offset, this._touchPointers[1].offset];
            const distance = Maths.hypot(offset2[0] - offset1[0], offset2[1] - offset1[1]);
            const centerOffset = [(offset2[0] + offset1[0]) / 2, (offset2[1] + offset1[1]) / 2];
            const deltaZoom = distance / this._zoomingDistance;
            const [deltaX, deltaY] = [centerOffset[0] - this._panningOffset[0], centerOffset[1] - this._panningOffset[1]];
            this._panningOffset = centerOffset;
            this._zoomingDistance = distance;
            const display = this.renderer.display;
            let zoom = display.zoom * deltaZoom;
            zoom = zoom < this.minZoom ? this.minZoom : zoom > this.maxZoom ? this.maxZoom : zoom;
            const [atOffsetX, atOffsetY] = TransformationMatrix.antitransformCoordinates(display.globalTransformation, centerOffset);
            display.zoom = zoom;
            const [scaledOffsetX, scaledOffsetY] = TransformationMatrix.transformCoordinates(display.globalTransformation, [atOffsetX, atOffsetY]);
            const [zoomOffsetX, zoomOffsetY] = [centerOffset[0] - scaledOffsetX, centerOffset[1] - scaledOffsetY];
            display.pan = [display.pan[0] + deltaX + zoomOffsetX, display.pan[1] + deltaY + zoomOffsetY];
            this.render();
          }
        });
      }
    }.bind(this);

    this._wheelHandler = function (e) {
      e.preventDefault();
      const mouseOffset = [e.offsetX, e.offsetY];
      const deltaY = e.deltaY;

      this._requestRAFTick(() => {
        const display = this.renderer.display;
        let zoom;

        if (this.inverseWheelZoom) {
          zoom = deltaY < 0 ? display.zoom / this.wheelZoomDeltaRate : deltaY > 0 ? display.zoom * this.wheelZoomDeltaRate : display.zoom;
        } else {
          zoom = deltaY > 0 ? display.zoom / this.wheelZoomDeltaRate : deltaY < 0 ? display.zoom * this.wheelZoomDeltaRate : display.zoom;
        }

        zoom = zoom < this.minZoom ? this.minZoom : zoom > this.maxZoom ? this.maxZoom : zoom;
        const [atOffsetX, atOffsetY] = TransformationMatrix.antitransformCoordinates(display.globalTransformation, mouseOffset);
        display.zoom = zoom;
        const [scaledOffsetX, scaledOffsetY] = TransformationMatrix.transformCoordinates(display.globalTransformation, [atOffsetX, atOffsetY]);
        const [zoomOffsetX, zoomOffsetY] = [mouseOffset[0] - scaledOffsetX, mouseOffset[1] - scaledOffsetY];
        display.pan = [display.pan[0] + zoomOffsetX, display.pan[1] + zoomOffsetY];
        this.render();
      });
    }.bind(this);

    this._nextTick = geomtoy.nextTick;
    this.hoverForemost = hoverForemost;
    this.activeForemost = activeForemost;
    this.minZoom = minZoom;
    this.maxZoom = maxZoom;
    this.dragThrottleDistance = dragThrottleDistance;
    this.wheelZoomDeltaRate = wheelZoomDeltaRate;
    this.inverseWheelZoom = inverseWheelZoom;
    renderer && (this.renderer = renderer);
    this._hasTouchDevice = window.matchMedia("(any-pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  get minZoom() {
    return this._minZoom;
  }

  set minZoom(value) {
    Assert.isPositiveNumber(value, "minZoom");
    this._minZoom = value;
  }

  get maxZoom() {
    return this._maxZoom;
  }

  set maxZoom(value) {
    Assert.isPositiveNumber(value, "maxZoom");
    this._maxZoom = value;
  }

  get dragThrottleDistance() {
    return this._dragThrottleDistance;
  }

  set dragThrottleDistance(value) {
    Assert.isPositiveNumber(value, "dragThrottleDistance");
    this._dragThrottleDistance = value;
  }

  get wheelZoomDeltaRate() {
    return this._wheelZoomDeltaRate;
  }

  set wheelZoomDeltaRate(value) {
    Assert.isRealNumber(value, "wheelZoomDeltaRate");
    Assert.condition(value !== 1, "[G]The `wheelZoomDeltaRate` can not be 1.");
    this._wheelZoomDeltaRate = value;
  }

  get renderer() {
    Assert.condition(this._renderer !== null, "[G]You should set the `renderer` property of the `View` first.");
    return this._renderer;
  }

  set renderer(value) {
    this._renderer = value;
    value.view = this;
  }

  get elements() {
    return [...this._elements];
  }

  use(renderer, responsiveCallback) {
    if (this._renderer !== null) {
      this.stopInteractive();
      this.stopResponsive();
    }

    this.renderer = renderer;
    this.startInteractive();
    this.startResponsive(responsiveCallback);
  }

  refreshInteractables() {
    this._interactables = this._elements.filter(el => el.interactable);
  }

  _requestRAFTick(callback) {
    if (!this._rafTicking) {
      this._rafTicking = true;
      requestAnimationFrame(() => {
        callback();
        this._rafTicking = false;
      });
    }
  }

  _isPointInElement(element, x, y) {
    if (element instanceof ViewElement) {
      if (element.path === undefined) return false;
      return PointChecker.isPointIn(x, y, element.path, element.style(), this._hasTouchDevice);
    } else {
      if (element.paths === undefined) return false;
      return element.paths.some((_, index) => PointChecker.isPointIn(x, y, element.paths[index], element.style(), this._hasTouchDevice));
    }
  }

  _addTouch(id, offset) {
    if (this._touchPointers.length === VIEW_DEFAULTS.maxTouchPointerCount) return;

    this._touchPointers.push({
      id,
      offset
    });
  }

  _updateTouch(id, offset) {
    const index = this._touchPointers.findIndex(p => p.id === id);

    if (index !== -1) this._touchPointers[index].offset = offset;
  }

  _hasTouch(id) {
    return this._touchPointers.findIndex(p => p.id === id) !== -1;
  }

  _removeTouch(id) {
    const index = this._touchPointers.findIndex(p => p.id === id);

    if (index !== -1) this._touchPointers.splice(index, 1);
  }

  _clearTouch() {
    this._touchPointers = [];
  }

  on(eventType, handler) {
    if (this._eventHandler[eventType] === undefined) this._eventHandler[eventType] = [];

    this._eventHandler[eventType].push(handler);
  }

  off(eventType, handler) {
    const index = this._eventHandler[eventType].findIndex(h => h === handler);

    this._eventHandler[eventType].splice(index, 1);
  }

  clear(eventType) {
    if (eventType === undefined) {
      this._eventHandler = {};
    } else {
      this._eventHandler[eventType] = [];
    }
  }

  cursor(type) {
    this.renderer.container.style.cursor = type;
  }

  startInteractive() {
    this.renderer.container.addEventListener("pointerdown", this._pointerDownHandler);
    this.renderer.container.addEventListener("pointerup", this._pointerUpHandler);
    this.renderer.container.addEventListener("pointerleave", this._pointerLeaveHandler);
    this.renderer.container.addEventListener("pointermove", this._pointerMoveHandler);
    this.renderer.container.addEventListener("wheel", this._wheelHandler);
  }

  stopInteractive() {
    this.renderer.container.removeEventListener("pointerdown", this._pointerDownHandler);
    this.renderer.container.removeEventListener("pointerup", this._pointerUpHandler);
    this.renderer.container.addEventListener("pointerleave", this._pointerLeaveHandler);
    this.renderer.container.removeEventListener("pointermove", this._pointerMoveHandler);
    this.renderer.container.removeEventListener("wheel", this._wheelHandler);
  }

  startResponsive(callback) {
    let immediatelyFirstCalled = false;
    if (this._resizeObserver !== null) return;
    const ob = new ResizeObserver(entries => {
      for (let entry of entries) {
        const w = Maths.floor(entry.contentRect.width);
        const h = Maths.floor(entry.contentRect.height);

        if (!immediatelyFirstCalled) {
          this.renderer.display.width = w;
          this.renderer.display.height = h;
          immediatelyFirstCalled = true;
          callback(w, h);
          this.render();
        } else {
          window.clearTimeout(this._resizeTimer);
          this._resizeTimer = window.setTimeout(() => {
            this.renderer.display.width = w;
            this.renderer.display.height = h;
            callback(w, h);
            this.render();
          }, VIEW_DEFAULTS.resizeObserverDebouncingTime);
        }
      }
    });
    ob.observe(this.renderer.container.parentElement);
    this._resizeObserver = ob;
  }

  stopResponsive() {
    if (this._resizeObserver !== null) {
      this._resizeObserver.disconnect();

      this._resizeObserver = null;
    }
  }

  zoom(zoom, keepViewCenter = true) {
    if (keepViewCenter) {
      const display = this.renderer.display;
      const box = display.globalViewBox;
      const [atCx, atCy] = [box[0] + box[2] / 2, box[1] + box[3] / 2];
      const [cx, cy] = [display.width / 2, display.height / 2];
      display.zoom = zoom;
      const [scaledOffsetX, scaledOffsetY] = TransformationMatrix.transformCoordinates(display.globalTransformation, [atCx, atCy]);
      const [zoomOffsetX, zoomOffsetY] = [cx - scaledOffsetX, cy - scaledOffsetY];
      display.pan = [display.pan[0] + zoomOffsetX, display.pan[1] + zoomOffsetY];
    } else {
      this.renderer.display.zoom = zoom;
    }

    this.render();
  }

  pan(panX, panY) {
    this.renderer.display.pan = [this.renderer.display.pan[0] + panX, this.renderer.display.pan[1] + panY];
    this.render();
  }

  add(element, forward = false) {
    const index = this._elements.findIndex(el => el.uuid === element.uuid);

    if (index !== -1) return console.warn(`[G]The \`View\` already has a element with \`uuid\`: ${element.uuid}`), this;
    element.parent = this;

    if (forward) {
      this._elements.unshift(element);
    } else {
      this._elements.push(element);
    }

    this.refreshInteractables();
    this.render();
    return this;
  }

  addBatch(elements, forward = false) {
    elements.forEach(element => {
      const index = this._elements.findIndex(el => el.uuid === element.uuid);

      if (index !== -1) return console.warn(`[G]The \`View\` already has a element with \`uuid\`: ${element.uuid}`), this;
      element.parent = this;

      if (forward) {
        this._elements.unshift(element);
      } else {
        this._elements.push(element);
      }
    });
    this.refreshInteractables();
    this.render();
    return this;
  }

  remove(arg) {
    const uuid = arg instanceof ViewElement || arg instanceof ViewGroupElement ? arg.uuid : arg;

    const index = this._elements.findIndex(el => el.uuid === uuid);

    if (index === -1) return this;

    const element = this._elements.splice(index, 1)[0];

    element.parent = undefined;
    this.refreshInteractables();
    if (this._hoverElement === element) this._hoverElement = null;
    if (this._deactivatingElement === element) this._deactivatingElement = null;

    const index2 = this._activeElements.indexOf(element);

    if (index2 !== -1) this._activeElements.splice(1, 0);
    this.render();
    return this;
  }

  removeBatch(args) {
    args.forEach(arg => {
      const uuid = arg instanceof ViewElement || arg instanceof ViewGroupElement ? arg.uuid : arg;

      const index = this._elements.findIndex(el => el.uuid === uuid);

      if (index === -1) return this;

      const element = this._elements.splice(index, 1)[0];

      element.parent = undefined;
      this.refreshInteractables();
      if (this._hoverElement === element) this._hoverElement = null;
      if (this._deactivatingElement === element) this._deactivatingElement = null;

      const index2 = this._activeElements.indexOf(element);

      if (index2 !== -1) this._activeElements.splice(1, 0);
    });
    this.render();
    return this;
  }

  activate(arg) {
    const uuid = arg instanceof ViewElement ? arg.uuid : arg;

    const index = this._interactables.findIndex(el => el.uuid === uuid);

    const index2 = this._activeElements.findIndex(el => el.uuid === uuid);

    if (index !== -1 && index2 === -1) {
      this._activeElements.push(this._interactables[index]);

      this.render();
    }

    return this;
  }

  deactivate(arg) {
    const uuid = arg instanceof ViewElement ? arg.uuid : arg;

    const index = this._interactables.findIndex(el => el.uuid === uuid);

    const index2 = this._activeElements.findIndex(el => el.uuid === uuid);

    if (index !== -1 && index2 !== -1) {
      this._activeElements.splice(index2, 1);

      this.render();
    }

    return this;
  }

  forward(arg) {
    const uuid = arg instanceof ViewElement ? arg.uuid : arg;

    const index = this._elements.findIndex(el => el.uuid === uuid);

    if (index !== -1 && index !== 0) {
      [this._elements[index], this._elements[index - 1]] = [this._elements[index - 1], this._elements[index]];
      this.render();
    }

    return this;
  }

  foremost(arg) {
    const uuid = arg instanceof ViewElement ? arg.uuid : arg;

    const index = this._elements.findIndex(el => el.uuid === uuid);

    if (index !== -1 && index !== 0) {
      this._elements.unshift(...this._elements.splice(index, 1));

      this.render();
    }

    return this;
  }

  backward(arg) {
    const uuid = arg instanceof ViewElement ? arg.uuid : arg;

    const index = this._elements.findIndex(el => el.uuid === uuid);

    if (index !== -1 && index !== this._elements.length - 1) {
      [this._elements[index], this._elements[index + 1]] = [this._elements[index + 1], this._elements[index]];
      this.render();
    }

    return this;
  }

  backmost(arg) {
    const uuid = arg instanceof ViewElement ? arg.uuid : arg;

    const index = this._elements.findIndex(el => el.uuid === uuid);

    if (index !== -1 && index !== this._elements.length - 1) {
      this._elements.push(...this._elements.splice(index, 1));

      this.render();
    }

    return this;
  }

  render() {
    if (this._renderScheduled) return;
    this._renderScheduled = true;

    this._nextTick(() => {
      const renderer = this.renderer;

      this._elements.forEach(el => {
        const isGroup = el instanceof ViewGroupElement;

        if (!isGroup) {
          if (el.shape instanceof Image) {
            const imageSource = el.shape.imageSource;
            renderer.imageSourceManager.notLoaded(imageSource) && renderer.imageSourceManager.load(imageSource).then(this.render.bind(this)).catch(console.error);
          }
        } else {
          el.shapes.filter(shape => shape instanceof Image).forEach(image => {
            const imageSource = image.imageSource;
            renderer.imageSourceManager.notLoaded(imageSource) && renderer.imageSourceManager.load(imageSource).then(this.render.bind(this)).catch(console.error);
          });
        }

        const s = el.style();
        const hs = el.hoverStyle();
        const as = el.activeStyle();
        const hover = this._hoverElement === el;

        const active = this._activeElements.includes(el);

        renderer.paintOrder(s.paintOrder);
        renderer.noFill(s.noFill);
        renderer.fill(active && as.fill || hover && hs.fill || s.fill);
        renderer.noStroke(s.noStroke);
        renderer.stroke(active && as.stroke || hover && hs.stroke || s.stroke);
        renderer.strokeWidth(active && as.strokeWidth || hover && hs.strokeWidth || s.strokeWidth);
        renderer.strokeDash(s.strokeDash);
        renderer.strokeDashOffset(s.strokeDashOffset);
        renderer.strokeLineJoin(s.strokeLineJoin);
        renderer.strokeLineCap(s.strokeLineCap);
        renderer.strokeMiterLimit(s.strokeMiterLimit);
        const onTop = hover && this.hoverForemost || active && this.activeForemost;

        if (isGroup) {
          el.paths = renderer.drawBatch(el.shapes, onTop);
        } else {
          el.path = renderer.draw(el.shape, onTop);
        }
      });

      this._renderScheduled = false;
    });
  }

}

export { Arc as A, Bezier as B, CanvasRenderer as C, Dynamic as D, Ellipse as E, Inversion as I, LineSegment as L, Maths as M, Point as P, QuadraticBezier as Q, Rectangle as R, SealedShapeObject as S, Utility as U, View as V, ViewElement as a, ShapeArray as b, ViewGroupElement as c, Angle as d, Circle as e, Line as f, Arbitrary as g, geomtoy as h, Ray as i, BooleanOperation as j, Path as k, Polygon as l, Box as m, Relationship as n, Coordinates as o, Polynomial as p };
