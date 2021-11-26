import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  responsiveOptions: any;
  images = [  
    { img: "https://apurva09.s3.ap-south-1.amazonaws.com/png/1.jpg" },  
    { img: "https://apurva09.s3.ap-south-1.amazonaws.com/png/2.jpg" } 
  ];

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
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
