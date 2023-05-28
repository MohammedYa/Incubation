import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../get-incubator.service';

@Component({
  selector: 'app-incubators',
  templateUrl: './incubators.component.html',
  styleUrls: ['./incubators.component.scss']
})
export class IncubatorsComponent implements OnInit {
incupator:any[]=[]
IncToken:string=localStorage.getItem("IncToken")!

getIncupator(){
this._GetIncubatorService.getIncurBed(this.IncToken).subscribe((res)=>{
console.log(res)
})
 }
constructor(private _GetIncubatorService:GetIncubatorService) {}
ngOnInit(): void {
  
}
}
