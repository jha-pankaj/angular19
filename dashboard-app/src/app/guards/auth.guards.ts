import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn =   (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const json = localStorage.getItem('dashboard_use');
  console.log("json",json);
  console.log("authService.isLoggedIn()",authService.isLoginAuthenticated())
  if (authService.isLoggedIn()) {
    return true;
  }
  else {
    console.log("in auth else part")
    router.navigateByUrl('/login');
    
    return false;
   
  }
};