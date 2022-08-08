import { Component, OnInit } from '@angular/core';
import { Colors, Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styles: [],
})
export class OrganizeComponent {
  toUpperCase: boolean = true;
  txt: string = '';

  heroes: Heroes[] = [
    {
      name: 'Spiderman',
      fly: false,
      color: Colors.red,
    },
    {
      name: 'SuperMan',
      fly: true,
      color: Colors.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Colors.purple,
    },
    {
      name: 'Robin',
      fly: false,
      color: Colors.yellow,
    },
    {
      name: 'Lobo',
      fly: false,
      color: Colors.white,
    },
  ];

  toogleUppercase() {
    this.toUpperCase = !this.toUpperCase;
  }

  toogle(arg: string) {
    this.txt = arg;
  }
}
