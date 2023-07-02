import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Incubators:any,name:any):any[] {
   
 return   Incubators.filter((Inc:any)=>{
      return Inc.name.toLowerCase().includes(name.toLowerCase())
    })

  }

}

