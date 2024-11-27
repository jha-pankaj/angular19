import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { delay, Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthResolver implements Resolve<any> {
  constructor(private authService: AuthService) {}

  resolve(): Observable<any> {
    console.log('AuthResolver initializing user state');
    this.authService.getUserInfo(); // Ensure state is ready
    const fakeObservable = of('dummy').pipe(delay(5000));
    return fakeObservable
    
  }
}