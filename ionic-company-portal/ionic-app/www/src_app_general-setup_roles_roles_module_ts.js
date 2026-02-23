"use strict";
(self["webpackChunkcompany_portal"] = self["webpackChunkcompany_portal"] || []).push([["src_app_general-setup_roles_roles_module_ts"],{

/***/ 7546:
/*!*****************************************************!*\
  !*** ./src/app/general-setup/roles/roles.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesPageModule: () => (/* binding */ RolesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _roles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.page */ 4397);
/* harmony import */ var _services_roles_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/roles-api.service */ 4686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  component: _roles_page__WEBPACK_IMPORTED_MODULE_0__.RolesPage
}];
let RolesPageModule = /*#__PURE__*/(() => {
  class RolesPageModule {
    static {
      this.ɵfac = function RolesPageModule_Factory(t) {
        return new (t || RolesPageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: RolesPageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_services_roles_api_service__WEBPACK_IMPORTED_MODULE_1__.RolesApiService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
      });
    }
  }
  return RolesPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RolesPageModule, {
    declarations: [_roles_page__WEBPACK_IMPORTED_MODULE_0__.RolesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 4397:
/*!***************************************************!*\
  !*** ./src/app/general-setup/roles/roles.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesPage: () => (/* binding */ RolesPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_roles_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/roles-api.service */ 4686);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7401);






function RolesPage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You have view-only access. Only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Super Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " can add, edit, or delete roles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RolesPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function RolesPage_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 27)(3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "div", 32)(16, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_tr_58_Template_button_click_16_listener() {
      const role_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.editRole(role_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_tr_58_Template_button_click_18_listener() {
      const role_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.deleteRole(role_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", role_r3.iconBg)("color", role_r3.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", role_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](role_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](role_r3.description || "No description provided.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](role_r3.level === "high" ? "badge-danger" : role_r3.level === "medium" ? "badge-warning" : "badge-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", role_r3.level === "high" ? "Full Access" : role_r3.level === "medium" ? "Limited" : "Read Only", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](role_r3.userCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.canManageRoles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.canManageRoles);
  }
}
function RolesPage_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No roles found for this tenant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RolesPage_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_div_60_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 39)(2, "div", 40)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_div_60_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeModal(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 43)(8, "div", 44)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Role Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RolesPage_div_60_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 44)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RolesPage_div_60_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r0.form.description, $event) || (ctx_r0.form.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 44)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Access Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RolesPage_div_60_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r0.form.level, $event) || (ctx_r0.form.level = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Full Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Limited Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Read Only");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 51)(27, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_div_60_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeModal(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_div_60_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.saveRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.editMode ? "Edit Role" : "Create New Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.form.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.form.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.form.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.editMode ? "Save Changes" : "Create Role");
  }
}
let RolesPage = /*#__PURE__*/(() => {
  class RolesPage {
    constructor(rolesApi, authService) {
      this.rolesApi = rolesApi;
      this.authService = authService;
      this.tenantId = 'default';
      this.showModal = false;
      this.editMode = false;
      this.editingId = null;
      this.isLoading = false;
      this.errorMessage = '';
      this.form = {
        name: '',
        description: '',
        level: 'medium',
        perms: []
      };
      this.roles = [];
    }
    ngOnInit() {
      this.loadRoles();
    }
    loadRoles() {
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      this.errorMessage = '';
      this.isLoading = true;
      this.rolesApi.listRoles(this.tenantId.trim()).subscribe({
        next: res => {
          this.isLoading = false;
          this.roles = (res.roles || []).map(r => this.mapFromApi(r));
        },
        error: err => {
          this.isLoading = false;
          this.errorMessage = err?.error?.detail || 'Failed to load roles.';
        }
      });
    }
    get canManageRoles() {
      const role = (this.authService.currentUser?.role || '').toLowerCase();
      return role === 'super admin' || role === 'admin';
    }
    get roleCount() {
      return this.roles.length;
    }
    get fullAccessCount() {
      return this.roles.filter(r => r.level === 'high').length;
    }
    get totalAssignedUsers() {
      return this.roles.reduce((sum, role) => sum + role.userCount, 0);
    }
    openModal() {
      this.form = {
        name: '',
        description: '',
        level: 'medium',
        perms: []
      };
      this.editMode = false;
      this.editingId = null;
      this.showModal = true;
    }
    editRole(r) {
      this.form = {
        name: r.name,
        description: r.description,
        level: r.level,
        perms: [...r.perms]
      };
      this.editingId = r.id;
      this.editMode = true;
      this.showModal = true;
    }
    deleteRole(r) {
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      if (!confirm(`Delete role "${r.name}"?`)) return;
      this.errorMessage = '';
      this.rolesApi.deleteRole(r.id, this.tenantId.trim()).subscribe({
        next: () => this.loadRoles(),
        error: err => {
          this.errorMessage = err?.error?.detail || 'Failed to delete role.';
        }
      });
    }
    saveRole() {
      if (!this.tenantId.trim() || !this.form.name.trim()) {
        this.errorMessage = 'Tenant ID and role name are required.';
        return;
      }
      this.errorMessage = '';
      if (this.editMode && this.editingId) {
        this.rolesApi.updateRole({
          roleId: this.editingId,
          tenantId: this.tenantId.trim(),
          name: this.form.name.trim(),
          description: this.form.description.trim(),
          accessLevel: this.form.level,
          permissions: this.form.perms
        }).subscribe({
          next: () => {
            this.showModal = false;
            this.loadRoles();
          },
          error: err => {
            this.errorMessage = err?.error?.detail || 'Failed to update role.';
          }
        });
      } else {
        this.rolesApi.createRole({
          tenantId: this.tenantId.trim(),
          name: this.form.name.trim(),
          description: this.form.description.trim(),
          accessLevel: this.form.level,
          permissions: this.form.perms
        }).subscribe({
          next: () => {
            this.showModal = false;
            this.loadRoles();
          },
          error: err => {
            this.errorMessage = err?.error?.detail || 'Failed to create role.';
          }
        });
      }
    }
    closeModal(e) {
      if (!e || e.target === e.currentTarget) {
        this.showModal = false;
      }
    }
    mapFromApi(r) {
      const style = this.styleForLevel(r.access_level);
      return {
        id: r.id,
        name: r.name,
        description: r.description,
        icon: style.icon,
        iconBg: style.iconBg,
        iconColor: style.iconColor,
        userCount: r.user_count || 0,
        level: r.access_level,
        perms: Array.isArray(r.permissions) ? r.permissions : []
      };
    }
    styleForLevel(level) {
      if (level === 'high') {
        return {
          icon: 'shield-checkmark-outline',
          iconBg: 'rgba(239,68,68,0.1)',
          iconColor: '#EF4444'
        };
      }
      if (level === 'medium') {
        return {
          icon: 'person-circle-outline',
          iconBg: 'rgba(232,160,32,0.1)',
          iconColor: '#E8A020'
        };
      }
      return {
        icon: 'eye-outline',
        iconBg: 'rgba(16,185,129,0.1)',
        iconColor: '#10B981'
      };
    }
    static {
      this.ɵfac = function RolesPage_Factory(t) {
        return new (t || RolesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_roles_api_service__WEBPACK_IMPORTED_MODULE_0__.RolesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: RolesPage,
        selectors: [["app-roles"]],
        decls: 61,
        vars: 12,
        consts: [[1, "roles-content"], [1, "setup-page", "roles-page"], [1, "roles-hero", "card"], [1, "roles-hero__copy"], [1, "hero-kicker"], [1, "page-title"], [1, "page-subtitle"], [1, "roles-hero__stats"], [1, "stat-box"], [1, "page-toolbar", "card"], [1, "toolbar-left"], ["type", "text", "placeholder", "default", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-outline", 3, "click", "disabled"], [1, "toolbar-right"], [1, "btn-primary", 3, "click", "disabled"], ["name", "add-outline"], ["class", "card notice", 4, "ngIf"], ["class", "card notice error", 4, "ngIf"], [1, "card", "roles-table-card"], [1, "card-header"], [1, "table-responsive"], [1, "roles-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "card", "notice"], [1, "card", "notice", "error"], [1, "role-cell"], [1, "role-icon"], [3, "name"], [1, "desc-cell"], [1, "badge"], [1, "actions-cell"], [1, "action-btn", "edit", 3, "click", "disabled"], ["name", "create-outline"], [1, "action-btn", "delete", 3, "click", "disabled"], ["name", "trash-outline"], ["colspan", "5", 1, "empty-cell"], [1, "modal-overlay", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["name", "close-outline"], [1, "modal-body"], [1, "form-group"], ["type", "text", "placeholder", "e.g. Contract Reviewer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "What can this role do?", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "high"], ["value", "medium"], ["value", "low"], [1, "modal-footer"], [1, "btn-outline", 3, "click"], [1, "btn-primary", 3, "click"]],
        template: function RolesPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Access Governance");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Define access controls, enforce permission boundaries, and keep role ownership centralized.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Total Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Full Access");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Assigned Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9)(27, "div", 10)(28, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Tenant ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RolesPage_Template_input_ngModelChange_30_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.tenantId, $event) || (ctx.tenantId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_Template_button_click_31_listener() {
              return ctx.loadRoles();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 13)(34, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesPage_Template_button_click_34_listener() {
              return ctx.openModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "ion-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Add Role ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, RolesPage_div_37_Template, 8, 0, "div", 16)(38, RolesPage_div_38_Template, 2, 1, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "section", 18)(40, "div", 19)(41, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Role Registry");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20)(44, "table", 21)(45, "thead")(46, "tr")(47, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Role");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Access Level");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, RolesPage_tr_58_Template, 20, 13, "tr", 22)(59, RolesPage_tr_59_Template, 3, 0, "tr", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, RolesPage_div_60_Template, 31, 5, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.roleCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.fullAccessCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalAssignedUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.tenantId);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isLoading ? "Loading..." : "Load Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.canManageRoles);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.canManageRoles);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.roles.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showModal);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon],
        styles: ["[_ngcontent-%COMP%]:root {\n  --color-primary: #0A1628;\n  --color-primary-light: #132040;\n  --color-accent: #E8A020;\n  --color-accent-light: #F5B942;\n  --color-accent-glow: rgba(232, 160, 32, 0.15);\n  --color-bg: #F0F4FA;\n  --color-surface: #FFFFFF;\n  --color-surface-2: #F7F9FC;\n  --color-border: #E2E8F4;\n  --color-text-primary: #0A1628;\n  --color-text-secondary: #5A6A85;\n  --color-text-muted: #8FA0BE;\n  --color-success: #10B981;\n  --color-warning: #F59E0B;\n  --color-danger: #EF4444;\n  --color-info: #3B82F6;\n  --sidebar-width: 260px;\n  --sidebar-collapsed: 70px;\n  --header-height: 64px;\n  --ion-font-family: \"Plus Jakarta Sans\", sans-serif;\n  --ion-background-color: var(--color-bg);\n  --ion-text-color: var(--color-text-primary);\n  --ion-color-primary: #0A1628;\n  --ion-color-primary-rgb: 10, 22, 40;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-shade: #091320;\n  --ion-color-primary-tint: #1a2d45;\n  --shadow-sm: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);\n  --shadow-md: 0 4px 16px rgba(10,22,40,0.08), 0 2px 6px rgba(10,22,40,0.06);\n  --shadow-lg: 0 10px 40px rgba(10,22,40,0.12), 0 4px 12px rgba(10,22,40,0.08);\n  --shadow-glow: 0 0 0 3px var(--color-accent-glow);\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 16px;\n  --radius-xl: 24px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: var(--color-bg);\n  color: var(--color-text-primary);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 99px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-text-muted);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-accent) 0%, #F5B942 100%);\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 13px 28px;\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(232, 160, 32, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(232, 160, 32, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 4px 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--color-accent), #F5B942);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  transition: var(--transition);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  padding-right: 40px;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 90%;\n  max-width: 500px;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 28px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+4), .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.roles-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  max-height: calc(100vh - var(--header-height) - 56px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-radius: 14px;\n  box-sizing: border-box;\n  padding-top: calc(var(--header-height) + 10px);\n  display: flex;\n  justify-content: center;\n}\n\n.setup-page[_ngcontent-%COMP%] {\n  width: min(1180px, 100%);\n  margin: 0;\n  padding: 0 6px 18px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: linear-gradient(135deg, #e8a020, #f5b942);\n  color: var(--color-primary);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 12px rgba(232, 160, 32, 0.3);\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(232, 160, 32, 0.4);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: transparent;\n  color: var(--color-text-secondary);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: 0 0 0 3px rgba(232, 160, 32, 0.1);\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n\n.roles-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.roles-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 14px;\n  padding: 20px;\n  background: linear-gradient(135deg, #102744 0%, #1b4271 55%, #2d6ca8 100%);\n  border: none;\n}\n.roles-hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.13em;\n  font-size: 11px;\n  color: rgba(226, 241, 255, 0.78);\n  font-weight: 700;\n}\n.roles-hero[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #f7fbff;\n  margin: 8px 0 0;\n}\n.roles-hero[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: rgba(233, 244, 255, 0.9);\n  margin-top: 8px;\n  max-width: 62ch;\n}\n\n.roles-hero__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  align-content: center;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  border: 1px solid rgba(198, 221, 247, 0.35);\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 10px;\n}\n.stat-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(232, 243, 255, 0.85);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  margin-top: 6px;\n  font-size: 18px;\n}\n\n.page-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px;\n}\n\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  font-weight: 700;\n  display: grid;\n  gap: 6px;\n}\n.toolbar-left[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  color: #495b77;\n  border: 1px solid #d6e0ee;\n  background: #f8fbff;\n}\n.notice.error[_ngcontent-%COMP%] {\n  color: #b92032;\n  border-color: #f0c7d0;\n  background: #fff4f6;\n}\n\n.roles-table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n  margin: 0;\n}\n\n.roles-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--color-text-muted);\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  text-align: left;\n  white-space: nowrap;\n}\n.roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  font-size: 13px;\n}\n.roles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.roles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.role-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-weight: 600;\n  color: var(--color-primary);\n}\n\n.role-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.role-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.desc-cell[_ngcontent-%COMP%] {\n  max-width: 420px;\n  color: var(--color-text-secondary);\n}\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 28px 14px !important;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 100%;\n  max-width: 560px;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  margin: auto;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--color-surface-2);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1.5px solid var(--color-border);\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.close-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-danger);\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px 18px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  border-top: 1px solid var(--color-border);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  padding-right: 36px;\n  cursor: pointer;\n}\n\n@media (max-width: 900px) {\n  .roles-hero[_ngcontent-%COMP%], .roles-hero__stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .toolbar-right[_ngcontent-%COMP%], .toolbar-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    font-size: 12px;\n  }\n  .roles-content[_ngcontent-%COMP%] {\n    max-height: calc(100vh - var(--header-height) - 24px);\n    padding-top: calc(var(--header-height) + 6px);\n  }\n  .modal-box[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2VuZXJhbC1zZXR1cC9yb2xlcy9yb2xlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFFRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZDQUFBO0VBR0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFHQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUdBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUdBLGtEQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFHQSx5RUFBQTtFQUNBLDBFQUFBO0VBQ0EsNEVBQUE7RUFDQSxpREFBQTtFQUdBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBR0Esb0RBQUE7QUN2QkY7O0FEOEJBO0VBQ0Usc0JBQUE7QUMzQkY7O0FEOEJBO0VBQ0UsNENBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FDM0JGOztBRGtDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDL0JGOztBRGlDQTtFQUNFLHVCQUFBO0FDOUJGOztBRGdDQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUM3QkY7QUQ4QkU7RUFBVSxtQ0FBQTtBQzNCWjs7QURtQ0E7RUFDRSx5RUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLCtDQUFBO0FDaENGO0FEa0NFO0VBQ0UsMkJBQUE7RUFDQSwrQ0FBQTtBQ2hD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Ly8gQ29tcGFueSBQb3J0YWwgLSBQcmVtaXVtIERlc2lnbiBUaGVtZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEdvb2dsZSBGb250cyBhcmUgbG9hZGVkIGZyb20gc3JjL2luZGV4Lmh0bWwgdG8gYXZvaWQgQW5ndWxhciBzdHlsZSBlbmNhcHN1bGF0aW9uIHJld3JpdGluZyBVUkxzLlxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElPTklDIFZBUklBQkxFUyBPVkVSUklERVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbjpyb290IHtcbiAgLy8gQnJhbmQgQ29sb3JzXG4gIC0tY29sb3ItcHJpbWFyeTogIzBBMTYyODtcbiAgLS1jb2xvci1wcmltYXJ5LWxpZ2h0OiAjMTMyMDQwO1xuICAtLWNvbG9yLWFjY2VudDogI0U4QTAyMDtcbiAgLS1jb2xvci1hY2NlbnQtbGlnaHQ6ICNGNUI5NDI7XG4gIC0tY29sb3ItYWNjZW50LWdsb3c6IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjE1KTtcbiAgXG4gIC8vIFVJIENvbG9yc1xuICAtLWNvbG9yLWJnOiAjRjBGNEZBO1xuICAtLWNvbG9yLXN1cmZhY2U6ICNGRkZGRkY7XG4gIC0tY29sb3Itc3VyZmFjZS0yOiAjRjdGOUZDO1xuICAtLWNvbG9yLWJvcmRlcjogI0UyRThGNDtcbiAgLS1jb2xvci10ZXh0LXByaW1hcnk6ICMwQTE2Mjg7XG4gIC0tY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM1QTZBODU7XG4gIC0tY29sb3ItdGV4dC1tdXRlZDogIzhGQTBCRTtcbiAgXG4gIC8vIFN0YXR1cyBDb2xvcnNcbiAgLS1jb2xvci1zdWNjZXNzOiAjMTBCOTgxO1xuICAtLWNvbG9yLXdhcm5pbmc6ICNGNTlFMEI7XG4gIC0tY29sb3ItZGFuZ2VyOiAjRUY0NDQ0O1xuICAtLWNvbG9yLWluZm86ICMzQjgyRjY7XG4gIFxuICAvLyBTaWRlYmFyXG4gIC0tc2lkZWJhci13aWR0aDogMjYwcHg7XG4gIC0tc2lkZWJhci1jb2xsYXBzZWQ6IDcwcHg7XG4gIC0taGVhZGVyLWhlaWdodDogNjRweDtcbiAgXG4gIC8vIElvbmljIG92ZXJyaWRlc1xuICAtLWlvbi1mb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMEExNjI4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMTAsIDIyLCA0MDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzA5MTMyMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjMWEyZDQ1O1xuICBcbiAgLy8gU2hhZG93c1xuICAtLXNoYWRvdy1zbTogMCAxcHggM3B4IHJnYmEoMTAsMjIsNDAsMC4wNiksIDAgMXB4IDJweCByZ2JhKDEwLDIyLDQwLDAuMDQpO1xuICAtLXNoYWRvdy1tZDogMCA0cHggMTZweCByZ2JhKDEwLDIyLDQwLDAuMDgpLCAwIDJweCA2cHggcmdiYSgxMCwyMiw0MCwwLjA2KTtcbiAgLS1zaGFkb3ctbGc6IDAgMTBweCA0MHB4IHJnYmEoMTAsMjIsNDAsMC4xMiksIDAgNHB4IDEycHggcmdiYSgxMCwyMiw0MCwwLjA4KTtcbiAgLS1zaGFkb3ctZ2xvdzogMCAwIDAgM3B4IHZhcigtLWNvbG9yLWFjY2VudC1nbG93KTtcbiAgXG4gIC8vIEJvcmRlciByYWRpdXNcbiAgLS1yYWRpdXMtc206IDhweDtcbiAgLS1yYWRpdXMtbWQ6IDEycHg7XG4gIC0tcmFkaXVzLWxnOiAxNnB4O1xuICAtLXJhZGl1cy14bDogMjRweDtcbiAgXG4gIC8vIFRyYW5zaXRpb25zXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0xPQkFMIFNUWUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ1VTVE9NIFNDUk9MTEJBUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7IH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVVTQUJMRSBDT01QT05FTlQgU1RZTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQnV0dG9uc1xuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY29sb3ItYWNjZW50KSAwJSwgI0Y1Qjk0MiAxMDAlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBwYWRkaW5nOiAxM3B4IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgyMzIsIDE2MCwgMzIsIDAuMzUpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgyMzIsIDE2MCwgMzIsIDAuNDUpO1xuICB9XG4gIFxuICAmOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4uYnRuLW91dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWFjY2VudC1nbG93KTtcbiAgfVxufVxuXG4vLyBDYXJkc1xuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLy8gUGFnZSBIZWFkZXJcbi5wYWdlLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIFxuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICB9XG4gIFxuICAucGFnZS1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi8vIEJhZGdlXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBcbiAgJi5iYWRnZS1zdWNjZXNzIHsgYmFja2dyb3VuZDogcmdiYSgxNiwxODUsMTI5LDAuMTIpOyBjb2xvcjogIzA1OTY2OTsgfVxuICAmLmJhZGdlLWRhbmdlciB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMTIpOyBjb2xvcjogI0RDMjYyNjsgfVxuICAmLmJhZGdlLXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xMik7IGNvbG9yOiAjRDk3NzA2OyB9XG4gICYuYmFkZ2UtaW5mbyB7IGJhY2tncm91bmQ6IHJnYmEoNTksMTMwLDI0NiwwLjEyKTsgY29sb3I6ICMyNTYzRUI7IH1cbiAgJi5iYWRnZS1wcmltYXJ5IHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50LWdsb3cpOyBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTsgfVxufVxuXG4vLyBUYWJsZVxuLmRhdGEtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgXG4gIHRoIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS0yKTtcbiAgfVxuICBcbiAgdGQge1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgdHI6bGFzdC1jaGlsZCB0ZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cbiAgXG4gIHRyOmhvdmVyIHRkIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS0yKTsgfVxufVxuXG4vLyBBdmF0YXJcbi5hdmF0YXIge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLWFjY2VudCksICNGNUI5NDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vLyBBY3Rpb24gaWNvbiBidXR0b25zXG4uYWN0aW9uLWJ0biB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmcpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgJi5lZGl0OmhvdmVyIHsgY29sb3I6IHZhcigtLWNvbG9yLWluZm8pOyBiYWNrZ3JvdW5kOiByZ2JhKDU5LDEzMCwyNDYsMC4wOCk7IH1cbiAgJi5kZWxldGU6aG92ZXIgeyBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4wOCk7IH1cbn1cblxuLy8gRm9ybSBpbnB1dHNcbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTFweCAxNHB4O1xuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWdsb3cpO1xuICAgIH1cbiAgICBcbiAgICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTsgfVxuICB9XG4gIFxuICBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEyIDgnJTNFJTNDcGF0aCBkPSdNMSAxbDUgNSA1LTUnIHN0cm9rZT0nJTIzNUE2QTg1JyBzdHJva2Utd2lkdGg9JzEuNScgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTRweCBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxufVxuXG4vLyBNb2RhbFxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLDIyLDQwLDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlO1xufVxuXG4ubW9kYWwtYm94IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjI1cyBlYXNlO1xuICBcbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjRweCAyOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG4gICAgaDMge1xuICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLm1vZGFsLWJvZHkgeyBwYWRkaW5nOiAyNHB4IDI4cHg7IH1cbiAgXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMjhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4vLyBTZWFyY2ggaW5wdXRcbi5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLnNlYXJjaC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTJweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxNHB4IDEwcHggMzhweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1nbG93KTtcbiAgICB9XG4gICAgXG4gICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7IH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRhdGEtdGFibGUge1xuICAgIHRoOm50aC1jaGlsZChuKzQpLCB0ZDpudGgtY2hpbGQobis0KSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJvbGVzLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSA1NnB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIDEwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNldHVwLXBhZ2Uge1xuICB3aWR0aDogbWluKDExODBweCwgMTAwJSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA2cHggMThweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlOGEwMjAsICNmNWI5NDIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIzMiwgMTYwLCAzMiwgMC4zKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDIzMiwgMTYwLCAzMiwgMC40KTtcbiAgfVxufVxuXG4uYnRuLW91dGxpbmUge1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxM3B4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIzMiwgMTYwLCAzMiwgMC4xKTtcbiAgfVxufVxuXG4uYWN0aW9uLWJ0biB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gICYuZWRpdDpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWluZm8pO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjA4KTtcbiAgfVxuXG4gICYuZGVsZXRlOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA4KTtcbiAgfVxufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuXG4gICYuYmFkZ2Utc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMTIpO1xuICAgIGNvbG9yOiAjMDU5NjY5O1xuICB9XG5cbiAgJi5iYWRnZS1kYW5nZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTIpO1xuICAgIGNvbG9yOiAjZGMyNjI2O1xuICB9XG5cbiAgJi5iYWRnZS13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC4xMik7XG4gICAgY29sb3I6ICNkOTc3MDY7XG4gIH1cbn1cblxuLnJvbGVzLXBhZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE0cHg7XG59XG5cbi5yb2xlcy1oZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciAxZnI7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwMjc0NCAwJSwgIzFiNDI3MSA1NSUsICMyZDZjYTggMTAwJSk7XG4gIGJvcmRlcjogbm9uZTtcblxuICAuaGVyby1raWNrZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjEzZW07XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjQxLCAyNTUsIDAuNzgpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAucGFnZS10aXRsZSB7XG4gICAgY29sb3I6ICNmN2ZiZmY7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICB9XG5cbiAgLnBhZ2Utc3VidGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDIzMywgMjQ0LCAyNTUsIDAuOSk7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1heC13aWR0aDogNjJjaDtcbiAgfVxufVxuXG4ucm9sZXMtaGVyb19fc3RhdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0LWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk4LCAyMjEsIDI0NywgMC4zNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHJnYmEoMjMyLCAyNDMsIDI1NSwgMC44NSk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4ucGFnZS10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLnRvb2xiYXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBsYWJlbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDZweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIG1pbi13aWR0aDogMTcwcHg7XG4gIH1cbn1cblxuLnRvb2xiYXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLm5vdGljZSB7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgY29sb3I6ICM0OTViNzc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmUwZWU7XG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XG5cbiAgJi5lcnJvciB7XG4gICAgY29sb3I6ICNiOTIwMzI7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjBjN2QwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY0ZjY7XG4gIH1cbn1cblxuLnJvbGVzLXRhYmxlLWNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5yb2xlcy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gIHRoIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gICAgcGFkZGluZzogMTFweCAxNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtMik7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgdGQge1xuICAgIHBhZGRpbmc6IDExcHggMTRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgdHI6aG92ZXIgdGQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtMik7XG4gIH1cbn1cblxuLnJvbGUtY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5yb2xlLWljb24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5cbi5kZXNjLWNlbGwge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uYWN0aW9ucy1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5lbXB0eS1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIHBhZGRpbmc6IDI4cHggMTRweCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwgMjIsIDQwLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tb2RhbC1ib3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTYwcHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMThweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLTIpO1xuXG4gIGgzIHtcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5jbG9zZS1idG4ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDgpO1xuICB9XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMThweCAyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMTJweCAyMHB4IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cblxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gIH1cblxuICBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAnIGhlaWdodD0nNicgdmlld0JveD0nMCAwIDEwIDYnJTNFJTNDcGF0aCBkPSdNMSAxbDQgNCA0LTQnIHN0cm9rZT0nJTIzNUE2QTg1JyBzdHJva2Utd2lkdGg9JzEuNScgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMzZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5yb2xlcy1oZXJvLFxuICAucm9sZXMtaGVyb19fc3RhdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnBhZ2UtdG9vbGJhciB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC50b29sYmFyLXJpZ2h0LFxuICAudG9vbGJhci1sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5yb2xlcy10YWJsZSB0aCxcbiAgLnJvbGVzLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAucm9sZXMtY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gMjRweCk7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyA2cHgpO1xuICB9XG5cbiAgLm1vZGFsLWJveCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return RolesPage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_general-setup_roles_roles_module_ts.js.map