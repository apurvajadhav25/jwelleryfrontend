import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import {AccordionModule} from 'primeng/accordion';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  rangeValues: number[] = [];
  selectedValues: string[]=[];
  selectedPurities: string[]=[];
  filter1: string=''
  filter2: string='' 
  price: string=''
  f1: any[]=[]
  f2: any[]=[]
  f3: any[]=[]
  slider1: any[]=[]
  minValue!: any
  maxValue!: any

  constructor(private filterService: FilterService,
              private route: ActivatedRoute,
              private msg: MessengerService) { }

  ngOnInit(): void {
    this.filterService.getFilter1().subscribe((filter)=>{
      this.f1=filter;
    })

    this.filterService.getFilter2().subscribe((filter)=>{
      this.f2=filter;
    })

    this.filterService.getFilter3().subscribe((filter)=>{
      this.f3=filter;
    })

    this.filterService.getSlider1().subscribe((filter)=>{
      this.slider1=filter
      this.rangeValues[0]=this.slider1[0].minValue
      this.rangeValues[1]=this.slider1[0].maxValue
    })
  }

  onCheckboxChange(e: any){
    
    if(this.selectedValues||this.selectedPurities||this.rangeValues){
    
    for(let i=0;i<this.selectedValues.length;i++){
       this.filter1=this.filter1+this.selectedValues[i]+','
    }
    for(let i=0;i<this.selectedPurities.length;i++){
      this.filter2=this.filter2+this.selectedPurities[i]+','
   }
  
   
    this.price=this.rangeValues[0]+'-'+this.rangeValues[1]
    this.msg.sendMsgEvent(this.filter1,this.filter2,this.price);
    this.filter1=''
    this.filter2=''
    }
  }
}



