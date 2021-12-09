import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject()
  subject1 = new Subject()

  constructor() { }

  sendMsg(product: Product){
    console.log(product)
    this.subject.next(product)
  }

  getMsg(){
    return this.subject.asObservable()
  }

  sendMsgEvent(filter1: String,filter2: String,price: String){
    this.subject1.next({filter1,filter2,price});
  }

  getMsgEvent():Observable<any>{
    return this.subject1.asObservable()
  }

  sendMsgSort(sortedValues: string){
    console.log(sortedValues)
    this.subject.next(sortedValues)
  }

  getMsgSort(){
    return this.subject.asObservable()
  }
}
