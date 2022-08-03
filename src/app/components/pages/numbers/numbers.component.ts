import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html'
})
export class NumbersComponent implements OnInit {
  pi: number = 3.14159265359;
  por:number = 0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
