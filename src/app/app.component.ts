import { AfterViewInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private doc: any) {}
  ngAfterViewInit(): void {
    if (!environment.production) {
      this.checkA11yLinkInit();
    }
  }
  checkA11yLinkInit(): void {
    const headElm: HTMLHeadElement = this.doc.head;
    const styleLink: HTMLElement = this.doc.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute(
      'href',
      'https://cdn.jsdelivr.net/npm/checka11y-css/checka11y.css'
    );
    headElm.appendChild(styleLink);
  }
}
