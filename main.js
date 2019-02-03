(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _manfacturer_manfacturer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manfacturer/manfacturer.component */ "./src/app/manfacturer/manfacturer.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _viewinventory_viewinventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewinventory/viewinventory.component */ "./src/app/viewinventory/viewinventory.component.ts");



var routes = [
    { path: '', redirectTo: '/manufacturer', pathMatch: 'full' },
    { path: 'manufacturer', component: _manfacturer_manfacturer_component__WEBPACK_IMPORTED_MODULE_0__["ManfacturerComponent"] },
    { path: 'models', component: _models_models_component__WEBPACK_IMPORTED_MODULE_1__["ModelsComponent"] },
    { path: 'viewinventory', component: _viewinventory_viewinventory_component__WEBPACK_IMPORTED_MODULE_2__["ViewInventoryComponent"] },
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a black background color to the top navigation */\r\n.topnav {\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n/* Style the links inside the navigation bar */\r\n.topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n/* Change the color of links on hover */\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n/* Add a color to the active/current link */\r\n.topnav a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZEO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUVBLDhDQUE4QztBQUM5QztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUVBLHVDQUF1QztBQUN2QztJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7QUFFQSwyQ0FBMkM7QUFDM0M7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG4udG9wbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXHJcbiAgLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<!DOCTYPE html>\n<html>\n  \n    <div class=\"topnav\" id=\"myTopnav\">\n          \n  <a [routerLink]=\"['/manufacturer']\" class=\"active\"> Manufacturer</a>  <div class=\"col-md-1\"></div>\n  <a [routerLink]=\"['/models']\"> Models</a>  <div class=\"col-md-1\"></div>\n  <a [routerLink]=\"['/viewinventory']\"> View Inventory</a>\n</div>\n   \n\n  <router-outlet></router-outlet>\n  \n</html>\n\n\n"

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
        this.title = 'carinventory';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _manfacturer_manfacturer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manfacturer/manfacturer.component */ "./src/app/manfacturer/manfacturer.component.ts");
/* harmony import */ var _viewinventory_viewinventory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewinventory/viewinventory.component */ "./src/app/viewinventory/viewinventory.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _services_manufacture_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/manufacture.service */ "./src/app/services/manufacture.service.ts");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/model.service */ "./src/app/services/model.service.ts");
/* harmony import */ var _services_viewinventory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/viewinventory.service */ "./src/app/services/viewinventory.service.ts");



//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _manfacturer_manfacturer_component__WEBPACK_IMPORTED_MODULE_8__["ManfacturerComponent"],
                _viewinventory_viewinventory_component__WEBPACK_IMPORTED_MODULE_9__["ViewInventoryComponent"],
                _models_models_component__WEBPACK_IMPORTED_MODULE_10__["ModelsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_services_manufacture_service__WEBPACK_IMPORTED_MODULE_11__["ManufactureService"], _services_model_service__WEBPACK_IMPORTED_MODULE_12__["ModelService"], _services_viewinventory_service__WEBPACK_IMPORTED_MODULE_13__["viewInventoryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/manfacturer/manfacturer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/manfacturer/manfacturer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmZhY3R1cmVyL21hbmZhY3R1cmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/manfacturer/manfacturer.component.html":
/*!********************************************************!*\
  !*** ./src/app/manfacturer/manfacturer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n   \n  <div class=\"container\">\n    <div class=\"col-md-5\">\n      <div class=\"form-area\"> \n        <form role=\"form\">\n          <br style=\"clear:both\"> &nbsp;  &nbsp;  &nbsp;  &nbsp;\n          <h3 style=\"margin-bottom: 25px; text-align: center;\">Add Manufacturers</h3>\n          <div class=\"col-md-6\"></div>\n          \n          <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"name\" required>\n          </div>\n         \n          <button type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-center\" (click)=\"save()\">Save Manfacturer</button>\n        </form>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"col-md-12\">\n      <h1> List</h1>\n        <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">S.No</th>\n          <th class=\"text-center\">Manfacturer Name</th>\n          \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let g of getmanfucture, let i= index\">\n          <td>{{ i+1 }}</td>\n          <td>{{ g.ManufactureName }}</td>\n          \n         \n        </tr>\n      </tbody>\n    </table>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/manfacturer/manfacturer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/manfacturer/manfacturer.component.ts ***!
  \******************************************************/
/*! exports provided: ManfacturerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfacturerComponent", function() { return ManfacturerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_manufacture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/manufacture.service */ "./src/app/services/manufacture.service.ts");




var ManfacturerComponent = /** @class */ (function () {
    function ManfacturerComponent(router, manfacturer) {
        this.router = router;
        this.manfacturer = manfacturer;
        this.uid = '';
        this.emergency = [];
        this.editedManfacture = {};
    }
    ManfacturerComponent.prototype.ngOnInit = function () {
        this.getManfacturer();
    };
    ManfacturerComponent.prototype.getManfacturer = function () {
        var _this = this;
        this.manfacturer.getManfacturer().subscribe(function (res) {
            _this.getmanfucture = res;
            console.log(_this.getmanfucture);
        });
    };
    ManfacturerComponent.prototype.refreshList = function () {
        this.getManfacturer();
    };
    ManfacturerComponent.prototype.save = function () {
        var _this = this;
        debugger;
        this.manfacturer.addManfacturer(this.name).subscribe(function (res) {
            _this.emergency = res;
            window.alert('Added Succefully....');
            _this.refreshList();
        }, function (err) {
            _this.error = err;
            window.alert('Invalida data');
        });
    };
    ManfacturerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manfacturer',
            template: __webpack_require__(/*! ./manfacturer.component.html */ "./src/app/manfacturer/manfacturer.component.html"),
            styles: [__webpack_require__(/*! ./manfacturer.component.css */ "./src/app/manfacturer/manfacturer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_manufacture_service__WEBPACK_IMPORTED_MODULE_3__["ManufactureService"]])
    ], ManfacturerComponent);
    return ManfacturerComponent;
}());



/***/ }),

/***/ "./src/app/models/models.component.css":
/*!*********************************************!*\
  !*** ./src/app/models/models.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVscy9tb2RlbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/models/models.component.html":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n        \n  <div class=\"container\">\n      <div class=\"col-md-6\">\n          <div class=\"form-area\"> \n              <form role=\"form\"  ng-controller=\"DemoController\" name=\"myForm\" novalidate>\n                      <br style=\"clear:both\">\n                      <h3 style=\"margin-bottom: 25px; text-align: center;\">Add Models</h3>\n                      <div class=\"form-group\">\n                       <label for=\"exampleInputEmail1\">Manfacturers</label>\n                       <select id=\"account_id\" #account_id=\"ngModel\" class=\"hideLabel form-control\" [(ngModel)]=\"mid\" name=\"mid\" (change)=\"selectName()\" >  \n                       <option selected=\"\" value=\"\"></option>  \n                        <option [ngValue]=\"m.MafID\" *ngFor=\"let m of getManuList\">  \n                                    {{m.ManufactureName}}  \n                         </option>  \n                       </select> \n                      </div>\n                      <label for=\"exampleInputEmail1\">Model Name</label>\n                      <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control\" id=\"modelname\" name=\"modelname\" placeholder=\"Name\" [(ngModel)]=\"modelname\" required>\n                      </div>\n                      <label for=\"exampleInputEmail1\">Model Color</label>\n                      <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control\" id=\"color\" name=\"color\" placeholder=\"Color\" [(ngModel)]=\"color\" required>\n                      </div>\n                      <label for=\"exampleInputEmail1\">Model Year</label>\n                      <div class=\"form-group\">\n                              <input type=\"date\" class=\"form-control\" id=\"year\" name=\"year\" placeholder=\"Manufacturing Year\" [(ngModel)]=\"year\" required>\n                      </div>\n                      <label for=\"exampleInputEmail1\">Registration Number</label>\n                      <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control\" id=\"regno\" name=\"registration number\" placeholder=\"Registration Number\" [(ngModel)]=\"registrationno\" required>\n                      </div>\n                      <label for=\"exampleInputEmail1\">Info About Model</label>\n                      <div class=\"form-group\">\n                              <input type=\"text\"  style=\"height:200px\"class=\"form-control\" id=\"Description\" name=\"name\" placeholder=\"Description\" [(ngModel)]=\"description\" required>\n                      </div>\n                      <div class=\"form-group\"> \n                              <label for=\"time\" class=\"col-sm-3 control-label\">Picture </label>\n                                <div class=\"col-sm-9\">\n                              <input type=\"file\"  name=\"fileToUpload\" id=\"fileToUpload\" required />\n                            </div>\n                              </div>\n\n                              \n                          \n                      <button type=\"button\"  class=\"btn btn-primary pull-center\" (click)=\"saveModel()\">Save Details</button>\n                    </form>\n              </div>\n         </div>\n   </div>\n</div>\n      \n      \n      \n      "

/***/ }),

/***/ "./src/app/models/models.component.ts":
/*!********************************************!*\
  !*** ./src/app/models/models.component.ts ***!
  \********************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/model.service */ "./src/app/services/model.service.ts");




