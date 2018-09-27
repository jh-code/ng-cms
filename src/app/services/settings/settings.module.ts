import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './settings.service';
import { StoreModule } from '@ngrx/store';
import { settingsReducer } from '../../reducers/settings.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ settings: settingsReducer })
  ],
  providers: [
    SettingsService
  ],
  declarations: []
})
export class SettingsModule {
  //
}
