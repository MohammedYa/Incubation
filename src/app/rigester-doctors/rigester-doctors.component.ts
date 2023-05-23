import {  Component,OnInit} from '@angular/core';
import {  FormControl,FormGroup,Validators,FormArray,FormBuilder} from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-rigester-doctors',
  templateUrl: './rigester-doctors.component.html',
  styleUrls: ['./rigester-doctors.component.scss']
})
export class RigesterDoctorsComponent implements OnInit{


 

  DoctorForm=this._FormBuilder.group({
    
    MoreDoc: this._FormBuilder.array([

      this._FormBuilder.group({
        name:['',[Validators.email,Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
        number:['',[Validators.required]],
        Specialization:['',[Validators.required]],
        })

    ])
  })
  addDoc(){

    
    this.members.push(this._FormBuilder.group({
      name:['',[Validators.email,Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
      number:['',[Validators.required]],
      Specialization:['',[Validators.required]],
      }))
  }
  get members():FormArray{
    return this.DoctorForm.get('MoreDoc')as FormArray
  }


supmitDoctorForm(form:FormGroup){
  
  
  
  console.log(this.DoctorForm.value)
}



constructor(private  _FormBuilder:FormBuilder){}
ngOnInit( ): void {
  


  
  $("#info").slideUp(0)
  $('#drop').on('click', function(){
    $('#down').toggleClass('fa-chevron-up')
    $('#down').toggleClass('fa-chevron-down')
    $("#info").slideToggle(1000)
    })
    




}
}
  
