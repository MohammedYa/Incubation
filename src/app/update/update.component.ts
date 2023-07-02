import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgressIncService } from '../servies/progress-inc.service';
import { AuthPersonService } from '../servies/auth-person.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  user:any
  IncToken:string=localStorage.getItem("UserToken")!
  isInc=false;
  succse:boolean=false
  isIncubator(){
    if(JSON.parse(<string>(localStorage.getItem("UserInfo"))).roleName=="User"){
      this.isInc=false
  }
  else{
    this.isInc=true
  }
  }
  
  options: string[] = [
  "Cairo","Alexandria","Aswan","Asyut","Beheira","Beni Suef","Dakahlia","Damietta","Faiyum","Gharbia","Giza"
  ,"Ismailia","Kafr El Sheikh","Luxor","Matruh","Minya","Monufia","New Valley","North Sinai","Port Said","Qalyubia",
  "Qena","Red Sea","Sharqia","Sohag","South Sinai","Suez"
  ];
  UpdateForm:FormGroup=new FormGroup({
    'displayName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'phoneNumber':new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
    'city':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    "gevernorate":new FormControl("Cairo")

  })
  
  supmitUpdateform(form:FormGroup){
  
    if(this.user.roleName=='Incubator'){
     let Incobj={
      email:form.value.email,
      displayName:form.value.displayName,
      phoneNumber:form.value.phoneNumber,
      city:form.value.city,
      gevernorate:form.value.gevernorate
     }
     
      this._ProgressIncService.updateInc(this.user.id,form.value).subscribe(
        (res)=>{
          if(res.isSuccess){
            this.succse=true
            setTimeout(() => {this._AuthPersonService.LogOut()}, 2000);
        }
      },
        (errors)=>{
          console.log("error....."+errors)
        }
      )


    }
    else if(this.user.roleName=='User'){
     let userObj={
       displayName:form.value.displayName,
       phoneNumber:form.value.phoneNumber,
       city:form.value.city,
       email:form.value.email
        } 
       
        this._ProgressIncService.updateUser(this.user.id,userObj).subscribe(
        
        (res)=>{
          if(res.isSuccess){
            this.succse=true
            setTimeout(() => {
              this._AuthPersonService.LogOut()
            }, 2000);
          }
        },
        (errors)=>{
          console.log("error....."+errors)
        }
      )
    }
    
    
    
  }
  update(){
   this.user=JSON.parse(<string>(localStorage.getItem("UserInfo")))
   this.UpdateForm.controls['displayName'].setValue(this.user.displayName)
   this.UpdateForm.controls['phoneNumber'].setValue(this.user.phoneNumber)
   this.UpdateForm.controls['city'].setValue(this.user.city)
   this.UpdateForm.controls['email'].setValue(this.user.email)
  }
  constructor(private _ProgressIncService:ProgressIncService ,private _AuthPersonService:AuthPersonService){
    this.isIncubator()
  }
  ngOnInit(): void {
    this.update()
  }

}
