import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';
import {  FormControl,FormGroup,Validators} from '@angular/forms';
import { RegisterService } from '../servies/register.service';
import { ProgressIncService } from '../servies/progress-inc.service';
declare let $:any
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
bedId:string=''
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
})
supmitBedsForm(form:FormGroup){
  let Bed={
    typeofBed:form.value.typeofBed,
    condition:form.value.condition,
    costPerDay:form.value.costPerDay,
    incubatorId:this.IncInfo.id
  }
this._RegisterService.registerBed(Bed).subscribe(
  (res)=>{
    if(res.isSuccess) {
      this.getBed()
      
      setTimeout(() =>this.restBedForm(),2000 );
    }
    else{
      this.errors="cheek Your Forms some Data  Doctor is oready Register"
  
    }
  }
)
}
getBed(){
this._GetIncubatorService.getIncurBed(this.IncToken).subscribe((res)=>{
this.beds=res
})
}
constructor(private _GetIncubatorService:GetIncubatorService,private _RegisterService:RegisterService,private _ProgressIncService:ProgressIncService) {
  this.getBed()
}
ngOnInit(): void {
  
}
delete(id:string){
  this._ProgressIncService.deleteBed(id).subscribe((res)=>{
    if(res.isSuccess){
      this.getBed()
    }
  })
}

status2:boolean=false
okstatus2:boolean=false;
Unstatus2:boolean=false;
changeStatusOk2(){

  this.Unstatus2=false;
  this.okstatus2=true
  
}
 changeStatusUn2(){
  
    this.Unstatus2=true;
    this.okstatus2=false
  
}

updateBedForm:FormGroup=new FormGroup({
  "typeofBed":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  "case":new FormControl(null),
  "costPerDay":new FormControl(null,[Validators.required,Validators.min(100)]),
  "incubatorId": new FormControl(this.IncInfo.id)
  })
update(id:string){
  for(let i=0 ; i<this.beds.length;i++){
    if(this.beds[i].id==id){
      this.updateBedForm.controls['typeofBed'].setValue(this.beds[i].typeofBed)
      this.updateBedForm.controls['costPerDay'].setValue(this.beds[i].costPerDay)


      if(this.beds[i].condition=="available"){
        this.changeStatusOk2()
      }
      else{
        this.changeStatusUn2()
      }

      break;
    }
  }
this.bedId=id
}
upDatebed(updateBedForm:FormGroup){
  let condtionCase="";
  if(this.okstatus2==true&&this.Unstatus2==false){
     condtionCase="available"
  }
  else if(this.okstatus2==false&&this.Unstatus2==true){
    condtionCase="unavailable"

  }
  let bedUpdateForm={
    typeofBed:updateBedForm.value.typeofBed ,
    condition: condtionCase,
    costPerDay: updateBedForm.value.costPerDay,
    incubatorId:this.bedId
  }
  this._ProgressIncService.updateBed(this.bedId,bedUpdateForm).subscribe(
    (res)=>{
      if(res.isSuccess==true){
      this.getBed()
    //   setTimeout(() =>  {
    //     $('#UpDateBed').modal('hide',function(){
    //     $('.modal-backdrop').toggleClass("modelhide");  
    //     })

    
    // }, 2000);
     

      }
    }
  )
}

restBedForm(){
  this.registerBedForm.reset();
  // $("#AddBed").modal("hide");
}
}



