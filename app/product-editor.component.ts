import {Component, Input,Output, EventEmitter,OnInit} from "@angular/core"
import { Product } from './product'
import {ProductService} from'./product.service'
import {Router, Params, ActivatedRoute} from '@angular/router'

@Component
({
    selector:'product-editor',
    template:`
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
    styles:[`h4{color:#9c24b0;}`]
})
export class ProductEditorComponent implements OnInit
{
    //@Input('productNew')//parameter here can be alias of input parameter name
    
    @Input()
    product:Product
//@Output('AliasOfOutputFunction Name')
//  @Output('save') productChanged=new EventEmitter<Product>();
    @Output() productChanged=new EventEmitter<Product>();

    onClick(e:any)
    {
        console.log('in child onclick');
    
        this.productChanged.emit(this.product);
    }

    constructor(private productService:ProductService, private route:ActivatedRoute)
    {

    }

    ngOnInit(){
        this.route.params.forEach((p:Params)=>{
            let id=p['id'];
           // this.productService.getProductById(id).then(Product=>this.product=product);
        })
    }

}