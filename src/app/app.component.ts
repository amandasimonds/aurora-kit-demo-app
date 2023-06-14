import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aurora-kit-demo-app';
  public darkModeOn = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  public toggleDarkMode() {
    if (this.darkModeOn) {
      this.darkModeOn = false;
      this.renderer.removeClass(this.document.body, 'aurora-dark-theme');
    } else {
      this.darkModeOn = true;
      this.renderer.addClass(this.document.body, 'aurora-dark-theme');
    }
  }
}
