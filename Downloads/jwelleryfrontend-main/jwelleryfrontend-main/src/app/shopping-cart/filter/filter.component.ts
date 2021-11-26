import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  rangeValues: number[] = [];
 
  selectedValues: string[]=[];

  selectedPurities: string[]=[];

  parentProperty = "I come from parent"
  
  products:Product[]=[];
  enterName="";
  parentData=''
 
  constructor(private productService: ProductService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.rangeValues[0]=20;
    this.rangeValues[1]=80;
    
   }

  onCheckboxChange(e: any){
 
   
 
    if(this.selectedValues || this.selectedPurities){
      for (let i = 0; i < 3; i++){
        if((this.selectedValues[i]=='Diamond Rings'||this.selectedValues[i]=='Gold Rings')
        ||(this.selectedPurities[i]=='18k'||this.selectedPurities[i]=='24k'||this.selectedPurities[i]=='14k')){
          
          let type=this.selectedValues[i]
          let purity=this.selectedPurities[i]
          this.productService.getProductsAccType(type,purity).subscribe((products)=>{
            this.products = products;
            console.log(products)
          }
       
          )

        }
      }
    }

  }
 
}



