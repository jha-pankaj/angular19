import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LineChartsComponent } from '../line-charts/line-charts.component';
export const dashboardRoutes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        {
          path: '', //login
          title: 'Login page',
          component: LineChartsComponent,
        }
      ]
    },
  ];