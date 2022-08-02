import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunComponent } from './pages/no-comun/no-comun.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrganizeComponent } from './pages/organize/organize.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NumbersComponent,
    NoComunComponent,
    BasicComponent,
    OrganizeComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    NumbersComponent,
    NoComunComponent,
    BasicComponent,
    OrganizeComponent
  ]
})
export class ComponentsModule { }
