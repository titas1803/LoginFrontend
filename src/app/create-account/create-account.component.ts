import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  userDto:UserDto=new UserDto();
  msg?:string;
  @ViewChild("frm")
  form!:NgForm;
  msgflag!:boolean
  confPass:string;

  constructor(public userService:UserService) { }

  ngOnInit() {
  }

  create():void{
    console.log("create");
    this.userDto.password=this.userService.encryptString(this.userDto.password);
    this.userDto.contactNo=this.userDto.contactNo.toString();
    console.log(this.userDto);
    this.userService.createAccount(this.userDto).subscribe(
      data=>
      {
        console.log(data);
        this.msg=data.msg;
        this.msgflag=true;
      },
      error=>{
        console.log(error);
        this.msgflag=false;
        if(error.error.msg==null){
          this.msg=error.error.messages[0];
        }
        else{
          this.msg=error.error.msg;
        }
      });
      this.form.reset();
  }

}
