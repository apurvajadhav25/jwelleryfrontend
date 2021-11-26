import { Component, Input, OnInit } from '@angular/core';

import { HomeComponent } from 'src/app/home/home.component';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { FilterComponent } from '../../filter/filter.component';
import { ShoppingCartComponent } from '../../shopping-cart.component';
import { DialogService } from 'primeng/dynamicdialog'
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';
import { GalleriaComponent } from 'src/app/galleria/galleria.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  products:Product[]=[]; 
  images: any[]=[];
  constructor(
    private msg: MessengerService,
    private productService: ProductService,
    private dialogService: DialogService,
  
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
    this.productService.getImages().then(images => this.images = images);
   
this.productService.getProducts();
 this.productService.getProducts().subscribe((products)=>{
  this.products=products;
}

)

}
  handleAddToCart(){
   this.msg.sendMsg(this.productItem)
 }

 show() {
   let id=this.productItem.id
   console.log(id)
  const ref = this.dialogService.open(ProductDetailComponent, {
      data: {
          id:id,
          name:this.productItem.name,
          description:this.productItem.description,
          price:this.productItem.price
      },
      header: 'Product Details',
      width: '50%',
      height: '50%',
      
  });
}

change(){
  const ref1= this.dialogService.open(GalleriaComponent,{
    width: '50%'

});
  
}
 }
