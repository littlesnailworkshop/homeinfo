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
let AppComponent = class AppComponent {
    constructor() {
        this.name = 'Angular';
        this.product = {
            id: '0', price: '$650', name: 'iphone 7', discontinued: false
        };
        this.products = [
            {
                id: '0', price: '$650', name: 'iphone 7', discontinued: false
            },
            {
                id: '1', price: '$370', name: 'glaxy', discontinued: false
            },
            {
                id: '2', price: '$0', name: 'blackberry', discontinued: true
            }
        ];
        setInterval(() => this.now = new Date().toLocaleTimeString(), 1000);
    }
    childProductChange(e) {
        console.log(e);
        console.log('child product change');
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `Hello World {{name}} <greeting></greeting>
  {{product.id}}
  {{product.name}}
  {{product.price}}
  <br/>
   <span [innerHtml]="product.id"></span>

 <br/>
 <ul>
    <li *ngFor="let p of products" [hidden]="p.discontinued==false">
    <span *ngIf="p.discontinued==false">{{p.id}} {{p.name}} {{p.price}}</span>
    </li>
 </ul>

<input type="button" value="Submit" (click)="onClick()"/>
<product-editor [product]="product" (productChanged)="childProductChange($event)"></product-editor>

<product-list></product-list>
<span [ngSwitch]="product.id">
<li *ngSwitchCase="0">Apple</li>
<li *ngSwitchCase="1">Banana</li>

</span>

{{now}}


  `,
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map