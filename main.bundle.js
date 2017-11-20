webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // moduleId: __moduleName,
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styleUrls: [],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_clinical_clinical_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/clinical-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_clinical_queue_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_clinical_referrals_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/referrals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_clinical_lab_results_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/lab-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_clinical_emergency_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/emergency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_clinical_reports_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authenticate_login_component__ = __webpack_require__("../../../../../src/app/authenticate/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__patient_encounters_clinical_encounters_component__ = __webpack_require__("../../../../../src/app/patient-encounters/clinical-encounters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__patient_encounters_ssd_encounters_component__ = __webpack_require__("../../../../../src/app/patient-encounters/ssd-encounters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reception_reception_component__ = __webpack_require__("../../../../../src/app/reception/reception.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reception_new_component__ = __webpack_require__("../../../../../src/app/reception/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reception_new_patients_component__ = __webpack_require__("../../../../../src/app/reception/new-patients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reception_tb_component__ = __webpack_require__("../../../../../src/app/reception/tb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reception_scheduled_component__ = __webpack_require__("../../../../../src/app/reception/scheduled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reception_unscheduled_component__ = __webpack_require__("../../../../../src/app/reception/unscheduled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reception_emergency_component__ = __webpack_require__("../../../../../src/app/reception/emergency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reception_reports_component__ = __webpack_require__("../../../../../src/app/reception/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reception_queue_component__ = __webpack_require__("../../../../../src/app/reception/queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__patient_search_patient_search_component__ = __webpack_require__("../../../../../src/app/patient-search/patient-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__patient_new_patient_new_component__ = __webpack_require__("../../../../../src/app/patient-new/patient-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__patient_search_patient_dashboard_component__ = __webpack_require__("../../../../../src/app/patient-search/patient-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__orders_patient_lab_orders_component__ = __webpack_require__("../../../../../src/app/orders/patient-lab-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__orders_patient_drug_orders_component__ = __webpack_require__("../../../../../src/app/orders/patient-drug-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__patient_encounters_patient_encounters_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-encounters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__patient_encounters_patient_triage_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-triage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__patient_encounters_patient_history_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__patient_encounters_patient_clinical_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-clinical.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__orders_lab_dashboard_component__ = __webpack_require__("../../../../../src/app/orders/lab-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__orders_drug_orders_component__ = __webpack_require__("../../../../../src/app/orders/drug-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__orders_drugs_dashboard_component__ = __webpack_require__("../../../../../src/app/orders/drugs-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__reports_report_dashboard_component__ = __webpack_require__("../../../../../src/app/reports/report-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__reports_patient_report_component__ = __webpack_require__("../../../../../src/app/reports/patient-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__no_content_no_content__ = __webpack_require__("../../../../../src/app/no-content/no-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__settings_app_routing_module__ = __webpack_require__("../../../../../src/app/settings/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__openmrs_api_authentication_service__ = __webpack_require__("../../../../../src/app/openmrs-api/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__openmrs_api_session_service__ = __webpack_require__("../../../../../src/app/openmrs-api/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__patient_search_patient_search_service__ = __webpack_require__("../../../../../src/app/patient-search/patient-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__openmrs_api_patient_resource_service__ = __webpack_require__("../../../../../src/app/openmrs-api/patient-resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__openmrs_api_user_service__ = __webpack_require__("../../../../../src/app/openmrs-api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__settings_app_settings_service__ = __webpack_require__("../../../../../src/app/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__utils_local_storage_service__ = __webpack_require__("../../../../../src/app/utils/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__utils_session_storage_service__ = __webpack_require__("../../../../../src/app/utils/session-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Framework imports









































// Modules


// External Lib Service Providers

// import * as ngx_cookie from 'ngx-cookie';
// OpenMRS REST API service providers





// Custom Service Providers



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_41__settings_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_42_ngx_cookie__["a" /* CookieModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_43_ngx_bootstrap__["d" /* ModalModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_clinical_clinical_dashboard_component__["a" /* ClinicalDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_clinical_queue_component__["a" /* ClinicalQueueComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_clinical_referrals_component__["a" /* ClinicalReferralsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_clinical_lab_results_component__["a" /* ClinicalLabResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_clinical_emergency_component__["a" /* ClinicalEmergencyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_clinical_reports_component__["a" /* ClinicalReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__authenticate_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__patient_encounters_clinical_encounters_component__["a" /* ClinicalEncountersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__patient_encounters_ssd_encounters_component__["a" /* SsdEncountersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__reception_reception_component__["a" /* ReceptionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__reception_new_component__["a" /* ReceptionNewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__reception_new_patients_component__["a" /* ReceptionNewPatientsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__reception_tb_component__["a" /* ReceptionTbComponent */],
                __WEBPACK_IMPORTED_MODULE_20__reception_scheduled_component__["a" /* ReceptionScheduledComponent */],
                __WEBPACK_IMPORTED_MODULE_21__reception_unscheduled_component__["a" /* ReceptionUnScheduledComponent */],
                __WEBPACK_IMPORTED_MODULE_22__reception_emergency_component__["a" /* ReceptionEmergencyComponent */],
                __WEBPACK_IMPORTED_MODULE_23__reception_reports_component__["a" /* ReceptionReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__reception_queue_component__["a" /* ReceptionQueueComponent */],
                __WEBPACK_IMPORTED_MODULE_25__patient_search_patient_search_component__["a" /* PatientSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_26__patient_new_patient_new_component__["a" /* PatientNewComponent */],
                __WEBPACK_IMPORTED_MODULE_27__patient_search_patient_dashboard_component__["a" /* PatientDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__orders_patient_lab_orders_component__["a" /* PatientLabOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_29__orders_patient_drug_orders_component__["a" /* PatientDrugOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_30__patient_encounters_patient_encounters_component__["a" /* PatientEncountersComponent */],
                __WEBPACK_IMPORTED_MODULE_31__patient_encounters_patient_triage_component__["a" /* PatientTriageComponent */],
                __WEBPACK_IMPORTED_MODULE_33__patient_encounters_patient_clinical_component__["a" /* PatientClinicalComponent */],
                __WEBPACK_IMPORTED_MODULE_32__patient_encounters_patient_history_component__["a" /* PatientHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_34__orders_lab_dashboard_component__["a" /* LaboratoryDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_35__orders_drug_orders_component__["a" /* DrugOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_36__orders_drugs_dashboard_component__["a" /* DrugsDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_37__reports_report_dashboard_component__["a" /* ReportDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_38__reports_patient_report_component__["a" /* ReportPatientComponent */],
                __WEBPACK_IMPORTED_MODULE_40__no_content_no_content__["a" /* NoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_39__notification_notification_component__["a" /* NotificationComponent */]
            ],
            // entryComponents: [ngx_core.ModalBackdropComponent],
            providers: [
                // external providers 
                __WEBPACK_IMPORTED_MODULE_43_ngx_bootstrap__["a" /* BsModalRef */],
                __WEBPACK_IMPORTED_MODULE_43_ngx_bootstrap__["b" /* BsModalService */],
                __WEBPACK_IMPORTED_MODULE_43_ngx_bootstrap__["e" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_43_ngx_bootstrap__["c" /* ComponentLoaderFactory */],
                //openmrs-rest-api providers    
                __WEBPACK_IMPORTED_MODULE_44__openmrs_api_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_46__patient_search_patient_search_service__["a" /* PatientSearchService */],
                __WEBPACK_IMPORTED_MODULE_47__openmrs_api_patient_resource_service__["a" /* PatientResourceService */],
                __WEBPACK_IMPORTED_MODULE_45__openmrs_api_session_service__["a" /* SessionService */],
                // custom providers
                __WEBPACK_IMPORTED_MODULE_49__settings_app_settings_service__["a" /* AppSettingsService */],
                __WEBPACK_IMPORTED_MODULE_50__utils_local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_51__utils_session_storage_service__["a" /* SessionStorageService */],
                __WEBPACK_IMPORTED_MODULE_48__openmrs_api_user_service__["a" /* UserService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authenticate/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authenticate/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center-vertical\">\n    <div class=\"center-content row\">\n\n        <br>\n        <br>\n        <form id=\"login-validation\" class=\"col-md-4 col-sm-5 col-xs-11 col-lg-3 center-margin\" (submit)=\"login(username.value, password.value)\">\n            \n            <!--\n            <h3 class=\"text-center pad25B font-gray text-transform-upr font-size-23\">\n                MRS BORA <span class=\"opacity-80\">v1.0</span></h3>\n            -->\n            <div id=\"page-title\">\n                <img class=\"mrg25B center-margin radius-all-100 display-block\" src=\"assets/images/faces-logo.jpg\" alt=\"Image 404 Error\">\n                <h2 class=\"text-center\">MRS BORA</h2>\n                <p  class=\"text-center\">Please Login</p>\n            </div>\n            <div id=\"login-form\" class=\"content-box bg-default\">\n                <div class=\"content-box-wrapper pad20A\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon addon-inside bg-gray\">\n                                <i class=\"glyph-icon icon-linecons-user\"></i>\n                            </span>\n                            <input type=\"text\" class=\"form-control\" #username=\"\" placeholder=\"Username\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon addon-inside bg-gray\">\n                                <i class=\"glyph-icon icon-unlock-alt\"></i>\n                            </span>\n                            <input type=\"password\" class=\"form-control\" #password=\"\" placeholder=\"Password\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- <a routerLink=\"/mrsbora\" class=\"btn btn-block btn-primary\">Login</a> -->\n                        <button class=\"btn btn-block btn-success\" type=\"submit\">\n                            <b><small>Login</small></b>\n                        </button>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"checkbox-primary col-md-6\" style=\"height: 20px;\">\n                            <label>\n                                <input type=\"checkbox\" id=\"loginCheckbox1\" class=\"custom-checkbox\">\n                                Remember me\n                            </label>\n                        </div>\n                        <div class=\"text-right col-md-6\">\n                            <a href=\"#\" class=\"switch-button\" switch-target=\"#login-forgot\" switch-parent=\"#login-form\" title=\"Recover password\">Forgot your password?</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authenticate/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openmrs_api_authentication_service__ = __webpack_require__("../../../../../src/app/openmrs-api/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.shouldRedirect = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        var currentRoute = window.location.toString();
        var userRoles = [];
        this.subscription = this.authenticationService.authenticate(username, password)
            .subscribe(function (response) {
            var data = response.json();
            var roles = data.user.roles;
            for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
                var role = roles_1[_i];
                userRoles.push(role.display);
            }
            if (data.authenticated) {
                _this.authenticationService.setUserRoles(userRoles);
                _this.router.navigate(['/mrsbora']);
            }
            else {
                console.log('User Not authenticated! ');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/authenticate/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authenticate/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__openmrs_api_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/clinical-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/clinical-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>CLINICAL DASHBOARD</h2>\r\n\t\t\t\t<p>Clinical Dashboard</p>\r\n\t\t\t</div>\r\n\t\t    <br>\r\n\r\n\t\t    <div class=\"row\">\r\n\t\t    \t<div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/clinical/queue\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-info\">\r\n\t                    <span class=\"bs-badge badge-absolute\">15</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Patients Queue\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-bars\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/clinical/referrals\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-primary\">\r\n\t                    <span class=\"bs-badge badge-absolute\">5</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Referrals\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-send-o\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/clinical/lab-results\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-success\">\r\n\t                    <span class=\"bs-badge badge-absolute\">26</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Lab Results\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-flask\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/clinical/emergency\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-danger\">\r\n\t                    <span class=\"bs-badge badge-absolute\">5</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Emergency Cases\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-bolt\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/clinical/reports\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-black-opacity\">\r\n\t                    <span class=\"bs-badge badge-absolute\">5</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Reports\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-area-chart\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\t\t    </div>\r\n\t\t    <br>\r\n\t\t    <br>\r\n\r\n\t\t\t<router-outlet></router-outlet>\t\r\n\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/clinical-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalDashboardComponent = (function () {
    function ClinicalDashboardComponent(router) {
        this.router = router;
    }
    ClinicalDashboardComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/mrsbora/clinical/queue']);
    };
    ClinicalDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dashboard/clinical/clinical-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/clinical/clinical-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ClinicalDashboardComponent);
    return ClinicalDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/emergency.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/emergency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-bolt\"></i> &nbsp;\r\n                        <b>Emergency</b>\r\n                    </h5>               \r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                        <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                        <tr role=\"row\">\r\n                            <th>UPN</th>\r\n                            <th>Visit Date</th>\r\n                            <th>TCA</th>\r\n                            <th>Patient Name</th>\r\n                            <th>Options</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"odd\">\r\n                                <td>KLM-32890</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>KIMBERLY MIGO MIGO</td>\r\n                                <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n                        <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n                            <li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n                        </div>\r\n                        </div>\r\n                    \r\n                </div>\r\n            </div>                              \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/emergency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalEmergencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalEmergencyComponent = (function () {
    function ClinicalEmergencyComponent(router) {
        this.router = router;
    }
    ClinicalEmergencyComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['/mrsbora/home']); 
    };
    ClinicalEmergencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dashboard/clinical/emergency.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/clinical/emergency.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ClinicalEmergencyComponent);
    return ClinicalEmergencyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/lab-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/lab-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-flask\"></i> &nbsp;\r\n                        <b>Lab Results</b>\r\n                    </h5>               \r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                        <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                        <tr role=\"row\">\r\n                            <th>UPN</th>\r\n                            <th>Visit Date</th>\r\n                            <th>TCA</th>\r\n                            <th>Patient Name</th>\r\n                            <th>Options</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"odd\">\r\n                                <td>KLM-32890</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>KIMBERLY MIGO MIGO</td>\r\n                                <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n                        <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n                            <li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n                        </div>\r\n                        </div>\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n                              \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/lab-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalLabResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalLabResultsComponent = (function () {
    function ClinicalLabResultsComponent(router) {
        this.router = router;
    }
    ClinicalLabResultsComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['/mrsbora/home']); 
    };
    ClinicalLabResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dashboard/clinical/lab-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/clinical/lab-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ClinicalLabResultsComponent);
    return ClinicalLabResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/queue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/queue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                \r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                            <i class=\"glyph-icon icon-bars\"></i> &nbsp;\r\n                            <b>36 Patients in Queue</b>\r\n                        </h5>\r\n                </div>\r\n                <br>\r\n\r\n                 <div class=\"row\">\r\n                    <div class=\"col-md-4\">              \r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Patient Identifier or Patient Name\">\r\n                            <span class=\"input-group-btn\">\r\n                                <button class=\"btn btn-primary\" type=\"button\">\r\n                                    <b><small>Search</small></b>\r\n                                </button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/mrsbora/patient-new\">\r\n                             <i class=\"glyph-icon icon-plus\"></i>&nbsp;<small>Add to Queue</small>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                            <div class=\"list-group\">\r\n                                <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">1. MIGO HUSSEIN EL SAFRA (UPN: KLM0098-123)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:00:10 GMT-0400</span></a>\r\n                                <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">2. JOHN OMUGA  JACKTONE (UPN: KLM0328-121)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:12:10 GMT-0400</span></a>\r\n                                <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">3. QUEENSLY OLILO (UPN: KLM666-097)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:32:10 GMT-0400</span></a>\r\n                                <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">4. JANE SHERYL OJWANG (UPN: KLM0954-109)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:40:10 GMT-0400</span></a>\r\n                                <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">5. MURKOMEN AGATHA (UPN: KLM005-876)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:47:10 GMT-0400</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n                              \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/queue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalQueueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalQueueComponent = (function () {
    function ClinicalQueueComponent(router) {
        this.router = router;
    }
    ClinicalQueueComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['/mrsbora/home']); 
    };
    ClinicalQueueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dashboard/clinical/queue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/clinical/queue.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ClinicalQueueComponent);
    return ClinicalQueueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/referrals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/referrals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-send-o\"></i> &nbsp;\r\n                        <b>Referrals</b>\r\n                    </h5>               \r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                        <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                        <tr role=\"row\">\r\n                            <th>UPN</th>\r\n                            <th>Visit Date</th>\r\n                            <th>TCA</th>\r\n                            <th>Patient Name</th>\r\n                            <th>Options</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"odd\">\r\n                                <td>KLM-32890</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>KIMBERLY MIGO MIGO</td>\r\n                                <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n                        <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n                            <li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n                        </div>\r\n                        </div>\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n                              \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/referrals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalReferralsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalReferralsComponent = (function () {
    function ClinicalReferralsComponent(router) {
        this.router = router;
    }
    ClinicalReferralsComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['/mrsbora/home']); 
    };
    ClinicalReferralsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dashboard/clinical/referrals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/clinical/referrals.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ClinicalReferralsComponent);
    return ClinicalReferralsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-area-chart\"></i> &nbsp;\r\n                        <b>Reports</b>\r\n                    </h5>               \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">  \r\n                </div>\r\n                <div class=\"col-md-6\">    \r\n                    <div class=\"list-group\">\r\n                    <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Current on ART</a>\r\n                    <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">VL Trends</a>\r\n                    <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Supression Rates</a>      \r\n                    <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Retention</a>\r\n                    <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">FP Uptake</a>\r\n                    <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">FP Uptake</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">  \r\n                </div>\r\n                              \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/clinical/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalReportsComponent = (function () {
    function ClinicalReportsComponent(router) {
        this.router = router;
    }
    ClinicalReportsComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['/mrsbora/home']); 
    };
    ClinicalReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dashboard/clinical/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/clinical/reports.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ClinicalReportsComponent);
    return ClinicalReportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\n<div id=\"page-content\">            \n<div class=\"container\">\n\t<div id=\"page-title\">\n\t\t<h2>MRS BORA Dashboard</h2>\n\t\t<p>Use this dashboard to access analytics, statistics and summaries</p>\n\t</div>\n\t\n<div class=\"row\">\n\t    <div class=\"col-md-4\">\n\t        <div class=\"dashboard-box dashboard-box-chart bg-white content-box\">\n\t            <div class=\"content-wrapper\">\n\t                <div class=\"header\">\n\t                    34,657\n\t                    <span>Total Enrollments<b> in last</b> 1 <b>Year</b></span>\n\t                </div>\n\t                <div class=\"bs-label bg-green\">+18%</div>\n\t                <div class=\"center-div sparkline-big-alt\">1245,1450,1312,1121,986,1489</div>\n\t                <div class=\"row list-grade\">\n\t                    <div class=\"col-md-2\">January</div>\n\t                    <div class=\"col-md-2\">February</div>\n\t                    <div class=\"col-md-2\">March</div>\n\t                    <div class=\"col-md-2\">April</div>\n\t                    <div class=\"col-md-2\">May</div>\n\t                    <div class=\"col-md-2\">June</div>\n\t                </div>\n\t            </div>\n\t            <div class=\"button-pane\">\n\t                <div class=\"size-md float-left\">\n\t                    <a href=\"#\" title=\"\">\n\t                        Enrollment Statistics\n\t                    </a>\n\t                </div>\n\t                <a href=\"#\" class=\"btn btn-default float-right tooltip-button\" data-placement=\"top\" title=\"View details\">\n\t                    <i class=\"glyph-icon icon-angle-right\"></i>\n\t                </a>\n\t            </div>\n\t        </div>\n\t    </div>\n\n\t    <div class=\"col-md-4\">\n\t        <div class=\"dashboard-box dashboard-box-chart bg-white content-box\">\n\t            <div class=\"content-wrapper\">\n\t                <div class=\"header\">\n\t                    169\n\t                    <span>Current on Care<b> in last</b> 7 week days</span>\n\t                </div>\n\t                <div class=\"bs-label bg-red\">-14%</div>\n\t                <div class=\"center-div sparkline-big-alt\">21,41,31,50,18</div>\n\t                <div class=\"row list-grade\">\n\t                    <div class=\"col-md-2\">M</div>\n\t                    <div class=\"col-md-2\">T</div>\n\t                    <div class=\"col-md-2\">W</div>\n\t                    <div class=\"col-md-2\">T</div>\n\t                    <div class=\"col-md-2\">F</div>\n\t                </div>\n\t            </div>\n\t            <div class=\"button-pane\">\n\t                <div class=\"size-md float-left\">\n\t                    <a href=\"#\" title=\"\">\n\t                        Current on Care Statistics\n\t                    </a>\n\t                </div>\n\t                <a href=\"#\" class=\"btn btn-default float-right tooltip-button\" data-placement=\"top\" title=\"View details\">\n\t                    <i class=\"glyph-icon icon-angle-right\"></i>\n\t                </a>\n\t            </div>\n\t        </div>\n\t    </div>\n\n\t    <div class=\"col-md-4\">\n\t        <div class=\"dashboard-box dashboard-box-chart bg-white content-box\">\n\t            <div class=\"content-wrapper\">\n\t                <div class=\"header\">\n\t                    24\n\t                    <span>TB Prophylaxis <b> in last</b> 5 week days</span>\n\t                </div>\n\t                <div class=\"bs-label bg-orange\">-5%</div>\n\t                <div class=\"center-div sparkline-big-alt\">4,3,1,8,8</div>\n\t                <div class=\"row list-grade\">\n\t                    <div class=\"col-md-2\">M</div>\n\t                    <div class=\"col-md-2\">T</div>\n\t                    <div class=\"col-md-2\">W</div>\n\t                    <div class=\"col-md-2\">T</div>\n\t                    <div class=\"col-md-2\">F</div>\n\t                </div>\n\t            </div>\n\t            <div class=\"button-pane\">\n\t                <div class=\"size-md float-left\">\n\t                    <a href=\"#\" title=\"\">\n\t                        TB Statistics\n\t                    </a>\n\t                </div>\n\t                <a href=\"#\" class=\"btn btn-default float-right tooltip-button\" data-placement=\"top\" title=\"View details\">\n\t                    <i class=\"glyph-icon icon-angle-right\"></i>\n\t                </a>\n\t            </div>\n\t        </div>\n\t    </div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"panel\">\n            <div class=\"panel-body\">\n                <h3 class=\"title-hero\">\n                    Recent Enrollment Activity\n                </h3>\n                <div class=\"example-box-wrapper\">\n                    <div id=\"data-example-1\" class=\"mrg20B\" style=\"width: 100%; height: 300px;\"></div>\n                </div>\n            </div>\n        </div>     \n\t</div>\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sb-site\" style=\"min-height: 1471px;\">\n    <div id=\"page-wrapper\">\n        <div id=\"page-header\" class=\"bg-gradient-9\">\n            <div id=\"mobile-navigation\">\n                <button id=\"nav-toggle\" class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#page-sidebar\"><span></span></button>\n                <a href=\"#\" class=\"logo-content-small\" title=\"MonarchUI\"></a>\n            </div>\n\n            <div id=\"header-logo\" class=\"logo-bg\">\n                <a href=\"#\" class=\"logo-content-big\" title=\"POCUI\"></a>\n            </div>\n\n            <div id=\"header-nav-left\">\n                <div>\n                    <br>\n                    <br>\n                    <span><h5 style=\"color:white;\">Logged in as {{ userName }} | <span>Date: &nbsp;{{ todayDate }}</span></h5></span>\n                </div>               \n            </div>\n\n             <div id=\"header-nav-right\">\n                <a href=\"#\" class=\"hdr-btn popover-button\" title=\"Search\" data-placement=\"bottom\" data-id=\"#popover-search\">\n                    <i class=\"glyph-icon icon-search\"></i>\n                </a>\n                <div class=\"hide\" id=\"popover-search\">\n                    <div class=\"pad5A box-md\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search terms here ...\">\n                            <span class=\"input-group-btn\">\n                                <a class=\"btn btn-primary\" href=\"#\">Search</a>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"dropdown\" id=\"notifications-btn\">\n                    <a data-toggle=\"dropdown\" href=\"#\" title=\"\">\n                        <span class=\"small-badge bg-yellow\"></span>\n                        <i class=\"glyph-icon icon-linecons-megaphone\"></i>\n                    </a>\n                    <div class=\"dropdown-menu box-md float-right\">\n\n                        <div class=\"popover-title display-block clearfix pad10A\">\n                            Notifications\n                            <a class=\"text-transform-cap font-primary font-normal btn-link float-right\" href=\"#\" title=\"View more options\">\n                                More notifications...\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <!--\n                <div class=\"scrollable-content scrollable-slim-box\">                    \n                    <ul class=\"no-border notifications-box\">\n                        <li>\n                            <span class=\"bg-danger icon-notification glyph-icon icon-bullhorn\"></span>\n                            <span class=\"notification-text\">HB test lab order for KLM1003-987 has errors</span>\n                            <div class=\"notification-time\">\n                                a few seconds ago\n                                <span class=\"glyph-icon icon-clock-o\"></span>\n                            </div>\n                        </li>\n                        <li>\n                            <span class=\"bg-warning icon-notification glyph-icon icon-users\"></span>\n                            <span class=\"notification-text font-blue\">VL results for KLM100-222 is pending</span>\n                            <div class=\"notification-time\">\n                                <b>15</b> minutes ago\n                                <span class=\"glyph-icon icon-clock-o\"></span>\n                            </div>\n                        </li>\n                        <li>\n                            <span class=\"bg-green icon-notification glyph-icon icon-sitemap\"></span>\n                            <span class=\"notification-text font-green\">Scrag results for KLM100-222 is ready</span>\n                            <div class=\"notification-time\">\n                                <b>2 hours</b> ago\n                                <span class=\"glyph-icon icon-clock-o\"></span>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n                -->\n                <div class=\"dropdown\" id=\"dashnav-btn\">\n                    <a href=\"#\" data-toggle=\"dropdown\" data-placement=\"bottom\" class=\"popover-button-header tooltip-button\" title=\"Dashboard Quick Menu\">\n                        <i class=\"glyph-icon icon-linecons-cog\"></i>\n                    </a>\n                    <div class=\"dropdown-menu float-right\">\n                        <div class=\"box-sm\">\n                            <div class=\"pad5T pad5B pad10L pad10R dashboard-buttons clearfix\">\n                                <a href=\"#\" class=\"btn vertical-button hover-blue-alt\" title=\"\">\n                                    <span class=\"glyph-icon icon-separator-vertical pad0A medium\">\n                                        <i class=\"glyph-icon icon-dashboard opacity-80 font-size-20\"></i>\n                                    </span>\n                                    Dashboard\n                                </a>\n                                <a href=\"#\" class=\"btn vertical-button hover-green\" title=\"\">\n                                    <span class=\"glyph-icon icon-separator-vertical pad0A medium\">\n                                        <i class=\"glyph-icon icon-tags opacity-80 font-size-20\"></i>\n                                    </span>\n                                    Reports\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <a href=\"\" data-placement=\"bottom\" class=\"header-btn tooltip-button\" id=\"logout-btn\" title=\"Logout\" (click)=\"logout()\">\n                    <i class=\"glyph-icon icon-power-off\"></i>\n                </a>\n            </div>            \n        </div>\n\n        <div id=\"page-sidebar\">\n            <div class=\"scroll-sidebar\">\n                <ul id=\"sidebar-menu\">\n                    <li class=\"header\"><span>Overview</span></li>\n                    <li>\n                        <a href=\"\" title=\"Admin Dashboard\">\n                            <i class=\"glyph-icon icon-linecons-tv\"></i>\n                            <span><a routerLink=\"/mrsbora/home\">Home</a></span>\n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"no-menu\">\n                        <a href=\"https://agileui.com/demo/monarch/demo/frontend-template/index.html\" title=\"Frontend template\">\n                            <i class=\"glyph-icon icon-area-chart\"></i>\n                            <span><a routerLink=\"/mrsbora/no-content\">Analytics</a></span>              \n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"no-menu\">\n                        <a href=\"https://agileui.com/demo/monarch/demo/frontend-template/index.html\" title=\"Frontend template\">\n                            <i class=\"glyph-icon icon-th\"></i>\n                            <span><a routerLink=\"/mrsbora/no-content\">Charts & Tables</a></span>                \n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n\n                    <li class=\"header\"><span>Dashboards</span></li>\n\n                    <div *ngIf=\"isReception||isSuperUser\">\n                        <li>\n                            <a href=\"\" title=\"Admin Dashboard\">\n                                <i class=\"glyph-icon icon-fax\"></i>\n                                <span><a routerLink=\"/mrsbora/patient-search\">Reception</a></span>\n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                    </div>\n\n                    <div *ngIf=\"isSsd||isSuperUser\">\n                        <li>\n                            <a href=\"\" title=\"Admin Dashboard\">\n                                <i class=\"glyph-icon icon-male\"></i>\n                                <span><a routerLink=\"/mrsbora/patient-queue\">SSD</a></span>\n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                    </div>\n\n                    <div *ngIf=\"isClinical||isSuperUser\">\n                        <li>\n                            <a href=\"\" title=\"Admin Dashboard\">\n                                <i class=\"glyph-icon icon-user-md\"></i>\n                                <span><a routerLink=\"/mrsbora/clinical/queue\">Clinical</a></span>\n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                    </div>\n\n                    <div *ngIf=\"isLab||isSuperUser\">\n                        <li>\n                            <a href=\"\" title=\"Admin Dashboard\">\n                                <i class=\"glyph-icon icon-flask\"></i>\n                                <span><a routerLink=\"/mrsbora/dashboard\">Laboratory</a></span>\n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                    </div>\n\n                    <div *ngIf=\"isPharmacy||isSuperUser\">\n                        <li>\n                            <a href=\"\" title=\"Admin Dashboard\">\n                                <i class=\"glyph-icon icon-adjust\"></i>\n                                <span><a routerLink=\"/mrsbora/dashboard\">Pharmacy</a></span>\n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                    </div>\n\n                    <div *ngIf=\"isSuperUser||isSuperUser\">\n                        <li class=\"header\"><span>Reports</span></li>\n                        <li>\n                            <a href=\"#\" title=\"Reports\">\n                                <i class=\"glyph-icon icon-file-pdf-o\"></i>\n                                <span><a routerLink=\"/mrsbora/report-dashboard\">Reports</a></span> \n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                    </div>\n\n                    <div *ngIf=\"isSuperUser||isSuperUser\">\n                        <li class=\"header\"><span>Settings</span></li>\n                        <li>\n                            <a href=\"#\" title=\"Manage Concepts\">\n                                <i class=\"glyph-icon icon-book\"></i>\n                                <span><a routerLink=\"/mrsbora/no-content\">Manage Concepts</a></span>                        \n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <a href=\"#\" title=\"Manage Accounts\">\n                                <i class=\"glyph-icon icon-users\"></i>\n                                <span><a routerLink=\"/mrsbora/no-content\">Manage Accounts</a></span>    \n                            </a>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <a href=\"#\" title=\"Manage System\">\n                                <i class=\"glyph-icon icon-gears\"></i>\n                                <span><a routerLink=\"/mrsbora/no-content\">Manage System</a></span>                      \n                            </a>\n                        </li>\n                    </div>\n                </ul>\n            </div>\n        </div>\n\n        <router-outlet></router-outlet>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openmrs_api_user_service__ = __webpack_require__("../../../../../src/app/openmrs-api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_session_storage_service__ = __webpack_require__("../../../../../src/app/utils/session-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openmrs_api_authentication_service__ = __webpack_require__("../../../../../src/app/openmrs-api/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(router, sessionStorageService, userService, authenticationService) {
        this.router = router;
        this.sessionStorageService = sessionStorageService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.isReception = false;
        this.isSsd = false;
        this.isClinical = false;
        this.isLab = false;
        this.isPharmacy = false;
        this.isSuperUser = false;
        // this.user = this.userService.getLoggedInUser();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var userRoles = this.sessionStorageService.getItem('userroles');
        this.userRolesArray = userRoles.split(",");
        var user = this.sessionStorageService.getObject('user');
        this.userName = user.display;
        this.todayDate = new Date().toLocaleDateString('en-GB');
        // evaluate roles
        if (this.userRolesArray.indexOf("Reception") > -1) {
            this.isReception = true;
        }
        if (this.userRolesArray.indexOf("SSD") > -1) {
            this.isSsd = true;
        }
        if (this.userRolesArray.indexOf("Clinical") > -1 ||
            this.userRolesArray.indexOf("Clinical Officer") > -1 ||
            this.userRolesArray.indexOf("Nurse") > -1 ||
            this.userRolesArray.indexOf("Provider") > -1) {
            this.isClinical = true;
        }
        if (this.userRolesArray.indexOf("Lab") > -1) {
            this.isLab = true;
        }
        if (this.userRolesArray.indexOf("Pharmacy") > -1) {
            this.isPharmacy = true;
        }
        if (this.userRolesArray.indexOf("SuperUser") > -1 ||
            this.userRolesArray.indexOf("System Developer") > -1) {
            this.isSuperUser = true;
        }
        this.router.navigate(['/mrsbora/home']);
    };
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logOut();
        this.router.navigate(['/login']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Boolean)
    ], HomeComponent.prototype, "isReception", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__utils_session_storage_service__["a" /* SessionStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__openmrs_api_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__openmrs_api_authentication_service__["a" /* AuthenticationService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/address.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonAddress = (function (_super) {
    __extends(PersonAddress, _super);
    function PersonAddress(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PersonAddress.prototype, "preferred", {
        get: function () {
            return this._openmrsModel.preferred;
        },
        set: function (v) {
            this._openmrsModel.preferred = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address1", {
        get: function () {
            return this._openmrsModel.address1;
        },
        set: function (v) {
            this._openmrsModel.address1 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address2", {
        get: function () {
            return this._openmrsModel.address2;
        },
        set: function (v) {
            this._openmrsModel.address2 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address3", {
        get: function () {
            return this._openmrsModel.address3;
        },
        set: function (v) {
            this._openmrsModel.address3 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address4", {
        get: function () {
            return this._openmrsModel.address4;
        },
        set: function (v) {
            this._openmrsModel.address4 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address5", {
        get: function () {
            return this._openmrsModel.address5;
        },
        set: function (v) {
            this._openmrsModel.address5 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "address6", {
        get: function () {
            return this._openmrsModel.address6;
        },
        set: function (v) {
            this._openmrsModel.address6 = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "cityVillage", {
        get: function () {
            return this._openmrsModel.cityVillage;
        },
        set: function (v) {
            this._openmrsModel.cityVillage = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "stateProvince", {
        get: function () {
            return this._openmrsModel.stateProvince;
        },
        set: function (v) {
            this._openmrsModel.stateProvince = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "country", {
        get: function () {
            return this._openmrsModel.country;
        },
        set: function (v) {
            this._openmrsModel.country = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "countyDistrict", {
        get: function () {
            return this._openmrsModel.countyDistrict;
        },
        set: function (v) {
            this._openmrsModel.countyDistrict = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAddress.prototype, "postalCode", {
        get: function () {
            return this._openmrsModel.postalCode;
        },
        set: function (v) {
            this._openmrsModel.postalCode = v;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "preferred", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "address1", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "address2", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "address3", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "address4", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "address5", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "address6", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "cityVillage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "stateProvince", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "country", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "countyDistrict", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAddress.prototype, "postalCode", null);
    return PersonAddress;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/models/base-model.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * BaseModel
 */

var BaseModel = (function () {
    function BaseModel(_openmrsModel) {
        this._openmrsModel = _openmrsModel;
        if (_openmrsModel === undefined || _openmrsModel === null) {
            _openmrsModel = {};
        }
    }
    Object.defineProperty(BaseModel.prototype, "uuid", {
        get: function () {
            return this._openmrsModel.uuid;
        },
        set: function (v) {
            this._openmrsModel.uuid = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "display", {
        get: function () {
            return this._openmrsModel.display;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "openmrsModel", {
        get: function () {
            return this._openmrsModel;
        },
        enumerable: true,
        configurable: true
    });
    BaseModel.prototype.toNewPayload = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__serializable_decorator__["b" /* serialize */])(this, true);
    };
    BaseModel.prototype.toUpdatePayload = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__serializable_decorator__["b" /* serialize */])(this, false);
    };
    BaseModel.prototype.initializeNavigationProperty = function (member) {
        if (this._openmrsModel[member] === undefined || this._openmrsModel[member] === null) {
            this._openmrsModel[member] = {};
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BaseModel.prototype, "uuid", null);
    return BaseModel;
}());



/***/ }),

/***/ "../../../../../src/app/models/date.extensions.ts":
/***/ (function(module, exports) {

Date.prototype.toServerTimezoneString = function () {
    return this.toISOString();
    // TODO: convert date based on the server timezone stored somewhere
};


/***/ }),

/***/ "../../../../../src/app/models/patient-identifier-type.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientIdentifierType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientIdentifierType = (function (_super) {
    __extends(PatientIdentifierType, _super);
    function PatientIdentifierType(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PatientIdentifierType.prototype, "name", {
        get: function () {
            return this._openmrsModel.name;
        },
        set: function (v) {
            this._openmrsModel.name = v;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PatientIdentifierType.prototype, "name", null);
    return PatientIdentifierType;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/models/patient-identifier.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientIdentifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_identifier_type_model__ = __webpack_require__("../../../../../src/app/models/patient-identifier-type.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientIdentifier = (function (_super) {
    __extends(PatientIdentifier, _super);
    function PatientIdentifier(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PatientIdentifier.prototype, "identifierType", {
        get: function () {
            if (this._identifier === null || this._identifier === undefined) {
                this.initializeNavigationProperty('identifierType');
                this._identifier = new __WEBPACK_IMPORTED_MODULE_2__patient_identifier_type_model__["a" /* PatientIdentifierType */](this._openmrsModel.identifierType);
            }
            return this._identifier;
        },
        set: function (v) {
            this._openmrsModel.identifierType = v.openmrsModel;
            this._identifier = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientIdentifier.prototype, "identifier", {
        get: function () {
            return this._openmrsModel.identifier;
        },
        set: function (v) {
            this._openmrsModel.identifier = v;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__patient_identifier_type_model__["a" /* PatientIdentifierType */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__patient_identifier_type_model__["a" /* PatientIdentifierType */]])
    ], PatientIdentifier.prototype, "identifierType", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PatientIdentifier.prototype, "identifier", null);
    return PatientIdentifier;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/models/patient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_model__ = __webpack_require__("../../../../../src/app/models/person.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_identifier_model__ = __webpack_require__("../../../../../src/app/models/patient-identifier.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * patient
 */




var Patient = (function (_super) {
    __extends(Patient, _super);
    function Patient(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        _this._identifier = _this.openmrsModel.identifiers;
        _this._enrolledPrograms = _this.openmrsModel.enrolledPrograms;
        _this._encounters = _this.openmrsModel.encounters;
        return _this;
    }
    Object.defineProperty(Patient.prototype, "person", {
        get: function () {
            if (this._person === null || this._person === undefined) {
                this.initializeNavigationProperty('person');
                this._person = new __WEBPACK_IMPORTED_MODULE_2__person_model__["a" /* Person */](this._openmrsModel.person);
            }
            return this._person;
        },
        set: function (v) {
            this._openmrsModel.person = v.openmrsModel;
            this._person = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "identifiers", {
        get: function () {
            if (this._patientIdentifier === null || this._patientIdentifier === undefined) {
                this.initializeNavigationProperty('patientIdentifier');
                this._patientIdentifier = new __WEBPACK_IMPORTED_MODULE_3__patient_identifier_model__["a" /* PatientIdentifier */](this._openmrsModel.identifiers);
            }
            return this._patientIdentifier;
        },
        set: function (v) {
            this._openmrsModel.identifiers = v.openmrsModel;
            this._patientIdentifier = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "enrolledPrograms", {
        get: function () {
            if (this._enrolledPrograms === null || this._enrolledPrograms === undefined) {
                this.initializeNavigationProperty('enrolledPrograms');
                this._enrolledPrograms = this._openmrsModel.enrolledPrograms;
            }
            return this._enrolledPrograms;
        },
        set: function (v) {
            this._openmrsModel.enrolledPrograms = v;
            this._enrolledPrograms = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "encounters", {
        get: function () {
            var mappedEncounters = new Array();
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < this._encounters.length; i++) {
                mappedEncounters.push(this._encounters[i]);
            }
            return mappedEncounters.reverse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "searchIdentifiers", {
        get: function () {
            if (this._identifier.length > 0) {
                // return _identifier[0].display.split('=')[1];
                var filteredIdentifiers = void 0;
                var identifier = this._identifier;
                var kenyaNationalId = this.getIdentifierByType(identifier, 'KENYAN NATIONAL ID NUMBER');
                var amrsMrn = this.getIdentifierByType(identifier, 'AMRS Medical Record Number');
                var ampathMrsUId = this.getIdentifierByType(identifier, 'AMRS Universal ID');
                var cCC = this.getIdentifierByType(identifier, 'CCC Number');
                if ((kenyaNationalId) === undefined && (amrsMrn) === undefined &&
                    (ampathMrsUId) === undefined && (cCC) === undefined) {
                    if ((this._identifier[0].identifier)) {
                        filteredIdentifiers = { 'default': this._identifier[0].identifier };
                    }
                    else {
                        filteredIdentifiers = { 'default': '' };
                    }
                }
                else {
                    filteredIdentifiers = {
                        'kenyaNationalId': kenyaNationalId,
                        'amrsMrn': amrsMrn,
                        'ampathMrsUId': ampathMrsUId,
                        'cCC': cCC
                    };
                }
                return filteredIdentifiers;
            }
            else {
                return this._identifier = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Patient.prototype.getIdentifierByType = function (identifierObject, type) {
        for (var e in identifierObject) {
            if ((identifierObject[e].identifierType) !== undefined) {
                var idType = identifierObject[e].identifierType.name;
                var id = identifierObject[e].identifier;
                if (idType === type) {
                    return id;
                }
            }
        }
    };
    Patient.prototype.toUpdatePayload = function () {
        return null;
    };
    Object.defineProperty(Patient.prototype, "commonIdentifiers", {
        get: function () {
            if (this._identifier.length > 0) {
                // return _identifier[0].display.split('=')[1];
                var filteredIdentifiers = void 0;
                var identifiers = this._identifier;
                var kenyaNationalId = this.getAllIdentifiersByType(identifiers, 'KENYAN NATIONAL ID NUMBER');
                var amrsMrn = this.getAllIdentifiersByType(identifiers, 'AMRS Medical Record Number');
                var ampathMrsUId = this.getAllIdentifiersByType(identifiers, 'AMRS Universal ID');
                var cCC = this.getAllIdentifiersByType(identifiers, 'CCC Number');
                if ((kenyaNationalId) === undefined && (amrsMrn) === undefined &&
                    (ampathMrsUId) === undefined && (cCC) === undefined) {
                    if ((this._identifier[0].identifier)) {
                        filteredIdentifiers = { 'default': this._identifier[0].identifier };
                    }
                    else {
                        filteredIdentifiers = { 'default': '' };
                    }
                }
                else {
                    filteredIdentifiers = {
                        'kenyaNationalId': this._fromArrayToCommaSeparatedString(kenyaNationalId),
                        'amrsMrn': this._fromArrayToCommaSeparatedString(amrsMrn),
                        'ampathMrsUId': this._fromArrayToCommaSeparatedString(ampathMrsUId),
                        'cCC': this._fromArrayToCommaSeparatedString(cCC)
                    };
                }
                return filteredIdentifiers;
            }
            else {
                return this._identifier = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Patient.prototype.getAllIdentifiersByType = function (identifiers, type) {
        var types = [];
        for (var e in identifiers) {
            if ((identifiers[e].identifierType) !== undefined) {
                var idType = identifiers[e].identifierType.name;
                var id = identifiers[e].identifier;
                if (idType === type) {
                    types.push(id);
                }
            }
        }
        return types;
    };
    Patient.prototype._fromArrayToCommaSeparatedString = function (inputArray) {
        var returnString = '';
        for (var i = 0; i < inputArray.length; i++) {
            if (i === 0) {
                returnString = inputArray[i] + returnString;
            }
            else {
                returnString = returnString + ', ' + inputArray[i];
            }
        }
        return returnString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__person_model__["a" /* Person */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__person_model__["a" /* Person */]])
    ], Patient.prototype, "person", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__patient_identifier_model__["a" /* PatientIdentifier */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__patient_identifier_model__["a" /* PatientIdentifier */]])
    ], Patient.prototype, "identifiers", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Patient.prototype, "enrolledPrograms", null);
    return Patient;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/models/person-attribute-type.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonAttributeType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonAttributeType = (function (_super) {
    __extends(PersonAttributeType, _super);
    // private name: string;
    function PersonAttributeType(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PersonAttributeType.prototype, "name", {
        get: function () {
            return this._openmrsModel.name;
        },
        set: function (v) {
            this._openmrsModel.name = v;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PersonAttributeType.prototype, "name", null);
    return PersonAttributeType;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/models/person-attribute.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonAttribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_attribute_type_model__ = __webpack_require__("../../../../../src/app/models/person-attribute-type.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonAttribute = (function (_super) {
    __extends(PersonAttribute, _super);
    function PersonAttribute(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(PersonAttribute.prototype, "attributeType", {
        get: function () {
            if (this._attributeType === null || this._attributeType === undefined) {
                this.initializeNavigationProperty('');
                this._attributeType = new __WEBPACK_IMPORTED_MODULE_2__person_attribute_type_model__["a" /* PersonAttributeType */](this._openmrsModel.attributeType);
            }
            return this._attributeType;
        },
        set: function (v) {
            this._openmrsModel.attributeType = v.openmrsModel;
            this._attributeType = v;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__person_attribute_type_model__["a" /* PersonAttributeType */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__person_attribute_type_model__["a" /* PersonAttributeType */]])
    ], PersonAttribute.prototype, "attributeType", null);
    return PersonAttribute;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/models/person.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serializable_decorator__ = __webpack_require__("../../../../../src/app/models/serializable.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_extensions__ = __webpack_require__("../../../../../src/app/models/date.extensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_extensions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__date_extensions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_attribute_model__ = __webpack_require__("../../../../../src/app/models/person-attribute.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_model__ = __webpack_require__("../../../../../src/app/models/address.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Person = (function (_super) {
    __extends(Person, _super);
    function Person(openmrsModel) {
        var _this = _super.call(this, openmrsModel) || this;
        _this._attributes = _this.openmrsModel.attributes;
        _this._convertedAttributes = [];
        return _this;
    }
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._openmrsModel.gender;
        },
        set: function (v) {
            this._openmrsModel.gender = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._openmrsModel.age;
        },
        set: function (v) {
            this._openmrsModel.age = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthdate", {
        get: function () {
            if (this._birthdate === null || this._birthdate === undefined) {
                this._birthdate = new Date(this._openmrsModel.birthdate);
            }
            return this._birthdate;
        },
        set: function (v) {
            this._openmrsModel.birthdate = v.toServerTimezoneString();
            this._birthdate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "preferredName", {
        get: function () {
            return this._openmrsModel.preferredName;
        },
        set: function (v) {
            this._openmrsModel.preferredName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "attributes", {
        get: function () {
            if (this._attributes === null || this._attributes === undefined) {
                this.initializeNavigationProperty('');
                this._attributes = new __WEBPACK_IMPORTED_MODULE_3__person_attribute_model__["a" /* PersonAttribute */](this._openmrsModel.attributes);
            }
            return this._attributes;
        },
        set: function (v) {
            this._openmrsModel.attributes = v.openmrsModel;
            this._attributes = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "healthCenter", {
        get: function () {
            var healthCenterPersonAttributeTypeUuid = '8d87236c-c2cc-11de-8d13-0010c6dffd0f';
            if (this._attributes) {
                var location_1 = this.getPersonAttribute(healthCenterPersonAttributeTypeUuid);
                if (location_1) {
                    return location_1.display;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "nextofkinPhoneNumber", {
        get: function () {
            var nextofkinPhoneNumberPersonAttributeTypeUuid = 'a657a4f1-9c0f-444b-a1fd-445bb91dd12d';
            if (this._attributes) {
                var nextofkinPhoneNumber = this.getPersonAttribute(nextofkinPhoneNumberPersonAttributeTypeUuid);
                if (nextofkinPhoneNumber) {
                    return nextofkinPhoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "patnerPhoneNumber", {
        get: function () {
            var patnerPhoneNumberPersonAttributeTypeUuid = 'b0a08406-09c0-4f8b-8cb5-b22b6d4a8e46';
            if (this._attributes) {
                var patnerPhoneNumber = this.getPersonAttribute(patnerPhoneNumberPersonAttributeTypeUuid);
                if (patnerPhoneNumber) {
                    return patnerPhoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "alternativePhoneNumber", {
        get: function () {
            var alternativePhoneNumberPersonAttributeTypeUuid = 'c725f524-c14a-4468-ac19-4a0e6661c930';
            if (this._attributes) {
                var alternativePhoneNumber = this.getPersonAttribute(alternativePhoneNumberPersonAttributeTypeUuid);
                if (alternativePhoneNumber) {
                    return alternativePhoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "patientPhoneNumber", {
        get: function () {
            var phoneNumberPersonAttributeTypeUuid = '72a759a8-1359-11df-a1f1-0026b9348838';
            if (this._attributes) {
                var phoneNumber = this.getPersonAttribute(phoneNumberPersonAttributeTypeUuid);
                if (phoneNumber) {
                    return phoneNumber;
                }
                else {
                    return '';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "contacts", {
        get: function () {
            var phoneNumberPersonAttributeTypeUuid = '72a759a8-1359-11df-a1f1-0026b9348838';
            var patnerPhoneNumberPersonAttributeTypeUuid = 'b0a08406-09c0-4f8b-8cb5-b22b6d4a8e46';
            var alternativePhoneNumberPersonAttributeTypeUuid = 'c725f524-c14a-4468-ac19-4a0e6661c930';
            var nextofkinPhoneNumberPersonAttributeTypeUuid = 'a657a4f1-9c0f-444b-a1fd-445bb91dd12d';
            if (this._attributes) {
                var filteredContacts = void 0;
                var patnerPhoneNumber = this.getPersonAttribute(patnerPhoneNumberPersonAttributeTypeUuid);
                var patientPhoneNumber = this.getPersonAttribute(phoneNumberPersonAttributeTypeUuid);
                var alternativePhoneNumber = this.getPersonAttribute(alternativePhoneNumberPersonAttributeTypeUuid);
                var nextofkinPhoneNumber = this.getPersonAttribute(nextofkinPhoneNumberPersonAttributeTypeUuid);
                if ((patnerPhoneNumber) === undefined && (patientPhoneNumber) === undefined &&
                    (alternativePhoneNumber) === undefined && (nextofkinPhoneNumber) === undefined &&
                    (patientPhoneNumber) === undefined) {
                    if ((this._attributes)) {
                        filteredContacts = { 'default': this._attributes };
                    }
                    else {
                        filteredContacts = { 'default': '' };
                    }
                }
                else {
                    filteredContacts = {
                        patnerPhoneNumber: (patnerPhoneNumber),
                        patientPhoneNumber: (patientPhoneNumber),
                        alternativePhoneNumber: (alternativePhoneNumber),
                        nextofkinPhoneNumber: (nextofkinPhoneNumber)
                    };
                }
                return filteredContacts;
            }
            else {
                return this._attributes = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.getPersonAttribute = function (personAttributeTypeUuid) {
        if (this._attributes.length > 0) {
            for (var i in this._attributes) {
                if (this._attributes.hasOwnProperty(i)) {
                    var attr = this._attributes[i];
                    if (attr.attributeType && attr.attributeType.uuid === personAttributeTypeUuid) {
                        return attr.value;
                    }
                }
            }
        }
    };
    Object.defineProperty(Person.prototype, "addresses", {
        get: function () {
            if (this._address === null || this._address === undefined) {
                this.initializeNavigationProperty('');
                this._address = new __WEBPACK_IMPORTED_MODULE_4__address_model__["a" /* PersonAddress */](this._openmrsModel.addresses);
            }
            return this._address;
        },
        set: function (v) {
            this._openmrsModel.addresses = v.openmrsModel;
            this._address = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "preferredAddress", {
        get: function () {
            return this._openmrsModel.preferredAddress;
        },
        set: function (v) {
            this._openmrsModel.preferredAddress = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dead", {
        get: function () {
            return this._openmrsModel.dead;
        },
        set: function (v) {
            this._openmrsModel.dead = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "deathDate", {
        get: function () {
            return this._openmrsModel.deathDate;
        },
        set: function (v) {
            this._openmrsModel.deathDate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "causeOfDeath", {
        get: function () {
            if (this._openmrsModel.causeOfDeath) {
                return this._openmrsModel.causeOfDeath.display;
            }
            return '';
        },
        set: function (v) {
            this._openmrsModel.causeOfDeath = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "causeOfDeathUuId", {
        get: function () {
            if (this._openmrsModel.causeOfDeath) {
                return this._openmrsModel.causeOfDeath.uuid;
            }
            return '';
        },
        set: function (v) {
            this._openmrsModel.causeOfDeathUuId = v;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Person.prototype, "gender", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Person.prototype, "age", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], Person.prototype, "birthdate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(false, true),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Person.prototype, "preferredName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__person_attribute_model__["a" /* PersonAttribute */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__person_attribute_model__["a" /* PersonAttribute */]])
    ], Person.prototype, "attributes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(false, true),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Person.prototype, "preferredAddress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Person.prototype, "dead", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], Person.prototype, "deathDate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Person.prototype, "causeOfDeath", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__serializable_decorator__["a" /* serializable */])(true, false),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Person.prototype, "causeOfDeathUuId", null);
    return Person;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/models/serializable.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export METADATA_KEY_SERIALIZABLE */
/* harmony export (immutable) */ __webpack_exports__["a"] = serializable;
/* unused harmony export getSerializables */
/* harmony export (immutable) */ __webpack_exports__["b"] = serialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_extensions__ = __webpack_require__("../../../../../src/app/models/date.extensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_extensions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__date_extensions__);


var METADATA_KEY_SERIALIZABLE = 'SERIALIZABLE';
function serializable(addToNewPayload, addToUpdatePayload, name) {
    if (addToNewPayload === void 0) { addToNewPayload = true; }
    if (addToUpdatePayload === void 0) { addToUpdatePayload = true; }
    return function (target, key) {
        Reflect.defineMetadata(METADATA_KEY_SERIALIZABLE, {
            key: key,
            name: name || key,
            addToNewPayload: addToNewPayload,
            addToUpdatePayload: addToUpdatePayload
        }, target, key);
    };
}
function getSerializables(target) {
    var serializables = [];
    for (var key in target) {
        var metadata = Reflect.getMetadata(METADATA_KEY_SERIALIZABLE, target, key);
        if (metadata) {
            serializables.push(metadata);
        }
    }
    return serializables;
}
function serialize(target, newPayload, prototype) {
    return getSerializables(prototype || target).reduce(function (prev, prop) {
        var isBaseModel = target[prop.key] instanceof __WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */];
        var baseModelVersion = target[prop.key];
        var isOpenmrsDate = target[prop.key] instanceof Date;
        var openmrsDate = target[prop.key];
        if (newPayload) {
            if (prop.addToNewPayload) {
                prev[prop.name] = isBaseModel || isOpenmrsDate ? (isOpenmrsDate ? openmrsDate.toServerTimezoneString()
                    : baseModelVersion.uuid) : target[prop.key];
            }
        }
        else {
            if (prop.addToUpdatePayload) {
                prev[prop.name] = isBaseModel || isOpenmrsDate ? (isOpenmrsDate ? openmrsDate.toServerTimezoneString()
                    : baseModelVersion.uuid) : target[prop.key];
            }
        }
        return prev;
    }, {});
}


/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model_model__ = __webpack_require__("../../../../../src/app/models/base-model.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var User = (function (_super) {
    __extends(User, _super);
    function User(openmrsModel) {
        return _super.call(this, openmrsModel) || this;
    }
    Object.defineProperty(User.prototype, "roleDisplay", {
        get: function () {
            var roleDisplay = '';
            var roles = this._openmrsModel.roles;
            if (roles && roles.length > 0) {
                var counter_1 = 0;
                __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](roles, function (role) {
                    if (counter_1 <= 1) {
                        roleDisplay = roleDisplay.length === 0 ?
                            role.display : roleDisplay + ', ' + role.display;
                    }
                    counter_1++;
                });
            }
            return roleDisplay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "roles", {
        get: function () {
            var roles = this._openmrsModel.roles;
            if (roles && roles.length > 0) {
                return roles;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "personUuid", {
        get: function () {
            var personUuid = this._openmrsModel.person.uuid;
            if (personUuid) {
                return personUuid;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "person", {
        get: function () {
            return this._openmrsModel.person;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(__WEBPACK_IMPORTED_MODULE_0__base_model_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/no-content/no-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //selector: 'no-content',
            template: "\n    <div id=\"page-content-wrapper\">\n\t\t\t<div id=\"page-content\">            \n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div id=\"page-title\">\n\t\t\t\t\t\t<h2>MRS BORA 404 ERROR</h2>\n\t\t\t\t\t\t<p>Error Report</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<h1>404: Page Not Found</h1>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n  "
        })
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>NOTIFICATIONS</b></h5><div class=\"divider\"></div>\r\n<br>\r\n<br>\r\n\r\n<div class=\"row col-md-12\">\r\n\t<div id=\"page-title\">\r\n\t\t<h2>MRS BORA 404 ERROR</h2>\r\n\t\t<p>Error Report</p>\r\n\t</div>\r\n\r\n\t<h1>404: Page Not Found</h1>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")]
        })
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/openmrs-api/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_app_settings_service__ = __webpack_require__("../../../../../src/app/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/openmrs-api/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_local_storage_service__ = __webpack_require__("../../../../../src/app/utils/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_session_storage_service__ = __webpack_require__("../../../../../src/app/utils/session-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(appSettingsService, localStorageService, sessionStorageService, sessionService, _cookieService) {
        this.appSettingsService = appSettingsService;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.sessionService = sessionService;
        this._cookieService = _cookieService;
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        var _this = this;
        var credentials = {
            username: username,
            password: password
        };
        var request = this.sessionService.getSession(credentials);
        request
            .subscribe(function (response) {
            var data = response.json();
            if (data.authenticated) {
                _this.setCredentials(username, password);
                // store logged in user details in session storage
                var user = data.user;
                _this.storeUser(user);
            }
        });
        return request;
    };
    AuthenticationService.prototype.logOut = function () {
        var _this = this;
        var response = this.sessionService.deleteSession();
        response
            .subscribe(function (res) {
            _this.clearSessionCache();
        }, function (error) {
            _this.clearSessionCache();
        });
        return response;
    };
    AuthenticationService.prototype.clearSessionCache = function () {
        this.clearLoginAlertCookies();
        this.clearCredentials();
        this.clearUserDetails();
    };
    // This will clear motd alert cookies set  at every log in
    AuthenticationService.prototype.clearLoginAlertCookies = function () {
        var cookieKey = 'motdLoginCookie';
        this._cookieService.remove(cookieKey);
    };
    AuthenticationService.prototype.setCredentials = function (username, password) {
        var base64 = btoa(username + ':' + password);
        this.sessionStorageService.setItem(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].CREDENTIALS_KEY, base64);
    };
    AuthenticationService.prototype.clearCredentials = function () {
        this.sessionStorageService.remove(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].CREDENTIALS_KEY);
    };
    AuthenticationService.prototype.storeUser = function (user) {
        this.sessionStorageService.setObject(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].USER_KEY, user);
    };
    AuthenticationService.prototype.clearUserDetails = function () {
        this.sessionStorageService.remove(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].USER_KEY);
    };
    AuthenticationService.prototype.setUserRoles = function (userRoles) {
        this.sessionStorageService.setItem(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].USER_ROLES, userRoles.toString());
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_app_settings_service__["a" /* AppSettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__utils_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_4__utils_session_storage_service__["a" /* SessionStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/openmrs-api/patient-resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_app_settings_service__ = __webpack_require__("../../../../../src/app/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO inject service
var PatientResourceService = (function () {
    function PatientResourceService(http, appSettingsService) {
        this.http = http;
        this.appSettingsService = appSettingsService;
        this.v = 'custom:(uuid,display,' +
            'identifiers:(identifier,uuid,preferred,location:(uuid,name),' +
            'identifierType:(uuid,name,format,formatDescription,checkDigit,validator)),' +
            'person:(uuid,display,gender,birthdate,dead,age,deathDate,' +
            'causeOfDeath,preferredName:(uuid,preferred,givenName,middleName,familyName),'
            + 'attributes,preferredAddress:(uuid,preferred,address1,address2,cityVillage,' +
            'stateProvince,country,postalCode,countyDistrict,address3,address4,address5,address6)))';
    }
    PatientResourceService.prototype.getUrl = function () {
        return this.appSettingsService.getOpenmrsRestbaseurl().trim() + 'patient';
    };
    PatientResourceService.prototype.searchPatient = function (searchText, cached, v) {
        if (cached === void 0) { cached = false; }
        if (v === void 0) { v = null; }
        var url = this.getUrl();
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        params.set('q', searchText);
        params.set('v', (v && v.length > 0) ? v : this.v);
        return this.http.get(url, {
            search: params
        })
            .map(function (response) {
            return response.json().results;
        });
    };
    PatientResourceService.prototype.getPatientByUuid = function (uuid, cached, v) {
        if (cached === void 0) { cached = false; }
        if (v === void 0) { v = null; }
        var url = this.getUrl();
        url += '/' + uuid;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        params.set('v', (v && v.length > 0) ? v : this.v);
        return this.http.get(url, {
            search: params
        }).map(function (response) {
            return response.json();
        });
    };
    PatientResourceService.prototype.saveUpdatePatientIdentifier = function (uuid, identifierUuid, payload) {
        if (!payload || !uuid) {
            return null;
        }
        var url = this.getUrl() + '/' + uuid + '/' + 'identifier' + '/' + identifierUuid;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, JSON.stringify(payload), options)
            .map(function (response) {
            return response.json().patient;
        });
    };
    PatientResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__settings_app_settings_service__["a" /* AppSettingsService */]])
    ], PatientResourceService);
    return PatientResourceService;
}());



/***/ }),

/***/ "../../../../../src/app/openmrs-api/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_app_settings_service__ = __webpack_require__("../../../../../src/app/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO inject service
var SessionService = (function () {
    function SessionService(http, appSettingsService) {
        this.http = http;
        this.appSettingsService = appSettingsService;
    }
    SessionService.prototype.getUrl = function () {
        return this.appSettingsService.getOpenmrsRestbaseurl().trim() + 'session';
    };
    SessionService.prototype.getSession = function (credentials) {
        if (credentials === void 0) { credentials = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (credentials && credentials.username) {
            var base64 = btoa(credentials.username + ':' + credentials.password);
            headers.append('Authorization', 'Basic ' + base64);
        }
        var url = this.getUrl();
        return this.http.get(url, {
            headers: headers
        });
    };
    SessionService.prototype.deleteSession = function () {
        var url = this.getUrl();
        return this.http.delete(url, {});
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__settings_app_settings_service__["a" /* AppSettingsService */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "../../../../../src/app/openmrs-api/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_session_storage_service__ = __webpack_require__("../../../../../src/app/utils/session-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_app_settings_service__ = __webpack_require__("../../../../../src/app/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(sessionStorageService, _http, appSettingsService) {
        this.sessionStorageService = sessionStorageService;
        this._http = _http;
        this.appSettingsService = appSettingsService;
        this.baseOpenMrsUrl = this.getOpenMrsBaseUrl();
        this.v = 'default';
    }
    UserService.prototype.getLoggedInUser = function () {
        var userObject = this.sessionStorageService.getObject(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].USER_KEY);
        return new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */](userObject);
    };
    // get all users
    UserService.prototype.getAllUsers = function () {
        var baseUrl = this.getOpenMrsBaseUrl();
        var url = baseUrl + 'user?v=custom:(uuid,display,person)';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(url, options)
            .map(function (response) {
            return response.json().results;
        });
    };
    UserService.prototype.getOpenMrsBaseUrl = function () {
        return this.appSettingsService.getOpenmrsRestbaseurl().trim();
    };
    UserService.prototype.searchUsers = function (searchText) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('q', searchText);
        params.set('v', 'default');
        var allCohortMembersUrl = this.baseOpenMrsUrl + 'user';
        return this._http.get(allCohortMembersUrl, {
            search: params
        })
            .map(function (response) {
            return response.json().results;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__utils_session_storage_service__["a" /* SessionStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__settings_app_settings_service__["a" /* AppSettingsService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/orders/drug-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/drug-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"example-box-wrapper\">\r\n        <div class=\"scroll-columns\">\r\n        \t<div class=\"col-md-12\">\r\n                <div class=\"tile-box bg-white content-box\">\r\n                    <div class=\"tile-content-wrapper\">\r\n                    \tLab Order Template\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/orders/drug-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DrugOrdersComponent = (function () {
    function DrugOrdersComponent() {
    }
    DrugOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/orders/drug-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/drug-orders.component.css")]
        })
    ], DrugOrdersComponent);
    return DrugOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/drugs-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/drugs-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>MRS BORA DRUGS DASHBOARD</h2>\r\n\t\t\t\t<p>Drug Orders Dashboard</p>\r\n\t\t\t</div>\r\n\r\n\t\t    <br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t            <div class=\"scroll-columns\">\r\n\r\n\t\t            \t<div class=\"col-md-12\">\r\n\t\t                    <div class=\"tile-box bg-white content-box\">\r\n\t\t                        <div class=\"tile-content-wrapper\">\r\n\r\n\t\t                        \t\t<div align=\"center\">\t\t                            \r\n\t\t\t                                <div class=\"content-box remove-border dashboard-buttons clearfix\">\r\n\t\t\t                                \t<a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-plus\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">New Order</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-green\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-file-text\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Order Status</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-orange\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-unsorted\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Sort</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-print\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Print</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-purple\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-linecons-megaphone\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Notifications</span>\r\n\t\t\t\t\t\t                        </a>\r\n\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-gears\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Settings</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                    </div>\r\n\t\t\t\t\t                \t</div>\r\n\t\t                           \r\n\t\t                        </div>\r\n\t\t                    </div>\r\n\t\t                </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>                \r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- <router-outlet></router-outlet> -->\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t    \t<div class=\"col-md-4\">\t\t    \t\r\n\t                <div class=\"input-group\">\r\n\t                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Patient Identifier or Patient Name\">\r\n\t                    <span class=\"input-group-btn\">\r\n\t                        <button class=\"btn btn-primary\" type=\"button\"><b>Search</b></button>\r\n\t                    </span>\r\n\t                </div>\r\n\t            </div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t            <div class=\"scroll-columns\">\r\n\t\t                <table class=\"table table-bordered table-striped table-condensed cf\">\r\n\t\t                    <thead class=\"cf\">\r\n\t\t                    <tr>\r\n\t\t                        <th><small>IDENTIFIER</small></th>\r\n\t\t\t\t\t\t\t    <th><small>GIVEN NAME</small></th>\r\n\t\t\t\t\t\t\t    <th><small>MIDDLE NAME</small></th>\r\n\t\t\t\t\t\t\t    <th><small>REGIMEN</small></th>\r\n\t\t\t\t\t\t\t    <th><small>ORDER STATUS</small></th>\r\n\t\t\t\t\t\t\t    <th><small>OPTIONS</small></th>\r\n\t\t                    </tr>\r\n\t\t                    </thead>\r\n\t\t                    <tbody>\r\n\t\t                    <tr>\r\n\t\t                        <td>KLM001</td>\r\n\t\t\t\t\t\t\t    <td>System Architect</td>\r\n\t\t\t\t\t\t\t    <td>Edinburgh</td>\r\n\t\t\t\t\t\t\t    <td>ATD + EFV</td>\r\n\t\t\t\t\t\t\t    <td>Pending</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/no-content\">View</a></span></td>\r\n\t\t                    </tr>\r\n\t\t                    </tbody>\r\n\t\t                </table>\r\n            \t\t</div>\r\n            \t</div>\r\n            </div>\t\t\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/orders/drugs-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugsDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DrugsDashboardComponent = (function () {
    function DrugsDashboardComponent() {
    }
    DrugsDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/orders/drugs-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/drugs-dashboard.component.css")]
        })
    ], DrugsDashboardComponent);
    return DrugsDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/lab-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/lab-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>MRS BORA LABORATORY DASHBOARD</h2>\r\n\t\t\t\t<p>Laboratory Dashboard</p>\r\n\t\t\t</div>\r\n\r\n\t\t    <br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t            <div class=\"scroll-columns\">\r\n\r\n\t\t            \t<div class=\"col-md-12\">\r\n\t\t                    <div class=\"tile-box bg-white content-box\">\r\n\t\t                        <div class=\"tile-content-wrapper\">\r\n\r\n\t\t                        \t\t<div align=\"center\">\t\t                            \r\n\t\t\t                                <div class=\"content-box remove-border dashboard-buttons clearfix\">\r\n\t\t\t                                \t<a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-plus\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">New Order</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-green\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-file-text\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Results</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-orange\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-unsorted\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Sort</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-print\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Print</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-purple\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-linecons-megaphone\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Notifications</span>\r\n\t\t\t\t\t\t                        </a>\r\n\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-gears\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Settings</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                    </div>\r\n\t\t\t\t\t                \t</div>\r\n\t\t                           \r\n\t\t                        </div>\r\n\t\t                    </div>\r\n\t\t                </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>                \r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- <router-outlet></router-outlet> -->\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t    \t<div class=\"col-md-4\">\t\t    \t\r\n\t                <div class=\"input-group\">\r\n\t                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Patient Identifier or Patient Name\">\r\n\t                    <span class=\"input-group-btn\">\r\n\t                        <button class=\"btn btn-primary\" type=\"button\"><b>Search</b></button>\r\n\t                    </span>\r\n\t                </div>\r\n\t            </div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t            <div class=\"scroll-columns\">\r\n\t\t                <table class=\"table table-bordered table-striped table-condensed cf\">\r\n\t\t                    <thead class=\"cf\">\r\n\t\t                    <tr>\r\n\t\t                        <th><small>IDENTIFIER</small></th>\r\n\t\t\t\t\t\t\t    <th><small>GIVEN NAME</small></th>\r\n\t\t\t\t\t\t\t    <th><small>MIDDLE NAME</small></th>\r\n\t\t\t\t\t\t\t    <th><small>LAB ORDER TYPE</small></th>\r\n\t\t\t\t\t\t\t    <th><small>RESULTS STATUS</small></th>\r\n\t\t\t\t\t\t\t    <th><small>OPTIONS</small></th>\r\n\t\t                    </tr>\r\n\t\t                    </thead>\r\n\t\t                    <tbody>\r\n\t\t                    <tr>\r\n\t\t                        <td>KLM001</td>\r\n\t\t\t\t\t\t\t    <td>System Architect</td>\r\n\t\t\t\t\t\t\t    <td>Edinburgh</td>\r\n\t\t\t\t\t\t\t    <td>VL</td>\r\n\t\t\t\t\t\t\t    <td>Pending</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/no-content\">View</a></span></td>\r\n\t\t                    </tr>\r\n\t\t                    </tbody>\r\n\t\t                </table>\r\n            \t\t</div>\r\n            \t</div>\r\n            </div>\t\t\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/orders/lab-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaboratoryDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LaboratoryDashboardComponent = (function () {
    function LaboratoryDashboardComponent() {
    }
    LaboratoryDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/orders/lab-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/lab-dashboard.component.css")]
        })
    ], LaboratoryDashboardComponent);
    return LaboratoryDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/patient-drug-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/patient-drug-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>PHARMACY</b></h5><div class=\"divider\"></div>\r\n<br>\r\n<br>\r\n\r\n<div class=\"row col-md-12\">\r\n        <div class=\"row col-md-6\">\r\n            <form class=\"form-horizontal row\" id=\"demo-form\" data-parsley-validate=\"\" novalidate=\"\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Request Type</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"selector\"><span>New/ Refill/ Regimen Change</span>\r\n                            <select name=\"\" class=\"custom-select\">\r\n                                <option>Option 1</option>\r\n                                <option>Option 2</option>\r\n                                <option>Option 3</option>\r\n                                <option>Option 4</option>\r\n                            </select>\r\n                            <i class=\"glyph-icon icon-caret-down\"></i>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"></label>\r\n                    <div class=\"col-sm-2\">\r\n                        \r\n                          <input type=\"checkbox\" class=\"form-check-input\">\r\n                          &nbsp;&nbsp;Urgent?\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Comments</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <textarea name=\"\" placeholder=\"Comments\" rows=\"3\" class=\"form-control textarea-xs\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"row col-md-6\">\r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"timeline-box timeline-box-left\">\r\n                    <div class=\"tl-row\">\r\n                        <div class=\"tl-item float-right\">\r\n                            <div class=\"tl-icon bg-red\">\r\n                                <i class=\"glyph-icon icon-toggle-on\"></i>\r\n                            </div>\r\n                            <div class=\"popover right\">\r\n                                <div class=\"arrow\"></div>\r\n                                <div class=\"popover-content\">\r\n                                    <div class=\"tl-label bs-label label-danger\">Regimen History</div>\r\n                                    <div class=\"tl-content\">\r\n                                        <a href=\"#\"><h5><font color=\"blue\"><u>NVP (Current)</u></font></h5></a><br>\r\n                                       <a href=\"#\"><h5><font color=\"blue\"><u>AZT + EFV (ended 12-Nov-2017)</u></font></h5></a><br>\r\n                                       <a href=\"#\"><h5><font color=\"blue\"><u>DT4 + NVP (ended 11-Mar-2012)</u></font></h5></a><br>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n\r\n<!--\r\n<div class=\"row col-md-6\">\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row col-md-6\">\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <button type=\"button\" class=\"btn btn-warning mrg20B collapsed\" data-toggle=\"collapse\" data-target=\"#demo-2\" aria-expanded=\"false\">\r\n                            <h5 class=\"mrg10A\">\r\n                                <i class=\"glyph-icon icon-bars\"></i> &nbsp;\r\n                                <b>Lab Results</b>\r\n                            </h5>\r\n                        </button>\r\n\r\n                        <div id=\"demo-2\" class=\"collapse\" aria-expanded=\"false\" style=\"height: 0px;\">                               \r\n                            <br>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"panel-body\">                            \r\n                                    <div class=\"example-box-wrapper\">\r\n                                        <div class=\"list-group\">\r\n                                            <a href=\"#\" class=\"list-group-item\">VL: 200dl</a>\r\n                                            <a href=\"#\" class=\"list-group-item\">TB: +ve</a>\r\n                                            <a href=\"#\" class=\"list-group-item\">Pregnancy : +ve</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/orders/patient-drug-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDrugOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientDrugOrdersComponent = (function () {
    function PatientDrugOrdersComponent() {
    }
    PatientDrugOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/orders/patient-drug-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/patient-drug-orders.component.css")]
        })
    ], PatientDrugOrdersComponent);
    return PatientDrugOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/patient-lab-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/patient-lab-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>LABORATORY</b></h5><div class=\"divider\"></div>\r\n<br>\r\n<br>\r\n\r\n<div class=\"row col-md-12\">\r\n        <div class=\"row col-md-6\">\r\n            <form class=\"form-horizontal row\" id=\"demo-form\" data-parsley-validate=\"\" novalidate=\"\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Request Type</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"selector\"><span>VL/Scrag/Urinalysis</span>\r\n                            <select name=\"\" class=\"custom-select\">\r\n                                <option>Option 1</option>\r\n                                <option>Option 2</option>\r\n                                <option>Option 3</option>\r\n                                <option>Option 4</option>\r\n                            </select>\r\n                            <i class=\"glyph-icon icon-caret-down\"></i>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"></label>\r\n                    <div class=\"col-sm-2\">\r\n                        \r\n                          <input type=\"checkbox\" class=\"form-check-input\">\r\n                          &nbsp;&nbsp;Urgent?\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Comments</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <textarea name=\"\" placeholder=\"Comments\" rows=\"3\" class=\"form-control textarea-xs\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"row col-md-6\">\r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"timeline-box timeline-box-left\">\r\n                    <div class=\"tl-row\">\r\n                        <div class=\"tl-item float-right\">\r\n                            <div class=\"tl-icon bg-red\">\r\n                                <i class=\"glyph-icon icon-toggle-on\"></i>\r\n                            </div>\r\n                            <div class=\"popover right\">\r\n                                <div class=\"arrow\"></div>\r\n                                <div class=\"popover-content\">\r\n                                    <div class=\"tl-label bs-label label-danger\">Laboratory Results</div>\r\n                                    <div class=\"tl-content\">\r\n                                       <a href=\"#\"><h5><font color=\"blue\"><u>VL : +200dl</u></font></h5></a><br>\r\n                                       <a href=\"#\"><h5><font color=\"blue\"><u>TB : +ve</u></font></h5></a><br>\r\n                                       <a href=\"#\"><h5><font color=\"blue\"><u>Scrag : +ve</u></font></h5></a><br>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n\r\n<!--\r\n<div class=\"row col-md-6\">\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row col-md-6\">\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <button type=\"button\" class=\"btn btn-warning mrg20B collapsed\" data-toggle=\"collapse\" data-target=\"#demo-2\" aria-expanded=\"false\">\r\n                            <h5 class=\"mrg10A\">\r\n                                <i class=\"glyph-icon icon-bars\"></i> &nbsp;\r\n                                <b>Lab Results</b>\r\n                            </h5>\r\n                        </button>\r\n\r\n                        <div id=\"demo-2\" class=\"collapse\" aria-expanded=\"false\" style=\"height: 0px;\">                               \r\n                            <br>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"panel-body\">                            \r\n                                    <div class=\"example-box-wrapper\">\r\n                                        <div class=\"list-group\">\r\n                                            <a href=\"#\" class=\"list-group-item\">VL: 200dl</a>\r\n                                            <a href=\"#\" class=\"list-group-item\">TB: +ve</a>\r\n                                            <a href=\"#\" class=\"list-group-item\">Pregnancy : +ve</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/orders/patient-lab-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientLabOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientLabOrdersComponent = (function () {
    function PatientLabOrdersComponent() {
    }
    PatientLabOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/orders/patient-lab-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/patient-lab-orders.component.css")]
        })
    ], PatientLabOrdersComponent);
    return PatientLabOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-encounters/clinical-encounters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-encounters/clinical-encounters.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>CLINICAL ENCOUNTERS</b></h5><div class=\"divider\"></div>\r\n<br>\r\n\r\n<div class=\"row\">   \r\n\r\n    <div class=\"col-md-3\">  \r\n    </div>\r\n    <div class=\"col-md-6\">    \r\n        <div class=\"list-group\">\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">New</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Follow-up</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">ART Refill</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">  \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-encounters/clinical-encounters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalEncountersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClinicalEncountersComponent = (function () {
    function ClinicalEncountersComponent() {
    }
    ClinicalEncountersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-encounters/clinical-encounters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-encounters/clinical-encounters.component.css")]
        })
    ], ClinicalEncountersComponent);
    return ClinicalEncountersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-clinical.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-clinical.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <div class=\"panel\">\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                Clinical Encounter Template\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-clinical.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientClinicalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientClinicalComponent = (function () {
    function PatientClinicalComponent() {
    }
    PatientClinicalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-encounters/patient-clinical.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-encounters/patient-clinical.component.css")]
        })
    ], PatientClinicalComponent);
    return PatientClinicalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-encounters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-encounters.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>ENCOUNTERS</b></h5><div class=\"divider\"></div>\r\n<br>\r\n\r\n<div class=\"col-md-3\">  \r\n</div>\r\n<div class=\"col-md-3\">    \r\n    <div class=\"tile-content-wrapper\">            \r\n        <div class=\"content-box remove-border dashboard-buttons clearfix\">\r\n            <a routerLink=\"/mrsbora/patient-dashboard/ssd-encounters\" class=\"btn vertical-button hover-black\" title=\"\">\r\n                <span class=\"glyph-icon icon-separator-vertical\">\r\n                     <i class=\"glyph-icon icon-male\"></i>\r\n                </span>\r\n                <span class=\"button-content\">SSD</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-3\">    \r\n    <div class=\"tile-content-wrapper\">            \r\n        <div class=\"content-box remove-border dashboard-buttons clearfix\">\r\n            <a routerLink=\"/mrsbora/patient-dashboard/clinical-encounters\" class=\"btn vertical-button hover-black\" title=\"\">\r\n                <span class=\"glyph-icon icon-separator-vertical\">\r\n                    <i class=\"glyph-icon icon-user-md\"></i>\r\n                </span>\r\n                <span class=\"button-content\">CLINICAL</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-3\">  \r\n</div>\r\n\r\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-encounters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientEncountersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientEncountersComponent = (function () {
    function PatientEncountersComponent(modalService) {
        this.modalService = modalService;
    }
    PatientEncountersComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PatientEncountersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-encounters/patient-encounters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-encounters/patient-encounters.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */]])
    ], PatientEncountersComponent);
    return PatientEncountersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"example-box-wrapper\">\r\n        <div class=\"scroll-columns\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"tile-box bg-white content-box\">\r\n                    <div class=\"tile-content-wrapper\">\r\n                        SSD Department Template (Social & Economic History)\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientHistoryComponent = (function () {
    function PatientHistoryComponent() {
    }
    PatientHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-encounters/patient-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-encounters/patient-history.component.css")]
        })
    ], PatientHistoryComponent);
    return PatientHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-triage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-triage.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>TRIAGE</b></h5><div class=\"divider\"></div>\r\n<br>\r\n\r\n<div class=\"row col-md-12\">\r\n    <form class=\"form-horizontal bordered-row\" id=\"demo-form\" data-parsley-validate=\"\" novalidate=\"\">\r\n\r\n        \r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Temperature</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Temperature\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Pulse</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Pulse\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Respiratory rate</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Respiratory rate\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>BP</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"BP\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Weight</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Weight\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Height</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Height\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>BMI</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"BMI\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Z-Score</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Z-score\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>MUAC</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"MUAC\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-3 control-label\"><small>Head Circum.</small></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Head circumference\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-encounters/patient-triage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientTriageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientTriageComponent = (function () {
    function PatientTriageComponent() {
    }
    PatientTriageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-encounters/patient-triage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-encounters/patient-triage.component.css")]
        })
    ], PatientTriageComponent);
    return PatientTriageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-encounters/ssd-encounters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-encounters/ssd-encounters.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>SSD ENCOUNTERS</b></h5><div class=\"divider\"></div>\r\n<br>\r\n\r\n<div class=\"row\">   \r\n\r\n    <div class=\"col-md-3\">  \r\n    </div>\r\n    <div class=\"col-md-6\">    \r\n        <div class=\"list-group\">\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Enrollment</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">ART Preparation</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Adherence Counselling</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Follow-up</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Home Visits</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Missed Appointments</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Defaulters Matrix</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">  \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-encounters/ssd-encounters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsdEncountersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SsdEncountersComponent = (function () {
    function SsdEncountersComponent() {
    }
    SsdEncountersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-encounters/ssd-encounters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-encounters/ssd-encounters.component.css")]
        })
    ], SsdEncountersComponent);
    return SsdEncountersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-new/patient-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-new/patient-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>MRS BORA NEW PATIENT</h2>\r\n\t\t\t\t<p>New Patient</p>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"row col-md-12\">\r\n\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t    <div class=\"panel-body\">\r\n\t\t\t\t        \r\n\t\t\t\t        <div class=\"example-box-wrapper\">\r\n\t\t\t\t            <form class=\"form-horizontal bordered-row\" id=\"demo-form\" data-parsley-validate=\"\" novalidate=\"\">\r\n\t\t\t\t                <div class=\"row\">\r\n\t\t\t\t                    <div class=\"col-md-9\">\r\n\t\t\t\t                        <div class=\"form-group\">\r\n\t\t\t\t                            <label class=\"col-sm-3 control-label\"><small>Name </small></label>\r\n\t\t\t\t                            <div class=\"col-sm-2\">\r\n\t\t\t\t                                <input type=\"text\" placeholder=\"First Name\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n\t\t\t\t                            </div>\r\n\t\t\t\t                            <div class=\"col-sm-2\">\r\n\t\t\t\t                                <input type=\"text\" placeholder=\"Middle Name\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n\t\t\t\t                            </div>\r\n\t\t\t\t                            <div class=\"col-sm-2\">\r\n\t\t\t\t                                <input type=\"text\" placeholder=\"Last Name\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n\t\t\t\t                            </div>\r\n\t\t\t\t                        </div>\r\n\r\n\t\t\t\t                        <div class=\"form-group\">\r\n\t\t\t\t                            <label class=\"col-sm-3 control-label\"><small>ID Number</small></label>\r\n\t\t\t\t                            <div class=\"col-sm-6\">\r\n\t\t\t\t                                <input type=\"text\" placeholder=\"ID Number\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n\t\t\t\t                            </div>\r\n\t\t\t\t                        </div>\r\n\r\n\t\t\t\t                        <div class=\"form-group\">\r\n\t\t\t\t                            <label class=\"col-sm-3 control-label\"><small>Age</small></label>\r\n\t\t\t\t                            <div class=\"col-sm-6\">\r\n\t\t\t\t                                <input type=\"text\" placeholder=\"Age\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n\t\t\t\t                            </div>\r\n\t\t\t\t                        </div>\r\n\r\n\t\t\t\t                        <div class=\"form-group\">\r\n\t\t\t\t                            <label class=\"col-sm-3 control-label\"><small>Address</small></label>\r\n\t\t\t\t                            <div class=\"col-sm-6\">\r\n\t\t\t\t                                <input type=\"text\" placeholder=\"Address\" required=\"\" class=\"form-control\" data-parsley-id=\"6154\"><ul class=\"parsley-errors-list\" id=\"parsley-id-6154\"></ul>\r\n\t\t\t\t                            </div>\r\n\t\t\t\t                        </div>\r\n\r\n\t\t\t\t                        <div class=\"form-group\" align=\"center\">\r\n\t\t\t\t                            <label class=\"col-sm-3 control-label\"></label>\r\n\t\t\t\t                            <div class=\"col-sm-6\">\r\n\t\t\t\t                                <button class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t                        <i class=\"glyph-icon icon-save\"></i>\r\n\t\t\t\t\t\t\t                    </button>\r\n\t\t\t\t\t\t\t                    <button class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t                        <i class=\"glyph-icon icon-close\"></i>\r\n\t\t\t\t\t\t\t                    </button>\r\n\t\t\t\t                            </div>\r\n\t\t\t\t                        </div>\r\n\t\t\t\t                    </div>\r\n\t\t\t\t                    \r\n\t\t\t\t                </div>\r\n\t\t\t\t            </form>\r\n\t\t\t\t        </div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n\r\n                \r\n\r\n\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-new/patient-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientNewComponent = (function () {
    function PatientNewComponent() {
    }
    PatientNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-new/patient-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-new/patient-new.component.css")]
        })
    ], PatientNewComponent);
    return PatientNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-search/patient-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-search/patient-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>PATIENT DASHBOARD</h2>\r\n\t\t\t\t<p>Patient Dashboard</p>\r\n\t\t\t\t<br>\r\n\t\t\t\t<h5><font color=\"blue\"><b>MIGO HUSSEIN EL SAFRA (UPN: KLM0098-123)  |  Male  |  46 years  |  BMI : 123  |  Weight : 65kgs  |  Height : 1.7m</b></font></h5>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"list-group\">\r\n\t\t\t\t\t<a class=\"list-group-item \"><b>VISIT DETAILS : &nbsp;<font color=\"maroon\">6 MONTH TCA   |  ON SCHEDULE</font></b></a>\r\n                    <a class=\"list-group-item \"><b>VITALS : &nbsp;<font color=\"red\">BMI: 29   |  TEMP: 37  |  PULSE: 123pm</font></b></a>\r\n                    <a class=\"list-group-item \"><b>LAB RESULTS(PREVIOUS) : &nbsp;<font color=\"blue\">VL: 29  |  SCRAG: +ve </font></b></a>\r\n                    <a class=\"list-group-item \"><b>CRITICAL FINDINGS : &nbsp;<font color=\"orange\">Allergies: None</font></b></a>\r\n                </div>\r\n            </div>\t\r\n\t\t\t<br>\r\n\r\n\t\t    <br>\r\n\t\t\t<div class=\"row\"> \r\n\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t            <div class=\"scroll-columns\">\r\n\t\t            \t<div class=\"col-md-12\" style=\"height: 100px;\">\r\n\t\t                    <div class=\"tile-box bg-white content-box\">\r\n\t\t                        <div class=\"tile-content-wrapper\">\t\t                            \r\n\t                                <div class=\"content-box remove-border dashboard-buttons clearfix\">\r\n\r\n\t                                \t<a routerLink=\"/mrsbora/patient-dashboard/patient-triage\" class=\"btn btn-info vertical-button hover-green\" title=\"\">\r\n\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t                                <i class=\"glyph-icon icon-stethoscope\"></i>\r\n\t\t\t\t                            </span>\r\n\t\t\t\t                            <span class=\"button-content\">Triage</span>\r\n\t\t\t\t                        </a>\r\n\t\t\t\t                        <a routerLink=\"/mrsbora/patient-dashboard/patient-encounters\" class=\"btn btn-info vertical-button hover-green\" title=\"\">\r\n\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t                                <i class=\"glyph-icon icon-puzzle-piece\"></i>\r\n\t\t\t\t                            </span>\r\n\t\t\t\t                            <span class=\"button-content\">Encounters</span>\r\n\t\t\t\t                        </a>\r\n\t\t\t\t                        <a routerLink=\"/mrsbora/patient-dashboard/patient-lab-orders\" class=\"btn btn-info vertical-button hover-green\" title=\"\">\r\n\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t                                <i class=\"glyph-icon icon-flask\"></i>\r\n\t\t\t\t                            </span>\r\n\t\t\t\t                            <span class=\"button-content\">Laboratory</span>\r\n\t\t\t\t                        </a>\r\n\t\t\t\t                        <a routerLink=\"/mrsbora/patient-dashboard/patient-drug-orders\" class=\"btn  btn-info vertical-button hover-green\" title=\"\">\r\n\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t                                <i class=\"glyph-icon icon-adjust\"></i>\r\n\t\t\t\t                            </span>\r\n\t\t\t\t                            <span class=\"button-content\">Pharmacy</span>\r\n\t\t\t\t                        </a>\r\n\t\t\t\t                        <a routerLink=\"/mrsbora/patient-dashboard/reports\" class=\"btn  btn-info vertical-button hover-green\" title=\"\">\r\n\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t                                <i class=\"glyph-icon icon-bar-chart\"></i>\r\n\t\t\t\t                            </span>\r\n\t\t\t\t                            <span class=\"button-content\">Reports</span>\r\n\t\t\t\t                        </a>\r\n\t\t\t\t                        <a routerLink=\"/mrsbora/patient-dashboard/notification\" class=\"btn  btn-info vertical-button hover-green\" title=\"\">\r\n\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t                                <i class=\"glyph-icon icon-linecons-megaphone\"></i>\r\n\t\t\t\t                            </span>\r\n\t\t\t\t                            <span class=\"button-content\">Notifications</span>\r\n\t\t\t\t                        </a>\r\n\t\t\t\t                    </div>\r\n\t\t\t\t                    \r\n\t\t\t\t                    <!-- router-outlet -->\r\n\t\t\t\t                    <router-outlet></router-outlet>\t\t\r\n\r\n\t\t\t\t                </div>\r\n\t\t\t\t            </div>\r\n\t\t\t\t        </div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- <router-outlet></router-outlet>\t-->\t\t\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-search/patient-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientDashboardComponent = (function () {
    function PatientDashboardComponent() {
    }
    PatientDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-search/patient-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-search/patient-dashboard.component.css")]
        })
    ], PatientDashboardComponent);
    return PatientDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-search/patient-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient-search/patient-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>PATIENT SEARCH</h2>\r\n\t\t\t\t<p>Patient Search</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<h5 class=\"mrg10A\">6 results found</h5>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\r\n\t\t    <div class=\"row\">\r\n\t\t    \t<div class=\"col-md-4\">\t\t    \t\r\n\t                <div class=\"input-group\">\r\n\t                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"searchString\" placeholder=\"Enter Patient Identifier or Patient Name\">\r\n\t                    <span class=\"input-group-btn\">\r\n\t                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"loadPatient()\">\r\n\t                        \t<b><small>Search</small></b>\r\n\t                        </button>\r\n\t                    </span>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"col-md-4\">\r\n\t            \t<button class=\"btn btn-primary\" type=\"button\" routerLink=\"/mrsbora/patient-new\">\r\n                    \t <i class=\"glyph-icon icon-plus\"></i>&nbsp;<small>New Patient</small>\r\n                    </button>\r\n\t            </div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t            <div class=\"scroll-columns\">\r\n\t\t                <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n\t\t                    <thead class=\"cf\">\r\n\t\t                    <tr>\r\n\t\t                        <th><small>IDENTIFIER</small></th>\r\n\t\t\t\t\t\t\t    <th><small>GIVEN NAME</small></th>\r\n\t\t\t\t\t\t\t    <th><small>MIDDLE NAME</small></th>\r\n\t\t\t\t\t\t\t    <th><small>FAMILY NAME</small></th>\r\n\t\t\t\t\t\t\t    <th><small>AGE</small></th>\r\n\t\t\t\t\t\t\t    <th><small>GENDER</small></th>\r\n\t\t\t\t\t\t\t    <th><small>BIRTH DATE</small></th>\r\n\t\t\t\t\t\t\t    <th><small>OPTIONS</small></th>\r\n\t\t                    </tr>\r\n\t\t                    </thead>\r\n\t\t                    <tbody>\r\n\t\t                    <tr style=\"cursor: pointer;\">\r\n\t\t                        <td>Tiger Nixon</td>\r\n\t\t\t\t\t\t\t    <td>System Architect</td>\r\n\t\t\t\t\t\t\t    <td>Edinburgh</td>\r\n\t\t\t\t\t\t\t    <td>61</td>\r\n\t\t\t\t\t\t\t    <td>2011/04/25</td>\r\n\t\t\t\t\t\t\t    <td>$320,800</td>\r\n\t\t\t\t\t\t\t    <td>2011/04/25</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/reception/new\">Select</a></span></td>\r\n\t\t                    </tr>\r\n\t\t                    <tr style=\"cursor: pointer;\">\r\n\t\t\t\t\t\t\t    <td>Garrett Winters</td>\r\n\t\t\t\t\t\t\t    <td>Accountant</td>\r\n\t\t\t\t\t\t\t    <td>Tokyo</td>\r\n\t\t\t\t\t\t\t    <td>63</td>\r\n\t\t\t\t\t\t\t    <td>2011/07/25</td>\r\n\t\t\t\t\t\t\t    <td>$170,750</td>\r\n\t\t\t\t\t\t\t    <td>2011/04/25</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/reception/new\">Select</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t    <td>Garrett Winters</td>\r\n\t\t\t\t\t\t\t    <td>Accountant</td>\r\n\t\t\t\t\t\t\t    <td>Tokyo</td>\r\n\t\t\t\t\t\t\t    <td>63</td>\r\n\t\t\t\t\t\t\t    <td>2011/07/25</td>\r\n\t\t\t\t\t\t\t    <td>$170,750</td>\r\n\t\t\t\t\t\t\t    <td>2011/04/25</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/reception/new\">Select</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t    <td>Garrett Winters</td>\r\n\t\t\t\t\t\t\t    <td>Accountant</td>\r\n\t\t\t\t\t\t\t    <td>Tokyo</td>\r\n\t\t\t\t\t\t\t    <td>63</td>\r\n\t\t\t\t\t\t\t    <td>2011/07/25</td>\r\n\t\t\t\t\t\t\t    <td>$170,750</td>\r\n\t\t\t\t\t\t\t    <td>2011/04/25</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/reception/new\">Select</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t    <td>Garrett Winters</td>\r\n\t\t\t\t\t\t\t    <td>Accountant</td>\r\n\t\t\t\t\t\t\t    <td>Tokyo</td>\r\n\t\t\t\t\t\t\t    <td>63</td>\r\n\t\t\t\t\t\t\t    <td>2011/07/25</td>\r\n\t\t\t\t\t\t\t    <td>$170,750</td>\r\n\t\t\t\t\t\t\t    <td>2011/04/25</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/reception/new\">Select</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t    <td>Garrett Winters</td>\r\n\t\t\t\t\t\t\t    <td>Accountant</td>\r\n\t\t\t\t\t\t\t    <td>Tokyo</td>\r\n\t\t\t\t\t\t\t    <td>63</td>\r\n\t\t\t\t\t\t\t    <td>2011/07/25</td>\r\n\t\t\t\t\t\t\t    <td>$170,750</td>\r\n\t\t\t\t\t\t\t    <td>2011/04/25</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/reception/new\">Select</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>                \r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient-search/patient-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_search_service__ = __webpack_require__("../../../../../src/app/patient-search/patient-search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientSearchComponent = (function () {
    function PatientSearchComponent(patientSearchService) {
        this.patientSearchService = patientSearchService;
        this.isResetButton = true;
        this.isLoading = false;
        this.hasConductedSearch = false;
        this.page = 1;
        this.adjustInputMargin = '240px';
        this.title = 'Patient Search';
        this.errorMessage = '';
        /*
        patientSelected emits the patient object
        to other components so they can use
        the selected patient
    
        The hide Result property is passed down
        from parent to child to hide results of
        patient search
    
        */
        this.patientSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.hideResults = false;
    }
    Object.defineProperty(PatientSearchComponent.prototype, "searchString", {
        get: function () {
            return this._searchString;
        },
        set: function (v) {
            this._searchString = v;
            this.hasConductedSearch = false;
        },
        enumerable: true,
        configurable: true
    });
    PatientSearchComponent.prototype.ngOnInit = function () { };
    PatientSearchComponent.prototype.ngOnDestroy = function () { };
    PatientSearchComponent.prototype.onResultsFound = function (results) {
        if (results.length > 0) {
            this.patients = results;
            this.totalPatients = this.patients.length;
            this.hideResults = false;
        }
        else {
            this.patients = [];
            this.totalPatients = 0;
            this.hideResults = true;
        }
        // clear the search text
        this.searchString = '';
        this.hasConductedSearch = true;
    };
    PatientSearchComponent.prototype.onError = function (error) {
        console.log('Error in operation - ' + error);
    };
    PatientSearchComponent.prototype.loadPatient = function () {
        var _this = this;
        this.totalPatients = 0;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.searchString && this.searchString.length > 2) {
            this.isLoading = true;
            this.patients = [];
            this.errorMessage = '';
            this.subscription = this.patientSearchService.searchPatient(this.searchString, false)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.onResultsFound(data);
                _this.resetInputMargin();
                // app feature analytics
                // this.appFeatureAnalytics.trackEvent('Patient Search', 'Patients Searched', 'loadPatient');
            }, function (error) {
                _this.onError(error);
            });
        }
    };
    PatientSearchComponent.prototype.resetInputMargin = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PatientSearchComponent.prototype, "patientSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PatientSearchComponent.prototype, "hideResults", void 0);
    PatientSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/patient-search/patient-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient-search/patient-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__patient_search_service__["a" /* PatientSearchService */]])
    ], PatientSearchComponent);
    return PatientSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient-search/patient-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openmrs_api_patient_resource_service__ = __webpack_require__("../../../../../src/app/openmrs-api/patient-resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_patient_model__ = __webpack_require__("../../../../../src/app/models/patient.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientSearchService = (function () {
    function PatientSearchService(resouceService) {
        this.resouceService = resouceService;
        this.patientsSearchResults = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.patientsToBindRelationshipSearchResults = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.searchString = '';
        this.relationshipSearchString = '';
    }
    PatientSearchService.prototype.searchPatient = function (searchText, cached) {
        var _this = this;
        var patientsSearchResults = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Subject */]();
        this.resouceService.searchPatient(searchText.trim(), false)
            .subscribe(function (patients) {
            var mappedPatients = new Array();
            for (var _i = 0, patients_1 = patients; _i < patients_1.length; _i++) {
                var patient = patients_1[_i];
                mappedPatients.push(new __WEBPACK_IMPORTED_MODULE_3__models_patient_model__["a" /* Patient */](patient));
            }
            ;
            _this.searchString = searchText.trim();
            patientsSearchResults.next(mappedPatients);
            _this.patientsSearchResults.next(mappedPatients);
        }, function (error) {
            // console.log('error : ' + error);
            _this.patientsSearchResults.error(error); // test case that returns error
            patientsSearchResults.error(error);
        });
        return patientsSearchResults.asObservable();
    };
    PatientSearchService.prototype.searchPatientToBindRelationship = function (searchText, cached) {
        var _this = this;
        var patientsSearchResults = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Subject */]();
        this.resouceService.searchPatient(searchText.trim(), false)
            .subscribe(function (patients) {
            var mappedPatients = new Array();
            for (var _i = 0, patients_2 = patients; _i < patients_2.length; _i++) {
                var patient = patients_2[_i];
                mappedPatients.push(new __WEBPACK_IMPORTED_MODULE_3__models_patient_model__["a" /* Patient */](patient));
            }
            _this.relationshipSearchString = searchText.trim();
            patientsSearchResults.next(mappedPatients);
            _this.patientsToBindRelationshipSearchResults.next(mappedPatients);
        }, function (error) {
            _this.patientsToBindRelationshipSearchResults.error(error); // test case that returns error
            patientsSearchResults.error(error);
        });
        return patientsSearchResults.asObservable();
    };
    PatientSearchService.prototype.resetPatients = function () {
        this.patientsSearchResults.next(new Array());
    };
    PatientSearchService.prototype.resetRelationshipSearch = function () {
        this.patientsToBindRelationshipSearchResults.next(new Array());
    };
    PatientSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__openmrs_api_patient_resource_service__["a" /* PatientResourceService */]])
    ], PatientSearchService);
    return PatientSearchService;
}());



/***/ }),

/***/ "../../../../../src/app/reception/emergency.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/emergency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-bolt\"></i> &nbsp;\r\n                        <b>Emergency</b>\r\n                    </h5>               \r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                        <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                        <tr role=\"row\">\r\n                            <th>UPN</th>\r\n                            <th>Visit Date</th>\r\n                            <th>TCA</th>\r\n                            <th>Patient Name</th>\r\n                            <th>Options</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"odd\">\r\n                                <td>KLM-32890</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>KIMBERLY MIGO MIGO</td>\r\n                                <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n                        <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n                            <li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n                        </div>\r\n                        </div>\r\n                    \r\n                </div>                \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/emergency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionEmergencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionEmergencyComponent = (function () {
    function ReceptionEmergencyComponent() {
    }
    ReceptionEmergencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/emergency.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/emergency.component.css")]
        })
    ], ReceptionEmergencyComponent);
    return ReceptionEmergencyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/new-patients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/new-patients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-plus-square\"></i> &nbsp;\r\n                        <b>New Patients</b>\r\n                    </h5>               \r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                        <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                        <tr role=\"row\">\r\n                            <th>Visit ID</th>\r\n                            <th>Visit Type</th>\r\n                            <th>Visit Date</th>\r\n                            <th>Patient Name</th>\r\n                            <th>Options</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"odd\">\r\n                                <td>001</td>\r\n                                <td>6 MONTH TCA</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>MORRIS MUNDULI</td>\r\n                                <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n                        <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n                            <li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n                        </div>\r\n                        </div>\r\n                    \r\n                </div>                \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/new-patients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionNewPatientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionNewPatientsComponent = (function () {
    function ReceptionNewPatientsComponent() {
    }
    ReceptionNewPatientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/new-patients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/new-patients.component.css")]
        })
    ], ReceptionNewPatientsComponent);
    return ReceptionNewPatientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n\t<br>\r\n\t    <div class=\"panel-body\">\r\n\t        <div class=\"example-box-wrapper\">\r\n\t        \t<!--\r\n\t        \t<div class=\"row\">\r\n\t\t\t\t\t<h5 class=\"mrg10A\">\r\n\t\t\t\t\t\t<i class=\"glyph-icon icon-user\"></i> &nbsp;\r\n\t\t\t\t\t\t<b>Tiger Nixon | Male | 46 years</b>\r\n\t\t\t\t\t</h5>\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t-->\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<a class=\"btn btn-default btn-lg\" href=\"#\">Tiger Nixon | Male | 46 years <span class=\"bs-badge badge-default\"><i class=\"glyph-icon icon-user\"></i></span></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<div class=\"row  col-md-5\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t    <label>Visit Date</label>\r\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Visit Date\">\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t    <label>Visit Type</label>\r\n\t\t\t\t\t\t\t<div class=\"selector\" style=\"width: 96px;\"><span style=\"width: 74px;\">Option 1</span><select name=\"\" class=\"custom-select\">\r\n\t\t\t\t\t\t\t<option>Option 1</option>\r\n\t\t\t\t\t\t\t<option>Option 2</option>\r\n\t\t\t\t\t\t\t<option>Option 3</option>\r\n\t\t\t\t\t\t\t<option>Option 4</option>\r\n\t\t\t\t\t\t\t</select><i class=\"glyph-icon icon-caret-down\"></i></div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-check\">\r\n\t\t\t\t\t    <label class=\"form-check-label\">\r\n\t\t\t\t\t      <input type=\"checkbox\" class=\"form-check-input\">\r\n\t\t\t\t\t      &nbsp;&nbsp;Scheduled?\r\n\t\t\t\t\t    </label>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <br>\r\n\t\t\t\t\t  <div class=\"form-check\">\r\n\t\t\t\t\t    <label class=\"form-check-label\">\r\n\t\t\t\t\t      <input type=\"checkbox\" class=\"form-check-input\">\r\n\t\t\t\t\t      &nbsp;&nbsp;Emergency?\r\n\t\t\t\t\t    </label>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <br>\r\n\t\t\t\t\t  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\t\t\t\t\t  <br>\r\n\t\t\t\t\t  <br>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionNewComponent = (function () {
    function ReceptionNewComponent() {
    }
    ReceptionNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/new.component.css")]
        })
    ], ReceptionNewComponent);
    return ReceptionNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/queue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/queue.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>PATIENT QUEUE</h2>\r\n\t\t\t\t<p>Patient Queue</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<h5 class=\"mrg10A\">\r\n\t\t\t\t\t\t<i class=\"glyph-icon icon-bars\"></i> &nbsp;\r\n\t\t\t\t\t\t<b>36 Patients in Queue</b>\r\n\t\t\t\t\t</h5>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\r\n\t\t\t <div class=\"row\">\r\n\t\t    \t<div class=\"col-md-4\">\t\t    \t\r\n\t                <div class=\"input-group\">\r\n\t                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Patient Identifier or Patient Name\">\r\n\t                    <span class=\"input-group-btn\">\r\n\t                        <button class=\"btn btn-primary\" type=\"button\">\r\n\t                        \t<b><small>Search</small></b>\r\n\t                        </button>\r\n\t                    </span>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"col-md-4\">\r\n\t            \t<button class=\"btn btn-primary\" type=\"button\" routerLink=\"/mrsbora/patient-new\">\r\n                    \t <i class=\"glyph-icon icon-plus\"></i>&nbsp;<small>Add to Queue</small>\r\n                    </button>\r\n\t            </div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n    \t\t\t<div class=\"panel-body\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t\t\t<div class=\"list-group\">\r\n\t                        <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">1. MIGO HUSSEIN EL SAFRA (UPN: KLM0098-123)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:00:10 GMT-0400</span></a>\r\n\t                        <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">2. JOHN OMUGA  JACKTONE (UPN: KLM0328-121)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:12:10 GMT-0400</span></a>\r\n\t                        <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">3. QUEENSLY OLILO (UPN: KLM666-097)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:32:10 GMT-0400</span></a>\r\n\t                        <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">4. JANE SHERYL OJWANG (UPN: KLM0954-109)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:40:10 GMT-0400</span></a>\r\n\t                        <a routerLink=\"/mrsbora/patient-dashboard/\" class=\"list-group-item\">5. MURKOMEN AGATHA (UPN: KLM005-876)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:47:10 GMT-0400</span></a>\r\n\t                    </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/reception/queue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionQueueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionQueueComponent = (function () {
    function ReceptionQueueComponent() {
    }
    ReceptionQueueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/queue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/queue.component.css")]
        })
    ], ReceptionQueueComponent);
    return ReceptionQueueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/reception.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/reception.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>RECEPTION DASHBOARD</h2>\r\n\t\t\t\t<p>Reception Dashboard</p>\r\n\t\t\t</div>\r\n\t\t    <br>\r\n\r\n\t\t    <div class=\"row\">\r\n\t\t    \t<div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/reception/new-patients\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-info\">\r\n\t                    <span class=\"bs-badge badge-absolute\">15</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        New Patients\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-plus-square\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/reception/tb\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-primary\">\r\n\t                    <span class=\"bs-badge badge-absolute\">5</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        TB Patients\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-user-md\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/reception/scheduled\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-success\">\r\n\t                    <span class=\"bs-badge badge-absolute\">26</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Scheduled\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-hand-o-up\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/reception/unscheduled\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-warning\">\r\n\t                    <span class=\"bs-badge badge-absolute\">4</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Unscheduled\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-hand-o-down\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/reception/emergency\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-danger\">\r\n\t                    <span class=\"bs-badge badge-absolute\">5</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Emergency\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-bolt\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\r\n\t            <div class=\"col-md-2\">\r\n\t                <a routerLink=\"/mrsbora/reception/reports\" title=\"Tile Shortcut\" class=\"tile-box tile-box-shortcut btn-black-opacity\">\r\n\t                    <span class=\"bs-badge badge-absolute\">5</span>\r\n\t                    <div class=\"tile-header\">\r\n\t                        Reports\r\n\t                    </div>\r\n\t                    <div class=\"tile-content-wrapper\">\r\n\t                        <i class=\"glyph-icon icon-area-chart\"></i>\r\n\t                    </div>\r\n\t                </a>\r\n\t            </div>\r\n\t\t    </div>\r\n\t\t    <br>\r\n\t\t    <br>\r\n\t\t\t\r\n\t\t\t<!--\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<a class=\"btn btn-default btn-lg\" href=\"#\">Tiger Nixon | Male | 46 years <span class=\"bs-badge badge-primary\"><i class=\"glyph-icon icon-user\"></i></span></a>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\t\t\t-->\t\r\n\r\n\t\t\t<router-outlet></router-outlet>\t\r\n\r\n\t\t\t<div class=\"row\">\r\n\t        \t<div class=\"panel\">\r\n\t\t            <div class=\"panel-body\">\r\n\t\t                <div class=\"example-box-wrapper\">\r\n\t\t                    <div class=\"row\">\r\n\r\n\t\t                        <div class=\"col-md-12\">\r\n\t\t                            <button type=\"button\" class=\"btn btn-info mrg20B collapsed\" data-toggle=\"collapse\" data-target=\"#demo-2\" aria-expanded=\"false\">\r\n\t\t                                <h5 class=\"mrg10A\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"glyph-icon icon-bars\"></i> &nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<b>Patients Queue</b>\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t                            </button>\r\n\r\n\t\t                            <div id=\"demo-2\" class=\"collapse\" aria-expanded=\"false\" style=\"height: 0px;\">                           \t\r\n                                \t\t<br>\r\n                                        <div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t    \t<div class=\"col-md-4\">\t\r\n\t\t\t\t\t\t\t\t\t    \t<div class=\"example-box-wrapper\">\r\n\t\t\t\t\t\t\t\t\t    \t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t                    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Patient Identifier or Patient Name\">\r\n\t\t\t\t\t\t\t\t                    <span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t                        <button class=\"btn btn-default btn-lg\" type=\"button\">\r\n\t\t\t\t\t\t\t\t                        \t<b><small>Search</small></b>\r\n\t\t\t\t\t\t\t\t                        </button>\r\n\t\t\t\t\t\t\t\t                    </span>\r\n\t\t\t\t\t\t\t\t                </div>\r\n\t\t\t\t\t\t\t\t\t    \t</div>\t    \t\r\n\t\t\t\t\t\t\t\t                \r\n\t\t\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t\t\t        </div>\r\n\r\n\t\t\t\t\t\t\t\t        <div class=\"row\">\r\n\t\t\t\t\t\t        \t\t\t<div class=\"panel-body\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"list-group\">\r\n\t\t\t\t\t\t\t\t                        <a href=\"#\" class=\"list-group-item\">1. MIGO HUSSEIN EL SAFRA (UPN: KLM0098-123)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:00:10 GMT-0400</span></a>\r\n\t\t\t\t\t\t\t\t                        <a href=\"#\" class=\"list-group-item\">2. JOHN OMUGA  JACKTONE (UPN: KLM0328-121)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:12:10 GMT-0400</span></a>\r\n\t\t\t\t\t\t\t\t                        <a href=\"#\" class=\"list-group-item\">3. QUEENSLY OLILO (UPN: KLM666-097)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:32:10 GMT-0400</span></a>\r\n\t\t\t\t\t\t\t\t                        <a href=\"#\" class=\"list-group-item\">4. JANE SHERYL OJWANG (UPN: KLM0954-109)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:40:10 GMT-0400</span></a>\r\n\t\t\t\t\t\t\t\t                        <a href=\"#\" class=\"list-group-item\">5. MURKOMEN AGATHA (UPN: KLM005-876)<span class=\"badge bg-azure\">Tue Jun 16 2009 10:47:10 GMT-0400</span></a>\r\n\t\t\t\t\t\t\t\t                    </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t                            </div>\r\n\t\t                        </div>\r\n\r\n\t\t                    </div>\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t        </div>\r\n\t        </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/reception.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionComponent = (function () {
    function ReceptionComponent() {
    }
    ReceptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/reception.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/reception.component.css")]
        })
    ], ReceptionComponent);
    return ReceptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-area-chart\"></i> &nbsp;\r\n                        <b>Reports</b>\r\n                    </h5>               \r\n                </div>\r\n                <br>\r\n\r\n                <div class=\"row\">\r\n\t\t\t\t\t<div class=\"content-box remove-border dashboard-buttons clearfix\">\r\n                    \t<a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n                            <span class=\"glyph-icon icon-separator-vertical\">\r\n                                <i class=\"glyph-icon icon-calendar\"></i>\r\n                            </span>\r\n                            <span class=\"button-content\">Visits</span>\r\n                        </a>\r\n                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-red\" title=\"\">\r\n                            <span class=\"glyph-icon icon-separator-vertical\">\r\n                                <i class=\"glyph-icon icon-close\"></i>\r\n                            </span>\r\n                            <span class=\"button-content\">Missed</span>\r\n                        </a> \r\n                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-black\" title=\"\">\r\n                            <span class=\"glyph-icon icon-separator-vertical\">\r\n                                <i class=\"glyph-icon icon-bell-slash\"></i>\r\n                            </span>\r\n                            <span class=\"button-content\">Defaulters</span>\r\n                        </a> \r\n                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-green\" title=\"\">\r\n                            <span class=\"glyph-icon icon-separator-vertical\">\r\n                                <i class=\"glyph-icon icon-step-backward\"></i>\r\n                            </span>\r\n                            <span class=\"button-content\">Returned</span>\r\n                        </a>  \r\n\r\n                    </div>\r\n\t\t\t\t</div>\r\n\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionReportsComponent = (function () {
    function ReceptionReportsComponent() {
    }
    ReceptionReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/reports.component.css")]
        })
    ], ReceptionReportsComponent);
    return ReceptionReportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/scheduled.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/scheduled.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-hand-o-up\"></i> &nbsp;\r\n                        <b>Scheduled</b>\r\n                    </h5>               \r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                        <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                        <tr role=\"row\">\r\n                            <th>UPN</th>\r\n                            <th>Visit Date</th>\r\n                            <th>TCA</th>\r\n                            <th>Patient Name</th>\r\n                            <th>Options</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"odd\">\r\n                                <td>KLM-32890</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>KIMBERLY MIGO MIGO</td>\r\n                                <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n                        <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n                            <li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n                        </div>\r\n                        </div>\r\n                    \r\n                </div>                \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/scheduled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionScheduledComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionScheduledComponent = (function () {
    function ReceptionScheduledComponent() {
    }
    ReceptionScheduledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/scheduled.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/scheduled.component.css")]
        })
    ], ReceptionScheduledComponent);
    return ReceptionScheduledComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/tb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/tb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n\t<br>\r\n\t    <div class=\"panel-body\">\t        \r\n\t        <div class=\"example-box-wrapper\">\r\n\t        \t<div class=\"row\">\r\n\t\t\t\t\t<h5 class=\"mrg10A\">\r\n\t\t\t\t\t\t<i class=\"glyph-icon icon-user-md\"></i> &nbsp;\r\n\t\t\t\t\t\t<b>TB Patients</b>\r\n\t\t\t\t\t</h5>\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t        \t<div class=\"row\">\r\n        \t\t\t<div class=\"panel-body\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t\t\t<div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n\t\t\t\t\t\t<table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr role=\"row\">\r\n\t\t\t\t\t\t\t<th>Visit ID</th>\r\n\t\t\t\t\t\t\t<th>Visit Type</th>\r\n\t\t\t\t\t\t\t<th>Visit Date</th>\r\n\t\t\t\t\t\t\t<th>Patient Name</th>\r\n\t\t\t\t\t\t\t<th>Options</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\r\n\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t    <td>001</td>\r\n\t\t\t\t\t\t\t    <td>6 MONTH TCA</td>\r\n\t\t\t\t\t\t\t    <td>2008/11/28</td>\r\n\t\t\t\t\t\t\t    <td>MORRIS MUNDULI</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t    <td>002</td>\r\n\t\t\t\t\t\t\t    <td>VMMC</td>\r\n\t\t\t\t\t\t\t    <td>2008/11/28</td>\r\n\t\t\t\t\t\t\t    <td>JAPHETH KOOME</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t    <td>003</td>\r\n\t\t\t\t\t\t\t    <td>6 MONTH TCA</td>\r\n\t\t\t\t\t\t\t    <td>2008/11/28</td>\r\n\t\t\t\t\t\t\t    <td>IRENE LESUDA</td>\r\n\t\t\t\t\t\t\t    <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t    </tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n\t\t\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t\t\t<li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n\t\t\t\t\t\t\t<li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n\t\t\t\t\t\t\t<li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n        \t\t\t\r\n        \t\t</div>                \r\n\t        </div>\r\n\t    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/tb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionTbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionTbComponent = (function () {
    function ReceptionTbComponent() {
    }
    ReceptionTbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/tb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/tb.component.css")]
        })
    ], ReceptionTbComponent);
    return ReceptionTbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reception/unscheduled.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reception/unscheduled.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <br>\r\n        <div class=\"panel-body\">            \r\n            <div class=\"example-box-wrapper\">\r\n                <div class=\"row\">\r\n                    <h5 class=\"mrg10A\">\r\n                        <i class=\"glyph-icon icon-hand-o-down\"></i> &nbsp;\r\n                        <b>Un-Scheduled</b>\r\n                    </h5>               \r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"panel-body\">                            \r\n                        <div class=\"example-box-wrapper\">\r\n                        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline\"><div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_length\" id=\"datatable-responsive_length\"><label><select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> records per page</label></div></div><div class=\"col-sm-6\"><div id=\"datatable-responsive_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-controls=\"datatable-responsive\"></label></div></div></div>\r\n                        <table id=\"datatable-responsive\" class=\"table table-striped table-bordered responsive no-wrap dataTable dtr-inline\" cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                        <tr role=\"row\">\r\n                            <th>UPN</th>\r\n                            <th>Visit Date</th>\r\n                            <th>TCA</th>\r\n                            <th>Patient Name</th>\r\n                            <th>Options</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"odd\">\r\n                                <td>KLM-89800</td>\r\n                                <td>2008/11/28</td>\r\n                                <td>2008/11/21</td>\r\n                                <td>MORRIS MUNDULI</td>\r\n                                <td><span><a routerLink=\"/mrsbora/no-content\">Details ...</a></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                        </table>\r\n                        <div class=\"row\"><div class=\"col-sm-6\"><div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 20 entries</div></div><div class=\"col-sm-6\"><div class=\"dataTables_paginate paging_bootstrap\" id=\"datatable-responsive_paginate\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"previous disabled\"><a routerLink=\"/mrsbora/no-content\">Previous</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/mrsbora/no-content\">1</a></li><li><a routerLink=\"/mrsbora/no-content\">2</a></li>\r\n                            <li class=\"next\"><a routerLink=\"/mrsbora/no-content\">Next</a></li></ul></div></div></div></div>\r\n                        </div>\r\n                        </div>\r\n                    \r\n                </div>                \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reception/unscheduled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceptionUnScheduledComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceptionUnScheduledComponent = (function () {
    function ReceptionUnScheduledComponent() {
    }
    ReceptionUnScheduledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reception/unscheduled.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reception/unscheduled.component.css")]
        })
    ], ReceptionUnScheduledComponent);
    return ReceptionUnScheduledComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/patient-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/patient-report.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h5><b>REPORTS</b></h5><div class=\"divider\"></div>\r\n<br>\r\n\r\n<div class=\"row\">   \r\n\r\n    <div class=\"col-md-3\">  \r\n    </div>\r\n    <div class=\"col-md-6\">    \r\n        <div class=\"list-group\">\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Cover Sheet</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Patient Level Reports</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">VL Trends</a>      \r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">CD4 Trends</a>\r\n        <a routerLink=\"/mrsbora/no-content\" class=\"list-group-item\">Family Table</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\">  \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reports/patient-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportPatientComponent = (function () {
    function ReportPatientComponent() {
    }
    ReportPatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reports/patient-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/patient-report.component.css")]
        })
    ], ReportPatientComponent);
    return ReportPatientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/report-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/report-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">            \r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"page-title\">\r\n\t\t\t\t<h2>MRS BORA REPORTS DASHBOARD</h2>\r\n\t\t\t\t<p>Reports Dashboard</p>\r\n\t\t\t</div>\r\n\r\n\t\t    <br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t            <div class=\"scroll-columns\">\r\n\r\n\t\t            \t<div class=\"col-md-12\">\r\n\t\t                    <div class=\"tile-box bg-white content-box\">\r\n\t\t                        <div class=\"tile-content-wrapper\">\r\n\r\n\t\t                        \t\t<div align=\"center\">\t\t                            \r\n\t\t\t                                <div class=\"content-box remove-border dashboard-buttons clearfix\">\r\n\t\t\t                                \t<a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-cubes\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Aggregate</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-green\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-cube\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Patient Level</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-orange\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-question\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Others</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-purple\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-linecons-megaphone\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Notifications</span>\r\n\t\t\t\t\t\t                        </a>\r\n\r\n\t\t\t\t\t\t                        <a routerLink=\"/mrsbora/no-content\" class=\"btn vertical-button hover-blue\" title=\"\">\r\n\t\t\t\t\t\t                            <span class=\"glyph-icon icon-separator-vertical\">\r\n\t\t\t\t\t\t                                <i class=\"glyph-icon icon-gears\"></i>\r\n\t\t\t\t\t\t                            </span>\r\n\t\t\t\t\t\t                            <span class=\"button-content\">Settings</span>\r\n\t\t\t\t\t\t                        </a>\r\n\t\t\t\t\t\t                    </div>\r\n\t\t\t\t\t                \t</div>\r\n\t\t                           \r\n\t\t                        </div>\r\n\t\t                    </div>\r\n\t\t                </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>                \r\n\t\t\t</div>\r\n\r\n\t\t\t<router-outlet></router-outlet>\t\t\t\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reports/report-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportDashboardComponent = (function () {
    function ReportDashboardComponent() {
    }
    ReportDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/reports/report-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/report-dashboard.component.css")]
        })
    ], ReportDashboardComponent);
    return ReportDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_login_component__ = __webpack_require__("../../../../../src/app/authenticate/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_clinical_clinical_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/clinical-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_clinical_queue_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_clinical_referrals_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/referrals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_clinical_lab_results_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/lab-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_clinical_emergency_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/emergency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_clinical_reports_component__ = __webpack_require__("../../../../../src/app/dashboard/clinical/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reception_reception_component__ = __webpack_require__("../../../../../src/app/reception/reception.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reception_new_component__ = __webpack_require__("../../../../../src/app/reception/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reception_new_patients_component__ = __webpack_require__("../../../../../src/app/reception/new-patients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reception_tb_component__ = __webpack_require__("../../../../../src/app/reception/tb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reception_scheduled_component__ = __webpack_require__("../../../../../src/app/reception/scheduled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reception_unscheduled_component__ = __webpack_require__("../../../../../src/app/reception/unscheduled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reception_emergency_component__ = __webpack_require__("../../../../../src/app/reception/emergency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reception_reports_component__ = __webpack_require__("../../../../../src/app/reception/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reception_queue_component__ = __webpack_require__("../../../../../src/app/reception/queue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__patient_search_patient_search_component__ = __webpack_require__("../../../../../src/app/patient-search/patient-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__patient_new_patient_new_component__ = __webpack_require__("../../../../../src/app/patient-new/patient-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__patient_search_patient_dashboard_component__ = __webpack_require__("../../../../../src/app/patient-search/patient-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__orders_patient_lab_orders_component__ = __webpack_require__("../../../../../src/app/orders/patient-lab-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__orders_patient_drug_orders_component__ = __webpack_require__("../../../../../src/app/orders/patient-drug-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__patient_encounters_patient_encounters_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-encounters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__patient_encounters_patient_triage_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-triage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__patient_encounters_patient_history_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__patient_encounters_patient_clinical_component__ = __webpack_require__("../../../../../src/app/patient-encounters/patient-clinical.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__patient_encounters_clinical_encounters_component__ = __webpack_require__("../../../../../src/app/patient-encounters/clinical-encounters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__patient_encounters_ssd_encounters_component__ = __webpack_require__("../../../../../src/app/patient-encounters/ssd-encounters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__orders_lab_dashboard_component__ = __webpack_require__("../../../../../src/app/orders/lab-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__orders_drug_orders_component__ = __webpack_require__("../../../../../src/app/orders/drug-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__orders_drugs_dashboard_component__ = __webpack_require__("../../../../../src/app/orders/drugs-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__no_content_no_content__ = __webpack_require__("../../../../../src/app/no-content/no-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__reports_report_dashboard_component__ = __webpack_require__("../../../../../src/app/reports/report-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__reports_patient_report_component__ = __webpack_require__("../../../../../src/app/reports/patient-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Queue Module
// Dashboard Module







// Reception Module









// Patient Module









//Encounters Module






// Reports Module


// Notification Module

var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'mrsbora', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'clinical', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_clinical_clinical_dashboard_component__["a" /* ClinicalDashboardComponent */],
                children: [
                    { path: 'queue', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_clinical_queue_component__["a" /* ClinicalQueueComponent */] },
                    { path: 'referrals', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_clinical_referrals_component__["a" /* ClinicalReferralsComponent */] },
                    { path: 'lab-results', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_clinical_lab_results_component__["a" /* ClinicalLabResultsComponent */] },
                    { path: 'emergency', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_clinical_emergency_component__["a" /* ClinicalEmergencyComponent */] },
                    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_clinical_reports_component__["a" /* ClinicalReportsComponent */] }
                ]
            },
            { path: 'reception', component: __WEBPACK_IMPORTED_MODULE_11__reception_reception_component__["a" /* ReceptionComponent */],
                children: [
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_12__reception_new_component__["a" /* ReceptionNewComponent */] },
                    { path: 'new-patients', component: __WEBPACK_IMPORTED_MODULE_13__reception_new_patients_component__["a" /* ReceptionNewPatientsComponent */] },
                    { path: 'tb', component: __WEBPACK_IMPORTED_MODULE_14__reception_tb_component__["a" /* ReceptionTbComponent */] },
                    { path: 'scheduled', component: __WEBPACK_IMPORTED_MODULE_15__reception_scheduled_component__["a" /* ReceptionScheduledComponent */] },
                    { path: 'unscheduled', component: __WEBPACK_IMPORTED_MODULE_16__reception_unscheduled_component__["a" /* ReceptionUnScheduledComponent */] },
                    { path: 'emergency', component: __WEBPACK_IMPORTED_MODULE_17__reception_emergency_component__["a" /* ReceptionEmergencyComponent */] },
                    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_18__reception_reports_component__["a" /* ReceptionReportsComponent */] }
                ]
            },
            { path: 'patient-search', component: __WEBPACK_IMPORTED_MODULE_20__patient_search_patient_search_component__["a" /* PatientSearchComponent */] },
            { path: 'patient-new', component: __WEBPACK_IMPORTED_MODULE_21__patient_new_patient_new_component__["a" /* PatientNewComponent */] },
            { path: 'patient-queue', component: __WEBPACK_IMPORTED_MODULE_19__reception_queue_component__["a" /* ReceptionQueueComponent */] },
            {
                path: 'patient-dashboard', component: __WEBPACK_IMPORTED_MODULE_22__patient_search_patient_dashboard_component__["a" /* PatientDashboardComponent */],
                children: [
                    { path: 'patient-lab-orders', component: __WEBPACK_IMPORTED_MODULE_23__orders_patient_lab_orders_component__["a" /* PatientLabOrdersComponent */] },
                    { path: 'patient-drug-orders', component: __WEBPACK_IMPORTED_MODULE_24__orders_patient_drug_orders_component__["a" /* PatientDrugOrdersComponent */] },
                    { path: 'patient-encounters', component: __WEBPACK_IMPORTED_MODULE_25__patient_encounters_patient_encounters_component__["a" /* PatientEncountersComponent */] },
                    { path: 'patient-triage', component: __WEBPACK_IMPORTED_MODULE_26__patient_encounters_patient_triage_component__["a" /* PatientTriageComponent */] },
                    { path: 'patient-history', component: __WEBPACK_IMPORTED_MODULE_27__patient_encounters_patient_history_component__["a" /* PatientHistoryComponent */] },
                    { path: 'patient-clinical', component: __WEBPACK_IMPORTED_MODULE_28__patient_encounters_patient_clinical_component__["a" /* PatientClinicalComponent */] },
                    { path: 'drug-orders', component: __WEBPACK_IMPORTED_MODULE_32__orders_drug_orders_component__["a" /* DrugOrdersComponent */] },
                    { path: 'ssd-encounters', component: __WEBPACK_IMPORTED_MODULE_30__patient_encounters_ssd_encounters_component__["a" /* SsdEncountersComponent */] },
                    { path: 'clinical-encounters', component: __WEBPACK_IMPORTED_MODULE_29__patient_encounters_clinical_encounters_component__["a" /* ClinicalEncountersComponent */] },
                    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_36__reports_patient_report_component__["a" /* ReportPatientComponent */] },
                    { path: 'notification', component: __WEBPACK_IMPORTED_MODULE_37__notification_notification_component__["a" /* NotificationComponent */] }
                ]
            },
            { path: 'lab-dashboard', component: __WEBPACK_IMPORTED_MODULE_31__orders_lab_dashboard_component__["a" /* LaboratoryDashboardComponent */] },
            { path: 'drugs-dashboard', component: __WEBPACK_IMPORTED_MODULE_33__orders_drugs_dashboard_component__["a" /* DrugsDashboardComponent */] },
            { path: 'report-dashboard', component: __WEBPACK_IMPORTED_MODULE_35__reports_report_dashboard_component__["a" /* ReportDashboardComponent */] },
            { path: 'no-content', component: __WEBPACK_IMPORTED_MODULE_34__no_content_no_content__["a" /* NoContentComponent */] }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__authenticate_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_34__no_content_no_content__["a" /* NoContentComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/settings/app-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_local_storage_service__ = __webpack_require__("../../../../../src/app/utils/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppSettingsService = (function () {
    function AppSettingsService(localStorageService) {
        this.localStorageService = localStorageService;
        this._openmrsServerUrls = [
            'http://localhost:8080/openmrs'
        ];
        this._etlServerUrls = [
            'http://localhost:8002/etl'
        ];
        this.templates = [];
        var cachedUrls = localStorageService.getObject(AppSettingsService_1.OPENMRS_LIST_STORAGE_KEY);
        if (cachedUrls) {
            this._openmrsServerUrls = cachedUrls;
        }
        else {
            localStorageService.setObject(AppSettingsService_1.OPENMRS_LIST_STORAGE_KEY, this.openmrsServerUrls);
        }
        var cachedUrl = localStorageService.getItem(AppSettingsService_1.OPENMRS_SERVER_KEY);
        if (cachedUrl) {
            this._openmrsServer = cachedUrl;
        }
        else {
            this.setOpenmrsServer(AppSettingsService_1.DEFAULT_OPENMRS_SERVER_URL);
        }
        cachedUrls = localStorageService.getItem(AppSettingsService_1.ETL_LIST_STORAGE_KEY);
        if (cachedUrls) {
            this._etlServerUrls = JSON.parse(cachedUrls);
        }
        else {
            localStorageService.setItem(AppSettingsService_1.ETL_LIST_STORAGE_KEY, JSON.stringify(this.etlServerUrls));
        }
        cachedUrl = localStorageService.getItem(AppSettingsService_1.ETL_SERVER_KEY);
        if (cachedUrl) {
            this._etlServer = cachedUrl;
        }
        else {
            this.setEtlServer(AppSettingsService_1.DEFAULT_ETL_SERVER_URL);
        }
    }
    AppSettingsService_1 = AppSettingsService;
    Object.defineProperty(AppSettingsService.prototype, "openmrsServerUrls", {
        get: function () {
            return this._openmrsServerUrls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettingsService.prototype, "etlServerUrls", {
        get: function () {
            return this._etlServerUrls;
        },
        enumerable: true,
        configurable: true
    });
    AppSettingsService.prototype.getServerTemplates = function () {
        return this.templates;
    };
    AppSettingsService.prototype.getOpenmrsServer = function () {
        return this.localStorageService
            .getItem(AppSettingsService_1.OPENMRS_SERVER_KEY) || this._openmrsServer;
    };
    AppSettingsService.prototype.setOpenmrsServer = function (value) {
        if (this._openmrsServerUrls.indexOf(value) === -1) {
            this.addOpenmrsUrl(value);
        }
        this.localStorageService.setItem(AppSettingsService_1.OPENMRS_SERVER_KEY, value);
        this._openmrsServer = value;
    };
    AppSettingsService.prototype.getEtlServer = function () {
        return this.localStorageService.getItem(AppSettingsService_1.ETL_SERVER_KEY) || this._etlServer;
    };
    AppSettingsService.prototype.setEtlServer = function (value) {
        if (this._etlServerUrls.indexOf(value) === -1) {
            this.addEtlUrl(value);
        }
        this.localStorageService.setItem(AppSettingsService_1.ETL_SERVER_KEY, value);
        this._etlServer = value;
    };
    AppSettingsService.prototype.addAndSetUrl = function (url, urlType) {
        if (urlType === void 0) { urlType = 'openmrs'; }
        if (urlType === 'etl') {
            this.addEtlUrl(url);
            this.setEtlServer(url);
        }
        else {
            this.addOpenmrsUrl(url);
            this.setOpenmrsServer(url);
        }
    };
    AppSettingsService.prototype.addEtlUrl = function (url) {
        this.etlServerUrls.push(url);
        this.localStorageService.setObject(AppSettingsService_1.ETL_LIST_STORAGE_KEY, this.etlServerUrls);
    };
    AppSettingsService.prototype.addOpenmrsUrl = function (url) {
        this.openmrsServerUrls.push(url);
        this.localStorageService.setObject(AppSettingsService_1.OPENMRS_LIST_STORAGE_KEY, this.openmrsServerUrls);
    };
    AppSettingsService.prototype.getOpenmrsRestbaseurl = function () {
        if (this.getOpenmrsServer().endsWith('/')) {
            return this.getOpenmrsServer() + AppSettingsService_1.OPENMRS_REST_SUFFIX;
        }
        else {
            return this.getOpenmrsServer() + '/' + AppSettingsService_1.OPENMRS_REST_SUFFIX;
        }
    };
    AppSettingsService.prototype.getEtlRestbaseurl = function () {
        if (this.getEtlServer().endsWith('/')) {
            return this.getEtlServer();
        }
        else {
            return this.getEtlServer() + '/';
        }
    };
    AppSettingsService.DEFAULT_OPENMRS_SERVER_URL = 'http://localhost:8080/openmrs';
    AppSettingsService.DEFAULT_ETL_SERVER_URL = 'http://localhost:8080/openmrs/etl';
    AppSettingsService.OPENMRS_LIST_STORAGE_KEY = 'appSettings.openmrsServersList';
    AppSettingsService.ETL_LIST_STORAGE_KEY = 'appSettings.etlServersList';
    AppSettingsService.OPENMRS_SERVER_KEY = 'appSettings.openmrsServer';
    AppSettingsService.ETL_SERVER_KEY = 'appSettings.etlServer';
    AppSettingsService.OPENMRS_REST_SUFFIX = 'ws/rest/v1/';
    AppSettingsService = AppSettingsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_local_storage_service__["a" /* LocalStorageService */]])
    ], AppSettingsService);
    return AppSettingsService;
    var AppSettingsService_1;
}());



/***/ }),

/***/ "../../../../../src/app/utils/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    Constants.CREDENTIALS_KEY = 'auth.credentials';
    Constants.USER_KEY = 'user';
    Constants.USER_ROLES = 'userroles';
    return Constants;
}());



