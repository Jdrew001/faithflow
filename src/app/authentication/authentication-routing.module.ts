import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }