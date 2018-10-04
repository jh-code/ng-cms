import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { MatCardModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
