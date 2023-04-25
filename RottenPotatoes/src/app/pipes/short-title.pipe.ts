import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTitle'
})
export class ShortTitlePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value.length > 20) {
      return value.substring(0, 20) + '...';
    } else {
      return value;
    }
  }
}