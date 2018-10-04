import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatDividerModule,
  MatMenuModule
} from '@angular/material';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { HeaderModule } from '../../components/header/header.module';
import { AdminNavListModule } from '../../components/admin-nav-list/admin-nav-list.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    MatMenuModule,
    HeaderModule,
    AdminNavListModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
  //
}
