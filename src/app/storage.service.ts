import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  msg?: string;
  loginflag!: boolean;
  userName!: string;
  userId!:number;

  constructor() {
    if (localStorage.getItem("userinfo") != null) { 
      this.loginflag = true;
      this.userName = JSON.parse(localStorage.getItem("userinfo")!).userName;
      this.userId=JSON.parse(localStorage.getItem("userinfo")!).userId;

    }
  }
}
