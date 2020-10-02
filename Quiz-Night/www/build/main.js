webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_questions__ = __webpack_require__(101);
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
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CategoriesPage.prototype.openQuestionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__questions_questions__["a" /* QuestionsPage */]);
    };
    CategoriesPage.prototype.presentUnavailable = function () {
        var alert = this.alertCtrl.create({
            title: 'Not Available',
            subTitle: 'Feature awaiting implementation',
            buttons: ['Ok']
        });
        alert.present();
    };
    CategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriesPage');
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\categories\categories.html"*/'<!--\n  Generated template for the CategoriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><h1>Categories</h1></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<h2 text-center>Select your category</h2>\n<!-- Category pages -->\n	<div text-center padding-vertical>\n  	<button ion-button outline color="primary" large block (click)= "openQuestionsPage()">\n      <p ion-text color="secondary">General Knowledge &nbsp;\n      <ion-icon color="primary" name="globe"></ion-icon></button>\n\n    <button ion-button outline color="primary" large block (click)= "presentUnavailable()">\n      <p ion-text color="secondary">Film &nbsp;</p>  \n  	 	<ion-icon color="primary" name="film"></ion-icon></button>\n\n  	<button ion-button outline color="primary" large block (click)= "presentUnavailable()">\n      <p ion-text color="secondary">Music &nbsp;</p>\n  		<ion-icon color="primary" name="headset"></ion-icon></button>\n\n    <button ion-button outline color="primary" large block (click)= "presentUnavailable()">\n      <p ion-text color="secondary">Sport &nbsp;</p>\n      <ion-icon color="primary" name="basketball"></ion-icon></button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Generated class for the QuestionsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.selectedObject = [];
    }
    QuestionsPage_1 = QuestionsPage;
    QuestionsPage.prototype.getQuestions = function () {
        return this.quizQuestions;
    };
    QuestionsPage.prototype.displayJSONdata = function (clickedObject) {
        this.selectedObject = clickedObject;
        console.log("Assigned the JSON object in the click Event from home.html");
        /* we use the navCtrl to assign the variable ourParam in QuestionsPage to our selectedObject variable */
        this.navCtrl.push(QuestionsPage_1, {
            ourParam: this.selectedObject
        });
    };
    QuestionsPage = QuestionsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\questions\questions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><h1>Questions</h1></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <score></score> <!-- calling score -->\n  <h2 text-center><b ion-text color="secondary"></b></h2>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\questions\questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], QuestionsPage);
    return QuestionsPage;
    var QuestionsPage_1;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		279,
		2
	],
	"../pages/categories/categories.module": [
		280,
		1
	],
	"../pages/questions/questions.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openAboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.openCategoriesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center float-center> <!--Align navbar text center-->\n      <!--Heading 1 tag, color silver "Quiz Night and blankspace". Followed by moon icon colour gold-->\n      <h1 ion-text color="secondary">Quiz Night &nbsp;<ion-icon color="primary" name="moon"></ion-icon></h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--Actual page content follows-->\n<ion-content padding>\n\n  <!--div holding a piece of text-->\n  <div text-center>\n      <!--Welcome message to the used immediately above the image-->\n      <h2 ion-text color="secondary">Welcome To</h2>\n  </div>\n\n  <!--Ion-card used to insert image to homepage-->\n  <ion-card>\n    <img src="assets/imgs/QuizNight.png"/>\n  </ion-card>\n\n  <div class="row">\n    <div class="col" text-center>\n      <button ion-button color="primary" large round (click)="openCategoriesPage()"><p ion-text color="dark"><b>Press to Play &nbsp;</b></p>\n      <ion-icon color="dark" name="play"></ion-icon></button>\n    </div>\n  </div>\n\n  <div text-center padding-vertical>\n    <button ion-button outline color="primary" large block (click)="openAboutPage()">\n      <p ion-text color="secondary">About Us &nbsp;</p>\n      <ion-icon color="primary" name="information-circle"></ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiURL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean';
        console.log('Hello RestProvider Provider');
    }
    /*
  This is where our application accesses the external API for our data needs.
  We use a promise.
  We use the console.log to log any issues that occur.
  */
    RestProvider.prototype.getDataFromAPIViaPromise = function () {
        var _this = this;
        console.log("here in the promise");
        return new Promise(function (resolve) {
            _this.http.get(_this.apiURL).subscribe(function (q) {
                var results = q.results;
                resolve(results); //to get data from api
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

/*The promise resolves the URL
  The promise tries to GET the contents of the URL
  If this is successful then it SUBSCRIBES to the
  data (accesses the JSON)
  Then it RESOLVEs the data (to a variable data)
  If there is a problem (err) then it handles it
*/ 
//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_score_score__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_score_score__["a" /* ScoreComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questions/questions.module#Question2PageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__["a" /* QuestionsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { generalKnowledgeArray } from './generalList';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { generalKnowledgeArray } from '../../app/generalList';

//import { quizQuestions } from '../../pages/questions/questions'
var ScoreComponent = /** @class */ (function () {
    //This constructor gets the data from the api via the promise.
    function ScoreComponent(alertCtrl, restProvider) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.restProvider.getDataFromAPIViaPromise().then(function (q) {
            console.log("in get promise");
            console.log(q);
            _this.generalKnowQuestions = q;
        });
        this.reset();
    }
    ScoreComponent.prototype.reset = function () {
        this.score = 0;
        this.lives = 3;
        this.setLivesArray();
    };
    ScoreComponent.prototype.removeLife = function () {
        this.lives--;
        this.setLivesArray();
        if (this.lives == 0) {
            this.gameOver();
        }
    };
    ScoreComponent.prototype.addScore = function () {
        this.score++;
        if (this.score == 10) {
            this.gameOver();
        }
    };
    ScoreComponent.prototype.setLivesArray = function () {
        this.livesArray = [];
        for (var i = 3; i > 0; i--) {
            if (this.lives < i) {
                this.livesArray.push(false);
            }
            else {
                this.livesArray.push(true);
            }
        }
    };
    ScoreComponent.prototype.presentCorrect = function () {
        var alert = this.alertCtrl.create({
            title: 'Correct',
            subTitle: 'Score ++',
            buttons: ['Ok']
        });
        alert.present();
    };
    ScoreComponent.prototype.presentWrong = function () {
        var alert = this.alertCtrl.create({
            title: 'Incorrect',
            subTitle: 'Life --',
            buttons: ['Ok']
        });
        alert.present();
    };
    ScoreComponent.prototype.gameOver = function () {
        var alert = this.alertCtrl.create({
            title: 'Game Over',
            subTitle: 'You got ' + this.score + '/10',
            buttons: ['Reset']
        });
        alert.present();
        this.reset();
    };
    ScoreComponent.prototype.ngOnInit = function () {
    };
    ScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'score',template:/*ion-inline-start:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\components\score\score.html"*/'<!-- Generated template for the ScoreComponent component -->\n<div>\n  <div class="playerScore"> Score: {{score}}/10 </div>\n  <div class="lives"> \n  	<!--This uses the livesArray (filled by the setLiveArray method in ts), if true a heart is inputted, if false a heart outline is inputted-->\n  	<ion-icon *ngFor="let item of livesArray" class="life" [name]="item != false ? \'heart\' : \'heart-outline\'" color="primary"></ion-icon>\n  </div>\n  \n<!--This brings in the questions and answers from the API, if wrong answer is chosen removelife and presentwrong are run. If correct answer is chosen, addscore and presentcorrect is run -->\n<div *ngFor="let y of generalKnowQuestions">\n{{y.question}} \n<div class="row">\n  <div class="col" float-left>\n    <button ion-button block outline color="primary" (click)="addScore();presentCorrect();"><p ion-text color="secondary">A: {{y.correct_answer}}&nbsp;</p></button>\n      </div>\n    <div class="col" float-right>\n      <button ion-button block outline color="primary"(click)="removeLife();presentWrong(); "><p ion-text color="secondary" >B: {{y.incorrect_answers}} &nbsp;</p></button>\n      </div>\n  </div>\n</div>'/*ion-inline-end:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\components\score\score.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ScoreComponent);
    return ScoreComponent;
}());

//# sourceMappingURL=score.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><h1>About</h1></ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n      <h2>Welcome to the About Page</h2>\n  </div>\n\n    <p style="text-align: justify">We are a small group of university software development students engaged in a project for a mobile applications module. We are developing this project whilst trying to get to grips with the Ionic/Angular framework used for mobile-apps along with mobile programming interfaces (APIs) and various other fundamentals of hybrid app development.</p>\n\n    <p style="text-align: justify">We decided on this quiz for our project. The scope of it is as a light time-filler if someone is waiting for a bus or waiting to start some other activity. There is an element of competition with the lives feature as well as scores produced at the end. There are a number of categories to choose from with ten questions posed in each category.</p>\n\n    <p></p>\n\n    <h3 style="text-align: center">We hope you enjoy! </h3>\n\n<p>Name: QuizNight</p>\n<p>Date: 20/12/2018</p>\n<p>Version: 3.2</p>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\realp\MobDevRepos\Mobile-Development\Quiz Night\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map