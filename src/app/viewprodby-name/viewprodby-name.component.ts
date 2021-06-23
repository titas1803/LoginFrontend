import { Component, OnInit } from '@angular/core';
import { ProdDto } from '../prod-dto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-viewprodby-name',
  templateUrl: './viewprodby-name.component.html',
  styleUrls: ['./viewprodby-name.component.css']
})
export class ViewprodbyNameComponent implements OnInit {

  prodname:string;
  product:ProdDto[]=undefined;
  msg:string;
  currentPage:number=1;
  productarray:any[]=[];
  totalPages!:number;
  constructor(public prodservice:ProductServiceService) { }

  ngOnInit() {
  }

  viewbyname(){
    this.product=undefined;
    this.prodservice.viewbyname(this.prodname).subscribe(
      data=>{
      console.log(data);
      this.product=data;
      this.msg=undefined;
      let endrow=this.currentPage*3;
      let startrow=endrow-3;
      this.productarray=this.product.slice(startrow, endrow);
      this.totalPages=Math.ceil(this.product  .length/3.0);
    },
    error=>{
      console.log(error);
      this.msg=error.error.msg;
    });
  }

  previous(){
    --this.currentPage;
    let endrow=this.currentPage*3;
    let startrow=endrow-3;
    this.productarray=this.product.slice(startrow, endrow);
  }

  next(){
    ++this.currentPage;
    let endrow=this.currentPage*3;
    let startrow=endrow-3;
    this.productarray=this.product.slice(startrow, endrow);
  }
}
