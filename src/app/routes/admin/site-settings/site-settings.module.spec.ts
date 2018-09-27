import { SiteSettingsModule } from './site-settings.module';

describe('SiteSettingsModule', () => {
  let siteSettingsModule: SiteSettingsModule;

  beforeEach(() => {
    siteSettingsModule = new SiteSettingsModule();
  });

  it('should create an instance', () => {
    expect(siteSettingsModule).toBeTruthy();
  });
});
