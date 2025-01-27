import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { AuthGuard } from "./core/guard/auth.guard";

export const appRoutes: Route[] = [
  {
    path: "", redirectTo: "/dashboard", pathMatch: "full"
  },
  {
    path: "auth", // Define a route for 'home'
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: "**", redirectTo: "/dashboard" // Catch-all route for undefined paths
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }