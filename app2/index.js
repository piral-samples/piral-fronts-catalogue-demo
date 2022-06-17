//@pilet v:2(esbuildpr_app2,{})
System.register(["react", "@chakra-ui/react", "react-router-dom"], function (_export, _context) {
  "use strict";

  var u, P, L, e, a, y, k, x, n, b, p, S, A, v, g, T, _, C, d, B, l, F, m;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function w(_ref) {
    var t = _ref.children;
    return e.createElement(a, {
      mb: 4,
      width: 380,
      shadow: "base",
      borderWidth: "1px",
      alignSelf: {
        base: "center",
        lg: "flex-start"
      },
      borderColor: p("gray.200", "gray.500"),
      borderRadius: "xl"
    }, t);
  }

  function c(_ref2) {
    var t = _ref2.p,
        o = _ref2.addToCart;
    return e.createElement(y, {
      direction: ["row", "column"]
    }, e.createElement(w, null, e.createElement(a, {
      py: 4,
      px: 12,
      bg: p("gray.50", "gray.700")
    }, e.createElement(n, {
      fontWeight: "500",
      fontSize: "2xl"
    }, t.title), e.createElement(k, {
      justifyContent: "center"
    }, e.createElement(n, {
      fontSize: "3xl",
      fontWeight: "600"
    }, "$"), e.createElement(n, {
      fontSize: "5xl",
      fontWeight: "900"
    }, t.price))), e.createElement(b, {
      bg: "white",
      py: 4,
      borderBottomRadius: "xl"
    }, e.createElement(S, {
      spacing: 3,
      textAlign: "start",
      px: 12
    }, e.createElement(A, null, e.createElement(x, {
      src: t.image,
      alt: "Segun Adebayo",
      boxSize: "150px"
    }))), e.createElement(a, {
      w: "80%",
      pt: 7
    }, e.createElement(v, {
      w: "full",
      colorScheme: "blue",
      variant: t.active ? "solid" : "outline",
      onClick: function onClick() {
        return o(t.id);
      }
    }, t.active ? "REMOVE FROM CART" : "ADD TO CART")))));
  }

  function K(t) {
    t.registerPage("/app2", l), t.registerExtension("homepage-actions", m);
  }

  _export("setup", K);

  return {
    setters: [function (_react) {
      u = _react.createElement;
      P = _react.useState;
      e = _react.default;
      g = _react.createElement;
    }, function (_chakraUiReact) {
      L = _chakraUiReact.Stack;
      a = _chakraUiReact.Box;
      y = _chakraUiReact.Flex;
      k = _chakraUiReact.HStack;
      x = _chakraUiReact.Image;
      n = _chakraUiReact.Text;
      b = _chakraUiReact.VStack;
      p = _chakraUiReact.useColorModeValue;
      S = _chakraUiReact.List;
      A = _chakraUiReact.ListItem;
      v = _chakraUiReact.Button;
      _ = _chakraUiReact.Button;
    }, function (_reactRouterDom) {
      T = _reactRouterDom.Link;
    }],
    execute: function () {
      C = [{
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
          rate: 2.1,
          count: 430
        },
        active: !1
      }, {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
          rate: 4.7,
          count: 500
        },
        active: !1
      }, {
        id: 1,
        title: "Foldsack stylish Backpack",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120
        },
        active: !1
      }];
      d = C;

      B = function B(_ref3) {
        var t = _ref3.piral;

        var _P = P(d),
            _P2 = _slicedToArray(_P, 2),
            o = _P2[0],
            f = _P2[1];

        function h(r) {
          var s = _toConsumableArray(o);

          s.forEach(function (i) {
            i.id === r && (i.active ? (t.emit("decrease"), i.active = !1) : (t.emit("increase"), i.active = !0));
          }), f(s);
        }

        return u(L, {
          direction: {
            base: "column",
            md: "row"
          },
          textAlign: "center",
          justify: "center",
          spacing: {
            base: 4,
            lg: 10
          },
          bg: "gray.100",
          py: 10
        }, o.map(function (r) {
          return u(c, {
            p: r,
            addToCart: h,
            key: r.id
          });
        }));
      };

      l = B;

      F = function F() {
        return g(T, {
          to: "/app2"
        }, g(_, {
          colorScheme: "blue",
          mt: 8
        }, "Browse products"));
      };

      m = F;
    }
  };
});