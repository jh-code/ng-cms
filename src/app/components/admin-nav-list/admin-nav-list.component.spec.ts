import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavListComponent } from './admin-nav-list.component';

describe('AdminNavListComponent', () => {
  let component: AdminNavListComponent;
  let fixture: ComponentFixture<AdminNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
