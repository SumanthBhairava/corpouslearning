"use strict";
(self["webpackChunkcompany_portal"] = self["webpackChunkcompany_portal"] || []).push([["src_app_analyse_analyse_module_ts"],{

/***/ 6623:
/*!*******************************************!*\
  !*** ./src/app/analyse/analyse.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalysePageModule: () => (/* binding */ AnalysePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _analyse_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyse.page */ 7656);
/* harmony import */ var _services_analyse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/analyse.service */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  component: _analyse_page__WEBPACK_IMPORTED_MODULE_0__.AnalysePage
}];
let AnalysePageModule = /*#__PURE__*/(() => {
  class AnalysePageModule {
    static {
      this.ɵfac = function AnalysePageModule_Factory(t) {
        return new (t || AnalysePageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AnalysePageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_services_analyse_service__WEBPACK_IMPORTED_MODULE_1__.AnalyseService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
      });
    }
  }
  return AnalysePageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnalysePageModule, {
    declarations: [_analyse_page__WEBPACK_IMPORTED_MODULE_0__.AnalysePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 7656:
/*!*****************************************!*\
  !*** ./src/app/analyse/analyse.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalysePage: () => (/* binding */ AnalysePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_analyse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/analyse.service */ 3731);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




function AnalysePage_p_41_Template(rf, ctx) {
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
function AnalysePage_article_44_li_9_Template(rf, ctx) {
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
function AnalysePage_article_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 31)(1, "div", 32)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Job Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AnalysePage_article_44_li_9_Template, 2, 1, "li", 36);
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
function AnalysePage_article_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 37)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Document Signals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38)(4, "div", 39)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Tracked Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 39)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 39)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Additions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 39)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Strikeouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 39)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Precedents");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 39)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Confidence");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getDocumentStat("tracked_changes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSummaryCount("comments_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSummaryCount("additions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSummaryCount("strikeouts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSummaryCount("document_level_precedents"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](34, 6, ctx_r0.getDocumentStat("extraction_confidence"), "1.2-2"));
  }
}
function AnalysePage_article_46_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No precedent citations returned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AnalysePage_article_46_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("#", i_r4 + 1, " ", c_r3["filename"] || "Unknown File", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Score ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 4, c_r3["score"] || 0, "1.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r3["text"] || "-");
  }
}
function AnalysePage_article_46_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AnalysePage_article_46_div_4_div_1_Template, 9, 7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getPrecedentCitations());
  }
}
function AnalysePage_article_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 40)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Top Precedent Evidence");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AnalysePage_article_46_p_3_Template, 2, 0, "p", 24)(4, AnalysePage_article_46_div_4_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.getPrecedentCitations().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getPrecedentCitations().length);
  }
}
function AnalysePage_p_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Run analysis to view redline-by-redline guidance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AnalysePage_div_55_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalysePage_div_55_button_1_Template_button_click_0_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.selectRedline(item_r6.index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 49)(2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", item_r6.index === ctx_r0.selectedRedlineIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("#", item_r6.index, " ", item_r6.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.decisionClass(item_r6.index));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.decisionLabel(item_r6.index));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.sectionTitle);
  }
}
function AnalysePage_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AnalysePage_div_55_button_1_Template, 10, 8, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getRedlineInsights());
  }
}
function AnalysePage_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Selected Redline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 55)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Intent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 55)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Suggested:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 56)(16, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalysePage_div_56_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.decide("accept"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalysePage_div_56_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.decide("reject"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalysePage_div_56_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.decide("edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Edit text ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "textarea", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AnalysePage_div_56_Template_textarea_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r0.redlineEditorText, $event) || (ctx_r0.redlineEditorText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalysePage_div_56_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.saveEditedText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Save Edited Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selected_r8 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", selected_r8.sectionTitle, " \u2022 ", selected_r8.legalTopic, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](selected_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", selected_r8.intent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", selected_r8.suggestedResponse, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.redlineEditorText);
  }
}
function AnalysePage_p_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No analysis jobs yet for this tenant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AnalysePage_div_61_article_1_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.error);
  }
}
function AnalysePage_div_61_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 65)(1, "div", 66)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AnalysePage_div_61_article_1_p_16_Template, 2, 1, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((item_r9.input == null ? null : item_r9.input.file_name) || "Unknown file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.statusClass(item_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Job: ", item_r9.job_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 9, item_r9.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Updated: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 12, item_r9.updated_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Mode: ", (item_r9.input == null ? null : item_r9.input.version_mode) || "latest", " | top_k: ", (item_r9.input == null ? null : item_r9.input.top_k) || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r9.error);
  }
}
function AnalysePage_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AnalysePage_div_61_article_1_Template, 17, 15, "article", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.analysisHistory);
  }
}
function AnalysePage_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
let AnalysePage = /*#__PURE__*/(() => {
  class AnalysePage {
    constructor(analyseService) {
      this.analyseService = analyseService;
      this.tenantId = '';
      this.topK = 5;
      this.versionMode = 'latest';
      this.contractType = '';
      this.injectionServiceUrl = 'http://localhost:8001';
      this.lmStudioUrl = 'http://localhost:1234';
      this.modelName = 'mistral';
      this.docxFile = null;
      this.jobId = '';
      this.currentStatus = '';
      this.progress = [];
      this.errorMessage = '';
      this.analysisResult = null;
      this.analysisHistory = [];
      this.selectedRedlineIndex = -1;
      this.redlineEditorText = '';
      this.decisions = {};
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
    onDocxFileChange(event) {
      const input = event.target;
      this.docxFile = input.files && input.files.length ? input.files[0] : null;
    }
    runAnalysis() {
      if (!this.tenantId.trim() || !this.docxFile) {
        this.errorMessage = 'Tenant ID and DOCX file are required.';
        return;
      }
      this.resetRunState();
      this.isSubmitting = true;
      this.activeSubscription = this.analyseService.uploadDocxForAnalysis({
        tenantId: this.tenantId.trim(),
        file: this.docxFile,
        topK: this.topK,
        versionMode: this.versionMode,
        contractType: this.contractType.trim() || undefined,
        injectionServiceUrl: this.injectionServiceUrl.trim(),
        lmStudioUrl: this.lmStudioUrl.trim(),
        modelName: this.modelName.trim()
      }).subscribe({
        next: res => {
          this.isSubmitting = false;
          this.jobId = res.job_id;
          this.currentStatus = res.status;
          this.progress = ['Analysis request accepted'];
          this.fetchHistory();
          if (res.status === 'completed') {
            this.fetchResult();
          } else {
            this.startPolling();
          }
        },
        error: err => {
          this.isSubmitting = false;
          this.errorMessage = err?.error?.detail || 'Analysis upload failed.';
        }
      });
    }
    fetchHistory() {
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      this.activeSubscription = this.analyseService.getTenantHistory(this.tenantId.trim(), 50).subscribe({
        next: res => {
          this.analysisHistory = res.jobs || [];
        },
        error: err => {
          this.errorMessage = err?.error?.detail || 'Failed to load analysis history.';
        }
      });
    }
    getContractType() {
      const result = this.analysisResult;
      return result?.contract_type || 'Unknown';
    }
    getSummaryCount(key) {
      const result = this.analysisResult;
      const value = result?.summary?.[key];
      return typeof value === 'number' ? value : 0;
    }
    getDocumentStat(key) {
      const result = this.analysisResult;
      const value = result?.document_stats?.[key];
      return typeof value === 'number' ? value : 0;
    }
    getRedlineInsights() {
      const result = this.analysisResult;
      const redlineInsights = result?.redline_insights || [];
      return redlineInsights.map(item => {
        const redline = item['redline'] || {};
        const section = item['section_analysis'] || {};
        const negotiation = item['negotiation_intelligence'] || {};
        return {
          index: typeof item['index'] === 'number' ? item['index'] : 0,
          type: String(redline['type'] || 'UNKNOWN'),
          text: String(redline['text'] || ''),
          sectionTitle: String(section['section_title'] || 'Unknown section'),
          legalTopic: String(section['legal_topic'] || 'Unknown topic'),
          changeMagnitude: String(section['change_magnitude'] || 'unknown'),
          retrievalTotal: typeof item['retrieval_total'] === 'number' ? item['retrieval_total'] : 0,
          intent: String(section['negotiation_intent'] || 'No intent extracted'),
          suggestedResponse: String(negotiation['our_response'] || negotiation['success_factors'] || 'No suggested response')
        };
      });
    }
    getPrecedentCitations() {
      const result = this.analysisResult;
      const retrieval = result?.document_precedent_retrieval || {};
      const citations = retrieval['results'];
      if (!Array.isArray(citations)) {
        return [];
      }
      return citations.slice(0, 6);
    }
    selectRedline(index) {
      const found = this.getRedlineInsights().find(x => x.index === index);
      this.selectedRedlineIndex = index;
      this.redlineEditorText = found?.text || '';
    }
    getSelectedRedline() {
      if (this.selectedRedlineIndex < 0) {
        return null;
      }
      return this.getRedlineInsights().find(x => x.index === this.selectedRedlineIndex) || null;
    }
    decide(action, index) {
      const targetIndex = typeof index === 'number' ? index : this.selectedRedlineIndex;
      if (targetIndex < 0) return;
      this.decisions[targetIndex] = {
        action,
        editedText: action === 'edit' ? this.redlineEditorText : undefined
      };
    }
    saveEditedText() {
      if (this.selectedRedlineIndex < 0) return;
      this.decisions[this.selectedRedlineIndex] = {
        action: 'edit',
        editedText: this.redlineEditorText
      };
    }
    getDecision(index) {
      return this.decisions[index] || null;
    }
    decisionLabel(index) {
      const decision = this.getDecision(index);
      if (!decision) return 'Pending';
      if (decision.action === 'accept') return 'Accepted';
      if (decision.action === 'reject') return 'Rejected';
      return 'Edited';
    }
    decisionClass(index) {
      const decision = this.getDecision(index);
      if (!decision) return 'pending';
      if (decision.action === 'accept') return 'accepted';
      if (decision.action === 'reject') return 'rejected';
      return 'edited';
    }
    statusClass(status) {
      if (status === 'completed') return 'ok';
      if (status === 'failed') return 'fail';
      if (status === 'processing') return 'run';
      return 'wait';
    }
    startPolling() {
      this.stopPolling();
      if (!this.jobId) return;
      this.pollTimer = setTimeout(() => this.pollJobStatus(), 1000);
    }
    pollJobStatus() {
      if (!this.jobId) return;
      this.activeSubscription = this.analyseService.getJobStatus(this.jobId).subscribe({
        next: status => {
          this.currentStatus = status.status;
          this.progress = status.progress || [];
          if (status.status === 'completed') {
            this.stopPolling();
            this.fetchResult();
            this.fetchHistory();
            return;
          }
          if (status.status === 'failed') {
            this.stopPolling();
            this.errorMessage = status.error || 'Analysis job failed.';
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
    fetchResult() {
      if (!this.jobId) return;
      this.activeSubscription = this.analyseService.getJobResult(this.jobId).subscribe({
        next: res => {
          this.analysisResult = res;
          this.selectedRedlineIndex = -1;
          this.decisions = {};
          const first = this.getRedlineInsights()[0];
          if (first) {
            this.selectRedline(first.index);
          }
        },
        error: err => {
          this.errorMessage = err?.error?.detail || 'Failed to fetch analysis result.';
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
      this.analysisResult = null;
      this.jobId = '';
      this.currentStatus = '';
      this.progress = [];
      this.selectedRedlineIndex = -1;
      this.redlineEditorText = '';
      this.decisions = {};
    }
    static {
      this.ɵfac = function AnalysePage_Factory(t) {
        return new (t || AnalysePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_analyse_service__WEBPACK_IMPORTED_MODULE_0__.AnalyseService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AnalysePage,
        selectors: [["app-analyse"]],
        decls: 63,
        vars: 17,
        consts: [[1, "analyse-content"], [1, "texture-layer"], [1, "analyse-shell"], [1, "masthead"], [1, "kicker"], [1, "lead"], [1, "headline-stats"], [1, "stat-pill"], [1, "workspace-grid"], [1, "left-zone"], [1, "card", "upload-card"], [1, "config-top"], [1, "btn-ghost", 3, "click"], [1, "muted"], ["type", "text", "placeholder", "acme", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".docx", 3, "change"], ["class", "file-meta", 4, "ngIf"], [1, "btn-primary", 3, "click", "disabled"], ["class", "card job-card", 4, "ngIf"], ["class", "card metrics-card", 4, "ngIf"], ["class", "card precedent-card", 4, "ngIf"], [1, "right-zone"], [1, "card", "redline-card"], [1, "redline-head"], ["class", "muted", 4, "ngIf"], ["class", "redline-list", 4, "ngIf"], ["class", "review-panel", 4, "ngIf"], [1, "card", "history-card"], ["class", "history-list", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "file-meta"], [1, "card", "job-card"], [1, "job-head"], [1, "status-chip", 3, "ngClass"], [1, "job-id"], [1, "progress-list"], [4, "ngFor", "ngForOf"], [1, "card", "metrics-card"], [1, "metric-grid"], [1, "metric-box"], [1, "card", "precedent-card"], ["class", "citation-list", 4, "ngIf"], [1, "citation-list"], ["class", "citation-item", 4, "ngFor", "ngForOf"], [1, "citation-item"], [1, "citation-head"], [1, "redline-list"], ["type", "button", "class", "redline-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "redline-item", 3, "click"], [1, "redline-row"], [1, "tag"], [1, "decision", 3, "ngClass"], [1, "review-panel"], [1, "review-topic"], [1, "review-text"], [1, "review-intent"], [1, "action-row"], [1, "btn-accept", 3, "click"], [1, "btn-reject", 3, "click"], [1, "btn-edit", 3, "click"], [1, "editor-label"], ["rows", "4", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click"], [1, "history-list"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "history-top"], [1, "history-meta"], ["class", "history-error", 4, "ngIf"], [1, "history-error"], [1, "error"]],
        template: function AnalysePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "section", 3)(4, "div")(5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Analyse Service Workspace");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Negotiation Intelligence Studio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Upload one contract, extract redlines, compare against precedents, and review each change with decision actions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Agreement Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7)(18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Redlines");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7)(23, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "section", 8)(28, "div", 9)(29, "article", 10)(30, "div", 11)(31, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Document Input");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalysePage_Template_button_click_33_listener() {
              return ctx.fetchHistory();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Refresh History");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Upload a DOCX with clean text or tracked redlines.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Tenant ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AnalysePage_Template_input_ngModelChange_39_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.tenantId, $event) || (ctx.tenantId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AnalysePage_Template_input_change_40_listener($event) {
              return ctx.onDocxFileChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AnalysePage_p_41_Template, 2, 1, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalysePage_Template_button_click_42_listener() {
              return ctx.runAnalysis();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AnalysePage_article_44_Template, 10, 4, "article", 18)(45, AnalysePage_article_45_Template, 35, 9, "article", 19)(46, AnalysePage_article_46_Template, 5, 2, "article", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "aside", 21)(48, "article", 22)(49, "div", 23)(50, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Redline Navigator");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AnalysePage_p_54_Template, 2, 0, "p", 24)(55, AnalysePage_div_55_Template, 2, 1, "div", 25)(56, AnalysePage_div_56_Template, 27, 6, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "section", 27)(58, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Analysis History");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, AnalysePage_p_60_Template, 2, 0, "p", 24)(61, AnalysePage_div_61_Template, 2, 1, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, AnalysePage_div_62_Template, 2, 1, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getContractType());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getSummaryCount("redlines_analyzed"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentStatus || "idle");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.tenantId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docxFile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isSubmitting ? "Submitting..." : "Start Analysis", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.jobId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.analysisResult);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.analysisResult);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.getRedlineInsights().length, " changes");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.getRedlineInsights().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getRedlineInsights().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getSelectedRedline());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.analysisHistory.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.analysisHistory.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.analyse-content[_ngcontent-%COMP%] {\n  --card-bg: #ffffff;\n  --card-border: #d6e0df;\n  --ink: #1d2f2d;\n  --muted: #5f7470;\n  --brand: #0f7662;\n  --brand-soft: #d5efe9;\n  --danger: #b4233a;\n  --danger-soft: #ffe8ed;\n  --ok: #0a7a46;\n  --ok-soft: #e4f7ec;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  max-height: calc(100vh - var(--header-height) - 56px);\n  border-radius: 14px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: linear-gradient(145deg, #e8f3ef 0%, #edf5f4 45%, #f2f3eb 100%);\n}\n\n.texture-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  opacity: 0.55;\n  background-image: radial-gradient(circle at 1px 1px, rgba(17, 71, 61, 0.06) 1px, transparent 0);\n  background-size: 22px 22px;\n}\n\n.analyse-shell[_ngcontent-%COMP%] {\n  width: min(1180px, 100%);\n  margin: 0 auto;\n  padding: calc(var(--header-height) + 14px) 10px 24px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n\n.masthead[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 14px;\n  padding: 24px;\n  border-radius: 20px;\n  margin-bottom: 16px;\n  background: linear-gradient(140deg, #083d37 0%, #0f5f54 55%, #147b67 100%);\n  box-shadow: 0 24px 38px rgba(10, 70, 60, 0.26);\n}\n.masthead[_ngcontent-%COMP%]   .kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  font-size: 11px;\n  font-weight: 800;\n  color: rgba(231, 255, 249, 0.78);\n}\n.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #f4fffc;\n  font-size: clamp(24px, 3vw, 38px);\n  line-height: 1.08;\n}\n.masthead[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  max-width: 65ch;\n  color: rgba(233, 255, 249, 0.92);\n  font-size: 14px;\n}\n\n.headline-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  align-content: center;\n}\n\n.stat-pill[_ngcontent-%COMP%] {\n  border: 1px solid rgba(197, 241, 230, 0.44);\n  border-radius: 14px;\n  padding: 12px 10px;\n  background: rgba(241, 255, 252, 0.1);\n}\n.stat-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: rgba(229, 252, 245, 0.82);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 5px;\n}\n.stat-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  word-break: break-word;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 18px;\n  padding: 18px;\n  box-shadow: 0 14px 30px rgba(26, 52, 47, 0.09);\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ink);\n  font-size: 18px;\n}\n\n.config[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.config-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.fields.four[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.fields.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-top: 12px;\n}\n\n.workspace-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.45fr 1fr;\n  gap: 16px;\n  align-items: start;\n}\n\n.left-zone[_ngcontent-%COMP%], .right-zone[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.right-zone[_ngcontent-%COMP%] {\n  position: sticky;\n  top: calc(var(--header-height) + 12px);\n}\n\n.redline-card[_ngcontent-%COMP%] {\n  max-height: calc(100vh - var(--header-height) - 105px);\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n}\n\n.redline-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.redline-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.redline-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  gap: 8px;\n  max-height: 280px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n\n.redline-item[_ngcontent-%COMP%] {\n  border: 1px solid #d5e5e2;\n  background: #fbfffe;\n  border-radius: 12px;\n  padding: 10px;\n  cursor: pointer;\n  text-align: left;\n  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.redline-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: #6bb2a3;\n  box-shadow: 0 8px 16px rgba(16, 108, 90, 0.11);\n}\n.redline-item.active[_ngcontent-%COMP%] {\n  border-color: #1a8b75;\n  background: #f1fcf8;\n}\n.redline-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0 5px;\n  color: #1d3c37;\n  font-size: 13px;\n  line-height: 1.34;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.redline-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #607873;\n  font-size: 12px;\n}\n\n.redline-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  background: #dff5ef;\n  color: #156d5d;\n  padding: 3px 8px;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.decision[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border: 1px solid transparent;\n}\n.decision.pending[_ngcontent-%COMP%] {\n  background: #eef3f2;\n  border-color: #d2dedc;\n  color: #5d7370;\n}\n.decision.accepted[_ngcontent-%COMP%] {\n  background: var(--ok-soft);\n  border-color: #b3e5c8;\n  color: var(--ok);\n}\n.decision.rejected[_ngcontent-%COMP%] {\n  background: var(--danger-soft);\n  border-color: #f7c6d2;\n  color: var(--danger);\n}\n.decision.edited[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #c7d1ff;\n  color: #334cb0;\n}\n\n.review-panel[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-top: 1px dashed #cfdedd;\n  padding-top: 12px;\n  overflow-y: auto;\n}\n.review-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: #163934;\n}\n\n.review-topic[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  color: #48716a;\n  font-size: 13px;\n}\n\n.review-text[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #173630;\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n.review-intent[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #375c56;\n  font-size: 12px;\n}\n\n.action-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n\n.editor-label[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n  border: 1px solid #bfd1ce;\n  border-radius: 12px;\n  padding: 10px;\n  font-size: 13px;\n  color: #1f3c37;\n  background: #fbfffd;\n  box-sizing: border-box;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1f9079;\n  box-shadow: 0 0 0 3px rgba(31, 144, 121, 0.16);\n}\n\n.metric-grid[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.metric-box[_ngcontent-%COMP%] {\n  border: 1px solid #d7e6e3;\n  background: linear-gradient(140deg, #fcfffe 0%, #f6fbfa 100%);\n  border-radius: 12px;\n  padding: 10px;\n}\n.metric-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--muted);\n}\n.metric-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 20px;\n  color: #173934;\n}\n\n.citation-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  gap: 8px;\n}\n\n.citation-item[_ngcontent-%COMP%] {\n  border: 1px solid #d8e5e2;\n  border-radius: 12px;\n  background: #fbfffd;\n  padding: 10px;\n}\n.citation-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #35544f;\n  font-size: 13px;\n  line-height: 1.34;\n}\n\n.citation-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  font-size: 12px;\n  color: #1f4943;\n}\n\n.config[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .config[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .upload-card[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #c5d7d4;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  border: 1px solid #bfd3d0;\n  background: #ffffff;\n  color: #173c36;\n  padding: 10px 12px;\n  font-size: 14px;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1f9079;\n  box-shadow: 0 0 0 3px rgba(31, 144, 121, 0.16);\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  border-style: dashed;\n  background: #f8fffc;\n  padding: 11px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: #244640;\n  font-size: 13px;\n  font-weight: 600;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  cursor: pointer;\n  font-weight: 700;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background: linear-gradient(140deg, #0f7e68, #0b5f50);\n  color: #ffffff;\n  padding: 11px 14px;\n  box-shadow: 0 11px 22px rgba(15, 126, 104, 0.24);\n}\n\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #e9f4f2;\n  color: #114d43;\n  border: 1px solid #c5dfdb;\n  padding: 9px 12px;\n}\n\n.btn-accept[_ngcontent-%COMP%] {\n  background: var(--ok-soft);\n  color: var(--ok);\n  border: 1px solid #a9dcbe;\n  padding: 8px 10px;\n}\n\n.btn-reject[_ngcontent-%COMP%] {\n  background: var(--danger-soft);\n  color: var(--danger);\n  border: 1px solid #f2bdcb;\n  padding: 8px 10px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: #eff5ff;\n  color: #3051af;\n  border: 1px solid #c4d4ff;\n  padding: 8px 10px;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--muted);\n  margin: 6px 0 0;\n}\n\n.file-meta[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #335f58;\n  font-size: 13px;\n}\n\n.job-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.job-id[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #4b6662;\n  font-size: 13px;\n}\n\n.progress-list[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  padding-left: 18px;\n}\n.progress-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #31534d;\n  margin-bottom: 4px;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  border-radius: 999px;\n  padding: 5px 9px;\n  border: 1px solid transparent;\n}\n.status-chip.ok[_ngcontent-%COMP%] {\n  background: var(--ok-soft);\n  color: var(--ok);\n  border-color: #b3e5c8;\n}\n.status-chip.fail[_ngcontent-%COMP%] {\n  background: var(--danger-soft);\n  color: var(--danger);\n  border-color: #f5bfcb;\n}\n.status-chip.run[_ngcontent-%COMP%] {\n  background: #fff5df;\n  color: #935f17;\n  border-color: #f2d09b;\n}\n.status-chip.wait[_ngcontent-%COMP%] {\n  background: #edf2f2;\n  color: #5f7270;\n  border-color: #d5e0df;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.history-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  border: 1px solid #d4e3e0;\n  border-radius: 12px;\n  padding: 12px;\n  background: linear-gradient(140deg, #fcfffe 0%, #f4fbf8 100%);\n}\n\n.history-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #4f6964;\n  font-size: 12px;\n}\n\n.history-error[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: var(--danger);\n  font-size: 12px;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  background: #fff3f6;\n  border: 1px solid #f6c8d4;\n  color: #b5233b;\n  border-radius: 12px;\n  padding: 10px 12px;\n}\n\n@media (max-width: 1160px) {\n  .workspace-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .right-zone[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .redline-card[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n  .history-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .analyse-shell[_ngcontent-%COMP%] {\n    padding: calc(var(--header-height) + 10px) 6px 16px;\n  }\n  .masthead[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 18px;\n  }\n  .headline-stats[_ngcontent-%COMP%], .fields.four[_ngcontent-%COMP%], .fields.three[_ngcontent-%COMP%], .metric-grid[_ngcontent-%COMP%], .history-list[_ngcontent-%COMP%], .action-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .analyse-content[_ngcontent-%COMP%] {\n    max-height: calc(100vh - var(--header-height) - 24px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5hbHlzZS9hbmFseXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0ZBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSw4Q0FBQTtBQUFGO0FBRUU7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7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QUErQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQTVCRjs7QUErQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTVCRjs7QUErQkE7RUFDRTtJQUNFLDBCQUFBO0VBNUJGO0VBK0JBO0lBQ0UsZ0JBQUE7RUE3QkY7RUFnQ0E7SUFDRSxnQkFBQTtFQTlCRjtFQWlDQTtJQUNFLGdEQUFBO0VBL0JGO0FBQ0Y7QUFrQ0E7RUFDRTtJQUNFLG1EQUFBO0VBaENGO0VBbUNBO0lBQ0UsMEJBQUE7SUFDQSxhQUFBO0VBakNGO0VBb0NBOzs7Ozs7SUFNRSwwQkFBQTtFQWxDRjtFQXFDQTtJQUNFLHFEQUFBO0VBbkNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYW5hbHlzZS1jb250ZW50IHtcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xuICAtLWNhcmQtYm9yZGVyOiAjZDZlMGRmO1xuICAtLWluazogIzFkMmYyZDtcbiAgLS1tdXRlZDogIzVmNzQ3MDtcbiAgLS1icmFuZDogIzBmNzY2MjtcbiAgLS1icmFuZC1zb2Z0OiAjZDVlZmU5O1xuICAtLWRhbmdlcjogI2I0MjMzYTtcbiAgLS1kYW5nZXItc29mdDogI2ZmZThlZDtcbiAgLS1vazogIzBhN2E0NjtcbiAgLS1vay1zb2Z0OiAjZTRmN2VjO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDU2cHgpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2U4ZjNlZiAwJSwgI2VkZjVmNCA0NSUsICNmMmYzZWIgMTAwJSk7XG59XG5cbi50ZXh0dXJlLWxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMXB4IDFweCwgcmdiYSgxNywgNzEsIDYxLCAwLjA2KSAxcHgsIHRyYW5zcGFyZW50IDApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcbn1cblxuLmFuYWx5c2Utc2hlbGwge1xuICB3aWR0aDogbWluKDExODBweCwgMTAwJSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgMTRweCkgMTBweCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5tYXN0aGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyO1xuICBnYXA6IDE0cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICMwODNkMzcgMCUsICMwZjVmNTQgNTUlLCAjMTQ3YjY3IDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDI0cHggMzhweCByZ2JhKDEwLCA3MCwgNjAsIDAuMjYpO1xuXG4gIC5raWNrZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHJnYmEoMjMxLCAyNTUsIDI0OSwgMC43OCk7XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIGNvbG9yOiAjZjRmZmZjO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgM3Z3LCAzOHB4KTtcbiAgICBsaW5lLWhlaWdodDogMS4wODtcbiAgfVxuXG4gIC5sZWFkIHtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIG1heC13aWR0aDogNjVjaDtcbiAgICBjb2xvcjogcmdiYSgyMzMsIDI1NSwgMjQ5LCAwLjkyKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmhlYWRsaW5lLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN0YXQtcGlsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk3LCAyNDEsIDIzMCwgMC40NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI1NSwgMjUyLCAwLjEpO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogcmdiYSgyMjksIDI1MiwgMjQ1LCAwLjgyKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IHJnYmEoMjYsIDUyLCA0NywgMC4wOSk7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuLmNvbmZpZyB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jb25maWctdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZmllbGRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMnB4O1xuXG4gICYuZm91ciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICB9XG5cbiAgJi50aHJlZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbn1cblxuLndvcmtzcGFjZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjQ1ZnIgMWZyO1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmxlZnQtem9uZSxcbi5yaWdodC16b25lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ucmlnaHQtem9uZSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIDEycHgpO1xufVxuXG4ucmVkbGluZS1jYXJkIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gMTA1cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XG59XG5cbi5yZWRsaW5lLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG4ucmVkbGluZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA4cHg7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5yZWRsaW5lLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVlNWUyO1xuICBiYWNrZ3JvdW5kOiAjZmJmZmZlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3JkZXItY29sb3I6ICM2YmIyYTM7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDE2LCAxMDgsIDkwLCAwLjExKTtcbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6ICMxYThiNzU7XG4gICAgYmFja2dyb3VuZDogI2YxZmNmODtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogN3B4IDAgNXB4O1xuICAgIGNvbG9yOiAjMWQzYzM3O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS4zNDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGNvbG9yOiAjNjA3ODczO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4ucmVkbGluZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4udGFnIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNkZmY1ZWY7XG4gIGNvbG9yOiAjMTU2ZDVkO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kZWNpc2lvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICYucGVuZGluZyB7XG4gICAgYmFja2dyb3VuZDogI2VlZjNmMjtcbiAgICBib3JkZXItY29sb3I6ICNkMmRlZGM7XG4gICAgY29sb3I6ICM1ZDczNzA7XG4gIH1cblxuICAmLmFjY2VwdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vay1zb2Z0KTtcbiAgICBib3JkZXItY29sb3I6ICNiM2U1Yzg7XG4gICAgY29sb3I6IHZhcigtLW9rKTtcbiAgfVxuXG4gICYucmVqZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1zb2Z0KTtcbiAgICBib3JkZXItY29sb3I6ICNmN2M2ZDI7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIH1cblxuICAmLmVkaXRlZCB7XG4gICAgYmFja2dyb3VuZDogI2VlZjJmZjtcbiAgICBib3JkZXItY29sb3I6ICNjN2QxZmY7XG4gICAgY29sb3I6ICMzMzRjYjA7XG4gIH1cbn1cblxuLnJldmlldy1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2NmZGVkZDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMxNjM5MzQ7XG4gIH1cbn1cblxuLnJldmlldy10b3BpYyB7XG4gIG1hcmdpbjogN3B4IDA7XG4gIGNvbG9yOiAjNDg3MTZhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yZXZpZXctdGV4dCB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGNvbG9yOiAjMTczNjMwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5yZXZpZXctaW50ZW50IHtcbiAgbWFyZ2luOiA2cHggMDtcbiAgY29sb3I6ICMzNzVjNTY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFjdGlvbi1yb3cge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogOHB4O1xufVxuXG4uZWRpdG9yLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmZDFjZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzFmM2MzNztcbiAgYmFja2dyb3VuZDogI2ZiZmZmZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogIzFmOTA3OTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwgMTQ0LCAxMjEsIDAuMTYpO1xuICB9XG59XG5cbi5tZXRyaWMtZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubWV0cmljLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkN2U2ZTM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNmY2ZmZmUgMCUsICNmNmZiZmEgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxNzM5MzQ7XG4gIH1cbn1cblxuLmNpdGF0aW9uLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbn1cblxuLmNpdGF0aW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhlNWUyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmJmZmZkO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIHAge1xuICAgIG1hcmdpbjogNnB4IDAgMDtcbiAgICBjb2xvcjogIzM1NTQ0ZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzQ7XG4gIH1cbn1cblxuLmNpdGF0aW9uLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzFmNDk0Mztcbn1cblxuLmNvbmZpZyBpbnB1dCxcbi5jb25maWcgc2VsZWN0LFxuLnVwbG9hZC1jYXJkIGlucHV0W3R5cGU9J2ZpbGUnXSxcbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWQ3ZDQ7XG59XG5cbmlucHV0LFxuc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmZDNkMDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMxNzNjMzY7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWY5MDc5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLCAxNDQsIDEyMSwgMC4xNik7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJhY2tncm91bmQ6ICNmOGZmZmM7XG4gIHBhZGRpbmc6IDExcHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiAjMjQ0NjQwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjMGY3ZTY4LCAjMGI1ZjUwKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDExcHggMTRweDtcbiAgYm94LXNoYWRvdzogMCAxMXB4IDIycHggcmdiYSgxNSwgMTI2LCAxMDQsIDAuMjQpO1xufVxuXG4uYnRuLWdob3N0IHtcbiAgYmFja2dyb3VuZDogI2U5ZjRmMjtcbiAgY29sb3I6ICMxMTRkNDM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWRmZGI7XG4gIHBhZGRpbmc6IDlweCAxMnB4O1xufVxuXG4uYnRuLWFjY2VwdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW9rLXNvZnQpO1xuICBjb2xvcjogdmFyKC0tb2spO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTlkY2JlO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbn1cblxuLmJ0bi1yZWplY3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItc29mdCk7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJiZGNiO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgYmFja2dyb3VuZDogI2VmZjVmZjtcbiAgY29sb3I6ICMzMDUxYWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGQ0ZmY7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xufVxuXG4ubXV0ZWQge1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW46IDZweCAwIDA7XG59XG5cbi5maWxlLW1ldGEge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiAjMzM1ZjU4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5qb2ItaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmpvYi1pZCB7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgY29sb3I6ICM0YjY2NjI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByb2dyZXNzLWxpc3Qge1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG5cbiAgbGkge1xuICAgIGNvbG9yOiAjMzE1MzRkO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxufVxuXG4uc3RhdHVzLWNoaXAge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiA1cHggOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmLm9rIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vay1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0tb2spO1xuICAgIGJvcmRlci1jb2xvcjogI2IzZTVjODtcbiAgfVxuXG4gICYuZmFpbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLXNvZnQpO1xuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YmZjYjtcbiAgfVxuXG4gICYucnVuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmNWRmO1xuICAgIGNvbG9yOiAjOTM1ZjE3O1xuICAgIGJvcmRlci1jb2xvcjogI2YyZDA5YjtcbiAgfVxuXG4gICYud2FpdCB7XG4gICAgYmFja2dyb3VuZDogI2VkZjJmMjtcbiAgICBjb2xvcjogIzVmNzI3MDtcbiAgICBib3JkZXItY29sb3I6ICNkNWUwZGY7XG4gIH1cbn1cblxuLmhpc3RvcnktY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5oaXN0b3J5LWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTBweDtcbn1cblxuLmhpc3RvcnktaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGUzZTA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNmY2ZmZmUgMCUsICNmNGZiZjggMTAwJSk7XG59XG5cbi5oaXN0b3J5LXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5oaXN0b3J5LW1ldGEge1xuICBtYXJnaW46IDVweCAwO1xuICBjb2xvcjogIzRmNjk2NDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGlzdG9yeS1lcnJvciB7XG4gIG1hcmdpbjogN3B4IDAgMDtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVycm9yIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjNmNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y2YzhkNDtcbiAgY29sb3I6ICNiNTIzM2I7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xuICAud29ya3NwYWNlLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnJpZ2h0LXpvbmUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAucmVkbGluZS1jYXJkIHtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICB9XG5cbiAgLmhpc3RvcnktbGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuYW5hbHlzZS1zaGVsbCB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIDEwcHgpIDZweCAxNnB4O1xuICB9XG5cbiAgLm1hc3RoZWFkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICB9XG5cbiAgLmhlYWRsaW5lLXN0YXRzLFxuICAuZmllbGRzLmZvdXIsXG4gIC5maWVsZHMudGhyZWUsXG4gIC5tZXRyaWMtZ3JpZCxcbiAgLmhpc3RvcnktbGlzdCxcbiAgLmFjdGlvbi1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmFuYWx5c2UtY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gMjRweCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return AnalysePage;
})();

/***/ }),

/***/ 3731:
/*!*********************************************!*\
  !*** ./src/app/services/analyse.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyseService: () => (/* binding */ AnalyseService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



let AnalyseService = /*#__PURE__*/(() => {
  class AnalyseService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.analyseServiceApiUrl || 'http://localhost:8002';
    }
    uploadDocxForAnalysis(payload) {
      const formData = new FormData();
      formData.append('tenant_id', payload.tenantId);
      formData.append('docx_file', payload.file);
      formData.append('top_k', String(payload.topK));
      formData.append('version_mode', payload.versionMode);
      if (payload.contractType) formData.append('contract_type', payload.contractType);
      if (payload.injectionServiceUrl) formData.append('injection_service_url', payload.injectionServiceUrl);
      if (payload.lmStudioUrl) formData.append('lm_studio_url', payload.lmStudioUrl);
      if (payload.modelName) formData.append('model_name', payload.modelName);
      return this.http.post(`${this.baseUrl}/analyse/upload-docx`, formData);
    }
    getJobStatus(jobId) {
      return this.http.get(`${this.baseUrl}/analyse/jobs/${jobId}`);
    }
    getJobResult(jobId) {
      return this.http.get(`${this.baseUrl}/analyse/jobs/${jobId}/result`);
    }
    getTenantHistory(tenantId, limit = 50) {
      return this.http.get(`${this.baseUrl}/tenant/${tenantId}/analysis-jobs?limit=${limit}`);
    }
    static {
      this.ɵfac = function AnalyseService_Factory(t) {
        return new (t || AnalyseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AnalyseService,
        factory: AnalyseService.ɵfac
      });
    }
  }
  return AnalyseService;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_analyse_analyse_module_ts.js.map