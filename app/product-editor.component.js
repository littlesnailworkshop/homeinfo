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
const core_1 = require("@angular/core");
const product_1 = require('./product');
const product_service_1 = require('./product.service');
const router_1 = require('@angular/router');
let ProductEditorComponent = class ProductEditorComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        //@Output('AliasOfOutputFunction Name')
        //  @Output('save') productChanged=new EventEmitter<Product>();
        this.productChanged = new core_1.EventEmitter();
    }
    onClick(e) {
        console.log('in child onclick');
        this.productChanged.emit(this.product);
    }
    ngOnInit() {
        this.route.params.forEach((p) => {
            let id = p['id'];
            // this.productService.getProductById(id).then(Product=>this.product=product);
        });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', product_1.Product)
], ProductEditorComponent.prototype, "product", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], ProductEditorComponent.prototype, "productChanged", void 0);
ProductEditorComponent = __decorate([
    core_1.Component({
        selector: 'product-editor',
        template: `
    <div *ngIf="product"> 
        <input [(ngModel)]='product.id'/>
        <input [(ngModel)]='product.name'/>
        <input [value]="product.price" (input)="product.price=$event.target.value"/>
        <input type="button" value="Child Product Change" (click)="onClick($event)"
        (input)="product.price=$event.target.value"/>
    </div>
    `,
        //if you use route, if product has not been loaded yet, it will throw error, that is why to add ngIf
        //  encapsulation:ViewEncapsulation.Native, //global setting, don't use in IE
        styles: [`h4{color:#9c24b0;}`]
    }), 
    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute])
], ProductEditorComponent);
exports.ProductEditorComponent = ProductEditorComponent;
//# sourceMappingURL=product-editor.component.js.map