import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-viewprodby-id',
  templateUrl: './viewprodby-id.component.html',
  styleUrls: ['./viewprodby-id.component.css']
})
export class ViewprodbyIdComponent implements OnInit {
pid:number;
products:any;
msg:string;
  constructor(public prodservice:ProductServiceService) { }

  ngOnInit() {
  }

  viewbyid():void{
    if(this.pid==undefined || this.pid==null || this.pid<=0 ){
      this.msg="Enter the Product ID greater than zero";
      return ;
    }
    this.prodservice.viewbyid(this.pid).subscribe(
      data=>{
        console.log(data);
        this.products=data;
        this.msg=undefined;
      },
      error=>{
        console.log(error);
        this.msg=error.error.message;
        this.products=undefined;
      }
    )
  }
}
