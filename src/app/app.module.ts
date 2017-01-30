import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LetterComponent } from './mono-alphabetic/letter/letter.component';
import { ChartModule } from 'angular2-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { MonoAlphabeticComponent } from './mono-alphabetic/mono-alphabetic.component';
import { CaesarComponent } from './caesar/caesar.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    MonoAlphabeticComponent,
    CaesarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
