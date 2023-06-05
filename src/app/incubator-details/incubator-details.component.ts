import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetIncubatorService } from '../get-incubator.service';

@Component({
  selector: 'app-incubator-details',
  templateUrl: './incubator-details.component.html',
  styleUrls: ['./incubator-details.component.scss']
})
export class IncubatorDetailsComponent implements OnInit {
id:string=''
Incubator:any={}
constructor(private _ActivatedRoute:ActivatedRoute ,private _GetIncubatorService:GetIncubatorService) {
this.id= this._ActivatedRoute.snapshot.params['id']
console.log(this.id)
}

ngOnInit(): void {
 
this.getIncubator()
}
getIncubator(){
this._GetIncubatorService.getIncubatorDetails(this.id).subscribe(
  (res)=>{
   this.Incubator=res
  })
}
}
