import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, visible: boolean = false): unknown {
    return (visible ? '*'.repeat(value.length) : value);
  }

}
