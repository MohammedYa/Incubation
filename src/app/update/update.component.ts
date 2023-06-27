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
  UpdateForm:FormGroup=new FormGroup({
    'displayName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'phoneNumber':new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
    'city':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
  })
  
  supmitUpdateform(form:FormGroup){
    console.log(form.value)
    if(this.user.roleName=='Incubator'){

      this._ProgressIncService.updateInc(this.user.id,form.value).subscribe(
        (res)=>{
          console.log("res"+res)
        }
      )


    }
    else if(this.user.roleName=='User'){
      this._ProgressIncService.updateUser(this.user.id,form.value).subscribe(
        (res)=>{
          console.log("res"+res)
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
   console.log(this.user)
  }
  constructor(private _ProgressIncService:ProgressIncService ,private _AuthPersonService:AuthPersonService){}
  ngOnInit(): void {
    this.update()
  }

}
