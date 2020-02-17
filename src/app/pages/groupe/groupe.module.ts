import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupeRoutingModule } from './groupe-routing.module';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDialogModule, NbWindowModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routedComponents } from './groupe-routing.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AddDroitComponent } from './add-droit/add-droit.component';

@NgModule({
  declarations: [...routedComponents,EditComponent, AddDroitComponent],
  entryComponents:[EditComponent,AddDroitComponent],
  imports: [
    CommonModule,
    GroupeRoutingModule,NbSelectModule,
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
