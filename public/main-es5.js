(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>My Application</span>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/header/header.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/components/header/header.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <a [routerLink]=\"['/home']\">\n        <img src=\"../../../../../assets/images/sync.png\" alt=\"Sync Logo\" class=logo>\n    </a>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/login-box/login-box.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/components/login-box/login-box.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"login-box\">\n        <div class=\"headline-container\">\n          <h1>Log In</h1>\n          <p class=\"grey-text\">Need an account ? <a [routerLink]=\"['/signup']\" class=\"link-blue\">Sign Up</a></p>\n        </div>\n\n        <form [formGroup]=\"loginForm\">\n\n            <!-- {{ loginForm.value | json }} -->\n\n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Email\" formControlName=\"email\">\n            </mat-form-field>\n            <div *ngIf=\"formSubmitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n\n\n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Password\" [type]=\"fieldTextType ? 'text' : 'password'\" formControlName=\"password\">\n                <mat-icon matSuffix class=\"eye-icon\" (click)=\"toggleFieldTextType()\">remove_red_eye</mat-icon>\n            </mat-form-field>\n            <div *ngIf=\"formSubmitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n            \n\n            <div class=\"submit-button-container\">\n                <div>\n                    <mat-checkbox \n                      color=\"primary\" \n                      formControlName=\"keepConnection\"\n                    >\n                      Keep me signed in\n                    </mat-checkbox>\n                </div>\n                \n                <div class=\"submit-button-container\">\n                    <button mat-raised-button type=\"submit\" class=\"submit-button primary-color\" (click)=\"onSubmit()\"> Log In </button>\n                </div>\n            </div>\n\n            \n\n      </form>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/signup-box/signup-box.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/components/signup-box/signup-box.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"signup-box\">\n        <div class=\"headline-container\">\n          <h1>Sign Up</h1>\n          <p class=\"grey-text\">Already have an account ? <a [routerLink]=\"['/login']\" class=\"link-blue\">Log In</a></p>\n        </div>\n\n        <form [formGroup]=\"signupForm\">\n\n            <!-- {{ signupForm.value | json }} -->\n\n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Username\" formControlName=\"username\">\n            </mat-form-field>\n            <div *ngIf=\"formSubmitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n\n\n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Email\" formControlName=\"email\">\n            </mat-form-field>\n            <div *ngIf=\"formSubmitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n\n\n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Password\" [type]=\"fieldTextType ? 'text' : 'password'\" formControlName=\"password\">\n                <mat-icon matSuffix class=\"eye-icon\" (click)=\"toggleFieldTextType()\">remove_red_eye</mat-icon>\n            </mat-form-field>\n            <div *ngIf=\"formSubmitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n\n\n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Confirm Password\" [type]=\"fieldTextType ? 'text' : 'password'\" formControlName=\"confirmPassword\">\n                <mat-icon matSuffix class=\"eye-icon\" (click)=\"toggleFieldTextType()\">remove_red_eye</mat-icon>\n            </mat-form-field>\n            <div *ngIf=\"formSubmitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.confirmPassword.errors.required\">Please confirm your password</div>\n                <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n            \n\n            <div class=\"submit-button-container\">\n                <div class=\"submit-button-container\">\n                    <button mat-raised-button type=\"submit\" class=\"submit-button primary-color\" (click)=\"onSubmit()\"> Sign up </button>\n                </div>\n            </div>\n\n      </form>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/login/login.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/pages/login/login.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-login-box></app-login-box>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/signup/signup.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/pages/signup/signup.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-signup-box></app-signup-box>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/landing/pages/home/home.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/landing/pages/home/home.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header>\n        <a href=\"#\">\n            <img src=\"../../../../assets/images/sync.png\" alt=\"sync logo\" class=\"logo\">\n        </a>\n\n        <nav>\n            <img src=\"../../../../assets/images/ham.svg\" alt=\"toggle menu\" class=\"menu hide-desktop\" id=\"menu\"> \n\n            <ul class=\"show-desktop hide-mobile\" id=\"nav\"> \n                <li id=\"exit\" class=\"exit-btn show-mobile hide-desktop\">\n                    <img src=\"../../../../assets/images/exit.svg\" alt=\"exit button\">\n                </li>\n                <li><a href=\"#\">About</a></li>\n                <li><a [routerLink]=\"['/signup']\">Sign Up</a></li>\n                <li><a [routerLink]=\"['/login']\">Login In</a></li>\n            </ul>\n        </nav>\n    </header>\n\n    <section>\n        <div class=\"core-section-1\">\n            <img src=\"../../../../assets/images/mirage-romantic-relationships.png\" alt=\"illustration\" class=\"illustration\">\n            <div>\n                <h1>The app that will bring you together</h1>\n                <p class=\"subhead\">Watch YouTube videos & Listen to music <b>synchronously</b> with your loved ones. Remove the distance and have a quality time!</p>\n                <a [routerLink]=\"['/signup']\" class=\"cta\"> Get Started </a>\n            </div>\n        </div>\n        \n        <div class=\"core-section-2\">\n            <div class=\"title-subhead\">\n                <h1>The app that will bring you together</h1>\n                <p class=\"subhead\"><span class=\"bold\">Watch</span> YouTube videos & <span class=\"bold\">Listen</span> to music <b>synchronously</b> with your loved ones. Remove the distance and have a quality time! </p>\n                <a [routerLink]=\"['/signup']\" class=\"cta youtube-red-background\"> Get Started </a>\n            </div>\n            <img src=\"../../../../assets/images/mirage-romantic-relationships.png\" alt=\"illustration\" class=\"illustration\">\n        </div>\n        \n\n        <!-- <a href=\"#\" class=\"cta\"> Get Started </a> -->\n\n        <img src=\"../../../../assets/images/scroll.svg\" alt=\"scroll animation\" class=\"scroll show-desktop hide-mobile\">\n\n    </section>\n</div>\n\n\n<div class=\"red-container\">\n    <div class=\"container\">\n        <h1>How does it work ?</h1>\n        <ul>\n            <li>\n                <img src=\"../../../../assets/images/sofa.svg\" alt=\"icon1\" class=\"sofa-icon\">\n                <h2>Create or Join a Room</h2>\n                <p class=\"red-container-subhead\">Create a room <span class=\"bold\">or</span> Join a room using the ID that your friend have given you.</p>\n            </li>\n            <li>\n                <img src=\"../../../../assets/images/youtube.svg\" alt=\"icon2\" class=\"youtube-icon\">\n                <h2>Choose a video from YouTube to display</h2>\n                <p class=\"red-container-subhead\">Copy <span class=\"bold\">&</span> Paste a YouTube video's URL to the form to change the video displayed in the room.</p>\n            </li>\n            <li>\n                <img src=\"../../../../assets/images/video.svg\" alt=\"icon3\" class=\"computer-icon\">\n                <h2>Enjoy watching it with your friends</h2>\n                <p class=\"red-container-subhead\">In case you are a <span class=\"bold\">Host</span>, share your room ID so that people can join and synchronize their display with you!</p>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\n<div class=\"light-grey-container\">\n    <div class=\"container\">\n        <a [routerLink]=\"['/signup']\" class=\"cta\">Get Started</a>\n    </div>\n</div>\n\n\n\n<div class=\"grey-container\">\n    <div class=\"container\">\n        <footer>\n            <a href=\"#\">\n                <img src=\"../../../../assets/images/sync.png\" alt=\"sync logo\" class=\"logo\">\n            </a>\n\n            <ul class=\"footer-links\">\n                <a href=\"#\"><li>Terms of use</li></a>\n                <a href=\"#\"><li>Privacy Policy</li></a>\n            </ul>\n        </footer>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/components/header/header.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/components/header/header.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <a [routerLink]=\"['/home']\">\n        <img src=\"../../../../../assets/images/sync.png\" alt=\"Sync Logo\" class=logo>\n    </a>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/pages/dashboard/dashboard.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/pages/dashboard/dashboard.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<i class=\"fas fa-sign-out-alt fa-2x\" (click)=\"logout()\"></i>\n\n<div class=\"container\">    \n\n    <div class=\"create-room\">\n        <div class=\"headline-container\">\n            <h1>Create a Room</h1>\n        </div>\n  \n        <div class=\"submit-button-container\">\n            <button mat-raised-button type=\"submit\" class=\"submit-button primary-color\" (click)=\"onCreate()\"> Create </button>\n        </div>\n            \n    </div>\n\n\n\n    <div class=\"join-room\">\n        <div class=\"headline-container\">\n            <h1>Join a Room</h1>\n        </div>\n\n        <form [formGroup]=\"joinRoomForm\"> \n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Room ID\" formControlName=\"roomId\">\n            </mat-form-field>\n            <div *ngIf=\"formSubmitted && f.roomId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.roomId.errors.required\">Room ID is required</div>\n                <div *ngIf=\"f.roomId.errors.pattern\">Room ID is not valid (must be a 24 hex characters string)</div>\n            </div>\n        </form>\n\n        \n        <div class=\"submit-button-container\">\n            <button mat-raised-button type=\"submit\" class=\"submit-button primary-color\" (click)=\"onJoin()\"> Join </button>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/pages/room/room.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/pages/room/room.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=controls>\n    <div class=\"controls-room controls-item\">\n        <span class=\"headline primary-color\">RoomID</span>: {{ this.roomId }} <br>\n        <span class=\"headline primary-color\">Username</span>: {{ this.username }} <br>\n\n        <i class=\"fas fa-sign-out-alt fa-2x\" [routerLink]=\"['/dashboard']\"></i>\n\n        <!-- <div class=\"submit-button-container\">\n            <button mat-raised-button type=\"submit\" class=\"send-button\" [routerLink]=\"['/dashboard']\"> Leave the Room </button>  \n        </div> -->\n    </div>\n    \n    <div class=\"controls-player controls-item\">\n        <div *ngIf=\"playerState !== 1\" class=\"submit-button-container\">\n            <button mat-raised-button class=\"send-button\" (click)=\"playVideo()\"> Play </button>\n        </div>\n        \n        <div *ngIf=\"playerState === 1\" class=\"submit-button-container\">\n            <button mat-raised-button class=\"send-button\" (click)=\"pauseVideo()\"> Pause </button>\n        </div>\n    </div>\n    \n    <div class=\"controls-sync controls-item\">\n        <div *ngIf=\"isHost === false\" class=\"submit-button-container\">\n            <button mat-raised-button class=\"sync-button send-button\" (click)=\"onSyncHost()\"> Sync with Host </button>\n        </div>\n    \n        <div *ngIf=\"isHost === false\" class=\"submit-button-container\">\n            <button mat-raised-button class=\"host-button send-button\" (click)=\"onBecomeHost()\"> Become Host </button>\n        </div>\n    \n        <div *ngIf=\"isHost === true\" class=\"submit-button-container\">\n            <button mat-raised-button class=\"host-button send-button\" disabled> You are the Host! </button>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"room-container\">\n    <div class=\"video-container\" id=\"player\">\n        <youtube-player\n            [videoId]=\"videoId\"\n            (ready)=\"onReady($event)\"\n            (change)=\"onStateChange($event)\"\n            width=\"100%\"\n            height=\"100%\"\n        ></youtube-player>\n        \n    </div>\n\n\n    <div class=\"url-container\">\n        <div class=\"headline-container\">\n            <h2>Change Video URL</h2>\n        </div>\n    \n        <form [formGroup]=\"urlForm\" autocomplete=\"off\">\n            <mat-form-field class=\"form-control\">\n                <input matInput placeholder=\"Video URL\" formControlName=\"url\"> \n            </mat-form-field>\n        \n            <div class=\"submit-button-container\">\n                <button mat-raised-button type=\"submit\" class=\"send-button\" (click)=\"onChangeUrl()\"> Change Video URL </button>\n            </div>\n        </form>\n    </div>\n\n</div>\n\n\n\n<div class=\"chat-container\">\n    <div class=\"headline-container\">\n        <h1>Chat</h1>\n    </div>\n\n    <div class=\"message-container\" id=\"message-container\">\n    </div>\n\n    <form [formGroup]=\"chatForm\" autocomplete=\"off\" class=\"chat-form\">\n\n        <mat-form-field class=\"form-control\">\n            <input matInput placeholder=\"Message\" formControlName=\"message\">\n        </mat-form-field>\n    \n        <div class=\"submit-button-container\">\n            <button mat-raised-button type=\"submit\" class=\"send-button chat-button\" (click)=\"onSendChatMessage()\"> Send </button>\n        </div>\n    \n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/room/room.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/room/room.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<h1>Room {{ roomID }} </h1>\n<h2>Username: {{ username }}    </h2>\n<p>room works!</p>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { RoomComponent } from './room/room.component';
// {
//   path: 'room/:id',
//   component: RoomComponent
// },
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/landing/landing.module */ "./src/app/modules/landing/landing.module.ts");
/* harmony import */ var _modules_main_main_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/main/main.module */ "./src/app/modules/main/main.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_14__["RoomComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                //Modules
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_11__["LandingModule"],
                _modules_main_main_module__WEBPACK_IMPORTED_MODULE_12__["MainModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [
                { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JWT_OPTIONS"] },
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/cst.ts":
/*!************************!*\
  !*** ./src/app/cst.ts ***!
  \************************/
/*! exports provided: CST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CST", function() { return CST; });
var CST = {
    LS_USERNAME_LABEL: 'x-username',
    LS_SOCKET_LABEL: 'x-socket'
};


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/no-auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/no-auth.guard.ts ***!
  \*****************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");




var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NoAuthGuard.prototype.canActivate = function () {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['dashboard']);
            return false;
        }
        return true;
    };
    NoAuthGuard.ctorParameters = function () { return [
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NoAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");








var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](modules),
            exports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](modules)
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/_helpers/must-match.validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/_helpers/must-match.validator.ts ***!
  \***************************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.page */ "./src/app/modules/auth/pages/login/login.page.ts");
/* harmony import */ var _pages_signup_signup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signup/signup.page */ "./src/app/modules/auth/pages/signup/signup.page.ts");
/* harmony import */ var src_app_guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/no-auth.guard */ "./src/app/guards/no-auth.guard.ts");






