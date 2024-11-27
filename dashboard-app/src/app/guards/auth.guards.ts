import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn =   (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log("authService.isLoggedIn()",authService.isLoginAuthenticated())
  if (authService.isLoginAuthenticated()) {
    return true;
  }
  else {
     router.navigateByUrl('/login');
    
    return false;
   
  }
};