import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavListComponent } from './admin-nav-list.component';
import { MatListModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [AdminNavListComponent],
  exports: [AdminNavListComponent]
})
export class AdminNavListModule { }
