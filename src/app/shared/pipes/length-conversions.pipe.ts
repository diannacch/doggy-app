import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthConversions'
})
export class LengthConversionsPipe implements PipeTransform {

  transform(value: number, converstion: string): number {
    if (typeof value === 'number') {
      if (!value) {
        return 0;
      }
      switch (converstion) {
        case 'IN-CM': // convert from Inches-Centimeters
          return value * 2.54;
        case 'IN-MM': // convert from Inches-Milimeters
          return value * 25.4;
        case 'CM-FT': // convert from Centimeters-Feet
          return value / 30.48;
        case 'CM-IN': // convert from Centimeters-Inches
          return value / 2.54;
        case 'MM-IN': // convert from Millimeters-Inches
          return value / 25.4;
        case 'CM-M': // convert from Centimeters-Meter
          return value / 100;
        case 'CM-MI': // convert from Centimeters-Miles
          return value / 160934.4;
      }
    }
    return 0;
  }
}
