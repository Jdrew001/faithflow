import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent
      }
]

@NgModule({
    imports: [
      RouterModule.forChild(appRoutes),
    ],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }