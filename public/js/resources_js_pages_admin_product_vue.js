(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  name: "User",
  data: function data() {
    return {
      product_slug: "",
      product_image: "",
      disableEdit: true,
      form: {
        name: "",
        email: "",
        description: "",
        status: 0,
        image: null
      },
      products: []
    };
  },
  methods: {
    enableEdit: function enableEdit() {
      this.disableEdit = !this.disableEdit;
    },
    editProduct: function editProduct(product) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData, response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                formData = new FormData();
                formData.append("_method", "PUT");
                formData.append("name", _this.form.name);
                formData.append("description", _this.form.description);
                formData.append("price", _this.form.price);
                formData.append("status", _this.form.status);

                if (_this.form.image) {
                  console.log('hola');
                  formData.append("image", _this.form.image);
                }

                _context.next = 10;
                return axios.post("/api/product/".concat(product), formData, {
                  headers: {
                    Authorization: "Bearer ".concat(_this.token)
                  },
                  "Content-Type": "multipart/form-data"
                });

              case 10:
                response = _context.sent;

                _this.$nextTick(function () {
                  _this.$bvModal.hide("modal-see");

                  _this.form = {
                    name: "",
                    email: "",
                    description: "",
                    status: 0,
                    image: null
                  };
                  _this.product_slug = "";
                  _this.product_image = "";

                  _this.getProducts();

                  _this.$notify({
                    group: "notify",
                    type: "success",
                    title: "Product Edited",
                    text: response.message
                  });
                });

                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                _response = _context.t0.response;

                _this.$notify({
                  group: "notify",
                  type: "error",
                  title: "Error",
                  text: _response.message
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }))();
    },
    getProduct: function getProduct(product) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var productResponse, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("/api/product/".concat(product));

              case 3:
                productResponse = _context2.sent.data.data.product;

                _this2.$nextTick(function () {
                  _this2.disableEdit = true;
                  _this2.product_slug = productResponse.slug;
                  _this2.product_image = productResponse.image;
                  _this2.form.name = productResponse.name;
                  _this2.form.description = productResponse.description;
                  _this2.form.price = productResponse.price;
                  _this2.form.status = productResponse.status;

                  _this2.$bvModal.show("modal-see");
                });

                _context2.next = 12;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                response = _context2.t0.response;

                _this2.getProducts();

                _this2.$notify({
                  group: "notify",
                  type: "error",
                  title: "Error",
                  text: response.message
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    addProduct: function addProduct() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData, response, _response2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                formData = new FormData();
                formData.append("name", _this3.form.name);
                formData.append("description", _this3.form.description);
                formData.append("price", _this3.form.price);
                formData.append("status", _this3.form.status);
                formData.append("image", _this3.form.image);
                _context3.next = 9;
                return axios.post("/api/product", formData, {
                  headers: {
                    Authorization: "Bearer ".concat(_this3.token),
                    "Content-Type": "multipart/form-data"
                  }
                });

              case 9:
                response = _context3.sent;

                _this3.$nextTick(function () {
                  _this3.$bvModal.hide("modal-add");

                  _this3.form = {
                    name: "",
                    email: "",
                    description: "",
                    status: 0,
                    image: null
                  };

                  _this3.getProducts();

                  _this3.$notify({
                    group: "notify",
                    type: "success",
                    title: "Product Added",
                    text: response.message
                  });
                });

                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                _response2 = _context3.t0.response;

                _this3.$notify({
                  group: "notify",
                  type: "error",
                  title: "Error",
                  text: _response2.message
                });

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }))();
    },
    getProducts: function getProducts() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("/api/product", {
                  headers: {
                    Authorization: "Bearer ".concat(_this4.token)
                  }
                });

              case 2:
                _this4.products = _context4.sent.data.data.products;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    deleteProduct: function deleteProduct(product) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return axios["delete"]("/api/product/".concat(product), {
                  headers: {
                    Authorization: "Bearer ".concat(_this5.token)
                  }
                });

              case 3:
                _this5.$nextTick(function () {
                  _this5.getProducts();
                });

                _context5.next = 11;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                response = _context5.t0.response;

                _this5.getProducts();

                _this5.$notify({
                  group: "notify",
                  type: "error",
                  title: "Error",
                  text: response.message
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    this.getProducts();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    token: "getToken"
  }))
});

/***/ }),

