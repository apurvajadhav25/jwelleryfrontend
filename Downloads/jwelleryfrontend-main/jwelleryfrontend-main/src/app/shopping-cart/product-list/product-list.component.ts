import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { MessengerService } from 'src/app/services/messenger.service';
import { RadioButtonModule } from 'primeng/radiobutton';
  

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  clickEventSubscription: Subscription | undefined;
  sortedValues: string[]=[];
  productList: Product[] = [];
  sort: string='';
  images: any[]=[]
  constructor(private productService: ProductService,
              private msg: MessengerService) {
                this.clickEventSubscription= this.msg.getMsgEvent().subscribe((s)=>{
                this.sort=s
                })

                this.clickEventSubscription= this.msg.getMsgEvent().subscribe(({filter1,filter2,price})=>{
                  this.getProducts(filter1,filter2,price,this.sort);
                })
               }
 
  ngOnInit(): void {
    this.getProducts('','','','');

  }

  getProducts(filter1: string,filter2: string,price: string,sort: string){
    this.productService.getProducts(filter1,filter2,price,sort).subscribe((products)=>{
      this.productList = products;
    }
    )
  }

  getSortedProductsAsc($event: any){
    this.msg.sendMsgSort("low")
   
    if(this.sortedValues.length>0){
    this.productService.getSortedProducts().subscribe((products)=>{
      this.productList=products
       })
  }else{
    this.getProducts('','','','')
  } 
}

getSortedProductsDesc($event: any){
  this.msg.sendMsgSort("high")
  if(this.sortedValues.length>0){
  this.productService.getSortedProductsByDesc().subscribe((products)=>{
    this.productList=products
  })
}else{
  this.getProducts('','','','')
} 
}

} 