var routes = [
    {
        path: 'login',
        component: _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
        canActivate: [src_app_guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]]
    },
    {
        path: 'signup',
        component: _pages_signup_signup_page__WEBPACK_IMPORTED_MODULE_4__["SignupPage"],
        canActivate: [src_app_guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material */ "./src/app/material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.page */ "./src/app/modules/auth/pages/login/login.page.ts");
/* harmony import */ var _pages_signup_signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup/signup.page */ "./src/app/modules/auth/pages/signup/signup.page.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/auth/components/header/header.component.ts");
/* harmony import */ var _components_login_box_login_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login-box/login-box.component */ "./src/app/modules/auth/components/login-box/login-box.component.ts");
/* harmony import */ var _components_signup_box_signup_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup-box/signup-box.component */ "./src/app/modules/auth/components/signup-box/signup-box.component.ts");











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_login_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
                _pages_signup_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_login_box_login_box_component__WEBPACK_IMPORTED_MODULE_9__["LoginBoxComponent"], _components_signup_box_signup_box_component__WEBPACK_IMPORTED_MODULE_10__["SignupBoxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/header/header.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/components/header/header.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  display: flex;\n  justify-content: center;\n  background-color: #f3f3f3;\n}\n\n.logo {\n  width: 80px;\n  height: 75px;\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjaHJhZi9Eb2N1bWVudHMvc2lkZXByb2plY3RzL2FwcHMvWW91dHViZVN5bmMvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG59XG5cbi5sb2dvIHsgLy90aGUgd2lkdGggb2YgdGhlIGxvZ28gd29uJ3QgY2hhbmdlIGJldHdlZW4gZGVza3RvcCBhbmQgbW9iaWxlXG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xufSAgICIsImhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIG1hcmdpbi10b3A6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/auth/components/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/components/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/auth/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/login-box/login-box.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/components/login-box/login-box.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  width: 30%;\n  margin-top: 5%;\n  box-shadow: 3px 3px 7px 0px #f0f0f0;\n  background-color: #fafafa;\n  padding: 3%;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.form-control {\n  width: 100%;\n}\n\n.headline-container {\n  width: 85%;\n  margin: 0 auto;\n  margin-bottom: 5%;\n}\n\n.grey-text {\n  color: #929292;\n}\n\n.submit-button-container {\n  margin-top: 30px;\n}\n\n.submit-button:hover {\n  background: #db003b;\n}\n\n.submit-button {\n  width: 25%;\n  height: 50px;\n  font-size: 14pt;\n  font-weight: 100;\n  background: var(--main-color);\n  color: white;\n}\n\n.eye-icon:hover {\n  cursor: pointer;\n}\n\n.link-blue {\n  color: #0645AD;\n}\n\n.invalid-feedback {\n  color: #a10000;\n  font-size: small;\n  text-align: left;\n  margin-bottom: 17px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .login-box {\n    width: 50%;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .login-box {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .login-box {\n    width: 90%;\n  }\n\n  .submit-button {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjaHJhZi9Eb2N1bWVudHMvc2lkZXByb2plY3RzL2FwcHMvWW91dHViZVN5bmMvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4tYm94L2xvZ2luLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4tYm94L2xvZ2luLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREtBO0VBQ0k7SUFDSSxVQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksVUFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSTtJQUNJLFVBQUE7RUNKTjs7RURPRTtJQUNJLFVBQUE7RUNKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4tYm94L2xvZ2luLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1ib3gge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA3cHggMHB4IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgcGFkZGluZzogMyU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8vSGVhZGxpbmVcbi5oZWFkbGluZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5ncmV5LXRleHQge1xuICAgIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XG59XG5cbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYjAwM2I7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5leWUtaWNvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSAvL2hhbmRsZSB0aGUgamF2YXNjcmlwdCBhZnRlclxuICBcbi5saW5rLWJsdWUge1xuICAgIGNvbG9yOiAjMDY0NUFEO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gICAgY29sb3I6IHJnYigxNjEsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmxvZ2luLWJveCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLmxvZ2luLWJveCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmxvZ2luLWJveCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbn1cblxuIiwiLmxvZ2luLWJveCB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDdweCAwcHggI2YwZjBmMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGxpbmUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uZ3JleS10ZXh0IHtcbiAgY29sb3I6ICM5MjkyOTI7XG59XG5cbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RiMDAzYjtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmV5ZS1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGluay1ibHVlIHtcbiAgY29sb3I6ICMwNjQ1QUQ7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgY29sb3I6ICNhMTAwMDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5sb2dpbi1ib3gge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmxvZ2luLWJveCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubG9naW4tYm94IHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/auth/components/login-box/login-box.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/components/login-box/login-box.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoginBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBoxComponent", function() { return LoginBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");






var LoginBoxComponent = /** @class */ (function () {
    function LoginBoxComponent(fb, authService, router, _snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.fieldTextType = false;
        this.formSubmitted = false;
    }
    LoginBoxComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            keepConnection: false
        });
    };
    LoginBoxComponent.prototype.toggleFieldTextType = function () {
        this.fieldTextType = !this.fieldTextType;
    };
    LoginBoxComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.loginForm.invalid)
            return;
        var data = this.loginForm.value;
        this.authService.login(data.email, data.password)
            .subscribe(function (res) {
            _this.authService.authenticate(res.token, res.username);
            _this.router.navigate(['dashboard']);
        }, function (error) {
            if (error.status == 500)
                _this.openSnackBar("Internal Server error. Please try later", "Error");
            else
                _this.openSnackBar(error.error.errorMessage, "Error");
        });
    };
    Object.defineProperty(LoginBoxComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginBoxComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    LoginBoxComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    LoginBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-box',
            template: __webpack_require__(/*! raw-loader!./login-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/login-box/login-box.component.html"),
            styles: [__webpack_require__(/*! ./login-box.component.scss */ "./src/app/modules/auth/components/login-box/login-box.component.scss")]
        })
    ], LoginBoxComponent);
    return LoginBoxComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/signup-box/signup-box.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/components/signup-box/signup-box.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-box {\n  width: 30%;\n  margin-top: 5%;\n  box-shadow: 3px 3px 7px 0px #f0f0f0;\n  background-color: #fafafa;\n  padding: 3%;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.form-control {\n  width: 100%;\n}\n\n.headline-container {\n  width: 85%;\n  margin: 0 auto;\n  margin-bottom: 5%;\n}\n\n.grey-text {\n  color: #929292;\n}\n\n.submit-button-container {\n  margin-top: 30px;\n}\n\n.submit-button:hover {\n  background: #db003b;\n}\n\n.submit-button {\n  width: 25%;\n  height: 50px;\n  font-size: 14pt;\n  font-weight: 100;\n  background: var(--main-color);\n  color: white;\n}\n\n.eye-icon:hover {\n  cursor: pointer;\n}\n\n.link-blue {\n  color: #0645AD;\n}\n\n.invalid-feedback {\n  color: #a10000;\n  font-size: small;\n  text-align: left;\n  margin-bottom: 17px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .signup-box {\n    width: 50%;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .signup-box {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .signup-box {\n    width: 90%;\n  }\n\n  .submit-button {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjaHJhZi9Eb2N1bWVudHMvc2lkZXByb2plY3RzL2FwcHMvWW91dHViZVN5bmMvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvc2lnbnVwLWJveC9zaWdudXAtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvY29tcG9uZW50cy9zaWdudXAtYm94L3NpZ251cC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURRQTtFQUNJO0lBQ0ksVUFBQTtFQ0xOO0FBQ0Y7O0FEUUE7RUFDSTtJQUNJLFVBQUE7RUNOTjtBQUNGOztBRFNBO0VBQ0k7SUFDSSxVQUFBO0VDUE47O0VEVUU7SUFDSSxVQUFBO0VDUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL3NpZ251cC1ib3gvc2lnbnVwLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtYm94IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IDBweCByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgIHBhZGRpbmc6IDMlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vL0hlYWRsaW5lXG4uaGVhZGxpbmUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uZ3JleS10ZXh0IHtcbiAgICBjb2xvcjogcmdiKDE0NiwgMTQ2LCAxNDYpO1xufVxuXG4uc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGIwMDNiO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXllLWljb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0gLy9oYW5kbGUgdGhlIGphdmFzY3JpcHQgYWZ0ZXJcbiAgXG4ubGluay1ibHVlIHtcbiAgICBjb2xvcjogIzA2NDVBRDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICAgIGNvbG9yOiByZ2IoMTYxLCAwLCAwKTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cblxuXG5cblxuLy9NZWRpYSBxdWVyaWVzIGZvciBlbGVtZW50cyB3aWR0aHNcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLnNpZ251cC1ib3gge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIC5zaWdudXAtYm94IHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuc2lnbnVwLWJveCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbn0iLCIuc2lnbnVwLWJveCB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDdweCAwcHggI2YwZjBmMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGxpbmUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uZ3JleS10ZXh0IHtcbiAgY29sb3I6ICM5MjkyOTI7XG59XG5cbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RiMDAzYjtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmV5ZS1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGluay1ibHVlIHtcbiAgY29sb3I6ICMwNjQ1QUQ7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgY29sb3I6ICNhMTAwMDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zaWdudXAtYm94IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5zaWdudXAtYm94IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5zaWdudXAtYm94IHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/auth/components/signup-box/signup-box.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/components/signup-box/signup-box.component.ts ***!
  \****************************************************************************/
/*! exports provided: SignupBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupBoxComponent", function() { return SignupBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/must-match.validator */ "./src/app/modules/auth/_helpers/must-match.validator.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");







