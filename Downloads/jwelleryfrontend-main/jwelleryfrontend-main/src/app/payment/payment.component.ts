import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  pay(){
    
    this.productService.payment('65','87','45').subscribe(()=>{
      console.log("jkh")

    }
    )

  }

}
