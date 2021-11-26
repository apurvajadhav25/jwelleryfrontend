import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';

import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 /* cartItems : CartItem[] = [
   //{ id: 1, productId: 1, productName: 'Testv1', qty: 4, price: 100},
  // { id: 2, productId: 2,  productName: 'Test 2', qty: 3, price: 200},
  ];
cartTotal = 0
 
  constructor(private msg: MessengerService,
              private cartService: CartService
              ) { }
  
   ngOnInit() {
     this.handleSubscription();
     this.loadCartItems();
     
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product:any )  => {
    //  console.log(product)
    this.loadCartItems();
 
  })
    
  }
  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[])=>
    {
      this.cartItems = items;
      this.calcCartTotal();
    })

  }
 


calcCartTotal(){
  this.cartTotal = 0
  this.cartItems.forEach(item  => {
  this.cartTotal += (item.qty * item.price)

})


}*/

cartItems: any = [
  //{ id: 1, productId: 1, productName: 'Testv1', qty: 4, price: 100},
 // { id: 2, productId: 2,  productName: 'Test 2', qty: 3, price: 200},
 ];
cartTotal = 0

 constructor(private msg: MessengerService
             ) { }
 
  ngOnInit() {
    
   this.msg.getMsg().subscribe((product:any )  => {
     console.log(product)
   //this.loadCartItems();
  this.addProductToCart(product)
 })

 
 }

addProductToCart(product: Product){
 let productExists = false

 for (let i in this.cartItems) {
   if (this.cartItems[i].productId === product.id) {
     this.cartItems[i].qty++
     productExists = true
     break;
   }
 }

 if (!productExists) {
   this.cartItems.push(
     {
   productId: product.id,
     productName: product.name,
     qty: 1,
     price: product.price
   }
   )
 }
 

 this.cartTotal = 0
 this.cartItems.forEach((item: { qty: number; price: number; }) => {
   this.cartTotal += (item.qty * item.price)
 })
}
}






 

   


  





  
  

