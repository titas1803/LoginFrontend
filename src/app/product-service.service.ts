import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdDto } from './prod-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http:HttpClient) { }

  viewbyid(pid:number):Observable<any>{
    console.log("In Viewbyid");
    let token: string = JSON.parse(localStorage.getItem("userinfo")!).token;
    return this.http.get("http://localhost:8082/loginmodule/viewprodbyid/"+pid,{ headers: new HttpHeaders({ 'token-id': token }) });
  }

  addproduct(prod:ProdDto):Observable<any>{
    return this.http.post("http://localhost:8082/loginmodule/addproduct",prod);
  }
}
