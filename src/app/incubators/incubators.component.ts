import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../get-incubator.service';

@Component({
  selector: 'app-incubators',
  templateUrl: './incubators.component.html',
  styleUrls: ['./incubators.component.scss']
})
export class IncubatorsComponent implements OnInit {
beds:any[]=[]
IncToken:string=localStorage.getItem("UserToken")!

getIncupator(){
this._GetIncubatorService.getIncurBed(this.IncToken).subscribe((res)=>{
console.log(res)
this.beds=res
})
 }
constructor(private _GetIncubatorService:GetIncubatorService) {
  this.getIncupator()
}
ngOnInit(): void {
  
}
}
