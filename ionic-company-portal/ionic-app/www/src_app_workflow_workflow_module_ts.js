"use strict";
(self["webpackChunkcompany_portal"] = self["webpackChunkcompany_portal"] || []).push([["src_app_workflow_workflow_module_ts"],{

/***/ 3759:
/*!**********************************************!*\
  !*** ./src/app/services/workflow.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowService: () => (/* binding */ WorkflowService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



let WorkflowService = /*#__PURE__*/(() => {
  class WorkflowService {
    constructor(http) {
      this.http = http;
      this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.analyseServiceApiUrl || 'http://localhost:8002';
    }
    createDocument(payload) {
      const formData = new FormData();
      formData.append('tenant_id', payload.tenantId);
      formData.append('title', payload.title);
      formData.append('owner_id', payload.ownerId);
      formData.append('manager_id', payload.managerId);
      if (payload.dueAt) formData.append('due_at', payload.dueAt);
      formData.append('file', payload.file);
      return this.http.post(`${this.baseUrl}/workflow/documents/upload`, formData);
    }
    listDocuments(tenantId) {
      return this.http.get(`${this.baseUrl}/workflow/documents?tenant_id=${encodeURIComponent(tenantId)}`);
    }
    assignDocument(payload) {
      return this.http.post(`${this.baseUrl}/workflow/documents/${payload.documentId}/assign`, {
        assigned_by: payload.assignedBy,
        assignee_ids: payload.assigneeIds
      });
    }
    assigneeTasks(tenantId, assigneeId) {
      return this.http.get(`${this.baseUrl}/workflow/tasks/${encodeURIComponent(assigneeId)}?tenant_id=${encodeURIComponent(tenantId)}`);
    }
    submitAssignment(payload) {
      return this.http.post(`${this.baseUrl}/workflow/tasks/${payload.assignmentId}/submit`, {
        assignee_id: payload.assigneeId,
        summary_comment: payload.summaryComment,
        edited_content: payload.editedContent,
        decision_payload: payload.decisionPayload || {}
      });
    }
    managerQueue(tenantId, managerId) {
      return this.http.get(`${this.baseUrl}/workflow/manager/${encodeURIComponent(managerId)}/queue?tenant_id=${encodeURIComponent(tenantId)}`);
    }
    reviewSubmission(payload) {
      return this.http.post(`${this.baseUrl}/workflow/submissions/${payload.submissionId}/review`, {
        manager_id: payload.managerId,
        action: payload.action,
        notes: payload.notes
      });
    }
    documentSubmissions(documentId) {
      return this.http.get(`${this.baseUrl}/workflow/documents/${documentId}/submissions`);
    }
    documentAudit(documentId) {
      return this.http.get(`${this.baseUrl}/workflow/documents/${documentId}/audit`);
    }
    static {
      this.ɵfac = function WorkflowService_Factory(t) {
        return new (t || WorkflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: WorkflowService,
        factory: WorkflowService.ɵfac
      });
    }
  }
  return WorkflowService;
})();

/***/ }),

/***/ 5879:
/*!*********************************************!*\
  !*** ./src/app/workflow/workflow.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowPageModule: () => (/* binding */ WorkflowPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _workflow_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workflow.page */ 864);
/* harmony import */ var _services_workflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/workflow.service */ 3759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);









