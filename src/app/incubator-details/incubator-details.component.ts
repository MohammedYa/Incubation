import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetIncubatorService } from '../servies/get-incubator.service';

@Component({
  selector: 'app-incubator-details',
  templateUrl: './incubator-details.component.html',
  styleUrls: ['./incubator-details.component.scss']
})
export class IncubatorDetailsComponent implements OnInit {
id:string=''
Incubator:any={}
userInfo=JSON.parse(<string>(localStorage.getItem('UserInfo')))
constructor(private _ActivatedRoute:ActivatedRoute ,private _GetIncubatorService:GetIncubatorService) {
this.id= this._ActivatedRoute.snapshot.params['id']
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
createBook(incId:number){
 let BookObj={
  incubatorId:incId,
  userDateId:this.userInfo.id
 }
 console.log(BookObj)
}
}