var SignupBoxComponent = /** @class */ (function () {
    function SignupBoxComponent(fb, authService, router, _snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.fieldTextType = false;
        this.formSubmitted = false;
    }
    SignupBoxComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
        });
    };
    SignupBoxComponent.prototype.toggleFieldTextType = function () {
        this.fieldTextType = !this.fieldTextType;
    };
    SignupBoxComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.signupForm.invalid)
            return;
        var data = this.signupForm.value;
        this.authService.signup(data.username, data.email, data.password)
            .subscribe(function (res) {
            _this.openSnackBar("User added", "");
            _this.router.navigate(['login']);
        }, function (error) {
            if (error.status == 500)
                _this.openSnackBar("Internal Server error. Please try later", "Error");
            else
                _this.openSnackBar(error.error.errorMessage, "Error");
        });
    };
    Object.defineProperty(SignupBoxComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.signupForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupBoxComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    SignupBoxComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    SignupBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-box',
            template: __webpack_require__(/*! raw-loader!./signup-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/signup-box/signup-box.component.html"),
            styles: [__webpack_require__(/*! ./signup-box.component.scss */ "./src/app/modules/auth/components/signup-box/signup-box.component.scss")]
        })
    ], SignupBoxComponent);
    return SignupBoxComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.page.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.page.ts ***!
  \********************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/modules/auth/pages/login/login.page.scss")]
        })
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/signup/signup.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/auth/pages/signup/signup.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/auth/pages/signup/signup.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/pages/signup/signup.page.ts ***!
  \**********************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPage = /** @class */ (function () {
    function SignupPage() {
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/modules/auth/pages/signup/signup.page.scss")]
        })
    ], SignupPage);
    return SignupPage;
}());



/***/ }),

/***/ "./src/app/modules/landing/landing-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/landing/landing-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/modules/landing/pages/home/home.page.ts");