/***/ }),

/***/ "../../../../../src/app/utils/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (keyName) {
        return window.localStorage.getItem(keyName);
    };
    LocalStorageService.prototype.setItem = function (keyName, value) {
        window.localStorage.setItem(keyName, value);
    };
    LocalStorageService.prototype.getObject = function (keyName) {
        var stored = window.localStorage.getItem(keyName);
        try {
            var object = JSON.parse(stored);
            return object;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
    LocalStorageService.prototype.setObject = function (keyName, value) {
        window.localStorage.setItem(keyName, JSON.stringify(value));
    };
    LocalStorageService.prototype.remove = function (keyName) {
        window.localStorage.removeItem(keyName);
    };
    LocalStorageService.prototype.clear = function () {
        window.localStorage.clear();
    };
    Object.defineProperty(LocalStorageService.prototype, "storageLength", {
        get: function () {
            return window.localStorage.length;
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/session-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SessionStorageService = (function () {
    function SessionStorageService() {
    }
    SessionStorageService.prototype.getItem = function (keyName) {
        return window.sessionStorage.getItem(keyName);
    };
    SessionStorageService.prototype.setItem = function (keyName, value) {
        window.sessionStorage.setItem(keyName, value);
    };
    SessionStorageService.prototype.getObject = function (keyName) {
        var stored = window.sessionStorage.getItem(keyName);
        try {
            var object = JSON.parse(stored);
            return object;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
    SessionStorageService.prototype.setObject = function (keyName, value) {
        window.sessionStorage.setItem(keyName, JSON.stringify(value));
    };
    SessionStorageService.prototype.remove = function (keyName) {
        window.sessionStorage.removeItem(keyName);
    };
    SessionStorageService.prototype.clear = function () {
        window.sessionStorage.clear();
    };
    Object.defineProperty(SessionStorageService.prototype, "storageLength", {
        get: function () {
            return window.sessionStorage.length;
        },
        enumerable: true,
        configurable: true
    });
    SessionStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map