import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteSettingsComponent } from './site-settings.component';
import { SettingsRoutingModule } from './site-settings.routing';
import { SettingsModule } from '../../../services/settings/settings.module';
import { MatDividerModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [SiteSettingsComponent]
})
export class SiteSettingsModule { }
