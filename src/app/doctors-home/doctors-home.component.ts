import { Component, OnInit } from '@angular/core';
import { GetIncubatorService } from '../servies/get-incubator.service';
import {  FormControl,FormGroup,Validators} from '@angular/forms';
import { RegisterService } from '../servies/register.service';
import { ProgressIncService } from '../servies/progress-inc.service';

@Component({
  selector: 'app-doctors-home',
  templateUrl: './doctors-home.component.html',
  styleUrls: ['./doctors-home.component.scss']
})
export class DoctorsHomeComponent implements OnInit {
Doctors:any=[]
IncToken:string=localStorage.getItem("UserToken")!
IncInfo=JSON.parse(localStorage.getItem("UserInfo")!)
errors:string=''
registerDoctorForm:FormGroup=new FormGroup({
  "name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  "phoneNumber":new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
  "specialization":new FormControl(null,[Validators.required,Validators.maxLength(25),Validators.minLength(3)]),
  "incubatorId": new FormControl(this.IncInfo.id)
})
  
  supmitDoctorForm(form:FormGroup){
    console.log(form.value)
    this._RegisterService.registerDoctor(form.value).subscribe(
    (res)=>{
     if(res.isSuccess) {
      
     }
     else{
      this.errors="cheek Your Forms some Data  Doctor is oready Register"
  
     }
    })
  }
constructor(private _GetIncubatorService:GetIncubatorService ,private _RegisterService:RegisterService,private _ProgressIncService:ProgressIncService) {}

getDoctors(){
  this._GetIncubatorService.getIncubatorDoctors(this.IncToken).subscribe(
    (res)=>{
      this.Doctors=res
    }
  )
}
delete(id:string){
  this._ProgressIncService.deleteDoctor(id).subscribe((res)=>{
    if(res.isSuccess){
      this.getDoctors()
    }
  })
}
ngOnInit(): void {
  this.getDoctors()
}

}