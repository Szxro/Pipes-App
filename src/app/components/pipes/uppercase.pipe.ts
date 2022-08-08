import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class customUppercasePipe implements PipeTransform {
  transform(arg: string, value: boolean): string {
    return value ? arg.toUpperCase() : arg.toLowerCase();
  }
}