var routes = [
    {
        path: 'home',
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/landing/landing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/landing/landing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/modules/landing/landing-routing.module.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/modules/landing/pages/home/home.page.ts");





var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"]
            ]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/app/modules/landing/pages/home/home.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/landing/pages/home/home.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 80px;\n  height: 75px;\n  margin-top: 2%;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.hide-mobile {\n  display: none;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\n.menu {\n  margin-top: 100%;\n  cursor: pointer;\n}\n\n.illustration {\n  width: 40%;\n}\n\nh1, .subhead {\n  position: relative;\n  z-index: 3;\n}\n\n.subhead {\n  font-size: 0.8em;\n  padding: 0 2em;\n}\n\n.red-container .sofa-icon {\n  width: 30%;\n}\n\n.red-container .youtube-icon {\n  width: 25%;\n}\n\n.red-container .computer-icon {\n  width: 25%;\n}\n\n.core-section-2 {\n  display: none;\n}\n\n.buttons {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.red-container {\n  width: 100%;\n  background-color: #F24423;\n  color: white;\n  margin-top: 10%;\n  padding: 2% 1%;\n  font-size: 1em;\n  border-top-left-radius: 40px;\n  -webkit-transform: skewY(-2deg);\n          transform: skewY(-2deg);\n}\n\n.red-container:before {\n  content: \"\";\n  width: 40px;\n  height: 40px;\n  background: #F24423;\n  position: absolute;\n  top: -39px;\n  right: 7px;\n  z-index: 1;\n}\n\n.red-container:after {\n  content: \"\";\n  width: 80px;\n  height: 80px;\n  background: white;\n  position: absolute;\n  border-radius: 50px;\n  top: -80px;\n  right: 7px;\n  z-index: 2;\n}\n\n.red-container ul, .red-container h1 {\n  -webkit-transform: skewY(2deg);\n          transform: skewY(2deg);\n}\n\n.red-container-subhead {\n  padding-left: 5%;\n  padding-right: 9%;\n  font-size: 1.2em;\n}\n\n.light-grey-container {\n  background: whitesmoke;\n  margin-top: -8%;\n  padding-top: 8%;\n  padding-bottom: 6%;\n}\n\n.cta {\n  display: block;\n  font-weight: bold;\n  width: 30%;\n  margin: auto;\n  color: white;\n  background: #F24423;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  padding: 3% 5%;\n  border-radius: 25px;\n  z-index: 5;\n}\n\n.cta:hover {\n  background: var(--secondary-color);\n  transition: 0.5s;\n}\n\n.grey-container {\n  color: white;\n  background: #4d4c4c;\n  margin-top: -2%;\n  padding: 2%;\n}\n\n.footer-links {\n  font-size: 0.7em;\n  color: white;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nnav ul {\n  position: fixed;\n  width: 40%;\n  top: 0;\n  right: 0;\n  text-align: left;\n  background: #333;\n  height: 100%;\n  z-index: 10;\n  padding-top: 1em;\n}\n\nnav ul a {\n  color: white;\n  display: block;\n  width: 100%;\n  padding: 1em 2em;\n  background-color: #3a3a3a;\n}\n\nnav ul a:hover {\n  background-color: #444;\n  transition: 0.7s;\n}\n\n.exit-btn {\n  margin-bottom: 1em;\n  text-align: right;\n  padding: 0 1.1em;\n}\n\n.exit-btn img {\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 650px) {\n  .illustration {\n    width: 35%;\n  }\n\n  h1 {\n    font-size: 1.8em;\n  }\n\n  .subhead {\n    font-size: 0.9em;\n    padding: 0 2em;\n  }\n\n  .cta {\n    width: 25%;\n  }\n\n  .red-container {\n    margin: 0;\n  }\n\n  .red-container .sofa-icon {\n    width: 25%;\n  }\n\n  .red-container .youtube-icon {\n    width: 20%;\n  }\n\n  .red-container .computer-icon {\n    width: 20%;\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  .container {\n    width: 80%;\n    margin: auto;\n  }\n\n  h1 {\n    font-size: 2.2em;\n  }\n\n  .subhead {\n    font-size: 1em;\n    padding: 0 2em;\n  }\n\n  .red-container ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .red-container li {\n    margin-left: 6%;\n  }\n\n  .red-container .sofa-icon {\n    width: 48%;\n  }\n\n  .red-container .youtube-icon {\n    width: 40%;\n  }\n\n  .red-container .computer-icon {\n    width: 36%;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  .show-desktop {\n    display: block;\n  }\n\n  .hide-desktop {\n    display: none;\n  }\n\n  nav ul {\n    position: inherit;\n    width: auto;\n    background: none;\n    height: auto;\n    display: flex;\n  }\n\n  nav ul li a {\n    color: black;\n    background-color: inherit;\n    padding: 1em 1.5em;\n  }\n\n  nav ul li a:nth-child(2) {\n    background: red;\n  }\n\n  .container {\n    width: 65%;\n    margin: 1% auto 1% auto;\n  }\n\n  .core-section-2 {\n    display: flex;\n    margin-top: 7%;\n  }\n\n  .core-section-1 {\n    display: none;\n  }\n\n  h1 {\n    font-size: 1.8em;\n  }\n\n  .subhead {\n    font-size: 1em;\n    padding: 0 2em;\n  }\n\n  .title-subhead {\n    margin: auto;\n  }\n\n  .scroll {\n    margin: auto;\n    width: 30px;\n    -webkit-animation: move 1s infinite alternate;\n            animation: move 1s infinite alternate;\n    margin-bottom: 8%;\n  }\n\n  @-webkit-keyframes move {\n    0% {\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px);\n    }\n    100% {\n      -webkit-transform: translateY(30px);\n              transform: translateY(30px);\n    }\n  }\n\n  @keyframes move {\n    0% {\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px);\n    }\n    100% {\n      -webkit-transform: translateY(30px);\n              transform: translateY(30px);\n    }\n  }\n}\n\n@media only screen and (min-width: 1400px) {\n  h1 {\n    font-size: 2.5em;\n  }\n\n  .subhead {\n    font-size: 1.2em;\n    padding: 0 2em;\n  }\n\n  .cta {\n    width: 20%;\n  }\n\n  .logo {\n    width: 90px;\n    height: 85px;\n  }\n}\n\n@media only screen and (min-width: 1600px) {\n  h1 {\n    font-size: 2.7em;\n  }\n\n  .cta {\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjaHJhZi9Eb2N1bWVudHMvc2lkZXByb2plY3RzL2FwcHMvWW91dHViZVN5bmMvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbGFuZGluZy9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDREo7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FETUE7RUFDSSxhQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0pKOztBRE9BO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0pKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTEo7O0FEVUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDUEo7O0FEV0E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXQTtFQUNJLGVBQUE7QUNSSjs7QURZQTtFQUNJO0lBQ0ksVUFBQTtFQ1ROOztFRFlFO0lBQ0ksZ0JBQUE7RUNUTjs7RURZRTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtFQ1ROOztFRFlFO0lBQ0ksVUFBQTtFQ1ROOztFRFlFO0lBQ0ksU0FBQTtFQ1ROOztFRFlFO0lBQ0ksVUFBQTtFQ1ROOztFRFlFO0lBQ0ksVUFBQTtFQ1ROOztFRFlFO0lBQ0ksVUFBQTtFQ1ROO0FBQ0Y7O0FEYUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VDWE47O0VEY0U7SUFDSSxnQkFBQTtFQ1hOOztFRGNFO0lBQ0ksY0FBQTtJQUNBLGNBQUE7RUNYTjs7RURjRTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQ1hOOztFRGNFO0lBQ0ksZUFBQTtFQ1hOOztFRGNFO0lBQ0ksVUFBQTtFQ1hOOztFRGNFO0lBQ0ksVUFBQTtFQ1hOOztFRGNFO0lBQ0ksVUFBQTtFQ1hOO0FBQ0Y7O0FEY0E7RUFDSTtJQUNJLGNBQUE7RUNaTjs7RURlRTtJQUNJLGFBQUE7RUNaTjs7RURlRTtJQUNJLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNaTjs7RURlRTtJQUNJLFlBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0VDWk47O0VEZUU7SUFDSSxlQUFBO0VDWk47O0VEZUU7SUFDSSxVQUFBO0lBQ0EsdUJBQUE7RUNaTjs7RURlRTtJQUNJLGFBQUE7SUFDQSxjQUFBO0VDWk47O0VEZUU7SUFDSSxhQUFBO0VDWk47O0VEZUU7SUFDSSxnQkFBQTtFQ1pOOztFRGVFO0lBQ0ksY0FBQTtJQUNBLGNBQUE7RUNaTjs7RURlRTtJQUNJLFlBQUE7RUNaTjs7RURlRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsNkNBQUE7WUFBQSxxQ0FBQTtJQUNBLGlCQUFBO0VDWk47O0VEZUU7SUFDSTtNQUNJLGtDQUFBO2NBQUEsMEJBQUE7SUNaUjtJRGNJO01BQ0ksbUNBQUE7Y0FBQSwyQkFBQTtJQ1pSO0VBQ0Y7O0VETUU7SUFDSTtNQUNJLGtDQUFBO2NBQUEsMEJBQUE7SUNaUjtJRGNJO01BQ0ksbUNBQUE7Y0FBQSwyQkFBQTtJQ1pSO0VBQ0Y7QUFDRjs7QURnQkE7RUFDSTtJQUNJLGdCQUFBO0VDZE47O0VEaUJFO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0VDZE47O0VEaUJFO0lBQ0ksVUFBQTtFQ2ROOztFRGlCRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDZE47QUFDRjs7QURpQkE7RUFDSTtJQUNJLGdCQUFBO0VDZk47O0VEa0JFO0lBQ0ksVUFBQTtFQ2ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xhbmRpbmcvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubG9nbyB7IC8vdGhlIHdpZHRoIG9mIHRoZSBsb2dvIHdvbid0IGNoYW5nZSBiZXR3ZWVuIGRlc2t0b3AgYW5kIG1vYmlsZVxuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGlkZS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tZW51IHtcbiAgICBtYXJnaW4tdG9wOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlsbHVzdHJhdGlvbiB7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuaDEsIC5zdWJoZWFkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIHotaW5kZXg6IDM7XG59XG5cbi5zdWJoZWFkIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgcGFkZGluZzogMCAyZW07XG59XG5cblxuLnJlZC1jb250YWluZXIgLnNvZmEtaWNvbiB7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLnJlZC1jb250YWluZXIgLnlvdXR1YmUtaWNvbiB7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLnJlZC1jb250YWluZXIgLmNvbXB1dGVyLWljb24ge1xuICAgIHdpZHRoOiAyNSU7XG59XG5cblxuLmNvcmUtc2VjdGlvbi0yIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnJlZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMjQ0MjM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBwYWRkaW5nOiAyJSAxJTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xuICAgIHRyYW5zZm9ybTogc2tld1koLTJkZWcpO1xufVxuXG4ucmVkLWNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGMjQ0MjM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTM5cHg7XG4gICAgcmlnaHQ6IDdweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucmVkLWNvbnRhaW5lcjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgdG9wOiAtODBweDtcbiAgICByaWdodDogN3B4O1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5yZWQtY29udGFpbmVyIHVsLCAucmVkLWNvbnRhaW5lciBoMSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgyZGVnKTtcbn1cblxuLnJlZC1jb250YWluZXItc3ViaGVhZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5JTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ubGlnaHQtZ3JleS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgbWFyZ2luLXRvcDogLTglO1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNiU7XG59XG5cbi5jdGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMiU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNGMjQ0MjM7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgcGFkZGluZzogMyUgNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4uY3RhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5ncmV5LWNvbnRhaW5lciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYig3NywgNzYsIDc2KTtcbiAgICBtYXJnaW4tdG9wOiAtMiU7XG4gICAgcGFkZGluZzogMiU7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cblxubmF2IHVsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xufVxuXG5cblxubmF2IHVsIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcbn1cblxuXG5uYXYgdWwgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgICB0cmFuc2l0aW9uOiAuN3M7XG59XG5cbi5leGl0LWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDAgMS4xZW07XG59XG5cbi5leGl0LWJ0biBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuICAgIFxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTsgXG4gICAgfVxuXG4gICAgLnN1YmhlYWQge1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMmVtO1xuICAgIH1cblxuICAgIC5jdGEge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cblxuICAgIC5yZWQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH0gXG5cbiAgICAucmVkLWNvbnRhaW5lciAuc29mYS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gICAgXG4gICAgLnJlZC1jb250YWluZXIgLnlvdXR1YmUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgIFxuICAgIC5yZWQtY29udGFpbmVyIC5jb21wdXRlci1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDIuMmVtOyBcbiAgICB9XG5cbiAgICAuc3ViaGVhZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICB9XG5cbiAgICAucmVkLWNvbnRhaW5lciB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAucmVkLWNvbnRhaW5lciBsaSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2JTtcbiAgICB9XG5cbiAgICAucmVkLWNvbnRhaW5lciAuc29mYS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICB9XG4gICAgXG4gICAgLnJlZC1jb250YWluZXIgLnlvdXR1YmUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICAgIFxuICAgIC5yZWQtY29udGFpbmVyIC5jb21wdXRlci1pY29uIHtcbiAgICAgICAgd2lkdGg6IDM2JTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLnNob3ctZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5oaWRlLWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIG5hdiB1bCB7XG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIG5hdiB1bCBsaSBhIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgfVxuXG4gICAgbmF2IHVsIGxpIGE6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBtYXJnaW46IDElIGF1dG8gMSUgYXV0bztcbiAgICB9XG5cbiAgICAuY29yZS1zZWN0aW9uLTIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3JTtcbiAgICB9XG5cbiAgICAuY29yZS1zZWN0aW9uLTEge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTsgXG4gICAgfVxuXG4gICAgLnN1YmhlYWQge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgcGFkZGluZzogMCAyZW07XG4gICAgfVxuXG4gICAgLnRpdGxlLXN1YmhlYWQge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLnNjcm9sbCB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZSAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDglO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpXG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTsgXG4gICAgfVxuXG4gICAgLnN1YmhlYWQge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICB9XG5cbiAgICAuY3RhIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG5cbiAgICAubG9nbyB7IC8vdGhlIHdpZHRoIG9mIHRoZSBsb2dvIHdvbid0IGNoYW5nZSBiZXR3ZWVuIGRlc2t0b3AgYW5kIG1vYmlsZVxuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi43ZW07IFxuICAgIH1cblxuICAgIC5jdGEge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgIH1cbn1cbiIsIi5sb2dvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNzVweDtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oaWRlLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lbnUge1xuICBtYXJnaW4tdG9wOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbGx1c3RyYXRpb24ge1xuICB3aWR0aDogNDAlO1xufVxuXG5oMSwgLnN1YmhlYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5zdWJoZWFkIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMCAyZW07XG59XG5cbi5yZWQtY29udGFpbmVyIC5zb2ZhLWljb24ge1xuICB3aWR0aDogMzAlO1xufVxuXG4ucmVkLWNvbnRhaW5lciAueW91dHViZS1pY29uIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnJlZC1jb250YWluZXIgLmNvbXB1dGVyLWljb24ge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29yZS1zZWN0aW9uLTIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ucmVkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI0NDIzO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZzogMiUgMSU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xuICB0cmFuc2Zvcm06IHNrZXdZKC0yZGVnKTtcbn1cblxuLnJlZC1jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI0YyNDQyMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zOXB4O1xuICByaWdodDogN3B4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucmVkLWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRvcDogLTgwcHg7XG4gIHJpZ2h0OiA3cHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5yZWQtY29udGFpbmVyIHVsLCAucmVkLWNvbnRhaW5lciBoMSB7XG4gIHRyYW5zZm9ybTogc2tld1koMmRlZyk7XG59XG5cbi5yZWQtY29udGFpbmVyLXN1YmhlYWQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA5JTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmxpZ2h0LWdyZXktY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgbWFyZ2luLXRvcDogLTglO1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctYm90dG9tOiA2JTtcbn1cblxuLmN0YSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNGMjQ0MjM7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgcGFkZGluZzogMyUgNSU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5jdGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZ3JleS1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM0ZDRjNGM7XG4gIG1hcmdpbi10b3A6IC0yJTtcbiAgcGFkZGluZzogMiU7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5uYXYgdWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbm5hdiB1bCBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XG59XG5cbm5hdiB1bCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmV4aXQtYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMCAxLjFlbTtcbn1cblxuLmV4aXQtYnRuIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAuaWxsdXN0cmF0aW9uIHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gIH1cblxuICAuc3ViaGVhZCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBwYWRkaW5nOiAwIDJlbTtcbiAgfVxuXG4gIC5jdGEge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAucmVkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnJlZC1jb250YWluZXIgLnNvZmEtaWNvbiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5yZWQtY29udGFpbmVyIC55b3V0dWJlLWljb24ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAucmVkLWNvbnRhaW5lciAuY29tcHV0ZXItaWNvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICB9XG5cbiAgLnN1YmhlYWQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDAgMmVtO1xuICB9XG5cbiAgLnJlZC1jb250YWluZXIgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnJlZC1jb250YWluZXIgbGkge1xuICAgIG1hcmdpbi1sZWZ0OiA2JTtcbiAgfVxuXG4gIC5yZWQtY29udGFpbmVyIC5zb2ZhLWljb24ge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAucmVkLWNvbnRhaW5lciAueW91dHViZS1pY29uIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG5cbiAgLnJlZC1jb250YWluZXIgLmNvbXB1dGVyLWljb24ge1xuICAgIHdpZHRoOiAzNiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5zaG93LWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmhpZGUtZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG5hdiB1bCB7XG4gICAgcG9zaXRpb246IGluaGVyaXQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIG5hdiB1bCBsaSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIH1cblxuICBuYXYgdWwgbGkgYTpudGgtY2hpbGQoMikge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiAxJSBhdXRvIDElIGF1dG87XG4gIH1cblxuICAuY29yZS1zZWN0aW9uLTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNyU7XG4gIH1cblxuICAuY29yZS1zZWN0aW9uLTEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgfVxuXG4gIC5zdWJoZWFkIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAwIDJlbTtcbiAgfVxuXG4gIC50aXRsZS1zdWJoZWFkIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAuc2Nyb2xsIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYW5pbWF0aW9uOiBtb3ZlIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cblxuICAuc3ViaGVhZCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwYWRkaW5nOiAwIDJlbTtcbiAgfVxuXG4gIC5jdGEge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAubG9nbyB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjdlbTtcbiAgfVxuXG4gIC5jdGEge1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/landing/pages/home/home.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/landing/pages/home/home.page.ts ***!
  \*********************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




// import { RoomService } from '../services/room.service';

var HomePage = /** @class */ (function () {
    function HomePage(fb, router, 
    // private roomService: RoomService,
    _snackBar) {
        this.fb = fb;
        this.router = router;
        this._snackBar = _snackBar;
    }
    HomePage.prototype.ngOnInit = function () {
        //Toggle Menu
        var menu = document.getElementById('menu');
        var nav = document.getElementById('nav');
        var exit = document.getElementById('exit');
        menu.addEventListener('click', function (e) {
            nav.classList.toggle('hide-mobile');
            // e.preventDefault();
        });
        exit.addEventListener('click', function (e) {
            nav.classList.toggle('hide-mobile');
            // e.preventDefault();
        });
        //Form
        this.createForm = this.fb.group({
            usernameCreate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.joinForm = this.fb.group({
            roomId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usernameJoin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/modules/landing/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/modules/landing/pages/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/modules/main/components/header/header.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/main/components/header/header.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  display: flex;\n  justify-content: center;\n  background-color: #f3f3f3;\n}\n\n.logo {\n  width: 80px;\n  height: 75px;\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjaHJhZi9Eb2N1bWVudHMvc2lkZXByb2plY3RzL2FwcHMvWW91dHViZVN5bmMvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG59XG5cbi5sb2dvIHsgLy90aGUgd2lkdGggb2YgdGhlIGxvZ28gd29uJ3QgY2hhbmdlIGJldHdlZW4gZGVza3RvcCBhbmQgbW9iaWxlXG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xufSAgICIsImhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIG1hcmdpbi10b3A6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/main/components/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/main/components/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/main/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/main/main-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/main-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.page */ "./src/app/modules/main/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _pages_room_room_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/room/room.page */ "./src/app/modules/main/pages/room/room.page.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");






var routes = [
    {
        path: 'dashboard',
        component: _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'room',
        component: _pages_room_room_page__WEBPACK_IMPORTED_MODULE_4__["RoomPage"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/main/main.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.module.ts ***!
  \*********************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material */ "./src/app/material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/modules/main/main-routing.module.ts");
/* harmony import */ var _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.page */ "./src/app/modules/main/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/main/components/header/header.component.ts");
/* harmony import */ var _pages_room_room_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/room/room.page */ "./src/app/modules/main/pages/room/room.page.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js");










var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _pages_room_room_page__WEBPACK_IMPORTED_MODULE_8__["RoomPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_9__["NgxYoutubePlayerModule"].forRoot()
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/modules/main/pages/dashboard/dashboard.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/main/pages/dashboard/dashboard.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10%;\n  margin-top: 0;\n}\n\n.fas {\n  margin-top: 10px;\n  margin-left: 10px;\n  color: var(--main-color);\n}\n\n.fas:hover {\n  cursor: pointer;\n  color: #bb0032;\n}\n\n.create-room {\n  width: 50%;\n  box-shadow: 3px 3px 7px 0px #f0f0f0;\n  background-color: #fafafa;\n  padding: 3%;\n  margin-right: 2%;\n}\n\n.join-room {\n  width: 50%;\n  box-shadow: 3px 3px 7px 0px #f0f0f0;\n  background-color: #fafafa;\n  padding: 3%;\n  margin-left: 2%;\n}\n\n.form-control {\n  width: 50%;\n}\n\n.headline-container {\n  width: 85%;\n  margin: 0 auto;\n  margin-bottom: 5%;\n}\n\n.submit-button-container {\n  margin-top: 30px;\n}\n\n.submit-button:hover {\n  background: #db003b;\n}\n\n.submit-button {\n  width: 25%;\n  height: 50px;\n  font-size: 14pt;\n  font-weight: 100;\n  background: var(--main-color);\n  color: white;\n}\n\n.invalid-feedback {\n  color: #a10000;\n  font-size: small;\n  text-align: center;\n  margin-bottom: 17px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .submit-button {\n    width: 50%;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .container {\n    display: inline;\n  }\n\n  .create-room {\n    width: 100%;\n    margin-right: 0;\n  }\n\n  .join-room {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjaHJhZi9Eb2N1bWVudHMvc2lkZXByb2plY3RzL2FwcHMvWW91dHViZVN5bmMvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9tYWluL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRE9BO0VBQ0ksVUFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLFVBQUE7QUNKSjs7QURRQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNMSjs7QURTQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUVJO0lBQ0ksVUFBQTtFQ1BOO0FBQ0Y7O0FEVUE7RUFDSTtJQUNJLGVBQUE7RUNSTjs7RURXRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VDUk47O0VEV0U7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQ1JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgMTAlO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5mYXMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4uZmFzOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNiYjAwMzI7XG59XG5cbi8vIC5sb2dvdXQge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwO1xuLy8gfVxuLmNyZWF0ZS1yb29tIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IDBweCByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5qb2luLXJvb20ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA3cHggMHB4IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgcGFkZGluZzogMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5cbi5oZWFkbGluZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYjAwM2I7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICAgIGNvbG9yOiByZ2IoMTYxLCAwLCAwKTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuXG4gICAgLmNyZWF0ZS1yb29tIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuam9pbi1yb29tIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMTAlO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uZmFzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLmZhczpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNiYjAwMzI7XG59XG5cbi5jcmVhdGUtcm9vbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IDBweCAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAzJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLmpvaW4tcm9vbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IDBweCAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmhlYWRsaW5lLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnN1Ym1pdC1idXR0b24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGIwMDNiO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBmb250LXdlaWdodDogMTAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGNvbG9yOiAjYTEwMDAwO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5jcmVhdGUtcm9vbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmpvaW4tcm9vbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/main/pages/dashboard/dashboard.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/main/pages/dashboard/dashboard.page.ts ***!
  \****************************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_room_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room/room.service */ "./src/app/services/room/room.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");







var DashboardPage = /** @class */ (function () {
    function DashboardPage(fb, authService, roomService, router, _snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.roomService = roomService;
        this.router = router;
        this._snackBar = _snackBar;
        this.formSubmitted = false;
        this.hexRegex = "[0-9a-f]{24}";
    }
    DashboardPage.prototype.ngOnInit = function () {
        this.joinRoomForm = this.fb.group({
            roomId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.hexRegex)]]
        });
        this.username = this.authService.getUsername();
        console.log(this.username);
    };
    DashboardPage.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['home']);
    };
    DashboardPage.prototype.onCreate = function () {
        var _this = this;
        this.roomService.createRoom()
            .subscribe(function (res) {
            _this.router.navigate(['/room', res]);
        }, function (error) {
            if (error.status == 500)
                _this.openSnackBar("Internal Server error. Please try later", "Error");
            else
                _this.openSnackBar(error.error.errorMessage, "Error");
        });
    };
    DashboardPage.prototype.onJoin = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.joinRoomForm.invalid)
            return;
        var data = this.joinRoomForm.value;
        this.roomService.joinRoom(data.roomId)
            .subscribe(function (res) {
            _this.router.navigate(['/room', res]);
        }, function (error) {
            if (error.status == 500)
                _this.openSnackBar("Internal Server error. Please try later", "Error");
            else
                _this.openSnackBar(error.error.errorMessage, "Error");
        });
    };
    Object.defineProperty(DashboardPage.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.joinRoomForm.controls; },
        enumerable: true,
        configurable: true
    });
    DashboardPage.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_services_room_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/modules/main/pages/dashboard/dashboard.page.scss")]
        })
    ], DashboardPage);
    return DashboardPage;
}());



