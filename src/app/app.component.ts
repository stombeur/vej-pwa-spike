import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vej-pwa-spike';
  public showBanner = false;

  constructor() {
    this.showBanner = this.shouldShowInstallBanner();
  }

  isIos(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
  }

  isInStandaloneMode(): boolean {
    const n: any = window.navigator;
    return ('standalone' in window.navigator) && (n.standalone);
  }

  shouldShowInstallBanner(): boolean {
    return this.isIos() && !this.isInStandaloneMode();
  }

}
