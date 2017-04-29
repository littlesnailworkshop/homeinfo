import { Injectable } from '@angular/core'
import { Product } from './product'
import { Http, Response ,Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise' //operator
import {Observable} from 'rxjs/Observable'

@Injectable()//by default all @component and angular modules are Injectable
export class ProductService {
    constructor(private http: Http) {
        console.log('product service fund');
    }
    get(): Product[] {
       console.log('get product from promise');
        return [{
            id: '0', price: '$650', name: 'iphone 7', discontinued: true

        },
        {
            id: '1', price: '$370', name: 'glaxy', discontinued: true

        }
            ,
        {
            id: '2', price: '$0', name: 'blackberry', discontinued: true

        }
        ]
    }

    getHttpPromise(): any {
console.log('get product from http');
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise').toPromise().
            then(response => { return response.json(); }).catch(this.handleError);

    }

    getHttpObserve()
    {
        
    }

    private handleError(error: any) {
        console.log('http promise error');
        return Promise.reject("An Error Occurred");
    }


 getProductById(id:string)
 {
      let product:Product;
      product.id=id;
      product.name="Get Product By Id";
      product.price='$000';
      product.discontinued=false;
      return product;
 }

 put (product:Product)
    {
       /* let headers=new Headers({'Content-Type': 'application/json'});
        let options =new RequestOptions({headers:headers});
        this.http.put(''),JSON.stringify(product)
        {


        }*/
        /*{headers:{
            Content-Type:'application/json';

        }}*/
    }
}

