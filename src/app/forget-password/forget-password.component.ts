import { Component,OnInit } from '@angular/core';
import { Validators,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{

  EmailForm:FormGroup =new FormGroup({
    'Email':new FormControl(null,[Validators.email,Validators.required]),
  })
  
  
  
  supmitEmailForm(){
    console.log(this.EmailForm)
  }
  constructor(){}
  ngOnInit(): void {
    
  }

}
