import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Heroes[], arg: string): Heroes[] {
    switch (arg) {
      case 'name':
        return value.sort((a, b) => (a.name > b.name ? 1 : -1));

      case 'fly':
        return value.sort((a, b) => (a.fly > b.fly ? -1 : 1));

      case 'color':
        return value.sort((a, b) => a.color - b.color);

      default:
        return value;
    }
  }
}
