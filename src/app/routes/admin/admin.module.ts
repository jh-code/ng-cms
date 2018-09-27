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
import { FooterModule } from '../../components/footer/footer.module';

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
    FooterModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
  //
}
