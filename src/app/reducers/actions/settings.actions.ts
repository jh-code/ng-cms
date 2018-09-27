import { Action } from '@ngrx/store';

import { ADD, UPDATE, DELETE } from '../settings.reducer';
import { Setting } from '../../models/setting.model';

export class AddSettingsAction implements Action {
  readonly type = ADD;

  constructor(
    public payload: Setting[]
  ) { }
}

export class UpdateSettingsAction implements Action {
  readonly type = UPDATE;

  constructor(
    public payload: Setting[]
  ) { }
}

export class DeleteSettingsAction implements Action {
  readonly type = DELETE;

  constructor(
    public payload: Setting[]
  ) { }
}

export type All
  = AddSettingsAction
  | UpdateSettingsAction
  | DeleteSettingsAction;
