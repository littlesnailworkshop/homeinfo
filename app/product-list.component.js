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
const product_service_1 = require('./product.service');
let ProductListComponent = class ProductListComponent {
    constructor(productService) {
        this.products = [
            {
                id: '0', price: '$650', name: 'iphone 7', discontinued: false
            },
            {
                id: '1', price: '$370', name: 'glaxy', discontinued: true
            },
            {
                id: '2', price: '$0', name: 'blackberry', discontinued: true
            }
        ];
        this.productList = productService.get();
    }
    ngOnInit() {
        if (this.productService != null) {
            this.productService.getHttpPromise().then((p) => {
                let product;
                product.id = '100';
                product.name = p.error_message;
                this.productList.push(p);
            });
        }
    }
};
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        template: `
 <ul *ngFor="let p of products" [hidden]="p.discontinued==false">
    <span *ngIf="p.discontinued==false">{{p.id}} {{p.name}} {{p.price}}</span>
    </ul>

    Get From service
    <ul *ngFor="let p of productList" [hidden]="p.discontinued==false">
    {{p.id}} {{p.name}} {{p.price}}
    </ul>


   Test Route
    <ul *ngFor="let p of productList" >
    <a routerLink="products/edit/{{p.id}}">{{p.name}} </a>
    </ul>

   <router-outlet></router-outlet>

`,
        providers: [product_service_1.ProductService] //service instance create on each list, cache on each component 
    }), 
    __metadata('design:paramtypes', [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map