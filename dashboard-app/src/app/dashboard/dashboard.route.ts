import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LineChartsComponent } from '../line-charts/line-charts.component';
import { CricketDashboardComponent } from '../cricket-dashboard/cricket-dashboard.component';
export const dashboardRoutes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        {
          path: 'line', //login
          title: 'Login page',
          component: LineChartsComponent,
        },
        {
          path: '', //login
          title: 'Login page',
          component: CricketDashboardComponent,
        }
       
      ]
    },
  ];