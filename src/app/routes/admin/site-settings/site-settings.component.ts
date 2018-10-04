import { Component, OnInit, OnDestroy } from '@angular/core';
import { Setting } from '../../../models/setting.model';

@Component({
  selector: 'app-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent implements OnInit, OnDestroy {
  public settings: Setting[] = [];

  constructor() {
    //
  }

  public ngOnInit(): void {
    //
  }

  public save(): void {
    //
  }

  public ngOnDestroy(): void {
    //
  }
}
