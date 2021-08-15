import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from "@angular/elements";

import { SecondWebAppComponent } from './second-web-app.component';

@NgModule({
  declarations: [
    SecondWebAppComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class SecondWebAppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SecondWebAppComponent, {injector: this.injector});
    customElements.define('second-web-app', el);
  }
}
