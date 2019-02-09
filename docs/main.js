(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../src/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ../src/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../src/app/api.service.ts":
/*!*********************************!*\
  !*** ../src/app/api.service.ts ***!
  \*********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.server_url = "http://codefactor.pythonanywhere.com";
        this.httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Authorization": "Basic " + btoa("test_user:password")
        });
        this.responseStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.errorStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    ApiService.prototype.performRequest = function (method, url, data) {
        var _this = this;
        return this.http.request(method, "" + this.server_url + url, {
            responseType: "json",
            headers: this.httpHeader,
            body: data
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.responseStream.next(response); }, function (error) { return _this.errorStream.next(error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    };
    ApiService.prototype.getLogger = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.responseStream, this.errorStream).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return console.debug(val); })).subscribe();
    };
    ApiService.prototype.setAuthorizationHeader = function (header) {
        this.httpHeader = this.httpHeader.set("Authorization", header);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../src/app/app.component.html":
/*!*************************************!*\
  !*** ../src/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div class=\"spinner-wrap\" *ngIf=\"loading\">\r\n    <div class=\"spinner\">\r\n        <div class=\"rect1\"></div>\r\n        <div class=\"rect2\"></div>\r\n        <div class=\"rect3\"></div>\r\n        <div class=\"rect4\"></div>\r\n        <div class=\"rect5\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../src/app/app.component.scss":
/*!*************************************!*\
  !*** ../src/app/app.component.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-wrap {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.spinner {\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n  display: flex;\n  justify-content: space-between; }\n\n.spinner > div {\n  background-color: #ff810e;\n  height: 100%;\n  width: 1rem;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.service */ "../src/app/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, hs) {
        var _this = this;
        this.router = router;
        this.hs = hs;
        this.icon_bars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.icon_bell_slash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBellSlash"];
        this.icon_signout = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignOutAlt"];
        this.loading = false;
        this.router.events.subscribe(function (event) {
            _this.interceptNav(event);
        });
    }
    AppComponent.prototype.interceptNav = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.loading = true;
            this.hs.hideMenu();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.loading = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.loading = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        // CHANGE THE SCOPE UNDER PARAM AND PATH WHEN HOSTING ON HOSPITAL SERVER
        var OneSignal = window['OneSignal'] || [];
        OneSignal.SERVICE_WORKER_PARAM = { scope: '/codestroke-angular/' };
        console.log("scope set");
        OneSignal.push(["init", {
                appId: "968844fa-98a8-4c65-9c5f-9e26c66410d4",
                autoRegister: true,
                allowLocalhostAsSecureOrigin: true,
                notifyButton: {
                    enable: false,
                },
                path: '/codestroke-angular/',
            }]);
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            console.log('Service Worker and Push is supported');
        }
        else {
            console.warn('Push messaging is not supported');
        }
        console.log('OneSignal Initialized');
        OneSignal.push(function () {
            console.log('Register For Push');
            OneSignal.push(["registerForPushNotifications"]);
        });
        OneSignal.push(function () {
            // Occurs when the user's subscription changes to a new value.
            OneSignal.on('subscriptionChange', function (isSubscribed) {
                console.log("The user's subscription state is now:", isSubscribed);
                OneSignal.getUserId().then(function (userId) {
                    console.log("User ID is", userId);
                });
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-root',
            template: __webpack_require__(/*! ./app.component.html */ "../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");
/* harmony import */ var _main_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-layout.component */ "../src/app/main-layout.component.ts");
/* harmony import */ var _login_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-layout.component */ "../src/app/login-layout.component.ts");
/* harmony import */ var _cases_cases_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cases/cases.module */ "../src/app/cases/cases.module.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header.component */ "../src/app/header.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ "../src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _cases_cases_module__WEBPACK_IMPORTED_MODULE_10__["CasesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_12__["APP_ROUTES"], { enableTracing: false })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _main_layout_component__WEBPACK_IMPORTED_MODULE_8__["MainLayoutComponent"],
                _login_layout_component__WEBPACK_IMPORTED_MODULE_9__["LoginLayoutComponent"],
                _header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/app/app.routes.ts":
/*!********************************!*\
  !*** ../src/app/app.routes.ts ***!
  \********************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout.component */ "../src/app/main-layout.component.ts");
/* harmony import */ var _login_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-layout.component */ "../src/app/login-layout.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "../src/app/auth.guard.ts");
/* harmony import */ var _login_layout_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-layout.guard */ "../src/app/login-layout.guard.ts");
/* harmony import */ var _cases_cases_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cases/cases.routes */ "../src/app/cases/cases.routes.ts");





var APP_ROUTES = [
    {
        path: '',
        component: _main_layout_component__WEBPACK_IMPORTED_MODULE_0__["MainLayoutComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        canActivateChild: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: 'cases',
                children: _cases_cases_routes__WEBPACK_IMPORTED_MODULE_4__["CASES_ROUTES"]
            },
            {
                path: '',
                redirectTo: 'cases',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        component: _login_layout_component__WEBPACK_IMPORTED_MODULE_1__["LoginLayoutComponent"],
        canActivate: [_login_layout_guard__WEBPACK_IMPORTED_MODULE_3__["LoginLayoutGuard"]]
    },
    { path: '**', redirectTo: '/login' },
];


/***/ }),

/***/ "../src/app/auth.guard.ts":
/*!********************************!*\
  !*** ../src/app/auth.guard.ts ***!
  \********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "../src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.loginState.value) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../src/app/auth.service.ts":
/*!**********************************!*\
  !*** ../src/app/auth.service.ts ***!
  \**********************************/
/*! exports provided: AuthService, Signoff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signoff", function() { return Signoff; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "../src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.loginState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        /** For DEBUG only **/
        this.api.setAuthorizationHeader("Basic " + btoa("test_user:password"));
        /** Catch any Auth Errors **/
        this.api.errorStream.subscribe(function (error) {
            if (error.status == 401) {
                _this.loginState.next(false);
                _this.router.navigate(["/login"]);
            }
        });
    }
    AuthService.prototype.authenticate = function (username, password) {
        var _this = this;
        this.api.setAuthorizationHeader("Basic " + btoa(username + ":" + password));
        return this.api.performRequest("get", "/clinicians/profile/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])({
            next: function (response) { return _this.loginState.next(response["user_info"]); },
            error: function () { return _this.loginState.next(false); }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false); }));
    };
    AuthService.prototype.handleAuthError = function (obs) {
        obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
        }));
    };
    AuthService.prototype.checkResult = function (data) {
        if (data.success) {
            return data;
        }
        if (data.error_type == "auth") {
            this.loginState.next(false);
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());

var Signoff = /** @class */ (function () {
    function Signoff() {
    }
    return Signoff;
}());



/***/ }),

/***/ "../src/app/cases/add-page/add-page.component.html":
/*!*********************************************************!*\
  !*** ../src/app/cases/add-page/add-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-container\">\r\n\r\n\r\n    <main class=\"edit-main\">\r\n        <header class=\"edit-status\">\r\n            <a class=\"edit-status-header\"> New Patient </a>\r\n        </header>\r\n        <article class=\"edit-content\">\r\n            <form [formGroup]=\"form\">\r\n                <div class=\"details-row\">\r\n                    <label>First Name</label>\r\n                    <input type=\"text\" formControlName=\"first_name\"/>\r\n                </div>\r\n                <div class=\"details-row\">\r\n                    <label>Last Name</label>\r\n                    <input type=\"text\" formControlName=\"last_name\"/>\r\n                </div>\r\n                <div class=\"details-row\">\r\n                    <label>DOB</label>\r\n                    <input type=\"date\" formControlName=\"dob\"/>\r\n                </div>\r\n                <div class=\"details-row\">\r\n                    <label>Gender</label>\r\n                    <cs-toggle [name]=\"'gender'\" [options]=\"radioGender\" formControlName=\"gender\"></cs-toggle>\r\n                </div>\r\n                <div class=\"details-row\">\r\n                    <label>Address</label>\r\n                    <input type=\"text\" formControlName=\"address\"/>\r\n                </div>\r\n                <div class=\"details-row\">\r\n                    <label>NOK Name</label>\r\n                    <input type=\"text\" formControlName=\"nok\"/>\r\n                </div>\r\n                <div class=\"details-row\">\r\n                    <label>NOK No.</label>\r\n                    <input type=\"text\" formControlName=\"nok_phone\"/>\r\n                </div>\r\n                <div class=\"details-row\">\r\n                    <label>Last Well</label>\r\n                    <cs-date-time formControlName=\"last_well\"></cs-date-time>\r\n                </div>\r\n                <article class=\"group\">\r\n                    <div class=\"details-row\">\r\n                        <label>Status</label>\r\n                        <cs-toggle [name]=\"'status'\" [options]=\"radioStatus\" formControlName=\"status\"></cs-toggle>\r\n                    </div>\r\n                    <div class=\"details-row\" *ngIf=\"form.get('status').value == 'incoming'\">\r\n                        <label>ETA</label>\r\n                        <cs-date-time formControlName=\"eta\"></cs-date-time>\r\n                    </div>\r\n                    <div class=\"details-row\" *ngIf=\"form.get('status').value == 'active'\">\r\n                        <label>Arrived</label>\r\n                        <cs-date-time formControlName=\"active_timestamp\"></cs-date-time>\r\n                    </div>\r\n                </article>\r\n                <div class=\"details-row options\">\r\n                    <label></label>\r\n                    <button class=\"add-button\">ADD\r\n                        <cs-double-click [func]=\"onAdd\"></cs-double-click>\r\n                    </button>\r\n                </div>\r\n\r\n            </form>\r\n        </article>\r\n    </main>\r\n</div>\r\n"

/***/ }),

/***/ "../src/app/cases/add-page/add-page.component.scss":
/*!*********************************************************!*\
  !*** ../src/app/cases/add-page/add-page.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  width: 100%;\n  flex: 0 0 100%;\n  padding-left: 4vw;\n  padding-right: 4vw;\n  padding-top: 4vh;\n  padding-bottom: 4vh;\n  overflow: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background: transparent; }\n\n.edit-container {\n  width: 100%;\n  max-width: 1400px;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.global-menu {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 70vw;\n  z-index: 92;\n  background: #FF7610;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n\n@media (min-width: 600px) {\n    .global-menu {\n      max-width: 300px; } }\n\n.global-menu.active {\n    box-shadow: 10px 0px 20px -5px rgba(0, 0, 0, 0.4);\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s; }\n\n.global-menu-close {\n    margin-bottom: 1.25rem;\n    margin-right: 0.5rem;\n    height: 6vh;\n    min-height: 55px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 1.5rem;\n    color: white;\n    font-weight: bold;\n    background: rgba(255, 115, 10, 0.5);\n    cursor: pointer; }\n\n@media (min-width: 600px) {\n      .global-menu-close {\n        font-size: 2rem; } }\n\n.global-menu-close fa-icon {\n      font-size: 2.5rem; }\n\n.global-menu-welcome {\n    margin-bottom: 2rem;\n    height: 5rem;\n    background: #FFDAB9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-size: 2rem; }\n\n.global-menu-welcome strong {\n      color: #ff730a; }\n\n.global-menu-button {\n    margin-bottom: 1rem;\n    height: 5rem;\n    width: 100%;\n    background: transparent;\n    font-size: 1.8rem;\n    color: white;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n.global-menu-button * {\n      margin-left: 2rem; }\n\n.edit-nav {\n  z-index: 1000;\n  width: 100%;\n  min-height: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n@media (min-width: 600px) {\n    .edit-nav {\n      justify-content: flex-start;\n      flex-wrap: nowrap; } }\n\n.edit-nav a {\n    height: 5rem;\n    min-width: 50%;\n    flex: 1;\n    background: #ff9539;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-weight: 600;\n    font-size: 1.6rem;\n    font-variant-caps: all-small-caps;\n    cursor: pointer; }\n\n@media (min-width: 600px) {\n      .edit-nav a {\n        margin-left: 0.5rem; } }\n\n@media (min-width: 600px) {\n      .edit-nav a {\n        border-top-left-radius: 0.8rem;\n        border-top-right-radius: 0.8rem; } }\n\n@media (min-width: 600px) {\n      .edit-nav a {\n        min-width: unset;\n        max-width: 12rem; } }\n\n.edit-nav a.selected {\n      background: #ff6c00; }\n\n.edit-status-header {\n  color: white;\n  font-weight: 600;\n  font-size: 2.5rem;\n  padding: 2rem; }\n\n.edit-main {\n  position: relative;\n  border: 2px solid #ff810e;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  width: 100%;\n  flex: 1;\n  background: white;\n  display: flex;\n  flex-direction: column; }\n\n.edit-status {\n  position: relative;\n  width: 100%;\n  height: 6rem;\n  background: #ff8324;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.edit-status > header {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    font-size: 1.7rem;\n    color: white;\n    display: flex;\n    align-items: center; }\n\n.edit-status > div {\n    margin-right: 1rem;\n    border-radius: 0.5rem;\n    height: 60%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-size: 1.5rem;\n    background: #FCF6F2;\n    display: flex;\n    align-items: center; }\n\n.edit-status > div.incoming {\n      background: #f9b3a7; }\n\n.edit-status > div.active {\n      background: #ffcca6; }\n\n.edit-status > div.completed {\n      background: #dcf7ba; }\n\n.edit-status > div fa-icon {\n      margin-right: 1rem; }\n\n.edit-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  padding: 2rem;\n  background: white; }\n\n.edit-popup {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ff8324;\n  display: flex;\n  justify-content: center; }\n\n.popup-main {\n  width: 90%;\n  max-width: 600px; }\n\n.popup-main header {\n    margin-top: 2rem;\n    border: 0.3rem solid white;\n    border-radius: 0.5rem;\n    padding-top: 1.8rem;\n    padding-bottom: 1.8rem;\n    text-align: center;\n    font-size: 1.8rem;\n    font-weight: 900;\n    color: white; }\n\n.popup-main article {\n    margin-top: 2rem;\n    color: white;\n    font-size: 1.5rem; }\n\n.popup-main nav {\n    margin-top: 5rem;\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around; }\n\n@media (min-width: 600px) {\n      .popup-main nav {\n        justify-content: flex-end; } }\n\n.popup-main nav button {\n      height: 3rem;\n      padding-left: 2rem;\n      padding-right: 2rem; }\n\n@media (min-width: 600px) {\n        .popup-main nav button {\n          margin-left: 2rem; } }\n\n.popup-main nav button.primary {\n        border: 0.2rem solid white;\n        border-radius: 0.5rem;\n        background: white;\n        color: #ff8324; }\n\n.popup-main nav button.secondary {\n        border: 0.2rem solid white;\n        border-radius: 0.5rem;\n        color: white; }\n\n.popup-main nav button.tertiary {\n        padding-left: 0;\n        color: white; }\n\nform {\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%; }\n\n.details-row {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  min-height: 4rem;\n  flex-shrink: 0;\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n@media (min-width: 600px) {\n    .details-row {\n      margin-bottom: 0; } }\n\n@media (min-width: 600px) {\n    .details-row {\n      min-width: 600px; } }\n\n@media (min-width: 600px) {\n    .details-row {\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; } }\n\n.details-row > label {\n    width: 14rem;\n    height: 100%;\n    min-height: 4rem;\n    flex-shrink: 0;\n    color: #ff9539;\n    font-weight: bold;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n@media (min-width: 600px) {\n      .details-row > label {\n        justify-content: flex-end; } }\n\n.details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .details-row textarea {\n    margin-left: 0;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .details-row textarea {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .details-row textarea {\n        min-width: unset;\n        width: 500px; } }\n\n.details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]):focus, .details-row textarea:focus {\n      background: #EEEEEE; }\n\n.details-row textarea {\n    min-height: 12rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\n\n.details-row.options {\n    margin-top: 1.25rem;\n    align-items: center; }\n\n.details-row.options label {\n      display: none; }\n\n@media (min-width: 600px) {\n        .details-row.options label {\n          display: flex; } }\n\n.details-row.options button {\n      position: relative;\n      margin-bottom: 0.5rem;\n      border: 2px solid #A9A9A9;\n      min-height: 3.5rem;\n      width: 60%;\n      max-width: 20rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n\n@media (min-width: 600px) {\n        .details-row.options button {\n          margin-left: 2rem; } }\n\n.global-menu-button:hover {\n  background: #b35900; }\n\n.add-button:hover {\n  background-color: #cccccc; }\n\n.group {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid orange;\n  height: auto;\n  width: 100%;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1.5rem; }\n\n.group header {\n    position: absolute;\n    top: 0;\n    left: 2rem;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: bold;\n    text-align: center;\n    background: white; }\n"

/***/ }),

/***/ "../src/app/cases/add-page/add-page.component.ts":
/*!*******************************************************!*\
  !*** ../src/app/cases/add-page/add-page.component.ts ***!
  \*******************************************************/
/*! exports provided: AddPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageComponent", function() { return AddPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notif.service */ "../src/app/notif.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header.service */ "../src/app/header.service.ts");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/common */ "../node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AddPageComponent = /** @class */ (function () {
    function AddPageComponent(fb, hs, backendService, notifService, router, route, locale) {
        var _this = this;
        this.fb = fb;
        this.hs = hs;
        this.backendService = backendService;
        this.notifService = notifService;
        this.router = router;
        this.route = route;
        this.locale = locale;
        this.radioGender = [
            { value: "m", text: "Male", class: "unknown" },
            { value: "f", text: "Female", class: "unknown" },
            { value: "u", text: "Unknown", class: "unknown" }
        ];
        this.radioStatus = [
            { value: "incoming", text: "Incoming", class: "incoming" },
            { value: "active", text: "Active", class: "active" }
        ];
        this.onAdd = function () {
            // Make sure that if Active is set, send only ETA + vice versa
            if (_this.form.get('status').value == 'active') {
                _this.form.patchValue({ eta: '' });
            }
            else if (_this.form.get('status').value == 'incoming') {
                _this.form.patchValue({ active_timestamp: '' });
            }
            _this.backendService.addCase(_this.form.getRawValue())
                .subscribe(function (data) {
                _this.notifService.addNotif({
                    type: "success",
                    html: "Succesfully added new case."
                });
                _this.router.navigate(["../edit/" + data["case_id"]], { relativeTo: _this.route });
            }, function (error) {
                _this.notifService.addNotif({
                    type: "error",
                    html: "Error Adding new case. Please quote the error in the console."
                });
            });
        };
        this.form = this.fb.group({
            first_name: [''],
            last_name: [''],
            gender: ['u'],
            dob: [''],
            address: [''],
            nok: [''],
            nok_phone: [''],
            last_well: [''],
            status: ['active'],
            eta: [''],
            active_timestamp: [Object(_node_modules_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), "yyyy-MM-dd HH:mm", this.locale)]
        });
    }
    AddPageComponent.prototype.ngOnInit = function () {
    };
    AddPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-add-page',
            template: __webpack_require__(/*! ./add-page.component.html */ "../src/app/cases/add-page/add-page.component.html"),
            styles: [__webpack_require__(/*! ./add-page.component.scss */ "../src/app/cases/add-page/add-page.component.scss")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_2__["BackendCaseService"],
            _notif_service__WEBPACK_IMPORTED_MODULE_3__["NotifService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], String])
    ], AddPageComponent);
    return AddPageComponent;
}());



