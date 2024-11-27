import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn =   (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (typeof window !== 'undefined') {
  const json = localStorage.getItem('dashboard_user');
  console.log("json",json)
  }
  console.log("authService.isLoggedIn()",authService.isLoggedIn())
  if (authService.isLoggedIn()) {
    return true;
  }
  else {
     router.navigateByUrl('/login');
    
    return false;
   
  
}
};