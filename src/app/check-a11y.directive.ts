import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appCheckA11y]',
})
export class CheckA11yDirective implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

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
