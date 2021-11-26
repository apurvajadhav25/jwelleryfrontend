import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/product.json';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

	responsiveOptions: any;
  products: any = (data as any).default;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '680px',
          numVisible: 2,
          numScroll: 2
      }
    ];
   }

  ngOnInit(): void {
  }

}
