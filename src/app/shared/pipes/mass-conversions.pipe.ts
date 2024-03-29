import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'massConversions'
})
export class MassConversionsPipe implements PipeTransform {

  transform(value: number, converstion: string): number {
    if (typeof value === 'number') {
      if (!value) {
        return 0;
      }
      switch (converstion) {
        case 'G-KG':
          return value * 0.001;
        case 'G-LB':
          return value * 0.0022046;
        case 'G-OZ':
          return value * 0.035274;
        case 'KG-G':
          return value / 1000;
        case 'KG-LB':
          return value * 2.2046;
        case 'KG-OZ':
          return value / 0.0283495231;
        case 'LB-G':
          return value * 453.59237;
        case 'LB-KG':
          return value / 2.2046;
        case 'LB-OZ':
          return value * 16;
      }
    }
    return 0;
  }

}
