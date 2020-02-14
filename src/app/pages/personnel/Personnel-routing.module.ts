import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelComponent } from './Personnel.component';

const routes: Routes = [{
  path: '',
  component: PersonnelComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelRoutingModule { }

export const routedComponents = [
  PersonnelComponent,
];
