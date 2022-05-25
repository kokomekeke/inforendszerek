import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UgyfelComponent } from './ugyfel/ugyfel.component';
import { KeszletComponent } from './keszlet/keszlet.component';
import { KolcsonzesComponent } from './kolcsonzes/kolcsonzes.component';
import { VisszavitelComponent } from './visszavitel/visszavitel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UgyfelComponent,
    KeszletComponent,
    KolcsonzesComponent,
    VisszavitelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
