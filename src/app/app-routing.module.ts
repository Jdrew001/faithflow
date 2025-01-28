import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { AuthGuard } from "./core/guard/auth.guard";

export const appRoutes: Route[] = [
  {
    path: "", redirectTo: "/auth/login", pathMatch: "full"
  },
  {
    path: "auth", // Define a route for 'home'
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    //canActivate: [AuthGuard]
  },
  {
    path: "**", redirectTo: "/auth/login" // Catch-all route for undefined paths
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }