import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { FirstWebAppComponent } from './first-web-app.component';

@NgModule({
  declarations: [
    FirstWebAppComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class FirstWebAppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(FirstWebAppComponent, {injector: this.injector});
    customElements.define('first-web-app', el);
  }
}
