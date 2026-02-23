"use strict";
(self["webpackChunkcompany_portal"] = self["webpackChunkcompany_portal"] || []).push([["src_app_general-setup_users_users_module_ts"],{

/***/ 4018:
/*!*****************************************************!*\
  !*** ./src/app/general-setup/users/users.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersPageModule: () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 4082);
/* harmony import */ var _services_users_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/users-api.service */ 9195);
/* harmony import */ var _services_roles_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/roles-api.service */ 4686);
/* harmony import */ var _services_departments_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/departments-api.service */ 376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);











const routes = [{
  path: '',
  component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
}];
let UsersPageModule = /*#__PURE__*/(() => {
  class UsersPageModule {
    static {
      this.ɵfac = function UsersPageModule_Factory(t) {
        return new (t || UsersPageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: UsersPageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_services_users_api_service__WEBPACK_IMPORTED_MODULE_1__.UsersApiService, _services_roles_api_service__WEBPACK_IMPORTED_MODULE_2__.RolesApiService, _services_departments_api_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentsApiService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)]
      });
    }
  }
  return UsersPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersPageModule, {
    declarations: [_users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 4082:
/*!***************************************************!*\
  !*** ./src/app/general-setup/users/users.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersPage: () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _services_users_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/users-api.service */ 9195);
/* harmony import */ var _services_roles_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/roles-api.service */ 4686);
/* harmony import */ var _services_departments_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/departments-api.service */ 376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7401);








