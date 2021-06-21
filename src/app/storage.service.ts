import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  msg?: string;
  loginflag!: boolean;
  userId!: number;

  constructor() {
    if (localStorage.getItem("userinfo") != null) {
      this.loginflag = true;
      this.userId = JSON.parse(localStorage.getItem("userinfo")!).userName;
    }
  }
}
