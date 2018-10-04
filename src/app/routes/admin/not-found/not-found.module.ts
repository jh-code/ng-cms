import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found.routing';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    MatButtonModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
