import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';
import {  FormControl,FormGroup,Validators} from '@angular/forms';
import { RegisterService } from '../servies/register.service';
import { ProgressIncService } from '../servies/progress-inc.service';

@Component({
  selector: 'app-incubators',
  templateUrl: './incubators.component.html',
  styleUrls: ['./incubators.component.scss']
})
export class IncubatorsComponent implements OnInit {
beds:any[]=[]
errors:string=''
IncToken:string=localStorage.getItem("UserToken")!
IncInfo=JSON.parse(localStorage.getItem("UserInfo")!)

status:boolean=false
okstatus:boolean=false;
Unstatus:boolean=false;
changeStatusOk(){

this.Unstatus=false;
this.okstatus=true

}
changeStatusUn(){

  this.Unstatus=true;
  this.okstatus=false

}
registerBedForm:FormGroup=new FormGroup({
"typeofBed":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
"condition":new FormControl(null,[Validators.required]),
"costPerDay":new FormControl(null,[Validators.required,Validators.min(100)]),
"incubatorId": new FormControl(this.IncInfo.id)
})
supmitBedsForm(form:FormGroup){
  console.log(form)
this._RegisterService.registerBed(form.value).subscribe(
  (res)=>{
    if(res.isSuccess) {
      this.getIncupator()
      setTimeout(() => {
        
      },2000 );
    }
    else{
      this.errors="cheek Your Forms some Data  Doctor is oready Register"
  
    }
  }
)
}
getIncupator(){
this._GetIncubatorService.getIncurBed(this.IncToken).subscribe((res)=>{
console.log(res)
this.beds=res
})
}
constructor(private _GetIncubatorService:GetIncubatorService,private _RegisterService:RegisterService,private _ProgressIncService:ProgressIncService) {
  this.getIncupator()
}
ngOnInit(): void {
  
}
delete(id:string){
  this._ProgressIncService.deleteBed(id).subscribe((res)=>{
    if(res.isSuccess){
      this.getIncupator()
    }
  })
}
}
