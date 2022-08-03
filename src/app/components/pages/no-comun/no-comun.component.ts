import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comun',
  templateUrl: './no-comun.component.html'
})
export class NoComunComponent implements OnInit {
  
  //i18nSelect
  name:string="Flor";
  genderSubject:string='femenine';
  gender:any={
    "masculine":'Invite him',
    "femenine":"Invite her"
  }
  //i18nPlural
  message:string[]=['Sebastian','Pedro','Pedro','Juanito'];
  messageArr:string[]=[...this.message];
  messageMapping:{[k:string]:string}={
    '=0':'we dont have clients waiting.',
    '=1':'we have some clients waiting.',
    'other':"we have # clients waiting"
  }

  user:object={
    name:'Sebastian',
    age:35,
    address:'Something'
  }

  constructor(private _config:PrimeNGConfig) { }

  ngOnInit(): void {
    this._config.ripple =true;
  }

  changeName():void{
    this.name='Pedro';
    this.genderSubject='masculine';
  }

  popArr(){
    this.message.pop()
  }

}
