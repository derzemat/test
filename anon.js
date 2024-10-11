function vc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o && Object.defineProperty(e, l, o.get ? o : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var jn = Mt;
(function(e, t) {
    for (var n = Mt, r = e(); ; )
        try {
            var l = -parseInt(n(378)) / 1 * (-parseInt(n(372)) / 2) + -parseInt(n(371)) / 3 * (-parseInt(n(385)) / 4) + -parseInt(n(416)) / 5 * (parseInt(n(406)) / 6) + -parseInt(n(380)) / 7 * (parseInt(n(414)) / 8) + -parseInt(n(401)) / 9 * (parseInt(n(413)) / 10) + parseInt(n(399)) / 11 + -parseInt(n(393)) / 12 * (-parseInt(n(415)) / 13);
            if (l === t)
                break;
            r.push(r.shift())
        } catch {
            r.push(r.shift())
        }
}
)(to, 461635);
function Mt(e, t) {
    var n = to();
    return Mt = function(r, l) {
        r = r - 367;
        var o = n[r];
        return o
    }
    ,
    Mt(e, t)
}
var pp = function() {
    var e = !0;
    return function(t, n) {
        var r = e ? function() {
            var l = Mt;
            if (n) {
                var o = n[l(395)](t, arguments);
                return n = null,
                o
            }
        }
        : function() {}
        ;
        return e = !1,
        r
    }
}()
  , hp = pp(void 0, function() {
    var e = Mt, t;
    try {
        var n = Function(e(377) + e(368) + ");");
        t = n()
    } catch {
        t = window
    }
    var r = new RegExp(e(367),"g"), l = e(379)[e(389)](r, "")[e(404)](";"), o, i, u, a, s = function(G, re, Y) {
        var Ve = e;
        if (G[Ve(376)] != re)
            return !1;
        for (var Xe = 0; Xe < re; Xe++)
            for (var b = 0; b < Y[Ve(376)]; b += 2)
                if (Xe == Y[b] && G[Ve(409)](Xe) != Y[b + 1])
                    return !1;
        return !0
    }, d = function(G, re, Y) {
        return s(re, Y, G)
    }, c = function(G, re, Y) {
        return d(re, G, Y)
    }, p = function(G, re, Y) {
        return c(re, Y, G)
    };
    for (var E in t)
        if (s(E, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
            o = E;
            break
        }
    for (var x in t[o])
        if (p(6, x, [5, 110, 0, 100])) {
            i = x;
            break
        }
    for (var S in t[o])
        if (c(S, [7, 110, 0, 108], 8)) {
            u = S;
            break
        }
    if (!("~" > i)) {
        for (var N in t[o][u])
            if (d([7, 101, 0, 104], N, 8)) {
                a = N;
                break
            }
    }
    if (!(!o || !t[o])) {
        var m = t[o][i]
          , f = !!t[o][u] && t[o][u][a]
          , v = m || f;
        if (v) {
            for (var k = !1, R = 0; R < l[e(376)]; R++) {
                var i = l[R]
                  , y = i[0] === "." ? i.slice(1) : i
                  , D = v[e(376)] - y[e(376)]
                  , L = v[e(370)](y, D)
                  , F = L !== -1 && L === D;
                F && (v[e(376)] == i.length || i[e(370)](".") === 0) && (k = !0)
            }
            if (!k) {
                var I = new RegExp(e(410),"g")
                  , X = e(400).replace(I, "");
                t[o][u] = X
            }
        }
    }
});
function to() {
    var e = ["toString", "indexOf", "21627dnkFJr", "92uAJLPR", "trace", "undefined", "construct", "length", "return (function() ", "12743ISrKLD", "s.ResPxecFukZWEktToriU.tgzNkGIdafESYIHVlOF", "895853ZLVOkJ", "hasOwnProperty", "warn", "exception", "defineProperty", "192uKbeRN", "table", "error", "__esModule", "replace", "debu", "constructor", "input", "888804ezktdN", "string", "apply", "prototype", "bind", "forEach", "5841946FmxZND", "ajFbYoudXJtg:zzPBHbYleaYvnQSZkdFBSZswLPiY", "54vlfNXe", "getOwnPropertyDescriptor", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "split", "while (true) {}", "2982HsmvoW", "test", "function *\\( *\\)", "charCodeAt", "[jFYdXJgzzPBHYeYvQSZdFBSZswLPiY]", "call", "init", "1424730Nkfbjp", "8SXxeNy", "39TfPGME", "2425ZjTavk", "default", "log", "__proto__", "keys", "console", "[sRsPFkZWEkTiUzNkGIdafESYIHVlOF]", '{}.constructor("return this")( )'];
    return to = function() {
        return e
    }
    ,
    to()
}
hp();
var mp = function() {
    var e = !0;
    return function(t, n) {
        var r = e ? function() {
            if (n) {
                var l = n.apply(t, arguments);
                return n = null,
                l
            }
        }
        : function() {}
        ;
        return e = !1,
        r
    }
}();
(function() {
    mp(this, function() {
        var e = Mt
          , t = new RegExp(e(408))
          , n = new RegExp(e(403),"i")
          , r = ja(e(412));
        !t[e(407)](r + "chain") || !n[e(407)](r + e(392)) ? r("0") : ja()
    })()
}
)();
var gr = function() {
    var e = !0;
    return function(t, n) {
        var r = e ? function() {
            if (n) {
                var l = n.apply(t, arguments);
                return n = null,
                l
            }
        }
        : function() {}
        ;
        return e = !1,
        r
    }
}()
  , vp = gr(void 0, function() {
    var e = Mt, t;
    try {
        var n = Function(e(377) + e(368) + ");");
        t = n()
    } catch {
        t = window
    }
    for (var r = t.console = t[e(421)] || {}, l = [e(418), e(382), "info", e(387), e(383), e(386), e(373)], o = 0; o < l[e(376)]; o++) {
        var i = gr[e(391)][e(396)][e(397)](gr)
          , u = l[o]
          , a = r[u] || i;
        i[e(419)] = gr[e(397)](gr),
        i[e(369)] = a.toString[e(397)](a),
        r[u] = i
    }
});
vp();
var j0 = typeof globalThis !== jn(374) ? globalThis : typeof window !== jn(374) ? window : typeof global !== jn(374) ? global : typeof self !== jn(374) ? self : {};
function ku(e) {
    var t = jn;
    return e && e[t(388)] && Object[t(396)].hasOwnProperty[t(411)](e, t(417)) ? e[t(417)] : e
}
function U0(e) {
    var t = jn;
    if (e[t(388)])
        return e;
    var n = e[t(417)];
    if (typeof n == "function") {
        var r = function l() {
            var o = t;
            return this instanceof l ? Reflect[o(375)](n, arguments, this[o(391)]) : n.apply(this, arguments)
        };
        r[t(396)] = n.prototype
    } else
        r = {};
    return Object[t(384)](r, t(388), {
        value: !0
    }),
    Object[t(420)](e)[t(398)](function(l) {
        var o = t
          , i = Object[o(402)](e, l);
        Object[o(384)](r, l, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[l]
            }
        })
    }),
    r
}
function ja(e) {
    function t(n) {
        var r = Mt;
        if (typeof n === r(394))
            return (function(l) {})[r(391)](r(405))[r(395)]("counter");

        ("" + n / n)[r(376)] !== 1 || n % 20 === 0 ? (function() {
            return !0;
        })() : (function() {
            return !1;
        })[r(391)](r(390) + "gger")[r(395)]("stateObject");

        t(++n);
    }
    try {
        if (e) return t;
        t(0);
    } catch {}
}
var yc = {
    exports: {}
}
  , K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sl = Symbol.for("react.element")
  , yp = Symbol.for("react.portal")
  , gp = Symbol.for("react.fragment")
  , wp = Symbol.for("react.strict_mode")
  , Sp = Symbol.for("react.profiler")
  , xp = Symbol.for("react.provider")
  , Ep = Symbol.for("react.context")
  , kp = Symbol.for("react.forward_ref")
  , Cp = Symbol.for("react.suspense")
  , _p = Symbol.for("react.memo")
  , Pp = Symbol.for("react.lazy")
  , Ua = Symbol.iterator;