/***/ }),

/***/ "../src/app/cases/backend-case.service.ts":
/*!************************************************!*\
  !*** ../src/app/cases/backend-case.service.ts ***!
  \************************************************/
/*! exports provided: BackendCaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendCaseService", function() { return BackendCaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _case_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case-details */ "../src/app/cases/case-details.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "../src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendCaseService = /** @class */ (function () {
    function BackendCaseService(api) {
        this.api = api;
    }
    BackendCaseService.prototype.getCases = function () {
        //TODO: Error Handling
        return this.api.performRequest("get", "/cases/view/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data["result"].map(function (item) { return _case_details__WEBPACK_IMPORTED_MODULE_2__["CaseDetails"].create(item); }); }));
    };
    BackendCaseService.prototype.getCase = function (id, table) {
        return this.api.performRequest("get", "/" + table + "/" + id + "/view/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { if (data)
            return data["result"][0]; }));
    };
    BackendCaseService.prototype.updateCase = function (id, table, data) {
        return this.api.performRequest("put", "/" + table + "/" + id + "/edit/", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) { return console.log(data); }));
    };
    BackendCaseService.prototype.addCase = function (data) {
        return this.api.performRequest("post", "/cases/add/", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) { return console.log(data); }));
    };
    BackendCaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], BackendCaseService);
    return BackendCaseService;
}());



/***/ }),

/***/ "../src/app/cases/case-details.ts":
/*!****************************************!*\
  !*** ../src/app/cases/case-details.ts ***!
  \****************************************/
/*! exports provided: CaseDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseDetails", function() { return CaseDetails; });
var CaseDetails = /** @class */ (function () {
    function CaseDetails() {
        this.gender = "u";
        this.status = "incoming";
        this.test = "Woooo";
    }
    CaseDetails.create = function (obj) {
        return Object.assign(new CaseDetails(), obj);
    };
    CaseDetails.prototype.getName = function () {
        if (this.first_name && this.last_name) {
            return this.first_name + " " + this.last_name;
        }
        else {
            return '';
        }
    };
    CaseDetails.prototype.getAge = function () {
        if (!this.dob) {
            return "??";
        }
        var agemilli = new Date().getTime() - new Date(this.dob).getTime();
        return Math.floor(agemilli / 31536000000);
    };
    CaseDetails.prototype.getAgeGender = function () {
        return this.getAge() + "" + this.gender.toUpperCase();
    };
    CaseDetails.prototype.getStatusTime = function () {
        switch (this.status) {
            case "incoming":
                return this.eta;
            case "active":
                return this.active_timestamp;
            case "completed":
                return this.completed_timestamp;
        }
    };
    CaseDetails.toDBDate = function (date) {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        return date.getFullYear()
            + "-" + pad(date.getMonth() + 1)
            + "-" + pad(date.getDate());
    };
    CaseDetails.toDBDateTime = function (date) {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        return this.toDBDate(date)
            + " " + pad(date.getHours())
            + ":" + pad(date.getMinutes());
    };
    return CaseDetails;
}());



/***/ }),

/***/ "../src/app/cases/cases.module.ts":
/*!****************************************!*\
  !*** ../src/app/cases/cases.module.ts ***!
  \****************************************/
/*! exports provided: CasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesModule", function() { return CasesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-page/list-page.component */ "../src/app/cases/list-page/list-page.component.ts");
/* harmony import */ var _list_page_list_container_list_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-page/list-container/list-container.component */ "../src/app/cases/list-page/list-container/list-container.component.ts");
/* harmony import */ var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-page/edit-page.component */ "../src/app/cases/edit-page/edit-page.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _edit_page_case_history_case_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-page/case-history/case-history.component */ "../src/app/cases/edit-page/case-history/case-history.component.ts");
/* harmony import */ var _edit_page_case_ed_case_ed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-page/case-ed/case-ed.component */ "../src/app/cases/edit-page/case-ed/case-ed.component.ts");
/* harmony import */ var _edit_page_case_radiology_case_radiology_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-page/case-radiology/case-radiology.component */ "../src/app/cases/edit-page/case-radiology/case-radiology.component.ts");
/* harmony import */ var _edit_page_case_details_case_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-page/case-details/case-details.component */ "../src/app/cases/edit-page/case-details/case-details.component.ts");
/* harmony import */ var _edit_page_case_assessment_case_assessment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-page/case-assessment/case-assessment.component */ "../src/app/cases/edit-page/case-assessment/case-assessment.component.ts");
/* harmony import */ var _edit_page_case_management_case_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-page/case-management/case-management.component */ "../src/app/cases/edit-page/case-management/case-management.component.ts");
/* harmony import */ var _edit_page_ui_select_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-page/ui/select-score.component */ "../src/app/cases/edit-page/ui/select-score.component.ts");
/* harmony import */ var _edit_page_ui_toggle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-page/ui/toggle.component */ "../src/app/cases/edit-page/ui/toggle.component.ts");
/* harmony import */ var _edit_page_ui_double_click_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-page/ui/double-click.component */ "../src/app/cases/edit-page/ui/double-click.component.ts");
/* harmony import */ var _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-page/add-page.component */ "../src/app/cases/add-page/add-page.component.ts");
/* harmony import */ var _edit_page_ui_date_time_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-page/ui/date-time.component */ "../src/app/cases/edit-page/ui/date-time.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var CasesModule = /** @class */ (function () {
    function CasesModule() {
    }
    CasesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_4__["ListPageComponent"],
                _list_page_list_container_list_container_component__WEBPACK_IMPORTED_MODULE_5__["ListContainerComponent"],
                _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_6__["EditPageComponent"],
                _edit_page_case_history_case_history_component__WEBPACK_IMPORTED_MODULE_8__["CaseHistoryComponent"],
                _edit_page_case_ed_case_ed_component__WEBPACK_IMPORTED_MODULE_9__["CaseEdComponent"],
                _edit_page_case_radiology_case_radiology_component__WEBPACK_IMPORTED_MODULE_10__["CaseRadiologyComponent"],
                _edit_page_case_details_case_details_component__WEBPACK_IMPORTED_MODULE_11__["CaseDetailsComponent"],
                _edit_page_case_assessment_case_assessment_component__WEBPACK_IMPORTED_MODULE_12__["CaseAssessmentComponent"],
                _edit_page_case_management_case_management_component__WEBPACK_IMPORTED_MODULE_13__["CaseManagementComponent"],
                _edit_page_ui_select_score_component__WEBPACK_IMPORTED_MODULE_14__["SelectScoreComponent"],
                _edit_page_ui_toggle_component__WEBPACK_IMPORTED_MODULE_15__["ToggleComponent"],
                _edit_page_ui_double_click_component__WEBPACK_IMPORTED_MODULE_16__["DoubleClickComponent"],
                _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_17__["AddPageComponent"],
                _edit_page_ui_date_time_component__WEBPACK_IMPORTED_MODULE_18__["DateTimeComponent"]
            ]
        })
    ], CasesModule);
    return CasesModule;
}());



/***/ }),

/***/ "../src/app/cases/cases.routes.ts":
/*!****************************************!*\
  !*** ../src/app/cases/cases.routes.ts ***!
  \****************************************/
/*! exports provided: CASES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASES_ROUTES", function() { return CASES_ROUTES; });
/* harmony import */ var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-page/list-page.component */ "../src/app/cases/list-page/list-page.component.ts");
/* harmony import */ var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-page/edit-page.component */ "../src/app/cases/edit-page/edit-page.component.ts");
/* harmony import */ var _edit_page_case_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-page/case-resolver.service */ "../src/app/cases/edit-page/case-resolver.service.ts");
/* harmony import */ var _list_page_list_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-page/list-resolver.service */ "../src/app/cases/list-page/list-resolver.service.ts");
/* harmony import */ var _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-page/add-page.component */ "../src/app/cases/add-page/add-page.component.ts");
/* harmony import */ var _edit_page_edit_page_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-page/edit-page.routes */ "../src/app/cases/edit-page/edit-page.routes.ts");






var caseResolver = {
    case: _edit_page_case_resolver_service__WEBPACK_IMPORTED_MODULE_2__["CaseResolverService"]
};
var listResolver = {
    list: _list_page_list_resolver_service__WEBPACK_IMPORTED_MODULE_3__["ListResolverService"]
};
var CASES_ROUTES = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_0__["ListPageComponent"], resolve: listResolver },
    { path: 'add', component: _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_4__["AddPageComponent"] },
    {
        path: 'edit/:id',
        component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_1__["EditPageComponent"],
        resolve: caseResolver,
        children: _edit_page_edit_page_routes__WEBPACK_IMPORTED_MODULE_5__["EDIT_ROUTES"]
    }
];


/***/ }),

/***/ "../src/app/cases/edit-page/abstract-case.ts":
/*!***************************************************!*\
  !*** ../src/app/cases/edit-page/abstract-case.ts ***!
  \***************************************************/
/*! exports provided: AbstractCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractCaseComponent", function() { return AbstractCaseComponent; });
var AbstractCaseComponent = /** @class */ (function () {
    function AbstractCaseComponent() {
        var _this = this;
        this.save = function (table) {
            var response = _this.backendService.updateCase(_this.case_id, table, _this.form.getRawValue());
            response.subscribe(function (data) {
                _this.case = _this.form.getRawValue();
                switch (data["message"]) {
                    case "no change":
                        _this.notifService.addNotif({
                            type: "warning",
                            html: "No changes were made to {" + table + "}"
                        });
                        break;
                    default:
                        _this.notifService.addNotif({
                            type: "success",
                            html: "Succesfully saved to {" + table + "}"
                        });
                }
            }, function () {
                //TODO: Better error reporting
                _this.notifService.addNotif({
                    type: "error",
                    html: "Error saving to {" + table + "}"
                });
            });
            return response;
        };
        this.onReset = function () {
            _this.form.patchValue(_this.case);
            _this.notifService.addNotif({
                type: "success",
                html: "All recent changes have been reset."
            });
        };
    }
    AbstractCaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.case = data.case;
            _this.case_id = _this.case.case_id;
            _this.form.patchValue(data.case);
            console.log(data.case);
            for (var _i = 0, _a = Object.entries(data.case); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                //TODO:
            }
        });
    };
    return AbstractCaseComponent;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/case-assessment/case-assessment.component.html":
