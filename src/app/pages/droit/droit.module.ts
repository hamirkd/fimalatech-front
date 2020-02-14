import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroitRoutingModule } from './droit-routing.module';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routedComponents } from './droit-routing.module';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...routedComponents, EditComponent],
  entryComponents:[EditComponent],
  imports: [
    CommonModule,
    DroitRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),FormsModule,
  ]
})
export class DroitModule { }
