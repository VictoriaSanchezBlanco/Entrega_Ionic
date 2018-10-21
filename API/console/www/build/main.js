webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_consolesservices_consolesservices__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsolesPage = /** @class */ (function () {
    function ConsolesPage(navCtrl, consolesservices) {
        this.navCtrl = navCtrl;
        this.consolesservices = consolesservices;
    }
    ConsolesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.consolesservices.getConsoles().subscribe(function (data) {
            _this.consoles = data;
        });
        console.log('ionViewDidLoad ConsolesPage');
    };
    ConsolesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consoles',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\consoles\consoles.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 id="tittle">Consoles</h1>\n  <br/>\n  <img src="../../assets/imgs/55.jpg" width="320" height="250"/>\n\n  <ion-list>\n    <ion-item id =\'colorList\' *ngFor="let console of consoles">\n      <p id="letra">{{console.name}}</p>\n      <p id="letra">{{console.date}}</p>\n      <p id="letra">{{console.feature}}</p>\n      <p id="letra">{{console.games}}</p> \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\consoles\consoles.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_consolesservices_consolesservices__["a" /* ConsolesservicesProvider */]])
    ], ConsolesPage);
    return ConsolesPage;
}());

//# sourceMappingURL=consoles.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listgames_listgames__ = __webpack_require__(199);
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
    HomePage.prototype.gotogames = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listgames_listgames__["a" /* ListgamesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 id="tittle">Consoles</h1>\n  <br/>\n  <img src="../../assets/imgs/game.jpg" width="320" height="250"/>\n  <br/>\n  <br/>\n  <br/>\n  <p id="curiosity">Curiosities</p>\n  <p id="curiosity">The first video game console in history was called Magnavox Odyssey and was commercialized by Philips in 1968</p>\n  <br/>\n  <button ion-button full color="orange" (click)="gotogames()">List of games</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListgamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListgamesPage = /** @class */ (function () {
    function ListgamesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListgamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listgames',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\listgames\listgames.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Consoles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 id="tittle">List of games</h1>\n\n  <br/>\n  <ion-list>\n      <ion-item id = \'colorList\'>\n        <ion-thumbnail item-start>\n          <img src="..//..//assets/imgs/teken.png">\n        </ion-thumbnail>\n        <h2 id="h2">Action</h2>\n        <p id="p">Tekken</p>\n      </ion-item>\n  \n      <ion-item id = \'colorList\'>\n        <ion-thumbnail item-start>\n          <img src="..//..//assets/imgs/assasins.png">\n        </ion-thumbnail>\n        <h2 id="h2">History</h2>\n        <p id="p">Assasins Creed</p>\n      </ion-item>\n  \n      <ion-item id = \'colorList\'>\n        <ion-thumbnail item-start>\n          <img src="..//..//assets/imgs/sims.png">\n        </ion-thumbnail>\n        <h2 id="h2">Simulation</h2>\n        <p id="p">Los sims 4</p>\n      </ion-item>\n  \n      <ion-item id = \'colorList\'>\n        <ion-thumbnail item-start>\n          <img src="..//..//assets/imgs/evil.png">\n        </ion-thumbnail>\n        <h2 id="h2">Terror</h2>\n        <p id="p">Resident Evil</p>\n      </ion-item>\n  \n      <ion-item id = \'colorList\'>\n        <ion-thumbnail item-start>\n          <img src="..//..//assets/imgs/call.png">\n        </ion-thumbnail>\n        <h2 id="h2">Shoters</h2>\n        <p id="p">Call of duty</p>\n      </ion-item>\n  \n      <ion-item id = \'colorList\'>\n        <ion-thumbnail item-start>\n          <img src="..//..//assets/imgs/street.png">\n        </ion-thumbnail>\n        <h2 id="h2">Fight</h2>\n        <p id="p">Street Fighter</p>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\listgames\listgames.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ListgamesPage);
    return ListgamesPage;
}());

//# sourceMappingURL=listgames.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud1_crud1__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud2_crud2__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudPage = /** @class */ (function () {
    function CrudPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CrudPage.prototype.gotoadd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crud1_crud1__["a" /* Crud1Page */]);
    };
    CrudPage.prototype.gotodelete = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crud2_crud2__["a" /* Crud2Page */]);
    };
    CrudPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crud',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\crud\crud.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 id="tittle">CRUD</h1>\n  <br/>\n  <img src="../../assets/imgs/casio.jpg" width="400" height="200"/>\n  <br/>\n  <br/>\n  <button ion-button full color="violeta"(click)="gotoadd()">Add</button>\n  <br/>\n  <br/>\n  <button ion-button full color="violeta"(click)="gotodelete()">Delete</button>\n  <br/>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\crud\crud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CrudPage);
    return CrudPage;
}());

