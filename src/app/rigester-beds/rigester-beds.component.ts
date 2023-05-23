import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-rigester-beds',
  templateUrl: './rigester-beds.component.html',
  styleUrls: ['./rigester-beds.component.scss']
})
export class RigesterBedsComponent implements OnInit {




  bedForm=this._FormBuilder.group({
    Morebed:this._FormBuilder.array([
      this._FormBuilder.group({
        number:['',[Validators.required,Validators.min(1)]],
        status:['',[Validators.required]],
        cost:['',[Validators.required,Validators.min(100)]],
      })
    ])
  })
  get beds():FormArray{
    return this.bedForm.get("Morebed")as FormArray
  
  }
  addBed(){
    this.beds.push(
      this._FormBuilder.group({
      number:['',[Validators.required,Validators.min(1)]],
      status:['',[Validators.required]],
      cost:['',[Validators.required,Validators.min(100)]],
    })
    )
    
  }
  supmitBedsForm(form:FormGroup){
    console.log(form.value)
  }
  constructor(private _FormBuilder:FormBuilder){}
  ngOnInit(): void {
    
   
  
  
    
  
  
  
    $("#info").slideUp(0)
    $('#drop').on('click', function(){
      $('#down').toggleClass('fa-chevron-up')
      $('#down').toggleClass('fa-chevron-down')
      $("#info").slideToggle(1000)
     })
  }
  }
