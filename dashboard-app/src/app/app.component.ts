import { APP_INITIALIZER, Component, Inject, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[]
})
export class AppComponent implements OnInit  {
  initApp =false;
   constructor(){



   }
   
  ngOnInit(){
    setTimeout(()=>{
      this.initApp=true;
    },1000)
  }
  
}



export function loadAuthData(): () => Promise<void> {
  const authService = inject(AuthService);
  return () =>
    new Promise((resolve) => {
      authService.isLoggedIn();
      const token = localStorage.getItem('authToken');
      // Simulate delay
      setTimeout(() => {
        console.log('Auth data loaded:', token);
        resolve();
      }, 5000);
    });
}
