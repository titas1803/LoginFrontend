import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  msg:string;
  constructor(public http:HttpClient) { }

  createAccount(userdto:UserDto):Observable<any>{
    console.log("in create");
    return this.http.post<UserDto>("http://localhost:8082/loginmodule/createuser", userdto);
  }

  encryptString(pwd:string):string{
    let str:string="";
    for(let idx=0; idx<pwd.length; idx++){
      str += (pwd.charCodeAt(idx)+3);
    }
    return str;
  }
}
