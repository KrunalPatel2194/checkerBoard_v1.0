import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckerboardComponent } from './checkerboard/checkerboard.component';

const routes: Routes = [{
  path: '' , component : CheckerboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
