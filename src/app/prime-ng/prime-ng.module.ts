import { NgModule } from '@angular/core';
//primeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';




@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
  ]
})
export class PrimeNGModule { }
