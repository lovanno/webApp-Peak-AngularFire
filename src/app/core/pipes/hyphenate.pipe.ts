import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenate'
})
export class HyphenatePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(new RegExp(' ', 'g'), '-');
  }
}