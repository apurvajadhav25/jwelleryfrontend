import { Component, Input, OnInit } from '@angular/core';

import { HomeComponent } from 'src/app/home/home.component';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { FilterComponent } from '../../filter/filter.component';
import { ShoppingCartComponent } from '../../shopping-cart.component';
import { DialogService } from 'primeng/dynamicdialog';
import { GalleriaComponent } from 'src/app/galleria/galleria.component';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  addedToWishlist: boolean= false
  products:Product[]=[]; 
  filter: any[]=[];
  constructor(
    private msg: MessengerService,
    private productService: ProductService,
    private dialogService: DialogService,
    private sharedService: SharedService
    ) {
     }

     responsiveOptions:any[] = [
    /*  {
          breakpoint: '560px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }*/
  ];
  

  ngOnInit(): void {
    
    //this.productService.getImages().then(images => this.images = images);
   // this.productService.getImages()
   
//this.productService.getFilter1();


}
  handleAddToCart(){
   this.msg.sendMsg(this.productItem)
 }

 addtocart(item: any){
  this.msg.sendMsg(this.productItem)
  this.sharedService.addtoCart(item);
}


handleAddToWishlist() {
  this.addedToWishlist = true;
}

handleRemoveFromWishlist() {
  this.addedToWishlist = false;
}


 }
