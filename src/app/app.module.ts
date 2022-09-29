import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './Contador/contador.module';


import { DbzModule } from './dbz/dbz.module';
import { HeroeModule } from './Heroes/heroes.module';
import { AgregarComponent } from './dbz/agregar/agregar.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
