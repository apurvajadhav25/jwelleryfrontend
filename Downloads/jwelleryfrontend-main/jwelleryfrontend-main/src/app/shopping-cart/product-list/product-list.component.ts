import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  productList: Product[] = []
  images: any[]=[]
  constructor(private productService: ProductService) { }
 
  ngOnInit(): void {
    this.productService.getImages().then(images => this.images = images);
   //this.productList = this.productService.getProducts()
  this.productService.getProducts().subscribe((products)=>{
     this.productList = products;
   }

   )
   
  }

} 
