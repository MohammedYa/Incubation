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
docId:string=''
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
    this._RegisterService.registerDoctor(form.value).subscribe(
    (res)=>{
     if(res.isSuccess) {
      this.getDoctors()
      this.restDoctorForm()
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
restDoctorForm(){
  this.registerDoctorForm.reset();
  // $("#AddBed").modal("hide");
}





UpdateDoctorForm:FormGroup=new FormGroup({
  "name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  "phoneNumber":new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
  "specialization":new FormControl(null,[Validators.required,Validators.maxLength(25),Validators.minLength(3)]),
  "incubatorId": new FormControl(this.IncInfo.id)
})
update(id:string){
  for(let i=0;i<this.Doctors.length;i++ ){
    if(this.Doctors[i].id==id){
      this.UpdateDoctorForm.controls['name'].setValue(this.Doctors[i].name)
      this.UpdateDoctorForm.controls['phoneNumber'].setValue(this.Doctors[i].phoneNumber)
      this.UpdateDoctorForm.controls['specialization'].setValue(this.Doctors[i].specialization)
    }

  }
this.docId=id
} 
updateDoctorForm(form:FormGroup){
let docForm={
  name:this.UpdateDoctorForm.value.name,
  phoneNumber:this.UpdateDoctorForm.value.phoneNumber,
  specialization:this.UpdateDoctorForm.value.specialization,
  incubatorId:this.docId
}
this._ProgressIncService.updateDoc(this.docId,docForm).subscribe((res)=>{
  if(res.isSuccess){
    this.getDoctors()
  }
})
}
}