//# sourceMappingURL=crud.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crud1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_consolesservices_consolesservices__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Crud1Page = /** @class */ (function () {
    function Crud1Page(navCtrl, fb, consolesservices) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.consolesservices = consolesservices;
        this.list = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            date: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            feature: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            games: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    Crud1Page.prototype.addConsoles = function () {
        var consol = {
            name: this.list.get('name').value,
            date: this.list.get('date').value,
            feature: this.list.get('feature').value,
            games: this.list.get('games').value
        };
        this.consolesservices.addConsoles(consol).subscribe(function (data) {
            //Aquí deberías mostrar una ventana modal que dijera que se ha guardado la información
            console.log(data);
        }, function (error) {
            //Aquí deberías mostrar una ventana modal que mostrara un error
            console.log(error);
        });
    };
    Crud1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crud1',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\crud1\crud1.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 id="tittle">ADD Console</h1>\n  <form [formGroup]="list" (ngSubmit)="addConsoles()" novalidate>\n      <ion-list> \n        <ion-item id = \'colorList\'>\n          <ion-label id="prueba" stacked>Name:</ion-label>\n          <ion-input formControlName="name" type="text" placeholder="name"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="list.get(\'name\').errors && list.get(\'name\').dirty">\n          <p color="danger" ion-text *ngIf="list.get(\'name\').hasError(\'required\')">Campo obligatorio</p>\n        </ion-item>\n        <ion-item id = \'colorList\'>\n          <ion-label id="prueba" stacked>Date:</ion-label>\n          <ion-input formControlName="date" type="text" placeholder="date"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="list.get(\'date\').errors && list.get(\'date\').dirty">\n          <p color="danger" ion-text *ngIf="list.get(\'date\').hasError(\'required\')">Campo obligatorio</p>\n        </ion-item>\n        <ion-item id = \'colorList\'>\n            <ion-label id="prueba" stacked>Feature:</ion-label>\n            <ion-input formControlName="feature" type="text" placeholder="feature"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="list.get(\'feature\').errors && list.get(\'feature\').dirty">\n            <p color="danger" ion-text *ngIf="list.get(\'feature\').hasError(\'required\')">Campo obligatorio</p>\n          </ion-item>\n          <ion-item id = \'colorList\'>\n            <ion-label id="prueba" stacked>Games:</ion-label>\n            <ion-input formControlName="games" type="text" placeholder="games"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="list.get(\'games\').errors && list.get(\'games\').dirty">\n            <p color="danger" ion-text *ngIf="list.get(\'games\').hasError(\'required\')">Campo obligatorio</p>\n          </ion-item>\n      </ion-list>\n      <div padding>\n        <button ion-button full type="submit" [disabled]="list.invalid">Add</button>\n      </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\crud1\crud1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_consolesservices_consolesservices__["a" /* ConsolesservicesProvider */]])
    ], Crud1Page);
    return Crud1Page;
}());

