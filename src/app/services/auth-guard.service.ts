import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }
  

  canActivate(): boolean {
    if(this.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

 canAccessLogin():boolean {
  return !this.canActivate();
 }
 
}

export const guestGuard: CanActivateFn =  (route, state) => {
  return inject(AuthGuardService).canActivate();
};
