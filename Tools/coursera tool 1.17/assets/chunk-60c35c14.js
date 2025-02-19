function ac(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Kl = {},
    Yu = {
        exports: {}
    },
    ke = {},
    Xu = {
        exports: {}
    },
    T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn = Symbol.for("react.element"),
    cc = Symbol.for("react.portal"),
    dc = Symbol.for("react.fragment"),
    fc = Symbol.for("react.strict_mode"),
    pc = Symbol.for("react.profiler"),
    mc = Symbol.for("react.provider"),
    hc = Symbol.for("react.context"),
    gc = Symbol.for("react.forward_ref"),
    vc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.memo"),
    wc = Symbol.for("react.lazy"),
    $i = Symbol.iterator;

function kc(e) {
    return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Zu = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Ju = Object.assign,
    bu = {};

function un(e, t, n) {
    this.props = e, this.context = t, this.refs = bu, this.updater = n || Zu
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
un.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function es() {}
es.prototype = un.prototype;

function Qo(e, t, n) {
    this.props = e, this.context = t, this.refs = bu, this.updater = n || Zu
}
var Vo = Qo.prototype = new es;
Vo.constructor = Qo;
Ju(Vo, un.prototype);
Vo.isPureReactComponent = !0;
var Ui = Array.isArray,
    ts = Object.prototype.hasOwnProperty,
    Wo = {
        current: null
    },
    ns = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function rs(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ts.call(t, r) && !ns.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Zn,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Wo.current
    }
}

function Sc(e, t) {
    return {
        $$typeof: Zn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ho(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zn
}

function xc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Bi = /\/+/g;

function xl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? xc("" + e.key) : t.toString(36)
}

function Sr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Zn:
                case cc:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + xl(i, 0) : r, Ui(l) ? (n = "", e != null && (n = e.replace(Bi, "$&/") + "/"), Sr(l, t, n, "", function(a) {
        return a
    })) : l != null && (Ho(l) && (l = Sc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Bi, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Ui(e))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + xl(o, u);
            i += Sr(o, t, n, s, l)
        } else if (s = kc(e), typeof s == "function")
            for (e = s.call(e), u = 0; !(o = e.next()).done;) o = o.value, s = r + xl(o, u++), i += Sr(o, t, n, s, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function lr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Sr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function Cc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var se = {
        current: null
    },
    xr = {
        transition: null
    },
    Ec = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: xr,
        ReactCurrentOwner: Wo
    };

function ls() {
    throw Error("act(...) is not supported in production builds of React.")
}
T.Children = {
    map: lr,
    forEach: function(e, t, n) {
        lr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return lr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return lr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = un;
T.Fragment = dc;
T.Profiler = pc;
T.PureComponent = Qo;
T.StrictMode = fc;
T.Suspense = vc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ec;
T.act = ls;
T.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ju({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Wo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (s in t) ts.call(t, s) && !ns.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
        r.children = u
    }
    return {
        $$typeof: Zn,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
T.createContext = function(e) {
    return e = {
        $$typeof: hc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: mc,
        _context: e
    }, e.Consumer = e
};
T.createElement = rs;
T.createFactory = function(e) {
    var t = rs.bind(null, e);
    return t.type = e, t
};
T.createRef = function() {
    return {
        current: null
    }
};
T.forwardRef = function(e) {
    return {
        $$typeof: gc,
        render: e
    }
};
T.isValidElement = Ho;
T.lazy = function(e) {
    return {
        $$typeof: wc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Cc
    }
};
T.memo = function(e, t) {
    return {
        $$typeof: yc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
T.startTransition = function(e) {
    var t = xr.transition;
    xr.transition = {};
    try {
        e()
    } finally {
        xr.transition = t
    }
};
T.unstable_act = ls;
T.useCallback = function(e, t) {
    return se.current.useCallback(e, t)
};
T.useContext = function(e) {
    return se.current.useContext(e)
};
T.useDebugValue = function() {};
T.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e)
};
T.useEffect = function(e, t) {
    return se.current.useEffect(e, t)
};
T.useId = function() {
    return se.current.useId()
};
T.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
};
T.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t)
};
T.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t)
};
T.useMemo = function(e, t) {
    return se.current.useMemo(e, t)
};
T.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n)
};
T.useRef = function(e) {
    return se.current.useRef(e)
};
T.useState = function(e) {
    return se.current.useState(e)
};
T.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
};
T.useTransition = function() {
    return se.current.useTransition()
};
T.version = "18.3.1";
Xu.exports = T;
var ge = Xu.exports;
const os = ac(ge);
var is = {
        exports: {}
    },
    us = {};
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
    function t(E, j) {
        var L = E.length;
        E.push(j);
        e: for (; 0 < L;) {
            var W = L - 1 >>> 1,
                Y = E[W];
            if (0 < l(Y, j)) E[W] = j, E[L] = Y, L = W;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var j = E[0],
            L = E.pop();
        if (L !== j) {
            E[0] = L;
            e: for (var W = 0, Y = E.length, nr = Y >>> 1; W < nr;) {
                var vt = 2 * (W + 1) - 1,
                    Sl = E[vt],
                    yt = vt + 1,
                    rr = E[yt];
                if (0 > l(Sl, L)) yt < Y && 0 > l(rr, Sl) ? (E[W] = rr, E[yt] = L, W = yt) : (E[W] = Sl, E[vt] = L, W = vt);
                else if (yt < Y && 0 > l(rr, L)) E[W] = rr, E[yt] = L, W = yt;
                else break e
            }
        }
        return j
    }

    function l(E, j) {
        var L = E.sortIndex - j.sortIndex;
        return L !== 0 ? L : E.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function() {
            return i.now() - u
        }
    }
    var s = [],
        a = [],
        p = 1,
        h = null,
        m = 3,
        w = !1,
        k = !1,
        S = !1,
        N = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function f(E) {
        for (var j = n(a); j !== null;) {
            if (j.callback === null) r(a);
            else if (j.startTime <= E) r(a), j.sortIndex = j.expirationTime, t(s, j);
            else break;
            j = n(a)
        }
    }

    function v(E) {
        if (S = !1, f(E), !k)
            if (n(s) !== null) k = !0, wl(C);
            else {
                var j = n(a);
                j !== null && kl(v, j.startTime - E)
            }
    }

    function C(E, j) {
        k = !1, S && (S = !1, d(z), z = -1), w = !0;
        var L = m;
        try {
            for (f(j), h = n(s); h !== null && (!(h.expirationTime > j) || E && !Ne());) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var Y = W(h.expirationTime <= j);
                    j = e.unstable_now(), typeof Y == "function" ? h.callback = Y : h === n(s) && r(s), f(j)
                } else r(s);
                h = n(s)
            }
            if (h !== null) var nr = !0;
            else {
                var vt = n(a);
                vt !== null && kl(v, vt.startTime - j), nr = !1
            }
            return nr
        } finally {
            h = null, m = L, w = !1
        }
    }
    var _ = !1,
        P = null,
        z = -1,
        V = 5,
        I = -1;

    function Ne() {
        return !(e.unstable_now() - I < V)
    }

    function cn() {
        if (P !== null) {
            var E = e.unstable_now();
            I = E;
            var j = !0;
            try {
                j = P(!0, E)
            } finally {
                j ? dn() : (_ = !1, P = null)
            }
        } else _ = !1
    }
    var dn;
    if (typeof c == "function") dn = function() {
        c(cn)
    };
    else if (typeof MessageChannel < "u") {
        var Fi = new MessageChannel,
            sc = Fi.port2;
        Fi.port1.onmessage = cn, dn = function() {
            sc.postMessage(null)
        }
    } else dn = function() {
        N(cn, 0)
    };

    function wl(E) {
        P = E, _ || (_ = !0, dn())
    }

    function kl(E, j) {
        z = N(function() {
            E(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        k || w || (k = !0, wl(C))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }, e.unstable_next = function(E) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = m
        }
        var L = m;
        m = j;
        try {
            return E()
        } finally {
            m = L
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, j) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var L = m;
        m = E;
        try {
            return j()
        } finally {
            m = L
        }
    }, e.unstable_scheduleCallback = function(E, j, L) {
        var W = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? W + L : W) : L = W, E) {
            case 1:
                var Y = -1;
                break;
            case 2:
                Y = 250;
                break;
            case 5:
                Y = 1073741823;
                break;
            case 4:
                Y = 1e4;
                break;
            default:
                Y = 5e3
        }
        return Y = L + Y, E = {
            id: p++,
            callback: j,
            priorityLevel: E,
            startTime: L,
            expirationTime: Y,
            sortIndex: -1
        }, L > W ? (E.sortIndex = L, t(a, E), n(s) === null && E === n(a) && (S ? (d(z), z = -1) : S = !0, kl(v, L - W))) : (E.sortIndex = Y, t(s, E), k || w || (k = !0, wl(C))), E
    }, e.unstable_shouldYield = Ne, e.unstable_wrapCallback = function(E) {
        var j = m;
        return function() {
            var L = m;
            m = j;
            try {
                return E.apply(this, arguments)
            } finally {
                m = L
            }
        }
    }
})(us);
is.exports = us;
var _c = is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc = ge,
    we = _c;

