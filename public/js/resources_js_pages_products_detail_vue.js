(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_products_detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/detail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "detail",
  data: function data() {
    return {
      form: {
        selected: 1
      },
      product: {},
      quantitySelect: []
    };
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/product/".concat(_this.$route.params.slug));

              case 3:
                _this.product = _context.sent.data.data.product;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);

                _this.$router.push({
                  name: "not-found"
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    addToCart: function addToCart() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.$store.dispatch('addToCart', {
                  product: _this2.product,
                  quantity: _this2.form.selected
                });

              case 3:
                _context2.next = 5;
                return _this2.$store.dispatch('saveCart');

              case 5:
                _this2.$notify({
                  group: 'notify',
                  type: 'success',
                  title: 'Added to cart',
                  text: _this2.product.name
                });

                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    }
  },
  created: function created() {
    for (var i = 1; i <= 10; i++) {
      this.quantitySelect.push({
        value: i,
        text: i
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getProduct();
  }
});

/***/ }),

/***/ "./resources/js/pages/products/detail.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/products/detail.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_vue_vue_type_template_id_0b457303_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=0b457303&scoped=true& */ "./resources/js/pages/products/detail.vue?vue&type=template&id=0b457303&scoped=true&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/products/detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _detail_vue_vue_type_template_id_0b457303_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _detail_vue_vue_type_template_id_0b457303_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0b457303",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/products/detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/products/detail.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/products/detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/products/detail.vue?vue&type=template&id=0b457303&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/products/detail.vue?vue&type=template&id=0b457303&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_0b457303_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_0b457303_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_0b457303_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail.vue?vue&type=template&id=0b457303&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/detail.vue?vue&type=template&id=0b457303&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/detail.vue?vue&type=template&id=0b457303&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/products/detail.vue?vue&type=template&id=0b457303&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { attrs: { role: "main" } },
    [
      _c(
        "b-container",
        { staticClass: "py-5" },
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { lg: "5" } }, [
                _c("img", {
                  staticClass: "img-cover",
                  attrs: { src: _vm.product.image, alt: _vm.product.name }
                })
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "7" } },
                [
                  _c("h1", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.product.name))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-weight-bold text-danger" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.product.formatted_price) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-form",
                    {
                      staticClass: "mb-4",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.addToCart($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-form-group",
                            { staticClass: "col-3 col-lg-2" },
                            [
                              _c("b-select", {
                                attrs: { options: _vm.quantitySelect },
                                model: {
                                  value: _vm.form.selected,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "selected", $$v)
                                  },
                                  expression: "form.selected"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { lg: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "text-capitalize",
                                  attrs: {
                                    type: "submit",
                                    variant: "primary",
                                    squared: "",
                                    block: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "add to cart\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { lg: "6" } },
                            [
                              _c("router-link", {
                                attrs: { to: { name: "checkout" }, custom: "" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var isActive = ref.isActive
                                      var navigate = ref.navigate
                                      var href = ref.href
                                      return [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "text-capitalize",
                                            attrs: {
                                              active: isActive,
                                              href: href,
                                              variant: "outline-success",
                                              squared: "",
                                              block: ""
                                            },
                                            on: { click: navigate }
                                          },
                                          [
                                            _vm._v(
                                              "check out\n                                "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.product.description) +
                        "\n                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);