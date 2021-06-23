import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdDto } from '../prod-dto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
prod:ProdDto=new ProdDto();
msg:string;
msgflag:boolean;
@ViewChild("frm")
form:NgForm;
  constructor(public prodservice:ProductServiceService) { }

  ngOnInit() {
  }

  add():void{
    console.log("In add method");
    console.log(this.prod.prodImg);
    // this.prodservice.addproduct(this.prod).subscribe(
    //   data=>{
    //     console.log(data);
    //     this.msg=data.message;
    //     this.form.reset;
    //     this.msgflag=true;
    //   },
    //   error=>{
    //     console.log(error);
    //     this.msg=error.error.message[0];
    //     this.msgflag=false;
    //   }
    // )
  }
}