//# sourceMappingURL=crud1.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crud2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_consolesservices_consolesservices__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Crud2Page = /** @class */ (function () {
    function Crud2Page(navCtrl, consolesservices) {
        this.navCtrl = navCtrl;
        this.consolesservices = consolesservices;
    }
    Crud2Page.prototype.delete = function (id) {
        this.consolesservices.deleteConsole(id).subscribe(function (data) {
            //Aquí deberías mostrar una ventana modal que dijera que se ha guardado la información
            console.log(data);
        }, function (error) {
            //Aquí deberías mostrar una ventana modal que mostrara un error
            console.log(error);
        });
    };
    Crud2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.consolesservices.getConsoles().subscribe(function (data) {
            _this.consoles = data;
        });
        console.log('ionViewDidLoad ConsolesPage');
    };
    Crud2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crud2',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\crud2\crud2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 id="tittle">Delete Console</h1>\n  <ion-list>\n      <ion-item *ngFor="let console of consoles">\n        <p id="letra">{{console.name}}</p>\n        <p id="letra">{{console.date}}</p>\n        <p id="letra">{{console.feature}}</p>\n        <p id="letra">{{console.games}}</p> \n        <button (click)="delete(console.id)">Delete</button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\crud2\crud2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_consolesservices_consolesservices__["a" /* ConsolesservicesProvider */]])
    ], Crud2Page);
    return Crud2Page;
}());

//# sourceMappingURL=crud2.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreferencePage = /** @class */ (function () {
    function PreferencePage(alerCtrl) {
        this.alerCtrl = alerCtrl;
        this.gaming = "n64";
        this.gender = "f";
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
    }
    PreferencePage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    PreferencePage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Thanks for giving us your opinion',
            buttons: ['Ok']
        });
        alert.present();
    };
    PreferencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preference',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\preference\preference.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 id="tittle">Check your preferences</h1>\n  <ion-list>\n    <ion-item id="colorList">\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id="colorList">\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming" interface="popover">\n        <ion-option value="ps1">PlayStation1</ion-option>\n        <ion-option value="ps2">PlayStation2</ion-option>\n        <ion-option value="ps3">PlayStation3</ion-option>\n        <ion-option value="ps4">PlayStation4</ion-option>\n        <ion-option value="wii">Wii</ion-option>\n        <ion-option value="wiiu">WII U</ion-option>\n        <ion-option value="nin3ds">Nintendo 3DS</ion-option>\n        <ion-option value="ninswitch">Nintendo Switch</ion-option>\n        <ion-option value="xbox">Xbox</ion-option>\n        <ion-option value="xbox360">Xbox 360</ion-option>\n        <ion-option value="xboxone">Xbox One</ion-option>\n        <ion-option value="xboxonex">Xbox One X</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id="colorList">\n      <ion-label>Notifications</ion-label>\n      <ion-select [(ngModel)]="notifications" interface="action-sheet">\n        <ion-option value="enable">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year" (ionSelect)="notificationSelect($event)">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id="colorList">\n      <ion-label>Operating System</ion-label>\n      <ion-select [(ngModel)]="os" submitText="Okay" cancelText="Nah">\n        <ion-option value="win7">Windows 7</ion-option>\n        <ion-option value="win10">Windows 10</ion-option>\n        <ion-option value="lunix">Linux</ion-option>\n        <ion-option value="mac8">Mac OS 8</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id="colorList">\n      <ion-label>Music</ion-label>\n      <ion-select [(ngModel)]="music" [selectOptions]="musicAlertOpts">\n        <ion-option>Alice in Chains</ion-option>\n        <ion-option>Green Day</ion-option>\n        <ion-option>Nirvana</ion-option>\n        <ion-option>Pearl Jam</ion-option>\n        <ion-option>Smashing Pumpkins</ion-option>\n        <ion-option>Soundgarden</ion-option>\n        <ion-option (select)="stpSelect()">Stone Temple Pilots</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id="colorList">\n      <ion-label>Date</ion-label>\n      <ion-select [(ngModel)]="month">\n        <ion-option value="01">January</ion-option>\n        <ion-option value="02">February</ion-option>\n        <ion-option value="03">March</ion-option>\n        <ion-option value="04">April</ion-option>\n        <ion-option value="05">May</ion-option>\n        <ion-option value="06">June</ion-option>\n        <ion-option value="07">July</ion-option>\n        <ion-option value="08">August</ion-option>\n        <ion-option value="09">September</ion-option>\n        <ion-option value="10">October</ion-option>\n        <ion-option value="11">November</ion-option>\n        <ion-option value="12" checked="true">December</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="year">\n        <ion-option>1989</ion-option>\n        <ion-option>1990</ion-option>\n        <ion-option>1991</ion-option>\n        <ion-option>1992</ion-option>\n        <ion-option>1993</ion-option>\n        <ion-option checked="true">1994</ion-option>\n        <ion-option>1995</ion-option>\n        <ion-option>1996</ion-option>\n        <ion-option>1997</ion-option>\n        <ion-option>1998</ion-option>\n        <ion-option>1999</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <button ion-button block color="rosa" (click)="doAlert()">Send</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\preference\preference.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PreferencePage);
    return PreferencePage;
}());

