import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {

  images: any[]=[];
  responsiveOptions:any[] = [
      {
          breakpoint: '560px',
          numVisible: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //this.productService.getImages().then(images => this.images = images);
  }

}
