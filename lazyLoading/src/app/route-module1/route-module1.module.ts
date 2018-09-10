import { FirstComponent } from './../first/first.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'

 const routes:Routes=[
   {path:'',
    component:FirstComponent,
    pathMatch:"full"},
    {path:'lazy',
    loadChildren: '../lazy/lazy.module#LazyModule'}

 ]
@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)

],
exports:[RouterModule]
 
})
export class RouteModule1Module { }