//# sourceMappingURL=preference.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_listgames_listgames__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_consoles_consoles__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_crud_crud__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crud1_crud1__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_crud2_crud2__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_preference_preference__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_consolesservices_consolesservices__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(202);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_consoles_consoles__["a" /* ConsolesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_crud_crud__["a" /* CrudPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crud1_crud1__["a" /* Crud1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_crud2_crud2__["a" /* Crud2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_listgames_listgames__["a" /* ListgamesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_preference_preference__["a" /* PreferencePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_consoles_consoles__["a" /* ConsolesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_crud_crud__["a" /* CrudPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crud1_crud1__["a" /* Crud1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_crud2_crud2__["a" /* Crud2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_listgames_listgames__["a" /* ListgamesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_preference_preference__["a" /* PreferencePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_consolesservices_consolesservices__["a" /* ConsolesservicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_crud_crud__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_consoles_consoles__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_preference_preference__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Information of Consoles', component: __WEBPACK_IMPORTED_MODULE_6__pages_consoles_consoles__["a" /* ConsolesPage */] },
            { title: 'Check your preferences', component: __WEBPACK_IMPORTED_MODULE_7__pages_preference_preference__["a" /* PreferencePage */] },
            { title: 'Crud', component: __WEBPACK_IMPORTED_MODULE_5__pages_crud_crud__["a" /* CrudPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consoles_consoles__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListPage.prototype.gotoconsole = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__consoles_consoles__["a" /* ConsolesPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List Of Console</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n  <button ion-button color="danger" full (click)="gotoconsole()">Microsoft</button>\n    \n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Victoria\Desktop\Ionic\Console\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolesservicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(202);
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
  Generated class for the ConsolesservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConsolesservicesProvider = /** @class */ (function () {
    function ConsolesservicesProvider(http) {
        this.http = http;
        this.uri = "http://192.168.201.100:8080/console";
        console.log('Hello ConsolesservicesProvider Provider');
    }
    ConsolesservicesProvider.prototype.getConsoles = function () {
        return this.http.get(this.uri);
    };
    ConsolesservicesProvider.prototype.addConsoles = function (consol) {
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('name', consol.name);
        urlSearchParams.append('date', consol.date);
        urlSearchParams.append('feature', consol.feature);
        urlSearchParams.append('games', consol.games);
        var body = urlSearchParams.toString();
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        return this.http.post(this.uri, body, options);
    };
    ConsolesservicesProvider.prototype.deleteConsole = function (id) {
        return this.http.delete(this.uri + '/' + id);
    };
    ConsolesservicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConsolesservicesProvider);
    return ConsolesservicesProvider;
}());

//# sourceMappingURL=consolesservices.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map