import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infomail-frontend';

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    // redundant
    console.log("FRONT_URL", environment.FRONT_URL)
    console.log("API_URL", environment.API_URL)
    console.log("SHOW_LOGS", environment.SHOW_LOGS)
  }


}
