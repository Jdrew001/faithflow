import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";

export const appRoutes: Route[] = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
              path: 'dashboard',
              loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            // {
            //   path: 'settings',
            //   loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
            // },
            // {
            //   path: 'profile',
            //   loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
            // },
          ],
    }
]

@NgModule({
    imports: [
      RouterModule.forChild(appRoutes),
    ],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }