import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart-final',
  templateUrl: './cart-final.component.html',
  styleUrls: ['./cart-final.component.css']
})
export class CartFinalComponent implements OnInit {

  products : any = [];
  cartItems: any = [
    //{ id: 1, productId: 1, productName: 'Testv1', qty: 4, price: 100},
   // { id: 2, productId: 2,  productName: 'Test 2', qty: 3, price: 200},
   ];
  cartTotal = 0
  discountTotal=0
  grandTotal !: any;
  constructor(private msg: MessengerService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
  //   this.msg.getMsg().subscribe((product:any )  => {
  //     console.log(product)
  //   //this.loadCartItems();
  //  this.addProductToCart(product)
  // })

  this.sharedService.getProducts()
    .subscribe(res=>{
      this.cartItems = res;
      //this.grandTotal = this.sharedService.getTotalPrice();
      this.cartTotal = 0
 this.cartItems.forEach((item: {  qty: number;price: number; }) => {
   this.cartTotal +=  (item.qty * item.price)
 })

 this.cartItems.forEach((item: {  discount: number; }) => {
   console.log(item.discount)
  this.discountTotal += item.discount
})
    })
 
  }

  // addProductToCart(product: Product){
  
  //   let productExists = false
   
  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       this.cartItems[i].qty++
  //       productExists = true
  //       break;
  //     }
  //   }
   
  //   if (!productExists) {
  //     this.cartItems.push(
  //       {
  //     productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price
  //     }
  //     )
  //   }
    
   
  //   this.cartTotal = 0
  //   this.cartItems.forEach((item: { qty: number; price: number; }) => {
  //     this.cartTotal += (item.qty * item.price)
  //   })
  //  }

  removeItem(item: any){
     this.sharedService.removeCartItem(item);
  }
  emptycart(){
     this.sharedService.removeAllCart();
  }

}
