import { OffreModule } from './../offre/offre.module';
import { EligibiliteModule } from './../eligibilite/eligibilite.module';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'
import { ParametreService } from './providers/parametre.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ParametreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
