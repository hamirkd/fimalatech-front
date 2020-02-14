import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesRoutingModule, routedComponentss } from './Acces-routing.module';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ECommerceModule } from '../e-commerce/e-commerce.module';

@NgModule({
  declarations: [...routedComponentss,
    ],
  imports: [
    CommonModule,
    AccesRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,ECommerceModule
  ]
})
export class AccesModule { }
