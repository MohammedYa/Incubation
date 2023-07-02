import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetIncubatorService } from '../servies/get-incubator.service';
import { BookProgressService } from '../servies/book-progress.service';

@Component({
  selector: 'app-incubator-details',
  templateUrl: './incubator-details.component.html',
  styleUrls: ['./incubator-details.component.scss']
})
export class IncubatorDetailsComponent implements OnInit {
id:number=0
bedId:any
Incubator:any={}
userInfo=JSON.parse(<string>(localStorage.getItem('UserInfo')))
beds:any=[];
statusbook:boolean=false
constructor(private _ActivatedRoute:ActivatedRoute ,private _GetIncubatorService:GetIncubatorService, private _BookProgressService:BookProgressService) {
this.id= this._ActivatedRoute.snapshot.params['id']
this.getBed(this.id)
}

ngOnInit(): void {
 
this.getIncubator()

}
chooseBed(id:number){
this.bedId=id
this.statusbook=true
}
getIncubator(){
this._GetIncubatorService.getIncubatorDetails(this.id).subscribe(
  (res)=>{
   this.Incubator=res
  })
}
getBed(id:number){
  this._BookProgressService.getBedOfInc(id).subscribe(
    (res)=>{
     
      for(let i=0 ;i<res.length;i++){
        if(res[i].condition.toLowerCase()=="avaliable"){
        this.beds.push(res[i])

        }
      }
    }
  )
  }
createBook(incId:number){
 let BookObj={
  incubatorId:incId,
  userDateId:this.userInfo.id,
  bedid:this.bedId
 } 
  console.log(BookObj)

 this._BookProgressService.bookIncubator(BookObj).subscribe((res)=>{
  if(res.isSuccess){

  }
 })

}
}
