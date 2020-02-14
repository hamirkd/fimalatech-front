import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteComponent } from './carte.component';

const routes: Routes = [{
  path: '',
  component: CarteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteRoutingModule { }

export const routedComponents = [
  CarteComponent,
];