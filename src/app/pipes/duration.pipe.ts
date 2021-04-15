import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let result : string = '';

    
    if(value){

      let date = new Date(value);
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      let today = new Date();
      today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
      let dateDiff = (date.getTime() - today.getTime())/(1000*3600*24);
      result = dateDiff > 0 ? `${dateDiff} days to go` : dateDiff < 0 ?  `${Math.abs(dateDiff)} days ago` : '';
    
    }
    return result;
  }

}
