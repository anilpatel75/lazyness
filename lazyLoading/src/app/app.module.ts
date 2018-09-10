import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { RouteModule1Module } from './route-module1/route-module1.module';

 
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    RouteModule1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
