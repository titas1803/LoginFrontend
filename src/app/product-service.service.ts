import { HttpClient } from '@angular/common/http';
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
    return this.http.get("http://localhost:8082/loginmodule/viewprodbyid/"+pid);
  }

  addproduct(prod:ProdDto):Observable<any>{
    return this.http.post("http://localhost:8082/loginmodule/addproduct",prod);
  }
}