var ModelsComponent = /** @class */ (function () {
    function ModelsComponent(router, model, activatedRoute, elem) {
        this.router = router;
        this.model = model;
        this.activatedRoute = activatedRoute;
        this.elem = elem;
        this.errorMessage = "";
        this.error = false;
        this.successMessage = "";
        this.success = false;
    }
    ModelsComponent.prototype.ngOnInit = function () {
        this.getManufactureList();
        this.getmodels();
    };
    ModelsComponent.prototype.getManufactureList = function () {
        var _this = this;
        this.model.getManfacturer().subscribe(function (res) {
            _this.getManuList = res;
            console.log(_this.getManuList);
            //alert(this.getManuList);
        });
    };
    ModelsComponent.prototype.selectName = function () {
        alert(this.mid);
    };
    ModelsComponent.prototype.saveModel = function () {
        var _this = this;
        var files = this.elem.nativeElement.querySelector('#fileToUpload').files;
        debugger;
        var formdata = new FormData();
        var file = files[0];
        var filename = file.name;
        // let filename= this.getfilename(this.uid);
        debugger;
        formdata.append('fileToUpload', file, filename);
        this.model.uploadImage(formdata).subscribe(function (res) { return _this.modelSave(res); });
    };
    ModelsComponent.prototype.getmodels = function () {
        var _this = this;
        this.manfacture.getDetails(this.mid).subscribe(function (data) {
            _this.details = data;
            alert(data);
        });
    };
    ModelsComponent.prototype.modelSave = function (data) {
        var _this = this;
        //let filename =this.files.filename;
        //this.model = data;
        var photo = data.filename;
        debugger;
        this.model.modelUpdate(this.mid, this.modelname, this.color, this.registrationno, this.year, this.description, photo).subscribe(function (success) {
            _this.success = !_this.success;
            _this.error = false;
            _this.successMessage = "model Updated";
            alert(_this.successMessage);
        }, function (error) {
            _this.error = !_this.error;
            _this.errorMessage = "Unexpected Error Occured";
        });
    };
    ModelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-models',
            template: __webpack_require__(/*! ./models.component.html */ "./src/app/models/models.component.html"),
            styles: [__webpack_require__(/*! ./models.component.css */ "./src/app/models/models.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/services/manufacture.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/manufacture.service.ts ***!
  \*************************************************/
/*! exports provided: ManufactureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufactureService", function() { return ManufactureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ManufactureService = /** @class */ (function () {
    function ManufactureService(http) {
        //this.uid= this.loginservice.getIndex();
        this.http = http;
        this._producturl = 'app/products.json';
        this.baseUrl = 'http://localhost.com/';
        this.emergency = [];
    }
    ManufactureService.prototype.addManfacturer = function (name) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        var body = JSON.stringify({ name: name });
        debugger;
        return this.http.post('http://localhost:8081/carinventory/add_manfacturer.php', body);
    };
    ManufactureService.prototype.getManfacturer = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        //let body = JSON.stringify({name:name});
        debugger;
        return this.http.get('http://localhost:8081/carinventory/get_manfacture.php');
    };
    ManufactureService.prototype.deleteManfacturer = function (uid, q) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        var body = JSON.stringify({ lid: uid, q: q });
        debugger;
        return this.http.post('http://localhost:8081/carinventory/delete_manfacture.php', body);
    };
    ManufactureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManufactureService);
    return ManufactureService;
}());



/***/ }),

/***/ "./src/app/services/model.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/model.service.ts ***!
  \*******************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ModelService = /** @class */ (function () {
    function ModelService(http) {
        //this.uid= this.loginservice.getIndex();
        this.http = http;
        this._producturl = 'app/products.json';
        this.baseUrl = 'http://localhost.com/';
        this.emergency = [];
    }
    ModelService.prototype.AddModel = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        var body = JSON.stringify({});
        debugger;
        return this.http.post('http://localhost:8081/carinventory/add_model.php', body);
    };
    ModelService.prototype.getManfacturer = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        //let body = JSON.stringify({name:name});
        debugger;
        return this.http.get('http://localhost:8081/carinventory/get_manfacture.php');
    };
    ModelService.prototype.uploadImage = function (formdata) {
        var headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        //let options = new RequestOptions({ headers: this.headers });
        debugger;
        return this.http.post('http://localhost:8081/carinventory/uploadfile.php', formdata);
    };
    ModelService.prototype.modelUpdate = function (modelno, modelname, color, registrationno, year, description, photo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        debugger;
        //let options = new RequestOptions({ header: headers });
        var body = JSON.stringify({ modelno: modelno, modelname: modelname, color: color, registrationno: registrationno,
            year: year, description: description, photo: photo });
        return this.http.post('http://localhost:8081/carinventory/add_model.php', body);
    };
    ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/services/viewinventory.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/viewinventory.service.ts ***!
  \***************************************************/
