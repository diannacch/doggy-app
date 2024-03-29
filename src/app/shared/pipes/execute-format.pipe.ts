import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'executeFormat'
})
export class ExecuteFormatPipe implements PipeTransform {

  transform(value: any, formatter?: (value: any) => string): string {
    return formatter ? formatter(value) : value;
  }

}
