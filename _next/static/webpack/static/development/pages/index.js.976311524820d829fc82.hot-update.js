webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ContentSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContentSection */ "./components/ContentSection.js");
/* harmony import */ var _components_NavBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBox */ "./components/NavBox.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../items.json */ "./items.json");
var _items_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../items.json */ "./items.json", 1);
var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/pages/index.js";













function Index() {
  var generalGalery = {
    items: [{
      id: "1",
      picture: "/static/tennisplatz_niederbiel.jpg",
      legend: "Unsere Anlage"
    }, {
      id: "3",
      picture: "/static/tennisplatz_platz1.jpg",
      legend: "Unsere Tennisplätze"
    }, {
      id: "2",
      picture: "/static/clubheim_draussen.jpg",
      legend: "Das Vereinsheim"
    }, {
      id: "3",
      picture: "/static/clubheim_drinnen.jpg",
      legend: "Unser Vereinsheim"
    }, {
      id: "3",
      picture: "/static/clubheim_drinnen2.jpg",
      legend: "Unser Vereinsheim"
    }]
  };
  var teamGalery = {
    items: [{
      id: "1",
      picture: "/static/teamfoto_herren.jpeg",
      legend: "Herren"
    }, {
      id: "2",
      picture: "/static/teamfoto_damen.jpeg",
      legend: "Damen"
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navName: "Start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    link: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block justify-content-md-center",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    lg: "7",
    className: "padding-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Herzlich Willkommen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "beim Tennisverein 77 Niederbiel! Wir freuen uns, dass Sie unsere Internetseite besuchen. Auch bei Facebook halten wir sie auf dem Laufenden. \xDCber ein Like w\xFCrden wir uns sehr freuen!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    lg: "10",
    className: "padding-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: generalGalery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    className: "padding-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Schnupperangebot"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Erst probieren, dann entscheiden!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich f\xFCr eine Mitgliedschaft, zahlen Sie f\xFCr das Beitrittsjahr nur die H\xE4lfte!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/mitglied",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "zum angebot"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    className: "padding-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, " Vereinsheim mieten"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Auch Nicht-Mitglieder k\xF6nnen unser Vereinsheim mieten. Dieses hat Platz f\xFCr ca. 50 Personen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Mit eigener K\xFCche und moderner Theke!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/vereinsheim",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Zum Angebot"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "Unsere Anlage",
    link: "/anlage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    className: "padding-bottom ripple info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "\xDCber uns"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Der Ort Niederbiel geh\xF6rt zur Stadt Solms und liegt wundersch\xF6n ruhig im Lahntal in der N\xE4he der Bundesstra\xDFe 49 zwischen Giessen im Osten und Limburg im Westen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Prunkst\xFCck der Anlage ist das Vereinsheim mit gro\xDFem, hellen Gastraum (renoviert im Fr\xFChjahr 2008) und ger\xE4umigen Umkleider\xE4umen f\xFCr Damen und Herren mitsamt sanit\xE4ren Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Clubhauses im Gr\xFCnen mit Blick auf die Pl\xE4tze."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/about",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Mehr"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NavBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: _items_json__WEBPACK_IMPORTED_MODULE_10__.listItems.aboutItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    style: {
      paddingBottom: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookProvider"], {
    appId: "716448928794798",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["Page"], {
    href: "https://www.facebook.com/TV-77-Niederbiel-612990049042372/",
    tabs: "timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "Teams",
    link: "/teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-4209092776" + " " + "ripple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Teams"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. Hier k\xF6nnen Sie sich einen \xDCberblick verschaffen und aktuelle Ergebnisse einsehen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/teams",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "\xDCbersicht"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: teamGalery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4209092776",
    __self: this
  }, ".ripple.jsx-4209092776{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;border-radius:10px;}.ripple.jsx-4209092776:hover{background:#333 radial-gradient(circle,transparent 1%,#333 1%) center/15000%;}.ripple.jsx-4209092776:active{background-color:#444;background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.accent-line.jsx-4209092776{height:1px;width:10vh;background-color:#ff5c00;margin:10px 0px;}.top.jsx-4209092776 h1.jsx-4209092776{padding:200px;position:relative;z-index:2;}.logo-big.jsx-4209092776{height:auto;width:30vh;}ul.jsx-4209092776{margin:0px;padding:0px;}.box.jsx-4209092776{position:relative;top:10px;opacity:1;margin:auto;}a.jsx-4209092776{width:100%;color:black;}a.jsx-4209092776:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}.link-holder.jsx-4209092776{font-size:1.2em;margin:15px;padding:5px;border:1px solid #212529;}.offer-link.jsx-4209092776:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9MUyxBQUc4QyxBQUtvRCxBQUd6RCxBQUtiLEFBT0MsQUFLRixBQUtDLEFBSUssQUFRUixBQUlFLEFBSUksQUFRWSxXQTVDZixBQWlCQyxBQWFqQixDQWxCYyxBQXFCVSxFQTFCSCxFQThCTixFQWhCSCxJQTFCZ0IsQUFNRSxDQVk3QixBQUtFLEFBWUYsSUEzQ2lDLEFBbUNyQixDQWdCRSxJQTlCRixLQWVFLEdBZ0JhLEVBOUIzQixDQWIrQixJQU1YLEVBc0JwQixXQXFCRSxFQVhGLENBL0JFLEVBcUNGLFlBaERFLFlBSnVCLFlBU3ZCLE9BUkEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRTZWN0aW9uXCI7XG5pbXBvcnQgTmF2Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJveFwiXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fyb3VzZWxcIlxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBQYWdlIH0gZnJvbSAncmVhY3QtZmFjZWJvb2snO1xuaW1wb3J0IEdhbGVyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcblxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJcIlxuaW1wb3J0IEl0ZW1zIGZyb20gXCIuLi9pdGVtcy5qc29uXCJcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgZ2VuZXJhbEdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9uaWVkZXJiaWVsLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXJlIEFubGFnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9wbGF0ejEuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlcmUgVGVubmlzcGzDpHR6ZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhcyBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXIgVmVyZWluc2hlaW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvY2x1YmhlaW1fZHJpbm5lbjIuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9XG5cbiAgICBdXG4gIH1cblxuXG4gIGNvbnN0IHRlYW1HYWxlcnkgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdGVhbWZvdG9faGVycmVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkhlcnJlblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19kYW1lbi5qcGVnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJEYW1lblwiXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IG5hdk5hbWU9XCJTdGFydFwiPlxuXG5cblxuICAgICAgPFJvdyBub0d1dHRlcnMgPlxuICAgICAgICA8Q29udGVudFNlY3Rpb24gbGluaz1cIi9hYm91dFwiPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGxnPVwiN1wiIGNsYXNzTmFtZT1cInBhZGRpbmctYm90dG9tXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZ2dlclwiPkhlcnpsaWNoIFdpbGxrb21tZW48L3NwYW4+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIGJlaW0gVGVubmlzdmVyZWluIDc3IE5pZWRlcmJpZWwhIFdpciBmcmV1ZW4gdW5zLCBkYXNzIFNpZSB1bnNlcmUgSW50ZXJuZXRzZWl0ZSBiZXN1Y2hlbi4gQXVjaCBiZWkgRmFjZWJvb2sgaGFsdGVuIHdpciBzaWUgYXVmIGRlbSBMYXVmZW5kZW4uIMOcYmVyIGVpbiBMaWtlIHfDvHJkZW4gd2lyIHVucyBzZWhyIGZyZXVlbiFcbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGxnPVwiMTBcIiBjbGFzc05hbWU9XCJwYWRkaW5nLWJvdHRvbVwiPlxuXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBkYXRhPXtnZW5lcmFsR2FsZXJ5fSAvPlxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIGNsYXNzTmFtZT1cInBhZGRpbmctYm90dG9tXCI+XG5cbiAgICAgICAgICAgICAgPEJhbm5lcj5cblxuXG5cbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSA+U2NobnVwcGVyYW5nZWJvdDwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+RXJzdCBwcm9iaWVyZW4sIGRhbm4gZW50c2NoZWlkZW4hPC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkVyaGFsdGVuIFNpZSBlaW5lIGdyYXRpcyBUcmFpbmVyc3R1bmRlLiBFbnRzY2hlaWRlbiBTaWUgc2ljaCBmw7xyIGVpbmUgTWl0Z2xpZWRzY2hhZnQsIHphaGxlbiBTaWUgZsO8ciBkYXMgQmVpdHJpdHRzamFociBudXIgZGllIEjDpGxmdGUhPC9zcGFuPjxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi9taXRnbGllZFwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+enVtIGFuZ2Vib3Q8L2E+XG5cbiAgICAgICAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBjbGFzc05hbWU9XCJwYWRkaW5nLWJvdHRvbVwiPlxuXG5cbiAgICAgICAgICAgICAgPEJhbm5lcj5cblxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PiBWZXJlaW5zaGVpbSBtaWV0ZW48L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkF1Y2ggTmljaHQtTWl0Z2xpZWRlciBrw7ZubmVuIHVuc2VyIFZlcmVpbnNoZWltIG1pZXRlbi4gRGllc2VzIGhhdCBQbGF0eiBmw7xyIGNhLiA1MCBQZXJzb25lbi48L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWl0IGVpZ2VuZXIgS8O8Y2hlIHVuZCBtb2Rlcm5lciBUaGVrZSE8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi92ZXJlaW5zaGVpbVwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+WnVtIEFuZ2Vib3Q8L2E+XG5cblxuICAgICAgICAgICAgICA8L0Jhbm5lcj5cblxuXG4gICAgICAgICAgICA8L0NvbD5cblxuXG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPC9Db250ZW50U2VjdGlvbiA+XG4gICAgICAgIDxDb250ZW50U2VjdGlvbiBoZWFkZXI9XCJVbnNlcmUgQW5sYWdlXCIgbGluaz1cIi9hbmxhZ2VcIj5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cblxuXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBjbGFzc05hbWU9XCJwYWRkaW5nLWJvdHRvbSByaXBwbGUgaW5mby10ZXh0XCI+XG4gICAgICAgICAgICAgIDxoMT7DnGJlciB1bnM8L2gxPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZXIgVFYgNzcgTmllZGVyYmllbCBpc3QgZWluIFRlbm5pc3ZlcmVpbiBtaXQgZGVyemVpdCBydW5kIDEzNSBNaXRnbGllZGVybiwgd292b24gZ3V0IDUwJSBha3RpdmVuIFN0YXR1cyBiZXNpdHplbi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxwPkRlciBPcnQgTmllZGVyYmllbCBnZWjDtnJ0IHp1ciBTdGFkdCBTb2xtcyB1bmQgbGllZ3Qgd3VuZGVyc2Now7ZuIHJ1aGlnIGltIExhaG50YWwgaW4gZGVyIE7DpGhlIGRlciBCdW5kZXNzdHJhw59lIDQ5IHp3aXNjaGVuIEdpZXNzZW4gaW0gT3N0ZW4gdW5kIExpbWJ1cmcgaW0gV2VzdGVuLlxuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+UHJ1bmtzdMO8Y2sgZGVyIEFubGFnZSBpc3QgZGFzIFZlcmVpbnNoZWltIG1pdCBncm/Dn2VtLCBoZWxsZW4gR2FzdHJhdW0gKHJlbm92aWVydCBpbSBGcsO8aGphaHIgMjAwOCkgdW5kIGdlcsOkdW1pZ2VuIFVta2xlaWRlcsOkdW1lbiBmw7xyIERhbWVuIHVuZCBIZXJyZW4gbWl0c2FtdCBzYW5pdMOkcmVuIEFubGFnZW4uIEJlc29uZGVycyBiZWxpZWJ0IGltIFNvbW1lciAtIG5pY2h0IG51ciBiZWkgVmVyZWluc21pdGdsaWVkZXJuISAtIGlzdCBkZXIgRnJlaXNpdHogZGVzIENsdWJoYXVzZXMgaW0gR3LDvG5lbiBtaXQgQmxpY2sgYXVmIGRpZSBQbMOkdHplLlxuXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL2Fib3V0XCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj5NZWhyPC9hPlxuXG4gICAgICAgICAgICAgIDxOYXZCb3ggaXRlbXM9e0l0ZW1zLmxpc3RJdGVtcy5hYm91dEl0ZW1zfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjcxNjQ0ODkyODc5NDc5OFwiPlxuICAgICAgICAgICAgICAgICAgPFBhZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UVi03Ny1OaWVkZXJiaWVsLTYxMjk5MDA0OTA0MjM3Mi9cIiB0YWJzPVwidGltZWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxuXG4gICAgICAgIDxDb250ZW50U2VjdGlvbiBoZWFkZXI9XCJUZWFtc1wiIGxpbms9XCIvdGVhbXNcIj5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cblxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgPlxuICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmlwcGxlXCI+VGVhbXM8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgSmVkZSBTYWlzb24gc3RlbGxlbiB3aXIgZWluaWdlIE1hbm5zY2hhZnRlbiB1bnRlcnNjaGllZGxpY2hlciBBbHRlcnNrbGFzc2VuLlxuICAgICAgICAgICAgICAgICAgSGllciBrw7ZubmVuIFNpZSBzaWNoIGVpbmVuIMOcYmVyYmxpY2sgdmVyc2NoYWZmZW4gdW5kIGFrdHVlbGxlIEVyZ2Vibmlzc2UgZWluc2VoZW4uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi90ZWFtc1wifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+w5xiZXJzaWNodDwvYT48YnI+PC9icj5cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgIDxHYWxlcnkgZGF0YT17dGVhbUdhbGVyeX0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPC9Db250ZW50U2VjdGlvbj5cbiAgICAgIDwvUm93PlxuXG5cblxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgICAgICAucmlwcGxlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJpcHBsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDElLCAjMzMzIDElKSBjZW50ZXIvMTUwMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yaXBwbGU6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hY2NlbnQtbGluZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50b3AgaDEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMDBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyOyAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvLWJpZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgIHdpZHRoOiAzMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmstaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4OyBcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjUyOTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIC5vZmZlci1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.976311524820d829fc82.hot-update.js.map