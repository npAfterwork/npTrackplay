import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'score'
      })
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    if (!value) {
      return '0';
    }
    const numStr = value.toString().split('').reverse().join('');
    let result = '';
    let idx = 1;
    for (const char of numStr) {
      result = char + result;
      if (((idx % 3) === 0) && (idx < numStr.length)) {
        result = '.' + result;
      }
      idx++;
    }
    return result;
  }

}
