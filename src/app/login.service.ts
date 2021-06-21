import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from './login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  doLogin(login: LoginDto): Observable<any> {
    return this.http.post("http://localhost:8082/loginmodule/login", login);
  }

  doLogout(): Observable<any> {
    let token: string = JSON.parse(localStorage.getItem("userinfo")!).token;
    console.log(token);
    return this.http.get("http://localhost:8082/loginmodule/logout", { headers: new HttpHeaders({ 'token-id': token }) });
  }

  encryptString(pwd: string): string {
    let str: string = "";
    for (let idx = 0; idx < pwd.length; idx++) {
      str += (pwd.charCodeAt(idx) + 3);
    }
    return str;
  }
}
