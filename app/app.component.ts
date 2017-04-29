import { Component } from '@angular/core';
import { Product } from './product'


@Component({
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
})

/*<input [(ngModel)]]='product.id'/> Two way binding
<input [value]='product.name' (input)="product.price=$event.target.value"/> One way binding

*/
export class AppComponent {
  name = 'Angular';
  now:string;
  product: Product = {
    id: '0', price: '$650', name: 'iphone 7', discontinued: false

  }

  products: Product[] = [
    {
      id: '0', price: '$650', name: 'iphone 7', discontinued: false

    },
    {
      id: '1', price: '$370', name: 'glaxy', discontinued: false

    }
    ,
    {
      id: '2', price: '$0', name: 'blackberry', discontinued: true

    }
  ]

  childProductChange(e:any) {
        console.log(e);
    console.log('child product change');
  }

  constructor(){
    
    setInterval(()=>
    this.now=new Date().toLocaleTimeString(),1000);
  }

}
