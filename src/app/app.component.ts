import { Component, OnInit } from "@angular/core";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "ng-checka11y";
  ngOnInit(): void {
    if (!environment.production) {
      this.checkA11yLinkInit();
    }
  }
  checkA11yLinkInit(): void {
    const headElm = document.head;
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/checka11y-css/checka11y.css";
    headElm.appendChild(styleLink);
  }
}
