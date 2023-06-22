import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Incubators:any,City:any):any[] {
   
 return   Incubators.filter((Inc:any)=>{
      return Inc.city.toLowerCase().includes(City.toLowerCase())
    })

  }

}

