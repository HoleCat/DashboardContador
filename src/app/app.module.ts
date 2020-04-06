import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CajaModule } from './modules/caja/caja.module';
import { MuestrasModule } from './modules/muestras/muestras.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    CajaModule,
    MuestrasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