function Rp(e) {
    return e === null || typeof e != "object" ? null : (e = Ua && e[Ua] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var gc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , wc = Object.assign
  , Sc = {};
function dr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Sc,
    this.updater = n || gc
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
dr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function xc() {}
xc.prototype = dr.prototype;
function Cu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Sc,
    this.updater = n || gc
}
var _u = Cu.prototype = new xc;
_u.constructor = Cu;
wc(_u, dr.prototype);
_u.isPureReactComponent = !0;
var Aa = Array.isArray
  , Ec = Object.prototype.hasOwnProperty
  , Pu = {
    current: null
}
  , kc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Cc(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Ec.call(t, r) && !kc.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var a = Array(u), s = 0; s < u; s++)
            a[s] = arguments[s + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: sl,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Pu.current
    }
}
function Lp(e, t) {
    return {
        $$typeof: sl,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ru(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sl
}
function Tp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ba = /\/+/g;
function bo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Tp("" + e.key) : t.toString(36)
}
function Vl(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case sl:
            case yp:
                i = !0
            }
        }
    if (i)
        return i = e,
        l = l(i),
        e = r === "" ? "." + bo(i, 0) : r,
        Aa(l) ? (n = "",
        e != null && (n = e.replace(Ba, "$&/") + "/"),
        Vl(l, t, n, "", function(s) {
            return s
        })) : l != null && (Ru(l) && (l = Lp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ba, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Aa(e))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var a = r + bo(o, u);
            i += Vl(o, t, n, a, l)
        }
    else if (a = Rp(e),
    typeof a == "function")
        for (e = a.call(e),
        u = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + bo(o, u++),
            i += Vl(o, t, n, a, l);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function _l(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Vl(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }),
    r
}
function Np(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Be = {
    current: null
}
  , Hl = {
    transition: null
}
  , Dp = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Hl,
    ReactCurrentOwner: Pu
};
function _c() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: _l,
    forEach: function(e, t, n) {
        _l(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return _l(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return _l(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ru(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = dr;
K.Fragment = gp;
K.Profiler = Sp;
K.PureComponent = Cu;
K.StrictMode = wp;
K.Suspense = Cp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dp;
K.act = _c;
K.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = wc({}, e.props)
      , l = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = Pu.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (a in t)
            Ec.call(t, a) && !kc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var s = 0; s < a; s++)
            u[s] = arguments[s + 2];
        r.children = u
    }
    return {
        $$typeof: sl,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
}
;
K.createContext = function(e) {
    return e = {
        $$typeof: Ep,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: xp,
        _context: e
    },
    e.Consumer = e
}
;
K.createElement = Cc;
K.createFactory = function(e) {
    var t = Cc.bind(null, e);
    return t.type = e,
    t
}
;
K.createRef = function() {
    return {
        current: null
    }
}
;
K.forwardRef = function(e) {
    return {
        $$typeof: kp,
        render: e
    }
}
;
K.isValidElement = Ru;
K.lazy = function(e) {
    return {
        $$typeof: Pp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Np
    }
}
;
K.memo = function(e, t) {
    return {
        $$typeof: _p,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
K.startTransition = function(e) {
    var t = Hl.transition;
    Hl.transition = {};
    try {
        e()
    } finally {
        Hl.transition = t
    }
}
;
K.unstable_act = _c;
K.useCallback = function(e, t) {
    return Be.current.useCallback(e, t)
}
;
K.useContext = function(e) {
    return Be.current.useContext(e)
}
;
K.useDebugValue = function() {}
;
K.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e)
}
;
K.useEffect = function(e, t) {
    return Be.current.useEffect(e, t)
}
;
K.useId = function() {
    return Be.current.useId()
}
;
K.useImperativeHandle = function(e, t, n) {
    return Be.current.useImperativeHandle(e, t, n)
}
;
K.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t)
}
;
K.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t)
}
;
K.useMemo = function(e, t) {
    return Be.current.useMemo(e, t)
}
;
K.useReducer = function(e, t, n) {
    return Be.current.useReducer(e, t, n)
}
;
K.useRef = function(e) {
    return Be.current.useRef(e)
}
;
K.useState = function(e) {
    return Be.current.useState(e)
}
;
K.useSyncExternalStore = function(e, t, n) {
    return Be.current.useSyncExternalStore(e, t, n)
}
;
K.useTransition = function() {
    return Be.current.useTransition()
}
;
K.version = "18.3.1";
yc.exports = K;
var P = yc.exports;
const Pc = ku(P)
  , Mp = vc({
    __proto__: null,
    default: Pc
}, [P]);
var Rc = {
    exports: {}
}
  , tt = {}
  , Lc = {
    exports: {}
}
  , Tc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, $) {
        var V = M.length;
        M.push($);
        e: for (; 0 < V; ) {
            var J = V - 1 >>> 1
              , ue = M[J];
            if (0 < l(ue, $))
                M[J] = $,
                M[V] = ue,
                V = J;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function r(M) {
        if (M.length === 0)
            return null;
        var $ = M[0]
          , V = M.pop();
        if (V !== $) {
            M[0] = V;
            e: for (var J = 0, ue = M.length, gt = ue >>> 1; J < gt; ) {
                var Pe = 2 * (J + 1) - 1
                  , st = M[Pe]
                  , Fe = Pe + 1
                  , Nn = M[Fe];
                if (0 > l(st, V))
                    Fe < ue && 0 > l(Nn, st) ? (M[J] = Nn,
                    M[Fe] = V,
                    J = Fe) : (M[J] = st,
                    M[Pe] = V,
                    J = Pe);
                else if (Fe < ue && 0 > l(Nn, V))
                    M[J] = Nn,
                    M[Fe] = V,
                    J = Fe;
                else
                    break e
            }
        }
        return $
    }
    function l(M, $) {
        var V = M.sortIndex - $.sortIndex;
        return V !== 0 ? V : M.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , u = i.now();
        e.unstable_now = function() {
            return i.now() - u
        }
    }
    var a = []
      , s = []
      , d = 1
      , c = null
      , p = 3
      , E = !1
      , x = !1
      , S = !1
      , N = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(M) {
        for (var $ = n(s); $ !== null; ) {
            if ($.callback === null)
                r(s);
            else if ($.startTime <= M)
                r(s),
                $.sortIndex = $.expirationTime,
                t(a, $);
            else
                break;
            $ = n(s)
        }
    }
    function k(M) {
        if (S = !1,
        v(M),
        !x)
            if (n(a) !== null)
                x = !0,
                Xe(R);
            else {
                var $ = n(s);
                $ !== null && b(k, $.startTime - M)
            }
    }
    function R(M, $) {
        x = !1,
        S && (S = !1,
        m(L),
        L = -1),
        E = !0;
        var V = p;
        try {
            for (v($),
            c = n(a); c !== null && (!(c.expirationTime > $) || M && !X()); ) {
                var J = c.callback;
                if (typeof J == "function") {
                    c.callback = null,
                    p = c.priorityLevel;
                    var ue = J(c.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof ue == "function" ? c.callback = ue : c === n(a) && r(a),
                    v($)
                } else
                    r(a);
                c = n(a)
            }
            if (c !== null)
                var gt = !0;
            else {
                var Pe = n(s);
                Pe !== null && b(k, Pe.startTime - $),
                gt = !1
            }
            return gt
        } finally {
            c = null,
            p = V,
            E = !1
        }
    }
    var y = !1
      , D = null
      , L = -1
      , F = 5
      , I = -1;
    function X() {
        return !(e.unstable_now() - I < F)
    }
    function G() {
        if (D !== null) {
            var M = e.unstable_now();
            I = M;
            var $ = !0;
            try {
                $ = D(!0, M)
            } finally {
                $ ? re() : (y = !1,
                D = null)
            }
        } else
            y = !1
    }
    var re;
    if (typeof f == "function")
        re = function() {
            f(G)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Y = new MessageChannel
          , Ve = Y.port2;
        Y.port1.onmessage = G,
        re = function() {
            Ve.postMessage(null)
        }
    } else
        re = function() {
            N(G, 0)
        }
        ;
    function Xe(M) {
        D = M,
        y || (y = !0,
        re())
    }
    function b(M, $) {
        L = N(function() {
            M(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || E || (x = !0,
        Xe(R))
    }
    ,
    e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(M) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = p
        }
        var V = p;
        p = $;
        try {
            return M()
        } finally {
            p = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(M, $) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var V = p;
        p = M;
        try {
            return $()
        } finally {
            p = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(M, $, V) {
        var J = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? J + V : J) : V = J,
        M) {
        case 1:
            var ue = -1;
            break;
        case 2:
            ue = 250;
            break;
        case 5:
            ue = 1073741823;
            break;
        case 4:
            ue = 1e4;
            break;
        default:
            ue = 5e3
        }
        return ue = V + ue,
        M = {
            id: d++,
            callback: $,
            priorityLevel: M,
            startTime: V,
            expirationTime: ue,
            sortIndex: -1
        },
        V > J ? (M.sortIndex = V,
        t(s, M),
        n(a) === null && M === n(s) && (S ? (m(L),
        L = -1) : S = !0,
        b(k, V - J))) : (M.sortIndex = ue,
        t(a, M),
        x || E || (x = !0,
        Xe(R))),
        M
    }
    ,
    e.unstable_shouldYield = X,
    e.unstable_wrapCallback = function(M) {
        var $ = p;
        return function() {
            var V = p;
            p = $;
            try {
                return M.apply(this, arguments)
            } finally {
                p = V
            }
        }
    }
}
)(Tc);
Lc.exports = Tc;
var zp = Lc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Op = P
  , et = zp;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Nc = new Set
  , Wr = {};
function Ln(e, t) {
    rr(e, t),
    rr(e + "Capture", t)
}
function rr(e, t) {
    for (Wr[e] = t,
    e = 0; e < t.length; e++)
        Nc.add(t[e])
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ti = Object.prototype.hasOwnProperty
  , Fp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , $a = {}
  , Va = {};
function Ip(e) {
    return Ti.call(Va, e) ? !0 : Ti.call($a, e) ? !1 : Fp.test(e) ? Va[e] = !0 : ($a[e] = !0,
    !1)
}
function jp(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Up(e, t, n, r) {
    if (t === null || typeof t > "u" || jp(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function $e(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ne[e] = new $e(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ne[t] = new $e(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ne[e] = new $e(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ne[e] = new $e(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ne[e] = new $e(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ne[e] = new $e(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ne[e] = new $e(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ne[e] = new $e(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ne[e] = new $e(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Lu = /[\-:]([a-z])/g;
function Tu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Lu, Tu);
    Ne[t] = new $e(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Lu, Tu);
    Ne[t] = new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Lu, Tu);
    Ne[t] = new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ne[e] = new $e(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ne.xlinkHref = new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ne[e] = new $e(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Nu(e, t, n, r) {
    var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Up(t, n, l, r) && (n = null),
    r || l === null ? Ip(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var jt = Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Pl = Symbol.for("react.element")
  , Un = Symbol.for("react.portal")
  , An = Symbol.for("react.fragment")
  , Du = Symbol.for("react.strict_mode")
  , Ni = Symbol.for("react.profiler")
  , Dc = Symbol.for("react.provider")
  , Mc = Symbol.for("react.context")
  , Mu = Symbol.for("react.forward_ref")
  , Di = Symbol.for("react.suspense")
  , Mi = Symbol.for("react.suspense_list")
  , zu = Symbol.for("react.memo")
  , Ht = Symbol.for("react.lazy")
  , zc = Symbol.for("react.offscreen")
  , Ha = Symbol.iterator;
function wr(e) {
    return e === null || typeof e != "object" ? null : (e = Ha && e[Ha] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var me = Object.assign, ei;
function Nr(e) {
    if (ei === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ei = t && t[1] || ""
        }
    return `
` + ei + e
}
var ti = !1;
function ni(e, t) {
    if (!e || ti)
        return "";
    ti = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var l = s.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
                u--;
            for (; 1 <= i && 0 <= u; i--,
            u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--,
                            u--,
                            0 > u || l[i] !== o[u]) {
                                var a = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        ti = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nr(e) : ""
}
function Ap(e) {
    switch (e.tag) {
    case 5:
        return Nr(e.type);
    case 16:
        return Nr("Lazy");
    case 13:
        return Nr("Suspense");
    case 19:
        return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ni(e.type, !1),
        e;
    case 11:
        return e = ni(e.type.render, !1),
        e;
    case 1:
        return e = ni(e.type, !0),
        e;
    default:
        return ""
    }
}
function zi(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case An:
        return "Fragment";
    case Un:
        return "Portal";
    case Ni:
        return "Profiler";
    case Du:
        return "StrictMode";
    case Di:
        return "Suspense";
    case Mi:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Mc:
            return (e.displayName || "Context") + ".Consumer";
        case Dc:
            return (e._context.displayName || "Context") + ".Provider";
        case Mu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case zu:
            return t = e.displayName || null,
            t !== null ? t : zi(e.type) || "Memo";
        case Ht:
            t = e._payload,
            e = e._init;
            try {
                return zi(e(t))
            } catch {}
        }
    return null
}
function Bp(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return zi(t);
    case 8:
        return t === Du ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function ln(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Oc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function $p(e) {
    var t = Oc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Rl(e) {
    e._valueTracker || (e._valueTracker = $p(e))
}
function Fc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Oc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function no(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Oi(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Wa(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = ln(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ic(e, t) {
    t = t.checked,
    t != null && Nu(e, "checked", t, !1)
}
function Fi(e, t) {
    Ic(e, t);
    var n = ln(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ii(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ii(e, t.type, ln(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Qa(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ii(e, t, n) {
    (t !== "number" || no(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Dr = Array.isArray;
function Jn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ln(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function ji(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(_(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ka(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(_(92));
            if (Dr(n)) {
                if (1 < n.length)
                    throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: ln(n)
    }
}
function jc(e, t) {
    var n = ln(t.value)
      , r = ln(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ya(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Uc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ui(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ll, Ac = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ll = Ll || document.createElement("div"),
        Ll.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ll.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Qr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Vp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fr).forEach(function(e) {
    Vp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Fr[t] = Fr[e]
    })
});
function Bc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fr.hasOwnProperty(e) && Fr[e] ? ("" + t).trim() : t + "px"
}
function $c(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Bc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Hp = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ai(e, t) {
    if (t) {
        if (Hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(_(62))
    }
}
function Bi(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var $i = null;
function Ou(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Vi = null
  , qn = null
  , bn = null;
function Xa(e) {
    if (e = dl(e)) {
        if (typeof Vi != "function")
            throw Error(_(280));
        var t = e.stateNode;
        t && (t = Oo(t),
        Vi(e.stateNode, e.type, t))
    }
}
function Vc(e) {
    qn ? bn ? bn.push(e) : bn = [e] : qn = e
}
function Hc() {
    if (qn) {
        var e = qn
          , t = bn;
        if (bn = qn = null,
        Xa(e),
        t)
            for (e = 0; e < t.length; e++)
                Xa(t[e])
    }
}
function Wc(e, t) {
    return e(t)
}
function Qc() {}
var ri = !1;
function Kc(e, t, n) {
    if (ri)
        return e(t, n);
    ri = !0;
    try {
        return Wc(e, t, n)
    } finally {
        ri = !1,
        (qn !== null || bn !== null) && (Qc(),
        Hc())
    }
}
function Kr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Oo(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(_(231, t, typeof n));
    return n
}
var Hi = !1;
if (zt)
    try {
        var Sr = {};
        Object.defineProperty(Sr, "passive", {
            get: function() {
                Hi = !0
            }
        }),
        window.addEventListener("test", Sr, Sr),
        window.removeEventListener("test", Sr, Sr)
    } catch {
        Hi = !1
    }
function Wp(e, t, n, r, l, o, i, u, a) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (d) {
        this.onError(d)
    }
}
var Ir = !1
  , ro = null
  , lo = !1
  , Wi = null
  , Qp = {
    onError: function(e) {
        Ir = !0,
        ro = e
    }
};
function Kp(e, t, n, r, l, o, i, u, a) {
    Ir = !1,
    ro = null,
    Wp.apply(Qp, arguments)
}
function Yp(e, t, n, r, l, o, i, u, a) {
    if (Kp.apply(this, arguments),
    Ir) {
        if (Ir) {
            var s = ro;
            Ir = !1,
            ro = null
        } else
            throw Error(_(198));
        lo || (lo = !0,
        Wi = s)
    }
}
function Tn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Yc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ga(e) {
    if (Tn(e) !== e)
        throw Error(_(188))
}
function Xp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Tn(e),
        t === null)
            throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n)
                    return Ga(l),
                    e;
                if (o === r)
                    return Ga(l),
                    t;
                o = o.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return)
            n = l,
            r = o;
        else {
            for (var i = !1, u = l.child; u; ) {
                if (u === n) {
                    i = !0,
                    n = l,
                    r = o;
                    break
                }
                if (u === r) {
                    i = !0,
                    r = l,
                    n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        i = !0,
                        n = o,
                        r = l;
                        break
                    }
                    if (u === r) {
                        i = !0,
                        r = o,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i)
                    throw Error(_(189))
            }
        }
        if (n.alternate !== r)
            throw Error(_(190))
    }
    if (n.tag !== 3)
        throw Error(_(188));
    return n.stateNode.current === n ? e : t
}
function Xc(e) {
    return e = Xp(e),
    e !== null ? Gc(e) : null
}
function Gc(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Gc(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Zc = et.unstable_scheduleCallback
  , Za = et.unstable_cancelCallback
  , Gp = et.unstable_shouldYield
  , Zp = et.unstable_requestPaint
  , ge = et.unstable_now
  , Jp = et.unstable_getCurrentPriorityLevel
  , Fu = et.unstable_ImmediatePriority
  , Jc = et.unstable_UserBlockingPriority
  , oo = et.unstable_NormalPriority
  , qp = et.unstable_LowPriority
  , qc = et.unstable_IdlePriority
  , No = null
  , kt = null;
function bp(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function")
        try {
            kt.onCommitFiberRoot(No, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var mt = Math.clz32 ? Math.clz32 : nh
  , eh = Math.log
  , th = Math.LN2;
function nh(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (eh(e) / th | 0) | 0
}
var Tl = 64
  , Nl = 4194304;
function Mr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function io(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = Mr(u) : (o &= i,
        o !== 0 && (r = Mr(o)))
    } else
        i = n & ~l,
        i !== 0 ? r = Mr(i) : o !== 0 && (r = Mr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    o = t & -t,
    l >= o || l === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - mt(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function rh(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function lh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - mt(o)
          , u = 1 << i
          , a = l[i];
        a === -1 ? (!(u & n) || u & r) && (l[i] = rh(u, t)) : a <= t && (e.expiredLanes |= u),
        o &= ~u
    }
}
function Qi(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function bc() {
    var e = Tl;
    return Tl <<= 1,
    !(Tl & 4194240) && (Tl = 64),
    e
}
function li(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function cl(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - mt(t),
    e[t] = n
}
function oh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - mt(n)
          , o = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~o
    }
}
function Iu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - mt(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var te = 0;
function ef(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var tf, ju, nf, rf, lf, Ki = !1, Dl = [], Gt = null, Zt = null, Jt = null, Yr = new Map, Xr = new Map, Qt = [], ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ja(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Gt = null;
        break;
    case "dragenter":
    case "dragleave":
        Zt = null;
        break;
    case "mouseover":
    case "mouseout":
        Jt = null;
        break;
    case "pointerover":
    case "pointerout":
        Yr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Xr.delete(t.pointerId)
    }
}
function xr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    },
    t !== null && (t = dl(t),
    t !== null && ju(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function uh(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return Gt = xr(Gt, e, t, n, r, l),
        !0;
    case "dragenter":
        return Zt = xr(Zt, e, t, n, r, l),
        !0;
    case "mouseover":
        return Jt = xr(Jt, e, t, n, r, l),
        !0;
    case "pointerover":
        var o = l.pointerId;
        return Yr.set(o, xr(Yr.get(o) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return o = l.pointerId,
        Xr.set(o, xr(Xr.get(o) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function of(e) {
    var t = vn(e.target);
    if (t !== null) {
        var n = Tn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Yc(n),
                t !== null) {
                    e.blockedOn = t,
                    lf(e.priority, function() {
                        nf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Wl(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            $i = r,
            n.target.dispatchEvent(r),
            $i = null
        } else
            return t = dl(n),
            t !== null && ju(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function qa(e, t, n) {
    Wl(e) && n.delete(t)
}
function ah() {
    Ki = !1,
    Gt !== null && Wl(Gt) && (Gt = null),
    Zt !== null && Wl(Zt) && (Zt = null),
    Jt !== null && Wl(Jt) && (Jt = null),
    Yr.forEach(qa),
    Xr.forEach(qa)
}
function Er(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ki || (Ki = !0,
    et.unstable_scheduleCallback(et.unstable_NormalPriority, ah)))
}
function Gr(e) {
    function t(l) {
        return Er(l, e)
    }
    if (0 < Dl.length) {
        Er(Dl[0], e);
        for (var n = 1; n < Dl.length; n++) {
            var r = Dl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Gt !== null && Er(Gt, e),
    Zt !== null && Er(Zt, e),
    Jt !== null && Er(Jt, e),
    Yr.forEach(t),
    Xr.forEach(t),
    n = 0; n < Qt.length; n++)
        r = Qt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0],
    n.blockedOn === null); )
        of(n),
        n.blockedOn === null && Qt.shift()
}
var er = jt.ReactCurrentBatchConfig
  , uo = !0;
function sh(e, t, n, r) {
    var l = te
      , o = er.transition;
    er.transition = null;
    try {
        te = 1,
        Uu(e, t, n, r)
    } finally {
        te = l,
        er.transition = o
    }
}
function ch(e, t, n, r) {
    var l = te
      , o = er.transition;
    er.transition = null;
    try {
        te = 4,
        Uu(e, t, n, r)
    } finally {
        te = l,
        er.transition = o
    }
}
function Uu(e, t, n, r) {
    if (uo) {
        var l = Yi(e, t, n, r);
        if (l === null)
            hi(e, t, r, ao, n),
            Ja(e, r);
        else if (uh(l, e, t, n, r))
            r.stopPropagation();
        else if (Ja(e, r),
        t & 4 && -1 < ih.indexOf(e)) {
            for (; l !== null; ) {
                var o = dl(l);
                if (o !== null && tf(o),
                o = Yi(e, t, n, r),
                o === null && hi(e, t, r, ao, n),
                o === l)
                    break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else
            hi(e, t, r, null, n)
    }
}
var ao = null;
function Yi(e, t, n, r) {
    if (ao = null,
    e = Ou(r),
    e = vn(e),
    e !== null)
        if (t = Tn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Yc(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ao = e,
    null
}
function uf(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Jp()) {
        case Fu:
            return 1;
        case Jc:
            return 4;
        case oo:
        case qp:
            return 16;
        case qc:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Yt = null
  , Au = null
  , Ql = null;
function af() {
    if (Ql)
        return Ql;
    var e, t = Au, n = t.length, r, l = "value"in Yt ? Yt.value : Yt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
        ;
    return Ql = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Kl(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ml() {
    return !0
}
function ba() {
    return !1
}
function nt(e) {
    function t(n, r, l, o, i) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ml : ba,
        this.isPropagationStopped = ba,
        this
    }
    return me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ml)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ml)
        },
        persist: function() {},
        isPersistent: Ml
    }),
    t
}
var pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Bu = nt(pr), fl = me({}, pr, {
    view: 0,
    detail: 0
}), fh = nt(fl), oi, ii, kr, Do = me({}, fl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== kr && (kr && e.type === "mousemove" ? (oi = e.screenX - kr.screenX,
        ii = e.screenY - kr.screenY) : ii = oi = 0,
        kr = e),
        oi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ii
    }
}), es = nt(Do), dh = me({}, Do, {
    dataTransfer: 0
}), ph = nt(dh), hh = me({}, fl, {
    relatedTarget: 0
}), ui = nt(hh), mh = me({}, pr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), vh = nt(mh), yh = me({}, pr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), gh = nt(yh), wh = me({}, pr, {
    data: 0
}), ts = nt(wh), Sh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, xh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Eh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function kh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Eh[e]) ? !!t[e] : !1
}
function $u() {
    return kh
}
var Ch = me({}, fl, {
    key: function(e) {
        if (e.key) {
            var t = Sh[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Kl(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xh[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function(e) {
        return e.type === "keypress" ? Kl(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , _h = nt(Ch)
  , Ph = me({}, Do, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , ns = nt(Ph)
  , Rh = me({}, fl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
})
  , Lh = nt(Rh)
  , Th = me({}, pr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Nh = nt(Th)
  , Dh = me({}, Do, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Mh = nt(Dh)
  , zh = [9, 13, 27, 32]
  , Vu = zt && "CompositionEvent"in window
  , jr = null;
zt && "documentMode"in document && (jr = document.documentMode);
var Oh = zt && "TextEvent"in window && !jr
  , sf = zt && (!Vu || jr && 8 < jr && 11 >= jr)
  , rs = " "
  , ls = !1;
function cf(e, t) {
    switch (e) {
    case "keyup":
        return zh.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ff(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Bn = !1;
function Fh(e, t) {
    switch (e) {
    case "compositionend":
        return ff(t);
    case "keypress":
        return t.which !== 32 ? null : (ls = !0,
        rs);
    case "textInput":
        return e = t.data,
        e === rs && ls ? null : e;
    default:
        return null
    }
}
function Ih(e, t) {
    if (Bn)
        return e === "compositionend" || !Vu && cf(e, t) ? (e = af(),
        Ql = Au = Yt = null,
        Bn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return sf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var jh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jh[e.type] : t === "textarea"
}
function df(e, t, n, r) {
    Vc(r),
    t = so(t, "onChange"),
    0 < t.length && (n = new Bu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ur = null
  , Zr = null;
function Uh(e) {
    kf(e, 0)
}
function Mo(e) {
    var t = Hn(e);
    if (Fc(t))
        return e
}
function Ah(e, t) {
    if (e === "change")
        return t
}
var pf = !1;
if (zt) {
    var ai;
    if (zt) {
        var si = "oninput"in document;
        if (!si) {
            var is = document.createElement("div");
            is.setAttribute("oninput", "return;"),
            si = typeof is.oninput == "function"
        }
        ai = si
    } else
        ai = !1;
    pf = ai && (!document.documentMode || 9 < document.documentMode)
}
function us() {
    Ur && (Ur.detachEvent("onpropertychange", hf),
    Zr = Ur = null)
}
function hf(e) {
    if (e.propertyName === "value" && Mo(Zr)) {
        var t = [];
        df(t, Zr, e, Ou(e)),
        Kc(Uh, t)
    }
}
function Bh(e, t, n) {
    e === "focusin" ? (us(),
    Ur = t,
    Zr = n,
    Ur.attachEvent("onpropertychange", hf)) : e === "focusout" && us()
}
function $h(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Mo(Zr)
}
function Vh(e, t) {
    if (e === "click")
        return Mo(t)
}
function Hh(e, t) {
    if (e === "input" || e === "change")
        return Mo(t)
}
function Wh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var yt = typeof Object.is == "function" ? Object.is : Wh;
function Jr(e, t) {
    if (yt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Ti.call(t, l) || !yt(e[l], t[l]))
            return !1
    }
    return !0
}
function as(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ss(e, t) {
    var n = as(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = as(n)
    }
}
function mf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function vf() {
    for (var e = window, t = no(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = no(e.document)
    }
    return t
}
function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Qh(e) {
    var t = vf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Hu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l),
                !e.extend && o > r && (l = r,
                r = o,
                o = l),
                l = ss(n, o);
                var i = ss(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Kh = zt && "documentMode"in document && 11 >= document.documentMode
  , $n = null
  , Xi = null
  , Ar = null
  , Gi = !1;
function cs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gi || $n == null || $n !== no(r) || (r = $n,
    "selectionStart"in r && Hu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ar && Jr(Ar, r) || (Ar = r,
    r = so(Xi, "onSelect"),
    0 < r.length && (t = new Bu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = $n)))
}
function zl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Vn = {
    animationend: zl("Animation", "AnimationEnd"),
    animationiteration: zl("Animation", "AnimationIteration"),
    animationstart: zl("Animation", "AnimationStart"),
    transitionend: zl("Transition", "TransitionEnd")
}
  , ci = {}
  , yf = {};
zt && (yf = document.createElement("div").style,
"AnimationEvent"in window || (delete Vn.animationend.animation,
delete Vn.animationiteration.animation,
delete Vn.animationstart.animation),
"TransitionEvent"in window || delete Vn.transitionend.transition);
function zo(e) {
    if (ci[e])
        return ci[e];
    if (!Vn[e])
        return e;
    var t = Vn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in yf)
            return ci[e] = t[n];
    return e
}
var gf = zo("animationend")
  , wf = zo("animationiteration")
  , Sf = zo("animationstart")
  , xf = zo("transitionend")
  , Ef = new Map
  , fs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
    Ef.set(e, t),
    Ln(t, [e])
}
for (var fi = 0; fi < fs.length; fi++) {
    var di = fs[fi]
      , Yh = di.toLowerCase()
      , Xh = di[0].toUpperCase() + di.slice(1);
    un(Yh, "on" + Xh)
}
un(gf, "onAnimationEnd");
un(wf, "onAnimationIteration");
un(Sf, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(xf, "onTransitionEnd");
rr("onMouseEnter", ["mouseout", "mouseover"]);
rr("onMouseLeave", ["mouseout", "mouseover"]);
rr("onPointerEnter", ["pointerout", "pointerover"]);
rr("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Gh = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
function ds(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Yp(r, t, void 0, e),
    e.currentTarget = null
}
function kf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i]
                      , a = u.instance
                      , s = u.currentTarget;
                    if (u = u.listener,
                    a !== o && l.isPropagationStopped())
                        break e;
                    ds(l, u, s),
                    o = a
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (u = r[i],
                    a = u.instance,
                    s = u.currentTarget,
                    u = u.listener,
                    a !== o && l.isPropagationStopped())
                        break e;
                    ds(l, u, s),
                    o = a
                }
        }
    }
    if (lo)
        throw e = Wi,
        lo = !1,
        Wi = null,
        e
}
function ae(e, t) {
    var n = t[eu];
    n === void 0 && (n = t[eu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Cf(t, e, 2, !1),
    n.add(r))
}
function pi(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Cf(n, e, r, t)
}
var Ol = "_reactListening" + Math.random().toString(36).slice(2);
function qr(e) {
    if (!e[Ol]) {
        e[Ol] = !0,
        Nc.forEach(function(n) {
            n !== "selectionchange" && (Gh.has(n) || pi(n, !1, e),
            pi(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ol] || (t[Ol] = !0,
        pi("selectionchange", !1, t))
    }
}
function Cf(e, t, n, r) {
    switch (uf(t)) {
    case 1:
        var l = sh;
        break;
    case 4:
        l = ch;
        break;
    default:
        l = Uu
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !Hi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function hi(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var a = i.tag;
                        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo,
                        a === l || a.nodeType === 8 && a.parentNode === l))
                            return;
                        i = i.return
                    }
                for (; u !== null; ) {
                    if (i = vn(u),
                    i === null)
                        return;
                    if (a = i.tag,
                    a === 5 || a === 6) {
                        r = o = i;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    Kc(function() {
        var s = o
          , d = Ou(n)
          , c = [];
        e: {
            var p = Ef.get(e);
            if (p !== void 0) {
                var E = Bu
                  , x = e;
                switch (e) {
                case "keypress":
                    if (Kl(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    E = _h;
                    break;
                case "focusin":
                    x = "focus",
                    E = ui;
                    break;
                case "focusout":
                    x = "blur",
                    E = ui;
                    break;
                case "beforeblur":
                case "afterblur":
                    E = ui;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    E = es;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    E = ph;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    E = Lh;
                    break;
                case gf:
                case wf:
                case Sf:
                    E = vh;
                    break;
                case xf:
                    E = Nh;
                    break;
                case "scroll":
                    E = fh;
                    break;
                case "wheel":
                    E = Mh;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    E = gh;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    E = ns
                }
                var S = (t & 4) !== 0
                  , N = !S && e === "scroll"
                  , m = S ? p !== null ? p + "Capture" : null : p;
                S = [];
                for (var f = s, v; f !== null; ) {
                    v = f;
                    var k = v.stateNode;
                    if (v.tag === 5 && k !== null && (v = k,
                    m !== null && (k = Kr(f, m),
                    k != null && S.push(br(f, k, v)))),
                    N)
                        break;
                    f = f.return
                }
                0 < S.length && (p = new E(p,x,null,n,d),
                c.push({
                    event: p,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                E = e === "mouseout" || e === "pointerout",
                p && n !== $i && (x = n.relatedTarget || n.fromElement) && (vn(x) || x[Ot]))
                    break e;
                if ((E || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window,
                E ? (x = n.relatedTarget || n.toElement,
                E = s,
                x = x ? vn(x) : null,
                x !== null && (N = Tn(x),
                x !== N || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null,
                x = s),
                E !== x)) {
                    if (S = es,
                    k = "onMouseLeave",
                    m = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (S = ns,
                    k = "onPointerLeave",
                    m = "onPointerEnter",
                    f = "pointer"),
                    N = E == null ? p : Hn(E),
                    v = x == null ? p : Hn(x),
                    p = new S(k,f + "leave",E,n,d),
                    p.target = N,
                    p.relatedTarget = v,
                    k = null,
                    vn(d) === s && (S = new S(m,f + "enter",x,n,d),
                    S.target = v,
                    S.relatedTarget = N,
                    k = S),
                    N = k,
                    E && x)
                        t: {
                            for (S = E,
                            m = x,
                            f = 0,
                            v = S; v; v = Fn(v))
                                f++;
                            for (v = 0,
                            k = m; k; k = Fn(k))
                                v++;
                            for (; 0 < f - v; )
                                S = Fn(S),
                                f--;
                            for (; 0 < v - f; )
                                m = Fn(m),
                                v--;
                            for (; f--; ) {
                                if (S === m || m !== null && S === m.alternate)
                                    break t;
                                S = Fn(S),
                                m = Fn(m)
                            }
                            S = null
                        }
                    else
                        S = null;
                    E !== null && ps(c, p, E, S, !1),
                    x !== null && N !== null && ps(c, N, x, S, !0)
                }
            }
            e: {
                if (p = s ? Hn(s) : window,
                E = p.nodeName && p.nodeName.toLowerCase(),
                E === "select" || E === "input" && p.type === "file")
                    var R = Ah;
                else if (os(p))
                    if (pf)
                        R = Hh;
                    else {
                        R = $h;
                        var y = Bh
                    }
                else
                    (E = p.nodeName) && E.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (R = Vh);
                if (R && (R = R(e, s))) {
                    df(c, R, n, d);
                    break e
                }
                y && y(e, p, s),
                e === "focusout" && (y = p._wrapperState) && y.controlled && p.type === "number" && Ii(p, "number", p.value)
            }
            switch (y = s ? Hn(s) : window,
            e) {
            case "focusin":
                (os(y) || y.contentEditable === "true") && ($n = y,
                Xi = s,
                Ar = null);
                break;
            case "focusout":
                Ar = Xi = $n = null;
                break;
            case "mousedown":
                Gi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Gi = !1,
                cs(c, n, d);
                break;
            case "selectionchange":
                if (Kh)
                    break;
            case "keydown":
            case "keyup":
                cs(c, n, d)
            }
            var D;
            if (Vu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                    }
                    L = void 0
                }
            else
                Bn ? cf(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
            L && (sf && n.locale !== "ko" && (Bn || L !== "onCompositionStart" ? L === "onCompositionEnd" && Bn && (D = af()) : (Yt = d,
            Au = "value"in Yt ? Yt.value : Yt.textContent,
            Bn = !0)),
            y = so(s, L),
            0 < y.length && (L = new ts(L,e,null,n,d),
            c.push({
                event: L,
                listeners: y
            }),
            D ? L.data = D : (D = ff(n),
            D !== null && (L.data = D)))),
            (D = Oh ? Fh(e, n) : Ih(e, n)) && (s = so(s, "onBeforeInput"),
            0 < s.length && (d = new ts("onBeforeInput","beforeinput",null,n,d),
            c.push({
                event: d,
                listeners: s
            }),
            d.data = D))
        }
        kf(c, t)
    })
}
function br(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function so(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , o = l.stateNode;
        l.tag === 5 && o !== null && (l = o,
        o = Kr(e, n),
        o != null && r.unshift(br(e, o, l)),
        o = Kr(e, t),
        o != null && r.push(br(e, o, l))),
        e = e.return
    }
    return r
}
function Fn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ps(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var u = n
          , a = u.alternate
          , s = u.stateNode;
        if (a !== null && a === r)
            break;
        u.tag === 5 && s !== null && (u = s,
        l ? (a = Kr(n, o),
        a != null && i.unshift(br(n, a, u))) : l || (a = Kr(n, o),
        a != null && i.push(br(n, a, u)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Zh = /\r\n?/g
  , Jh = /\u0000|\uFFFD/g;
function hs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zh, `
`).replace(Jh, "")
}
function Fl(e, t, n) {
    if (t = hs(t),
    hs(e) !== t && n)
        throw Error(_(425))
}
function co() {}
var Zi = null
  , Ji = null;
function qi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var bi = typeof setTimeout == "function" ? setTimeout : void 0
  , qh = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ms = typeof Promise == "function" ? Promise : void 0
  , bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ms < "u" ? function(e) {
    return ms.resolve(null).then(e).catch(em)
}
: bi;
function em(e) {
    setTimeout(function() {
        throw e
    })
}
function mi(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Gr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Gr(t)
}
function qt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function vs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var hr = Math.random().toString(36).slice(2)
  , Et = "__reactFiber$" + hr
  , el = "__reactProps$" + hr
  , Ot = "__reactContainer$" + hr
  , eu = "__reactEvents$" + hr
  , tm = "__reactListeners$" + hr
  , nm = "__reactHandles$" + hr;
function vn(e) {
    var t = e[Et];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ot] || n[Et]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = vs(e); e !== null; ) {
                    if (n = e[Et])
                        return n;
                    e = vs(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function dl(e) {
    return e = e[Et] || e[Ot],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Hn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(_(33))
}
function Oo(e) {
    return e[el] || null
}
var tu = []
  , Wn = -1;
function an(e) {
    return {
        current: e
    }
}
function se(e) {
    0 > Wn || (e.current = tu[Wn],
    tu[Wn] = null,
    Wn--)
}
function ie(e, t) {
    Wn++,
    tu[Wn] = e.current,
    e.current = t
}
var on = {}
  , Oe = an(on)
  , Qe = an(!1)
  , kn = on;
function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return on;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
        l[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function Ke(e) {
    return e = e.childContextTypes,
    e != null
}
function fo() {
    se(Qe),
    se(Oe)
}
function ys(e, t, n) {
    if (Oe.current !== on)
        throw Error(_(168));
    ie(Oe, t),
    ie(Qe, n)
}
function _f(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(_(108, Bp(e) || "Unknown", l));
    return me({}, n, r)
}
function po(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on,
    kn = Oe.current,
    ie(Oe, e),
    ie(Qe, Qe.current),
    !0
}
function gs(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(_(169));
    n ? (e = _f(e, t, kn),
    r.__reactInternalMemoizedMergedChildContext = e,
    se(Qe),
    se(Oe),
    ie(Oe, e)) : se(Qe),
    ie(Qe, n)
}
var Lt = null
  , Fo = !1
  , vi = !1;
function Pf(e) {
    Lt === null ? Lt = [e] : Lt.push(e)
}
function rm(e) {
    Fo = !0,
    Pf(e)
}
function sn() {
    if (!vi && Lt !== null) {
        vi = !0;
        var e = 0
          , t = te;
        try {
            var n = Lt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Lt = null,
            Fo = !1
        } catch (l) {
            throw Lt !== null && (Lt = Lt.slice(e + 1)),
            Zc(Fu, sn),
            l
        } finally {
            te = t,
            vi = !1
        }
    }
    return null
}
var Qn = []
  , Kn = 0
  , ho = null
  , mo = 0
  , rt = []
  , lt = 0
  , Cn = null
  , Tt = 1
  , Nt = "";
function pn(e, t) {
    Qn[Kn++] = mo,
    Qn[Kn++] = ho,
    ho = e,
    mo = t
}
function Rf(e, t, n) {
    rt[lt++] = Tt,
    rt[lt++] = Nt,
    rt[lt++] = Cn,
    Cn = e;
    var r = Tt;
    e = Nt;
    var l = 32 - mt(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var o = 32 - mt(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        l -= i,
        Tt = 1 << 32 - mt(t) + l | n << l | r,
        Nt = o + e
    } else
        Tt = 1 << o | n << l | r,
        Nt = e
}
function Wu(e) {
    e.return !== null && (pn(e, 1),
    Rf(e, 1, 0))
}
function Qu(e) {
    for (; e === ho; )
        ho = Qn[--Kn],
        Qn[Kn] = null,
        mo = Qn[--Kn],
        Qn[Kn] = null;
    for (; e === Cn; )
        Cn = rt[--lt],
        rt[lt] = null,
        Nt = rt[--lt],
        rt[lt] = null,
        Tt = rt[--lt],
        rt[lt] = null
}
var be = null
  , qe = null
  , fe = !1
  , ht = null;
function Lf(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ws(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        be = e,
        qe = qt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        be = e,
        qe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Cn !== null ? {
            id: Tt,
            overflow: Nt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ot(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        be = e,
        qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ru(e) {
    if (fe) {
        var t = qe;
        if (t) {
            var n = t;
            if (!ws(e, t)) {
                if (nu(e))
                    throw Error(_(418));
                t = qt(n.nextSibling);
                var r = be;
                t && ws(e, t) ? Lf(r, n) : (e.flags = e.flags & -4097 | 2,
                fe = !1,
                be = e)
            }
        } else {
            if (nu(e))
                throw Error(_(418));
            e.flags = e.flags & -4097 | 2,
            fe = !1,
            be = e
        }
    }
}
function Ss(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    be = e
}
function Il(e) {
    if (e !== be)
        return !1;
    if (!fe)
        return Ss(e),
        fe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !qi(e.type, e.memoizedProps)),
    t && (t = qe)) {
        if (nu(e))
            throw Tf(),
            Error(_(418));
        for (; t; )
            Lf(e, t),
            t = qt(t.nextSibling)
    }
    if (Ss(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(_(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = qt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            qe = null
        }
    } else
        qe = be ? qt(e.stateNode.nextSibling) : null;
    return !0
}
function Tf() {
    for (var e = qe; e; )
        e = qt(e.nextSibling)
}
function or() {
    qe = be = null,
    fe = !1
}
function Ku(e) {
    ht === null ? ht = [e] : ht.push(e)
}
var lm = jt.ReactCurrentBatchConfig;
function Cr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(_(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(_(147, e));
            var l = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(_(284));
        if (!n._owner)
            throw Error(_(290, e))
    }
    return e
}
function jl(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function xs(e) {
    var t = e._init;
    return t(e._payload)
}
function Nf(e) {
    function t(m, f) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [f],
            m.flags |= 16) : v.push(f)
        }
    }
    function n(m, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(m, f),
            f = f.sibling;
        return null
    }
    function r(m, f) {
        for (m = new Map; f !== null; )
            f.key !== null ? m.set(f.key, f) : m.set(f.index, f),
            f = f.sibling;
        return m
    }
    function l(m, f) {
        return m = nn(m, f),
        m.index = 0,
        m.sibling = null,
        m
    }
    function o(m, f, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < f ? (m.flags |= 2,
        f) : v) : (m.flags |= 2,
        f)) : (m.flags |= 1048576,
        f)
    }
    function i(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function u(m, f, v, k) {
        return f === null || f.tag !== 6 ? (f = ki(v, m.mode, k),
        f.return = m,
        f) : (f = l(f, v),
        f.return = m,
        f)
    }
    function a(m, f, v, k) {
        var R = v.type;
        return R === An ? d(m, f, v.props.children, k, v.key) : f !== null && (f.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ht && xs(R) === f.type) ? (k = l(f, v.props),
        k.ref = Cr(m, f, v),
        k.return = m,
        k) : (k = bl(v.type, v.key, v.props, null, m.mode, k),
        k.ref = Cr(m, f, v),
        k.return = m,
        k)
    }
    function s(m, f, v, k) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = Ci(v, m.mode, k),
        f.return = m,
        f) : (f = l(f, v.children || []),
        f.return = m,
        f)
    }
    function d(m, f, v, k, R) {
        return f === null || f.tag !== 7 ? (f = En(v, m.mode, k, R),
        f.return = m,
        f) : (f = l(f, v),
        f.return = m,
        f)
    }
    function c(m, f, v) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = ki("" + f, m.mode, v),
            f.return = m,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Pl:
                return v = bl(f.type, f.key, f.props, null, m.mode, v),
                v.ref = Cr(m, null, f),
                v.return = m,
                v;
            case Un:
                return f = Ci(f, m.mode, v),
                f.return = m,
                f;
            case Ht:
                var k = f._init;
                return c(m, k(f._payload), v)
            }
            if (Dr(f) || wr(f))
                return f = En(f, m.mode, v, null),
                f.return = m,
                f;
            jl(m, f)
        }
        return null
    }
    function p(m, f, v, k) {
        var R = f !== null ? f.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return R !== null ? null : u(m, f, "" + v, k);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Pl:
                return v.key === R ? a(m, f, v, k) : null;
            case Un:
                return v.key === R ? s(m, f, v, k) : null;
            case Ht:
                return R = v._init,
                p(m, f, R(v._payload), k)
            }
            if (Dr(v) || wr(v))
                return R !== null ? null : d(m, f, v, k, null);
            jl(m, v)
        }
        return null
    }
    function E(m, f, v, k, R) {
        if (typeof k == "string" && k !== "" || typeof k == "number")
            return m = m.get(v) || null,
            u(f, m, "" + k, R);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
            case Pl:
                return m = m.get(k.key === null ? v : k.key) || null,
                a(f, m, k, R);
            case Un:
                return m = m.get(k.key === null ? v : k.key) || null,
                s(f, m, k, R);
            case Ht:
                var y = k._init;
                return E(m, f, v, y(k._payload), R)
            }
            if (Dr(k) || wr(k))
                return m = m.get(v) || null,
                d(f, m, k, R, null);
            jl(f, k)
        }
        return null
    }
    function x(m, f, v, k) {
        for (var R = null, y = null, D = f, L = f = 0, F = null; D !== null && L < v.length; L++) {
            D.index > L ? (F = D,
            D = null) : F = D.sibling;
            var I = p(m, D, v[L], k);
            if (I === null) {
                D === null && (D = F);
                break
            }
            e && D && I.alternate === null && t(m, D),
            f = o(I, f, L),
            y === null ? R = I : y.sibling = I,
            y = I,
            D = F
        }
        if (L === v.length)
            return n(m, D),
            fe && pn(m, L),
            R;
        if (D === null) {
            for (; L < v.length; L++)
                D = c(m, v[L], k),
                D !== null && (f = o(D, f, L),
                y === null ? R = D : y.sibling = D,
                y = D);
            return fe && pn(m, L),
            R
        }
        for (D = r(m, D); L < v.length; L++)
            F = E(D, m, L, v[L], k),
            F !== null && (e && F.alternate !== null && D.delete(F.key === null ? L : F.key),
            f = o(F, f, L),
            y === null ? R = F : y.sibling = F,
            y = F);
        return e && D.forEach(function(X) {
            return t(m, X)
        }),
        fe && pn(m, L),
        R
    }
    function S(m, f, v, k) {
        var R = wr(v);
        if (typeof R != "function")
            throw Error(_(150));
        if (v = R.call(v),
        v == null)
            throw Error(_(151));
        for (var y = R = null, D = f, L = f = 0, F = null, I = v.next(); D !== null && !I.done; L++,
        I = v.next()) {
            D.index > L ? (F = D,
            D = null) : F = D.sibling;
            var X = p(m, D, I.value, k);
            if (X === null) {
                D === null && (D = F);
                break
            }
            e && D && X.alternate === null && t(m, D),
            f = o(X, f, L),
            y === null ? R = X : y.sibling = X,
            y = X,
            D = F
        }
        if (I.done)
            return n(m, D),
            fe && pn(m, L),
            R;
        if (D === null) {
            for (; !I.done; L++,
            I = v.next())
                I = c(m, I.value, k),
                I !== null && (f = o(I, f, L),
                y === null ? R = I : y.sibling = I,
                y = I);
            return fe && pn(m, L),
            R
        }
        for (D = r(m, D); !I.done; L++,
        I = v.next())
            I = E(D, m, L, I.value, k),
            I !== null && (e && I.alternate !== null && D.delete(I.key === null ? L : I.key),
            f = o(I, f, L),
            y === null ? R = I : y.sibling = I,
            y = I);
        return e && D.forEach(function(G) {
            return t(m, G)
        }),
        fe && pn(m, L),
        R
    }
    function N(m, f, v, k) {
        if (typeof v == "object" && v !== null && v.type === An && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Pl:
                e: {
                    for (var R = v.key, y = f; y !== null; ) {
                        if (y.key === R) {
                            if (R = v.type,
                            R === An) {
                                if (y.tag === 7) {
                                    n(m, y.sibling),
                                    f = l(y, v.props.children),
                                    f.return = m,
                                    m = f;
                                    break e
                                }
                            } else if (y.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ht && xs(R) === y.type) {
                                n(m, y.sibling),
                                f = l(y, v.props),
                                f.ref = Cr(m, y, v),
                                f.return = m,
                                m = f;
                                break e
                            }
                            n(m, y);
                            break
                        } else
                            t(m, y);
                        y = y.sibling
                    }
                    v.type === An ? (f = En(v.props.children, m.mode, k, v.key),
                    f.return = m,
                    m = f) : (k = bl(v.type, v.key, v.props, null, m.mode, k),
                    k.ref = Cr(m, f, v),
                    k.return = m,
                    m = k)
                }
                return i(m);
            case Un:
                e: {
                    for (y = v.key; f !== null; ) {
                        if (f.key === y)
                            if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
                                n(m, f.sibling),
                                f = l(f, v.children || []),
                                f.return = m,
                                m = f;
                                break e
                            } else {
                                n(m, f);
                                break
                            }
                        else
                            t(m, f);
                        f = f.sibling
                    }
                    f = Ci(v, m.mode, k),
                    f.return = m,
                    m = f
                }
                return i(m);
            case Ht:
                return y = v._init,
                N(m, f, y(v._payload), k)
            }
            if (Dr(v))
                return x(m, f, v, k);
            if (wr(v))
                return S(m, f, v, k);
            jl(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        f !== null && f.tag === 6 ? (n(m, f.sibling),
        f = l(f, v),
        f.return = m,
        m = f) : (n(m, f),
        f = ki(v, m.mode, k),
        f.return = m,
        m = f),
        i(m)) : n(m, f)
    }
    return N
}
var ir = Nf(!0)
  , Df = Nf(!1)
  , vo = an(null)
  , yo = null
  , Yn = null
  , Yu = null;
function Xu() {
    Yu = Yn = yo = null
}
function Gu(e) {
    var t = vo.current;
    se(vo),
    e._currentValue = t
}
function lu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function tr(e, t) {
    yo = e,
    Yu = Yn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (We = !0),
    e.firstContext = null)
}
function ut(e) {
    var t = e._currentValue;
    if (Yu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Yn === null) {
            if (yo === null)
                throw Error(_(308));
            Yn = e,
            yo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Yn = Yn.next = e;
    return t
}
var yn = null;
function Zu(e) {
    yn === null ? yn = [e] : yn.push(e)
}
function Mf(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    Zu(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Ft(e, r)
}
function Ft(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Wt = !1;
function Ju(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function zf(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Dt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Ft(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    Zu(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Ft(e, n)
}
function Yl(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Iu(e, n)
    }
}
function Es(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else
            l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function go(e, t, n, r) {
    var l = e.updateQueue;
    Wt = !1;
    var o = l.firstBaseUpdate
      , i = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u
          , s = a.next;
        a.next = null,
        i === null ? o = s : i.next = s,
        i = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        u = d.lastBaseUpdate,
        u !== i && (u === null ? d.firstBaseUpdate = s : u.next = s,
        d.lastBaseUpdate = a))
    }
    if (o !== null) {
        var c = l.baseState;
        i = 0,
        d = s = a = null,
        u = o;
        do {
            var p = u.lane
              , E = u.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: E,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var x = e
                      , S = u;
                    switch (p = t,
                    E = n,
                    S.tag) {
                    case 1:
                        if (x = S.payload,
                        typeof x == "function") {
                            c = x.call(E, c, p);
                            break e
                        }
                        c = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = S.payload,
                        p = typeof x == "function" ? x.call(E, c, p) : x,
                        p == null)
                            break e;
                        c = me({}, c, p);
                        break e;
                    case 2:
                        Wt = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                p = l.effects,
                p === null ? l.effects = [u] : p.push(u))
            } else
                E = {
                    eventTime: E,
                    lane: p,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                d === null ? (s = d = E,
                a = c) : d = d.next = E,
                i |= p;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                p = u,
                u = p.next,
                p.next = null,
                l.lastBaseUpdate = p,
                l.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = c),
        l.baseState = a,
        l.firstBaseUpdate = s,
        l.lastBaseUpdate = d,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                i |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            o === null && (l.shared.lanes = 0);
        Pn |= i,
        e.lanes = i,
        e.memoizedState = c
    }
}
function ks(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(_(191, l));
                l.call(r)
            }
        }
}
var pl = {}
  , Ct = an(pl)
  , tl = an(pl)
  , nl = an(pl);
function gn(e) {
    if (e === pl)
        throw Error(_(174));
    return e
}
function qu(e, t) {
    switch (ie(nl, t),
    ie(tl, e),
    ie(Ct, pl),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ui(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ui(t, e)
    }
    se(Ct),
    ie(Ct, t)
}
function ur() {
    se(Ct),
    se(tl),
    se(nl)
}
function Of(e) {
    gn(nl.current);
    var t = gn(Ct.current)
      , n = Ui(t, e.type);
    t !== n && (ie(tl, e),
    ie(Ct, n))
}
function bu(e) {
    tl.current === e && (se(Ct),
    se(tl))
}
var pe = an(0);
function wo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var yi = [];
function ea() {
    for (var e = 0; e < yi.length; e++)
        yi[e]._workInProgressVersionPrimary = null;
    yi.length = 0
}
var Xl = jt.ReactCurrentDispatcher
  , gi = jt.ReactCurrentBatchConfig
  , _n = 0
  , he = null
  , Ee = null
  , Ce = null
  , So = !1
  , Br = !1
  , rl = 0
  , om = 0;
function De() {
    throw Error(_(321))
}
function ta(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!yt(e[n], t[n]))
            return !1;
    return !0
}
function na(e, t, n, r, l, o) {
    if (_n = o,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Xl.current = e === null || e.memoizedState === null ? sm : cm,
    e = n(r, l),
    Br) {
        o = 0;
        do {
            if (Br = !1,
            rl = 0,
            25 <= o)
                throw Error(_(301));
            o += 1,
            Ce = Ee = null,
            t.updateQueue = null,
            Xl.current = fm,
            e = n(r, l)
        } while (Br)
    }
    if (Xl.current = xo,
    t = Ee !== null && Ee.next !== null,
    _n = 0,
    Ce = Ee = he = null,
    So = !1,
    t)
        throw Error(_(300));
    return e
}
function ra() {
    var e = rl !== 0;
    return rl = 0,
    e
}
function xt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ce === null ? he.memoizedState = Ce = e : Ce = Ce.next = e,
    Ce
}
function at() {
    if (Ee === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ee.next;
    var t = Ce === null ? he.memoizedState : Ce.next;
    if (t !== null)
        Ce = t,
        Ee = e;
    else {
        if (e === null)
            throw Error(_(310));
        Ee = e,
        e = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        },
        Ce === null ? he.memoizedState = Ce = e : Ce = Ce.next = e
    }
    return Ce
}
function ll(e, t) {
    return typeof t == "function" ? t(e) : t
}
function wi(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = Ee
      , l = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next,
            o.next = i
        }
        r.baseQueue = l = o,
        n.pending = null
    }
    if (l !== null) {
        o = l.next,
        r = r.baseState;
        var u = i = null
          , a = null
          , s = o;
        do {
            var d = s.lane;
            if ((_n & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                }),
                r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var c = {
                    lane: d,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                a === null ? (u = a = c,
                i = r) : a = a.next = c,
                he.lanes |= d,
                Pn |= d
            }
            s = s.next
        } while (s !== null && s !== o);
        a === null ? i = r : a.next = u,
        yt(r, t.memoizedState) || (We = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            o = l.lane,
            he.lanes |= o,
            Pn |= o,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Si(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== l);
        yt(o, t.memoizedState) || (We = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Ff() {}
function If(e, t) {
    var n = he
      , r = at()
      , l = t()
      , o = !yt(r.memoizedState, l);
    if (o && (r.memoizedState = l,
    We = !0),
    r = r.queue,
    la(Af.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Ce !== null && Ce.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ol(9, Uf.bind(null, n, r, l, t), void 0, null),
        _e === null)
            throw Error(_(349));
        _n & 30 || jf(n, t, l)
    }
    return l
}
function jf(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Uf(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Bf(t) && $f(e)
}
function Af(e, t, n) {
    return n(function() {
        Bf(t) && $f(e)
    })
}
function Bf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !yt(e, n)
    } catch {
        return !0
    }
}
function $f(e) {
    var t = Ft(e, 1);
    t !== null && vt(t, e, 1, -1)
}
function Cs(e) {
    var t = xt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = am.bind(null, he, e),
    [t.memoizedState, e]
}
function ol(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Vf() {
    return at().memoizedState
}
function Gl(e, t, n, r) {
    var l = xt();
    he.flags |= e,
    l.memoizedState = ol(1 | t, n, void 0, r === void 0 ? null : r)
}
function Io(e, t, n, r) {
    var l = at();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ee !== null) {
        var i = Ee.memoizedState;
        if (o = i.destroy,
        r !== null && ta(r, i.deps)) {
            l.memoizedState = ol(t, n, o, r);
            return
        }
    }
    he.flags |= e,
    l.memoizedState = ol(1 | t, n, o, r)
}
function _s(e, t) {
    return Gl(8390656, 8, e, t)
}
function la(e, t) {
    return Io(2048, 8, e, t)
}
function Hf(e, t) {
    return Io(4, 2, e, t)
}
function Wf(e, t) {
    return Io(4, 4, e, t)
}
function Qf(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Kf(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Io(4, 4, Qf.bind(null, t, e), n)
}
function oa() {}
function Yf(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Xf(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ta(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Gf(e, t, n) {
    return _n & 21 ? (yt(n, t) || (n = bc(),
    he.lanes |= n,
    Pn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    We = !0),
    e.memoizedState = n)
}
function im(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = gi.transition;
    gi.transition = {};
    try {
        e(!1),
        t()
    } finally {
        te = n,
        gi.transition = r
    }
}
function Zf() {
    return at().memoizedState
}
function um(e, t, n) {
    var r = tn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Jf(e))
        qf(t, n);
    else if (n = Mf(e, t, n, r),
    n !== null) {
        var l = Ae();
        vt(n, e, r, l),
        bf(n, t, r)
    }
}
function am(e, t, n) {
    var r = tn(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Jf(e))
        qf(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , u = o(i, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                yt(u, i)) {
                    var a = t.interleaved;
                    a === null ? (l.next = l,
                    Zu(t)) : (l.next = a.next,
                    a.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Mf(e, t, l, r),
        n !== null && (l = Ae(),
        vt(n, e, r, l),
        bf(n, t, r))
    }
}
function Jf(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function qf(e, t) {
    Br = So = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function bf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Iu(e, n)
    }
}
var xo = {
    readContext: ut,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1
}
  , sm = {
    readContext: ut,
    useCallback: function(e, t) {
        return xt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ut,
    useEffect: _s,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Gl(4194308, 4, Qf.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Gl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Gl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = xt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = xt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = um.bind(null, he, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = xt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Cs,
    useDebugValue: oa,
    useDeferredValue: function(e) {
        return xt().memoizedState = e
    },
    useTransition: function() {
        var e = Cs(!1)
          , t = e[0];
        return e = im.bind(null, e[1]),
        xt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = he
          , l = xt();
        if (fe) {
            if (n === void 0)
                throw Error(_(407));
            n = n()
        } else {
            if (n = t(),
            _e === null)
                throw Error(_(349));
            _n & 30 || jf(r, t, n)
        }
        l.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return l.queue = o,
        _s(Af.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        ol(9, Uf.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = xt()
          , t = _e.identifierPrefix;
        if (fe) {
            var n = Nt
              , r = Tt;
            n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = rl++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = om++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , cm = {
    readContext: ut,
    useCallback: Yf,
    useContext: ut,
    useEffect: la,
    useImperativeHandle: Kf,
    useInsertionEffect: Hf,
    useLayoutEffect: Wf,
    useMemo: Xf,
    useReducer: wi,
    useRef: Vf,
    useState: function() {
        return wi(ll)
    },
    useDebugValue: oa,
    useDeferredValue: function(e) {
        var t = at();
        return Gf(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = wi(ll)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Ff,
    useSyncExternalStore: If,
    useId: Zf,
    unstable_isNewReconciler: !1
}
  , fm = {
    readContext: ut,
    useCallback: Yf,
    useContext: ut,
    useEffect: la,
    useImperativeHandle: Kf,
    useInsertionEffect: Hf,
    useLayoutEffect: Wf,
    useMemo: Xf,
    useReducer: Si,
    useRef: Vf,
    useState: function() {
        return Si(ll)
    },
    useDebugValue: oa,
    useDeferredValue: function(e) {
        var t = at();
        return Ee === null ? t.memoizedState = e : Gf(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = Si(ll)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Ff,
    useSyncExternalStore: If,
    useId: Zf,
    unstable_isNewReconciler: !1
};
function ft(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ou(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : me({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var jo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Tn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , l = tn(e)
          , o = Dt(r, l);
        o.payload = t,
        n != null && (o.callback = n),
        t = bt(e, o, l),
        t !== null && (vt(t, e, l, r),
        Yl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , l = tn(e)
          , o = Dt(r, l);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = bt(e, o, l),
        t !== null && (vt(t, e, l, r),
        Yl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ae()
          , r = tn(e)
          , l = Dt(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = bt(e, l, r),
        t !== null && (vt(t, e, r, n),
        Yl(t, e, r))
    }
};
function Ps(e, t, n, r, l, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Jr(n, r) || !Jr(l, o) : !0
}
function ed(e, t, n) {
    var r = !1
      , l = on
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = ut(o) : (l = Ke(t) ? kn : Oe.current,
    r = t.contextTypes,
    o = (r = r != null) ? lr(e, l) : on),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = jo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Rs(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jo.enqueueReplaceState(t, t.state, null)
}
function iu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Ju(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = ut(o) : (o = Ke(t) ? kn : Oe.current,
    l.context = lr(e, o)),
    l.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (ou(e, t, o, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && jo.enqueueReplaceState(l, l.state, null),
    go(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function ar(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Ap(r),
            r = r.return;
        while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function xi(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function uu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var dm = typeof WeakMap == "function" ? WeakMap : Map;
function td(e, t, n) {
    n = Dt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ko || (ko = !0,
        yu = r),
        uu(e, t)
    }
    ,
    n
}
function nd(e, t, n) {
    n = Dt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            uu(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        uu(e, t),
        typeof r != "function" && (en === null ? en = new Set([this]) : en.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Ls(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new dm;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Pm.bind(null, e, t, n),
    t.then(e, e))
}
function Ts(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ns(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1),
    t.tag = 2,
    bt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var pm = jt.ReactCurrentOwner
  , We = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? Df(t, null, n, r) : ir(t, e.child, n, r)
}
function Ds(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return tr(t, l),
    r = na(e, t, n, r, o, l),
    n = ra(),
    e !== null && !We ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    It(e, t, l)) : (fe && n && Wu(t),
    t.flags |= 1,
    Ue(e, t, r, l),
    t.child)
}
function Ms(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !pa(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        rd(e, t, o, r, l)) : (e = bl(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Jr,
        n(i, r) && e.ref === t.ref)
            return It(e, t, l)
    }
    return t.flags |= 1,
    e = nn(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function rd(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Jr(o, r) && e.ref === t.ref)
            if (We = !1,
            t.pendingProps = r = o,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (We = !0);
            else
                return t.lanes = e.lanes,
                It(e, t, l)
    }
    return au(e, t, n, r, l)
}
function ld(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ie(Gn, Ze),
            Ze |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ie(Gn, Ze),
                Ze |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            ie(Gn, Ze),
            Ze |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(Gn, Ze),
        Ze |= r;
    return Ue(e, t, l, n),
    t.child
}
function od(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function au(e, t, n, r, l) {
    var o = Ke(n) ? kn : Oe.current;
    return o = lr(t, o),
    tr(t, l),
    n = na(e, t, n, r, o, l),
    r = ra(),
    e !== null && !We ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    It(e, t, l)) : (fe && r && Wu(t),
    t.flags |= 1,
    Ue(e, t, n, l),
    t.child)
}
function zs(e, t, n, r, l) {
    if (Ke(n)) {
        var o = !0;
        po(t)
    } else
        o = !1;
    if (tr(t, l),
    t.stateNode === null)
        Zl(e, t),
        ed(t, n, r),
        iu(t, n, r, l),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , u = t.memoizedProps;
        i.props = u;
        var a = i.context
          , s = n.contextType;
        typeof s == "object" && s !== null ? s = ut(s) : (s = Ke(n) ? kn : Oe.current,
        s = lr(t, s));
        var d = n.getDerivedStateFromProps
          , c = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== s) && Rs(t, i, r, s),
        Wt = !1;
        var p = t.memoizedState;
        i.state = p,
        go(t, r, i, l),
        a = t.memoizedState,
        u !== r || p !== a || Qe.current || Wt ? (typeof d == "function" && (ou(t, n, d, r),
        a = t.memoizedState),
        (u = Wt || Ps(t, n, u, r, p, a, s)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        i.props = r,
        i.state = a,
        i.context = s,
        r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        zf(e, t),
        u = t.memoizedProps,
        s = t.type === t.elementType ? u : ft(t.type, u),
        i.props = s,
        c = t.pendingProps,
        p = i.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = ut(a) : (a = Ke(n) ? kn : Oe.current,
        a = lr(t, a));
        var E = n.getDerivedStateFromProps;
        (d = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== c || p !== a) && Rs(t, i, r, a),
        Wt = !1,
        p = t.memoizedState,
        i.state = p,
        go(t, r, i, l);
        var x = t.memoizedState;
        u !== c || p !== x || Qe.current || Wt ? (typeof E == "function" && (ou(t, n, E, r),
        x = t.memoizedState),
        (s = Wt || Ps(t, n, s, r, p, x, a) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, a),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, a)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        i.props = r,
        i.state = x,
        i.context = a,
        r = s) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return su(e, t, n, r, o, l)
}
function su(e, t, n, r, l, o) {
    od(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return l && gs(t, n, !1),
        It(e, t, o);
    r = t.stateNode,
    pm.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = ir(t, e.child, null, o),
    t.child = ir(t, null, u, o)) : Ue(e, t, u, o),
    t.memoizedState = r.state,
    l && gs(t, n, !0),
    t.child
}
function id(e) {
    var t = e.stateNode;
    t.pendingContext ? ys(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ys(e, t.context, !1),
    qu(e, t.containerInfo)
}
function Os(e, t, n, r, l) {
    return or(),
    Ku(l),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var cu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function fu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function ud(e, t, n) {
    var r = t.pendingProps, l = pe.current, o = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(pe, l & 1),
    e === null)
        return ru(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = Bo(i, r, 0, null),
        e = En(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = fu(n),
        t.memoizedState = cu,
        e) : ia(t, i));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return hm(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        l = e.child,
        u = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = nn(l, a),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? o = nn(u, o) : (o = En(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? fu(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = cu,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = nn(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ia(e, t) {
    return t = Bo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ul(e, t, n, r) {
    return r !== null && Ku(r),
    ir(t, e.child, null, n),
    e = ia(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function hm(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = xi(Error(_(422))),
        Ul(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        l = t.mode,
        r = Bo({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        o = En(o, l, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && ir(t, e.child, null, i),
        t.child.memoizedState = fu(i),
        t.memoizedState = cu,
        o);
    if (!(t.mode & 1))
        return Ul(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        o = Error(_(419)),
        r = xi(o, r, void 0),
        Ul(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0,
    We || u) {
        if (r = _e,
        r !== null) {
            switch (i & -i) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l,
            l !== 0 && l !== o.retryLane && (o.retryLane = l,
            Ft(e, l),
            vt(r, e, l, -1))
        }
        return da(),
        r = xi(Error(_(421))),
        Ul(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Rm.bind(null, e),
    l._reactRetry = t,
    null) : (e = o.treeContext,
    qe = qt(l.nextSibling),
    be = t,
    fe = !0,
    ht = null,
    e !== null && (rt[lt++] = Tt,
    rt[lt++] = Nt,
    rt[lt++] = Cn,
    Tt = e.id,
    Nt = e.overflow,
    Cn = t),
    t = ia(t, r.children),
    t.flags |= 4096,
    t)
}
function Fs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    lu(e.return, t, n)
}
function Ei(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = l)
}
function ad(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , o = r.tail;
    if (Ue(e, t, r.children, n),
    r = pe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Fs(e, n, t);
                else if (e.tag === 19)
                    Fs(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ie(pe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && wo(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Ei(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && wo(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Ei(t, !0, n, null, o);
            break;
        case "together":
            Ei(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Zl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function It(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Pn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child,
        n = nn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = nn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function mm(e, t, n) {
    switch (t.tag) {
    case 3:
        id(t),
        or();
        break;
    case 5:
        Of(t);
        break;
    case 1:
        Ke(t.type) && po(t);
        break;
    case 4:
        qu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        ie(vo, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(pe, pe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? ud(e, t, n) : (ie(pe, pe.current & 1),
            e = It(e, t, n),
            e !== null ? e.sibling : null);
        ie(pe, pe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return ad(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        ie(pe, pe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        ld(e, t, n)
    }
    return It(e, t, n)
}
var sd, du, cd, fd;
sd = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
du = function() {}
;
cd = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        gn(Ct.current);
        var o = null;
        switch (n) {
        case "input":
            l = Oi(e, l),
            r = Oi(e, r),
            o = [];
            break;
        case "select":
            l = me({}, l, {
                value: void 0
            }),
            r = me({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            l = ji(e, l),
            r = ji(e, r),
            o = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = co)
        }
        Ai(n, r);
        var i;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var u = l[s];
                    for (i in u)
                        u.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Wr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
        for (s in r) {
            var a = r[s];
            if (u = l != null ? l[s] : void 0,
            r.hasOwnProperty(s) && a !== u && (a != null || u != null))
                if (s === "style")
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in a)
                            a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}),
                            n[i] = a[i])
                    } else
                        n || (o || (o = []),
                        o.push(s, n)),
                        n = a;
                else
                    s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    u = u ? u.__html : void 0,
                    a != null && u !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Wr.hasOwnProperty(s) ? (a != null && s === "onScroll" && ae("scroll", e),
                    o || u === a || (o = [])) : (o = o || []).push(s, a))
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4)
    }
}
;
fd = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function _r(e, t) {
    if (!fe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function vm(e, t, n) {
    var r = t.pendingProps;
    switch (Qu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Me(t),
        null;
    case 1:
        return Ke(t.type) && fo(),
        Me(t),
        null;
    case 3:
        return r = t.stateNode,
        ur(),
        se(Qe),
        se(Oe),
        ea(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Il(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ht !== null && (Su(ht),
        ht = null))),
        du(e, t),
        Me(t),
        null;
    case 5:
        bu(t);
        var l = gn(nl.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            cd(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return Me(t),
                null
            }
            if (e = gn(Ct.current),
            Il(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Et] = t,
                r[el] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ae("cancel", r),
                    ae("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ae("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < zr.length; l++)
                        ae(zr[l], r);
                    break;
                case "source":
                    ae("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ae("error", r),
                    ae("load", r);
                    break;
                case "details":
                    ae("toggle", r);
                    break;
                case "input":
                    Wa(r, o),
                    ae("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    ae("invalid", r);
                    break;
                case "textarea":
                    Ka(r, o),
                    ae("invalid", r)
                }
                Ai(n, o),
                l = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var u = o[i];
                        i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Fl(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Fl(r.textContent, u, e),
                        l = ["children", "" + u]) : Wr.hasOwnProperty(i) && u != null && i === "onScroll" && ae("scroll", r)
                    }
                switch (n) {
                case "input":
                    Rl(r),
                    Qa(r, o, !0);
                    break;
                case "textarea":
                    Rl(r),
                    Ya(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = co)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Et] = t,
                e[el] = r,
                sd(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Bi(n, r),
                    n) {
                    case "dialog":
                        ae("cancel", e),
                        ae("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ae("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < zr.length; l++)
                            ae(zr[l], e);
                        l = r;
                        break;
                    case "source":
                        ae("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ae("error", e),
                        ae("load", e),
                        l = r;
                        break;
                    case "details":
                        ae("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Wa(e, r),
                        l = Oi(e, r),
                        ae("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = me({}, r, {
                            value: void 0
                        }),
                        ae("invalid", e);
                        break;
                    case "textarea":
                        Ka(e, r),
                        l = ji(e, r),
                        ae("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    Ai(n, l),
                    u = l;
                    for (o in u)
                        if (u.hasOwnProperty(o)) {
                            var a = u[o];
                            o === "style" ? $c(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Ac(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Qr(e, a) : typeof a == "number" && Qr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Wr.hasOwnProperty(o) ? a != null && o === "onScroll" && ae("scroll", e) : a != null && Nu(e, o, a, i))
                        }
                    switch (n) {
                    case "input":
                        Rl(e),
                        Qa(e, r, !1);
                        break;
                    case "textarea":
                        Rl(e),
                        Ya(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + ln(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Jn(e, !!r.multiple, o, !1) : r.defaultValue != null && Jn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = co)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Me(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            fd(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = gn(nl.current),
            gn(Ct.current),
            Il(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Et] = t,
                (o = r.nodeValue !== n) && (e = be,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Fl(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Fl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Et] = t,
                t.stateNode = r
        }
        return Me(t),
        null;
    case 13:
        if (se(pe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (fe && qe !== null && t.mode & 1 && !(t.flags & 128))
                Tf(),
                or(),
                t.flags |= 98560,
                o = !1;
            else if (o = Il(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(_(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(_(317));
                    o[Et] = t
                } else
                    or(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Me(t),
                o = !1
            } else
                ht !== null && (Su(ht),
                ht = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || pe.current & 1 ? ke === 0 && (ke = 3) : da())),
        t.updateQueue !== null && (t.flags |= 4),
        Me(t),
        null);
    case 4:
        return ur(),
        du(e, t),
        e === null && qr(t.stateNode.containerInfo),
        Me(t),
        null;
    case 10:
        return Gu(t.type._context),
        Me(t),
        null;
    case 17:
        return Ke(t.type) && fo(),
        Me(t),
        null;
    case 19:
        if (se(pe),
        o = t.memoizedState,
        o === null)
            return Me(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                _r(o, !1);
            else {
                if (ke !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = wo(e),
                        i !== null) {
                            for (t.flags |= 128,
                            _r(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ie(pe, pe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && ge() > sr && (t.flags |= 128,
                r = !0,
                _r(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = wo(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    _r(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !fe)
                        return Me(t),
                        null
                } else
                    2 * ge() - o.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    _r(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = ge(),
        t.sibling = null,
        n = pe.current,
        ie(pe, r ? n & 1 | 2 : n & 1),
        t) : (Me(t),
        null);
    case 22:
    case 23:
        return fa(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ze & 1073741824 && (Me(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(_(156, t.tag))
}
function ym(e, t) {
    switch (Qu(t),
    t.tag) {
    case 1:
        return Ke(t.type) && fo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ur(),
        se(Qe),
        se(Oe),
        ea(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return bu(t),
        null;
    case 13:
        if (se(pe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            or()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return se(pe),
        null;
    case 4:
        return ur(),
        null;
    case 10:
        return Gu(t.type._context),
        null;
    case 22:
    case 23:
        return fa(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Al = !1
  , ze = !1
  , gm = typeof WeakSet == "function" ? WeakSet : Set
  , O = null;
function Xn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ye(e, t, r)
            }
        else
            n.current = null
}
function pu(e, t, n) {
    try {
        n()
    } catch (r) {
        ye(e, t, r)
    }
}
var Is = !1;
function wm(e, t) {
    if (Zi = uo,
    e = vf(),
    Hu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , u = -1
                      , a = -1
                      , s = 0
                      , d = 0
                      , c = e
                      , p = null;
                    t: for (; ; ) {
                        for (var E; c !== n || l !== 0 && c.nodeType !== 3 || (u = i + l),
                        c !== o || r !== 0 && c.nodeType !== 3 || (a = i + r),
                        c.nodeType === 3 && (i += c.nodeValue.length),
                        (E = c.firstChild) !== null; )
                            p = c,
                            c = E;
                        for (; ; ) {
                            if (c === e)
                                break t;
                            if (p === n && ++s === l && (u = i),
                            p === o && ++d === r && (a = i),
                            (E = c.nextSibling) !== null)
                                break;
                            c = p,
                            p = c.parentNode
                        }
                        c = E
                    }
                    n = u === -1 || a === -1 ? null : {
                        start: u,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ji = {
        focusedElem: e,
        selectionRange: n
    },
    uo = !1,
    O = t; O !== null; )
        if (t = O,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            O = e;
        else
            for (; O !== null; ) {
                t = O;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var S = x.memoizedProps
                                  , N = x.memoizedState
                                  , m = t.stateNode
                                  , f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? S : ft(t.type, S), N);
                                m.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                        }
                } catch (k) {
                    ye(t, t.return, k)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    O = e;
                    break
                }
                O = t.return
            }
    return x = Is,
    Is = !1,
    x
}
function $r(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0,
                o !== void 0 && pu(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function Uo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function hu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function dd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    dd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Et],
    delete t[el],
    delete t[eu],
    delete t[tm],
    delete t[nm])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function pd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function js(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || pd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = co));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (mu(e, t, n),
        e = e.sibling; e !== null; )
            mu(e, t, n),
            e = e.sibling
}
function vu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (vu(e, t, n),
        e = e.sibling; e !== null; )
            vu(e, t, n),
            e = e.sibling
}
var Le = null
  , dt = !1;
function $t(e, t, n) {
    for (n = n.child; n !== null; )
        hd(e, t, n),
        n = n.sibling
}
function hd(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
        try {
            kt.onCommitFiberUnmount(No, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ze || Xn(n, t);
    case 6:
        var r = Le
          , l = dt;
        Le = null,
        $t(e, t, n),
        Le = r,
        dt = l,
        Le !== null && (dt ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
        break;
    case 18:
        Le !== null && (dt ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? mi(e.parentNode, n) : e.nodeType === 1 && mi(e, n),
        Gr(e)) : mi(Le, n.stateNode));
        break;
    case 4:
        r = Le,
        l = dt,
        Le = n.stateNode.containerInfo,
        dt = !0,
        $t(e, t, n),
        Le = r,
        dt = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ze && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var o = l
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && pu(n, t, i),
                l = l.next
            } while (l !== r)
        }
        $t(e, t, n);
        break;
    case 1:
        if (!ze && (Xn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                ye(n, t, u)
            }
        $t(e, t, n);
        break;
    case 21:
        $t(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null,
        $t(e, t, n),
        ze = r) : $t(e, t, n);
        break;
    default:
        $t(e, t, n)
    }
}
function Us(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new gm),
        t.forEach(function(r) {
            var l = Lm.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e
                  , i = t
                  , u = i;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        Le = u.stateNode,
                        dt = !1;
                        break e;
                    case 3:
                        Le = u.stateNode.containerInfo,
                        dt = !0;
                        break e;
                    case 4:
                        Le = u.stateNode.containerInfo,
                        dt = !0;
                        break e
                    }
                    u = u.return
                }
                if (Le === null)
                    throw Error(_(160));
                hd(o, i, l),
                Le = null,
                dt = !1;
                var a = l.alternate;
                a !== null && (a.return = null),
                l.return = null
            } catch (s) {
                ye(l, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            md(t, e),
            t = t.sibling
}
function md(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ct(t, e),
        St(e),
        r & 4) {
            try {
                $r(3, e, e.return),
                Uo(3, e)
            } catch (S) {
                ye(e, e.return, S)
            }
            try {
                $r(5, e, e.return)
            } catch (S) {
                ye(e, e.return, S)
            }
        }
        break;
    case 1:
        ct(t, e),
        St(e),
        r & 512 && n !== null && Xn(n, n.return);
        break;
    case 5:
        if (ct(t, e),
        St(e),
        r & 512 && n !== null && Xn(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Qr(l, "")
            } catch (S) {
                ye(e, e.return, S)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , u = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    u === "input" && o.type === "radio" && o.name != null && Ic(l, o),
                    Bi(u, i);
                    var s = Bi(u, o);
                    for (i = 0; i < a.length; i += 2) {
                        var d = a[i]
                          , c = a[i + 1];
                        d === "style" ? $c(l, c) : d === "dangerouslySetInnerHTML" ? Ac(l, c) : d === "children" ? Qr(l, c) : Nu(l, d, c, s)
                    }
                    switch (u) {
                    case "input":
                        Fi(l, o);
                        break;
                    case "textarea":
                        jc(l, o);
                        break;
                    case "select":
                        var p = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var E = o.value;
                        E != null ? Jn(l, !!o.multiple, E, !1) : p !== !!o.multiple && (o.defaultValue != null ? Jn(l, !!o.multiple, o.defaultValue, !0) : Jn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[el] = o
                } catch (S) {
                    ye(e, e.return, S)
                }
        }
        break;
    case 6:
        if (ct(t, e),
        St(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            l = e.stateNode,
            o = e.memoizedProps;
            try {
                l.nodeValue = o
            } catch (S) {
                ye(e, e.return, S)
            }
        }
        break;
    case 3:
        if (ct(t, e),
        St(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Gr(t.containerInfo)
            } catch (S) {
                ye(e, e.return, S)
            }
        break;
    case 4:
        ct(t, e),
        St(e);
        break;
    case 13:
        ct(t, e),
        St(e),
        l = e.child,
        l.flags & 8192 && (o = l.memoizedState !== null,
        l.stateNode.isHidden = o,
        !o || l.alternate !== null && l.alternate.memoizedState !== null || (sa = ge())),
        r & 4 && Us(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ze = (s = ze) || d,
        ct(t, e),
        ze = s) : ct(t, e),
        St(e),
        r & 8192) {
            if (s = e.memoizedState !== null,
            (e.stateNode.isHidden = s) && !d && e.mode & 1)
                for (O = e,
                d = e.child; d !== null; ) {
                    for (c = O = d; O !== null; ) {
                        switch (p = O,
                        E = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            $r(4, p, p.return);
                            break;
                        case 1:
                            Xn(p, p.return);
                            var x = p.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (S) {
                                    ye(r, n, S)
                                }
                            }
                            break;
                        case 5:
                            Xn(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                Bs(c);
                                continue
                            }
                        }
                        E !== null ? (E.return = p,
                        O = E) : Bs(c)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            c = e; ; ) {
                if (c.tag === 5) {
                    if (d === null) {
                        d = c;
                        try {
                            l = c.stateNode,
                            s ? (o = l.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = c.stateNode,
                            a = c.memoizedProps.style,
                            i = a != null && a.hasOwnProperty("display") ? a.display : null,
                            u.style.display = Bc("display", i))
                        } catch (S) {
                            ye(e, e.return, S)
                        }
                    }
                } else if (c.tag === 6) {
                    if (d === null)
                        try {
                            c.stateNode.nodeValue = s ? "" : c.memoizedProps
                        } catch (S) {
                            ye(e, e.return, S)
                        }
                } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c,
                    c = c.child;
                    continue
                }
                if (c === e)
                    break e;
                for (; c.sibling === null; ) {
                    if (c.return === null || c.return === e)
                        break e;
                    d === c && (d = null),
                    c = c.return
                }
                d === c && (d = null),
                c.sibling.return = c.return,
                c = c.sibling
            }
        }
        break;
    case 19:
        ct(t, e),
        St(e),
        r & 4 && Us(e);
        break;
    case 21:
        break;
    default:
        ct(t, e),
        St(e)
    }
}
function St(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (pd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Qr(l, ""),
                r.flags &= -33);
                var o = js(e);
                vu(e, o, l);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , u = js(e);
                mu(e, u, i);
                break;
            default:
                throw Error(_(161))
            }
        } catch (a) {
            ye(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Sm(e, t, n) {
    O = e,
    vd(e)
}
function vd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null; ) {
        var l = O
          , o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Al;
            if (!i) {
                var u = l.alternate
                  , a = u !== null && u.memoizedState !== null || ze;
                u = Al;
                var s = ze;
                if (Al = i,
                (ze = a) && !s)
                    for (O = l; O !== null; )
                        i = O,
                        a = i.child,
                        i.tag === 22 && i.memoizedState !== null ? $s(l) : a !== null ? (a.return = i,
                        O = a) : $s(l);
                for (; o !== null; )
                    O = o,
                    vd(o),
                    o = o.sibling;
                O = l,
                Al = u,
                ze = s
            }
            As(e)
        } else
            l.subtreeFlags & 8772 && o !== null ? (o.return = l,
            O = o) : As(e)
    }
}
function As(e) {
    for (; O !== null; ) {
        var t = O;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || Uo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ze)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && ks(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ks(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var d = s.memoizedState;
                                if (d !== null) {
                                    var c = d.dehydrated;
                                    c !== null && Gr(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                    }
                ze || t.flags & 512 && hu(t)
            } catch (p) {
                ye(t, t.return, p)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function Bs(e) {
    for (; O !== null; ) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function $s(e) {
    for (; O !== null; ) {
        var t = O;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Uo(4, t)
                } catch (a) {
                    ye(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        ye(t, l, a)
                    }
                }
                var o = t.return;
                try {
                    hu(t)
                } catch (a) {
                    ye(t, o, a)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    hu(t)
                } catch (a) {
                    ye(t, i, a)
                }
            }
        } catch (a) {
            ye(t, t.return, a)
        }
        if (t === e) {
            O = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            O = u;
            break
        }
        O = t.return
    }
}
var xm = Math.ceil
  , Eo = jt.ReactCurrentDispatcher
  , ua = jt.ReactCurrentOwner
  , it = jt.ReactCurrentBatchConfig
  , Z = 0
  , _e = null
  , xe = null
  , Te = 0
  , Ze = 0
  , Gn = an(0)
  , ke = 0
  , il = null
  , Pn = 0
  , Ao = 0
  , aa = 0
  , Vr = null
  , He = null
  , sa = 0
  , sr = 1 / 0
  , Rt = null
  , ko = !1
  , yu = null
  , en = null
  , Bl = !1
  , Xt = null
  , Co = 0
  , Hr = 0
  , gu = null
  , Jl = -1
  , ql = 0;
function Ae() {
    return Z & 6 ? ge() : Jl !== -1 ? Jl : Jl = ge()
}
function tn(e) {
    return e.mode & 1 ? Z & 2 && Te !== 0 ? Te & -Te : lm.transition !== null ? (ql === 0 && (ql = bc()),
    ql) : (e = te,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : uf(e.type)),
    e) : 1
}
function vt(e, t, n, r) {
    if (50 < Hr)
        throw Hr = 0,
        gu = null,
        Error(_(185));
    cl(e, n, r),
    (!(Z & 2) || e !== _e) && (e === _e && (!(Z & 2) && (Ao |= n),
    ke === 4 && Kt(e, Te)),
    Ye(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (sr = ge() + 500,
    Fo && sn()))
}
function Ye(e, t) {
    var n = e.callbackNode;
    lh(e, t);
    var r = io(e, e === _e ? Te : 0);
    if (r === 0)
        n !== null && Za(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Za(n),
        t === 1)
            e.tag === 0 ? rm(Vs.bind(null, e)) : Pf(Vs.bind(null, e)),
            bh(function() {
                !(Z & 6) && sn()
            }),
            n = null;
        else {
            switch (ef(r)) {
            case 1:
                n = Fu;
                break;
            case 4:
                n = Jc;
                break;
            case 16:
                n = oo;
                break;
            case 536870912:
                n = qc;
                break;
            default:
                n = oo
            }
            n = Cd(n, yd.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function yd(e, t) {
    if (Jl = -1,
    ql = 0,
    Z & 6)
        throw Error(_(327));
    var n = e.callbackNode;
    if (nr() && e.callbackNode !== n)
        return null;
    var r = io(e, e === _e ? Te : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = _o(e, r);
    else {
        t = r;
        var l = Z;
        Z |= 2;
        var o = wd();
        (_e !== e || Te !== t) && (Rt = null,
        sr = ge() + 500,
        xn(e, t));
        do
            try {
                Cm();
                break
            } catch (u) {
                gd(e, u)
            }
        while (!0);
        Xu(),
        Eo.current = o,
        Z = l,
        xe !== null ? t = 0 : (_e = null,
        Te = 0,
        t = ke)
    }
    if (t !== 0) {
        if (t === 2 && (l = Qi(e),
        l !== 0 && (r = l,
        t = wu(e, l))),
        t === 1)
            throw n = il,
            xn(e, 0),
            Kt(e, r),
            Ye(e, ge()),
            n;
        if (t === 6)
            Kt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !Em(l) && (t = _o(e, r),
            t === 2 && (o = Qi(e),
            o !== 0 && (r = o,
            t = wu(e, o))),
            t === 1))
                throw n = il,
                xn(e, 0),
                Kt(e, r),
                Ye(e, ge()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(_(345));
            case 2:
                hn(e, He, Rt);
                break;
            case 3:
                if (Kt(e, r),
                (r & 130023424) === r && (t = sa + 500 - ge(),
                10 < t)) {
                    if (io(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        Ae(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = bi(hn.bind(null, e, He, Rt), t);
                    break
                }
                hn(e, He, Rt);
                break;
            case 4:
                if (Kt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var i = 31 - mt(r);
                    o = 1 << i,
                    i = t[i],
                    i > l && (l = i),
                    r &= ~o
                }
                if (r = l,
                r = ge() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xm(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = bi(hn.bind(null, e, He, Rt), r);
                    break
                }
                hn(e, He, Rt);
                break;
            case 5:
                hn(e, He, Rt);
                break;
            default:
                throw Error(_(329))
            }
        }
    }
    return Ye(e, ge()),
    e.callbackNode === n ? yd.bind(null, e) : null
}
function wu(e, t) {
    var n = Vr;
    return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256),
    e = _o(e, t),
    e !== 2 && (t = He,
    He = n,
    t !== null && Su(t)),
    e
}
function Su(e) {
    He === null ? He = e : He.push.apply(He, e)
}
function Em(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!yt(o(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Kt(e, t) {
    for (t &= ~aa,
    t &= ~Ao,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - mt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Vs(e) {
    if (Z & 6)
        throw Error(_(327));
    nr();
    var t = io(e, 0);
    if (!(t & 1))
        return Ye(e, ge()),
        null;
    var n = _o(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Qi(e);
        r !== 0 && (t = r,
        n = wu(e, r))
    }
    if (n === 1)
        throw n = il,
        xn(e, 0),
        Kt(e, t),
        Ye(e, ge()),
        n;
    if (n === 6)
        throw Error(_(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    hn(e, He, Rt),
    Ye(e, ge()),
    null
}
function ca(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (sr = ge() + 500,
        Fo && sn())
    }
}
function Rn(e) {
    Xt !== null && Xt.tag === 0 && !(Z & 6) && nr();
    var t = Z;
    Z |= 1;
    var n = it.transition
      , r = te;
    try {
        if (it.transition = null,
        te = 1,
        e)
            return e()
    } finally {
        te = r,
        it.transition = n,
        Z = t,
        !(Z & 6) && sn()
    }
}
function fa() {
    Ze = Gn.current,
    se(Gn)
}
function xn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    qh(n)),
    xe !== null)
        for (n = xe.return; n !== null; ) {
            var r = n;
            switch (Qu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && fo();
                break;
            case 3:
                ur(),
                se(Qe),
                se(Oe),
                ea();
                break;
            case 5:
                bu(r);
                break;
            case 4:
                ur();
                break;
            case 13:
                se(pe);
                break;
            case 19:
                se(pe);
                break;
            case 10:
                Gu(r.type._context);
                break;
            case 22:
            case 23:
                fa()
            }
            n = n.return
        }
    if (_e = e,
    xe = e = nn(e.current, null),
    Te = Ze = t,
    ke = 0,
    il = null,
    aa = Ao = Pn = 0,
    He = Vr = null,
    yn !== null) {
        for (t = 0; t < yn.length; t++)
            if (n = yn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l,
                    r.next = i
                }
                n.pending = r
            }
        yn = null
    }
    return e
}
function gd(e, t) {
    do {
        var n = xe;
        try {
            if (Xu(),
            Xl.current = xo,
            So) {
                for (var r = he.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                So = !1
            }
            if (_n = 0,
            Ce = Ee = he = null,
            Br = !1,
            rl = 0,
            ua.current = null,
            n === null || n.return === null) {
                ke = 1,
                il = t,
                xe = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , u = n
                  , a = t;
                if (t = Te,
                u.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var s = a
                      , d = u
                      , c = d.tag;
                    if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue,
                        d.memoizedState = p.memoizedState,
                        d.lanes = p.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var E = Ts(i);
                    if (E !== null) {
                        E.flags &= -257,
                        Ns(E, i, u, o, t),
                        E.mode & 1 && Ls(o, s, t),
                        t = E,
                        a = s;
                        var x = t.updateQueue;
                        if (x === null) {
                            var S = new Set;
                            S.add(a),
                            t.updateQueue = S
                        } else
                            x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ls(o, s, t),
                            da();
                            break e
                        }
                        a = Error(_(426))
                    }
                } else if (fe && u.mode & 1) {
                    var N = Ts(i);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256),
                        Ns(N, i, u, o, t),
                        Ku(ar(a, u));
                        break e
                    }
                }
                o = a = ar(a, u),
                ke !== 4 && (ke = 2),
                Vr === null ? Vr = [o] : Vr.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var m = td(o, a, t);
                        Es(o, m);
                        break e;
                    case 1:
                        u = a;
                        var f = o.type
                          , v = o.stateNode;
                        if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (en === null || !en.has(v)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var k = nd(o, u, t);
                            Es(o, k);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            xd(n)
        } catch (R) {
            t = R,
            xe === n && n !== null && (xe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function wd() {
    var e = Eo.current;
    return Eo.current = xo,
    e === null ? xo : e
}
function da() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    _e === null || !(Pn & 268435455) && !(Ao & 268435455) || Kt(_e, Te)
}
function _o(e, t) {
    var n = Z;
    Z |= 2;
    var r = wd();
    (_e !== e || Te !== t) && (Rt = null,
    xn(e, t));
    do
        try {
            km();
            break
        } catch (l) {
            gd(e, l)
        }
    while (!0);
    if (Xu(),
    Z = n,
    Eo.current = r,
    xe !== null)
        throw Error(_(261));
    return _e = null,
    Te = 0,
    ke
}
function km() {
    for (; xe !== null; )
        Sd(xe)
}
function Cm() {
    for (; xe !== null && !Gp(); )
        Sd(xe)
}
function Sd(e) {
    var t = kd(e.alternate, e, Ze);
    e.memoizedProps = e.pendingProps,
    t === null ? xd(e) : xe = t,
    ua.current = null
}
function xd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = ym(n, t),
            n !== null) {
                n.flags &= 32767,
                xe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ke = 6,
                xe = null;
                return
            }
        } else if (n = vm(n, t, Ze),
        n !== null) {
            xe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            xe = t;
            return
        }
        xe = t = e
    } while (t !== null);
    ke === 0 && (ke = 5)
}
function hn(e, t, n) {
    var r = te
      , l = it.transition;
    try {
        it.transition = null,
        te = 1,
        _m(e, t, n, r)
    } finally {
        it.transition = l,
        te = r
    }
    return null
}
function _m(e, t, n, r) {
    do
        nr();
    while (Xt !== null);
    if (Z & 6)
        throw Error(_(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(_(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (oh(e, o),
    e === _e && (xe = _e = null,
    Te = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bl || (Bl = !0,
    Cd(oo, function() {
        return nr(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = it.transition,
        it.transition = null;
        var i = te;
        te = 1;
        var u = Z;
        Z |= 4,
        ua.current = null,
        wm(e, n),
        md(n, e),
        Qh(Ji),
        uo = !!Zi,
        Ji = Zi = null,
        e.current = n,
        Sm(n),
        Zp(),
        Z = u,
        te = i,
        it.transition = o
    } else
        e.current = n;
    if (Bl && (Bl = !1,
    Xt = e,
    Co = l),
    o = e.pendingLanes,
    o === 0 && (en = null),
    bp(n.stateNode),
    Ye(e, ge()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (ko)
        throw ko = !1,
        e = yu,
        yu = null,
        e;
    return Co & 1 && e.tag !== 0 && nr(),
    o = e.pendingLanes,
    o & 1 ? e === gu ? Hr++ : (Hr = 0,
    gu = e) : Hr = 0,
    sn(),
    null
}
function nr() {
    if (Xt !== null) {
        var e = ef(Co)
          , t = it.transition
          , n = te;
        try {
            if (it.transition = null,
            te = 16 > e ? 16 : e,
            Xt === null)
                var r = !1;
            else {
                if (e = Xt,
                Xt = null,
                Co = 0,
                Z & 6)
                    throw Error(_(331));
                var l = Z;
                for (Z |= 4,
                O = e.current; O !== null; ) {
                    var o = O
                      , i = o.child;
                    if (O.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var s = u[a];
                                for (O = s; O !== null; ) {
                                    var d = O;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $r(8, d, o)
                                    }
                                    var c = d.child;
                                    if (c !== null)
                                        c.return = d,
                                        O = c;
                                    else
                                        for (; O !== null; ) {
                                            d = O;
                                            var p = d.sibling
                                              , E = d.return;
                                            if (dd(d),
                                            d === s) {
                                                O = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = E,
                                                O = p;
                                                break
                                            }
                                            O = E
                                        }
                                }
                            }
                            var x = o.alternate;
                            if (x !== null) {
                                var S = x.child;
                                if (S !== null) {
                                    x.child = null;
                                    do {
                                        var N = S.sibling;
                                        S.sibling = null,
                                        S = N
                                    } while (S !== null)
                                }
                            }
                            O = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        O = i;
                    else
                        e: for (; O !== null; ) {
                            if (o = O,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    $r(9, o, o.return)
                                }
                            var m = o.sibling;
                            if (m !== null) {
                                m.return = o.return,
                                O = m;
                                break e
                            }
                            O = o.return
                        }
                }
                var f = e.current;
                for (O = f; O !== null; ) {
                    i = O;
                    var v = i.child;
                    if (i.subtreeFlags & 2064 && v !== null)
                        v.return = i,
                        O = v;
                    else
                        e: for (i = f; O !== null; ) {
                            if (u = O,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Uo(9, u)
                                    }
                                } catch (R) {
                                    ye(u, u.return, R)
                                }
                            if (u === i) {
                                O = null;
                                break e
                            }
                            var k = u.sibling;
                            if (k !== null) {
                                k.return = u.return,
                                O = k;
                                break e
                            }
                            O = u.return
                        }
                }
                if (Z = l,
                sn(),
                kt && typeof kt.onPostCommitFiberRoot == "function")
                    try {
                        kt.onPostCommitFiberRoot(No, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            te = n,
            it.transition = t
        }
    }
    return !1
}
function Hs(e, t, n) {
    t = ar(n, t),
    t = td(e, t, 1),
    e = bt(e, t, 1),
    t = Ae(),
    e !== null && (cl(e, 1, t),
    Ye(e, t))
}
function ye(e, t, n) {
    if (e.tag === 3)
        Hs(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Hs(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
                    e = ar(n, e),
                    e = nd(t, e, 1),
                    t = bt(t, e, 1),
                    e = Ae(),
                    t !== null && (cl(t, 1, e),
                    Ye(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Pm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ae(),
    e.pingedLanes |= e.suspendedLanes & n,
    _e === e && (Te & n) === n && (ke === 4 || ke === 3 && (Te & 130023424) === Te && 500 > ge() - sa ? xn(e, 0) : aa |= n),
    Ye(e, t)
}
function Ed(e, t) {
    t === 0 && (e.mode & 1 ? (t = Nl,
    Nl <<= 1,
    !(Nl & 130023424) && (Nl = 4194304)) : t = 1);
    var n = Ae();
    e = Ft(e, t),
    e !== null && (cl(e, t, n),
    Ye(e, n))
}
function Rm(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ed(e, n)
}
function Lm(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(_(314))
    }
    r !== null && r.delete(t),
    Ed(e, n)
}
var kd;
kd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            We = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return We = !1,
                mm(e, t, n);
            We = !!(e.flags & 131072)
        }
    else
        We = !1,
        fe && t.flags & 1048576 && Rf(t, mo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Zl(e, t),
        e = t.pendingProps;
        var l = lr(t, Oe.current);
        tr(t, n),
        l = na(null, t, r, e, l, n);
        var o = ra();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ke(r) ? (o = !0,
        po(t)) : o = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Ju(t),
        l.updater = jo,
        t.stateNode = l,
        l._reactInternals = t,
        iu(t, r, e, n),
        t = su(null, t, r, !0, o, n)) : (t.tag = 0,
        fe && o && Wu(t),
        Ue(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Zl(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Nm(r),
            e = ft(r, e),
            l) {
            case 0:
                t = au(null, t, r, e, n);
                break e;
            case 1:
                t = zs(null, t, r, e, n);
                break e;
            case 11:
                t = Ds(null, t, r, e, n);
                break e;
            case 14:
                t = Ms(null, t, r, ft(r.type, e), n);
                break e
            }
            throw Error(_(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        au(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        zs(e, t, r, l, n);
    case 3:
        e: {
            if (id(t),
            e === null)
                throw Error(_(387));
            r = t.pendingProps,
            o = t.memoizedState,
            l = o.element,
            zf(e, t),
            go(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    l = ar(Error(_(423)), t),
                    t = Os(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = ar(Error(_(424)), t),
                    t = Os(e, t, r, n, l);
                    break e
                } else
                    for (qe = qt(t.stateNode.containerInfo.firstChild),
                    be = t,
                    fe = !0,
                    ht = null,
                    n = Df(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (or(),
                r === l) {
                    t = It(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Of(t),
        e === null && ru(t),
        r = t.type,
        l = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = l.children,
        qi(r, l) ? i = null : o !== null && qi(r, o) && (t.flags |= 32),
        od(e, t),
        Ue(e, t, i, n),
        t.child;
    case 6:
        return e === null && ru(t),
        null;
    case 13:
        return ud(e, t, n);
    case 4:
        return qu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ir(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        Ds(e, t, r, l, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            o = t.memoizedProps,
            i = l.value,
            ie(vo, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (yt(o.value, i)) {
                    if (o.children === l.children && !Qe.current) {
                        t = It(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var u = o.dependencies;
                        if (u !== null) {
                            i = o.child;
                            for (var a = u.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = Dt(-1, n & -n),
                                        a.tag = 2;
                                        var s = o.updateQueue;
                                        if (s !== null) {
                                            s = s.shared;
                                            var d = s.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            s.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    lu(o.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(_(341));
                            i.lanes |= n,
                            u = i.alternate,
                            u !== null && (u.lanes |= n),
                            lu(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            Ue(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        tr(t, n),
        l = ut(l),
        r = r(l),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = ft(r, t.pendingProps),
        l = ft(r.type, l),
        Ms(e, t, r, l, n);
    case 15:
        return rd(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        Zl(e, t),
        t.tag = 1,
        Ke(r) ? (e = !0,
        po(t)) : e = !1,
        tr(t, n),
        ed(t, r, l),
        iu(t, r, l, n),
        su(null, t, r, !0, e, n);
    case 19:
        return ad(e, t, n);
    case 22:
        return ld(e, t, n)
    }
    throw Error(_(156, t.tag))
}
;
function Cd(e, t) {
    return Zc(e, t)
}
function Tm(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ot(e, t, n, r) {
    return new Tm(e,t,n,r)
}
function pa(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Nm(e) {
    if (typeof e == "function")
        return pa(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Mu)
            return 11;
        if (e === zu)
            return 14
    }
    return 2
}
function nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function bl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        pa(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case An:
            return En(n.children, l, o, t);
        case Du:
            i = 8,
            l |= 8;
            break;
        case Ni:
            return e = ot(12, n, t, l | 2),
            e.elementType = Ni,
            e.lanes = o,
            e;
        case Di:
            return e = ot(13, n, t, l),
            e.elementType = Di,
            e.lanes = o,
            e;
        case Mi:
            return e = ot(19, n, t, l),
            e.elementType = Mi,
            e.lanes = o,
            e;
        case zc:
            return Bo(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Dc:
                    i = 10;
                    break e;
                case Mc:
                    i = 9;
                    break e;
                case Mu:
                    i = 11;
                    break e;
                case zu:
                    i = 14;
                    break e;
                case Ht:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(_(130, e == null ? e : typeof e, ""))
        }
    return t = ot(i, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function En(e, t, n, r) {
    return e = ot(7, e, r, t),
    e.lanes = n,
    e
}
function Bo(e, t, n, r) {
    return e = ot(22, e, r, t),
    e.elementType = zc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ki(e, t, n) {
    return e = ot(6, e, null, t),
    e.lanes = n,
    e
}
function Ci(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Dm(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = li(0),
    this.expirationTimes = li(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = li(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function ha(e, t, n, r, l, o, i, u, a) {
    return e = new Dm(e,t,n,u,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = ot(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ju(o),
    e
}
function Mm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Un,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function _d(e) {
    if (!e)
        return on;
    e = e._reactInternals;
    e: {
        if (Tn(e) !== e || e.tag !== 1)
            throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ke(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ke(n))
            return _f(e, n, t)
    }
    return t
}
function Pd(e, t, n, r, l, o, i, u, a) {
    return e = ha(n, r, !0, e, l, o, i, u, a),
    e.context = _d(null),
    n = e.current,
    r = Ae(),
    l = tn(n),
    o = Dt(r, l),
    o.callback = t ?? null,
    bt(n, o, l),
    e.current.lanes = l,
    cl(e, l, r),
    Ye(e, r),
    e
}
function $o(e, t, n, r) {
    var l = t.current
      , o = Ae()
      , i = tn(l);
    return n = _d(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Dt(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = bt(l, t, i),
    e !== null && (vt(e, l, i, o),
    Yl(e, l, i)),
    i
}
function Po(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Ws(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ma(e, t) {
    Ws(e, t),
    (e = e.alternate) && Ws(e, t)
}
function zm() {
    return null
}
var Rd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function va(e) {
    this._internalRoot = e
}
Vo.prototype.render = va.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(_(409));
    $o(e, t, null, null)
}
;
Vo.prototype.unmount = va.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Rn(function() {
            $o(null, e, null, null)
        }),
        t[Ot] = null
    }
}
;
function Vo(e) {
    this._internalRoot = e
}
Vo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = rf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++)
            ;
        Qt.splice(n, 0, e),
        n === 0 && of(e)
    }
}
;
function ya(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ho(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Qs() {}
function Om(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var s = Po(i);
                o.call(s)
            }
        }
        var i = Pd(t, r, e, 0, null, !1, !1, "", Qs);
        return e._reactRootContainer = i,
        e[Ot] = i.current,
        qr(e.nodeType === 8 ? e.parentNode : e),
        Rn(),
        i
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var s = Po(a);
            u.call(s)
        }
    }
    var a = ha(e, 0, !1, null, null, !1, !1, "", Qs);
    return e._reactRootContainer = a,
    e[Ot] = a.current,
    qr(e.nodeType === 8 ? e.parentNode : e),
    Rn(function() {
        $o(t, a, n, r)
    }),
    a
}
function Wo(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var a = Po(i);
                u.call(a)
            }
        }
        $o(t, i, e, l)
    } else
        i = Om(n, t, e, l, r);
    return Po(i)
}
tf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Mr(t.pendingLanes);
            n !== 0 && (Iu(t, n | 1),
            Ye(t, ge()),
            !(Z & 6) && (sr = ge() + 500,
            sn()))
        }
        break;
    case 13:
        Rn(function() {
            var r = Ft(e, 1);
            if (r !== null) {
                var l = Ae();
                vt(r, e, 1, l)
            }
        }),
        ma(e, 1)
    }
}
;
ju = function(e) {
    if (e.tag === 13) {
        var t = Ft(e, 134217728);
        if (t !== null) {
            var n = Ae();
            vt(t, e, 134217728, n)
        }
        ma(e, 134217728)
    }
}
;
nf = function(e) {
    if (e.tag === 13) {
        var t = tn(e)
          , n = Ft(e, t);
        if (n !== null) {
            var r = Ae();
            vt(n, e, t, r)
        }
        ma(e, t)
    }
}
;
rf = function() {
    return te
}
;
lf = function(e, t) {
    var n = te;
    try {
        return te = e,
        t()
    } finally {
        te = n
    }
}
;
Vi = function(e, t, n) {
    switch (t) {
    case "input":
        if (Fi(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Oo(r);
                    if (!l)
                        throw Error(_(90));
                    Fc(r),
                    Fi(r, l)
                }
            }
        }
        break;
    case "textarea":
        jc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Jn(e, !!n.multiple, t, !1)
    }
}
;
Wc = ca;
Qc = Rn;
var Fm = {
    usingClientEntryPoint: !1,
    Events: [dl, Hn, Oo, Vc, Hc, ca]
}
  , Pr = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Im = {
    bundleType: Pr.bundleType,
    version: Pr.version,
    rendererPackageName: Pr.rendererPackageName,
    rendererConfig: Pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Xc(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Pr.findFiberByHostInstance || zm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$l.isDisabled && $l.supportsFiber)
        try {
            No = $l.inject(Im),
            kt = $l
        } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
tt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ya(t))
        throw Error(_(200));
    return Mm(e, t, null, n)
}
;
tt.createRoot = function(e, t) {
    if (!ya(e))
        throw Error(_(299));
    var n = !1
      , r = ""
      , l = Rd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = ha(e, 1, !1, null, null, n, !1, r, l),
    e[Ot] = t.current,
    qr(e.nodeType === 8 ? e.parentNode : e),
    new va(t)
}
;
tt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","),
        Error(_(268, e)));
    return e = Xc(t),
    e = e === null ? null : e.stateNode,
    e
}
;
tt.flushSync = function(e) {
    return Rn(e)
}
;
tt.hydrate = function(e, t, n) {
    if (!Ho(t))
        throw Error(_(200));
    return Wo(null, e, t, !0, n)
}
;
tt.hydrateRoot = function(e, t, n) {
    if (!ya(e))
        throw Error(_(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , o = ""
      , i = Rd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Pd(t, null, e, 1, n ?? null, l, !1, o, i),
    e[Ot] = t.current,
    qr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Vo(t)
}
;
tt.render = function(e, t, n) {
    if (!Ho(t))
        throw Error(_(200));
    return Wo(null, e, t, !1, n)
}
;
tt.unmountComponentAtNode = function(e) {
    if (!Ho(e))
        throw Error(_(40));
    return e._reactRootContainer ? (Rn(function() {
        Wo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ot] = null
        })
    }),
    !0) : !1
}
;
tt.unstable_batchedUpdates = ca;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ho(n))
        throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(_(38));
    return Wo(e, t, n, !1, r)
}
;
tt.version = "18.3.1-next-f1338f8080-20240426";
function Ld() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld)
        } catch (e) {
            console.error(e)
        }
}
Ld(),
Rc.exports = tt;
var Td = Rc.exports;
const jm = ku(Td)
  , Um = vc({
    __proto__: null,
    default: jm
}, [Td]);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function de() {
    return de = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    de.apply(this, arguments)
}
var Se;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Se || (Se = {}));
const Ks = "popstate";
function Am(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let {pathname: o, search: i, hash: u} = r.location;
        return ul("", {
            pathname: o,
            search: i,
            hash: u
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function n(r, l) {
        return typeof l == "string" ? l : hl(l)
    }
    return $m(t, n, null, e)
}
function W(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function cr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Bm() {
    return Math.random().toString(36).substr(2, 8)
}
function Ys(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function ul(e, t, n, r) {
    return n === void 0 && (n = null),
    de({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? cn(t) : t, {
        state: n,
        key: t && t.key || r || Bm()
    })
}
function hl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function cn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function $m(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l=document.defaultView, v5Compat: o=!1} = r
      , i = l.history
      , u = Se.Pop
      , a = null
      , s = d();
    s == null && (s = 0,
    i.replaceState(de({}, i.state, {
        idx: s
    }), ""));
    function d() {
        return (i.state || {
            idx: null
        }).idx
    }
    function c() {
        u = Se.Pop;
        let N = d()
          , m = N == null ? null : N - s;
        s = N,
        a && a({
            action: u,
            location: S.location,
            delta: m
        })
    }
    function p(N, m) {
        u = Se.Push;
        let f = ul(S.location, N, m);
        s = d() + 1;
        let v = Ys(f, s)
          , k = S.createHref(f);
        try {
            i.pushState(v, "", k)
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError")
                throw R;
            l.location.assign(k)
        }
        o && a && a({
            action: u,
            location: S.location,
            delta: 1
        })
    }
    function E(N, m) {
        u = Se.Replace;
        let f = ul(S.location, N, m);
        s = d();
        let v = Ys(f, s)
          , k = S.createHref(f);
        i.replaceState(v, "", k),
        o && a && a({
            action: u,
            location: S.location,
            delta: 0
        })
    }
    function x(N) {
        let m = l.location.origin !== "null" ? l.location.origin : l.location.href
          , f = typeof N == "string" ? N : hl(N);
        return f = f.replace(/ $/, "%20"),
        W(m, "No window.location.(origin|href) available to create URL for href: " + f),
        new URL(f,m)
    }
    let S = {
        get action() {
            return u
        },
        get location() {
            return e(l, i)
        },
        listen(N) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(Ks, c),
            a = N,
            () => {
                l.removeEventListener(Ks, c),
                a = null
            }
        },
        createHref(N) {
            return t(l, N)
        },
        createURL: x,
        encodeLocation(N) {
            let m = x(N);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: p,
        replace: E,
        go(N) {
            return i.go(N)
        }
    };
    return S
}
var oe;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(oe || (oe = {}));
const Vm = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Hm(e) {
    return e.index === !0
}
function al(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map( (l, o) => {
        let i = [...n, String(o)]
          , u = typeof l.id == "string" ? l.id : i.join("-");
        if (W(l.index !== !0 || !l.children, "Cannot specify children on an index route"),
        W(!r[u], 'Found a route id collision on id "' + u + `".  Route id's must be globally unique within Data Router usages`),
        Hm(l)) {
            let a = de({}, l, t(l), {
                id: u
            });
            return r[u] = a,
            a
        } else {
            let a = de({}, l, t(l), {
                id: u,
                children: void 0
            });
            return r[u] = a,
            l.children && (a.children = al(l.children, t, i, r)),
            a
        }
    }
    )
}
function mn(e, t, n) {
    return n === void 0 && (n = "/"),
    eo(e, t, n, !1)
}
function eo(e, t, n, r) {
    let l = typeof t == "string" ? cn(t) : t
      , o = ml(l.pathname || "/", n);
    if (o == null)
        return null;
    let i = Nd(e);
    Qm(i);
    let u = null;
    for (let a = 0; u == null && a < i.length; ++a) {
        let s = nv(o);
        u = ev(i[a], s, r)
    }
    return u
}
function Wm(e, t) {
    let {route: n, pathname: r, params: l} = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle
    }
}
function Nd(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let l = (o, i, u) => {
        let a = {
            relativePath: u === void 0 ? o.path || "" : u,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        a.relativePath.startsWith("/") && (W(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let s = rn([r, a.relativePath])
          , d = n.concat(a);
        o.children && o.children.length > 0 && (W(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')),
        Nd(o.children, t, d, s)),
        !(o.path == null && !o.index) && t.push({
            path: s,
            score: qm(s, o.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (o, i) => {
        var u;
        if (o.path === "" || !((u = o.path) != null && u.includes("?")))
            l(o, i);
        else
            for (let a of Dd(o.path))
                l(o, i, a)
    }
    ),
    t
}
function Dd(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , l = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return l ? [o, ""] : [o];
    let i = Dd(r.join("/"))
      , u = [];
    return u.push(...i.map(a => a === "" ? o : [o, a].join("/"))),
    l && u.push(...i),
    u.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function Qm(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : bm(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Km = /^:[\w-]+$/
  , Ym = 3
  , Xm = 2
  , Gm = 1
  , Zm = 10
  , Jm = -2
  , Xs = e => e === "*";
function qm(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Xs) && (r += Jm),
    t && (r += Xm),
    n.filter(l => !Xs(l)).reduce( (l, o) => l + (Km.test(o) ? Ym : o === "" ? Gm : Zm), r)
}
function bm(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ev(e, t, n) {
    n === void 0 && (n = !1);
    let {routesMeta: r} = e
      , l = {}
      , o = "/"
      , i = [];
    for (let u = 0; u < r.length; ++u) {
        let a = r[u]
          , s = u === r.length - 1
          , d = o === "/" ? t : t.slice(o.length) || "/"
          , c = Gs({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: s
        }, d)
          , p = a.route;
        if (!c && s && n && !r[r.length - 1].route.index && (c = Gs({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, d)),
        !c)
            return null;
        Object.assign(l, c.params),
        i.push({
            params: l,
            pathname: rn([o, c.pathname]),
            pathnameBase: ov(rn([o, c.pathnameBase])),
            route: p
        }),
        c.pathnameBase !== "/" && (o = rn([o, c.pathnameBase]))
    }
    return i
}
function Gs(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = tv(e.path, e.caseSensitive, e.end)
      , l = t.match(n);
    if (!l)
        return null;
    let o = l[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , u = l.slice(1);
    return {
        params: r.reduce( (s, d, c) => {
            let {paramName: p, isOptional: E} = d;
            if (p === "*") {
                let S = u[c] || "";
                i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const x = u[c];
            return E && !x ? s[p] = void 0 : s[p] = (x || "").replace(/%2F/g, "/"),
            s
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function tv(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, u, a) => (r.push({
        paramName: u,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,t ? void 0 : "i"), r]
}
function nv(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return cr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function ml(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function rv(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: l=""} = typeof e == "string" ? cn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : lv(n, t) : t,
        search: iv(r),
        hash: uv(l)
    }
}
function lv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function _i(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Md(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function ga(e, t) {
    let n = Md(e);
    return t ? n.map( (r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function wa(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = cn(e) : (l = de({}, e),
    W(!l.pathname || !l.pathname.includes("?"), _i("?", "pathname", "search", l)),
    W(!l.pathname || !l.pathname.includes("#"), _i("#", "pathname", "hash", l)),
    W(!l.search || !l.search.includes("#"), _i("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
    if (i == null)
        u = n;
    else {
        let c = t.length - 1;
        if (!r && i.startsWith("..")) {
            let p = i.split("/");
            for (; p[0] === ".."; )
                p.shift(),
                c -= 1;
            l.pathname = p.join("/")
        }
        u = c >= 0 ? t[c] : "/"
    }
    let a = rv(l, u)
      , s = i && i !== "/" && i.endsWith("/")
      , d = (o || i === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (s || d) && (a.pathname += "/"),
    a
}
const rn = e => e.join("/").replace(/\/\/+/g, "/")
  , ov = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , iv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , uv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Sa {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = l,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function Qo(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const zd = ["post", "put", "patch", "delete"]
  , av = new Set(zd)
  , sv = ["get", ...zd]
  , cv = new Set(sv)
  , fv = new Set([301, 302, 303, 307, 308])
  , dv = new Set([307, 308])
  , Pi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , pv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Rr = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , xa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , hv = e => ({
    hasErrorBoundary: !!e.hasErrorBoundary
})
  , Od = "remix-router-transitions";
function mv(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , r = !n;
    W(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let l;
    if (e.mapRouteProperties)
        l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let h = e.detectErrorBoundary;
        l = g => ({
            hasErrorBoundary: h(g)
        })
    } else
        l = hv;
    let o = {}, i = al(e.routes, l, void 0, o), u, a = e.basename || "/", s = e.unstable_dataStrategy || Sv, d = e.unstable_patchRoutesOnMiss, c = de({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1
    }, e.future), p = null, E = new Set, x = null, S = null, N = null, m = e.hydrationData != null, f = mn(i, e.history.location, a), v = null;
    if (f == null && !d) {
        let h = je(404, {
            pathname: e.history.location.pathname
        })
          , {matches: g, route: w} = oc(i);
        f = g,
        v = {
            [w.id]: h
        }
    }
    f && d && !e.hydrationData && qo(f, i, e.history.location.pathname).active && (f = null);
    let k;
    if (!f)
        k = !1,
        f = [];
    else if (f.some(h => h.route.lazy))
        k = !1;
    else if (!f.some(h => h.route.loader))
        k = !0;
    else if (c.v7_partialHydration) {
        let h = e.hydrationData ? e.hydrationData.loaderData : null
          , g = e.hydrationData ? e.hydrationData.errors : null
          , w = C => C.route.loader ? typeof C.route.loader == "function" && C.route.loader.hydrate === !0 ? !1 : h && h[C.route.id] !== void 0 || g && g[C.route.id] !== void 0 : !0;
        if (g) {
            let C = f.findIndex(z => g[z.route.id] !== void 0);
            k = f.slice(0, C + 1).every(w)
        } else
            k = f.every(w)
    } else
        k = e.hydrationData != null;
    let R, y = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: f,
        initialized: k,
        navigation: Pi,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || v,
        fetchers: new Map,
        blockers: new Map
    }, D = Se.Pop, L = !1, F, I = !1, X = new Map, G = null, re = !1, Y = !1, Ve = [], Xe = [], b = new Map, M = 0, $ = -1, V = new Map, J = new Set, ue = new Map, gt = new Map, Pe = new Set, st = new Map, Fe = new Map, Nn = new Map, Xo = !1;
    function Zd() {
        if (p = e.history.listen(h => {
            let {action: g, location: w, delta: C} = h;
            if (Xo) {
                Xo = !1;
                return
            }
            cr(Fe.size === 0 || C != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let z = za({
                currentLocation: y.location,
                nextLocation: w,
                historyAction: g
            });
            if (z && C != null) {
                Xo = !0,
                e.history.go(C * -1),
                wl(z, {
                    state: "blocked",
                    location: w,
                    proceed() {
                        wl(z, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: w
                        }),
                        e.history.go(C)
                    },
                    reset() {
                        let j = new Map(y.blockers);
                        j.set(z, Rr),
                        Ie({
                            blockers: j
                        })
                    }
                });
                return
            }
            return dn(g, w)
        }
        ),
        n) {
            zv(t, X);
            let h = () => Ov(t, X);
            t.addEventListener("pagehide", h),
            G = () => t.removeEventListener("pagehide", h)
        }
        return y.initialized || dn(Se.Pop, y.location, {
            initialHydration: !0
        }),
        R
    }
    function Jd() {
        p && p(),
        G && G(),
        E.clear(),
        F && F.abort(),
        y.fetchers.forEach( (h, g) => gl(g)),
        y.blockers.forEach( (h, g) => Ma(g))
    }
    function qd(h) {
        return E.add(h),
        () => E.delete(h)
    }
    function Ie(h, g) {
        g === void 0 && (g = {}),
        y = de({}, y, h);
        let w = []
          , C = [];
        c.v7_fetcherPersist && y.fetchers.forEach( (z, j) => {
            z.state === "idle" && (Pe.has(j) ? C.push(j) : w.push(j))
        }
        ),
        [...E].forEach(z => z(y, {
            deletedFetchers: C,
            unstable_viewTransitionOpts: g.viewTransitionOpts,
            unstable_flushSync: g.flushSync === !0
        })),
        c.v7_fetcherPersist && (w.forEach(z => y.fetchers.delete(z)),
        C.forEach(z => gl(z)))
    }
    function Dn(h, g, w) {
        var C, z;
        let {flushSync: j} = w === void 0 ? {} : w, B = y.actionData != null && y.navigation.formMethod != null && pt(y.navigation.formMethod) && y.navigation.state === "loading" && ((C = h.state) == null ? void 0 : C._isRedirect) !== !0, T;
        g.actionData ? Object.keys(g.actionData).length > 0 ? T = g.actionData : T = null : B ? T = y.actionData : T = null;
        let H = g.loaderData ? rc(y.loaderData, g.loaderData, g.matches || [], g.errors) : y.loaderData
          , U = y.blockers;
        U.size > 0 && (U = new Map(U),
        U.forEach( (ee, le) => U.set(le, Rr)));
        let A = L === !0 || y.navigation.formMethod != null && pt(y.navigation.formMethod) && ((z = h.state) == null ? void 0 : z._isRedirect) !== !0;
        u && (i = u,
        u = void 0),
        re || D === Se.Pop || (D === Se.Push ? e.history.push(h, h.state) : D === Se.Replace && e.history.replace(h, h.state));
        let ne;
        if (D === Se.Pop) {
            let ee = X.get(y.location.pathname);
            ee && ee.has(h.pathname) ? ne = {
                currentLocation: y.location,
                nextLocation: h
            } : X.has(h.pathname) && (ne = {
                currentLocation: h,
                nextLocation: y.location
            })
        } else if (I) {
            let ee = X.get(y.location.pathname);
            ee ? ee.add(h.pathname) : (ee = new Set([h.pathname]),
            X.set(y.location.pathname, ee)),
            ne = {
                currentLocation: y.location,
                nextLocation: h
            }
        }
        Ie(de({}, g, {
            actionData: T,
            loaderData: H,
            historyAction: D,
            location: h,
            initialized: !0,
            navigation: Pi,
            revalidation: "idle",
            restoreScrollPosition: Fa(h, g.matches || y.matches),
            preventScrollReset: A,
            blockers: U
        }), {
            viewTransitionOpts: ne,
            flushSync: j === !0
        }),
        D = Se.Pop,
        L = !1,
        I = !1,
        re = !1,
        Y = !1,
        Ve = [],
        Xe = []
    }
    async function _a(h, g) {
        if (typeof h == "number") {
            e.history.go(h);
            return
        }
        let w = xu(y.location, y.matches, a, c.v7_prependBasename, h, c.v7_relativeSplatPath, g == null ? void 0 : g.fromRouteId, g == null ? void 0 : g.relative)
          , {path: C, submission: z, error: j} = Zs(c.v7_normalizeFormMethod, !1, w, g)
          , B = y.location
          , T = ul(y.location, C, g && g.state);
        T = de({}, T, e.history.encodeLocation(T));
        let H = g && g.replace != null ? g.replace : void 0
          , U = Se.Push;
        H === !0 ? U = Se.Replace : H === !1 || z != null && pt(z.formMethod) && z.formAction === y.location.pathname + y.location.search && (U = Se.Replace);
        let A = g && "preventScrollReset"in g ? g.preventScrollReset === !0 : void 0
          , ne = (g && g.unstable_flushSync) === !0
          , ee = za({
            currentLocation: B,
            nextLocation: T,
            historyAction: U
        });
        if (ee) {
            wl(ee, {
                state: "blocked",
                location: T,
                proceed() {
                    wl(ee, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: T
                    }),
                    _a(h, g)
                },
                reset() {
                    let le = new Map(y.blockers);
                    le.set(ee, Rr),
                    Ie({
                        blockers: le
                    })
                }
            });
            return
        }
        return await dn(U, T, {
            submission: z,
            pendingError: j,
            preventScrollReset: A,
            replace: g && g.replace,
            enableViewTransition: g && g.unstable_viewTransition,
            flushSync: ne
        })
    }
    function bd() {
        if (Go(),
        Ie({
            revalidation: "loading"
        }),
        y.navigation.state !== "submitting") {
            if (y.navigation.state === "idle") {
                dn(y.historyAction, y.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            dn(D || y.historyAction, y.navigation.location, {
                overrideNavigation: y.navigation
            })
        }
    }
    async function dn(h, g, w) {
        F && F.abort(),
        F = null,
        D = h,
        re = (w && w.startUninterruptedRevalidation) === !0,
        sp(y.location, y.matches),
        L = (w && w.preventScrollReset) === !0,
        I = (w && w.enableViewTransition) === !0;
        let C = u || i
          , z = w && w.overrideNavigation
          , j = mn(C, g, a)
          , B = (w && w.flushSync) === !0
          , T = qo(j, C, g.pathname);
        if (T.active && T.matches && (j = T.matches),
        !j) {
            let {error: q, notFoundMatches: Re, route: we} = Zo(g.pathname);
            Dn(g, {
                matches: Re,
                loaderData: {},
                errors: {
                    [we.id]: q
                }
            }, {
                flushSync: B
            });
            return
        }
        if (y.initialized && !Y && Pv(y.location, g) && !(w && w.submission && pt(w.submission.formMethod))) {
            Dn(g, {
                matches: j
            }, {
                flushSync: B
            });
            return
        }
        F = new AbortController;
        let H = In(e.history, g, F.signal, w && w.submission), U;
        if (w && w.pendingError)
            U = [Zn(j).route.id, {
                type: oe.error,
                error: w.pendingError
            }];
        else if (w && w.submission && pt(w.submission.formMethod)) {
            let q = await ep(H, g, w.submission, j, T.active, {
                replace: w.replace,
                flushSync: B
            });
            if (q.shortCircuited)
                return;
            if (q.pendingActionResult) {
                let[Re,we] = q.pendingActionResult;
                if (Je(we) && Qo(we.error) && we.error.status === 404) {
                    F = null,
                    Dn(g, {
                        matches: q.matches,
                        loaderData: {},
                        errors: {
                            [Re]: we.error
                        }
                    });
                    return
                }
            }
            j = q.matches || j,
            U = q.pendingActionResult,
            z = Ri(g, w.submission),
            B = !1,
            T.active = !1,
            H = In(e.history, H.url, H.signal)
        }
        let {shortCircuited: A, matches: ne, loaderData: ee, errors: le} = await tp(H, g, j, T.active, z, w && w.submission, w && w.fetcherSubmission, w && w.replace, w && w.initialHydration === !0, B, U);
        A || (F = null,
        Dn(g, de({
            matches: ne || j
        }, lc(U), {
            loaderData: ee,
            errors: le
        })))
    }
    async function ep(h, g, w, C, z, j) {
        j === void 0 && (j = {}),
        Go();
        let B = Dv(g, w);
        if (Ie({
            navigation: B
        }, {
            flushSync: j.flushSync === !0
        }),
        z) {
            let U = await xl(C, g.pathname, h.signal);
            if (U.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (U.type === "error") {
                let {boundaryId: A, error: ne} = Sl(g.pathname, U);
                return {
                    matches: U.partialMatches,
                    pendingActionResult: [A, {
                        type: oe.error,
                        error: ne
                    }]
                }
            } else if (U.matches)
                C = U.matches;
            else {
                let {notFoundMatches: A, error: ne, route: ee} = Zo(g.pathname);
                return {
                    matches: A,
                    pendingActionResult: [ee.id, {
                        type: oe.error,
                        error: ne
                    }]
                }
            }
        }
        let T, H = Or(C, g);
        if (!H.route.action && !H.route.lazy)
            T = {
                type: oe.error,
                error: je(405, {
                    method: h.method,
                    pathname: g.pathname,
                    routeId: H.route.id
                })
            };
        else if (T = (await vr("action", h, [H], C))[0],
        h.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (Sn(T)) {
            let U;
            return j && j.replace != null ? U = j.replace : U = ec(T.response.headers.get("Location"), new URL(h.url), a) === y.location.pathname + y.location.search,
            await mr(h, T, {
                submission: w,
                replace: U
            }),
            {
                shortCircuited: !0
            }
        }
        if (wn(T))
            throw je(400, {
                type: "defer-action"
            });
        if (Je(T)) {
            let U = Zn(C, H.route.id);
            return (j && j.replace) !== !0 && (D = Se.Push),
            {
                matches: C,
                pendingActionResult: [U.route.id, T]
            }
        }
        return {
            matches: C,
            pendingActionResult: [H.route.id, T]
        }
    }
    async function tp(h, g, w, C, z, j, B, T, H, U, A) {
        let ne = z || Ri(g, j)
          , ee = j || B || ac(ne)
          , le = !re && (!c.v7_partialHydration || !H);
        if (C) {
            if (le) {
                let ve = Pa(A);
                Ie(de({
                    navigation: ne
                }, ve !== void 0 ? {
                    actionData: ve
                } : {}), {
                    flushSync: U
                })
            }
            let Q = await xl(w, g.pathname, h.signal);
            if (Q.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (Q.type === "error") {
                let {boundaryId: ve, error: Ge} = Sl(g.pathname, Q);
                return {
                    matches: Q.partialMatches,
                    loaderData: {},
                    errors: {
                        [ve]: Ge
                    }
                }
            } else if (Q.matches)
                w = Q.matches;
            else {
                let {error: ve, notFoundMatches: Ge, route: ce} = Zo(g.pathname);
                return {
                    matches: Ge,
                    loaderData: {},
                    errors: {
                        [ce.id]: ve
                    }
                }
            }
        }
        let q = u || i
          , [Re,we] = Js(e.history, y, w, ee, g, c.v7_partialHydration && H === !0, c.v7_skipActionErrorRevalidation, Y, Ve, Xe, Pe, ue, J, q, a, A);
        if (Jo(Q => !(w && w.some(ve => ve.route.id === Q)) || Re && Re.some(ve => ve.route.id === Q)),
        $ = ++M,
        Re.length === 0 && we.length === 0) {
            let Q = Na();
            return Dn(g, de({
                matches: w,
                loaderData: {},
                errors: A && Je(A[1]) ? {
                    [A[0]]: A[1].error
                } : null
            }, lc(A), Q ? {
                fetchers: new Map(y.fetchers)
            } : {}), {
                flushSync: U
            }),
            {
                shortCircuited: !0
            }
        }
        if (le) {
            let Q = {};
            if (!C) {
                Q.navigation = ne;
                let ve = Pa(A);
                ve !== void 0 && (Q.actionData = ve)
            }
            we.length > 0 && (Q.fetchers = np(we)),
            Ie(Q, {
                flushSync: U
            })
        }
        we.forEach(Q => {
            b.has(Q.key) && At(Q.key),
            Q.controller && b.set(Q.key, Q.controller)
        }
        );
        let yr = () => we.forEach(Q => At(Q.key));
        F && F.signal.addEventListener("abort", yr);
        let {loaderResults: Bt, fetcherResults: Mn} = await Ra(y.matches, w, Re, we, h);
        if (h.signal.aborted)
            return {
                shortCircuited: !0
            };
        F && F.signal.removeEventListener("abort", yr),
        we.forEach(Q => b.delete(Q.key));
        let zn = ic([...Bt, ...Mn]);
        if (zn) {
            if (zn.idx >= Re.length) {
                let Q = we[zn.idx - Re.length].key;
                J.add(Q)
            }
            return await mr(h, zn.result, {
                replace: T
            }),
            {
                shortCircuited: !0
            }
        }
        let {loaderData: On, errors: wt} = nc(y, w, Re, Bt, A, we, Mn, st);
        st.forEach( (Q, ve) => {
            Q.subscribe(Ge => {
                (Ge || Q.done) && st.delete(ve)
            }
            )
        }
        ),
        c.v7_partialHydration && H && y.errors && Object.entries(y.errors).filter(Q => {
            let[ve] = Q;
            return !Re.some(Ge => Ge.route.id === ve)
        }
        ).forEach(Q => {
            let[ve,Ge] = Q;
            wt = Object.assign(wt || {}, {
                [ve]: Ge
            })
        }
        );
        let El = Na()
          , kl = Da($)
          , Cl = El || kl || we.length > 0;
        return de({
            matches: w,
            loaderData: On,
            errors: wt
        }, Cl ? {
            fetchers: new Map(y.fetchers)
        } : {})
    }
    function Pa(h) {
        if (h && !Je(h[1]))
            return {
                [h[0]]: h[1].data
            };
        if (y.actionData)
            return Object.keys(y.actionData).length === 0 ? null : y.actionData
    }
    function np(h) {
        return h.forEach(g => {
            let w = y.fetchers.get(g.key)
              , C = Lr(void 0, w ? w.data : void 0);
            y.fetchers.set(g.key, C)
        }
        ),
        new Map(y.fetchers)
    }
    function rp(h, g, w, C) {
        if (r)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        b.has(h) && At(h);
        let z = (C && C.unstable_flushSync) === !0
          , j = u || i
          , B = xu(y.location, y.matches, a, c.v7_prependBasename, w, c.v7_relativeSplatPath, g, C == null ? void 0 : C.relative)
          , T = mn(j, B, a)
          , H = qo(T, j, B);
        if (H.active && H.matches && (T = H.matches),
        !T) {
            _t(h, g, je(404, {
                pathname: B
            }), {
                flushSync: z
            });
            return
        }
        let {path: U, submission: A, error: ne} = Zs(c.v7_normalizeFormMethod, !0, B, C);
        if (ne) {
            _t(h, g, ne, {
                flushSync: z
            });
            return
        }
        let ee = Or(T, U);
        if (L = (C && C.preventScrollReset) === !0,
        A && pt(A.formMethod)) {
            lp(h, g, U, ee, T, H.active, z, A);
            return
        }
        ue.set(h, {
            routeId: g,
            path: U
        }),
        op(h, g, U, ee, T, H.active, z, A)
    }
    async function lp(h, g, w, C, z, j, B, T) {
        Go(),
        ue.delete(h);
        function H(ce) {
            if (!ce.route.action && !ce.route.lazy) {
                let Pt = je(405, {
                    method: T.formMethod,
                    pathname: w,
                    routeId: g
                });
                return _t(h, g, Pt, {
                    flushSync: B
                }),
                !0
            }
            return !1
        }
        if (!j && H(C))
            return;
        let U = y.fetchers.get(h);
        Ut(h, Mv(T, U), {
            flushSync: B
        });
        let A = new AbortController
          , ne = In(e.history, w, A.signal, T);
        if (j) {
            let ce = await xl(z, w, ne.signal);
            if (ce.type === "aborted")
                return;
            if (ce.type === "error") {
                let {error: Pt} = Sl(w, ce);
                _t(h, g, Pt, {
                    flushSync: B
                });
                return
            } else if (ce.matches) {
                if (z = ce.matches,
                C = Or(z, w),
                H(C))
                    return
            } else {
                _t(h, g, je(404, {
                    pathname: w
                }), {
                    flushSync: B
                });
                return
            }
        }
        b.set(h, A);
        let ee = M
          , q = (await vr("action", ne, [C], z))[0];
        if (ne.signal.aborted) {
            b.get(h) === A && b.delete(h);
            return
        }
        if (c.v7_fetcherPersist && Pe.has(h)) {
            if (Sn(q) || Je(q)) {
                Ut(h, Vt(void 0));
                return
            }
        } else {
            if (Sn(q))
                if (b.delete(h),
                $ > ee) {
                    Ut(h, Vt(void 0));
                    return
                } else
                    return J.add(h),
                    Ut(h, Lr(T)),
                    mr(ne, q, {
                        fetcherSubmission: T
                    });
            if (Je(q)) {
                _t(h, g, q.error);
                return
            }
        }
        if (wn(q))
            throw je(400, {
                type: "defer-action"
            });
        let Re = y.navigation.location || y.location
          , we = In(e.history, Re, A.signal)
          , yr = u || i
          , Bt = y.navigation.state !== "idle" ? mn(yr, y.navigation.location, a) : y.matches;
        W(Bt, "Didn't find any matches after fetcher action");
        let Mn = ++M;
        V.set(h, Mn);
        let zn = Lr(T, q.data);
        y.fetchers.set(h, zn);
        let[On,wt] = Js(e.history, y, Bt, T, Re, !1, c.v7_skipActionErrorRevalidation, Y, Ve, Xe, Pe, ue, J, yr, a, [C.route.id, q]);
        wt.filter(ce => ce.key !== h).forEach(ce => {
            let Pt = ce.key
              , Ia = y.fetchers.get(Pt)
              , dp = Lr(void 0, Ia ? Ia.data : void 0);
            y.fetchers.set(Pt, dp),
            b.has(Pt) && At(Pt),
            ce.controller && b.set(Pt, ce.controller)
        }
        ),
        Ie({
            fetchers: new Map(y.fetchers)
        });
        let El = () => wt.forEach(ce => At(ce.key));
        A.signal.addEventListener("abort", El);
        let {loaderResults: kl, fetcherResults: Cl} = await Ra(y.matches, Bt, On, wt, we);
        if (A.signal.aborted)
            return;
        A.signal.removeEventListener("abort", El),
        V.delete(h),
        b.delete(h),
        wt.forEach(ce => b.delete(ce.key));
        let Q = ic([...kl, ...Cl]);
        if (Q) {
            if (Q.idx >= On.length) {
                let ce = wt[Q.idx - On.length].key;
                J.add(ce)
            }
            return mr(we, Q.result)
        }
        let {loaderData: ve, errors: Ge} = nc(y, y.matches, On, kl, void 0, wt, Cl, st);
        if (y.fetchers.has(h)) {
            let ce = Vt(q.data);
            y.fetchers.set(h, ce)
        }
        Da(Mn),
        y.navigation.state === "loading" && Mn > $ ? (W(D, "Expected pending action"),
        F && F.abort(),
        Dn(y.navigation.location, {
            matches: Bt,
            loaderData: ve,
            errors: Ge,
            fetchers: new Map(y.fetchers)
        })) : (Ie({
            errors: Ge,
            loaderData: rc(y.loaderData, ve, Bt, Ge),
            fetchers: new Map(y.fetchers)
        }),
        Y = !1)
    }
    async function op(h, g, w, C, z, j, B, T) {
        let H = y.fetchers.get(h);
        Ut(h, Lr(T, H ? H.data : void 0), {
            flushSync: B
        });
        let U = new AbortController
          , A = In(e.history, w, U.signal);
        if (j) {
            let q = await xl(z, w, A.signal);
            if (q.type === "aborted")
                return;
            if (q.type === "error") {
                let {error: Re} = Sl(w, q);
                _t(h, g, Re, {
                    flushSync: B
                });
                return
            } else if (q.matches)
                z = q.matches,
                C = Or(z, w);
            else {
                _t(h, g, je(404, {
                    pathname: w
                }), {
                    flushSync: B
                });
                return
            }
        }
        b.set(h, U);
        let ne = M
          , le = (await vr("loader", A, [C], z))[0];
        if (wn(le) && (le = await Ad(le, A.signal, !0) || le),
        b.get(h) === U && b.delete(h),
        !A.signal.aborted) {
            if (Pe.has(h)) {
                Ut(h, Vt(void 0));
                return
            }
            if (Sn(le))
                if ($ > ne) {
                    Ut(h, Vt(void 0));
                    return
                } else {
                    J.add(h),
                    await mr(A, le);
                    return
                }
            if (Je(le)) {
                _t(h, g, le.error);
                return
            }
            W(!wn(le), "Unhandled fetcher deferred data"),
            Ut(h, Vt(le.data))
        }
    }
    async function mr(h, g, w) {
        let {submission: C, fetcherSubmission: z, replace: j} = w === void 0 ? {} : w;
        g.response.headers.has("X-Remix-Revalidate") && (Y = !0);
        let B = g.response.headers.get("Location");
        W(B, "Expected a Location header on the redirect Response"),
        B = ec(B, new URL(h.url), a);
        let T = ul(y.location, B, {
            _isRedirect: !0
        });
        if (n) {
            let le = !1;
            if (g.response.headers.has("X-Remix-Reload-Document"))
                le = !0;
            else if (xa.test(B)) {
                const q = e.history.createURL(B);
                le = q.origin !== t.location.origin || ml(q.pathname, a) == null
            }
            if (le) {
                j ? t.location.replace(B) : t.location.assign(B);
                return
            }
        }
        F = null;
        let H = j === !0 ? Se.Replace : Se.Push
          , {formMethod: U, formAction: A, formEncType: ne} = y.navigation;
        !C && !z && U && A && ne && (C = ac(y.navigation));
        let ee = C || z;
        if (dv.has(g.response.status) && ee && pt(ee.formMethod))
            await dn(H, T, {
                submission: de({}, ee, {
                    formAction: B
                }),
                preventScrollReset: L
            });
        else {
            let le = Ri(T, C);
            await dn(H, T, {
                overrideNavigation: le,
                fetcherSubmission: z,
                preventScrollReset: L
            })
        }
    }
    async function vr(h, g, w, C) {
        try {
            let z = await xv(s, h, g, w, C, o, l);
            return await Promise.all(z.map( (j, B) => {
                if (Lv(j)) {
                    let T = j.result;
                    return {
                        type: oe.redirect,
                        response: Cv(T, g, w[B].route.id, C, a, c.v7_relativeSplatPath)
                    }
                }
                return kv(j)
            }
            ))
        } catch (z) {
            return w.map( () => ({
                type: oe.error,
                error: z
            }))
        }
    }
    async function Ra(h, g, w, C, z) {
        let[j,...B] = await Promise.all([w.length ? vr("loader", z, w, g) : [], ...C.map(T => {
            if (T.matches && T.match && T.controller) {
                let H = In(e.history, T.path, T.controller.signal);
                return vr("loader", H, [T.match], T.matches).then(U => U[0])
            } else
                return Promise.resolve({
                    type: oe.error,
                    error: je(404, {
                        pathname: T.path
                    })
                })
        }
        )]);
        return await Promise.all([uc(h, w, j, j.map( () => z.signal), !1, y.loaderData), uc(h, C.map(T => T.match), B, C.map(T => T.controller ? T.controller.signal : null), !0)]),
        {
            loaderResults: j,
            fetcherResults: B
        }
    }
    function Go() {
        Y = !0,
        Ve.push(...Jo()),
        ue.forEach( (h, g) => {
            b.has(g) && (Xe.push(g),
            At(g))
        }
        )
    }
    function Ut(h, g, w) {
        w === void 0 && (w = {}),
        y.fetchers.set(h, g),
        Ie({
            fetchers: new Map(y.fetchers)
        }, {
            flushSync: (w && w.flushSync) === !0
        })
    }
    function _t(h, g, w, C) {
        C === void 0 && (C = {});
        let z = Zn(y.matches, g);
        gl(h),
        Ie({
            errors: {
                [z.route.id]: w
            },
            fetchers: new Map(y.fetchers)
        }, {
            flushSync: (C && C.flushSync) === !0
        })
    }
    function La(h) {
        return c.v7_fetcherPersist && (gt.set(h, (gt.get(h) || 0) + 1),
        Pe.has(h) && Pe.delete(h)),
        y.fetchers.get(h) || pv
    }
    function gl(h) {
        let g = y.fetchers.get(h);
        b.has(h) && !(g && g.state === "loading" && V.has(h)) && At(h),
        ue.delete(h),
        V.delete(h),
        J.delete(h),
        Pe.delete(h),
        y.fetchers.delete(h)
    }
    function ip(h) {
        if (c.v7_fetcherPersist) {
            let g = (gt.get(h) || 0) - 1;
            g <= 0 ? (gt.delete(h),
            Pe.add(h)) : gt.set(h, g)
        } else
            gl(h);
        Ie({
            fetchers: new Map(y.fetchers)
        })
    }
    function At(h) {
        let g = b.get(h);
        W(g, "Expected fetch controller: " + h),
        g.abort(),
        b.delete(h)
    }
    function Ta(h) {
        for (let g of h) {
            let w = La(g)
              , C = Vt(w.data);
            y.fetchers.set(g, C)
        }
    }
    function Na() {
        let h = []
          , g = !1;
        for (let w of J) {
            let C = y.fetchers.get(w);
            W(C, "Expected fetcher: " + w),
            C.state === "loading" && (J.delete(w),
            h.push(w),
            g = !0)
        }
        return Ta(h),
        g
    }
    function Da(h) {
        let g = [];
        for (let[w,C] of V)
            if (C < h) {
                let z = y.fetchers.get(w);
                W(z, "Expected fetcher: " + w),
                z.state === "loading" && (At(w),
                V.delete(w),
                g.push(w))
            }
        return Ta(g),
        g.length > 0
    }
    function up(h, g) {
        let w = y.blockers.get(h) || Rr;
        return Fe.get(h) !== g && Fe.set(h, g),
        w
    }
    function Ma(h) {
        y.blockers.delete(h),
        Fe.delete(h)
    }
    function wl(h, g) {
        let w = y.blockers.get(h) || Rr;
        W(w.state === "unblocked" && g.state === "blocked" || w.state === "blocked" && g.state === "blocked" || w.state === "blocked" && g.state === "proceeding" || w.state === "blocked" && g.state === "unblocked" || w.state === "proceeding" && g.state === "unblocked", "Invalid blocker state transition: " + w.state + " -> " + g.state);
        let C = new Map(y.blockers);
        C.set(h, g),
        Ie({
            blockers: C
        })
    }
    function za(h) {
        let {currentLocation: g, nextLocation: w, historyAction: C} = h;
        if (Fe.size === 0)
            return;
        Fe.size > 1 && cr(!1, "A router only supports one blocker at a time");
        let z = Array.from(Fe.entries())
          , [j,B] = z[z.length - 1]
          , T = y.blockers.get(j);
        if (!(T && T.state === "proceeding") && B({
            currentLocation: g,
            nextLocation: w,
            historyAction: C
        }))
            return j
    }
    function Zo(h) {
        let g = je(404, {
            pathname: h
        })
          , w = u || i
          , {matches: C, route: z} = oc(w);
        return Jo(),
        {
            notFoundMatches: C,
            route: z,
            error: g
        }
    }
    function Sl(h, g) {
        return {
            boundaryId: Zn(g.partialMatches).route.id,
            error: je(400, {
                type: "route-discovery",
                pathname: h,
                message: g.error != null && "message"in g.error ? g.error : String(g.error)
            })
        }
    }
    function Jo(h) {
        let g = [];
        return st.forEach( (w, C) => {
            (!h || h(C)) && (w.cancel(),
            g.push(C),
            st.delete(C))
        }
        ),
        g
    }
    function ap(h, g, w) {
        if (x = h,
        N = g,
        S = w || null,
        !m && y.navigation === Pi) {
            m = !0;
            let C = Fa(y.location, y.matches);
            C != null && Ie({
                restoreScrollPosition: C
            })
        }
        return () => {
            x = null,
            N = null,
            S = null
        }
    }
    function Oa(h, g) {
        return S && S(h, g.map(C => Wm(C, y.loaderData))) || h.key
    }
    function sp(h, g) {
        if (x && N) {
            let w = Oa(h, g);
            x[w] = N()
        }
    }
    function Fa(h, g) {
        if (x) {
            let w = Oa(h, g)
              , C = x[w];
            if (typeof C == "number")
                return C
        }
        return null
    }
    function qo(h, g, w) {
        if (d)
            if (h) {
                let C = h[h.length - 1].route;
                if (C.path && (C.path === "*" || C.path.endsWith("/*")))
                    return {
                        active: !0,
                        matches: eo(g, w, a, !0)
                    }
            } else
                return {
                    active: !0,
                    matches: eo(g, w, a, !0) || []
                };
        return {
            active: !1,
            matches: null
        }
    }
    async function xl(h, g, w) {
        let C = h
          , z = C.length > 0 ? C[C.length - 1].route : null;
        for (; ; ) {
            let j = u == null
              , B = u || i;
            try {
                await wv(d, g, C, B, o, l, Nn, w)
            } catch (A) {
                return {
                    type: "error",
                    error: A,
                    partialMatches: C
                }
            } finally {
                j && (i = [...i])
            }
            if (w.aborted)
                return {
                    type: "aborted"
                };
            let T = mn(B, g, a)
              , H = !1;
            if (T) {
                let A = T[T.length - 1].route;
                if (A.index)
                    return {
                        type: "success",
                        matches: T
                    };
                if (A.path && A.path.length > 0)
                    if (A.path === "*")
                        H = !0;
                    else
                        return {
                            type: "success",
                            matches: T
                        }
            }
            let U = eo(B, g, a, !0);
            if (!U || C.map(A => A.route.id).join("-") === U.map(A => A.route.id).join("-"))
                return {
                    type: "success",
                    matches: H ? T : null
                };
            if (C = U,
            z = C[C.length - 1].route,
            z.path === "*")
                return {
                    type: "success",
                    matches: C
                }
        }
    }
    function cp(h) {
        o = {},
        u = al(h, l, void 0, o)
    }
    function fp(h, g) {
        let w = u == null;
        Id(h, g, u || i, o, l),
        w && (i = [...i],
        Ie({}))
    }
    return R = {
        get basename() {
            return a
        },
        get future() {
            return c
        },
        get state() {
            return y
        },
        get routes() {
            return i
        },
        get window() {
            return t
        },
        initialize: Zd,
        subscribe: qd,
        enableScrollRestoration: ap,
        navigate: _a,
        fetch: rp,
        revalidate: bd,
        createHref: h => e.history.createHref(h),
        encodeLocation: h => e.history.encodeLocation(h),
        getFetcher: La,
        deleteFetcher: ip,
        dispose: Jd,
        getBlocker: up,
        deleteBlocker: Ma,
        patchRoutes: fp,
        _internalFetchControllers: b,
        _internalActiveDeferreds: st,
        _internalSetRoutes: cp
    },
    R
}
function vv(e) {
    return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function xu(e, t, n, r, l, o, i, u) {
    let a, s;
    if (i) {
        a = [];
        for (let c of t)
            if (a.push(c),
            c.route.id === i) {
                s = c;
                break
            }
    } else
        a = t,
        s = t[t.length - 1];
    let d = wa(l || ".", ga(a, o), ml(e.pathname, n) || e.pathname, u === "path");
    return l == null && (d.search = e.search,
    d.hash = e.hash),
    (l == null || l === "" || l === ".") && s && s.route.index && !Ea(d.search) && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (d.pathname = d.pathname === "/" ? n : rn([n, d.pathname])),
    hl(d)
}
function Zs(e, t, n, r) {
    if (!r || !vv(r))
        return {
            path: n
        };
    if (r.formMethod && !Nv(r.formMethod))
        return {
            path: n,
            error: je(405, {
                method: r.formMethod
            })
        };
    let l = () => ({
        path: n,
        error: je(400, {
            type: "invalid-body"
        })
    })
      , o = r.formMethod || "get"
      , i = e ? o.toUpperCase() : o.toLowerCase()
      , u = jd(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!pt(i))
                return l();
            let p = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (E, x) => {
                let[S,N] = x;
                return "" + E + S + "=" + N + `
`
            }
            , "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: i,
                    formAction: u,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: p
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!pt(i))
                return l();
            try {
                let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: i,
                        formAction: u,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: p,
                        text: void 0
                    }
                }
            } catch {
                return l()
            }
        }
    }
    W(typeof FormData == "function", "FormData is not available in this environment");
    let a, s;
    if (r.formData)
        a = Eu(r.formData),
        s = r.formData;
    else if (r.body instanceof FormData)
        a = Eu(r.body),
        s = r.body;
    else if (r.body instanceof URLSearchParams)
        a = r.body,
        s = tc(a);
    else if (r.body == null)
        a = new URLSearchParams,
        s = new FormData;
    else
        try {
            a = new URLSearchParams(r.body),
            s = tc(a)
        } catch {
            return l()
        }
    let d = {
        formMethod: i,
        formAction: u,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0
    };
    if (pt(d.formMethod))
        return {
            path: n,
            submission: d
        };
    let c = cn(n);
    return t && c.search && Ea(c.search) && a.append("index", ""),
    c.search = "?" + a,
    {
        path: hl(c),
        submission: d
    }
}
function yv(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(l => l.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}
function Js(e, t, n, r, l, o, i, u, a, s, d, c, p, E, x, S) {
    let N = S ? Je(S[1]) ? S[1].error : S[1].data : void 0
      , m = e.createURL(t.location)
      , f = e.createURL(l)
      , v = S && Je(S[1]) ? S[0] : void 0
      , k = v ? yv(n, v) : n
      , R = S ? S[1].statusCode : void 0
      , y = i && R && R >= 400
      , D = k.filter( (F, I) => {
        let {route: X} = F;
        if (X.lazy)
            return !0;
        if (X.loader == null)
            return !1;
        if (o)
            return typeof X.loader != "function" || X.loader.hydrate ? !0 : t.loaderData[X.id] === void 0 && (!t.errors || t.errors[X.id] === void 0);
        if (gv(t.loaderData, t.matches[I], F) || a.some(Y => Y === F.route.id))
            return !0;
        let G = t.matches[I]
          , re = F;
        return qs(F, de({
            currentUrl: m,
            currentParams: G.params,
            nextUrl: f,
            nextParams: re.params
        }, r, {
            actionResult: N,
            actionStatus: R,
            defaultShouldRevalidate: y ? !1 : u || m.pathname + m.search === f.pathname + f.search || m.search !== f.search || Fd(G, re)
        }))
    }
    )
      , L = [];
    return c.forEach( (F, I) => {
        if (o || !n.some(Ve => Ve.route.id === F.routeId) || d.has(I))
            return;
        let X = mn(E, F.path, x);
        if (!X) {
            L.push({
                key: I,
                routeId: F.routeId,
                path: F.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let G = t.fetchers.get(I)
          , re = Or(X, F.path)
          , Y = !1;
        p.has(I) ? Y = !1 : s.includes(I) ? Y = !0 : G && G.state !== "idle" && G.data === void 0 ? Y = u : Y = qs(re, de({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: f,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: N,
            actionStatus: R,
            defaultShouldRevalidate: y ? !1 : u
        })),
        Y && L.push({
            key: I,
            routeId: F.routeId,
            path: F.path,
            matches: X,
            match: re,
            controller: new AbortController
        })
    }
    ),
    [D, L]
}
function gv(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , l = e[n.route.id] === void 0;
    return r || l
}
function Fd(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function qs(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
async function wv(e, t, n, r, l, o, i, u) {
    let a = [t, ...n.map(s => s.route.id)].join("-");
    try {
        let s = i.get(a);
        s || (s = e({
            path: t,
            matches: n,
            patch: (d, c) => {
                u.aborted || Id(d, c, r, l, o)
            }
        }),
        i.set(a, s)),
        s && Rv(s) && await s
    } finally {
        i.delete(a)
    }
}
function Id(e, t, n, r, l) {
    if (e) {
        var o;
        let i = r[e];
        W(i, "No route found to patch children into: routeId = " + e);
        let u = al(t, l, [e, "patch", String(((o = i.children) == null ? void 0 : o.length) || "0")], r);
        i.children ? i.children.push(...u) : i.children = u
    } else {
        let i = al(t, l, ["patch", String(n.length || "0")], r);
        n.push(...i)
    }
}
async function bs(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let l = n[e.id];
    W(l, "No route found in manifest");
    let o = {};
    for (let i in r) {
        let a = l[i] !== void 0 && i !== "hasErrorBoundary";
        cr(!a, 'Route "' + l.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')),
        !a && !Vm.has(i) && (o[i] = r[i])
    }
    Object.assign(l, o),
    Object.assign(l, de({}, t(l), {
        lazy: void 0
    }))
}
function Sv(e) {
    return Promise.all(e.matches.map(t => t.resolve()))
}
async function xv(e, t, n, r, l, o, i, u) {
    let a = r.reduce( (c, p) => c.add(p.route.id), new Set)
      , s = new Set
      , d = await e({
        matches: l.map(c => {
            let p = a.has(c.route.id);
            return de({}, c, {
                shouldLoad: p,
                resolve: x => (s.add(c.route.id),
                p ? Ev(t, n, c, o, i, x, u) : Promise.resolve({
                    type: oe.data,
                    result: void 0
                }))
            })
        }
        ),
        request: n,
        params: l[0].params,
        context: u
    });
    return l.forEach(c => W(s.has(c.route.id), '`match.resolve()` was not called for route id "' + c.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),
    d.filter( (c, p) => a.has(l[p].route.id))
}
async function Ev(e, t, n, r, l, o, i) {
    let u, a, s = d => {
        let c, p = new Promise( (S, N) => c = N);
        a = () => c(),
        t.signal.addEventListener("abort", a);
        let E = S => typeof d != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : d({
            request: t,
            params: n.params,
            context: i
        }, ...S !== void 0 ? [S] : []), x;
        return o ? x = o(S => E(S)) : x = (async () => {
            try {
                return {
                    type: "data",
                    result: await E()
                }
            } catch (S) {
                return {
                    type: "error",
                    result: S
                }
            }
        }
        )(),
        Promise.race([x, p])
    }
    ;
    try {
        let d = n.route[e];
        if (n.route.lazy)
            if (d) {
                let c, [p] = await Promise.all([s(d).catch(E => {
                    c = E
                }
                ), bs(n.route, l, r)]);
                if (c !== void 0)
                    throw c;
                u = p
            } else if (await bs(n.route, l, r),
            d = n.route[e],
            d)
                u = await s(d);
            else if (e === "action") {
                let c = new URL(t.url)
                  , p = c.pathname + c.search;
                throw je(405, {
                    method: t.method,
                    pathname: p,
                    routeId: n.route.id
                })
            } else
                return {
                    type: oe.data,
                    result: void 0
                };
        else if (d)
            u = await s(d);
        else {
            let c = new URL(t.url)
              , p = c.pathname + c.search;
            throw je(404, {
                pathname: p
            })
        }
        W(u.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (d) {
        return {
            type: oe.error,
            result: d
        }
    } finally {
        a && t.signal.removeEventListener("abort", a)
    }
    return u
}
async function kv(e) {
    let {result: t, type: n, status: r} = e;
    if (Ud(t)) {
        let i;
        try {
            let u = t.headers.get("Content-Type");
            u && /\bapplication\/json\b/.test(u) ? t.body == null ? i = null : i = await t.json() : i = await t.text()
        } catch (u) {
            return {
                type: oe.error,
                error: u
            }
        }
        return n === oe.error ? {
            type: oe.error,
            error: new Sa(t.status,t.statusText,i),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: oe.data,
            data: i,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === oe.error)
        return {
            type: oe.error,
            error: t,
            statusCode: Qo(t) ? t.status : r
        };
    if (Tv(t)) {
        var l, o;
        return {
            type: oe.deferred,
            deferredData: t,
            statusCode: (l = t.init) == null ? void 0 : l.status,
            headers: ((o = t.init) == null ? void 0 : o.headers) && new Headers(t.init.headers)
        }
    }
    return {
        type: oe.data,
        data: t,
        statusCode: r
    }
}
function Cv(e, t, n, r, l, o) {
    let i = e.headers.get("Location");
    if (W(i, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !xa.test(i)) {
        let u = r.slice(0, r.findIndex(a => a.route.id === n) + 1);
        i = xu(new URL(t.url), u, l, !0, i, o),
        e.headers.set("Location", i)
    }
    return e
}
function ec(e, t, n) {
    if (xa.test(e)) {
        let r = e
          , l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r)
          , o = ml(l.pathname, n) != null;
        if (l.origin === t.origin && o)
            return l.pathname + l.search + l.hash
    }
    return e
}
function In(e, t, n, r) {
    let l = e.createURL(jd(t)).toString()
      , o = {
        signal: n
    };
    if (r && pt(r.formMethod)) {
        let {formMethod: i, formEncType: u} = r;
        o.method = i.toUpperCase(),
        u === "application/json" ? (o.headers = new Headers({
            "Content-Type": u
        }),
        o.body = JSON.stringify(r.json)) : u === "text/plain" ? o.body = r.text : u === "application/x-www-form-urlencoded" && r.formData ? o.body = Eu(r.formData) : o.body = r.formData
    }
    return new Request(l,o)
}
function Eu(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t
}
function tc(e) {
    let t = new FormData;
    for (let[n,r] of e.entries())
        t.append(n, r);
    return t
}
function _v(e, t, n, r, l, o) {
    let i = {}, u = null, a, s = !1, d = {}, c = r && Je(r[1]) ? r[1].error : void 0;
    return n.forEach( (p, E) => {
        let x = t[E].route.id;
        if (W(!Sn(p), "Cannot handle redirect results in processLoaderData"),
        Je(p)) {
            let S = p.error;
            c !== void 0 && (S = c,
            c = void 0),
            u = u || {};
            {
                let N = Zn(e, x);
                u[N.route.id] == null && (u[N.route.id] = S)
            }
            i[x] = void 0,
            s || (s = !0,
            a = Qo(p.error) ? p.error.status : 500),
            p.headers && (d[x] = p.headers)
        } else
            wn(p) ? (l.set(x, p.deferredData),
            i[x] = p.deferredData.data,
            p.statusCode != null && p.statusCode !== 200 && !s && (a = p.statusCode),
            p.headers && (d[x] = p.headers)) : (i[x] = p.data,
            p.statusCode && p.statusCode !== 200 && !s && (a = p.statusCode),
            p.headers && (d[x] = p.headers))
    }
    ),
    c !== void 0 && r && (u = {
        [r[0]]: c
    },
    i[r[0]] = void 0),
    {
        loaderData: i,
        errors: u,
        statusCode: a || 200,
        loaderHeaders: d
    }
}
function nc(e, t, n, r, l, o, i, u) {
    let {loaderData: a, errors: s} = _v(t, n, r, l, u);
    for (let d = 0; d < o.length; d++) {
        let {key: c, match: p, controller: E} = o[d];
        W(i !== void 0 && i[d] !== void 0, "Did not find corresponding fetcher result");
        let x = i[d];
        if (!(E && E.signal.aborted))
            if (Je(x)) {
                let S = Zn(e.matches, p == null ? void 0 : p.route.id);
                s && s[S.route.id] || (s = de({}, s, {
                    [S.route.id]: x.error
                })),
                e.fetchers.delete(c)
            } else if (Sn(x))
                W(!1, "Unhandled fetcher revalidation redirect");
            else if (wn(x))
                W(!1, "Unhandled fetcher deferred data");
            else {
                let S = Vt(x.data);
                e.fetchers.set(c, S)
            }
    }
    return {
        loaderData: a,
        errors: s
    }
}
function rc(e, t, n, r) {
    let l = de({}, t);
    for (let o of n) {
        let i = o.route.id;
        if (t.hasOwnProperty(i) ? t[i] !== void 0 && (l[i] = t[i]) : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
        r && r.hasOwnProperty(i))
            break
    }
    return l
}
function lc(e) {
    return e ? Je(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}
function Zn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function oc(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function je(e, t) {
    let {pathname: n, routeId: r, method: l, type: o, message: i} = t === void 0 ? {} : t
      , u = "Unknown Server Error"
      , a = "Unknown @remix-run/router error";
    return e === 400 ? (u = "Bad Request",
    o === "route-discovery" ? a = 'Unable to match URL "' + n + '" - the `unstable_patchRoutesOnMiss()` ' + (`function threw the following error:
` + i) : l && n && r ? a = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? a = "defer() is not supported in actions" : o === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (u = "Forbidden",
    a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (u = "Not Found",
    a = 'No route matches URL "' + n + '"') : e === 405 && (u = "Method Not Allowed",
    l && n && r ? a = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Sa(e || 500,u,new Error(a),!0)
}
function ic(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Sn(n))
            return {
                result: n,
                idx: t
            }
    }
}
function jd(e) {
    let t = typeof e == "string" ? cn(e) : e;
    return hl(de({}, t, {
        hash: ""
    }))
}
function Pv(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Rv(e) {
    return typeof e == "object" && e != null && "then"in e
}
function Lv(e) {
    return Ud(e.result) && fv.has(e.result.status)
}
function wn(e) {
    return e.type === oe.deferred
}
function Je(e) {
    return e.type === oe.error
}
function Sn(e) {
    return (e && e.type) === oe.redirect
}
function Tv(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function Ud(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function Nv(e) {
    return cv.has(e.toLowerCase())
}
function pt(e) {
    return av.has(e.toLowerCase())
}
async function uc(e, t, n, r, l, o) {
    for (let i = 0; i < n.length; i++) {
        let u = n[i]
          , a = t[i];
        if (!a)
            continue;
        let s = e.find(c => c.route.id === a.route.id)
          , d = s != null && !Fd(s, a) && (o && o[a.route.id]) !== void 0;
        if (wn(u) && (l || d)) {
            let c = r[i];
            W(c, "Expected an AbortSignal for revalidating fetcher deferred result"),
            await Ad(u, c, l).then(p => {
                p && (n[i] = p || n[i])
            }
            )
        }
    }
}
async function Ad(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: oe.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (l) {
                return {
                    type: oe.error,
                    error: l
                }
            }
        return {
            type: oe.data,
            data: e.deferredData.data
        }
    }
}
function Ea(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function Or(e, t) {
    let n = typeof t == "string" ? cn(t).search : t.search;
    if (e[e.length - 1].route.index && Ea(n || ""))
        return e[e.length - 1];
    let r = Md(e);
    return r[r.length - 1]
}
function ac(e) {
    let {formMethod: t, formAction: n, formEncType: r, text: l, formData: o, json: i} = e;
    if (!(!t || !n || !r)) {
        if (l != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: l
            };
        if (o != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: o,
                json: void 0,
                text: void 0
            };
        if (i !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: i,
                text: void 0
            }
    }
}
function Ri(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function Dv(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function Lr(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}
function Mv(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}
function Vt(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
function zv(e, t) {
    try {
        let n = e.sessionStorage.getItem(Od);
        if (n) {
            let r = JSON.parse(n);
            for (let[l,o] of Object.entries(r || {}))
                o && Array.isArray(o) && t.set(l, new Set(o || []))
        }
    } catch {}
}
function Ov(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let[r,l] of t)
            n[r] = [...l];
        try {
            e.sessionStorage.setItem(Od, JSON.stringify(n))
        } catch (r) {
            cr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ro() {
    return Ro = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ro.apply(this, arguments)
}
const Ko = P.createContext(null)
  , Bd = P.createContext(null)
  , vl = P.createContext(null)
  , ka = P.createContext(null)
  , fn = P.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , $d = P.createContext(null);
function yl() {
    return P.useContext(ka) != null
}
function Ca() {
    return yl() || W(!1),
    P.useContext(ka).location
}
function Vd(e) {
    P.useContext(vl).static || P.useLayoutEffect(e)
}
function Fv() {
    let {isDataRoute: e} = P.useContext(fn);
    return e ? Gv() : Iv()
}
function Iv() {
    yl() || W(!1);
    let e = P.useContext(Ko)
      , {basename: t, future: n, navigator: r} = P.useContext(vl)
      , {matches: l} = P.useContext(fn)
      , {pathname: o} = Ca()
      , i = JSON.stringify(ga(l, n.v7_relativeSplatPath))
      , u = P.useRef(!1);
    return Vd( () => {
        u.current = !0
    }
    ),
    P.useCallback(function(s, d) {
        if (d === void 0 && (d = {}),
        !u.current)
            return;
        if (typeof s == "number") {
            r.go(s);
            return
        }
        let c = wa(s, JSON.parse(i), o, d.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : rn([t, c.pathname])),
        (d.replace ? r.replace : r.push)(c, d.state, d)
    }, [t, r, i, o, e])
}
const jv = P.createContext(null);
function Uv(e) {
    let t = P.useContext(fn).outlet;
    return t && P.createElement(jv.Provider, {
        value: e
    }, t)
}
function Av(e, t, n, r) {
    yl() || W(!1);
    let {navigator: l} = P.useContext(vl)
      , {matches: o} = P.useContext(fn)
      , i = o[o.length - 1]
      , u = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let s = Ca(), d;
    d = s;
    let c = d.pathname || "/"
      , p = c;
    if (a !== "/") {
        let S = a.replace(/^\//, "").split("/");
        p = "/" + c.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let E = mn(e, {
        pathname: p
    });
    return Wv(E && E.map(S => Object.assign({}, S, {
        params: Object.assign({}, u, S.params),
        pathname: rn([a, l.encodeLocation ? l.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? a : rn([a, l.encodeLocation ? l.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), o, n, r)
}
function Bv() {
    let e = Xv()
      , t = Qo(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return P.createElement(P.Fragment, null, P.createElement("h2", null, "Unexpected Application Error!"), P.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? P.createElement("pre", {
        style: l
    }, n) : null, null)
}
const $v = P.createElement(Bv, null);
class Vv extends P.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? P.createElement(fn.Provider, {
            value: this.props.routeContext
        }, P.createElement($d.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Hv(e) {
    let {routeContext: t, match: n, children: r} = e
      , l = P.useContext(Ko);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(fn.Provider, {
        value: t
    }, r)
}
function Wv(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if ((o = n) != null && o.errors)
            e = n.matches;
        else
            return null
    }
    let i = e
      , u = (l = n) == null ? void 0 : l.errors;
    if (u != null) {
        let d = i.findIndex(c => c.route.id && (u == null ? void 0 : u[c.route.id]) !== void 0);
        d >= 0 || W(!1),
        i = i.slice(0, Math.min(i.length, d + 1))
    }
    let a = !1
      , s = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < i.length; d++) {
            let c = i[d];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = d),
            c.route.id) {
                let {loaderData: p, errors: E} = n
                  , x = c.route.loader && p[c.route.id] === void 0 && (!E || E[c.route.id] === void 0);
                if (c.route.lazy || x) {
                    a = !0,
                    s >= 0 ? i = i.slice(0, s + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (d, c, p) => {
        let E, x = !1, S = null, N = null;
        n && (E = u && c.route.id ? u[c.route.id] : void 0,
        S = c.route.errorElement || $v,
        a && (s < 0 && p === 0 ? (x = !0,
        N = null) : s === p && (x = !0,
        N = c.route.hydrateFallbackElement || null)));
        let m = t.concat(i.slice(0, p + 1))
          , f = () => {
            let v;
            return E ? v = S : x ? v = N : c.route.Component ? v = P.createElement(c.route.Component, null) : c.route.element ? v = c.route.element : v = d,
            P.createElement(Hv, {
                match: c,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0) ? P.createElement(Vv, {
            location: n.location,
            revalidation: n.revalidation,
            component: S,
            error: E,
            children: f(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : f()
    }
    , null)
}
var Hd = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Hd || {})
  , Lo = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Lo || {});
function Qv(e) {
    let t = P.useContext(Ko);
    return t || W(!1),
    t
}
function Kv(e) {
    let t = P.useContext(Bd);
    return t || W(!1),
    t
}
function Yv(e) {
    let t = P.useContext(fn);
    return t || W(!1),
    t
}
function Wd(e) {
    let t = Yv()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || W(!1),
    n.route.id
}
function Xv() {
    var e;
    let t = P.useContext($d)
      , n = Kv(Lo.UseRouteError)
      , r = Wd(Lo.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Gv() {
    let {router: e} = Qv(Hd.UseNavigateStable)
      , t = Wd(Lo.UseNavigateStable)
      , n = P.useRef(!1);
    return Vd( () => {
        n.current = !0
    }
    ),
    P.useCallback(function(l, o) {
        o === void 0 && (o = {}),
        n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, Ro({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
function A0(e) {
    let {to: t, replace: n, state: r, relative: l} = e;
    yl() || W(!1);
    let {future: o, static: i} = P.useContext(vl)
      , {matches: u} = P.useContext(fn)
      , {pathname: a} = Ca()
      , s = Fv()
      , d = wa(t, ga(u, o.v7_relativeSplatPath), a, l === "path")
      , c = JSON.stringify(d);
    return P.useEffect( () => s(JSON.parse(c), {
        replace: n,
        state: r,
        relative: l
    }), [s, c, l, n, r]),
    null
}
function B0(e) {
    return Uv(e.context)
}
function Zv(e) {
    W(!1)
}
function Jv(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: l=Se.Pop, navigator: o, static: i=!1, future: u} = e;
    yl() && W(!1);
    let a = t.replace(/^\/*/, "/")
      , s = P.useMemo( () => ({
        basename: a,
        navigator: o,
        static: i,
        future: Ro({
            v7_relativeSplatPath: !1
        }, u)
    }), [a, u, o, i]);
    typeof r == "string" && (r = cn(r));
    let {pathname: d="/", search: c="", hash: p="", state: E=null, key: x="default"} = r
      , S = P.useMemo( () => {
        let N = ml(d, a);
        return N == null ? null : {
            location: {
                pathname: N,
                search: c,
                hash: p,
                state: E,
                key: x
            },
            navigationType: l
        }
    }
    , [a, d, c, p, E, x, l]);
    return S == null ? null : P.createElement(vl.Provider, {
        value: s
    }, P.createElement(ka.Provider, {
        children: n,
        value: S
    }))
}
new Promise( () => {}
);
function sc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return P.Children.forEach(e, (r, l) => {
        if (!P.isValidElement(r))
            return;
        let o = [...t, l];
        if (r.type === P.Fragment) {
            n.push.apply(n, sc(r.props.children, o));
            return
        }
        r.type !== Zv && W(!1),
        !r.props.index || !r.props.children || W(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = sc(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
function qv(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0
    }),
    e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function To() {
    return To = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    To.apply(this, arguments)
}
const bv = "6";
try {
    window.__reactRouterVersion = bv
} catch {}
function $0(e, t) {
    return mv({
        basename: void 0,
        future: To({}, void 0, {
            v7_prependBasename: !0
        }),
        history: Am({
            window: void 0
        }),
        hydrationData: e0(),
        routes: e,
        mapRouteProperties: qv,
        unstable_dataStrategy: void 0,
        unstable_patchRoutesOnMiss: void 0,
        window: void 0
    }).initialize()
}
function e0() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = To({}, t, {
        errors: t0(t.errors)
    })),
    t
}
function t0(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,l] of t)
        if (l && l.__type === "RouteErrorResponse")
            n[r] = new Sa(l.status,l.statusText,l.data,l.internal === !0);
        else if (l && l.__type === "Error") {
            if (l.__subType) {
                let o = window[l.__subType];
                if (typeof o == "function")
                    try {
                        let i = new o(l.message);
                        i.stack = "",
                        n[r] = i
                    } catch {}
            }
            if (n[r] == null) {
                let o = new Error(l.message);
                o.stack = "",
                n[r] = o
            }
        } else
            n[r] = l;
    return n
}
const n0 = P.createContext({
    isTransitioning: !1
})
  , r0 = P.createContext(new Map)
  , l0 = "startTransition"
  , cc = Mp[l0]
  , o0 = "flushSync"
  , fc = Um[o0];
function i0(e) {
    cc ? cc(e) : e()
}
function Tr(e) {
    fc ? fc(e) : e()
}
class u0 {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved",
                t(r))
            }
            ,
            this.reject = r => {
                this.status === "pending" && (this.status = "rejected",
                n(r))
            }
        }
        )
    }
}
function V0(e) {
    let {fallbackElement: t, router: n, future: r} = e
      , [l,o] = P.useState(n.state)
      , [i,u] = P.useState()
      , [a,s] = P.useState({
        isTransitioning: !1
    })
      , [d,c] = P.useState()
      , [p,E] = P.useState()
      , [x,S] = P.useState()
      , N = P.useRef(new Map)
      , {v7_startTransition: m} = r || {}
      , f = P.useCallback(L => {
        m ? i0(L) : L()
    }
    , [m])
      , v = P.useCallback( (L, F) => {
        let {deletedFetchers: I, unstable_flushSync: X, unstable_viewTransitionOpts: G} = F;
        I.forEach(Y => N.current.delete(Y)),
        L.fetchers.forEach( (Y, Ve) => {
            Y.data !== void 0 && N.current.set(Ve, Y.data)
        }
        );
        let re = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!G || re) {
            X ? Tr( () => o(L)) : f( () => o(L));
            return
        }
        if (X) {
            Tr( () => {
                p && (d && d.resolve(),
                p.skipTransition()),
                s({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: G.currentLocation,
                    nextLocation: G.nextLocation
                })
            }
            );
            let Y = n.window.document.startViewTransition( () => {
                Tr( () => o(L))
            }
            );
            Y.finished.finally( () => {
                Tr( () => {
                    c(void 0),
                    E(void 0),
                    u(void 0),
                    s({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            Tr( () => E(Y));
            return
        }
        p ? (d && d.resolve(),
        p.skipTransition(),
        S({
            state: L,
            currentLocation: G.currentLocation,
            nextLocation: G.nextLocation
        })) : (u(L),
        s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: G.currentLocation,
            nextLocation: G.nextLocation
        }))
    }
    , [n.window, p, d, N, f]);
    P.useLayoutEffect( () => n.subscribe(v), [n, v]),
    P.useEffect( () => {
        a.isTransitioning && !a.flushSync && c(new u0)
    }
    , [a]),
    P.useEffect( () => {
        if (d && i && n.window) {
            let L = i
              , F = d.promise
              , I = n.window.document.startViewTransition(async () => {
                f( () => o(L)),
                await F
            }
            );
            I.finished.finally( () => {
                c(void 0),
                E(void 0),
                u(void 0),
                s({
                    isTransitioning: !1
                })
            }
            ),
            E(I)
        }
    }
    , [f, i, d, n.window]),
    P.useEffect( () => {
        d && i && l.location.key === i.location.key && d.resolve()
    }
    , [d, p, l.location, i]),
    P.useEffect( () => {
        !a.isTransitioning && x && (u(x.state),
        s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: x.currentLocation,
            nextLocation: x.nextLocation
        }),
        S(void 0))
    }
    , [a.isTransitioning, x]),
    P.useEffect( () => {}
    , []);
    let k = P.useMemo( () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: L => n.navigate(L),
        push: (L, F, I) => n.navigate(L, {
            state: F,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset
        }),
        replace: (L, F, I) => n.navigate(L, {
            replace: !0,
            state: F,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset
        })
    }), [n])
      , R = n.basename || "/"
      , y = P.useMemo( () => ({
        router: n,
        navigator: k,
        static: !1,
        basename: R
    }), [n, k, R])
      , D = P.useMemo( () => ({
        v7_relativeSplatPath: n.future.v7_relativeSplatPath
    }), [n.future.v7_relativeSplatPath]);
    return P.createElement(P.Fragment, null, P.createElement(Ko.Provider, {
        value: y
    }, P.createElement(Bd.Provider, {
        value: l
    }, P.createElement(r0.Provider, {
        value: N.current
    }, P.createElement(n0.Provider, {
        value: a
    }, P.createElement(Jv, {
        basename: R,
        location: l.location,
        navigationType: l.historyAction,
        navigator: k,
        future: D
    }, l.initialized || n.future.v7_partialHydration ? P.createElement(a0, {
        routes: n.routes,
        future: n.future,
        state: l
    }) : t))))), null)
}
const a0 = P.memo(s0);
function s0(e) {
    let {routes: t, future: n, state: r} = e;
    return Av(t, void 0, r, n)
}
var dc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(dc || (dc = {}));
var pc;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(pc || (pc = {}));
var c0 = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const hc = e => {
    let t;
    const n = new Set
      , r = (d, c) => {
        const p = typeof d == "function" ? d(t) : d;
        if (!Object.is(p, t)) {
            const E = t;
            t = c ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p),
            n.forEach(x => x(t, E))
        }
    }
      , l = () => t
      , a = {
        setState: r,
        getState: l,
        getInitialState: () => s,
        subscribe: d => (n.add(d),
        () => n.delete(d)),
        destroy: () => {
            (c0 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),
            n.clear()
        }
    }
      , s = t = e(r, l, a);
    return a
}
  , f0 = e => e ? hc(e) : hc;
var Qd = {
    exports: {}
}
  , Kd = {}
  , Yd = {
    exports: {}
}
  , Xd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = P;
function d0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var p0 = typeof Object.is == "function" ? Object.is : d0
  , h0 = fr.useState
  , m0 = fr.useEffect
  , v0 = fr.useLayoutEffect
  , y0 = fr.useDebugValue;
function g0(e, t) {
    var n = t()
      , r = h0({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , l = r[0].inst
      , o = r[1];
    return v0(function() {
        l.value = n,
        l.getSnapshot = t,
        Li(l) && o({
            inst: l
        })
    }, [e, n, t]),
    m0(function() {
        return Li(l) && o({
            inst: l
        }),
        e(function() {
            Li(l) && o({
                inst: l
            })
        })
    }, [e]),
    y0(n),
    n
}
function Li(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !p0(e, n)
    } catch {
        return !0
    }
}
function w0(e, t) {
    return t()
}
var S0 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? w0 : g0;
Xd.useSyncExternalStore = fr.useSyncExternalStore !== void 0 ? fr.useSyncExternalStore : S0;
Yd.exports = Xd;
var x0 = Yd.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yo = P
  , E0 = x0;
function k0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var C0 = typeof Object.is == "function" ? Object.is : k0
  , _0 = E0.useSyncExternalStore
  , P0 = Yo.useRef
  , R0 = Yo.useEffect
  , L0 = Yo.useMemo
  , T0 = Yo.useDebugValue;
Kd.useSyncExternalStoreWithSelector = function(e, t, n, r, l) {
    var o = P0(null);
    if (o.current === null) {
        var i = {
            hasValue: !1,
            value: null
        };
        o.current = i
    } else
        i = o.current;
    o = L0(function() {
        function a(E) {
            if (!s) {
                if (s = !0,
                d = E,
                E = r(E),
                l !== void 0 && i.hasValue) {
                    var x = i.value;
                    if (l(x, E))
                        return c = x
                }
                return c = E
            }
            if (x = c,
            C0(d, E))
                return x;
            var S = r(E);
            return l !== void 0 && l(x, S) ? x : (d = E,
            c = S)
        }
        var s = !1, d, c, p = n === void 0 ? null : n;
        return [function() {
            return a(t())
        }
        , p === null ? void 0 : function() {
            return a(p())
        }
        ]
    }, [t, n, r, l]);
    var u = _0(e, o[0], o[1]);
    return R0(function() {
        i.hasValue = !0,
        i.value = u
    }, [u]),
    T0(u),
    u
}
;
Qd.exports = Kd;
var N0 = Qd.exports;
const D0 = ku(N0);
var Gd = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const {useDebugValue: M0} = Pc
  , {useSyncExternalStoreWithSelector: z0} = D0;
let mc = !1;
const O0 = e => e;
function F0(e, t=O0, n) {
    (Gd ? "production" : void 0) !== "production" && n && !mc && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),
    mc = !0);
    const r = z0(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
    return M0(r),
    r
}
const I0 = e => {
    (Gd ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    const t = typeof e == "function" ? f0(e) : e
      , n = (r, l) => F0(t, r, l);
    return Object.assign(n, t),
    n
}
  , H0 = e => I0;
export {A0 as N, B0 as O, jm as R, Td as a, Mp as b, Um as c, j0 as d, U0 as e, H0 as f, ku as g, Ca as h, $0 as i, sc as j, Zv as k, V0 as l, Pc as o, P as r, Fv as u};
