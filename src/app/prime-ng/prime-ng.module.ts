import { NgModule } from '@angular/core';
//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNGModule {}
