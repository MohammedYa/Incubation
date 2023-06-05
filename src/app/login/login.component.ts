import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthPersonService } from '../auth-person.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit  {

LoginForm:FormGroup =new FormGroup({
  "email":new FormControl(null,[Validators.email,Validators.required]),
  "password":new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9]{6,}$/)])
})



supmitLoginForm(form:FormGroup){
  
  this._AuthPersonService.loginPerson(form.value).subscribe((res)=>{
      localStorage.setItem("UserToken",res.token)
      this._AuthPersonService.saveUserData()

    if(res.roleName=="User"){
      this._Router.navigate(["/personHome"])
    }
    else if(res.roleName=="Incubator"){

      this._Router.navigate(['/IncubatorHome'])
    }

  })
}
  constructor(private _AuthPersonService:AuthPersonService,private _Router:Router){}

  ngOnInit(): void {
    
  }
  
}