function y(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ss = new Set,
    Mn = {};

function Tt(e, t) {
    bt(e, t), bt(e + "Capture", t)
}

function bt(e, t) {
    for (Mn[e] = t, e = 0; e < t.length; e++) ss.add(t[e])
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Yl = Object.prototype.hasOwnProperty,
    zc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Qi = {},
    Vi = {};

function Nc(e) {
    return Yl.call(Vi, e) ? !0 : Yl.call(Qi, e) ? !1 : zc.test(e) ? Vi[e] = !0 : (Qi[e] = !0, !1)
}

function jc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Lc(e, t, n, r) {
    if (t === null || typeof t > "u" || jc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
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

function ae(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    te[t] = new ae(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ae(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ae(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ae(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ae(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var qo = /[\-:]([a-z])/g;

function Go(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(qo, Go);
    te[t] = new ae(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(qo, Go);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(qo, Go);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ko(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Lc(t, n, l, r) && (n = null), r || l === null ? Nc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    or = Symbol.for("react.element"),
    Dt = Symbol.for("react.portal"),
    At = Symbol.for("react.fragment"),
    Yo = Symbol.for("react.strict_mode"),
    Xl = Symbol.for("react.profiler"),
    as = Symbol.for("react.provider"),
    cs = Symbol.for("react.context"),
    Xo = Symbol.for("react.forward_ref"),
    Zl = Symbol.for("react.suspense"),
    Jl = Symbol.for("react.suspense_list"),
    Zo = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    ds = Symbol.for("react.offscreen"),
    Wi = Symbol.iterator;

function fn(e) {
    return e === null || typeof e != "object" ? null : (e = Wi && e[Wi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var B = Object.assign,
    Cl;

function kn(e) {
    if (Cl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Cl = t && t[1] || ""
    }
    return `
` + Cl + e
}
var El = !1;

function _l(e, t) {
    if (!e || El) return "";
    El = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--, u--, 0 > u || l[i] !== o[u]) {
                                var s = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            } while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        El = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? kn(e) : ""
}

function Tc(e) {
    switch (e.tag) {
        case 5:
            return kn(e.type);
        case 16:
            return kn("Lazy");
        case 13:
            return kn("Suspense");
        case 19:
            return kn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = _l(e.type, !1), e;
        case 11:
            return e = _l(e.type.render, !1), e;
        case 1:
            return e = _l(e.type, !0), e;
        default:
            return ""
    }
}

function bl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case At:
            return "Fragment";
        case Dt:
            return "Portal";
        case Xl:
            return "Profiler";
        case Yo:
            return "StrictMode";
        case Zl:
            return "Suspense";
        case Jl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case cs:
            return (e.displayName || "Context") + ".Consumer";
        case as:
            return (e._context.displayName || "Context") + ".Provider";
        case Xo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Zo:
            return t = e.displayName || null, t !== null ? t : bl(e.type) || "Memo";
        case Je:
            t = e._payload, e = e._init;
            try {
                return bl(e(t))
            } catch {}
    }
    return null
}

function Ic(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return bl(t);
        case 8:
            return t === Yo ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ft(e) {
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

function fs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Rc(e) {
    var t = fs(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ir(e) {
    e._valueTracker || (e._valueTracker = Rc(e))
}

function ps(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = fs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Rr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function eo(e, t) {
    var n = t.checked;
    return B({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Hi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function ms(e, t) {
    t = t.checked, t != null && Ko(e, "checked", t, !1)
}

function to(e, t) {
    ms(e, t);
    var n = ft(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? no(e, t.type, n) : t.hasOwnProperty("defaultValue") && no(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function qi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function no(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Sn = Array.isArray;

function Gt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function ro(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
    return B({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Gi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(y(92));
            if (Sn(n)) {
                if (1 < n.length) throw Error(y(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}

function hs(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ki(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function gs(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function lo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ur, vs = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ur = ur || document.createElement("div"), ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ur.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Dn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var En = {
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
    },
    Mc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function(e) {
    Mc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), En[t] = En[e]
    })
});

function ys(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || En.hasOwnProperty(e) && En[e] ? ("" + t).trim() : t + "px"
}

function ws(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = ys(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Dc = B({
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

function oo(e, t) {
    if (t) {
        if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(y(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(y(62))
    }
}

function io(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var uo = null;

function Jo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var so = null,
    Kt = null,
    Yt = null;

function Yi(e) {
    if (e = er(e)) {
        if (typeof so != "function") throw Error(y(280));
        var t = e.stateNode;
        t && (t = ul(t), so(e.stateNode, e.type, t))
    }
}

function ks(e) {
    Kt ? Yt ? Yt.push(e) : Yt = [e] : Kt = e
}

function Ss() {
    if (Kt) {
        var e = Kt,
            t = Yt;
        if (Yt = Kt = null, Yi(e), t)
            for (e = 0; e < t.length; e++) Yi(t[e])
    }
}

function xs(e, t) {
    return e(t)
}

function Cs() {}
var Pl = !1;

function Es(e, t, n) {
    if (Pl) return e(t, n);
    Pl = !0;
    try {
        return xs(e, t, n)
    } finally {
        Pl = !1, (Kt !== null || Yt !== null) && (Cs(), Ss())
    }
}

function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ul(n);
    if (r === null) return null;
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(y(231, t, typeof n));
    return n
}
var ao = !1;
if (qe) try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
        get: function() {
            ao = !0
        }
    }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn)
} catch {
    ao = !1
}

function Ac(e, t, n, r, l, o, i, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (p) {
        this.onError(p)
    }
}
var _n = !1,
    Mr = null,
    Dr = !1,
    co = null,
    Oc = {
        onError: function(e) {
            _n = !0, Mr = e
        }
    };

function Fc(e, t, n, r, l, o, i, u, s) {
    _n = !1, Mr = null, Ac.apply(Oc, arguments)
}

function $c(e, t, n, r, l, o, i, u, s) {
    if (Fc.apply(this, arguments), _n) {
        if (_n) {
            var a = Mr;
            _n = !1, Mr = null
        } else throw Error(y(198));
        Dr || (Dr = !0, co = a)
    }
}

function It(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function _s(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Xi(e) {
    if (It(e) !== e) throw Error(y(188))
}

function Uc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = It(e), t === null) throw Error(y(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Xi(l), e;
                if (o === r) return Xi(l), t;
                o = o.sibling
            }
            throw Error(y(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (u === r) {
                    i = !0, r = l, n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u;) {
                    if (u === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (u === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(y(189))
            }
        }
        if (n.alternate !== r) throw Error(y(190))
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t
}

function Ps(e) {
    return e = Uc(e), e !== null ? zs(e) : null
}

function zs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = zs(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ns = we.unstable_scheduleCallback,
    Zi = we.unstable_cancelCallback,
    Bc = we.unstable_shouldYield,
    Qc = we.unstable_requestPaint,
    H = we.unstable_now,
    Vc = we.unstable_getCurrentPriorityLevel,
    bo = we.unstable_ImmediatePriority,
    js = we.unstable_UserBlockingPriority,
    Ar = we.unstable_NormalPriority,
    Wc = we.unstable_LowPriority,
    Ls = we.unstable_IdlePriority,
    rl = null,
    $e = null;

function Hc(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function") try {
        $e.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Kc,
    qc = Math.log,
    Gc = Math.LN2;

function Kc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (qc(e) / Gc | 0) | 0
}
var sr = 64,
    ar = 4194304;

function xn(e) {
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

function Or(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = xn(u) : (o &= i, o !== 0 && (r = xn(o)))
    } else i = n & ~l, i !== 0 ? r = xn(i) : o !== 0 && (r = xn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Yc(e, t) {
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

function Xc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Re(o),
            u = 1 << i,
            s = l[i];
        s === -1 ? (!(u & n) || u & r) && (l[i] = Yc(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u
    }
}

function fo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Ts() {
    var e = sr;
    return sr <<= 1, !(sr & 4194240) && (sr = 64), e
}

function zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Jn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n
}

function Zc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Re(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function ei(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Re(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var M = 0;

function Is(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Rs, ti, Ms, Ds, As, po = !1,
    cr = [],
    lt = null,
    ot = null,
    it = null,
    On = new Map,
    Fn = new Map,
    et = [],
    Jc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ji(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            ot = null;
            break;
        case "mouseover":
        case "mouseout":
            it = null;
            break;
        case "pointerover":
        case "pointerout":
            On.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Fn.delete(t.pointerId)
    }
}

function mn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = er(t), t !== null && ti(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function bc(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = mn(lt, e, t, n, r, l), !0;
        case "dragenter":
            return ot = mn(ot, e, t, n, r, l), !0;
        case "mouseover":
            return it = mn(it, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return On.set(o, mn(On.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Fn.set(o, mn(Fn.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Os(e) {
    var t = St(e.target);
    if (t !== null) {
        var n = It(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = _s(n), t !== null) {
                    e.blockedOn = t, As(e.priority, function() {
                        Ms(n)
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

function Cr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            uo = r, n.target.dispatchEvent(r), uo = null
        } else return t = er(n), t !== null && ti(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function bi(e, t, n) {
    Cr(e) && n.delete(t)
}

function ed() {
    po = !1, lt !== null && Cr(lt) && (lt = null), ot !== null && Cr(ot) && (ot = null), it !== null && Cr(it) && (it = null), On.forEach(bi), Fn.forEach(bi)
}

function hn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, po || (po = !0, we.unstable_scheduleCallback(we.unstable_NormalPriority, ed)))
}

function $n(e) {
    function t(l) {
        return hn(l, e)
    }
    if (0 < cr.length) {
        hn(cr[0], e);
        for (var n = 1; n < cr.length; n++) {
            var r = cr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && hn(lt, e), ot !== null && hn(ot, e), it !== null && hn(it, e), On.forEach(t), Fn.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) Os(n), n.blockedOn === null && et.shift()
}
var Xt = Xe.ReactCurrentBatchConfig,
    Fr = !0;

function td(e, t, n, r) {
    var l = M,
        o = Xt.transition;
    Xt.transition = null;
    try {
        M = 1, ni(e, t, n, r)
    } finally {
        M = l, Xt.transition = o
    }
}

function nd(e, t, n, r) {
    var l = M,
        o = Xt.transition;
    Xt.transition = null;
    try {
        M = 4, ni(e, t, n, r)
    } finally {
        M = l, Xt.transition = o
    }
}

function ni(e, t, n, r) {
    if (Fr) {
        var l = mo(e, t, n, r);
        if (l === null) Ol(e, t, r, $r, n), Ji(e, r);
        else if (bc(l, e, t, n, r)) r.stopPropagation();
        else if (Ji(e, r), t & 4 && -1 < Jc.indexOf(e)) {
            for (; l !== null;) {
                var o = er(l);
                if (o !== null && Rs(o), o = mo(e, t, n, r), o === null && Ol(e, t, r, $r, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Ol(e, t, r, null, n)
    }
}
var $r = null;

function mo(e, t, n, r) {
    if ($r = null, e = Jo(r), e = St(e), e !== null)
        if (t = It(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = _s(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return $r = e, null
}

function Fs(e) {
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
            switch (Vc()) {
                case bo:
                    return 1;
                case js:
                    return 4;
                case Ar:
                case Wc:
                    return 16;
                case Ls:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    ri = null,
    Er = null;

function $s() {
    if (Er) return Er;
    var e, t = ri,
        n = t.length,
        r, l = "value" in nt ? nt.value : nt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return Er = l.slice(e, 1 < r ? 1 - r : void 0)
}

function _r(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function dr() {
    return !0
}

function eu() {
    return !1
}

function Se(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? dr : eu, this.isPropagationStopped = eu, this
    }
    return B(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = dr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = dr)
        },
        persist: function() {},
        isPersistent: dr
    }), t
}
var sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    li = Se(sn),
    bn = B({}, sn, {
        view: 0,
        detail: 0
    }),
    rd = Se(bn),
    Nl, jl, gn, ll = B({}, bn, {
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
        getModifierState: oi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Nl = e.screenX - gn.screenX, jl = e.screenY - gn.screenY) : jl = Nl = 0, gn = e), Nl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : jl
        }
    }),
    tu = Se(ll),
    ld = B({}, ll, {
        dataTransfer: 0
    }),
    od = Se(ld),
    id = B({}, bn, {
        relatedTarget: 0
    }),
    Ll = Se(id),
    ud = B({}, sn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    sd = Se(ud),
    ad = B({}, sn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    cd = Se(ad),
    dd = B({}, sn, {
        data: 0
    }),
    nu = Se(dd),
    fd = {
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
    },
    pd = {
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
    },
    md = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function hd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = md[e]) ? !!t[e] : !1
}

function oi() {
    return hd
}
var gd = B({}, bn, {
        key: function(e) {
            if (e.key) {
                var t = fd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: oi,
        charCode: function(e) {
            return e.type === "keypress" ? _r(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    vd = Se(gd),
    yd = B({}, ll, {
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
    }),
    ru = Se(yd),
    wd = B({}, bn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: oi
    }),
    kd = Se(wd),
    Sd = B({}, sn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    xd = Se(Sd),
    Cd = B({}, ll, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Ed = Se(Cd),
    _d = [9, 13, 27, 32],
    ii = qe && "CompositionEvent" in window,
    Pn = null;
qe && "documentMode" in document && (Pn = document.documentMode);
var Pd = qe && "TextEvent" in window && !Pn,
    Us = qe && (!ii || Pn && 8 < Pn && 11 >= Pn),
    lu = String.fromCharCode(32),
    ou = !1;

function Bs(e, t) {
    switch (e) {
        case "keyup":
            return _d.indexOf(t.keyCode) !== -1;
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

function Qs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ot = !1;

function zd(e, t) {
    switch (e) {
        case "compositionend":
            return Qs(t);
        case "keypress":
            return t.which !== 32 ? null : (ou = !0, lu);
        case "textInput":
            return e = t.data, e === lu && ou ? null : e;
        default:
            return null
    }
}

function Nd(e, t) {
    if (Ot) return e === "compositionend" || !ii && Bs(e, t) ? (e = $s(), Er = ri = nt = null, Ot = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Us && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var jd = {
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

function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jd[e.type] : t === "textarea"
}

function Vs(e, t, n, r) {
    ks(r), t = Ur(t, "onChange"), 0 < t.length && (n = new li("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var zn = null,
    Un = null;

function Ld(e) {
    ea(e, 0)
}

function ol(e) {
    var t = Ut(e);
    if (ps(t)) return e
}

function Td(e, t) {
    if (e === "change") return t
}
var Ws = !1;
if (qe) {
    var Tl;
    if (qe) {
        var Il = "oninput" in document;
        if (!Il) {
            var uu = document.createElement("div");
            uu.setAttribute("oninput", "return;"), Il = typeof uu.oninput == "function"
        }
        Tl = Il
    } else Tl = !1;
    Ws = Tl && (!document.documentMode || 9 < document.documentMode)
}

function su() {
    zn && (zn.detachEvent("onpropertychange", Hs), Un = zn = null)
}

function Hs(e) {
    if (e.propertyName === "value" && ol(Un)) {
        var t = [];
        Vs(t, Un, e, Jo(e)), Es(Ld, t)
    }
}

function Id(e, t, n) {
    e === "focusin" ? (su(), zn = t, Un = n, zn.attachEvent("onpropertychange", Hs)) : e === "focusout" && su()
}

function Rd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol(Un)
}

function Md(e, t) {
    if (e === "click") return ol(t)
}

function Dd(e, t) {
    if (e === "input" || e === "change") return ol(t)
}

function Ad(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var De = typeof Object.is == "function" ? Object.is : Ad;

function Bn(e, t) {
    if (De(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Yl.call(t, l) || !De(e[l], t[l])) return !1
    }
    return !0
}

function au(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function cu(e, t) {
    var n = au(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = au(n)
    }
}

function qs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Gs() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Rr(e.document)
    }
    return t
}

function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Od(e) {
    var t = Gs(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && qs(n.ownerDocument.documentElement, n)) {
        if (r !== null && ui(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = cu(n, o);
                var i = cu(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Fd = qe && "documentMode" in document && 11 >= document.documentMode,
    Ft = null,
    ho = null,
    Nn = null,
    go = !1;

function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    go || Ft == null || Ft !== Rr(r) || (r = Ft, "selectionStart" in r && ui(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Nn && Bn(Nn, r) || (Nn = r, r = Ur(ho, "onSelect"), 0 < r.length && (t = new li("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ft)))
}

function fr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var $t = {
        animationend: fr("Animation", "AnimationEnd"),
        animationiteration: fr("Animation", "AnimationIteration"),
        animationstart: fr("Animation", "AnimationStart"),
        transitionend: fr("Transition", "TransitionEnd")
    },
    Rl = {},
    Ks = {};
qe && (Ks = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);

function il(e) {
    if (Rl[e]) return Rl[e];
    if (!$t[e]) return e;
    var t = $t[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ks) return Rl[e] = t[n];
    return e
}
var Ys = il("animationend"),
    Xs = il("animationiteration"),
    Zs = il("animationstart"),
    Js = il("transitionend"),
    bs = new Map,
    fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mt(e, t) {
    bs.set(e, t), Tt(t, [e])
}
for (var Ml = 0; Ml < fu.length; Ml++) {
    var Dl = fu[Ml],
        $d = Dl.toLowerCase(),
        Ud = Dl[0].toUpperCase() + Dl.slice(1);
    mt($d, "on" + Ud)
}
mt(Ys, "onAnimationEnd");
mt(Xs, "onAnimationIteration");
mt(Zs, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Js, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));

function pu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, $c(r, t, void 0, e), e.currentTarget = null
}

function ea(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        s = u.instance,
                        a = u.currentTarget;
                    if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
                    pu(l, u, a), o = s
                } else
                    for (i = 0; i < r.length; i++) {
                        if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
                        pu(l, u, a), o = s
                    }
        }
    }
    if (Dr) throw e = co, Dr = !1, co = null, e
}

function A(e, t) {
    var n = t[So];
    n === void 0 && (n = t[So] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ta(t, e, 2, !1), n.add(r))
}

function Al(e, t, n) {
    var r = 0;
    t && (r |= 4), ta(n, e, r, t)
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);

function Qn(e) {
    if (!e[pr]) {
        e[pr] = !0, ss.forEach(function(n) {
            n !== "selectionchange" && (Bd.has(n) || Al(n, !1, e), Al(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[pr] || (t[pr] = !0, Al("selectionchange", !1, t))
    }
}

function ta(e, t, n, r) {
    switch (Fs(t)) {
        case 1:
            var l = td;
            break;
        case 4:
            l = nd;
            break;
        default:
            l = ni
    }
    n = l.bind(null, t, n, e), l = void 0, !ao || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Ol(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var s = i.tag;
                    if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    i = i.return
                }
            for (; u !== null;) {
                if (i = St(u), i === null) return;
                if (s = i.tag, s === 5 || s === 6) {
                    r = o = i;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Es(function() {
        var a = o,
            p = Jo(n),
            h = [];
        e: {
            var m = bs.get(e);
            if (m !== void 0) {
                var w = li,
                    k = e;
                switch (e) {
                    case "keypress":
                        if (_r(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = vd;
                        break;
                    case "focusin":
                        k = "focus", w = Ll;
                        break;
                    case "focusout":
                        k = "blur", w = Ll;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Ll;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = tu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = od;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = kd;
                        break;
                    case Ys:
                    case Xs:
                    case Zs:
                        w = sd;
                        break;
                    case Js:
                        w = xd;
                        break;
                    case "scroll":
                        w = rd;
                        break;
                    case "wheel":
                        w = Ed;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = cd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = ru
                }
                var S = (t & 4) !== 0,
                    N = !S && e === "scroll",
                    d = S ? m !== null ? m + "Capture" : null : m;
                S = [];
                for (var c = a, f; c !== null;) {
                    f = c;
                    var v = f.stateNode;
                    if (f.tag === 5 && v !== null && (f = v, d !== null && (v = An(c, d), v != null && S.push(Vn(c, v, f)))), N) break;
                    c = c.return
                }
                0 < S.length && (m = new w(m, k, null, n, p), h.push({
                    event: m,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== uo && (k = n.relatedTarget || n.fromElement) && (St(k) || k[Ge])) break e;
                if ((w || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (k = n.relatedTarget || n.toElement, w = a, k = k ? St(k) : null, k !== null && (N = It(k), k !== N || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null, k = a), w !== k)) {
                    if (S = tu, v = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = ru, v = "onPointerLeave", d = "onPointerEnter", c = "pointer"), N = w == null ? m : Ut(w), f = k == null ? m : Ut(k), m = new S(v, c + "leave", w, n, p), m.target = N, m.relatedTarget = f, v = null, St(p) === a && (S = new S(d, c + "enter", k, n, p), S.target = f, S.relatedTarget = N, v = S), N = v, w && k) t: {
                        for (S = w, d = k, c = 0, f = S; f; f = Rt(f)) c++;
                        for (f = 0, v = d; v; v = Rt(v)) f++;
                        for (; 0 < c - f;) S = Rt(S),
                        c--;
                        for (; 0 < f - c;) d = Rt(d),
                        f--;
                        for (; c--;) {
                            if (S === d || d !== null && S === d.alternate) break t;
                            S = Rt(S), d = Rt(d)
                        }
                        S = null
                    }
                    else S = null;
                    w !== null && mu(h, m, w, S, !1), k !== null && N !== null && mu(h, N, k, S, !0)
                }
            }
            e: {
                if (m = a ? Ut(a) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var C = Td;
                else if (iu(m))
                    if (Ws) C = Dd;
                    else {
                        C = Rd;
                        var _ = Id
                    }
                else(w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Md);
                if (C && (C = C(e, a))) {
                    Vs(h, C, n, p);
                    break e
                }
                _ && _(e, m, a),
                e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && no(m, "number", m.value)
            }
            switch (_ = a ? Ut(a) : window, e) {
                case "focusin":
                    (iu(_) || _.contentEditable === "true") && (Ft = _, ho = a, Nn = null);
                    break;
                case "focusout":
                    Nn = ho = Ft = null;
                    break;
                case "mousedown":
                    go = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    go = !1, du(h, n, p);
                    break;
                case "selectionchange":
                    if (Fd) break;
                case "keydown":
                case "keyup":
                    du(h, n, p)
            }
            var P;
            if (ii) e: {
                switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                }
                z = void 0
            }
            else Ot ? Bs(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");z && (Us && n.locale !== "ko" && (Ot || z !== "onCompositionStart" ? z === "onCompositionEnd" && Ot && (P = $s()) : (nt = p, ri = "value" in nt ? nt.value : nt.textContent, Ot = !0)), _ = Ur(a, z), 0 < _.length && (z = new nu(z, e, null, n, p), h.push({
                event: z,
                listeners: _
            }), P ? z.data = P : (P = Qs(n), P !== null && (z.data = P)))),
            (P = Pd ? zd(e, n) : Nd(e, n)) && (a = Ur(a, "onBeforeInput"), 0 < a.length && (p = new nu("onBeforeInput", "beforeinput", null, n, p), h.push({
                event: p,
                listeners: a
            }), p.data = P))
        }
        ea(h, t)
    })
}

function Vn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ur(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = An(e, n), o != null && r.unshift(Vn(e, o, l)), o = An(e, t), o != null && r.push(Vn(e, o, l))), e = e.return
    }
    return r
}

function Rt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function mu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var u = n,
            s = u.alternate,
            a = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 && a !== null && (u = a, l ? (s = An(n, o), s != null && i.unshift(Vn(n, s, u))) : l || (s = An(n, o), s != null && i.push(Vn(n, s, u)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Qd = /\r\n?/g,
    Vd = /\u0000|\uFFFD/g;

function hu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Qd, `
`).replace(Vd, "")
}

function mr(e, t, n) {
    if (t = hu(t), hu(e) !== t && n) throw Error(y(425))
}

function Br() {}
var vo = null,
    yo = null;

function wo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ko = typeof setTimeout == "function" ? setTimeout : void 0,
    Wd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    gu = typeof Promise == "function" ? Promise : void 0,
    Hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof gu < "u" ? function(e) {
        return gu.resolve(null).then(e).catch(qd)
    } : ko;

function qd(e) {
    setTimeout(function() {
        throw e
    })
}

function Fl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), $n(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    $n(t)
}

function ut(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function vu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var an = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + an,
    Wn = "__reactProps$" + an,
    Ge = "__reactContainer$" + an,
    So = "__reactEvents$" + an,
    Gd = "__reactListeners$" + an,
    Kd = "__reactHandles$" + an;

function St(e) {
    var t = e[Fe];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ge] || n[Fe]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = vu(e); e !== null;) {
                    if (n = e[Fe]) return n;
                    e = vu(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function er(e) {
    return e = e[Fe] || e[Ge], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ut(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33))
}

function ul(e) {
    return e[Wn] || null
}
var xo = [],
    Bt = -1;

function ht(e) {
    return {
        current: e
    }
}

function O(e) {
    0 > Bt || (e.current = xo[Bt], xo[Bt] = null, Bt--)
}

function D(e, t) {
    Bt++, xo[Bt] = e.current, e.current = t
}
var pt = {},
    oe = ht(pt),
    fe = ht(!1),
    Pt = pt;

function en(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function pe(e) {
    return e = e.childContextTypes, e != null
}

function Qr() {
    O(fe), O(oe)
}

function yu(e, t, n) {
    if (oe.current !== pt) throw Error(y(168));
    D(oe, t), D(fe, n)
}

function na(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(y(108, Ic(e) || "Unknown", l));
    return B({}, n, r)
}

function Vr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, Pt = oe.current, D(oe, e), D(fe, fe.current), !0
}

function wu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    n ? (e = na(e, t, Pt), r.__reactInternalMemoizedMergedChildContext = e, O(fe), O(oe), D(oe, e)) : O(fe), D(fe, n)
}
var Qe = null,
    sl = !1,
    $l = !1;

function ra(e) {
    Qe === null ? Qe = [e] : Qe.push(e)
}

function Yd(e) {
    sl = !0, ra(e)
}

function gt() {
    if (!$l && Qe !== null) {
        $l = !0;
        var e = 0,
            t = M;
        try {
            var n = Qe;
            for (M = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Qe = null, sl = !1
        } catch (l) {
            throw Qe !== null && (Qe = Qe.slice(e + 1)), Ns(bo, gt), l
        } finally {
            M = t, $l = !1
        }
    }
    return null
}
var Qt = [],
    Vt = 0,
    Wr = null,
    Hr = 0,
    xe = [],
    Ce = 0,
    zt = null,
    Ve = 1,
    We = "";

function wt(e, t) {
    Qt[Vt++] = Hr, Qt[Vt++] = Wr, Wr = e, Hr = t
}

function la(e, t, n) {
    xe[Ce++] = Ve, xe[Ce++] = We, xe[Ce++] = zt, zt = e;
    var r = Ve;
    e = We;
    var l = 32 - Re(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Re(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Re(t) + l | n << l | r, We = o + e
    } else Ve = 1 << o | n << l | r, We = e
}

function si(e) {
    e.return !== null && (wt(e, 1), la(e, 1, 0))
}

function ai(e) {
    for (; e === Wr;) Wr = Qt[--Vt], Qt[Vt] = null, Hr = Qt[--Vt], Qt[Vt] = null;
    for (; e === zt;) zt = xe[--Ce], xe[Ce] = null, We = xe[--Ce], xe[Ce] = null, Ve = xe[--Ce], xe[Ce] = null
}
var ye = null,
    ve = null,
    F = !1,
    Ie = null;

function oa(e, t) {
    var n = Ee(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ku(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = ut(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? {
                id: Ve,
                overflow: We
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
        default:
            return !1
    }
}

function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Eo(e) {
    if (F) {
        var t = ve;
        if (t) {
            var n = t;
            if (!ku(e, t)) {
                if (Co(e)) throw Error(y(418));
                t = ut(n.nextSibling);
                var r = ye;
                t && ku(e, t) ? oa(r, n) : (e.flags = e.flags & -4097 | 2, F = !1, ye = e)
            }
        } else {
            if (Co(e)) throw Error(y(418));
            e.flags = e.flags & -4097 | 2, F = !1, ye = e
        }
    }
}

function Su(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ye = e
}

function hr(e) {
    if (e !== ye) return !1;
    if (!F) return Su(e), F = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps)), t && (t = ve)) {
        if (Co(e)) throw ia(), Error(y(418));
        for (; t;) oa(e, t), t = ut(t.nextSibling)
    }
    if (Su(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = ut(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else ve = ye ? ut(e.stateNode.nextSibling) : null;
    return !0
}

function ia() {
    for (var e = ve; e;) e = ut(e.nextSibling)
}

function tn() {
    ve = ye = null, F = !1
}

function ci(e) {
    Ie === null ? Ie = [e] : Ie.push(e)
}
var Xd = Xe.ReactCurrentBatchConfig;

function vn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(y(309));
                var r = n.stateNode
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(y(284));
        if (!n._owner) throw Error(y(290, e))
    }
    return e
}

function gr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function xu(e) {
    var t = e._init;
    return t(e._payload)
}

function ua(e) {
    function t(d, c) {
        if (e) {
            var f = d.deletions;
            f === null ? (d.deletions = [c], d.flags |= 16) : f.push(c)
        }
    }

    function n(d, c) {
        if (!e) return null;
        for (; c !== null;) t(d, c), c = c.sibling;
        return null
    }

    function r(d, c) {
        for (d = new Map; c !== null;) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
        return d
    }

    function l(d, c) {
        return d = dt(d, c), d.index = 0, d.sibling = null, d
    }

    function o(d, c, f) {
        return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < c ? (d.flags |= 2, c) : f) : (d.flags |= 2, c)) : (d.flags |= 1048576, c)
    }

    function i(d) {
        return e && d.alternate === null && (d.flags |= 2), d
    }

    function u(d, c, f, v) {
        return c === null || c.tag !== 6 ? (c = ql(f, d.mode, v), c.return = d, c) : (c = l(c, f), c.return = d, c)
    }

    function s(d, c, f, v) {
        var C = f.type;
        return C === At ? p(d, c, f.props.children, v, f.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Je && xu(C) === c.type) ? (v = l(c, f.props), v.ref = vn(d, c, f), v.return = d, v) : (v = Ir(f.type, f.key, f.props, null, d.mode, v), v.ref = vn(d, c, f), v.return = d, v)
    }

    function a(d, c, f, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Gl(f, d.mode, v), c.return = d, c) : (c = l(c, f.children || []), c.return = d, c)
    }

    function p(d, c, f, v, C) {
        return c === null || c.tag !== 7 ? (c = _t(f, d.mode, v, C), c.return = d, c) : (c = l(c, f), c.return = d, c)
    }

    function h(d, c, f) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = ql("" + c, d.mode, f), c.return = d, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case or:
                    return f = Ir(c.type, c.key, c.props, null, d.mode, f), f.ref = vn(d, null, c), f.return = d, f;
                case Dt:
                    return c = Gl(c, d.mode, f), c.return = d, c;
                case Je:
                    var v = c._init;
                    return h(d, v(c._payload), f)
            }
            if (Sn(c) || fn(c)) return c = _t(c, d.mode, f, null), c.return = d, c;
            gr(d, c)
        }
        return null
    }

    function m(d, c, f, v) {
        var C = c !== null ? c.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number") return C !== null ? null : u(d, c, "" + f, v);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case or:
                    return f.key === C ? s(d, c, f, v) : null;
                case Dt:
                    return f.key === C ? a(d, c, f, v) : null;
                case Je:
                    return C = f._init, m(d, c, C(f._payload), v)
            }
            if (Sn(f) || fn(f)) return C !== null ? null : p(d, c, f, v, null);
            gr(d, f)
        }
        return null
    }

    function w(d, c, f, v, C) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(f) || null, u(c, d, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case or:
                    return d = d.get(v.key === null ? f : v.key) || null, s(c, d, v, C);
                case Dt:
                    return d = d.get(v.key === null ? f : v.key) || null, a(c, d, v, C);
                case Je:
                    var _ = v._init;
                    return w(d, c, f, _(v._payload), C)
            }
            if (Sn(v) || fn(v)) return d = d.get(f) || null, p(c, d, v, C, null);
            gr(c, v)
        }
        return null
    }

    function k(d, c, f, v) {
        for (var C = null, _ = null, P = c, z = c = 0, V = null; P !== null && z < f.length; z++) {
            P.index > z ? (V = P, P = null) : V = P.sibling;
            var I = m(d, P, f[z], v);
            if (I === null) {
                P === null && (P = V);
                break
            }
            e && P && I.alternate === null && t(d, P), c = o(I, c, z), _ === null ? C = I : _.sibling = I, _ = I, P = V
        }
        if (z === f.length) return n(d, P), F && wt(d, z), C;
        if (P === null) {
            for (; z < f.length; z++) P = h(d, f[z], v), P !== null && (c = o(P, c, z), _ === null ? C = P : _.sibling = P, _ = P);
            return F && wt(d, z), C
        }
        for (P = r(d, P); z < f.length; z++) V = w(P, d, z, f[z], v), V !== null && (e && V.alternate !== null && P.delete(V.key === null ? z : V.key), c = o(V, c, z), _ === null ? C = V : _.sibling = V, _ = V);
        return e && P.forEach(function(Ne) {
            return t(d, Ne)
        }), F && wt(d, z), C
    }

    function S(d, c, f, v) {
        var C = fn(f);
        if (typeof C != "function") throw Error(y(150));
        if (f = C.call(f), f == null) throw Error(y(151));
        for (var _ = C = null, P = c, z = c = 0, V = null, I = f.next(); P !== null && !I.done; z++, I = f.next()) {
            P.index > z ? (V = P, P = null) : V = P.sibling;
            var Ne = m(d, P, I.value, v);
            if (Ne === null) {
                P === null && (P = V);
                break
            }
            e && P && Ne.alternate === null && t(d, P), c = o(Ne, c, z), _ === null ? C = Ne : _.sibling = Ne, _ = Ne, P = V
        }
        if (I.done) return n(d, P), F && wt(d, z), C;
        if (P === null) {
            for (; !I.done; z++, I = f.next()) I = h(d, I.value, v), I !== null && (c = o(I, c, z), _ === null ? C = I : _.sibling = I, _ = I);
            return F && wt(d, z), C
        }
        for (P = r(d, P); !I.done; z++, I = f.next()) I = w(P, d, z, I.value, v), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? z : I.key), c = o(I, c, z), _ === null ? C = I : _.sibling = I, _ = I);
        return e && P.forEach(function(cn) {
            return t(d, cn)
        }), F && wt(d, z), C
    }

    function N(d, c, f, v) {
        if (typeof f == "object" && f !== null && f.type === At && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case or:
                    e: {
                        for (var C = f.key, _ = c; _ !== null;) {
                            if (_.key === C) {
                                if (C = f.type, C === At) {
                                    if (_.tag === 7) {
                                        n(d, _.sibling), c = l(_, f.props.children), c.return = d, d = c;
                                        break e
                                    }
                                } else if (_.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Je && xu(C) === _.type) {
                                    n(d, _.sibling), c = l(_, f.props), c.ref = vn(d, _, f), c.return = d, d = c;
                                    break e
                                }
                                n(d, _);
                                break
                            } else t(d, _);
                            _ = _.sibling
                        }
                        f.type === At ? (c = _t(f.props.children, d.mode, v, f.key), c.return = d, d = c) : (v = Ir(f.type, f.key, f.props, null, d.mode, v), v.ref = vn(d, c, f), v.return = d, d = v)
                    }
                    return i(d);
                case Dt:
                    e: {
                        for (_ = f.key; c !== null;) {
                            if (c.key === _)
                                if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                                    n(d, c.sibling), c = l(c, f.children || []), c.return = d, d = c;
                                    break e
                                } else {
                                    n(d, c);
                                    break
                                }
                            else t(d, c);
                            c = c.sibling
                        }
                        c = Gl(f, d.mode, v),
                        c.return = d,
                        d = c
                    }
                    return i(d);
                case Je:
                    return _ = f._init, N(d, c, _(f._payload), v)
            }
            if (Sn(f)) return k(d, c, f, v);
            if (fn(f)) return S(d, c, f, v);
            gr(d, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, f), c.return = d, d = c) : (n(d, c), c = ql(f, d.mode, v), c.return = d, d = c), i(d)) : n(d, c)
    }
    return N
}
var nn = ua(!0),
    sa = ua(!1),
    qr = ht(null),
    Gr = null,
    Wt = null,
    di = null;

function fi() {
    di = Wt = Gr = null
}

function pi(e) {
    var t = qr.current;
    O(qr), e._currentValue = t
}

function _o(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Zt(e, t) {
    Gr = e, di = Wt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null)
}

function Pe(e) {
    var t = e._currentValue;
    if (di !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Wt === null) {
            if (Gr === null) throw Error(y(308));
            Wt = e, Gr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Wt = Wt.next = e;
    return t
}
var xt = null;

function mi(e) {
    xt === null ? xt = [e] : xt.push(e)
}

function aa(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, mi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ke(e, r)
}

function Ke(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;

function hi(e) {
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

function ca(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function He(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function st(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, R & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ke(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, mi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ke(e, n)
}

function Pr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ei(e, n)
    }
}

function Cu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Kr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            a = s.next;
        s.next = null, i === null ? o = a : i.next = a, i = s;
        var p = e.alternate;
        p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = a : u.next = a, p.lastBaseUpdate = s))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0, p = a = s = null, u = o;
        do {
            var m = u.lane,
                w = u.eventTime;
            if ((r & m) === m) {
                p !== null && (p = p.next = {
                    eventTime: w,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var k = e,
                        S = u;
                    switch (m = t, w = n, S.tag) {
                        case 1:
                            if (k = S.payload, typeof k == "function") {
                                h = k.call(w, h, m);
                                break e
                            }
                            h = k;
                            break e;
                        case 3:
                            k.flags = k.flags & -65537 | 128;
                        case 0:
                            if (k = S.payload, m = typeof k == "function" ? k.call(w, h, m) : k, m == null) break e;
                            h = B({}, h, m);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u))
            } else w = {
                eventTime: w,
                lane: m,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, p === null ? (a = p = w, s = h) : p = p.next = w, i |= m;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (1);
        if (p === null && (s = h), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        jt |= i, e.lanes = i, e.memoizedState = h
    }
}

function Eu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
                l.call(r)
            }
        }
}
var tr = {},
    Ue = ht(tr),
    Hn = ht(tr),
    qn = ht(tr);

function Ct(e) {
    if (e === tr) throw Error(y(174));
    return e
}

function gi(e, t) {
    switch (D(qn, t), D(Hn, e), D(Ue, tr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lo(t, e)
    }
    O(Ue), D(Ue, t)
}

function rn() {
    O(Ue), O(Hn), O(qn)
}

function da(e) {
    Ct(qn.current);
    var t = Ct(Ue.current),
        n = lo(t, e.type);
    t !== n && (D(Hn, e), D(Ue, n))
}

function vi(e) {
    Hn.current === e && (O(Ue), O(Hn))
}
var $ = ht(0);

function Yr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ul = [];

function yi() {
    for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0
}
var zr = Xe.ReactCurrentDispatcher,
    Bl = Xe.ReactCurrentBatchConfig,
    Nt = 0,
    U = null,
    G = null,
    X = null,
    Xr = !1,
    jn = !1,
    Gn = 0,
    Zd = 0;

function ne() {
    throw Error(y(321))
}

function wi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!De(e[n], t[n])) return !1;
    return !0
}

function ki(e, t, n, r, l, o) {
    if (Nt = o, U = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? tf : nf, e = n(r, l), jn) {
        o = 0;
        do {
            if (jn = !1, Gn = 0, 25 <= o) throw Error(y(301));
            o += 1, X = G = null, t.updateQueue = null, zr.current = rf, e = n(r, l)
        } while (jn)
    }
    if (zr.current = Zr, t = G !== null && G.next !== null, Nt = 0, X = G = U = null, Xr = !1, t) throw Error(y(300));
    return e
}

function Si() {
    var e = Gn !== 0;
    return Gn = 0, e
}

function Oe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return X === null ? U.memoizedState = X = e : X = X.next = e, X
}

function ze() {
    if (G === null) {
        var e = U.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = G.next;
    var t = X === null ? U.memoizedState : X.next;
    if (t !== null) X = t, G = e;
    else {
        if (e === null) throw Error(y(310));
        G = e, e = {
            memoizedState: G.memoizedState,
            baseState: G.baseState,
            baseQueue: G.baseQueue,
            queue: G.queue,
            next: null
        }, X === null ? U.memoizedState = X = e : X = X.next = e
    }
    return X
}

function Kn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ql(e) {
    var t = ze(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = G,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var u = i = null,
            s = null,
            a = o;
        do {
            var p = a.lane;
            if ((Nt & p) === p) s !== null && (s = s.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var h = {
                    lane: p,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                s === null ? (u = s = h, i = r) : s = s.next = h, U.lanes |= p, jt |= p
            }
            a = a.next
        } while (a !== null && a !== o);
        s === null ? i = r : s.next = u, De(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, U.lanes |= o, jt |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Vl(e) {
    var t = ze(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        De(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function fa() {}

function pa(e, t) {
    var n = U,
        r = ze(),
        l = t(),
        o = !De(r.memoizedState, l);
    if (o && (r.memoizedState = l, de = !0), r = r.queue, xi(ga.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || X !== null && X.memoizedState.tag & 1) {
        if (n.flags |= 2048, Yn(9, ha.bind(null, n, r, l, t), void 0, null), J === null) throw Error(y(349));
        Nt & 30 || ma(n, t, l)
    }
    return l
}

function ma(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = U.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, U.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ha(e, t, n, r) {
    t.value = n, t.getSnapshot = r, va(t) && ya(e)
}

function ga(e, t, n) {
    return n(function() {
        va(t) && ya(e)
    })
}

function va(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !De(e, n)
    } catch {
        return !0
    }
}

function ya(e) {
    var t = Ke(e, 1);
    t !== null && Me(t, e, 1, -1)
}

function _u(e) {
    var t = Oe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = ef.bind(null, U, e), [t.memoizedState, e]
}

function Yn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = U.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, U.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function wa() {
    return ze().memoizedState
}

function Nr(e, t, n, r) {
    var l = Oe();
    U.flags |= e, l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r)
}

function al(e, t, n, r) {
    var l = ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (G !== null) {
        var i = G.memoizedState;
        if (o = i.destroy, r !== null && wi(r, i.deps)) {
            l.memoizedState = Yn(t, n, o, r);
            return
        }
    }
    U.flags |= e, l.memoizedState = Yn(1 | t, n, o, r)
}

function Pu(e, t) {
    return Nr(8390656, 8, e, t)
}

function xi(e, t) {
    return al(2048, 8, e, t)
}

function ka(e, t) {
    return al(4, 2, e, t)
}

function Sa(e, t) {
    return al(4, 4, e, t)
}

function xa(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Ca(e, t, n) {
    return n = n != null ? n.concat([e]) : null, al(4, 4, xa.bind(null, t, e), n)
}

function Ci() {}

function Ea(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function _a(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Pa(e, t, n) {
    return Nt & 21 ? (De(n, t) || (n = Ts(), U.lanes |= n, jt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n)
}

function Jd(e, t) {
    var n = M;
    M = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Bl.transition;
    Bl.transition = {};
    try {
        e(!1), t()
    } finally {
        M = n, Bl.transition = r
    }
}

function za() {
    return ze().memoizedState
}

function bd(e, t, n) {
    var r = ct(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Na(e)) ja(t, n);
    else if (n = aa(e, t, n, r), n !== null) {
        var l = ue();
        Me(n, e, r, l), La(n, t, r)
    }
}

function ef(e, t, n) {
    var r = ct(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Na(e)) ja(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                u = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, De(u, i)) {
                var s = t.interleaved;
                s === null ? (l.next = l, mi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = aa(e, t, l, r), n !== null && (l = ue(), Me(n, e, r, l), La(n, t, r))
    }
}

function Na(e) {
    var t = e.alternate;
    return e === U || t !== null && t === U
}

function ja(e, t) {
    jn = Xr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function La(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ei(e, n)
    }
}
var Zr = {
        readContext: Pe,
        useCallback: ne,
        useContext: ne,
        useEffect: ne,
        useImperativeHandle: ne,
        useInsertionEffect: ne,
        useLayoutEffect: ne,
        useMemo: ne,
        useReducer: ne,
        useRef: ne,
        useState: ne,
        useDebugValue: ne,
        useDeferredValue: ne,
        useTransition: ne,
        useMutableSource: ne,
        useSyncExternalStore: ne,
        useId: ne,
        unstable_isNewReconciler: !1
    },
    tf = {
        readContext: Pe,
        useCallback: function(e, t) {
            return Oe().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Pe,
        useEffect: Pu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Nr(4194308, 4, xa.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Nr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Nr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Oe();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Oe();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = bd.bind(null, U, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Oe();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: _u,
        useDebugValue: Ci,
        useDeferredValue: function(e) {
            return Oe().memoizedState = e
        },
        useTransition: function() {
            var e = _u(!1),
                t = e[0];
            return e = Jd.bind(null, e[1]), Oe().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = U,
                l = Oe();
            if (F) {
                if (n === void 0) throw Error(y(407));
                n = n()
            } else {
                if (n = t(), J === null) throw Error(y(349));
                Nt & 30 || ma(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, Pu(ga.bind(null, r, o, e), [e]), r.flags |= 2048, Yn(9, ha.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Oe(),
                t = J.identifierPrefix;
            if (F) {
                var n = We,
                    r = Ve;
                n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Zd++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    nf = {
        readContext: Pe,
        useCallback: Ea,
        useContext: Pe,
        useEffect: xi,
        useImperativeHandle: Ca,
        useInsertionEffect: ka,
        useLayoutEffect: Sa,
        useMemo: _a,
        useReducer: Ql,
        useRef: wa,
        useState: function() {
            return Ql(Kn)
        },
        useDebugValue: Ci,
        useDeferredValue: function(e) {
            var t = ze();
            return Pa(t, G.memoizedState, e)
        },
        useTransition: function() {
            var e = Ql(Kn)[0],
                t = ze().memoizedState;
            return [e, t]
        },
        useMutableSource: fa,
        useSyncExternalStore: pa,
        useId: za,
        unstable_isNewReconciler: !1
    },
    rf = {
        readContext: Pe,
        useCallback: Ea,
        useContext: Pe,
        useEffect: xi,
        useImperativeHandle: Ca,
        useInsertionEffect: ka,
        useLayoutEffect: Sa,
        useMemo: _a,
        useReducer: Vl,
        useRef: wa,
        useState: function() {
            return Vl(Kn)
        },
        useDebugValue: Ci,
        useDeferredValue: function(e) {
            var t = ze();
            return G === null ? t.memoizedState = e : Pa(t, G.memoizedState, e)
        },
        useTransition: function() {
            var e = Vl(Kn)[0],
                t = ze().memoizedState;
            return [e, t]
        },
        useMutableSource: fa,
        useSyncExternalStore: pa,
        useId: za,
        unstable_isNewReconciler: !1
    };

function Le(e, t) {
    if (e && e.defaultProps) {
        t = B({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Po(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var cl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? It(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            o = He(r, l);
        o.payload = t, n != null && (o.callback = n), t = st(e, o, l), t !== null && (Me(t, e, l, r), Pr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            o = He(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = st(e, o, l), t !== null && (Me(t, e, l, r), Pr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue(),
            r = ct(e),
            l = He(n, r);
        l.tag = 2, t != null && (l.callback = t), t = st(e, l, r), t !== null && (Me(t, e, r, n), Pr(t, e, r))
    }
};

function zu(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, o) : !0
}

function Ta(e, t, n) {
    var r = !1,
        l = pt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Pe(o) : (l = pe(t) ? Pt : oe.current, r = t.contextTypes, o = (r = r != null) ? en(e, l) : pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Nu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cl.enqueueReplaceState(t, t.state, null)
}

function zo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, hi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Pe(o) : (o = pe(t) ? Pt : oe.current, l.context = en(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Po(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && cl.enqueueReplaceState(l, l.state, null), Kr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function ln(e, t) {
    try {
        var n = "",
            r = t;
        do n += Tc(r), r = r.return; while (r);
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

function Wl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function No(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var lf = typeof WeakMap == "function" ? WeakMap : Map;

function Ia(e, t, n) {
    n = He(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        br || (br = !0, Fo = r), No(e, t)
    }, n
}

function Ra(e, t, n) {
    n = He(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            No(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        No(e, t), typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function ju(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new lf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = wf.bind(null, e, t, n), t.then(e, e))
}

function Lu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Tu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = He(-1, 1), t.tag = 2, st(n, t, 1))), n.lanes |= 1), e)
}
var of = Xe.ReactCurrentOwner, de = !1;

function ie(e, t, n, r) {
    t.child = e === null ? sa(t, null, n, r) : nn(t, e.child, n, r)
}

function Iu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Zt(t, l), r = ki(e, t, n, r, o, l), n = Si(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ye(e, t, l)) : (F && n && si(t), t.flags |= 1, ie(e, t, r, l), t.child)
}

function Ru(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Ti(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ma(e, t, o, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Bn, n(i, r) && e.ref === t.ref) return Ye(e, t, l)
    }
    return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ma(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Bn(o, r) && e.ref === t.ref)
            if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0);
            else return t.lanes = e.lanes, Ye(e, t, l)
    }
    return jo(e, t, n, r, l)
}

function Da(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, D(qt, he), he |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, D(qt, he), he |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, D(qt, he), he |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, D(qt, he), he |= r;
    return ie(e, t, l, n), t.child
}

function Aa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function jo(e, t, n, r, l) {
    var o = pe(n) ? Pt : oe.current;
    return o = en(t, o), Zt(t, l), n = ki(e, t, n, r, o, l), r = Si(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ye(e, t, l)) : (F && r && si(t), t.flags |= 1, ie(e, t, n, l), t.child)
}

function Mu(e, t, n, r, l) {
    if (pe(n)) {
        var o = !0;
        Vr(t)
    } else o = !1;
    if (Zt(t, l), t.stateNode === null) jr(e, t), Ta(t, n, r), zo(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var s = i.context,
            a = n.contextType;
        typeof a == "object" && a !== null ? a = Pe(a) : (a = pe(n) ? Pt : oe.current, a = en(t, a));
        var p = n.getDerivedStateFromProps,
            h = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Nu(t, i, r, a), be = !1;
        var m = t.memoizedState;
        i.state = m, Kr(t, r, i, l), s = t.memoizedState, u !== r || m !== s || fe.current || be ? (typeof p == "function" && (Po(t, n, p, r), s = t.memoizedState), (u = be || zu(t, n, u, r, m, s, a)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, ca(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Le(t.type, u), i.props = a, h = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Pe(s) : (s = pe(n) ? Pt : oe.current, s = en(t, s));
        var w = n.getDerivedStateFromProps;
        (p = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Nu(t, i, r, s), be = !1, m = t.memoizedState, i.state = m, Kr(t, r, i, l);
        var k = t.memoizedState;
        u !== h || m !== k || fe.current || be ? (typeof w == "function" && (Po(t, n, w, r), k = t.memoizedState), (a = be || zu(t, n, a, r, m, k, s) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Lo(e, t, n, r, o, l)
}

function Lo(e, t, n, r, l, o) {
    Aa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && wu(t, n, !1), Ye(e, t, o);
    r = t.stateNode, of.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = nn(t, e.child, null, o), t.child = nn(t, null, u, o)) : ie(e, t, u, o), t.memoizedState = r.state, l && wu(t, n, !0), t.child
}

function Oa(e) {
    var t = e.stateNode;
    t.pendingContext ? yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yu(e, t.context, !1), gi(e, t.containerInfo)
}

function Du(e, t, n, r, l) {
    return tn(), ci(l), t.flags |= 256, ie(e, t, n, r), t.child
}
var To = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Io(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Fa(e, t, n) {
    var r = t.pendingProps,
        l = $.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D($, l & 1), e === null) return Eo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = pl(i, r, 0, null), e = _t(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Io(n), t.memoizedState = To, e) : Ei(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return uf(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = dt(u, o) : (o = _t(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Io(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = To, r
    }
    return o = e.child, e = o.sibling, r = dt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ei(e, t) {
    return t = pl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function vr(e, t, n, r) {
    return r !== null && ci(r), nn(t, e.child, null, n), e = Ei(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function uf(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Wl(Error(y(422))), vr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = pl({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = _t(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && nn(t, e.child, null, i), t.child.memoizedState = Io(i), t.memoizedState = To, o);
    if (!(t.mode & 1)) return vr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, o = Error(y(419)), r = Wl(o, r, void 0), vr(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0, de || u) {
        if (r = J, r !== null) {
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
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Me(r, e, l, -1))
        }
        return Li(), r = Wl(Error(y(421))), vr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ve = ut(l.nextSibling), ye = t, F = !0, Ie = null, e !== null && (xe[Ce++] = Ve, xe[Ce++] = We, xe[Ce++] = zt, Ve = e.id, We = e.overflow, zt = t), t = Ei(t, r.children), t.flags |= 4096, t)
}

function Au(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), _o(e.return, t, n)
}

function Hl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function $a(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (ie(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
            else if (e.tag === 19) Au(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (D($, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Yr(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hl(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Yr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Hl(t, !0, n, null, o);
            break;
        case "together":
            Hl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function jr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ye(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), jt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function sf(e, t, n) {
    switch (t.tag) {
        case 3:
            Oa(t), tn();
            break;
        case 5:
            da(t);
            break;
        case 1:
            pe(t.type) && Vr(t);
            break;
        case 4:
            gi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            D(qr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (D($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Fa(e, t, n) : (D($, $.current & 1), e = Ye(e, t, n), e !== null ? e.sibling : null);
            D($, $.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return $a(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D($, $.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Da(e, t, n)
    }
    return Ye(e, t, n)
}
var Ua, Ro, Ba, Qa;
Ua = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ro = function() {};
Ba = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Ct(Ue.current);
        var o = null;
        switch (n) {
            case "input":
                l = eo(e, l), r = eo(e, r), o = [];
                break;
            case "select":
                l = B({}, l, {
                    value: void 0
                }), r = B({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = ro(e, l), r = ro(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Br)
        }
        oo(n, r);
        var i;
        n = null;
        for (a in l)
            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
                if (a === "style") {
                    var u = l[a];
                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Mn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
        for (a in r) {
            var s = r[a];
            if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
                if (a === "style")
                    if (u) {
                        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                    } else n || (o || (o = []), o.push(a, n)), n = s;
            else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Mn.hasOwnProperty(a) ? (s != null && a === "onScroll" && A("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s))
        }
        n && (o = o || []).push("style", n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4)
    }
};
Qa = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function yn(e, t) {
    if (!F) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function af(e, t, n) {
    var r = t.pendingProps;
    switch (ai(t), t.tag) {
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
            return re(t), null;
        case 1:
            return pe(t.type) && Qr(), re(t), null;
        case 3:
            return r = t.stateNode, rn(), O(fe), O(oe), yi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ie !== null && (Bo(Ie), Ie = null))), Ro(e, t), re(t), null;
        case 5:
            vi(t);
            var l = Ct(qn.current);
            if (n = t.type, e !== null && t.stateNode != null) Ba(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(y(166));
                    return re(t), null
                }
                if (e = Ct(Ue.current), hr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Fe] = t, r[Wn] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            A("cancel", r), A("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            A("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Cn.length; l++) A(Cn[l], r);
                            break;
                        case "source":
                            A("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            A("error", r), A("load", r);
                            break;
                        case "details":
                            A("toggle", r);
                            break;
                        case "input":
                            Hi(r, o), A("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, A("invalid", r);
                            break;
                        case "textarea":
                            Gi(r, o), A("invalid", r)
                    }
                    oo(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && mr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && mr(r.textContent, u, e), l = ["children", "" + u]) : Mn.hasOwnProperty(i) && u != null && i === "onScroll" && A("scroll", r)
                        } switch (n) {
                        case "input":
                            ir(r), qi(r, o, !0);
                            break;
                        case "textarea":
                            ir(r), Ki(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Br)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Fe] = t, e[Wn] = r, Ua(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = io(n, r), n) {
                            case "dialog":
                                A("cancel", e), A("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                A("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Cn.length; l++) A(Cn[l], e);
                                l = r;
                                break;
                            case "source":
                                A("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                A("error", e), A("load", e), l = r;
                                break;
                            case "details":
                                A("toggle", e), l = r;
                                break;
                            case "input":
                                Hi(e, r), l = eo(e, r), A("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = B({}, r, {
                                    value: void 0
                                }), A("invalid", e);
                                break;
                            case "textarea":
                                Gi(e, r), l = ro(e, r), A("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        oo(n, l),
                        u = l;
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === "style" ? ws(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vs(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mn.hasOwnProperty(o) ? s != null && o === "onScroll" && A("scroll", e) : s != null && Ko(e, o, s, i))
                            } switch (n) {
                            case "input":
                                ir(e), qi(e, r, !1);
                                break;
                            case "textarea":
                                ir(e), Ki(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ft(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Gt(e, !!r.multiple, o, !1) : r.defaultValue != null && Gt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Br)
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
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return re(t), null;
        case 6:
            if (e && t.stateNode != null) Qa(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
                if (n = Ct(qn.current), Ct(Ue.current), hr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Fe] = t, (o = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
                        case 3:
                            mr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && mr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fe] = t, t.stateNode = r
            }
            return re(t), null;
        case 13:
            if (O($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (F && ve !== null && t.mode & 1 && !(t.flags & 128)) ia(), tn(), t.flags |= 98560, o = !1;
                else if (o = hr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(y(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
                        o[Fe] = t
                    } else tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    re(t), o = !1
                } else Ie !== null && (Bo(Ie), Ie = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? K === 0 && (K = 3) : Li())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
        case 4:
            return rn(), Ro(e, t), e === null && Qn(t.stateNode.containerInfo), re(t), null;
        case 10:
            return pi(t.type._context), re(t), null;
        case 17:
            return pe(t.type) && Qr(), re(t), null;
        case 19:
            if (O($), o = t.memoizedState, o === null) return re(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) yn(o, !1);
                else {
                    if (K !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Yr(e), i !== null) {
                                for (t.flags |= 128, yn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return D($, $.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && H() > on && (t.flags |= 128, r = !0, yn(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Yr(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !F) return re(t), null
                    } else 2 * H() - o.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128, r = !0, yn(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = H(), t.sibling = null, n = $.current, D($, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
        case 22:
        case 23:
            return ji(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(y(156, t.tag))
}

function cf(e, t) {
    switch (ai(t), t.tag) {
        case 1:
            return pe(t.type) && Qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return rn(), O(fe), O(oe), yi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return vi(t), null;
        case 13:
            if (O($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(y(340));
                tn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return O($), null;
        case 4:
            return rn(), null;
        case 10:
            return pi(t.type._context), null;
        case 22:
        case 23:
            return ji(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var yr = !1,
    le = !1,
    df = typeof WeakSet == "function" ? WeakSet : Set,
    x = null;

function Ht(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Q(e, t, r)
        } else n.current = null
}

function Mo(e, t, n) {
    try {
        n()
    } catch (r) {
        Q(e, t, r)
    }
}
var Ou = !1;

function ff(e, t) {
    if (vo = Fr, e = Gs(), ui(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    u = -1,
                    s = -1,
                    a = 0,
                    p = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (w = h.firstChild) !== null;) m = h, h = w;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++a === l && (u = i), m === o && ++p === r && (s = i), (w = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = w
                }
                n = u === -1 || s === -1 ? null : {
                    start: u,
                    end: s
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (yo = {
            focusedElem: e,
            selectionRange: n
        }, Fr = !1, x = t; x !== null;)
        if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
        else
            for (; x !== null;) {
                t = x;
                try {
                    var k = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var S = k.memoizedProps,
                                    N = k.memoizedState,
                                    d = t.stateNode,
                                    c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Le(t.type, S), N);
                                d.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(y(163))
                    }
                } catch (v) {
                    Q(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, x = e;
                    break
                }
                x = t.return
            }
    return k = Ou, Ou = !1, k
}

function Ln(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Mo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function dl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
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

function Do(e) {
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

function Va(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Va(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fe], delete t[Wn], delete t[So], delete t[Gd], delete t[Kd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Wa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Fu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Wa(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ao(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Br));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ao(e, t, n), e = e.sibling; e !== null;) Ao(e, t, n), e = e.sibling
}

function Oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Oo(e, t, n), e = e.sibling; e !== null;) Oo(e, t, n), e = e.sibling
}
var b = null,
    Te = !1;

function Ze(e, t, n) {
    for (n = n.child; n !== null;) Ha(e, t, n), n = n.sibling
}

function Ha(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function") try {
        $e.onCommitFiberUnmount(rl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            le || Ht(n, t);
        case 6:
            var r = b,
                l = Te;
            b = null, Ze(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
            break;
        case 18:
            b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Fl(e.parentNode, n) : e.nodeType === 1 && Fl(e, n), $n(e)) : Fl(b, n.stateNode));
            break;
        case 4:
            r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, Ze(e, t, n), b = r, Te = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Mo(n, t, i), l = l.next
                } while (l !== r)
            }
            Ze(e, t, n);
            break;
        case 1:
            if (!le && (Ht(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                Q(n, t, u)
            }
            Ze(e, t, n);
            break;
        case 21:
            Ze(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, Ze(e, t, n), le = r) : Ze(e, t, n);
            break;
        default:
            Ze(e, t, n)
    }
}

function $u(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new df), t.forEach(function(r) {
            var l = Sf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function je(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    u = i;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            b = u.stateNode, Te = !1;
                            break e;
                        case 3:
                            b = u.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            b = u.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    u = u.return
                }
                if (b === null) throw Error(y(160));
                Ha(o, i, l), b = null, Te = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (a) {
                Q(l, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) qa(t, e), t = t.sibling
}

function qa(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (je(t, e), Ae(e), r & 4) {
                try {
                    Ln(3, e, e.return), dl(3, e)
                } catch (S) {
                    Q(e, e.return, S)
                }
                try {
                    Ln(5, e, e.return)
                } catch (S) {
                    Q(e, e.return, S)
                }
            }
            break;
        case 1:
            je(t, e), Ae(e), r & 512 && n !== null && Ht(n, n.return);
            break;
        case 5:
            if (je(t, e), Ae(e), r & 512 && n !== null && Ht(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Dn(l, "")
                } catch (S) {
                    Q(e, e.return, S)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    u === "input" && o.type === "radio" && o.name != null && ms(l, o), io(u, i);
                    var a = io(u, o);
                    for (i = 0; i < s.length; i += 2) {
                        var p = s[i],
                            h = s[i + 1];
                        p === "style" ? ws(l, h) : p === "dangerouslySetInnerHTML" ? vs(l, h) : p === "children" ? Dn(l, h) : Ko(l, p, h, a)
                    }
                    switch (u) {
                        case "input":
                            to(l, o);
                            break;
                        case "textarea":
                            hs(l, o);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var w = o.value;
                            w != null ? Gt(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? Gt(l, !!o.multiple, o.defaultValue, !0) : Gt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Wn] = o
                } catch (S) {
                    Q(e, e.return, S)
                }
            }
            break;
        case 6:
            if (je(t, e), Ae(e), r & 4) {
                if (e.stateNode === null) throw Error(y(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (S) {
                    Q(e, e.return, S)
                }
            }
            break;
        case 3:
            if (je(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                $n(t.containerInfo)
            } catch (S) {
                Q(e, e.return, S)
            }
            break;
        case 4:
            je(t, e), Ae(e);
            break;
        case 13:
            je(t, e), Ae(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (zi = H())), r & 4 && $u(e);
            break;
        case 22:
            if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (a = le) || p, je(t, e), le = a) : je(t, e), Ae(e), r & 8192) {
                if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1)
                    for (x = e, p = e.child; p !== null;) {
                        for (h = x = p; x !== null;) {
                            switch (m = x, w = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ln(4, m, m.return);
                                    break;
                                case 1:
                                    Ht(m, m.return);
                                    var k = m.stateNode;
                                    if (typeof k.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount()
                                        } catch (S) {
                                            Q(r, n, S)
                                        }
                                    }
                                    break;
                                case 5:
                                    Ht(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Bu(h);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = m, x = w) : Bu(h)
                        }
                        p = p.sibling
                    }
                e: for (p = null, h = e;;) {
                    if (h.tag === 5) {
                        if (p === null) {
                            p = h;
                            try {
                                l = h.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ys("display", i))
                            } catch (S) {
                                Q(e, e.return, S)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (p === null) try {
                            h.stateNode.nodeValue = a ? "" : h.memoizedProps
                        } catch (S) {
                            Q(e, e.return, S)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        p === h && (p = null), h = h.return
                    }
                    p === h && (p = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            je(t, e), Ae(e), r & 4 && $u(e);
            break;
        case 21:
            break;
        default:
            je(t, e), Ae(e)
    }
}

function Ae(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Wa(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(y(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Dn(l, ""), r.flags &= -33);
                    var o = Fu(e);
                    Oo(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Fu(e);
                    Ao(e, u, i);
                    break;
                default:
                    throw Error(y(161))
            }
        }
        catch (s) {
            Q(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function pf(e, t, n) {
    x = e, Ga(e)
}

function Ga(e, t, n) {
    for (var r = (e.mode & 1) !== 0; x !== null;) {
        var l = x,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || yr;
            if (!i) {
                var u = l.alternate,
                    s = u !== null && u.memoizedState !== null || le;
                u = yr;
                var a = le;
                if (yr = i, (le = s) && !a)
                    for (x = l; x !== null;) i = x, s = i.child, i.tag === 22 && i.memoizedState !== null ? Qu(l) : s !== null ? (s.return = i, x = s) : Qu(l);
                for (; o !== null;) x = o, Ga(o), o = o.sibling;
                x = l, yr = u, le = a
            }
            Uu(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, x = o) : Uu(e)
    }
}

function Uu(e) {
    for (; x !== null;) {
        var t = x;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || dl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && Eu(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Eu(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
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
                            var a = t.alternate;
                            if (a !== null) {
                                var p = a.memoizedState;
                                if (p !== null) {
                                    var h = p.dehydrated;
                                    h !== null && $n(h)
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
                        throw Error(y(163))
                }
                le || t.flags & 512 && Do(t)
            } catch (m) {
                Q(t, t.return, m)
            }
        }
        if (t === e) {
            x = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, x = n;
            break
        }
        x = t.return
    }
}

function Bu(e) {
    for (; x !== null;) {
        var t = x;
        if (t === e) {
            x = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, x = n;
            break
        }
        x = t.return
    }
}

function Qu(e) {
    for (; x !== null;) {
        var t = x;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        dl(4, t)
                    } catch (s) {
                        Q(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            Q(t, l, s)
                        }
                    }
                    var o = t.return;
                    try {
                        Do(t)
                    } catch (s) {
                        Q(t, o, s)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Do(t)
                    } catch (s) {
                        Q(t, i, s)
                    }
            }
        } catch (s) {
            Q(t, t.return, s)
        }
        if (t === e) {
            x = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, x = u;
            break
        }
        x = t.return
    }
}
var mf = Math.ceil,
    Jr = Xe.ReactCurrentDispatcher,
    _i = Xe.ReactCurrentOwner,
    _e = Xe.ReactCurrentBatchConfig,
    R = 0,
    J = null,
    q = null,
    ee = 0,
    he = 0,
    qt = ht(0),
    K = 0,
    Xn = null,
    jt = 0,
    fl = 0,
    Pi = 0,
    Tn = null,
    ce = null,
    zi = 0,
    on = 1 / 0,
    Be = null,
    br = !1,
    Fo = null,
    at = null,
    wr = !1,
    rt = null,
    el = 0,
    In = 0,
    $o = null,
    Lr = -1,
    Tr = 0;

function ue() {
    return R & 6 ? H() : Lr !== -1 ? Lr : Lr = H()
}

function ct(e) {
    return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : Xd.transition !== null ? (Tr === 0 && (Tr = Ts()), Tr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fs(e.type)), e) : 1
}

function Me(e, t, n, r) {
    if (50 < In) throw In = 0, $o = null, Error(y(185));
    Jn(e, n, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (fl |= n), K === 4 && tt(e, ee)), me(e, r), n === 1 && R === 0 && !(t.mode & 1) && (on = H() + 500, sl && gt()))
}

function me(e, t) {
    var n = e.callbackNode;
    Xc(e, t);
    var r = Or(e, e === J ? ee : 0);
    if (r === 0) n !== null && Zi(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Zi(n), t === 1) e.tag === 0 ? Yd(Vu.bind(null, e)) : ra(Vu.bind(null, e)), Hd(function() {
            !(R & 6) && gt()
        }), n = null;
        else {
            switch (Is(r)) {
                case 1:
                    n = bo;
                    break;
                case 4:
                    n = js;
                    break;
                case 16:
                    n = Ar;
                    break;
                case 536870912:
                    n = Ls;
                    break;
                default:
                    n = Ar
            }
            n = tc(n, Ka.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ka(e, t) {
    if (Lr = -1, Tr = 0, R & 6) throw Error(y(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n) return null;
    var r = Or(e, e === J ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
    else {
        t = r;
        var l = R;
        R |= 2;
        var o = Xa();
        (J !== e || ee !== t) && (Be = null, on = H() + 500, Et(e, t));
        do try {
            vf();
            break
        } catch (u) {
            Ya(e, u)
        }
        while (1);
        fi(), Jr.current = o, R = l, q !== null ? t = 0 : (J = null, ee = 0, t = K)
    }
    if (t !== 0) {
        if (t === 2 && (l = fo(e), l !== 0 && (r = l, t = Uo(e, l))), t === 1) throw n = Xn, Et(e, 0), tt(e, r), me(e, H()), n;
        if (t === 6) tt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !hf(l) && (t = tl(e, r), t === 2 && (o = fo(e), o !== 0 && (r = o, t = Uo(e, o))), t === 1)) throw n = Xn, Et(e, 0), tt(e, r), me(e, H()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    kt(e, ce, Be);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = zi + 500 - H(), 10 < t)) {
                        if (Or(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ue(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = ko(kt.bind(null, e, ce, Be), t);
                        break
                    }
                    kt(e, ce, Be);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Re(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = H() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * mf(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ko(kt.bind(null, e, ce, Be), r);
                        break
                    }
                    kt(e, ce, Be);
                    break;
                case 5:
                    kt(e, ce, Be);
                    break;
                default:
                    throw Error(y(329))
            }
        }
    }
    return me(e, H()), e.callbackNode === n ? Ka.bind(null, e) : null
}

function Uo(e, t) {
    var n = Tn;
    return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), e = tl(e, t), e !== 2 && (t = ce, ce = n, t !== null && Bo(t)), e
}

function Bo(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}

function hf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!De(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~Pi, t &= ~fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Re(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Vu(e) {
    if (R & 6) throw Error(y(327));
    Jt();
    var t = Or(e, 0);
    if (!(t & 1)) return me(e, H()), null;
    var n = tl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = fo(e);
        r !== 0 && (t = r, n = Uo(e, r))
    }
    if (n === 1) throw n = Xn, Et(e, 0), tt(e, t), me(e, H()), n;
    if (n === 6) throw Error(y(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, kt(e, ce, Be), me(e, H()), null
}

function Ni(e, t) {
    var n = R;
    R |= 1;
    try {
        return e(t)
    } finally {
        R = n, R === 0 && (on = H() + 500, sl && gt())
    }
}

function Lt(e) {
    rt !== null && rt.tag === 0 && !(R & 6) && Jt();
    var t = R;
    R |= 1;
    var n = _e.transition,
        r = M;
    try {
        if (_e.transition = null, M = 1, e) return e()
    } finally {
        M = r, _e.transition = n, R = t, !(R & 6) && gt()
    }
}

function ji() {
    he = qt.current, O(qt)
}

function Et(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Wd(n)), q !== null)
        for (n = q.return; n !== null;) {
            var r = n;
            switch (ai(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Qr();
                    break;
                case 3:
                    rn(), O(fe), O(oe), yi();
                    break;
                case 5:
                    vi(r);
                    break;
                case 4:
                    rn();
                    break;
                case 13:
                    O($);
                    break;
                case 19:
                    O($);
                    break;
                case 10:
                    pi(r.type._context);
                    break;
                case 22:
                case 23:
                    ji()
            }
            n = n.return
        }
    if (J = e, q = e = dt(e.current, null), ee = he = t, K = 0, Xn = null, Pi = fl = jt = 0, ce = Tn = null, xt !== null) {
        for (t = 0; t < xt.length; t++)
            if (n = xt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            } xt = null
    }
    return e
}

function Ya(e, t) {
    do {
        var n = q;
        try {
            if (fi(), zr.current = Zr, Xr) {
                for (var r = U.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Xr = !1
            }
            if (Nt = 0, X = G = U = null, jn = !1, Gn = 0, _i.current = null, n === null || n.return === null) {
                K = 1, Xn = t, q = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    s = t;
                if (t = ee, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var a = s,
                        p = u,
                        h = p.tag;
                    if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = p.alternate;
                        m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null)
                    }
                    var w = Lu(i);
                    if (w !== null) {
                        w.flags &= -257, Tu(w, i, u, o, t), w.mode & 1 && ju(o, a, t), t = w, s = a;
                        var k = t.updateQueue;
                        if (k === null) {
                            var S = new Set;
                            S.add(s), t.updateQueue = S
                        } else k.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ju(o, a, t), Li();
                            break e
                        }
                        s = Error(y(426))
                    }
                } else if (F && u.mode & 1) {
                    var N = Lu(i);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256), Tu(N, i, u, o, t), ci(ln(s, u));
                        break e
                    }
                }
                o = s = ln(s, u),
                K !== 4 && (K = 2),
                Tn === null ? Tn = [o] : Tn.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var d = Ia(o, s, t);
                            Cu(o, d);
                            break e;
                        case 1:
                            u = s;
                            var c = o.type,
                                f = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (at === null || !at.has(f)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var v = Ra(o, u, t);
                                Cu(o, v);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ja(n)
        } catch (C) {
            t = C, q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (1)
}

function Xa() {
    var e = Jr.current;
    return Jr.current = Zr, e === null ? Zr : e
}

function Li() {
    (K === 0 || K === 3 || K === 2) && (K = 4), J === null || !(jt & 268435455) && !(fl & 268435455) || tt(J, ee)
}

function tl(e, t) {
    var n = R;
    R |= 2;
    var r = Xa();
    (J !== e || ee !== t) && (Be = null, Et(e, t));
    do try {
        gf();
        break
    } catch (l) {
        Ya(e, l)
    }
    while (1);
    if (fi(), R = n, Jr.current = r, q !== null) throw Error(y(261));
    return J = null, ee = 0, K
}

function gf() {
    for (; q !== null;) Za(q)
}

function vf() {
    for (; q !== null && !Bc();) Za(q)
}

function Za(e) {
    var t = ec(e.alternate, e, he);
    e.memoizedProps = e.pendingProps, t === null ? Ja(e) : q = t, _i.current = null
}

function Ja(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = cf(n, t), n !== null) {
                n.flags &= 32767, q = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                K = 6, q = null;
                return
            }
        } else if (n = af(n, t, he), n !== null) {
            q = n;
            return
        }
        if (t = t.sibling, t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    K === 0 && (K = 5)
}

function kt(e, t, n) {
    var r = M,
        l = _e.transition;
    try {
        _e.transition = null, M = 1, yf(e, t, n, r)
    } finally {
        _e.transition = l, M = r
    }
    return null
}

function yf(e, t, n, r) {
    do Jt(); while (rt !== null);
    if (R & 6) throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Zc(e, o), e === J && (q = J = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || wr || (wr = !0, tc(Ar, function() {
            return Jt(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = _e.transition, _e.transition = null;
        var i = M;
        M = 1;
        var u = R;
        R |= 4, _i.current = null, ff(e, n), qa(n, e), Od(yo), Fr = !!vo, yo = vo = null, e.current = n, pf(n), Qc(), R = u, M = i, _e.transition = o
    } else e.current = n;
    if (wr && (wr = !1, rt = e, el = l), o = e.pendingLanes, o === 0 && (at = null), Hc(n.stateNode), me(e, H()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (br) throw br = !1, e = Fo, Fo = null, e;
    return el & 1 && e.tag !== 0 && Jt(), o = e.pendingLanes, o & 1 ? e === $o ? In++ : (In = 0, $o = e) : In = 0, gt(), null
}

function Jt() {
    if (rt !== null) {
        var e = Is(el),
            t = _e.transition,
            n = M;
        try {
            if (_e.transition = null, M = 16 > e ? 16 : e, rt === null) var r = !1;
            else {
                if (e = rt, rt = null, el = 0, R & 6) throw Error(y(331));
                var l = R;
                for (R |= 4, x = e.current; x !== null;) {
                    var o = x,
                        i = o.child;
                    if (x.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s];
                                for (x = a; x !== null;) {
                                    var p = x;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ln(8, p, o)
                                    }
                                    var h = p.child;
                                    if (h !== null) h.return = p, x = h;
                                    else
                                        for (; x !== null;) {
                                            p = x;
                                            var m = p.sibling,
                                                w = p.return;
                                            if (Va(p), p === a) {
                                                x = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = w, x = m;
                                                break
                                            }
                                            x = w
                                        }
                                }
                            }
                            var k = o.alternate;
                            if (k !== null) {
                                var S = k.child;
                                if (S !== null) {
                                    k.child = null;
                                    do {
                                        var N = S.sibling;
                                        S.sibling = null, S = N
                                    } while (S !== null)
                                }
                            }
                            x = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, x = i;
                    else e: for (; x !== null;) {
                        if (o = x, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ln(9, o, o.return)
                        }
                        var d = o.sibling;
                        if (d !== null) {
                            d.return = o.return, x = d;
                            break e
                        }
                        x = o.return
                    }
                }
                var c = e.current;
                for (x = c; x !== null;) {
                    i = x;
                    var f = i.child;
                    if (i.subtreeFlags & 2064 && f !== null) f.return = i, x = f;
                    else e: for (i = c; x !== null;) {
                        if (u = x, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    dl(9, u)
                            }
                        } catch (C) {
                            Q(u, u.return, C)
                        }
                        if (u === i) {
                            x = null;
                            break e
                        }
                        var v = u.sibling;
                        if (v !== null) {
                            v.return = u.return, x = v;
                            break e
                        }
                        x = u.return
                    }
                }
                if (R = l, gt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
                    $e.onPostCommitFiberRoot(rl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            M = n, _e.transition = t
        }
    }
    return !1
}

function Wu(e, t, n) {
    t = ln(n, t), t = Ia(e, t, 1), e = st(e, t, 1), t = ue(), e !== null && (Jn(e, 1, t), me(e, t))
}

function Q(e, t, n) {
    if (e.tag === 3) Wu(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Wu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = ln(n, e), e = Ra(t, e, 1), t = st(t, e, 1), e = ue(), t !== null && (Jn(t, 1, e), me(t, e));
                    break
                }
            }
            t = t.return
        }
}

function wf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, J === e && (ee & n) === n && (K === 4 || K === 3 && (ee & 130023424) === ee && 500 > H() - zi ? Et(e, 0) : Pi |= n), me(e, t)
}

function ba(e, t) {
    t === 0 && (e.mode & 1 ? (t = ar, ar <<= 1, !(ar & 130023424) && (ar = 4194304)) : t = 1);
    var n = ue();
    e = Ke(e, t), e !== null && (Jn(e, t, n), me(e, n))
}

function kf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), ba(e, n)
}

function Sf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314))
    }
    r !== null && r.delete(t), ba(e, n)
}
var ec;
ec = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current) de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, sf(e, t, n);
            de = !!(e.flags & 131072)
        }
    else de = !1, F && t.flags & 1048576 && la(t, Hr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            jr(e, t), e = t.pendingProps;
            var l = en(t, oe.current);
            Zt(t, n), l = ki(null, t, r, e, l, n);
            var o = Si();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = !0, Vr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, hi(t), l.updater = cl, t.stateNode = l, l._reactInternals = t, zo(t, r, e, n), t = Lo(null, t, r, !0, o, n)) : (t.tag = 0, F && o && si(t), ie(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (jr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Cf(r), e = Le(r, e), l) {
                    case 0:
                        t = jo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Mu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Iu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ru(null, t, r, Le(r.type, e), n);
                        break e
                }
                throw Error(y(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), jo(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Mu(e, t, r, l, n);
        case 3:
            e: {
                if (Oa(t), e === null) throw Error(y(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                ca(e, t),
                Kr(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = ln(Error(y(423)), t), t = Du(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = ln(Error(y(424)), t), t = Du(e, t, r, n, l);
                    break e
                } else
                    for (ve = ut(t.stateNode.containerInfo.firstChild), ye = t, F = !0, Ie = null, n = sa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (tn(), r === l) {
                        t = Ye(e, t, n);
                        break e
                    }
                    ie(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return da(t), e === null && Eo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, wo(r, l) ? i = null : o !== null && wo(r, o) && (t.flags |= 32), Aa(e, t), ie(e, t, i, n), t.child;
        case 6:
            return e === null && Eo(t), null;
        case 13:
            return Fa(e, t, n);
        case 4:
            return gi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nn(t, null, r, n) : ie(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Iu(e, t, r, l, n);
        case 7:
            return ie(e, t, t.pendingProps, n), t.child;
        case 8:
            return ie(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ie(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, D(qr, r._currentValue), r._currentValue = i, o !== null)
                    if (De(o.value, i)) {
                        if (o.children === l.children && !fe.current) {
                            t = Ye(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var s = u.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            s = He(-1, n & -n), s.tag = 2;
                                            var a = o.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var p = a.pending;
                                                p === null ? s.next = s : (s.next = p.next, p.next = s), a.pending = s
                                            }
                                        }
                                        o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), _o(o.return, n, t), u.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(y(341));
                                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), _o(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                ie(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Zt(t, n), l = Pe(l), r = r(l), t.flags |= 1, ie(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Ru(e, t, r, l, n);
        case 15:
            return Ma(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), jr(e, t), t.tag = 1, pe(r) ? (e = !0, Vr(t)) : e = !1, Zt(t, n), Ta(t, r, l), zo(t, r, l, n), Lo(null, t, r, !0, e, n);
        case 19:
            return $a(e, t, n);
        case 22:
            return Da(e, t, n)
    }
    throw Error(y(156, t.tag))
};

function tc(e, t) {
    return Ns(e, t)
}

function xf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ee(e, t, n, r) {
    return new xf(e, t, n, r)
}

function Ti(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Cf(e) {
    if (typeof e == "function") return Ti(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Xo) return 11;
        if (e === Zo) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ee(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ir(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Ti(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case At:
            return _t(n.children, l, o, t);
        case Yo:
            i = 8, l |= 8;
            break;
        case Xl:
            return e = Ee(12, n, t, l | 2), e.elementType = Xl, e.lanes = o, e;
        case Zl:
            return e = Ee(13, n, t, l), e.elementType = Zl, e.lanes = o, e;
        case Jl:
            return e = Ee(19, n, t, l), e.elementType = Jl, e.lanes = o, e;
        case ds:
            return pl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case as:
                    i = 10;
                    break e;
                case cs:
                    i = 9;
                    break e;
                case Xo:
                    i = 11;
                    break e;
                case Zo:
                    i = 14;
                    break e;
                case Je:
                    i = 16, r = null;
                    break e
            }
            throw Error(y(130, e == null ? e : typeof e, ""))
    }
    return t = Ee(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function _t(e, t, n, r) {
    return e = Ee(7, e, r, t), e.lanes = n, e
}

function pl(e, t, n, r) {
    return e = Ee(22, e, r, t), e.elementType = ds, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ql(e, t, n) {
    return e = Ee(6, e, null, t), e.lanes = n, e
}

function Gl(e, t, n) {
    return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Ef(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Ii(e, t, n, r, l, o, i, u, s) {
    return e = new Ef(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ee(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, hi(o), e
}

function _f(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Dt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function nc(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
        if (It(e) !== e || e.tag !== 1) throw Error(y(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n)) return na(e, n, t)
    }
    return t
}

function rc(e, t, n, r, l, o, i, u, s) {
    return e = Ii(n, r, !0, e, l, o, i, u, s), e.context = nc(null), n = e.current, r = ue(), l = ct(n), o = He(r, l), o.callback = t ?? null, st(n, o, l), e.current.lanes = l, Jn(e, l, r), me(e, r), e
}

function ml(e, t, n, r) {
    var l = t.current,
        o = ue(),
        i = ct(l);
    return n = nc(n), t.context === null ? t.context = n : t.pendingContext = n, t = He(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = st(l, t, i), e !== null && (Me(e, l, i, o), Pr(e, l, i)), i
}

function nl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Hu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ri(e, t) {
    Hu(e, t), (e = e.alternate) && Hu(e, t)
}

function Pf() {
    return null
}
var lc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Mi(e) {
    this._internalRoot = e
}
hl.prototype.render = Mi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    ml(e, t, null, null)
};
hl.prototype.unmount = Mi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Lt(function() {
            ml(null, e, null, null)
        }), t[Ge] = null
    }
};

function hl(e) {
    this._internalRoot = e
}
hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ds();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Os(e)
    }
};

function Di(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function qu() {}

function zf(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var a = nl(i);
                o.call(a)
            }
        }
        var i = rc(t, r, e, 0, null, !1, !1, "", qu);
        return e._reactRootContainer = i, e[Ge] = i.current, Qn(e.nodeType === 8 ? e.parentNode : e), Lt(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var a = nl(s);
            u.call(a)
        }
    }
    var s = Ii(e, 0, !1, null, null, !1, !1, "", qu);
    return e._reactRootContainer = s, e[Ge] = s.current, Qn(e.nodeType === 8 ? e.parentNode : e), Lt(function() {
        ml(t, s, n, r)
    }), s
}

function vl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = nl(i);
                u.call(s)
            }
        }
        ml(t, i, e, l)
    } else i = zf(n, t, e, l, r);
    return nl(i)
}
Rs = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = xn(t.pendingLanes);
                n !== 0 && (ei(t, n | 1), me(t, H()), !(R & 6) && (on = H() + 500, gt()))
            }
            break;
        case 13:
            Lt(function() {
                var r = Ke(e, 1);
                if (r !== null) {
                    var l = ue();
                    Me(r, e, 1, l)
                }
            }), Ri(e, 1)
    }
};
ti = function(e) {
    if (e.tag === 13) {
        var t = Ke(e, 134217728);
        if (t !== null) {
            var n = ue();
            Me(t, e, 134217728, n)
        }
        Ri(e, 134217728)
    }
};
Ms = function(e) {
    if (e.tag === 13) {
        var t = ct(e),
            n = Ke(e, t);
        if (n !== null) {
            var r = ue();
            Me(n, e, t, r)
        }
        Ri(e, t)
    }
};
Ds = function() {
    return M
};
As = function(e, t) {
    var n = M;
    try {
        return M = e, t()
    } finally {
        M = n
    }
};
so = function(e, t, n) {
    switch (t) {
        case "input":
            if (to(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ul(r);
                        if (!l) throw Error(y(90));
                        ps(r), to(r, l)
                    }
                }
            }
            break;
        case "textarea":
            hs(e, n);
            break;
        case "select":
            t = n.value, t != null && Gt(e, !!n.multiple, t, !1)
    }
};
xs = Ni;
Cs = Lt;
var Nf = {
        usingClientEntryPoint: !1,
        Events: [er, Ut, ul, ks, Ss, Ni]
    },
    wn = {
        findFiberByHostInstance: St,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    jf = {
        bundleType: wn.bundleType,
        version: wn.version,
        rendererPackageName: wn.rendererPackageName,
        rendererConfig: wn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ps(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: wn.findFiberByHostInstance || Pf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kr.isDisabled && kr.supportsFiber) try {
        rl = kr.inject(jf), $e = kr
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf;
ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Di(t)) throw Error(y(200));
    return _f(e, t, null, n)
};
ke.createRoot = function(e, t) {
    if (!Di(e)) throw Error(y(299));
    var n = !1,
        r = "",
        l = lc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ii(e, 1, !1, null, null, n, !1, r, l), e[Ge] = t.current, Qn(e.nodeType === 8 ? e.parentNode : e), new Mi(t)
};
ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
    return e = Ps(t), e = e === null ? null : e.stateNode, e
};
ke.flushSync = function(e) {
    return Lt(e)
};
ke.hydrate = function(e, t, n) {
    if (!gl(t)) throw Error(y(200));
    return vl(null, e, t, !0, n)
};
ke.hydrateRoot = function(e, t, n) {
    if (!Di(e)) throw Error(y(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = lc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = rc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ge] = t.current, Qn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new hl(t)
};
ke.render = function(e, t, n) {
    if (!gl(t)) throw Error(y(200));
    return vl(null, e, t, !1, n)
};
ke.unmountComponentAtNode = function(e) {
    if (!gl(e)) throw Error(y(40));
    return e._reactRootContainer ? (Lt(function() {
        vl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ge] = null
        })
    }), !0) : !1
};
ke.unstable_batchedUpdates = Ni;
ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gl(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return vl(e, t, n, !1, r)
};
ke.version = "18.3.1-next-f1338f8080-20240426";

function oc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)
    } catch (e) {
        console.error(e)
    }
}
oc(), Yu.exports = ke;
var Lf = Yu.exports,
    Gu = Lf;
Kl.createRoot = Gu.createRoot, Kl.hydrateRoot = Gu.hydrateRoot;
var ic = {
        exports: {}
    },
    yl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tf = ge,
    If = Symbol.for("react.element"),
    Rf = Symbol.for("react.fragment"),
    Mf = Object.prototype.hasOwnProperty,
    Df = Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Af = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function uc(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Mf.call(t, r) && !Af.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: If,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Df.current
    }
}
yl.Fragment = Rf;
yl.jsx = uc;
yl.jsxs = uc;
ic.exports = yl;
var g = ic.exports;
const Z = (e, t = 5e3) => new Promise((n, r) => {
        const l = setInterval(() => {
            const o = document.querySelector(e);
            o && (clearInterval(l), n(o))
        }, 100);
        setTimeout(() => {
            clearInterval(l), r(new Error(`Element not found within ${t}ms`))
        }, t)
    }),
    Ai = async () => (await Z('button.cds-iconButton-small[aria-label^="Open"]', 500).then(t => t.click()).catch(t => {}), await Z('button.nostyle.link-button[aria-expanded="false"]', 1e3).catch(t => {}), document.querySelectorAll('button.nostyle.link-button[aria-expanded="false"]').forEach(async t => {
        t.click()
    }), await Z('.rc-LessonItems li a, [data-testid="named-item-list-list"] li a', 1e3).catch(t => {}), Array.from(document.querySelectorAll('.rc-LessonItems li a, [data-testid="named-item-list-list"] li a')).map(t => {
        var r, l;
        let n = JSON.parse(t.getAttribute("data-click-value") ?? "{}");
        return n.completed = (r = t.textContent) == null ? void 0 : r.includes("Completed"), n.locked = (l = t.textContent) == null ? void 0 : l.includes("Locked"), n
    })), Of = async () => {
        var n, r, l, o, i;
        const e = window.location.href.split("/")[4];
        let t = await fetch(`https://www.coursera.org/api/onDemandCourseMaterials.v2/?q=slug&slug=${e}&includes=modules%2Clessons%2CpassableItemGroups%2CpassableItemGroupChoices%2CpassableLessonElements%2Citems%2Ctracks%2CgradePolicy%2CgradingParameters%2CembeddedContentMapping&fields=moduleIds%2ConDemandCourseMaterialModules.v1(name%2Cslug%2Cdescription%2CtimeCommitment%2ClessonIds%2Coptional%2ClearningObjectives)%2ConDemandCourseMaterialLessons.v1(name%2Cslug%2CtimeCommitment%2CelementIds%2Coptional%2CtrackId)%2ConDemandCourseMaterialPassableItemGroups.v1(requiredPassedCount%2CpassableItemGroupChoiceIds%2CtrackId)%2ConDemandCourseMaterialPassableItemGroupChoices.v1(name%2Cdescription%2CitemIds)%2ConDemandCourseMaterialPassableLessonElements.v1(gradingWeight%2CisRequiredForPassing)%2ConDemandCourseMaterialItems.v2(name%2CoriginalName%2Cslug%2CtimeCommitment%2CcontentSummary%2CisLocked%2ClockableByItem%2CitemLockedReasonCode%2CtrackId%2ClockedStatus%2CitemLockSummary)%2ConDemandCourseMaterialTracks.v1(passablesCount)%2ConDemandGradingParameters.v1(gradedAssignmentGroups)%2CcontentAtomRelations.v1(embeddedContentSourceCourseId%2CsubContainerId)&showLockedItems=true`, {
            method: "GET"
        }).then(u => u.json());
        return console.log((n = t == null ? void 0 : t.linked) == null ? void 0 : n["onDemandCourseMaterialItems.v2"]), {
            data: (r = t == null ? void 0 : t.linked) == null ? void 0 : r["onDemandCourseMaterialItems.v2"],
            courseId: (i = (o = (l = t == null ? void 0 : t.linked) == null ? void 0 : l["onDemandCourseMaterialGradePolicy.v1"]) == null ? void 0 : o[0]) == null ? void 0 : i.id,
            slug: e
        }
    }, Ff = async () => {
        var o;
        if (!location.href.includes("/learn/")) {
            alert("This is not a course page, please go to your course page first");
            return
        }
        const {
            data: e,
            courseId: t,
            slug: n
        } = await Of(), r = (o = document.querySelector("body > script:nth-child(3)")) == null ? void 0 : o.innerText.match(/(\d+~[A-Za-z0-9-_]+)/), l = r == null ? void 0 : r[1].split("~")[0];
        e.forEach(async i => {
            if (i.contentSummary.typeName == "lecture") {
                const u = await fetch(`https://www.coursera.org/api/opencourse.v1/user/${l}/course/${n}/item/${i.id}/lecture/videoEvents/ended?autoEnroll=false`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        contentRequestBody: {}
                    })
                }).then(s => s.json());
                console.log(u)
            } else if (i.contentSummary.typeName == "supplement") {
                const u = await fetch("https://www.coursera.org/api/onDemandSupplementCompletions.v1", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        courseId: t,
                        itemId: i.id,
                        userId: Number(l)
                    })
                }).then(s => s.json());
                console.log(u)
            } else if (i.contentSummary.typeName == "ungradedLti") {
                const u = await fetch("https://www.coursera.org/api/onDemandLtiUngradedLaunches.v1/?fields=endpointUrl%2CauthRequestUrl%2CsignedProperties", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        courseId: t,
                        itemId: i.id,
                        learnerId: Number(l)
                    })
                }).then(s => s.json());
                console.log(u)
            } else if (i.contentSummary.typeName == "ungradedWidget") {
                const u = await fetch(`https://www.coursera.org/api/onDemandSessionMemberships.v1?courseId=${t}&userId=${l}&q=activeByUserAndCourse&fields=id,createdAt,sessionId,userId`).then(s => s.json()).then(s => {
                    var a, p;
                    return (p = (a = s == null ? void 0 : s.elements) == null ? void 0 : a[0]) == null ? void 0 : p.sessionId
                });
                await fetch(`https://www.coursera.org/api/onDemandWidgetProgress.v1/${l}~${t}~${i.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        progressState: "Completed",
                        sessionId: u
                    })
                }).then(s => s.json())
            }
        }), await new Promise(i => setTimeout(i, 1e3)), location.reload()
    }, Ku = async (e, t = !1) => {
        if (!location.href.includes("/learn/")) {
            alert("This is not a course page, please go to your course page first");
            return
        }
        if (!location.href.includes("/assignment-submission") && !location.href.includes("/exam") && !location.href.includes("/quiz")) {
            const i = await Ai();
            let u = !1;
            if (i.forEach(s => {
                    !s.completed && !s.locked && (s.href.includes("/assignment-submission") || s.href.includes("/exam") || s.href.includes("/quiz")) && (u = !0, location.href = s.href)
                }), !u) return
        }
        const {
            isAutoSubmitQuiz: n
        } = await chrome.storage.local.get("isAutoSubmitQuiz");
        await chrome.storage.local.get("isDebugMode");
        let r;
        r = await fetch(`https://ecec123ecec.github.io/coursera-db/${e}.json`, {
            cache: "no-store"
        }).then(i => i.json()).catch(i => {}), location.href.includes("/attempt") || (await Z("button[data-testid='CoverPageActionButton']", 36e5).then(i => i.click()).catch(i => {
            console.log(i)
        }), await Z("button[data-testid='StartAttemptModal__primary-button'], [data-testid='action-button']").then(i => i.click()).catch(i => {})), await Z(".css-1hhf6i, .rc-FormPartsQuestion", 2e4);
        let l = document.querySelectorAll(".css-1hhf6i, .rc-FormPartsQuestion");
        t ? await qf(l) : await $f(l, r), await new Promise(i => setTimeout(i, 500)), Z("input#agreement-checkbox-base").then(i => {
            i.scrollIntoView(), i.click()
        }).catch(i => {
            console.log(i)
        }), (n ?? !0) && (Z('button[data-testid="submit-button"], button[data-test="submit-button"]').then(i => {
            i.click(), i.scrollIntoView()
        }).catch(i => {
            console.log(i)
        }), Z('button[data-testid="dialog-submit-button"]', 2e3).then(i => i.click()).catch(i => {}))
    }, $f = async (e, t) => {
        const {
            isDebugMode: n
        } = await chrome.storage.local.get("isDebugMode");
        String.prototype.normalize = function() {
            return this.replaceAll(" ", "").replace(/\s+/g, " ").replaceAll(`
`, " ").replaceAll("“", '"').replaceAll("”", '"').replaceAll("‘", "'").replaceAll("’", "'").replaceAll("–", "-").replaceAll("—", "-").replaceAll("…", "...").trim()
        };
        let r = [];
        e.forEach((o, i) => {
            var p;
            const s = ((p = o.querySelector(".css-x3q7o9 > div:nth-child(2), .rc-CML").textContent) == null ? void 0 : p.normalize()) ?? "",
                a = t.quizSrc.filter(h => h.term.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(h.term.toLowerCase()));
            if (a.length > 0) {
                let h = !1;
                if (a.forEach(m => {
                        var k;
                        let w = o.querySelectorAll(".rc-Option");
                        if (w.length > 0)
                            for (const S of w) {
                                const N = ((k = S == null ? void 0 : S.textContent) == null ? void 0 : k.normalize()) ?? "";
                                if (m.definition.toLowerCase().includes(N.toLowerCase())) {
                                    h = !0;
                                    let d = S.querySelector("input");
                                    n && console.log(d), d && d.click()
                                }
                            } else try {
                                let S = o.querySelector('input[type="text"], textarea, input[type="number"]');
                                S.click(), S.value = m.definition;
                                const N = new Event("change", {
                                    bubbles: !0
                                });
                                S.dispatchEvent(N)
                            } catch {}
                    }), !h) {
                    n && console.log("out dap an");
                    let m = o.querySelector("input, textarea");
                    m && m.click()
                }
            } else {
                n && console.log(`${s.normalize()}`);
                let h = o.querySelectorAll(".rc-Option");
                r.push({
                    term: `${s} | ${Array.from(h).map(w=>w.textContent.normalize()).join(" | ")}`,
                    definition: ""
                });
                let m = o.querySelectorAll("input, textarea");
                if (m) {
                    try {
                        m[0].click()
                    } catch {}
                    try {
                        m[0].click(), m[0].value = Rn(10), m[0].type == "number" && (m[0].value = "10");
                        const w = new Event("change", {
                            bubbles: !0
                        });
                        m[0].dispatchEvent(w)
                    } catch {}
                }
            }
        });
        const l = `${JSON.stringify(r)} You are given a json, answer this json by choosing the answer from the term which were divided by the | symbol and fill that to this json but with definition field filled, give me the json only, and remember not to modify anything in the attribute term, you are only allowed to modify definition attribute. The answer in definition field must be a string included in the term field, just give the answer, doesn't need to explain it, if the question has more than 1 answer, give the answer join by " | " `;
        n && (console.log(l), JSON.stringify(r))
    }, Uf = async () => {
        if (!location.href.includes("/learn/")) {
            alert("This is not a course page, please go to your course page first");
            return
        }(!location.href.includes("/peer/") || location.href.includes("/give-feedback")) && (await Ai()).forEach(n => {
            if (!n.completed && !n.locked && n.href.includes("/peer/") && !n.href.includes("/give-feedback")) {
                if (!confirm("Go to assignment page?")) return;
                location.href = n.href
            }
        }), await Z('div[role="tablist"] button:nth-child(2)').then(t => t.click()).catch(t => {});
        let e = Rn(10);
        try {
            await Z('#main input[aria-label="Project Title"]', 2e4).then(async n => {
                n.click(), n.value = e;
                const r = new Event("change", {
                    bubbles: !0
                });
                n.dispatchEvent(r)
            }).catch(n => {}), document.querySelectorAll('#main input[type="text"]:not([aria-label="URL"]), textarea:not([aria-label="URL"])').forEach(n => {
                n.value = e;
                const r = new Event("change", {
                    bubbles: !0
                });
                n.dispatchEvent(r)
            })
        } catch (t) {
            console.log(t)
        }
        Wf(), document.querySelectorAll(".rc-UppyFileUploader button").forEach(async t => {
            await t.click();
            const n = Rn(2e3),
                r = new File([n], `${Rn(4,"-")}.md`, {
                    type: "text/plain"
                }),
                l = document.querySelector('.uppy-Dashboard-input[type="file"]'),
                o = new DataTransfer;
            o.items.add(r), l && (l.files = o.files), l.dispatchEvent(new Event("change", {
                bubbles: !0
            }))
        }), await new Promise(t => setTimeout(t, 4e3)), await Z("#agreement-checkbox-base", 1e4).then(t => t.click()).catch(t => {}), console.log("click submit"), await Z('button[aria-label="Submit"]', 1e4).then(t => t.click()).catch(t => {
            console.log(t)
        }), await Z('button[data-testid="dialog-submit-button"]', 1e4).then(t => t.click()).catch(t => {})
    }, Bf = async () => {
        if (!location.href.includes("/learn/")) {
            alert("This is not a course page, please go to your course page first");
            return
        }
        Z('button[data-js="open-course-link"]', 1e3).then(t => t.click()).catch(t => {}), await new Promise(t => setTimeout(t, 1e3)), Z('button[data-js="open-course-link"]', 1e3).then(t => t.click()).catch(t => {});
        let e = "";
        do e = await Z('td[data-testid="review-count"]', 1e3).then(t => t.innerText).catch(t => {}), await Qf(); while (e != null && e.includes("left to complete"))
    }, Qf = async () => {
    try {
        const e = "Rush Coursera siêu tốc,IB zalo: 0868362951";
        await Z(".rc-FormPart", 1000);

        let t = document.getElementsByClassName("rc-FormPart");
        for (const n of t) {
            let r = n.querySelectorAll(".peer-option-input input[type='radio']"); // Chọn input[type="radio"]
            let l = Array.from(n.querySelectorAll(".option-contents > div:nth-child(1)")).map(i => {
                var s;
                const u = (s = i.textContent) == null ? void 0 : s.match(/\d+/);
                return u ? parseInt(u[0], 10) : 0
            });

            if (r.length > 0 && l.length === r.length) {
                let maxIndex = l.indexOf(Math.max(...l)); // Tìm vị trí điểm cao nhất
                if (maxIndex !== -1) {
                    r[maxIndex].click();
                    r[maxIndex].dispatchEvent(new Event("change", { bubbles: true })); // Kích hoạt event change
                }
            }

            const o = n.querySelectorAll('.c-peer-review-submit-textarea-input-field, div[data-testid="peer-review-multi-line-input-field"]');
            for (let i of o) {
                i.click();
                i.focus();
                document.execCommand("insertText", false, e);
            }
        }

        setTimeout(() => {
            const n = document.getElementsByClassName("rc-FormSubmit")[0].querySelector("button");
            n.scrollIntoView();
            n.click();
        }, 700);
    } catch (err) {
        console.error(err);
    }
}
,Vf = async () => {
    var l;
    if (!location.href.includes("/learn/")) {
        alert("This is not a course page, please go to your course page first");
        return;
    }
    const e = await Ai(),
        t = (l = document.querySelector("body > script:nth-child(3)")) == null ? void 0 : l.innerText.match(/(\d+~[A-Za-z0-9-_]+)/),
        {
            csrf3Token: n
        } = await chrome.storage.sync.get(["csrf3Token"]),
        r = t == null ? void 0 : t[1].split("~")[0];

    for (const o of e) {
        var i, u, s, a;
        if (o.href.includes("/discussionPrompt/") && !o.completed && !o.locked) {
            const p = await fetch(`https://www.coursera.org/api/onDemandDiscussionPrompts.v1/${r}~${o.course_id}~${o.itemId}?fields=onDemandDiscussionPromptQuestions.v1(content,creatorId,createdAt,forumId,sessionId,lastAnsweredBy,lastAnsweredAt,totalAnswerCount,topLevelAnswerCount,viewCount),promptType,question&includes=question`, {
                method: "GET"
            }).then(m => m.json()),
                h = (a = (s = (u = (i = p == null ? void 0 : p.elements) == null ? void 0 : i[0]) == null ? void 0 : u.promptType) == null ? void 0 : s.definition) == null ? void 0 : a.courseItemForumQuestionId.split("~")[2];

            await fetch("https://www.coursera.org/api/onDemandCourseForumAnswers.v1/?fields=content%2CforumQuestionId%2CparentForumAnswerId%2Cstate%2CcreatorId%2CcreatedAt%2Corder%2CupvoteCount%2CchildAnswerCount%2CisFlagged%2CisUpvoted%2CcourseItemForumQuestionId%2CparentCourseItemForumAnswerId%2ConDemandSocialProfiles.v1(userId%2CexternalUserId%2CfullName%2CphotoUrl%2CcourseRole)%2ConDemandCourseForumAnswers.v1(content%2CforumQuestionId%2CparentForumAnswerId%2Cstate%2CcreatorId%2CcreatedAt%2Corder%2CupvoteCount%2CchildAnswerCount%2CisFlagged%2CisUpvoted%2CcourseItemForumQuestionId%2CparentCourseItemForumAnswerId)&includes=profiles%2Cchildren%2CuserId", {
                method: "POST",
                headers: {
                    "x-csrf3-token": n
                },
                body: JSON.stringify({
                    content: {
                        typeName: "cml",
                        definition: {
                            dtdId: "discussion/1",
                            value: `<co-content><text>${Rn(10)}</text></co-content>`
                        }
                    },
                    courseForumQuestionId: `${o.course_id}~${h}`
                })
            }).then(m => m.json());

            console.log(`Đã gửi API cho course_id: ${o.course_id}, itemId: ${o.itemId}`);
            await new Promise(resolve => setTimeout(resolve, 10500)); // Chờ 10 giây trước khi gửi request tiếp theo
        }
    }

    console.log("Hoàn thành tất cả yêu cầu API, tiến hành reload trang...");
    location.reload();
}

, Wf = async () => {
        var n, r;
        const t = ((n = document.querySelector("body > script:nth-child(3)")) == null ? void 0 : n.innerText).match(/(\d+~[A-Za-z0-9-_]+)/);
        t == null || t[1].split("~")[0], JSON.parse(((r = document.querySelector(".m-a-0.body > a")) == null ? void 0 : r.getAttribute("data-click-value")) ?? ""), Array.from(document.querySelectorAll(".parts > div")).map(l => l.getAttribute("id")), Array.from(document.querySelectorAll(".parts > div")).forEach(l => {
            var i;
            if (l.querySelector('div[role="textbox"]') && !((i = l.textContent) != null && i.includes("This extension currently does not support"))) {
                let u = document.createElement("span");
                const s = `<div class="my-2 flex items-center gap-4 border border-yellow-600 bg-yellow-100 px-4 py-3 rounded-md font-normal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-yellow-600"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
      <div>
        This extension currently does not support the above text box, please input this mannually
      </div>
    </div>`;
                u.innerHTML = s, l.appendChild(u), u.scrollIntoView()
            }
        })
    }, Hf = async () => {
        var o, i;
        if (!location.href.includes("/learn/")) {
            alert("This is not a course page, please go to your course page first");
            return
        }
        const t = ((o = document.querySelector("body > script:nth-child(3)")) == null ? void 0 : o.innerText).match(/(\d+~[A-Za-z0-9-_]+)/),
            n = t == null ? void 0 : t[1].split("~")[0],
            r = JSON.parse(((i = document.querySelector(".m-a-0.body > a")) == null ? void 0 : i.getAttribute("data-click-value")) ?? ""),
            l = await fetch(`https://www.coursera.org/api/onDemandPeerAssignmentPermissions.v1/${n}~${r.course_id}~${r.item_id}/?fields=deleteSubmission%2ClistSubmissions%2CreviewPeers%2CviewReviewSchema%2CanonymousPeerReview%2ConDemandPeerSubmissionProgresses.v1(latestSubmissionSummary%2ClatestDraftSummary%2ClatestAttemptSummary)%2ConDemandPeerReceivedReviewProgresses.v1(evaluationIfReady%2CearliestCompletionTime%2CreviewCount%2CdefaultReceivedReviewRequiredCount)%2ConDemandPeerDisplayablePhaseSchedules.v1(currentPhase%2CphaseEnds%2CphaseStarts)&includes=receivedReviewsProgress%2CsubmissionProgress%2CphaseSchedule`).then(u => u.json()).then(u => {
                var s, a, p;
                return (p = (a = (s = u.linked) == null ? void 0 : s["onDemandPeerSubmissionProgresses.v1"][0]) == null ? void 0 : a.latestSubmissionSummary) == null ? void 0 : p.computed.id
            });
        await fetch("https://www.coursera.org/graphql-gateway?opname=RequestGradingByPeer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{
                operationName: "RequestGradingByPeer",
                variables: {
                    input: {
                        courseId: r.course_id,
                        itemId: r.item_id,
                        submissionId: l,
                        reason: "EXPECTED_HIGHER_SCORE|ok"
                    }
                },
                query: `mutation RequestGradingByPeer($input: PeerReviewAi_RequestGradingByPeerInput!) {
  PeerReviewAi_RequestGradingByPeer(input: $input) {
    submissionId
    __typename
  }
}
`
            }])
        }).then(u => {
            u.status === 200 && location.reload()
        }).catch(u => {
            console.log(u)
        })
    };

function Rn(e = 10, t = " ") {
    const n = ["apple", "banana", "cherry", "dog", "elephant", "fish", "giraffe", "house", "ice", "jungle", "kiwi", "lemon", "mountain", "orange", "piano", "queen", "river", "sunflower", "tree", "umbrella", "violet", "watermelon", "xylophone", "yellow", "zebra", "adventure", "balloon", "carpet", "diamond", "echo", "flame", "grape", "harmony", "illusion", "jewel", "kitchen", "lighthouse", "magnet", "notebook", "ocean", "paradise", "question", "rocket", "storm", "telescope", "universe", "vortex", "whisper", "xenon", "yarn", "zephyr", "abundance", "bravery", "calm", "delight", "euphoria", "freedom", "grace", "hope", "inspire", "joyful", "kingdom", "lunar", "mystic", "novel", "oblivion", "puzzle", "quaint", "rainbow", "serenity", "tranquility", "utopia", "vivid", "wanderlust", "zenith", "allegory", "breeze", "courage", "dawn", "evergreen", "frost", "galaxy", "horizon", "infinity", "journey", "knowledge", "lullaby", "moondust", "neon", "opportunity", "pulse", "quicksilver", "reflex", "solace", "timeless", "unity", "vanguard", "whimsy", "xenial", "yellowstone", "zeal", "appletree", "butterfly", "carousel", "driftwood", "enigma", "firefly", "gravity", "hologram", "infinity", "jubilee", "kaleidoscope", "luminary", "memento", "nebula", "obelisk", "phantom", "quicksand", "reverie", "seraph", "tornado", "underworld", "vortex", "whirlpool", "xenophobia", "yesteryear", "zeppelin", "alchemy", "bastion", "cerebral", "doppelganger", "ethereal", "fable", "gale", "harmony", "illusion", "juxtapose", "kismet", "lullaby", "mosaic", "nostalgia", "oracle", "prism", "quiver", "rejuvenate", "solitude", "tapestry", "unveil", "vigilant", "wanderlust", "xylophonist", "yearning", "zenith", "arcane", "believe", "cliffhanger", "delirium", "eclipse", "frostbite", "gossamer", "hollow", "insight", "jovial", "keen", "luminous", "mystify", "nocturnal", "obscure", "pinnacle", "quest", "radiance", "synergy", "timeless", "ultimate", "visionary", "whimsy", "xenophile", "yield", "zealot", "alchemy", "bliss", "catalyst", "dawn", "epiphany", "fervor", "grip", "horizon", "inspire", "juggernaut", "keystone", "leverage", "mindset", "notorious", "oracle", "paradigm", "quintessential", "resilience", "serendipity", "thrive", "underpinning", "velocity", "whisper", "yearn", "zest", "amethyst", "brilliance", "calibration", "dynamic", "exuberant", "foundation", "galvanize", "harbinger", "interlude", "juxtaposition", "kaleidoscope", "legendary", "mysticism", "nomadic", "opulent", "platinum", "quench", "remedy", "subtle", "torrent", "untamed", "vanguard", "whirlwind", "xenial", "yielding", "zephyr", "aspire", "belong", "clarity", "discern", "elixir", "fortitude", "gallant", "harmony", "illusion", "jubilant", "keynote", "luminescent", "memento", "nexus", "quixotic", "revelation", "soar", "triumph", "unravel", "vivid", "whimsical", "x-factor", "yonder", "zodiac", "aberration", "anomaly", "benign", "catalyst", "dichotomy", "epistemology", "fluctuate", "gravitas", "heuristic", "inference", "juxtapose", "kinetics", "lexicon", "magnitude", "neologism", "ontology", "paradigm", "quintessential", "resilience", "synergy", "thesis", "ubiquitous", "vicissitude", "warrant", "xenophobia", "yields", "zealous", "abrogate", "banal", "cogent", "dilapidated", "ephemeral", "fallacy", "germane", "heterogeneous", "incontrovertible", "juxtaposition", "kaleidoscope", "legitimate", "manifest", "narrative", "objective", "proclivity", "qualitative", "reflexive", "synthesis", "taxonomy", "underpinning", "validity", "warranted", "xerophyte", "yielding", "zealot", "acumen", "brevity", "catharsis", "discourse", "equilibrium", "facilitate", "gravitate", "hubris", "intermediate", "juxtapose", "kinesis", "lexical", "monograph", "nuance", "opinion", "paradox", "quantitative", "reduction", "significance", "thesis", "utilitarian", "volition", "warranted", "xenial", "yarn", "zephyr", "allegory", "bifurcate", "coherent", "deconstruction", "ethereal", "falsifiability", "genuine", "heuristic", "intuition", "jurisprudence", "knell", "luminous", "methodology", "noteworthy", "ontology", "phenomenon", "qualitative", "reductionism", "scalability", "theoretical", "universal", "vernacular", "westernize", "xenogenesis", "yesterday", "zeal", "academic", "bibliography", "cumulative", "dialectic", "exegesis", "fallacious", "gestalt", "hyperbole", "impartial", "juxtaposition", "knowledge", "logical", "malleable", "neoteric", "obfuscate", "pragmatic", "quixotic", "repartee", "scholarship", "tangible", "unanimous", "vanguard", "webinar", "xenogenesis", "yogic", "zeitgeist", "analytic", "bipartisan", "cogitate", "diplomatic", "entropic", "foment", "grammatical", "heuristic", "interlocutor", "juxtaposition", "kaleidoscopic", "literacy", "monolithic", "nuance", "ontology", "phenomenology", "quantification", "resilience", "synergy", "taxonomy", "unsubstantiated", "validity", "warrant", "xenophobia", "youth", "zoology"],
        r = [];
    for (let l = 0; l < e; l++) {
        const o = Math.floor(Math.random() * n.length);
        r.push(n[o])
    }
    return r.join(t)
}
const qf = async e => {
    if (!location.href.includes("assignment-submission")) return;
    let t = Array.from(e).map(s => {
        var h;
        const a = ((h = s.querySelector(".css-x3q7o9 > div:nth-child(2)").innerText) == null ? void 0 : h.normalize().replace(/\s{2,}/g, " ")) ?? "";
        let p = s.querySelectorAll(".rc-Option");
        return {
            term: `${a} | ${Array.from(p).map(m=>m.innerText).join(" | ")}`,
            definition: ""
        }
    });
    const n = JSON.stringify(t),
        o = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=zzzz", {
            body: JSON.stringify({
                system_instruction: {
                    parts: {
                        text: "You are given a json, answer this json by choosing the answer from the term which were divided by the | symbol and fill that to this json but with definition field filled, give me the json only, dont modify the term field and the answer in definition field must be a string included in the term field, just give the answer, doesn't need to explain it"
                    }
                },
                contents: [{
                    parts: [{
                        text: n
                    }]
                }]
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(s => s == null ? void 0 : s.json()).then(s => {
            var a, p, h, m;
            return (m = (h = (p = (a = s == null ? void 0 : s.candidates[0]) == null ? void 0 : a.content) == null ? void 0 : p.parts) == null ? void 0 : h[0]) == null ? void 0 : m.text
        }),
        i = JSON.parse(o.replace("```json", "").replace("```", ""));
    let u = 0;
    e.forEach((s, a) => {
        var h, m, w;
        (h = s.querySelector(".css-x3q7o9 > div:nth-child(2)").innerText) == null || h.normalize().replace(/\s{2,}/g, " ");
        let p = !1;
        for (const k of s.querySelectorAll(".rc-Option")) {
            const S = ((w = (m = k.querySelector("p span")) == null ? void 0 : m.innerText) == null ? void 0 : w.normalize().toLowerCase()) ?? "";
            if (i[a].definition.toLowerCase().includes(S)) {
                p = !0;
                let N = k.querySelector("input");
                N && N.click()
            }
        }
        p && (console.log(`zo src ${a+1}`), u++)
    }), console.log(`zo source ${u}/${e.length}`), console.log("done")
}, Gf = ({
    size: e = 24
}) => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-message-circle-more",
    children: [g.jsx("path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }), g.jsx("path", {
        d: "M8 12h.01"
    }), g.jsx("path", {
        d: "M12 12h.01"
    }), g.jsx("path", {
        d: "M16 12h.01"
    })]
}), Oi = ({
    size: e = 16
}) => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-rotate-cw rotate",
    children: [g.jsx("path", {
        d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
    }), g.jsx("path", {
        d: "M21 3v5h-5"
    })]
}), Kf = () => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-chevrons-right",
    children: [g.jsx("path", {
        d: "m6 17 5-5-5-5"
    }), g.jsx("path", {
        d: "m13 17 5-5-5-5"
    })]
}), Yf = () => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-clapperboard",
    children: [g.jsx("path", {
        d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
    }), g.jsx("path", {
        d: "m6.2 5.3 3.1 3.9"
    }), g.jsx("path", {
        d: "m12.4 3.4 3.1 4"
    }), g.jsx("path", {
        d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
    })]
}), Xf = () => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-notepad-text",
    children: [g.jsx("path", {
        d: "M8 2v4"
    }), g.jsx("path", {
        d: "M12 2v4"
    }), g.jsx("path", {
        d: "M16 2v4"
    }), g.jsx("rect", {
        width: "16",
        height: "18",
        x: "4",
        y: "4",
        rx: "2"
    }), g.jsx("path", {
        d: "M8 10h6"
    }), g.jsx("path", {
        d: "M8 14h8"
    }), g.jsx("path", {
        d: "M8 18h5"
    })]
}), Zf = () => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-message-circle-question",
    children: [g.jsx("path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }), g.jsx("path", {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
    }), g.jsx("path", {
        d: "M12 17h.01"
    })]
}), Jf = () => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [g.jsx("path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
    }), g.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "3"
    })]
}), bf = e => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...e,
    children: [g.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), g.jsx("path", {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
    }), g.jsx("path", {
        d: "M12 17h.01"
    })]
}), ep = e => g.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    ...e,
    children: [g.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), g.jsx("path", {
        d: "M12 16v-4"
    }), g.jsx("path", {
        d: "M12 8h.01"
    })]
});

function tp(e) {
    return g.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        ...e,
        children: g.jsx("path", {
            fill: "currentColor",
            d: "M8 5v14l11-7z"
        })
    })
}
const Mt = ({
    children: e,
    onClick: t,
    isLoading: n,
    title: r,
    icon: l
}) => g.jsxs("button", {
    title: r,
    onClick: t,
    className: "flex-shrink-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700 gap-2 select-none disabled:bg-gray-400 disabled:text-gray-500 disabled:border-gray-400 disabled:dark:bg-gray-800 disabled:dark:text-gray-500 disabled:dark:border-gray-800",
    children: [n ? g.jsx(Oi, {}) : l, e]
});

function np({
    id: e,
    checked: t,
    children: n,
    onChange: r
}) {
    return g.jsxs("div", {
        className: "flex items-center mb-4",
        children: [g.jsx("input", {
            id: e,
            type: "checkbox",
            checked: t,
            onChange: r,
            className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
        }), g.jsx("label", {
            htmlFor: e,
            className: "ms-2 text-sm font-medium text-gray-900 !mb-0",
            children: n
        })]
    })
}

function rp() {
    return g.jsx("div", {
        children: g.jsxs("div", {
            className: "text-xs font-semibold pt-3 flex",
            children: [g.jsx("div", {
                className: "grow"
            }), g.jsxs("div", {
                className: "flex gap-4",
                children: [g.jsxs("a", {
                    className: "grow-0 flex gap-1 items-center hover:text-blue-700 hover:underline",
                    target: "_blank",
                    href: "https://ecec123ecec.github.io/coursera-db/how-to-use.html",
                    children: [g.jsx(bf, {
                        width: 20,
                        height: 20
                    }), "How to use?"]
                }), g.jsxs("a", {
                    className: "grow-0 flex gap-1 items-center hover:text-blue-700 hover:underline",
                    target: "_blank",
                    href: "https://chromewebstore.google.com/detail/coursera-tool/hdadbgohdjnhileochcldikbphbonalg/reviews",
                    children: [g.jsx(Gf, {
                        size: 20
                    }), "Give Feedback"]
                }), g.jsxs("a", {
                    className: "grow-0 flex gap-1 items-center hover:text-blue-700 hover:underline",
                    target: "_blank",
                    href: "https://www.facebook.com/au.kien.thanh.2307",
                    children: [g.jsx(ep, {
                        width: 20,
                        height: 20
                    }), "Support"]
                })]
            })]
        })
    })
}

function lp() {
    const [e, t] = os.useState("Your submission's url here"), [n, r] = ge.useState(!1), [l, o] = ge.useState(!1);
    ge.useEffect(() => {
        location.href.includes("/give-feedback") && u()
    }, []);
    const i = () => {
            r(!0), navigator.clipboard.writeText(e), setTimeout(() => {
                r(!1)
            }, 1e3)
        },
        u = async () => {
            var k, S;
            const a = ((k = document.querySelector("body > script:nth-child(3)")) == null ? void 0 : k.innerText).match(/(\d+~[A-Za-z0-9-_]+)/),
                p = a == null ? void 0 : a[1].split("~")[0],
                h = JSON.parse(((S = document.querySelector(".m-a-0.body > a")) == null ? void 0 : S.getAttribute("data-click-value")) ?? ""),
                m = await fetch(`https://www.coursera.org/api/onDemandPeerAssignmentPermissions.v1/${p}~${h.course_id}~${h.item_id}/?fields=deleteSubmission%2ClistSubmissions%2CreviewPeers%2CviewReviewSchema%2CanonymousPeerReview%2ConDemandPeerSubmissionProgresses.v1(latestSubmissionSummary%2ClatestDraftSummary%2ClatestAttemptSummary)%2ConDemandPeerReceivedReviewProgresses.v1(evaluationIfReady%2CearliestCompletionTime%2CreviewCount%2CdefaultReceivedReviewRequiredCount)%2ConDemandPeerDisplayablePhaseSchedules.v1(currentPhase%2CphaseEnds%2CphaseStarts)&includes=receivedReviewsProgress%2CsubmissionProgress%2CphaseSchedule`).then(N => N.json()).then(N => {
                    var d, c, f;
                    return (f = (c = (d = N.linked) == null ? void 0 : d["onDemandPeerSubmissionProgresses.v1"][0]) == null ? void 0 : c.latestSubmissionSummary) == null ? void 0 : f.computed.id
                }).catch(N => (t("You haven't done your assignment yet"), ""));
            if (!m) {
                t("You haven't done your assignment yet");
                return
            }
            let w = `coursera.org/learn/${h.open_course_slug}/peer/${h.item_id}/course-project/review/${m}`;
            t(w)
        };
    return g.jsxs("div", {
        className: "flex items-center mt-3",
        children: [g.jsx("span", {
            className: "flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white border border-blue-500 rounded-s-lg hover:bg-blue-700 hover:border-blue-700 bg-blue-600 cursor-pointer",
            onClick: async () => {
                o(!0), await u(), o(!1)
            },
            children: "Get URL"
        }), g.jsx("div", {
            className: "relative w-full",
            children: g.jsx("input", {
                id: "website-url",
                type: "text",
                "aria-describedby": "helper-text-explanation",
                className: "bg-gray-50 border border-e-0 !text-black border-gray-300 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",
                value: e,
                readOnly: !0,
                disabled: !0
            })
        }), g.jsx("button", {
            "data-tooltip-target": "tooltip-website-url",
            "data-copy-to-clipboard-target": "website-url",
            className: "flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700",
            type: "button",
            onClick: i,
            children: n ? g.jsx("span", {
                id: "success-icon",
                className: "items-center",
                children: g.jsx("svg", {
                    className: "w-4 h-4",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 12",
                    children: g.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M1 5.917 5.724 10.5 15 1.5"
                    })
                })
            }) : l ? g.jsx(Oi, {}) : g.jsx("span", {
                id: "default-icon",
                children: g.jsx("svg", {
                    className: "w-4 h-4",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 18 20",
                    children: g.jsx("path", {
                        d: "M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
                    })
                })
            })
        }), g.jsx("br", {})]
    })
}

function op() {
    const [e, t] = ge.useState([]), [n, r] = ge.useState("SSL101c"), [l, o] = ge.useState(!1), [i, u] = ge.useState({
        isAutoSubmitQuiz: !0,
        isDebugMode: !1
    });
    ge.useState(!1);
    const [s, a] = ge.useState({
        isLoadingReview: !1,
        isLoadingQuiz: !1,
        isLoadingSubmitPeerGrading: !1,
        isLoadingDiscuss: !1,
        isLoadingCompleteWeek: !1,
        isLoadingDisableAI: !1
    });
    return ge.useEffect(() => {
        (async () => {
            let p = await fetch("https://ecec123ecec.github.io/coursera-db/courseMap.json", {
                cache: "no-store"
            }).then(N => N.json());
            await chrome.storage.local.get("course");
            let h = "";
            Object.entries(p).forEach(([N, d]) => {
                d.related.forEach(c => {
                    location.href.includes(c) && (chrome.storage.local.set({
                        course: N
                    }), r(N), h = N)
                })
            });
            const {
                isAutoSubmitQuiz: m
            } = await chrome.storage.local.get("isAutoSubmitQuiz"), {
                isShowControlPanel: w
            } = await chrome.storage.local.get("isShowControlPanel"), {
                isDebugMode: k
            } = await chrome.storage.local.get("isDebugMode");
            t(p), u({
                isAutoSubmitQuiz: m,
                isDebugMode: k ?? !1
            }), o(w ?? !0), (m ?? !0) && (location.href.includes("/assignment-submission") || location.href.includes("/exam") || location.href.includes("/quiz")) && (a(N => ({
                ...N,
                isLoadingQuiz: !0
            })), await Ku(h), a(N => ({
                ...N,
                isLoadingQuiz: !1
            })))
        })()
    }, []), g.jsxs(g.Fragment, {
        children: [g.jsx("div", {
            className: `w-10 h-10 rounded-full fixed bottom-3 right-6 p-2 cursor-pointer bg-no-repeat bg-center bg-cover transition-all duration-300 ${l?"translate-y-[100px] opacity-0":"translate-y-0 opacity-100"}`,
            onClick: () => {
                o(!0), chrome.storage.local.set({
                    isShowControlPanel: !0
                })
            },
            style: {
                backgroundImage: "url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/71180874e10407031ecd7b62e27dec77.png?auto=format%2Ccompress&dpr=1&w=32&h=32)",
                zIndex: 1e3
            }
        }), g.jsxs("div", {
            className: `transition-all fixed top-4 right-8 bg-blue-700 dark:bg-blue-600 font-bold text-white flex justify-center items-center gap-4 text-xl px-6 py-3 rounded-lg ${s.isLoadingQuiz||s.isLoadingDiscuss||s.isLoadingCompleteWeek||s.isLoadingSubmitPeerGrading||s.isLoadingReview?"-translate-y-0":"-translate-y-20"}`,
            children: [g.jsx(Oi, {
                size: 30
            }), "Loading"]
        }), g.jsxs("div", {
            className: `bg-white absolute border border-black -bottom-4 p-4 w-[470px] right-0 rounded-md transition-all ${l?"-translate-x-0 opacity-100":"translate-x-[500px] opacity-0"}`,
            children: [g.jsx("div", {
                className: "absolute top-2 right-2 cursor-pointer",
                onClick: () => {
                    o(!1), chrome.storage.local.set({
                        isShowControlPanel: !1
                    })
                },
                children: g.jsx(Kf, {})
            }), g.jsxs("div", {
                className: "font-bold text-base mb-3 flex gap-2",
                children: [g.jsx(Yf, {}), "Skipping"]
            }), g.jsxs("div", {
                className: "flex gap-2",
                children: [g.jsx(Mt, {
                    title: "Auto skip all readings & videos",
                    onClick: async () => {
                        a(p => ({
                            ...p,
                            isLoadingCompleteWeek: !0
                        })), await Ff(), a(p => ({
                            ...p,
                            isLoadingCompleteWeek: !1
                        }))
                    },
                    isLoading: s.isLoadingCompleteWeek,
                    children: "Skip videos & readings"
                }), g.jsx(Mt, {
                    title: "Auto do all discussion prompt",
                    onClick: async () => {
                        a(p => ({
                            ...p,
                            isLoadingDiscuss: !0
                        })), await Vf(), a(p => ({
                            ...p,
                            isLoadingDiscuss: !1
                        }))
                    },
                    isLoading: s.isLoadingDiscuss,
                    children: "Skip discussions"
                })]
            }), g.jsxs("div", {
                className: "font-bold text-base my-3 flex gap-2",
                children: [g.jsx(Xf, {}), "Assignment"]
            }), g.jsxs("div", {
                className: "flex gap-2 mt-2",
                children: [g.jsx(Mt, {
                    title: "Auto submit assignments (May not work)",
                    onClick: async () => {
                        a(p => ({
                            ...p,
                            isLoadingSubmitPeerGrading: !0
                        })), await Uf(), a(p => ({
                            ...p,
                            isLoadingSubmitPeerGrading: !1
                        }))
                    },
                    isLoading: s.isLoadingSubmitPeerGrading,
                    children: "Auto submit"
                }), g.jsx(Mt, {
                    title: "Auto grade assignments",
                    onClick: async () => {
                        a(p => ({
                            ...p,
                            isLoadingReview: !0
                        })), await Bf(), a(p => ({
                            ...p,
                            isLoadingReview: !1
                        }))
                    },
                    isLoading: s.isLoadingReview,
                    children: "Auto grade"
                }), g.jsx(Mt, {
                    title: "Disable AI grading for your submission",
                    onClick: async () => {
                        a(p => ({
                            ...p,
                            isLoadingDisableAI: !0
                        })), await Hf(), a(p => ({
                            ...p,
                            isLoadingDisableAI: !1
                        }))
                    },
                    isLoading: s.isLoadingDisableAI,
                    children: "Disable AI grading"
                })]
            }), g.jsx(lp, {}), g.jsxs("div", {
                className: "font-bold text-base my-3 flex gap-2",
                children: [g.jsx(Zf, {}), "Quiz Automation"]
            }), g.jsxs("div", {
                className: "flex gap-4 items-center",
                children: [g.jsx("span", {
                    className: "font-semibold",
                    children: "Source:"
                }), g.jsx("select", {
                    className: "py-1 px-3 border rounded-lg focus-visible:outline-none",
                    onChange: p => {
                        chrome.storage.local.set({
                            course: p.target.value
                        }), r(p.target.value)
                    },
                    value: n,
                    children: Object.entries(e).map(([p, h]) => g.jsx("option", {
                        value: p,
                        disabled: (h == null ? void 0 : h.status) === "ongoing",
                        children: `${p}  -  (${h==null?void 0:h.status.toUpperCase()})`
                    }, p))
                }), g.jsx(Mt, {
                    title: "Start auto quiz",
                    onClick: async () => {
                        String.prototype.normalize = function() {
                            return this.replaceAll(" ", "").replace(/\s+/g, " ").replaceAll(`
`, " ").replaceAll("“", '"').replaceAll("”", '"').replaceAll("‘", "'").replaceAll("’", "'").replaceAll("–", "-").replaceAll("—", "-").replaceAll("…", "...").trim()
                        }, a(p => ({
                            ...p,
                            isLoadingQuiz: !0
                        })), await Ku(n), a(p => ({
                            ...p,
                            isLoadingQuiz: !1
                        }))
                    },
                    isLoading: s.isLoadingQuiz,
                    icon: g.jsx(tp, {
                        width: 22,
                        height: 22
                    }),
                    children: "Start"
                })]
            }), g.jsxs("div", {
                className: "font-bold text-base my-3 flex gap-2",
                children: [g.jsx(Jf, {}), "Setting"]
            }), g.jsx("div", {
                className: "grid grid-cols-2 mt-3",
                children: g.jsx(np, {
                    id: "auto-submit-quiz",
                    checked: i.isAutoSubmitQuiz,
                    children: "Auto submit quiz",
                    onChange: p => {
                        u(h => (chrome.storage.local.set({
                            isAutoSubmitQuiz: !h.isAutoSubmitQuiz
                        }), {
                            ...h,
                            isAutoSubmitQuiz: !h.isAutoSubmitQuiz
                        }))
                    }
                })
            }), g.jsx(rp, {})]
        })]
    })
}
console.info("contentScript is running");
const ip = async e => {
    for (; document.querySelector(e) === null;) await new Promise(t => requestAnimationFrame(t));
    return document.querySelector(e)
};
ip("html").then(e => {
    const t = document.createElement("div");
    t.id = "coursera-tool", t.style.zIndex = "5000", t.style.position = "fixed", t.style.bottom = "36px", t.style.right = "36px", e.appendChild(t), Kl.createRoot(t).render(os.createElement(op))
});