import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from '../login-dto';
import { LoginService } from '../login.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:LoginDto= new LoginDto();

  constructor(public storageservice:StorageService, public loginService:LoginService, public router:Router) { }

  ngOnInit() {
    this.storageservice.msg=undefined;
  }

  doLogin():void{
    this.login.password=this.loginService.encryptString(this.login.password);
    this.loginService.doLogin(this.login).subscribe(
      data=>{
      localStorage.setItem("userinfo", JSON.stringify(data));
      this.storageservice.loginflag=true;
      this.storageservice.userName=JSON.parse(localStorage.getItem("userinfo")!).userName;
      this.storageservice.userId=JSON.parse(localStorage.getItem("userinfo")!).userId;
      this.storageservice.msg=undefined;
      this.router.navigateByUrl("/");
      },
      error=>{
        this.storageservice.msg="incorrect username or password";
        this.storageservice.loginflag=false;
        this.router.navigateByUrl('/login');
      }
    );
  }

}
