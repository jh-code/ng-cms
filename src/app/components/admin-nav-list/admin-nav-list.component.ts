import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-nav-list',
  templateUrl: './admin-nav-list.component.html',
  styleUrls: ['./admin-nav-list.component.scss']
})
export class AdminNavListComponent {
  @Input() public navOpen: boolean;
  @Output() public navToggle: EventEmitter<void> = new EventEmitter();

  constructor() {
    //
  }

  public toggleNav(): void {
    this.navToggle.emit();
  }
}
