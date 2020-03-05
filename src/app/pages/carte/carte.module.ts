import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteRoutingModule } from './carte-routing.module';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDialogModule, NbWindowModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routedComponents } from './carte-routing.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { UpdateGroupeComponent } from './update-groupe/update-groupe.component';

@NgModule({
  declarations: [...routedComponents,EditComponent,UpdateGroupeComponent],
  entryComponents:[EditComponent,UpdateGroupeComponent],
  imports: [
    CommonModule,
    CarteRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    FormsModule,NbSelectModule
  ]
})
export class CarteModule { }
