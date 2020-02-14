import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesComponent } from './Acces.component';

const routes: Routes = [{
  path: '',
  component: AccesComponent
}];

export const routedComponentss = [
  AccesComponent,
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesRoutingModule { }
