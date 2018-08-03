import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LocalModule } from './local/local.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LocalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
