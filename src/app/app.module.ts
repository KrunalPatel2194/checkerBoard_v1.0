import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { CheckerboardComponent } from './checkerboard/checkerboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    CheckerboardComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
