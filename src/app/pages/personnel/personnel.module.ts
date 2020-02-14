import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelRoutingModule, routedComponents } from './Personnel-routing.module';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, 
  NbDialogModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,PersonnelRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(), 
    NbWindowModule.forChild(),FormsModule,
  ],
  declarations: [...routedComponents, EditComponent],
  entryComponents:[EditComponent],
})
export class PersonnelModule { }
