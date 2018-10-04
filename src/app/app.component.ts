import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private theme = 'dark-theme';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    //
  }

  public ngOnInit(): void {
    //
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
