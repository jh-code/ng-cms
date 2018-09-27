import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../../../services/settings/settings.service';
import { Setting } from '../../../models/setting.model';
import { Subscription } from 'rxjs';
import { DEFAULT_THEMES } from '../../../app.constants';
import { UpdateSettingsAction } from '../../../reducers/actions/settings.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent implements OnInit, OnDestroy {
  private settingsSub: Subscription;

  public settings: Setting[] = [];

  constructor(
    private settingsService: SettingsService
  ) {
    //
  }

  public ngOnInit(): void {
    this.settingsSub = this.settingsService.settings$
      .subscribe((settings: Setting[]): void => {
        this.settings = settings;
      });
  }

  public save(): void {
    const updateSetting: Setting = {
      name: 'theme-admin',
      value: 'light-theme',
      canDelete: false,
      canEdit: true,
      type: 'general',
      options: DEFAULT_THEMES,
      show: true
    };

    this.settingsService.update([updateSetting]);
  }

  public ngOnDestroy(): void {
    this.settingsSub.unsubscribe();
  }
}
