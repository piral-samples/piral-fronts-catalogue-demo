//@pilet v:2(esbuildpr_app1,{})
System.register(["react", "react-router-dom", "@chakra-ui/react"], function (_export, _context) {
  "use strict";

  var c2, X1, J1, K1, u, U1, G1, j1, _1, W1, p, I, c4, I2, U2, G2, j2, _2, N, t2, a2, _templateObject, d1, S, p1, m1, x1, M1, H1, y, V1, C1, $, K, r1, Z, b, _s, f1, _, h1, N1, e1, O1, q1, v1, l1, D, o1, n1, g, i1, K2, $1, g1, Q1, s1, r2, u1;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  function U(c) {
    return c && c.map(function (t, a) {
      return p.createElement(t.tag, _s({
        key: a
      }, t.attr), U(t.child));
    });
  }

  function G(c) {
    return function (t) {
      return p.createElement(L1, _s({
        attr: _s({}, c.attr)
      }, t), U(c.child));
    };
  }

  function L1(c) {
    var t = function t(a) {
      var r = c.attr,
          h = c.size,
          e = c.title,
          l = f1(c, ["attr", "size", "title"]),
          n = h || a.size || "1em",
          i;
      return a.className && (i = a.className), c.className && (i = (i ? i + " " : "") + c.className), p.createElement("svg", _s({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, a.attr, r, l, {
        className: i,
        style: _s(_s({
          color: c.color || a.color
        }, a.style), c.style),
        height: n,
        width: n,
        xmlns: "http://www.w3.org/2000/svg"
      }), e && p.createElement("title", null, e), c.children);
    };

    return b !== void 0 ? p.createElement(b.Consumer, null, function (a) {
      return t(a);
    }) : t(Z);
  }

  function j(c) {
    return G({
      tag: "svg",
      attr: {
        viewBox: "0 0 576 512"
      },
      child: [{
        tag: "path",
        attr: {
          d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
        }
      }]
    })(c);
  }

  function w1(c) {
    var t = Object.create(null);
    return function (a) {
      return t[a] === void 0 && (t[a] = c(a)), t[a];
    };
  }

  function D1(c) {
    for (var t = 0, a, r = 0, h = c.length; h >= 4; ++r, h -= 4) {
      a = c.charCodeAt(r) & 255 | (c.charCodeAt(++r) & 255) << 8 | (c.charCodeAt(++r) & 255) << 16 | (c.charCodeAt(++r) & 255) << 24, a = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), a ^= a >>> 24, t = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }

    switch (h) {
      case 3:
        t ^= (c.charCodeAt(r + 2) & 255) << 16;

      case 2:
        t ^= (c.charCodeAt(r + 1) & 255) << 8;

      case 1:
        t ^= c.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }

    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
  }

  function m(c, t, a) {
    if (a == null) return "";
    if (a.__emotion_styles !== void 0) return a;

    switch (_typeof(a)) {
      case "boolean":
        return "";

      case "object":
        {
          if (a.anim === 1) return g = {
            name: a.name,
            styles: a.styles,
            next: g
          }, a.name;

          if (a.styles !== void 0) {
            var r = a.next;
            if (r !== void 0) for (; r !== void 0;) {
              g = {
                name: r.name,
                styles: r.styles,
                next: g
              }, r = r.next;
            }
            var h = a.styles + ";";
            return h;
          }

          return I1(c, t, a);
        }

      case "function":
        {
          if (c !== void 0) {
            var e = g,
                l = a(c);
            return g = e, m(c, t, l);
          }

          break;
        }

      case "string":
        if (!1) var n, i;
        break;
    }

    if (t == null) return a;
    var d = t[a];
    return d !== void 0 ? d : a;
  }

  function I1(c, t, a) {
    var r = "";
    if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
      r += m(c, t, a[h]) + ";";
    } else for (var e in a) {
      var l = a[e];
      if (_typeof(l) != "object") t != null && t[l] !== void 0 ? r += e + "{" + t[l] + "}" : l1(l) && (r += D(e) + ":" + o1(e, l) + ";");else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0)) for (var n = 0; n < l.length; n++) {
        l1(l[n]) && (r += D(e) + ":" + o1(e, l[n]) + ";");
      } else {
        var i = m(c, t, l);

        switch (e) {
          case "animation":
          case "animationName":
            {
              r += D(e) + ":" + i + ";";
              break;
            }

          default:
            r += e + "{" + i + "}";
        }
      }
    }
    return r;
  }

  function z1() {
    for (var c = arguments.length, t = new Array(c), a = 0; a < c; a++) {
      t[a] = arguments[a];
    }

    return i1(t);
  }

  function Y1(_ref2) {
    var c = _ref2.cartCount;
    return u(_1, {
      css: z1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: relative !important;\n      "]))),
      p: "4",
      colorScheme: "gray",
      "aria-label": "Notifications",
      size: "lg",
      icon: u(K1, null, "Cart", u(j, {
        color: "gray.750"
      }), c > 0 && u(W1, {
        as: "span",
        color: "white",
        position: "absolute",
        top: -2,
        right: 1,
        fontSize: "0.8rem",
        bgColor: "red",
        borderRadius: "lg",
        zIndex: 9999,
        p: 1
      }, c))
    });
  }

  function p4(c) {
    c.registerPage("/", u1), c.registerExtension("header", s1);
  }

  _export("setup", p4);

  return {
    setters: [function (_react) {
      c2 = _react.createElement;
      X1 = _react.useEffect;
      J1 = _react.useState;
      K1 = _react.Fragment;
      u = _react.createElement;
      p = _react.default;
      I = _react.default;
      c4 = _react.useInsertionEffect;
      I2 = _react.createElement;
      U2 = _react.useLayoutEffect;
      G2 = _react.useContext;
      j2 = _react.useRef;
      _2 = _react.Fragment;
      N = _react.createElement;
    }, function (_reactRouterDom) {
      U1 = _reactRouterDom.Link;
    }, function (_chakraUiReact) {
      G1 = _chakraUiReact.Button;
      j1 = _chakraUiReact.Flex;
      _1 = _chakraUiReact.IconButton;
      W1 = _chakraUiReact.Box;
      t2 = _chakraUiReact.Heading;
      a2 = _chakraUiReact.Flex;
    }],
    execute: function () {
      d1 = Object.create;
      S = Object.defineProperty;
      p1 = Object.getOwnPropertyDescriptor;
      m1 = Object.getOwnPropertyNames;
      x1 = Object.getPrototypeOf;
      M1 = Object.prototype.hasOwnProperty;

      H1 = function H1(c) {
        return S(c, "__esModule", {
          value: !0
        });
      };

      y = function y(c, t) {
        return function () {
          return t || c((t = {
            exports: {}
          }).exports, t), t.exports;
        };
      };

      V1 = function V1(c, t, a) {
        if (t && _typeof(t) == "object" || typeof t == "function") {
          var _iterator = _createForOfIteratorHelper(m1(t)),
              _step;

          try {
            var _loop = function _loop() {
              var r = _step.value;
              !M1.call(c, r) && r !== "default" && S(c, r, {
                get: function get() {
                  return t[r];
                },
                enumerable: !(a = p1(t, r)) || a.enumerable
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return c;
      };

      C1 = function C1(c) {
        return V1(H1(S(c != null ? d1(x1(c)) : {}, "default", c && c.__esModule && "default" in c ? {
          get: function get() {
            return c["default"];
          },
          enumerable: !0
        } : {
          value: c,
          enumerable: !0
        })), c);
      };

      $ = y(function (v) {
        "use strict";

        var o = typeof Symbol == "function" && Symbol["for"],
            R = o ? Symbol["for"]("react.element") : 60103,
            P = o ? Symbol["for"]("react.portal") : 60106,
            M = o ? Symbol["for"]("react.fragment") : 60107,
            H = o ? Symbol["for"]("react.strict_mode") : 60108,
            V = o ? Symbol["for"]("react.profiler") : 60114,
            C = o ? Symbol["for"]("react.provider") : 60109,
            f = o ? Symbol["for"]("react.context") : 60110,
            k = o ? Symbol["for"]("react.async_mode") : 60111,
            L = o ? Symbol["for"]("react.concurrent_mode") : 60111,
            w = o ? Symbol["for"]("react.forward_ref") : 60112,
            B = o ? Symbol["for"]("react.suspense") : 60113,
            B1 = o ? Symbol["for"]("react.suspense_list") : 60120,
            F = o ? Symbol["for"]("react.memo") : 60115,
            A = o ? Symbol["for"]("react.lazy") : 60116,
            F1 = o ? Symbol["for"]("react.block") : 60121,
            A1 = o ? Symbol["for"]("react.fundamental") : 60117,
            S1 = o ? Symbol["for"]("react.responder") : 60118,
            y1 = o ? Symbol["for"]("react.scope") : 60119;

        function z(c) {
          if (_typeof(c) == "object" && c !== null) {
            var t = c.$$typeof;

            switch (t) {
              case R:
                switch (c = c.type, c) {
                  case k:
                  case L:
                  case M:
                  case V:
                  case H:
                  case B:
                    return c;

                  default:
                    switch (c = c && c.$$typeof, c) {
                      case f:
                      case w:
                      case A:
                      case F:
                      case C:
                        return c;

                      default:
                        return t;
                    }

                }

              case P:
                return t;
            }
          }
        }

        function W(c) {
          return z(c) === L;
        }

        v.AsyncMode = k;
        v.ConcurrentMode = L;
        v.ContextConsumer = f;
        v.ContextProvider = C;
        v.Element = R;
        v.ForwardRef = w;
        v.Fragment = M;
        v.Lazy = A;
        v.Memo = F;
        v.Portal = P;
        v.Profiler = V;
        v.StrictMode = H;
        v.Suspense = B;

        v.isAsyncMode = function (c) {
          return W(c) || z(c) === k;
        };

        v.isConcurrentMode = W;

        v.isContextConsumer = function (c) {
          return z(c) === f;
        };

        v.isContextProvider = function (c) {
          return z(c) === C;
        };

        v.isElement = function (c) {
          return _typeof(c) == "object" && c !== null && c.$$typeof === R;
        };

        v.isForwardRef = function (c) {
          return z(c) === w;
        };

        v.isFragment = function (c) {
          return z(c) === M;
        };

        v.isLazy = function (c) {
          return z(c) === A;
        };

        v.isMemo = function (c) {
          return z(c) === F;
        };

        v.isPortal = function (c) {
          return z(c) === P;
        };

        v.isProfiler = function (c) {
          return z(c) === V;
        };

        v.isStrictMode = function (c) {
          return z(c) === H;
        };

        v.isSuspense = function (c) {
          return z(c) === B;
        };

        v.isValidElementType = function (c) {
          return typeof c == "string" || typeof c == "function" || c === M || c === L || c === V || c === H || c === B || c === B1 || _typeof(c) == "object" && c !== null && (c.$$typeof === A || c.$$typeof === F || c.$$typeof === C || c.$$typeof === f || c.$$typeof === w || c.$$typeof === A1 || c.$$typeof === S1 || c.$$typeof === y1 || c.$$typeof === F1);
        };

        v.typeOf = z;
      });
      K = y(function (A2, Y) {
        "use strict";

        Y.exports = $();
      });
      r1 = y(function (S2, a1) {
        "use strict";

        var E = K(),
            Z1 = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
            b1 = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
            R1 = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
        },
            Q = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
            T = {};
        T[E.ForwardRef] = R1;
        T[E.Memo] = Q;

        function J(c) {
          return E.isMemo(c) ? Q : T[c.$$typeof] || Z1;
        }

        var P1 = Object.defineProperty,
            k1 = Object.getOwnPropertyNames,
            X = Object.getOwnPropertySymbols,
            E1 = Object.getOwnPropertyDescriptor,
            T1 = Object.getPrototypeOf,
            c1 = Object.prototype;

        function t1(c, t, a) {
          if (typeof t != "string") {
            if (c1) {
              var r = T1(t);
              r && r !== c1 && t1(c, r, a);
            }

            var h = k1(t);
            X && (h = h.concat(X(t)));

            for (var e = J(c), l = J(t), n = 0; n < h.length; ++n) {
              var i = h[n];

              if (!b1[i] && !(a && a[i]) && !(l && l[i]) && !(e && e[i])) {
                var d = E1(t, i);

                try {
                  P1(c, i, d);
                } catch (_unused) {}
              }
            }
          }

          return c;
        }

        a1.exports = t1;
      });
      Z = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
      };
      b = I.createContext && I.createContext(Z);

      _s = function s() {
        return _s = Object.assign || function (c) {
          for (var t, a = 1, r = arguments.length; a < r; a++) {
            t = arguments[a];

            for (var h in t) {
              Object.prototype.hasOwnProperty.call(t, h) && (c[h] = t[h]);
            }
          }

          return c;
        }, _s.apply(this, arguments);
      };

      f1 = function f1(c, t) {
        var a = {};

        for (var r in c) {
          Object.prototype.hasOwnProperty.call(c, r) && t.indexOf(r) < 0 && (a[r] = c[r]);
        }

        if (c != null && typeof Object.getOwnPropertySymbols == "function") for (var h = 0, r = Object.getOwnPropertySymbols(c); h < r.length; h++) {
          t.indexOf(r[h]) < 0 && Object.prototype.propertyIsEnumerable.call(c, r[h]) && (a[r[h]] = c[r[h]]);
        }
        return a;
      };

      _ = w1;
      h1 = D1;
      N1 = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      e1 = N1;
      O1 = /[A-Z]|^ms/g;
      q1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

      v1 = function v1(t) {
        return t.charCodeAt(1) === 45;
      };

      l1 = function l1(t) {
        return t != null && typeof t != "boolean";
      };

      D = _(function (c) {
        return v1(c) ? c : c.replace(O1, "-$&").toLowerCase();
      });

      o1 = function o1(t, a) {
        switch (t) {
          case "animation":
          case "animationName":
            if (typeof a == "string") return a.replace(q1, function (r, h, e) {
              return g = {
                name: h,
                styles: e,
                next: g
              }, h;
            });
        }

        return e1[t] !== 1 && !v1(t) && typeof a == "number" && a !== 0 ? a + "px" : a;
      };

      n1 = /label:\s*([^\s;\n{]+)\s*(;|$)/g;

      i1 = function i1(t, a, r) {
        if (t.length === 1 && _typeof(t[0]) == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
        var h = !0,
            e = "";
        g = void 0;
        var l = t[0];
        l == null || l.raw === void 0 ? (h = !1, e += m(r, a, l)) : e += l[0];

        for (var n = 1; n < t.length; n++) {
          e += m(r, a, t[n]), h && (e += l[n]);
        }

        var i;
        n1.lastIndex = 0;

        for (var d = "", x; (x = n1.exec(e)) !== null;) {
          d += "-" + x[1];
        }

        var O = h1(e) + d;
        return {
          name: O,
          styles: e,
          next: g
        };
      };

      K2 = C1(r1());

      $1 = function $1(_ref) {
        var c = _ref.cartCount;
        return u(j1, {
          px: 32,
          py: 8,
          justify: "space-between"
        }, u(U1, {
          to: "/"
        }, u(G1, {
          colorScheme: "blue"
        }, "Home")), u(Y1, {
          cartCount: c
        }));
      };

      g1 = $1;

      Q1 = function Q1(_ref3) {
        var c = _ref3.piral;

        var _J = J1(0),
            _J2 = _slicedToArray(_J, 2),
            t = _J2[0],
            a = _J2[1];

        return X1(function () {
          var r = function r() {
            a(function (e) {
              return e + 1;
            });
          },
              h = function h() {
            a(function (e) {
              return e - 1;
            });
          };

          return c.on("increase", r), c.on("decrease", h), function () {
            c.off("increase", r), c.off("decrease", h);
          };
        }, []), c2(g1, {
          cartCount: t
        });
      };

      s1 = Q1;

      r2 = function r2(_ref4) {
        var c = _ref4.piral;
        return N(a2, {
          align: "center",
          justify: "center",
          direction: "column",
          h: 400,
          bg: "pink.100"
        }, N(t2, {
          as: "h1",
          size: "4xl",
          isTruncated: !0
        }, "Welcome to our site!"), N(c.Extension, {
          name: "homepage-actions"
        }));
      };

      u1 = r2;
    }
  };
});