const routes = [{
  path: '',
  component: _workflow_page__WEBPACK_IMPORTED_MODULE_0__.WorkflowPage
}];
let WorkflowPageModule = /*#__PURE__*/(() => {
  class WorkflowPageModule {
    static {
      this.ɵfac = function WorkflowPageModule_Factory(t) {
        return new (t || WorkflowPageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: WorkflowPageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_services_workflow_service__WEBPACK_IMPORTED_MODULE_1__.WorkflowService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
      });
    }
  }
  return WorkflowPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WorkflowPageModule, {
    declarations: [_workflow_page__WEBPACK_IMPORTED_MODULE_0__.WorkflowPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 864:
/*!*******************************************!*\
  !*** ./src/app/workflow/workflow.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowPage: () => (/* binding */ WorkflowPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_workflow_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/workflow.service */ 3759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




function WorkflowPage_div_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r2["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ID: ", d_r2["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Status: ", d_r2["status"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Manager: ", d_r2["manager_id"], "");
  }
}
function WorkflowPage_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkflowPage_div_97_div_1_Template, 9, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.documents);
  }
}
function WorkflowPage_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No documents loaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WorkflowPage_div_103_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](q_r4["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Submission: ", q_r4["submission_id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Assignee: ", q_r4["assignee_id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Status: ", q_r4["review_status"], "");
  }
}
function WorkflowPage_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkflowPage_div_103_div_1_Template, 9, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.managerQueue);
  }
}
function WorkflowPage_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No pending submissions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WorkflowPage_div_110_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r5["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Assignment: ", t_r5["assignment_id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Status: ", t_r5["assignment_status"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Due: ", t_r5["due_at"] || "-", "");
  }
}
function WorkflowPage_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkflowPage_div_110_div_1_Template, 9, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.assigneeTasks);
  }
}
function WorkflowPage_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No tasks loaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WorkflowPage_div_123_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", s_r6["submission_id"], " \u2022 ", s_r6["assignee_id"], " \u2022 ", s_r6["review_status"], "");
  }
}
function WorkflowPage_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkflowPage_div_123_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.documentSubmissionsList);
  }
}
function WorkflowPage_ng_template_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No submissions loaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WorkflowPage_div_128_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", a_r7["created_at"], " \u2022 ", a_r7["event_type"], " \u2022 ", a_r7["actor_id"], "");
  }
}
function WorkflowPage_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkflowPage_div_128_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.documentAuditList);
  }
}
function WorkflowPage_ng_template_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No audit events loaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WorkflowPage_section_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 14)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Last API Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r2.lastResponse));
  }
}
function WorkflowPage_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
let WorkflowPage = /*#__PURE__*/(() => {
  class WorkflowPage {
    constructor(workflowService) {
      this.workflowService = workflowService;
      this.tenantId = 'default';
      this.createTitle = '';
      this.ownerId = '';
      this.managerId = '';
      this.dueAt = '';
      this.createFile = null;
      this.assignDocumentId = '';
      this.assignedBy = '';
      this.assigneeIdsRaw = '';
      this.employeeAssigneeId = '';
      this.employeeAssignmentId = '';
      this.employeeComment = '';
      this.employeeEditedContent = '';
      this.reviewSubmissionId = '';
      this.reviewManagerId = '';
      this.reviewAction = 'approve';
      this.reviewNotes = '';
      this.documents = [];
      this.assigneeTasks = [];
      this.managerQueue = [];
      this.documentSubmissionsList = [];
      this.documentAuditList = [];
      this.inspectDocumentId = '';
      this.lastResponse = null;
      this.errorMessage = '';
      this.isBusy = false;
    }
    onCreateFileChange(event) {
      const input = event.target;
      this.createFile = input.files && input.files.length ? input.files[0] : null;
    }
    createDocument() {
      if (!this.tenantId.trim() || !this.createTitle.trim() || !this.ownerId.trim() || !this.managerId.trim() || !this.createFile) {
        this.errorMessage = 'Tenant, title, owner, manager, and document are required.';
        return;
      }
      this.run(() => this.workflowService.createDocument({
        tenantId: this.tenantId.trim(),
        title: this.createTitle.trim(),
        ownerId: this.ownerId.trim(),
        managerId: this.managerId.trim(),
        dueAt: this.dueAt.trim() || undefined,
        file: this.createFile
      }), res => {
        this.lastResponse = res;
        const documentId = String(res['document_id'] || '');
        if (documentId) this.assignDocumentId = documentId;
        this.fetchDocuments();
      });
    }
    fetchDocuments() {
      if (!this.tenantId.trim()) {
        this.errorMessage = 'Tenant ID is required.';
        return;
      }
      this.run(() => this.workflowService.listDocuments(this.tenantId.trim()), res => {
        this.lastResponse = res;
        this.documents = Array.isArray(res['documents']) ? res['documents'] : [];
      });
    }
    assignDocument() {
      const assignees = this.assigneeIdsRaw.split(',').map(x => x.trim()).filter(x => !!x);
      if (!this.assignDocumentId.trim() || !this.assignedBy.trim() || assignees.length === 0) {
        this.errorMessage = 'Document ID, assigned by, and assignee list are required.';
        return;
      }
      this.run(() => this.workflowService.assignDocument({
        documentId: this.assignDocumentId.trim(),
        assignedBy: this.assignedBy.trim(),
        assigneeIds: assignees
      }), res => {
        this.lastResponse = res;
        this.fetchDocuments();
      });
    }
    fetchEmployeeTasks() {
      if (!this.tenantId.trim() || !this.employeeAssigneeId.trim()) {
        this.errorMessage = 'Tenant ID and assignee ID are required.';
        return;
      }
      this.run(() => this.workflowService.assigneeTasks(this.tenantId.trim(), this.employeeAssigneeId.trim()), res => {
        this.lastResponse = res;
        this.assigneeTasks = Array.isArray(res['tasks']) ? res['tasks'] : [];
      });
    }
    submitEmployeeTask() {
      if (!this.employeeAssignmentId.trim() || !this.employeeAssigneeId.trim()) {
        this.errorMessage = 'Assignment ID and assignee ID are required.';
        return;
      }
      this.run(() => this.workflowService.submitAssignment({
        assignmentId: this.employeeAssignmentId.trim(),
        assigneeId: this.employeeAssigneeId.trim(),
        summaryComment: this.employeeComment.trim() || undefined,
        editedContent: this.employeeEditedContent.trim() || undefined,
        decisionPayload: {}
      }), res => {
        this.lastResponse = res;
        this.fetchEmployeeTasks();
        if (this.managerId.trim()) {
          this.fetchManagerQueue();
        }
      });
    }
    fetchManagerQueue() {
      if (!this.tenantId.trim() || !this.managerId.trim()) {
        this.errorMessage = 'Tenant ID and manager ID are required.';
        return;
      }
      this.run(() => this.workflowService.managerQueue(this.tenantId.trim(), this.managerId.trim()), res => {
        this.lastResponse = res;
        this.managerQueue = Array.isArray(res['items']) ? res['items'] : [];
      });
    }
    reviewSubmission() {
      if (!this.reviewSubmissionId.trim() || !this.reviewManagerId.trim()) {
        this.errorMessage = 'Submission ID and manager ID are required.';
        return;
      }
      this.run(() => this.workflowService.reviewSubmission({
        submissionId: this.reviewSubmissionId.trim(),
        managerId: this.reviewManagerId.trim(),
        action: this.reviewAction,
        notes: this.reviewNotes.trim() || undefined
      }), res => {
        this.lastResponse = res;
        this.fetchManagerQueue();
        this.fetchDocuments();
      });
    }
    inspectDocument() {
      if (!this.inspectDocumentId.trim()) {
        this.errorMessage = 'Document ID is required to inspect.';
        return;
      }
      this.run(() => this.workflowService.documentSubmissions(this.inspectDocumentId.trim()), res => {
        this.lastResponse = res;
        this.documentSubmissionsList = Array.isArray(res['submissions']) ? res['submissions'] : [];
        this.workflowService.documentAudit(this.inspectDocumentId.trim()).subscribe({
          next: audit => {
            this.documentAuditList = Array.isArray(audit['events']) ? audit['events'] : [];
          }
        });
      });
    }
    run(request, onSuccess) {
      this.errorMessage = '';
      this.isBusy = true;
      request().subscribe({
        next: res => {
          this.isBusy = false;
          onSuccess(res);
        },
        error: err => {
          this.isBusy = false;
          this.errorMessage = err?.error?.detail || 'Operation failed.';
        }
      });
    }
    static {
      this.ɵfac = function WorkflowPage_Factory(t) {
        return new (t || WorkflowPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_workflow_service__WEBPACK_IMPORTED_MODULE_0__.WorkflowService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WorkflowPage,
        selectors: [["app-workflow"]],
        decls: 133,
        vars: 37,
        consts: [["emptyDocs", ""], ["emptyQueue", ""], ["emptyTasks", ""], ["emptySubs", ""], ["emptyAudit", ""], [1, "workflow-content"], [1, "texture-layer"], [1, "workflow-shell"], [1, "hero"], [1, "kicker"], [1, "hero-meta"], [1, "tenant-hint"], [1, "btn-secondary", 3, "click", "disabled"], [1, "grid"], [1, "card"], ["type", "text", "placeholder", "MSA - Vendor Alpha", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "owner_1", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "manager_1", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".docx", 3, "change"], [1, "btn-primary", 3, "click", "disabled"], ["type", "text", "placeholder", "paste document id", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "emp_1, emp_2, emp_3", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "emp_1", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "assignment id", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "what changed and why", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "final text proposal", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "submission id", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "approve"], ["value", "reject"], ["value", "request_changes"], ["rows", "3", "placeholder", "review comments", 3, "ngModelChange", "ngModel"], [1, "grid", "two"], [1, "card", "list-card"], ["class", "list", 4, "ngIf", "ngIfElse"], ["type", "text", "placeholder", "document id", 3, "ngModelChange", "ngModel"], ["class", "list compact", 4, "ngIf", "ngIfElse"], ["class", "card", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "muted"], [1, "list", "compact"], [1, "error"]],
        template: function WorkflowPage_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7)(3, "section", 8)(4, "div")(5, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Owner / Manager / Employee Flow");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Document Governance Workflow");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Create assignments, collect user submissions, review decisions, and keep full audit history.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.fetchDocuments());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Load Documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 13)(17, "article", 14)(18, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "1. Owner Creates Document");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_22_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.createTitle, $event) || (ctx.createTitle = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Owner ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_25_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.ownerId, $event) || (ctx.ownerId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Manager ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_28_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.managerId, $event) || (ctx.managerId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Due Date (Optional) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_31_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dueAt, $event) || (ctx.dueAt = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function WorkflowPage_Template_input_change_32_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onCreateFileChange($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_33_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.createDocument());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Create Workflow Document");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "article", 14)(36, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "2. Manager Assigns Employees");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Document ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_40_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.assignDocumentId, $event) || (ctx.assignDocumentId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Assigned By ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_43_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.assignedBy, $event) || (ctx.assignedBy = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Assignee IDs (comma-separated) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_46_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.assigneeIdsRaw, $event) || (ctx.assigneeIdsRaw = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_47_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.assignDocument());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Assign");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "article", 14)(50, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "3. Employee Tasks");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Employee ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_54_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.employeeAssigneeId, $event) || (ctx.employeeAssigneeId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_55_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.fetchEmployeeTasks());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Load My Tasks");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Assignment ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_59_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.employeeAssignmentId, $event) || (ctx.employeeAssignmentId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Summary Comment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "textarea", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_textarea_ngModelChange_62_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.employeeComment, $event) || (ctx.employeeComment = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Edited Content ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "textarea", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_textarea_ngModelChange_65_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.employeeEditedContent, $event) || (ctx.employeeEditedContent = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_66_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.submitEmployeeTask());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Submit for Review");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "article", 14)(69, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "4. Manager Review");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Manager ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_73_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewManagerId, $event) || (ctx.reviewManagerId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_74_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.fetchManagerQueue());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Load Manager Queue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Submission ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_78_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewSubmissionId, $event) || (ctx.reviewSubmissionId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Action ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "select", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_select_ngModelChange_81_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewAction, $event) || (ctx.reviewAction = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "option", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "approve");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "option", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "reject");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "request_changes");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Notes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "textarea", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_textarea_ngModelChange_90_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewNotes, $event) || (ctx.reviewNotes = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_91_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.reviewSubmission());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Submit Review");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "section", 33)(94, "article", 34)(95, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, WorkflowPage_div_97_Template, 2, 1, "div", 35)(98, WorkflowPage_ng_template_98_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "article", 34)(101, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Manager Queue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, WorkflowPage_div_103_Template, 2, 1, "div", 35)(104, WorkflowPage_ng_template_104_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "section", 33)(107, "article", 34)(108, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Employee Tasks");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, WorkflowPage_div_110_Template, 2, 1, "div", 35)(111, WorkflowPage_ng_template_111_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "article", 34)(114, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Inspect Document");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Document ID ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WorkflowPage_Template_input_ngModelChange_118_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.inspectDocumentId, $event) || (ctx.inspectDocumentId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkflowPage_Template_button_click_119_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.inspectDocument());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Load Submissions + Audit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Submissions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, WorkflowPage_div_123_Template, 2, 1, "div", 37)(124, WorkflowPage_ng_template_124_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Audit Trail");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, WorkflowPage_div_128_Template, 2, 1, "div", 37)(129, WorkflowPage_ng_template_129_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, WorkflowPage_section_131_Template, 6, 3, "section", 38)(132, WorkflowPage_div_132_Template, 2, 1, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            const emptyDocs_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](99);
            const emptyQueue_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](105);
            const emptyTasks_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](112);
            const emptySubs_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](125);
            const emptyAudit_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](130);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Workspace Tenant: ", ctx.tenantId, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.createTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.ownerId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.managerId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.dueAt);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.assignDocumentId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.assignedBy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.assigneeIdsRaw);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.employeeAssigneeId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.employeeAssignmentId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.employeeComment);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.employeeEditedContent);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewManagerId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewSubmissionId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewAction);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewNotes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.documents.length)("ngIfElse", emptyDocs_r8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.managerQueue.length)("ngIfElse", emptyQueue_r9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.assigneeTasks.length)("ngIfElse", emptyTasks_r10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.inspectDocumentId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.documentSubmissionsList.length)("ngIfElse", emptySubs_r11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.documentAuditList.length)("ngIfElse", emptyAudit_r12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lastResponse);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.workflow-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  max-height: calc(100vh - var(--header-height) - 56px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-radius: 14px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  background: linear-gradient(145deg, #f1ede4 0%, #f5f2ea 35%, #f8f6f0 100%);\n}\n\n.texture-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  opacity: 0.5;\n  background-image: radial-gradient(circle at 1px 1px, rgba(102, 73, 38, 0.08) 1px, transparent 0);\n  background-size: 22px 22px;\n}\n\n.workflow-shell[_ngcontent-%COMP%] {\n  width: min(1180px, 100%);\n  margin: 0 auto;\n  padding: calc(var(--header-height) + 12px) 10px 24px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n\n.hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2e2a24 0%, #3e3328 55%, #5a4730 100%);\n  color: #fffaf1;\n  padding: 22px;\n  border-radius: 18px;\n  margin-bottom: 14px;\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 14px;\n}\n.hero[_ngcontent-%COMP%]   .kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  font-size: 11px;\n  color: rgba(255, 243, 223, 0.82);\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: clamp(24px, 3vw, 36px);\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: rgba(255, 246, 233, 0.94);\n}\n\n.hero-meta[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  align-content: center;\n}\n\n.tenant-hint[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 12px;\n  border: 1px solid rgba(255, 244, 224, 0.4);\n  border-radius: 10px;\n  background: rgba(255, 248, 236, 0.12);\n  color: rgba(255, 245, 232, 0.95);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.grid.two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2d9c9;\n  border-radius: 14px;\n  padding: 14px;\n  box-shadow: 0 12px 26px rgba(54, 43, 29, 0.08);\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #3d3022;\n  font-size: 17px;\n}\n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 10px 0 8px;\n  color: #58452d;\n  font-size: 14px;\n}\n\n.list-card[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: #614b31;\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 1px solid #d7c7ad;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 13px;\n  color: #3f2e1d;\n  background: #fffcf7;\n  width: 100%;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #b27b3e;\n  box-shadow: 0 0 0 3px rgba(178, 123, 62, 0.18);\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  border-style: dashed;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #b97b2e, #8a5720);\n  color: #fff;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #efe4d3;\n  color: #6d4b27;\n  border: 1px solid #dbc5a5;\n}\n\n.list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  max-height: 280px;\n  overflow-y: auto;\n  padding-right: 2px;\n}\n\n.item[_ngcontent-%COMP%] {\n  border: 1px solid #e8dbc8;\n  border-radius: 10px;\n  padding: 8px;\n  background: #fffdf9;\n}\n.item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3f301d;\n}\n.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  color: #69553c;\n  font-size: 12px;\n  word-break: break-word;\n}\n\n.compact[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n\npre[_ngcontent-%COMP%] {\n  margin: 0;\n  background: #211b14;\n  color: #f4e8d7;\n  border-radius: 10px;\n  padding: 10px;\n  max-height: 240px;\n  overflow: auto;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: #8a7354;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: #fff2f4;\n  border: 1px solid #f4c7cf;\n  color: #b3243a;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n@media (max-width: 980px) {\n  .hero[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%], .grid.two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .workflow-shell[_ngcontent-%COMP%] {\n    padding: calc(var(--header-height) + 10px) 6px 16px;\n  }\n  .workflow-content[_ngcontent-%COMP%] {\n    max-height: calc(100vh - var(--header-height) - 24px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya2Zsb3cvd29ya2Zsb3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnR0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxvREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwRUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxnREFBQTtBQUZKOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFBO0VBQ0UsaUJBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTs7O0VBR0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBTEY7QUFPRTs7O0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUFISjs7QUFPQTtFQUNFLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UscURBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1FO0VBQ0UsY0FBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtBQU5GOztBQVNBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsY0FBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBTkY7O0FBU0E7RUFDRTs7O0lBR0UsMEJBQUE7RUFORjtFQVNBO0lBQ0UsbURBQUE7RUFQRjtFQVVBO0lBQ0UscURBQUE7RUFSRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndvcmtmbG93LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSA1NnB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmMWVkZTQgMCUsICNmNWYyZWEgMzUlLCAjZjhmNmYwIDEwMCUpO1xufVxuXG4udGV4dHVyZS1sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMXB4IDFweCwgcmdiYSgxMDIsIDczLCAzOCwgMC4wOCkgMXB4LCB0cmFuc3BhcmVudCAwKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMnB4IDIycHg7XG59XG5cbi53b3JrZmxvdy1zaGVsbCB7XG4gIHdpZHRoOiBtaW4oMTE4MHB4LCAxMDAlKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyAxMnB4KSAxMHB4IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmUyYTI0IDAlLCAjM2UzMzI4IDU1JSwgIzVhNDczMCAxMDAlKTtcbiAgY29sb3I6ICNmZmZhZjE7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4zZnIgMWZyO1xuICBnYXA6IDE0cHg7XG5cbiAgLmtpY2tlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNDMsIDIyMywgMC44Mik7XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgM3Z3LCAzNnB4KTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI0NiwgMjMzLCAwLjk0KTtcbiAgfVxufVxuXG4uaGVyby1tZXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZW5hbnQtaGludCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjQ0LCAyMjQsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDgsIDIzNiwgMC4xMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjQ1LCAyMzIsIDAuOTUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgJi50d28ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmQ5Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyNnB4IHJnYmEoNTQsIDQzLCAyOSwgMC4wOCk7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgY29sb3I6ICMzZDMwMjI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMTBweCAwIDhweDtcbiAgICBjb2xvcjogIzU4NDUyZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmxpc3QtY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBjb2xvcjogIzYxNGIzMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDdjN2FkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjM2YyZTFkO1xuICBiYWNrZ3JvdW5kOiAjZmZmY2Y3O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogI2IyN2IzZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNzgsIDEyMywgNjIsIDAuMTgpO1xuICB9XG59XG5cbmlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYjk3YjJlLCAjOGE1NzIwKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI2VmZTRkMztcbiAgY29sb3I6ICM2ZDRiMjc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmM1YTU7XG59XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA4cHg7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG5cbi5pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZGJjODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZGY5O1xuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMzZjMwMWQ7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGNvbG9yOiAjNjk1NTNjO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG59XG5cbi5jb21wYWN0IC5pdGVtIHAge1xuICBtYXJnaW46IDJweCAwO1xufVxuXG5wcmUge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMyMTFiMTQ7XG4gIGNvbG9yOiAjZjRlOGQ3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAyNDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tdXRlZCB7XG4gIGNvbG9yOiAjOGE3MzU0O1xufVxuXG4uZXJyb3Ige1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYyZjQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNGM3Y2Y7XG4gIGNvbG9yOiAjYjMyNDNhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLmhlcm8sXG4gIC5ncmlkLFxuICAuZ3JpZC50d28ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLndvcmtmbG93LXNoZWxsIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgMTBweCkgNnB4IDE2cHg7XG4gIH1cblxuICAud29ya2Zsb3ctY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gMjRweCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return WorkflowPage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_workflow_workflow_module_ts.js.map