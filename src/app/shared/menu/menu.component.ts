import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  menu!:MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        label:'Pipes Angular',
        icon:'pi pi-code',
        items:[
          {
            label:'Texts and Dates',
            icon:'pi pi-align-left',
            routerLink:'/'
          },
          {
            label:'Numbers',
            icon:'pi pi-dollar',
            routerLink:'numbers'
          },
          {
            label:'No Comun',
            icon:'pi pi-globe',
            routerLink:'noComun'
          },
        ],
      },
      {
        label:'Custom Pipes',
        icon:'pi pi-cog'
      }
    ];
  }

}
