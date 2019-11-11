import { HomeModule } from './../home/home.module';
import { EligibiliteModule } from './../eligibilite/eligibilite.module';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EligibiliteModule,
    HomeModule,
    FormsModule,  // to use ngmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
