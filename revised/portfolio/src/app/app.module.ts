import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AbtComponent } from './abt/abt.component';
import { ExpComponent } from './exp/exp.component';
import { PrjComponent } from './prj/prj.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AbtComponent,
    ExpComponent,
    PrjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
