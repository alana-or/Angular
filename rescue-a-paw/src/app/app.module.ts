import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { PrincipalBlocksComponent } from './principal-blocks/principal-blocks.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { DonationsComponent } from './donations/donations.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    PrincipalBlocksComponent,
    WhatWeDoComponent,
    DonationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
