"use strict";
(self["webpackChunkcompany_portal"] = self["webpackChunkcompany_portal"] || []).push([["src_app_injection_injection_module_ts"],{

/***/ 6219:
/*!***********************************************!*\
  !*** ./src/app/injection/injection.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectionPageModule: () => (/* binding */ InjectionPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _injection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injection.page */ 8724);
/* harmony import */ var _services_injection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/injection.service */ 4431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  component: _injection_page__WEBPACK_IMPORTED_MODULE_0__.InjectionPage
}];
let InjectionPageModule = /*#__PURE__*/(() => {
  class InjectionPageModule {
    static {
      this.ɵfac = function InjectionPageModule_Factory(t) {
        return new (t || InjectionPageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: InjectionPageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_services_injection_service__WEBPACK_IMPORTED_MODULE_1__.InjectionService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
      });
    }
  }
  return InjectionPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InjectionPageModule, {
    declarations: [_injection_page__WEBPACK_IMPORTED_MODULE_0__.InjectionPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 8724:
/*!*********************************************!*\
  !*** ./src/app/injection/injection.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectionPage: () => (/* binding */ InjectionPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_injection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/injection.service */ 4431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




function InjectionPage_p_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.folderFiles.length, " files selected");
  }
}
function InjectionPage_p_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.docxFile.name);
  }
}
function InjectionPage_article_59_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
  }
}
function InjectionPage_article_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 31)(1, "div", 32)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Learning Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InjectionPage_article_59_li_9_Template, 2, 1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.statusClass(ctx_r0.currentStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentStatus || "queued");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Job ID: ", ctx_r0.jobId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.progress);
  }
}
function InjectionPage_article_60_div_24_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r3);
  }
}
function InjectionPage_article_60_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Agreement Types Learned");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InjectionPage_article_60_div_24_span_4_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.summaryTypes());
  }
}
function InjectionPage_article_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 37)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Learning Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38)(4, "div", 39)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 39)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 39)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Chunks Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 39)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sequences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, InjectionPage_article_60_div_24_Template, 5, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryNumber("customers_analyzed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryNumber("total_documents"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryNumber("total_chunks_added"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.summaryNumber("negotiation_sequences"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.summaryTypes().length);
  }
}
function InjectionPage_p_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No uploads yet for this tenant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function InjectionPage_div_66_article_1_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.error);
  }
}
function InjectionPage_div_66_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 48)(1, "div", 49)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, InjectionPage_div_66_article_1_p_16_Template, 2, 1, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.corpus_version || "auto-version");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.statusClass(item_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Job: ", item_r4.job_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 8, item_r4.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Updated: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 11, item_r4.updated_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Steps: ", item_r4.progress_count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r4.error);
  }
}
function InjectionPage_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InjectionPage_div_66_article_1_Template, 17, 14, "article", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.uploadedHistory);
  }
}
function InjectionPage_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
let InjectionPage = /*#__PURE__*/(() => {
  class InjectionPage {
    constructor(injectionService) {
      this.injectionService = injectionService;
      this.tenantId = '';
      this.customerPath = 'CustomerA';
      this.folderFiles = [];
      this.docxFile = null;
      this.jobId = '';
      this.currentStatus = '';
      this.progress = [];
      this.errorMessage = '';
      this.summary = null;
      this.uploadedHistory = [];
      this.isSubmitting = false;
      this.pollTimer = null;
      this.activeSubscription = null;
    }
    ngOnDestroy() {
      this.stopPolling();
      if (this.activeSubscription) {
        this.activeSubscription.unsubscribe();
      }
    }
    onFolderChange(event) {
      const input = event.target;
      this.folderFiles = input.files ? Array.from(input.files) : [];
    }
    onDocxFileChange(event) {
      const input = event.target;
      this.docxFile = input.files && input.files.length ? input.files[0] : null;
    }
    uploadFolder() {
      if (!this.tenantId.trim() || this.folderFiles.length === 0) {
        this.errorMessage = 'Tenant ID and folder files are required.';
        return;
      }
      this.resetRunState();
      this.isSubmitting = true;
      this.activeSubscription = this.injectionService.uploadFolderDocs({
        tenantId: this.tenantId.trim(),
        files: this.folderFiles
      }).subscribe({
        next: res => {
          this.isSubmitting = false;
          this.jobId = res.job_id;
          this.currentStatus = res.status;
          this.progress = ['Upload request accepted'];
          this.fetchHistory();
          this.startPolling();
        },
        error: err => {
          this.isSubmitting = false;
          this.errorMessage = err?.error?.detail || 'Folder upload failed.';
        }
      });
    }
    uploadDocx() {
      if (!this.tenantId.trim() || !this.docxFile) {
        this.errorMessage = 'Tenant ID and DOCX file are required.';
        return;
      }
      this.resetRunState();
      this.isSubmitting = true;
      this.activeSubscription = this.injectionService.uploadSingleDocx({
        tenantId: this.tenantId.trim(),
        customerPath: this.customerPath.trim() || 'default',
        file: this.docxFile
      }).subscribe({
        next: res => {
          this.isSubmitting = false;
          this.jobId = res.job_id;
          this.currentStatus = res.status;
          this.progress = ['DOCX upload accepted'];
          this.fetchHistory();
          this.startPolling();
        },
        error: err => {
          this.isSubmitting = false;
          this.errorMessage = err?.error?.detail || 'DOCX upload failed.';
        }
      });
    }
    fetchHistory() {
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      this.activeSubscription = this.injectionService.getTenantJobs(this.tenantId.trim(), 50).subscribe({
        next: res => {
          this.uploadedHistory = res.jobs || [];
        },
        error: err => {
          this.errorMessage = err?.error?.detail || 'Failed to load upload history.';
        }
      });
    }
    startPolling() {
      this.stopPolling();
      if (!this.jobId) return;
      this.pollTimer = setTimeout(() => this.pollJobStatus(), 1000);
    }
    pollJobStatus() {
      if (!this.jobId) return;
      this.activeSubscription = this.injectionService.getJobStatus(this.jobId).subscribe({
        next: status => {
          this.currentStatus = status.status;
          this.progress = status.progress || [];
          if (status.status === 'completed') {
            this.stopPolling();
            this.fetchSummary();
            this.fetchHistory();
            return;
          }
          if (status.status === 'failed') {
            this.stopPolling();
            this.errorMessage = status.error || 'Learning job failed.';
            this.fetchHistory();
            return;
          }
          this.pollTimer = setTimeout(() => this.pollJobStatus(), 2000);
        },
        error: err => {
          this.stopPolling();
          this.errorMessage = err?.error?.detail || 'Job polling failed.';
        }
      });
    }
    fetchSummary() {
      this.activeSubscription = this.injectionService.getJobSummary(this.jobId).subscribe({
        next: res => {
          this.summary = res;
        },
        error: err => {
          this.errorMessage = err?.error?.detail || 'Failed to fetch summary.';
        }
      });
    }
    stopPolling() {
      if (this.pollTimer) {
        clearTimeout(this.pollTimer);
        this.pollTimer = null;
      }
    }
    resetRunState() {
      this.stopPolling();
      this.errorMessage = '';
      this.summary = null;
      this.jobId = '';
      this.currentStatus = '';
      this.progress = [];
    }
    statusClass(status) {
      if (status === 'completed') return 'ok';
      if (status === 'failed') return 'fail';
      if (status === 'processing') return 'run';
      return 'wait';
    }
    summaryNumber(key) {
      if (!this.summary) return 0;
      const value = this.summary[key];
      return typeof value === 'number' ? value : 0;
    }
    summaryTypes() {
      if (!this.summary) return [];
      const value = this.summary['contract_types_found'];
      return Array.isArray(value) ? value.map(x => String(x)) : [];
    }
    static {
      this.ɵfac = function InjectionPage_Factory(t) {
        return new (t || InjectionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_injection_service__WEBPACK_IMPORTED_MODULE_0__.InjectionService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InjectionPage,
        selectors: [["app-injection"]],
        decls: 68,
        vars: 14,
        consts: [[1, "roles-content"], [1, "setup-page", "roles-page", "injection-page"], [1, "roles-hero", "card"], [1, "roles-hero__copy"], [1, "hero-kicker"], [1, "page-title"], [1, "page-subtitle"], [1, "roles-hero__stats"], [1, "stat-box"], [1, "workspace-grid"], [1, "left-zone"], [1, "card", "roles-table-card", "upload-card"], [1, "section-head"], [1, "btn-outline", 3, "click"], ["type", "text", "placeholder", "acme", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "upload-grid"], [1, "upload-block"], [1, "muted"], ["type", "file", "multiple", "", "webkitdirectory", "", "directory", "", 1, "form-control", 3, "change"], ["class", "file-meta", 4, "ngIf"], [1, "btn-primary", 3, "click", "disabled"], ["type", "text", "placeholder", "CustomerA/subfolder", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".docx", 1, "form-control", 3, "change"], ["class", "card roles-table-card job-card", 4, "ngIf"], ["class", "card roles-table-card summary-card", 4, "ngIf"], [1, "right-zone"], [1, "card", "roles-table-card", "history-card"], ["class", "muted", 4, "ngIf"], ["class", "history-list", 4, "ngIf"], ["class", "card notice error", 4, "ngIf"], [1, "file-meta"], [1, "card", "roles-table-card", "job-card"], [1, "job-head"], [1, "status-chip", 3, "ngClass"], [1, "job-id"], [1, "progress-list"], [4, "ngFor", "ngForOf"], [1, "card", "roles-table-card", "summary-card"], [1, "metric-grid"], [1, "metric-box"], ["class", "contract-types", 4, "ngIf"], [1, "contract-types"], [1, "types-label"], [1, "type-list"], ["class", "type-chip", 4, "ngFor", "ngForOf"], [1, "type-chip"], [1, "history-list"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "history-top"], [1, "history-meta"], ["class", "history-error", 4, "ngIf"], [1, "history-error"], [1, "card", "notice", "error"]],
        template: function InjectionPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Injection Service");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Document Upload Center");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Upload folders or single DOCX files to train tenant corpus with version continuity. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Current State");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Selected Files");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8)(22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "History Rows");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section", 9)(27, "div", 10)(28, "article", 11)(29, "div", 12)(30, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Upload Queue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InjectionPage_Template_button_click_32_listener() {
              return ctx.fetchHistory();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Refresh History");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Tenant ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function InjectionPage_Template_input_ngModelChange_36_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.tenantId, $event) || (ctx.tenantId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 15)(38, "div", 16)(39, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Folder Upload");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Choose a folder with nested customer/subfolder DOCX files.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InjectionPage_Template_input_change_43_listener($event) {
              return ctx.onFolderChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, InjectionPage_p_44_Template, 2, 1, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InjectionPage_Template_button_click_45_listener() {
              return ctx.uploadFolder();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Start Folder Learning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 16)(48, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Single DOCX");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Upload one contract and map it to a customer path.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Customer Path ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function InjectionPage_Template_input_ngModelChange_54_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.customerPath, $event) || (ctx.customerPath = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InjectionPage_Template_input_change_55_listener($event) {
              return ctx.onDocxFileChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, InjectionPage_p_56_Template, 2, 1, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InjectionPage_Template_button_click_57_listener() {
              return ctx.uploadDocx();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Start DOCX Learning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, InjectionPage_article_59_Template, 10, 4, "article", 23)(60, InjectionPage_article_60_Template, 25, 5, "article", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "aside", 25)(62, "article", 26)(63, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Upload History");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, InjectionPage_p_65_Template, 2, 0, "p", 27)(66, InjectionPage_div_66_Template, 2, 1, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, InjectionPage_div_67_Template, 2, 1, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentStatus || "idle");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.folderFiles.length + (ctx.docxFile ? 1 : 0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.uploadedHistory.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.tenantId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.folderFiles.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.customerPath);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docxFile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.jobId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summary);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.uploadedHistory.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploadedHistory.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        styles: ["[_ngcontent-%COMP%]:root {\n  --color-primary: #0A1628;\n  --color-primary-light: #132040;\n  --color-accent: #E8A020;\n  --color-accent-light: #F5B942;\n  --color-accent-glow: rgba(232, 160, 32, 0.15);\n  --color-bg: #F0F4FA;\n  --color-surface: #FFFFFF;\n  --color-surface-2: #F7F9FC;\n  --color-border: #E2E8F4;\n  --color-text-primary: #0A1628;\n  --color-text-secondary: #5A6A85;\n  --color-text-muted: #8FA0BE;\n  --color-success: #10B981;\n  --color-warning: #F59E0B;\n  --color-danger: #EF4444;\n  --color-info: #3B82F6;\n  --sidebar-width: 260px;\n  --sidebar-collapsed: 70px;\n  --header-height: 64px;\n  --ion-font-family: \"Plus Jakarta Sans\", sans-serif;\n  --ion-background-color: var(--color-bg);\n  --ion-text-color: var(--color-text-primary);\n  --ion-color-primary: #0A1628;\n  --ion-color-primary-rgb: 10, 22, 40;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-shade: #091320;\n  --ion-color-primary-tint: #1a2d45;\n  --shadow-sm: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);\n  --shadow-md: 0 4px 16px rgba(10,22,40,0.08), 0 2px 6px rgba(10,22,40,0.06);\n  --shadow-lg: 0 10px 40px rgba(10,22,40,0.12), 0 4px 12px rgba(10,22,40,0.08);\n  --shadow-glow: 0 0 0 3px var(--color-accent-glow);\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 16px;\n  --radius-xl: 24px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: var(--color-bg);\n  color: var(--color-text-primary);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 99px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-text-muted);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-accent) 0%, #F5B942 100%);\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 13px 28px;\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(232, 160, 32, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(232, 160, 32, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 4px 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--color-accent), #F5B942);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  transition: var(--transition);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  padding-right: 40px;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 90%;\n  max-width: 500px;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 28px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+4), .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --color-primary: #0A1628;\n  --color-primary-light: #132040;\n  --color-accent: #E8A020;\n  --color-accent-light: #F5B942;\n  --color-accent-glow: rgba(232, 160, 32, 0.15);\n  --color-bg: #F0F4FA;\n  --color-surface: #FFFFFF;\n  --color-surface-2: #F7F9FC;\n  --color-border: #E2E8F4;\n  --color-text-primary: #0A1628;\n  --color-text-secondary: #5A6A85;\n  --color-text-muted: #8FA0BE;\n  --color-success: #10B981;\n  --color-warning: #F59E0B;\n  --color-danger: #EF4444;\n  --color-info: #3B82F6;\n  --sidebar-width: 260px;\n  --sidebar-collapsed: 70px;\n  --header-height: 64px;\n  --ion-font-family: \"Plus Jakarta Sans\", sans-serif;\n  --ion-background-color: var(--color-bg);\n  --ion-text-color: var(--color-text-primary);\n  --ion-color-primary: #0A1628;\n  --ion-color-primary-rgb: 10, 22, 40;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-shade: #091320;\n  --ion-color-primary-tint: #1a2d45;\n  --shadow-sm: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04);\n  --shadow-md: 0 4px 16px rgba(10,22,40,0.08), 0 2px 6px rgba(10,22,40,0.06);\n  --shadow-lg: 0 10px 40px rgba(10,22,40,0.12), 0 4px 12px rgba(10,22,40,0.08);\n  --shadow-glow: 0 0 0 3px var(--color-accent-glow);\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 16px;\n  --radius-xl: 24px;\n  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: var(--color-bg);\n  color: var(--color-text-primary);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 99px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-text-muted);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-accent) 0%, #F5B942 100%);\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  border: none;\n  border-radius: var(--radius-md);\n  padding: 13px 28px;\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(232, 160, 32, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(232, 160, 32, 0.45);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 4px 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--color-accent), #F5B942);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  transition: var(--transition);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  padding-right: 40px;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 90%;\n  max-width: 500px;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n}\n.modal-box[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 28px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px 10px 38px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+4), .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.roles-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  max-height: calc(100vh - var(--header-height) - 56px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-radius: 14px;\n  box-sizing: border-box;\n  padding-top: calc(var(--header-height) + 10px);\n  display: flex;\n  justify-content: center;\n}\n\n.setup-page[_ngcontent-%COMP%] {\n  width: min(1180px, 100%);\n  margin: 0;\n  padding: 0 6px 18px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: linear-gradient(135deg, #e8a020, #f5b942);\n  color: var(--color-primary);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n  box-shadow: 0 4px 12px rgba(232, 160, 32, 0.3);\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(232, 160, 32, 0.4);\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  background: transparent;\n  color: var(--color-text-secondary);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 14px;\n  color: var(--color-text-primary);\n  background: var(--color-surface);\n  outline: none;\n  transition: var(--transition);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: 0 0 0 3px rgba(232, 160, 32, 0.1);\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.action-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  color: var(--color-info);\n  background: rgba(59, 130, 246, 0.08);\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n\n.roles-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.roles-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 14px;\n  padding: 20px;\n  background: linear-gradient(135deg, #102744 0%, #1b4271 55%, #2d6ca8 100%);\n  border: none;\n}\n.roles-hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.13em;\n  font-size: 11px;\n  color: rgba(226, 241, 255, 0.78);\n  font-weight: 700;\n}\n.roles-hero[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #f7fbff;\n  margin: 8px 0 0;\n}\n.roles-hero[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: rgba(233, 244, 255, 0.9);\n  margin-top: 8px;\n  max-width: 62ch;\n}\n\n.roles-hero__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  align-content: center;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  border: 1px solid rgba(198, 221, 247, 0.35);\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 10px;\n}\n.stat-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(232, 243, 255, 0.85);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  margin-top: 6px;\n  font-size: 18px;\n}\n\n.page-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px;\n}\n\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  font-weight: 700;\n  display: grid;\n  gap: 6px;\n}\n.toolbar-left[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  color: #495b77;\n  border: 1px solid #d6e0ee;\n  background: #f8fbff;\n}\n.notice.error[_ngcontent-%COMP%] {\n  color: #b92032;\n  border-color: #f0c7d0;\n  background: #fff4f6;\n}\n\n.roles-table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-primary);\n  margin: 0;\n}\n\n.roles-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--color-text-muted);\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  text-align: left;\n  white-space: nowrap;\n}\n.roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--color-border);\n  font-size: 13px;\n}\n.roles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.roles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n}\n\n.role-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-weight: 600;\n  color: var(--color-primary);\n}\n\n.role-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.role-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.desc-cell[_ngcontent-%COMP%] {\n  max-width: 420px;\n  color: var(--color-text-secondary);\n}\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 28px 14px !important;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(10, 22, 40, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  width: 100%;\n  max-width: 560px;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  margin: auto;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--color-surface-2);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Lora\", serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1.5px solid var(--color-border);\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: var(--transition);\n}\n.close-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-danger);\n  color: var(--color-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px 18px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  border-top: 1px solid var(--color-border);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235A6A85' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  padding-right: 36px;\n  cursor: pointer;\n}\n\n@media (max-width: 900px) {\n  .roles-hero[_ngcontent-%COMP%], .roles-hero__stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .toolbar-right[_ngcontent-%COMP%], .toolbar-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    font-size: 12px;\n  }\n  .roles-content[_ngcontent-%COMP%] {\n    max-height: calc(100vh - var(--header-height) - 24px);\n    padding-top: calc(var(--header-height) + 6px);\n  }\n  .modal-box[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.injection-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.roles-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0f2d50 0%, #19518a 55%, #2677bf 100%);\n}\n\n.workspace-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.45fr 1fr;\n  gap: 14px;\n  align-items: start;\n}\n\n.left-zone[_ngcontent-%COMP%], .right-zone[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.section-head[_ngcontent-%COMP%], .job-head[_ngcontent-%COMP%], .history-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n\n.upload-grid[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.upload-block[_ngcontent-%COMP%] {\n  border: 1px solid #d3e0f0;\n  border-radius: 14px;\n  padding: 12px;\n  background: linear-gradient(140deg, #fbfdff 0%, #f2f8ff 100%);\n}\n.upload-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #214d86;\n  font-size: 15px;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin: 7px 0 0;\n}\n\n.file-meta[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #35639a;\n  font-size: 13px;\n}\n\n.job-id[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #4d6788;\n  font-size: 13px;\n}\n\n.progress-list[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  padding-left: 18px;\n}\n.progress-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #33567f;\n  margin-bottom: 4px;\n}\n\n.metric-grid[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.metric-box[_ngcontent-%COMP%] {\n  border: 1px solid #d4e1f1;\n  background: linear-gradient(140deg, #fcfdff 0%, #f4f8ff 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.metric-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--color-text-muted);\n}\n.metric-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 20px;\n  color: #1b436f;\n}\n\n.contract-types[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.types-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #5c7695;\n  margin-bottom: 8px;\n}\n\n.type-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  background: #edf4ff;\n  color: #245690;\n  border: 1px solid #c8daf3;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.history-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  gap: 10px;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  border: 1px solid #d4e2f2;\n  border-radius: 12px;\n  padding: 12px;\n  background: linear-gradient(140deg, #fcfeff 0%, #f1f7ff 100%);\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #4f6989;\n  font-size: 12px;\n}\n\n.history-error[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #b92032;\n  font-size: 12px;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 999px;\n  padding: 5px 9px;\n  border: 1px solid transparent;\n}\n.status-chip.ok[_ngcontent-%COMP%] {\n  background: #e7f9ef;\n  color: #0c7b43;\n  border-color: #b5e6ca;\n}\n.status-chip.fail[_ngcontent-%COMP%] {\n  background: #fff0f2;\n  color: #bb1230;\n  border-color: #f5c1cd;\n}\n.status-chip.run[_ngcontent-%COMP%] {\n  background: #eaf3ff;\n  color: #1e4fa5;\n  border-color: #bad2fa;\n}\n.status-chip.wait[_ngcontent-%COMP%] {\n  background: #f3f5f8;\n  color: #5e6f86;\n  border-color: #d8dfe8;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  color: #495b77;\n  border: 1px solid #d6e0ee;\n  background: #f8fbff;\n}\n.notice.error[_ngcontent-%COMP%] {\n  color: #b92032;\n  border-color: #f0c7d0;\n  background: #fff4f6;\n}\n\n@media (max-width: 1100px) {\n  .workspace-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .upload-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .metric-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5qZWN0aW9uL2luamVjdGlvbi5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2dlbmVyYWwtc2V0dXAvcm9sZXMvcm9sZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBRUUsd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtFQUdBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBR0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFHQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSxrREFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBR0EseUVBQUE7RUFDQSwwRUFBQTtFQUNBLDRFQUFBO0VBQ0EsaURBQUE7RUFHQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUdBLG9EQUFBO0FDdkJGOztBRDhCQTtFQUNFLHNCQUFBO0FDM0JGOztBRDhCQTtFQUNFLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQzNCRjs7QURrQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQy9CRjs7QURpQ0E7RUFDRSx1QkFBQTtBQzlCRjs7QURnQ0E7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FDN0JGO0FEOEJFO0VBQVUsbUNBQUE7QUMzQlo7O0FEbUNBO0VBQ0UseUVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJB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QUFBO0FBd3BDRjs7QUFycENBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBd3BDRjs7QUFycENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBd3BDRjs7QUFycENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXdwQ0Y7QUF0cENFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUF3cENKO0FBcnBDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBdXBDSjtBQXBwQ0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQXNwQ0o7QUFucENFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFxcENKOztBQWpwQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBb3BDRjtBQWxwQ0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQW9wQ0o7O0FBaHBDQTtFQUNFO0lBQ0UsMEJBQUE7RUFtcENGO0FBQ0Y7QUFocENBO0VBQ0U7SUFDRSwwQkFBQTtFQWtwQ0Y7RUEvb0NBO0lBQ0UsZ0RBQUE7RUFpcENGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wYW55IFBvcnRhbCAtIFByZW1pdW0gRGVzaWduIFRoZW1lXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gR29vZ2xlIEZvbnRzIGFyZSBsb2FkZWQgZnJvbSBzcmMvaW5kZXguaHRtbCB0byBhdm9pZCBBbmd1bGFyIHN0eWxlIGVuY2Fwc3VsYXRpb24gcmV3cml0aW5nIFVSTHMuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSU9OSUMgVkFSSUFCTEVTIE9WRVJSSURFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuOnJvb3Qge1xuICAvLyBCcmFuZCBDb2xvcnNcbiAgLS1jb2xvci1wcmltYXJ5OiAjMEExNjI4O1xuICAtLWNvbG9yLXByaW1hcnktbGlnaHQ6ICMxMzIwNDA7XG4gIC0tY29sb3ItYWNjZW50OiAjRThBMDIwO1xuICAtLWNvbG9yLWFjY2VudC1saWdodDogI0Y1Qjk0MjtcbiAgLS1jb2xvci1hY2NlbnQtZ2xvdzogcmdiYSgyMzIsIDE2MCwgMzIsIDAuMTUpO1xuICBcbiAgLy8gVUkgQ29sb3JzXG4gIC0tY29sb3ItYmc6ICNGMEY0RkE7XG4gIC0tY29sb3Itc3VyZmFjZTogI0ZGRkZGRjtcbiAgLS1jb2xvci1zdXJmYWNlLTI6ICNGN0Y5RkM7XG4gIC0tY29sb3ItYm9yZGVyOiAjRTJFOEY0O1xuICAtLWNvbG9yLXRleHQtcHJpbWFyeTogIzBBMTYyODtcbiAgLS1jb2xvci10ZXh0LXNlY29uZGFyeTogIzVBNkE4NTtcbiAgLS1jb2xvci10ZXh0LW11dGVkOiAjOEZBMEJFO1xuICBcbiAgLy8gU3RhdHVzIENvbG9yc1xuICAtLWNvbG9yLXN1Y2Nlc3M6ICMxMEI5ODE7XG4gIC0tY29sb3Itd2FybmluZzogI0Y1OUUwQjtcbiAgLS1jb2xvci1kYW5nZXI6ICNFRjQ0NDQ7XG4gIC0tY29sb3ItaW5mbzogIzNCODJGNjtcbiAgXG4gIC8vIFNpZGViYXJcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNjBweDtcbiAgLS1zaWRlYmFyLWNvbGxhcHNlZDogNzBweDtcbiAgLS1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuICBcbiAgLy8gSW9uaWMgb3ZlcnJpZGVzXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMwQTE2Mjg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMCwgMjIsIDQwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMDkxMzIwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICMxYTJkNDU7XG4gIFxuICAvLyBTaGFkb3dzXG4gIC0tc2hhZG93LXNtOiAwIDFweCAzcHggcmdiYSgxMCwyMiw0MCwwLjA2KSwgMCAxcHggMnB4IHJnYmEoMTAsMjIsNDAsMC4wNCk7XG4gIC0tc2hhZG93LW1kOiAwIDRweCAxNnB4IHJnYmEoMTAsMjIsNDAsMC4wOCksIDAgMnB4IDZweCByZ2JhKDEwLDIyLDQwLDAuMDYpO1xuICAtLXNoYWRvdy1sZzogMCAxMHB4IDQwcHggcmdiYSgxMCwyMiw0MCwwLjEyKSwgMCA0cHggMTJweCByZ2JhKDEwLDIyLDQwLDAuMDgpO1xuICAtLXNoYWRvdy1nbG93OiAwIDAgMCAzcHggdmFyKC0tY29sb3ItYWNjZW50LWdsb3cpO1xuICBcbiAgLy8gQm9yZGVyIHJhZGl1c1xuICAtLXJhZGl1cy1zbTogOHB4O1xuICAtLXJhZGl1cy1tZDogMTJweDtcbiAgLS1yYWRpdXMtbGc6IDE2cHg7XG4gIC0tcmFkaXVzLXhsOiAyNHB4O1xuICBcbiAgLy8gVHJhbnNpdGlvbnNcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHTE9CQUwgU1RZTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmcpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDVVNUT00gU0NST0xMQkFSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTsgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFVVNBQkxFIENPTVBPTkVOVCBTVFlMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBCdXR0b25zXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1hY2NlbnQpIDAlLCAjRjVCOTQyIDEwMCUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIHBhZGRpbmc6IDEzcHggMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDIzMiwgMTYwLCAzMiwgMC4zNSk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDIzMiwgMTYwLCAzMiwgMC40NSk7XG4gIH1cbiAgXG4gICY6YWN0aXZlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5idG4tb3V0bGluZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50LWdsb3cpO1xuICB9XG59XG5cbi8vIENhcmRzXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxufVxuXG4vLyBQYWdlIEhlYWRlclxuLnBhZ2UtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gIH1cbiAgXG4gIC5wYWdlLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLy8gQmFkZ2Vcbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIFxuICAmLmJhZGdlLXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksMC4xMik7IGNvbG9yOiAjMDU5NjY5OyB9XG4gICYuYmFkZ2UtZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsMC4xMik7IGNvbG9yOiAjREMyNjI2OyB9XG4gICYuYmFkZ2Utd2FybmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjEyKTsgY29sb3I6ICNEOTc3MDY7IH1cbiAgJi5iYWRnZS1pbmZvIHsgYmFja2dyb3VuZDogcmdiYSg1OSwxMzAsMjQ2LDAuMTIpOyBjb2xvcjogIzI1NjNFQjsgfVxuICAmLmJhZGdlLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQtZ2xvdyk7IGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpOyB9XG59XG5cbi8vIFRhYmxlXG4uZGF0YS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBcbiAgdGgge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLTIpO1xuICB9XG4gIFxuICB0ZCB7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIFxuICB0cjpsYXN0LWNoaWxkIHRkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICBcbiAgdHI6aG92ZXIgdGQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLTIpOyB9XG59XG5cbi8vIEF2YXRhclxuLmF2YXRhciB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY29sb3ItYWNjZW50KSwgI0Y1Qjk0Mik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8vIEFjdGlvbiBpY29uIGJ1dHRvbnNcbi5hY3Rpb24tYnRuIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZyk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICAmLmVkaXQ6aG92ZXIgeyBjb2xvcjogdmFyKC0tY29sb3ItaW5mbyk7IGJhY2tncm91bmQ6IHJnYmEoNTksMTMwLDI0NiwwLjA4KTsgfVxuICAmLmRlbGV0ZTpob3ZlciB7IGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpOyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjA4KTsgfVxufVxuXG4vLyBGb3JtIGlucHV0c1xuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZ2xvdyk7XG4gICAgfVxuICAgIFxuICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG4gIH1cbiAgXG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgMTIgOCclM0UlM0NwYXRoIGQ9J00xIDFsNSA1IDUtNScgc3Ryb2tlPSclMjM1QTZBODUnIHN0cm9rZS13aWR0aD0nMS41JyBmaWxsPSdub25lJyBzdHJva2UtbGluZWNhcD0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNHB4IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi8vIE1vZGFsXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsMjIsNDAsMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2U7XG59XG5cbi5tb2RhbC1ib3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMjVzIGVhc2U7XG4gIFxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyNHB4IDI4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbiAgICBoMyB7XG4gICAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIFxuICAubW9kYWwtYm9keSB7IHBhZGRpbmc6IDI0cHggMjhweDsgfVxuICBcbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTZweCAyOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMTJweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8vIFNlYXJjaCBpbnB1dFxuLnNlYXJjaC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAuc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHggMTBweCAzOHB4O1xuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWdsb3cpO1xuICAgIH1cbiAgICBcbiAgICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTsgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmVcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGF0YS10YWJsZSB7XG4gICAgdGg6bnRoLWNoaWxkKG4rNCksIHRkOm50aC1jaGlsZChuKzQpIHsgZGlzcGxheTogbm9uZTsgfVxuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vZ2VuZXJhbC1zZXR1cC9yb2xlcy9yb2xlcy5wYWdlLnNjc3MnO1xuXG4uaW5qZWN0aW9uLXBhZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE0cHg7XG59XG5cbi5yb2xlcy1oZXJvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBmMmQ1MCAwJSwgIzE5NTE4YSA1NSUsICMyNjc3YmYgMTAwJSk7XG59XG5cbi53b3Jrc3BhY2UtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40NWZyIDFmcjtcbiAgZ2FwOiAxNHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5sZWZ0LXpvbmUsXG4ucmlnaHQtem9uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTRweDtcbn1cblxuLnNlY3Rpb24taGVhZCxcbi5qb2ItaGVhZCxcbi5oaXN0b3J5LXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udXBsb2FkLWdyaWQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTJweDtcbn1cblxuLnVwbG9hZC1ibG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2UwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNmYmZkZmYgMCUsICNmMmY4ZmYgMTAwJSk7XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzIxNGQ4NjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLm11dGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDdweCAwIDA7XG59XG5cbi5maWxlLW1ldGEge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiAjMzU2MzlhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5qb2ItaWQge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiAjNGQ2Nzg4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wcm9ncmVzcy1saXN0IHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuXG4gIGxpIHtcbiAgICBjb2xvcjogIzMzNTY3ZjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbn1cblxuLm1ldHJpYy1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEwcHg7XG59XG5cbi5tZXRyaWMtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZTFmMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgI2ZjZmRmZiAwJSwgI2Y0ZjhmZiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweDtcblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMWI0MzZmO1xuICB9XG59XG5cbi5jb250cmFjdC10eXBlcyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi50eXBlcy1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNWM3Njk1O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi50eXBlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4udHlwZS1jaGlwIHtcbiAgYmFja2dyb3VuZDogI2VkZjRmZjtcbiAgY29sb3I6ICMyNDU2OTA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGRhZjM7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaGlzdG9yeS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaGlzdG9yeS1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZTJmMjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgI2ZjZmVmZiAwJSwgI2YxZjdmZiAxMDAlKTtcbn1cblxuLmhpc3RvcnktbWV0YSB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGNvbG9yOiAjNGY2OTg5O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oaXN0b3J5LWVycm9yIHtcbiAgbWFyZ2luOiA3cHggMCAwO1xuICBjb2xvcjogI2I5MjAzMjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc3RhdHVzLWNoaXAge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiA1cHggOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmLm9rIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTdmOWVmO1xuICAgIGNvbG9yOiAjMGM3YjQzO1xuICAgIGJvcmRlci1jb2xvcjogI2I1ZTZjYTtcbiAgfVxuXG4gICYuZmFpbCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjBmMjtcbiAgICBjb2xvcjogI2JiMTIzMDtcbiAgICBib3JkZXItY29sb3I6ICNmNWMxY2Q7XG4gIH1cblxuICAmLnJ1biB7XG4gICAgYmFja2dyb3VuZDogI2VhZjNmZjtcbiAgICBjb2xvcjogIzFlNGZhNTtcbiAgICBib3JkZXItY29sb3I6ICNiYWQyZmE7XG4gIH1cblxuICAmLndhaXQge1xuICAgIGJhY2tncm91bmQ6ICNmM2Y1Zjg7XG4gICAgY29sb3I6ICM1ZTZmODY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDhkZmU4O1xuICB9XG59XG5cbi5ub3RpY2Uge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGNvbG9yOiAjNDk1Yjc3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZlMGVlO1xuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiAjYjkyMDMyO1xuICAgIGJvcmRlci1jb2xvcjogI2YwYzdkMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmNGY2O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLndvcmtzcGFjZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnVwbG9hZC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5tZXRyaWMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucm9sZXMtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDU2cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgMTBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2V0dXAtcGFnZSB7XG4gIHdpZHRoOiBtaW4oMTE4MHB4LCAxMDAlKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDZweCAxOHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U4YTAyMCwgI2Y1Yjk0Mik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjMpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjQpO1xuICB9XG59XG5cbi5idG4tb3V0bGluZSB7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIH1cbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDEzcHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjMyLCAxNjAsIDMyLCAwLjEpO1xuICB9XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgJi5lZGl0OmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaW5mbyk7XG4gICAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMDgpO1xuICB9XG5cbiAgJi5kZWxldGU6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDgpO1xuICB9XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG5cbiAgJi5iYWRnZS1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xMik7XG4gICAgY29sb3I6ICMwNTk2Njk7XG4gIH1cblxuICAmLmJhZGdlLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xMik7XG4gICAgY29sb3I6ICNkYzI2MjY7XG4gIH1cblxuICAmLmJhZGdlLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjEyKTtcbiAgICBjb2xvcjogI2Q5NzcwNjtcbiAgfVxufVxuXG4ucm9sZXMtcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTRweDtcbn1cblxuLnJvbGVzLWhlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuM2ZyIDFmcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTAyNzQ0IDAlLCAjMWI0MjcxIDU1JSwgIzJkNmNhOCAxMDAlKTtcbiAgYm9yZGVyOiBub25lO1xuXG4gIC5oZXJvLWtpY2tlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTNlbTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyNDEsIDI1NSwgMC43OCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBjb2xvcjogI2Y3ZmJmZjtcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gIH1cblxuICAucGFnZS1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHJnYmEoMjMzLCAyNDQsIDI1NSwgMC45KTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWF4LXdpZHRoOiA2MmNoO1xuICB9XG59XG5cbi5yb2xlcy1oZXJvX19zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN0YXQtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTgsIDIyMSwgMjQ3LCAwLjM1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweDtcblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogcmdiYSgyMzIsIDI0MywgMjU1LCAwLjg1KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5cbi5wYWdlLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4udG9vbGJhci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDhweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIGxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgbWluLXdpZHRoOiAxNzBweDtcbiAgfVxufVxuXG4udG9vbGJhci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4ubm90aWNlIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBjb2xvcjogIzQ5NWI3NztcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZTBlZTtcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcblxuICAmLmVycm9yIHtcbiAgICBjb2xvcjogI2I5MjAzMjtcbiAgICBib3JkZXItY29sb3I6ICNmMGM3ZDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjRmNjtcbiAgfVxufVxuXG4ucm9sZXMtdGFibGUtY2FyZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnJvbGVzLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbiAgdGgge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS0yKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0ZCB7XG4gICAgcGFkZGluZzogMTFweCAxNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIHRyOmxhc3QtY2hpbGQgdGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICB0cjpob3ZlciB0ZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZS0yKTtcbiAgfVxufVxuXG4ucm9sZS1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnJvbGUtaWNvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuLmRlc2MtY2VsbCB7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5hY3Rpb25zLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cblxuLmVtcHR5LWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgcGFkZGluZzogMjhweCAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMiwgNDAsIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1vZGFsLWJveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtMik7XG5cbiAgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmNsb3NlLWJ0biB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wOCk7XG4gIH1cbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAxMnB4IDIwcHggMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuXG4gIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuXG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PSc2JyB2aWV3Qm94PScwIDAgMTAgNiclM0UlM0NwYXRoIGQ9J00xIDFsNCA0IDQtNCcgc3Ryb2tlPSclMjM1QTZBODUnIHN0cm9rZS13aWR0aD0nMS41JyBmaWxsPSdub25lJyBzdHJva2UtbGluZWNhcD0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMnB4IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnJvbGVzLWhlcm8sXG4gIC5yb2xlcy1oZXJvX19zdGF0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAucGFnZS10b29sYmFyIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRvb2xiYXItcmlnaHQsXG4gIC50b29sYmFyLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnJvbGVzLXRhYmxlIHRoLFxuICAucm9sZXMtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5yb2xlcy1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSAyNHB4KTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIDZweCk7XG4gIH1cblxuICAubW9kYWwtYm94IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return InjectionPage;
})();

/***/ }),

/***/ 4431:
/*!***********************************************!*\
  !*** ./src/app/services/injection.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectionService: () => (/* binding */ InjectionService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



let InjectionService = /*#__PURE__*/(() => {
  class InjectionService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.injectionServiceApiUrl || 'http://localhost:8001';
    }
    uploadCorpusZip(payload) {
      const formData = new FormData();
      formData.append('tenant_id', payload.tenantId);
      formData.append('corpus_zip', payload.file);
      if (payload.corpusVersion) formData.append('corpus_version', payload.corpusVersion);
      if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
      if (payload.modelName) formData.append('model_name', payload.modelName);
      return this.http.post(`${this.baseUrl}/corpus/upload`, formData);
    }
    uploadSingleDocx(payload) {
      const formData = new FormData();
      formData.append('tenant_id', payload.tenantId);
      formData.append('customer_path', payload.customerPath);
      formData.append('docx_file', payload.file);
      if (payload.corpusVersion) formData.append('corpus_version', payload.corpusVersion);
      if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
      if (payload.modelName) formData.append('model_name', payload.modelName);
      return this.http.post(`${this.baseUrl}/corpus/upload-docx`, formData);
    }
    uploadFolderDocs(payload) {
      const formData = new FormData();
      formData.append('tenant_id', payload.tenantId);
      const relativePaths = [];
      payload.files.forEach(file => {
        const fileWithPath = file;
        relativePaths.push(fileWithPath.webkitRelativePath || file.name);
        formData.append('files', file, file.name);
      });
      formData.append('relative_paths', JSON.stringify(relativePaths));
      if (payload.corpusVersion) formData.append('corpus_version', payload.corpusVersion);
      if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
      if (payload.modelName) formData.append('model_name', payload.modelName);
      return this.http.post(`${this.baseUrl}/corpus/upload-folder`, formData);
    }
    getJobStatus(jobId) {
      return this.http.get(`${this.baseUrl}/jobs/${jobId}`);
    }
    getJobSummary(jobId) {
      return this.http.get(`${this.baseUrl}/jobs/${jobId}/summary`);
    }
    retrieve(payload) {
      return this.http.post(`${this.baseUrl}/rag/retrieve`, payload);
    }
    getTenantVersions(tenantId) {
      return this.http.get(`${this.baseUrl}/tenant/${tenantId}/versions`);
    }
    getTenantJobs(tenantId, limit = 50) {
      return this.http.get(`${this.baseUrl}/tenant/${tenantId}/jobs?limit=${limit}`);
    }
    static {
      this.ɵfac = function InjectionService_Factory(t) {
        return new (t || InjectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: InjectionService,
        factory: InjectionService.ɵfac
      });
    }
  }
  return InjectionService;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_injection_injection_module_ts.js.map