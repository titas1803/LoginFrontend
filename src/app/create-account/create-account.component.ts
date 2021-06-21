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
    this.userDto.password=this.userService.encryptString(this.userDto.password);
    this.userService.createAccount(this.userDto).subscribe(
      data=>{this.msg=data;this.msgflag=true},
      error=>{this.msg=error; this.msgflag=false}
    );
  }

}
