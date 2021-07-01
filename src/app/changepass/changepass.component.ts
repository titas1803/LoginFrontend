import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '../login-dto';
import { LoginService } from '../login.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  login: LoginDto = new LoginDto();
  confPass: string;
  @ViewChild("frm")
  form!: NgForm;

  constructor(public storageservice: StorageService, public loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.login.userId=this.storageservice.userId;
    this.storageservice.msg = undefined;
  }
  changepassword(): void {
    // this.login.userId = this.storageservice.userId;
    console.log(this.login.userId);
    this.login.password = this.loginService.encryptString(this.login.password);
    this.login.newPassword = this.loginService.encryptString(this.login.newPassword);
    this.loginService.changePassword(this.login).subscribe(
      data => {
        console.log(data);
        this.storageservice.msg = data.msg;
        this.doLogout();
      },
      error => {
        console.log(error);
        this.storageservice.msg = error.error.msg;
        this.form.resetForm();
        this.login.userId=this.storageservice.userId;

        // this.form.controls.txtuid.setValue(this.storageservice.userId);
        // console.log(this.storageservice.userId);
        // console.log(this.form.controls.txtuid.value)
      }
    );
  }
  doLogout(): void {
    this.loginService.doLogout().subscribe(
      data => {
        localStorage.removeItem("userinfo");
        this.storageservice.msg = data.msg;
        this.storageservice.loginflag = false;
        this.form.reset();
        this.router.navigateByUrl("/login");
      }
    );
  }

}
