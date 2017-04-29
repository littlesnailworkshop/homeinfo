import { Component, Optional, Host, OnInit } from '@angular/core'

import { Product } from './product'
import { ProductService } from './product.service'


@Component({
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
providers:[ProductService] //service instance create on each list, cache on each component 
//router-outlet is like ng-view, it is required
})
export class ProductListComponent implements OnInit {
    products: Product[] = [
        {
            id: '0', price: '$650', name: 'iphone 7', discontinued: false

        },
        {
            id: '1', price: '$370', name: 'glaxy', discontinued: true

        }
        ,
        {
            id: '2', price: '$0', name: 'blackberry', discontinued: true

        }
    ]

    productList: Product[];
    productService: ProductService;
    constructor(productService: ProductService) {
        this.productList = productService.get();
 

    }

    ngOnInit() {

         if (this.productService != null) {
          this.productService.getHttpPromise().then((p: any) => {
                let product: Product;
                product.id = '100';
                product.name = p.error_message;
              
                this.productList.push(p);
            });


        }
    }

    //if you add @optional(), it will not throw error when not defined
    /*
      constructor(@Optional() productService: ProductService) {
            this.productList = productService.get();
        }
    */
    //if you add host, it will check only the toppest level to find provider
    /* constructor(@Host() productService: ProductService) {
            this.productList = productService.get();
        }
    */
}
