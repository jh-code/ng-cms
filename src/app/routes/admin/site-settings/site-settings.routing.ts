import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteSettingsComponent } from './site-settings.component';

const settingsRoutes: Routes = [
  { path: '', component: SiteSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(settingsRoutes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
