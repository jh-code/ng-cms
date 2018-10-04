import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ThemeService {
  private defaultTheme = 'dark-theme';
  private cache: string;
  private subject: BehaviorSubject<string>;

  public theme: Observable<string>;

  constructor() {
    this.cache = this.defaultTheme;
    this.subject = new BehaviorSubject(this.cache);
    this.theme = this.subject.asObservable();
  }

  public setTheme(theme: string): void {
    this.cache = theme;
    this.subject.next(this.cache);
  }
}
