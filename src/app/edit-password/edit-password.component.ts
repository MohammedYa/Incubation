import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit  {

    EditPassForm:FormGroup =new FormGroup({
      'past_Password':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
      'new_Password':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9]{8,}$/)])
    })
    
    
    
    supmitEditPassForm(){
      console.log(this.EditPassForm)
    }
  
  
    constructor(){}
    ngOnInit(): void {
      
    }
  
  }
  
