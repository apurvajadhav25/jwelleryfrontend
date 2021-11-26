import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { Product } from '../models/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  products:Product[]=[]

  constructor(private productService: ProductService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  
  ngOnInit(): void {
  //  const id1 = this.config.data
   this.productService.getById(this.config.data.id).subscribe((products)=>{
    this.products = products;
    console.log(products)
  }

  )
  
  }

}


