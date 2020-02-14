import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroitComponent } from './droit.component';

const routes: Routes = [{
  path: '',
  component: DroitComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DroitRoutingModule { }

export const routedComponents = [
  DroitComponent,
];