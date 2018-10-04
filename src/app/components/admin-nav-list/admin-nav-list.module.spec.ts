import { AdminNavListModule } from './admin-nav-list.module';

describe('AdminNavListModule', () => {
  let adminNavListModule: AdminNavListModule;

  beforeEach(() => {
    adminNavListModule = new AdminNavListModule();
  });

  it('should create an instance', () => {
    expect(adminNavListModule).toBeTruthy();
  });
});
