webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Drawer */ "./components/Drawer.js");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bootstrap.min.css */ "./bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../App.css */ "./App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Layout.js";












function Layout(props) {
  var sites = [{
    id: "1",
    href: "/",
    display: "Start"
  }, {
    id: "2",
    href: "/about",
    display: "Über uns"
  }, {
    id: "3",
    href: "/teams",
    display: "Teams"
  }, {
    id: "4",
    href: "/mitglied",
    display: "Mitgliedschaft"
  }, {
    id: "6",
    href: "/vereinsheim",
    display: "Vereinsheim"
  }, {
    id: "5",
    href: "/kontakt",
    display: "Kontakt"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isTop = _useState2[0],
      setIsTop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isDrawerOpen = _useState4[0],
      setIsDrawerOpen = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "UTF-8",
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "TV 77 Niederbiel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    closeDrawer: function closeDrawer() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    query: "(max-width: 922px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, function (matches) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sites: sites,
      openDrawer: function openDrawer() {
        return setIsDrawerOpen(true);
      },
      navName: props.navName,
      isTop: isTop,
      mobile: matches,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onChange: function onChange(isVisible) {
      return setIsTop(isVisible);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2584796201" + " " + "top-background-tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2584796201" + " " + "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-2584796201" + " " + "img-foreground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-2584796201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2584796201" + " " + "content-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2584796201" + " " + "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sites: sites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2584796201",
    __self: this
  }, ".top-background-tiny.jsx-2584796201{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-2584796201{background-color:#20232a;height:100px;width:100%;}.top.jsx-2584796201{background-image:url(\"static/tennis_court_sand.jpg\");background-size:cover;background-repeat:no-repeat;background-attachment:fixed;opacity:0.6;overflow:hidden;height:auto;padding-top:50px;width:100%;color:white;text-align:center;}.top.jsx-2584796201 .img-foreground.jsx-2584796201{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.content-container.jsx-2584796201{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:center;}.content-box.jsx-2584796201{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);position:relative;top:-50px;background:#222;padding:10px 0px;opacity:1;max-width:1024px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHYSxBQUk4QyxBQU1BLEFBTTRCLEFBYzFDLEFBUWdCLEFBT3lDLGFBZHpELFlBMUJBLEFBTUUsQ0FxQkgsQ0FPa0IsU0FqQ2xCLEVBTUEsQUFxQlEsU0ExQnRCLEVBTUEsSUFJMEIsRUF1Qk0sR0FObkIsU0FZUyxFQVhWLE1BakJvQixJQWtCaEMsSUFLMEIsRUFNWixVQUNNLFFBN0JZLEVBdUJYLE1BT0EsWUFOckIsS0FPYyxHQTlCRSxPQStCSyxLQTlCRCxZQStCSixJQTlCSyxRQWtDckIsSUFqQ3FCLGlCQUNOLFdBQ0MsWUFDTSxrQkFFdEIiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vRHJhd2VyXCJcblxuaW1wb3J0IFwiLi4vYm9vdHN0cmFwLm1pbi5jc3NcIlxuaW1wb3J0IFwiLi4vQXBwLmNzc1wiXG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIGNvbnN0IHNpdGVzID0gW1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJTdGFydFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIsOcYmVyIHVuc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL3RlYW1zXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlRlYW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6XCI0XCIsXG4gICAgICAgICAgICBocmVmOlwiL21pdGdsaWVkXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIk1pdGdsaWVkc2NoYWZ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6XCI2XCIsXG4gICAgICAgICAgICBocmVmOlwiL3ZlcmVpbnNoZWltXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlZlcmVpbnNoZWltXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiNVwiLFxuICAgICAgICAgICAgaHJlZjogXCIva29udGFrdFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJLb250YWt0XCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IFtpc1RvcCwgc2V0SXNUb3BdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgPHRpdGxlPlRWIDc3IE5pZWRlcmJpZWw8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIvPiAgICBcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIvPlxuXG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8RHJhd2VyIHNpdGVzPXtzaXRlc30gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IGNsb3NlRHJhd2VyPXsoKT0+IHNldElzRHJhd2VyT3BlbihmYWxzZSl9IC8+XG5cbiAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogOTIycHgpXCI+XG4gICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9PiA8SGVhZGVyIHNpdGVzPXtzaXRlc30gb3BlbkRyYXdlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKHRydWUpfSAgbmF2TmFtZT17cHJvcHMubmF2TmFtZX0gaXNUb3A9e2lzVG9wfSBtb2JpbGU9e21hdGNoZXN9ID48L0hlYWRlcj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9NZWRpYT5cblxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gc2V0SXNUb3AoaXNWaXNpYmxlKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYWNrZ3JvdW5kLXRpbnlcIiAvPlxuICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblxuICAgICAgICAgICAgPGNlbnRlcj5cblxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZvcmVncm91bmRcIiBzcmM9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCJzdGF0aWMvbG9nb193aGl0ZS5wbmdcIn0gLz5cblxuICAgICAgICAgICAgPC9jZW50ZXI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjZW50ZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvY2VudGVyPlxuXG5cblxuICAgICAgICA8Rm9vdGVyIHNpdGVzPXtzaXRlc30gLz5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLXRpbnkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtY29sb3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50b3Age1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzdGF0aWMvdGVubmlzX2NvdXJ0X3NhbmQuanBnXCIpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAgICAgO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wICAuaW1nLWZvcmVncm91bmQge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC01MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cblxuXG5cbiAgICA8Lz5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.9513f6a82a9644d87b1f.hot-update.js.map