/***/ }),

/***/ "./src/app/modules/main/pages/room/room.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/main/pages/room/room.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".room-container {\n  display: flex;\n  background: whitesmoke;\n  padding: 0;\n}\n\n.headline {\n  font-weight: bold;\n  color: #bb0032;\n}\n\n.controls {\n  background: gainsboro;\n  padding: 1%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.video-container {\n  width: 70%;\n  height: 400px;\n}\n\n.chat-container {\n  background: whitesmoke;\n  text-align: center;\n}\n\n.url-container {\n  text-align: center;\n  width: 30%;\n  padding-top: 4%;\n}\n\n.headline-container {\n  width: 85%;\n  margin: 0 auto;\n  margin-bottom: 5%;\n}\n\n.bold {\n  font-weight: 500;\n}\n\n.fas {\n  margin-top: 5px;\n  margin-left: 5px;\n  color: #cf1b4b;\n}\n\n.fas:hover {\n  cursor: pointer;\n  color: #bb0032;\n}\n\n.message-element-self {\n  text-align: right;\n}\n\n.message-element-other {\n  text-align: left;\n}\n\n.message-element {\n  color: black;\n  background: #f0f0f0;\n}\n\n.send-button:hover {\n  background: #db003b;\n}\n\n.send-button {\n  width: 100%;\n  height: 50px;\n  font-size: 14pt;\n  font-weight: 100;\n  background: var(--main-color);\n  color: white;\n}\n\n.submit-button-container {\n  margin-top: 10px;\n  margin-right: 1%;\n}\n\n.submit-button:hover {\n  background: #db003b;\n}\n\n.sync-button {\n  background: var(--secondary-color);\n}\n\n.host-button {\n  background: #44a1ff;\n}\n\n.sync-button:hover {\n  background: #0053a7;\n}\n\n.host-button:hover {\n  background: #178afd;\n}\n\n@media only screen and (max-width: 800px) {\n  .room-container {\n    display: inline;\n  }\n\n  .video-container {\n    width: 100%;\n  }\n\n  .chat-container {\n    width: 100%;\n  }\n\n  .url-container {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .controls {\n    display: inline;\n    background: inherit;\n  }\n\n  .send-button {\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjaHJhZi9Eb2N1bWVudHMvc2lkZXByb2plY3RzL2FwcHMvWW91dHViZVN5bmMvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9tYWluL3BhZ2VzL3Jvb20vcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9wYWdlcy9yb29tL3Jvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRko7O0FETUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtBQ0hKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNKSjs7QURnQkE7RUFDSSxpQkFBQTtBQ2JKOztBRGdCQTtFQUNJLGdCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDYko7O0FEZ0JBO0VBQ0ksbUJBQUE7QUNiSjs7QURnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ2JKOztBRGlCQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxtQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGtDQUFBO0FDZEo7O0FEaUJBO0VBQ0ksbUJBQUE7QUNkSjs7QURpQkE7RUFDSSxtQkFBQTtBQ2RKOztBRGlCQTtFQUNJLG1CQUFBO0FDZEo7O0FEa0JBO0VBQ0k7SUFDSSxlQUFBO0VDZk47O0VEa0JFO0lBQ0ksV0FBQTtFQ2ZOOztFRGtCRTtJQUNJLFdBQUE7RUNmTjs7RURrQkU7SUFDSSxXQUFBO0VDZk47QUFDRjs7QURtQkE7RUFFSTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQ2xCTjs7RURxQkU7SUFDSSxZQUFBO0VDbEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vcGFnZXMvcm9vbS9yb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJvb20tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGxpbmUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjYmIwMDMyO1xufVxuXG4uY29udHJvbHMge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjAsIDIyMCwgMjIwKTtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4udmlkZW8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDAwcHg7XG59XG5cbi5jaGF0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLnVybC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmctdG9wOiA0JTtcbn1cblxuXG4uaGVhZGxpbmUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4uZmFzIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogI2NmMWI0Yjtcbn1cblxuLmZhczpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjYmIwMDMyO1xufVxuXG4vL0NIQVQgXG4vLyAuY2hhdC1mb3JtIHtcblxuLy8gfVxuXG4vLyAuaW5wdXQtY2hhdC1mb3JtIHtcbi8vICAgICB3aWR0aDogOTAlO1xuLy8gfVxuXG4ubWVzc2FnZS1lbGVtZW50LXNlbGYge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWVzc2FnZS1lbGVtZW50LW90aGVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWVzc2FnZS1lbGVtZW50IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xufVxuXG4uc2VuZC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYjAwM2I7XG59XG5cbi5zZW5kLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYjAwM2I7XG59XG5cbi5zeW5jLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmhvc3QtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDRhMWZmO1xufVxuXG4uc3luYy1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMDUzYTc7XG59XG5cbi5ob3N0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE3OGFmZDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnJvb20tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgIC52aWRlby1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2hhdC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudXJsLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5zZW5kLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59XG4iLCIucm9vbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGxpbmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNiYjAwMzI7XG59XG5cbi5jb250cm9scyB7XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgcGFkZGluZzogMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnZpZGVvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5jaGF0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVybC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctdG9wOiA0JTtcbn1cblxuLmhlYWRsaW5lLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmFzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogI2NmMWI0Yjtcbn1cblxuLmZhczpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNiYjAwMzI7XG59XG5cbi5tZXNzYWdlLWVsZW1lbnQtc2VsZiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWVzc2FnZS1lbGVtZW50LW90aGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1lc3NhZ2UtZWxlbWVudCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cblxuLnNlbmQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RiMDAzYjtcbn1cblxuLnNlbmQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBmb250LXdlaWdodDogMTAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkYjAwM2I7XG59XG5cbi5zeW5jLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5ob3N0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM0NGExZmY7XG59XG5cbi5zeW5jLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDUzYTc7XG59XG5cbi5ob3N0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxNzhhZmQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnJvb20tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAudmlkZW8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jaGF0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudXJsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb250cm9scyB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICAuc2VuZC1idXR0b24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/main/pages/room/room.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/main/pages/room/room.page.ts ***!
  \******************************************************/
/*! exports provided: RoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPage", function() { return RoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var RoomPage = /** @class */ (function () {
    function RoomPage(fb, route, _snackBar, router) {
        this.fb = fb;
        this.route = route;
        this._snackBar = _snackBar;
        this.router = router;
        this.videoIdRegex = /v=.*&|v=.*/;
        this.isHost = false;
    }
    RoomPage.prototype.ngOnInit = function () {
        this.roomId = this.route.snapshot.paramMap.get('roomId');
        this.username = localStorage.getItem('x-username');
        if (!this.username)
            this.username = 'Anonymous';
        this.connectSocket();
        this.chatForm = this.fb.group({
            message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.urlForm = this.fb.group({
            url: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.messageContainer = document.getElementById('message-container');
        //VideoID
        var videoId = this.route.snapshot.paramMap.get('videoId');
        if (videoId) {
            this.videoId = videoId;
        }
        else {
            this.videoId = 'NjN4rOBZV2s';
        }
    };
    RoomPage.prototype.ngOnDestroy = function () {
        // this.socket.emit('disconnect', '');   doesn't work!!!
        this.socket.disconnect();
    };
    RoomPage.prototype.onStateChange = function (event) {
        // let d = new Date();
        // if (event.data == 3) this.loadingDuration = d.getTime();
        // else if (event.data != 3 && this.playerState == 3) this.player.seekTo(this.player.getCurrentTime() + d.getTime() - this.loadingDuration, true)
        console.log(event.data);
        this.playerState = event.data;
        if ((this.playerState == 1 || this.playerState == 2) && this.isHost)
            this.socket.emit('host-player-state', this.playerState);
    };
    RoomPage.prototype.onReady = function (player) { this.player = player; };
    RoomPage.prototype.playVideo = function () { this.player.playVideo(); };
    RoomPage.prototype.pauseVideo = function () { this.player.pauseVideo(); };
    RoomPage.prototype.connectSocket = function () {
        var _this = this;
        //this.socket = io("/socket", {path: '/socket.io', query: `roomId=${this.roomId}&username=${this.username}`});
        //var socket = io('http://www.example.com/my-namespace', { path: '/myapp/socket.io'});
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__('', { query: "roomId=" + this.roomId + "&username=" + this.username });
        this.socket.on('connect', function () {
            console.log("Socket connection with server established");
        });
        this.socket.on('disconnect', function (reason) {
            _this.openSnackBar("You've left the room", "");
            _this.router.navigate(['dashboard']);
        });
        ////Managing Chat messages
        //----------------------
        this.socket.on('message', function (data) { console.log("server message (socket): " + data); });
        this.socket.on('chat-message', function (data) { _this.displayMessage("<span class=\"bold\">" + data.username + "</span>: <span class=\"message\">" + data.message + "</span>", false); });
        ////Synchronizing player state (play/pause)
        //----------------------
        this.socket.on('host-player-state', function (hostPlayerState) {
            _this.playerState = hostPlayerState;
            if (hostPlayerState == 1)
                _this.player.playVideo();
            else if (hostPlayerState == 2)
                _this.player.pauseVideo();
        });
        ////Updating Host status
        //----------------------
        this.socket.on('put-status-to-host', function () { _this.isHost = true; });
        this.socket.on('put-status-to-nothost', function () { _this.isHost = false; });
        ////Sync video state & time & ID
        //----------------------
        this.socket.on('hoststate', function (hostState) {
            //Sync videoID
            if (_this.videoId != hostState.videoId) {
                _this.router.navigate(['/room', { roomId: _this.roomId, videoId: hostState.videoId }])
                    .then(function () { return window.location.reload(); });
            }
            //Sync player state & time
            _this.playerState = hostState.playerState;
            console.log("Host State: ", _this.playerState);
            if (hostState.playerState == 1) { //this case should not be necessary anymore (the host will pause the video until the client is synchronized)
                var d = new Date();
                _this.syncReqDuration = d.getTime() - _this.syncReqDuration;
                _this.player.seekTo(hostState.playerTime + _this.syncReqDuration / 1000, true);
                _this.player.playVideo();
            }
            else if (hostState.playerState == 2 || hostState.playerState == -1) {
                _this.player.seekTo(hostState.playerTime + 0.3, true);
                _this.player.pauseVideo();
            }
            _this.socket.emit('synchronized', '');
        });
        this.socket.on('get-hoststate', function () {
            _this.player.pauseVideo();
            _this.playerState = 2;
            var hostState = {
                "playerTime": _this.player.getCurrentTime(),
                "playerState": _this.playerState,
                "videoId": _this.videoId
            };
            _this.socket.emit('hoststate', hostState);
        });
        this.socket.on('synchronized', function () {
            _this.sleep(1000).then(function () {
                _this.player.playVideo();
                _this.playerState = _this.player.getPlayerState(); //it may be useless because onStateChange is called after playing the video (but whatever...)
            });
        });
    };
    RoomPage.prototype.onSyncHost = function () {
        var d = new Date();
        this.syncReqDuration = d.getTime();
        this.socket.emit('get-hoststate', '');
    };
    RoomPage.prototype.onBecomeHost = function () {
        this.socket.emit('become-host', '');
    };
    RoomPage.prototype.onSendChatMessage = function () {
        if (this.chatForm.invalid)
            return;
        var data = {
            username: this.username,
            message: this.chatForm.value.message
        };
        this.socket.emit('chat-message', data);
        this.chatForm.reset();
        this.displayMessage("<b>You</b>: " + data.message, true);
    };
    RoomPage.prototype.onChangeUrl = function () {
        if (this.urlForm.invalid)
            return;
        // if (videoId != undefined) {
        //   this.videoId = videoId;
        //   this.router.navigate(['/room', {roomId: this.roomId, videoId: this.videoId}])
        //     .then(() => window.location.reload());
        //   return;
        // }
        // else {
        var url = this.urlForm.value.url;
        var videoId = this.videoIdRegex.exec(url)[0];
        if (videoId[videoId.length - 1] == '&') {
            videoId = videoId.slice(2, videoId.length - 1);
        }
        else {
            videoId = videoId.slice(2);
        }
        this.videoId = videoId;
        this.router.navigate(['/room', { roomId: this.roomId, videoId: this.videoId }])
            .then(function () { return window.location.reload(); });
        // }
    };
    RoomPage.prototype.displayMessage = function (message, self) {
        var messageElement = document.createElement('div');
        messageElement.innerHTML = message;
        if (self)
            messageElement.className = 'message-element message-element-self';
        else
            messageElement.className = 'message-element message-element-other';
        this.messageContainer.append(messageElement);
    };
    RoomPage.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    RoomPage.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    RoomPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('unloaded')
    ], RoomPage.prototype, "ngOnDestroy", null);
    RoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! raw-loader!./room.page.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/pages/room/room.page.html"),
            styles: [__webpack_require__(/*! ./room.page.scss */ "./src/app/modules/main/pages/room/room.page.scss")]
        })
    ], RoomPage);
    return RoomPage;
}());



