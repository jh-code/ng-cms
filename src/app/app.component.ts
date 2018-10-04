import { Component, ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private themeSub: Subscription;
  private currentTheme: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {
    //
  }

  public ngOnInit(): void {
    this.themeSub = this.themeService.theme.subscribe((theme: string): void => {
      console.log(theme);
      this.setTheme(theme);
      this.currentTheme = theme;
    });
  }

  public setTheme(className: string): void {
    console.log(className, this.currentTheme);
    if (className !== '') {
      this.renderer.removeClass(this.el.nativeElement, this.currentTheme);
      this.renderer.addClass(this.el.nativeElement, className);
    }
  }

  public ngOnDestroy(): void {
    this.themeSub.unsubscribe();
  }
}
