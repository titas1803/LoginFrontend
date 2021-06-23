import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public storageService:StorageService, public router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let user = JSON.parse(localStorage.getItem('userinfo'));
    //check authentication to access the component by any role
    if (user != null && next.data.role == undefined) {
      return true;
    }
    //check authentication and authorization to access the component by specific role
    if (user != null && user.role != null && next.data.role == user.role) {
      this.storageService.msg = undefined;
      return true;
    }
    this.router.navigateByUrl('/login');
    this.storageService.msg = 'You are not Authenticated/Authorized to access';
    return false;
  }
}
