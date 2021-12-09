import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productId === product.id) {
        this.cartItemList[i].qty++
        productExists = true
        break;
      }
    }
    if(!productExists){
    this.cartItemList.push( {
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price,
      name: product.name,
      description: product.description,
      imageUrl:  product.imagepath,
      discount: product.discount,
      id: product.id
    });
    this.productList.next(this.cartItemList);
  }
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
