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

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_now_book_now_component__ = __webpack_require__("../../../../../src/app/book-now/book-now.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boating_boating_component__ = __webpack_require__("../../../../../src/app/boating/boating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__kayaking_kayaking_component__ = __webpack_require__("../../../../../src/app/kayaking/kayaking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_store_item_store_item_component__ = __webpack_require__("../../../../../src/app/store/store-item/store-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_5__faq_faq_component__["a" /* FaqComponent */] },
    { path: 'book', component: __WEBPACK_IMPORTED_MODULE_6__book_now_book_now_component__["a" /* BookNowComponent */] },
    { path: 'inshore-fishing', component: __WEBPACK_IMPORTED_MODULE_7__boating_boating_component__["a" /* BoatingComponent */] },
    { path: 'kayaking', component: __WEBPACK_IMPORTED_MODULE_8__kayaking_kayaking_component__["a" /* KayakingComponent */] },
    { path: 'store', component: __WEBPACK_IMPORTED_MODULE_9__store_store_component__["a" /* StoreComponent */] },
    { path: 'store/:itemId', component: __WEBPACK_IMPORTED_MODULE_10__store_store_item_store_item_component__["a" /* StoreItemComponent */] },
    { path: '**', redirectTo: '404' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart-button{\n\n    font-size: 1rem;\n}\n\n.cart-button input[name=\"submit\"]{\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-socialbar></app-socialbar>\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/homepage/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socialbar_socialbar_component__ = __webpack_require__("../../../../../src/app/socialbar/socialbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kayaking_kayaking_component__ = __webpack_require__("../../../../../src/app/kayaking/kayaking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boating_boating_component__ = __webpack_require__("../../../../../src/app/boating/boating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__book_now_book_now_component__ = __webpack_require__("../../../../../src/app/book-now/book-now.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__kayaking_jumbotron_jumbotron_component__ = __webpack_require__("../../../../../src/app/kayaking/jumbotron/jumbotron.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_store_item_store_item_component__ = __webpack_require__("../../../../../src/app/store/store-item/store-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_keep_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/keep-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_store_item_variable_price_variable_price_component__ = __webpack_require__("../../../../../src/app/store/store-item/variable-price/variable-price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_store_item_fixed_price_fixed_price_component__ = __webpack_require__("../../../../../src/app/store/store-item/fixed-price/fixed-price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// Import HttpClientModule from @angular/common/http

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__homepage_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_6__socialbar_socialbar_component__["a" /* SocialbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__kayaking_kayaking_component__["a" /* KayakingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__boating_boating_component__["a" /* BoatingComponent */],
                __WEBPACK_IMPORTED_MODULE_12__store_store_component__["a" /* StoreComponent */],
                __WEBPACK_IMPORTED_MODULE_13__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__book_now_book_now_component__["a" /* BookNowComponent */],
                __WEBPACK_IMPORTED_MODULE_16__kayaking_jumbotron_jumbotron_component__["a" /* JumbotronComponent */],
                __WEBPACK_IMPORTED_MODULE_17__store_store_item_store_item_component__["a" /* StoreItemComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_keep_html_pipe__["a" /* KeepHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_19__store_store_item_variable_price_variable_price_component__["a" /* VariablePriceComponent */],
                __WEBPACK_IMPORTED_MODULE_20__store_store_item_fixed_price_fixed_price_component__["a" /* FixedPriceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/boating/boating.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  background-image: url(/kayakveniceweb/assets/images/2018/inshore-redfish-venice.jpg);\n  min-height: 500px;\n  background-position: center center;\n  background-size: cover;\n  position: relative;\n\n}\n\n.jumbotron .center-vertically{\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.jumbotron h1{\n  color: white;\n  font-size: 3rem;\n}\n\n.jumbotron h2{\n  color: white;\n  font-size: 3rem;\n}\n\n.jumbotron .btn {\n  display: block;\n  /*width:200px;*/\n  font-size: 2rem;\n\n}\n\n.album .card {\n    float: left;\n    width: 50%;\n    padding: .75rem;\n    margin-bottom: 2rem;\n    border: 0;\n}\n\n@media (min-width: 576px) {\n\n  .album .card {\n      width: 25%;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/boating/boating.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Jumbotron-->\n<div id=\"\" class=\"jumbotron pt-0 pb-0 bg-white mb-0\">\n  <div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col\">\n        <div class=\"float-right text-right caption\" style=\"margin-top:10rem\">\n          <h2 class=\"p-2 font-neucha\">The Fishing Trip of a Lifetime</h2>\n          <a routerLink=\"/book\" class=\"btn btn-lg btn-primary mx-auto font-marvel\">Book Today</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- End jumbotron -->\n\n<div class=\"container-fluid\">\n  <div class=\"album text-muted\">\n        <div class=\"container\">\n\n          <div class=\"row\">\n            <div class=\"card\">\n              <img data-src=\"holder.js/100px280?theme=thumb\" alt=\"Thumbnail [100%x280]\" style=\"width: 100%; display: block;\"   src=\"https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/13346280_989542917765517_7784992288863628470_o.jpg?oh=a860119a7430d900d014324add913fed&oe=5AED1130\" data-holder-rendered=\"true\">\n            </div>\n            <div class=\"card\">\n              <img data-src=\"holder.js/100px280?theme=thumb\" alt=\"Thumbnail [100%x280]\" style=\"width: 100%; display: block;\"   src=\"https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/10272516_628333353886477_4855533099132492591_o.jpg?oh=cffa31100d2a2579d35d8c64b33e28be&oe=5AB0AB0D\" data-holder-rendered=\"true\">\n            </div>\n            <div class=\"card\">\n              <img data-src=\"holder.js/100px280?theme=thumb\" alt=\"Thumbnail [100%x280]\" style=\"width: 100%; display: block;\"   src=\"https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/12672018_922337971152679_8411660457303869974_o.jpg?oh=ebdfbe9791410cc90c5d9ed1046e614e&oe=5AE857F2\" data-holder-rendered=\"true\">\n            </div>\n            <div class=\"card\">\n              <img data-src=\"holder.js/100px280?theme=thumb\" alt=\"Thumbnail [100%x280]\" style=\"width: 100%; display: block;\"   src=\"https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/10854847_735663143153497_4496284164861823402_o.jpg?oh=ceacc44369fc372400b2a0fa631bf241&oe=5AF8918E\" data-holder-rendered=\"true\">\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Inshore Fishing off Venice, Louisiana</h1>\n      <h3>There’s nothing quite like inshore fishing in Venice.</h3>\n      <p>Kayak Venice has access to one of the few places in the world where you can hook a large-mouth bass, a\n        giant red bull and an enormous speckled trout all in the same spot. We’ll take you to some of the most\n        productive fishing areas along the Louisiana Barrier Islands and the Mississippi Delta.</p>\n\n      <p>This spectacular diversity is the result of rich nutrients flowing from the Mississippi River into the nearby estuary, creating the optimal conditions for fish to thrive. A few of the species you can hook in this area include:</p>\n      <img style=\"max-width:100%; width:400px;\" src=\"./assets/images/2018/venice-trout-fishing.jpg\" class=\"float-right\" alt=\"\">\n      <ul>\n        <li>Redfish (Red Drum)</li>\n        <li>Speckled Trout</li>\n        <li>Flounder</li>\n        <li>Black Drum</li>\n        <li>Sheepshead</li>\n        <li>Tripletail</li>\n        <li>And more…</li>\n      </ul>\n\n\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <!--kayakfishing pricing -->\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <h3>Inshore Pricing</h3>\n          <tr>\n            <th scope=\"col\">Guests</th>\n            <th scope=\"col\">Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td scope=\"col\">1-3</td>\n            <td scope=\"col\">$800</td>\n          </tr>\n          <tr>\n            <td scope=\"col\">4</td>\n            <td scope=\"col\">$850</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n\n  <div class=\"row mt-3\">\n    <div class=\"col\">\n      <p>Call Captain Brian today to book your inshore fishing adventure!</p>\n      <a class=\"btn btn-lg btn-primary m-1\" href=\"/book\">Book Now</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/boating/boating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoatingComponent = (function () {
    function BoatingComponent() {
    }
    BoatingComponent.prototype.ngOnInit = function () {
    };
    BoatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-boating',
            template: __webpack_require__("../../../../../src/app/boating/boating.component.html"),
            styles: [__webpack_require__("../../../../../src/app/boating/boating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoatingComponent);
    return BoatingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book-now/book-now.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-now/book-now.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-3\">\n    <div class=\"col\">\n      <h2>Book Your Kayak or Inshore Fishing Adventure Today</h2>\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-12 col-md-4\">\n\n      <div class=\"card float-left m-3\" style=\"width: 25rem; max-width:100%\">\n        <img class=\"card-img-top\" src=\"./assets/images/2018/captain_brian.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\" style=\"font-size:1rem;\">\n          <h5 class=\"card-title\">Captain Brian</h5>\n          <a href=\"tel:1-504-419-5645\">(504) 419-5645</a>\n          <a href=\"mailto:captainbrian@kayakvenicela.com\">CaptainBrian@kayakvenicela.com</a>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-12 col-md-8\">\n      <p>You can book your next fishing adventure by calling captain Brian or sending him\n      an email.</p>\n\n      <h4 class=\"text-secondary font-marvel\">Pricing</h4>\n      <h5>Kayak Fishing</h5>\n      <ul>\n        <li>5 hour: $150 guide fee + 55 per kayak rental.</li>\n        <li>7 hour: $200 guide fee + 65 per kayak rental.</li>\n      </ul>\n      <hr>\n      <h5>Kayak Tour</h5>\n      <ul>\n        <li>3 hour: $100 guide fee + 55 per kayak rental.</li>\n      </ul>\n\n      <hr>\n      <h5>Inshore Boat Fishing</h5>\n      <ul>\n        <li>1-3 Person: $800</li>\n        <li>4 Person: $850</li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h4 class=\"text-secondary font-marvel\">Privacy Policy</h4>\n      <p>Kayak Venice respects your privacy and won't release your conﬁdential information. Ever.</p>\n    </div>\n\n    <div class=\"col-12\">\n      <h1>Questions?</h1>\n      <p>Visit our <a routerLink=\"/faq\">FAQ</a> page or call us at <a href=\"tel:1-504-419-5645\">(504) 419-5645</a>  for more information.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/book-now/book-now.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookNowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookNowComponent = (function () {
    function BookNowComponent() {
    }
    BookNowComponent.prototype.ngOnInit = function () {
    };
    BookNowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-now',
            template: __webpack_require__("../../../../../src/app/book-now/book-now.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-now/book-now.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookNowComponent);
    return BookNowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>FAQ</h1>\n    </div>\n\n    <div class=\"col-12\">\n      <h3>What License do I need?</h3>\n      <p>You will need the <small><i>Charter Passenger (3 day)</i></small> license purchased from a local authorized vender\n      or by going to the Louisiana Department of Wildlife and Fisheries\n      <a href=\"http://www.wlf.louisiana.gov/recreational-fishing-licenses\">website</a>. It should cost $10 plus a small\n      processing fee.</p>\n      <hr>\n\n      <h3>What should I Bring?</h3>\n      <p>Always dress apropriate for the weather and activity but in general:</p>\n      <ul>\n        <li>Rain gear or a disposible poncho.</li>\n        <li>Sunscreen, bug spry, sunglasses, hat.</li>\n        <li>Wet shoes, sandals, or boots.</li>\n        <li>Fishing license.</li>\n        <li>Snacks and drinks.</li>\n        <li>A towel and a change of clothes just in case.</li>\n      </ul>\n      <hr>\n\n      <h3>What if I just want to rent kayaks?</h3>\n      <p>Unfortunatley we do not rent kayaks without a guide. As our business continues to grow this might change.</p>\n      <hr>\n\n      <h3>How far are you from New Orleans?</h3>\n      <p>We are an hour and 30 minutes away from the New Orleans airport on a day with light traffic.</p>\n      <hr>\n\n      <h3>Do you have any lodging recommendations?</h3>\n      <p>If you are looking for accomodation we are very knowledgable of the lodging available near venice. Give\n      us a call at (504) 419-5645 and we would be happy to help you find the type of lodging that meets your needs and budget.</p>\n      <hr>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\n  font-size: 1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-2 bg-dark\">\n</div>\n<div class=\"container-fluid bg-dark-1 p-3 text-light footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-4 text-center\">\n        <img class=\"\" src=\"./assets/logo-white.png\" style=\"width: 150px; max-width:100%;\" alt=\"\">\n      </div>\n\n      <div class=\"col-12 col-md-4\">\n        <ul class=\"\" style=\"list-style:none;\">\n          <li><a class=\"text-white\" routerLink=\"/book\">Book Now</a></li>\n          <li><a class=\"text-white\" routerLink=\"/faq\">FAQ</a></li>\n          <!-- <li><a class=\"text-white\" routerLink=\"/about\">About</a></li> -->\n        </ul>\n      </div>\n\n      <div class=\"col-12 col-md-4\">\n        <ul class=\"\" style=\"list-style:none;\">\n          <li><a class=\"text-white\" href=\"tel:1-504-419-5645\">(504) 419-5645</a></li>\n          <li><a class=\"text-white\" href=\"mailto:captainbrian@kayakvenicela.com\">captainbrian@kayakvenicela.com</a></li>\n          <li>\n            <a href=\"https://www.facebook.com/kayakvenicela/\" class=\"fa fa-facebook\"></a>\n            <a href=\"https://twitter.com/captainbrian11\" class=\"fa fa-twitter\"></a>\n            <a href=\"https://plus.google.com/116776890557613288363\" class=\"fa fa-google\"></a>\n            <a href=\"https://www.youtube.com/user/kayakvenicelouisiana\" class=\"fa fa-youtube\"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col text-center\">\n        <p>Designed by <a href=\"https://www.linkedin.com/in/nolanrsherman/\">Nolan Sherman</a>. Copywrite &copy; {{year}} Southern Paradise Enterprises.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var d = new Date();
        this.year = d.getFullYear();
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#homepage-jumbotron{\n  background-image: url('/kayakveniceweb/assets/homepage-image.png');\n  min-height: 722px;\n  background-position: bottom center;\n  background-size: cover;\n}\n\nh1{\n  color: white;\n  font-size: 3rem;\n}\n\nh2{\n  color: white;\n  font-size: 3rem;\n}\n\n.btn {\n  display: block;\n  width: 180px;\n  font-size: 2rem;\n  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Jumbotron-->\n<div id=\"homepage-jumbotron\" class=\"jumbotron pt-0 pb-0 bg-white mb-0\">\n  <div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col\">\n        <div class=\"float-right text-right\" style=\"\">\n          <div class=\"p-2\"><img style=\"width:600px; max-width:100%\" src=\"./assets/logo-bubble.svg\" alt=\"\"></div>\n\n          <h2 class=\"p-2 font-neucha\">Your Greatest Fishing Adventure.</h2>\n          <a routerLink=\"/book\" class=\"btn btn-lg btn-primary mx-auto font-marvel\">Book Today</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- End jumbotron -->\n"

/***/ }),

/***/ "../../../../../src/app/homepage/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/homepage/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-30px{\n  padding: 30px;\n}\n\n.service{\n  position:relative;\n}\n\n.service img{\n  position: relative;\n}\n\n.service.caption{\n  position: relative;\n  color: white;\n  background: black;\n  width:100%;\n}\n\n.fleet{\n  max-height: 800px;\n  overflow: hidden;\n  padding: 5px;\n}\n\n.carousel-overdecal {\n  width: 100%;\n  height: 100%;\n  background-image: url(/kayakveniceweb/assets/carousel-overlay-image.png);\n  position: absolute;\n  top: 0;\n  background-size: cover;\n}\n\n.carousel-caption{\n  background: #2f303699;\n}\n\n/*.card-image{\n  border-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  overflow: hidden;\n  max-height: 300px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  box-shadow: #0000001a 5px -5px 10px;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Homepage-->\n<app-carousel></app-carousel>\n<!--sponsors -->\n<div class=\"container-fluid sponsors\">\n  <div class=\"row\">\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://amphibiaeyegear.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/amphibia.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://www.cudabrand.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/cudaknives.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://www.ecwid.com/store/egretbaits/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/egret_baits.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://www.engelcoolers.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/engelcoolers.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://www.finsfishing.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/fins.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"http://kakukayak.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/kakukayaks.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://www.mccainfishing.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/mccainrods.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://www.onyxoutdoor.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/onyx.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"http://www.power-pole.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/powerpole.png\" alt=\"\"></a>\n    </div>\n    <div class=\"col-2 col-md m-auto\">\n      <a href=\"https://www.rossreels.com/\"><img class=\"img-fluid\" src=\"./assets/images/2018/logos/ross-reels.png\" alt=\"\"></a>\n    </div>\n  </div>\n</div>\n<!-- end sponsors -->\n\n<!-- welcome -->\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h2 class=\"font-neucha mt-4 text-center\">Looking for the fishing adventure of a lifetime?</h2>\n    </div>\n    <div class=\"col\">\n      <p>Kayak Venice can provide you with an ejoyable fishing experience whether in a kayak or on a boat. Checkout the\n        awesome fun that Ty and Theresa Southerland had with us on a kayak trip in the video below!</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Ie0YELSyuxQ\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n<!-- Services -->\n<div class=\"container-fluid bg-light mt-5\">\n  <div class=\"container\">\n    <!-- <div class=\"row\">\n      <div class=\"col\">\n        <h1 class=\"text-center\">Our Passion</h1>\n      </div>\n    </div> -->\n    <div class=\"row\">\n\n        <div class=\"col mb-3 mt-3\">\n          <div class=\"card m-auto\" style=\"width: 30rem; max-width:100%;\">\n            <img class=\"card-img-top\" src=\"./assets/images/2017/kayaking-venice.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Kayaking</h4>\n              <p class=\"card-text\">We offer tours, kayak fishing, mothership charters and more with our fleet of Kaku Kayaks.</p>\n              <a routerLink=\"/kayaking\" class=\"btn btn-primary\">Learn More</a>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col mb-3 mt-3\">\n          <div class=\"card m-auto\" style=\"width: 30rem; max-width:100%;\">\n            <img class=\"card-img-top\" src=\"./assets/images/2017/venice-inshore-fishing.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Inshore Boating</h4>\n              <p class=\"card-text\">Ride with us at high speed to the best fishing holes southern Louisiana has to offer.</p>\n              <a routerLink=\"/inshore-fishing\" class=\"btn btn-primary\">Learn More</a>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n<!-- Client Review Carousel -->\n<div class=\"container-fluid bg-dark\">\n  <div class=\"container p-3\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=10000>\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"./assets/images/2018/pat-kayakfishing.jpg\" alt=\"First slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <p>\"Just got home from another great fishing trip. Brought back lots of fish and better memories! Thanks Brian!\"</p>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <h5>-Pat, Tennesse</h5>\n          </div>\n        </div>\n\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"./assets/images/2018/theresa-kayakfishing.jpg\" alt=\"First slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <p>\"My 19-year old son and I kayak fished with Nolan and we had a great time. Nolan is very easy to be with and he is always willing to go the extra mile for his\n              guests. It was a peaceful day on the water, but filled with adventure too. \"</p>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <h5>-Theresa, Washington</h5>\n          </div>\n        </div>\n\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"./assets/images/2018/joni-redfish.jpg\" alt=\"First slide\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <p>\"Absolutely the most fun! Brian puts the experienced one's right on the fish and\n              is patient with teaching us newbies. Can't wait to go back!\"</p>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\n            <h5>-Joni, Florida</h5>\n\n          </div>\n        </div>\n\n      </div>\n      <div class=\"carousel-overdecal\">\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Fleet -->\n<div class=\"container-fluid fleet\" style=\"background-image: url(assets/images/2017/wahoo-bg.jpg)\">\n  <div class=\"container text-white\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h1 class=\"text-center\">Our Fleet</h1>\n        <p>Kaku Kayaks provide comfort, mobility and unparalleled stability without sacrificing speed. That is why all of our kayaks\n        and paddle boards are Kakus.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col text-center\">\n        <a class=\"btn btn-primary btn-lg\" href=\"http://kakukayak.com\" role=\"button\">Check Out Kaku Kayaks</a>\n        <img class=\"img-fluid w-100\" src=\"assets/images/2017/our-fleet.png\">\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- End Homepage -->\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kayaking/jumbotron/jumbotron.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  background-image: url('/kayakveniceweb/assets/images/2017/kayak-louisiana-tours.jpg');\n  min-height: 500px;\n  background-position: center center;\n  background-size: cover;\n  position: relative;\n\n}\n\n.center-vertically{\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nh1{\n  color: white;\n  font-size: 3rem;\n}\n\nh2{\n  color: white;\n  font-size: 3rem;\n}\n\n.btn {\n  display: block;\n  width:300px;\n  font-size: 2rem;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kayaking/jumbotron/jumbotron.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Jumbotron-->\n<div id=\"\" class=\"jumbotron pt-0 pb-0 bg-white mb-0\">\n  <div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col\">\n        <div class=\"float-right text-right caption\" style=\"margin-top:10rem\">\n          <h2 class=\"p-2 font-neucha\">Kayaking makes us smile</h2>\n          <a routerLink=\"/book\" class=\"btn btn-lg btn-primary mx-auto font-marvel\">Book Your Smiles Today.</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- End jumbotron -->\n"

/***/ }),

/***/ "../../../../../src/app/kayaking/jumbotron/jumbotron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumbotronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumbotronComponent = (function () {
    function JumbotronComponent() {
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    JumbotronComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jumbotron',
            template: __webpack_require__("../../../../../src/app/kayaking/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kayaking/jumbotron/jumbotron.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kayaking/kayaking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plus{\n  height: 100px;\n}\n\n@media (min-width: 576px) {\n\n  .plus{\n    height: 400px;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kayaking/kayaking.component.html":
/***/ (function(module, exports) {

module.exports = "<app-jumbotron></app-jumbotron>\n\n<!--Kayaking-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <!-- <p>With over 10 years of experience kayaking in the marshes of South Louisiana, Kayak Venice is\n      equiped to provide you with a fun and memorable paddle adventure.</p> -->\n    </div>\n  </div>\n</div>\n\n<!-- Kayak Fishing -->\n<div class=\"container-fluid bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n      </div>\n    </div>\n\n    <div class=\"row mt-4 mb-4\">\n      <div class=\"col\">\n        <div class=\"card\" style=\"width: 100%;\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-6\">\n              <img class=\"card-img-top\" src=\"./assets/images/2017/venice-kayak-redfish.jpg\" alt=\"Card image cap\">\n            </div>\n            <div class=\"col\">\n              <div class=\"card-body\">\n                <h2 class=\"text-center\">Kayak Fishing</h2>\n                <p class=\"card-text\">Kayak Venice has over 10 years of experience kayak fishing in the marshes of\n                south Louisiana and is equipped to give your group a memorable trip. Our guides are passionate about\n                fishing and they are great at instructing new commers to the sport of kayak fishing.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n          <h3 class=\"font-neucha\">How much?</h3>\n          <p>The price on a guided kayak fishing trip varies depending on how many hours you want to fish,\n          how many guides you need, and the amount of kayaks you are going to rent. For groups of 5 or more we require\n          a second guide. Instead of renting a kayak from us you are welcome to bring your own at no charge.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">../assets\n        <!--kayakfishing pricing -->\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n            <h3>Guide Fee</h3>\n            <span><small>(1 guide to 4 persons)</small></span>\n            <tr>\n              <th scope=\"col\">Hours</th>\n              <th scope=\"col\">Price</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td scope=\"row\">5</td>\n              <td>$150</td>\n            </tr>\n            <tr>\n              <td scope=\"row\">7</td>\n              <td>$200</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"col-12 col-sm-1 text-center align-middle\">\n        <div class=\"d-flex align-items-center bd-highlight mb-3 plus\" style=\"\">\n          <div class=\"p-2 bd-highlight m-auto\"> <h2 class=\"text-center\">+</h2> </div>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <!--kayakfishing pricing -->\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n            <h3>Kayak Rental</h3>\n            <span><small>(or bring your own for free)</small></span>\n            <tr>\n              <th scope=\"col\">Per Kayak</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td scope=\"col\">$55</td>\n            </tr>\n            <tr>\n              <td scope=\"col\">$65</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Kayak Tours -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n  </div>\n\n  <div class=\"row mt-4 mb-4\">\n    <div class=\"col\">\n      <div class=\"card\" style=\"width: 100%;\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"card-body\">\n              <h2 class=\"text-center\">Kayak Tours</h2>\n              <p class=\"card-text\">For those who simply would like to go for a paddle we offer guided kayak tours.\n                Paddle with us on a 3 hour excursion in an up close experience with the marshes and wildlife of southern Louisiana.</p>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-6\">\n            <img class=\"card-img-top\" src=\"./assets/images/2018/kayak-tour-birds.jpg\" alt=\"Card image cap\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n        <h3 class=\"font-neucha\">How much?</h3>\n        <p>Pricing for tours are structured similarly to kayak fishing but we only offer a 3 hour option.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <!--kayakfishing pricing -->\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <h3>Guide Fee</h3>\n          <tr>\n            <th scope=\"col\">Hours</th>\n            <th scope=\"col\">Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td scope=\"row\">3</td>\n            <td>$100</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"col-12 col-sm-1 text-center align-middle\">\n      <div class=\"d-flex align-items-center bd-highlight mb-3 plus\" style=\"height:150px;\">\n        <div class=\"p-2 bd-highlight m-auto\"> <h2 class=\"text-center\">+</h2> </div>\n      </div>\n    </div>\n\n    <div class=\"col\">\n      <!--kayakfishing pricing -->\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <h3>Kayak Rental</h3>\n          <tr>\n            <th scope=\"col\">Per Kayak</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td scope=\"col\">$55</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n</div>\n\n<!-- Mothershipping -->\n<div class=\"container-fluid bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"text-center\">Mothershipping</h2>\n        <p>Some of the most productive fishing holes in venice are not reachable by kayak. We can load kayaks up\n          on our boat and take you to  the end of the Mississipi river to fish the jetties, to Brittian Sound\n          to fish for trout and redfsih along the island 's beaches, or one of many other locations.</p>\n        <p>Call Captain Brian at (504) 419-5645 for more information and an estimate for the cost of your mothership adventure.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/kayaking/kayaking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KayakingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KayakingComponent = (function () {
    function KayakingComponent() {
    }
    KayakingComponent.prototype.ngOnInit = function () {
    };
    KayakingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kayaking',
            template: __webpack_require__("../../../../../src/app/kayaking/kayaking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kayaking/kayaking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KayakingComponent);
    return KayakingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\"> <img class=\"\" style=\"max-height:45px\" src=\"./assets/logo-text.svg\" alt=\"\"> </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/kayaking\">Kayaking</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/inshore-fishing\">Inshore Fishing</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/store\">Store</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n<!--End Navbar-->\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Sorry, we can't find the page your looking for.</h1>\n      <p>Are you looking for this?</p>\n      <ul>\n        <li><a href=\"#\">Kayak Fishing</a></li>\n        <li><a href=\"#\">Inshore Fishing</a></li>\n      </ul>\n\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid p-0\">\n  <img class=\"img-fluid\" src=\"./assets/images/2017/kayakingredfish.JPG\" alt=\"\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/keep-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepHtmlPipe = (function () {
    function KeepHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeepHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    KeepHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'keepHtml', pure: false }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], KeepHtmlPipe);
    return KeepHtmlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/socialbar/socialbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-black{\n  background: black;\n}\n\n.socialbar{\n  background: #212121;\n  border-bottom: #1b1b1b solid 1px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n\n}\n\n\n/* Style all font awesome icons */\n.fa {\n  padding: 10px;\n  font-size: 24px;\n  width: 50px;\n  text-align: center;\n  text-decoration: none;\n}\n\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n\n/* Set a specific color for each brand */\n\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}\n\n.fa-google {\n    background: #dd4b39;\n    color: white;\n}\n\n.fa-youtube {\n    background: #bb0000;\n    color: white;\n}\n\n.fa-youtube {\n    background: #bb0000;\n    color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/socialbar/socialbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-black socialbar text-white\">\n  <div class=\"row\">\n    <div class=\"col\">\n        <h4 class=\"float-left font-marvel m-0\">504 419-5645</h4>\n        <div class=\"float-right\">\n          <a href=\"https://www.facebook.com/kayakvenicela/\" class=\"fa fa-facebook\"></a>\n          <a href=\"https://twitter.com/captainbrian11\" class=\"fa fa-twitter\"></a>\n          <a href=\"https://plus.google.com/116776890557613288363\" class=\"fa fa-google\"></a>\n          <a href=\"https://www.youtube.com/user/kayakvenicelouisiana\" class=\"fa fa-youtube\"></a>\n        </div>\n\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/socialbar/socialbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialbarComponent = (function () {
    function SocialbarComponent() {
    }
    SocialbarComponent.prototype.ngOnInit = function () {
    };
    SocialbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-socialbar',
            template: __webpack_require__("../../../../../src/app/socialbar/socialbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/socialbar/socialbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialbarComponent);
    return SocialbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/store/items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/store/item.ts");

/**
* Item Schema
*/
/*Item.price -Object
==Fixed Price==
{type:'fixed', value: 100.00}

==Variable Price==
{
  type:'variable',
  options: [
    {name: 'option name', value: 100.00},
    ...
  ]
}
*/
var item_1 = new __WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]();
item_1.id = 1;
item_1.name = 'Gift Voucher';
item_1.description = 'Give a gift that is on every anglers wishlist, the fishing adventure of a lifetime!';
item_1.imgUrl = './assets/images/2018/giftcertificate.png';
item_1.price = 200;
item_1.cartButton = "<form target=\"paypal\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" class=\"\">\n              <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n              <input type=\"hidden\" name=\"hosted_button_id\" value=\"LXC56XW4BT7WE\">\n              <table>\n              <tr><td><input type=\"hidden\" name=\"on0\" value=\"Options\">Choose an amount</td></tr>\n              <tr><td><select name=\"os0\" class=\"custom-select\" style=\"font-size:1rem;\">\n              \t<option value=\"Covers the guide fee\">Covers the guide fee $200.00 USD</option>\n              \t<option value=\"1 rental + guide fee\">1 rental + guide fee $265.00 USD</option>\n              \t<option value=\"2 rentals + guide fee\">2 rentals + guide fee $330.00 USD</option>\n              \t<option value=\"3 rentals + guide fee\">3 rentals + guide fee $395.00 USD</option>\n              \t<option value=\"4 rentals + guide fee\">4 rentals + guide fee $460.00 USD</option>\n              \t<option value=\"Mothership Charter\">Mothership Charter $550.00 USD</option>\n              </select> </td></tr>\n              <tr><td><input type=\"hidden\" name=\"on1\" value=\"Recipient's name\">Recipient's name</td></tr><tr><td><input class=\"form-control mb-3\" type=\"text\" name=\"os1\" maxlength=\"200\"></td></tr>\n              </table>\n              <input type=\"hidden\" name=\"currency_code\" value=\"USD\">\n              <button class=\"btn btn-primary\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">Add to cart</button>\n              <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n          </form>\n";
item_1.detail = 'This gift voucher is good towards a fishing charter with Kayak Venice in Venice, Louisiana. It can be used toward any inshore fishing charter or guided kayak trip. The value of the gift certificate will be subtacted from the total cost of the trip. It is the responsibility of the client paying with the gift voucher to pay for the remaining balance.';
item_1.body = "\n<div class=\"col-12\">\n\n</div>";
var ITEMS = [
    item_1
];


/***/ }),

/***/ "../../../../../src/app/store/store-item/fixed-price/fixed-price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-item/fixed-price/fixed-price.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fixed-price works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/store/store-item/fixed-price/fixed-price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FixedPriceComponent = (function () {
    function FixedPriceComponent() {
    }
    FixedPriceComponent.prototype.ngOnInit = function () {
    };
    FixedPriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fixed-price',
            template: __webpack_require__("../../../../../src/app/store/store-item/fixed-price/fixed-price.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/store-item/fixed-price/fixed-price.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FixedPriceComponent);
    return FixedPriceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/store-item/store-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart-button{\n\n    font-size: 1rem;\n}\n\n.cart-button input[name=\"submit\"]{\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-item/store-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"col\">\n      <div class=\"card\" style=\"width: 100%;\">\n        <img class=\"card-img-top\" src=\"{{item.imgUrl}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{item.description}}</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-md-6\">\n      <!-- Pricing and Purchase -->\n      <h4 class=\"mt-3\">{{item.name}}</h4>\n\n      <div class=\"\"><!-- Fixed Pricing -->\n\n        <!-- Cart button -->\n        <div [innerHTML]=\"item.cartButton | keepHtml\" class=\"cart-button\">\n        </div>\n\n        <!-- View Cart -->\n        <a style=\"font-size:1rem;\" target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_cart&display=1&business=7YAPX9WW5XUPC\">View cart</a>\n\n      </div><!-- End Fixed Pricing -->\n\n      <!-- End Prricing and purchase -->\n      <hr>\n\n      <p>{{item.detail}}</p>\n    </div>\n\n\n\n    <div class=\"col-12 mt-5\" [innerHTML]=\"item.body\">\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/store/store-item/store-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items__ = __webpack_require__("../../../../../src/app/store/items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreItemComponent = (function () {
    function StoreItemComponent(route, router) {
        this.route = route;
        this.router = router;
        this.defaultSelection = { value: null, name: 'default' };
        this.selectedOption = this.defaultSelection;
        this.variableBuyButtonDisabled = true;
    }
    StoreItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.itemId = +params['itemId']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
            _this.item = _this.getItem(_this.itemId);
            console.log(_this.item);
        });
    };
    StoreItemComponent.prototype.getItem = function (itemId) {
        // console.log("getItem# "+itemId)
        // return ITEMS.find(this.findItem);
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__items__["a" /* ITEMS */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_3__items__["a" /* ITEMS */][i].id === itemId) {
                return __WEBPACK_IMPORTED_MODULE_3__items__["a" /* ITEMS */][i];
            }
        }
        return null;
    };
    StoreItemComponent.prototype.onchange = function (option) {
        if (this.selectedOption == this.defaultSelection) {
            // console.log('Disabling button')
            this.variableBuyButtonDisabled = true;
        }
        else {
            // console.log('Enabling button')
            this.variableBuyButtonDisabled = false;
        }
    };
    StoreItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-store-item',
            template: __webpack_require__("../../../../../src/app/store/store-item/store-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/store-item/store-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], StoreItemComponent);
    return StoreItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/store-item/variable-price/variable-price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store-item/variable-price/variable-price.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{item.name}}</h4>\n\n\n<select class=\"custom-select\" style=\"font-size:1rem;\">\n  <option selected>Select an option</option>\n  <option *ngFor=\"let option of item.price.options\" value=\"{{option.value}}\">${{option.value}} - {{option.name}}</option>\n\n</select>\n<button type=\"button\" name=\"button\" class=\"btn btn-primary mt-3\">Add to cart</button>\n<a href=\"#\" style=\"font-size:1rem; vertical-align: sub;\">view cart</a>\n"

/***/ }),

/***/ "../../../../../src/app/store/store-item/variable-price/variable-price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablePriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VariablePriceComponent = (function () {
    function VariablePriceComponent() {
    }
    VariablePriceComponent.prototype.ngOnInit = function () {
    };
    VariablePriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-variable-price',
            template: __webpack_require__("../../../../../src/app/store/store-item/variable-price/variable-price.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/store-item/variable-price/variable-price.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VariablePriceComponent);
    return VariablePriceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row \" style=\"font-size: 1rem\">\n    <div class=\"col-xs-12 col-sm-12 col-md-2 bg-light pt-5\">\n      <h5>Items:</h5>\n      <ul>\n        <li> <a href=\"#\">All Items</a> </li>\n        <li> <a href=\"#\">Gift Certificates</a> </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-10 p-3\">\n      <!--ITEMS -->\n      <div class=\"card float-left m-3\" style=\"width: 18rem;\" *ngFor=\"let item of items\">\n        <img class=\"card-img-top\" src=\"{{item.imgUrl}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{item.name}}</h5>\n          <p class=\"card-text\">{{item.description}}</p>\n          <a routerLink=\"/store/{{item.id}}\" class=\"btn btn-primary\">Purchase</a>\n        </div>\n      </div>\n      <!-- end items -->\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col p-0 m-0\">\n      <div class=\"jumbotron m-0\" >\n        <h1 class=\"display-4\">More Items Comming Soon.</h1>\n        <p class=\"lead\">Sorry our store is a little empty, we are just getting started. Please come see us again soon.</p>\n        <hr class=\"my-4\">\n        <p>If you need help with an order you can email Nolan, our website mananger at <a href=\"mailto:nolan@kayakvenicela.com\">nolan@kayakvenicela.com</a>. </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items__ = __webpack_require__("../../../../../src/app/store/items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreComponent = (function () {
    function StoreComponent() {
        this.items = __WEBPACK_IMPORTED_MODULE_1__items__["a" /* ITEMS */];
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-store',
            template: __webpack_require__("../../../../../src/app/store/store.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/store.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map