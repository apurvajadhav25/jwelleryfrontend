import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productsUrl, productsUrlType } from 'src/app/config/api';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseApiUrl = "http://localhost:8080/uploadFile"
 
 products: Product[]=[
    //new Product(1, 'Earing ', 'stylish Fancy Diamond Earrings', 10000,'https://apurva09.s3.ap-south-1.amazonaws.com/angthi/1.jpg'),
    
    //new Product(2, 'Earing ', 'Ethereal Floral Diamond Earrings', 20000,'https://apurva09.s3.ap-south-1.amazonaws.com/angthi/2.jpg'),
   // new Product(3, 'Earing' , 'Queenly Traditional Stud Earring', 30000,'https://apurva09.s3.ap-south-1.amazonaws.com/angthi/3.jpg'),
    //new Product(4, 'Earing', 'Modish Gold Earrings', 40000,'https://apurva09.s3.ap-south-1.amazonaws.com/angthi/4.jpg')

    
  ]

  constructor(private http: HttpClient) { }

  

  getProducts(): Observable<Product[]>{
  //  return this.products
  return this.http.get<Product[]>(productsUrl);

  }

  getProductsAccType(type: string,purity: string): Observable<Product[]>{
    //  return this.products
    return this.http.get<Product[]>(productsUrlType+'?type='+type+'&purity='+purity);
  //  return this.http.get<Product[]>(productsUrlType+'?type='+type);
  
    }

    payment(customerId: string,transactionAmount: string,orderId: string):Observable<Product[]> {
      //  return this.products
      return this.http.post<Product[]>('http:localhost:8080/submitPaymentDetail',{
params:{
  CUST_ID:customerId,
  TXN_AMOUNT:transactionAmount,
  ORDER_ID:orderId
}

});

     }

     payment1(customerId: string,transactionAmount: string,orderId: string):Observable<Product[]>{
       return this.http.get<Product[]>('https://securegw.paytm.in/order/process')
     }
    
  public getProduct(id: any) {
  
   // let products:Product[]=this.getProducts();
    //return products.find(p => p.id==id);
  }

  getById(id: any): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products/'+id)
  }

  getImages() {
    return this.http.get<any>('assets/data.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
    }

    upload(file:any):Observable<any> {
             // Create form data
             const formData = new FormData(); 
         
             // Store form name as "file" with file data
             formData.append("file", file, file.name);
               
             // Make http post request over api
             // with formData as req
             return this.http.post<any>(this.baseApiUrl, formData,{ observe: 'response' })
    }

    createEmail(to: any) : Observable<Object>{
      return this.http.post('http://localhost:8080/sendemail', to);
    }



}
