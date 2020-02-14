import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupeComponent } from './groupe.component';

const routes: Routes = [{
  path: '',
  component: GroupeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupeRoutingModule { }

export const routedComponents = [
  GroupeComponent,
];