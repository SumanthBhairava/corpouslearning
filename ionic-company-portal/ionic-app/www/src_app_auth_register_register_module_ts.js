"use strict";
(self["webpackChunkcompany_portal"] = self["webpackChunkcompany_portal"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 4674:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageModule: () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
}];
let RegisterPageModule = /*#__PURE__*/(() => {
  class RegisterPageModule {
    static {
      this.ɵfac = function RegisterPageModule_Factory(t) {
        return new (t || RegisterPageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: RegisterPageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
      });
    }
  }
  return RegisterPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterPageModule, {
    declarations: [_register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 8421:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPage: () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _var_www_html_corpouslearning_ionic_company_portal_ionic_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7401);







function RegisterPage_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 53)(3, "div", 53)(4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.passStrength >= 1)("weak", ctx_r1.passStrength === 1)("medium", ctx_r1.passStrength === 2)("strong", ctx_r1.passStrength >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.passStrength >= 2)("medium", ctx_r1.passStrength === 2)("strong", ctx_r1.passStrength >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.passStrength >= 3)("strong", ctx_r1.passStrength >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.passStrengthLabel);
  }
}
function RegisterPage_div_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMsg, " ");
  }
}
function RegisterPage_span_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterPage_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 57);
  }
}
let RegisterPage = /*#__PURE__*/(() => {
  class RegisterPage {
    constructor(authService, router) {
      this.authService = authService;
      this.router = router;
      this.formData = {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      };
      this.showPass = false;
      this.showConfirm = false;
      this.agreedToTerms = false;
      this.isLoading = false;
      this.errorMsg = '';
    }
    get passStrength() {
      const p = this.formData.password;
      if (!p) return 0;
      let score = 0;
      if (p.length >= 8) score++;
      if (/[A-Z]/.test(p) && /[0-9]/.test(p)) score++;
      if (/[^A-Za-z0-9]/.test(p)) score++;
      return score;
    }
    get passStrengthLabel() {
      return ['', 'Weak', 'Medium', 'Strong'][this.passStrength] || '';
    }
    onRegister() {
      var _this = this;
      return (0,_var_www_html_corpouslearning_ionic_company_portal_ionic_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this.formData.password !== _this.formData.confirmPassword) {
          _this.errorMsg = 'Passwords do not match.';
          return;
        }
        if (!_this.agreedToTerms) {
          _this.errorMsg = 'Please agree to the Terms of Service.';
          return;
        }
        _this.errorMsg = '';
        _this.isLoading = true;
        try {
          yield _this.authService.register(_this.formData);
          _this.router.navigate(['/app/dashboard']);
        } catch {
          _this.errorMsg = 'Registration failed. Please try again.';
        } finally {
          _this.isLoading = false;
        }
      })();
    }
    static {
      this.ɵfac = function RegisterPage_Factory(t) {
        return new (t || RegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: RegisterPage,
        selectors: [["app-register"]],
        decls: 121,
        vars: 19,
        consts: [["regForm", "ngForm"], [1, "register-content"], [1, "auth-wrapper"], [1, "brand-panel"], [1, "brand-panel__bg"], [1, "brand-panel__content"], [1, "brand-logo"], [1, "logo-icon"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none"], ["width", "32", "height", "32", "rx", "10", "fill", "rgba(255,255,255,0.15)"], ["d", "M8 16L14 10L20 16L14 22L8 16Z", "fill", "#E8A020"], ["d", "M14 10L20 4L26 10L20 16L14 10Z", "fill", "rgba(255,255,255,0.6)"], ["d", "M14 22L20 16L26 22L20 28L14 22Z", "fill", "rgba(255,255,255,0.3)"], [1, "logo-text"], [1, "feature-list"], [1, "feat-icon"], ["name", "people-outline"], ["name", "shield-checkmark-outline"], ["name", "business-outline"], ["name", "analytics-outline"], [1, "form-panel"], [1, "form-panel__inner"], [1, "form-header"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "John", "name", "firstName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Smith", "name", "lastName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-with-icon"], ["name", "business-outline", 1, "input-icon"], ["type", "text", "placeholder", "Your Company Ltd.", "name", "company", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "mail-outline", 1, "input-icon"], ["type", "email", "placeholder", "john@company.com", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "call-outline", 1, "input-icon"], ["type", "tel", "placeholder", "+1 (555) 000-0000", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "lock-closed-outline", 1, "input-icon"], ["placeholder", "Min. 8 characters", "name", "password", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "eye-btn", 3, "click"], [3, "name"], ["placeholder", "Repeat password", "name", "confirmPassword", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["class", "pass-strength", 4, "ngIf"], [1, "terms-label"], ["type", "checkbox", "name", "terms", "required", "", 3, "ngModelChange", "ngModel"], [1, "custom-check"], ["href", "#"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "login-link"], ["routerLink", "/auth/login"], [1, "pass-strength"], [1, "strength-bars"], [1, "bar"], [1, "strength-label"], [1, "error-msg"], ["name", "alert-circle-outline"], [1, "spinner"]],
        template: function RegisterPage_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 1)(1, "div", 2)(2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5)(5, "div", 6)(6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "rect", 9)(9, "path", 10)(10, "path", 11)(11, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "TechCorp");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14)(15, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Everything you need to manage your company");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul")(18, "li")(19, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "User Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Manage team members with granular access control");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "ion-icon", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Role-Based Access");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Define roles and permissions precisely");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li")(35, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "ion-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div")(38, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Department Hierarchy");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Organize teams with structured departments");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "ion-icon", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Real-time Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Get insights on your organization's performance");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20)(51, "div", 21)(52, "div", 22)(53, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Create account");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Set up your company portal in minutes");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "form", 23, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterPage_Template_form_ngSubmit_57_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onRegister());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 24)(60, "div", 25)(61, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_63_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.firstName, $event) || (ctx.formData.firstName = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 25)(65, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_67_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.lastName, $event) || (ctx.formData.lastName = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 25)(69, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Company Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "ion-icon", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_73_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.company, $event) || (ctx.formData.company = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 25)(75, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Work Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "ion-icon", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_79_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.email, $event) || (ctx.formData.email = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 25)(81, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Phone Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "ion-icon", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_85_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.phone, $event) || (ctx.formData.phone = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 24)(87, "div", 25)(88, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "ion-icon", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_92_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.password, $event) || (ctx.formData.password = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterPage_Template_button_click_93_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.showPass = !ctx.showPass);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "ion-icon", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 25)(96, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Confirm Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "ion-icon", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_100_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.confirmPassword, $event) || (ctx.formData.confirmPassword = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterPage_Template_button_click_101_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.showConfirm = !ctx.showConfirm);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "ion-icon", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, RegisterPage_div_103_Template, 7, 19, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "label", 41)(105, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegisterPage_Template_input_ngModelChange_105_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.agreedToTerms, $event) || (ctx.agreedToTerms = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "span", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " I agree to the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Terms of Service");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](113, RegisterPage_div_113_Template, 3, 1, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "button", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, RegisterPage_span_115_Template, 2, 0, "span", 47)(116, RegisterPage_div_116_Template, 1, 0, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " Already have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "a", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Sign in");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](63);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.firstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.company);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showPass ? "text" : "password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.showPass ? "eye-off-outline" : "eye-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showConfirm ? "text" : "password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.confirmPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.showConfirm ? "eye-off-outline" : "eye-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formData.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.agreedToTerms);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("loading", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading || !ctx.agreedToTerms);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
        styles: ["[_ngcontent-%COMP%]:root {\n  --color-primary: #0A1628;\n  --color-primary-light: #132040;\n  --color-accent: #E8A020;\n  --color-accent-light: #F5B942;\n  --color-accent-glow: rgba(232, 160, 32, 0.15);\n  --color-bg: #F0F4FA;\n  --color-surface: #FFFFFF;\n  --color-surface-2: #F7F9FC;\n  --color-border: #E2E8F4;\n  --color-text-primary: #0A1628;\n  --color-text-secondary: #5A6A85;\n  --color-text-muted: #8FA0BE;\n  --color-success: #10B981;\n  --color-warning: #F59E0B;\n  --color-danger: #EF4444;\n  --color-info: #3B82F6;\n  --sidebar-width: 260px;\n  --sidebar-collapsed: 70px;\n  --header-height: 64px;\n  --ion-font-family: \"Plus Jakarta Sans\", sans-serif;\n  --ion-background-color: var(--color-bg);\n  --ion-text-color: var(--color-text-primary);\n  --ion-color-primary: #0A1628;\n  --ion-color-primary-rgb: 10, 22, 40;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-shade: #091320;\n  --ion-color-primary-tint: #1a2d45;\n  --shadow-sm: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);\n  --shadow-md: 0 4px 16px rgba(10,22,40,0.08), 0 2px 6px rgba(10,22,40,0.06);\n  --shadow-lg: 0 10px 40px rgba(10,22,40,0.12), 0 4px 12px rgba(10,22,40,0.08);\n  --shadow-glow: 0 0 0 3px var(--color-accent-glow);\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 16px;\n  --radius-xl: 24px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: var(--color-bg);\n  color: var(--color-text-primary);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 99px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-text-muted);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-accent) 0%, #F5B942 100%);\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 13px 28px;\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(232, 160, 32, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(232, 160, 32, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 4px 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--color-accent), #F5B942);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  transition: var(--transition);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  padding-right: 40px;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 90%;\n  max-width: 500px;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 28px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+4), .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n}\n.register-content[_ngcontent-%COMP%] {\n  --background: var(--color-bg);\n}\n\n.auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n\n.brand-panel[_ngcontent-%COMP%] {\n  width: 40%;\n  background: var(--color-primary);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .brand-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.brand-panel__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(circle at 30% 40%, rgba(232, 160, 32, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 40%);\n}\n.brand-panel__bg[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n  background-size: 28px 28px;\n}\n\n.brand-panel__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 56px 48px;\n  width: 100%;\n}\n\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 56px;\n}\n.brand-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.brand-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 22px;\n  font-weight: 600;\n  color: #ffffff;\n}\n\n.feature-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 28px;\n  font-weight: 600;\n  color: #ffffff;\n  line-height: 1.35;\n  margin: 0 0 36px 0;\n}\n.feature-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.feature-list[_ngcontent-%COMP%]   .feat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(232, 160, 32, 0.15);\n  border: 1px solid rgba(232, 160, 32, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-list[_ngcontent-%COMP%]   .feat-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent);\n}\n.feature-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 3px;\n}\n.feature-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.45);\n  margin: 0;\n  line-height: 1.5;\n}\n\n.form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-bg);\n  padding: 40px 20px;\n  overflow-y: auto;\n}\n\n.form-panel__inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 28px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 8px 0;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 500px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px 12px 42px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: 0 0 0 3px rgba(232, 160, 32, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 13px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-muted);\n  font-size: 16px;\n  pointer-events: none;\n}\n.input-with-icon[_ngcontent-%COMP%]   .eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.input-with-icon[_ngcontent-%COMP%]   .eye-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n.input-with-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n\n.pass-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: -10px;\n  margin-bottom: 16px;\n}\n.pass-strength[_ngcontent-%COMP%]   .strength-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex: 1;\n}\n.pass-strength[_ngcontent-%COMP%]   .strength-bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3px;\n  border-radius: 99px;\n  background: var(--color-border);\n  transition: var(--transition);\n}\n.pass-strength[_ngcontent-%COMP%]   .strength-bars[_ngcontent-%COMP%]   .bar.active.weak[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.pass-strength[_ngcontent-%COMP%]   .strength-bars[_ngcontent-%COMP%]   .bar.active.medium[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n.pass-strength[_ngcontent-%COMP%]   .strength-bars[_ngcontent-%COMP%]   .bar.active.strong[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.pass-strength[_ngcontent-%COMP%]   .strength-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  min-width: 50px;\n}\n\n.terms-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.terms-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.terms-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .custom-check[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n}\n.terms-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .custom-check[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.terms-label[_ngcontent-%COMP%]   .custom-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 1.5px solid var(--color-border);\n  border-radius: 5px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  transition: var(--transition);\n  position: relative;\n}\n.terms-label[_ngcontent-%COMP%]   .custom-check[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 4px;\n  top: 2px;\n  width: 8px;\n  height: 5px;\n  border-left: 2px solid var(--color-primary);\n  border-bottom: 2px solid var(--color-primary);\n  transform: rotate(-45deg);\n  opacity: 0;\n  transition: var(--transition);\n}\n.terms-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  text-decoration: none;\n  font-weight: 600;\n}\n.terms-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(239, 68, 68, 0.08);\n  color: var(--color-danger);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  border-radius: var(--radius-sm);\n  padding: 10px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: linear-gradient(135deg, #E8A020 0%, #F5B942 100%);\n  color: var(--color-primary);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-weight: 700;\n  font-size: 15px;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(232, 160, 32, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(232, 160, 32, 0.45);\n}\n.btn-submit[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2.5px solid rgba(10, 22, 40, 0.2);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  margin: 20px 0 0 0;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFFRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZDQUFBO0VBR0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFHQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUdBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUdBLGtEQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFHQSx5RUFBQTtFQUNBLDBFQUFBO0VBQ0EsNEVBQUE7RUFDQSxpREFBQTtFQUdBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBR0Esb0RBQUE7QUN2QkY7O0FEOEJBO0VBQ0Usc0JBQUE7QUMzQkY7O0FEOEJBO0VBQ0UsNENBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FDM0JGOztBRGtDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDL0JGOztBRGlDQTtFQUNFLHVCQUFBO0FDOUJGOztBRGdDQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUM3QkY7QUQ4QkU7RUFBVSxtQ0FBQTtBQzNCWjs7QURtQ0E7RUFDRSx5RUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLCtDQUFBO0FDaENGO0FEa0NFO0VBQ0UsMkJBQUE7RUFDQSwrQ0FBQTtBQ2hDSjtB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QTtBQXNXRjtBQXBXRTtFQUNFLDJCQUFBO0VBQ0EsK0NBQUE7QUFzV0o7QUFuV0U7RUFBYyxZQUFBO0VBQWMsbUJBQUE7QUF1VzlCOztBQXBXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUF1V0Y7O0FBcFdBO0VBQWtCO0lBQUsseUJBQUE7RUF5V3JCO0FBQ0Y7QUF4V0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBMFdGO0FBeFdFO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBMFdKO0FBeldJO0VBQVUsWUFBQTtBQTRXZCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbXBhbnkgUG9ydGFsIC0gUHJlbWl1bSBEZXNpZ24gVGhlbWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBHb29nbGUgRm9udHMgYXJlIGxvYWRlZCBmcm9tIHNyYy9pbmRleC5odG1sIHRvIGF2b2lkIEFuZ3VsYXIgc3R5bGUgZW5jYXBzdWxhdGlvbiByZXdyaXRpbmcgVVJMcy5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJT05JQyBWQVJJQUJMRVMgT1ZFUlJJREVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG46cm9vdCB7XG4gIC8vIEJyYW5kIENvbG9yc1xuICAtLWNvbG9yLXByaW1hcnk6ICMwQTE2Mjg7XG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogIzEzMjA0MDtcbiAgLS1jb2xvci1hY2NlbnQ6ICNFOEEwMjA7XG4gIC0tY29sb3ItYWNjZW50LWxpZ2h0OiAjRjVCOTQyO1xuICAtLWNvbG9yLWFjY2VudC1nbG93OiByZ2JhKDIzMiwgMTYwLCAzMiwgMC4xNSk7XG4gIFxuICAvLyBVSSBDb2xvcnNcbiAgLS1jb2xvci1iZzogI0YwRjRGQTtcbiAgLS1jb2xvci1zdXJmYWNlOiAjRkZGRkZGO1xuICAtLWNvbG9yLXN1cmZhY2UtMjogI0Y3RjlGQztcbiAgLS1jb2xvci1ib3JkZXI6ICNFMkU4RjQ7XG4gIC0tY29sb3ItdGV4dC1wcmltYXJ5OiAjMEExNjI4O1xuICAtLWNvbG9yLXRleHQtc2Vjb25kYXJ5OiAjNUE2QTg1O1xuICAtLWNvbG9yLXRleHQtbXV0ZWQ6ICM4RkEwQkU7XG4gIFxuICAvLyBTdGF0dXMgQ29sb3JzXG4gIC0tY29sb3Itc3VjY2VzczogIzEwQjk4MTtcbiAgLS1jb2xvci13YXJuaW5nOiAjRjU5RTBCO1xuICAtLWNvbG9yLWRhbmdlcjogI0VGNDQ0NDtcbiAgLS1jb2xvci1pbmZvOiAjM0I4MkY2O1xuICBcbiAgLy8gU2lkZWJhclxuICAtLXNpZGViYXItd2lkdGg6IDI2MHB4O1xuICAtLXNpZGViYXItY29sbGFwc2VkOiA3MHB4O1xuICAtLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4gIFxuICAvLyBJb25pYyBvdmVycmlkZXNcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzBBMTYyODtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEwLCAyMiwgNDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMwOTEzMjA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzFhMmQ0NTtcbiAgXG4gIC8vIFNoYWRvd3NcbiAgLS1zaGFkb3ctc206IDAgMXB4IDNweCByZ2JhKDEwLDIyLDQwLDAuMDYpLCAwIDFweCAycHggcmdiYSgxMCwyMiw0MCwwLjA0KTtcbiAgLS1zaGFkb3ctbWQ6IDAgNHB4IDE2cHggcmdiYSgxMCwyMiw0MCwwLjA4KSwgMCAycHggNnB4IHJnYmEoMTAsMjIsNDAsMC4wNik7XG4gIC0tc2hhZG93LWxnOiAwIDEwcHggNDBweCByZ2JhKDEwLDIyLDQwLDAuMTIpLCAwIDRweCAxMnB4IHJnYmEoMTAsMjIsNDAsMC4wOCk7XG4gIC0tc2hhZG93LWdsb3c6IDAgMCAwIDNweCB2YXIoLS1jb2xvci1hY2NlbnQtZ2xvdyk7XG4gIFxuICAvLyBCb3JkZXIgcmFkaXVzXG4gIC0tcmFkaXVzLXNtOiA4cHg7XG4gIC0tcmFkaXVzLW1kOiAxMnB4O1xuICAtLXJhZGl1cy1sZzogMTZweDtcbiAgLS1yYWRpdXMteGw6IDI0cHg7XG4gIFxuICAvLyBUcmFuc2l0aW9uc1xuICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdMT0JBTCBTVFlMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENVU1RPTSBTQ1JPTExCQVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVVU0FCTEUgQ09NUE9ORU5UIFNUWUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEJ1dHRvbnNcbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLWFjY2VudCkgMCUsICNGNUI5NDIgMTAwJSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgcGFkZGluZzogMTNweCAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjM1KTtcbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjQ1KTtcbiAgfVxuICBcbiAgJjphY3RpdmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQtZ2xvdyk7XG4gIH1cbn1cblxuLy8gQ2FyZHNcbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG59XG5cbi8vIFBhZ2UgSGVhZGVyXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICBcbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgfVxuICBcbiAgLnBhZ2Utc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vLyBCYWRnZVxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgXG4gICYuYmFkZ2Utc3VjY2VzcyB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEyKTsgY29sb3I6ICMwNTk2Njk7IH1cbiAgJi5iYWRnZS1kYW5nZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjEyKTsgY29sb3I6ICNEQzI2MjY7IH1cbiAgJi5iYWRnZS13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTIpOyBjb2xvcjogI0Q5NzcwNjsgfVxuICAmLmJhZGdlLWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDU5LDEzMCwyNDYsMC4xMik7IGNvbG9yOiAjMjU2M0VCOyB9XG4gICYuYmFkZ2UtcHJpbWFyeSB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWFjY2VudC1nbG93KTsgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7IH1cbn1cblxuLy8gVGFibGVcbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIFxuICB0aCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtMik7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIHRyOmxhc3QtY2hpbGQgdGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gIFxuICB0cjpob3ZlciB0ZCB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtMik7IH1cbn1cblxuLy8gQXZhdGFyXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1hY2NlbnQpLCAjRjVCOTQyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLy8gQWN0aW9uIGljb24gYnV0dG9uc1xuLmFjdGlvbi1idG4ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gICYuZWRpdDpob3ZlciB7IGNvbG9yOiB2YXIoLS1jb2xvci1pbmZvKTsgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LDAuMDgpOyB9XG4gICYuZGVsZXRlOmhvdmVyIHsgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMDgpOyB9XG59XG5cbi8vIEZvcm0gaW5wdXRzXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIFxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDExcHggMTRweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1nbG93KTtcbiAgICB9XG4gICAgXG4gICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7IH1cbiAgfVxuICBcbiAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMiA4JyUzRSUzQ3BhdGggZD0nTTEgMWw1IDUgNS01JyBzdHJva2U9JyUyMzVBNkE4NScgc3Ryb2tlLXdpZHRoPScxLjUnIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDE0cHggY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuLy8gTW9kYWxcbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwyMiw0MCwwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZWFzZTtcbn1cblxuLm1vZGFsLWJveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBhbmltYXRpb246IHNsaWRlVXAgMC4yNXMgZWFzZTtcbiAgXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDI0cHggMjhweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxuICAgIGgzIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5tb2RhbC1ib2R5IHsgcGFkZGluZzogMjRweCAyOHB4OyB9XG4gIFxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDI4cHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLy8gU2VhcmNoIGlucHV0XG4uc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5zZWFyY2gtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEycHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTRweCAxMHB4IDM4cHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZ2xvdyk7XG4gICAgfVxuICAgIFxuICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kYXRhLXRhYmxlIHtcbiAgICB0aDpudGgtY2hpbGQobis0KSwgdGQ6bnRoLWNoaWxkKG4rNCkgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcyc7XG5cbi5yZWdpc3Rlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZyk7XG59XG5cbi5hdXRoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJyYW5kLXBhbmVsIHtcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG4uYnJhbmQtcGFuZWxfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgNDAlLCByZ2JhKDIzMiwgMTYwLCAzMiwgMC4xMikgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3MCUgNzAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIDAlLCB0cmFuc3BhcmVudCA0MCUpO1xuICAgIFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHggMjhweDtcbiAgfVxufVxuXG4uYnJhbmQtcGFuZWxfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDU2cHggNDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICBcbiAgLmxvZ28taWNvbiB7IHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IH1cbiAgXG4gIC5sb2dvLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5mZWF0dXJlLWxpc3Qge1xuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gICAgbWFyZ2luOiAwIDAgMzZweCAwO1xuICB9XG4gIFxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNHB4O1xuICB9XG4gIFxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDE0cHg7XG4gIH1cbiAgXG4gIC5mZWF0LWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjE1KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMiwgMTYwLCAzMiwgMC4yNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgIH1cbiAgfVxuICBcbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH1cbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxufVxuXG4uZm9ybS1wYW5lbCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZyk7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmZvcm0tcGFuZWxfX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIFxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICB9XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE2cHg7XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IGdhcDogMDsgfVxufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIFxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMTRweCAxMnB4IDQycHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMzIsIDE2MCwgMzIsIDAuMSk7XG4gICAgfVxuICAgIFxuICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG4gIH1cbn1cblxuLmlucHV0LXdpdGgtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5pbnB1dC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTNweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgLmV5ZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgICY6aG92ZXIgeyBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7IH1cbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbCB7IHBhZGRpbmctbGVmdDogNDJweDsgfVxufVxuXG4ucGFzcy1zdHJlbmd0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIFxuICAuc3RyZW5ndGgtYmFycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRweDtcbiAgICBmbGV4OiAxO1xuICAgIFxuICAgIC5iYXIge1xuICAgICAgZmxleDogMTtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIFxuICAgICAgJi5hY3RpdmUud2VhayB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWRhbmdlcik7IH1cbiAgICAgICYuYWN0aXZlLm1lZGl1bSB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdhcm5pbmcpOyB9XG4gICAgICAmLmFjdGl2ZS5zdHJvbmcgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdWNjZXNzKTsgfVxuICAgIH1cbiAgfVxuICBcbiAgLnN0cmVuZ3RoLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICB9XG59XG5cbi50ZXJtcy1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIFxuICAgICY6Y2hlY2tlZCB+IC5jdXN0b20tY2hlY2sge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgIFxuICAgICAgJjo6YWZ0ZXIgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICB9XG4gIFxuICAuY3VzdG9tLWNoZWNrIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNHB4O1xuICAgICAgdG9wOiAycHg7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG4gIH1cbiAgXG4gIGEge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgICY6aG92ZXIgeyBvcGFjaXR5OiAwLjg7IH1cbiAgfVxufVxuXG4uZXJyb3ItbXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMDgpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRThBMDIwIDAlLCAjRjVCOTQyIDEwMCUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDIzMiwgMTYwLCAzMiwgMC4zNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBcbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjQ1KTtcbiAgfVxuICBcbiAgJltkaXNhYmxlZF0geyBvcGFjaXR5OiAwLjc7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbn1cblxuLnNwaW5uZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYmEoMTAsMjIsNDAsMC4yKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuN3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG4ubG9naW4tbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIFxuICBhIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmOmhvdmVyIHsgb3BhY2l0eTogMC44OyB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return RegisterPage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map