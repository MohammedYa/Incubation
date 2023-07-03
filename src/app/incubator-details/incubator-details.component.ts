import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetIncubatorService } from '../servies/get-incubator.service';
import { BookProgressService } from '../servies/book-progress.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-incubator-details',
  templateUrl: './incubator-details.component.html',
  styleUrls: ['./incubator-details.component.scss']
})
export class IncubatorDetailsComponent implements OnInit {


ChildNameForm:FormGroup=new FormGroup({
  "childrenOfName":new FormControl("select Child")
})
id:number=0
bedId:any
fail:boolean=false
succse:boolean=false
Incubator:any={}
userInfo=JSON.parse(<string>(localStorage.getItem('UserInfo')))
beds:any=[];
statusbook:boolean=false
children:any=[]
personId:string=(JSON.parse(<string>localStorage.getItem("UserInfo"))).id
userToken:string=localStorage.getItem("UserToken")!
BabyId:any
firstChild: any;
getChild(){
  this._GetIncubatorService.getUserChild(this.userToken).subscribe(
    (res)=>{
      this.children=res
    }
  )
}
constructor(private _ActivatedRoute:ActivatedRoute ,private _GetIncubatorService:GetIncubatorService, private _BookProgressService:BookProgressService) {
this.id= this._ActivatedRoute.snapshot.params['id']
this.getBed(this.id)
this.getChild()
}

ngOnInit(): void {
 
this.getIncubator()
}
chooseBed(id:number){
this.bedId=id
if(this.bedId!=undefined)
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
        if(res[i].condition.toLowerCase()=="available"){
        this.beds.push(res[i])

        }
      }
    }
  )
  }
createBook(incId:number,form:FormGroup){
 let BookObj={
  incubatorId:incId,
  userDateId:this.userInfo.id,
  bedid:this.bedId
 } 
 
 for(let i=0;i<this.children.length;i++){
  if(this.children[i].childName==form.value.childrenOfName){
    this.BabyId=this.children[i].id
  }
 
 }
 
 this._BookProgressService.bookIncubator( this.BabyId,BookObj).subscribe((res)=>{
  if(res.isSuccess){
    this.statusbook=false
    setTimeout(() => {
        this.succse=true
   setTimeout(() => {
      this.succse=false

  }, 2000);
    }, 1000);
    
  }
  else{
   this.fail=true
  }
  
 },(er)=>{
  
    this.statusbook=false
    setTimeout(() => {
       this.fail=true 
   setTimeout(() => {
    this.fail=false 

  }, 1500);
    }, 2500);
    
  }
 
 
 )

}
}