function UsersPage_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r1);
  }
}
function UsersPage_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " You have view-only access. Only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Super Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " can add, edit, or delete users. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UsersPage_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function UsersPage_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 33)(3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 35)(6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td")(11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td")(17, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td")(20, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td")(25, "div", 42)(26, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_tr_76_Template_button_click_26_listener() {
      const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editUser(u_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_tr_76_Template_button_click_28_listener() {
      const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteUser(u_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_tr_76_Template_button_click_30_listener() {
      const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleStatus(u_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", u_r4.avatarBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r4.initials);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("@", u_r4.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r4.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r4.dept);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](u_r4.active ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r4.active ? "Active" : "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](u_r4.lastLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.canManageUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.canManageUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.canManageUsers);
  }
}
function UsersPage_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No users found for this tenant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function UsersPage_div_78_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formErrors.name);
  }
}
function UsersPage_div_78_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formErrors.username);
  }
}
function UsersPage_div_78_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formErrors.password);
  }
}
function UsersPage_div_78_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r6);
  }
}
function UsersPage_div_78_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formErrors.role);
  }
}
function UsersPage_div_78_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](d_r7);
  }
}
function UsersPage_div_78_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formErrors.dept);
  }
}
function UsersPage_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_div_78_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 51)(2, "div", 52)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_div_78_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 55)(8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Enter user identity and login credentials. Username must be unique per tenant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 57)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_div_78_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UsersPage_div_78_div_14_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 57)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_div_78_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.username, $event) || (ctx_r1.form.username = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, UsersPage_div_78_div_19_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 57)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_div_78_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.password, $event) || (ctx_r1.form.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, UsersPage_div_78_div_24_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 62)(26, "div", 57)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_div_78_Template_select_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.role, $event) || (ctx_r1.form.role = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Select role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, UsersPage_div_78_option_32_Template, 2, 1, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, UsersPage_div_78_div_33_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 57)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_div_78_Template_select_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.dept, $event) || (ctx_r1.form.dept = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Select department");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, UsersPage_div_78_option_40_Template, 2, 1, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, UsersPage_div_78_div_41_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 63)(43, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_div_78_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_div_78_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.saveUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.editMode ? "Edit User" : "Create User");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.formErrors.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Password ", ctx_r1.editMode ? "(Optional - keep blank to retain current)" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.formErrors.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.roleOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.formErrors.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.dept);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.deptOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.formErrors.dept);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.canManageUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.editMode ? "Save Changes" : "Create User");
  }
}
let UsersPage = /*#__PURE__*/(() => {
  class UsersPage {
    constructor(authService, usersApi, rolesApi, departmentsApi) {
      this.authService = authService;
      this.usersApi = usersApi;
      this.rolesApi = rolesApi;
      this.departmentsApi = departmentsApi;
      this.tenantId = 'default';
      this.searchQuery = '';
      this.roleFilter = '';
      this.statusFilter = '';
      this.showModal = false;
      this.editMode = false;
      this.isLoading = false;
      this.errorMessage = '';
      this.form = {
        name: '',
        username: '',
        role: '',
        dept: '',
        password: ''
      };
      this.formErrors = {
        name: '',
        username: '',
        role: '',
        dept: '',
        password: ''
      };
      this.submitted = false;
      this.editingId = null;
      this.roleOptions = [];
      this.deptOptions = [];
      this.avatarBgs = ['linear-gradient(135deg,#3B82F6,#60A5FA)', 'linear-gradient(135deg,#10B981,#34D399)', 'linear-gradient(135deg,#8B5CF6,#A78BFA)', 'linear-gradient(135deg,#EF4444,#F87171)', 'linear-gradient(135deg,#E8A020,#F5B942)', 'linear-gradient(135deg,#EC4899,#F472B6)'];
      this.users = [];
      this.filtered = [];
    }
    ngOnInit() {
      this.loadUsers();
      this.loadRoleOptions();
      this.loadDepartmentOptions();
    }
    get canManageUsers() {
      const role = (this.authService.currentUser?.role || '').toLowerCase();
      return role === 'super admin' || role === 'admin';
    }
    get totalUsers() {
      return this.users.length;
    }
    get activeUsers() {
      return this.users.filter(u => u.active).length;
    }
    get inactiveUsers() {
      return this.users.filter(u => !u.active).length;
    }
    loadUsers() {
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      this.errorMessage = '';
      this.isLoading = true;
      this.usersApi.listUsers(this.tenantId.trim()).subscribe({
        next: res => {
          this.isLoading = false;
          this.users = (res.users || []).map((u, idx) => this.mapFromApi(u, idx));
          this.filter();
        },
        error: err => {
          this.isLoading = false;
          this.errorMessage = err?.error?.detail || 'Failed to load users.';
        }
      });
    }
    loadRoleOptions() {
      if (!this.tenantId.trim()) return;
      this.rolesApi.listRoles(this.tenantId.trim()).subscribe({
        next: res => {
          const names = (res.roles || []).map(r => r.name).filter(Boolean);
          this.roleOptions = Array.from(new Set(names));
        }
      });
    }
    loadDepartmentOptions() {
      if (!this.tenantId.trim()) return;
      this.departmentsApi.listDepartments(this.tenantId.trim()).subscribe({
        next: res => {
          const names = (res.departments || []).map(d => d.name).filter(Boolean);
          this.deptOptions = Array.from(new Set(names));
        }
      });
    }
    filter() {
      this.filtered = this.users.filter(u => {
        const matchSearch = !this.searchQuery || u.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || u.username.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchRole = !this.roleFilter || u.role === this.roleFilter;
        const matchStatus = !this.statusFilter || (this.statusFilter === 'active' ? u.active : !u.active);
        return matchSearch && matchRole && matchStatus;
      });
    }
    openModal() {
      if (!this.canManageUsers) return;
      this.submitted = false;
      this.formErrors = {
        name: '',
        username: '',
        role: '',
        dept: '',
        password: ''
      };
      this.form = {
        name: '',
        username: '',
        role: this.roleOptions[0] || '',
        dept: this.deptOptions[0] || '',
        password: ''
      };
      this.editMode = false;
      this.editingId = null;
      this.showModal = true;
    }
    editUser(u) {
      if (!this.canManageUsers) return;
      this.submitted = false;
      this.formErrors = {
        name: '',
        username: '',
        role: '',
        dept: '',
        password: ''
      };
      this.form = {
        name: u.name,
        username: u.username,
        role: u.role,
        dept: u.dept,
        password: ''
      };
      this.editingId = u.id;
      this.editMode = true;
      this.showModal = true;
    }
    saveUser() {
      if (!this.canManageUsers) return;
      this.submitted = true;
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      this.errorMessage = '';
      if (!this.validateForm()) return;
      const {
        firstName,
        lastName
      } = this.splitName(this.form.name);
      if (this.editMode && this.editingId) {
        this.usersApi.updateUser({
          userId: this.editingId,
          tenantId: this.tenantId.trim(),
          username: this.form.username.trim().toLowerCase(),
          firstName: firstName,
          lastName: lastName,
          email: this.form.username.trim().toLowerCase(),
          roleName: this.form.role,
          departmentName: this.form.dept,
          isActive: true,
          password: this.form.password.trim() || undefined
        }).subscribe({
          next: () => {
            this.showModal = false;
            this.loadUsers();
          },
          error: err => {
            this.errorMessage = err?.error?.detail || 'Failed to update user.';
          }
        });
      } else {
        this.usersApi.createUser({
          tenantId: this.tenantId.trim(),
          username: this.form.username.trim().toLowerCase(),
          firstName: firstName,
          lastName: lastName,
          email: this.form.username.trim().toLowerCase(),
          roleName: this.form.role,
          departmentName: this.form.dept,
          isActive: true,
          password: this.form.password.trim() || undefined
        }).subscribe({
          next: () => {
            this.showModal = false;
            this.loadUsers();
          },
          error: err => {
            this.errorMessage = err?.error?.detail || 'Failed to create user.';
          }
        });
      }
    }
    deleteUser(u) {
      if (!this.canManageUsers) return;
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      if (confirm(`Delete user "${u.name}"?`)) {
        this.usersApi.deleteUser(u.id, this.tenantId.trim()).subscribe({
          next: () => {
            this.users = this.users.filter(x => x.id !== u.id);
            this.filter();
          },
          error: err => {
            this.errorMessage = err?.error?.detail || 'Failed to delete user.';
          }
        });
      }
    }
    toggleStatus(u) {
      if (!this.canManageUsers || !this.tenantId.trim()) return;
      const {
        firstName,
        lastName
      } = this.splitName(u.name);
      this.usersApi.updateUser({
        userId: u.id,
        tenantId: this.tenantId.trim(),
        username: u.username,
        firstName: firstName,
        lastName: lastName,
        email: u.username,
        roleName: u.role,
        departmentName: u.dept,
        isActive: !u.active
      }).subscribe({
        next: () => {
          u.active = !u.active;
          this.filter();
        }
      });
    }
    closeModal(e) {
      if (!e || e.target === e.currentTarget) {
        this.showModal = false;
        this.submitted = false;
        this.formErrors = {
          name: '',
          username: '',
          role: '',
          dept: '',
          password: ''
        };
      }
    }
    mapFromApi(u, idx) {
      const first = (u.first_name || '').trim();
      const last = (u.last_name || '').trim();
      const fullName = `${first} ${last}`.trim() || u.email;
      const initials = `${first[0] || ''}${last[0] || first[1] || ''}`.toUpperCase() || 'U';
      return {
        id: u.id,
        name: fullName,
        username: u.username || u.email,
        role: u.role_name || 'Unassigned',
        dept: u.department_name || 'Unassigned',
        active: !!u.is_active,
        lastLogin: u.last_login_at ? new Date(u.last_login_at).toLocaleString() : 'Never',
        initials,
        avatarBg: this.avatarBgs[idx % this.avatarBgs.length]
      };
    }
    splitName(name) {
      const parts = name.trim().split(/\s+/);
      return {
        firstName: parts[0] || '',
        lastName: parts.slice(1).join(' ')
      };
    }
    validateForm() {
      this.formErrors = {
        name: '',
        username: '',
        role: '',
        dept: '',
        password: ''
      };
      let valid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.name.trim()) {
        this.formErrors.name = 'Please fill this field.';
        valid = false;
      }
      if (!this.form.username.trim()) {
        this.formErrors.username = 'Please fill this field.';
        valid = false;
      } else if (!emailRegex.test(this.form.username.trim())) {
        this.formErrors.username = 'Username must be like admin@gmail.com.';
        valid = false;
      }
      if (!this.form.role.trim()) {
        this.formErrors.role = 'Please fill this field.';
        valid = false;
      }
      if (!this.form.dept.trim()) {
        this.formErrors.dept = 'Please fill this field.';
        valid = false;
      }
      if (!this.editMode && !this.form.password.trim()) {
        this.formErrors.password = 'Please fill this field.';
        valid = false;
      }
      return valid;
    }
    static {
      this.ɵfac = function UsersPage_Factory(t) {
        return new (t || UsersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_users_api_service__WEBPACK_IMPORTED_MODULE_1__.UsersApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_roles_api_service__WEBPACK_IMPORTED_MODULE_2__.RolesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_departments_api_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentsApiService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: UsersPage,
        selectors: [["app-users"]],
        decls: 79,
        vars: 16,
        consts: [[1, "roles-content"], [1, "setup-page", "users-page"], [1, "users-hero", "card"], [1, "users-hero__copy"], [1, "hero-kicker"], [1, "page-title"], [1, "page-subtitle"], [1, "users-hero__stats"], [1, "stat-box"], [1, "page-toolbar", "card"], [1, "toolbar-left"], ["type", "text", "placeholder", "default", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-outline", 3, "click", "disabled"], [1, "toolbar-right"], [1, "btn-primary", 3, "click", "disabled"], ["name", "add-outline"], [1, "page-toolbar", "card", "filter-toolbar"], ["type", "text", "placeholder", "Search by name or username", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], ["class", "card notice", 4, "ngIf"], ["class", "card notice error", 4, "ngIf"], [1, "card", "users-table-card"], [1, "card-header"], [1, "table-responsive"], [1, "users-table"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "card", "notice"], [1, "card", "notice", "error"], [1, "user-cell"], [1, "avatar"], [1, "identity"], [1, "identity-name"], [1, "identity-user"], [1, "mono-tag"], [1, "data-pill", "role-pill"], [1, "data-pill", "dept-pill"], [1, "badge"], [1, "actions-cell"], [1, "action-btn", "edit", 3, "click", "disabled"], ["name", "create-outline"], [1, "action-btn", "delete", 3, "click", "disabled"], ["name", "trash-outline"], [1, "action-btn", 3, "click", "disabled"], ["name", "swap-horizontal-outline"], ["colspan", "7", 1, "empty-cell"], [1, "modal-overlay", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["name", "close-outline"], [1, "modal-body"], [1, "modal-intro"], [1, "form-group"], ["type", "text", "placeholder", "Full name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["type", "text", "placeholder", "e.g. alex.morgan", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "modal-footer"], [1, "btn-outline", 3, "click"], [1, "field-error"]],
        template: function UsersPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Identity Access");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Create and manage user accounts with username and password credentials.");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Total Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8)(17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 8)(22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Inactive");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9)(27, "div", 10)(28, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Tenant ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_Template_input_ngModelChange_30_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.tenantId, $event) || (ctx.tenantId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_Template_button_click_31_listener() {
              return ctx.loadUsers();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 13)(34, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersPage_Template_button_click_34_listener() {
              return ctx.openModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "ion-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Add User ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 16)(38, "div", 10)(39, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_Template_input_ngModelChange_39_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UsersPage_Template_input_ngModelChange_39_listener() {
              return ctx.filter();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_Template_select_ngModelChange_40_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.roleFilter, $event) || (ctx.roleFilter = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UsersPage_Template_select_ngModelChange_40_listener() {
              return ctx.filter();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "All Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, UsersPage_option_43_Template, 2, 1, "option", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UsersPage_Template_select_ngModelChange_44_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.statusFilter, $event) || (ctx.statusFilter = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UsersPage_Template_select_ngModelChange_44_listener() {
              return ctx.filter();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "All Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "option", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Inactive");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, UsersPage_div_51_Template, 8, 0, "div", 23)(52, UsersPage_div_52_Template, 2, 1, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "section", 25)(54, "div", 26)(55, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "User Registry");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 27)(58, "table", 28)(59, "thead")(60, "tr")(61, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Role");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Department");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Last Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, UsersPage_tr_76_Template, 32, 15, "tr", 20)(77, UsersPage_tr_77_Template, 3, 0, "tr", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, UsersPage_div_78_Template, 47, 16, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.totalUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.activeUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.inactiveUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.tenantId);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isLoading ? "Loading..." : "Load Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.canManageUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.roleFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.roleOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.statusFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.canManageUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filtered);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.filtered.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showModal);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon],
        styles: ["[_ngcontent-%COMP%]:root {\n  --color-primary: #0A1628;\n  --color-primary-light: #132040;\n  --color-accent: #E8A020;\n  --color-accent-light: #F5B942;\n  --color-accent-glow: rgba(232, 160, 32, 0.15);\n  --color-bg: #F0F4FA;\n  --color-surface: #FFFFFF;\n  --color-surface-2: #F7F9FC;\n  --color-border: #E2E8F4;\n  --color-text-primary: #0A1628;\n  --color-text-secondary: #5A6A85;\n  --color-text-muted: #8FA0BE;\n  --color-success: #10B981;\n  --color-warning: #F59E0B;\n  --color-danger: #EF4444;\n  --color-info: #3B82F6;\n  --sidebar-width: 260px;\n  --sidebar-collapsed: 70px;\n  --header-height: 64px;\n  --ion-font-family: \"Plus Jakarta Sans\", sans-serif;\n  --ion-background-color: var(--color-bg);\n  --ion-text-color: var(--color-text-primary);\n  --ion-color-primary: #0A1628;\n  --ion-color-primary-rgb: 10, 22, 40;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-shade: #091320;\n  --ion-color-primary-tint: #1a2d45;\n  --shadow-sm: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);\n  --shadow-md: 0 4px 16px rgba(10,22,40,0.08), 0 2px 6px rgba(10,22,40,0.06);\n  --shadow-lg: 0 10px 40px rgba(10,22,40,0.12), 0 4px 12px rgba(10,22,40,0.08);\n  --shadow-glow: 0 0 0 3px var(--color-accent-glow);\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 16px;\n  --radius-xl: 24px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: var(--color-bg);\n  color: var(--color-text-primary);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 99px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-text-muted);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-accent) 0%, #F5B942 100%);\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 13px 28px;\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(232, 160, 32, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(232, 160, 32, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 4px 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--color-accent), #F5B942);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  transition: var(--transition);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  padding-right: 40px;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 90%;\n  max-width: 500px;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 28px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+4), .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0A1628;\n  --color-primary-light: #132040;\n  --color-accent: #E8A020;\n  --color-accent-light: #F5B942;\n  --color-accent-glow: rgba(232, 160, 32, 0.15);\n  --color-bg: #F0F4FA;\n  --color-surface: #FFFFFF;\n  --color-surface-2: #F7F9FC;\n  --color-border: #E2E8F4;\n  --color-text-primary: #0A1628;\n  --color-text-secondary: #5A6A85;\n  --color-text-muted: #8FA0BE;\n  --color-success: #10B981;\n  --color-warning: #F59E0B;\n  --color-danger: #EF4444;\n  --color-info: #3B82F6;\n  --sidebar-width: 260px;\n  --sidebar-collapsed: 70px;\n  --header-height: 64px;\n  --ion-font-family: \"Plus Jakarta Sans\", sans-serif;\n  --ion-background-color: var(--color-bg);\n  --ion-text-color: var(--color-text-primary);\n  --ion-color-primary: #0A1628;\n  --ion-color-primary-rgb: 10, 22, 40;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-shade: #091320;\n  --ion-color-primary-tint: #1a2d45;\n  --shadow-sm: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);\n  --shadow-md: 0 4px 16px rgba(10,22,40,0.08), 0 2px 6px rgba(10,22,40,0.06);\n  --shadow-lg: 0 10px 40px rgba(10,22,40,0.12), 0 4px 12px rgba(10,22,40,0.08);\n  --shadow-glow: 0 0 0 3px var(--color-accent-glow);\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 16px;\n  --radius-xl: 24px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: var(--color-bg);\n  color: var(--color-text-primary);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 99px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-text-muted);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-accent) 0%, #F5B942 100%);\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 13px 28px;\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(232, 160, 32, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(232, 160, 32, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 4px 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--color-accent), #F5B942);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  transition: var(--transition);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  padding-right: 40px;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 90%;\n  max-width: 500px;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 28px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+4), .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.roles-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  max-height: calc(100vh - var(--header-height) - 56px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-radius: 14px;\n  box-sizing: border-box;\n  padding-top: calc(var(--header-height) + 10px);\n  display: flex;\n  justify-content: center;\n}\n\n.setup-page[_ngcontent-%COMP%] {\n  width: min(1180px, 100%);\n  margin: 0;\n  padding: 0 6px 18px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: linear-gradient(135deg, #e8a020, #f5b942);\n  color: var(--color-primary);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 12px rgba(232, 160, 32, 0.3);\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(232, 160, 32, 0.4);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: transparent;\n  color: var(--color-text-secondary);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: 0 0 0 3px rgba(232, 160, 32, 0.1);\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n\n.roles-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.roles-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 14px;\n  padding: 20px;\n  background: linear-gradient(135deg, #102744 0%, #1b4271 55%, #2d6ca8 100%);\n  border: none;\n}\n.roles-hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.13em;\n  font-size: 11px;\n  color: rgba(226, 241, 255, 0.78);\n  font-weight: 700;\n}\n.roles-hero[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #f7fbff;\n  margin: 8px 0 0;\n}\n.roles-hero[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: rgba(233, 244, 255, 0.9);\n  margin-top: 8px;\n  max-width: 62ch;\n}\n\n.roles-hero__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  align-content: center;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  border: 1px solid rgba(198, 221, 247, 0.35);\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 10px;\n}\n.stat-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(232, 243, 255, 0.85);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  margin-top: 6px;\n  font-size: 18px;\n}\n\n.page-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px;\n}\n\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  font-weight: 700;\n  display: grid;\n  gap: 6px;\n}\n.toolbar-left[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  color: #495b77;\n  border: 1px solid #d6e0ee;\n  background: #f8fbff;\n}\n.notice.error[_ngcontent-%COMP%] {\n  color: #b92032;\n  border-color: #f0c7d0;\n  background: #fff4f6;\n}\n\n.roles-table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n  margin: 0;\n}\n\n.roles-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--color-text-muted);\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  text-align: left;\n  white-space: nowrap;\n}\n.roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  font-size: 13px;\n}\n.roles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.roles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.role-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-weight: 600;\n  color: var(--color-primary);\n}\n\n.role-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.role-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.desc-cell[_ngcontent-%COMP%] {\n  max-width: 420px;\n  color: var(--color-text-secondary);\n}\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 28px 14px !important;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 100%;\n  max-width: 560px;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  margin: auto;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--color-surface-2);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1.5px solid var(--color-border);\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.close-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-danger);\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px 18px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  border-top: 1px solid var(--color-border);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  padding-right: 36px;\n  cursor: pointer;\n}\n\n@media (max-width: 900px) {\n  .roles-hero[_ngcontent-%COMP%], .roles-hero__stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .toolbar-right[_ngcontent-%COMP%], .toolbar-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    font-size: 12px;\n  }\n  .roles-content[_ngcontent-%COMP%] {\n    max-height: calc(100vh - var(--header-height) - 24px);\n    padding-top: calc(var(--header-height) + 6px);\n  }\n  .modal-box[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.users-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.users-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.25fr 1fr;\n  gap: 14px;\n  padding: 20px;\n  background: radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.14), transparent 45%), linear-gradient(135deg, #17314f 0%, #1f5a80 52%, #1f8e9a 100%);\n  border: none;\n}\n.users-hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.13em;\n  font-size: 11px;\n  color: rgba(226, 241, 255, 0.78);\n  font-weight: 700;\n}\n.users-hero[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #f7fbff;\n  margin: 8px 0 0;\n}\n.users-hero[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: rgba(233, 244, 255, 0.9);\n  margin-top: 8px;\n  max-width: 56ch;\n}\n\n.users-hero__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  align-content: center;\n}\n\n.users-table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  text-align: left;\n  white-space: nowrap;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  font-size: 13px;\n  color: var(--color-text-primary);\n  vertical-align: middle;\n}\n.users-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.users-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(240, 246, 255, 0.8);\n}\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.identity[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n}\n\n.identity-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a2f4a;\n}\n\n.identity-user[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6a7f9a;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.mono-tag[_ngcontent-%COMP%] {\n  font-family: \"JetBrains Mono\", \"Fira Code\", monospace;\n  font-size: 11px;\n  color: #2c4a78;\n  background: #eef4ff;\n  border: 1px solid #d2e0f6;\n  padding: 4px 8px;\n  border-radius: 999px;\n}\n\n.data-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.role-pill[_ngcontent-%COMP%] {\n  color: #245f8e;\n  background: #ebf7ff;\n  border: 1px solid #cde8fa;\n}\n\n.dept-pill[_ngcontent-%COMP%] {\n  color: #205c53;\n  background: #e9f9f3;\n  border: 1px solid #c6ebdc;\n}\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.filter-toolbar[_ngcontent-%COMP%] {\n  border: 1px dashed #d4e0f1;\n  background: linear-gradient(140deg, #f8fbff 0%, #f2f8ff 100%);\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  color: #495b77;\n  border: 1px solid #d6e0ee;\n  background: #f8fbff;\n}\n.notice.error[_ngcontent-%COMP%] {\n  color: #b92032;\n  border-color: #f0c7d0;\n  background: #fff4f6;\n}\n\n.modal-intro[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid #d9e4f2;\n  background: #f6faff;\n  color: #4f6788;\n  font-size: 12px;\n}\n\n.field-error[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #c0233a;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n@media (max-width: 900px) {\n  .users-hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2VuZXJhbC1zZXR1cC91c2Vycy91c2Vycy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2dlbmVyYWwtc2V0dXAvcm9sZXMvcm9sZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBRUUsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtFQUdBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBR0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFHQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSxrREFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBR0EseUVBQUE7RUFDQSwwRUFBQTtFQUNBLDRFQUFBO0VBQ0EsaURBQUE7RUFHQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUdBLG9EQUFBO0FDdkJGOztBRDhCQTtFQUNFLHNCQUFBO0FDM0JGOztBRDhCQTtFQUNFLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQzNCRjs7QURrQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQy9CRjs7QURpQ0E7RUFDRSx1QkFBQTtBQzlCRjs7QURnQ0E7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FDN0JGO0FEOEJFO0VBQVUsbUNBQUE7QUMzQlo7O0FEbUNBO0VBQ0UseUVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VB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QTtFQUNBLHlCQUFBO0FBbXBDRjs7QUFocENBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFtcENGOztBQWhwQ0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQW1wQ0Y7O0FBaHBDQTtFQUNFLDBCQUFBO0VBQ0EsNkRBQUE7QUFtcENGOztBQWhwQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBbXBDRjtBQWpwQ0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQW1wQ0o7O0FBL29DQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWtwQ0Y7O0FBL29DQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBa3BDRjs7QUEvb0NBO0VBQ0U7SUFDRSwwQkFBQTtFQWtwQ0Y7RUEvb0NBOztJQUVFLGlCQUFBO0lBQ0EsZUFBQTtFQWlwQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbXBhbnkgUG9ydGFsIC0gUHJlbWl1bSBEZXNpZ24gVGhlbWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBHb29nbGUgRm9udHMgYXJlIGxvYWRlZCBmcm9tIHNyYy9pbmRleC5odG1sIHRvIGF2b2lkIEFuZ3VsYXIgc3R5bGUgZW5jYXBzdWxhdGlvbiByZXdyaXRpbmcgVVJMcy5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJT05JQyBWQVJJQUJMRVMgT1ZFUlJJREVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG46cm9vdCB7XG4gIC8vIEJyYW5kIENvbG9yc1xuICAtLWNvbG9yLXByaW1hcnk6ICMwQTE2Mjg7XG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogIzEzMjA0MDtcbiAgLS1jb2xvci1hY2NlbnQ6ICNFOEEwMjA7XG4gIC0tY29sb3ItYWNjZW50LWxpZ2h0OiAjRjVCOTQyO1xuICAtLWNvbG9yLWFjY2VudC1nbG93OiByZ2JhKDIzMiwgMTYwLCAzMiwgMC4xNSk7XG4gIFxuICAvLyBVSSBDb2xvcnNcbiAgLS1jb2xvci1iZzogI0YwRjRGQTtcbiAgLS1jb2xvci1zdXJmYWNlOiAjRkZGRkZGO1xuICAtLWNvbG9yLXN1cmZhY2UtMjogI0Y3RjlGQztcbiAgLS1jb2xvci1ib3JkZXI6ICNFMkU4RjQ7XG4gIC0tY29sb3ItdGV4dC1wcmltYXJ5OiAjMEExNjI4O1xuICAtLWNvbG9yLXRleHQtc2Vjb25kYXJ5OiAjNUE2QTg1O1xuICAtLWNvbG9yLXRleHQtbXV0ZWQ6ICM4RkEwQkU7XG4gIFxuICAvLyBTdGF0dXMgQ29sb3JzXG4gIC0tY29sb3Itc3VjY2VzczogIzEwQjk4MTtcbiAgLS1jb2xvci13YXJuaW5nOiAjRjU5RTBCO1xuICAtLWNvbG9yLWRhbmdlcjogI0VGNDQ0NDtcbiAgLS1jb2xvci1pbmZvOiAjM0I4MkY2O1xuICBcbiAgLy8gU2lkZWJhclxuICAtLXNpZGViYXItd2lkdGg6IDI2MHB4O1xuICAtLXNpZGViYXItY29sbGFwc2VkOiA3MHB4O1xuICAtLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4gIFxuICAvLyBJb25pYyBvdmVycmlkZXNcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzBBMTYyODtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEwLCAyMiwgNDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMwOTEzMjA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzFhMmQ0NTtcbiAgXG4gIC8vIFNoYWRvd3NcbiAgLS1zaGFkb3ctc206IDAgMXB4IDNweCByZ2JhKDEwLDIyLDQwLDAuMDYpLCAwIDFweCAycHggcmdiYSgxMCwyMiw0MCwwLjA0KTtcbiAgLS1zaGFkb3ctbWQ6IDAgNHB4IDE2cHggcmdiYSgxMCwyMiw0MCwwLjA4KSwgMCAycHggNnB4IHJnYmEoMTAsMjIsNDAsMC4wNik7XG4gIC0tc2hhZG93LWxnOiAwIDEwcHggNDBweCByZ2JhKDEwLDIyLDQwLDAuMTIpLCAwIDRweCAxMnB4IHJnYmEoMTAsMjIsNDAsMC4wOCk7XG4gIC0tc2hhZG93LWdsb3c6IDAgMCAwIDNweCB2YXIoLS1jb2xvci1hY2NlbnQtZ2xvdyk7XG4gIFxuICAvLyBCb3JkZXIgcmFkaXVzXG4gIC0tcmFkaXVzLXNtOiA4cHg7XG4gIC0tcmFkaXVzLW1kOiAxMnB4O1xuICAtLXJhZGl1cy1sZzogMTZweDtcbiAgLS1yYWRpdXMteGw6IDI0cHg7XG4gIFxuICAvLyBUcmFuc2l0aW9uc1xuICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdMT0JBTCBTVFlMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENVU1RPTSBTQ1JPTExCQVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVVU0FCTEUgQ09NUE9ORU5UIFNUWUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEJ1dHRvbnNcbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLWFjY2VudCkgMCUsICNGNUI5NDIgMTAwJSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgcGFkZGluZzogMTNweCAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjM1KTtcbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjQ1KTtcbiAgfVxuICBcbiAgJjphY3RpdmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQtZ2xvdyk7XG4gIH1cbn1cblxuLy8gQ2FyZHNcbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG59XG5cbi8vIFBhZ2UgSGVhZGVyXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICBcbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgfVxuICBcbiAgLnBhZ2Utc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vLyBCYWRnZVxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgXG4gICYuYmFkZ2Utc3VjY2VzcyB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMTg1LDEyOSwwLjEyKTsgY29sb3I6ICMwNTk2Njk7IH1cbiAgJi5iYWRnZS1kYW5nZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjEyKTsgY29sb3I6ICNEQzI2MjY7IH1cbiAgJi5iYWRnZS13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLDAuMTIpOyBjb2xvcjogI0Q5NzcwNjsgfVxuICAmLmJhZGdlLWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDU5LDEzMCwyNDYsMC4xMik7IGNvbG9yOiAjMjU2M0VCOyB9XG4gICYuYmFkZ2UtcHJpbWFyeSB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWFjY2VudC1nbG93KTsgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7IH1cbn1cblxuLy8gVGFibGVcbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIFxuICB0aCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtMik7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIHRyOmxhc3QtY2hpbGQgdGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gIFxuICB0cjpob3ZlciB0ZCB7IGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtMik7IH1cbn1cblxuLy8gQXZhdGFyXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1hY2NlbnQpLCAjRjVCOTQyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLy8gQWN0aW9uIGljb24gYnV0dG9uc1xuLmFjdGlvbi1idG4ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gICYuZWRpdDpob3ZlciB7IGNvbG9yOiB2YXIoLS1jb2xvci1pbmZvKTsgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LDAuMDgpOyB9XG4gICYuZGVsZXRlOmhvdmVyIHsgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMDgpOyB9XG59XG5cbi8vIEZvcm0gaW5wdXRzXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIFxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDExcHggMTRweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1nbG93KTtcbiAgICB9XG4gICAgXG4gICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7IH1cbiAgfVxuICBcbiAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCAxMiA4JyUzRSUzQ3BhdGggZD0nTTEgMWw1IDUgNS01JyBzdHJva2U9JyUyMzVBNkE4NScgc3Ryb2tlLXdpZHRoPScxLjUnIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDE0cHggY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuLy8gTW9kYWxcbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwyMiw0MCwwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZWFzZTtcbn1cblxuLm1vZGFsLWJveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBhbmltYXRpb246IHNsaWRlVXAgMC4yNXMgZWFzZTtcbiAgXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDI0cHggMjhweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxuICAgIGgzIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5tb2RhbC1ib2R5IHsgcGFkZGluZzogMjRweCAyOHB4OyB9XG4gIFxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDI4cHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLy8gU2VhcmNoIGlucHV0XG4uc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5zZWFyY2gtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEycHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTRweCAxMHB4IDM4cHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZ2xvdyk7XG4gICAgfVxuICAgIFxuICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kYXRhLXRhYmxlIHtcbiAgICB0aDpudGgtY2hpbGQobis0KSwgdGQ6bnRoLWNoaWxkKG4rNCkgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi9yb2xlcy9yb2xlcy5wYWdlLnNjc3MnO1xuXG4udXNlcnMtcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTRweDtcbn1cblxuLnVzZXJzLWhlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMjVmciAxZnI7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDpcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE4JSAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCksIHRyYW5zcGFyZW50IDQ1JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE3MzE0ZiAwJSwgIzFmNWE4MCA1MiUsICMxZjhlOWEgMTAwJSk7XG4gIGJvcmRlcjogbm9uZTtcblxuICAuaGVyby1raWNrZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjEzZW07XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjQxLCAyNTUsIDAuNzgpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAucGFnZS10aXRsZSB7XG4gICAgY29sb3I6ICNmN2ZiZmY7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICB9XG5cbiAgLnBhZ2Utc3VidGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDIzMywgMjQ0LCAyNTUsIDAuOSk7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1heC13aWR0aDogNTZjaDtcbiAgfVxufVxuXG4udXNlcnMtaGVyb19fc3RhdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2Vycy10YWJsZS1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVzZXJzLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbiAgdGgge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS0yKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0ZCB7XG4gICAgcGFkZGluZzogMTFweCAxNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIHRyOmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQ2LCAyNTUsIDAuOCk7XG4gIH1cbn1cblxuLnVzZXItY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmlkZW50aXR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAycHg7XG59XG5cbi5pZGVudGl0eS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxYTJmNGE7XG59XG5cbi5pZGVudGl0eS11c2VyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzZhN2Y5YTtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9uby10YWcge1xuICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzJjNGE3ODtcbiAgYmFja2dyb3VuZDogI2VlZjRmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZTBmNjtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG59XG5cbi5kYXRhLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5yb2xlLXBpbGwge1xuICBjb2xvcjogIzI0NWY4ZTtcbiAgYmFja2dyb3VuZDogI2ViZjdmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkZThmYTtcbn1cblxuLmRlcHQtcGlsbCB7XG4gIGNvbG9yOiAjMjA1YzUzO1xuICBiYWNrZ3JvdW5kOiAjZTlmOWYzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzZlYmRjO1xufVxuXG4uYWN0aW9ucy1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG59XG5cbi5maWx0ZXItdG9vbGJhciB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZDRlMGYxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjZjhmYmZmIDAlLCAjZjJmOGZmIDEwMCUpO1xufVxuXG4ubm90aWNlIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBjb2xvcjogIzQ5NWI3NztcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZTBlZTtcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcblxuICAmLmVycm9yIHtcbiAgICBjb2xvcjogI2I5MjAzMjtcbiAgICBib3JkZXItY29sb3I6ICNmMGM3ZDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjRmNjtcbiAgfVxufVxuXG4ubW9kYWwtaW50cm8ge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWU0ZjI7XG4gIGJhY2tncm91bmQ6ICNmNmZhZmY7XG4gIGNvbG9yOiAjNGY2Nzg4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWVsZC1lcnJvciB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNjMDIzM2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC51c2Vycy1oZXJvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC51c2Vycy10YWJsZSB0aCxcbiAgLnVzZXJzLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb2xlcy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gNTZweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyAxMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZXR1cC1wYWdlIHtcbiAgd2lkdGg6IG1pbigxMTgwcHgsIDEwMCUpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgNnB4IDE4cHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZThhMDIwLCAjZjViOTQyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyMzIsIDE2MCwgMzIsIDAuMyk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgyMzIsIDE2MCwgMzIsIDAuNCk7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgfVxufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTNweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMzIsIDE2MCwgMzIsIDAuMSk7XG4gIH1cbn1cblxuLmFjdGlvbi1idG4ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAmLmVkaXQ6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1pbmZvKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4wOCk7XG4gIH1cblxuICAmLmRlbGV0ZTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wOCk7XG4gIH1cbn1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcblxuICAmLmJhZGdlLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEyKTtcbiAgICBjb2xvcjogIzA1OTY2OTtcbiAgfVxuXG4gICYuYmFkZ2UtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEyKTtcbiAgICBjb2xvcjogI2RjMjYyNjtcbiAgfVxuXG4gICYuYmFkZ2Utd2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDE1OCwgMTEsIDAuMTIpO1xuICAgIGNvbG9yOiAjZDk3NzA2O1xuICB9XG59XG5cbi5yb2xlcy1wYWdlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNHB4O1xufVxuXG4ucm9sZXMtaGVybyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4zZnIgMWZyO1xuICBnYXA6IDE0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMDI3NDQgMCUsICMxYjQyNzEgNTUlLCAjMmQ2Y2E4IDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgLmhlcm8ta2lja2VyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xM2VtO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDI0MSwgMjU1LCAwLjc4KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiAjZjdmYmZmO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgfVxuXG4gIC5wYWdlLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgyMzMsIDI0NCwgMjU1LCAwLjkpO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXgtd2lkdGg6IDYyY2g7XG4gIH1cbn1cblxuLnJvbGVzLWhlcm9fX3N0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDhweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uc3RhdC1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5OCwgMjIxLCAyNDcsIDAuMzUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiByZ2JhKDIzMiwgMjQzLCAyNTUsIDAuODUpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuLnBhZ2UtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi50b29sYmFyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgbGFiZWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA2cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICB9XG59XG5cbi50b29sYmFyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5ub3RpY2Uge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGNvbG9yOiAjNDk1Yjc3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZlMGVlO1xuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiAjYjkyMDMyO1xuICAgIGJvcmRlci1jb2xvcjogI2YwYzdkMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmNGY2O1xuICB9XG59XG5cbi5yb2xlcy10YWJsZS1jYXJkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucm9sZXMtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblxuICB0aCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgIHBhZGRpbmc6IDExcHggMTRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLTIpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIHRkIHtcbiAgICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIHRyOmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLTIpO1xuICB9XG59XG5cbi5yb2xlLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucm9sZS1pY29uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4uZGVzYy1jZWxsIHtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmFjdGlvbnMtY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xufVxuXG4uZW1wdHktY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBwYWRkaW5nOiAyOHB4IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDIyLCA0MCwgMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubW9kYWwtYm94IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDU2MHB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS0yKTtcblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uY2xvc2UtYnRuIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA4KTtcbiAgfVxufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEycHggMjBweCAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG5cbiAgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG5cbiAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwJyBoZWlnaHQ9JzYnIHZpZXdCb3g9JzAgMCAxMCA2JyUzRSUzQ3BhdGggZD0nTTEgMWw0IDQgNC00JyBzdHJva2U9JyUyMzVBNkE4NScgc3Ryb2tlLXdpZHRoPScxLjUnIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEycHggY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucm9sZXMtaGVybyxcbiAgLnJvbGVzLWhlcm9fX3N0YXRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5wYWdlLXRvb2xiYXIge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudG9vbGJhci1yaWdodCxcbiAgLnRvb2xiYXItbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucm9sZXMtdGFibGUgdGgsXG4gIC5yb2xlcy10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLnJvbGVzLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDI0cHgpO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgNnB4KTtcbiAgfVxuXG4gIC5tb2RhbC1ib3gge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return UsersPage;
})();

/***/ }),

