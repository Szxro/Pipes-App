import { NgModule, Component } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/pages/basic/basic.component';
import { NoComunComponent } from './components/pages/no-comun/no-comun.component';
import { NumbersComponent } from './components/pages/numbers/numbers.component';
import { OrganizeComponent } from './components/pages/organize/organize.component';

const routes:Routes=[
  {
    path:'',
    component:BasicComponent,
    pathMatch:'full'
  },
  {
    path:'noComun',
    component:NoComunComponent,
  },
  {
    path:'numbers',
    component:NumbersComponent
  },
  {
    path:'organize',
    component:OrganizeComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
