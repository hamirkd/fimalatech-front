import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupeRoutingModule } from './groupe-routing.module';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routedComponents } from './groupe-routing.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [...routedComponents,EditComponent],
  entryComponents:[EditComponent],
  imports: [
    CommonModule,
    GroupeRoutingModule,
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
export class GroupeModule { }
