import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterOnly',
})
export class FirstLetterOnlyPipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase().concat('.');
  }
}