/***/ 9195:
/*!***********************************************!*\
  !*** ./src/app/services/users-api.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersApiService: () => (/* binding */ UsersApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



let UsersApiService = /*#__PURE__*/(() => {
  class UsersApiService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.analyseServiceApiUrl || 'http://localhost:8002';
    }
    listUsers(tenantId) {
      return this.http.get(`${this.baseUrl}/admin/users?tenant_id=${encodeURIComponent(tenantId)}`);
    }
    createUser(payload) {
      return this.http.post(`${this.baseUrl}/admin/users`, {
        tenant_id: payload.tenantId,
        username: payload.username,
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        role_name: payload.roleName,
        department_name: payload.departmentName,
        is_active: payload.isActive,
        password: payload.password || undefined
      });
    }
    updateUser(payload) {
      return this.http.put(`${this.baseUrl}/admin/users/${payload.userId}`, {
        tenant_id: payload.tenantId,
        username: payload.username,
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        role_name: payload.roleName,
        department_name: payload.departmentName,
        is_active: payload.isActive,
        password: payload.password || undefined
      });
    }
    deleteUser(userId, tenantId) {
      return this.http.delete(`${this.baseUrl}/admin/users/${userId}?tenant_id=${encodeURIComponent(tenantId)}`);
    }
    static {
      this.ɵfac = function UsersApiService_Factory(t) {
        return new (t || UsersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UsersApiService,
        factory: UsersApiService.ɵfac
      });
    }
  }
  return UsersApiService;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_general-setup_users_users_module_ts.js.map