/***/ }),

/***/ "./src/app/room/room.component.scss":
/*!******************************************!*\
  !*** ./src/app/room/room.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vcm9vbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cst */ "./src/app/cst.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_room_room_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/room/room.service */ "./src/app/services/room/room.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






//import { Socket } from 'net';


var RoomComponent = /** @class */ (function () {
    function RoomComponent(route, roomService, router, _snackBar) {
        this.route = route;
        this.roomService = roomService;
        this.router = router;
        this._snackBar = _snackBar;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRoomID();
        this.roomService.joinRoom(this.roomID)
            .subscribe(function (res) {
            // if the room exists...
            _this.getUsername();
            _this.connectSocket();
        }, function (error) {
            // else
            if (error.status == 500)
                _this.openSnackBar("This room doesn't exist. Please try with another room ID", "Error");
            else
                _this.openSnackBar(error.error.errorMessage, "Error");
            _this.router.navigate(['home']);
        });
        window.onbeforeunload = function () { return _this.ngOnDestroy(); };
    };
    RoomComponent.prototype.ngOnDestroy = function () {
        // removing the user
        localStorage.removeItem(_cst__WEBPACK_IMPORTED_MODULE_2__["CST"].LS_USERNAME_LABEL);
        // close the socket & remove it from the room
        this.socket.emit('disconnect', '');
    };
    RoomComponent.prototype.connectSocket = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SOCKET_URI, { query: "roomID=" + this.roomID });
        this.socket.on('connect', function () {
            console.log("Socket connection with server established");
        });
        this.socket.on('disconnect', function (reason) {
            console.log(reason);
            _this.openSnackBar("Socket connection failed. Please try again later", "Error");
            _this.router.navigate(['home']);
        });
        this.socket.on('message', function (data) {
            console.log("server message (socket): " + data);
        });
    };
    RoomComponent.prototype.getUsername = function () {
        var username = localStorage.getItem(_cst__WEBPACK_IMPORTED_MODULE_2__["CST"].LS_USERNAME_LABEL);
        if (!username) {
            username = prompt("Please Choose a Username: ");
            localStorage.setItem(_cst__WEBPACK_IMPORTED_MODULE_2__["CST"].LS_USERNAME_LABEL, username);
        }
        this.username = username;
    };
    RoomComponent.prototype.getRoomID = function () {
        this.roomID = this.route.snapshot.paramMap.get('id');
    };
    RoomComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    RoomComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_room_room_service__WEBPACK_IMPORTED_MODULE_6__["RoomService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! raw-loader!./room.component.html */ "./node_modules/raw-loader/index.js!./src/app/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.scss */ "./src/app/room/room.component.scss")]
        })
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        //SERVER_URI: string = environment.SERVER_URI;
        this.SERVER_URI = "http://localhost:8080";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ''
            })
        };
    }
    //POST:  login
    AuthService.prototype.login = function (email, password) {
        var data = {
            email: email,
            password: password
        };
        // return this.http.post<any>(environment.SERVER_URI + '/auth/login', data, this.httpOptions);
        return this.http.post('api/auth/login', data, this.httpOptions);
    };
    //POST:  login
    AuthService.prototype.signup = function (username, email, password) {
        var data = {
            username: username,
            email: email,
            password: password
        };
        // return this.http.post<any>(environment.SERVER_URI + '/auth/signup', data, this.httpOptions);
        return this.http.post('api/auth/signup', data, this.httpOptions);
    };
    //TOKEN
    AuthService.prototype.authenticate = function (token, username) {
        localStorage.setItem('x-access-token', token);
        localStorage.setItem('x-username', username);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-username');
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('x-access-token');
        return token != null;
        // return !this.jwtHelper.isTokenExpired(token);   //throws an exception sometimes (The inspected token doesn't appear to be a JWT)
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem('x-username');
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/room/room.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/room/room.service.ts ***!
  \***********************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { Socket } from 'dgram';
// import { ResponseDTO } from '../../models/response-dto';
var RoomService = /** @class */ (function () {
    function RoomService(http) {
        this.http = http;
        // SERVER_URI: string = environment.SERVER_URI;
        this.SERVER_URI = "http://localhost:8080";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ''
            })
        };
    }
    RoomService.prototype.createRoom = function () {
        // return this.http.post<any>(this.SERVER_URI + '/room/create-room', {}, this.httpOptions);
        return this.http.post('api/room/create-room', {}, this.httpOptions);
    };
    RoomService.prototype.joinRoom = function (roomId) {
        var data = {
            roomId: roomId
        };
        console.log(data);
        // return this.http.post<any>(this.SERVER_URI + '/room/join-room', data, this.httpOptions);
        return this.http.post('api/room/join-room', data, this.httpOptions);
    };
    RoomService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    SOCKET_URI: "/socket"
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/achraf/Documents/sideprojects/apps/YoutubeSync/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map