import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'settings', loadChildren: './site-settings/site-settings.module#SiteSettingsModule' },
      { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