/*!*********************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-assessment/case-assessment.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <article class=\"group\">\n        <header>\n            MASS\n        </header>\n        <div class=\"assess-row\">\n            <label>Facial Droop</label>\n            <cs-toggle [name]=\"'facial'\" [options]=\"radioYNU\" formControlName=\"facial_droop\"></cs-toggle>\n        </div>\n        <div class=\"assess-row\">\n            <label>Arm Drift</label>\n            <cs-toggle [name]=\"'arm'\" [options]=\"radioYNU\" formControlName=\"arm_drift\"></cs-toggle>\n        </div>\n        <div class=\"assess-row\">\n            <label>Weak Grip</label>\n            <cs-toggle [name]=\"'grip'\" [options]=\"radioYNU\" formControlName=\"weak_grip\"></cs-toggle>\n        </div>\n        <div class=\"assess-row\">\n            <label>Speech Difficulty</label>\n            <cs-toggle [name]=\"'speech'\" [options]=\"radioYNU\" formControlName=\"speech_difficulty\"></cs-toggle>\n        </div>\n    </article>\n\n    <article class=\"group\">\n        <header>\n            Vital Signs\n        </header>\n        <div class=\"assess-row bp\">\n            <label>Blood Pressure (mmHg)</label>\n            <input type=\"number\" class=\"bp\" formControlName=\"bp_systolic\"/>\n            <span>/</span>\n            <input type=\"number\" class=\"bp\" formControlName=\"bp_diastolic\"/>\n        </div>\n        <div class=\"assess-row\">\n            <label>Heart Rate (bpm)</label>\n            <input type=\"number\" formControlName=\"heart_rate\"/>\n        </div>\n        <div class=\"assess-row\">\n            <label></label>\n            <cs-toggle [name]=\"'hr'\" [options]=\"radioHR\" formControlName=\"heart_rhythm\"></cs-toggle>\n        </div>\n        <div class=\"assess-row\">\n            <label>Resp Rate (BPM)</label>\n            <input type=\"number\" formControlName=\"rr\"/>\n        </div>\n        <div class=\"assess-row\">\n            <label>O2 Saturation (%)</label>\n            <input type=\"number\" formControlName=\"o2sats\"/>\n        </div>\n        <div class=\"assess-row\">\n            <label>Temperature (oC)</label>\n            <input type=\"number\" formControlName=\"temp\"/>\n        </div>\n        <div class=\"assess-row\">\n            <label>GCS</label>\n            <input type=\"number\" formControlName=\"gcs\"/>\n        </div>\n        <div class=\"assess-row\">\n            <label>Blood Glucose (mmol/L)</label>\n            <input type=\"number\" formControlName=\"blood_glucose\"/>\n        </div>\n    </article>\n\n    <article class=\"group\">\n        <header>\n            RACE <span>{{race ? race : (race === 0 ? 0 : '??')}}</span>\n        </header>\n        <div class=\"assess-row\">\n            <label>Facial Palsy</label>\n            <cs-select-score [options]=\"selectFacial\" formControlName=\"facial_palsy_race\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Arm Motor Impairment</label>\n            <cs-select-score [options]=\"selectRaceLimb\" formControlName=\"arm_motor_impair\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Leg Motor Impairment</label>\n            <cs-select-score [options]=\"selectRaceLimb\" formControlName=\"leg_motor_impair\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Head & Gaze Deviation</label>\n            <cs-select-score [options]=\"selectHead\" formControlName=\"head_gaze_deviate\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Hemiparesis</label>\n            <cs-toggle [name]=\"'hemi'\" [options]=\"radioHemi\" formControlName=\"hemiparesis\"></cs-toggle>\n        </div>\n    </article>\n\n    <article class=\"group\">\n        <header>\n            Cannula\n        </header>\n        <div class=\"assess-row\">\n            <label>18G IV Cannula in Cubital Fossa</label>\n            <cs-toggle [name]=\"'cannula'\" [options]=\"radioYNU\" formControlName=\"cannula\"></cs-toggle>\n        </div>\n    </article>\n\n    <article class=\"group\">\n        <header>\n            NIHSS <span>{{nihss ? nihss : (nihss === 0 ? 0 : '??')}}</span>\n        </header>\n        <div class=\"assess-row\">\n            <label>Level of Consciousness</label>\n            <cs-select-score [options]=\"selectConscious\" formControlName=\"conscious_level\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Month & Age</label>\n            <cs-select-score [options]=\"selectMonth\" formControlName=\"month_age\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Blink Eyes & Squeeze Hands</label>\n            <cs-select-score [options]=\"selectSqueeze\" formControlName=\"blink_squeeze\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Horizontal Gaze</label>\n            <cs-select-score [options]=\"selectHorizontal\" formControlName=\"horizontal_gaze\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Visual Fields</label>\n            <cs-select-score [options]=\"selectVisual\" formControlName=\"visual_fields\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Facial Palsy</label>\n            <cs-select-score [options]=\"selectFacialNihss\" formControlName=\"facial_palsy_nihss\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Left Arm Drift</label>\n            <cs-select-score [options]=\"selectDrift\" formControlName=\"left_arm_drift\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Right Arm Drift</label>\n            <cs-select-score [options]=\"selectDrift\" formControlName=\"right_arm_drift\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Left Leg Drift</label>\n            <cs-select-score [options]=\"selectDrift\" formControlName=\"left_leg_drift\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Right Leg Drift</label>\n            <cs-select-score [options]=\"selectDrift\" formControlName=\"right_leg_drift\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Limb Ataxia</label>\n            <cs-select-score [options]=\"selectAtaxia\" formControlName=\"limb_ataxia\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Sensation</label>\n            <cs-select-score [options]=\"selectSensation\" formControlName=\"sensation\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Aphasia</label>\n            <cs-select-score [options]=\"selectAphasia\" formControlName=\"aphasia\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Dysarthria</label>\n            <cs-select-score [options]=\"selectDysarthria\" formControlName=\"dysarthria\"></cs-select-score>\n        </div>\n        <div class=\"assess-row\">\n            <label>Extinction / Inattention / Neglect</label>\n            <cs-select-score [options]=\"selectExtinction\" formControlName=\"neglect\"></cs-select-score>\n        </div>\n    </article>\n\n    <article class=\"group\">\n        <header>\n            Modified Rankin Scale (Premorbid) <span>{{rankin ? rankin : (rankin === 0 ? 0 : '??')}}</span>\n        </header>\n        <div class=\"assess-row\">\n            <label>Level of Consciousness</label>\n            <cs-select-score [options]=\"selectRankin\" formControlName=\"rankin_conscious\"></cs-select-score>\n        </div>\n    </article>\n\n    <article class=\"group\">\n        <header>\n            LVO\n        </header>\n        <div class=\"assess-row\" *ngIf=\"!form.get('likely_lvo').value\">\n            <label></label>\n            <button>Click to Notify angiography staff of a likely LVO\n                <cs-double-click [func]=\"onLVO\"></cs-double-click>\n            </button>\n        </div>\n        <div class=\"assess-row angio_notified\" *ngIf=\"form.get('likely_lvo').value\">\n            <label><fa-icon [icon]=\"icon_sent\"></fa-icon></label>\n            <span class=\"case_input\">Angiography staff have been notified of a likely LVO</span>\n        </div>\n    </article>\n\n    <div class=\"assess-row options\">\n        <label></label>\n        <button>SAVE\n            <cs-double-click [func]=\"onSave\"></cs-double-click>\n        </button>\n        <button>RESET\n            <cs-double-click [func]=\"onReset\"></cs-double-click>\n        </button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-assessment/case-assessment.component.scss":
/*!*********************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-assessment/case-assessment.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\nform {\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.assess-row {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  min-height: 4rem;\n  flex-shrink: 0;\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n@media (min-width: 600px) {\n    .assess-row {\n      margin-bottom: 0; } }\n\n@media (min-width: 600px) {\n    .assess-row {\n      min-width: 600px; } }\n\n@media (min-width: 600px) {\n    .assess-row {\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; } }\n\n.assess-row > label {\n    width: 14rem;\n    height: 100%;\n    min-height: 4rem;\n    flex-shrink: 0;\n    color: #ff9539;\n    font-weight: bold;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n@media (min-width: 600px) {\n      .assess-row > label {\n        justify-content: flex-end; } }\n\n.assess-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .assess-row textarea {\n    margin-left: 0;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .assess-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .assess-row textarea {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .assess-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .assess-row textarea {\n        min-width: unset;\n        width: 500px; } }\n\n.assess-row input:not([type=\"radio\"]):not([type=\"checkbox\"]):focus, .assess-row textarea:focus {\n      background: #EEEEEE; }\n\n.assess-row textarea {\n    min-height: 12rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\n\n.assess-row.options {\n    margin-top: 1.25rem;\n    align-items: center; }\n\n.assess-row.options label {\n      display: none; }\n\n@media (min-width: 600px) {\n        .assess-row.options label {\n          display: flex; } }\n\n.assess-row.options button {\n      position: relative;\n      margin-bottom: 0.5rem;\n      border: 2px solid #A9A9A9;\n      min-height: 3.5rem;\n      width: 60%;\n      max-width: 20rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n\n@media (min-width: 600px) {\n        .assess-row.options button {\n          margin-left: 2rem; } }\n\n.assess-row button {\n    position: relative;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .assess-row button {\n        min-width: unset;\n        width: 500px; } }\n\n@media (min-width: 600px) {\n      .assess-row button {\n        margin-left: 2rem; } }\n\n.group {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid orange;\n  height: auto;\n  width: 100%;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1.5rem; }\n\n.group header {\n    position: absolute;\n    top: 0;\n    left: 2rem;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: bold;\n    text-align: center;\n    background: white; }\n\n.group header span {\n    margin-left: 2rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    background: orange;\n    font-size: 2rem;\n    color: white; }\n\n.bp input {\n  width: 10rem !important; }\n\n.bp input:nth-of-type(2) {\n    margin-left: 0 !important; }\n\n.bp span {\n  width: 2rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.angio_notified label {\n  font-size: 2rem; }\n\n.angio_notified span {\n  margin-left: 0; }\n\n@media (min-width: 600px) {\n    .angio_notified span {\n      margin-left: 2rem; } }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-assessment/case-assessment.component.ts":
/*!*******************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-assessment/case-assessment.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CaseAssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseAssessmentComponent", function() { return CaseAssessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _abstract_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-case */ "../src/app/cases/edit-page/abstract-case.ts");
/* harmony import */ var _edit_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-status.service */ "../src/app/cases/edit-page/edit-status.service.ts");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../notif.service */ "../src/app/notif.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popup.service */ "../src/app/cases/edit-page/popup.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CaseAssessmentComponent = /** @class */ (function (_super) {
    __extends(CaseAssessmentComponent, _super);
    function CaseAssessmentComponent(fb, ar, statusService, bs, router, ns, ps) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.ar = ar;
        _this.statusService = statusService;
        _this.bs = bs;
        _this.router = router;
        _this.ns = ns;
        _this.ps = ps;
        _this.radioYNU = [
            { value: "yes", text: "Yes", class: "yes" },
            { value: "no", text: "No", class: "no" },
            { value: "unknown", text: "Unknown", class: "unknown" }
        ];
        _this.radioHR = [
            { value: "regular", text: "Regular", class: "yes" },
            { value: "irregular", text: "Irregular", class: "no" },
            { value: "unknown", text: "Unknown", class: "unknown" }
        ];
        _this.selectFacial = [
            { text: "Absent", value: "0" },
            { text: "Mild", value: "1" },
            { text: "Mod-Severe", value: "2" }
        ];
        _this.selectRaceLimb = [
            { text: "Normal-Mild", value: "0" },
            { text: "Mod", value: "1" },
            { text: "Severe", value: "2" }
        ];
        _this.selectHead = [
            { text: "Absent", value: "0" },
            { text: "Present", value: "1" }
        ];
        _this.radioHemi = [
            { value: "left", text: "Left", class: "unknown" },
            { value: "right", text: "Right", class: "unknown" },
            { value: "unknown", text: "Unknown", class: "unknown" }
        ];
        _this.selectConscious = [
            { text: "Alert", value: "0" },
            { text: "Minor Stimulation", value: "1" },
            { text: "Repeated Stimulation", value: "2" },
            { text: "Movement to Pain", value: "3" },
            { text: "Postures or Unresponsive", value: "4" }
        ];
        _this.selectMonth = [
            { text: "Both Correct", value: "0" },
            { text: "1 Correct", value: "1" },
            { text: "2 Correct", value: "2" }
        ];
        _this.selectSqueeze = [
            { text: "Both Correct", value: "0" },
            { text: "1 Correct", value: "1" },
            { text: "2 Correct", value: "2" }
        ];
        _this.selectHorizontal = [
            { text: "Normal", value: "0" },
            { text: "Partial Palsy", value: "1" },
            { text: "Forced Gaze Palsy", value: "2" }
        ];
        _this.selectVisual = [
            { text: "Normal", value: "0" },
            { text: "Partial Hemianopia", value: "1" },
            { text: "Complete Hemianopia", value: "2" },
            { text: "Bilateral Hemianopia", value: "3" }
        ];
        _this.selectFacialNihss = [
            { text: "Normal", value: "0" },
            { text: "Minor Paralysis", value: "1" },
            { text: "Partial Paralysis", value: "2" },
            { text: "Unilateral/Bilateral Compelete Paralysis", value: "3" }
        ];
        _this.selectDrift = [
            { text: "No drift for 10 seconds", value: "0" },
            { text: "Mild Drift", value: "1" },
            { text: "Drift/Some effort against gravity", value: "2" },
            { text: "No effort against gravity", value: "3" },
            { text: "No Movement", value: "4" }
        ];
        _this.selectAtaxia = [
            { text: "No Ataxia / Paralysed / Amputation / Does not Understand", value: "0" },
            { text: "1 Limb", value: "1" },
            { text: "2 Limbs", value: "2" }
        ];
        _this.selectSensation = [
            { text: "Normal", value: "0" },
            { text: "Mild-Moderate Loss", value: "1" },
            { text: "Complete/Unresponsive", value: "2" },
        ];
        _this.selectAphasia = [
            { text: "Normal", value: "0" },
            { text: "Mild-Moderate", value: "1" },
            { text: "Severe Aphasia (Fragmentary Expression)", value: "2" },
            { text: "Mute/Global Aphasia/Unresponsive", value: "3" }
        ];
        _this.selectDysarthria = [
            { text: "Normal/Intubated", value: "0" },
            { text: "Mild-Moderate", value: "1" },
            { text: "Severe/Mute", value: "2" },
        ];
        _this.selectExtinction = [
            { text: "Normal", value: "0" },
            { text: "Inattention to 1 Modality/Bilaterally", value: "1" },
            { text: "Profound Neglect/More than 1 Modality", value: "2" },
        ];
        _this.selectRankin = [
            { text: "No Symptoms", value: "0" },
            { text: "No disability despite symptoms", value: "1" },
            { text: "Slight disability but independent", value: "2" },
            { text: "Moderate disability but able to walk", value: "3" },
            { text: "Mod to Severe disability requiring assistance", value: "4" },
            { text: "Bedridden", value: "5" },
        ];
        _this.race = 0;
        _this.nihss = 0;
        _this.rankin = 0;
        _this.icon_sent = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBullhorn"];
        _this.onLVO = function () {
            _this.form.get("likely_lvo").setValue(1);
        };
        _this.onSave = function () {
            _this.save(CaseAssessmentComponent_1.backendTable);
        };
        _this.form = _this.fb.group({
            facial_droop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(no|yes|unknown)')],
            arm_drift: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(no|yes|unknown)')],
            weak_grip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(no|yes|unknown)')],
            speech_difficulty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(no|yes|unknown)')],
            bp_systolic: [''],
            bp_diastolic: [''],
            heart_rate: [''],
            heart_rhythm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(regular|irregular|unknown)')],
            rr: [''],
            o2sats: [''],
            temp: [''],
            gcs: [''],
            blood_glucose: [''],
            facial_palsy_race: [''],
            arm_motor_impair: [''],
            leg_motor_impair: [''],
            head_gaze_deviate: [''],
            hemiparesis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(left|right|unknown)')],
            cannula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(yes|no|unknown)')],
            conscious_level: [''],
            month_age: [''],
            blink_squeeze: [''],
            horizontal_gaze: [''],
            visual_fields: [''],
            facial_palsy_nihss: [''],
            left_arm_drift: [''],
            right_arm_drift: [''],
            left_leg_drift: [''],
            right_leg_drift: [''],
            limb_ataxia: [''],
            sensation: [''],
            aphasia: [''],
            dysarthria: [''],
            neglect: [''],
            rankin_conscious: [''],
            likely_lvo: ['']
        });
        _this.route = ar;
        _this.backendService = bs;
        _this.notifService = ns;
        _this.ps = ps;
        return _this;
    }
    CaseAssessmentComponent_1 = CaseAssessmentComponent;
    CaseAssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.checkScore(this.form.getRawValue());
        this.form.valueChanges.subscribe(function (val) {
            _this.checkScore(val);
        });
        this.form.controls['likely_lvo'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.form.get('likely_lvo').value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1))
            .subscribe(function (val) {
            if (val) {
                var data = { likely_lvo: 1 };
                _this.backendService.updateCase(_this.case_id, CaseAssessmentComponent_1.backendTable, data).subscribe(function () {
                    _this.notifService.addNotif({
                        type: "success",
                        html: "Angiography staff notified about potential LVO"
                    });
                    _this.case = _this.form.getRawValue();
                }, function () {
                    _this.notifService.addNotif({
                        type: "error",
                        html: "Error notifying angiography staff about potential LVO"
                    });
                });
            }
        });
    };
    CaseAssessmentComponent.prototype.checkScore = function (val) {
        this.race = 0;
        this.race += parseInt(val.facial_palsy_race);
        this.race += parseInt(val.arm_motor_impair);
        this.race += parseInt(val.leg_motor_impair);
        this.race += parseInt(val.head_gaze_deviate);
        this.nihss = 0;
        this.nihss += parseInt(val.conscious_level);
        this.nihss += parseInt(val.month_age);
        this.nihss += parseInt(val.blink_squeeze);
        this.nihss += parseInt(val.horizontal_gaze);
        this.nihss += parseInt(val.visual_fields);
        this.nihss += parseInt(val.facial_palsy_nihss);
        this.nihss += parseInt(val.left_arm_drift);
        this.nihss += parseInt(val.right_arm_drift);
        this.nihss += parseInt(val.left_leg_drift);
        this.nihss += parseInt(val.right_leg_drift);
        this.nihss += parseInt(val.limb_ataxia);
        this.nihss += parseInt(val.sensation);
        this.nihss += parseInt(val.aphasia);
        this.nihss += parseInt(val.dysarthria);
        this.nihss += parseInt(val.neglect);
        this.rankin = 0;
        this.rankin += parseInt(val.rankin_conscious);
    };
    var CaseAssessmentComponent_1;
    CaseAssessmentComponent.backendTable = "case_assessments";
    CaseAssessmentComponent = CaseAssessmentComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-case-assessment',
            template: __webpack_require__(/*! ./case-assessment.component.html */ "../src/app/cases/edit-page/case-assessment/case-assessment.component.html"),
            styles: [__webpack_require__(/*! ./case-assessment.component.scss */ "../src/app/cases/edit-page/case-assessment/case-assessment.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _edit_status_service__WEBPACK_IMPORTED_MODULE_6__["EditStatusService"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_7__["BackendCaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notif_service__WEBPACK_IMPORTED_MODULE_8__["NotifService"],
            _popup_service__WEBPACK_IMPORTED_MODULE_9__["PopupService"]])
    ], CaseAssessmentComponent);
    return CaseAssessmentComponent;
}(_abstract_case__WEBPACK_IMPORTED_MODULE_5__["AbstractCaseComponent"]));



/***/ }),

/***/ "../src/app/cases/edit-page/case-details/case-details.component.html":
/*!***************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-details/case-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"details-row\">\n        <label>First Name</label>\n        <input type=\"text\" formControlName=\"first_name\"/>\n    </div>\n    <div class=\"details-row\">\n        <label>Last Name</label>\n        <input type=\"text\" formControlName=\"last_name\"/>\n    </div>\n    <div class=\"details-row\">\n        <label>DOB</label>\n        <input type=\"date\" formControlName=\"dob\"/>\n    </div>\n    <div class=\"details-row\">\n        <label>Gender</label>\n        <cs-toggle [name]=\"'gender'\" [options]=\"radioGender\" formControlName=\"gender\"></cs-toggle>\n    </div>\n    <div class=\"details-row\">\n        <label>Address</label>\n        <input type=\"text\" formControlName=\"address\"/>\n    </div>\n    <div class=\"details-row\">\n        <label>NOK Name</label>\n        <input type=\"text\" formControlName=\"nok\"/>\n    </div>\n    <div class=\"details-row\">\n        <label>NOK No.</label>\n        <input type=\"text\" formControlName=\"nok_phone\"/>\n    </div>\n    <div class=\"details-row\">\n        <label>Last Well</label>\n        <cs-date-time formControlName=\"last_well\"></cs-date-time>\n    </div>\n\n    <div class=\"details-row options\">\n        <label></label>\n        <button>SAVE\n            <cs-double-click [func]=\"onSave\"></cs-double-click>\n        </button>\n        <button>RESET\n            <cs-double-click [func]=\"onReset\"></cs-double-click>\n        </button>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-details/case-details.component.scss":
/*!***************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-details/case-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\nform {\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.details-row {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  min-height: 4rem;\n  flex-shrink: 0;\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n@media (min-width: 600px) {\n    .details-row {\n      margin-bottom: 0; } }\n\n@media (min-width: 600px) {\n    .details-row {\n      min-width: 600px; } }\n\n@media (min-width: 600px) {\n    .details-row {\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; } }\n\n.details-row > label {\n    width: 14rem;\n    height: 100%;\n    min-height: 4rem;\n    flex-shrink: 0;\n    color: #ff9539;\n    font-weight: bold;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n@media (min-width: 600px) {\n      .details-row > label {\n        justify-content: flex-end; } }\n\n.details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .details-row textarea {\n    margin-left: 0;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .details-row textarea {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .details-row textarea {\n        min-width: unset;\n        width: 500px; } }\n\n.details-row input:not([type=\"radio\"]):not([type=\"checkbox\"]):focus, .details-row textarea:focus {\n      background: #EEEEEE; }\n\n.details-row textarea {\n    min-height: 12rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\n\n.details-row.options {\n    margin-top: 1.25rem;\n    align-items: center; }\n\n.details-row.options label {\n      display: none; }\n\n@media (min-width: 600px) {\n        .details-row.options label {\n          display: flex; } }\n\n.details-row.options button {\n      position: relative;\n      margin-bottom: 0.5rem;\n      border: 2px solid #A9A9A9;\n      min-height: 3.5rem;\n      width: 60%;\n      max-width: 20rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n\n@media (min-width: 600px) {\n        .details-row.options button {\n          margin-left: 2rem; } }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-details/case-details.component.ts":
/*!*************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-details/case-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CaseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseDetailsComponent", function() { return CaseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _abstract_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-case */ "../src/app/cases/edit-page/abstract-case.ts");
/* harmony import */ var _case_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../case-details */ "../src/app/cases/case-details.ts");
/* harmony import */ var _edit_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-status.service */ "../src/app/cases/edit-page/edit-status.service.ts");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../notif.service */ "../src/app/notif.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popup.service */ "../src/app/cases/edit-page/popup.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CaseDetailsComponent = /** @class */ (function (_super) {
    __extends(CaseDetailsComponent, _super);
    function CaseDetailsComponent(fb, ar, statusService, bs, router, ns, ps) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.ar = ar;
        _this.statusService = statusService;
        _this.bs = bs;
        _this.router = router;
        _this.ns = ns;
        _this.ps = ps;
        _this.radioGender = [
            { value: "m", text: "Male", class: "unknown" },
            { value: "f", text: "Female", class: "unknown" },
            { value: "u", text: "Unknown", class: "unknown" }
        ];
        _this.onSave = function () {
            // When the Case is saved, update the Status at the top with the new details
            _this.save(CaseDetailsComponent_1.backendTable).subscribe(function () {
                _this.updateStatus();
            });
        };
        _this.form = _this.fb.group({
            first_name: [''],
            last_name: [''],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(f|m|u)')],
            dob: [''],
            address: [''],
            nok: [''],
            nok_phone: [''],
            last_well: ['']
        });
        _this.route = ar;
        _this.backendService = bs;
        _this.notifService = ns;
        _this.ps = ps;
        return _this;
    }
    CaseDetailsComponent_1 = CaseDetailsComponent;
    CaseDetailsComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateStatus();
    };
    CaseDetailsComponent.prototype.updateStatus = function () {
        var caseDetail = Object.assign(new _case_details__WEBPACK_IMPORTED_MODULE_4__["CaseDetails"](), this.case);
        this.statusService.name.next(caseDetail.getName() + " " + caseDetail.getAgeGender());
        this.statusService.lastWell.next(caseDetail.last_well);
    };
    var CaseDetailsComponent_1;
    CaseDetailsComponent.backendTable = "cases";
    CaseDetailsComponent = CaseDetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-case-details',
            template: __webpack_require__(/*! ./case-details.component.html */ "../src/app/cases/edit-page/case-details/case-details.component.html"),
            styles: [__webpack_require__(/*! ./case-details.component.scss */ "../src/app/cases/edit-page/case-details/case-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _edit_status_service__WEBPACK_IMPORTED_MODULE_5__["EditStatusService"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_6__["BackendCaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notif_service__WEBPACK_IMPORTED_MODULE_7__["NotifService"],
            _popup_service__WEBPACK_IMPORTED_MODULE_8__["PopupService"]])
    ], CaseDetailsComponent);
    return CaseDetailsComponent;
}(_abstract_case__WEBPACK_IMPORTED_MODULE_3__["AbstractCaseComponent"]));



/***/ }),

/***/ "../src/app/cases/edit-page/case-ed/case-ed.component.html":
/*!*****************************************************************!*\
  !*** ../src/app/cases/edit-page/case-ed/case-ed.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"ed-row\">\n        <label>Location</label>\n        <input type=\"text\" formControlName=\"location\"/>\n    </div>\n    <div class=\"ed-row\">\n        <label>Registered in ED?</label>\n        <input type=\"checkbox\" id=\"registered\" name=\"registered\" formControlName=\"registered\"/>\n        <label for=\"registered\" class=\"check\"></label>\n    </div>\n    <div class=\"ed-row\">\n        <label>Triaged in ED?</label>\n        <input type=\"checkbox\" id=\"triaged\" name=\"triaged\" formControlName=\"triaged\"/>\n        <label for=\"triaged\" class=\"check\"></label>\n    </div>\n    <div class=\"ed-row\">\n        <label>Primary Survey Completed?</label>\n        <input type=\"checkbox\" id=\"primary_survey\" name=\"primary_survey\" formControlName=\"primary_survey\"/>\n        <label for=\"primary_survey\" class=\"check\"></label>\n    </div>\n\n    <div class=\"ed-row options\">\n        <label></label>\n        <button>SAVE\n            <cs-double-click [func]=\"onSave\"></cs-double-click>\n        </button>\n        <button>RESET\n            <cs-double-click [func]=\"onReset\"></cs-double-click>\n        </button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-ed/case-ed.component.scss":
/*!*****************************************************************!*\
  !*** ../src/app/cases/edit-page/case-ed/case-ed.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\nform {\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.ed-row {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  min-height: 4rem;\n  flex-shrink: 0;\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n@media (min-width: 600px) {\n    .ed-row {\n      margin-bottom: 0; } }\n\n@media (min-width: 600px) {\n    .ed-row {\n      min-width: 600px; } }\n\n@media (min-width: 600px) {\n    .ed-row {\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; } }\n\n.ed-row > label {\n    width: 14rem;\n    height: 100%;\n    min-height: 4rem;\n    flex-shrink: 0;\n    color: #ff9539;\n    font-weight: bold;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n@media (min-width: 600px) {\n      .ed-row > label {\n        justify-content: flex-end; } }\n\n.ed-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .ed-row textarea {\n    margin-left: 0;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .ed-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .ed-row textarea {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .ed-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .ed-row textarea {\n        min-width: unset;\n        width: 500px; } }\n\n.ed-row input:not([type=\"radio\"]):not([type=\"checkbox\"]):focus, .ed-row textarea:focus {\n      background: #EEEEEE; }\n\n.ed-row textarea {\n    min-height: 12rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\n\n.ed-row.options {\n    margin-top: 1.25rem;\n    align-items: center; }\n\n.ed-row.options label {\n      display: none; }\n\n@media (min-width: 600px) {\n        .ed-row.options label {\n          display: flex; } }\n\n.ed-row.options button {\n      position: relative;\n      margin-bottom: 0.5rem;\n      border: 2px solid #A9A9A9;\n      min-height: 3.5rem;\n      width: 60%;\n      max-width: 20rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n\n@media (min-width: 600px) {\n        .ed-row.options button {\n          margin-left: 2rem; } }\n\n.check {\n  margin-left: 0;\n  border: 2px solid #D8D8D8;\n  min-height: unset !important;\n  height: 3rem !important;\n  min-width: unset !important;\n  width: 3rem !important;\n  background: white;\n  display: flex; }\n\n@media (min-width: 600px) {\n    .check {\n      margin-left: 2rem; } }\n\ninput[type=\"checkbox\"] {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\ninput[type=\"checkbox\"]:checked + label {\n    background: lightgreen; }\n\ninput[type=\"checkbox\"]:disabled + label {\n    background: coral; }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-ed/case-ed.component.ts":
/*!***************************************************************!*\
  !*** ../src/app/cases/edit-page/case-ed/case-ed.component.ts ***!
  \***************************************************************/
/*! exports provided: CaseEdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseEdComponent", function() { return CaseEdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _abstract_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-case */ "../src/app/cases/edit-page/abstract-case.ts");
/* harmony import */ var _edit_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-status.service */ "../src/app/cases/edit-page/edit-status.service.ts");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../notif.service */ "../src/app/notif.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup.service */ "../src/app/cases/edit-page/popup.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CaseEdComponent = /** @class */ (function (_super) {
    __extends(CaseEdComponent, _super);
    function CaseEdComponent(fb, ar, statusService, bs, router, ns, ps) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.ar = ar;
        _this.statusService = statusService;
        _this.bs = bs;
        _this.router = router;
        _this.ns = ns;
        _this.ps = ps;
        _this.onSave = function () {
            _this.save(CaseEdComponent_1.backendTable);
        };
        _this.form = _this.fb.group({
            location: [''],
            registered: [0],
            triaged: [0],
            primary_survey: [0]
        });
        _this.route = ar;
        _this.backendService = bs;
        _this.notifService = ns;
        _this.ps = ps;
        return _this;
    }
    CaseEdComponent_1 = CaseEdComponent;
    CaseEdComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    var CaseEdComponent_1;
    CaseEdComponent.backendTable = "case_eds";
    CaseEdComponent = CaseEdComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-case-ed',
            template: __webpack_require__(/*! ./case-ed.component.html */ "../src/app/cases/edit-page/case-ed/case-ed.component.html"),
            styles: [__webpack_require__(/*! ./case-ed.component.scss */ "../src/app/cases/edit-page/case-ed/case-ed.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _edit_status_service__WEBPACK_IMPORTED_MODULE_4__["EditStatusService"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_5__["BackendCaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notif_service__WEBPACK_IMPORTED_MODULE_6__["NotifService"],
            _popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"]])
    ], CaseEdComponent);
    return CaseEdComponent;
}(_abstract_case__WEBPACK_IMPORTED_MODULE_3__["AbstractCaseComponent"]));



/***/ }),

/***/ "../src/app/cases/edit-page/case-history/case-history.component.html":
/*!***************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-history/case-history.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"history-row textarea\">\n        <label>HOPC</label>\n        <textarea formControlName=\"hopc\"></textarea>\n    </div>\n    <div class=\"history-row textarea\">\n        <label>PMHx</label>\n        <textarea formControlName=\"pmhx\"></textarea>\n    </div>\n    <div class=\"history-row textarea\">\n        <label>Medications</label>\n        <textarea formControlName=\"meds\"></textarea>\n    </div>\n    <article class=\"group\">\n        <header>\n            Anticoagulation\n        </header>\n        <div class=\"history-row\">\n            <label>Taken?</label>\n            <cs-toggle [name]=\"'anticoags'\" [options]=\"radioYNU\" formControlName=\"anticoags\"></cs-toggle>\n        </div>\n        <div class=\"history-row\" *ngIf=\"form.get('anticoags').value == 'yes'\">\n            <label>Last Dose</label>\n            <cs-date-time formControlName=\"anticoags_last_dose\"></cs-date-time>\n        </div>\n    </article>\n    <div class=\"history-row\">\n        <label>Weight (Kg)</label>\n        <input formControlName=\"weight\" type=\"number\"/>\n    </div>\n    <div class=\"history-row\">\n        <label>Last Oral Intake</label>\n        <cs-date-time formControlName=\"last_meal\"></cs-date-time>\n    </div>\n\n    <div class=\"history-row options\">\n        <label></label>\n        <button>SAVE\n            <cs-double-click [func]=\"onSave\"></cs-double-click>\n        </button>\n        <button>RESET\n            <cs-double-click [func]=\"onReset\"></cs-double-click>\n        </button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-history/case-history.component.scss":
/*!***************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-history/case-history.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\nform {\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.history-row {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  min-height: 4rem;\n  flex-shrink: 0;\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n@media (min-width: 600px) {\n    .history-row {\n      margin-bottom: 0; } }\n\n@media (min-width: 600px) {\n    .history-row {\n      min-width: 600px; } }\n\n@media (min-width: 600px) {\n    .history-row {\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; } }\n\n.history-row > label {\n    width: 14rem;\n    height: 100%;\n    min-height: 4rem;\n    flex-shrink: 0;\n    color: #ff9539;\n    font-weight: bold;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n@media (min-width: 600px) {\n      .history-row > label {\n        justify-content: flex-end; } }\n\n.history-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .history-row textarea {\n    margin-left: 0;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .history-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .history-row textarea {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .history-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .history-row textarea {\n        min-width: unset;\n        width: 500px; } }\n\n.history-row input:not([type=\"radio\"]):not([type=\"checkbox\"]):focus, .history-row textarea:focus {\n      background: #EEEEEE; }\n\n.history-row textarea {\n    min-height: 12rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\n\n.history-row.options {\n    margin-top: 1.25rem;\n    align-items: center; }\n\n.history-row.options label {\n      display: none; }\n\n@media (min-width: 600px) {\n        .history-row.options label {\n          display: flex; } }\n\n.history-row.options button {\n      position: relative;\n      margin-bottom: 0.5rem;\n      border: 2px solid #A9A9A9;\n      min-height: 3.5rem;\n      width: 60%;\n      max-width: 20rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n\n@media (min-width: 600px) {\n        .history-row.options button {\n          margin-left: 2rem; } }\n\n.history-row.textarea label {\n  align-self: flex-start; }\n\n.group {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid orange;\n  height: auto;\n  width: 100%;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1.5rem; }\n\n.group header {\n    position: absolute;\n    top: 0;\n    left: 2rem;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: bold;\n    text-align: center;\n    background: white; }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-history/case-history.component.ts":
/*!*************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-history/case-history.component.ts ***!
  \*************************************************************************/
/*! exports provided: CaseHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseHistoryComponent", function() { return CaseHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _abstract_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-case */ "../src/app/cases/edit-page/abstract-case.ts");
/* harmony import */ var _edit_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-status.service */ "../src/app/cases/edit-page/edit-status.service.ts");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../notif.service */ "../src/app/notif.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup.service */ "../src/app/cases/edit-page/popup.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CaseHistoryComponent = /** @class */ (function (_super) {
    __extends(CaseHistoryComponent, _super);
    function CaseHistoryComponent(fb, ar, statusService, bs, router, ns, ps) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.ar = ar;
        _this.statusService = statusService;
        _this.bs = bs;
        _this.router = router;
        _this.ns = ns;
        _this.ps = ps;
        _this.radioYNU = [
            { value: "yes", text: "Yes", class: "yes" },
            { value: "no", text: "No", class: "no" },
            { value: "unknown", text: "Unknown", class: "unknown" }
        ];
        _this.onSave = function () {
            _this.save(CaseHistoryComponent_1.backendTable);
        };
        _this.form = _this.fb.group({
            pmhx: [''],
            meds: [''],
            anticoags: [''],
            anticoags_last_dose: [''],
            hopc: [''],
            weight: [''],
            last_meal: [''],
            test: ['']
        });
        _this.route = ar;
        _this.backendService = bs;
        _this.notifService = ns;
        _this.ps = ps;
        return _this;
    }
    CaseHistoryComponent_1 = CaseHistoryComponent;
    CaseHistoryComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    var CaseHistoryComponent_1;
    CaseHistoryComponent.backendTable = "case_histories";
    CaseHistoryComponent = CaseHistoryComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-case-history',
            template: __webpack_require__(/*! ./case-history.component.html */ "../src/app/cases/edit-page/case-history/case-history.component.html"),
            styles: [__webpack_require__(/*! ./case-history.component.scss */ "../src/app/cases/edit-page/case-history/case-history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _edit_status_service__WEBPACK_IMPORTED_MODULE_4__["EditStatusService"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_5__["BackendCaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notif_service__WEBPACK_IMPORTED_MODULE_6__["NotifService"],
            _popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"]])
    ], CaseHistoryComponent);
    return CaseHistoryComponent;
}(_abstract_case__WEBPACK_IMPORTED_MODULE_3__["AbstractCaseComponent"]));



/***/ }),

/***/ "../src/app/cases/edit-page/case-management/case-management.component.html":
/*!*********************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-management/case-management.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n    <div class=\"manage-row\">\r\n        <label>Thrombolysis?</label>\r\n        <cs-toggle [name]=\"'thromb'\" [options]=\"radioYN\" formControlName=\"thrombolysis\"></cs-toggle>\r\n    </div>\r\n    <article class=\"group\" *ngIf=\"form.get('thrombolysis').value === 1\">\r\n        <header>\r\n            Thrombolysis Contraindications\r\n        </header>\r\n\r\n        <div class=\"manage-row\">\r\n            <label class=\"heading\">Inclusion Criteria</label>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Age > 18</label>\r\n            <cs-toggle [name]=\"'18'\" [options]=\"radioYNU\" formControlName=\"age18\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>LVO</label>\r\n            <cs-toggle [name]=\"'lvo'\" [options]=\"radioYNU\" formControlName=\"lvo\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Time of Onset < 4.5hr</label>\r\n            <cs-toggle [name]=\"'onset'\" [options]=\"radioYNU\" formControlName=\"onset\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>No Evidence of ICH</label>\r\n            <cs-toggle [name]=\"ich\" [options]=\"radioYNU\" formControlName=\"ich\"></cs-toggle>\r\n        </div>\r\n\r\n        <div class=\"manage-row\">\r\n            <label class=\"heading\">Absolute Contraindications</label>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Recent Head Trauma or Stroke</label>\r\n            <cs-toggle [name]=\"'new_trauma_haemorrhage'\" [options]=\"radioYN\" formControlName=\"new_trauma_haemorrhage\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Uncontrolled HTN (sBP > 180)</label>\r\n            <cs-toggle [name]=\"'uncontrolled_htn'\" [options]=\"radioYN\" formControlName=\"uncontrolled_htn\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>History of ICH</label>\r\n            <cs-toggle [name]=\"'history_ich'\" [options]=\"radioYN\" formControlName=\"history_ich\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Known Intracranial AVM, Neoplasm or Aneurysm</label>\r\n            <cs-toggle [name]=\"'known_intracranial'\" [options]=\"radioYN\" formControlName=\"known_intracranial\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Active Bleeding</label>\r\n            <cs-toggle [name]=\"'active_bleed'\" [options]=\"radioYN\" formControlName=\"active_bleed\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Endocarditis (incl. Suspected)</label>\r\n            <cs-toggle [name]=\"'endocarditis'\" [options]=\"radioYN\" formControlName=\"endocarditis\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Known Bleeding Diathesis</label>\r\n            <cs-toggle [name]=\"'bleeding_diathesis'\" [options]=\"radioYN\" formControlName=\"bleeding_diathesis\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Abnormal Blood Glucose</label>\r\n            <cs-toggle [name]=\"'abnormal_blood_glucose'\" [options]=\"radioYN\" formControlName=\"abnormal_blood_glucose\"></cs-toggle>\r\n        </div>\r\n\r\n        <div class=\"manage-row\">\r\n            <label class=\"heading\">Relative Contraindications</label>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Rapidly Improving</label>\r\n            <cs-toggle [name]=\"'rapidly_improving'\" [options]=\"radioYN\" formControlName=\"rapidly_improving\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Major Trauma or Surgery in Last 3 Weeks</label>\r\n            <cs-toggle [name]=\"'recent_trauma_surgery'\" [options]=\"radioYN\" formControlName=\"recent_trauma_surgery\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Active Bleeding in Last 3 Weeks</label>\r\n            <cs-toggle [name]=\"'recent_active_bleed'\" [options]=\"radioYN\" formControlName=\"recent_active_bleed\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Seizure at Onset</label>\r\n            <cs-toggle [name]=\"'seizure_onset'\" [options]=\"radioYN\" formControlName=\"seizure_onset\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Recent Arterial Puncture</label>\r\n            <cs-toggle [name]=\"'recent_arterial_puncture'\" [options]=\"radioYN\" formControlName=\"recent_arterial_puncture\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Recent Lumbar Puncture</label>\r\n            <cs-toggle [name]=\"'recent_lumbar_puncture'\" [options]=\"radioYN\" formControlName=\"recent_lumbar_puncture\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Post ACS Pericarditis</label>\r\n            <cs-toggle [name]=\"'post_acs_pericarditis'\" [options]=\"radioYN\" formControlName=\"post_acs_pericarditis\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label>Pregnant</label>\r\n            <cs-toggle [name]=\"'pregnant'\" [options]=\"radioYN\" formControlName=\"pregnant\"></cs-toggle>\r\n        </div>\r\n        <div class=\"manage-row\">\r\n            <label class=\"heading\">Deliver Thrombolysis</label>\r\n        </div>\r\n        <div class=\"manage-row\" *ngIf=\"!form.get('thrombolysis_time_given').value\">\r\n            <label></label>\r\n            <button>Click when Thrombolysis has been delivered\r\n                <cs-double-click [func]=\"onThromb\"></cs-double-click>\r\n            </button>\r\n        </div>\r\n        <div class=\"manage-row\" *ngIf=\"form.get('thrombolysis_time_given').value\">\r\n            <label>Time given</label>\r\n            <cs-date-time formControlName=\"thrombolysis_time_given\"></cs-date-time>\r\n        </div>\r\n    </article>\r\n    <div class=\"manage-row\">\r\n        <label>ECR</label>\r\n        <cs-toggle [name]=\"'ecr'\" [options]=\"radioYN\" formControlName=\"ecr\"></cs-toggle>\r\n    </div>\r\n    <div class=\"manage-row\">\r\n        <label>Surgical Mx</label>\r\n        <cs-toggle [name]=\"'surgical_rx'\" [options]=\"radioYN\" formControlName=\"surgical_rx\"></cs-toggle>\r\n    </div>\r\n    <div class=\"manage-row\">\r\n        <label>Conservative Mx</label>\r\n        <cs-toggle [name]=\"'conservative_rx'\" [options]=\"radioYN\" formControlName=\"conservative_rx\"></cs-toggle>\r\n    </div>\r\n    <div class=\"manage-row\" *ngIf=\"statusService.status.value != 'completed'\">\r\n        <label>Mark Complete</label>\r\n        <button class=\"complete\" (click)=\"onComplete()\">Mark Case as Completed</button>\r\n    </div>\r\n\r\n    <div class=\"manage-row options\">\r\n        <label></label>\r\n        <button>SAVE\r\n            <cs-double-click [func]=\"onSave\"></cs-double-click>\r\n        </button>\r\n        <button>RESET\r\n            <cs-double-click [func]=\"onReset\"></cs-double-click>\r\n        </button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-management/case-management.component.scss":
/*!*********************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-management/case-management.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\nform {\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.manage-row {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  min-height: 4rem;\n  flex-shrink: 0;\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n@media (min-width: 600px) {\n    .manage-row {\n      margin-bottom: 0; } }\n\n@media (min-width: 600px) {\n    .manage-row {\n      min-width: 600px; } }\n\n@media (min-width: 600px) {\n    .manage-row {\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; } }\n\n.manage-row > label {\n    width: 14rem;\n    height: 100%;\n    min-height: 4rem;\n    flex-shrink: 0;\n    color: #ff9539;\n    font-weight: bold;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n@media (min-width: 600px) {\n      .manage-row > label {\n        justify-content: flex-end; } }\n\n.manage-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .manage-row textarea {\n    margin-left: 0;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .manage-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .manage-row textarea {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .manage-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .manage-row textarea {\n        min-width: unset;\n        width: 500px; } }\n\n.manage-row input:not([type=\"radio\"]):not([type=\"checkbox\"]):focus, .manage-row textarea:focus {\n      background: #EEEEEE; }\n\n.manage-row textarea {\n    min-height: 12rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\n\n.manage-row.options {\n    margin-top: 1.25rem;\n    align-items: center; }\n\n.manage-row.options label {\n      display: none; }\n\n@media (min-width: 600px) {\n        .manage-row.options label {\n          display: flex; } }\n\n.manage-row.options button {\n      position: relative;\n      margin-bottom: 0.5rem;\n      border: 2px solid #A9A9A9;\n      min-height: 3.5rem;\n      width: 60%;\n      max-width: 20rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n\n@media (min-width: 600px) {\n        .manage-row.options button {\n          margin-left: 2rem; } }\n\n.manage-row button {\n    position: relative;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .manage-row button {\n        min-width: unset;\n        width: 500px; } }\n\n@media (min-width: 600px) {\n      .manage-row button {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .manage-row button .comnplete {\n        margin-top: 1.5rem; } }\n\n.group {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid orange;\n  height: auto;\n  width: 100%;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1.5rem; }\n\n.group header {\n    position: absolute;\n    top: 0;\n    left: 2rem;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: bold;\n    text-align: center;\n    background: white; }\n\n.heading {\n  width: 100% !important;\n  justify-content: center !important;\n  color: #ff6c00 !important; }\n\n@media (min-width: 600px) {\n    .heading {\n      margin-left: 14rem !important; } }\n\n@media (min-width: 600px) {\n    .heading {\n      width: unset !important; } }\n\n@media (min-width: 600px) {\n    .heading {\n      justify-content: flex-start !important; } }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-management/case-management.component.ts":
/*!*******************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-management/case-management.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CaseManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseManagementComponent", function() { return CaseManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _abstract_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-case */ "../src/app/cases/edit-page/abstract-case.ts");
/* harmony import */ var _edit_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-status.service */ "../src/app/cases/edit-page/edit-status.service.ts");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../notif.service */ "../src/app/notif.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup.service */ "../src/app/cases/edit-page/popup.service.ts");
/* harmony import */ var _case_details_case_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../case-details/case-details.component */ "../src/app/cases/edit-page/case-details/case-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _case_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../case-details */ "../src/app/cases/case-details.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var CaseManagementComponent = /** @class */ (function (_super) {
    __extends(CaseManagementComponent, _super);
    function CaseManagementComponent(fb, ar, statusService, bs, router, ns, ps, locale) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.ar = ar;
        _this.statusService = statusService;
        _this.bs = bs;
        _this.router = router;
        _this.ns = ns;
        _this.ps = ps;
        _this.locale = locale;
        _this.radioYN = [
            { value: 1, text: "Yes", class: "yes" },
            { value: 0, text: "No", class: "no" }
        ];
        _this.radioYNU = [
            { value: "yes", text: "Yes", class: "yes" },
            { value: "no", text: "No", class: "no" },
            { value: "unknown", text: "Unknown", class: "unknown" }
        ];
        _this.onSave = function () {
            _this.save(CaseManagementComponent_1.backendTable);
        };
        _this.onThromb = function () {
            _this.form.get("thrombolysis_time_given").setValue(new Date());
        };
        _this.form = _this.fb.group({
            thrombolysis: [null],
            age18: [{ value: null, disabled: true }],
            lvo: [{ value: null, disabled: true }],
            onset: [{ value: null, disabled: true }],
            ich: [{ value: null, disabled: true }],
            new_trauma_haemorrhage: [null],
            uncontrolled_htn: [null],
            history_ich: [null],
            known_intracranial: [null],
            active_bleed: [null],
            endocarditis: [null],
            bleeding_diathesis: [null],
            abnormal_blood_glucose: [null],
            rapidly_improving: [null],
            recent_trauma_surgery: [null],
            recent_active_bleed: [null],
            seizure_onset: [null],
            recent_arterial_puncture: [null],
            recent_lumbar_puncture: [null],
            post_acs_pericarditis: [null],
            pregnant: [null],
            thrombolysis_time_given: [null],
            ecr: [null],
            surgical_rx: [null],
            conservative_rx: [null],
        });
        _this.route = ar;
        _this.backendService = bs;
        _this.notifService = ns;
        _this.popupService = ps;
        return _this;
    }
    CaseManagementComponent_1 = CaseManagementComponent;
    CaseManagementComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setupInclusionCriteria();
    };
    CaseManagementComponent.prototype.setupInclusionCriteria = function () {
        if (this.case.dob) {
            var agemilli = new Date().getTime() - new Date(this.case.dob).getTime();
            var age = Math.floor(agemilli / 31536000000);
            if (age > 17) {
                this.form.patchValue({ age18: "yes" });
            }
            else {
                this.form.patchValue({ age18: "no" });
            }
        }
        else {
            this.form.patchValue({ age18: "unknown" });
        }
        if (this.case.large_vessel_occlusion || this.case.large_vessel_occlusion === 0) {
            if (this.case.large_vessel_occlusion == "1") {
                this.form.patchValue({ lvo: "yes" });
            }
            else {
                this.form.patchValue({ lvo: "no" });
            }
        }
        else {
            this.form.patchValue({ lvo: "unknown" });
        }
        if (this.case.last_well) {
            var wellmilli = new Date().getTime() - new Date(this.case.last_well).getTime();
            var wellminutes = Math.floor(wellmilli / 60000);
            // 270 mintues is 4.5 hours
            if (wellminutes < 270) {
                this.form.patchValue({ onset: "yes" });
            }
            else {
                this.form.patchValue({ onset: "no" });
            }
        }
        else {
            this.form.patchValue({ onset: "unknown" });
        }
        if (this.case.ich_found || this.case.ich_found === 0) {
            if (this.case.ich_found == "0") {
                this.form.patchValue({ ich: "yes" });
            }
            else {
                this.form.patchValue({ ich: "no" });
            }
        }
        else {
            this.form.patchValue({ ich: "unknown" });
        }
    };
    CaseManagementComponent.prototype.onComplete = function () {
        console.log(this.statusService.status.value);
        var instance = this;
        this.popupService.popup.next({
            html: "Are you sure you want to mark the case as completed?\n                    The current time of completion will be recorded and in future versions, this will lock all data from future editing.",
            buttons: [
                {
                    class: "primary",
                    text: "Complete",
                    click: function () {
                        instance.save(CaseManagementComponent_1.backendTable).subscribe(function () { return instance.completeCase(); });
                    }
                },
                {
                    class: "tertiary",
                    text: "Cancel",
                    click: function () {
                        //TODO
                    }
                }
            ]
        });
    };
    CaseManagementComponent.prototype.completeCase = function () {
        var _this = this;
        var statusData = {
            status: "completed",
            completed_timestamp: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), "yyyy-MM-dd HH:mm", this.locale)
        };
        this.backendService.updateCase(this.case_id, _case_details_case_details_component__WEBPACK_IMPORTED_MODULE_8__["CaseDetailsComponent"].backendTable, statusData)
            .subscribe(function () {
            _this.notifService.addNotif({
                type: "success",
                html: "Succesfully marked this case as Completed."
            });
            _this.updateStatus(statusData);
        }, function () {
            _this.notifService.addNotif({
                type: "error",
                html: "Error marking case as Completed."
            });
        });
    };
    CaseManagementComponent.prototype.updateStatus = function (statusData) {
        var caseDetail = Object.assign(new _case_details__WEBPACK_IMPORTED_MODULE_10__["CaseDetails"](), statusData);
        this.statusService.status.next(caseDetail.status);
        this.statusService.statusTime.next(caseDetail.getStatusTime());
    };
    var CaseManagementComponent_1;
    CaseManagementComponent.backendTable = "case_managements";
    CaseManagementComponent = CaseManagementComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-case-management',
            template: __webpack_require__(/*! ./case-management.component.html */ "../src/app/cases/edit-page/case-management/case-management.component.html"),
            styles: [__webpack_require__(/*! ./case-management.component.scss */ "../src/app/cases/edit-page/case-management/case-management.component.scss")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _edit_status_service__WEBPACK_IMPORTED_MODULE_4__["EditStatusService"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_5__["BackendCaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notif_service__WEBPACK_IMPORTED_MODULE_6__["NotifService"],
            _popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"], String])
    ], CaseManagementComponent);
    return CaseManagementComponent;
}(_abstract_case__WEBPACK_IMPORTED_MODULE_3__["AbstractCaseComponent"]));



/***/ }),

/***/ "../src/app/cases/edit-page/case-radiology/case-radiology.component.html":
/*!*******************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-radiology/case-radiology.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"radiology-row\">\n        <label>CT Available</label>\n        <cs-toggle [name]=\"'available'\" [options]=\"radioYN\" formControlName=\"ct_available\" type=\"number\"></cs-toggle>\n    </div>\n    <div class=\"radiology-row\" *ngIf=\"progress > 0\">\n        <label>Location of Available CT</label>\n        <input type=\"text\" formControlName=\"ct_available_loc\"/>\n    </div>\n    <div class=\"radiology-row\" *ngIf=\"progress > 0\">\n        <label>Patient Arrived in CT </label>\n        <cs-toggle [name]=\"'arrived'\" [options]=\"radioYN\" formControlName=\"arrived_to_ct\"></cs-toggle>\n    </div>\n    <div class=\"radiology-row\" *ngIf=\"progress > 1\">\n        <label>CT Complete</label>\n        <cs-toggle [name]=\"'complete'\" [options]=\"radioYN\" formControlName=\"ct_complete\"></cs-toggle>\n    </div>\n    <div class=\"radiology-row\" *ngIf=\"progress > 2\">\n        <label>ICH on Non-Contrast CT</label>\n        <cs-toggle [name]=\"'ich'\" [options]=\"radioYN\" formControlName=\"ich_found\"></cs-toggle>\n    </div>\n    <div class=\"radiology-row\" *ngIf=\"progress > 3\">\n        <label>Proceed with CTA/CTP</label>\n        <cs-toggle [name]=\"'proceed'\" [options]=\"radioYN\" formControlName=\"do_cta_ctp\"></cs-toggle>\n    </div>\n    <div class=\"radiology-row\" *ngIf=\"progress > 4\">\n        <label>CTA/CTP Complete</label>\n        <cs-toggle [name]=\"'ctp'\" [options]=\"radioYN\" formControlName=\"cta_ctp_complete\"></cs-toggle>\n    </div>\n    <div class=\"radiology-row\" *ngIf=\"progress > 5\">\n        <label>Large Vessel Occlusion</label>\n        <cs-toggle [name]=\"'lvo'\" [options]=\"radioYN\" formControlName=\"large_vessel_occlusion\"></cs-toggle>\n    </div>\n\n    <div class=\"radiology-row options\">\n        <label></label>\n        <button>SAVE\n            <cs-double-click [func]=\"onSave\"></cs-double-click>\n        </button>\n        <button>RESET\n            <cs-double-click [func]=\"onReset\"></cs-double-click>\n        </button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-radiology/case-radiology.component.scss":
/*!*******************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-radiology/case-radiology.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%; }\n\nform {\n  height: 100%;\n  width: 100%;\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.radiology-row {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  min-height: 4rem;\n  flex-shrink: 0;\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n\n@media (min-width: 600px) {\n    .radiology-row {\n      margin-bottom: 0; } }\n\n@media (min-width: 600px) {\n    .radiology-row {\n      min-width: 600px; } }\n\n@media (min-width: 600px) {\n    .radiology-row {\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; } }\n\n.radiology-row > label {\n    width: 14rem;\n    height: 100%;\n    min-height: 4rem;\n    flex-shrink: 0;\n    color: #ff9539;\n    font-weight: bold;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n@media (min-width: 600px) {\n      .radiology-row > label {\n        justify-content: flex-end; } }\n\n.radiology-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .radiology-row textarea {\n    margin-left: 0;\n    border: 2px solid #D8D8D8;\n    min-height: 3.5rem;\n    min-width: 95%;\n    max-width: 500px;\n    flex-shrink: 0;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n\n@media (min-width: 600px) {\n      .radiology-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .radiology-row textarea {\n        margin-left: 2rem; } }\n\n@media (min-width: 600px) {\n      .radiology-row input:not([type=\"radio\"]):not([type=\"checkbox\"]), .radiology-row textarea {\n        min-width: unset;\n        width: 500px; } }\n\n.radiology-row input:not([type=\"radio\"]):not([type=\"checkbox\"]):focus, .radiology-row textarea:focus {\n      background: #EEEEEE; }\n\n.radiology-row textarea {\n    min-height: 12rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\n\n.radiology-row.options {\n    margin-top: 1.25rem;\n    align-items: center; }\n\n.radiology-row.options label {\n      display: none; }\n\n@media (min-width: 600px) {\n        .radiology-row.options label {\n          display: flex; } }\n\n.radiology-row.options button {\n      position: relative;\n      margin-bottom: 0.5rem;\n      border: 2px solid #A9A9A9;\n      min-height: 3.5rem;\n      width: 60%;\n      max-width: 20rem;\n      padding-left: 1rem;\n      padding-right: 1rem; }\n\n@media (min-width: 600px) {\n        .radiology-row.options button {\n          margin-left: 2rem; } }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/case-radiology/case-radiology.component.ts":
/*!*****************************************************************************!*\
  !*** ../src/app/cases/edit-page/case-radiology/case-radiology.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CaseRadiologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseRadiologyComponent", function() { return CaseRadiologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _abstract_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-case */ "../src/app/cases/edit-page/abstract-case.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-status.service */ "../src/app/cases/edit-page/edit-status.service.ts");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../notif.service */ "../src/app/notif.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup.service */ "../src/app/cases/edit-page/popup.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CaseRadiologyComponent = /** @class */ (function (_super) {
    __extends(CaseRadiologyComponent, _super);
    function CaseRadiologyComponent(fb, ar, statusService, bs, router, ns, ps) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.ar = ar;
        _this.statusService = statusService;
        _this.bs = bs;
        _this.router = router;
        _this.ns = ns;
        _this.ps = ps;
        _this.radioYN = [
            { value: 1, text: "Yes", class: "yes" },
            { value: 0, text: "No", class: "no" }
        ];
        _this.progress = 0;
        _this.onSave = function () {
            _this.save(CaseRadiologyComponent_1.backendTable);
        };
        _this.form = _this.fb.group({
            ct_available: [null],
            ct_available_loc: [null],
            arrived_to_ct: [null],
            ct_complete: [null],
            ich_found: [null],
            do_cta_ctp: [null],
            cta_ctp_complete: [null],
            large_vessel_occlusion: [null]
        });
        _this.route = ar;
        _this.backendService = bs;
        _this.notifService = ns;
        _this.ps = ps;
        return _this;
    }
    CaseRadiologyComponent_1 = CaseRadiologyComponent;
    CaseRadiologyComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.checkProgress(this.form.getRawValue());
        this.form.valueChanges.subscribe(function (val) {
            _this.checkProgress(val);
        });
    };
    CaseRadiologyComponent.prototype.checkProgress = function (val) {
        this.progress = 0;
        if (val.ct_available === 1) {
            this.progress++;
        }
        else {
            return;
        }
        if (val.arrived_to_ct === 1) {
            this.progress++;
        }
        else {
            return;
        }
        if (val.ct_complete === 1) {
            this.progress++;
        }
        else {
            return;
        }
        if (val.ich_found === 0) {
            this.progress++;
        }
        else {
            return;
        }
        if (val.do_cta_ctp === 1) {
            this.progress++;
        }
        else {
            return;
        }
        if (val.cta_ctp_complete === 1) {
            this.progress++;
        }
        else {
            return;
        }
    };
    var CaseRadiologyComponent_1;
    CaseRadiologyComponent.backendTable = "case_radiologies";
    CaseRadiologyComponent = CaseRadiologyComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-case-radiology',
            template: __webpack_require__(/*! ./case-radiology.component.html */ "../src/app/cases/edit-page/case-radiology/case-radiology.component.html"),
            styles: [__webpack_require__(/*! ./case-radiology.component.scss */ "../src/app/cases/edit-page/case-radiology/case-radiology.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _edit_status_service__WEBPACK_IMPORTED_MODULE_4__["EditStatusService"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_5__["BackendCaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _notif_service__WEBPACK_IMPORTED_MODULE_6__["NotifService"],
            _popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"]])
    ], CaseRadiologyComponent);
    return CaseRadiologyComponent;
}(_abstract_case__WEBPACK_IMPORTED_MODULE_2__["AbstractCaseComponent"]));



/***/ }),

/***/ "../src/app/cases/edit-page/case-resolver.service.ts":
/*!***********************************************************!*\
  !*** ../src/app/cases/edit-page/case-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: CaseResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseResolverService", function() { return CaseResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "../src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaseResolverService = /** @class */ (function () {
    function CaseResolverService(backend, auth) {
        this.backend = backend;
        this.auth = auth;
    }
    CaseResolverService.prototype.resolve = function (route, state) {
        var params = route.component["parent"] ? route.params : route.parent.params;
        return this.backend.getCase(params.id, route.component["backendTable"]);
        //return of(false);
    };
    CaseResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_case_service__WEBPACK_IMPORTED_MODULE_1__["BackendCaseService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CaseResolverService);
    return CaseResolverService;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/edit-page.component.html":
/*!***********************************************************!*\
  !*** ../src/app/cases/edit-page/edit-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-container\">\r\n\r\n    <nav class=\"edit-nav\">\r\n        <a *ngFor=\"let tab of nav\" routerLink=\"./{{tab.path}}\" routerLinkActive=\"selected\">\r\n            {{tab.name}}\r\n        </a>\r\n    </nav>\r\n    <main class=\"edit-main\">\r\n        <header class=\"edit-status\">\r\n            <header>\r\n                {{statusService.name | async}}\r\n            </header>\r\n            <div class=\"{{statusService.status | async}}\">\r\n                <fa-icon [icon]=\"icon_status\"></fa-icon> {{status_text}} {{(statusService.statusTime | async) | date:\"HH:mm (dd/MM)\"}}\r\n            </div>\r\n            <div>\r\n                <fa-icon [icon]=\"icon_well\"></fa-icon> Last Well {{(statusService.lastWell | async) | date:\"HH:mm (dd/MM)\"}}\r\n            </div>\r\n        </header>\r\n        <article class=\"edit-content\">\r\n            <router-outlet></router-outlet>\r\n        </article>\r\n        <aside class=\"edit-popup\" [@popup] *ngIf=\"displayPopup\">\r\n            <div class=\"popup-main\">\r\n                <header>\r\n                    W a r n i n g\r\n                </header>\r\n                <article>\r\n                    {{popup.html}}\r\n                </article>\r\n                <nav >\r\n                    <button *ngFor=\"let button of popup.buttons\"\r\n                    [class]=\"button.class\"\r\n                    (click)=\"executePopup(button.click)\">\r\n                        {{button.text}}\r\n                    </button>\r\n                </nav>\r\n            </div>\r\n        </aside>\r\n    </main>\r\n</div>\r\n"

/***/ }),

/***/ "../src/app/cases/edit-page/edit-page.component.scss":
/*!***********************************************************!*\
  !*** ../src/app/cases/edit-page/edit-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  width: 100%;\n  flex: 0 0 100%;\n  padding-left: 4vw;\n  padding-right: 4vw;\n  padding-top: 4vh;\n  padding-bottom: 4vh;\n  overflow: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background: transparent; }\n\n.global-menu {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 70vw;\n  z-index: 92;\n  background: #FF7610;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n\n@media (min-width: 600px) {\n    .global-menu {\n      max-width: 300px; } }\n\n.global-menu.active {\n    box-shadow: 10px 0px 20px -5px rgba(0, 0, 0, 0.4);\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s; }\n\n.global-menu-close {\n    margin-bottom: 1.25rem;\n    margin-right: 0.5rem;\n    height: 6vh;\n    min-height: 55px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 1.5rem;\n    color: white;\n    font-weight: bold;\n    background: rgba(255, 115, 10, 0.5);\n    cursor: pointer; }\n\n@media (min-width: 600px) {\n      .global-menu-close {\n        font-size: 2rem; } }\n\n.global-menu-close fa-icon {\n      font-size: 2.5rem; }\n\n.global-menu-welcome {\n    margin-bottom: 2rem;\n    height: 5rem;\n    background: #FFDAB9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-size: 2rem; }\n\n.global-menu-welcome strong {\n      color: #ff730a; }\n\n.global-menu-button {\n    margin-bottom: 1rem;\n    height: 5rem;\n    width: 100%;\n    background: transparent;\n    font-size: 1.8rem;\n    color: white;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n.global-menu-button * {\n      margin-left: 2rem; }\n\n.edit-container {\n  width: 100%;\n  max-width: 1400px;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.edit-nav {\n  z-index: 10;\n  width: 100%;\n  min-height: 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n@media (min-width: 600px) {\n    .edit-nav {\n      justify-content: flex-start;\n      flex-wrap: nowrap; } }\n\n.edit-nav a {\n    height: 5rem;\n    min-width: 50%;\n    flex: 1;\n    background: #ff9539;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-weight: 600;\n    font-size: 1.6rem;\n    font-variant-caps: all-small-caps;\n    cursor: pointer; }\n\n@media (min-width: 600px) {\n      .edit-nav a {\n        margin-left: 0.5rem; } }\n\n@media (min-width: 600px) {\n      .edit-nav a {\n        border-top-left-radius: 0.8rem;\n        border-top-right-radius: 0.8rem; } }\n\n@media (min-width: 600px) {\n      .edit-nav a {\n        min-width: unset;\n        max-width: 12rem; } }\n\n.edit-nav a.selected {\n      background: #ff6c00; }\n\n.edit-main {\n  position: relative;\n  border: 2px solid #ff810e;\n  width: 100%;\n  flex: 1;\n  background: white;\n  display: flex;\n  flex-direction: column; }\n\n.edit-status {\n  position: relative;\n  width: 100%;\n  height: 6rem;\n  background: #ff8324;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.edit-status > header {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    font-size: 1.7rem;\n    color: white;\n    display: flex;\n    align-items: center; }\n\n.edit-status > div {\n    margin-right: 1rem;\n    border-radius: 0.5rem;\n    height: 60%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-size: 1.5rem;\n    background: #FCF6F2;\n    display: flex;\n    align-items: center; }\n\n.edit-status > div.incoming {\n      background: #f9b3a7; }\n\n.edit-status > div.active {\n      background: #ffcca6; }\n\n.edit-status > div.completed {\n      background: #dcf7ba; }\n\n.edit-status > div fa-icon {\n      margin-right: 1rem; }\n\n.edit-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  padding: 2rem;\n  background: white; }\n\n.edit-popup {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ff8324;\n  display: flex;\n  justify-content: center; }\n\n.popup-main {\n  width: 90%;\n  max-width: 600px; }\n\n.popup-main header {\n    margin-top: 2rem;\n    border: 0.3rem solid white;\n    border-radius: 0.5rem;\n    padding-top: 1.8rem;\n    padding-bottom: 1.8rem;\n    text-align: center;\n    font-size: 1.8rem;\n    font-weight: 900;\n    color: white; }\n\n.popup-main article {\n    margin-top: 2rem;\n    color: white;\n    font-size: 1.5rem; }\n\n.popup-main nav {\n    margin-top: 5rem;\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around; }\n\n@media (min-width: 600px) {\n      .popup-main nav {\n        justify-content: flex-end; } }\n\n.popup-main nav button {\n      height: 3rem;\n      padding-left: 2rem;\n      padding-right: 2rem; }\n\n@media (min-width: 600px) {\n        .popup-main nav button {\n          margin-left: 2rem; } }\n\n.popup-main nav button.primary {\n        border: 0.2rem solid white;\n        border-radius: 0.5rem;\n        background: white;\n        color: #ff8324; }\n\n.popup-main nav button.secondary {\n        border: 0.2rem solid white;\n        border-radius: 0.5rem;\n        color: white; }\n\n.popup-main nav button.tertiary {\n        padding-left: 0;\n        color: white; }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/edit-page.component.ts":
/*!*********************************************************!*\
  !*** ../src/app/cases/edit-page/edit-page.component.ts ***!
  \*********************************************************/
/*! exports provided: EditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageComponent", function() { return EditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _edit_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-status.service */ "../src/app/cases/edit-page/edit-status.service.ts");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _case_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../case-details */ "../src/app/cases/case-details.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popup.service */ "../src/app/cases/edit-page/popup.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../header.service */ "../src/app/header.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api.service */ "../src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditPageComponent = /** @class */ (function () {
    function EditPageComponent(route, router, bs, statusService, popupService, hs, api) {
        this.route = route;
        this.router = router;
        this.bs = bs;
        this.statusService = statusService;
        this.popupService = popupService;
        this.hs = hs;
        this.api = api;
        this.nav = [
            {
                name: "Details",
                path: "details"
            },
            {
                name: "History",
                path: "history"
            },
            {
                name: "Emergency",
                path: "ed"
            },
            {
                name: "Assessment",
                path: "assessment"
            },
            {
                name: "Radiology",
                path: "radiology"
            },
            {
                name: "Management",
                path: "management"
            }
        ];
        this.icon_incoming = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAmbulance"];
        this.icon_active = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHospitalAlt"];
        this.icon_completed = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarCheck"];
        //
        this.icon_status = this.icon_incoming;
        this.status_text = "ETA";
        //
        this.icon_well = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserClock"];
        this.displayPopup = false;
    }
    EditPageComponent.prototype.ngOnInit = function () {
        this.setupStatus();
        this.setupPopups();
    };
    EditPageComponent.prototype.setupStatus = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.caseDetail = Object.assign(new _case_details__WEBPACK_IMPORTED_MODULE_6__["CaseDetails"](), data.case);
            _this.statusService.name.next(_this.caseDetail.getName() + " " + _this.caseDetail.getAgeGender());
            _this.statusService.status.next(_this.caseDetail.status);
            _this.statusService.statusTime.next(_this.caseDetail.getStatusTime());
            _this.statusService.lastWell.next(_this.caseDetail.last_well);
        });
        this.statusService.status.subscribe(function (stat) {
            switch (stat) {
                case "incoming":
                    _this.status_text = "ETA";
                    _this.icon_status = _this.icon_incoming;
                    break;
                case "active":
                    _this.status_text = "Arrived";
                    _this.icon_status = _this.icon_active;
                    break;
                case "completed":
                    _this.status_text = "Completed";
                    _this.icon_status = _this.icon_completed;
                    break;
            }
        });
    };
    EditPageComponent.prototype.setupPopups = function () {
        var _this = this;
        this.popupService.popup.subscribe(function (pop) {
            if (pop) {
                _this.popup = pop;
                _this.displayPopup = true;
            }
            else {
                _this.displayPopup = false;
            }
        });
    };
    EditPageComponent.prototype.executePopup = function (func) {
        func();
        this.popupService.popup.next(false);
    };
    EditPageComponent.parent = true;
    EditPageComponent.backendTable = "cases";
    EditPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-edit-page',
            template: __webpack_require__(/*! ./edit-page.component.html */ "../src/app/cases/edit-page/edit-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-page.component.scss */ "../src/app/cases/edit-page/edit-page.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('popup', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'opacity': 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'opacity': 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'opacity': 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _backend_case_service__WEBPACK_IMPORTED_MODULE_5__["BackendCaseService"],
            _edit_status_service__WEBPACK_IMPORTED_MODULE_4__["EditStatusService"],
            _popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"],
            _header_service__WEBPACK_IMPORTED_MODULE_8__["HeaderService"],
            _api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]])
    ], EditPageComponent);
    return EditPageComponent;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/edit-page.routes.ts":
/*!******************************************************!*\
  !*** ../src/app/cases/edit-page/edit-page.routes.ts ***!
  \******************************************************/
/*! exports provided: EDIT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_ROUTES", function() { return EDIT_ROUTES; });
/* harmony import */ var _case_details_case_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-details/case-details.component */ "../src/app/cases/edit-page/case-details/case-details.component.ts");
/* harmony import */ var _case_history_case_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case-history/case-history.component */ "../src/app/cases/edit-page/case-history/case-history.component.ts");
/* harmony import */ var _case_ed_case_ed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case-ed/case-ed.component */ "../src/app/cases/edit-page/case-ed/case-ed.component.ts");
/* harmony import */ var _case_radiology_case_radiology_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./case-radiology/case-radiology.component */ "../src/app/cases/edit-page/case-radiology/case-radiology.component.ts");
/* harmony import */ var _case_assessment_case_assessment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./case-assessment/case-assessment.component */ "../src/app/cases/edit-page/case-assessment/case-assessment.component.ts");
/* harmony import */ var _case_management_case_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./case-management/case-management.component */ "../src/app/cases/edit-page/case-management/case-management.component.ts");
/* harmony import */ var _case_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./case-resolver.service */ "../src/app/cases/edit-page/case-resolver.service.ts");







var caseResolver = {
    case: _case_resolver_service__WEBPACK_IMPORTED_MODULE_6__["CaseResolverService"]
};
var EDIT_ROUTES = [
    { path: '', redirectTo: 'details', pathMatch: 'full' },
    { path: 'details', component: _case_details_case_details_component__WEBPACK_IMPORTED_MODULE_0__["CaseDetailsComponent"], resolve: caseResolver },
    { path: 'history', component: _case_history_case_history_component__WEBPACK_IMPORTED_MODULE_1__["CaseHistoryComponent"], resolve: caseResolver },
    { path: 'ed', component: _case_ed_case_ed_component__WEBPACK_IMPORTED_MODULE_2__["CaseEdComponent"], resolve: caseResolver },
    { path: 'radiology', component: _case_radiology_case_radiology_component__WEBPACK_IMPORTED_MODULE_3__["CaseRadiologyComponent"], resolve: caseResolver },
    { path: 'assessment', component: _case_assessment_case_assessment_component__WEBPACK_IMPORTED_MODULE_4__["CaseAssessmentComponent"], resolve: caseResolver },
    { path: 'management', component: _case_management_case_management_component__WEBPACK_IMPORTED_MODULE_5__["CaseManagementComponent"], resolve: caseResolver }
];


/***/ }),

/***/ "../src/app/cases/edit-page/edit-status.service.ts":
/*!*********************************************************!*\
  !*** ../src/app/cases/edit-page/edit-status.service.ts ***!
  \*********************************************************/