/***/ "./resources/js/pages/admin/product.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/admin/product.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_vue_vue_type_template_id_79c10816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=79c10816&scoped=true& */ "./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&scoped=true&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _product_vue_vue_type_template_id_79c10816_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_vue_vue_type_template_id_79c10816_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "79c10816",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/product.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/admin/product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_79c10816_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_79c10816_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_79c10816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=template&id=79c10816&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/product.vue?vue&type=template&id=79c10816&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-5", attrs: { role: "main" } },
    [
      _c(
        "b-container",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "text-right mb-3", attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-add",
                          modifiers: { "modal-add": true }
                        }
                      ],
                      attrs: { variant: "primary" }
                    },
                    [_vm._v(" Add Product ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { cols: "12" } }, [
                _c("table", { staticClass: "table table-striped" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Price")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Options")])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.products.length > 0
                    ? _c(
                        "tbody",
                        _vm._l(_vm.products, function(product) {
                          return _c("tr", { key: product.id }, [
                            _c("th", { attrs: { scope: "row" } }, [
                              _vm._v(_vm._s(product.name))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(product.formatted_price))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: { size: "sm", variant: "danger" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteProduct(product.slug)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-trash-alt" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    attrs: { size: "sm", variant: "info" },
                                    on: {
                                      click: function($event) {
                                        return _vm.getProduct(product.slug)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-eye" })]
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      )
                    : _vm._e()
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-see",
            size: "lg",
            title: "See/Edit product",
            "hide-footer": "",
            centered: ""
          }
        },
        [
          _c(
            "b-container",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "text-right p-0 mb-4",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "warning" },
                          on: { click: _vm.enableEdit }
                        },
                        [_vm._v("Edit")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      attrs: {
                        cols: "12",
                        lg: "8",
                        order: "1",
                        "order-lg": "0"
                      }
                    },
                    [
                      _c("ValidationObserver", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var invalid = ref.invalid
                              return [
                                _c(
                                  "b-form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.editProduct(_vm.product_slug)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Name",
                                            rules: "required|alpha_spaces"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var valid = ref.valid
                                                  var errors = ref.errors
                                                  return [
                                                    _c("b-form-input", {
                                                      attrs: {
                                                        disabled:
                                                          _vm.disableEdit,
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        placeholder: "name"
                                                      },
                                                      model: {
                                                        value: _vm.form.name,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "name",
                                                            $$v
                                                          )
                                                        },
                                                        expression: "form.name"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          "\n                    " +
                                                            _vm._s(errors[0]) +
                                                            "\n                  "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-group",
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Description",
                                            rules: "required"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var valid = ref.valid
                                                  var errors = ref.errors
                                                  return [
                                                    _c("b-form-textarea", {
                                                      attrs: {
                                                        disabled:
                                                          _vm.disableEdit,
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        placeholder:
                                                          "Description"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.form.description,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "description",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "form.description"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          "\n                    " +
                                                            _vm._s(errors[0]) +
                                                            "\n                  "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-row",
                                      [
                                        _c(
                                          "b-form-group",
                                          { staticClass: "col-md-6" },
                                          [
                                            _c("ValidationProvider", {
                                              attrs: {
                                                name: "Status",
                                                rules: "required|oneOf:0,1"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return [
                                                        _c(
                                                          "b-form-radio-group",
                                                          {
                                                            attrs: {
                                                              disabled:
                                                                _vm.disableEdit,
                                                              state: errors[0]
                                                                ? false
                                                                : valid
                                                                ? true
                                                                : null,
                                                              options: [
                                                                {
                                                                  text:
                                                                    "active",
                                                                  value: 1
                                                                },
                                                                {
                                                                  text:
                                                                    "inactive",
                                                                  value: 0
                                                                }
                                                              ],
                                                              buttons: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.form.status,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "status",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "form.status"
                                                            }
                                                          }
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              "\n                      " +
                                                                _vm._s(
                                                                  errors[0]
                                                                ) +
                                                                "\n                    "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-group",
                                          { staticClass: "col-md-6" },
                                          [
                                            _c("ValidationProvider", {
                                              attrs: {
                                                name: "Price",
                                                rules: "required|double"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return [
                                                        _c("b-form-input", {
                                                          attrs: {
                                                            disabled:
                                                              _vm.disableEdit,
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            placeholder: "Price"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form.price,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "price",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.price"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              "\n                      " +
                                                                _vm._s(
                                                                  errors[0]
                                                                ) +
                                                                "\n                    "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-group",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !_vm.disableEdit,
                                            expression: "!disableEdit"
                                          }
                                        ]
                                      },
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Image",
                                            rules:
                                              "image|size:5120|mimes:image/jpeg,image/jpg"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var valid = ref.valid
                                                  var errors = ref.errors
                                                  return [
                                                    _c("b-form-file", {
                                                      attrs: {
                                                        disabled:
                                                          _vm.disableEdit,
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        placeholder:
                                                          "Choose a file or drop it here..."
                                                      },
                                                      model: {
                                                        value: _vm.form.image,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "image",
                                                            $$v
                                                          )
                                                        },
                                                        expression: "form.image"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("b-form-text", [
                                                      _vm._v(
                                                        "\n                    Leave blank if you don't want to change the image\n                  "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          "\n                    " +
                                                            _vm._s(errors[0]) +
                                                            "\n                  "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !_vm.disableEdit,
                                            expression: "!disableEdit"
                                          }
                                        ],
                                        attrs: {
                                          type: "submit",
                                          variant: "primary",
                                          squared: "",
                                          block: "",
                                          disabled: invalid
                                        }
                                      },
                                      [_vm._v("Edit")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      attrs: {
                        cols: "12",
                        lg: "4",
                        order: "0",
                        "order-lg": "1"
                      }
                    },
                    [
                      _c("b-img", {
                        attrs: {
                          thumbnail: "",
                          fluid: "",
                          src: _vm.product_image,
                          alt: _vm.form.name
                        }
                      })
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
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-add",
            size: "lg",
            title: "Add product",
            "hide-footer": "",
            centered: ""
          }
        },
        [
          _c(
            "b-container",
            [
              _c("ValidationObserver", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var invalid = ref.invalid
                      return [
                        _c(
                          "b-form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.addProduct($event)
                              }
                            }
                          },
                          [
                            _c(
                              "b-form-group",
                              [
                                _c("ValidationProvider", {
                                  attrs: {
                                    name: "Name",
                                    rules: "required|alpha_spaces"
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var valid = ref.valid
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state: errors[0]
                                                  ? false
                                                  : valid
                                                  ? true
                                                  : null,
                                                placeholder: "name"
                                              },
                                              model: {
                                                value: _vm.form.name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "name",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.name"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(errors[0]) +
                                                  "\n              "
                                              )
                                            ])
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              [
                                _c("ValidationProvider", {
                                  attrs: {
                                    name: "Description",
                                    rules: "required"
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var valid = ref.valid
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-textarea", {
                                              attrs: {
                                                state: errors[0]
                                                  ? false
                                                  : valid
                                                  ? true
                                                  : null,
                                                placeholder: "Description"
                                              },
                                              model: {
                                                value: _vm.form.description,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "description",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.description"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(errors[0]) +
                                                  "\n              "
                                              )
                                            ])
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-row",
                              [
                                _c(
                                  "b-form-group",
                                  { staticClass: "col-md-6" },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Status",
                                        rules: "required|oneOf:0,1"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var valid = ref.valid
                                              var errors = ref.errors
                                              return [
                                                _c("b-form-radio-group", {
                                                  attrs: {
                                                    state: errors[0]
                                                      ? false
                                                      : valid
                                                      ? true
                                                      : null,
                                                    options: [
                                                      {
                                                        text: "active",
                                                        value: 1
                                                      },
                                                      {
                                                        text: "inactive",
                                                        value: 0
                                                      }
                                                    ],
                                                    buttons: ""
                                                  },
                                                  model: {
                                                    value: _vm.form.status,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "status",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.status"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(errors[0]) +
                                                      "\n                "
                                                  )
                                                ])
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  { staticClass: "col-md-6" },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Price",
                                        rules: "required|double"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var valid = ref.valid
                                              var errors = ref.errors
                                              return [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    state: errors[0]
                                                      ? false
                                                      : valid
                                                      ? true
                                                      : null,
                                                    placeholder: "Price"
                                                  },
                                                  model: {
                                                    value: _vm.form.price,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "price",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.price"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(errors[0]) +
                                                      "\n                "
                                                  )
                                                ])
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              [
                                _c("ValidationProvider", {
                                  attrs: {
                                    name: "Image",
                                    rules:
                                      "required|image|size:5120|mimes:image/jpeg,image/jpg"
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var valid = ref.valid
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-file", {
                                              attrs: {
                                                state: errors[0]
                                                  ? false
                                                  : valid
                                                  ? true
                                                  : null,
                                                placeholder:
                                                  "Choose a file or drop it here..."
                                              },
                                              model: {
                                                value: _vm.form.image,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "image",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.image"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(errors[0]) +
                                                  "\n              "
                                              )
                                            ])
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  type: "submit",
                                  variant: "primary",
                                  squared: "",
                                  block: "",
                                  disabled: invalid
                                }
                              },
                              [_vm._v("Add")]
                            )
                          ],
                          1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);