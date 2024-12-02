import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LineChartsComponent } from '../line-charts/line-charts.component';
import { CricketDashboardComponent } from '../cricket-dashboard/cricket-dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { UnderdevelopmentComponent } from '../underdevelopment/underdevelopment.component';
import { Home } from '../home/home.component';
export const dashboardRoutes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        {
          path: 'lines', //login
          title: 'Line Chart',
          component: LineChartsComponent,
          canActivate: [authGuard],
        },
        {
          path: '', //login
          title: 'Home',
          component: Home,
          canActivate: [authGuard],
        },
        {
          path: 'cricket', //login
          title: 'Cricket',
          component: CricketDashboardComponent,
          canActivate: [authGuard],
        },
        {
          path: 'undev', //login
          title: 'under development',
          component: UnderdevelopmentComponent,
          canActivate: [authGuard],
        }
        
      ]
    },
  ];