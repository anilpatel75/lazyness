import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import { Routes, RouterModule} from '@angular/router'
   const secRoute:Routes=[
    {path:'',
    component:SecondComponent,
    }]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(secRoute)

  ],
   exports:[RouterModule],
  declarations: [SecondComponent]
})
export class LazyModule { }