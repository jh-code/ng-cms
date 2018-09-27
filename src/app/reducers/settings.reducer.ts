import { DEFAULT_ROLES, DEFAULT_THEMES } from '../app.constants';
import * as SettingsActions from './actions/settings.actions';
import { Setting } from '../models/setting.model';

export type SettingsAction = SettingsActions.All;

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

const defaultState: Setting[] = [
  {
    name: 'theme-admin',
    value: 'dark-theme',
    canDelete: false,
    canEdit: true,
    type: 'general',
    options: DEFAULT_THEMES,
    show: true
  },
  {
    name: 'role-default',
    value: 'reader',
    canDelete: false,
    canEdit: true,
    type: 'general',
    options: 'roles',
    show: true
  },
  {
    name: 'roles',
    value: DEFAULT_ROLES,
    type: null,
    canDelete: false,
    canEdit: true,
    show: false
  }
];

export function settingsReducer(
  state: Setting[] = defaultState,
  action: SettingsAction
): Setting[] {
  switch (action.type) {
    case ADD:
      return [...state, ...action.payload];

    case UPDATE:
      return state.map((setting: Setting): Setting => {
        const exists = action.payload
          .find((newSetting: Setting): boolean =>
            setting.name === newSetting.name);

        return exists ? exists : setting;
      });

    case DELETE:
      return state.
        filter((setting: Setting): boolean =>
          !action.payload
            .find((deleteSetting: Setting): boolean =>
              setting.name === deleteSetting.name)
        );

    default:
      return state;
  }
}
