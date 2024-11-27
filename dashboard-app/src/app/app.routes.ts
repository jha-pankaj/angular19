import { Routes } from "@angular/router";
import { authGuard } from "./guards/auth.guard";
export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./dashboard/dashboard.route").then((m) => m.dashboardRoutes),
    canActivate: [authGuard],
  },
  {
    path: "dashboard",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "login",
    loadComponent: () =>
      import("./login/login.component").then((m) => m.LoginComponent),
  },
  { path: "**", redirectTo: "" },
];
