import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ADD, UPDATE, DELETE } from '../../reducers/settings.reducer';
import { Setting } from '../../models/setting.model';
import { DeleteSettingsAction, UpdateSettingsAction } from '../../reducers/actions/settings.actions';

interface SettingsState {
  settings: Setting[];
}

@Injectable()
export class SettingsService {
  public settings$: Observable<Setting[]>;

  constructor(
    private store: Store<SettingsState>
  ) {
    console.log('init');
    this.settings$ = store.pipe(select('settings'));
  }

  public add(settings: Setting[]): void {
    const updateSettings = settings.filter((setting: Setting): boolean => !settings.includes(setting));
    const action = new UpdateSettingsAction(updateSettings);

    this.store.dispatch(action);
  }

  public update(settings: Setting[]): void {
    const updateSettings = settings.filter((setting: Setting): boolean => setting.canEdit);
    const action = new UpdateSettingsAction(updateSettings);

    this.store.dispatch(action);
  }

  public delete(settings: Setting[]): void {
    const deleteSettings = settings.filter((setting: Setting): boolean => setting.canDelete);
    const action = new DeleteSettingsAction(deleteSettings);

    this.store.dispatch(action);
  }
}
