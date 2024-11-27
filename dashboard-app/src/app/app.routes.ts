import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { AuthResolver } from './resolver/auth.resolver';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [authGuard],
   
  },
  { 
    path: 'dashboard', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
     
  },
  { path: '**', redirectTo: '' },
];