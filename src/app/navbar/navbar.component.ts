import { Component, OnInit } from '@angular/core';
import { AuthPersonService } from '../servies/auth-person.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  userEmail:string="";
  userName:string="";
  userCity:string="";
  isLoggedIn:boolean=false;
  isUser=false
  isInc=false
  UserData:any;
  TypeOfUser:string=''
  getUser(){
   let user= this._AuthPersonService.userInfo.subscribe(
    (res)=>{
      this.userEmail=res.email
      this.userCity=res.city
      this.userName=res.displayName
 
       
    }
   )
  }
  constructor(private _AuthPersonService:AuthPersonService,private _Router:Router) {
    this.getUser()
  }
  
  LogOut(): void{
    
     this._AuthPersonService.LogOut();
     this.userEmail="";
     this.userCity="";
     this.userName="";
   
  }
  SetDataUser() {
    this.UserData = JSON.parse(localStorage.getItem('UserInfo') || '{}');
    this.userCity=this.UserData.city
    this.userEmail=this.UserData.email
    this.userName=this.UserData.displayName
 
       

  }
  canActiveteInc():boolean{
    this.TypeOfUser=<string>localStorage.getItem("UserTybe")
    if(this.TypeOfUser=="User"){
   return   this.isInc=false
    }
    else{
    return  this.isInc=true 

    }
  }
  canActiveteUser():boolean{
    this.TypeOfUser=<string>localStorage.getItem("UserTybe")
    if(this.TypeOfUser=="User"){
    return  this.isUser=true
    }
    else {
   return   this.isUser=false

    }
  }
   ngOnInit(): void {
   this.SetDataUser() 
    this._AuthPersonService.userData.subscribe(
      ()=>{
        if(this._AuthPersonService.userData.getValue()!=null){
          this.isLoggedIn = true
        }
        else{
          this.isLoggedIn = false
        }
      }
    )
  

   
    
}





}
