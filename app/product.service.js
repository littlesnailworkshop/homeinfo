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
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise'); //operator
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        console.log('product service fund');
    }
    get() {
        console.log('get product from promise');
        return [{
                id: '0', price: '$650', name: 'iphone 7', discontinued: true
            },
            {
                id: '1', price: '$370', name: 'glaxy', discontinued: true
            },
            {
                id: '2', price: '$0', name: 'blackberry', discontinued: true
            }
        ];
    }
    getHttpPromise() {
        console.log('get product from http');
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise').toPromise().
            then(response => { return response.json(); }).catch(this.handleError);
    }
    getHttpObserve() {
    }
    handleError(error) {
        console.log('http promise error');
        return Promise.reject("An Error Occurred");
    }
    getProductById(id) {
        let product;
        product.id = id;
        product.name = "Get Product By Id";
        product.price = '$000';
        product.discontinued = false;
        return product;
    }
    put(product) {
        /* let headers=new Headers({'Content-Type': 'application/json'});
         let options =new RequestOptions({headers:headers});
         this.http.put(''),JSON.stringify(product)
         {
 
 
         }*/
        /*{headers:{
            Content-Type:'application/json';

        }}*/
    }
};
ProductService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map