/*! exports provided: EditStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStatusService", function() { return EditStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditStatusService = /** @class */ (function () {
    function EditStatusService() {
        this.name = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.statusTime = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.lastWell = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
    }
    EditStatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EditStatusService);
    return EditStatusService;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/popup.service.ts":
/*!***************************************************!*\
  !*** ../src/app/cases/edit-page/popup.service.ts ***!
  \***************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupService = /** @class */ (function () {
    function PopupService() {
        this.popup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/ui/date-time.component.html":
/*!**************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/date-time.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input (change)=\"update()\" [(ngModel)]=\"date\" type=\"date\"/>\n<input (change)=\"update()\" [(ngModel)]=\"time\" type=\"time\"/>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/date-time.component.scss":
/*!**************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/date-time.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-left: 0;\n  border: 2px solid #D8D8D8;\n  min-height: 3.5rem;\n  min-width: 95%;\n  max-width: 500px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center; }\n  @media (min-width: 600px) {\n    :host {\n      margin-left: 2rem; } }\n  @media (min-width: 600px) {\n    :host {\n      min-width: unset;\n      width: 500px; } }\n  :host:focus {\n    background: #EEEEEE; }\n  :host(.invalid) {\n  border-color: red; }\n  input {\n  height: 100%;\n  width: 50%;\n  display: flex;\n  padding-left: 1rem;\n  padding-right: 1rem; }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/date-time.component.ts":
/*!************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/date-time.component.ts ***!
  \************************************************************/
/*! exports provided: DateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeComponent", function() { return DateTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DateTimeComponent = /** @class */ (function () {
    function DateTimeComponent(locale) {
        this.locale = locale;
        this.invalid = false;
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    DateTimeComponent_1 = DateTimeComponent;
    DateTimeComponent.prototype.ngOnInit = function () {
    };
    DateTimeComponent.prototype.update = function () {
        if (this.date && this.time) {
            this.invalid = false;
            this.val = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(this.date + " " + this.time), "yyyy-MM-dd HH:mm", this.locale);
        }
        else {
            this.val = null;
            this.invalid = true;
        }
        this.onChange(this.val);
    };
    DateTimeComponent.prototype.setDisabledState = function (isDisabled) {
        //TODO:
    };
    DateTimeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DateTimeComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DateTimeComponent.prototype.writeValue = function (obj) {
        if (obj) {
            var d = new Date(obj);
            this.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(d, "yyyy-MM-dd", this.locale);
            this.time = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(d, "HH:mm", this.locale);
            this.update();
        }
    };
    var DateTimeComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.invalid'),
        __metadata("design:type", Boolean)
    ], DateTimeComponent.prototype, "invalid", void 0);
    DateTimeComponent = DateTimeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-date-time',
            template: __webpack_require__(/*! ./date-time.component.html */ "../src/app/cases/edit-page/ui/date-time.component.html"),
            styles: [__webpack_require__(/*! ./date-time.component.scss */ "../src/app/cases/edit-page/ui/date-time.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DateTimeComponent_1; }),
                    multi: true
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String])
    ], DateTimeComponent);
    return DateTimeComponent;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/ui/double-click.component.html":
/*!*****************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/double-click.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [@fadein]=\"active\" >Click again to confirm</span>\n<div [@fadein]=\"active\"  class=\"white\">\n\n</div>\n<div [@fadein]=\"active\"\n(@fadein.done)=\"fadeDone()\"\n[@down]=\"down\"\n(@down.done)=\"downDone()\"\nclass=\"orange\">\n\n</div>\n<div [@green]=\"green\"\n(@green.done)=\"greenDone()\"\nclass=\"green\">\n\n</div>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/double-click.component.scss":
/*!*****************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/double-click.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden; }\n\nspan {\n  position: absolute;\n  z-index: 4;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-weight: 600; }\n\n.white {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white; }\n\n.orange {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: orange; }\n\n.green {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: lightgreen; }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/double-click.component.ts":
/*!***************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/double-click.component.ts ***!
  \***************************************************************/
/*! exports provided: DoubleClickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleClickComponent", function() { return DoubleClickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "../node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoubleClickComponent = /** @class */ (function () {
    function DoubleClickComponent() {
        this.active = "inactive";
        this.down = "start";
        this.green = "inactive";
    }
    DoubleClickComponent.prototype.ngOnInit = function () {
    };
    DoubleClickComponent.prototype.onClick = function () {
        if (this.active == "inactive") {
            this.active = "active";
        }
        else {
            this.green = "active";
            this.func();
        }
    };
    DoubleClickComponent.prototype.fadeDone = function () {
        if (this.active == "active") {
            this.down = "end";
        }
        else {
            this.down = "start";
        }
    };
    DoubleClickComponent.prototype.downDone = function () {
        if (this.down == "end") {
            this.active = "inactive";
        }
    };
    DoubleClickComponent.prototype.greenDone = function () {
        if (this.green == "active") {
            this.green = "inactive";
            this.active = "inactive";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoubleClickComponent.prototype, "func", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DoubleClickComponent.prototype, "onClick", null);
    DoubleClickComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-double-click',
            template: __webpack_require__(/*! ./double-click.component.html */ "../src/app/cases/edit-page/ui/double-click.component.html"),
            styles: [__webpack_require__(/*! ./double-click.component.scss */ "../src/app/cases/edit-page/ui/double-click.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadein', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('down', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('start => end', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('4s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('end => start', [
                    //animate('0s')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('green', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DoubleClickComponent);
    return DoubleClickComponent;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/ui/select-score.component.html":
/*!*****************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/select-score.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"main\" [class.active]=\"!hidden\">{{main}} <a>{{value}}</a></span>\n<fa-icon [icon]=\"icon_down\" class=\"down\"></fa-icon>\n<div class=\"box\" [hidden]=\"hidden\">\n    <span *ngFor=\"let o of options\"\n    (click)=\"onOption(o)\"\n    [class.selected]=\"o.selected\">\n    {{o.text}} <a>{{o.value}}</a>\n    </span>\n</div>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/select-score.component.scss":
/*!*****************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/select-score.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  margin-left: 0;\n  border: 2px solid #D8D8D8;\n  min-height: 3.5rem;\n  min-width: 95%;\n  max-width: 500px;\n  flex-shrink: 0;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: white; }\n  @media (min-width: 600px) {\n    :host {\n      margin-left: 2rem; } }\n  @media (min-width: 600px) {\n    :host {\n      min-width: unset;\n      width: 500px; } }\n  :host:focus {\n    background: #EEEEEE; }\n  :host(.active) {\n  background: #EDEDED; }\n  .main {\n  min-height: 3.5rem;\n  height: 100%;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n  .box {\n  position: absolute;\n  bottom: 0;\n  left: -2px;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  z-index: 2;\n  border: 2px solid #D8D8D8;\n  min-width: calc(100% + 4px);\n  max-height: 14.1rem;\n  overflow-y: auto;\n  background: #F8F8F8; }\n  .box.top {\n    bottom: unset;\n    top: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  .box span {\n    min-height: 3.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer; }\n  .box span:hover {\n      background: #EEEEEE; }\n  .box span.selected {\n      background: #ffe4b4; }\n  .down {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  font-size: 2rem;\n  cursor: pointer; }\n  a {\n  margin-left: auto;\n  font-weight: bold; }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/select-score.component.ts":
/*!***************************************************************!*\
  !*** ../src/app/cases/edit-page/ui/select-score.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectScoreComponent", function() { return SelectScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectScoreComponent = /** @class */ (function () {
    function SelectScoreComponent(_ef) {
        this._ef = _ef;
        this.icon_down = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortDown"];
        this.current = { text: "", value: "" };
        this.main = "";
        this.value = "";
        this.hidden = true;
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    SelectScoreComponent_1 = SelectScoreComponent;
    Object.defineProperty(SelectScoreComponent.prototype, "active", {
        get: function () {
            return !this.hidden;
        },
        enumerable: true,
        configurable: true
    });
    SelectScoreComponent.prototype.ngOnInit = function () {
        // Deep copies the Options array passed in
        // This ensures that the 'selected' characteristic can be tracked without
        // affecting any other Select entity
        this.options = JSON.parse(JSON.stringify(this._options));
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.default) {
                this.onOption(o);
            }
        }
    };
    SelectScoreComponent.prototype.onClick = function (event) {
        this.hidden = this.hidden ? false : true;
        event.clickedSelect = true;
    };
    /**
     * Detects when you 'lose focus' of the select box
     */
    SelectScoreComponent.prototype.onClickOut = function (target) {
        if (!this._ef.nativeElement.contains(target)) {
            if (!this.hidden) {
                this.hidden = true;
            }
        }
    };
    /**
     * Updates the select box value
     */
    SelectScoreComponent.prototype.onOption = function (o) {
        this.current.selected = false;
        this.current = o;
        this.current.selected = true;
        this.main = o.text;
        this.value = o.value;
        this.onChange(this.value);
    };
    SelectScoreComponent.prototype.setDisabledState = function (isDisabled) {
        //TODO:
    };
    SelectScoreComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectScoreComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectScoreComponent.prototype.writeValue = function (obj) {
        // This sets the value to *empty* when eg. clicking the reset button
        if (!obj && obj !== 0) {
            this.onOption({ text: "", value: "" });
            return;
        }
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.value == obj) {
                this.onOption(o);
            }
        }
    };
    var SelectScoreComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("options"),
        __metadata("design:type", Array)
    ], SelectScoreComponent.prototype, "_options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SelectScoreComponent.prototype, "active", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SelectScoreComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SelectScoreComponent.prototype, "onClickOut", null);
    SelectScoreComponent = SelectScoreComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-select-score',
            template: __webpack_require__(/*! ./select-score.component.html */ "../src/app/cases/edit-page/ui/select-score.component.html"),
            styles: [__webpack_require__(/*! ./select-score.component.scss */ "../src/app/cases/edit-page/ui/select-score.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SelectScoreComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SelectScoreComponent);
    return SelectScoreComponent;
}());



/***/ }),

/***/ "../src/app/cases/edit-page/ui/toggle.component.html":
/*!***********************************************************!*\
  !*** ../src/app/cases/edit-page/ui/toggle.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"radiogroup\" [class.disabled]=\"disabled\">\n    <ng-container *ngFor=\"let option of options\">\n        <input id=\"{{name + '-' + option.value}}\" type=\"radio\" [value]=\"option.value\"\n        [name]=\"name\"  [(ngModel)]=\"val\" (change)=\"update()\" [disabled]=\"disabled\"/>\n        <label for=\"{{name + '-' + option.value}}\" [class]=\"option.class\" [class.enabled]=\"!disabled\" >{{option.text}}</label>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/toggle.component.scss":
/*!***********************************************************!*\
  !*** ../src/app/cases/edit-page/ui/toggle.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-left: 0;\n  border: 2px solid #D8D8D8;\n  height: 3.5rem;\n  background: white;\n  display: flex; }\n  @media (min-width: 600px) {\n    div {\n      margin-left: 2rem; } }\n  div.disabled {\n    color: #D8D8D8; }\n  div input[type=\"radio\"] {\n    margin: 0;\n    padding: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  div input[type=\"radio\"]:checked + label.yes {\n      background: lightgreen;\n      color: black; }\n  div input[type=\"radio\"]:checked + label.no {\n      background: lightcoral;\n      color: black; }\n  div input[type=\"radio\"]:checked + label.unknown {\n      background: lightgray;\n      color: black; }\n  div input[type=\"radio\"]:checked + label.incoming {\n      background: #f9b3a7;\n      color: black; }\n  div input[type=\"radio\"]:checked + label.active {\n      background: #ffcca6;\n      color: black; }\n  div input[type=\"radio\"]:disabled + label {\n      cursor: not-allowed; }\n  div label {\n    height: 100%;\n    min-width: 9rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer; }\n  div label:not(:last-of-type) {\n      border-right: 2px solid #D8D8D8; }\n  div label.enabled:hover {\n      background: #EEEEEE; }\n"

/***/ }),

/***/ "../src/app/cases/edit-page/ui/toggle.component.ts":
/*!*********************************************************!*\
  !*** ../src/app/cases/edit-page/ui/toggle.component.ts ***!
  \*********************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
        this.disabled = false;
    }
    ToggleComponent_1 = ToggleComponent;
    ToggleComponent.prototype.ngOnInit = function () {
    };
    ToggleComponent.prototype.update = function () {
        this.onChange(this.val);
    };
    ToggleComponent.prototype.setDisabledState = function (isDisabled) {
        //TODO:
        this.disabled = isDisabled;
    };
    ToggleComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ToggleComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ToggleComponent.prototype.writeValue = function (obj) {
        if (!this.disabled) {
            this.val = obj;
        }
    };
    var ToggleComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ToggleComponent.prototype, "options", void 0);
    ToggleComponent = ToggleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-toggle',
            template: __webpack_require__(/*! ./toggle.component.html */ "../src/app/cases/edit-page/ui/toggle.component.html"),
            styles: [__webpack_require__(/*! ./toggle.component.scss */ "../src/app/cases/edit-page/ui/toggle.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ToggleComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "../src/app/cases/list-page/list-container/list-container.component.html":
/*!*******************************************************************************!*\
  !*** ../src/app/cases/list-page/list-container/list-container.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <tr>\n        <td colspan=\"3\" class=\"list-table-title\">\n            {{status | uppercase}}\n        </td>\n    </tr>\n    <tr class=\"list-table-divider\"></tr>\n    <tr class=\"list-table-header\">\n        <td>\n            Patient\n        </td>\n        <td>\n            Age / Sex\n        </td>\n        <td>\n            {{time}}\n        </td>\n    </tr>\n    <tr class=\"list-table-row\" *ngFor=\"let case of cases\" (click)=\"onClick(case.case_id)\">\n        <td>\n            {{case.getName()}}\n        </td>\n        <td>\n            {{case.getAgeGender()}}\n        </td>\n        <td>\n            {{case.getStatusTime() | date:\"HH:mm (dd/MM)\"}}\n        </td>\n    </tr>\n"

/***/ }),

/***/ "../src/app/cases/list-page/list-container/list-container.component.scss":
/*!*******************************************************************************!*\
  !*** ../src/app/cases/list-page/list-container/list-container.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-bottom: 5%;\n  width: 95%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 1.35rem;\n  /* ROUNDED CORNERS */ }\n  @media (min-width: 600px) {\n    :host {\n      width: 90%; } }\n  @media (min-width: 1200px) {\n    :host {\n      max-width: 30vw; } }\n  :host tr:not(.list-table-divider) {\n    background: #E8E8E8; }\n  :host tr:nth-of-type(odd) {\n    background: rgba(232, 232, 232, 0.4); }\n  :host.incoming .list-table-title {\n    background: #f78d7c; }\n  :host.active .list-table-title {\n    background: #ffb37a; }\n  :host.completed .list-table-title {\n    background: #85e085; }\n  :host td {\n    vertical-align: middle;\n    text-align: center;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.9rem;\n    padding-bottom: 0.9rem; }\n  :host tr:last-child td:first-child {\n    border-bottom-left-radius: 10px; }\n  :host tr:last-child td:last-child {\n    border-bottom-right-radius: 10px; }\n  .list-table-title {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  width: 100%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: white;\n  font-weight: 600;\n  font-size: 2.0rem; }\n  @media (min-width: 600px) {\n    .list-table-title {\n      font-size: 2.0rem; } }\n  .list-table-header {\n  font-weight: 600;\n  color: #707070;\n  font-size: 1.5rem; }\n  @media (min-width: 600px) {\n    .list-table-header {\n      font-size: 1.5rem; } }\n  .list-table-divider {\n  height: 0.5rem; }\n  .list-table-row {\n  cursor: pointer; }\n  .list-table-row:hover {\n    background: #c2c2c2 !important; }\n"

/***/ }),

/***/ "../src/app/cases/list-page/list-container/list-container.component.ts":
/*!*****************************************************************************!*\
  !*** ../src/app/cases/list-page/list-container/list-container.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainerComponent", function() { return ListContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListContainerComponent = /** @class */ (function () {
    function ListContainerComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    Object.defineProperty(ListContainerComponent.prototype, "cases", {
        get: function () {
            return this._cases;
        },
        set: function (list) {
            var _this = this;
            this._cases = list.filter(function (c) { return c.status == _this.status; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListContainerComponent.prototype, "time", {
        get: function () {
            switch (this.status) {
                case "incoming":
                    return "ETA";
                case "active":
                    return "Arrived";
                case "completed":
                    return "Completed";
            }
        },
        enumerable: true,
        configurable: true
    });
    ListContainerComponent.prototype.ngOnInit = function () {
    };
    ListContainerComponent.prototype.onClick = function (case_id) {
        this.router.navigate(["../edit/" + case_id], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListContainerComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ListContainerComponent.prototype, "cases", null);
    ListContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[csListContainer]',
            template: __webpack_require__(/*! ./list-container.component.html */ "../src/app/cases/list-page/list-container/list-container.component.html"),
            styles: [__webpack_require__(/*! ./list-container.component.scss */ "../src/app/cases/list-page/list-container/list-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListContainerComponent);
    return ListContainerComponent;
}());



/***/ }),

/***/ "../src/app/cases/list-page/list-page.component.html":
/*!***********************************************************!*\
  !*** ../src/app/cases/list-page/list-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav id=\"js-menu\" class=\"global-menu\" [class.active]=\"active | async\">\r\n    <div id=\"js-menu-close\" class=\"global-menu-close\" (click)=\"clickMenu()\">\r\n        <fa-icon [icon]=\"icon_times\"></fa-icon>\r\n    </div>\r\n\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('new')\">\r\n        <fa-icon [icon]=\"icon_plus\" ></fa-icon> <span>NEW PATIENT</span>\r\n    </button>\r\n\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('events')\">\r\n        <fa-icon [icon]=\"icon_list\"></fa-icon> <span>EVENT LOG</span>\r\n    </button>\r\n\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('settings')\">\r\n        <fa-icon [icon]=\"icon_cog\"></fa-icon> <span>SETTINGS</span>\r\n    </button>\r\n</nav> -->\r\n<table csListContainer\r\n[status]=\"'incoming'\"\r\n[cases]=\"cases | async\">\r\n</table>\r\n\r\n<table csListContainer\r\n[status]=\"'active'\"\r\n[cases]=\"cases | async\">\r\n</table>\r\n\r\n<table csListContainer\r\n[status]=\"'completed'\"\r\n[cases]=\"cases | async\">\r\n</table>\r\n"

/***/ }),

/***/ "../src/app/cases/list-page/list-page.component.scss":
/*!***********************************************************!*\
  !*** ../src/app/cases/list-page/list-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  width: 100%;\n  flex: 0 0 100%;\n  padding-top: 2vh;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background: transparent; }\n  @media (min-width: 1200px) {\n    :host {\n      flex-direction: row;\n      align-items: flex-start;\n      justify-content: space-around; } }\n  .global-menu {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 70vw;\n  z-index: 92;\n  background: #FF7610;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n  @media (min-width: 600px) {\n    .global-menu {\n      max-width: 300px; } }\n  .global-menu.active {\n    box-shadow: 10px 0px 20px -5px rgba(0, 0, 0, 0.4);\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s; }\n  .global-menu-close {\n    margin-bottom: 1.25rem;\n    margin-right: 0.5rem;\n    height: 6vh;\n    min-height: 55px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 1.5rem;\n    color: white;\n    font-weight: bold;\n    background: rgba(255, 115, 10, 0.5);\n    cursor: pointer; }\n  @media (min-width: 600px) {\n      .global-menu-close {\n        font-size: 2rem; } }\n  .global-menu-close fa-icon {\n      font-size: 2.5rem; }\n  .global-menu-welcome {\n    margin-bottom: 2rem;\n    height: 5rem;\n    background: #FFDAB9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-size: 2rem; }\n  .global-menu-welcome strong {\n      color: #ff730a; }\n  .global-menu-button {\n    margin-bottom: 1rem;\n    height: 5rem;\n    width: 100%;\n    background: transparent;\n    font-size: 1.8rem;\n    color: white;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n  .global-menu-button * {\n      margin-left: 2rem; }\n  .global-menu-button:hover {\n  background: #b35900; }\n"

/***/ }),

/***/ "../src/app/cases/list-page/list-page.component.ts":
/*!*********************************************************!*\
  !*** ../src/app/cases/list-page/list-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../header.service */ "../src/app/header.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notif.service */ "../src/app/notif.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPageComponent = /** @class */ (function () {
    function ListPageComponent(backendService, hs, route, notifs, router) {
        this.backendService = backendService;
        this.hs = hs;
        this.route = route;
        this.notifs = notifs;
        this.router = router;
        this.index = 1;
        this.icon_plus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.icon_times = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.icon_list = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faListAlt"];
        this.icon_cog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCog"];
    }
    ListPageComponent.prototype.ngOnInit = function () {
        this.cases = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.getCases();
    };
    ListPageComponent.prototype.getCases = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.cases.next(data.list);
        });
    };
    Object.defineProperty(ListPageComponent.prototype, "active", {
        get: function () {
            return this.hs.subscribeToMenu();
        },
        enumerable: true,
        configurable: true
    });
    ListPageComponent.prototype.clickMenu = function () {
        this.hs.toggleMenu();
    };
    ListPageComponent.prototype.onMenuClick = function (option) {
        switch (option) {
            case "new":
                this.router.navigate(["../add/"], { relativeTo: this.route });
                break;
            default:
                this.notifs.addNotif({
                    type: "error",
                    html: "Unfortunately, this feature is not enabled yet."
                });
        }
    };
    ListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-list-page',
            template: __webpack_require__(/*! ./list-page.component.html */ "../src/app/cases/list-page/list-page.component.html"),
            styles: [__webpack_require__(/*! ./list-page.component.scss */ "../src/app/cases/list-page/list-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_backend_case_service__WEBPACK_IMPORTED_MODULE_3__["BackendCaseService"],
            _header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _notif_service__WEBPACK_IMPORTED_MODULE_6__["NotifService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "../src/app/cases/list-page/list-resolver.service.ts":
/*!***********************************************************!*\
  !*** ../src/app/cases/list-page/list-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: ListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResolverService", function() { return ListResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend-case.service */ "../src/app/cases/backend-case.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "../src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListResolverService = /** @class */ (function () {
    function ListResolverService(backend, auth) {
        this.backend = backend;
        this.auth = auth;
    }
    ListResolverService.prototype.resolve = function (route, state) {
        return this.backend.getCases();
    };
    ListResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_backend_case_service__WEBPACK_IMPORTED_MODULE_1__["BackendCaseService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ListResolverService);
    return ListResolverService;
}());



/***/ }),

/***/ "../src/app/header.component.html":
/*!****************************************!*\
  !*** ../src/app/header.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"js-menu\" class=\"global-menu\" [class.active]=\"active | async\">\r\n    <div id=\"js-menu-close\" class=\"global-menu-close\" (click)=\"onClick()\">\r\n        <fa-icon [icon]=\"icon_times\"></fa-icon>\r\n    </div>\r\n    <!-- <div class=\"list-menu-welcome\">\r\n        <span>Welcome Back,</span> <strong>Daniel Shell</strong>\r\n    </div> -->\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('home')\">\r\n        <fa-icon [icon]=\"icon_home\" ></fa-icon> <span>HOME</span>\r\n    </button>\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('new')\">\r\n        <fa-icon [icon]=\"icon_plus\" ></fa-icon> <span>NEW PATIENT</span>\r\n    </button>\r\n\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('events')\">\r\n        <fa-icon [icon]=\"icon_list\"></fa-icon> <span>EVENT LOG</span>\r\n    </button>\r\n\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('settings')\">\r\n        <fa-icon [icon]=\"icon_cog\"></fa-icon> <span>SETTINGS</span>\r\n    </button>\r\n    <button class=\"global-menu-button\" (click)=\"onMenuClick('settings')\">\r\n        <fa-icon [icon]=\"icon_signout\"></fa-icon> <span> LOGOUT </span>\r\n    </button>\r\n</nav>\r\n\r\n<button id=\"js-menu-open\" class=\"global-header-menu headeritem\" (click)=\"onClick()\">\r\n    <fa-icon [icon]=\"icon_bars\"></fa-icon>\r\n</button>\r\n<article class=\"global-header-logo\" [routerLink]=\"''\">\r\n    <img src=\"assets/logo-white.png\"/>\r\n    <strong>CODE</strong> STROKE\r\n</article>\r\n<nav class=\"global-header-options headeritem\">\r\n    <div class=\"notif-toggle\" (click)=\"pushNotifActive=!pushNotifActive; pushnotifClick()\">\r\n    <!-- <div class=\"notif-toggle\" (click)=\"pushnotifClick()\"> -->\r\n        <fa-icon *ngIf=\"!pushNotifActive\" [icon]=\"icon_bell_slash\" style=\"color: red;\"></fa-icon>\r\n        <fa-icon *ngIf=\"pushNotifActive\" [icon]=\"icon_bell\" style=\"color: white;\"></fa-icon>\r\n    </div>\r\n    <!-- <fa-icon [icon]=\"icon_signout\"></fa-icon> -->\r\n</nav>\r\n"

/***/ }),

