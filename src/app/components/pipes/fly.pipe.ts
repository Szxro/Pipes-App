import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'FlyPipe',
})
export class FlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'He can Fly' : "He can't Fly";
  }
}
