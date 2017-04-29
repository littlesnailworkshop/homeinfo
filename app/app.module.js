"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms'); //ng-model is here
const app_component_1 = require('./app.component');
const greeting_component_1 = require('./greeting.component');
const product_list_component_1 = require('./product-list.component');
const product_service_1 = require('./product.service');
const product_editor_component_1 = require('./product-editor.component');
const http_1 = require('@angular/http');
const app_routes_1 = require('./app.routes');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing],
        declarations: [app_component_1.AppComponent, greeting_component_1.GreetingComponent, product_list_component_1.ProductListComponent, product_editor_component_1.ProductEditorComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_service_1.ProductService] //singleton cache on the top
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map