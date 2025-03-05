// Chuyển đổi mô-đun nếu có trong mã nguồn
function ac(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}

// Khởi tạo các đối tượng, module xuất khẩu rỗng
var Kl = {},
  Yu = {
    exports: {}
  },
  ke = {},
  Xu = {
    exports: {}
  },
  T = {};

// Biến định danh cho các loại React elements
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

// Hàm để kiểm tra và trả về iterator của đối tượng
function kc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($i && e[$i]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}

// Đối tượng rỗng đại diện cho các hàm mặc định không thực hiện bất kỳ hành động nào
var Zu = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};

// Kết hợp đối tượng
var Ju = Object.assign,
  bu = {};

// Hàm khởi tạo một React Component với các thuộc tính, context, và ref
function un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bu),
    (this.updater = n || Zu);
}
un.prototype.isReactComponent = {};
un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};

// Hàm để ép buộc component cập nhật lại
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};

// Một function rỗng kế thừa từ un.prototype
function es() {}
es.prototype = un.prototype;

// Khởi tạo một React PureComponent, kế thừa từ Component
function Qo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bu),
    (this.updater = n || Zu);
}
var Vo = (Qo.prototype = new es());
Vo.constructor = Qo;
Ju(Vo, un.prototype);
Vo.isPureReactComponent = !0;
// Hàm để tạo các phần tử React mới từ các đối tượng
function rs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;

  // Kiểm tra các thuộc tính ref và key trong props
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ts.call(t, r) && !ns.hasOwnProperty(r) && (l[r] = t[r]);

  // Nếu có children, thêm vào props
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }

  // Thêm defaultProps vào nếu có
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);

  return {
    $$typeof: Zn, // Đánh dấu là React element
    type: e, // Loại phần tử
    key: o, // Key của phần tử
    ref: i, // Ref của phần tử
    props: l, // Các thuộc tính của phần tử
    _owner: Wo.current // Chủ sở hữu của phần tử
  };
}

// Hàm để sao chép một phần tử React và thay đổi các thuộc tính của nó
function Sc(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}

// Kiểm tra xem đối tượng có phải là React element không
function Ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}

// Hàm để mã hóa key của phần tử (chuyển đổi dấu = và :)
function xc(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}

// Hàm để lấy key duy nhất cho các phần tử React, tạo ra key từ đối tượng
var Bi = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xc("" + e.key)
    : t.toString(36);
}

// Hàm để duyệt qua các children và xây dựng danh sách các phần tử React
function Sr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zn:
          case cc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + xl(i, 0) : r),
      Ui(l)
        ? ((n = ""),
          e != null && (n = e.replace(Bi, "$&/") + "/"),
          Sr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Ho(l) &&
            (l = Sc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ui(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + xl(o, u);
      i += Sr(o, t, n, s, l);
    }
  else if (((s = kc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + xl(o, u++)), (i += Sr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
// Hàm để tạo React Suspense element
function xc(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}

// Hàm để sao chép đối tượng React với key mới
function Sc(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}

// Kiểm tra xem đối tượng có phải là React element không
function Ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}

// Hàm để mã hóa key cho React children
function xc(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}

// Kiểm tra và cập nhật phần tử Suspense hoặc Lazy
var B = Object.assign,
  Cl;

function kn(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = (t && t[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}

// Hàm kiểm tra trạng thái Suspense hoặc Lazy
function _l(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          throw Error();
        } catch (a) {
          r = a;
        }
        e();
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}

// Hàm kiểm tra các thành phần của React Suspense
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
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}

// Hàm để lấy tên hiển thị của một component hoặc element
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
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cs:
        return (e.displayName || "Context") + ".Consumer";
      case as:
        return (e._context.displayName || "Context") + ".Provider";
      case Xo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zo:
        return (
          (t = e.displayName || null), t !== null ? t : bl(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return bl(e(t));
        } catch {}
    }
  return null;
}
