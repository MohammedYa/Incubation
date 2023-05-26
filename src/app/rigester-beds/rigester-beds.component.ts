import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

declare var $:any;

@Component({
  selector: 'app-rigester-beds',
  templateUrl: './rigester-beds.component.html',
  styleUrls: ['./rigester-beds.component.scss']
})
export class RigesterBedsComponent implements OnInit {

errors:string=''


  // bedForm=this._FormBuilder.group({
  //   Morebed:this._FormBuilder.array([
  //     this._FormBuilder.group({
  //       number:['',[Validators.required,Validators.min(1)]],
  //       status:['',[Validators.required]],
  //       cost:['',[Validators.required,Validators.min(100)]],
  //     })
  //   ])
  // })
  // get beds():FormArray{
  //   return this.bedForm.get("Morebed")as FormArray
  
  // }
  // addBed(){
  //   this.beds.push(
  //     this._FormBuilder.group({
  //     number:['',[Validators.required,Validators.min(1)]],
  //     status:['',[Validators.required]],
  //     cost:['',[Validators.required,Validators.min(100)]],
  //   })
  //   )
    
  // }
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
    "incubatorId": new FormControl(2)
  })
  supmitBedsForm(form:FormGroup){
    this._RegisterService.registerBed(form.value).subscribe(
      (res)=>{
        if(res.isSuccess) {
          this._Router.navigate(['/login'])
        }
        else{
         this.errors="cheek Your Forms some Data  Doctor is oready Register"
     
        }
      }
    )
  }
  constructor(private _FormBuilder:FormBuilder,private _Router:Router,private _RegisterService:RegisterService){}
  ngOnInit(): void {
    
   
  
  
    
  
  
  
    $("#info").slideUp(0)
    $('#drop').on('click', function(){
      $('#down').toggleClass('fa-chevron-up')
      $('#down').toggleClass('fa-chevron-down')
      $("#info").slideToggle(1000)
     })
  }
  }
