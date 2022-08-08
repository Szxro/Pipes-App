import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunComponent } from './pages/no-comun/no-comun.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrganizeComponent } from './pages/organize/organize.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { customUppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NoComunComponent,
    BasicComponent,
    OrganizeComponent,
    customUppercasePipe,
    FlyPipe,
    SortPipe,
  ],
  imports: [CommonModule, PrimeNGModule],
  exports: [
    NumbersComponent,
    NoComunComponent,
    BasicComponent,
    OrganizeComponent,
    customUppercasePipe,
    FlyPipe,
  ],
})
export class ComponentsModule {}
