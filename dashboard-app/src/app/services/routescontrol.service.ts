import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutescontrolService {
  router = inject(Router);

  constructor() { }
 
  navigateTo(item:string){
    this.router.navigate(['/'+item]);
  }

}
