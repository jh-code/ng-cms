import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private themeSub: Subscription;
  private theme: string;

  public get isDarkTheme(): boolean {
    return this.theme === 'dark-theme';
  }

  constructor(
    private themeService: ThemeService
  ) {
    //
  }

  public ngOnInit(): void {
    this.themeSub = this.themeService.theme.subscribe((theme: string): string => this.theme = theme);
  }

  public setTheme(ev): void {
    this.theme = ev.checked ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(this.theme);
  }

  public ngOnDestroy(): void {
    this.themeSub.unsubscribe();
  }
}
