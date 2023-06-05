import {  Component,OnInit} from '@angular/core';
import {  FormControl,FormGroup,Validators,FormArray,FormBuilder} from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router ,ActivatedRoute} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-rigester-doctors',
  templateUrl: './rigester-doctors.component.html',
  styleUrls: ['./rigester-doctors.component.scss']
})
export class RigesterDoctorsComponent implements OnInit{

errors:string=''

//   registerDoctorForm=this._FormBuilder.group({
    
//     MoreDoc: this._FormBuilder.array([

//       this._FormBuilder.group({
//         name:['',[Validators.email,Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
//         number:['',[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]],
//         Specialization:['',[Validators.required,Validators.maxLength(25),Validators.minLength(3)]],
//         })

//     ])
//   })
//   addDoc(){

    
//     this.members.push(this._FormBuilder.group({
//       name:['',[Validators.email,Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
//       number:['',[Validators.required]],
//       Specialization:['',[Validators.required]],
//       }))
//   }
//   get members():FormArray{
//     return this.registerDoctorForm.get('MoreDoc')as FormArray
//   }


// supmitDoctorForm(form:FormGroup){
  
  
  
//   console.log(this.registerDoctorForm.value)
// }

registerDoctorForm:FormGroup=new FormGroup({
"name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
"phoneNumber":new FormControl(null,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]),
"specialization":new FormControl(null,[Validators.required,Validators.maxLength(25),Validators.minLength(3)]),
"incubatorId": new FormControl(this._ActivatedRoute.snapshot.params['id'])
})

supmitDoctorForm(form:FormGroup){
  
  this._RegisterService.registerDoctor(form.value).subscribe(
  (res)=>{
   if(res.isSuccess) {
     this._Router.navigate(['/bedRegister',this._ActivatedRoute.snapshot.params['id']])
   }
   else{
    this.errors="cheek Your Forms some Data  Doctor is oready Register"

   }
  })
}







constructor(private  _FormBuilder:FormBuilder,private _RegisterService:RegisterService,private _Router:Router,private _ActivatedRoute:ActivatedRoute){}
ngOnInit( ): void {
  


  
  $("#info").slideUp(0)
  $('#drop').on('click', function(){
    $('#down').toggleClass('fa-chevron-up')
    $('#down').toggleClass('fa-chevron-down')
    $("#info").slideToggle(1000)
    })
    




}
}
  
