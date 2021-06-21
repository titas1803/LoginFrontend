import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-login-module';

  constructor(public loginService: LoginService, public storageService: StorageService, public router: Router) { }

  doLogout(): void {
    this.loginService.doLogout().subscribe(
      data => {
        localStorage.removeItem("userinfo");
        this.storageService.msg = data.msg;
        this.storageService.loginflag = false;
        this.router.navigateByUrl("/login");
      }
    )

  }
}