/***/ "../src/app/header.component.scss":
/*!****************************************!*\
  !*** ../src/app/header.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 90;\n  width: 100%;\n  flex: 0 0 6vh;\n  min-height: 55px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: linear-gradient(to right, #ff730a, #ff8120, #ff8e31, #ff9a41, #ffa551);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); }\n\n.global-header-menu {\n  font-size: 2rem;\n  color: #FFF5EE; }\n\n@media (min-width: 600px) {\n    .global-header-menu {\n      font-size: 3rem; } }\n\n.global-header-menu fa-icon {\n    margin-left: 2vw; }\n\n.global-menu-button:hover {\n  background-color: #e57820; }\n\n.global-header-logo {\n  height: 100%;\n  font-size: 2.5rem;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: margin-left;\n  cursor: pointer; }\n\n@media (min-width: 600px) {\n    .global-header-logo {\n      font-size: 3rem; } }\n\n.global-header-logo img {\n    height: 80%;\n    width: auto; }\n\n@media (min-width: 600px) {\n      .global-header-logo img {\n        height: 90%; } }\n\n.global-header-options {\n  font-size: 2rem;\n  color: #FFF5EE;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n@media (min-width: 600px) {\n    .global-header-options {\n      font-size: 2.5rem; } }\n\n.global-header-options fa-icon {\n    margin-right: 2vw; }\n\n.global-menu {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 70vw;\n  z-index: 92;\n  background: #FF7610;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n\n@media (min-width: 600px) {\n    .global-menu {\n      max-width: 300px; } }\n\n.global-menu.active {\n    box-shadow: 10px 0px 20px -5px rgba(0, 0, 0, 0.4);\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s; }\n\n.global-menu-close {\n    margin-bottom: 1.25rem;\n    margin-right: 0.5rem;\n    height: 6vh;\n    min-height: 55px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 1.5rem;\n    color: white;\n    font-weight: bold;\n    background: rgba(255, 115, 10, 0.5);\n    cursor: pointer; }\n\n@media (min-width: 600px) {\n      .global-menu-close {\n        font-size: 2rem; } }\n\n.global-menu-close fa-icon {\n      font-size: 2.5rem; }\n\n.global-menu-welcome {\n    margin-bottom: 2rem;\n    height: 5rem;\n    background: #FFDAB9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-size: 2rem; }\n\n.global-menu-welcome strong {\n      color: #ff730a; }\n\n.global-menu-button {\n    margin-bottom: 1rem;\n    height: 5rem;\n    width: 100%;\n    background: transparent;\n    font-size: 1.8rem;\n    color: white;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n\n.global-menu-button * {\n      margin-left: 2rem; }\n\n.notif-toggle {\n  cursor: pointer; }\n\n.headeritem {\n  flex: 1;\n  display: flex; }\n\n.headeritem:first-child > span {\n  margin-right: auto; }\n\n.headeritem:last-child > span {\n  margin-left: auto; }\n"

/***/ }),

/***/ "../src/app/header.component.ts":
/*!**************************************!*\
  !*** ../src/app/header.component.ts ***!
  \**************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.service */ "../src/app/header.service.ts");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notif.service */ "../src/app/notif.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(hs, route, router, notifs) {
        this.hs = hs;
        this.route = route;
        this.router = router;
        this.notifs = notifs;
        this.icon_bars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.icon_bell = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBell"];
        this.icon_bell_slash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBellSlash"];
        this.icon_signout = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignOutAlt"];
        this.icon_plus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.icon_list = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.icon_cog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.icon_home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"];
        this.icon_times = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.pushNotifActive = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        var OneSignal = window['OneSignal'] || [];
        console.log("bell state is " + this.pushNotifActive);
        this.getSubscriptionState().then(function (state) {
            if (state.isPushEnabled) {
                console.log(_this.pushNotifActive);
                if (!that.pushNotifActive) {
                    console.log("button init state on");
                    that.pushNotifActive = !that.pushNotifActive;
                }
            }
            else {
                if (state.isOptedOut) {
                    OneSignal.push(function () {
                        OneSignal.setSubscription(true);
                    });
                    if (!that.pushNotifActive) {
                        console.log("button toggled on and onesignal activated");
                        that.pushNotifActive = !that.pushNotifActive;
                    }
                }
            }
        });
    };
    Object.defineProperty(HeaderComponent.prototype, "active", {
        get: function () {
            return this.hs.subscribeToMenu();
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.onClick = function () {
        this.hs.toggleMenu();
    };
    HeaderComponent.prototype.onMenuClick = function (option) {
        switch (option) {
            case "home":
                this.router.navigate([""]);
                break;
            case "new":
                this.router.navigate(["/cases/add/"]);
                break;
            default:
                this.notifs.addNotif({
                    type: "error",
                    html: "Unfortunately, this feature is not enabled yet."
                });
        }
    };
    HeaderComponent.prototype.pushnotifClick = function () {
        var _this = this;
        var that = this;
        var OneSignal = window['OneSignal'] || [];
        console.log("bell state is " + this.pushNotifActive);
        this.getSubscriptionState().then(function (state) {
            if (state.isPushEnabled) {
                console.log(_this.pushNotifActive);
                OneSignal.push(function () {
                    OneSignal.setSubscription(false);
                });
                if (that.pushNotifActive) {
                    console.log("button toggled off");
                    that.pushNotifActive = !that.pushNotifActive;
                }
                console.log('user unsubscribed');
            }
            else {
                if (state.isOptedOut) {
                    OneSignal.push(function () {
                        OneSignal.setSubscription(true);
                    });
                    if (!that.pushNotifActive) {
                        console.log("button toggled on");
                        that.pushNotifActive = !that.pushNotifActive;
                    }
                    console.log('user subscribed');
                }
            }
        });
    };
    HeaderComponent.prototype.getSubscriptionState = function () {
        var OneSignal = window['OneSignal'] || [];
        return Promise.all([
            OneSignal.isPushNotificationsEnabled(),
            OneSignal.isOptedOut()
        ]).then(function (result) {
            var isPushEnabled = result[0];
            var isOptedOut = result[1];
            return {
                isPushEnabled: isPushEnabled,
                isOptedOut: isOptedOut
            };
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-header',
            template: __webpack_require__(/*! ./header.component.html */ "../src/app/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "../src/app/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notif_service__WEBPACK_IMPORTED_MODULE_4__["NotifService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../src/app/header.service.ts":
/*!************************************!*\
  !*** ../src/app/header.service.ts ***!
  \************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.menuStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    HeaderService.prototype.toggleMenu = function () {
        if (this.menuStatus.value) {
            this.menuStatus.next(false);
        }
        else {
            this.menuStatus.next(true);
        }
    };
    HeaderService.prototype.hideMenu = function () {
        this.menuStatus.next(false);
    };
    HeaderService.prototype.subscribeToMenu = function () {
        return this.menuStatus.asObservable();
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "../src/app/login-layout.component.html":
/*!**********************************************!*\
  !*** ../src/app/login-layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"login-container\" [formGroup]='loginForm' (ngSubmit)='onSubmit.next()' class=\"login-container\">\n    <header class=\"login-header\">\n        <div>\n            <img src=\"assets/logo-white.png\"/>\n        </div>\n        <span><strong style=\"font-weight: 800\">CODE</strong> Stroke</span>\n    </header>\n\n    <div class=\"login-inputs\">\n        <input type=\"text\" class=\"login-input\" placeholder=\"Username\" formControlName=\"username\"/>\n        <input type=\"text\" class=\"login-input\" placeholder=\"Password\" formControlName=\"password\"/>\n    </div>\n    <div class=\"login-submit\">\n        <button><Strong>Login</Strong></button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../src/app/login-layout.component.scss":
/*!**********************************************!*\
  !*** ../src/app/login-layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to bottom, #ff730a, #ff8120, #ff8e31, #ff9a41, #ffa551); }\n\n.login-container {\n  height: 100%;\n  min-height: 550px;\n  width: 90%;\n  max-width: 600px;\n  padding-top: 5%;\n  padding-bottom: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.login-header {\n  flex-basis: 40%;\n  display: flex;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.login-header div {\n    height: 20vh;\n    width: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.login-header div img {\n      height: 100%;\n      width: auto; }\n\n.login-header span {\n    color: white;\n    font-size: 4.5rem;\n    font-family: 'Raleway', sans-serif; }\n\n.login-header span strong {\n      font-weight: 800;\n      margin-right: 0.5rem; }\n\n.login-inputs {\n  height: 25%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.login-inputs input, .login-inputs select {\n    border-radius: 0.5rem;\n    width: 100%;\n    height: 8vh;\n    min-height: 40px;\n    padding: 0.25rem 01.5rem;\n    background: white;\n    font-size: 2rem;\n    font-family: 'Raleway', sans-serif;\n    font-variant-caps: all-small-caps; }\n\n.login-submit {\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.login-submit button {\n    border: 0.35rem solid rgba(255, 255, 255, 0.4);\n    border-radius: 0.8rem;\n    width: 100%;\n    height: 8vh;\n    min-height: 40px;\n    background: rgba(255, 255, 255, 0.2);\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 2rem;\n    font-family: 'Raleway', sans-serif;\n    font-variant-caps: all-small-caps; }\n"

/***/ }),

/***/ "../src/app/login-layout.component.ts":
/*!********************************************!*\
  !*** ../src/app/login-layout.component.ts ***!
  \********************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "../src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent(auth, router, fb) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.loginForm = this.fb.group({
            username: ['test_users', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['password']
        });
        this.onSubmit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // All submits (clicks, pressing enters) are observed here
        this.onSubmit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200)).subscribe(function () {
            _this.checkForm();
        });
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
        if (this.auth.loginState.value) {
            this.router.navigate([""]);
        }
    };
    LoginLayoutComponent.prototype.checkForm = function () {
        var _this = this;
        var user = this.loginForm.get("username").value;
        var pass = this.loginForm.get("password").value;
        this.auth.authenticate(user, pass).subscribe(function (val) {
            console.log(val);
            if (val) {
                _this.router.navigate([""]);
            }
        });
    };
    LoginLayoutComponent.prototype.ngOnDestroy = function () { };
    LoginLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-login-layout',
            template: __webpack_require__(/*! ./login-layout.component.html */ "../src/app/login-layout.component.html"),
            styles: [__webpack_require__(/*! ./login-layout.component.scss */ "../src/app/login-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "../src/app/login-layout.guard.ts":
/*!****************************************!*\
  !*** ../src/app/login-layout.guard.ts ***!
  \****************************************/
/*! exports provided: LoginLayoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutGuard", function() { return LoginLayoutGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "../src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginLayoutGuard = /** @class */ (function () {
    function LoginLayoutGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginLayoutGuard.prototype.canActivate = function (next, state) {
        if (this.auth.loginState.value) {
            this.router.navigate([""]);
            return false;
        }
        else {
            return true;
        }
    };
    LoginLayoutGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginLayoutGuard);
    return LoginLayoutGuard;
}());



/***/ }),

/***/ "../src/app/main-layout.component.html":
/*!*********************************************!*\
  !*** ../src/app/main-layout.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"global-container\">\n    <cs-header></cs-header>\n    <main class=\"global-main\">\n        <router-outlet></router-outlet>\n    </main>\n    <div class=\"notif-bar\">\n        <div *ngFor=\"let notif of notifs\" class=\"notif\"\n        [ngClass]=\"{\n            'success': notif.type == 'success',\n            'error': notif.type == 'error',\n            'warning': notif.type == 'warning'\n        }\"\n        (click)=\"onNotifClick(notif.id)\"\n        [@notif]>\n            <div class=\"notif-box\">\n                <header>\n                    {{notif.type | uppercase}}:\n                </header>\n                <span [innerHtml]=\"notif.html\">\n\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../src/app/main-layout.component.scss":
/*!*********************************************!*\
  !*** ../src/app/main-layout.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notif-bar {\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 5rem;\n  background: transparent;\n  pointer-events: none; }\n  .notif-bar.active {\n    box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3); }\n  .notif {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding-left: 4vw;\n  padding-right: 4vw;\n  font-size: 1.6rem;\n  cursor: pointer;\n  pointer-events: all;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n  .notif.success {\n    background: #5dd879;\n    border-top: 1px solid #2dbc4e; }\n  .notif.warning {\n    background: #ffdb6d;\n    border-top: 1px solid #ffc721; }\n  .notif.error {\n    background: #eb8c95;\n    border-top: 1px solid #e04b59; }\n  .notif-box {\n  width: 100%;\n  max-width: 1400px;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n  .notif-box header {\n    font-size: 1.6rem;\n    font-weight: bold; }\n  .notif-box span {\n    margin-left: 2rem;\n    font-size: 1.5rem; }\n"

/***/ }),

/***/ "../src/app/main-layout.component.ts":
/*!*******************************************!*\
  !*** ../src/app/main-layout.component.ts ***!
  \*******************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notif.service */ "../src/app/notif.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(notifService) {
        this.notifService = notifService;
        this.notifs = [];
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifService.addQueue.subscribe(function (notif) {
            _this.notifs.push(notif);
        });
        this.notifService.deleteQueue.subscribe(function (val) {
            // If we are deleting a certain Notif with a specific ID
            if (typeof val === 'string') {
                var index = false;
                for (var i = 0; i < _this.notifs.length; i++) {
                    if (_this.notifs[i].id == val) {
                        _this.notifs.splice(i, 1);
                        break;
                    }
                }
                // Else we are just deleting the most recent Notif
            }
            else {
                _this.notifs.pop();
            }
            if (_this.notifs.length > 0) {
                _this.notifService.triggerDelete();
            }
        });
    };
    MainLayoutComponent.prototype.onNotifClick = function (id) {
        this.notifService.deleteNotif(id);
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cs-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "../src/app/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "../src/app/main-layout.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('notif', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', 'opacity': 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', 'opacity': 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)', 'opacity': 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_notif_service__WEBPACK_IMPORTED_MODULE_2__["NotifService"]])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "../src/app/notif.service.ts":
/*!***********************************!*\
  !*** ../src/app/notif.service.ts ***!
  \***********************************/
/*! exports provided: NotifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifService", function() { return NotifService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotifService = /** @class */ (function () {
    function NotifService() {
        var _this = this;
        // Time notification remains active in Miliseconds
        this.activeTime = 2000;
        this.addQueue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.deleteQueue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.triggerDeleteQueue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.addQueue.subscribe(function (val) {
            _this.triggerDeleteQueue.next(true);
        });
        this.triggerDeleteQueue.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(_this.activeTime); })).subscribe(function (val) {
            _this.deleteQueue.next(true);
        });
    }
    NotifService.prototype.addNotif = function (notif) {
        notif.id = Guid.newGuid();
        this.addQueue.next(notif);
    };
    NotifService.prototype.deleteNotif = function (id) {
        this.deleteQueue.next(true);
    };
    NotifService.prototype.triggerDelete = function () {
        this.triggerDeleteQueue.next(true);
    };
    NotifService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotifService);
    return NotifService;
}());

var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());


/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Documents\Programming\Github\codestroke\codestroke-angular\src\main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map