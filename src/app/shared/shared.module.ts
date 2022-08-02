import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Prime Module
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

//Components
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class SharedModule { }
