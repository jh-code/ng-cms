import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SettingsService } from './services/settings/settings.service';
import { Setting } from './models/setting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private theme = 'dark-theme';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private settingsService: SettingsService
  ) {
    //
  }

  public ngOnInit(): void {
    this.settingsService.settings$.subscribe((settings: Setting[]): void => {
      const theme = settings.find((setting: Setting): boolean => setting.name === 'theme-admin');

      this.setTheme(theme.value);
    });
  }

  public setTheme(className: string): void {
    if (this.theme !== '') {
      this.renderer.removeClass(this.el.nativeElement, this.theme);
    }

    if (className !== '') {
      this.renderer.addClass(this.el.nativeElement, className);
    }

    this.theme = className;
  }
}