/*! exports provided: viewInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewInventoryService", function() { return viewInventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var viewInventoryService = /** @class */ (function () {
    function viewInventoryService(http) {
        //this.uid= this.loginservice.getIndex();
        this.http = http;
        this._producturl = 'app/products.json';
        this.baseUrl = 'http://localhost.com/';
        this.emergency = [];
    }
    viewInventoryService.prototype.viewInventory = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        //let body = JSON.stringify({name:name});
        debugger;
        return this.http.get('http://localhost:8081/carinventory/view_inventory.php');
    };
    viewInventoryService.prototype.deleteModels = function (mid, q) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form=urlencoded');
        var body = JSON.stringify({ mid: mid, q: q });
        debugger;
        return this.http.post('http://localhost:8081/carinventory/delete_models.php', body);
    };
    viewInventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], viewInventoryService);
    return viewInventoryService;
}());



/***/ }),

/***/ "./src/app/viewinventory/viewinventory.component.css":
/*!***********************************************************!*\
  !*** ./src/app/viewinventory/viewinventory.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdpbnZlbnRvcnkvdmlld2ludmVudG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/viewinventory/viewinventory.component.html":
/*!************************************************************!*\
  !*** ./src/app/viewinventory/viewinventory.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <h3 align=\"center\" background-color=\"blue\">LIST OF MODELS</h3> &nbsp;\n      <table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">S.No</th>\n        <th class=\"text-center\">Manfacture Name</th>\n        <th class=\"text-center\">Model Name</th>\n        <th class=\"text-center\">Color</th>\n        <th class=\"text-center\">Year Of Manfacture</th>\n        <th class=\"text-center\">Registration No</th>\n        <th class=\"text-center\"> Info About Model</th>\n        <th class=\"text-center\"> Options</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let l of list, let i= index\">\n        <td>{{ i+1 }}</td>  \n        <td>{{ l.ManufactureName }}</td>\n        <td>{{ l.Modelname }}</td>\n        <td>{{ l.Color }}</td>\n        <td>{{ l.Year}}</td>\n        <td>{{ l.RegistrationNo }}</td>\n        <td>{{ l.Descripton}}</td>\n        <td>\n          <button class=\"btn btn-danger\"\n                        (click)=\"sellModel()\"> Sell\n                       <i class=\"fa fa-delete\"></i>\n              </button>\n              <a href=\"\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modal-delay\"(click)=\"showEditProductForm(item)\" >View Images </a>\n          \n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"modal fade\" id=\"modaluloadpic\">\n      <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n      <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span></button>\n      <h4 class=\"modal-title\">View</h4>\n      </div>\n      <form action=\"\" method=\"POST\">\n      <div class=\"modal-body\" *ngFor=\"let doc of appDoc\">\n      <img [src] =\"doc.displayfile\" alt =\"Doc\" width=\"100%\" height=\"auto\"/>\n      </div>\n      \n      </form>\n      </div>\n      </div>\n      </div> \n\n  \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/viewinventory/viewinventory.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/viewinventory/viewinventory.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInventoryComponent", function() { return ViewInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_viewinventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/viewinventory.service */ "./src/app/services/viewinventory.service.ts");




var ViewInventoryComponent = /** @class */ (function () {
    function ViewInventoryComponent(router, manfacturer) {
        this.router = router;
        this.manfacturer = manfacturer;
        this.mid = '';
        this.emergency = [];
        this.editedManfacture = {};
    }
    ViewInventoryComponent.prototype.ngOnInit = function () {
        this.viewInventoryList();
    };
    ViewInventoryComponent.prototype.viewInventoryList = function () {
        var _this = this;
        this.manfacturer.viewInventory().subscribe(function (res) {
            _this.list = res;
            console.log(_this.list);
        });
    };
    ViewInventoryComponent.prototype.refreshList = function () {
    };
    ViewInventoryComponent.prototype.sellModel = function () {
        var _this = this;
        var q = 1;
        this.manfacturer.deleteModels(this.mid, q).subscribe(function (res) {
            _this.deleteRes = res;
            alert(res);
            _this.refreshList();
        });
    };
    ViewInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewinventory',
            template: __webpack_require__(/*! ./viewinventory.component.html */ "./src/app/viewinventory/viewinventory.component.html"),
            styles: [__webpack_require__(/*! ./viewinventory.component.css */ "./src/app/viewinventory/viewinventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_viewinventory_service__WEBPACK_IMPORTED_MODULE_3__["viewInventoryService"]])
    ], ViewInventoryComponent);
    return ViewInventoryComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\carinventory\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map