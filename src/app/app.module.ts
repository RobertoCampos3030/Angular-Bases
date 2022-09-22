import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeModule } from './Heroes/Heroes.module';
import { ContadorModule } from './Contador/Contador.module';


@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    HeroeModule, 
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
